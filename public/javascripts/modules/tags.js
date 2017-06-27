import { $, $$ } from './bling';

function tags(shuffler) {
  const tagSelector = '.tags .tag--name';
  if(!shuffler || !tags) return;
  
  attachHandlers($$(tagSelector));

  shuffler.on('click', function(event) {
    shuffleElements($$(tagSelector));
    attachHandlers($$(tagSelector));
    event.preventDefault();
  });

  $('.photo-page__copy').on('click', function(event) {
    event.preventDefault();
    const copyArea = $('.photo-page__textarea');
    copyArea.value = '';
    
    let tagsText = [];
    $$(tagSelector).forEach(el => tagsText.push(el.textContent)); 

    if ( tagsText ) {
      copyArea.value = tagsText.join(' ');
    }

    copyTags(copyArea);
  });
}


function attachHandlers(tags) {
  tags.on('click', function() {
    this.remove();
  });
}

function copyTags(copyArea) {
  copyArea.select();

  try {
    document.execCommand('copy');
    if ( document.selection ) {
      document.selection.empty();
    } else if ( window.getSelection ) {
       window.getSelection().removeAllRanges();
    }
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