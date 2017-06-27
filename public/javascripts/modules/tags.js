import { $, $$ } from './bling';
const tagSelector = '.tags .tag--name';

function tags(shuffler) {
  
  if(!shuffler || !tags) return;
  
  attachHandlers();

  shuffler.on('click', function(event) {
    shuffleElements($$(tagSelector));
    attachHandlers();
    event.preventDefault();
  });

  $('.photo-page__copy').on('click', function(event) {
    event.preventDefault();
    setTags();
    copyTags();
  });

  $('.tag--add').on('click', function() {
    if (this.classList.contains('tag--full')) return false;
    const addInput = $('[name="tag"]');
    addInput.parentNode.classList.add('show');
    addInput.focus();
  });

  $('.new-tag').on('submit', function(event) {
    event.preventDefault();
    this.classList.remove('show');
    const el = document.createElement('li');
    el.classList.add('tag', 'tag--name');
    let tagValue = this.tag.value;
    if (tagValue.indexOf('#') !== 0) {
      tagValue = '#' + tagValue;
    }

    el.appendChild(document.createTextNode(tagValue.toLowerCase()));
    $('.tag--add').parentNode.insertBefore(el, $('.tag--add'));
    
    attachHandlers();
    checkTags();
    this.tag.value = '';
  });

  // $('#comment').on('submit', function(event) {
  //   setTags();
  //   event.preventDefault();
  //   axios({
  //     method: 'post',
  //     url: '/latest',
  //     data: {
  //       tags: getTags()
  //     }
  //   })
  //   .then(res => {
  //     console.log(res.data);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  // });
}


function setTags() {
  const copyArea = $('.photo-page__textarea');
  copyArea.value = getTags();
}


function getTags() {
  let tagsText = [];
  $$(tagSelector).forEach(el => tagsText.push(el.textContent)); 

  if ( tagsText ) {
    return tagsText.join(' ')
  }

  return '';
}


function attachHandlers() {
  $$(tagSelector).on('click', function() {
    this.remove();
    checkTags();
    setTags();
  });
}

function checkTags() {
  const tags = $$(tagSelector);
  const action = tags.length >= 30 ? 'add' : 'remove';
  $('.tag--add').classList[action]('tag--full');
}

function copyTags() {
  const copyArea = $('.photo-page__textarea');
  copyArea.select();

  try {
    document.execCommand('copy');
    if ( document.selection ) {
      document.selection.empty();
    } else if ( window.getSelection ) {
       window.getSelection().removeAllRanges();
    }

    $('.photo-page__copy').classList.add('button--success');
    setTimeout(function() {
      $('.photo-page__copy').classList.remove('button--success');
    }, 1000);
  } catch (err) {

  }
}


// Hat tip: https://j11y.io/javascript/shuffling-the-dom/
function shuffleElements(elems) {
 
  var allElems = (function(){
    var ret = [], l = elems.length;
    while (l--) { ret[ret.length] = elems[l]; }
    return ret;
  })();
 
  var shuffled = (function(){
      var l = allElems.length, ret = [];
      while (l--) {
          var random = Math.floor(Math.random() * allElems.length),
              randEl = allElems[random].cloneNode(true);
          allElems.splice(random, 1);
          ret[ret.length] = randEl;
      }
      return ret; 
  })(), l = elems.length;
 
  while (l--) {
    elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
    elems[l].parentNode.removeChild(elems[l]);
  }
 
}
 

export default tags