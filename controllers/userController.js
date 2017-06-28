const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');
const axios = require('axios');

exports.home = (req, res) => {
  if ( req.isAuthenticated() ) {
    res.redirect('/feed');
  } else {
    res.render('home', { title: 'Home' });
  }
}

exports.getFeed = async (req, res, next) => {
  let media = await instagram_get('users/self/media/recent', req);
  media = parseResponse(media);
  if (!media) return next();
  
  const images = media.map(image => {
    return {
      id: image.id,
      image: image.images.low_resolution.url || image.images.thumbnail.url,
      caption: image.caption.text,
      link: image.link,
      tags: image.tags
    }
  });

  res.render('feed', { title: 'Your Feed', images });
}


exports.getImage = async (req, res, next) => {
  const mediaPromise = instagram_get(`media/${req.params.id}`, req);
  const latestPromise = instagram_get('users/self/media/recent', req, '&count=1');
  let [media, latest] = await Promise.all([ mediaPromise, latestPromise ]);
  media = parseResponse(media);
  latest = parseResponse(latest);
  if (!media || !latest || media.user.id !== req.user.instagramId) return next();

  const image = {
    id: media.id,
    image: media.images.low_resolution.url || media.images.thumbnail.url,
    caption: media.caption.text,
    link: media.link,
    tags: shuffle(media.tags)
  };

  res.render('image', { title: image.caption, image, latestLink: latest[0].link });
}

exports.postComment = async (req, res) => {
  if(!req.body || !req.body.tags) return res.json('');
  let latest = await instagram_get('users/self/media/recent', req, '&count=1');
  latest = parseResponse(latest);
  if (!latest) return next();
  const firstPost = latest[0].id;
  const response = await instagram_post(`media/${firstPost}/comments`, req, '&text=' + req.body.tags);

  res.json(response.data);
}


function instagram_post(url, req, arguments, method) {
  return instagram_get(url, req, arguments, 'post')
}


function instagram_get(url, req, arguments, method) {
  if(!url) return false;
  return axios({
    method: method || 'get',
    url: `https://api.instagram.com/v1/${url}/?access_token=${req.user.instagramToken}${encodeURI(arguments || '').replace(/%20/g, '+')}`,
    responseType: 'json'
  });
}

function shuffle(a) {
  a = a || [];
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}


function parseResponse(res) {
  return (! res || ! res.data || ! res.data.data) ? false : res.data.data;
}