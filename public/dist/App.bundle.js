/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// based on https://gist.github.com/paulirish/12fb951a8b893a454b32

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};

exports.$ = $;
exports.$$ = $$;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bling = __webpack_require__(0);

var tagSelector = '.tags .tag--name';

function tags(shuffler) {

  if (!shuffler || !tags) return;

  attachHandlers();

  shuffler.on('click', function (event) {
    shuffleElements((0, _bling.$$)(tagSelector));
    attachHandlers();
    event.preventDefault();
  });

  (0, _bling.$)('.photo-page__copy').on('click', function (event) {
    event.preventDefault();
    setTags();
    copyTags();
  });

  (0, _bling.$)('.tag--add').on('click', function () {
    if (this.classList.contains('tag--full')) return false;
    var addInput = (0, _bling.$)('[name="tag"]');
    addInput.parentNode.classList.add('show');
    addInput.focus();
  });

  (0, _bling.$)('.new-tag').on('submit', function (event) {
    event.preventDefault();
    this.classList.remove('show');
    var el = document.createElement('li');
    el.classList.add('tag', 'tag--name');
    var tagValue = this.tag.value;
    if (tagValue.indexOf('#') !== 0) {
      tagValue = '#' + tagValue;
    }

    el.appendChild(document.createTextNode(tagValue.toLowerCase()));
    (0, _bling.$)('.tag--add').parentNode.insertBefore(el, (0, _bling.$)('.tag--add'));

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
  var copyArea = (0, _bling.$)('.photo-page__textarea');
  copyArea.value = getTags();
}

function getTags() {
  var tagsText = [];
  (0, _bling.$$)(tagSelector).forEach(function (el) {
    return tagsText.push(el.textContent);
  });

  if (tagsText) {
    return tagsText.join(' ');
  }

  return '';
}

function attachHandlers() {
  (0, _bling.$$)(tagSelector).on('click', function () {
    this.remove();
    checkTags();
    setTags();
  });
}

function checkTags() {
  var tags = (0, _bling.$$)(tagSelector);
  var action = tags.length >= 30 ? 'add' : 'remove';
  (0, _bling.$)('.tag--add').classList[action]('tag--full');
}

function copyTags() {
  var copyArea = (0, _bling.$)('.photo-page__textarea');
  copyArea.select();

  try {
    document.execCommand('copy');
    if (document.selection) {
      document.selection.empty();
    } else if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }

    (0, _bling.$)('.photo-page__copy').classList.add('button--success');
    setTimeout(function () {
      (0, _bling.$)('.photo-page__copy').classList.remove('button--success');
    }, 1000);
  } catch (err) {}
}

// Hat tip: https://j11y.io/javascript/shuffling-the-dom/
function shuffleElements(elems) {

  var allElems = function () {
    var ret = [],
        l = elems.length;
    while (l--) {
      ret[ret.length] = elems[l];
    }
    return ret;
  }();

  var shuffled = function () {
    var l = allElems.length,
        ret = [];
    while (l--) {
      var random = Math.floor(Math.random() * allElems.length),
          randEl = allElems[random].cloneNode(true);
      allElems.splice(random, 1);
      ret[ret.length] = randEl;
    }
    return ret;
  }(),
      l = elems.length;

  while (l--) {
    elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
    elems[l].parentNode.removeChild(elems[l]);
  }
}

exports.default = tags;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _bling = __webpack_require__(0);

var _tags = __webpack_require__(1);

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tags2.default)((0, _bling.$)('.photo-page__shuffle'));

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map