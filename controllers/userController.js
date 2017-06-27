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
  const media = await instagram_get('users/self/media/recent', req);
  if (! media || ! media.data || ! media.data.data) return next();
  
  const images = media.data.data.map(image => {
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
  const media = await instagram_get(`media/${req.params.id}`, req);
  if (! media || ! media.data || ! media.data.data || media.data.data.user.id !== req.user.instagramId) return next();

  const response = media.data.data;
  const image = {
    id: response.id,
    image: response.images.low_resolution.url || response.images.thumbnail.url,
    caption: response.caption.text,
    link: response.link,
    tags: shuffle(response.tags)
  };

  res.format({
    'text/html': () => {
      res.render('image', { title: image.caption, image });
    },
    'application/json': () => {
      res.json(images);
    }
  })
}

exports.postComment = async (req, res) => {
  if(!req.body || !req.body.tags) return res.json('');
  const recent = await instagram_get('users/self/media/recent', req, '&count=1');
  if (! recent || ! recent.data || ! recent.data.data) return next();
  const firstPost = recent.data.data[0].id;
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