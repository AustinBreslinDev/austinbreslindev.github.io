(function(t){var e={};function n(r){if(e[r]){return e[r].exports}var o=e[r]={i:r,l:false,exports:{}};t[r].call(o.exports,o,o.exports,n);o.l=true;return o.exports}n.m=t;n.c=e;n.d=function(t,e,r){if(!n.o(t,e)){Object.defineProperty(t,e,{enumerable:true,get:r})}};n.r=function(t){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(t,"__esModule",{value:true})};n.t=function(t,e){if(e&1)t=n(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r};n.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};n.d(e,"a",e);return e};n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};n.p="";return n(n.s=0)})([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});var r=n(1);var o=n(2);var i=n(4);function a(t){if(document.attachEvent?document.readyState==="complete":document.readyState!=="loading"){t()}else{document.addEventListener("DOMContentLoaded",t)}}a(function(){var t=new o.Common;t.addAllKeyboardShortcut([{description:"Skip to main section",shortcut:"skip"},{description:"Open the keyboard shortcut menu",shortcut:"?"},{description:"Go to nav section",shortcut:"nav"}]);r.initHighlightingOnLoad();if(document.getElementById("emailSendButton")){new i.ContactPage}(function(t){t.getElementById("toggle").addEventListener("click",function(e){t.getElementById("tuckedMenu").classList.toggle("custom-menu-tucked");t.getElementById("toggle").classList.toggle("x")})})(document)});if("serviceWorker"in navigator){navigator.serviceWorker.register("/AustinBreslinDev/service-worker.js").then(function(t){}).catch(function(t){})}},function(t,e){t.exports=hljs},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});var r=n(3);var o=function(){function t(){this.keyboardShortcuts=null;this.keyboardShortcuts=document.getElementById("keyboardShortcuts");this.skipToMainSection=this.skipToMainSection.bind(this);this.showKeyboardShortcutsMenu=this.showKeyboardShortcutsMenu.bind(this);this.hideKeyboardShortcutsMenu=this.hideKeyboardShortcutsMenu.bind(this);this.addKeyboardShortcut=this.addKeyboardShortcut.bind(this);this.addAllKeyboardShortcut=this.addAllKeyboardShortcut.bind(this);this.backToNavigation=this.backToNavigation.bind(this);r.bind("s k i p",this.skipToMainSection);r.bind("?",this.showKeyboardShortcutsMenu);r.bind("n a v",this.backToNavigation)}t.prototype.backToNavigation=function(){var t=document.querySelector("nav.main-navigation");t.focus();t.scrollIntoView()};t.prototype.skipToMainSection=function(){var t=document.querySelector("main");t.focus();t.scrollIntoView()};t.prototype.showKeyboardShortcutsMenu=function(){this.keyboardShortcuts.focus();this.keyboardShortcuts.scrollIntoView();this.keyboardShortcuts.hidden=false;this.keyboardShortcuts.setAttribute("aria-hidden","false");r.bind("escape",this.hideKeyboardShortcutsMenu)};t.prototype.hideKeyboardShortcutsMenu=function(){this.keyboardShortcuts.hidden=true;this.keyboardShortcuts.setAttribute("aria-hidden","true");r.unbind("escape")};t.prototype.addKeyboardShortcut=function(t){var e=document.querySelector("#keyboardShortcutTemplate li");var n=e.querySelector("div");var r=e.querySelector("kbd");n.textContent=t.description;r.textContent=t.shortcut;var o=e.cloneNode();o.innerHTML=e.innerHTML;var i=this.keyboardShortcuts.querySelector("ul");i.appendChild(o)};t.prototype.addAllKeyboardShortcut=function(t){var e=this;var n=function(n,r){setTimeout(function(){e.addKeyboardShortcut(t[n])},1)};for(var r=0,o=t.length;r<o;r++){n(r,o)}this.keyboardShortcuts.setAttribute("aria-busy","false")};return t}();e.Common=o},function(t,e,n){var r;(function(o,i,a){if(!o){return}var u={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"};var s={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};var c={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"};var f={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"};var l;for(var d=1;d<20;++d){u[111+d]="f"+d}for(d=0;d<=9;++d){u[d+96]=d.toString()}function h(t,e,n){if(t.addEventListener){t.addEventListener(e,n,false);return}t.attachEvent("on"+e,n)}function p(t){if(t.type=="keypress"){var e=String.fromCharCode(t.which);if(!t.shiftKey){e=e.toLowerCase()}return e}if(u[t.which]){return u[t.which]}if(s[t.which]){return s[t.which]}return String.fromCharCode(t.which).toLowerCase()}function y(t,e){return t.sort().join(",")===e.sort().join(",")}function v(t){var e=[];if(t.shiftKey){e.push("shift")}if(t.altKey){e.push("alt")}if(t.ctrlKey){e.push("ctrl")}if(t.metaKey){e.push("meta")}return e}function b(t){if(t.preventDefault){t.preventDefault();return}t.returnValue=false}function m(t){if(t.stopPropagation){t.stopPropagation();return}t.cancelBubble=true}function g(t){return t=="shift"||t=="ctrl"||t=="alt"||t=="meta"}function k(){if(!l){l={};for(var t in u){if(t>95&&t<112){continue}if(u.hasOwnProperty(t)){l[u[t]]=t}}}return l}function S(t,e,n){if(!n){n=k()[t]?"keydown":"keypress"}if(n=="keypress"&&e.length){n="keydown"}return n}function w(t){if(t==="+"){return["+"]}t=t.replace(/\+{2}/g,"+plus");return t.split("+")}function M(t,e){var n;var r;var o;var i=[];n=w(t);for(o=0;o<n.length;++o){r=n[o];if(f[r]){r=f[r]}if(e&&e!="keypress"&&c[r]){r=c[r];i.push("shift")}if(g(r)){i.push(r)}}e=S(r,i,e);return{key:r,modifiers:i,action:e}}function _(t,e){if(t===null||t===i){return false}if(t===e){return true}return _(t.parentNode,e)}function K(t){var e=this;t=t||i;if(!(e instanceof K)){return new K(t)}e.target=t;e._callbacks={};e._directMap={};var n={};var r;var o=false;var a=false;var u=false;function s(t){t=t||{};var e=false,r;for(r in n){if(t[r]){e=true;continue}n[r]=0}if(!e){u=false}}function c(t,r,o,i,a,u){var s;var c;var f=[];var l=o.type;if(!e._callbacks[t]){return[]}if(l=="keyup"&&g(t)){r=[t]}for(s=0;s<e._callbacks[t].length;++s){c=e._callbacks[t][s];if(!i&&c.seq&&n[c.seq]!=c.level){continue}if(l!=c.action){continue}if(l=="keypress"&&!o.metaKey&&!o.ctrlKey||y(r,c.modifiers)){var d=!i&&c.combo==a;var h=i&&c.seq==i&&c.level==u;if(d||h){e._callbacks[t].splice(s,1)}f.push(c)}}return f}function f(t,n,r,o){if(e.stopCallback(n,n.target||n.srcElement,r,o)){return}if(t(n,r)===false){b(n);m(n)}}e._handleKey=function(t,e,n){var r=c(t,e,n);var o;var i={};var l=0;var d=false;for(o=0;o<r.length;++o){if(r[o].seq){l=Math.max(l,r[o].level)}}for(o=0;o<r.length;++o){if(r[o].seq){if(r[o].level!=l){continue}d=true;i[r[o].seq]=1;f(r[o].callback,n,r[o].combo,r[o].seq);continue}if(!d){f(r[o].callback,n,r[o].combo)}}var h=n.type=="keypress"&&a;if(n.type==u&&!g(t)&&!h){s(i)}a=d&&n.type=="keydown"};function l(t){if(typeof t.which!=="number"){t.which=t.keyCode}var n=p(t);if(!n){return}if(t.type=="keyup"&&o===n){o=false;return}e.handleKey(n,v(t),t)}function d(){clearTimeout(r);r=setTimeout(s,1e3)}function k(t,e,r,i){n[t]=0;function a(e){return function(){u=e;++n[t];d()}}function c(e){f(r,e,t);if(i!=="keyup"){o=p(e)}setTimeout(s,10)}for(var l=0;l<e.length;++l){var h=l+1===e.length;var y=h?c:a(i||M(e[l+1]).action);S(e[l],y,i,t,l)}}function S(t,n,r,o,i){e._directMap[t+":"+r]=n;t=t.replace(/\s+/g," ");var a=t.split(" ");var u;if(a.length>1){k(t,a,n,r);return}u=M(t,r);e._callbacks[u.key]=e._callbacks[u.key]||[];c(u.key,u.modifiers,{type:u.action},o,t,i);e._callbacks[u.key][o?"unshift":"push"]({callback:n,modifiers:u.modifiers,action:u.action,seq:o,level:i,combo:t})}e._bindMultiple=function(t,e,n){for(var r=0;r<t.length;++r){S(t[r],e,n)}};h(t,"keypress",l);h(t,"keydown",l);h(t,"keyup",l)}K.prototype.bind=function(t,e,n){var r=this;t=t instanceof Array?t:[t];r._bindMultiple.call(r,t,e,n);return r};K.prototype.unbind=function(t,e){var n=this;return n.bind.call(n,t,function(){},e)};K.prototype.trigger=function(t,e){var n=this;if(n._directMap[t+":"+e]){n._directMap[t+":"+e]({},t)}return n};K.prototype.reset=function(){var t=this;t._callbacks={};t._directMap={};return t};K.prototype.stopCallback=function(t,e){var n=this;if((" "+e.className+" ").indexOf(" mousetrap ")>-1){return false}if(_(e,n.target)){return false}return e.tagName=="INPUT"||e.tagName=="SELECT"||e.tagName=="TEXTAREA"||e.isContentEditable};K.prototype.handleKey=function(){var t=this;return t._handleKey.apply(t,arguments)};K.addKeycodes=function(t){for(var e in t){if(t.hasOwnProperty(e)){u[e]=t[e]}}l=null};K.init=function(){var t=K(i);for(var e in t){if(e.charAt(0)!=="_"){K[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e)}}};K.init();o.Mousetrap=K;if(typeof t!=="undefined"&&t.exports){t.exports=K}if(true){!(r=function(){return K}.call(e,n,e,t),r!==a&&(t.exports=r))}})(typeof window!=="undefined"?window:null,typeof window!=="undefined"?document:null)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});var r=function(){function t(){this.messageArea=null;this.sendButton=null;this.form=null;this.form=document.getElementById("contactUsForm");this.sendButton=this.form.querySelector("#emailSendButton");this.messageArea=this.form.querySelector("#message");this.contactUs=this.contactUs.bind(this);this.correctTabIndexForButton=this.correctTabIndexForButton.bind(this);Mousetrap(this.messageArea).bind("tab",this.correctTabIndexForButton);this.form.addEventListener("submit",this.contactUs)}t.prototype.contactUs=function(e){e.preventDefault();var n=atob(t.emailAddress);var r=document.createElement("a");r.href=atob(t.prependEmail)+n+("?Subject="+"Enquiry About AustinBreslinDev"+"&Body="+this.messageArea.value);r.target="_blank";r.click()};t.prototype.correctTabIndexForButton=function(t){var e=this;t.preventDefault();this.sendButton.focus();this.sendButton.scrollIntoView();Mousetrap(this.sendButton).bind("shift+tab",function(t){t.preventDefault();e.messageArea.focus();e.messageArea.scrollIntoView()})};t.emailAddress="YnVja3lhdXN0aW5AZ21haWwuY29t";t.prependEmail="bWFpbHRvOg==";return t}();e.ContactPage=r}]);