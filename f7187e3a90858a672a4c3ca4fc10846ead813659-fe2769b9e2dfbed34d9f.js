(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1uty":function(e,t,n){"use strict";function i(e){return e._erd}e.exports={initState:function(e){return e._erd={},i(e)},getState:i,cleanState:function(e){delete e._erd}}},"7sSR":function(e,t,n){"use strict";var i=n("t3DW").forEach,r=n("W+U1"),o=n("Sa1T"),a=n("LO96"),s=n("UFhH"),l=n("q7TX"),c=n("GOnX"),d=n("wnTG"),u=n("1uty"),h=n("GNKm"),f=n("yUZ2");function p(e){return Array.isArray(e)||void 0!==e.length}function m(e){if(Array.isArray(e))return e;var t=[];return i(e,(function(e){t.push(e)})),t}function v(e){return e&&1===e.nodeType}function g(e,t,n){var i=e[t];return null==i&&void 0!==n?n:i}e.exports=function(e){var t;if((e=e||{}).idHandler)t={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var n=a(),b=s({idGenerator:n,stateHandler:u});t=b}var y=e.reporter;y||(y=l(!1===y));var w=g(e,"batchProcessor",d({reporter:y})),S={};S.callOnAdd=!!g(e,"callOnAdd",!0),S.debug=!!g(e,"debug",!1);var E,x=o(t),O=r({stateHandler:u}),z=g(e,"strategy","object"),k=g(e,"important",!1),D={reporter:y,batchProcessor:w,stateHandler:u,idHandler:t,important:k};if("scroll"===z&&(c.isLegacyOpera()?(y.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),z="object"):c.isIE(9)&&(y.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),z="object")),"scroll"===z)E=f(D);else{if("object"!==z)throw new Error("Invalid strategy name: "+z);E=h(D)}var j={};return{listenTo:function(e,n,r){function o(e){var t=x.get(e);i(t,(function(t){t(e)}))}function a(e,t,n){x.add(t,n),e&&n(t)}if(r||(r=n,n=e,e={}),!n)throw new Error("At least one element required.");if(!r)throw new Error("Listener required.");if(v(n))n=[n];else{if(!p(n))return y.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");n=m(n)}var s=0,l=g(e,"callOnAdd",S.callOnAdd),c=g(e,"onReady",(function(){})),d=g(e,"debug",S.debug);i(n,(function(e){u.getState(e)||(u.initState(e),t.set(e));var h=t.get(e);if(d&&y.log("Attaching listener to element",h,e),!O.isDetectable(e))return d&&y.log(h,"Not detectable."),O.isBusy(e)?(d&&y.log(h,"System busy making it detectable"),a(l,e,r),j[h]=j[h]||[],void j[h].push((function(){++s===n.length&&c()}))):(d&&y.log(h,"Making detectable..."),O.markBusy(e,!0),E.makeDetectable({debug:d,important:k},e,(function(e){if(d&&y.log(h,"onElementDetectable"),u.getState(e)){O.markAsDetectable(e),O.markBusy(e,!1),E.addListener(e,o),a(l,e,r);var t=u.getState(e);if(t&&t.startSize){var f=e.offsetWidth,p=e.offsetHeight;t.startSize.width===f&&t.startSize.height===p||o(e)}j[h]&&i(j[h],(function(e){e()}))}else d&&y.log(h,"Element uninstalled before being detectable.");delete j[h],++s===n.length&&c()})));d&&y.log(h,"Already detecable, adding listener."),a(l,e,r),s++})),s===n.length&&c()},removeListener:x.removeListener,removeAllListeners:x.removeAllListeners,uninstall:function(e){if(!e)return y.error("At least one element is required.");if(v(e))e=[e];else{if(!p(e))return y.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=m(e)}i(e,(function(e){x.removeAllListeners(e),E.uninstall(e),u.cleanState(e)}))},initDocument:function(e){E.initDocument&&E.initDocument(e)}}}},GNKm:function(e,t,n){"use strict";var i=n("GOnX");e.exports=function(e){var t=(e=e||{}).reporter,n=e.batchProcessor,r=e.stateHandler.getState;if(!t)throw new Error("Missing required dependency: reporter.");function o(t){var n=e.important?" !important; ":"; ";return(t.join(n)+n).trim()}function a(e){return r(e).object}return{makeDetectable:function(e,a,s){s||(s=a,a=e,e=null),(e=e||{}).debug,i.isIE(8)?s(a):function(a,s){var l=o(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),c=!1,d=window.getComputedStyle(a),u=a.offsetWidth,h=a.offsetHeight;function f(){function n(){if("static"===d.position){a.style.setProperty("position","relative",e.important?"important":"");var n=function(t,n,i,r){var o=i[r];"auto"!==o&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(o)&&(t.warn("An element that is positioned static has style."+r+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+r+" will be set to 0. Element: ",n),n.style.setProperty(r,"0",e.important?"important":""))};n(t,a,d,"top"),n(t,a,d,"right"),n(t,a,d,"bottom"),n(t,a,d,"left")}}""!==d.position&&(n(),c=!0);var o=document.createElement("object");o.style.cssText=l,o.tabIndex=-1,o.type="text/html",o.setAttribute("aria-hidden","true"),o.onload=function(){c||n(),function e(t,n){if(!t.contentDocument){var i=r(t);return i.checkForObjectDocumentTimeoutId&&window.clearTimeout(i.checkForObjectDocumentTimeoutId),void(i.checkForObjectDocumentTimeoutId=setTimeout((function(){i.checkForObjectDocumentTimeoutId=0,e(t,n)}),100))}n(t.contentDocument)}(this,(function(e){s(a)}))},i.isIE()||(o.data="about:blank"),r(a)&&(a.appendChild(o),r(a).object=o,i.isIE()&&(o.data="about:blank"))}r(a).startSize={width:u,height:h},n?n.add(f):f()}(a,s)},addListener:function(e,t){function n(){t(e)}if(i.isIE(8))r(e).object={proxy:n},e.attachEvent("onresize",n);else{var o=a(e);if(!o)throw new Error("Element is not detectable by this strategy.");o.contentDocument.defaultView.addEventListener("resize",n)}},uninstall:function(e){if(r(e)){var t=a(e);t&&(i.isIE(8)?e.detachEvent("onresize",t.proxy):e.removeChild(t),r(e).checkForObjectDocumentTimeoutId&&window.clearTimeout(r(e).checkForObjectDocumentTimeoutId),delete r(e).object)}}}}},GOnX:function(e,t,n){"use strict";var i=e.exports={};i.isIE=function(e){return(-1!==(t=navigator.userAgent.toLowerCase()).indexOf("msie")||-1!==t.indexOf("trident")||-1!==t.indexOf(" edge/"))&&(!e||e===function(){var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(n[0]);return e>4?e:void 0}());var t},i.isLegacyOpera=function(){return!!window.opera}},IZOP:function(e,t,n){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=n("q1tI"),o=i(r),a=i(n("i8i4")),s=i(n("QLaP")),l=n("ehos"),c=i(n("7sSR")),d=i(n("Gytx"));function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?E(e):t}var O={};function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"scroll";return O[e]||(O[e]=c({strategy:e})),O[e]}var k="react-sizeme: an error occurred whilst stopping to listen to node size changes",D={monitorWidth:!0,monitorHeight:!1,monitorPosition:!1,refreshRate:16,refreshMode:"throttle",noPlaceholder:!1,resizeDetectorStrategy:"scroll"};function j(e){return e.displayName||e.name||"Component"}var C=function(e){function t(){return u(this,t),x(this,y(t).apply(this,arguments))}return b(t,e),f(t,[{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);function T(e){var t=e.className,n=e.style,i={};return t||n?(t&&(i.className=t),n&&(i.style=n)):i.style={width:"100%",height:"100%"},o.createElement("div",i)}p(C,"displayName","SizeMeReferenceWrapper"),T.displayName="SizeMePlaceholder";var P=function(e){function t(t){var n=t.explicitRef,i=t.className,r=t.style,a=t.size,s=t.disablePlaceholder,l=(t.onSize,S(t,["explicitRef","className","style","size","disablePlaceholder","onSize"])),c=(null==a||null==a.width&&null==a.height&&null==a.position)&&!s,d={className:i,style:r};null!=a&&(d.size=a);var u=c?o.createElement(T,{className:i,style:r}):o.createElement(e,m({},d,l));return o.createElement(C,{ref:n},u)}return t.displayName="SizeMeRenderer(".concat(j(e),")"),t};function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=e.monitorWidth,n=void 0===t?D.monitorWidth:t,i=e.monitorHeight,r=void 0===i?D.monitorHeight:i,c=e.monitorPosition,d=void 0===c?D.monitorPosition:c,h=e.refreshRate,v=void 0===h?D.refreshRate:h,w=e.refreshMode,S=void 0===w?D.refreshMode:w,O=e.noPlaceholder,C=void 0===O?D.noPlaceholder:O,T=e.resizeDetectorStrategy,N=void 0===T?D.resizeDetectorStrategy:T;s(n||r||d,'You have to monitor at least one of the width, height, or position when using "sizeMe"'),s(v>=16,"It is highly recommended that you don't put your refreshRate lower than 16 as this may cause layout thrashing."),s("throttle"===S||"debounce"===S,'The refreshMode should have a value of "throttle" or "debounce"');var _="throttle"===S?l.throttle:l.debounce;return function(e){var t=P(e),i=function(e){function i(){var e,t;u(this,i);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return p(E(t=x(this,(e=y(i)).call.apply(e,[this].concat(a)))),"domEl",null),p(E(t),"state",{width:void 0,height:void 0,position:void 0}),p(E(t),"uninstall",(function(){if(t.domEl){try{t.detector.uninstall(t.domEl)}catch(e){console.warn(k)}t.domEl=null}})),p(E(t),"determineStrategy",(function(e){e.onSize?(t.callbackState||(t.callbackState=g({},t.state)),t.strategy="callback"):t.strategy="render"})),p(E(t),"strategisedSetState",(function(e){"callback"===t.strategy&&(t.callbackState=e,t.props.onSize(e)),t.setState(e)})),p(E(t),"strategisedGetState",(function(){return"callback"===t.strategy?t.callbackState:t.state})),p(E(t),"refCallback",(function(e){t.element=e})),p(E(t),"hasSizeChanged",(function(e,t){var i=e,o=t,a=i.position||{},s=o.position||{};return n&&i.width!==o.width||r&&i.height!==o.height||d&&(a.top!==s.top||a.left!==s.left||a.bottom!==s.bottom||a.right!==s.right)})),p(E(t),"checkIfSizeChanged",_(v,(function(e){var i=e.getBoundingClientRect(),o=i.width,a=i.height,s=i.right,l=i.left,c=i.top,u=i.bottom,h={width:n?o:null,height:r?a:null,position:d?{right:s,left:l,top:c,bottom:u}:null};t.hasSizeChanged(t.strategisedGetState(),h)&&t.strategisedSetState(h)}))),t}return b(i,e),f(i,[{key:"componentDidMount",value:function(){this.detector=z(N),this.determineStrategy(this.props),this.handleDOMNode()}},{key:"componentDidUpdate",value:function(){this.determineStrategy(this.props),this.handleDOMNode()}},{key:"componentWillUnmount",value:function(){this.hasSizeChanged=function(){},this.checkIfSizeChanged=function(){},this.uninstall()}},{key:"handleDOMNode",value:function(){var e=this.element&&a.findDOMNode(this.element);e?this.domEl?(this.domEl.isSameNode&&!this.domEl.isSameNode(e)||this.domEl!==e)&&(this.uninstall(),this.domEl=e,this.detector.listenTo(this.domEl,this.checkIfSizeChanged)):(this.domEl=e,this.detector.listenTo(this.domEl,this.checkIfSizeChanged)):this.uninstall()}},{key:"render",value:function(){var e=A.enableSSRBehaviour||A.noPlaceholders||C||"callback"===this.strategy,n=g({},this.state);return o.createElement(t,m({explicitRef:this.refCallback,size:"callback"===this.strategy?null:n,disablePlaceholder:e},this.props))}}]),i}(o.Component);return p(i,"displayName","SizeMe(".concat(j(e),")")),i.WrappedComponent=e,i}}A.enableSSRBehaviour=!1,A.noPlaceholders=!1;var N=function(e){function t(e){var n;u(this,t),p(E(n=x(this,y(t).call(this,e))),"createComponent",(function(e){n.SizeAware=A(e)((function(e){return e.children}))})),p(E(n),"onSize",(function(e){return n.setState({size:e})}));e.children,e.render;var i=S(e,["children","render"]);return n.createComponent(i),n.state={size:{width:void 0,height:void 0}},n}return b(t,e),f(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=(t.children,t.render,S(t,["children","render"])),i=(e.children,e.render,S(e,["children","render"]));d(n,i)||this.createComponent(n)}},{key:"render",value:function(){var e=this.SizeAware,t=this.props.children||this.props.render;return o.createElement(e,{onSize:this.onSize},t({size:this.state.size}))}}]),t}(r.Component);p(N,"defaultProps",{children:void 0,render:void 0}),A.SizeMe=N,A.withSize=A,e.exports=A},LO96:function(e,t,n){"use strict";e.exports=function(){var e=1;return{generate:function(){return e++}}}},Sa1T:function(e,t,n){"use strict";e.exports=function(e){var t={};function n(n){var i=e.get(n);return void 0===i?[]:t[i]||[]}return{get:n,add:function(n,i){var r=e.get(n);t[r]||(t[r]=[]),t[r].push(i)},removeListener:function(e,t){for(var i=n(e),r=0,o=i.length;r<o;++r)if(i[r]===t){i.splice(r,1);break}},removeAllListeners:function(e){var t=n(e);t&&(t.length=0)}}}},UFhH:function(e,t,n){"use strict";e.exports=function(e){var t=e.idGenerator,n=e.stateHandler.getState;return{get:function(e){var t=n(e);return t&&void 0!==t.id?t.id:null},set:function(e){var i=n(e);if(!i)throw new Error("setId required the element to have a resize detection state.");var r=t.generate();return i.id=r,r}}}},UL9e:function(e,t,n){"use strict";(e.exports={}).getOption=function(e,t,n){var i=e[t];if(null==i&&void 0!==n)return n;return i}},"W+U1":function(e,t,n){"use strict";e.exports=function(e){var t=e.stateHandler.getState;return{isDetectable:function(e){var n=t(e);return n&&!!n.isDetectable},markAsDetectable:function(e){t(e).isDetectable=!0},isBusy:function(e){return!!t(e).busy},markBusy:function(e,n){t(e).busy=!!n}}}},ehos:function(e,t,n){!function(e){"use strict";function t(e,t,n,i){var r,o=!1,a=0;function s(){r&&clearTimeout(r)}function l(){for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];var u=this,h=Date.now()-a;function f(){a=Date.now(),n.apply(u,c)}function p(){r=void 0}o||(i&&!r&&f(),s(),void 0===i&&h>e?f():!0!==t&&(r=setTimeout(i?p:f,void 0===i?e-h:e)))}return"boolean"!=typeof t&&(i=n,n=t,t=void 0),l.cancel=function(){s(),o=!0},l}e.debounce=function(e,n,i){return void 0===i?t(e,n,!1):t(e,i,!1!==n)},e.throttle=t,Object.defineProperty(e,"__esModule",{value:!0})}(t)},q7TX:function(e,t,n){"use strict";e.exports=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var i=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n}},t3DW:function(e,t,n){"use strict";(e.exports={}).forEach=function(e,t){for(var n=0;n<e.length;n++){var i=t(e[n]);if(i)return i}}},wnTG:function(e,t,n){"use strict";var i=n("UL9e");function r(){var e={},t=0,n=0,i=0;return{add:function(r,o){o||(o=r,r=0),r>n?n=r:r<i&&(i=r),e[r]||(e[r]=[]),e[r].push(o),t++},process:function(){for(var t=i;t<=n;t++)for(var r=e[t],o=0;o<r.length;o++){(0,r[o])()}},size:function(){return t}}}e.exports=function(e){var t=(e=e||{}).reporter,n=i.getOption(e,"async",!0),o=i.getOption(e,"auto",!0);o&&!n&&(t&&t.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),n=!0);var a,s=r(),l=!1;function c(){for(l=!0;s.size();){var e=s;s=r(),e.process()}l=!1}function d(){var e;e=c,a=setTimeout(e,0)}return{add:function(e,t){!l&&o&&n&&0===s.size()&&d(),s.add(e,t)},force:function(e){l||(void 0===e&&(e=n),a&&(clearTimeout(a),a=null),e?d():c())}}}},yUZ2:function(e,t,n){"use strict";var i=n("t3DW").forEach;e.exports=function(e){var t=(e=e||{}).reporter,n=e.batchProcessor,r=e.stateHandler.getState,o=(e.stateHandler.hasState,e.idHandler);if(!n)throw new Error("Missing required dependency: batchProcessor");if(!t)throw new Error("Missing required dependency: reporter.");var a=function(){var e=document.createElement("div");e.style.cssText=l(["position: absolute","width: 1000px","height: 1000px","visibility: hidden","margin: 0","padding: 0"]);var t=document.createElement("div");t.style.cssText=l(["position: absolute","width: 500px","height: 500px","overflow: scroll","visibility: none","top: -1500px","left: -1500px","visibility: hidden","margin: 0","padding: 0"]),t.appendChild(e),document.body.insertBefore(t,document.body.firstChild);var n=500-t.clientWidth,i=500-t.clientHeight;return document.body.removeChild(t),{width:n,height:i}}();function s(e){!function(e,t,n){if(!e.getElementById(t)){var i=n+"_animation",r=n+"_animation_active",o="/* Created by the element-resize-detector library. */\n";o+="."+n+" > div::-webkit-scrollbar { "+l(["display: none"])+" }\n\n",o+="."+r+" { "+l(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+i,"animation-name: "+i])+" }\n",o+="@-webkit-keyframes "+i+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",function(n,i){i=i||function(t){e.head.appendChild(t)};var r=e.createElement("style");r.innerHTML=n,r.id=t,i(r)}(o+="@keyframes "+i+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")}}(e,"erd_scroll_detection_scrollbar_style","erd_scroll_detection_container")}function l(t){var n=e.important?" !important; ":"; ";return(t.join(n)+n).trim()}function c(e,n,i){if(e.addEventListener)e.addEventListener(n,i);else{if(!e.attachEvent)return t.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+n,i)}}function d(e,n,i){if(e.removeEventListener)e.removeEventListener(n,i);else{if(!e.detachEvent)return t.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+n,i)}}function u(e){return r(e).container.childNodes[0].childNodes[0].childNodes[0]}function h(e){return r(e).container.childNodes[0].childNodes[0].childNodes[1]}return s(window.document),{makeDetectable:function(e,s,d){function f(){if(e.debug){var n=Array.prototype.slice.call(arguments);if(n.unshift(o.get(s),"Scroll: "),t.log.apply)t.log.apply(null,n);else for(var i=0;i<n.length;i++)t.log(n[i])}}function p(e){var t=r(e).container.childNodes[0],n=window.getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function m(){var e=window.getComputedStyle(s),t={};return t.position=e.position,t.width=s.offsetWidth,t.height=s.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function v(){if(f("storeStyle invoked."),r(s)){var e=m();r(s).style=e}else f("Aborting because element has been uninstalled")}function g(e,t,n){r(e).lastWidth=t,r(e).lastHeight=n}function b(){return 2*a.width+1}function y(){return 2*a.height+1}function w(e){return e+10+b()}function S(e){return e+10+y()}function E(e,t,n){var i=u(e),r=h(e),o=w(t),a=S(n),s=function(e){return 2*e+b()}(t),l=function(e){return 2*e+y()}(n);i.scrollLeft=o,i.scrollTop=a,r.scrollLeft=s,r.scrollTop=l}function x(){var e=r(s).container;if(!e){(e=document.createElement("div")).className="erd_scroll_detection_container",e.style.cssText=l(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),r(s).container=e,function(e){e.className+=" erd_scroll_detection_container_animation_active"}(e),s.appendChild(e);var t=function(){r(s).onRendered&&r(s).onRendered()};c(e,"animationstart",t),r(s).onAnimationStart=t}return e}function O(){if(f("Injecting elements"),r(s)){!function(){var n=r(s).style;if("static"===n.position){s.style.setProperty("position","relative",e.important?"important":"");var i=function(e,t,n,i){var r=n[i];"auto"!==r&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(r)&&(e.warn("An element that is positioned static has style."+i+"="+r+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};i(t,s,n,"top"),i(t,s,n,"right"),i(t,s,n,"bottom"),i(t,s,n,"left")}}();var n=r(s).container;n||(n=x());var i,o,d,u,h=a.width,p=a.height,m=l(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),v=l(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(["left: "+(i=(i=-(1+h))?i+"px":"0"),"top: "+(o=(o=-(1+p))?o+"px":"0"),"right: "+(u=(u=-h)?u+"px":"0"),"bottom: "+(d=(d=-p)?d+"px":"0")])),g=l(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),b=l(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),y=l(["position: absolute","left: 0","top: 0"]),w=l(["position: absolute","width: 200%","height: 200%"]),S=document.createElement("div"),E=document.createElement("div"),O=document.createElement("div"),z=document.createElement("div"),k=document.createElement("div"),D=document.createElement("div");S.dir="ltr",S.style.cssText=m,S.className="erd_scroll_detection_container",E.className="erd_scroll_detection_container",E.style.cssText=v,O.style.cssText=g,z.style.cssText=y,k.style.cssText=b,D.style.cssText=w,O.appendChild(z),k.appendChild(D),E.appendChild(O),E.appendChild(k),S.appendChild(E),n.appendChild(S),c(O,"scroll",j),c(k,"scroll",C),r(s).onExpandScroll=j,r(s).onShrinkScroll=C}else f("Aborting because element has been uninstalled");function j(){r(s).onExpand&&r(s).onExpand()}function C(){r(s).onShrink&&r(s).onShrink()}}function z(){function a(t,n,i){var r=function(e){return u(e).childNodes[0]}(t),o=w(n),a=S(i);r.style.setProperty("width",o+"px",e.important?"important":""),r.style.setProperty("height",a+"px",e.important?"important":"")}function l(i){var l=s.offsetWidth,d=s.offsetHeight,u=l!==r(s).lastWidth||d!==r(s).lastHeight;f("Storing current size",l,d),g(s,l,d),n.add(0,(function(){if(u)if(r(s))if(c()){if(e.debug){var n=s.offsetWidth,i=s.offsetHeight;n===l&&i===d||t.warn(o.get(s),"Scroll: Size changed before updating detector elements.")}a(s,l,d)}else f("Aborting because element container has not been initialized");else f("Aborting because element has been uninstalled")})),n.add(1,(function(){r(s)?c()?E(s,l,d):f("Aborting because element container has not been initialized"):f("Aborting because element has been uninstalled")})),u&&i&&n.add(2,(function(){r(s)?c()?i():f("Aborting because element container has not been initialized"):f("Aborting because element has been uninstalled")}))}function c(){return!!r(s).container}function d(){f("notifyListenersIfNeeded invoked");var e=r(s);return void 0===r(s).lastNotifiedWidth&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?f("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?f("Not notifying: Size already notified"):(f("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void i(r(s).listeners,(function(e){e(s)})))}function m(){f("Scroll detected."),p(s)?f("Scroll event fired while unrendered. Ignoring..."):l(d)}if(f("registerListenersAndPositionElements invoked."),r(s)){r(s).onRendered=function(){if(f("startanimation triggered."),p(s))f("Ignoring since element is still unrendered...");else{f("Element rendered.");var e=u(s),t=h(s);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(f("Scrollbars out of sync. Updating detector elements..."),l(d))}},r(s).onExpand=m,r(s).onShrink=m;var v=r(s).style;a(s,v.width,v.height)}else f("Aborting because element has been uninstalled")}function k(){if(f("finalizeDomMutation invoked."),r(s)){var e=r(s).style;g(s,e.width,e.height),E(s,e.width,e.height)}else f("Aborting because element has been uninstalled")}function D(){d(s)}function j(){var e;f("Installing..."),r(s).listeners=[],e=m(),r(s).startSize={width:e.width,height:e.height},f("Element start size",r(s).startSize),n.add(0,v),n.add(1,O),n.add(2,z),n.add(3,k),n.add(4,D)}d||(d=s,s=e,e=null),e=e||{},f("Making detectable..."),!function(e){return!function(e){return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)}(e)||null===window.getComputedStyle(e)}(s)?j():(f("Element is detached"),x(),f("Waiting until element is attached..."),r(s).onRendered=function(){f("Element is now attached"),j()})},addListener:function(e,t){if(!r(e).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");r(e).listeners.push(t)},uninstall:function(e){var t=r(e);t&&(t.onExpandScroll&&d(u(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&d(h(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&d(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))},initDocument:s}}}}]);
//# sourceMappingURL=f7187e3a90858a672a4c3ca4fc10846ead813659-fe2769b9e2dfbed34d9f.js.map