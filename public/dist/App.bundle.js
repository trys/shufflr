!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=30)}([function(e,t,n){"use strict";function r(e){return"[object Array]"===E.call(e)}function o(e){return"[object ArrayBuffer]"===E.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function a(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function l(e){return null!==e&&"object"===(void 0===e?"undefined":T(e))}function f(e){return"[object Date]"===E.call(e)}function p(e){return"[object File]"===E.call(e)}function d(e){return"[object Blob]"===E.call(e)}function m(e){return"[object Function]"===E.call(e)}function h(e){return l(e)&&m(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function b(e,t){if(null!==e&&void 0!==e)if("object"===(void 0===e?"undefined":T(e))||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function w(){function e(e,n){"object"===T(t[n])&&"object"===(void 0===e?"undefined":T(e))?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)b(arguments[n],e);return t}function x(e,t,n){return b(t,function(t,r){e[r]=n&&"function"==typeof t?A(t,n):t}),e}var T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A=n(7),E=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isFormData:i,isArrayBufferView:a,isString:s,isNumber:u,isObject:l,isUndefined:c,isDate:f,isFile:p,isBlob:d,isFunction:m,isStream:h,isURLSearchParams:y,isStandardBrowserEnv:v,forEach:b,merge:w,extend:x,trim:g}},function(e,t,n){"use strict";(function(t){function r(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(3):void 0!==t&&(e=n(3)),e}var i=n(0),a=n(26),s=/^\)\]\}',?\n/,u={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:o(),transformRequest:[function(e,t){return a(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(s,"");try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){c.headers[e]={}}),i.forEach(["post","put","patch"],function(e){c.headers[e]=i.merge(u)}),e.exports=c}).call(t,n(8))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=document.querySelector.bind(document),o=document.querySelectorAll.bind(document);Node.prototype.on=window.on=function(e,t){this.addEventListener(e,t)},NodeList.prototype.__proto__=Array.prototype,NodeList.prototype.on=NodeList.prototype.addEventListener=function(e,t){this.forEach(function(n){n.on(e,t)})},t.$=r,t.$$=o},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(18),i=n(21),a=n(27),s=n(25),u=n(6),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(20);e.exports=function(e){return new Promise(function(l,f){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var m=new XMLHttpRequest,h="onreadystatechange",y=!1;if("test"===t.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in m||s(e.url)||(m=new window.XDomainRequest,h="onload",y=!0,m.onprogress=function(){},m.ontimeout=function(){}),e.auth){var g=e.auth.username||"",v=e.auth.password||"";d.Authorization="Basic "+c(g+":"+v)}if(m.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,m[h]=function(){if(m&&(4===m.readyState||y)&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in m?a(m.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?m.response:m.responseText,r={data:n,status:1223===m.status?204:m.status,statusText:1223===m.status?"No Content":m.statusText,headers:t,config:e,request:m};o(l,f,r),m=null}},m.onerror=function(){f(u("Network Error",e)),m=null},m.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),m=null},r.isStandardBrowserEnv()){var b=n(23),w=(e.withCredentials||s(e.url))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;w&&(d[e.xsrfHeaderName]=w)}if("setRequestHeader"in m&&r.forEach(d,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete d[t]:m.setRequestHeader(t,e)}),e.withCredentials&&(m.withCredentials=!0),e.responseType)try{m.responseType=e.responseType}catch(e){if("json"!==m.responseType)throw e}"function"==typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){m&&(m.abort(),f(e),m=null)}),void 0===p&&(p=null),m.send(p)})}}).call(t,n(8))},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";var r=n(17);e.exports=function(e,t,n,o){var i=new Error(e);return r(i,t,n,o)}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function a(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function s(){y&&m&&(y=!1,m.length?h=m.concat(h):g=-1,h.length&&u())}function u(){if(!y){var e=i(s);y=!0;for(var t=h.length;t;){for(m=h,h=[];++g<t;)m&&m[g].run();g=-1,t=h.length}m=null,y=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var f,p,d=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var m,h=[],y=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||y||i(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){e&&o&&(s(),e.on("click",function(e){l((0,f.$$)(h)),s(),e.preventDefault()}),(0,f.$)(".photo-page__copy").on("click",function(e){e.preventDefault(),i(),c()}),(0,f.$)(".tag--add").on("click",function(){if(this.classList.contains("tag--full"))return!1;var e=(0,f.$)('[name="tag"]');e.parentNode.classList.add("show"),e.focus()}),(0,f.$)(".new-tag").on("submit",function(e){e.preventDefault(),this.classList.remove("show");var t=document.createElement("li");t.classList.add("tag","tag--name");var n=this.tag.value;0!==n.indexOf("#")&&(n="#"+n),t.textContent=d.default.sanitize(n).toLowerCase(),(0,f.$)(".tag--add").parentNode.insertBefore(t,(0,f.$)(".tag--add")),s(),u(),this.tag.value=""}))}function i(){(0,f.$)(".photo-page__textarea").value=a()}function a(){var e=[];return(0,f.$$)(h).forEach(function(t){return e.push(t.textContent)}),e?e.join(" "):""}function s(){(0,f.$$)(h).on("click",function(){this.remove(),u(),i()})}function u(){var e=(0,f.$$)(h),t=e.length>=30?"add":"remove";(0,f.$)(".tag--add").classList[t]("tag--full")}function c(){(0,f.$)(".photo-page__textarea").select();try{document.execCommand("copy"),document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges(),(0,f.$)(".photo-page__copy").classList.add("button--success"),setTimeout(function(){(0,f.$)(".photo-page__copy").classList.remove("button--success")},1e3)}catch(e){}}function l(e){for(var t=function(){for(var t=[],n=e.length;n--;)t[t.length]=e[n];return t}(),n=function(){for(var e=t.length,n=[];e--;){var r=Math.floor(Math.random()*t.length),o=t[r].cloneNode(!0);t.splice(r,1),n[n.length]=o}return n}(),r=e.length;r--;)e[r].parentNode.insertBefore(n[r],e[r].nextSibling),e[r].parentNode.removeChild(e[r])}Object.defineProperty(t,"__esModule",{value:!0});var f=n(2),p=n(29),d=r(p),m=n(11),h=(r(m),".tags .tag--name");t.default=o},function(e,t){},function(e,t,n){"use strict";e.exports=n(12)},function(e,t,n){"use strict";function r(e){var t=new a(e),n=i(a.prototype.request,t);return o.extend(n,a.prototype,t),o.extend(n,t),n}var o=n(0),i=n(7),a=n(14),s=n(1),u=r(s);u.Axios=a,u.create=function(e){return r(o.merge(s,e))},u.Cancel=n(4),u.CancelToken=n(13),u.isCancel=n(5),u.all=function(e){return Promise.all(e)},u.spread=n(28),e.exports=u,e.exports.default=u},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(4);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new a,response:new a}}var o=n(1),i=n(0),a=n(15),s=n(16),u=n(24),c=n(22);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(0),i=n(19),a=n(5),s=n(1);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";e.exports=function(e,t,n,r){return e.config=t,n&&(e.code=n),e.response=r,e}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n)):e(n)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),a="",s=0,u=i;o.charAt(0|s)||(u="=",s%1);a+=u.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var a=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,n){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(o){var i="undefined"==typeof window?null:window;void 0!==(r=function(){return o(i)}.call(t,n,t,e))&&(e.exports=r)}(function e(t){var n=function(t){return e(t)};if(n.version="0.8.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,i=r,a=t.DocumentFragment,s=t.HTMLTemplateElement,u=t.Node,c=t.NodeFilter,l=t.NamedNodeMap||t.MozNamedAttrMap,f=t.Text,p=t.Comment,d=t.DOMParser;if("function"==typeof s){var m=r.createElement("template");m.content&&m.content.ownerDocument&&(r=m.content.ownerDocument)}var h=r.implementation,y=r.createNodeIterator,g=r.getElementsByTagName,v=r.createDocumentFragment,b=i.importNode,w={};n.isSupported=void 0!==h.createHTMLDocument&&9!==r.documentMode;var x=function(e,t){for(var n=t.length;n--;)"string"==typeof t[n]&&(t[n]=t[n].toLowerCase()),e[t[n]]=!0;return e},T=function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},A=null,E=x({},["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr","svg","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","switch","symbol","text","textpath","title","tref","tspan","view","vkern","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","#text"]),S=null,L=x({},["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","rows","rowspan","spellcheck","scope","selected","shape","size","span","srclang","start","src","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns","accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mode","min","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","surfacescale","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","y","y1","y2","z","zoomandpan","accent","accentunder","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","display","displaystyle","fence","frame","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),N=null,_=null,k=!0,C=!1,O=!1,R=!1,D=/\{\{[\s\S]*|[\s\S]*\}\}/gm,M=/<%[\s\S]*|[\s\S]*%>/gm,j=!1,F=!1,B=!1,z=!1,H=!0,q=!0,U=x({},["audio","head","math","script","style","svg","video"]),$=x({},["audio","video","img","source"]),P=x({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),I=null,G=r.createElement("form"),W=function(e){"object"!==(void 0===e?"undefined":o(e))&&(e={}),A="ALLOWED_TAGS"in e?x({},e.ALLOWED_TAGS):E,S="ALLOWED_ATTR"in e?x({},e.ALLOWED_ATTR):L,N="FORBID_TAGS"in e?x({},e.FORBID_TAGS):{},_="FORBID_ATTR"in e?x({},e.FORBID_ATTR):{},k=!1!==e.ALLOW_DATA_ATTR,C=e.ALLOW_UNKNOWN_PROTOCOLS||!1,O=e.SAFE_FOR_JQUERY||!1,R=e.SAFE_FOR_TEMPLATES||!1,j=e.WHOLE_DOCUMENT||!1,F=e.RETURN_DOM||!1,B=e.RETURN_DOM_FRAGMENT||!1,z=e.RETURN_DOM_IMPORT||!1,H=!1!==e.SANITIZE_DOM,q=!1!==e.KEEP_CONTENT,R&&(k=!1),B&&(F=!0),e.ADD_TAGS&&(A===E&&(A=T(A)),x(A,e.ADD_TAGS)),e.ADD_ATTR&&(S===L&&(S=T(S)),x(S,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&x(P,e.ADD_URI_SAFE_ATTR),q&&(A["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(e),I=e},V=function(e){n.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},X=function(e,t){n.removed.push({attribute:t.getAttributeNode(e),from:t}),t.removeAttribute(e)},J=function(e){var t,n;try{t=(new d).parseFromString(e,"text/html")}catch(e){}return t&&t.documentElement||(t=h.createHTMLDocument(""),n=t.body,n.parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=e),"function"==typeof t.getElementsByTagName?t.getElementsByTagName(j?"html":"body")[0]:g.call(t,j?"html":"body")[0]},K=function(e){return y.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,function(){return c.FILTER_ACCEPT},!1)},Y=function(e){return!(e instanceof f||e instanceof p)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof l&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},Q=function(e){return"object"===(void 0===u?"undefined":o(u))?e instanceof u:e&&"object"===(void 0===e?"undefined":o(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Z=function(e){var t,r;if(ae("beforeSanitizeElements",e,null),Y(e))return V(e),!0;if(t=e.nodeName.toLowerCase(),ae("uponSanitizeElement",e,{tagName:t,allowedTags:A}),!A[t]||N[t]){if(q&&!U[t]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return V(e),!0}return!O||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(n.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"&lt;")),R&&3===e.nodeType&&(r=e.textContent,r=r.replace(D," "),r=r.replace(M," "),e.textContent!==r&&(n.removed.push({element:e.cloneNode()}),e.textContent=r)),ae("afterSanitizeElements",e,null),!1},ee=/^data-[\-\w.\u00B7-\uFFFF]/,te=/^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,ne=/^(?:\w+script|data):/i,re=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,oe=function(e){var o,i,a,s,u,c,l,f;if(ae("beforeSanitizeAttributes",e,null),c=e.attributes){for(l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:S},f=c.length;f--;)if(o=c[f],i=o.name,a=o.value.trim(),s=i.toLowerCase(),l.attrName=s,l.attrValue=a,l.keepAttr=!0,ae("uponSanitizeAttribute",e,l),a=l.attrValue,"name"===s&&"IMG"===e.nodeName&&c.id?(u=c.id,c=Array.prototype.slice.apply(c),X("id",e),X(i,e),c.indexOf(u)>f&&e.setAttribute("id",u.value)):("id"===i&&e.setAttribute(i,""),X(i,e)),l.keepAttr&&(!H||"id"!==s&&"name"!==s||!(a in t||a in r||a in G))){if(R&&(a=a.replace(D," "),a=a.replace(M," ")),k&&ee.test(s));else{if(!S[s]||_[s])continue;if(P[s]);else if(te.test(a.replace(re,"")));else if("src"===s&&0===a.indexOf("data:")&&$[e.nodeName.toLowerCase()]);else if(C&&!ne.test(a.replace(re,"")));else if(a)continue}try{e.setAttribute(i,a),n.removed.pop()}catch(e){}}ae("afterSanitizeAttributes",e,null)}},ie=function e(t){var n,r=K(t);for(ae("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ae("uponSanitizeShadowNode",n,null),Z(n)||(n.content instanceof a&&e(n.content),oe(n));ae("afterSanitizeShadowDOM",t,null)},ae=function(e,t,r){w[e]&&w[e].forEach(function(e){e.call(n,t,r,I)})};return n.sanitize=function(e,r){var s,c,l,f,p,d;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Q(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");e=e.toString()}if(!n.isSupported){if("object"===o(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Q(e))return t.toStaticHTML(e.outerHTML)}return e}if(W(r),n.removed=[],e instanceof u)s=J("\x3c!--\x3e"),c=s.ownerDocument.importNode(e,!0),1===c.nodeType&&"BODY"===c.nodeName?s=c:s.appendChild(c);else{if(!F&&!j&&-1===e.indexOf("<"))return e;if(!(s=J(e)))return F?null:""}for(p=K(s);l=p.nextNode();)3===l.nodeType&&l===f||Z(l)||(l.content instanceof a&&ie(l.content),oe(l),f=l);if(F){if(B)for(d=v.call(s.ownerDocument);s.firstChild;)d.appendChild(s.firstChild);else d=s;return z&&(d=b.call(i,d,!0)),d}return j?s.outerHTML:s.innerHTML},n.addHook=function(e,t){"function"==typeof t&&(w[e]=w[e]||[],w[e].push(t))},n.removeHook=function(e){w[e]&&w[e].pop()},n.removeHooks=function(e){w[e]&&(w[e]=[])},n.removeAllHooks=function(){w={}},n})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(10);var o=n(2);(0,r(n(9)).default)((0,o.$)(".photo-page__shuffle"))}]);