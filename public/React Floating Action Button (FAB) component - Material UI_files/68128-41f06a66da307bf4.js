(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68128],{746586:function(e,t,n){"use strict";var r=n(958632).default,u=n(361244).default,o=n(626868),i=n(387963);o(t,"__esModule",{value:!0}),function(e,t){for(var n in t)o(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return d},default:function(){return c}});var a=n(427597),l=(n(470079),a._(n(624683)));function s(e){return{default:(null==e?void 0:e.default)||e}}function d(e,t){return delete t.webpack,delete t.modules,e(t)}function c(e,t){var n=l.default,r={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};e instanceof i?r.loader=function(){return e}:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=u(u({},r),e));var o=(r=u(u({},r),t)).loader;return(r.loadableGenerated&&(r=u(u({},r),r.loadableGenerated),delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n(u(u({},r),{},{loader:function(){return null!=o?o().then(s):i.resolve(s(function(){return null}))}})):(delete r.webpack,delete r.modules,d(n,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(o(t.default,"__esModule",{value:!0}),r(t.default,t),e.exports=t.default)},818181:function(e,t,n){"use strict";var r=n(626868);r(t,"__esModule",{value:!0}),r(t,"LoadableContext",{enumerable:!0,get:function(){return u}});var u=n(427597)._(n(470079)).default.createContext(null)},624683:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/var r=n(361244).default,u=n(791536).default,o=n(579152).default,i=n(181813).default,a=n(958632).default,l=n(626868),s=n(557428),d=n(216217),c=n(387963);l(t,"__esModule",{value:!0}),l(t,"default",{enumerable:!0,get:function(){return w}});var f=n(427597)._(n(470079)),h=n(818181),p=[],v=[],_=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var b=function(){function e(t,n){u(this,e),this._loadFn=t,this._opts=n,this._callbacks=new d,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=r(r({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function m(e){return function(e,t){var n=a({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function u(){if(!r){var t=new b(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!_){var o=n.webpack?n.webpack():n.modules;o&&v.push(function(e){var t,n=i(o);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(e.includes(r))return u()}}catch(e){n.e(e)}finally{n.f()}})}function l(e,t){u(),(o=f.default.useContext(h.LoadableContext))&&s(n.modules)&&n.modules.forEach(function(e){o(e)});var o,i=f.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return f.default.useImperativeHandle(t,function(){return{retry:r.retry}},[]),f.default.useMemo(function(){var t;return i.loading||i.error?f.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?f.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return l.preload=function(){return u()},l.displayName="LoadableComponent",f.default.forwardRef(l)}(y,e)}function g(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return c.all(n).then(function(){if(e.length)return g(e,t)})}m.preloadAll=function(){return new c(function(e,t){g(p).then(e,t)})},m.preloadReady=function(e){return void 0===e&&(e=[]),new c(function(t){var n=function(){return _=!0,t()};g(v,e).then(n,n)})},window.__NEXT_PRELOADREADY=m.preloadReady;var w=m},835971:function(e,t,n){e.exports=n(746586)},957997:function(e,t,n){"use strict";n.d(t,{YD:function(){return s}});var r=n(470079),u=Object.defineProperty,o=new Map,i=new WeakMap,a=0,l=void 0;function s({threshold:e,delay:t,trackVisibility:n,rootMargin:u,root:s,triggerOnce:d,skip:c,initialInView:f,fallbackInView:h,onChange:p}={}){var v;let[_,y]=r.useState(null),b=r.useRef(),[m,g]=r.useState({inView:!!f,entry:void 0});b.current=p,r.useEffect(()=>{let r;if(!c&&_)return r=function(e,t,n={},r=l){if(void 0===window.IntersectionObserver&&void 0!==r){let u=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}let{id:u,observer:s,elements:d}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return`${t}_${"root"===t?(n=e.root)?(i.has(n)||(a+=1,i.set(n,a.toString())),i.get(n)):"0":e[t]}`}).toString(),n=o.get(t);if(!n){let r;let u=new Map,i=new IntersectionObserver(t=>{t.forEach(t=>{var n;let o=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=u.get(t.target))||n.forEach(e=>{e(o,t)})})},e);r=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:u},o.set(t,n)}return n}(n),c=d.get(e)||[];return d.has(e)||d.set(e,c),c.push(t),s.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(d.delete(e),s.unobserve(e)),0===d.size&&(s.disconnect(),o.delete(u))}}(_,(e,t)=>{g({inView:e,entry:t}),b.current&&b.current(e,t),t.isIntersecting&&d&&r&&(r(),r=void 0)},{root:s,rootMargin:u,threshold:e,trackVisibility:n,delay:t},h),()=>{r&&r()}},[Array.isArray(e)?e.toString():e,_,s,u,d,c,n,h,t]);let w=null==(v=m.entry)?void 0:v.target,k=r.useRef();_||!w||d||c||k.current===w||(k.current=w,g({inView:!!f,entry:void 0}));let C=[y,m.inView,m.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}r.Component}}]);