(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={modal_overlay:"styles_modal_overlay__3QBwP",modal_content:"styles_modal_content__1akjl",close_button:"styles_close_button__3eN09",modal_item_container:"styles_modal_item_container__25ThR",modal_item:"styles_modal_item__3hC4D",modal_span:"styles_modal_span__7N0sH",img:"styles_img__1NOOV",modal_content_container:"styles_modal_content_container__22ud0"}},18:function(e,t,n){},2:function(e,t,n){e.exports={movie_card:"styles_movie_card__1OWOU",img:"styles_img__xpE91",movie_info:"styles_movie_info__1PyW4",movie_title:"styles_movie_title__1hxlG",span:"styles_span__3fNqF",movie_year:"styles_movie_year__eBcyW",movie_rating:"styles_movie_rating__13DSo"}},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),i=n.n(o),c=(n(18),n(20),n(6)),l=n(3),s=n(2),u=n.n(s),m=n(1),f=n.n(m),p=function(e){return a.a.createElement("div",{className:f.a.modal_overlay},a.a.createElement("div",{className:f.a.modal_content},a.a.createElement("button",{className:f.a.close_button,onClick:e.onCloseModal},"x"),a.a.createElement("div",{className:f.a.modal_content_container},a.a.createElement("img",{className:f.a.img,src:"https://image.tmdb.org/t/p/w500/".concat(e.detail.poster_path),alt:e.detail.title}),a.a.createElement("div",{className:f.a.modal_item_container},a.a.createElement("div",{className:f.a.modal_item},a.a.createElement("span",{className:f.a.modal_span},"Original title:")," ",e.detail.title),a.a.createElement("div",{className:f.a.modal_item},a.a.createElement("span",{className:f.a.modal_span},"Tagline:")," ",e.detail.tagline),a.a.createElement("div",{className:f.a.modal_item},a.a.createElement("span",{className:f.a.modal_span},"Genre:")," ",e.detail.genres.map(function(e){return e.name}).join(", ")),a.a.createElement("div",{className:f.a.modal_item},a.a.createElement("span",{className:f.a.modal_span},"Duration: "),e.detail.runtime," minutes")))))};var h=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(null),s=Object(l.a)(c,2),m=s[0],f=s[1];return console.log(m),a.a.createElement("div",{className:u.a.movie_card,onClick:function(){fetch("https://api.themoviedb.org/3/movie/".concat(e.movie.id,"?api_key=ac1a5cb6e5a08bee9bfb4ea291df63fe")).then(function(e){return e.json()}).then(function(e){f(e),i(!0)})}},a.a.createElement("div",{className:u.a.movie_img},a.a.createElement("img",{className:u.a.img,src:"https://image.tmdb.org/t/p/w500/".concat(e.poster),alt:e.title})),a.a.createElement("div",{className:u.a.movie_title},e.title),a.a.createElement("div",{className:u.a.movie_info},a.a.createElement("div",{className:u.a.movie_year},a.a.createElement("span",{className:u.a.span},"Year:")," ",e.year),a.a.createElement("div",{className:u.a.movie_rating},a.a.createElement("span",{className:u.a.span},"Rating:")," ",e.rating)),o&&a.a.createElement(p,{detail:m,onCloseModal:function(e){e.stopPropagation(),i(!1)}}))},d=n(7),v=n.n(d),_=n(8),y=n.n(_),g=function(e){var t=e.movies;return a.a.createElement("div",{className:v.a.movie_list},t.map(function(e){return a.a.createElement(h,{key:e.id,title:e.original_title,year:y()(e.release_date).subtract(10,"days").calendar(),rating:e.vote_average,poster:e.poster_path,movie:e})}))};function E(){E=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new j(a||[]);return r(i,"_invoke",{value:w(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var m={};function f(){}function p(){}function h(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,_=v&&v(v(L([])));_&&_!==t&&n.call(_,o)&&(d=_);var y=h.prototype=f.prototype=Object.create(d);function g(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=N(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function N(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=h,r(y,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var b=function(e){var t=Object(r.useState)([]),n=Object(l.a)(t,2),o=n[0],i=n[1],s=Object(r.useState)("now_playing"),u=Object(l.a)(s,2),m=u[0],f=u[1];Object(r.useEffect)(function(){!function(){var e=Object(c.a)(E().mark(function e(){var t,n;return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(m,"?api_key=ac1a5cb6e5a08bee9bfb4ea291df63fe"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),i(n.results);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[m]);var p=function(e){f(e)};return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"categories"},a.a.createElement("div",{className:"categories_title"},"MovieApp"),a.a.createElement("button",{className:"categories_item",onClick:function(){return p("now_playing")}},"Now Playing"),a.a.createElement("button",{className:"categories_item",onClick:function(){return p("popular")}},"Popular"),a.a.createElement("button",{className:"categories_item",onClick:function(){return p("top_rated")}},"Top Rated"),a.a.createElement("button",{className:"categories_item",onClick:function(){return p("upcoming")}},"Upcoming")),a.a.createElement(g,{movies:o}))};var w=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(b,null))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)))},7:function(e,t,n){e.exports={movie_list:"styles_movie_list__-pjHq"}},9:function(e,t,n){e.exports=n(26)}},[[9,2,1]]]);
//# sourceMappingURL=main.c779c66d.chunk.js.map