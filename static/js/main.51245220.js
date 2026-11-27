/*! For license information please see main.51245220.js.LICENSE.txt */
(()=>{"use strict";var e={};const a={};function t(o){const n=a[o];if(void 0!==n)return n.exports;const r=a[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.cw=e=>{var a;return()=>{if(e){var t=e;e=0,a={exports:{}},t.call(a.exports,a,a.exports)}return a.exports}},(()=>{const e=Object.getPrototypeOf;let a;t.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}const r=Object.create(null);t.r(r);const l=Object.create(null);a||=[null,e({}),e([]),e(e)];for(var s=2&n&&o;("object"==typeof s||"function"==typeof s)&&!~a.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach(e=>l[e]=()=>o[e]);return l.default=()=>o,t.d(r,l),r}})(),t.d=(e,a)=>{for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.r=e=>{Object.defineProperties(e,{[Symbol.toStringTag]:{value:"Module"},__esModule:{value:!0}})},t.nc=void 0;var o=t.cw((e,a)=>{var t=p(),o=c(),n=l();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}var i=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),b=Symbol.for("react.consumer"),f=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),x=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var k=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var S=Symbol.for("react.memo_cache_sentinel"),L=Symbol.iterator;function A(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var D=Symbol.for("react.client.reference");function B(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===D?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case d:return"Fragment";case m:return"Portal";case g:return"Profiler";case y:return"StrictMode";case v:return"Suspense";case _:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case f:return(e.displayName||"Context")+".Provider";case b:return(e._context.displayName||"Context")+".Consumer";case w:var a=e.render;return(e=e.displayName)||(e=""!==(e=a.displayName||a.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case C:return null!==(a=e.displayName||null)?a:B(e.type)||"Memo";case x:a=e._payload,e=e._init;try{return B(e(a))}catch(t){}}return null}var M,T,V=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Object.assign;function P(e){if(void 0===M)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);M=a&&a[1]||"",T=-1<t.stack.indexOf("\n    at")?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+M+e+T}var F=!1;function G(e,a){if(!e||F)return"";F=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(a){var t=function(){throw Error()};if(Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(n){var o=n}Reflect.construct(e,[],t)}else{try{t.call()}catch(r){o=r}e.call(t.prototype)}}else{try{throw Error()}catch(l){o=l}(t=e())&&"function"===typeof t.catch&&t.catch(function(){})}}catch(s){if(s&&o&&"string"===typeof s.stack)return[s.stack,o.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),l=r[0],s=r[1];if(l&&s){var i=l.split("\n"),c=s.split("\n");for(n=o=0;o<i.length&&!i[o].includes("DetermineComponentFrameRoot");)o++;for(;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;if(o===i.length||n===c.length)for(o=i.length-1,n=c.length-1;1<=o&&0<=n&&i[o]!==c[n];)n--;for(;1<=o&&0<=n;o--,n--)if(i[o]!==c[n]){if(1!==o||1!==n)do{if(o--,0>--n||i[o]!==c[n]){var u="\n"+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=o&&0<=n);break}}}finally{F=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?P(t):""}function W(e){switch(e.tag){case 26:case 27:case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 15:return e=G(e.type,!1);case 11:return e=G(e.type.render,!1);case 1:return e=G(e.type,!0);default:return""}}function O(e){try{var a="";do{a+=W(e),e=e.return}while(e);return a}catch(t){return"\nError generating stack: "+t.message+"\n"+t.stack}}function E(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do{0!==(4098&(a=e).flags)&&(t=a.return),e=a.return}while(e)}return 3===a.tag?t:null}function H(e){if(13===e.tag){var a=e.memoizedState;if(null===a&&(null!==(e=e.alternate)&&(a=e.memoizedState)),null!==a)return a.dehydrated}return null}function N(e){if(E(e)!==e)throw Error(r(188))}function K(e){var a=e.tag;if(5===a||26===a||27===a||6===a)return e;for(e=e.child;null!==e;){if(null!==(a=K(e)))return a;e=e.sibling}return null}var j=Array.isArray,I=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},U=[],q=-1;function J(e){return{current:e}}function Y(e){0>q||(e.current=U[q],U[q]=null,q--)}function $(e,a){q++,U[q]=e.current,e.current=a}var X=J(null),Z=J(null),Q=J(null),ee=J(null);function ae(e,a){switch($(Q,a),$(Z,e),$(X,null),e=a.nodeType){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?Zu(a):0;break;default:if(a=(e=8===e?a.parentNode:a).tagName,e=e.namespaceURI)a=Qu(e=Zu(e),a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}Y(X),$(X,a)}function te(){Y(X),Y(Z),Y(Q)}function oe(e){null!==e.memoizedState&&$(ee,e);var a=X.current,t=Qu(a,e.type);a!==t&&($(Z,e),$(X,t))}function ne(e){Z.current===e&&(Y(X),Y(Z)),ee.current===e&&(Y(ee),Om._currentValue=z)}var re=Object.prototype.hasOwnProperty,le=t.unstable_scheduleCallback,se=t.unstable_cancelCallback,ie=t.unstable_shouldYield,ce=t.unstable_requestPaint,ue=t.unstable_now,me=t.unstable_getCurrentPriorityLevel,pe=t.unstable_ImmediatePriority,de=t.unstable_UserBlockingPriority,ye=t.unstable_NormalPriority,ge=t.unstable_LowPriority,he=t.unstable_IdlePriority,be=t.log,fe=t.unstable_setDisableYieldValue,we=null,ve=null;function _e(e){if("function"===typeof be&&fe(e),ve&&"function"===typeof ve.setStrictMode)try{ve.setStrictMode(we,e)}catch(a){}}var Ce=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(xe(e)/ke|0)|0},xe=Math.log,ke=Math.LN2;var Se=128,Le=4194304;function Ae(e){var a=42&e;if(0!==a)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194176&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function De(e,a){var t=e.pendingLanes;if(0===t)return 0;var o=0,n=e.suspendedLanes,r=e.pingedLanes,l=e.warmLanes;e=0!==e.finishedLanes;var s=134217727&t;return 0!==s?0!==(t=s&~n)?o=Ae(t):0!==(r&=s)?o=Ae(r):e||0!==(l=s&~l)&&(o=Ae(l)):0!==(s=t&~n)?o=Ae(s):0!==r?o=Ae(r):e||0!==(l=t&~l)&&(o=Ae(l)),0===o?0:0!==a&&a!==o&&0===(a&n)&&((n=o&-o)>=(l=a&-a)||32===n&&0!==(4194176&l))?a:o}function Be(e,a){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)}function Me(e,a){switch(e){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;default:return-1}}function Te(){var e=Se;return 0===(4194176&(Se<<=1))&&(Se=128),e}function Ve(){var e=Le;return 0===(62914560&(Le<<=1))&&(Le=4194304),e}function Re(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Pe(e,a){e.pendingLanes|=a,268435456!==a&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fe(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var o=31-Ce(a);e.entangledLanes|=a,e.entanglements[o]=1073741824|e.entanglements[o]|4194218&t}function Ge(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var o=31-Ce(t),n=1<<o;n&a|e[o]&a&&(e[o]|=a),t&=~n}}function We(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Oe(){var e=I.p;return 0!==e?e:void 0===(e=window.event)?32:Qm(e.type)}var Ee=Math.random().toString(36).slice(2),He="__reactFiber$"+Ee,Ne="__reactProps$"+Ee,Ke="__reactContainer$"+Ee,je="__reactEvents$"+Ee,Ie="__reactListeners$"+Ee,ze="__reactHandles$"+Ee,Ue="__reactResources$"+Ee,qe="__reactMarker$"+Ee;function Je(e){delete e[He],delete e[Ne],delete e[je],delete e[Ie],delete e[ze]}function Ye(e){var a=e[He];if(a)return a;for(var t=e.parentNode;t;){if(a=t[Ke]||t[He]){if(t=a.alternate,null!==a.child||null!==t&&null!==t.child)for(e=um(e);null!==e;){if(t=e[He])return t;e=um(e)}return a}t=(e=t).parentNode}return null}function $e(e){if(e=e[He]||e[Ke]){var a=e.tag;if(5===a||6===a||13===a||26===a||27===a||3===a)return e}return null}function Xe(e){var a=e.tag;if(5===a||26===a||27===a||6===a)return e.stateNode;throw Error(r(33))}function Ze(e){var a=e[Ue];return a||(a=e[Ue]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Qe(e){e[qe]=!0}var ea=new Set,aa={};function ta(e,a){oa(e,a),oa(e+"Capture",a)}function oa(e,a){for(aa[e]=a,e=0;e<a.length;e++)ea.add(a[e])}var na=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ra=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),la={},sa={};function ia(e,a,t){if(n=a,re.call(sa,n)||!re.call(la,n)&&(ra.test(n)?sa[n]=!0:(la[n]=!0,0)))if(null===t)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":return void e.removeAttribute(a);case"boolean":var o=a.toLowerCase().slice(0,5);if("data-"!==o&&"aria-"!==o)return void e.removeAttribute(a)}e.setAttribute(a,""+t)}var n}function ca(e,a,t){if(null===t)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(a)}e.setAttribute(a,""+t)}}function ua(e,a,t,o){if(null===o)e.removeAttribute(t);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttributeNS(a,t,""+o)}}function ma(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function pa(e){var a=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===a||"radio"===a)}function da(e){e._valueTracker||(e._valueTracker=function(e){var a=pa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),o=""+e[a];if(!e.hasOwnProperty(a)&&"undefined"!==typeof t&&"function"===typeof t.get&&"function"===typeof t.set){var n=t.get,r=t.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(e){o=""+e,r.call(this,e)}}),Object.defineProperty(e,a,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(e){o=""+e},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}(e))}function ya(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),o="";return e&&(o=pa(e)?e.checked?"true":"false":e.value),(e=o)!==t&&(a.setValue(e),!0)}function ga(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(a){return e.body}}var ha=/[\n"\\]/g;function ba(e){return e.replace(ha,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function fa(e,a,t,o,n,r,l,s){e.name="",null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.type=l:e.removeAttribute("type"),null!=a?"number"===l?(0===a&&""===e.value||e.value!=a)&&(e.value=""+ma(a)):e.value!==""+ma(a)&&(e.value=""+ma(a)):"submit"!==l&&"reset"!==l||e.removeAttribute("value"),null!=a?va(e,l,ma(a)):null!=t?va(e,l,ma(t)):null!=o&&e.removeAttribute("value"),null==n&&null!=r&&(e.defaultChecked=!!r),null!=n&&(e.checked=n&&"function"!==typeof n&&"symbol"!==typeof n),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ma(s):e.removeAttribute("name")}function wa(e,a,t,o,n,r,l,s){if(null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&"boolean"!==typeof r&&(e.type=r),null!=a||null!=t){if(!("submit"!==r&&"reset"!==r||void 0!==a&&null!==a))return;t=null!=t?""+ma(t):"",a=null!=a?""+ma(a):t,s||a===e.value||(e.value=a),e.defaultValue=a}o="function"!==typeof(o=null!=o?o:n)&&"symbol"!==typeof o&&!!o,e.checked=s?e.checked:!!o,e.defaultChecked=!!o,null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l&&(e.name=l)}function va(e,a,t){"number"===a&&ga(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function _a(e,a,t,o){if(e=e.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&o&&(e[t].defaultSelected=!0)}else{for(t=""+ma(t),a=null,n=0;n<e.length;n++){if(e[n].value===t)return e[n].selected=!0,void(o&&(e[n].defaultSelected=!0));null!==a||e[n].disabled||(a=e[n])}null!==a&&(a.selected=!0)}}function Ca(e,a,t){null==a||((a=""+ma(a))!==e.value&&(e.value=a),null!=t)?e.defaultValue=null!=t?""+ma(t):"":e.defaultValue!==a&&(e.defaultValue=a)}function xa(e,a,t,o){if(null==a){if(null!=o){if(null!=t)throw Error(r(92));if(j(o)){if(1<o.length)throw Error(r(93));o=o[0]}t=o}null==t&&(t=""),a=t}t=ma(a),e.defaultValue=t,(o=e.textContent)===t&&""!==o&&null!==o&&(e.value=o)}function ka(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&3===t.nodeType)return void(t.nodeValue=a)}e.textContent=a}var Sa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function La(e,a,t){var o=0===a.indexOf("--");null==t||"boolean"===typeof t||""===t?o?e.setProperty(a,""):"float"===a?e.cssFloat="":e[a]="":o?e.setProperty(a,t):"number"!==typeof t||0===t||Sa.has(a)?"float"===a?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Aa(e,a,t){if(null!=a&&"object"!==typeof a)throw Error(r(62));if(e=e.style,null!=t){for(var o in t)!t.hasOwnProperty(o)||null!=a&&a.hasOwnProperty(o)||(0===o.indexOf("--")?e.setProperty(o,""):"float"===o?e.cssFloat="":e[o]="");for(var n in a)o=a[n],a.hasOwnProperty(n)&&t[n]!==o&&La(e,n,o)}else for(var l in a)a.hasOwnProperty(l)&&La(e,l,a[l])}function Da(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ba=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ma=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ta(e){return Ma.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Va=null;function Ra(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Pa=null,Fa=null;function Ga(e){var a=$e(e);if(a&&(e=a.stateNode)){var t=e[Ne]||null;e:switch(e=a.stateNode,a.type){case"input":if(fa(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,"radio"===t.type&&null!=a){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ba(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var o=t[a];if(o!==e&&o.form===e.form){var n=o[Ne]||null;if(!n)throw Error(r(90));fa(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)(o=t[a]).form===e.form&&ya(o)}break e;case"textarea":Ca(e,t.value,t.defaultValue);break e;case"select":null!=(a=t.value)&&_a(e,!!t.multiple,a,!1)}}}var Wa=!1;function Oa(e,a,t){if(Wa)return e(a,t);Wa=!0;try{return e(a)}finally{if(Wa=!1,(null!==Pa||null!==Fa)&&(Hc(),Pa&&(a=Pa,e=Fa,Fa=Pa=null,Ga(a),e)))for(a=0;a<e.length;a++)Ga(e[a])}}function Ea(e,a){var t=e.stateNode;if(null===t)return null;var o=t[Ne]||null;if(null===o)return null;t=o[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(o=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!o;break e;default:e=!1}if(e)return null;if(t&&"function"!==typeof t)throw Error(r(231,a,typeof t));return t}var Ha=!1;if(na)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){Ha=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch(xp){Ha=!1}var Ka=null,ja=null,Ia=null;function za(){if(Ia)return Ia;var e,a,t=ja,o=t.length,n="value"in Ka?Ka.value:Ka.textContent,r=n.length;for(e=0;e<o&&t[e]===n[e];e++);var l=o-e;for(a=1;a<=l&&t[o-a]===n[r-a];a++);return Ia=n.slice(e,1<a?1-a:void 0)}function Ua(e){var a=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===a&&(e=13):e=a,10===e&&(e=13),32<=e||13===e?e:0}function qa(){return!0}function Ja(){return!1}function Ya(e){function a(a,t,o,n,r){for(var l in this._reactName=a,this._targetInst=o,this.type=t,this.nativeEvent=n,this.target=r,this.currentTarget=null,e)e.hasOwnProperty(l)&&(a=e[l],this[l]=a?a(n):n[l]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?qa:Ja,this.isPropagationStopped=Ja,this}return R(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),a}var $a,Xa,Za,Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},et=Ya(Qa),at=R({},Qa,{view:0,detail:0}),tt=Ya(at),ot=R({},at,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yt,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Za&&(Za&&"mousemove"===e.type?($a=e.screenX-Za.screenX,Xa=e.screenY-Za.screenY):Xa=$a=0,Za=e),$a)},movementY:function(e){return"movementY"in e?e.movementY:Xa}}),nt=Ya(ot),rt=Ya(R({},ot,{dataTransfer:0})),lt=Ya(R({},at,{relatedTarget:0})),st=Ya(R({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0})),it=Ya(R({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),ct=Ya(R({},Qa,{data:0})),ut={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dt(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):!!(e=pt[e])&&!!a[e]}function yt(){return dt}var gt=Ya(R({},at,{key:function(e){if(e.key){var a=ut[e.key]||e.key;if("Unidentified"!==a)return a}return"keypress"===e.type?13===(e=Ua(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?mt[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yt,charCode:function(e){return"keypress"===e.type?Ua(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Ua(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),ht=Ya(R({},ot,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),bt=Ya(R({},at,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yt})),ft=Ya(R({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0})),wt=Ya(R({},ot,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),vt=Ya(R({},Qa,{newState:0,oldState:0})),_t=[9,13,27,32],Ct=na&&"CompositionEvent"in window,xt=null;na&&"documentMode"in document&&(xt=document.documentMode);var kt=na&&"TextEvent"in window&&!xt,St=na&&(!Ct||xt&&8<xt&&11>=xt),Lt=String.fromCharCode(32),At=!1;function Dt(e,a){switch(e){case"keyup":return-1!==_t.indexOf(a.keyCode);case"keydown":return 229!==a.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bt(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Mt=!1;var Tt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vt(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===a?!!Tt[e.type]:"textarea"===a}function Rt(e,a,t,o){Pa?Fa?Fa.push(o):Fa=[o]:Pa=o,0<(a=Ou(a,"onChange")).length&&(t=new et("onChange","change",null,t,o),e.push({event:t,listeners:a}))}var Pt=null,Ft=null;function Gt(e){Mu(e,0)}function Wt(e){if(ya(Xe(e)))return e}function Ot(e,a){if("change"===e)return a}var Et=!1;if(na){var Ht;if(na){var Nt="oninput"in document;if(!Nt){var Kt=document.createElement("div");Kt.setAttribute("oninput","return;"),Nt="function"===typeof Kt.oninput}Ht=Nt}else Ht=!1;Et=Ht&&(!document.documentMode||9<document.documentMode)}function jt(){Pt&&(Pt.detachEvent("onpropertychange",It),Ft=Pt=null)}function It(e){if("value"===e.propertyName&&Wt(Ft)){var a=[];Rt(a,Ft,e,Ra(e)),Oa(Gt,a)}}function zt(e,a,t){"focusin"===e?(jt(),Ft=t,(Pt=a).attachEvent("onpropertychange",It)):"focusout"===e&&jt()}function Ut(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Wt(Ft)}function qt(e,a){if("click"===e)return Wt(a)}function Jt(e,a){if("input"===e||"change"===e)return Wt(a)}var Yt="function"===typeof Object.is?Object.is:function(e,a){return e===a&&(0!==e||1/e===1/a)||e!==e&&a!==a};function $t(e,a){if(Yt(e,a))return!0;if("object"!==typeof e||null===e||"object"!==typeof a||null===a)return!1;var t=Object.keys(e),o=Object.keys(a);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var n=t[o];if(!re.call(a,n)||!Yt(e[n],a[n]))return!1}return!0}function Xt(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zt(e,a){var t,o=Xt(e);for(e=0;o;){if(3===o.nodeType){if(t=e+o.textContent.length,e<=a&&t>=a)return{node:o,offset:a-e};e=t}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Xt(o)}}function Qt(e,a){return!(!e||!a)&&(e===a||(!e||3!==e.nodeType)&&(a&&3===a.nodeType?Qt(e,a.parentNode):"contains"in e?e.contains(a):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(a))))}function eo(e){for(var a=ga((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);a instanceof e.HTMLIFrameElement;){try{var t="string"===typeof a.contentWindow.location.href}catch(o){t=!1}if(!t)break;a=ga((e=a.contentWindow).document)}return a}function ao(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&("input"===a&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===a||"true"===e.contentEditable)}function to(e,a){var t=eo(a);a=e.focusedElem;var o=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&Qt(a.ownerDocument.documentElement,a)){if(null!==o&&ao(a))if(e=o.start,void 0===(t=o.end)&&(t=e),"selectionStart"in a)a.selectionStart=e,a.selectionEnd=Math.min(t,a.value.length);else if((t=(e=a.ownerDocument||document)&&e.defaultView||window).getSelection){t=t.getSelection();var n=a.textContent.length,r=Math.min(o.start,n);o=void 0===o.end?r:Math.min(o.end,n),!t.extend&&r>o&&(n=o,o=r,r=n),n=Zt(a,r);var l=Zt(a,o);n&&l&&(1!==t.rangeCount||t.anchorNode!==n.node||t.anchorOffset!==n.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&((e=e.createRange()).setStart(n.node,n.offset),t.removeAllRanges(),r>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}for(e=[],t=a;t=t.parentNode;)1===t.nodeType&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for("function"===typeof a.focus&&a.focus(),a=0;a<e.length;a++)(t=e[a]).element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oo=na&&"documentMode"in document&&11>=document.documentMode,no=null,ro=null,lo=null,so=!1;function io(e,a,t){var o=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;so||null==no||no!==ga(o)||("selectionStart"in(o=no)&&ao(o)?o={start:o.selectionStart,end:o.selectionEnd}:o={anchorNode:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset},lo&&$t(lo,o)||(lo=o,0<(o=Ou(ro,"onSelect")).length&&(a=new et("onSelect","select",null,a,t),e.push({event:a,listeners:o}),a.target=no)))}function co(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var uo={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionrun:co("Transition","TransitionRun"),transitionstart:co("Transition","TransitionStart"),transitioncancel:co("Transition","TransitionCancel"),transitionend:co("Transition","TransitionEnd")},mo={},po={};function yo(e){if(mo[e])return mo[e];if(!uo[e])return e;var a,t=uo[e];for(a in t)if(t.hasOwnProperty(a)&&a in po)return mo[e]=t[a];return e}na&&(po=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);var go=yo("animationend"),ho=yo("animationiteration"),bo=yo("animationstart"),fo=yo("transitionrun"),wo=yo("transitionstart"),vo=yo("transitioncancel"),_o=yo("transitionend"),Co=new Map,xo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ko(e,a){Co.set(e,a),ta(a,[e])}var So=[],Lo=0,Ao=0;function Do(){for(var e=Lo,a=Ao=Lo=0;a<e;){var t=So[a];So[a++]=null;var o=So[a];So[a++]=null;var n=So[a];So[a++]=null;var r=So[a];if(So[a++]=null,null!==o&&null!==n){var l=o.pending;null===l?n.next=n:(n.next=l.next,l.next=n),o.pending=n}0!==r&&Vo(t,n,r)}}function Bo(e,a,t,o){So[Lo++]=e,So[Lo++]=a,So[Lo++]=t,So[Lo++]=o,Ao|=o,e.lanes|=o,null!==(e=e.alternate)&&(e.lanes|=o)}function Mo(e,a,t,o){return Bo(e,a,t,o),Ro(e)}function To(e,a){return Bo(e,null,null,a),Ro(e)}function Vo(e,a,t){e.lanes|=t;var o=e.alternate;null!==o&&(o.lanes|=t);for(var n=!1,r=e.return;null!==r;)r.childLanes|=t,null!==(o=r.alternate)&&(o.childLanes|=t),22===r.tag&&(null===(e=r.stateNode)||1&e._visibility||(n=!0)),e=r,r=r.return;n&&null!==a&&3===e.tag&&(r=e.stateNode,n=31-Ce(t),null===(e=(r=r.hiddenUpdates)[n])?r[n]=[a]:e.push(a),a.lane=536870912|t)}function Ro(e){if(50<Mc)throw Mc=0,Tc=null,Error(r(185));for(var a=e.return;null!==a;)a=(e=a).return;return 3===e.tag?e.stateNode:null}var Po={},Fo=new WeakMap;function Go(e,a){if("object"===typeof e&&null!==e){var t=Fo.get(e);return void 0!==t?t:(a={value:e,source:a,stack:O(a)},Fo.set(e,a),a)}return{value:e,source:a,stack:O(a)}}var Wo=[],Oo=0,Eo=null,Ho=0,No=[],Ko=0,jo=null,Io=1,zo="";function Uo(e,a){Wo[Oo++]=Ho,Wo[Oo++]=Eo,Eo=e,Ho=a}function qo(e,a,t){No[Ko++]=Io,No[Ko++]=zo,No[Ko++]=jo,jo=e;var o=Io;e=zo;var n=32-Ce(o)-1;o&=~(1<<n),t+=1;var r=32-Ce(a)+n;if(30<r){var l=n-n%5;r=(o&(1<<l)-1).toString(32),o>>=l,n-=l,Io=1<<32-Ce(a)+n|t<<n|o,zo=r+e}else Io=1<<r|t<<n|o,zo=e}function Jo(e){null!==e.return&&(Uo(e,1),qo(e,1,0))}function Yo(e){for(;e===Eo;)Eo=Wo[--Oo],Wo[Oo]=null,Ho=Wo[--Oo],Wo[Oo]=null;for(;e===jo;)jo=No[--Ko],No[Ko]=null,zo=No[--Ko],No[Ko]=null,Io=No[--Ko],No[Ko]=null}var $o=null,Xo=null,Zo=!1,Qo=null,en=!1,an=Error(r(519));function tn(e){throw sn(Go(Error(r(418,"")),e)),an}function on(e){var a=e.stateNode,t=e.type,o=e.memoizedProps;switch(a[He]=e,a[Ne]=o,t){case"dialog":Tu("cancel",a),Tu("close",a);break;case"iframe":case"object":case"embed":Tu("load",a);break;case"video":case"audio":for(t=0;t<Du.length;t++)Tu(Du[t],a);break;case"source":Tu("error",a);break;case"img":case"image":case"link":Tu("error",a),Tu("load",a);break;case"details":Tu("toggle",a);break;case"input":Tu("invalid",a),wa(a,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),da(a);break;case"select":Tu("invalid",a);break;case"textarea":Tu("invalid",a),xa(a,o.value,o.defaultValue,o.children),da(a)}"string"!==typeof(t=o.children)&&"number"!==typeof t&&"bigint"!==typeof t||a.textContent===""+t||!0===o.suppressHydrationWarning||Iu(a.textContent,t)?(null!=o.popover&&(Tu("beforetoggle",a),Tu("toggle",a)),null!=o.onScroll&&Tu("scroll",a),null!=o.onScrollEnd&&Tu("scrollend",a),null!=o.onClick&&(a.onclick=zu),a=!0):a=!1,a||tn(e)}function nn(e){for($o=e.return;$o;)switch($o.tag){case 3:case 27:return void(en=!0);case 5:case 13:return void(en=!1);default:$o=$o.return}}function rn(e){if(e!==$o)return!1;if(!Zo)return nn(e),Zo=!0,!1;var a,t=!1;if((a=3!==e.tag&&27!==e.tag)&&((a=5===e.tag)&&(a=!("form"!==(a=e.type)&&"button"!==a)||em(e.type,e.memoizedProps)),a=!a),a&&(t=!0),t&&Xo&&tn(e),nn(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType)if("/$"===(a=e.data)){if(0===t){Xo=cm(e.nextSibling);break e}t--}else"$"!==a&&"$!"!==a&&"$?"!==a||t++;e=e.nextSibling}Xo=null}}else Xo=$o?cm(e.stateNode.nextSibling):null;return!0}function ln(){Xo=$o=null,Zo=!1}function sn(e){null===Qo?Qo=[e]:Qo.push(e)}var cn=Error(r(460)),un=Error(r(474)),mn={then:function(){}};function pn(e){return"fulfilled"===(e=e.status)||"rejected"===e}function dn(){}function yn(e,a,t){switch(void 0===(t=e[t])?e.push(a):t!==a&&(a.then(dn,dn),a=t),a.status){case"fulfilled":return a.value;case"rejected":if((e=a.reason)===cn)throw Error(r(483));throw e;default:if("string"===typeof a.status)a.then(dn,dn);else{if(null!==(e=oc)&&100<e.shellSuspendCounter)throw Error(r(482));(e=a).status="pending",e.then(function(e){if("pending"===a.status){var t=a;t.status="fulfilled",t.value=e}},function(e){if("pending"===a.status){var t=a;t.status="rejected",t.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":if((e=a.reason)===cn)throw Error(r(483));throw e}throw gn=a,cn}}var gn=null;function hn(){if(null===gn)throw Error(r(459));var e=gn;return gn=null,e}var bn=null,fn=0;function wn(e){var a=fn;return fn+=1,null===bn&&(bn=[]),yn(bn,e,a)}function vn(e,a){a=a.props.ref,e.ref=void 0!==a?a:null}function _n(e,a){if(a.$$typeof===i)throw Error(r(525));throw e=Object.prototype.toString.call(a),Error(r(31,"[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function Cn(e){return(0,e._init)(e._payload)}function xn(e){function a(a,t){if(e){var o=a.deletions;null===o?(a.deletions=[t],a.flags|=16):o.push(t)}}function t(t,o){if(!e)return null;for(;null!==o;)a(t,o),o=o.sibling;return null}function o(e){for(var a=new Map;null!==e;)null!==e.key?a.set(e.key,e):a.set(e.index,e),e=e.sibling;return a}function n(e,a){return(e=Ei(e,a)).index=0,e.sibling=null,e}function l(a,t,o){return a.index=o,e?null!==(o=a.alternate)?(o=o.index)<t?(a.flags|=33554434,t):o:(a.flags|=33554434,t):(a.flags|=1048576,t)}function s(a){return e&&null===a.alternate&&(a.flags|=33554434),a}function i(e,a,t,o){return null===a||6!==a.tag?((a=Ii(t,e.mode,o)).return=e,a):((a=n(a,t)).return=e,a)}function c(e,a,t,o){var r=t.type;return r===d?y(e,a,t.props.children,o,t.key):null!==a&&(a.elementType===r||"object"===typeof r&&null!==r&&r.$$typeof===x&&Cn(r)===a.type)?(vn(a=n(a,t.props),t),a.return=e,a):(vn(a=Ni(t.type,t.key,t.props,null,e.mode,o),t),a.return=e,a)}function p(e,a,t,o){return null===a||4!==a.tag||a.stateNode.containerInfo!==t.containerInfo||a.stateNode.implementation!==t.implementation?((a=zi(t,e.mode,o)).return=e,a):((a=n(a,t.children||[])).return=e,a)}function y(e,a,t,o,r){return null===a||7!==a.tag?((a=Ki(t,e.mode,o,r)).return=e,a):((a=n(a,t)).return=e,a)}function g(e,a,t){if("string"===typeof a&&""!==a||"number"===typeof a||"bigint"===typeof a)return(a=Ii(""+a,e.mode,t)).return=e,a;if("object"===typeof a&&null!==a){switch(a.$$typeof){case u:return vn(t=Ni(a.type,a.key,a.props,null,e.mode,t),a),t.return=e,t;case m:return(a=zi(a,e.mode,t)).return=e,a;case x:return g(e,a=(0,a._init)(a._payload),t)}if(j(a)||A(a))return(a=Ki(a,e.mode,t,null)).return=e,a;if("function"===typeof a.then)return g(e,wn(a),t);if(a.$$typeof===f)return g(e,Ds(e,a),t);_n(e,a)}return null}function h(e,a,t,o){var n=null!==a?a.key:null;if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return null!==n?null:i(e,a,""+t,o);if("object"===typeof t&&null!==t){switch(t.$$typeof){case u:return t.key===n?c(e,a,t,o):null;case m:return t.key===n?p(e,a,t,o):null;case x:return h(e,a,t=(n=t._init)(t._payload),o)}if(j(t)||A(t))return null!==n?null:y(e,a,t,o,null);if("function"===typeof t.then)return h(e,a,wn(t),o);if(t.$$typeof===f)return h(e,a,Ds(e,t),o);_n(e,t)}return null}function b(e,a,t,o,n){if("string"===typeof o&&""!==o||"number"===typeof o||"bigint"===typeof o)return i(a,e=e.get(t)||null,""+o,n);if("object"===typeof o&&null!==o){switch(o.$$typeof){case u:return c(a,e=e.get(null===o.key?t:o.key)||null,o,n);case m:return p(a,e=e.get(null===o.key?t:o.key)||null,o,n);case x:return b(e,a,t,o=(0,o._init)(o._payload),n)}if(j(o)||A(o))return y(a,e=e.get(t)||null,o,n,null);if("function"===typeof o.then)return b(e,a,t,wn(o),n);if(o.$$typeof===f)return b(e,a,t,Ds(a,o),n);_n(a,o)}return null}function w(i,c,p,y){if("object"===typeof p&&null!==p&&p.type===d&&null===p.key&&(p=p.props.children),"object"===typeof p&&null!==p){switch(p.$$typeof){case u:e:{for(var v=p.key;null!==c;){if(c.key===v){if((v=p.type)===d){if(7===c.tag){t(i,c.sibling),(y=n(c,p.props.children)).return=i,i=y;break e}}else if(c.elementType===v||"object"===typeof v&&null!==v&&v.$$typeof===x&&Cn(v)===c.type){t(i,c.sibling),vn(y=n(c,p.props),p),y.return=i,i=y;break e}t(i,c);break}a(i,c),c=c.sibling}p.type===d?((y=Ki(p.props.children,i.mode,y,p.key)).return=i,i=y):(vn(y=Ni(p.type,p.key,p.props,null,i.mode,y),p),y.return=i,i=y)}return s(i);case m:e:{for(v=p.key;null!==c;){if(c.key===v){if(4===c.tag&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(i,c.sibling),(y=n(c,p.children||[])).return=i,i=y;break e}t(i,c);break}a(i,c),c=c.sibling}(y=zi(p,i.mode,y)).return=i,i=y}return s(i);case x:return w(i,c,p=(v=p._init)(p._payload),y)}if(j(p))return function(n,r,s,i){for(var c=null,u=null,m=r,p=r=0,d=null;null!==m&&p<s.length;p++){m.index>p?(d=m,m=null):d=m.sibling;var y=h(n,m,s[p],i);if(null===y){null===m&&(m=d);break}e&&m&&null===y.alternate&&a(n,m),r=l(y,r,p),null===u?c=y:u.sibling=y,u=y,m=d}if(p===s.length)return t(n,m),Zo&&Uo(n,p),c;if(null===m){for(;p<s.length;p++)null!==(m=g(n,s[p],i))&&(r=l(m,r,p),null===u?c=m:u.sibling=m,u=m);return Zo&&Uo(n,p),c}for(m=o(m);p<s.length;p++)null!==(d=b(m,n,p,s[p],i))&&(e&&null!==d.alternate&&m.delete(null===d.key?p:d.key),r=l(d,r,p),null===u?c=d:u.sibling=d,u=d);return e&&m.forEach(function(e){return a(n,e)}),Zo&&Uo(n,p),c}(i,c,p,y);if(A(p)){if("function"!==typeof(v=A(p)))throw Error(r(150));return function(n,s,i,c){if(null==i)throw Error(r(151));for(var u=null,m=null,p=s,d=s=0,y=null,f=i.next();null!==p&&!f.done;d++,f=i.next()){p.index>d?(y=p,p=null):y=p.sibling;var w=h(n,p,f.value,c);if(null===w){null===p&&(p=y);break}e&&p&&null===w.alternate&&a(n,p),s=l(w,s,d),null===m?u=w:m.sibling=w,m=w,p=y}if(f.done)return t(n,p),Zo&&Uo(n,d),u;if(null===p){for(;!f.done;d++,f=i.next())null!==(f=g(n,f.value,c))&&(s=l(f,s,d),null===m?u=f:m.sibling=f,m=f);return Zo&&Uo(n,d),u}for(p=o(p);!f.done;d++,f=i.next())null!==(f=b(p,n,d,f.value,c))&&(e&&null!==f.alternate&&p.delete(null===f.key?d:f.key),s=l(f,s,d),null===m?u=f:m.sibling=f,m=f);return e&&p.forEach(function(e){return a(n,e)}),Zo&&Uo(n,d),u}(i,c,p=v.call(p),y)}if("function"===typeof p.then)return w(i,c,wn(p),y);if(p.$$typeof===f)return w(i,c,Ds(i,p),y);_n(i,p)}return"string"===typeof p&&""!==p||"number"===typeof p||"bigint"===typeof p?(p=""+p,null!==c&&6===c.tag?(t(i,c.sibling),(y=n(c,p)).return=i,i=y):(t(i,c),(y=Ii(p,i.mode,y)).return=i,i=y),s(i)):t(i,c)}return function(e,a,t,o){try{fn=0;var n=w(e,a,t,o);return bn=null,n}catch(l){if(l===cn)throw l;var r=Wi(29,l,null,e.mode);return r.lanes=o,r.return=e,r}}}var kn=xn(!0),Sn=xn(!1),Ln=J(null),An=J(0);function Dn(e,a){$(An,e=mc),$(Ln,a),mc=e|a.baseLanes}function Bn(){$(An,mc),$(Ln,Ln.current)}function Mn(){mc=An.current,Y(Ln),Y(An)}var Tn=J(null),Vn=null;function Rn(e){var a=e.alternate;$(Wn,1&Wn.current),$(Tn,e),null===Vn&&(null===a||null!==Ln.current||null!==a.memoizedState)&&(Vn=e)}function Pn(e){if(22===e.tag){if($(Wn,Wn.current),$(Tn,e),null===Vn){var a=e.alternate;null!==a&&null!==a.memoizedState&&(Vn=e)}}else Fn()}function Fn(){$(Wn,Wn.current),$(Tn,Tn.current)}function Gn(e){Y(Tn),Vn===e&&(Vn=null),Y(Wn)}var Wn=J(0);function On(e){for(var a=e;null!==a;){if(13===a.tag){var t=a.memoizedState;if(null!==t&&(null===(t=t.dehydrated)||"$?"===t.data||"$!"===t.data))return a}else if(19===a.tag&&void 0!==a.memoizedProps.revealOrder){if(0!==(128&a.flags))return a}else if(null!==a.child){a.child.return=a,a=a.child;continue}if(a===e)break;for(;null===a.sibling;){if(null===a.return||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var En="undefined"!==typeof AbortController?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(a,t){e.push(t)}};this.abort=function(){a.aborted=!0,e.forEach(function(e){return e()})}},Hn=t.unstable_scheduleCallback,Nn=t.unstable_NormalPriority,Kn={$$typeof:f,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jn(){return{controller:new En,data:new Map,refCount:0}}function In(e){e.refCount--,0===e.refCount&&Hn(Nn,function(){e.controller.abort()})}var zn=null,Un=0,qn=0,Jn=null;function Yn(){if(0===--Un&&null!==zn){null!==Jn&&(Jn.status="fulfilled");var e=zn;zn=null,qn=0,Jn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}var $n=V.S;V.S=function(e,a){"object"===typeof a&&null!==a&&"function"===typeof a.then&&function(e,a){if(null===zn){var t=zn=[];Un=0,qn=xu(),Jn={status:"pending",value:void 0,then:function(e){t.push(e)}}}Un++,a.then(Yn,Yn)}(0,a),null!==$n&&$n(e,a)};var Xn=J(null);function Zn(){var e=Xn.current;return null!==e?e:oc.pooledCache}function Qn(e,a){$(Xn,null===a?Xn.current:a.pool)}function er(){var e=Zn();return null===e?null:{parent:Kn._currentValue,pool:e}}var ar=0,tr=null,or=null,nr=null,rr=!1,lr=!1,sr=!1,ir=0,cr=0,ur=null,mr=0;function pr(){throw Error(r(321))}function dr(e,a){if(null===a)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!Yt(e[t],a[t]))return!1;return!0}function yr(e,a,t,o,n,r){return ar=r,tr=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,V.H=null===e||null===e.memoizedState?Dl:Bl,sr=!1,r=t(o,n),sr=!1,lr&&(r=hr(a,t,o,n)),gr(e),r}function gr(e){V.H=Al;var a=null!==or&&null!==or.next;if(ar=0,nr=or=tr=null,rr=!1,cr=0,ur=null,a)throw Error(r(300));null===e||Ul||null!==(e=e.dependencies)&&Ss(e)&&(Ul=!0)}function hr(e,a,t,o){tr=e;var n=0;do{if(lr&&(ur=null),cr=0,lr=!1,25<=n)throw Error(r(301));if(n+=1,nr=or=null,null!=e.updateQueue){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,null!=l.memoCache&&(l.memoCache.index=0)}V.H=Ml,l=a(t,o)}while(lr);return l}function br(){var e=V.H,a=e.useState()[0];return a="function"===typeof a.then?xr(a):a,e=e.useState()[0],(null!==or?or.memoizedState:null)!==e&&(tr.flags|=1024),a}function fr(){var e=0!==ir;return ir=0,e}function wr(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function vr(e){if(rr){for(e=e.memoizedState;null!==e;){var a=e.queue;null!==a&&(a.pending=null),e=e.next}rr=!1}ar=0,nr=or=tr=null,lr=!1,cr=ir=0,ur=null}function _r(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===nr?tr.memoizedState=nr=e:nr=nr.next=e,nr}function Cr(){if(null===or){var e=tr.alternate;e=null!==e?e.memoizedState:null}else e=or.next;var a=null===nr?tr.memoizedState:nr.next;if(null!==a)nr=a,or=e;else{if(null===e){if(null===tr.alternate)throw Error(r(467));throw Error(r(310))}e={memoizedState:(or=e).memoizedState,baseState:or.baseState,baseQueue:or.baseQueue,queue:or.queue,next:null},null===nr?tr.memoizedState=nr=e:nr=nr.next=e}return nr}function xr(e){var a=cr;return cr+=1,null===ur&&(ur=[]),e=yn(ur,e,a),a=tr,null===(null===nr?a.memoizedState:nr.next)&&(a=a.alternate,V.H=null===a||null===a.memoizedState?Dl:Bl),e}function kr(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return xr(e);if(e.$$typeof===f)return As(e)}throw Error(r(438,String(e)))}function Sr(e){var a=null,t=tr.updateQueue;if(null!==t&&(a=t.memoCache),null==a){var o=tr.alternate;null!==o&&(null!==(o=o.updateQueue)&&(null!=(o=o.memoCache)&&(a={data:o.data.map(function(e){return e.slice()}),index:0})))}if(null==a&&(a={data:[],index:0}),null===t&&(t={lastEffect:null,events:null,stores:null,memoCache:null},tr.updateQueue=t),t.memoCache=a,void 0===(t=a.data[a.index]))for(t=a.data[a.index]=Array(e),o=0;o<e;o++)t[o]=S;return a.index++,t}function Lr(e,a){return"function"===typeof a?a(e):a}function Ar(e){return Dr(Cr(),or,e)}function Dr(e,a,t){var o=e.queue;if(null===o)throw Error(r(311));o.lastRenderedReducer=t;var n=e.baseQueue,l=o.pending;if(null!==l){if(null!==n){var s=n.next;n.next=l.next,l.next=s}a.baseQueue=n=l,o.pending=null}if(l=e.baseState,null===n)e.memoizedState=l;else{var i=s=null,c=null,u=a=n.next,m=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(rc&p)===p:(ar&p)===p){var d=u.revertLane;if(0===d)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===qn&&(m=!0);else{if((ar&d)===d){u=u.next,d===qn&&(m=!0);continue}p={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(i=c=p,s=l):c=c.next=p,tr.lanes|=d,dc|=d}p=u.action,sr&&t(l,p),l=u.hasEagerState?u.eagerState:t(l,p)}else d={lane:p,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(i=c=d,s=l):c=c.next=d,tr.lanes|=p,dc|=p;u=u.next}while(null!==u&&u!==a);if(null===c?s=l:c.next=i,!Yt(l,e.memoizedState)&&(Ul=!0,m&&null!==(t=Jn)))throw t;e.memoizedState=l,e.baseState=s,e.baseQueue=c,o.lastRenderedState=l}return null===n&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Br(e){var a=Cr(),t=a.queue;if(null===t)throw Error(r(311));t.lastRenderedReducer=e;var o=t.dispatch,n=t.pending,l=a.memoizedState;if(null!==n){t.pending=null;var s=n=n.next;do{l=e(l,s.action),s=s.next}while(s!==n);Yt(l,a.memoizedState)||(Ul=!0),a.memoizedState=l,null===a.baseQueue&&(a.baseState=l),t.lastRenderedState=l}return[l,o]}function Mr(e,a,t){var o=tr,n=Cr(),l=Zo;if(l){if(void 0===t)throw Error(r(407));t=t()}else t=a();var s=!Yt((or||n).memoizedState,t);if(s&&(n.memoizedState=t,Ul=!0),n=n.queue,al(Rr.bind(null,o,n,e),[e]),n.getSnapshot!==a||s||null!==nr&&1&nr.memoizedState.tag){if(o.flags|=2048,$r(9,Vr.bind(null,o,n,t,a),{destroy:void 0},null),null===oc)throw Error(r(349));l||0!==(60&ar)||Tr(o,a,t)}return t}function Tr(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},null===(a=tr.updateQueue)?(a={lastEffect:null,events:null,stores:null,memoCache:null},tr.updateQueue=a,a.stores=[e]):null===(t=a.stores)?a.stores=[e]:t.push(e)}function Vr(e,a,t,o){a.value=t,a.getSnapshot=o,Pr(a)&&Fr(e)}function Rr(e,a,t){return t(function(){Pr(a)&&Fr(e)})}function Pr(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!Yt(e,t)}catch(o){return!0}}function Fr(e){var a=To(e,2);null!==a&&Pc(a,e,2)}function Gr(e){var a=_r();if("function"===typeof e){var t=e;if(e=t(),sr){_e(!0);try{t()}finally{_e(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},a}function Wr(e,a,t,o){return e.baseState=t,Dr(e,or,"function"===typeof o?o:Lr)}function Or(e,a,t,o,n){if(kl(e))throw Error(r(485));if(null!==(e=a.action)){var l={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){l.listeners.push(e)}};null!==V.T?t(!0):l.isTransition=!1,o(l),null===(t=a.pending)?(l.next=a.pending=l,Er(a,l)):(l.next=t.next,a.pending=t.next=l)}}function Er(e,a){var t=a.action,o=a.payload,n=e.state;if(a.isTransition){var r=V.T,l={};V.T=l;try{var s=t(n,o),i=V.S;null!==i&&i(l,s),Hr(e,a,s)}catch(c){Kr(e,a,c)}finally{V.T=r}}else try{Hr(e,a,r=t(n,o))}catch(u){Kr(e,a,u)}}function Hr(e,a,t){null!==t&&"object"===typeof t&&"function"===typeof t.then?t.then(function(t){Nr(e,a,t)},function(t){return Kr(e,a,t)}):Nr(e,a,t)}function Nr(e,a,t){a.status="fulfilled",a.value=t,jr(a),e.state=t,null!==(a=e.pending)&&((t=a.next)===a?e.pending=null:(t=t.next,a.next=t,Er(e,t)))}function Kr(e,a,t){var o=e.pending;if(e.pending=null,null!==o){o=o.next;do{a.status="rejected",a.reason=t,jr(a),a=a.next}while(a!==o)}e.action=null}function jr(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Ir(e,a){return a}function zr(e,a){if(Zo){var t=oc.formState;if(null!==t){e:{var o=tr;if(Zo){if(Xo){a:{for(var n=Xo,r=en;8!==n.nodeType;){if(!r){n=null;break a}if(null===(n=cm(n.nextSibling))){n=null;break a}}n="F!"===(r=n.data)||"F"===r?n:null}if(n){Xo=cm(n.nextSibling),o="F!"===n.data;break e}}tn(o)}o=!1}o&&(a=t[0])}}return(t=_r()).memoizedState=t.baseState=a,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:a},t.queue=o,t=_l.bind(null,tr,o),o.dispatch=t,o=Gr(!1),r=xl.bind(null,tr,!1,o.queue),n={state:a,dispatch:null,action:e,pending:null},(o=_r()).queue=n,t=Or.bind(null,tr,n,r,t),n.dispatch=t,o.memoizedState=e,[a,t,!1]}function Ur(e){return qr(Cr(),or,e)}function qr(e,a,t){a=Dr(e,a,Ir)[0],e=Ar(Lr)[0],a="object"===typeof a&&null!==a&&"function"===typeof a.then?xr(a):a;var o=Cr(),n=o.queue,r=n.dispatch;return t!==o.memoizedState&&(tr.flags|=2048,$r(9,Jr.bind(null,n,t),{destroy:void 0},null)),[a,r,e]}function Jr(e,a){e.action=a}function Yr(e){var a=Cr(),t=or;if(null!==t)return qr(a,t,e);Cr(),a=a.memoizedState;var o=(t=Cr()).queue.dispatch;return t.memoizedState=e,[a,o,!1]}function $r(e,a,t,o){return e={tag:e,create:a,inst:t,deps:o,next:null},null===(a=tr.updateQueue)&&(a={lastEffect:null,events:null,stores:null,memoCache:null},tr.updateQueue=a),null===(t=a.lastEffect)?a.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,a.lastEffect=e),e}function Xr(){return Cr().memoizedState}function Zr(e,a,t,o){var n=_r();tr.flags|=e,n.memoizedState=$r(1|a,t,{destroy:void 0},void 0===o?null:o)}function Qr(e,a,t,o){var n=Cr();o=void 0===o?null:o;var r=n.memoizedState.inst;null!==or&&null!==o&&dr(o,or.memoizedState.deps)?n.memoizedState=$r(a,t,r,o):(tr.flags|=e,n.memoizedState=$r(1|a,t,r,o))}function el(e,a){Zr(8390656,8,e,a)}function al(e,a){Qr(2048,8,e,a)}function tl(e,a){return Qr(4,2,e,a)}function ol(e,a){return Qr(4,4,e,a)}function nl(e,a){if("function"===typeof a){e=e();var t=a(e);return function(){"function"===typeof t?t():a(null)}}if(null!==a&&void 0!==a)return e=e(),a.current=e,function(){a.current=null}}function rl(e,a,t){t=null!==t&&void 0!==t?t.concat([e]):null,Qr(4,4,nl.bind(null,a,e),t)}function ll(){}function sl(e,a){var t=Cr();a=void 0===a?null:a;var o=t.memoizedState;return null!==a&&dr(a,o[1])?o[0]:(t.memoizedState=[e,a],e)}function il(e,a){var t=Cr();a=void 0===a?null:a;var o=t.memoizedState;if(null!==a&&dr(a,o[1]))return o[0];if(o=e(),sr){_e(!0);try{e()}finally{_e(!1)}}return t.memoizedState=[o,a],o}function cl(e,a,t){return void 0===t||0!==(1073741824&ar)?e.memoizedState=a:(e.memoizedState=t,e=Rc(),tr.lanes|=e,dc|=e,t)}function ul(e,a,t,o){return Yt(t,a)?t:null!==Ln.current?(e=cl(e,t,o),Yt(e,a)||(Ul=!0),e):0===(42&ar)?(Ul=!0,e.memoizedState=t):(e=Rc(),tr.lanes|=e,dc|=e,a)}function ml(e,a,t,o,n){var r=I.p;I.p=0!==r&&8>r?r:8;var l=V.T,s={};V.T=s,xl(e,!1,a,t);try{var i=n(),c=V.S;if(null!==c&&c(s,i),null!==i&&"object"===typeof i&&"function"===typeof i.then)Cl(e,a,function(e,a){var t=[],o={status:"pending",value:null,reason:null,then:function(e){t.push(e)}};return e.then(function(){o.status="fulfilled",o.value=a;for(var e=0;e<t.length;e++)(0,t[e])(a)},function(e){for(o.status="rejected",o.reason=e,e=0;e<t.length;e++)(0,t[e])(void 0)}),o}(i,o),Vc());else Cl(e,a,o,Vc())}catch(u){Cl(e,a,{then:function(){},status:"rejected",reason:u},Vc())}finally{I.p=r,V.T=l}}function pl(){}function dl(e,a,t,o){if(5!==e.tag)throw Error(r(476));var n=yl(e).queue;ml(e,n,a,z,null===t?pl:function(){return gl(e),t(o)})}function yl(e){var a=e.memoizedState;if(null!==a)return a;var t={};return(a={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:z},next:null}).next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:t},next:null},e.memoizedState=a,null!==(e=e.alternate)&&(e.memoizedState=a),a}function gl(e){Cl(e,yl(e).next.queue,{},Vc())}function hl(){return As(Om)}function bl(){return Cr().memoizedState}function fl(){return Cr().memoizedState}function wl(e){for(var a=e.return;null!==a;){switch(a.tag){case 24:case 3:var t=Vc(),o=Ps(a,e=Rs(t),t);return null!==o&&(Pc(o,a,t),Fs(o,a,t)),a={cache:jn()},void(e.payload=a)}a=a.return}}function vl(e,a,t){var o=Vc();t={lane:o,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},kl(e)?Sl(a,t):null!==(t=Mo(e,a,t,o))&&(Pc(t,e,o),Ll(t,a,o))}function _l(e,a,t){Cl(e,a,t,Vc())}function Cl(e,a,t,o){var n={lane:o,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(kl(e))Sl(a,n);else{var r=e.alternate;if(0===e.lanes&&(null===r||0===r.lanes)&&null!==(r=a.lastRenderedReducer))try{var l=a.lastRenderedState,s=r(l,t);if(n.hasEagerState=!0,n.eagerState=s,Yt(s,l))return Bo(e,a,n,0),null===oc&&Do(),!1}catch(i){}if(null!==(t=Mo(e,a,n,o)))return Pc(t,e,o),Ll(t,a,o),!0}return!1}function xl(e,a,t,o){if(o={lane:2,revertLane:xu(),action:o,hasEagerState:!1,eagerState:null,next:null},kl(e)){if(a)throw Error(r(479))}else null!==(a=Mo(e,t,o,2))&&Pc(a,e,2)}function kl(e){var a=e.alternate;return e===tr||null!==a&&a===tr}function Sl(e,a){lr=rr=!0;var t=e.pending;null===t?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Ll(e,a,t){if(0!==(4194176&t)){var o=a.lanes;t|=o&=e.pendingLanes,a.lanes=t,Ge(e,t)}}var Al={readContext:As,use:kr,useCallback:pr,useContext:pr,useEffect:pr,useImperativeHandle:pr,useLayoutEffect:pr,useInsertionEffect:pr,useMemo:pr,useReducer:pr,useRef:pr,useState:pr,useDebugValue:pr,useDeferredValue:pr,useTransition:pr,useSyncExternalStore:pr,useId:pr};Al.useCacheRefresh=pr,Al.useMemoCache=pr,Al.useHostTransitionStatus=pr,Al.useFormState=pr,Al.useActionState=pr,Al.useOptimistic=pr;var Dl={readContext:As,use:kr,useCallback:function(e,a){return _r().memoizedState=[e,void 0===a?null:a],e},useContext:As,useEffect:el,useImperativeHandle:function(e,a,t){t=null!==t&&void 0!==t?t.concat([e]):null,Zr(4194308,4,nl.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Zr(4194308,4,e,a)},useInsertionEffect:function(e,a){Zr(4,2,e,a)},useMemo:function(e,a){var t=_r();a=void 0===a?null:a;var o=e();if(sr){_e(!0);try{e()}finally{_e(!1)}}return t.memoizedState=[o,a],o},useReducer:function(e,a,t){var o=_r();if(void 0!==t){var n=t(a);if(sr){_e(!0);try{t(a)}finally{_e(!1)}}}else n=a;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=vl.bind(null,tr,e),[o.memoizedState,e]},useRef:function(e){return e={current:e},_r().memoizedState=e},useState:function(e){var a=(e=Gr(e)).queue,t=_l.bind(null,tr,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:ll,useDeferredValue:function(e,a){return cl(_r(),e,a)},useTransition:function(){var e=Gr(!1);return e=ml.bind(null,tr,e.queue,!0,!1),_r().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var o=tr,n=_r();if(Zo){if(void 0===t)throw Error(r(407));t=t()}else{if(t=a(),null===oc)throw Error(r(349));0!==(60&rc)||Tr(o,a,t)}n.memoizedState=t;var l={value:t,getSnapshot:a};return n.queue=l,el(Rr.bind(null,o,l,e),[e]),o.flags|=2048,$r(9,Vr.bind(null,o,l,t,a),{destroy:void 0},null),t},useId:function(){var e=_r(),a=oc.identifierPrefix;if(Zo){var t=zo;a=":"+a+"R"+(t=(Io&~(1<<32-Ce(Io)-1)).toString(32)+t),0<(t=ir++)&&(a+="H"+t.toString(32)),a+=":"}else a=":"+a+"r"+(t=mr++).toString(32)+":";return e.memoizedState=a},useCacheRefresh:function(){return _r().memoizedState=wl.bind(null,tr)}};Dl.useMemoCache=Sr,Dl.useHostTransitionStatus=hl,Dl.useFormState=zr,Dl.useActionState=zr,Dl.useOptimistic=function(e){var a=_r();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=xl.bind(null,tr,!0,t),t.dispatch=a,[e,a]};var Bl={readContext:As,use:kr,useCallback:sl,useContext:As,useEffect:al,useImperativeHandle:rl,useInsertionEffect:tl,useLayoutEffect:ol,useMemo:il,useReducer:Ar,useRef:Xr,useState:function(){return Ar(Lr)},useDebugValue:ll,useDeferredValue:function(e,a){return ul(Cr(),or.memoizedState,e,a)},useTransition:function(){var e=Ar(Lr)[0],a=Cr().memoizedState;return["boolean"===typeof e?e:xr(e),a]},useSyncExternalStore:Mr,useId:bl};Bl.useCacheRefresh=fl,Bl.useMemoCache=Sr,Bl.useHostTransitionStatus=hl,Bl.useFormState=Ur,Bl.useActionState=Ur,Bl.useOptimistic=function(e,a){return Wr(Cr(),0,e,a)};var Ml={readContext:As,use:kr,useCallback:sl,useContext:As,useEffect:al,useImperativeHandle:rl,useInsertionEffect:tl,useLayoutEffect:ol,useMemo:il,useReducer:Br,useRef:Xr,useState:function(){return Br(Lr)},useDebugValue:ll,useDeferredValue:function(e,a){var t=Cr();return null===or?cl(t,e,a):ul(t,or.memoizedState,e,a)},useTransition:function(){var e=Br(Lr)[0],a=Cr().memoizedState;return["boolean"===typeof e?e:xr(e),a]},useSyncExternalStore:Mr,useId:bl};function Tl(e,a,t,o){t=null===(t=t(o,a=e.memoizedState))||void 0===t?a:R({},a,t),e.memoizedState=t,0===e.lanes&&(e.updateQueue.baseState=t)}Ml.useCacheRefresh=fl,Ml.useMemoCache=Sr,Ml.useHostTransitionStatus=hl,Ml.useFormState=Yr,Ml.useActionState=Yr,Ml.useOptimistic=function(e,a){var t=Cr();return null!==or?Wr(t,0,e,a):(t.baseState=e,[e,t.queue.dispatch])};var Vl={isMounted:function(e){return!!(e=e._reactInternals)&&E(e)===e},enqueueSetState:function(e,a,t){e=e._reactInternals;var o=Vc(),n=Rs(o);n.payload=a,void 0!==t&&null!==t&&(n.callback=t),null!==(a=Ps(e,n,o))&&(Pc(a,e,o),Fs(a,e,o))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var o=Vc(),n=Rs(o);n.tag=1,n.payload=a,void 0!==t&&null!==t&&(n.callback=t),null!==(a=Ps(e,n,o))&&(Pc(a,e,o),Fs(a,e,o))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Vc(),o=Rs(t);o.tag=2,void 0!==a&&null!==a&&(o.callback=a),null!==(a=Ps(e,o,t))&&(Pc(a,e,t),Fs(a,e,t))}};function Rl(e,a,t,o,n,r,l){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(o,r,l):!a.prototype||!a.prototype.isPureReactComponent||(!$t(t,o)||!$t(n,r))}function Pl(e,a,t,o){e=a.state,"function"===typeof a.componentWillReceiveProps&&a.componentWillReceiveProps(t,o),"function"===typeof a.UNSAFE_componentWillReceiveProps&&a.UNSAFE_componentWillReceiveProps(t,o),a.state!==e&&Vl.enqueueReplaceState(a,a.state,null)}function Fl(e,a){var t=a;if("ref"in a)for(var o in t={},a)"ref"!==o&&(t[o]=a[o]);if(e=e.defaultProps)for(var n in t===a&&(t=R({},t)),e)void 0===t[n]&&(t[n]=e[n]);return t}var Gl="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function Wl(e){Gl(e)}function Ol(e){console.error(e)}function El(e){Gl(e)}function Hl(e,a){try{(0,e.onUncaughtError)(a.value,{componentStack:a.stack})}catch(t){setTimeout(function(){throw t})}}function Nl(e,a,t){try{(0,e.onCaughtError)(t.value,{componentStack:t.stack,errorBoundary:1===a.tag?a.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Kl(e,a,t){return(t=Rs(t)).tag=3,t.payload={element:null},t.callback=function(){Hl(e,a)},t}function jl(e){return(e=Rs(e)).tag=3,e}function Il(e,a,t,o){var n=t.type.getDerivedStateFromError;if("function"===typeof n){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){Nl(a,t,o)}}var l=t.stateNode;null!==l&&"function"===typeof l.componentDidCatch&&(e.callback=function(){Nl(a,t,o),"function"!==typeof n&&(null===kc?kc=new Set([this]):kc.add(this));var e=o.stack;this.componentDidCatch(o.value,{componentStack:null!==e?e:""})})}var zl=Error(r(461)),Ul=!1;function ql(e,a,t,o){a.child=null===e?Sn(a,null,t,o):kn(a,e.child,t,o)}function Jl(e,a,t,o,n){t=t.render;var r=a.ref;if("ref"in o){var l={};for(var s in o)"ref"!==s&&(l[s]=o[s])}else l=o;return Ls(a),o=yr(e,a,t,l,r,n),s=fr(),null===e||Ul?(Zo&&s&&Jo(a),a.flags|=1,ql(e,a,o,n),a.child):(wr(e,a,n),ys(e,a,n))}function Yl(e,a,t,o,n){if(null===e){var r=t.type;return"function"!==typeof r||Oi(r)||void 0!==r.defaultProps||null!==t.compare?((e=Ni(t.type,null,o,a,a.mode,n)).ref=a.ref,e.return=a,a.child=e):(a.tag=15,a.type=r,$l(e,a,r,o,n))}if(r=e.child,!gs(e,n)){var l=r.memoizedProps;if((t=null!==(t=t.compare)?t:$t)(l,o)&&e.ref===a.ref)return ys(e,a,n)}return a.flags|=1,(e=Ei(r,o)).ref=a.ref,e.return=a,a.child=e}function $l(e,a,t,o,n){if(null!==e){var r=e.memoizedProps;if($t(r,o)&&e.ref===a.ref){if(Ul=!1,a.pendingProps=o=r,!gs(e,n))return a.lanes=e.lanes,ys(e,a,n);0!==(131072&e.flags)&&(Ul=!0)}}return es(e,a,t,o,n)}function Xl(e,a,t){var o=a.pendingProps,n=o.children,r=0!==(2&a.stateNode._pendingVisibility),l=null!==e?e.memoizedState:null;if(Ql(e,a),"hidden"===o.mode||r){if(0!==(128&a.flags)){if(o=null!==l?l.baseLanes|t:t,null!==e){for(n=a.child=e.child,r=0;null!==n;)r=r|n.lanes|n.childLanes,n=n.sibling;a.childLanes=r&~o}else a.childLanes=0,a.child=null;return Zl(e,a,o,t)}if(0===(536870912&t))return a.lanes=a.childLanes=536870912,Zl(e,a,null!==l?l.baseLanes|t:t,t);a.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qn(0,null!==l?l.cachePool:null),null!==l?Dn(a,l):Bn(),Pn(a)}else null!==l?(Qn(0,l.cachePool),Dn(a,l),Fn(),a.memoizedState=null):(null!==e&&Qn(0,null),Bn(),Fn());return ql(e,a,n,t),a.child}function Zl(e,a,t,o){var n=Zn();return n=null===n?null:{parent:Kn._currentValue,pool:n},a.memoizedState={baseLanes:t,cachePool:n},null!==e&&Qn(0,null),Bn(),Pn(a),null!==e&&ks(e,a,o,!0),null}function Ql(e,a){var t=a.ref;if(null===t)null!==e&&null!==e.ref&&(a.flags|=2097664);else{if("function"!==typeof t&&"object"!==typeof t)throw Error(r(284));null!==e&&e.ref===t||(a.flags|=2097664)}}function es(e,a,t,o,n){return Ls(a),t=yr(e,a,t,o,void 0,n),o=fr(),null===e||Ul?(Zo&&o&&Jo(a),a.flags|=1,ql(e,a,t,n),a.child):(wr(e,a,n),ys(e,a,n))}function as(e,a,t,o,n,r){return Ls(a),a.updateQueue=null,t=hr(a,o,t,n),gr(e),o=fr(),null===e||Ul?(Zo&&o&&Jo(a),a.flags|=1,ql(e,a,t,r),a.child):(wr(e,a,r),ys(e,a,r))}function ts(e,a,t,o,n){if(Ls(a),null===a.stateNode){var r=Po,l=t.contextType;"object"===typeof l&&null!==l&&(r=As(l)),r=new t(o,r),a.memoizedState=null!==r.state&&void 0!==r.state?r.state:null,r.updater=Vl,a.stateNode=r,r._reactInternals=a,(r=a.stateNode).props=o,r.state=a.memoizedState,r.refs={},Ts(a),l=t.contextType,r.context="object"===typeof l&&null!==l?As(l):Po,r.state=a.memoizedState,"function"===typeof(l=t.getDerivedStateFromProps)&&(Tl(a,t,l,o),r.state=a.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof r.getSnapshotBeforeUpdate||"function"!==typeof r.UNSAFE_componentWillMount&&"function"!==typeof r.componentWillMount||(l=r.state,"function"===typeof r.componentWillMount&&r.componentWillMount(),"function"===typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),l!==r.state&&Vl.enqueueReplaceState(r,r.state,null),Es(a,o,r,n),Os(),r.state=a.memoizedState),"function"===typeof r.componentDidMount&&(a.flags|=4194308),o=!0}else if(null===e){r=a.stateNode;var s=a.memoizedProps,i=Fl(t,s);r.props=i;var c=r.context,u=t.contextType;l=Po,"object"===typeof u&&null!==u&&(l=As(u));var m=t.getDerivedStateFromProps;u="function"===typeof m||"function"===typeof r.getSnapshotBeforeUpdate,s=a.pendingProps!==s,u||"function"!==typeof r.UNSAFE_componentWillReceiveProps&&"function"!==typeof r.componentWillReceiveProps||(s||c!==l)&&Pl(a,r,o,l),Ms=!1;var p=a.memoizedState;r.state=p,Es(a,o,r,n),Os(),c=a.memoizedState,s||p!==c||Ms?("function"===typeof m&&(Tl(a,t,m,o),c=a.memoizedState),(i=Ms||Rl(a,t,i,o,p,c,l))?(u||"function"!==typeof r.UNSAFE_componentWillMount&&"function"!==typeof r.componentWillMount||("function"===typeof r.componentWillMount&&r.componentWillMount(),"function"===typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount()),"function"===typeof r.componentDidMount&&(a.flags|=4194308)):("function"===typeof r.componentDidMount&&(a.flags|=4194308),a.memoizedProps=o,a.memoizedState=c),r.props=o,r.state=c,r.context=l,o=i):("function"===typeof r.componentDidMount&&(a.flags|=4194308),o=!1)}else{r=a.stateNode,Vs(e,a),u=Fl(t,l=a.memoizedProps),r.props=u,m=a.pendingProps,p=r.context,c=t.contextType,i=Po,"object"===typeof c&&null!==c&&(i=As(c)),(c="function"===typeof(s=t.getDerivedStateFromProps)||"function"===typeof r.getSnapshotBeforeUpdate)||"function"!==typeof r.UNSAFE_componentWillReceiveProps&&"function"!==typeof r.componentWillReceiveProps||(l!==m||p!==i)&&Pl(a,r,o,i),Ms=!1,p=a.memoizedState,r.state=p,Es(a,o,r,n),Os();var d=a.memoizedState;l!==m||p!==d||Ms||null!==e&&null!==e.dependencies&&Ss(e.dependencies)?("function"===typeof s&&(Tl(a,t,s,o),d=a.memoizedState),(u=Ms||Rl(a,t,u,o,p,d,i)||null!==e&&null!==e.dependencies&&Ss(e.dependencies))?(c||"function"!==typeof r.UNSAFE_componentWillUpdate&&"function"!==typeof r.componentWillUpdate||("function"===typeof r.componentWillUpdate&&r.componentWillUpdate(o,d,i),"function"===typeof r.UNSAFE_componentWillUpdate&&r.UNSAFE_componentWillUpdate(o,d,i)),"function"===typeof r.componentDidUpdate&&(a.flags|=4),"function"===typeof r.getSnapshotBeforeUpdate&&(a.flags|=1024)):("function"!==typeof r.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(a.flags|=4),"function"!==typeof r.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(a.flags|=1024),a.memoizedProps=o,a.memoizedState=d),r.props=o,r.state=d,r.context=i,o=u):("function"!==typeof r.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(a.flags|=4),"function"!==typeof r.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(a.flags|=1024),o=!1)}return r=o,Ql(e,a),o=0!==(128&a.flags),r||o?(r=a.stateNode,t=o&&"function"!==typeof t.getDerivedStateFromError?null:r.render(),a.flags|=1,null!==e&&o?(a.child=kn(a,e.child,null,n),a.child=kn(a,null,t,n)):ql(e,a,t,n),a.memoizedState=r.state,e=a.child):e=ys(e,a,n),e}function os(e,a,t,o){return ln(),a.flags|=256,ql(e,a,t,o),a.child}var ns={dehydrated:null,treeContext:null,retryLane:0};function rs(e){return{baseLanes:e,cachePool:er()}}function ls(e,a,t){return e=null!==e?e.childLanes&~t:0,a&&(e|=hc),e}function ss(e,a,t){var o,n=a.pendingProps,l=!1,s=0!==(128&a.flags);if((o=s)||(o=(null===e||null!==e.memoizedState)&&0!==(2&Wn.current)),o&&(l=!0,a.flags&=-129),o=0!==(32&a.flags),a.flags&=-33,null===e){if(Zo){if(l?Rn(a):Fn(),Zo){var i,c=Xo;if(i=c){e:{for(i=c,c=en;8!==i.nodeType;){if(!c){c=null;break e}if(null===(i=cm(i.nextSibling))){c=null;break e}}c=i}null!==c?(a.memoizedState={dehydrated:c,treeContext:null!==jo?{id:Io,overflow:zo}:null,retryLane:536870912},(i=Wi(18,null,null,0)).stateNode=c,i.return=a,a.child=i,$o=a,Xo=null,i=!0):i=!1}i||tn(a)}if(null!==(c=a.memoizedState)&&null!==(c=c.dehydrated))return"$!"===c.data?a.lanes=16:a.lanes=536870912,null;Gn(a)}return c=n.children,n=n.fallback,l?(Fn(),c=cs({mode:"hidden",children:c},l=a.mode),n=Ki(n,l,t,null),c.return=a,n.return=a,c.sibling=n,a.child=c,(l=a.child).memoizedState=rs(t),l.childLanes=ls(e,o,t),a.memoizedState=ns,n):(Rn(a),is(a,c))}if(null!==(i=e.memoizedState)&&null!==(c=i.dehydrated)){if(s)256&a.flags?(Rn(a),a.flags&=-257,a=us(e,a,t)):null!==a.memoizedState?(Fn(),a.child=e.child,a.flags|=128,a=null):(Fn(),l=n.fallback,c=a.mode,n=cs({mode:"visible",children:n.children},c),(l=Ki(l,c,t,null)).flags|=2,n.return=a,l.return=a,n.sibling=l,a.child=n,kn(a,e.child,null,t),(n=a.child).memoizedState=rs(t),n.childLanes=ls(e,o,t),a.memoizedState=ns,a=l);else if(Rn(a),"$!"===c.data){if(o=c.nextSibling&&c.nextSibling.dataset)var u=o.dgst;o=u,(n=Error(r(419))).stack="",n.digest=o,sn({value:n,source:null,stack:null}),a=us(e,a,t)}else if(Ul||ks(e,a,t,!1),o=0!==(t&e.childLanes),Ul||o){if(null!==(o=oc)){if(0!==(42&(n=t&-t)))n=1;else switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=64;break;case 268435456:n=134217728;break;default:n=0}if(0!==(n=0!==(n&(o.suspendedLanes|t))?0:n)&&n!==i.retryLane)throw i.retryLane=n,To(e,n),Pc(o,e,n),zl}"$?"===c.data||Uc(),a=us(e,a,t)}else"$?"===c.data?(a.flags|=128,a.child=e.child,a=cu.bind(null,e),c._reactRetry=a,a=null):(e=i.treeContext,Xo=cm(c.nextSibling),$o=a,Zo=!0,Qo=null,en=!1,null!==e&&(No[Ko++]=Io,No[Ko++]=zo,No[Ko++]=jo,Io=e.id,zo=e.overflow,jo=a),(a=is(a,n.children)).flags|=4096);return a}return l?(Fn(),l=n.fallback,c=a.mode,u=(i=e.child).sibling,(n=Ei(i,{mode:"hidden",children:n.children})).subtreeFlags=31457280&i.subtreeFlags,null!==u?l=Ei(u,l):(l=Ki(l,c,t,null)).flags|=2,l.return=a,n.return=a,n.sibling=l,a.child=n,n=l,l=a.child,null===(c=e.child.memoizedState)?c=rs(t):(null!==(i=c.cachePool)?(u=Kn._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=er(),c={baseLanes:c.baseLanes|t,cachePool:i}),l.memoizedState=c,l.childLanes=ls(e,o,t),a.memoizedState=ns,n):(Rn(a),e=(t=e.child).sibling,(t=Ei(t,{mode:"visible",children:n.children})).return=a,t.sibling=null,null!==e&&(null===(o=a.deletions)?(a.deletions=[e],a.flags|=16):o.push(e)),a.child=t,a.memoizedState=null,t)}function is(e,a){return(a=cs({mode:"visible",children:a},e.mode)).return=e,e.child=a}function cs(e,a){return ji(e,a,0,null)}function us(e,a,t){return kn(a,e.child,null,t),(e=is(a,a.pendingProps.children)).flags|=2,a.memoizedState=null,e}function ms(e,a,t){e.lanes|=a;var o=e.alternate;null!==o&&(o.lanes|=a),Cs(e.return,a,t)}function ps(e,a,t,o,n){var r=e.memoizedState;null===r?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:n}:(r.isBackwards=a,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=t,r.tailMode=n)}function ds(e,a,t){var o=a.pendingProps,n=o.revealOrder,r=o.tail;if(ql(e,a,o.children,t),0!==(2&(o=Wn.current)))o=1&o|2,a.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=a.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ms(e,t,a);else if(19===e.tag)ms(e,t,a);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;null===e.sibling;){if(null===e.return||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch($(Wn,o),n){case"forwards":for(t=a.child,n=null;null!==t;)null!==(e=t.alternate)&&null===On(e)&&(n=t),t=t.sibling;null===(t=n)?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),ps(a,!1,n,t,r);break;case"backwards":for(t=null,n=a.child,a.child=null;null!==n;){if(null!==(e=n.alternate)&&null===On(e)){a.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}ps(a,!0,t,null,r);break;case"together":ps(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ys(e,a,t){if(null!==e&&(a.dependencies=e.dependencies),dc|=a.lanes,0===(t&a.childLanes)){if(null===e)return null;if(ks(e,a,t,!1),0===(t&a.childLanes))return null}if(null!==e&&a.child!==e.child)throw Error(r(153));if(null!==a.child){for(t=Ei(e=a.child,e.pendingProps),a.child=t,t.return=a;null!==e.sibling;)e=e.sibling,(t=t.sibling=Ei(e,e.pendingProps)).return=a;t.sibling=null}return a.child}function gs(e,a){return 0!==(e.lanes&a)||!(null===(e=e.dependencies)||!Ss(e))}function hs(e,a,t){if(null!==e)if(e.memoizedProps!==a.pendingProps)Ul=!0;else{if(!gs(e,t)&&0===(128&a.flags))return Ul=!1,function(e,a,t){switch(a.tag){case 3:ae(a,a.stateNode.containerInfo),vs(a,Kn,e.memoizedState.cache),ln();break;case 27:case 5:oe(a);break;case 4:ae(a,a.stateNode.containerInfo);break;case 10:vs(a,a.type,a.memoizedProps.value);break;case 13:var o=a.memoizedState;if(null!==o)return null!==o.dehydrated?(Rn(a),a.flags|=128,null):0!==(t&a.child.childLanes)?ss(e,a,t):(Rn(a),null!==(e=ys(e,a,t))?e.sibling:null);Rn(a);break;case 19:var n=0!==(128&e.flags);if((o=0!==(t&a.childLanes))||(ks(e,a,t,!1),o=0!==(t&a.childLanes)),n){if(o)return ds(e,a,t);a.flags|=128}if(null!==(n=a.memoizedState)&&(n.rendering=null,n.tail=null,n.lastEffect=null),$(Wn,Wn.current),o)break;return null;case 22:case 23:return a.lanes=0,Xl(e,a,t);case 24:vs(a,Kn,e.memoizedState.cache)}return ys(e,a,t)}(e,a,t);Ul=0!==(131072&e.flags)}else Ul=!1,Zo&&0!==(1048576&a.flags)&&qo(a,Ho,a.index);switch(a.lanes=0,a.tag){case 16:e:{e=a.pendingProps;var o=a.elementType,n=o._init;if(o=n(o._payload),a.type=o,"function"!==typeof o){if(void 0!==o&&null!==o){if((n=o.$$typeof)===w){a.tag=11,a=Jl(null,a,o,e,t);break e}if(n===C){a.tag=14,a=Yl(null,a,o,e,t);break e}}throw a=B(o)||o,Error(r(306,a,""))}Oi(o)?(e=Fl(o,e),a.tag=1,a=ts(null,a,o,e,t)):(a.tag=0,a=es(null,a,o,e,t))}return a;case 0:return es(e,a,a.type,a.pendingProps,t);case 1:return ts(e,a,o=a.type,n=Fl(o,a.pendingProps),t);case 3:e:{if(ae(a,a.stateNode.containerInfo),null===e)throw Error(r(387));var l=a.pendingProps;o=(n=a.memoizedState).element,Vs(e,a),Es(a,l,null,t);var s=a.memoizedState;if(l=s.cache,vs(a,Kn,l),l!==n.cache&&xs(a,[Kn],t,!0),Os(),l=s.element,n.isDehydrated){if(n={element:l,isDehydrated:!1,cache:s.cache},a.updateQueue.baseState=n,a.memoizedState=n,256&a.flags){a=os(e,a,l,t);break e}if(l!==o){sn(o=Go(Error(r(424)),a)),a=os(e,a,l,t);break e}for(Xo=cm(a.stateNode.containerInfo.firstChild),$o=a,Zo=!0,Qo=null,en=!0,t=Sn(a,null,l,t),a.child=t;t;)t.flags=-3&t.flags|4096,t=t.sibling}else{if(ln(),l===o){a=ys(e,a,t);break e}ql(e,a,l,t)}a=a.child}return a;case 26:return Ql(e,a),null===e?(t=fm(a.type,null,a.pendingProps,null))?a.memoizedState=t:Zo||(t=a.type,e=a.pendingProps,(o=Xu(Q.current).createElement(t))[He]=a,o[Ne]=e,Ju(o,t,e),Qe(o),a.stateNode=o):a.memoizedState=fm(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return oe(a),null===e&&Zo&&(o=a.stateNode=mm(a.type,a.pendingProps,Q.current),$o=a,en=!0,Xo=cm(o.firstChild)),o=a.pendingProps.children,null!==e||Zo?ql(e,a,o,t):a.child=kn(a,null,o,t),Ql(e,a),a.child;case 5:return null===e&&Zo&&((n=o=Xo)&&(null!==(o=function(e,a,t,o){for(;1===e.nodeType;){var n=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!o&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(o){if(!e[qe])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(r=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(null==n.href?null:n.href)||e.getAttribute("crossorigin")!==(null==n.crossOrigin?null:n.crossOrigin)||e.getAttribute("title")!==(null==n.title?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((r=e.getAttribute("src"))!==(null==n.src?null:n.src)||e.getAttribute("type")!==(null==n.type?null:n.type)||e.getAttribute("crossorigin")!==(null==n.crossOrigin?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==a||"hidden"!==e.type)return e;var r=null==n.name?null:""+n.name;if("hidden"===n.type&&e.getAttribute("name")===r)return e}if(null===(e=cm(e.nextSibling)))break}return null}(o,a.type,a.pendingProps,en))?(a.stateNode=o,$o=a,Xo=cm(o.firstChild),en=!1,n=!0):n=!1),n||tn(a)),oe(a),n=a.type,l=a.pendingProps,s=null!==e?e.memoizedProps:null,o=l.children,em(n,l)?o=null:null!==s&&em(n,s)&&(a.flags|=32),null!==a.memoizedState&&(n=yr(e,a,br,null,null,t),Om._currentValue=n),Ql(e,a),ql(e,a,o,t),a.child;case 6:return null===e&&Zo&&((e=t=Xo)&&(null!==(t=function(e,a,t){if(""===a)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=cm(e.nextSibling)))return null}return e}(t,a.pendingProps,en))?(a.stateNode=t,$o=a,Xo=null,e=!0):e=!1),e||tn(a)),null;case 13:return ss(e,a,t);case 4:return ae(a,a.stateNode.containerInfo),o=a.pendingProps,null===e?a.child=kn(a,null,o,t):ql(e,a,o,t),a.child;case 11:return Jl(e,a,a.type,a.pendingProps,t);case 7:return ql(e,a,a.pendingProps,t),a.child;case 8:case 12:return ql(e,a,a.pendingProps.children,t),a.child;case 10:return o=a.pendingProps,vs(a,a.type,o.value),ql(e,a,o.children,t),a.child;case 9:return n=a.type._context,o=a.pendingProps.children,Ls(a),o=o(n=As(n)),a.flags|=1,ql(e,a,o,t),a.child;case 14:return Yl(e,a,a.type,a.pendingProps,t);case 15:return $l(e,a,a.type,a.pendingProps,t);case 19:return ds(e,a,t);case 22:return Xl(e,a,t);case 24:return Ls(a),o=As(Kn),null===e?(null===(n=Zn())&&(n=oc,l=jn(),n.pooledCache=l,l.refCount++,null!==l&&(n.pooledCacheLanes|=t),n=l),a.memoizedState={parent:o,cache:n},Ts(a),vs(a,Kn,n)):(0!==(e.lanes&t)&&(Vs(e,a),Es(a,null,null,t),Os()),n=e.memoizedState,l=a.memoizedState,n.parent!==o?(n={parent:o,cache:o},a.memoizedState=n,0===a.lanes&&(a.memoizedState=a.updateQueue.baseState=n),vs(a,Kn,o)):(o=l.cache,vs(a,Kn,o),o!==n.cache&&xs(a,[Kn],t,!0))),ql(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}var bs=J(null),fs=null,ws=null;function vs(e,a,t){$(bs,a._currentValue),a._currentValue=t}function _s(e){e._currentValue=bs.current,Y(bs)}function Cs(e,a,t){for(;null!==e;){var o=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,null!==o&&(o.childLanes|=a)):null!==o&&(o.childLanes&a)!==a&&(o.childLanes|=a),e===t)break;e=e.return}}function xs(e,a,t,o){var n=e.child;for(null!==n&&(n.return=e);null!==n;){var l=n.dependencies;if(null!==l){var s=n.child;l=l.firstContext;e:for(;null!==l;){var i=l;l=n;for(var c=0;c<a.length;c++)if(i.context===a[c]){l.lanes|=t,null!==(i=l.alternate)&&(i.lanes|=t),Cs(l.return,t,e),o||(s=null);break e}l=i.next}}else if(18===n.tag){if(null===(s=n.return))throw Error(r(341));s.lanes|=t,null!==(l=s.alternate)&&(l.lanes|=t),Cs(s,t,e),s=null}else s=n.child;if(null!==s)s.return=n;else for(s=n;null!==s;){if(s===e){s=null;break}if(null!==(n=s.sibling)){n.return=s.return,s=n;break}s=s.return}n=s}}function ks(e,a,t,o){e=null;for(var n=a,l=!1;null!==n;){if(!l)if(0!==(524288&n.flags))l=!0;else if(0!==(262144&n.flags))break;if(10===n.tag){var s=n.alternate;if(null===s)throw Error(r(387));if(null!==(s=s.memoizedProps)){var i=n.type;Yt(n.pendingProps.value,s.value)||(null!==e?e.push(i):e=[i])}}else if(n===ee.current){if(null===(s=n.alternate))throw Error(r(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(null!==e?e.push(Om):e=[Om])}n=n.return}null!==e&&xs(a,e,t,o),a.flags|=262144}function Ss(e){for(e=e.firstContext;null!==e;){if(!Yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ls(e){fs=e,ws=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function As(e){return Bs(fs,e)}function Ds(e,a){return null===fs&&Ls(e),Bs(e,a)}function Bs(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},null===ws){if(null===e)throw Error(r(308));ws=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ws=ws.next=a;return t}var Ms=!1;function Ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vs(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ps(e,a,t){var o=e.updateQueue;if(null===o)return null;if(o=o.shared,0!==(2&tc)){var n=o.pending;return null===n?a.next=a:(a.next=n.next,n.next=a),o.pending=a,a=Ro(e),Vo(e,null,t),a}return Bo(e,o,a,t),Ro(e)}function Fs(e,a,t){if(null!==(a=a.updateQueue)&&(a=a.shared,0!==(4194176&t))){var o=a.lanes;t|=o&=e.pendingLanes,a.lanes=t,Ge(e,t)}}function Gs(e,a){var t=e.updateQueue,o=e.alternate;if(null!==o&&t===(o=o.updateQueue)){var n=null,r=null;if(null!==(t=t.firstBaseUpdate)){do{var l={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};null===r?n=r=l:r=r.next=l,t=t.next}while(null!==t);null===r?n=r=a:r=r.next=a}else n=r=a;return t={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},void(e.updateQueue=t)}null===(e=t.lastBaseUpdate)?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Ws=!1;function Os(){if(Ws){if(null!==Jn)throw Jn}}function Es(e,a,t,o){Ws=!1;var n=e.updateQueue;Ms=!1;var r=n.firstBaseUpdate,l=n.lastBaseUpdate,s=n.shared.pending;if(null!==s){n.shared.pending=null;var i=s,c=i.next;i.next=null,null===l?r=c:l.next=c,l=i;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==l&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=i))}if(null!==r){var m=n.baseState;for(l=0,u=c=i=null,s=r;;){var p=-536870913&s.lane,d=p!==s.lane;if(d?(rc&p)===p:(o&p)===p){0!==p&&p===qn&&(Ws=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var y=e,g=s;p=a;var h=t;switch(g.tag){case 1:if("function"===typeof(y=g.payload)){m=y.call(h,m,p);break e}m=y;break e;case 3:y.flags=-65537&y.flags|128;case 0:if(null===(p="function"===typeof(y=g.payload)?y.call(h,m,p):y)||void 0===p)break e;m=R({},m,p);break e;case 2:Ms=!0}}null!==(p=s.callback)&&(e.flags|=64,d&&(e.flags|=8192),null===(d=n.callbacks)?n.callbacks=[p]:d.push(p))}else d={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=d,i=m):u=u.next=d,l|=p;if(null===(s=s.next)){if(null===(s=n.shared.pending))break;s=(d=s).next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}null===u&&(i=m),n.baseState=i,n.firstBaseUpdate=c,n.lastBaseUpdate=u,null===r&&(n.shared.lanes=0),dc|=l,e.lanes=l,e.memoizedState=m}}function Hs(e,a){if("function"!==typeof e)throw Error(r(191,e));e.call(a)}function Ns(e,a){var t=e.callbacks;if(null!==t)for(e.callbacks=null,e=0;e<t.length;e++)Hs(t[e],a)}function Ks(e,a){try{var t=a.updateQueue,o=null!==t?t.lastEffect:null;if(null!==o){var n=o.next;t=n;do{if((t.tag&e)===e){o=void 0;var r=t.create,l=t.inst;o=r(),l.destroy=o}t=t.next}while(t!==n)}}catch(s){ru(a,a.return,s)}}function js(e,a,t){try{var o=a.updateQueue,n=null!==o?o.lastEffect:null;if(null!==n){var r=n.next;o=r;do{if((o.tag&e)===e){var l=o.inst,s=l.destroy;if(void 0!==s){l.destroy=void 0,n=a;var i=t;try{s()}catch(c){ru(n,i,c)}}}o=o.next}while(o!==r)}}catch(c){ru(a,a.return,c)}}function Is(e){var a=e.updateQueue;if(null!==a){var t=e.stateNode;try{Ns(a,t)}catch(o){ru(e,e.return,o)}}}function zs(e,a,t){t.props=Fl(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(o){ru(e,a,o)}}function Us(e,a){try{var t=e.ref;if(null!==t){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var n=o;break;default:n=o}"function"===typeof t?e.refCleanup=t(n):t.current=n}}catch(r){ru(e,a,r)}}function qs(e,a){var t=e.ref,o=e.refCleanup;if(null!==t)if("function"===typeof o)try{o()}catch(n){ru(e,a,n)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof t)try{t(null)}catch(r){ru(e,a,r)}else t.current=null}function Js(e){var a=e.type,t=e.memoizedProps,o=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&o.focus();break e;case"img":t.src?o.src=t.src:t.srcSet&&(o.srcset=t.srcSet)}}catch(n){ru(e,e.return,n)}}function Ys(e,a,t){try{var o=e.stateNode;!function(e,a,t,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,s=null,i=null,c=null,u=null,m=null;for(y in t){var p=t[y];if(t.hasOwnProperty(y)&&null!=p)switch(y){case"checked":case"value":break;case"defaultValue":c=p;default:o.hasOwnProperty(y)||Uu(e,a,y,null,o,p)}}for(var d in o){var y=o[d];if(p=t[d],o.hasOwnProperty(d)&&(null!=y||null!=p))switch(d){case"type":l=y;break;case"name":n=y;break;case"checked":u=y;break;case"defaultChecked":m=y;break;case"value":s=y;break;case"defaultValue":i=y;break;case"children":case"dangerouslySetInnerHTML":if(null!=y)throw Error(r(137,a));break;default:y!==p&&Uu(e,a,d,y,o,p)}}return void fa(e,s,i,c,u,m,l,n);case"select":for(l in y=s=i=d=null,t)if(c=t[l],t.hasOwnProperty(l)&&null!=c)switch(l){case"value":break;case"multiple":y=c;default:o.hasOwnProperty(l)||Uu(e,a,l,null,o,c)}for(n in o)if(l=o[n],c=t[n],o.hasOwnProperty(n)&&(null!=l||null!=c))switch(n){case"value":d=l;break;case"defaultValue":i=l;break;case"multiple":s=l;default:l!==c&&Uu(e,a,n,l,o,c)}return a=i,t=s,o=y,void(null!=d?_a(e,!!t,d,!1):!!o!==!!t&&(null!=a?_a(e,!!t,a,!0):_a(e,!!t,t?[]:"",!1)));case"textarea":for(i in y=d=null,t)if(n=t[i],t.hasOwnProperty(i)&&null!=n&&!o.hasOwnProperty(i))switch(i){case"value":case"children":break;default:Uu(e,a,i,null,o,n)}for(s in o)if(n=o[s],l=t[s],o.hasOwnProperty(s)&&(null!=n||null!=l))switch(s){case"value":d=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=n)throw Error(r(91));break;default:n!==l&&Uu(e,a,s,n,o,l)}return void Ca(e,d,y);case"option":for(var g in t)if(d=t[g],t.hasOwnProperty(g)&&null!=d&&!o.hasOwnProperty(g))if("selected"===g)e.selected=!1;else Uu(e,a,g,null,o,d);for(c in o)if(d=o[c],y=t[c],o.hasOwnProperty(c)&&d!==y&&(null!=d||null!=y))if("selected"===c)e.selected=d&&"function"!==typeof d&&"symbol"!==typeof d;else Uu(e,a,c,d,o,y);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var h in t)d=t[h],t.hasOwnProperty(h)&&null!=d&&!o.hasOwnProperty(h)&&Uu(e,a,h,null,o,d);for(u in o)if(d=o[u],y=t[u],o.hasOwnProperty(u)&&d!==y&&(null!=d||null!=y))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(r(137,a));break;default:Uu(e,a,u,d,o,y)}return;default:if(Da(a)){for(var b in t)d=t[b],t.hasOwnProperty(b)&&void 0!==d&&!o.hasOwnProperty(b)&&qu(e,a,b,void 0,o,d);for(m in o)d=o[m],y=t[m],!o.hasOwnProperty(m)||d===y||void 0===d&&void 0===y||qu(e,a,m,d,o,y);return}}for(var f in t)d=t[f],t.hasOwnProperty(f)&&null!=d&&!o.hasOwnProperty(f)&&Uu(e,a,f,null,o,d);for(p in o)d=o[p],y=t[p],!o.hasOwnProperty(p)||d===y||null==d&&null==y||Uu(e,a,p,d,o,y)}(o,e.type,t,a),o[Ne]=a}catch(n){ru(e,e.return,n)}}function $s(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag||4===e.tag}function Xs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||$s(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&27!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Zs(e,a,t){var o=e.tag;if(5===o||6===o)e=e.stateNode,a?8===t.nodeType?t.parentNode.insertBefore(e,a):t.insertBefore(e,a):(8===t.nodeType?(a=t.parentNode).insertBefore(e,t):(a=t).appendChild(e),null!==(t=t._reactRootContainer)&&void 0!==t||null!==a.onclick||(a.onclick=zu));else if(4!==o&&27!==o&&null!==(e=e.child))for(Zs(e,a,t),e=e.sibling;null!==e;)Zs(e,a,t),e=e.sibling}function Qs(e,a,t){var o=e.tag;if(5===o||6===o)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(4!==o&&27!==o&&null!==(e=e.child))for(Qs(e,a,t),e=e.sibling;null!==e;)Qs(e,a,t),e=e.sibling}var ei=!1,ai=!1,ti=!1,oi="function"===typeof WeakSet?WeakSet:Set,ni=null,ri=!1;function li(e,a,t){var o=t.flags;switch(t.tag){case 0:case 11:case 15:wi(e,t),4&o&&Ks(5,t);break;case 1:if(wi(e,t),4&o)if(e=t.stateNode,null===a)try{e.componentDidMount()}catch(s){ru(t,t.return,s)}else{var n=Fl(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ru(t,t.return,i)}}64&o&&Is(t),512&o&&Us(t,t.return);break;case 3:if(wi(e,t),64&o&&null!==(o=t.updateQueue)){if(e=null,null!==t.child)switch(t.child.tag){case 27:case 5:case 1:e=t.child.stateNode}try{Ns(o,e)}catch(s){ru(t,t.return,s)}}break;case 26:wi(e,t),512&o&&Us(t,t.return);break;case 27:case 5:wi(e,t),null===a&&4&o&&Js(t),512&o&&Us(t,t.return);break;case 12:default:wi(e,t);break;case 13:wi(e,t),4&o&&pi(e,t);break;case 22:if(!(n=null!==t.memoizedState||ei)){a=null!==a&&null!==a.memoizedState||ai;var r=ei,l=ai;ei=n,(ai=a)&&!l?_i(e,t,0!==(8772&t.subtreeFlags)):wi(e,t),ei=r,ai=l}512&o&&("manual"===t.memoizedProps.mode?Us(t,t.return):qs(t,t.return))}}function si(e){var a=e.alternate;null!==a&&(e.alternate=null,si(a)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(a=e.stateNode)&&Je(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ii=null,ci=!1;function ui(e,a,t){for(t=t.child;null!==t;)mi(e,a,t),t=t.sibling}function mi(e,a,t){if(ve&&"function"===typeof ve.onCommitFiberUnmount)try{ve.onCommitFiberUnmount(we,t)}catch(l){}switch(t.tag){case 26:ai||qs(t,a),ui(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode).parentNode.removeChild(t);break;case 27:ai||qs(t,a);var o=ii,n=ci;for(ii=t.stateNode,ui(e,a,t),a=(t=t.stateNode).attributes;a.length;)t.removeAttributeNode(a[0]);Je(t),ii=o,ci=n;break;case 5:ai||qs(t,a);case 6:n=ii;var r=ci;if(ii=null,ui(e,a,t),ci=r,null!==(ii=n))if(ci)try{e=ii,o=t.stateNode,8===e.nodeType?e.parentNode.removeChild(o):e.removeChild(o)}catch(s){ru(t,a,s)}else try{ii.removeChild(t.stateNode)}catch(s){ru(t,a,s)}break;case 18:null!==ii&&(ci?(a=ii,t=t.stateNode,8===a.nodeType?sm(a.parentNode,t):1===a.nodeType&&sm(a,t),bp(a)):sm(ii,t.stateNode));break;case 4:o=ii,n=ci,ii=t.stateNode.containerInfo,ci=!0,ui(e,a,t),ii=o,ci=n;break;case 0:case 11:case 14:case 15:ai||js(2,t,a),ai||js(4,t,a),ui(e,a,t);break;case 1:ai||(qs(t,a),"function"===typeof(o=t.stateNode).componentWillUnmount&&zs(t,a,o)),ui(e,a,t);break;case 21:ui(e,a,t);break;case 22:ai||qs(t,a),ai=(o=ai)||null!==t.memoizedState,ui(e,a,t),ai=o;break;default:ui(e,a,t)}}function pi(e,a){if(null===a.memoizedState&&(null!==(e=a.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{bp(e)}catch(t){ru(a,a.return,t)}}function di(e,a){var t=function(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return null===a&&(a=e.stateNode=new oi),a;case 22:return null===(a=(e=e.stateNode)._retryCache)&&(a=e._retryCache=new oi),a;default:throw Error(r(435,e.tag))}}(e);a.forEach(function(a){var o=uu.bind(null,e,a);t.has(a)||(t.add(a),a.then(o,o))})}function yi(e,a){var t=a.deletions;if(null!==t)for(var o=0;o<t.length;o++){var n=t[o],l=e,s=a,i=s;e:for(;null!==i;){switch(i.tag){case 27:case 5:ii=i.stateNode,ci=!1;break e;case 3:case 4:ii=i.stateNode.containerInfo,ci=!0;break e}i=i.return}if(null===ii)throw Error(r(160));mi(l,s,n),ii=null,ci=!1,null!==(l=n.alternate)&&(l.return=null),n.return=null}if(13878&a.subtreeFlags)for(a=a.child;null!==a;)hi(a,e),a=a.sibling}var gi=null;function hi(e,a){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yi(a,e),bi(e),4&o&&(js(3,e,e.return),Ks(3,e),js(5,e,e.return));break;case 1:yi(a,e),bi(e),512&o&&(ai||null===t||qs(t,t.return)),64&o&&ei&&(null!==(e=e.updateQueue)&&(null!==(o=e.callbacks)&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===t?o:t.concat(o))));break;case 26:var n=gi;if(yi(a,e),bi(e),512&o&&(ai||null===t||qs(t,t.return)),4&o){var l=null!==t?t.memoizedState:null;if(o=e.memoizedState,null===t)if(null===o)if(null===e.stateNode){e:{o=e.type,t=e.memoizedProps,n=n.ownerDocument||n;a:switch(o){case"title":(!(l=n.getElementsByTagName("title")[0])||l[qe]||l[He]||"http://www.w3.org/2000/svg"===l.namespaceURI||l.hasAttribute("itemprop"))&&(l=n.createElement(o),n.head.insertBefore(l,n.querySelector("head > title"))),Ju(l,o,t),l[He]=e,Qe(l),o=l;break e;case"link":var s=Bm("link","href",n).get(o+(t.href||""));if(s)for(var i=0;i<s.length;i++)if((l=s[i]).getAttribute("href")===(null==t.href?null:t.href)&&l.getAttribute("rel")===(null==t.rel?null:t.rel)&&l.getAttribute("title")===(null==t.title?null:t.title)&&l.getAttribute("crossorigin")===(null==t.crossOrigin?null:t.crossOrigin)){s.splice(i,1);break a}Ju(l=n.createElement(o),o,t),n.head.appendChild(l);break;case"meta":if(s=Bm("meta","content",n).get(o+(t.content||"")))for(i=0;i<s.length;i++)if((l=s[i]).getAttribute("content")===(null==t.content?null:""+t.content)&&l.getAttribute("name")===(null==t.name?null:t.name)&&l.getAttribute("property")===(null==t.property?null:t.property)&&l.getAttribute("http-equiv")===(null==t.httpEquiv?null:t.httpEquiv)&&l.getAttribute("charset")===(null==t.charSet?null:t.charSet)){s.splice(i,1);break a}Ju(l=n.createElement(o),o,t),n.head.appendChild(l);break;default:throw Error(r(468,o))}l[He]=e,Qe(l),o=l}e.stateNode=o}else Mm(n,e.type,e.stateNode);else e.stateNode=km(n,o,e.memoizedProps);else l!==o?(null===l?null!==t.stateNode&&(t=t.stateNode).parentNode.removeChild(t):l.count--,null===o?Mm(n,e.type,e.stateNode):km(n,o,e.memoizedProps)):null===o&&null!==e.stateNode&&Ys(e,e.memoizedProps,t.memoizedProps)}break;case 27:if(4&o&&null===e.alternate){n=e.stateNode,l=e.memoizedProps;try{for(var c=n.firstChild;c;){var u=c.nextSibling,m=c.nodeName;c[qe]||"HEAD"===m||"BODY"===m||"SCRIPT"===m||"STYLE"===m||"LINK"===m&&"stylesheet"===c.rel.toLowerCase()||n.removeChild(c),c=u}for(var p=e.type,d=n.attributes;d.length;)n.removeAttributeNode(d[0]);Ju(n,p,l),n[He]=e,n[Ne]=l}catch(g){ru(e,e.return,g)}}case 5:if(yi(a,e),bi(e),512&o&&(ai||null===t||qs(t,t.return)),32&e.flags){n=e.stateNode;try{ka(n,"")}catch(g){ru(e,e.return,g)}}4&o&&null!=e.stateNode&&Ys(e,n=e.memoizedProps,null!==t?t.memoizedProps:n),1024&o&&(ti=!0);break;case 6:if(yi(a,e),bi(e),4&o){if(null===e.stateNode)throw Error(r(162));o=e.memoizedProps,t=e.stateNode;try{t.nodeValue=o}catch(g){ru(e,e.return,g)}}break;case 3:if(Dm=null,n=gi,gi=ym(a.containerInfo),yi(a,e),gi=n,bi(e),4&o&&null!==t&&t.memoizedState.isDehydrated)try{bp(a.containerInfo)}catch(g){ru(e,e.return,g)}ti&&(ti=!1,fi(e));break;case 4:o=gi,gi=ym(e.stateNode.containerInfo),yi(a,e),bi(e),gi=o;break;case 12:yi(a,e),bi(e);break;case 13:yi(a,e),bi(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==t&&null!==t.memoizedState)&&(_c=ue()),4&o&&(null!==(o=e.updateQueue)&&(e.updateQueue=null,di(e,o)));break;case 22:if(512&o&&(ai||null===t||qs(t,t.return)),c=null!==e.memoizedState,u=null!==t&&null!==t.memoizedState,ei=(m=ei)||c,ai=(p=ai)||u,yi(a,e),ai=p,ei=m,bi(e),(a=e.stateNode)._current=e,a._visibility&=-3,a._visibility|=2&a._pendingVisibility,8192&o&&(a._visibility=c?-2&a._visibility:1|a._visibility,c&&(a=ei||ai,null===t||u||a||vi(e)),null===e.memoizedProps||"manual"!==e.memoizedProps.mode))e:for(t=null,a=e;;){if(5===a.tag||26===a.tag||27===a.tag){if(null===t){u=t=a;try{if(n=u.stateNode,c)"function"===typeof(l=n.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=u.stateNode;var y=void 0!==(i=u.memoizedProps.style)&&null!==i&&i.hasOwnProperty("display")?i.display:null;s.style.display=null==y||"boolean"===typeof y?"":(""+y).trim()}}catch(g){ru(u,u.return,g)}}}else if(6===a.tag){if(null===t){u=a;try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(g){ru(u,u.return,g)}}}else if((22!==a.tag&&23!==a.tag||null===a.memoizedState||a===e)&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;null===a.sibling;){if(null===a.return||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}4&o&&(null!==(o=e.updateQueue)&&(null!==(t=o.retryQueue)&&(o.retryQueue=null,di(e,t))));break;case 19:yi(a,e),bi(e),4&o&&(null!==(o=e.updateQueue)&&(e.updateQueue=null,di(e,o)));break;case 21:break;default:yi(a,e),bi(e)}}function bi(e){var a=e.flags;if(2&a){try{if(27!==e.tag){e:{for(var t=e.return;null!==t;){if($s(t)){var o=t;break e}t=t.return}throw Error(r(160))}switch(o.tag){case 27:var n=o.stateNode;Qs(e,Xs(e),n);break;case 5:var l=o.stateNode;32&o.flags&&(ka(l,""),o.flags&=-33),Qs(e,Xs(e),l);break;case 3:case 4:var s=o.stateNode.containerInfo;Zs(e,Xs(e),s);break;default:throw Error(r(161))}}}catch(i){ru(e,e.return,i)}e.flags&=-3}4096&a&&(e.flags&=-4097)}function fi(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var a=e;fi(a),5===a.tag&&1024&a.flags&&a.stateNode.reset(),e=e.sibling}}function wi(e,a){if(8772&a.subtreeFlags)for(a=a.child;null!==a;)li(e,a.alternate,a),a=a.sibling}function vi(e){for(e=e.child;null!==e;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:js(4,a,a.return),vi(a);break;case 1:qs(a,a.return);var t=a.stateNode;"function"===typeof t.componentWillUnmount&&zs(a,a.return,t),vi(a);break;case 26:case 27:case 5:qs(a,a.return),vi(a);break;case 22:qs(a,a.return),null===a.memoizedState&&vi(a);break;default:vi(a)}e=e.sibling}}function _i(e,a,t){for(t=t&&0!==(8772&a.subtreeFlags),a=a.child;null!==a;){var o=a.alternate,n=e,r=a,l=r.flags;switch(r.tag){case 0:case 11:case 15:_i(n,r,t),Ks(4,r);break;case 1:if(_i(n,r,t),"function"===typeof(n=(o=r).stateNode).componentDidMount)try{n.componentDidMount()}catch(c){ru(o,o.return,c)}if(null!==(n=(o=r).updateQueue)){var s=o.stateNode;try{var i=n.shared.hiddenCallbacks;if(null!==i)for(n.shared.hiddenCallbacks=null,n=0;n<i.length;n++)Hs(i[n],s)}catch(c){ru(o,o.return,c)}}t&&64&l&&Is(r),Us(r,r.return);break;case 26:case 27:case 5:_i(n,r,t),t&&null===o&&4&l&&Js(r),Us(r,r.return);break;case 12:default:_i(n,r,t);break;case 13:_i(n,r,t),t&&4&l&&pi(n,r);break;case 22:null===r.memoizedState&&_i(n,r,t),Us(r,r.return)}a=a.sibling}}function Ci(e,a){var t=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(t=e.memoizedState.cachePool.pool),e=null,null!==a.memoizedState&&null!==a.memoizedState.cachePool&&(e=a.memoizedState.cachePool.pool),e!==t&&(null!=e&&e.refCount++,null!=t&&In(t))}function xi(e,a){e=null,null!==a.alternate&&(e=a.alternate.memoizedState.cache),(a=a.memoizedState.cache)!==e&&(a.refCount++,null!=e&&In(e))}function ki(e,a,t,o){if(10256&a.subtreeFlags)for(a=a.child;null!==a;)Si(e,a,t,o),a=a.sibling}function Si(e,a,t,o){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ki(e,a,t,o),2048&n&&Ks(9,a);break;case 3:ki(e,a,t,o),2048&n&&(e=null,null!==a.alternate&&(e=a.alternate.memoizedState.cache),(a=a.memoizedState.cache)!==e&&(a.refCount++,null!=e&&In(e)));break;case 12:if(2048&n){ki(e,a,t,o),e=a.stateNode;try{var r=a.memoizedProps,l=r.id,s=r.onPostCommit;"function"===typeof s&&s(l,null===a.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(i){ru(a,a.return,i)}}else ki(e,a,t,o);break;case 23:break;case 22:r=a.stateNode,null!==a.memoizedState?4&r._visibility?ki(e,a,t,o):Ai(e,a):4&r._visibility?ki(e,a,t,o):(r._visibility|=4,Li(e,a,t,o,0!==(10256&a.subtreeFlags))),2048&n&&Ci(a.alternate,a);break;case 24:ki(e,a,t,o),2048&n&&xi(a.alternate,a);break;default:ki(e,a,t,o)}}function Li(e,a,t,o,n){for(n=n&&0!==(10256&a.subtreeFlags),a=a.child;null!==a;){var r=e,l=a,s=t,i=o,c=l.flags;switch(l.tag){case 0:case 11:case 15:Li(r,l,s,i,n),Ks(8,l);break;case 23:break;case 22:var u=l.stateNode;null!==l.memoizedState?4&u._visibility?Li(r,l,s,i,n):Ai(r,l):(u._visibility|=4,Li(r,l,s,i,n)),n&&2048&c&&Ci(l.alternate,l);break;case 24:Li(r,l,s,i,n),n&&2048&c&&xi(l.alternate,l);break;default:Li(r,l,s,i,n)}a=a.sibling}}function Ai(e,a){if(10256&a.subtreeFlags)for(a=a.child;null!==a;){var t=e,o=a,n=o.flags;switch(o.tag){case 22:Ai(t,o),2048&n&&Ci(o.alternate,o);break;case 24:Ai(t,o),2048&n&&xi(o.alternate,o);break;default:Ai(t,o)}a=a.sibling}}var Di=8192;function Bi(e){if(e.subtreeFlags&Di)for(e=e.child;null!==e;)Mi(e),e=e.sibling}function Mi(e){switch(e.tag){case 26:Bi(e),e.flags&Di&&null!==e.memoizedState&&function(e,a,t){if(null===Vm)throw Error(r(475));var o=Vm;if("stylesheet"===a.type&&("string"!==typeof t.media||!1!==matchMedia(t.media).matches)&&0===(4&a.state.loading)){if(null===a.instance){var n=wm(t.href),l=e.querySelector(vm(n));if(l)return null!==(e=l._p)&&"object"===typeof e&&"function"===typeof e.then&&(o.count++,o=Pm.bind(o),e.then(o,o)),a.state.loading|=4,a.instance=l,void Qe(l);l=e.ownerDocument||e,t=_m(t),(n=pm.get(n))&&Lm(t,n),Qe(l=l.createElement("link"));var s=l;s._p=new Promise(function(e,a){s.onload=e,s.onerror=a}),Ju(l,"link",t),a.instance=l}null===o.stylesheets&&(o.stylesheets=new Map),o.stylesheets.set(a,e),(e=a.state.preload)&&0===(3&a.state.loading)&&(o.count++,a=Pm.bind(o),e.addEventListener("load",a),e.addEventListener("error",a))}}(gi,e.memoizedState,e.memoizedProps);break;case 5:default:Bi(e);break;case 3:case 4:var a=gi;gi=ym(e.stateNode.containerInfo),Bi(e),gi=a;break;case 22:null===e.memoizedState&&(null!==(a=e.alternate)&&null!==a.memoizedState?(a=Di,Di=16777216,Bi(e),Di=a):Bi(e))}}function Ti(e){var a=e.alternate;if(null!==a&&null!==(e=a.child)){a.child=null;do{a=e.sibling,e.sibling=null,e=a}while(null!==e)}}function Vi(e){var a=e.deletions;if(0!==(16&e.flags)){if(null!==a)for(var t=0;t<a.length;t++){var o=a[t];ni=o,Fi(o,e)}Ti(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Ri(e),e=e.sibling}function Ri(e){switch(e.tag){case 0:case 11:case 15:Vi(e),2048&e.flags&&js(9,e,e.return);break;case 3:case 12:default:Vi(e);break;case 22:var a=e.stateNode;null!==e.memoizedState&&4&a._visibility&&(null===e.return||13!==e.return.tag)?(a._visibility&=-5,Pi(e)):Vi(e)}}function Pi(e){var a=e.deletions;if(0!==(16&e.flags)){if(null!==a)for(var t=0;t<a.length;t++){var o=a[t];ni=o,Fi(o,e)}Ti(e)}for(e=e.child;null!==e;){switch((a=e).tag){case 0:case 11:case 15:js(8,a,a.return),Pi(a);break;case 22:4&(t=a.stateNode)._visibility&&(t._visibility&=-5,Pi(a));break;default:Pi(a)}e=e.sibling}}function Fi(e,a){for(;null!==ni;){var t=ni;switch(t.tag){case 0:case 11:case 15:js(8,t,a);break;case 23:case 22:if(null!==t.memoizedState&&null!==t.memoizedState.cachePool){var o=t.memoizedState.cachePool.pool;null!=o&&o.refCount++}break;case 24:In(t.memoizedState.cache)}if(null!==(o=t.child))o.return=t,ni=o;else e:for(t=e;null!==ni;){var n=(o=ni).sibling,r=o.return;if(si(o),o===t){ni=null;break e}if(null!==n){n.return=r,ni=n;break e}ni=r}}}function Gi(e,a,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wi(e,a,t,o){return new Gi(e,a,t,o)}function Oi(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ei(e,a){var t=e.alternate;return null===t?((t=Wi(e.tag,a,e.key,e.mode)).elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=31457280&e.flags,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Hi(e,a){e.flags&=31457282;var t=e.alternate;return null===t?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Ni(e,a,t,o,n,l){var s=0;if(o=e,"function"===typeof e)Oi(e)&&(s=1);else if("string"===typeof e)s=function(e,a,t){if(1===t||null!=a.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof a.precedence||"string"!==typeof a.href||""===a.href)break;return!0;case"link":if("string"!==typeof a.rel||"string"!==typeof a.href||""===a.href||a.onLoad||a.onError)break;return"stylesheet"!==a.rel||(e=a.disabled,"string"===typeof a.precedence&&null==e);case"script":if(a.async&&"function"!==typeof a.async&&"symbol"!==typeof a.async&&!a.onLoad&&!a.onError&&a.src&&"string"===typeof a.src)return!0}return!1}(e,t,X.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case d:return Ki(t.children,n,l,a);case y:s=8,n|=24;break;case g:return(e=Wi(12,t,a,2|n)).elementType=g,e.lanes=l,e;case v:return(e=Wi(13,t,a,n)).elementType=v,e.lanes=l,e;case _:return(e=Wi(19,t,a,n)).elementType=_,e.lanes=l,e;case k:return ji(t,n,l,a);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case h:case f:s=10;break e;case b:s=9;break e;case w:s=11;break e;case C:s=14;break e;case x:s=16,o=null;break e}s=29,t=Error(r(130,null===e?"null":typeof e,"")),o=null}return(a=Wi(s,t,a,n)).elementType=e,a.type=o,a.lanes=l,a}function Ki(e,a,t,o){return(e=Wi(7,e,o,a)).lanes=t,e}function ji(e,a,t,o){(e=Wi(22,e,o,a)).elementType=k,e.lanes=t;var n={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=n._current;if(null===e)throw Error(r(456));if(0===(2&n._pendingVisibility)){var a=To(e,2);null!==a&&(n._pendingVisibility|=2,Pc(a,e,2))}},attach:function(){var e=n._current;if(null===e)throw Error(r(456));if(0!==(2&n._pendingVisibility)){var a=To(e,2);null!==a&&(n._pendingVisibility&=-3,Pc(a,e,2))}}};return e.stateNode=n,e}function Ii(e,a,t){return(e=Wi(6,e,null,a)).lanes=t,e}function zi(e,a,t){return(a=Wi(4,null!==e.children?e.children:[],e.key,a)).lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function Ui(e){e.flags|=4}function qi(e,a){if("stylesheet"!==a.type||0!==(4&a.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Tm(a)){if(null!==(a=Tn.current)&&((4194176&rc)===rc?null!==Vn:(62914560&rc)!==rc&&0===(536870912&rc)||a!==Vn))throw gn=mn,un;e.flags|=8192}}function Ji(e,a){null!==a&&(e.flags|=4),16384&e.flags&&(a=22!==e.tag?Ve():536870912,e.lanes|=a,bc|=a)}function Yi(e,a){if(!Zo)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;null!==a;)null!==a.alternate&&(t=a),a=a.sibling;null===t?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;null!==t;)null!==t.alternate&&(o=t),t=t.sibling;null===o?a||null===e.tail?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $i(e){var a=null!==e.alternate&&e.alternate.child===e.child,t=0,o=0;if(a)for(var n=e.child;null!==n;)t|=n.lanes|n.childLanes,o|=31457280&n.subtreeFlags,o|=31457280&n.flags,n.return=e,n=n.sibling;else for(n=e.child;null!==n;)t|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=t,a}function Xi(e,a,t){var o=a.pendingProps;switch(Yo(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return $i(a),null;case 3:return t=a.stateNode,o=null,null!==e&&(o=e.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),_s(Kn),te(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),null!==e&&null!==e.child||(rn(a)?Ui(a):null===e||e.memoizedState.isDehydrated&&0===(256&a.flags)||(a.flags|=1024,null!==Qo&&(Gc(Qo),Qo=null))),$i(a),null;case 26:return t=a.memoizedState,null===e?(Ui(a),null!==t?($i(a),qi(a,t)):($i(a),a.flags&=-16777217)):t?t!==e.memoizedState?(Ui(a),$i(a),qi(a,t)):($i(a),a.flags&=-16777217):(e.memoizedProps!==o&&Ui(a),$i(a),a.flags&=-16777217),null;case 27:ne(a),t=Q.current;var n=a.type;if(null!==e&&null!=a.stateNode)e.memoizedProps!==o&&Ui(a);else{if(!o){if(null===a.stateNode)throw Error(r(166));return $i(a),null}e=X.current,rn(a)?on(a):(e=mm(n,o,t),a.stateNode=e,Ui(a))}return $i(a),null;case 5:if(ne(a),t=a.type,null!==e&&null!=a.stateNode)e.memoizedProps!==o&&Ui(a);else{if(!o){if(null===a.stateNode)throw Error(r(166));return $i(a),null}if(e=X.current,rn(a))on(a);else{switch(n=Xu(Q.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":(e=n.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof o.is?n.createElement("select",{is:o.is}):n.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e="string"===typeof o.is?n.createElement(t,{is:o.is}):n.createElement(t)}}e[He]=a,e[Ne]=o;e:for(n=a.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&27!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;null===n.sibling;){if(null===n.return||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}a.stateNode=e;e:switch(Ju(e,t,o),t){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ui(a)}}return $i(a),a.flags&=-16777217,null;case 6:if(e&&null!=a.stateNode)e.memoizedProps!==o&&Ui(a);else{if("string"!==typeof o&&null===a.stateNode)throw Error(r(166));if(e=Q.current,rn(a)){if(e=a.stateNode,t=a.memoizedProps,o=null,null!==(n=$o))switch(n.tag){case 27:case 5:o=n.memoizedProps}e[He]=a,(e=!!(e.nodeValue===t||null!==o&&!0===o.suppressHydrationWarning||Iu(e.nodeValue,t)))||tn(a)}else(e=Xu(e).createTextNode(o))[He]=a,a.stateNode=e}return $i(a),null;case 13:if(o=a.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(n=rn(a),null!==o&&null!==o.dehydrated){if(null===e){if(!n)throw Error(r(318));if(!(n=null!==(n=a.memoizedState)?n.dehydrated:null))throw Error(r(317));n[He]=a}else ln(),0===(128&a.flags)&&(a.memoizedState=null),a.flags|=4;$i(a),n=!1}else null!==Qo&&(Gc(Qo),Qo=null),n=!0;if(!n)return 256&a.flags?(Gn(a),a):(Gn(a),null)}if(Gn(a),0!==(128&a.flags))return a.lanes=t,a;if(t=null!==o,e=null!==e&&null!==e.memoizedState,t){n=null,null!==(o=a.child).alternate&&null!==o.alternate.memoizedState&&null!==o.alternate.memoizedState.cachePool&&(n=o.alternate.memoizedState.cachePool.pool);var l=null;null!==o.memoizedState&&null!==o.memoizedState.cachePool&&(l=o.memoizedState.cachePool.pool),l!==n&&(o.flags|=2048)}return t!==e&&t&&(a.child.flags|=8192),Ji(a,a.updateQueue),$i(a),null;case 4:return te(),null===e&&Pu(a.stateNode.containerInfo),$i(a),null;case 10:return _s(a.type),$i(a),null;case 19:if(Y(Wn),null===(n=a.memoizedState))return $i(a),null;if(o=0!==(128&a.flags),null===(l=n.rendering))if(o)Yi(n,!1);else{if(0!==pc||null!==e&&0!==(128&e.flags))for(e=a.child;null!==e;){if(null!==(l=On(e))){for(a.flags|=128,Yi(n,!1),e=l.updateQueue,a.updateQueue=e,Ji(a,e),a.subtreeFlags=0,e=t,t=a.child;null!==t;)Hi(t,e),t=t.sibling;return $(Wn,1&Wn.current|2),a.child}e=e.sibling}null!==n.tail&&ue()>Cc&&(a.flags|=128,o=!0,Yi(n,!1),a.lanes=4194304)}else{if(!o)if(null!==(e=On(l))){if(a.flags|=128,o=!0,e=e.updateQueue,a.updateQueue=e,Ji(a,e),Yi(n,!0),null===n.tail&&"hidden"===n.tailMode&&!l.alternate&&!Zo)return $i(a),null}else 2*ue()-n.renderingStartTime>Cc&&536870912!==t&&(a.flags|=128,o=!0,Yi(n,!1),a.lanes=4194304);n.isBackwards?(l.sibling=a.child,a.child=l):(null!==(e=n.last)?e.sibling=l:a.child=l,n.last=l)}return null!==n.tail?(a=n.tail,n.rendering=a,n.tail=a.sibling,n.renderingStartTime=ue(),a.sibling=null,e=Wn.current,$(Wn,o?1&e|2:1&e),a):($i(a),null);case 22:case 23:return Gn(a),Mn(),o=null!==a.memoizedState,null!==e?null!==e.memoizedState!==o&&(a.flags|=8192):o&&(a.flags|=8192),o?0!==(536870912&t)&&0===(128&a.flags)&&($i(a),6&a.subtreeFlags&&(a.flags|=8192)):$i(a),null!==(t=a.updateQueue)&&Ji(a,t.retryQueue),t=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(t=e.memoizedState.cachePool.pool),o=null,null!==a.memoizedState&&null!==a.memoizedState.cachePool&&(o=a.memoizedState.cachePool.pool),o!==t&&(a.flags|=2048),null!==e&&Y(Xn),null;case 24:return t=null,null!==e&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),_s(Kn),$i(a),null;case 25:return null}throw Error(r(156,a.tag))}function Zi(e,a){switch(Yo(a),a.tag){case 1:return 65536&(e=a.flags)?(a.flags=-65537&e|128,a):null;case 3:return _s(Kn),te(),0!==(65536&(e=a.flags))&&0===(128&e)?(a.flags=-65537&e|128,a):null;case 26:case 27:case 5:return ne(a),null;case 13:if(Gn(a),null!==(e=a.memoizedState)&&null!==e.dehydrated){if(null===a.alternate)throw Error(r(340));ln()}return 65536&(e=a.flags)?(a.flags=-65537&e|128,a):null;case 19:return Y(Wn),null;case 4:return te(),null;case 10:return _s(a.type),null;case 22:case 23:return Gn(a),Mn(),null!==e&&Y(Xn),65536&(e=a.flags)?(a.flags=-65537&e|128,a):null;case 24:return _s(Kn),null;default:return null}}function Qi(e,a){switch(Yo(a),a.tag){case 3:_s(Kn),te();break;case 26:case 27:case 5:ne(a);break;case 4:te();break;case 13:Gn(a);break;case 19:Y(Wn);break;case 10:_s(a.type);break;case 22:case 23:Gn(a),Mn(),null!==e&&Y(Xn);break;case 24:_s(Kn)}}var ec={getCacheForType:function(e){var a=As(Kn),t=a.data.get(e);return void 0===t&&(t=e(),a.data.set(e,t)),t}},ac="function"===typeof WeakMap?WeakMap:Map,tc=0,oc=null,nc=null,rc=0,lc=0,sc=null,ic=!1,cc=!1,uc=!1,mc=0,pc=0,dc=0,yc=0,gc=0,hc=0,bc=0,fc=null,wc=null,vc=!1,_c=0,Cc=1/0,xc=null,kc=null,Sc=!1,Lc=null,Ac=0,Dc=0,Bc=null,Mc=0,Tc=null;function Vc(){if(0!==(2&tc)&&0!==rc)return rc&-rc;if(null!==V.T){return 0!==qn?qn:xu()}return Oe()}function Rc(){0===hc&&(hc=0===(536870912&rc)||Zo?Te():536870912);var e=Tn.current;return null!==e&&(e.flags|=32),hc}function Pc(e,a,t){(e===oc&&2===lc||null!==e.cancelPendingCommit)&&(Kc(e,0),Ec(e,rc,hc,!1)),Pe(e,t),0!==(2&tc)&&e===oc||(e===oc&&(0===(2&tc)&&(yc|=t),4===pc&&Ec(e,rc,hc,!1)),bu(e))}function Fc(e,a,t){if(0!==(6&tc))throw Error(r(327));for(var o=!t&&0===(60&a)&&0===(a&e.expiredLanes)||Be(e,a),n=o?function(e,a){var t=tc;tc|=2;var o=Ic(),n=zc();oc!==e||rc!==a?(xc=null,Cc=ue()+500,Kc(e,a)):cc=Be(e,a);e:for(;;)try{if(0!==lc&&null!==nc){a=nc;var l=sc;a:switch(lc){case 1:lc=0,sc=null,Zc(e,a,l,1);break;case 2:if(pn(l)){lc=0,sc=null,Xc(a);break}a=function(){2===lc&&oc===e&&(lc=7),bu(e)},l.then(a,a);break e;case 3:lc=7;break e;case 4:lc=5;break e;case 7:pn(l)?(lc=0,sc=null,Xc(a)):(lc=0,sc=null,Zc(e,a,l,7));break;case 5:var s=null;switch(nc.tag){case 26:s=nc.memoizedState;case 5:case 27:var i=nc;if(!s||Tm(s)){lc=0,sc=null;var c=i.sibling;if(null!==c)nc=c;else{var u=i.return;null!==u?(nc=u,Qc(u)):nc=null}break a}}lc=0,sc=null,Zc(e,a,l,5);break;case 6:lc=0,sc=null,Zc(e,a,l,6);break;case 8:Nc(),pc=6;break e;default:throw Error(r(462))}}Yc();break}catch(m){jc(e,m)}return ws=fs=null,V.H=o,V.A=n,tc=t,null!==nc?0:(oc=null,rc=0,Do(),pc)}(e,a):qc(e,a,!0),l=o;;){if(0===n){cc&&!o&&Ec(e,a,0,!1);break}if(6===n)Ec(e,a,0,!ic);else{if(t=e.current.alternate,l&&!Oc(t)){n=qc(e,a,!1),l=!1;continue}if(2===n){if(l=a,e.errorRecoveryDisabledLanes&l)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){a=s;e:{var i=e;n=fc;var c=i.current.memoizedState.isDehydrated;if(c&&(Kc(i,s).flags|=256),2!==(s=qc(i,s,!1))){if(uc&&!c){i.errorRecoveryDisabledLanes|=l,yc|=l,n=4;break e}l=wc,wc=n,null!==l&&Gc(l)}n=s}if(l=!1,2!==n)continue}}if(1===n){Kc(e,0),Ec(e,a,0,!0);break}e:{switch(o=e,n){case 0:case 1:throw Error(r(345));case 4:if((4194176&a)===a){Ec(o,a,hc,!ic);break e}break;case 2:wc=null;break;case 3:case 5:break;default:throw Error(r(329))}if(o.finishedWork=t,o.finishedLanes=a,(62914560&a)===a&&10<(l=_c+300-ue())){if(Ec(o,a,hc,!ic),0!==De(o,0))break e;o.timeoutHandle=tm(Wc.bind(null,o,t,wc,xc,vc,a,hc,yc,bc,ic,2,-0,0),l)}else Wc(o,t,wc,xc,vc,a,hc,yc,bc,ic,0,-0,0)}}break}bu(e)}function Gc(e){null===wc?wc=e:wc.push.apply(wc,e)}function Wc(e,a,t,o,n,l,s,i,c,u,m,p,d){var y=a.subtreeFlags;if((8192&y||16785408===(16785408&y))&&(Vm={stylesheets:null,count:0,unsuspend:Rm},Mi(a),null!==(a=function(){if(null===Vm)throw Error(r(475));var e=Vm;return e.stylesheets&&0===e.count&&Gm(e,e.stylesheets),0<e.count?function(a){var t=setTimeout(function(){if(e.stylesheets&&Gm(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(t)}}:null}())))return e.cancelPendingCommit=a(au.bind(null,e,t,o,n,s,i,c,1,p,d)),void Ec(e,l,s,!u);au(e,t,o,n,s,i,c,m,p,d)}function Oc(e){for(var a=e;;){var t=a.tag;if((0===t||11===t||15===t)&&16384&a.flags&&(null!==(t=a.updateQueue)&&null!==(t=t.stores)))for(var o=0;o<t.length;o++){var n=t[o],r=n.getSnapshot;n=n.value;try{if(!Yt(r(),n))return!1}catch(l){return!1}}if(t=a.child,16384&a.subtreeFlags&&null!==t)t.return=a,a=t;else{if(a===e)break;for(;null===a.sibling;){if(null===a.return||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ec(e,a,t,o){a&=~gc,a&=~yc,e.suspendedLanes|=a,e.pingedLanes&=~a,o&&(e.warmLanes|=a),o=e.expirationTimes;for(var n=a;0<n;){var r=31-Ce(n),l=1<<r;o[r]=-1,n&=~l}0!==t&&Fe(e,t,a)}function Hc(){return 0!==(6&tc)||(fu(0,!1),!1)}function Nc(){if(null!==nc){if(0===lc)var e=nc.return;else ws=fs=null,vr(e=nc),bn=null,fn=0,e=nc;for(;null!==e;)Qi(e.alternate,e),e=e.return;nc=null}}function Kc(e,a){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;-1!==t&&(e.timeoutHandle=-1,om(t)),null!==(t=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,t()),Nc(),oc=e,nc=t=Ei(e.current,null),rc=a,lc=0,sc=null,ic=!1,cc=Be(e,a),uc=!1,bc=hc=gc=yc=dc=pc=0,wc=fc=null,vc=!1,0!==(8&a)&&(a|=32&a);var o=e.entangledLanes;if(0!==o)for(e=e.entanglements,o&=a;0<o;){var n=31-Ce(o),r=1<<n;a|=e[n],o&=~r}return mc=a,Do(),t}function jc(e,a){tr=null,V.H=Al,a===cn?(a=hn(),lc=3):a===un?(a=hn(),lc=4):lc=a===zl?8:null!==a&&"object"===typeof a&&"function"===typeof a.then?6:1,sc=a,null===nc&&(pc=1,Hl(e,Go(a,e.current)))}function Ic(){var e=V.H;return V.H=Al,null===e?Al:e}function zc(){var e=V.A;return V.A=ec,e}function Uc(){pc=4,ic||(4194176&rc)!==rc&&null!==Tn.current||(cc=!0),0===(134217727&dc)&&0===(134217727&yc)||null===oc||Ec(oc,rc,hc,!1)}function qc(e,a,t){var o=tc;tc|=2;var n=Ic(),r=zc();oc===e&&rc===a||(xc=null,Kc(e,a)),a=!1;var l=pc;e:for(;;)try{if(0!==lc&&null!==nc){var s=nc,i=sc;switch(lc){case 8:Nc(),l=6;break e;case 3:case 2:case 6:null===Tn.current&&(a=!0);var c=lc;if(lc=0,sc=null,Zc(e,s,i,c),t&&cc){l=0;break e}break;default:c=lc,lc=0,sc=null,Zc(e,s,i,c)}}Jc(),l=pc;break}catch(u){jc(e,u)}return a&&e.shellSuspendCounter++,ws=fs=null,tc=o,V.H=n,V.A=r,null===nc&&(oc=null,rc=0,Do()),l}function Jc(){for(;null!==nc;)$c(nc)}function Yc(){for(;null!==nc&&!ie();)$c(nc)}function $c(e){var a=hs(e.alternate,e,mc);e.memoizedProps=e.pendingProps,null===a?Qc(e):nc=a}function Xc(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=as(t,a,a.pendingProps,a.type,void 0,rc);break;case 11:a=as(t,a,a.pendingProps,a.type.render,a.ref,rc);break;case 5:vr(a);default:Qi(t,a),a=hs(t,a=nc=Hi(a,mc),mc)}e.memoizedProps=e.pendingProps,null===a?Qc(e):nc=a}function Zc(e,a,t,o){ws=fs=null,vr(a),bn=null,fn=0;var n=a.return;try{if(function(e,a,t,o,n){if(t.flags|=32768,null!==o&&"object"===typeof o&&"function"===typeof o.then){if(null!==(a=t.alternate)&&ks(a,t,n,!0),null!==(t=Tn.current)){switch(t.tag){case 13:return null===Vn?Uc():null===t.alternate&&0===pc&&(pc=3),t.flags&=-257,t.flags|=65536,t.lanes=n,o===mn?t.flags|=16384:(null===(a=t.updateQueue)?t.updateQueue=new Set([o]):a.add(o),lu(e,o,n)),!1;case 22:return t.flags|=65536,o===mn?t.flags|=16384:(null===(a=t.updateQueue)?(a={transitions:null,markerInstances:null,retryQueue:new Set([o])},t.updateQueue=a):null===(t=a.retryQueue)?a.retryQueue=new Set([o]):t.add(o),lu(e,o,n)),!1}throw Error(r(435,t.tag))}return lu(e,o,n),Uc(),!1}if(Zo)return null!==(a=Tn.current)?(0===(65536&a.flags)&&(a.flags|=256),a.flags|=65536,a.lanes=n,o!==an&&sn(Go(e=Error(r(422),{cause:o}),t))):(o!==an&&sn(Go(a=Error(r(423),{cause:o}),t)),(e=e.current.alternate).flags|=65536,n&=-n,e.lanes|=n,o=Go(o,t),Gs(e,n=Kl(e.stateNode,o,n)),4!==pc&&(pc=2)),!1;var l=Error(r(520),{cause:o});if(l=Go(l,t),null===fc?fc=[l]:fc.push(l),4!==pc&&(pc=2),null===a)return!0;o=Go(o,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,Gs(t,e=Kl(t.stateNode,o,e)),!1;case 1:if(a=t.type,l=t.stateNode,0===(128&t.flags)&&("function"===typeof a.getDerivedStateFromError||null!==l&&"function"===typeof l.componentDidCatch&&(null===kc||!kc.has(l))))return t.flags|=65536,n&=-n,t.lanes|=n,Il(n=jl(n),e,t,o),Gs(t,n),!1}t=t.return}while(null!==t);return!1}(e,n,a,t,rc))return pc=1,Hl(e,Go(t,e.current)),void(nc=null)}catch(l){if(null!==n)throw nc=n,l;return pc=1,Hl(e,Go(t,e.current)),void(nc=null)}32768&a.flags?(Zo||1===o?e=!0:cc||0!==(536870912&rc)?e=!1:(ic=e=!0,(2===o||3===o||6===o)&&(null!==(o=Tn.current)&&13===o.tag&&(o.flags|=16384))),eu(a,e)):Qc(a)}function Qc(e){var a=e;do{if(0!==(32768&a.flags))return void eu(a,ic);e=a.return;var t=Xi(a.alternate,a,mc);if(null!==t)return void(nc=t);if(null!==(a=a.sibling))return void(nc=a);nc=a=e}while(null!==a);0===pc&&(pc=5)}function eu(e,a){do{var t=Zi(e.alternate,e);if(null!==t)return t.flags&=32767,void(nc=t);if(null!==(t=e.return)&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&null!==(e=e.sibling))return void(nc=e);nc=e=t}while(null!==e);pc=6,nc=null}function au(e,a,t,o,n,l,s,i,c,u){var m=V.T,p=I.p;try{I.p=2,V.T=null,function(e,a,t,o,n,l,s,i){do{ou()}while(null!==Lc);if(0!==(6&tc))throw Error(r(327));var c=e.finishedWork;if(o=e.finishedLanes,null===c)return null;if(e.finishedWork=null,e.finishedLanes=0,c===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var u=c.lanes|c.childLanes;if(function(e,a,t,o,n,r){var l=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var s=e.entanglements,i=e.expirationTimes,c=e.hiddenUpdates;for(t=l&~t;0<t;){var u=31-Ce(t),m=1<<u;s[u]=0,i[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var d=p[u];null!==d&&(d.lane&=-536870913)}t&=~m}0!==o&&Fe(e,o,0),0!==r&&0===n&&0!==e.tag&&(e.suspendedLanes|=r&~(l&~a))}(e,o,u|=Ao,l,s,i),e===oc&&(nc=oc=null,rc=0),0===(10256&c.subtreeFlags)&&0===(10256&c.flags)||Sc||(Sc=!0,Dc=u,Bc=t,function(e,a){le(e,a)}(ye,function(){return ou(),null})),t=0!==(15990&c.flags),0!==(15990&c.subtreeFlags)||t?(t=V.T,V.T=null,l=I.p,I.p=2,s=tc,tc|=4,function(e,a){if(e=e.containerInfo,Yu=Um,ao(e=eo(e))){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{var o=(t=(t=e.ownerDocument)&&t.defaultView||window).getSelection&&t.getSelection();if(o&&0!==o.rangeCount){t=o.anchorNode;var n=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{t.nodeType,l.nodeType}catch(h){t=null;break e}var s=0,i=-1,c=-1,u=0,m=0,p=e,d=null;a:for(;;){for(var y;p!==t||0!==n&&3!==p.nodeType||(i=s+n),p!==l||0!==o&&3!==p.nodeType||(c=s+o),3===p.nodeType&&(s+=p.nodeValue.length),null!==(y=p.firstChild);)d=p,p=y;for(;;){if(p===e)break a;if(d===t&&++u===n&&(i=s),d===l&&++m===o&&(c=s),null!==(y=p.nextSibling))break;d=(p=d).parentNode}p=y}t=-1===i||-1===c?null:{start:i,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for($u={focusedElem:e,selectionRange:t},Um=!1,ni=a;null!==ni;)if(e=(a=ni).child,0!==(1028&a.subtreeFlags)&&null!==e)e.return=a,ni=e;else for(;null!==ni;){switch(l=(a=ni).alternate,e=a.flags,a.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==l){e=void 0,t=a,n=l.memoizedProps,l=l.memoizedState,o=t.stateNode;try{var g=Fl(t.type,n,(t.elementType,t.type));e=o.getSnapshotBeforeUpdate(g,l),o.__reactInternalSnapshotBeforeUpdate=e}catch(b){ru(t,t.return,b)}}break;case 3:if(0!==(1024&e))if(9===(t=(e=a.stateNode.containerInfo).nodeType))im(e);else if(1===t)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":im(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(r(163))}if(null!==(e=a.sibling)){e.return=a.return,ni=e;break}ni=a.return}g=ri,ri=!1}(e,c),hi(c,e),to($u,e.containerInfo),Um=!!Yu,$u=Yu=null,e.current=c,li(e,c.alternate,c),ce(),tc=s,I.p=l,V.T=t):e.current=c,Sc?(Sc=!1,Lc=e,Ac=o):tu(e,u),u=e.pendingLanes,0===u&&(kc=null),function(e){if(ve&&"function"===typeof ve.onCommitFiberRoot)try{ve.onCommitFiberRoot(we,e,void 0,128===(128&e.current.flags))}catch(a){}}(c.stateNode),bu(e),null!==a)for(n=e.onRecoverableError,c=0;c<a.length;c++)u=a[c],n(u.value,{componentStack:u.stack});0!==(3&Ac)&&ou(),u=e.pendingLanes,0!==(4194218&o)&&0!==(42&u)?e===Tc?Mc++:(Mc=0,Tc=e):Mc=0,fu(0,!1)}(e,a,t,o,p,n,l,s)}finally{V.T=m,I.p=p}}function tu(e,a){0===(e.pooledCacheLanes&=a)&&(null!=(a=e.pooledCache)&&(e.pooledCache=null,In(a)))}function ou(){if(null!==Lc){var e=Lc,a=Dc;Dc=0;var t=We(Ac),o=V.T,n=I.p;try{if(I.p=32>t?32:t,V.T=null,null===Lc)var l=!1;else{t=Bc,Bc=null;var s=Lc,i=Ac;if(Lc=null,Ac=0,0!==(6&tc))throw Error(r(331));var c=tc;if(tc|=4,Ri(s.current),Si(s,s.current,i,t),tc=c,fu(0,!1),ve&&"function"===typeof ve.onPostCommitFiberRoot)try{ve.onPostCommitFiberRoot(we,s)}catch(u){}l=!0}return l}finally{I.p=n,V.T=o,tu(e,a)}}return!1}function nu(e,a,t){a=Go(t,a),null!==(e=Ps(e,a=Kl(e.stateNode,a,2),2))&&(Pe(e,2),bu(e))}function ru(e,a,t){if(3===e.tag)nu(e,e,t);else for(;null!==a;){if(3===a.tag){nu(a,e,t);break}if(1===a.tag){var o=a.stateNode;if("function"===typeof a.type.getDerivedStateFromError||"function"===typeof o.componentDidCatch&&(null===kc||!kc.has(o))){e=Go(t,e),null!==(o=Ps(a,t=jl(2),2))&&(Il(t,o,a,e),Pe(o,2),bu(o));break}}a=a.return}}function lu(e,a,t){var o=e.pingCache;if(null===o){o=e.pingCache=new ac;var n=new Set;o.set(a,n)}else void 0===(n=o.get(a))&&(n=new Set,o.set(a,n));n.has(t)||(uc=!0,n.add(t),e=su.bind(null,e,a,t),a.then(e,e))}function su(e,a,t){var o=e.pingCache;null!==o&&o.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,oc===e&&(rc&t)===t&&(4===pc||3===pc&&(62914560&rc)===rc&&300>ue()-_c?0===(2&tc)&&Kc(e,0):gc|=t,bc===rc&&(bc=0)),bu(e)}function iu(e,a){0===a&&(a=Ve()),null!==(e=To(e,a))&&(Pe(e,a),bu(e))}function cu(e){var a=e.memoizedState,t=0;null!==a&&(t=a.retryLane),iu(e,t)}function uu(e,a){var t=0;switch(e.tag){case 13:var o=e.stateNode,n=e.memoizedState;null!==n&&(t=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}null!==o&&o.delete(a),iu(e,t)}var mu=null,pu=null,du=!1,yu=!1,gu=!1,hu=0;function bu(e){var a;e!==pu&&null===e.next&&(null===pu?mu=pu=e:pu=pu.next=e),yu=!0,du||(du=!0,a=wu,rm(function(){0!==(6&tc)?le(pe,a):a()}))}function fu(e,a){if(!gu&&yu){gu=!0;do{for(var t=!1,o=mu;null!==o;){if(!a)if(0!==e){var n=o.pendingLanes;if(0===n)var r=0;else{var l=o.suspendedLanes,s=o.pingedLanes;r=(1<<31-Ce(42|e)+1)-1,r=201326677&(r&=n&~(l&~s))?201326677&r|1:r?2|r:0}0!==r&&(t=!0,Cu(o,r))}else r=rc,0===(3&(r=De(o,o===oc?r:0)))||Be(o,r)||(t=!0,Cu(o,r));o=o.next}}while(t);gu=!1}}function wu(){yu=du=!1;var e=0;0!==hu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==am&&(am=e,!0);return am=null,!1}()&&(e=hu),hu=0);for(var a=ue(),t=null,o=mu;null!==o;){var n=o.next,r=vu(o,a);0===r?(o.next=null,null===t?mu=n:t.next=n,null===n&&(pu=t)):(t=o,(0!==e||0!==(3&r))&&(yu=!0)),o=n}fu(e,!1)}function vu(e,a){for(var t=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=-62914561&e.pendingLanes;0<r;){var l=31-Ce(r),s=1<<l,i=n[l];-1===i?0!==(s&t)&&0===(s&o)||(n[l]=Me(s,a)):i<=a&&(e.expiredLanes|=s),r&=~s}if(t=rc,t=De(e,e===(a=oc)?t:0),o=e.callbackNode,0===t||e===a&&2===lc||null!==e.cancelPendingCommit)return null!==o&&null!==o&&se(o),e.callbackNode=null,e.callbackPriority=0;if(0===(3&t)||Be(e,t)){if((a=t&-t)===e.callbackPriority)return a;switch(null!==o&&se(o),We(t)){case 2:case 8:t=de;break;case 32:default:t=ye;break;case 268435456:t=he}return o=_u.bind(null,e),t=le(t,o),e.callbackPriority=a,e.callbackNode=t,a}return null!==o&&null!==o&&se(o),e.callbackPriority=2,e.callbackNode=null,2}function _u(e,a){var t=e.callbackNode;if(ou()&&e.callbackNode!==t)return null;var o=rc;return 0===(o=De(e,e===oc?o:0))?null:(Fc(e,o,a),vu(e,ue()),null!=e.callbackNode&&e.callbackNode===t?_u.bind(null,e):null)}function Cu(e,a){if(ou())return null;Fc(e,a,!0)}function xu(){return 0===hu&&(hu=Te()),hu}function ku(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Ta(""+e)}function Su(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}for(var Lu=0;Lu<xo.length;Lu++){var Au=xo[Lu];ko(Au.toLowerCase(),"on"+(Au[0].toUpperCase()+Au.slice(1)))}ko(go,"onAnimationEnd"),ko(ho,"onAnimationIteration"),ko(bo,"onAnimationStart"),ko("dblclick","onDoubleClick"),ko("focusin","onFocus"),ko("focusout","onBlur"),ko(fo,"onTransitionRun"),ko(wo,"onTransitionStart"),ko(vo,"onTransitionCancel"),ko(_o,"onTransitionEnd"),oa("onMouseEnter",["mouseout","mouseover"]),oa("onMouseLeave",["mouseout","mouseover"]),oa("onPointerEnter",["pointerout","pointerover"]),oa("onPointerLeave",["pointerout","pointerover"]),ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Du));function Mu(e,a){a=0!==(4&a);for(var t=0;t<e.length;t++){var o=e[t],n=o.event;o=o.listeners;e:{var r=void 0;if(a)for(var l=o.length-1;0<=l;l--){var s=o[l],i=s.instance,c=s.currentTarget;if(s=s.listener,i!==r&&n.isPropagationStopped())break e;r=s,n.currentTarget=c;try{r(n)}catch(u){Gl(u)}n.currentTarget=null,r=i}else for(l=0;l<o.length;l++){if(i=(s=o[l]).instance,c=s.currentTarget,s=s.listener,i!==r&&n.isPropagationStopped())break e;r=s,n.currentTarget=c;try{r(n)}catch(u){Gl(u)}n.currentTarget=null,r=i}}}}function Tu(e,a){var t=a[je];void 0===t&&(t=a[je]=new Set);var o=e+"__bubble";t.has(o)||(Fu(a,e,2,!1),t.add(o))}function Vu(e,a,t){var o=0;a&&(o|=4),Fu(t,e,o,a)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function Pu(e){if(!e[Ru]){e[Ru]=!0,ea.forEach(function(a){"selectionchange"!==a&&(Bu.has(a)||Vu(a,!1,e),Vu(a,!0,e))});var a=9===e.nodeType?e:e.ownerDocument;null===a||a[Ru]||(a[Ru]=!0,Vu("selectionchange",!1,a))}}function Fu(e,a,t,o){switch(Qm(a)){case 2:var n=qm;break;case 8:n=Jm;break;default:n=Ym}t=n.bind(null,a,t,e),n=void 0,!Ha||"touchstart"!==a&&"touchmove"!==a&&"wheel"!==a||(n=!0),o?void 0!==n?e.addEventListener(a,t,{capture:!0,passive:n}):e.addEventListener(a,t,!0):void 0!==n?e.addEventListener(a,t,{passive:n}):e.addEventListener(a,t,!1)}function Gu(e,a,t,o,n){var r=o;if(0===(1&a)&&0===(2&a)&&null!==o)e:for(;;){if(null===o)return;var l=o.tag;if(3===l||4===l){var s=o.stateNode.containerInfo;if(s===n||8===s.nodeType&&s.parentNode===n)break;if(4===l)for(l=o.return;null!==l;){var i=l.tag;if((3===i||4===i)&&((i=l.stateNode.containerInfo)===n||8===i.nodeType&&i.parentNode===n))return;l=l.return}for(;null!==s;){if(null===(l=Ye(s)))return;if(5===(i=l.tag)||6===i||26===i||27===i){o=r=l;continue e}s=s.parentNode}}o=o.return}Oa(function(){var o=r,n=Ra(t),l=[];e:{var s=Co.get(e);if(void 0!==s){var i=et,c=e;switch(e){case"keypress":if(0===Ua(t))break e;case"keydown":case"keyup":i=gt;break;case"focusin":c="focus",i=lt;break;case"focusout":c="blur",i=lt;break;case"beforeblur":case"afterblur":i=lt;break;case"click":if(2===t.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":i=nt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":i=rt;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":i=bt;break;case go:case ho:case bo:i=st;break;case _o:i=ft;break;case"scroll":case"scrollend":i=tt;break;case"wheel":i=wt;break;case"copy":case"cut":case"paste":i=it;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":i=ht;break;case"toggle":case"beforetoggle":i=vt}var u=0!==(4&a),m=!u&&("scroll"===e||"scrollend"===e),p=u?null!==s?s+"Capture":null:s;u=[];for(var d,y=o;null!==y;){var g=y;if(d=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===d||null===p||null!=(g=Ea(y,p))&&u.push(Wu(y,g,d)),m)break;y=y.return}0<u.length&&(s=new i(s,c,null,t,n),l.push({event:s,listeners:u}))}}if(0===(7&a)){if(i="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||t===Va||!(c=t.relatedTarget||t.fromElement)||!Ye(c)&&!c[Ke])&&(i||s)&&(s=n.window===n?n:(s=n.ownerDocument)?s.defaultView||s.parentWindow:window,i?(i=o,null!==(c=(c=t.relatedTarget||t.toElement)?Ye(c):null)&&(m=E(c),u=c.tag,c!==m||5!==u&&27!==u&&6!==u)&&(c=null)):(i=null,c=o),i!==c)){if(u=nt,g="onMouseLeave",p="onMouseEnter",y="mouse","pointerout"!==e&&"pointerover"!==e||(u=ht,g="onPointerLeave",p="onPointerEnter",y="pointer"),m=null==i?s:Xe(i),d=null==c?s:Xe(c),(s=new u(g,y+"leave",i,t,n)).target=m,s.relatedTarget=d,g=null,Ye(n)===o&&((u=new u(p,y+"enter",c,t,n)).target=d,u.relatedTarget=m,g=u),m=g,i&&c)e:{for(p=c,y=0,d=u=i;d;d=Eu(d))y++;for(d=0,g=p;g;g=Eu(g))d++;for(;0<y-d;)u=Eu(u),y--;for(;0<d-y;)p=Eu(p),d--;for(;y--;){if(u===p||null!==p&&u===p.alternate)break e;u=Eu(u),p=Eu(p)}u=null}else u=null;null!==i&&Hu(l,s,i,u,!1),null!==c&&null!==m&&Hu(l,m,c,u,!0)}if("select"===(i=(s=o?Xe(o):window).nodeName&&s.nodeName.toLowerCase())||"input"===i&&"file"===s.type)var h=Ot;else if(Vt(s))if(Et)h=Jt;else{h=Ut;var b=zt}else!(i=s.nodeName)||"input"!==i.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?o&&Da(o.elementType)&&(h=Ot):h=qt;switch(h&&(h=h(e,o))?Rt(l,h,t,n):(b&&b(e,s,o),"focusout"===e&&o&&"number"===s.type&&null!=o.memoizedProps.value&&va(s,"number",s.value)),b=o?Xe(o):window,e){case"focusin":(Vt(b)||"true"===b.contentEditable)&&(no=b,ro=o,lo=null);break;case"focusout":lo=ro=no=null;break;case"mousedown":so=!0;break;case"contextmenu":case"mouseup":case"dragend":so=!1,io(l,t,n);break;case"selectionchange":if(oo)break;case"keydown":case"keyup":io(l,t,n)}var f;if(Ct)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Mt?Dt(e,t)&&(w="onCompositionEnd"):"keydown"===e&&229===t.keyCode&&(w="onCompositionStart");w&&(St&&"ko"!==t.locale&&(Mt||"onCompositionStart"!==w?"onCompositionEnd"===w&&Mt&&(f=za()):(ja="value"in(Ka=n)?Ka.value:Ka.textContent,Mt=!0)),0<(b=Ou(o,w)).length&&(w=new ct(w,e,null,t,n),l.push({event:w,listeners:b}),f?w.data=f:null!==(f=Bt(t))&&(w.data=f))),(f=kt?function(e,a){switch(e){case"compositionend":return Bt(a);case"keypress":return 32!==a.which?null:(At=!0,Lt);case"textInput":return(e=a.data)===Lt&&At?null:e;default:return null}}(e,t):function(e,a){if(Mt)return"compositionend"===e||!Ct&&Dt(e,a)?(e=za(),Ia=ja=Ka=null,Mt=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return St&&"ko"!==a.locale?null:a.data}}(e,t))&&(0<(w=Ou(o,"onBeforeInput")).length&&(b=new ct("onBeforeInput","beforeinput",null,t,n),l.push({event:b,listeners:w}),b.data=f)),function(e,a,t,o,n){if("submit"===a&&t&&t.stateNode===n){var r=ku((n[Ne]||null).action),l=o.submitter;l&&null!==(a=(a=l[Ne]||null)?ku(a.formAction):l.getAttribute("formAction"))&&(r=a,l=null);var s=new et("action","action",null,o,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(0!==hu){var e=l?Su(n,l):new FormData(n);dl(t,{pending:!0,data:e,method:n.method,action:r},null,e)}}else"function"===typeof r&&(s.preventDefault(),e=l?Su(n,l):new FormData(n),dl(t,{pending:!0,data:e,method:n.method,action:r},r,e))},currentTarget:n}]})}}(l,e,o,t,n)}Mu(l,a)})}function Wu(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Ou(e,a){for(var t=a+"Capture",o=[];null!==e;){var n=e,r=n.stateNode;5!==(n=n.tag)&&26!==n&&27!==n||null===r||(null!=(n=Ea(e,t))&&o.unshift(Wu(e,n,r)),null!=(n=Ea(e,a))&&o.push(Wu(e,n,r))),e=e.return}return o}function Eu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Hu(e,a,t,o,n){for(var r=a._reactName,l=[];null!==t&&t!==o;){var s=t,i=s.alternate,c=s.stateNode;if(s=s.tag,null!==i&&i===o)break;5!==s&&26!==s&&27!==s||null===c||(i=c,n?null!=(c=Ea(t,r))&&l.unshift(Wu(t,c,i)):n||null!=(c=Ea(t,r))&&l.push(Wu(t,c,i))),t=t.return}0!==l.length&&e.push({event:a,listeners:l})}var Nu=/\r\n?/g,Ku=/\u0000|\uFFFD/g;function ju(e){return("string"===typeof e?e:""+e).replace(Nu,"\n").replace(Ku,"")}function Iu(e,a){return a=ju(a),ju(e)===a}function zu(){}function Uu(e,a,t,o,n,l){switch(t){case"children":"string"===typeof o?"body"===a||"textarea"===a&&""===o||ka(e,o):("number"===typeof o||"bigint"===typeof o)&&"body"!==a&&ka(e,""+o);break;case"className":ca(e,"class",o);break;case"tabIndex":ca(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ca(e,t,o);break;case"style":Aa(e,o,l);break;case"data":if("object"!==a){ca(e,"data",o);break}case"src":case"href":if(""===o&&("a"!==a||"href"!==t)){e.removeAttribute(t);break}if(null==o||"function"===typeof o||"symbol"===typeof o||"boolean"===typeof o){e.removeAttribute(t);break}o=Ta(""+o),e.setAttribute(t,o);break;case"action":case"formAction":if("function"===typeof o){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof l&&("formAction"===t?("input"!==a&&Uu(e,a,"name",n.name,n,null),Uu(e,a,"formEncType",n.formEncType,n,null),Uu(e,a,"formMethod",n.formMethod,n,null),Uu(e,a,"formTarget",n.formTarget,n,null)):(Uu(e,a,"encType",n.encType,n,null),Uu(e,a,"method",n.method,n,null),Uu(e,a,"target",n.target,n,null))),null==o||"symbol"===typeof o||"boolean"===typeof o){e.removeAttribute(t);break}o=Ta(""+o),e.setAttribute(t,o);break;case"onClick":null!=o&&(e.onclick=zu);break;case"onScroll":null!=o&&Tu("scroll",e);break;case"onScrollEnd":null!=o&&Tu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=o){if("object"!==typeof o||!("__html"in o))throw Error(r(61));if(null!=(t=o.__html)){if(null!=n.children)throw Error(r(60));e.innerHTML=t}}break;case"multiple":e.multiple=o&&"function"!==typeof o&&"symbol"!==typeof o;break;case"muted":e.muted=o&&"function"!==typeof o&&"symbol"!==typeof o;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==o||"function"===typeof o||"boolean"===typeof o||"symbol"===typeof o){e.removeAttribute("xlink:href");break}t=Ta(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=o&&"function"!==typeof o&&"symbol"!==typeof o?e.setAttribute(t,""+o):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&"function"!==typeof o&&"symbol"!==typeof o?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":!0===o?e.setAttribute(t,""):!1!==o&&null!=o&&"function"!==typeof o&&"symbol"!==typeof o?e.setAttribute(t,o):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&!isNaN(o)&&1<=o?e.setAttribute(t,o):e.removeAttribute(t);break;case"rowSpan":case"start":null==o||"function"===typeof o||"symbol"===typeof o||isNaN(o)?e.removeAttribute(t):e.setAttribute(t,o);break;case"popover":Tu("beforetoggle",e),Tu("toggle",e),ia(e,"popover",o);break;case"xlinkActuate":ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ua(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ua(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ua(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ua(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ia(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&ia(e,t=Ba.get(t)||t,o)}}function qu(e,a,t,o,n,l){switch(t){case"style":Aa(e,o,l);break;case"dangerouslySetInnerHTML":if(null!=o){if("object"!==typeof o||!("__html"in o))throw Error(r(61));if(null!=(t=o.__html)){if(null!=n.children)throw Error(r(60));e.innerHTML=t}}break;case"children":"string"===typeof o?ka(e,o):("number"===typeof o||"bigint"===typeof o)&&ka(e,""+o);break;case"onScroll":null!=o&&Tu("scroll",e);break;case"onScrollEnd":null!=o&&Tu("scrollend",e);break;case"onClick":null!=o&&(e.onclick=zu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:aa.hasOwnProperty(t)||("o"!==t[0]||"n"!==t[1]||(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),"function"===typeof(l=null!=(l=e[Ne]||null)?l[t]:null)&&e.removeEventListener(a,l,n),"function"!==typeof o)?t in e?e[t]=o:!0===o?e.setAttribute(t,""):ia(e,t,o):("function"!==typeof l&&null!==l&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,o,n)))}}function Ju(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tu("error",e),Tu("load",e);var o,n=!1,l=!1;for(o in t)if(t.hasOwnProperty(o)){var s=t[o];if(null!=s)switch(o){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Uu(e,a,o,s,t,null)}}return l&&Uu(e,a,"srcSet",t.srcSet,t,null),void(n&&Uu(e,a,"src",t.src,t,null));case"input":Tu("invalid",e);var i=o=s=l=null,c=null,u=null;for(n in t)if(t.hasOwnProperty(n)){var m=t[n];if(null!=m)switch(n){case"name":l=m;break;case"type":s=m;break;case"checked":c=m;break;case"defaultChecked":u=m;break;case"value":o=m;break;case"defaultValue":i=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(r(137,a));break;default:Uu(e,a,n,m,t,null)}}return wa(e,o,i,c,u,s,l,!1),void da(e);case"select":for(l in Tu("invalid",e),n=s=o=null,t)if(t.hasOwnProperty(l)&&null!=(i=t[l]))switch(l){case"value":o=i;break;case"defaultValue":s=i;break;case"multiple":n=i;default:Uu(e,a,l,i,t,null)}return a=o,t=s,e.multiple=!!n,void(null!=a?_a(e,!!n,a,!1):null!=t&&_a(e,!!n,t,!0));case"textarea":for(s in Tu("invalid",e),o=l=n=null,t)if(t.hasOwnProperty(s)&&null!=(i=t[s]))switch(s){case"value":n=i;break;case"defaultValue":l=i;break;case"children":o=i;break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(r(91));break;default:Uu(e,a,s,i,t,null)}return xa(e,n,l,o),void da(e);case"option":for(c in t)if(t.hasOwnProperty(c)&&null!=(n=t[c]))if("selected"===c)e.selected=n&&"function"!==typeof n&&"symbol"!==typeof n;else Uu(e,a,c,n,t,null);return;case"dialog":Tu("cancel",e),Tu("close",e);break;case"iframe":case"object":Tu("load",e);break;case"video":case"audio":for(n=0;n<Du.length;n++)Tu(Du[n],e);break;case"image":Tu("error",e),Tu("load",e);break;case"details":Tu("toggle",e);break;case"embed":case"source":case"link":Tu("error",e),Tu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in t)if(t.hasOwnProperty(u)&&null!=(n=t[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Uu(e,a,u,n,t,null)}return;default:if(Da(a)){for(m in t)t.hasOwnProperty(m)&&(void 0!==(n=t[m])&&qu(e,a,m,n,t,void 0));return}}for(i in t)t.hasOwnProperty(i)&&(null!=(n=t[i])&&Uu(e,a,i,n,t,null))}var Yu=null,$u=null;function Xu(e){return 9===e.nodeType?e:e.ownerDocument}function Zu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qu(e,a){if(0===e)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===a?0:e}function em(e,a){return"textarea"===e||"noscript"===e||"string"===typeof a.children||"number"===typeof a.children||"bigint"===typeof a.children||"object"===typeof a.dangerouslySetInnerHTML&&null!==a.dangerouslySetInnerHTML&&null!=a.dangerouslySetInnerHTML.__html}var am=null;var tm="function"===typeof setTimeout?setTimeout:void 0,om="function"===typeof clearTimeout?clearTimeout:void 0,nm="function"===typeof Promise?Promise:void 0,rm="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof nm?function(e){return nm.resolve(null).then(e).catch(lm)}:tm;function lm(e){setTimeout(function(){throw e})}function sm(e,a){var t=a,o=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&8===n.nodeType)if("/$"===(t=n.data)){if(0===o)return e.removeChild(n),void bp(a);o--}else"$"!==t&&"$?"!==t&&"$!"!==t||o++;t=n}while(t);bp(a)}function im(e){var a=e.firstChild;for(a&&10===a.nodeType&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":im(t),Je(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===t.rel.toLowerCase())continue}e.removeChild(t)}}function cm(e){for(;null!=e;e=e.nextSibling){var a=e.nodeType;if(1===a||3===a)break;if(8===a){if("$"===(a=e.data)||"$!"===a||"$?"===a||"F!"===a||"F"===a)break;if("/$"===a)return null}}return e}function um(e){e=e.previousSibling;for(var a=0;e;){if(8===e.nodeType){var t=e.data;if("$"===t||"$!"===t||"$?"===t){if(0===a)return e;a--}else"/$"===t&&a++}e=e.previousSibling}return null}function mm(e,a,t){switch(a=Xu(t),e){case"html":if(!(e=a.documentElement))throw Error(r(452));return e;case"head":if(!(e=a.head))throw Error(r(453));return e;case"body":if(!(e=a.body))throw Error(r(454));return e;default:throw Error(r(451))}}var pm=new Map,dm=new Set;function ym(e){return"function"===typeof e.getRootNode?e.getRootNode():e.ownerDocument}var gm=I.d;I.d={f:function(){var e=gm.f(),a=Hc();return e||a},r:function(e){var a=$e(e);null!==a&&5===a.tag&&"form"===a.type?gl(a):gm.r(e)},D:function(e){gm.D(e),bm("dns-prefetch",e,null)},C:function(e,a){gm.C(e,a),bm("preconnect",e,a)},L:function(e,a,t){gm.L(e,a,t);var o=hm;if(o&&e&&a){var n='link[rel="preload"][as="'+ba(a)+'"]';"image"===a&&t&&t.imageSrcSet?(n+='[imagesrcset="'+ba(t.imageSrcSet)+'"]',"string"===typeof t.imageSizes&&(n+='[imagesizes="'+ba(t.imageSizes)+'"]')):n+='[href="'+ba(e)+'"]';var r=n;switch(a){case"style":r=wm(e);break;case"script":r=Cm(e)}pm.has(r)||(e=R({rel:"preload",href:"image"===a&&t&&t.imageSrcSet?void 0:e,as:a},t),pm.set(r,e),null!==o.querySelector(n)||"style"===a&&o.querySelector(vm(r))||"script"===a&&o.querySelector(xm(r))||(Ju(a=o.createElement("link"),"link",e),Qe(a),o.head.appendChild(a)))}},m:function(e,a){gm.m(e,a);var t=hm;if(t&&e){var o=a&&"string"===typeof a.as?a.as:"script",n='link[rel="modulepreload"][as="'+ba(o)+'"][href="'+ba(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Cm(e)}if(!pm.has(r)&&(e=R({rel:"modulepreload",href:e},a),pm.set(r,e),null===t.querySelector(n))){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(xm(r)))return}Ju(o=t.createElement("link"),"link",e),Qe(o),t.head.appendChild(o)}}},X:function(e,a){gm.X(e,a);var t=hm;if(t&&e){var o=Ze(t).hoistableScripts,n=Cm(e),r=o.get(n);r||((r=t.querySelector(xm(n)))||(e=R({src:e,async:!0},a),(a=pm.get(n))&&Am(e,a),Qe(r=t.createElement("script")),Ju(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}},S:function(e,a,t){gm.S(e,a,t);var o=hm;if(o&&e){var n=Ze(o).hoistableStyles,r=wm(e);a=a||"default";var l=n.get(r);if(!l){var s={loading:0,preload:null};if(l=o.querySelector(vm(r)))s.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":a},t),(t=pm.get(r))&&Lm(e,t);var i=l=o.createElement("link");Qe(i),Ju(i,"link",e),i._p=new Promise(function(e,a){i.onload=e,i.onerror=a}),i.addEventListener("load",function(){s.loading|=1}),i.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Sm(l,a,o)}l={type:"stylesheet",instance:l,count:1,state:s},n.set(r,l)}}},M:function(e,a){gm.M(e,a);var t=hm;if(t&&e){var o=Ze(t).hoistableScripts,n=Cm(e),r=o.get(n);r||((r=t.querySelector(xm(n)))||(e=R({src:e,async:!0,type:"module"},a),(a=pm.get(n))&&Am(e,a),Qe(r=t.createElement("script")),Ju(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}};var hm="undefined"===typeof document?null:document;function bm(e,a,t){var o=hm;if(o&&"string"===typeof a&&a){var n=ba(a);n='link[rel="'+e+'"][href="'+n+'"]',"string"===typeof t&&(n+='[crossorigin="'+t+'"]'),dm.has(n)||(dm.add(n),e={rel:e,crossOrigin:t,href:a},null===o.querySelector(n)&&(Ju(a=o.createElement("link"),"link",e),Qe(a),o.head.appendChild(a)))}}function fm(e,a,t,o){var n,l,s,i,c=(c=Q.current)?ym(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof t.precedence&&"string"===typeof t.href?(a=wm(t.href),(o=(t=Ze(c).hoistableStyles).get(a))||(o={type:"style",instance:null,count:0,state:null},t.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===t.rel&&"string"===typeof t.href&&"string"===typeof t.precedence){e=wm(t.href);var u=Ze(c).hoistableStyles,m=u.get(e);if(m||(c=c.ownerDocument||c,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=c.querySelector(vm(e)))&&!u._p&&(m.instance=u,m.state.loading=5),pm.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},pm.set(e,t),u||(n=c,l=e,s=t,i=m.state,n.querySelector('link[rel="preload"][as="style"]['+l+"]")?i.loading=1:(l=n.createElement("link"),i.preload=l,l.addEventListener("load",function(){return i.loading|=1}),l.addEventListener("error",function(){return i.loading|=2}),Ju(l,"link",s),Qe(l),n.head.appendChild(l))))),a&&null===o)throw Error(r(528,""));return m}if(a&&null!==o)throw Error(r(529,""));return null;case"script":return a=t.async,"string"===typeof(t=t.src)&&a&&"function"!==typeof a&&"symbol"!==typeof a?(a=Cm(t),(o=(t=Ze(c).hoistableScripts).get(a))||(o={type:"script",instance:null,count:0,state:null},t.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function wm(e){return'href="'+ba(e)+'"'}function vm(e){return'link[rel="stylesheet"]['+e+"]"}function _m(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function Cm(e){return'[src="'+ba(e)+'"]'}function xm(e){return"script[async]"+e}function km(e,a,t){if(a.count++,null===a.instance)switch(a.type){case"style":var o=e.querySelector('style[data-href~="'+ba(t.href)+'"]');if(o)return a.instance=o,Qe(o),o;var n=R({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return Qe(o=(e.ownerDocument||e).createElement("style")),Ju(o,"style",n),Sm(o,t.precedence,e),a.instance=o;case"stylesheet":n=wm(t.href);var l=e.querySelector(vm(n));if(l)return a.state.loading|=4,a.instance=l,Qe(l),l;o=_m(t),(n=pm.get(n))&&Lm(o,n),Qe(l=(e.ownerDocument||e).createElement("link"));var s=l;return s._p=new Promise(function(e,a){s.onload=e,s.onerror=a}),Ju(l,"link",o),a.state.loading|=4,Sm(l,t.precedence,e),a.instance=l;case"script":return l=Cm(t.src),(n=e.querySelector(xm(l)))?(a.instance=n,Qe(n),n):(o=t,(n=pm.get(l))&&Am(o=R({},t),n),Qe(n=(e=e.ownerDocument||e).createElement("script")),Ju(n,"link",o),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(r(443,a.type))}else"stylesheet"===a.type&&0===(4&a.state.loading)&&(o=a.instance,a.state.loading|=4,Sm(o,t.precedence,e));return a.instance}function Sm(e,a,t){for(var o=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,l=0;l<o.length;l++){var s=o[l];if(s.dataset.precedence===a)r=s;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(a=9===t.nodeType?t.head:t).insertBefore(e,a.firstChild)}function Lm(e,a){null==e.crossOrigin&&(e.crossOrigin=a.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),null==e.title&&(e.title=a.title)}function Am(e,a){null==e.crossOrigin&&(e.crossOrigin=a.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),null==e.integrity&&(e.integrity=a.integrity)}var Dm=null;function Bm(e,a,t){if(null===Dm){var o=new Map,n=Dm=new Map;n.set(t,o)}else(o=(n=Dm).get(t))||(o=new Map,n.set(t,o));if(o.has(e))return o;for(o.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var r=t[n];if(!(r[qe]||r[He]||"link"===e&&"stylesheet"===r.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==r.namespaceURI){var l=r.getAttribute(a)||"";l=e+l;var s=o.get(l);s?s.push(r):o.set(l,[r])}}return o}function Mm(e,a,t){(e=e.ownerDocument||e).head.insertBefore(t,"title"===a?e.querySelector("head > title"):null)}function Tm(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Vm=null;function Rm(){}function Pm(){if(this.count--,0===this.count)if(this.stylesheets)Gm(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Fm=null;function Gm(e,a){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Fm=new Map,a.forEach(Wm,e),Fm=null,Pm.call(e))}function Wm(e,a){if(!(4&a.state.loading)){var t=Fm.get(e);if(t)var o=t.get(null);else{t=new Map,Fm.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var l=n[r];"LINK"!==l.nodeName&&"not all"===l.getAttribute("media")||(t.set(l.dataset.precedence,l),o=l)}o&&t.set(null,o)}l=(n=a.instance).getAttribute("data-precedence"),(r=t.get(l)||o)===o&&t.set(null,n),t.set(l,n),this.count++,o=Pm.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(n,e.firstChild),a.state.loading|=4}}var Om={$$typeof:f,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function Em(e,a,t,o,n,r,l,s){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Hm(e,a,t,o,n,r,l,s,i,c,u,m){return e=new Em(e,a,t,l,s,i,c,m),a=1,!0===r&&(a|=24),r=Wi(3,null,null,a),e.current=r,r.stateNode=e,(a=jn()).refCount++,e.pooledCache=a,a.refCount++,r.memoizedState={element:o,isDehydrated:t,cache:a},Ts(r),e}function Nm(e){return e?e=Po:Po}function Km(e,a,t,o,n,r){n=Nm(n),null===o.context?o.context=n:o.pendingContext=n,(o=Rs(a)).payload={element:t},null!==(r=void 0===r?null:r)&&(o.callback=r),null!==(t=Ps(e,o,a))&&(Pc(t,0,a),Fs(t,e,a))}function jm(e,a){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var t=e.retryLane;e.retryLane=0!==t&&t<a?t:a}}function Im(e,a){jm(e,a),(e=e.alternate)&&jm(e,a)}function zm(e){if(13===e.tag){var a=To(e,67108864);null!==a&&Pc(a,0,67108864),Im(e,67108864)}}var Um=!0;function qm(e,a,t,o){var n=V.T;V.T=null;var r=I.p;try{I.p=2,Ym(e,a,t,o)}finally{I.p=r,V.T=n}}function Jm(e,a,t,o){var n=V.T;V.T=null;var r=I.p;try{I.p=8,Ym(e,a,t,o)}finally{I.p=r,V.T=n}}function Ym(e,a,t,o){if(Um){var n=$m(o);if(null===n)Gu(e,a,o,Xm,t),ip(e,o);else if(function(e,a,t,o,n){switch(a){case"focusin":return ap=cp(ap,e,a,t,o,n),!0;case"dragenter":return tp=cp(tp,e,a,t,o,n),!0;case"mouseover":return op=cp(op,e,a,t,o,n),!0;case"pointerover":var r=n.pointerId;return np.set(r,cp(np.get(r)||null,e,a,t,o,n)),!0;case"gotpointercapture":return r=n.pointerId,rp.set(r,cp(rp.get(r)||null,e,a,t,o,n)),!0}return!1}(n,e,a,t,o))o.stopPropagation();else if(ip(e,o),4&a&&-1<sp.indexOf(e)){for(;null!==n;){var r=$e(n);if(null!==r)switch(r.tag){case 3:if((r=r.stateNode).current.memoizedState.isDehydrated){var l=Ae(r.pendingLanes);if(0!==l){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;l;){var i=1<<31-Ce(l);s.entanglements[1]|=i,l&=~i}bu(r),0===(6&tc)&&(Cc=ue()+500,fu(0,!1))}}break;case 13:null!==(s=To(r,2))&&Pc(s,0,2),Hc(),Im(r,2)}if(null===(r=$m(o))&&Gu(e,a,o,Xm,t),r===n)break;n=r}null!==n&&o.stopPropagation()}else Gu(e,a,o,null,t)}}function $m(e){return Zm(e=Ra(e))}var Xm=null;function Zm(e){if(Xm=null,null!==(e=Ye(e))){var a=E(e);if(null===a)e=null;else{var t=a.tag;if(13===t){if(null!==(e=H(a)))return e;e=null}else if(3===t){if(a.stateNode.current.memoizedState.isDehydrated)return 3===a.tag?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Xm=e,null}function Qm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(me()){case pe:return 2;case de:return 8;case ye:case ge:return 32;case he:return 268435456;default:return 32}default:return 32}}var ep=!1,ap=null,tp=null,op=null,np=new Map,rp=new Map,lp=[],sp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ip(e,a){switch(e){case"focusin":case"focusout":ap=null;break;case"dragenter":case"dragleave":tp=null;break;case"mouseover":case"mouseout":op=null;break;case"pointerover":case"pointerout":np.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":rp.delete(a.pointerId)}}function cp(e,a,t,o,n,r){return null===e||e.nativeEvent!==r?(e={blockedOn:a,domEventName:t,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},null!==a&&(null!==(a=$e(a))&&zm(a)),e):(e.eventSystemFlags|=o,a=e.targetContainers,null!==n&&-1===a.indexOf(n)&&a.push(n),e)}function up(e){var a=Ye(e.target);if(null!==a){var t=E(a);if(null!==t)if(13===(a=t.tag)){if(null!==(a=H(t)))return e.blockedOn=a,void function(e,a){var t=I.p;try{return I.p=e,a()}finally{I.p=t}}(e.priority,function(){if(13===t.tag){var e=Vc(),a=To(t,e);null!==a&&Pc(a,0,e),Im(t,e)}})}else if(3===a&&t.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===t.tag?t.stateNode.containerInfo:null)}e.blockedOn=null}function mp(e){if(null!==e.blockedOn)return!1;for(var a=e.targetContainers;0<a.length;){var t=$m(e.nativeEvent);if(null!==t)return null!==(a=$e(t))&&zm(a),e.blockedOn=t,!1;var o=new(t=e.nativeEvent).constructor(t.type,t);Va=o,t.target.dispatchEvent(o),Va=null,a.shift()}return!0}function pp(e,a,t){mp(e)&&t.delete(a)}function dp(){ep=!1,null!==ap&&mp(ap)&&(ap=null),null!==tp&&mp(tp)&&(tp=null),null!==op&&mp(op)&&(op=null),np.forEach(pp),rp.forEach(pp)}function yp(e,a){e.blockedOn===a&&(e.blockedOn=null,ep||(ep=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,dp)))}var gp=null;function hp(e){gp!==e&&(gp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){gp===e&&(gp=null);for(var a=0;a<e.length;a+=3){var t=e[a],o=e[a+1],n=e[a+2];if("function"!==typeof o){if(null===Zm(o||t))continue;break}var r=$e(t);null!==r&&(e.splice(a,3),a-=3,dl(r,{pending:!0,data:n,method:t.method,action:o},o,n))}}))}function bp(e){function a(a){return yp(a,e)}null!==ap&&yp(ap,e),null!==tp&&yp(tp,e),null!==op&&yp(op,e),np.forEach(a),rp.forEach(a);for(var t=0;t<lp.length;t++){var o=lp[t];o.blockedOn===e&&(o.blockedOn=null)}for(;0<lp.length&&null===(t=lp[0]).blockedOn;)up(t),null===t.blockedOn&&lp.shift();if(null!=(t=(e.ownerDocument||e).$$reactFormReplay))for(o=0;o<t.length;o+=3){var n=t[o],r=t[o+1],l=n[Ne]||null;if("function"===typeof r)l||hp(t);else if(l){var s=null;if(r&&r.hasAttribute("formAction")){if(n=r,l=r[Ne]||null)s=l.formAction;else if(null!==Zm(n))continue}else s=l.action;"function"===typeof s?t[o+1]=s:(t.splice(o,3),o-=3),hp(t)}}}function fp(e){this._internalRoot=e}function wp(e){this._internalRoot=e}wp.prototype.render=fp.prototype.render=function(e){var a=this._internalRoot;if(null===a)throw Error(r(409));Km(a.current,Vc(),e,a,null,null)},wp.prototype.unmount=fp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var a=e.containerInfo;0===e.tag&&ou(),Km(e.current,2,null,e,null,null),Hc(),a[Ke]=null}},wp.prototype.unstable_scheduleHydration=function(e){if(e){var a=Oe();e={blockedOn:null,target:e,priority:a};for(var t=0;t<lp.length&&0!==a&&a<lp[t].priority;t++);lp.splice(t,0,e),0===t&&up(e)}};var vp=o.version;if("19.0.0"!==vp)throw Error(r(527,vp,"19.0.0"));I.findDOMNode=function(e){var a=e._reactInternals;if(void 0===a){if("function"===typeof e.render)throw Error(r(188));throw e=Object.keys(e).join(","),Error(r(268,e))}return e=function(e){var a=e.alternate;if(!a){if(null===(a=E(e)))throw Error(r(188));return a!==e?null:e}for(var t=e,o=a;;){var n=t.return;if(null===n)break;var l=n.alternate;if(null===l){if(null!==(o=n.return)){t=o;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===t)return N(n),e;if(l===o)return N(n),a;l=l.sibling}throw Error(r(188))}if(t.return!==o.return)t=n,o=l;else{for(var s=!1,i=n.child;i;){if(i===t){s=!0,t=n,o=l;break}if(i===o){s=!0,o=n,t=l;break}i=i.sibling}if(!s){for(i=l.child;i;){if(i===t){s=!0,t=l,o=n;break}if(i===o){s=!0,o=l,t=n;break}i=i.sibling}if(!s)throw Error(r(189))}}if(t.alternate!==o)throw Error(r(190))}if(3!==t.tag)throw Error(r(188));return t.stateNode.current===t?e:a}(a),e=null===(e=null!==e?K(e):null)?null:e.stateNode};var _p={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:V,findFiberByHostInstance:Ye,reconcilerVersion:"19.0.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Cp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cp.isDisabled&&Cp.supportsFiber)try{we=Cp.inject(_p),ve=Cp}catch(kp){}}a.createRoot=function(e,a){if(!s(e))throw Error(r(299));var t=!1,o="",n=Wl,l=Ol,i=El;return null!==a&&void 0!==a&&(!0===a.unstable_strictMode&&(t=!0),void 0!==a.identifierPrefix&&(o=a.identifierPrefix),void 0!==a.onUncaughtError&&(n=a.onUncaughtError),void 0!==a.onCaughtError&&(l=a.onCaughtError),void 0!==a.onRecoverableError&&(i=a.onRecoverableError),void 0!==a.unstable_transitionCallbacks&&a.unstable_transitionCallbacks),a=Hm(e,1,!1,null,0,t,o,n,l,i,0,null),e[Ke]=a.current,Pu(8===e.nodeType?e.parentNode:e),new fp(a)}}),n=t.cw((e,a)=>{var t=c();function o(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(o(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function i(e,a){return"font"===e?"":"string"===typeof a?"use-credentials"===a?a:"":void 0}a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,a.createPortal=function(e,a){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)throw Error(o(299));return function(e,a,t){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==o?null:""+o,children:e,containerInfo:a,implementation:t}}(e,a,null,t)},a.flushSync=function(e){var a=s.T,t=r.p;try{if(s.T=null,r.p=2,e)return e()}finally{s.T=a,r.p=t,r.d.f()}},a.preconnect=function(e,a){"string"===typeof e&&(a?a="string"===typeof(a=a.crossOrigin)?"use-credentials"===a?a:"":void 0:a=null,r.d.C(e,a))},a.prefetchDNS=function(e){"string"===typeof e&&r.d.D(e)},a.preinit=function(e,a){if("string"===typeof e&&a&&"string"===typeof a.as){var t=a.as,o=i(t,a.crossOrigin),n="string"===typeof a.integrity?a.integrity:void 0,l="string"===typeof a.fetchPriority?a.fetchPriority:void 0;"style"===t?r.d.S(e,"string"===typeof a.precedence?a.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:l}):"script"===t&&r.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:l,nonce:"string"===typeof a.nonce?a.nonce:void 0})}},a.preinitModule=function(e,a){if("string"===typeof e)if("object"===typeof a&&null!==a){if(null==a.as||"script"===a.as){var t=i(a.as,a.crossOrigin);r.d.M(e,{crossOrigin:t,integrity:"string"===typeof a.integrity?a.integrity:void 0,nonce:"string"===typeof a.nonce?a.nonce:void 0})}}else null==a&&r.d.M(e)},a.preload=function(e,a){if("string"===typeof e&&"object"===typeof a&&null!==a&&"string"===typeof a.as){var t=a.as,o=i(t,a.crossOrigin);r.d.L(e,t,{crossOrigin:o,integrity:"string"===typeof a.integrity?a.integrity:void 0,nonce:"string"===typeof a.nonce?a.nonce:void 0,type:"string"===typeof a.type?a.type:void 0,fetchPriority:"string"===typeof a.fetchPriority?a.fetchPriority:void 0,referrerPolicy:"string"===typeof a.referrerPolicy?a.referrerPolicy:void 0,imageSrcSet:"string"===typeof a.imageSrcSet?a.imageSrcSet:void 0,imageSizes:"string"===typeof a.imageSizes?a.imageSizes:void 0,media:"string"===typeof a.media?a.media:void 0})}},a.preloadModule=function(e,a){if("string"===typeof e)if(a){var t=i(a.as,a.crossOrigin);r.d.m(e,{as:"string"===typeof a.as&&"script"!==a.as?a.as:void 0,crossOrigin:t,integrity:"string"===typeof a.integrity?a.integrity:void 0})}else r.d.m(e)},a.requestFormReset=function(e){r.d.r(e)},a.unstable_batchedUpdates=function(e,a){return e(a)},a.useFormState=function(e,a,t){return s.H.useFormState(e,a,t)},a.useFormStatus=function(){return s.H.useHostTransitionStatus()},a.version="19.0.0"}),r=t.cw(e=>{!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}(),e.exports=o()}),l=t.cw(e=>{!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}(),e.exports=n()}),s=t.cw((e,a)=>{var t=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function n(e,a,o){var n=null;if(void 0!==o&&(n=""+o),void 0!==a.key&&(n=""+a.key),"key"in a)for(var r in o={},a)"key"!==r&&(o[r]=a[r]);else o=a;return a=o.ref,{$$typeof:t,type:e,key:n,ref:void 0!==a?a:null,props:o}}a.Fragment=o,a.jsx=n,a.jsxs=n}),i=t.cw((e,a)=>{var t=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,h={};function b(e,a,t){this.props=e,this.context=a,this.refs=h,this.updater=t||y}function f(){}function w(e,a,t){this.props=e,this.context=a,this.refs=h,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,a){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},f.prototype=b.prototype;var v=w.prototype=new f;v.constructor=w,g(v,b.prototype),v.isPureReactComponent=!0;var _=Array.isArray,C={H:null,A:null,T:null,S:null},x=Object.prototype.hasOwnProperty;function k(e,a,o,n,r,l){return o=l.ref,{$$typeof:t,type:e,key:a,ref:void 0!==o?o:null,props:l}}function S(e){return"object"===typeof e&&null!==e&&e.$$typeof===t}var L=/\/+/g;function A(e,a){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return a[e]})}(""+e.key):a.toString(36)}function D(){}function B(e,a,n,r,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case o:u=!0;break;case p:return B((u=e._init)(e._payload),a,n,r,l)}}if(u)return l=l(e),u=""===r?"."+A(e,0):r,_(l)?(n="",null!=u&&(n=u.replace(L,"$&/")+"/"),B(l,a,n,"",function(e){return e})):null!=l&&(S(l)&&(i=l,c=n+(null==l.key||e&&e.key===l.key?"":(""+l.key).replace(L,"$&/")+"/")+u,l=k(i.type,c,void 0,0,0,i.props)),a.push(l)),1;u=0;var m,y=""===r?".":r+":";if(_(e))for(var g=0;g<e.length;g++)u+=B(r=e[g],a,n,s=y+A(r,g),l);else if("function"===typeof(g=null===(m=e)||"object"!==typeof m?null:"function"===typeof(m=d&&m[d]||m["@@iterator"])?m:null))for(e=g.call(e),g=0;!(r=e.next()).done;)u+=B(r=r.value,a,n,s=y+A(r,g++),l);else if("object"===s){if("function"===typeof e.then)return B(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(D,D):(e.status="pending",e.then(function(a){"pending"===e.status&&(e.status="fulfilled",e.value=a)},function(a){"pending"===e.status&&(e.status="rejected",e.reason=a)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),a,n,r,l);throw a=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===a?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return u}function M(e,a,t){if(null==e)return e;var o=[],n=0;return B(e,o,"","",function(e){return a.call(t,e,n++)}),o}function T(e){if(-1===e._status){var a=e._result;(a=a()).then(function(a){0!==e._status&&-1!==e._status||(e._status=1,e._result=a)},function(a){0!==e._status&&-1!==e._status||(e._status=2,e._result=a)}),-1===e._status&&(e._status=0,e._result=a)}if(1===e._status)return e._result.default;throw e._result}var V="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function R(){}a.Children={map:M,forEach:function(e,a,t){M(e,function(){a.apply(this,arguments)},t)},count:function(e){var a=0;return M(e,function(){a++}),a},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},a.Component=b,a.Fragment=n,a.Profiler=l,a.PureComponent=w,a.StrictMode=r,a.Suspense=u,a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,a.act=function(){throw Error("act(...) is not supported in production builds of React.")},a.cache=function(e){return function(){return e.apply(null,arguments)}},a.cloneElement=function(e,a,t){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var o=g({},e.props),n=e.key;if(null!=a)for(r in void 0!==a.ref&&void 0,void 0!==a.key&&(n=""+a.key),a)!x.call(a,r)||"key"===r||"__self"===r||"__source"===r||"ref"===r&&void 0===a.ref||(o[r]=a[r]);var r=arguments.length-2;if(1===r)o.children=t;else if(1<r){for(var l=Array(r),s=0;s<r;s++)l[s]=arguments[s+2];o.children=l}return k(e.type,n,void 0,0,0,o)},a.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},a.createElement=function(e,a,t){var o,n={},r=null;if(null!=a)for(o in void 0!==a.key&&(r=""+a.key),a)x.call(a,o)&&"key"!==o&&"__self"!==o&&"__source"!==o&&(n[o]=a[o]);var l=arguments.length-2;if(1===l)n.children=t;else if(1<l){for(var s=Array(l),i=0;i<l;i++)s[i]=arguments[i+2];n.children=s}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===n[o]&&(n[o]=l[o]);return k(e,r,void 0,0,0,n)},a.createRef=function(){return{current:null}},a.forwardRef=function(e){return{$$typeof:c,render:e}},a.isValidElement=S,a.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},a.memo=function(e,a){return{$$typeof:m,type:e,compare:void 0===a?null:a}},a.startTransition=function(e){var a=C.T,t={};C.T=t;try{var o=e(),n=C.S;null!==n&&n(t,o),"object"===typeof o&&null!==o&&"function"===typeof o.then&&o.then(R,V)}catch(r){V(r)}finally{C.T=a}},a.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},a.use=function(e){return C.H.use(e)},a.useActionState=function(e,a,t){return C.H.useActionState(e,a,t)},a.useCallback=function(e,a){return C.H.useCallback(e,a)},a.useContext=function(e){return C.H.useContext(e)},a.useDebugValue=function(){},a.useDeferredValue=function(e,a){return C.H.useDeferredValue(e,a)},a.useEffect=function(e,a){return C.H.useEffect(e,a)},a.useId=function(){return C.H.useId()},a.useImperativeHandle=function(e,a,t){return C.H.useImperativeHandle(e,a,t)},a.useInsertionEffect=function(e,a){return C.H.useInsertionEffect(e,a)},a.useLayoutEffect=function(e,a){return C.H.useLayoutEffect(e,a)},a.useMemo=function(e,a){return C.H.useMemo(e,a)},a.useOptimistic=function(e,a){return C.H.useOptimistic(e,a)},a.useReducer=function(e,a,t){return C.H.useReducer(e,a,t)},a.useRef=function(e){return C.H.useRef(e)},a.useState=function(e){return C.H.useState(e)},a.useSyncExternalStore=function(e,a,t){return C.H.useSyncExternalStore(e,a,t)},a.useTransition=function(){return C.H.useTransition()},a.version="19.0.0"}),c=t.cw(e=>{e.exports=i()}),u=t.cw(e=>{e.exports=s()}),m=t.cw((e,a)=>{function t(e,a){var t=e.length;e.push(a);e:for(;0<t;){var o=t-1>>>1,n=e[o];if(!(0<r(n,a)))break e;e[o]=a,e[t]=n,t=o}}function o(e){return 0===e.length?null:e[0]}function n(e){if(0===e.length)return null;var a=e[0],t=e.pop();if(t!==a){e[0]=t;e:for(var o=0,n=e.length,l=n>>>1;o<l;){var s=2*(o+1)-1,i=e[s],c=s+1,u=e[c];if(0>r(i,t))c<n&&0>r(u,i)?(e[o]=u,e[c]=t,o=c):(e[o]=i,e[s]=t,o=s);else{if(!(c<n&&0>r(u,t)))break e;e[o]=u,e[c]=t,o=c}}}return a}function r(e,a){var t=e.sortIndex-a.sortIndex;return 0!==t?t:e.id-a.id}if(a.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var l=performance;a.unstable_now=function(){return l.now()}}else{var s=Date,i=s.now();a.unstable_now=function(){return s.now()-i}}var c=[],u=[],m=1,p=null,d=3,y=!1,g=!1,h=!1,b="function"===typeof setTimeout?setTimeout:null,f="function"===typeof clearTimeout?clearTimeout:null,w="undefined"!==typeof setImmediate?setImmediate:null;function v(e){for(var a=o(u);null!==a;){if(null===a.callback)n(u);else{if(!(a.startTime<=e))break;n(u),a.sortIndex=a.expirationTime,t(c,a)}a=o(u)}}function _(e){if(h=!1,v(e),!g)if(null!==o(c))g=!0,T();else{var a=o(u);null!==a&&V(_,a.startTime-e)}}var C,x=!1,k=-1,S=5,L=-1;function A(){return!(a.unstable_now()-L<S)}function D(){if(x){var e=a.unstable_now();L=e;var t=!0;try{e:{g=!1,h&&(h=!1,f(k),k=-1),y=!0;var r=d;try{a:{for(v(e),p=o(c);null!==p&&!(p.expirationTime>e&&A());){var l=p.callback;if("function"===typeof l){p.callback=null,d=p.priorityLevel;var s=l(p.expirationTime<=e);if(e=a.unstable_now(),"function"===typeof s){p.callback=s,v(e),t=!0;break a}p===o(c)&&n(c),v(e)}else n(c);p=o(c)}if(null!==p)t=!0;else{var i=o(u);null!==i&&V(_,i.startTime-e),t=!1}}break e}finally{p=null,d=r,y=!1}t=void 0}}finally{t?C():x=!1}}}if("function"===typeof w)C=function(){w(D)};else if("undefined"!==typeof MessageChannel){var B=new MessageChannel,M=B.port2;B.port1.onmessage=D,C=function(){M.postMessage(null)}}else C=function(){b(D,0)};function T(){x||(x=!0,C())}function V(e,t){k=b(function(){e(a.unstable_now())},t)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(e){e.callback=null},a.unstable_continueExecution=function(){g||y||(g=!0,T())},a.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<e?Math.floor(1e3/e):5},a.unstable_getCurrentPriorityLevel=function(){return d},a.unstable_getFirstCallbackNode=function(){return o(c)},a.unstable_next=function(e){switch(d){case 1:case 2:case 3:var a=3;break;default:a=d}var t=d;d=a;try{return e()}finally{d=t}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(e,a){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=d;d=e;try{return a()}finally{d=t}},a.unstable_scheduleCallback=function(e,n,r){var l=a.unstable_now();switch("object"===typeof r&&null!==r?r="number"===typeof(r=r.delay)&&0<r?l+r:l:r=l,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:m++,callback:n,priorityLevel:e,startTime:r,expirationTime:s=r+s,sortIndex:-1},r>l?(e.sortIndex=r,t(u,e),null===o(c)&&e===o(u)&&(h?(f(k),k=-1):h=!0,V(_,r-l))):(e.sortIndex=s,t(c,e),g||y||(g=!0,T())),e},a.unstable_shouldYield=A,a.unstable_wrapCallback=function(e){var a=d;return function(){var t=d;d=a;try{return e.apply(this,arguments)}finally{d=t}}}}),p=t.cw(e=>{e.exports=m()});function d(){return d.c||(d.c=t.t(c(),2))}c(),r();var y="undefined"===typeof window||"Deno"in globalThis;function g(){}function h(e,a){return"function"===typeof e?e(a):e}function b(e,a){const{type:t="all",exact:o,fetchStatus:n,predicate:r,queryKey:l,stale:s}=e;if(l)if(o){if(a.queryHash!==w(l,a.options))return!1}else if(!_(a.queryKey,l))return!1;if("all"!==t){const e=a.isActive();if("active"===t&&!e)return!1;if("inactive"===t&&e)return!1}return("boolean"!==typeof s||a.isStale()===s)&&((!n||n===a.state.fetchStatus)&&!(r&&!r(a)))}function f(e,a){const{exact:t,status:o,predicate:n,mutationKey:r}=e;if(r){if(!a.options.mutationKey)return!1;if(t){if(v(a.options.mutationKey)!==v(r))return!1}else if(!_(a.options.mutationKey,r))return!1}return(!o||a.state.status===o)&&!(n&&!n(a))}function w(e,a){return(a?.queryKeyHashFn||v)(e)}function v(e){return JSON.stringify(e,(e,a)=>k(a)?Object.keys(a).sort().reduce((e,t)=>(e[t]=a[t],e),{}):a)}function _(e,a){return e===a||typeof e===typeof a&&(!(!e||!a||"object"!==typeof e||"object"!==typeof a)&&!Object.keys(a).some(t=>!_(e[t],a[t])))}function C(e,a){if(e===a)return e;const t=x(e)&&x(a);if(t||k(e)&&k(a)){const o=t?e:Object.keys(e),n=o.length,r=t?a:Object.keys(a),l=r.length,s=t?[]:{};let i=0;for(let c=0;c<l;c++){const n=t?c:r[c];(!t&&o.includes(n)||t)&&void 0===e[n]&&void 0===a[n]?(s[n]=void 0,i++):(s[n]=C(e[n],a[n]),s[n]===e[n]&&void 0!==e[n]&&i++)}return n===l&&i===n?e:s}return a}function x(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function k(e){if(!S(e))return!1;const a=e.constructor;if(void 0===a)return!0;const t=a.prototype;return!!S(t)&&(!!t.hasOwnProperty("isPrototypeOf")&&Object.getPrototypeOf(e)===Object.prototype)}function S(e){return"[object Object]"===Object.prototype.toString.call(e)}function L(e,a,t){return"function"===typeof t.structuralSharing?t.structuralSharing(e,a):!1!==t.structuralSharing?C(e,a):a}function A(e,a,t=0){const o=[...e,a];return t&&o.length>t?o.slice(1):o}function D(e,a,t=0){const o=[a,...e];return t&&o.length>t?o.slice(0,-1):o}var B=Symbol();function M(e,a){return!e.queryFn&&a?.initialPromise?()=>a.initialPromise:e.queryFn&&e.queryFn!==B?e.queryFn:()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))}var T=function(){let e=[],a=0,t=e=>{e()},o=e=>{e()},n=e=>setTimeout(e,0);const r=o=>{a?e.push(o):n(()=>{t(o)})};return{batch:r=>{let l;a++;try{l=r()}finally{a--,a||(()=>{const a=e;e=[],a.length&&n(()=>{o(()=>{a.forEach(e=>{t(e)})})})})()}return l},batchCalls:e=>(...a)=>{r(()=>{e(...a)})},schedule:r,setNotifyFunction:e=>{t=e},setBatchNotifyFunction:e=>{o=e},setScheduler:e=>{n=e}}}(),V=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},R=new class extends V{#e;#a;#t;constructor(){super(),this.#t=e=>{if(!y&&window.addEventListener){const a=()=>e();return window.addEventListener("visibilitychange",a,!1),()=>{window.removeEventListener("visibilitychange",a)}}}}onSubscribe(){this.#a||this.setEventListener(this.#t)}onUnsubscribe(){this.hasListeners()||(this.#a?.(),this.#a=void 0)}setEventListener(e){this.#t=e,this.#a?.(),this.#a=e(e=>{"boolean"===typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(a=>{a(e)})}isFocused(){return"boolean"===typeof this.#e?this.#e:"hidden"!==globalThis.document?.visibilityState}},P=new class extends V{#o=!0;#a;#t;constructor(){super(),this.#t=e=>{if(!y&&window.addEventListener){const a=()=>e(!0),t=()=>e(!1);return window.addEventListener("online",a,!1),window.addEventListener("offline",t,!1),()=>{window.removeEventListener("online",a),window.removeEventListener("offline",t)}}}}onSubscribe(){this.#a||this.setEventListener(this.#t)}onUnsubscribe(){this.hasListeners()||(this.#a?.(),this.#a=void 0)}setEventListener(e){this.#t=e,this.#a?.(),this.#a=e(this.setOnline.bind(this))}setOnline(e){this.#o!==e&&(this.#o=e,this.listeners.forEach(a=>{a(e)}))}isOnline(){return this.#o}};function F(e){return Math.min(1e3*2**e,3e4)}function G(e){return"online"!==(e??"online")||P.isOnline()}var W=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function O(e){return e instanceof W}function E(e){let a,t,o,n=!1,r=0,l=!1;const s=new Promise((e,a)=>{t=e,o=a}),i=()=>R.isFocused()&&("always"===e.networkMode||P.isOnline())&&e.canRun(),c=()=>G(e.networkMode)&&e.canRun(),u=o=>{l||(l=!0,e.onSuccess?.(o),a?.(),t(o))},m=t=>{l||(l=!0,e.onError?.(t),a?.(),o(t))},p=()=>new Promise(t=>{a=e=>{(l||i())&&t(e)},e.onPause?.()}).then(()=>{a=void 0,l||e.onContinue?.()}),d=()=>{if(l)return;let a;const t=0===r?e.initialPromise:void 0;try{a=t??e.fn()}catch(o){a=Promise.reject(o)}Promise.resolve(a).then(u).catch(a=>{if(l)return;const t=e.retry??(y?0:3),o=e.retryDelay??F,s="function"===typeof o?o(r,a):o,c=!0===t||"number"===typeof t&&r<t||"function"===typeof t&&t(r,a);var u;!n&&c?(r++,e.onFail?.(r,a),(u=s,new Promise(e=>{setTimeout(e,u)})).then(()=>i()?void 0:p()).then(()=>{n?m(a):d()})):m(a)})};return{promise:s,cancel:a=>{l||(m(new W(a)),e.abort?.())},continue:()=>(a?.(),s),cancelRetry:()=>{n=!0},continueRetry:()=>{n=!1},canStart:c,start:()=>(c()?d():p().then(d),s)}}var H=class{#n;destroy(){this.clearGcTimeout()}scheduleGc(){var e;this.clearGcTimeout(),"number"===typeof(e=this.gcTime)&&e>=0&&e!==1/0&&(this.#n=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(y?1/0:3e5))}clearGcTimeout(){this.#n&&(clearTimeout(this.#n),this.#n=void 0)}},N=class extends H{#r;#l;#s;#i;#c;#u;constructor(e){super(),this.#u=!1,this.#c=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#s=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#r=function(e){const a="function"===typeof e.initialData?e.initialData():e.initialData,t=void 0!==a,o=t?"function"===typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:a,dataUpdateCount:0,dataUpdatedAt:t?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=e.state??this.#r,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(e){this.options={...this.#c,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#s.remove(this)}setData(e,a){const t=L(this.state.data,e,this.options);return this.#m({data:t,type:"success",dataUpdatedAt:a?.updatedAt,manual:a?.manual}),t}setState(e,a){this.#m({type:"setState",state:e,setStateOptions:a})}cancel(e){const a=this.#i?.promise;return this.#i?.cancel(e),a?a.then(g).catch(g):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#r)}isActive(){return this.observers.some(e=>{return!1!==(a=e.options.enabled,t=this,"function"===typeof a?a(t):a);var a,t})}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(e=0){return this.state.isInvalidated||void 0===this.state.data||!function(e,a){return Math.max(e+(a||0)-Date.now(),0)}(this.state.dataUpdatedAt,e)}onFocus(){const e=this.observers.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){const e=this.observers.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(a=>a!==e),this.observers.length||(this.#i&&(this.#u?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#s.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#m({type:"invalidate"})}fetch(e,a){if("idle"!==this.state.fetchStatus)if(void 0!==this.state.data&&a?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise;if(e&&this.setOptions(e),!this.options.queryFn){const e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}const t=new AbortController,o=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#u=!0,t.signal)})},n={fetchOptions:a,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{const e=M(this.options,a),t={queryKey:this.queryKey,meta:this.meta};return o(t),this.#u=!1,this.options.persister?this.options.persister(e,t,this):e(t)}};o(n),this.options.behavior?.onFetch(n,this),this.#l=this.state,"idle"!==this.state.fetchStatus&&this.state.fetchMeta===n.fetchOptions?.meta||this.#m({type:"fetch",meta:n.fetchOptions?.meta});const r=e=>{O(e)&&e.silent||this.#m({type:"error",error:e}),O(e)||(this.#s.config.onError?.(e,this),this.#s.config.onSettled?.(this.state.data,e,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#i=E({initialPromise:a?.initialPromise,fn:n.fetchFn,abort:t.abort.bind(t),onSuccess:e=>{if(void 0!==e){try{this.setData(e)}catch(a){return void r(a)}this.#s.config.onSuccess?.(e,this),this.#s.config.onSettled?.(e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1}else r(new Error(`${this.queryHash} data is undefined`))},onError:r,onFail:(e,a)=>{this.#m({type:"failed",failureCount:e,error:a})},onPause:()=>{this.#m({type:"pause"})},onContinue:()=>{this.#m({type:"continue"})},retry:n.options.retry,retryDelay:n.options.retryDelay,networkMode:n.options.networkMode,canRun:()=>!0}),this.#i.start()}#m(e){this.state=(a=>{switch(e.type){case"failed":return{...a,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...a,fetchStatus:"paused"};case"continue":return{...a,fetchStatus:"fetching"};case"fetch":return{...a,...(t=a.data,o=this.options,{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:G(o.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}),fetchMeta:e.meta??null};case"success":return{...a,data:e.data,dataUpdateCount:a.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const n=e.error;return O(n)&&n.revert&&this.#l?{...this.#l,fetchStatus:"idle"}:{...a,error:n,errorUpdateCount:a.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:a.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...a,isInvalidated:!0};case"setState":return{...a,...e.state}}var t,o})(this.state),T.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),this.#s.notify({query:this,type:"updated",action:e})})}};var K=class extends V{constructor(e={}){super(),this.config=e,this.#p=new Map}#p;build(e,a,t){const o=a.queryKey,n=a.queryHash??w(o,a);let r=this.get(n);return r||(r=new N({cache:this,queryKey:o,queryHash:n,options:e.defaultQueryOptions(a),state:t,defaultOptions:e.getQueryDefaults(o)}),this.add(r)),r}add(e){this.#p.has(e.queryHash)||(this.#p.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const a=this.#p.get(e.queryHash);a&&(e.destroy(),a===e&&this.#p.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){T.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#p.get(e)}getAll(){return[...this.#p.values()]}find(e){const a={exact:!0,...e};return this.getAll().find(e=>b(a,e))}findAll(e={}){const a=this.getAll();return Object.keys(e).length>0?a.filter(a=>b(e,a)):a}notify(e){T.batch(()=>{this.listeners.forEach(a=>{a(e)})})}onFocus(){T.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){T.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},j=class extends H{#d;#y;#i;constructor(e){super(),this.mutationId=e.mutationId,this.#y=e.mutationCache,this.#d=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#d.includes(e)||(this.#d.push(e),this.clearGcTimeout(),this.#y.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#d=this.#d.filter(a=>a!==e),this.scheduleGc(),this.#y.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#d.length||("pending"===this.state.status?this.scheduleGc():this.#y.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(e){this.#i=E({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(e,a)=>{this.#m({type:"failed",failureCount:e,error:a})},onPause:()=>{this.#m({type:"pause"})},onContinue:()=>{this.#m({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#y.canRun(this)});const a="pending"===this.state.status,t=!this.#i.canStart();try{if(!a){this.#m({type:"pending",variables:e,isPaused:t}),await(this.#y.config.onMutate?.(e,this));const a=await(this.options.onMutate?.(e));a!==this.state.context&&this.#m({type:"pending",context:a,variables:e,isPaused:t})}const o=await this.#i.start();return await(this.#y.config.onSuccess?.(o,e,this.state.context,this)),await(this.options.onSuccess?.(o,e,this.state.context)),await(this.#y.config.onSettled?.(o,null,this.state.variables,this.state.context,this)),await(this.options.onSettled?.(o,null,e,this.state.context)),this.#m({type:"success",data:o}),o}catch(o){try{throw await(this.#y.config.onError?.(o,e,this.state.context,this)),await(this.options.onError?.(o,e,this.state.context)),await(this.#y.config.onSettled?.(void 0,o,this.state.variables,this.state.context,this)),await(this.options.onSettled?.(void 0,o,e,this.state.context)),o}finally{this.#m({type:"error",error:o})}}finally{this.#y.runNext(this)}}#m(e){this.state=(a=>{switch(e.type){case"failed":return{...a,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...a,isPaused:!0};case"continue":return{...a,isPaused:!1};case"pending":return{...a,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...a,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...a,data:void 0,error:e.error,failureCount:a.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),T.batch(()=>{this.#d.forEach(a=>{a.onMutationUpdate(e)}),this.#y.notify({mutation:this,type:"updated",action:e})})}};var I=class extends V{constructor(e={}){super(),this.config=e,this.#g=new Map,this.#h=Date.now()}#g;#h;build(e,a,t){const o=new j({mutationCache:this,mutationId:++this.#h,options:e.defaultMutationOptions(a),state:t});return this.add(o),o}add(e){const a=z(e),t=this.#g.get(a)??[];t.push(e),this.#g.set(a,t),this.notify({type:"added",mutation:e})}remove(e){const a=z(e);if(this.#g.has(a)){const t=this.#g.get(a)?.filter(a=>a!==e);t&&(0===t.length?this.#g.delete(a):this.#g.set(a,t))}this.notify({type:"removed",mutation:e})}canRun(e){const a=this.#g.get(z(e))?.find(e=>"pending"===e.state.status);return!a||a===e}runNext(e){const a=this.#g.get(z(e))?.find(a=>a!==e&&a.state.isPaused);return a?.continue()??Promise.resolve()}clear(){T.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#g.values()].flat()}find(e){const a={exact:!0,...e};return this.getAll().find(e=>f(a,e))}findAll(e={}){return this.getAll().filter(a=>f(e,a))}notify(e){T.batch(()=>{this.listeners.forEach(a=>{a(e)})})}resumePausedMutations(){const e=this.getAll().filter(e=>e.state.isPaused);return T.batch(()=>Promise.all(e.map(e=>e.continue().catch(g))))}};function z(e){return e.options.scope?.id??String(e.mutationId)}function U(e){return{onFetch:(a,t)=>{const o=a.options,n=a.fetchOptions?.meta?.fetchMore?.direction,r=a.state.data?.pages||[],l=a.state.data?.pageParams||[];let s={pages:[],pageParams:[]},i=0;const c=async()=>{let t=!1;const c=M(a.options,a.fetchOptions),u=async(e,o,n)=>{if(t)return Promise.reject();if(null==o&&e.pages.length)return Promise.resolve(e);const r={queryKey:a.queryKey,pageParam:o,direction:n?"backward":"forward",meta:a.options.meta};var l;l=r,Object.defineProperty(l,"signal",{enumerable:!0,get:()=>(a.signal.aborted?t=!0:a.signal.addEventListener("abort",()=>{t=!0}),a.signal)});const s=await c(r),{maxPages:i}=a.options,u=n?D:A;return{pages:u(e.pages,s,i),pageParams:u(e.pageParams,o,i)}};if(n&&r.length){const e="backward"===n,a={pages:r,pageParams:l},t=(e?J:q)(o,a);s=await u(a,t,e)}else{const a=e??r.length;do{const e=0===i?l[0]??o.initialPageParam:q(o,s);if(i>0&&null==e)break;s=await u(s,e),i++}while(i<a)}return s};a.options.persister?a.fetchFn=()=>a.options.persister?.(c,{queryKey:a.queryKey,meta:a.options.meta,signal:a.signal},t):a.fetchFn=c}}}function q(e,{pages:a,pageParams:t}){const o=a.length-1;return a.length>0?e.getNextPageParam(a[o],a,t[o],t):void 0}function J(e,{pages:a,pageParams:t}){return a.length>0?e.getPreviousPageParam?.(a[0],a,t[0],t):void 0}u();var Y=i().createContext(void 0),$=({client:e,children:a})=>(i().useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,s().jsx)(Y.Provider,{value:e,children:a}));var X=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Z=/^[\\/]{2}/;function Q(e,a){return a+e.replace(/\\/g,"/")}var ee="popstate";function ae(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function te(e={}){return ce(function(e,a){let t=a.state?.masked,{pathname:o,search:n,hash:r}=t||e.location;return le("",{pathname:o,search:n,hash:r},a.state&&a.state.usr||null,a.state&&a.state.key||"default",t?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,a){return"string"===typeof a?a:se(a)},null,e)}function oe(e,a){if(!1===e||null===e||"undefined"===typeof e)throw new Error(a)}function ne(e,a){if(!e){"undefined"!==typeof console&&console.warn(a);try{throw new Error(a)}catch(t){}}}function re(e,a){return{usr:e.state,key:e.key,idx:a,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function le(e,a,t=null,o,n){return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof a?ie(a):a,state:t,key:a&&a.key||o||Math.random().toString(36).substring(2,10),mask:n}}function se({pathname:e="/",search:a="",hash:t=""}){return a&&"?"!==a&&(e+="?"===a.charAt(0)?a:"?"+a),t&&"#"!==t&&(e+="#"===t.charAt(0)?t:"#"+t),e}function ie(e){let a={};if(e){let t=e.indexOf("#");t>=0&&(a.hash=e.substring(t),e=e.substring(0,t));let o=e.indexOf("?");o>=0&&(a.search=e.substring(o),e=e.substring(0,o)),e&&(a.pathname=e)}return a}function ce(e,a,t,o={}){let{window:n=document.defaultView,v5Compat:r=!1}=o,l=n.history,s="POP",i=null,c=u();function u(){return(l.state||{idx:null}).idx}function m(){s="POP";let e=u(),a=null==e?null:e-c;c=e,i&&i({action:s,location:d.location,delta:a})}function p(e){return ue(n,e)}null==c&&(c=0,l.replaceState({...l.state,idx:c},""));let d={get action(){return s},get location(){return e(n,l)},listen(e){if(i)throw new Error("A history only accepts one active listener");return n.addEventListener(ee,m),i=e,()=>{n.removeEventListener(ee,m),i=null}},createHref:e=>a(n,e),createURL:p,encodeLocation(e){let a=p(e);return{pathname:a.pathname,search:a.search,hash:a.hash}},push:function(e,a){s="PUSH";let o=ae(e)?e:le(d.location,e,a);t&&t(o,e),c=u()+1;let m=re(o,c),p=d.createHref(o.mask||o);try{l.pushState(m,"",p)}catch(y){if(y instanceof DOMException&&"DataCloneError"===y.name)throw y;n.location.assign(p)}r&&i&&i({action:s,location:d.location,delta:1})},replace:function(e,a){s="REPLACE";let o=ae(e)?e:le(d.location,e,a);t&&t(o,e),c=u();let n=re(o,c),m=d.createHref(o.mask||o);l.replaceState(n,"",m),r&&i&&i({action:s,location:d.location,delta:0})},go:e=>l.go(e)};return d}function ue(e,a,t=!1){let o="http://localhost";e&&(o="null"!==e.location.origin?e.location.origin:e.location.href),oe(o,"No window.location.(origin|href) available to create URL");let n="string"===typeof a?a:se(a);return n=n.replace(/ $/,"%20"),!t&&Z.test(n)&&(n=o+n),new URL(n,o)}new WeakMap;function me(e,a,t="/"){return pe(e,a,t,!1)}function pe(e,a,t,o,n){let r=Be(("string"===typeof a?ie(a):a).pathname||"/",t);if(null==r)return null;let l=n??de(e),s=null,i=De(r);for(let c=0;null==s&&c<l.length;++c)s=ke(l[c],i,o);return s}function de(e){let a=ye(e);return function(e){e.sort((e,a)=>e.score!==a.score?a.score-e.score:function(e,a){let t=e.length===a.length&&e.slice(0,-1).every((e,t)=>e===a[t]);return t?e[e.length-1]-a[a.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),a.routesMeta.map(e=>e.childrenIndex)))}(a),a}function ye(e,a=[],t=[],o="",n=!1){let r=(e,r,l=n,s)=>{let i={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};if(i.relativePath.startsWith("/")){if(!i.relativePath.startsWith(o)&&l)return;oe(i.relativePath.startsWith(o),`Absolute route path "${i.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),i.relativePath=i.relativePath.slice(o.length)}let c=Ge([o,i.relativePath]),u=t.concat(i);e.children&&e.children.length>0&&(oe(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),ye(e.children,a,u,c,l)),(null!=e.path||e.index)&&a.push({path:c,score:xe(c,e.index),routesMeta:u.map((e,a)=>{let[t,o]=Ae(e.relativePath,e.caseSensitive,a===u.length-1);return{...e,matcher:t,compiledParams:o}})})};return e.forEach((e,a)=>{if(""!==e.path&&e.path?.includes("?"))for(let t of ge(e.path))r(e,a,!0,t);else r(e,a)}),a}function ge(e){let a=e.split("/");if(0===a.length)return[];let[t,...o]=a,n=t.endsWith("?"),r=t.replace(/\?$/,"");if(0===o.length)return n?[r,""]:[r];let l=ge(o.join("/")),s=[];return s.push(...l.map(e=>""===e?r:[r,e].join("/"))),n&&s.push(...l),s.map(a=>e.startsWith("/")&&""===a?"/":a)}var he=/^:[\w-]+$/,be=3,fe=2,we=1,ve=10,_e=-2,Ce=e=>"*"===e;function xe(e,a){let t=e.split("/"),o=t.length;return t.some(Ce)&&(o+=_e),a&&(o+=fe),t.filter(e=>!Ce(e)).reduce((e,a)=>e+(he.test(a)?be:""===a?we:ve),o)}function ke(e,a,t=!1){let{routesMeta:o}=e,n={},r="/",l=[];for(let s=0;s<o.length;++s){let e=o[s],i=s===o.length-1,c="/"===r?a:a.slice(r.length)||"/",u={path:e.relativePath,caseSensitive:e.caseSensitive,end:i},m=e.matcher&&e.compiledParams?Le(u,c,e.matcher,e.compiledParams):Se(u,c),p=e.route;if(!m&&i&&t&&!o[o.length-1].route.index&&(m=Se({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!m)return null;Object.assign(n,m.params),l.push({params:n,pathname:Ge([r,m.pathname]),pathnameBase:Oe(Ge([r,m.pathnameBase])),route:p}),"/"!==m.pathnameBase&&(r=Ge([r,m.pathnameBase]))}return l}function Se(e,a){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[t,o]=Ae(e.path,e.caseSensitive,e.end);return Le(e,a,t,o)}function Le(e,a,t,o){let n=a.match(t);if(!n)return null;let r=n[0],l=We(r,1),s=n.slice(1);return{params:o.reduce((e,{paramName:a,isOptional:t},o)=>{if("*"===a){let e=s[o]||"";l=We(r.slice(0,r.length-e.length),1)}const n=s[o];return e[a]=t&&!n?void 0:(n||"").replace(/%2F/g,"/"),e},{}),pathname:r,pathnameBase:l,pattern:e}}function Ae(e,a=!1,t=!0){ne("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,a,t,n,r)=>{if(o.push({paramName:a,isOptional:null!=t}),t){let a=r.charAt(n+e.length);return a&&"/"!==a?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),n+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?n+="\\/*$":""!==e&&"/"!==e&&(n+="(?:(?=\\/|$))"),[new RegExp(n,a?void 0:"i"),o]}function De(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(a){return ne(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),e}}function Be(e,a){if("/"===a)return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let t=a.endsWith("/")?a.length-1:a.length,o=e.charAt(t);return o&&"/"!==o?null:e.slice(t)||"/"}function Me(e,a){let t=We(a).split("/");return e.split("/").forEach(e=>{".."===e?t.length>1&&t.pop():"."!==e&&t.push(e)}),t.length>1?t.join("/"):"/"}function Te(e,a,t,o){return`Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ve(e){return e.filter((e,a)=>0===a||e.route.path&&e.route.path.length>0)}function Re(e){let a=Ve(e);return a.map((e,t)=>t===a.length-1?e.pathname:e.pathnameBase)}function Pe(e,a,t,o=!1){let n;"string"===typeof e?n=ie(e):(n={...e},oe(!n.pathname||!n.pathname.includes("?"),Te("?","pathname","search",n)),oe(!n.pathname||!n.pathname.includes("#"),Te("#","pathname","hash",n)),oe(!n.search||!n.search.includes("#"),Te("#","search","hash",n)));let r,l=""===e||""===n.pathname,s=l?"/":n.pathname;if(null==s)r=t;else{let e=a.length-1;if(!o&&s.startsWith("..")){let a=s.split("/");for(;".."===a[0];)a.shift(),e-=1;n.pathname=a.join("/")}r=e>=0?a[e]:"/"}let i=function(e,a="/"){let t,{pathname:o,search:n="",hash:r=""}="string"===typeof e?ie(e):e;return o?(o=Fe(o),t=o.startsWith("/")||o.startsWith("\\")?Me(o.substring(1),"/"):Me(o,a)):t=a,{pathname:t,search:Ee(n),hash:He(r)}}(n,r),c=s&&"/"!==s&&s.endsWith("/"),u=(l||"."===s)&&t.endsWith("/");return i.pathname.endsWith("/")||!c&&!u||(i.pathname+="/"),i}var Fe=e=>e.replace(/[\\/]{2,}/g,"/"),Ge=e=>Fe(e.join("/"));function We(e,a=0){let t=e.length;for(;t>a&&47===e.charCodeAt(t-1);)t--;return t===e.length?e:e.slice(0,t)}var Oe=e=>We(e).replace(/^\/*/,"/"),Ee=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",He=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var Ne=class{constructor(e,a,t,o=!1){this.status=e,this.statusText=a||"",this.internal=o,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Ke(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function je(e){let a=e.map(e=>e.route.path).filter(Boolean);return Ge(a)||"/"}var Ie="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function ze(e,a){let t=e;if("string"!==typeof t||!X.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let o=t,n=!1;if(Ie)try{let e=new URL(window.location.href),o=Z.test(t)?new URL(Q(t,e.protocol)):new URL(t),r=Be(o.pathname,a);o.origin===e.origin&&null!=r?t=r+o.search+o.hash:n=!0}catch(r){ne(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:n,to:t}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ue=new URL("http://localhost");function qe(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),Ue)}catch{return Ue}}function Je(e,a){return e.origin===a.origin&&("null"!==e.origin||e.protocol===a.protocol&&e.host===a.host)}function Ye(e,a,t,o){let n=null;try{n=null==e?null:new URL(e,t)}catch{}let r=new URL(a,t),l=null!=n&&!Je(n,t),s=!Je(r,t);if("reject"===o){if(l||s)throw new Error("External navigation is not allowed")}else if(s&&(null==n||!function(e,a){if(e.startsWith("//"))return!0;let t=a.protocol.toLowerCase();return!!e.toLowerCase().startsWith(t)&&(""===a.host||e.slice(t.length).startsWith("//"))}(e,n)||!Je(n,r)))throw new Error("External navigation is not allowed")}var $e=["POST","PUT","PATCH","DELETE"],Xe=(new Set($e),["GET",...$e]);new Set(Xe),Symbol("ResetLoaderData");new WeakMap,new WeakMap,new WeakMap,new WeakMap;var Ze=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Qe(e){try{return Ze.includes(new URL(e).protocol)}catch{return!1}}var ea=i().createContext(null);ea.displayName="DataRouter";var aa=i().createContext(null);aa.displayName="DataRouterState";var ta=i().createContext(!1);function oa(){return i().useContext(ta)}var na=i().createContext({isTransitioning:!1});na.displayName="ViewTransition";var ra=i().createContext(new Map);ra.displayName="Fetchers";var la=i().createContext(null);la.displayName="Await";var sa=i().createContext(null);sa.displayName="Navigation";var ia=i().createContext(null);ia.displayName="Location";var ca=i().createContext({outlet:null,matches:[],isDataRoute:!1});ca.displayName="Route";var ua=i().createContext(null);ua.displayName="RouteError";var ma="REACT_ROUTER_ERROR";function pa(){return null!=i().useContext(ia)}function da(){return oe(pa(),"useLocation() may be used only in the context of a <Router> component."),i().useContext(ia).location}var ya="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ga(e){i().useContext(sa).static||i().useLayoutEffect(e)}function ha(){let{isDataRoute:e}=i().useContext(ca);return e?function(){let{router:e}=Aa("useNavigate"),a=Ba("useNavigate"),t=i().useRef(!1);return ga(()=>{t.current=!0}),i().useCallback(async(o,n={})=>{ne(t.current,ya),t.current&&("number"===typeof o?await e.navigate(o):await e.navigate(o,{fromRouteId:a,...n}))},[e,a])}():function(){oe(pa(),"useNavigate() may be used only in the context of a <Router> component.");let e=i().useContext(ea),{basename:a,navigator:t}=i().useContext(sa),{matches:o}=i().useContext(ca),{pathname:n}=da(),r=JSON.stringify(Re(o)),l=i().useRef(!1);return ga(()=>{l.current=!0}),i().useCallback((o,s={})=>{if(ne(l.current,ya),!l.current)return;if("number"===typeof o)return void t.go(o);let i=Pe(o,JSON.parse(r),n,"path"===s.relative);null==e&&"/"!==a&&(i.pathname="/"===i.pathname?a:Ge([a,i.pathname])),Ye("string"===typeof o?o:se(o),t.createHref(i),qe(t),"reject"),(s.replace?t.replace:t.push)(i,s.state,s)},[a,t,r,n,e])}()}i().createContext(null);function ba(e,{relative:a}={}){let{matches:t}=i().useContext(ca),{pathname:o}=da(),n=JSON.stringify(Re(t));return i().useMemo(()=>Pe(e,JSON.parse(n),o,"path"===a),[e,n,o,a])}function fa(e,a,t){oe(pa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=i().useContext(sa),{matches:n}=i().useContext(ca),r=n[n.length-1],l=r?r.params:{},s=r?r.pathname:"/",c=r?r.pathnameBase:"/",u=r&&r.route;{let e=u&&u.path||"";Va(s,!u||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let m,p=da();if(a){let e="string"===typeof a?ie(a):a;oe("/"===c||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),m=e}else m=p;let d=m.pathname||"/",y=d;if("/"!==c){let e=c.replace(/^\//,"").split("/");y="/"+d.replace(/^\//,"").split("/").slice(e.length).join("/")}let g=t&&t.state.matches.length?t.state.matches.map(e=>Object.assign(e,{route:t.manifest[e.route.id]||e.route})):me(e,{pathname:y});ne(u||null!=g,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),ne(null==g||void 0!==g[g.length-1].route.element||void 0!==g[g.length-1].route.Component||void 0!==g[g.length-1].route.lazy,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Sa(g&&g.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:Ge([c,o.encodeLocation?o.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:Ge([c,o.encodeLocation?o.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),n,t);return a&&h?i().createElement(ia.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...m},navigationType:"POP"}},h):h}function wa(){let e=Ma(),a=Ke(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",n={padding:"0.5rem",backgroundColor:o},r={padding:"2px 4px",backgroundColor:o},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=i().createElement(i().Fragment,null,i().createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),i().createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",i().createElement("code",{style:r},"ErrorBoundary")," or"," ",i().createElement("code",{style:r},"errorElement")," prop on your route.")),i().createElement(i().Fragment,null,i().createElement("h2",null,"Unexpected Application Error!"),i().createElement("h3",{style:{fontStyle:"italic"}},a),t?i().createElement("pre",{style:n},t):null,l)}var va=i().createElement(wa,null),_a=class extends i().Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location||"idle"!==a.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:a.error,location:a.location,revalidation:e.revalidation||a.revalidation}}componentDidCatch(e,a){this.props.onError?this.props.onError(e,a):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const a=function(e){if(e.startsWith(`${ma}:ROUTE_ERROR_RESPONSE:{`))try{let a=JSON.parse(e.slice(40));if("object"===typeof a&&a&&"number"===typeof a.status&&"string"===typeof a.statusText)return new Ne(a.status,a.statusText,a.data)}catch{}}(e.digest);a&&(e=a)}let a=void 0!==e?i().createElement(ca.Provider,{value:this.props.routeContext},i().createElement(ua.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?i().createElement(xa,{error:e},a):a}};_a.contextType=ta;var Ca=new WeakMap;function xa({children:e,error:a}){let{basename:t,navigator:o}=i().useContext(sa);if("object"===typeof a&&a&&"digest"in a&&"string"===typeof a.digest){let e=function(e){if(e.startsWith(`${ma}:REDIRECT:{`))try{let a=JSON.parse(e.slice(28));if("object"===typeof a&&a&&"number"===typeof a.status&&"string"===typeof a.statusText&&"string"===typeof a.location&&"boolean"===typeof a.reloadDocument&&"boolean"===typeof a.replace)return a}catch{}}(a.digest);if(e){let n=Ca.get(a);if(n)throw n;let r=ze(e.location,t),l=r.absoluteURL||r.to;if(Ye(e.location,l,qe(o),"allow-explicit"),Qe(l))throw new Error("Invalid redirect location");if(Ie&&!Ca.get(a)){if(!r.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(r.to,{replace:e.replace}));throw Ca.set(a,t),t}window.location.href=l}return i().createElement("meta",{httpEquiv:"refresh",content:`0;url=${l}`})}}return e}function ka({routeContext:e,match:a,children:t}){let o=i().useContext(ea);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),i().createElement(ca.Provider,{value:e},t)}function Sa(e,a=[],t){let o=t?.state;if(null==e){if(!o)return null;if(o.errors)e=o.matches;else{if(0!==a.length||o.initialized||!(o.matches.length>0))return null;e=o.matches}}let n=e,r=o?.errors;if(null!=r){let e=n.findIndex(e=>e.route.id&&void 0!==r?.[e.route.id]);oe(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(r).join(",")}`),n=n.slice(0,Math.min(n.length,e+1))}let l=!1,s=-1;if(t&&o){l=o.renderFallback;for(let e=0;e<n.length;e++){let a=n[e];if((a.route.HydrateFallback||a.route.hydrateFallbackElement)&&(s=e),a.route.id){let{loaderData:e,errors:r}=o,i=a.route.loader&&!e.hasOwnProperty(a.route.id)&&(!r||void 0===r[a.route.id]);if(a.route.lazy||i){t.isStatic&&(l=!0),n=s>=0?n.slice(0,s+1):[n[0]];break}}}}let c=t?.onError,u=o&&c?(e,a)=>{c(e,{location:o.location,params:o.matches?.[0]?.params??{},pattern:je(o.matches),errorInfo:a})}:void 0;return n.reduceRight((e,t,c)=>{let m,p=!1,d=null,y=null;o&&(m=r&&t.route.id?r[t.route.id]:void 0,d=t.route.errorElement||va,l&&(s<0&&0===c?(Va("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,y=null):s===c&&(p=!0,y=t.route.hydrateFallbackElement||null)));let g=a.concat(n.slice(0,c+1)),h=()=>{let a;return a=m?d:p?y:t.route.Component?i().createElement(t.route.Component,null):t.route.element?t.route.element:e,i().createElement(ka,{match:t,routeContext:{outlet:e,matches:g,isDataRoute:null!=o},children:a})};return o&&(t.route.ErrorBoundary||t.route.errorElement||0===c)?i().createElement(_a,{location:o.location,revalidation:o.revalidation,component:d,error:m,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0},onError:u}):h()},null)}function La(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Aa(e){let a=i().useContext(ea);return oe(a,La(e)),a}function Da(e){let a=i().useContext(aa);return oe(a,La(e)),a}function Ba(e){let a=function(e){let a=i().useContext(ca);return oe(a,La(e)),a}(e),t=a.matches[a.matches.length-1];return oe(t.route.id,`${e} can only be used on routes that contain a unique "id"`),t.route.id}function Ma(){let e=i().useContext(ua),a=Da("useRouteError"),t=Ba("useRouteError");return void 0!==e?e:a.errors?.[t]}var Ta={};function Va(e,a,t){a||Ta[e]||(Ta[e]=!0,ne(!1,t))}var Ra={};function Pa(e,a){e||Ra[a]||(Ra[a]=!0,console.warn(a))}d().useOptimistic;i().memo(Fa);function Fa({routes:e,manifest:a,future:t,state:o,isStatic:n,onError:r}){return fa(e,void 0,{manifest:a,state:o,isStatic:n,onError:r,future:t})}function Ga({basename:e="/",children:a=null,location:t,navigationType:o="POP",navigator:n,static:r=!1,useTransitions:l}){oe(!pa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),c=i().useMemo(()=>({basename:s,navigator:n,static:r,useTransitions:l,future:{}}),[s,n,r,l]);"string"===typeof t&&(t=ie(t));let{pathname:u="/",search:m="",hash:p="",state:d=null,key:y="default",mask:g}=t,h=i().useMemo(()=>{let e=Be(u,s);return null==e?null:{location:{pathname:e,search:m,hash:p,state:d,key:y,mask:g},navigationType:o}},[s,u,m,p,d,y,o,g]);return ne(null!=h,`<Router basename="${s}"> is not able to match the URL "${u}${m}${p}" because it does not start with the basename, so the <Router> won't render anything.`),null==h?null:i().createElement(sa.Provider,{value:c},i().createElement(ia.Provider,{children:a,value:h}))}i().Component;var Wa="get",Oa="application/x-www-form-urlencoded";function Ea(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}function Ha(e=""){return new URLSearchParams("string"===typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((a,t)=>{let o=e[t];return a.concat(Array.isArray(o)?o.map(e=>[t,e]):[[t,o]])},[]))}var Na=null;var Ka=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ja(e){return null==e||Ka.has(e)?e:(ne(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Oa}"`),null)}function Ia(e,a){let t,o,n,r,l;if(Ea(s=e)&&"form"===s.tagName.toLowerCase()){let l=e.getAttribute("action");o=l?Be(l,a):null,t=e.getAttribute("method")||Wa,n=ja(e.getAttribute("enctype"))||Oa,r=new FormData(e)}else if(function(e){return Ea(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Ea(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let l=e.form;if(null==l)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||l.getAttribute("action");if(o=s?Be(s,a):null,t=e.getAttribute("formmethod")||l.getAttribute("method")||Wa,n=ja(e.getAttribute("formenctype"))||ja(l.getAttribute("enctype"))||Oa,r=new FormData(l,e),!function(){if(null===Na)try{new FormData(document.createElement("form"),0),Na=!1}catch(e){Na=!0}return Na}()){let{name:a,type:t,value:o}=e;if("image"===t){let e=a?`${a}.`:"";r.append(`${e}x`,"0"),r.append(`${e}y`,"0")}else a&&r.append(a,o)}}else{if(Ea(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Wa,o=null,n=Oa,l=e}var s;return r&&"text/plain"===n&&(l=r,r=void 0),{action:o,method:t.toLowerCase(),encType:n,formData:r,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function za(e,a){if(!1===e||null===e||"undefined"===typeof e)throw new Error(a)}Symbol("SingleFetchRedirect"),Error;function Ua(e,a,t,o){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return t?n.pathname.endsWith("/")?n.pathname=`${n.pathname}_.${o}`:n.pathname=`${n.pathname}.${o}`:"/"===n.pathname?n.pathname=`_root.${o}`:a&&"/"===Be(n.pathname,a)?n.pathname=`${We(a)}/_root.${o}`:n.pathname=`${We(n.pathname)}.${o}`,n}async function qa(e,a){if(e.id in a)return a[e.id];try{let t=await(import(e.module));return a[e.id]=t,t}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ja(e){return null!=e&&"string"===typeof e.page}function Ya(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function $a(e,a,t,o,n,r){let l=(e,a)=>!t[a]||e.route.id!==t[a].route.id,s=(e,a)=>t[a].pathname!==e.pathname||t[a].route.path?.endsWith("*")&&t[a].params["*"]!==e.params["*"];return"assets"===r?a.filter((e,a)=>l(e,a)||s(e,a)):"data"===r?a.filter((a,r)=>{let i=o.routes[a.route.id];if(!i||!i.hasLoader)return!1;if(l(a,r)||s(a,r))return!0;if(a.route.shouldRevalidate){let o=a.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:a.params,defaultShouldRevalidate:!0});if("boolean"===typeof o)return o}return!0}):[]}function Xa(e,a,{includeHydrateFallback:t}={}){return o=e.map(e=>{let o=a.routes[e.route.id];if(!o)return[];let n=[o.module];return o.clientActionModule&&(n=n.concat(o.clientActionModule)),o.clientLoaderModule&&(n=n.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(n=n.concat(o.hydrateFallbackModule)),o.imports&&(n=n.concat(o.imports)),n}).flat(1),[...new Set(o)];var o}function Za(e,a){let t=new Set,o=new Set(a);return e.reduce((e,n)=>{if(a&&!Ja(n)&&"script"===n.as&&n.href&&o.has(n.href))return e;let r=JSON.stringify(function(e){let a={},t=Object.keys(e).sort();for(let o of t)a[o]=e[o];return a}(n));return t.has(r)||(t.add(r),e.push({key:r,link:n})),e},[])}function Qa(e,a){return"lazy"===e.mode&&!0===a}function et(){let e=i().useContext(ea);return za(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function at(){let e=i().useContext(aa);return za(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var tt=i().createContext(void 0);function ot(){let e=i().useContext(tt);return za(e,"You must render this element inside a <HydratedRouter> element"),e}function nt(e,a){return t=>{e&&e(t),t.defaultPrevented||a(t)}}function rt(e,a,t){if(t&&!ut)return[e[0]];if(a){let t=e.findIndex(e=>void 0!==a[e.route.id]);return e.slice(0,t+1)}return e}tt.displayName="FrameworkContext";function lt({page:e,...a}){let t=oa(),{nonce:o}=ot(),{router:n}=et(),r=i().useMemo(()=>me(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?(null==a.nonce&&o&&(a={...a,nonce:o}),t?i().createElement(it,{page:e,matches:r,...a}):i().createElement(ct,{page:e,matches:r,...a})):null}function st(e){let{manifest:a,routeModules:t}=ot(),[o,n]=i().useState([]);return i().useEffect(()=>{let o=!1;return async function(e,a,t){return Za((await Promise.all(e.map(async e=>{let o=a.routes[e.route.id];if(o){let e=await qa(o,t);return e.links?e.links():[]}return[]}))).flat(1).filter(Ya).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,a,t).then(e=>{o||n(e)}),()=>{o=!0}},[e,a,t]),o}function it({page:e,matches:a,...t}){let o=da(),{future:n}=ot(),{basename:r}=et(),l=i().useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let t=Ua(e,r,n.v8_trailingSlashAwareDataRequests,"rsc"),l=!1,s=[];for(let e of a)"function"===typeof e.route.shouldRevalidate?l=!0:s.push(e.route.id);return l&&s.length>0&&t.searchParams.set("_routes",s.join(",")),[t.pathname+t.search]},[r,n.v8_trailingSlashAwareDataRequests,e,o,a]);return i().createElement(i().Fragment,null,l.map(e=>i().createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...t})))}function ct({page:e,matches:a,...t}){let o=da(),{future:n,manifest:r,routeModules:l}=ot(),{basename:s}=et(),{loaderData:c,matches:u}=at(),m=i().useMemo(()=>$a(e,a,u,r,o,"data"),[e,a,u,r,o]),p=i().useMemo(()=>$a(e,a,u,r,o,"assets"),[e,a,u,r,o]),d=i().useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let t=new Set,i=!1;if(a.forEach(e=>{let a=r.routes[e.route.id];a&&a.hasLoader&&(!m.some(a=>a.route.id===e.route.id)&&e.route.id in c&&l[e.route.id]?.shouldRevalidate||a.hasClientLoader?i=!0:t.add(e.route.id))}),0===t.size)return[];let u=Ua(e,s,n.v8_trailingSlashAwareDataRequests,"data");return i&&t.size>0&&u.searchParams.set("_routes",a.filter(e=>t.has(e.route.id)).map(e=>e.route.id).join(",")),[u.pathname+u.search]},[s,n.v8_trailingSlashAwareDataRequests,c,o,r,m,a,e,l]),y=i().useMemo(()=>Xa(p,r),[p,r]),g=st(p);return i().createElement(i().Fragment,null,d.map(e=>i().createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...t})),y.map(e=>i().createElement("link",{key:e,rel:"modulepreload",href:e,...t})),g.map(({key:e,link:a})=>i().createElement("link",{key:e,nonce:t.nonce,...a,crossOrigin:a.crossOrigin??t.crossOrigin})))}var ut=!1;function mt(e){let{manifest:a,serverHandoffString:t,isSpaMode:o,renderMeta:n,routeDiscovery:r,ssr:l,nonce:s}=ot(),{router:c,static:u,staticContext:m}=et(),{matches:p}=at(),d=oa(),y=Qa(r,l);null==e.nonce&&s&&(e={...e,nonce:s}),n&&(n.didRenderScripts=!0);let g=rt(p,null,o);i().useEffect(()=>{ut=!0},[]);let h=i().useMemo(()=>{if(d)return null;let o=m?`window.__reactRouterContext = ${t};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",n=u?`${a.hmr?.runtime?`import ${JSON.stringify(a.hmr.runtime)};`:""}${y?"":`import ${JSON.stringify(a.url)}`};\n${g.map((e,t)=>{let o=`route${t}`,n=a.routes[e.route.id];za(n,`Route ${e.route.id} not found in manifest`);let{clientActionModule:r,clientLoaderModule:l,clientMiddlewareModule:s,hydrateFallbackModule:i,module:c}=n,u=[...r?[{module:r,varName:`${o}_clientAction`}]:[],...l?[{module:l,varName:`${o}_clientLoader`}]:[],...s?[{module:s,varName:`${o}_clientMiddleware`}]:[],...i?[{module:i,varName:`${o}_HydrateFallback`}]:[],{module:c,varName:`${o}_main`}];return 1===u.length?`import * as ${o} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${o} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${y?`window.__reactRouterManifest = ${JSON.stringify(function({sri:e,...a},t){let o=new Set(t.state.matches.map(e=>e.route.id)),n=t.state.location.pathname.split("/").filter(Boolean),r=["/"];for(n.pop();n.length>0;)r.push(`/${n.join("/")}`),n.pop();r.forEach(e=>{let a=pe(t.routes,e,t.basename||"/",!1,t.branches);a&&a.forEach(e=>o.add(e.route.id))});let l=[...o].reduce((e,t)=>Object.assign(e,{[t]:a.routes[t]}),{});return{...a,routes:l,sri:!!e||void 0}}(a,c),null,2)};`:""}\n  window.__reactRouterRouteModules = {${g.map((e,a)=>`${JSON.stringify(e.route.id)}:route${a}`).join(",")}};\n\nimport(${JSON.stringify(a.entry.module)});`:" ";return i().createElement(i().Fragment,null,i().createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o},type:void 0}),i().createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:n},type:"module",async:!0}))},[]),b=ut||d?[]:[...new Set(a.entry.imports.concat(Xa(g,a,{includeHydrateFallback:!0})))],f="object"===typeof a.sri?a.sri:{};return Pa(!d,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),ut||d?null:i().createElement(i().Fragment,null,"object"===typeof a.sri?i().createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:f})}}):null,y?null:i().createElement("link",{rel:"modulepreload",href:a.url,crossOrigin:e.crossOrigin,integrity:f[a.url],nonce:e.nonce,suppressHydrationWarning:!0}),i().createElement("link",{rel:"modulepreload",href:a.entry.module,crossOrigin:e.crossOrigin,integrity:f[a.entry.module],nonce:e.nonce,suppressHydrationWarning:!0}),b.map(a=>i().createElement("link",{key:a,rel:"modulepreload",href:a,crossOrigin:e.crossOrigin,integrity:f[a],nonce:e.nonce,suppressHydrationWarning:!0})),h)}function pt(...e){return a=>{e.forEach(e=>{"function"===typeof e?e(a):null!=e&&(e.current=a)})}}i().Component;function dt({error:e,isOutsideRemixApp:a}){let{nonce:t}=ot();console.error(e);let o,n=i().createElement("script",{nonce:t,dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(Ke(e))return i().createElement(yt,{title:"Unhandled Thrown Response!"},i().createElement("h1",{style:{fontSize:"24px"}},e.status," ",e.statusText),n);if(e instanceof Error)o=e;else{let a=null==e?"Unknown Error":"object"===typeof e&&"toString"in e?e.toString():JSON.stringify(e);o=new Error(a)}return i().createElement(yt,{title:"Application Error!",isOutsideRemixApp:a},i().createElement("h1",{style:{fontSize:"24px"}},"Application Error"),i().createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),n)}function yt({title:e,renderScripts:a,isOutsideRemixApp:t,children:o}){let{routeModules:n}=ot();return n.root?.Layout&&!t?o:i().createElement("html",{lang:"en"},i().createElement("head",null,i().createElement("meta",{charSet:"utf-8"}),i().createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),i().createElement("title",null,e)),i().createElement("body",null,i().createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,a?i().createElement(mt,null):null)))}var gt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{gt&&(window.__reactRouterVersion="7.18.4")}catch(SD){}function ht({basename:e,children:a,useTransitions:t,window:o}){let n=i().useRef();null==n.current&&(n.current=te({window:o,v5Compat:!0}));let r=n.current,[l,s]=i().useState({action:r.action,location:r.location}),c=i().useCallback(e=>{!1===t?s(e):i().startTransition(()=>s(e))},[t]);return i().useLayoutEffect(()=>r.listen(c),[r,c]),i().createElement(Ga,{basename:e,children:a,location:l.location,navigationType:l.action,navigator:r,useTransitions:t})}var bt=i().forwardRef(function({onClick:e,discover:a="render",prefetch:t="none",relative:o,reloadDocument:n,replace:r,mask:l,state:s,target:c,to:u,preventScrollReset:m,viewTransition:p,defaultShouldRevalidate:d,...y},g){let{basename:h,navigator:b,useTransitions:f}=i().useContext(sa),w="string"===typeof u&&X.test(u),v=ze(u,h),_=function(e,{relative:a}={}){oe(pa(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:o}=i().useContext(sa),{hash:n,pathname:r,search:l}=ba(e,{relative:a}),s=r;return"/"!==t&&(s="/"===r?t:Ge([t,r])),o.createHref({pathname:s,search:l,hash:n})}(u=v.to,{relative:o}),C=da(),x=null;if(l){let e=Pe(l,[],C.mask?C.mask.pathname:"/",!0);"/"!==h&&(e.pathname="/"===e.pathname?h:Ge([h,e.pathname])),x=b.createHref(e)}let[k,S,L]=function(e,a){let t=i().useContext(tt),[o,n]=i().useState(!1),[r,l]=i().useState(!1),{onFocus:s,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:p}=a,d=i().useRef(null);i().useEffect(()=>{if("render"===e&&l(!0),"viewport"===e){let e=e=>{e.forEach(e=>{l(e.isIntersecting)})},a=new IntersectionObserver(e,{threshold:.5});return d.current&&a.observe(d.current),()=>{a.disconnect()}}},[e]),i().useEffect(()=>{if(o){let e=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(e)}}},[o]);let y=()=>{n(!0)},g=()=>{n(!1),l(!1)};return t?"intent"!==e?[r,d,{}]:[r,d,{onFocus:nt(s,y),onBlur:nt(c,g),onMouseEnter:nt(u,y),onMouseLeave:nt(m,g),onTouchStart:nt(p,y)}]:[!1,d,{}]}(t,y),A=function(e,{target:a,replace:t,mask:o,state:n,preventScrollReset:r,relative:l,viewTransition:s,defaultShouldRevalidate:c,useTransitions:u}={}){let m=ha(),p=da(),d=ba(e,{relative:l});return i().useCallback(y=>{if(function(e,a){return 0===e.button&&(!a||"_self"===a)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(y,a)){y.preventDefault();let a=void 0!==t?t:se(p)===se(d),g=()=>m(e,{replace:a,mask:o,state:n,preventScrollReset:r,relative:l,viewTransition:s,defaultShouldRevalidate:c});u?i().startTransition(()=>g()):g()}},[p,m,d,t,o,n,a,e,r,l,s,c,u])}(u,{replace:r,mask:l,state:s,target:c,preventScrollReset:m,relative:o,viewTransition:p,defaultShouldRevalidate:d,useTransitions:f});let D=!(v.isExternal||n),B=i().createElement("a",{...y,...L,href:(D?x:void 0)||v.absoluteURL||_,onClick:D?function(a){e&&e(a),a.defaultPrevented||A(a)}:e,ref:pt(g,S),target:c,"data-discover":w||"render"!==a?void 0:"true"});return k&&!w?i().createElement(i().Fragment,null,B,i().createElement(lt,{page:_})):B});bt.displayName="Link",i().forwardRef(function({"aria-current":e="page",caseSensitive:a=!1,className:t="",end:o=!1,style:n,to:r,viewTransition:l,children:s,...c},u){let m=ba(r,{relative:c.relative}),p=da(),d=i().useContext(aa),{navigator:y,basename:g}=i().useContext(sa),h=null!=d&&function(e,{relative:a}={}){let t=i().useContext(na);oe(null!=t,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=vt("useViewTransitionState"),n=ba(e,{relative:a});if(!t.isTransitioning)return!1;let r=Be(t.currentLocation.pathname,o)||t.currentLocation.pathname,l=Be(t.nextLocation.pathname,o)||t.nextLocation.pathname;return null!=Se(n.pathname,l)||null!=Se(n.pathname,r)}(m)&&!0===l,b=y.encodeLocation?y.encodeLocation(m).pathname:m.pathname,f=p.pathname,w=d&&d.navigation&&d.navigation.location?d.navigation.location.pathname:null;a||(f=f.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&g&&(w=Be(w,g)||w);const v="/"!==b&&b.endsWith("/")?b.length-1:b.length;let _,C=f===b||!o&&f.startsWith(b)&&"/"===f.charAt(v),x=null!=w&&(w===b||!o&&w.startsWith(b)&&"/"===w.charAt(b.length)),k={isActive:C,isPending:x,isTransitioning:h},S=C?e:void 0;_="function"===typeof t?t(k):[t,C?"active":null,x?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let L="function"===typeof n?n(k):n;return i().createElement(bt,{...c,"aria-current":S,className:_,ref:u,style:L,to:r,viewTransition:l},"function"===typeof s?s(k):s)}).displayName="NavLink";var ft=i().forwardRef(({discover:e="render",fetcherKey:a,navigate:t,reloadDocument:o,replace:n,state:r,method:l=Wa,action:s,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:p,defaultShouldRevalidate:d,...y},g)=>{let{useTransitions:h}=i().useContext(sa),b=kt(),f=function(e,{relative:a}={}){let{basename:t}=i().useContext(sa),o=i().useContext(ca);oe(o,"useFormAction must be used inside a RouteContext");let[n]=o.matches.slice(-1),r={...ba(e||".",{relative:a})},l=da();if(null==e){r.search=l.search;let e=new URLSearchParams(r.search),a=e.getAll("index");if(a.some(e=>""===e)){e.delete("index"),a.filter(e=>e).forEach(a=>e.append("index",a));let t=e.toString();r.search=t?`?${t}`:""}}e&&"."!==e||!n.route.index||(r.search=r.search?r.search.replace(/^\?/,"?index&"):"?index");"/"!==t&&(r.pathname="/"===r.pathname?t:Ge([t,r.pathname]));return se(r)}(s,{relative:u}),w="get"===l.toLowerCase()?"get":"post",v="string"===typeof s&&X.test(s);return i().createElement("form",{ref:g,method:w,action:f,onSubmit:o?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let o=e.nativeEvent.submitter,s=o?.getAttribute("formmethod")||l,y=()=>b(o||e.currentTarget,{fetcherKey:a,method:s,navigate:t,replace:n,state:r,relative:u,preventScrollReset:m,viewTransition:p,defaultShouldRevalidate:d});h&&!1!==t?i().startTransition(()=>y()):y()},...y,"data-discover":v||"render"!==e?void 0:"true"})});function wt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vt(e){let a=i().useContext(ea);return oe(a,wt(e)),a}function _t(e){ne("undefined"!==typeof URLSearchParams,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let a=i().useRef(Ha(e)),t=i().useRef(!1),o=da(),n=i().useMemo(()=>function(e,a){let t=Ha(e);return a&&a.forEach((e,o)=>{t.has(o)||a.getAll(o).forEach(e=>{t.append(o,e)})}),t}(o.search,t.current?null:a.current),[o.search]),r=ha(),l=i().useCallback((e,a)=>{const o=Ha("function"===typeof e?e(new URLSearchParams(n)):e);t.current=!0,r("?"+o,a)},[r,n]);return[n,l]}ft.displayName="Form";var Ct=0,xt=()=>`__${String(++Ct)}__`;function kt(){let{router:e}=vt("useSubmit"),{basename:a}=i().useContext(sa),t=Ba("useRouteId"),o=e.fetch,n=e.navigate;return i().useCallback(async(e,r={})=>{let{action:l,method:s,encType:i,formData:c,body:u}=Ia(e,a);if(!1===r.navigate){let e=r.fetcherKey||xt();await o(e,t,r.action||l,{defaultShouldRevalidate:r.defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:c,body:u,formMethod:r.method||s,formEncType:r.encType||i,flushSync:r.flushSync})}else await n(r.action||l,{defaultShouldRevalidate:r.defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:c,body:u,formMethod:r.method||s,formEncType:r.encType||i,replace:r.replace,state:r.state,fromRouteId:t,flushSync:r.flushSync,viewTransition:r.viewTransition})},[o,n,a,t])}const St="undefined"!==typeof window,Lt={current:null},At={current:!1};function Dt(){if(At.current=!0,St)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),a=()=>Lt.current=e.matches;e.addListener(a),a()}else Lt.current=!1}function Bt(){!At.current&&Dt();const[e]=(0,i().useState)(Lt.current);return e}const Mt=(0,i().createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Tt=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vt(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Tt.has(e)}let Rt=e=>!Vt(e);function Pt(e){e&&(Rt=a=>a.startsWith("on")?!Vt(a):e(a))}try{Pt(require("@emotion/is-prop-valid").default)}catch(LD){}function Ft(e){const a=(0,i().useRef)(null);return null===a.current&&(a.current=e()),a.current}function Gt({children:e,isValidProp:a,...t}){a&&Pt(a),(t={...(0,i().useContext)(Mt),...t}).isStatic=Ft(()=>t.isStatic);const o=(0,i().useMemo)(()=>t,[JSON.stringify(t.transition),t.transformPagePoint,t.reducedMotion]);return(0,s().jsx)(Mt.Provider,{value:o,children:e})}var Wt="1.3.29";function Ot(e,a,t){return Math.max(e,Math.min(a,t))}var Et=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let a=!1;if(this.duration&&this.easing){this.currentTime+=e;const t=Ot(0,this.currentTime/this.duration,1);a=t>=1;const o=a?1:this.easing(t);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=function(e,a,t,o){return function(e,a,t){return(1-t)*e+t*a}(e,a,1-Math.exp(-t*o))}(this.value,this.to,60*this.lerp,e),Math.abs(this.to-this.value)<.5&&(this.value=this.to,a=!0)):(this.value=this.to,a=!0);a&&this.stop(),this.onUpdate?.(this.value,a)}stop(){this.isRunning=!1}fromTo(e,a,{lerp:t,duration:o,easing:n,onStart:r,onUpdate:l}){this.from=this.value=e,this.to=a,this.lerp=t,this.duration=o,this.easing=n,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=l}};var Ht=class{wrapper;content;width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,a,{autoResize:t=!0,debounce:o=250}={}){this.wrapper=e,this.content=a,t&&(this.debouncedResize=function(e,a){let t;return function(...o){clearTimeout(t),t=setTimeout(()=>{t=void 0,e.apply(this,o)},a)}}(this.resize,o),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Nt=class{events={};emit(e,...a){const t=this.events[e]||[];for(let o=0,n=t.length;o<n;o++)t[o]?.(...a)}on(e,a){return this.events[e]?this.events[e].push(a):this.events[e]=[a],()=>{this.events[e]=this.events[e]?.filter(e=>a!==e)}}off(e,a){this.events[e]=this.events[e]?.filter(e=>a!==e)}destroy(){this.events={}}};const Kt=100/6,jt={passive:!1};function It(e,a){return 1===e?Kt:2===e?a:1}var zt=class{element;options;touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Nt;constructor(e,a={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=a,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,jt),this.element.addEventListener("touchstart",this.onTouchStart,jt),this.element.addEventListener("touchmove",this.onTouchMove,jt),this.element.addEventListener("touchend",this.onTouchEnd,jt)}on(e,a){return this.emitter.on(e,a)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,jt),this.element.removeEventListener("touchstart",this.onTouchStart,jt),this.element.removeEventListener("touchmove",this.onTouchMove,jt),this.element.removeEventListener("touchend",this.onTouchEnd,jt)}onTouchStart=e=>{const{clientX:a,clientY:t}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=a,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{const{clientX:a,clientY:t}=e.targetTouches?e.targetTouches[0]:e,o=-(a-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=a,this.touchStart.y=t,this.lastDelta={x:o,y:n},this.emitter.emit("scroll",{deltaX:o,deltaY:n,event:e})};onTouchEnd=e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:a,deltaY:t,deltaMode:o}=e;a*=It(o,this.window.width),t*=It(o,this.window.height),a*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:a,deltaY:t,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const Ut=e=>Math.min(1,1.001-2**(-10*e)),qt=new WeakMap;var Jt=class e{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;nestedInstances=new Set;_nestedSweepFrame=0;_isAdopted=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Et;emitter=new Nt;dimensions;virtualScroll;static get(e){return qt.get(e)}constructor({wrapper:e=window,content:a=document.documentElement,eventsTarget:t=e,smoothWheel:o=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaExponent:l=1.7,duration:s,easing:i,lerp:c=.1,infinite:u=!1,orientation:m="vertical",gestureOrientation:p=("horizontal"===m?"both":"vertical"),touchMultiplier:d=1,wheelMultiplier:y=1,autoResize:g=!0,prevent:h,virtualScroll:b,overscroll:f=!0,autoRaf:w=!1,anchors:v=!1,autoToggle:_=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:k=x,stopInertiaOnNavigate:S=!1,respectReducedMotion:L=!0}={}){window.lenisVersion=Wt,window.lenis||(window.lenis={}),window.lenis.version=Wt,"horizontal"===m&&(window.lenis.horizontal=!0),!0===n&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),e&&e!==document.documentElement||(e=window),"number"===typeof s&&"function"!==typeof i?i=Ut:"function"===typeof i&&"number"!==typeof s&&(s=1),this.options={wrapper:e,content:a,eventsTarget:t,smoothWheel:o,syncTouch:n,syncTouchLerp:r,touchInertiaExponent:l,duration:s,easing:i,lerp:c,infinite:u,gestureOrientation:p,orientation:m,touchMultiplier:d,wheelMultiplier:y,autoResize:g,prevent:h,virtualScroll:b,overscroll:f,autoRaf:w,anchors:v,autoToggle:_,allowNestedScroll:C,naiveDimensions:k,stopInertiaOnNavigate:S,respectReducedMotion:L},this.dimensions=new Ht(e,a,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new zt(t,{touchMultiplier:d,wheelMultiplier:y}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),qt.set(this.rootElement,this),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){for(const e of this.nestedInstances)e.destroy();this.nestedInstances.clear(),qt.get(this.rootElement)===this&&qt.delete(this.rootElement),this.emitter.destroy(),null!==this._resetVelocityTimeout&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.options.autoToggle&&this.rootElement.removeEventListener("transitionend",this.onTransitionEnd),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,a){return this.emitter.on(e,a)}off(e,a){return this.emitter.off(e,a)}onScrollEnd=e=>{e instanceof CustomEvent||"smooth"!==this.isScrolling&&!1!==this.isScrolling||e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const e=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[e]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes("overflow")&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}onClick=e=>{const a=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),t=new URL(window.location.href);if(this.options.anchors){const e=a.find(e=>t.host===e.host&&t.pathname===e.pathname&&e.hash);if(e){const a="object"===typeof this.options.anchors&&this.options.anchors?this.options.anchors:void 0,t=decodeURIComponent(e.hash);return void this.scrollTo(t,a)}}this.options.stopInertiaOnNavigate&&a.some(e=>t.host===e.host&&t.pathname!==e.pathname)&&this.reset()};onPointerDown=e=>{1===e.button&&this.reset()};isTouchOnSelectionHandle(e){const a=window.getSelection();if(!a||a.isCollapsed||0===a.rangeCount)return!1;const t=e.targetTouches[0]??e.changedTouches[0];if(!t)return!1;const o=a.getRangeAt(0).getClientRects();if(0===o.length)return!1;const n=o[0],r=o[o.length-1],l=Math.hypot(t.clientX-n.left,t.clientY-n.top)<=40,s=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=40;return l||s}onVirtualScroll=e=>{if("function"===typeof this.options.virtualScroll&&!1===this.options.virtualScroll(e))return;const{deltaX:a,deltaY:t,event:o}=e;if(this.emitter.emit("virtual-scroll",{deltaX:a,deltaY:t,event:o}),o.ctrlKey)return;if(o.lenisStopPropagation)return;const n=o.type.includes("touch"),r=o.type.includes("wheel");if(n&&this.isIos&&("touchstart"===o.type&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(o)),this._isDraggingSelection))return void("touchend"===o.type&&(this._isDraggingSelection=!1));this.isTouching="touchstart"===o.type||"touchmove"===o.type;const l=0===a&&0===t;if(this.options.syncTouch&&n&&"touchstart"===o.type&&l&&!this.isStopped&&!this.isLocked)return void this.reset();const s="vertical"===this.options.gestureOrientation&&0===t||"horizontal"===this.options.gestureOrientation&&0===a,i="smooth"===this.options.allowNestedScroll;if(l)return;if(s&&!i)return;const c=Math.abs(a)>=Math.abs(t)?"horizontal":"vertical";if(this._isAdopted&&c!==(this.isHorizontal?"horizontal":"vertical"))return;let u=o.composedPath();u=u.slice(0,u.indexOf(this.rootElement));const m=this.options.prevent,p=e=>"function"===typeof m&&m?.(e)||e.hasAttribute?.("data-lenis-prevent")||"vertical"===c&&e.hasAttribute?.("data-lenis-prevent-vertical")||"horizontal"===c&&e.hasAttribute?.("data-lenis-prevent-horizontal")||n&&e.hasAttribute?.("data-lenis-prevent-touch")||r&&e.hasAttribute?.("data-lenis-prevent-wheel"),d=u.find(e=>e instanceof HTMLElement&&(p(e)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:a,deltaY:t})));if(d)return void(i&&(r&&this.options.smoothWheel||n&&this.options.syncTouch)&&!u.slice(u.indexOf(d)).some(e=>e instanceof HTMLElement&&p(e))&&this.isNestedAdoptable(d)&&this.adoptNestedScroller(d,e));if(s)return;if(this.isStopped||this.isLocked)return void(o.cancelable&&o.preventDefault());if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r))return this.isScrolling="native",this.animate.stop(),this.settleNativeScrollLater(),void(o.lenisStopPropagation=!0);let y=t;"both"===this.options.gestureOrientation?y=Math.abs(t)>Math.abs(a)?t:a:"horizontal"===this.options.gestureOrientation&&(y=a),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||0===this.animatedScroll&&(this._isAdopted?y:t)>0||this.animatedScroll===this.limit&&(this._isAdopted?y:t)<0))&&(o.lenisStopPropagation=!0),o.cancelable&&o.preventDefault();const g=n&&this.options.syncTouch,h=n&&"touchend"===o.type;h&&(y=Math.sign(y)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+y,{programmatic:!1,...g?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.sweepNestedInstances(),this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(null!==this._resetVelocityTimeout&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(!1===this.isScrolling||"native"===this.isScrolling){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.settleNativeScrollLater()}};settleNativeScrollLater(){null!==this._resetVelocityTimeout&&clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=setTimeout(()=>{this._resetVelocityTimeout=null,"smooth"!==this.isScrolling&&(!1===this.isScrolling&&0===this.velocity||(this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()))},400)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.options.autoToggle?this.rootElement.style.removeProperty("overflow"):this.internalStart())}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.options.autoToggle?this.rootElement.style.setProperty("overflow","clip"):this.internalStop())}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{const a=e-(this.time||e);if(this.time=e,this.animate.advance(.001*a),this.nestedInstances.size>0){for(const a of this.nestedInstances)a.raf(e);++this._nestedSweepFrame>=60&&(this._nestedSweepFrame=0,this.sweepNestedInstances())}this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:a=0,immediate:t=!1,lock:o=!1,programmatic:n=!0,lerp:r=(n?this.options.lerp:void 0),duration:l=(n?this.options.duration:void 0),easing:s=(n?this.options.easing:void 0),onStart:i,onComplete:c,force:u=!1,userData:m}={}){if(this.prefersReducedMotion&&(n?t=!0:(r=1,l=void 0,s=void 0)),(this.isStopped||this.isLocked)&&!u)return;let p=e,d=a;if("string"===typeof p&&["top","left","start","#"].includes(p))p=0;else if("string"===typeof p&&["bottom","right","end"].includes(p))p=this.limit;else{let e=null;if("string"===typeof p?(e=p.startsWith("#")?document.getElementById(p.slice(1)):document.querySelector(p),e||("#top"===p?p=0:console.warn("Lenis: Target not found",p))):p instanceof Element&&(e=p),e){if(this.options.wrapper!==window){const e=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?e.left:e.top}const a=e.getBoundingClientRect(),t=getComputedStyle(e),o=this.isHorizontal?Number.parseFloat(t.scrollMarginLeft):Number.parseFloat(t.scrollMarginTop),n=getComputedStyle(this.rootElement),r=this.isHorizontal?Number.parseFloat(n.scrollPaddingLeft):Number.parseFloat(n.scrollPaddingTop);p=(this.isHorizontal?a.left:a.top)+this.animatedScroll-(Number.isNaN(o)?0:o)-(Number.isNaN(r)?0:r)}}if("number"===typeof p){if(p+=d,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;const e=p-this.animatedScroll;e>this.limit/2?p-=this.limit:e<-this.limit/2&&(p+=this.limit)}}else p=Ot(0,p,this.limit);if(p===this.targetScroll)return i?.(this),void c?.(this);if(this.userData=m??{},t)return this.animatedScroll=this.targetScroll=p,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},void requestAnimationFrame(()=>{this.dispatchScrollendEvent()});n||(this.targetScroll=p),"number"===typeof l&&"function"!==typeof s?s=Ut:"function"===typeof s&&"number"!==typeof l&&(l=1),this.animate.fromTo(this.animatedScroll,p,{duration:l,easing:s,lerp:r,onStart:()=>{o&&(this.isLocked=!0),this.isScrolling="smooth",i?.(this)},onUpdate:(e,a)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),n&&(this.targetScroll=e),a||this.emit(),a&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}sweepNestedInstances(){for(const e of this.nestedInstances)e.rootElement.isConnected||(this.nestedInstances.delete(e),e.destroy())}isNestedAdoptable(e){return!qt.has(e)&&!(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e.isContentEditable)}adoptNestedScroller(a,t){const o=getComputedStyle(a),n=["auto","overlay","scroll"].includes(o.overflowX)&&a.scrollWidth>a.clientWidth,r=["auto","overlay","scroll"].includes(o.overflowY)&&a.scrollHeight>a.clientHeight,l=n&&!r?"horizontal":"vertical",s=window.lenis?.horizontal,i=new e({wrapper:a,content:a.firstElementChild??a,eventsTarget:a,orientation:l,gestureOrientation:l,smoothWheel:this.options.smoothWheel,syncTouch:this.options.syncTouch,syncTouchLerp:this.options.syncTouchLerp,touchInertiaExponent:this.options.touchInertiaExponent,duration:this.options.duration,easing:this.options.easing,lerp:this.options.lerp,touchMultiplier:this.options.touchMultiplier,wheelMultiplier:this.options.wheelMultiplier,autoResize:this.options.autoResize,prevent:this.options.prevent,overscroll:this.options.overscroll,allowNestedScroll:this.options.allowNestedScroll,naiveDimensions:this.options.naiveDimensions,respectReducedMotion:this.options.respectReducedMotion,infinite:!1,anchors:!1,autoToggle:!1,stopInertiaOnNavigate:!1,autoRaf:!1});i._isAdopted=!0,window.lenis&&(window.lenis.horizontal=s),this.nestedInstances.add(i),t.event.type.includes("touch")&&(i.virtualScroll.touchStart.x=this.virtualScroll.touchStart.x,i.virtualScroll.touchStart.y=this.virtualScroll.touchStart.y,i.virtualScroll.lastDelta.x=this.virtualScroll.lastDelta.x,i.virtualScroll.lastDelta.y=this.virtualScroll.lastDelta.y),i.onVirtualScroll(t)}hasNestedScroll(e,{deltaX:a,deltaY:t}){const o=Date.now();e._lenis||(e._lenis={});const n=e._lenis;let r,l,s,i,c,u,m,p,d,y;if(o-(n.time??0)>2e3){n.time=Date.now();const a=window.getComputedStyle(e);if(n.computedStyle=a,r=["auto","overlay","scroll"].includes(a.overflowX),l=["auto","overlay","scroll"].includes(a.overflowY),c=["auto"].includes(a.overscrollBehaviorX),u=["auto"].includes(a.overscrollBehaviorY),n.hasOverflowX=r,n.hasOverflowY=l,!r&&!l)return!1;m=e.scrollWidth,p=e.scrollHeight,d=e.clientWidth,y=e.clientHeight,s=m>d,i=p>y,n.isScrollableX=s,n.isScrollableY=i,n.scrollWidth=m,n.scrollHeight=p,n.clientWidth=d,n.clientHeight=y,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=u}else s=n.isScrollableX,i=n.isScrollableY,r=n.hasOverflowX,l=n.hasOverflowY,m=n.scrollWidth,p=n.scrollHeight,d=n.clientWidth,y=n.clientHeight,c=n.hasOverscrollBehaviorX,u=n.hasOverscrollBehaviorY;if(!(r&&s||l&&i))return!1;const g=Math.abs(a)>=Math.abs(t)?"horizontal":"vertical";let h,b,f,w,v,_;if("horizontal"===g)h=Math.round(e.scrollLeft),b=m-d,f=a,w=r,v=s,_=c;else{if("vertical"!==g)return!1;h=Math.round(e.scrollTop),b=p-y,f=t,w=l,v=i,_=u}return!_&&(h>=b||h<=0)||(f>0?h<b:h>0)&&w&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,a=this.limit,(e%a+a)%a):this.animatedScroll;var e,a}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return"smooth"===this.isScrolling}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),"smooth"===this.isScrolling&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(const e of Array.from(this.rootElement.classList))("lenis"===e||e.startsWith("lenis-"))&&this.rootElement.classList.remove(e)}};l();const Yt=Array(12).fill(0),$t=({visible:e,className:a})=>i().createElement("div",{className:["sonner-loading-wrapper",a].filter(Boolean).join(" "),"data-visible":e},i().createElement("div",{className:"sonner-spinner"},Yt.map((e,a)=>i().createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${a}`})))),Xt=i().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},i().createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Zt=i().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},i().createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Qt=i().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},i().createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),eo=i().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},i().createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),ao=i().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},i().createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i().createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}));let to=1;const oo=new class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const a=this.subscribers.indexOf(e);this.subscribers.splice(a,1)}),this.publish=e=>{this.subscribers.forEach(a=>a(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var a;const{message:t,...o}=e,n="number"===typeof(null==e?void 0:e.id)||(null==(a=e.id)?void 0:a.length)>0?e.id:to++,r=this.toasts.find(e=>e.id===n),l=void 0===e.dismissible||e.dismissible;return this.dismissedToasts.has(n)&&this.dismissedToasts.delete(n),r?this.toasts=this.toasts.map(a=>a.id===n?(this.publish({...a,...e,id:n,title:t}),{...a,...e,id:n,dismissible:l,title:t}):a):this.addToast({title:t,...o,dismissible:l,id:n}),n},this.dismiss=e=>(e?(this.dismissedToasts.add(e),requestAnimationFrame(()=>this.subscribers.forEach(a=>a({id:e,dismiss:!0})))):this.toasts.forEach(e=>{this.subscribers.forEach(a=>a({id:e.id,dismiss:!0}))}),e),this.message=(e,a)=>this.create({...a,message:e}),this.error=(e,a)=>this.create({...a,message:e,type:"error"}),this.success=(e,a)=>this.create({...a,type:"success",message:e}),this.info=(e,a)=>this.create({...a,type:"info",message:e}),this.warning=(e,a)=>this.create({...a,type:"warning",message:e}),this.loading=(e,a)=>this.create({...a,type:"loading",message:e}),this.promise=(e,a)=>{if(!a)return;let t;void 0!==a.loading&&(t=this.create({...a,promise:e,type:"loading",message:a.loading,description:"function"!==typeof a.description?a.description:void 0}));const o=Promise.resolve(e instanceof Function?e():e);let n,r=void 0!==t;const l=o.then(async e=>{n=["resolve",e];if(i().isValidElement(e))r=!1,this.create({id:t,type:"default",message:e});else if(no(e)&&!e.ok){r=!1;const o="function"===typeof a.error?await a.error(`HTTP error! status: ${e.status}`):a.error,n="function"===typeof a.description?await a.description(`HTTP error! status: ${e.status}`):a.description,l="object"===typeof o&&!i().isValidElement(o)?o:{message:o};this.create({id:t,type:"error",description:n,...l})}else if(e instanceof Error){r=!1;const o="function"===typeof a.error?await a.error(e):a.error,n="function"===typeof a.description?await a.description(e):a.description,l="object"===typeof o&&!i().isValidElement(o)?o:{message:o};this.create({id:t,type:"error",description:n,...l})}else if(void 0!==a.success){r=!1;const o="function"===typeof a.success?await a.success(e):a.success,n="function"===typeof a.description?await a.description(e):a.description,l="object"===typeof o&&!i().isValidElement(o)?o:{message:o};this.create({id:t,type:"success",description:n,...l})}}).catch(async e=>{if(n=["reject",e],void 0!==a.error){r=!1;const o="function"===typeof a.error?await a.error(e):a.error,n="function"===typeof a.description?await a.description(e):a.description,l="object"===typeof o&&!i().isValidElement(o)?o:{message:o};this.create({id:t,type:"error",description:n,...l})}}).finally(()=>{r&&(this.dismiss(t),t=void 0),null==a.finally||a.finally.call(a)}),s=()=>new Promise((e,a)=>l.then(()=>"reject"===n[0]?a(n[1]):e(n[1])).catch(a));return"string"!==typeof t&&"number"!==typeof t?{unwrap:s}:Object.assign(t,{unwrap:s})},this.custom=(e,a)=>{const t=(null==a?void 0:a.id)||to++;return this.create({jsx:e(t),id:t,...a}),t},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},no=e=>e&&"object"===typeof e&&"ok"in e&&"boolean"===typeof e.ok&&"status"in e&&"number"===typeof e.status,ro=(e,a)=>{const t=(null==a?void 0:a.id)||to++;return oo.addToast({title:e,...a,id:t}),t},lo=Object.assign(ro,{success:oo.success,info:oo.info,warning:oo.warning,error:oo.error,custom:oo.custom,message:oo.message,promise:oo.promise,dismiss:oo.dismiss,loading:oo.loading},{getHistory:()=>oo.toasts,getToasts:()=>oo.getActiveToasts()});function so(e){return void 0!==e.label}!function(e){if(!e||"undefined"==typeof document)return;let a=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",a.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");const io=3,co=14;function uo(...e){return e.filter(Boolean).join(" ")}const mo=e=>{var a,t,o,n,r,l,s,c,u;const{invert:m,toast:p,unstyled:d,interacting:y,setHeights:g,visibleToasts:h,heights:b,index:f,toasts:w,expanded:v,removeToast:_,defaultRichColors:C,closeButton:x,style:k,cancelButtonStyle:S,actionButtonStyle:L,className:A="",descriptionClassName:D="",duration:B,position:M,gap:T,expandByDefault:V,classNames:R,icons:P,closeButtonAriaLabel:F="Close toast"}=e,[G,W]=i().useState(null),[O,E]=i().useState(null),[H,N]=i().useState(!1),[K,j]=i().useState(!1),[I,z]=i().useState(!1),[U,q]=i().useState(!1),[J,Y]=i().useState(!1),[$,X]=i().useState(0),[Z,Q]=i().useState(0),ee=i().useRef(p.duration||B||4e3),ae=i().useRef(null),te=i().useRef(null),oe=0===f,ne=f+1<=h,re=p.type,le=!1!==p.dismissible,se=p.className||"",ie=p.descriptionClassName||"",ce=i().useMemo(()=>b.findIndex(e=>e.toastId===p.id)||0,[b,p.id]),ue=i().useMemo(()=>{var e;return null!=(e=p.closeButton)?e:x},[p.closeButton,x]),me=i().useMemo(()=>p.duration||B||4e3,[p.duration,B]),pe=i().useRef(0),de=i().useRef(0),ye=i().useRef(0),ge=i().useRef(null),[he,be]=M.split("-"),fe=i().useMemo(()=>b.reduce((e,a,t)=>t>=ce?e:e+a.height,0),[b,ce]),we=(()=>{const[e,a]=i().useState(document.hidden);return i().useEffect(()=>{const e=()=>{a(document.hidden)};return document.addEventListener("visibilitychange",e),()=>window.removeEventListener("visibilitychange",e)},[]),e})(),ve=p.invert||m,_e="loading"===re;de.current=i().useMemo(()=>ce*T+fe,[ce,fe]),i().useEffect(()=>{ee.current=me},[me]),i().useEffect(()=>{N(!0)},[]),i().useEffect(()=>{const e=te.current;if(e){const a=e.getBoundingClientRect().height;return Q(a),g(e=>[{toastId:p.id,height:a,position:p.position},...e]),()=>g(e=>e.filter(e=>e.toastId!==p.id))}},[g,p.id]),i().useLayoutEffect(()=>{if(!H)return;const e=te.current,a=e.style.height;e.style.height="auto";const t=e.getBoundingClientRect().height;e.style.height=a,Q(t),g(e=>e.find(e=>e.toastId===p.id)?e.map(e=>e.toastId===p.id?{...e,height:t}:e):[{toastId:p.id,height:t,position:p.position},...e])},[H,p.title,p.description,g,p.id]);const Ce=i().useCallback(()=>{j(!0),X(de.current),g(e=>e.filter(e=>e.toastId!==p.id)),setTimeout(()=>{_(p)},200)},[p,_,g,de]);i().useEffect(()=>{if(p.promise&&"loading"===re||p.duration===1/0||"loading"===p.type)return;let e;return v||y||we?(()=>{if(ye.current<pe.current){const e=(new Date).getTime()-pe.current;ee.current=ee.current-e}ye.current=(new Date).getTime()})():ee.current!==1/0&&(pe.current=(new Date).getTime(),e=setTimeout(()=>{null==p.onAutoClose||p.onAutoClose.call(p,p),Ce()},ee.current)),()=>clearTimeout(e)},[v,y,p,re,we,Ce]),i().useEffect(()=>{p.delete&&Ce()},[Ce,p.delete]);const xe=p.icon||(null==P?void 0:P[re])||(e=>{switch(e){case"success":return Xt;case"info":return Qt;case"warning":return Zt;case"error":return eo;default:return null}})(re);var ke,Se;return i().createElement("li",{tabIndex:0,ref:te,className:uo(A,se,null==R?void 0:R.toast,null==p||null==(a=p.classNames)?void 0:a.toast,null==R?void 0:R.default,null==R?void 0:R[re],null==p||null==(t=p.classNames)?void 0:t[re]),"data-sonner-toast":"","data-rich-colors":null!=(ke=p.richColors)?ke:C,"data-styled":!Boolean(p.jsx||p.unstyled||d),"data-mounted":H,"data-promise":Boolean(p.promise),"data-swiped":J,"data-removed":K,"data-visible":ne,"data-y-position":he,"data-x-position":be,"data-index":f,"data-front":oe,"data-swiping":I,"data-dismissible":le,"data-type":re,"data-invert":ve,"data-swipe-out":U,"data-swipe-direction":O,"data-expanded":Boolean(v||V&&H),style:{"--index":f,"--toasts-before":f,"--z-index":w.length-f,"--offset":`${K?$:de.current}px`,"--initial-height":V?"auto":`${Z}px`,...k,...p.style},onDragEnd:()=>{z(!1),W(null),ge.current=null},onPointerDown:e=>{!_e&&le&&(ae.current=new Date,X(de.current),e.target.setPointerCapture(e.pointerId),"BUTTON"!==e.target.tagName&&(z(!0),ge.current={x:e.clientX,y:e.clientY}))},onPointerUp:()=>{var e,a,t;if(U||!le)return;ge.current=null;const o=Number((null==(e=te.current)?void 0:e.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),n=Number((null==(a=te.current)?void 0:a.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),r=(new Date).getTime()-(null==(t=ae.current)?void 0:t.getTime()),l="x"===G?o:n,s=Math.abs(l)/r;if(Math.abs(l)>=45||s>.11)return X(de.current),null==p.onDismiss||p.onDismiss.call(p,p),E("x"===G?o>0?"right":"left":n>0?"down":"up"),Ce(),void q(!0);var i,c;null==(i=te.current)||i.style.setProperty("--swipe-amount-x","0px"),null==(c=te.current)||c.style.setProperty("--swipe-amount-y","0px"),Y(!1),z(!1),W(null)},onPointerMove:a=>{var t,o,n;if(!ge.current||!le)return;if((null==(t=window.getSelection())?void 0:t.toString().length)>0)return;const r=a.clientY-ge.current.y,l=a.clientX-ge.current.x;var s;const i=null!=(s=e.swipeDirections)?s:function(e){const[a,t]=e.split("-"),o=[];return a&&o.push(a),t&&o.push(t),o}(M);!G&&(Math.abs(l)>1||Math.abs(r)>1)&&W(Math.abs(l)>Math.abs(r)?"x":"y");let c={x:0,y:0};const u=e=>1/(1.5+Math.abs(e)/20);if("y"===G){if(i.includes("top")||i.includes("bottom"))if(i.includes("top")&&r<0||i.includes("bottom")&&r>0)c.y=r;else{const e=r*u(r);c.y=Math.abs(e)<Math.abs(r)?e:r}}else if("x"===G&&(i.includes("left")||i.includes("right")))if(i.includes("left")&&l<0||i.includes("right")&&l>0)c.x=l;else{const e=l*u(l);c.x=Math.abs(e)<Math.abs(l)?e:l}(Math.abs(c.x)>0||Math.abs(c.y)>0)&&Y(!0),null==(o=te.current)||o.style.setProperty("--swipe-amount-x",`${c.x}px`),null==(n=te.current)||n.style.setProperty("--swipe-amount-y",`${c.y}px`)}},ue&&!p.jsx&&"loading"!==re?i().createElement("button",{"aria-label":F,"data-disabled":_e,"data-close-button":!0,onClick:_e||!le?()=>{}:()=>{Ce(),null==p.onDismiss||p.onDismiss.call(p,p)},className:uo(null==R?void 0:R.closeButton,null==p||null==(o=p.classNames)?void 0:o.closeButton)},null!=(Se=null==P?void 0:P.close)?Se:ao):null,(re||p.icon||p.promise)&&null!==p.icon&&(null!==(null==P?void 0:P[re])||p.icon)?i().createElement("div",{"data-icon":"",className:uo(null==R?void 0:R.icon,null==p||null==(n=p.classNames)?void 0:n.icon)},p.promise||"loading"===p.type&&!p.icon?p.icon||function(){var e,a;return(null==P?void 0:P.loading)?i().createElement("div",{className:uo(null==R?void 0:R.loader,null==p||null==(a=p.classNames)?void 0:a.loader,"sonner-loader"),"data-visible":"loading"===re},P.loading):i().createElement($t,{className:uo(null==R?void 0:R.loader,null==p||null==(e=p.classNames)?void 0:e.loader),visible:"loading"===re})}():null,"loading"!==p.type?xe:null):null,i().createElement("div",{"data-content":"",className:uo(null==R?void 0:R.content,null==p||null==(r=p.classNames)?void 0:r.content)},i().createElement("div",{"data-title":"",className:uo(null==R?void 0:R.title,null==p||null==(l=p.classNames)?void 0:l.title)},p.jsx?p.jsx:"function"===typeof p.title?p.title():p.title),p.description?i().createElement("div",{"data-description":"",className:uo(D,ie,null==R?void 0:R.description,null==p||null==(s=p.classNames)?void 0:s.description)},"function"===typeof p.description?p.description():p.description):null),i().isValidElement(p.cancel)?p.cancel:p.cancel&&so(p.cancel)?i().createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||S,onClick:e=>{so(p.cancel)&&le&&(null==p.cancel.onClick||p.cancel.onClick.call(p.cancel,e),Ce())},className:uo(null==R?void 0:R.cancelButton,null==p||null==(c=p.classNames)?void 0:c.cancelButton)},p.cancel.label):null,i().isValidElement(p.action)?p.action:p.action&&so(p.action)?i().createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||L,onClick:e=>{so(p.action)&&(null==p.action.onClick||p.action.onClick.call(p.action,e),e.defaultPrevented||Ce())},className:uo(null==R?void 0:R.actionButton,null==p||null==(u=p.classNames)?void 0:u.actionButton)},p.action.label):null)};function po(){if("undefined"===typeof window)return"ltr";if("undefined"===typeof document)return"ltr";const e=document.documentElement.getAttribute("dir");return"auto"!==e&&e?e:window.getComputedStyle(document.documentElement).direction}function yo(e,a){const t={};return[e,a].forEach((e,a)=>{const o=1===a,n=o?"--mobile-offset":"--offset",r=o?"16px":"24px";function l(e){["top","right","bottom","left"].forEach(a=>{t[`${n}-${a}`]="number"===typeof e?`${e}px`:e})}"number"===typeof e||"string"===typeof e?l(e):"object"===typeof e?["top","right","bottom","left"].forEach(a=>{void 0===e[a]?t[`${n}-${a}`]=r:t[`${n}-${a}`]="number"===typeof e[a]?`${e[a]}px`:e[a]}):l(r)}),t}const go=i().forwardRef(function(e,a){const{invert:t,position:o="bottom-right",hotkey:r=["altKey","KeyT"],expand:l,closeButton:s,className:c,offset:u,mobileOffset:m,theme:p="light",richColors:d,duration:y,style:g,visibleToasts:h=io,toastOptions:b,dir:f=po(),gap:w=co,icons:v,containerAriaLabel:_="Notifications"}=e,[C,x]=i().useState([]),k=i().useMemo(()=>Array.from(new Set([o].concat(C.filter(e=>e.position).map(e=>e.position)))),[C,o]),[S,L]=i().useState([]),[A,D]=i().useState(!1),[B,M]=i().useState(!1),[T,V]=i().useState("system"!==p?p:"undefined"!==typeof window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),R=i().useRef(null),P=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),F=i().useRef(null),G=i().useRef(!1),W=i().useCallback(e=>{x(a=>{var t;return(null==(t=a.find(a=>a.id===e.id))?void 0:t.delete)||oo.dismiss(e.id),a.filter(({id:a})=>a!==e.id)})},[]);return i().useEffect(()=>oo.subscribe(e=>{e.dismiss?requestAnimationFrame(()=>{x(a=>a.map(a=>a.id===e.id?{...a,delete:!0}:a))}):setTimeout(()=>{n().flushSync(()=>{x(a=>{const t=a.findIndex(a=>a.id===e.id);return-1!==t?[...a.slice(0,t),{...a[t],...e},...a.slice(t+1)]:[e,...a]})})})}),[C]),i().useEffect(()=>{if("system"!==p)return void V(p);if("system"===p&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?V("dark"):V("light")),"undefined"===typeof window)return;const e=window.matchMedia("(prefers-color-scheme: dark)");try{e.addEventListener("change",({matches:e})=>{V(e?"dark":"light")})}catch(a){e.addListener(({matches:e})=>{try{V(e?"dark":"light")}catch(SD){console.error(SD)}})}},[p]),i().useEffect(()=>{C.length<=1&&D(!1)},[C]),i().useEffect(()=>{const e=e=>{var a;var t;r.every(a=>e[a]||e.code===a)&&(D(!0),null==(t=R.current)||t.focus());"Escape"!==e.code||document.activeElement!==R.current&&!(null==(a=R.current)?void 0:a.contains(document.activeElement))||D(!1)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),i().useEffect(()=>{if(R.current)return()=>{F.current&&(F.current.focus({preventScroll:!0}),F.current=null,G.current=!1)}},[R.current]),i().createElement("section",{ref:a,"aria-label":`${_} ${P}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},k.map((a,o)=>{var n;const[r,p]=a.split("-");return C.length?i().createElement("ol",{key:a,dir:"auto"===f?po():f,tabIndex:-1,ref:R,className:c,"data-sonner-toaster":!0,"data-sonner-theme":T,"data-y-position":r,"data-lifted":A&&C.length>1&&!l,"data-x-position":p,style:{"--front-toast-height":`${(null==(n=S[0])?void 0:n.height)||0}px`,"--width":"356px","--gap":`${w}px`,...g,...yo(u,m)},onBlur:e=>{G.current&&!e.currentTarget.contains(e.relatedTarget)&&(G.current=!1,F.current&&(F.current.focus({preventScroll:!0}),F.current=null))},onFocus:e=>{e.target instanceof HTMLElement&&"false"===e.target.dataset.dismissible||G.current||(G.current=!0,F.current=e.relatedTarget)},onMouseEnter:()=>D(!0),onMouseMove:()=>D(!0),onMouseLeave:()=>{B||D(!1)},onDragEnd:()=>D(!1),onPointerDown:e=>{e.target instanceof HTMLElement&&"false"===e.target.dataset.dismissible||M(!0)},onPointerUp:()=>M(!1)},C.filter(e=>!e.position&&0===o||e.position===a).map((o,n)=>{var r,c;return i().createElement(mo,{key:o.id,icons:v,index:n,toast:o,defaultRichColors:d,duration:null!=(r=null==b?void 0:b.duration)?r:y,className:null==b?void 0:b.className,descriptionClassName:null==b?void 0:b.descriptionClassName,invert:t,visibleToasts:h,closeButton:null!=(c=null==b?void 0:b.closeButton)?c:s,interacting:B,position:a,style:null==b?void 0:b.style,unstyled:null==b?void 0:b.unstyled,classNames:null==b?void 0:b.classNames,cancelButtonStyle:null==b?void 0:b.cancelButtonStyle,actionButtonStyle:null==b?void 0:b.actionButtonStyle,closeButtonAriaLabel:null==b?void 0:b.closeButtonAriaLabel,removeToast:W,toasts:C.filter(e=>e.position==o.position),heights:S.filter(e=>e.position==o.position),setHeights:L,expandByDefault:l,gap:w,expanded:A,swipeDirections:e.swipeDirections})})):null}))}),ho=e=>`/VicePortal/images/${e}.webp`,bo="https://www.rockstargames.com/VI",fo=[{id:"vice-city",kind:"Region",title:"Vice City",subtitle:"Beaches, Art Deco streets and nightlife.",category:"City life",image:ho("vice_city_11"),number:"01",tag:"VICE CITY",description:"Vice City is Leonida\u2019s coastal metropolis. Rockstar\u2019s published material shows beachfront neighbourhoods, Art Deco architecture and nightlife.",details:["Coastal city","Art Deco architecture","Nightlife"],source:bo},{id:"leonida-keys",kind:"Region",title:"Leonida Keys",subtitle:"Islands, coastal roads and open water.",category:"Coast",image:ho("leonida_keys_01"),number:"02",tag:"LEONIDA KEYS",description:"The Leonida Keys are a chain of islands linked by coastal roads. Rockstar introduces the region through its waterways, island communities and connections to Jason\u2019s story.",details:["Island communities","Coastal roads","Open water"],source:bo},{id:"grassrivers",kind:"Region",title:"Grassrivers",subtitle:"Wetlands and backcountry waterways.",category:"The wilds",image:ho("grassrivers_03"),number:"03",tag:"GRASSRIVERS",description:"Grassrivers is Leonida\u2019s wetland region. Official imagery shows waterways, vegetation and airboats beyond the urban coastline.",details:["Wetlands","Backcountry waterways","Airboat imagery"],source:bo},{id:"port-gellhorn",kind:"Region",title:"Port Gellhorn",subtitle:"Roadside motels and a worn coastal town.",category:"City life",image:ho("port_gellhorn_01"),number:"04",tag:"PORT GELLHORN",description:"Port Gellhorn is a coastal region introduced through roadside motels, strip malls and ageing tourist infrastructure. Its official presentation contrasts with Vice City\u2019s beachfront skyline.",details:["Coastal town","Roadside motels","Older tourist infrastructure"],source:bo},{id:"ambrosia",kind:"Region",title:"Ambrosia",subtitle:"Industrial Leonida and biker culture.",category:"City life",image:ho("ambrosia_01"),number:"05",tag:"AMBROSIA",description:"Ambrosia represents Leonida\u2019s industrial interior. Rockstar\u2019s introduction features factories, local communities and biker culture.",details:["Industrial region","Factories","Biker culture"],source:bo},{id:"mount-kalaga",kind:"Region",title:"Mount Kalaga",subtitle:"National park and mountain landscapes.",category:"The wilds",image:ho("mount_kalaga_national_park_postcard"),number:"06",tag:"MOUNT KALAGA NATIONAL PARK",description:"Mount Kalaga National Park is the mountain region introduced in Rockstar\u2019s GTA VI material. Its promotional imagery focuses on wilderness and open landscapes.",details:["National park","Mountain landscapes","Wilderness"],source:bo}],wo=[{id:"jason-duval",kind:"Character",title:"Jason Duval",subtitle:"GTA VI protagonist",image:ho("jason_duval_01"),tag:"PROTAGONIST",description:"Jason grew up around criminals, served in the Army and later moved to the Leonida Keys. Rockstar introduces him as Lucia\u2019s partner in the central GTA VI story.",details:["Leonida Keys","Former Army","Partner: Lucia Caminos"],source:bo},{id:"lucia-caminos",kind:"Character",title:"Lucia Caminos",subtitle:"GTA VI protagonist",image:ho("lucia_caminos_01"),tag:"PROTAGONIST",description:"Lucia has roots in Liberty City and served time in Leonida Penitentiary. Rockstar\u2019s story introduction follows her plans after prison and her partnership with Jason.",details:["Liberty City roots","Leonida Penitentiary","Partner: Jason Duval"],source:bo}],vo=[{id:"trailer-two",kind:"Story",category:"Trailer analysis",title:"Trailer 2: Jason and Lucia",subtitle:"The story premise and locations shown in the second trailer.",image:ho("jason_and_lucia_01"),tag:"TRAILER 2",readTime:"1 MIN READ",description:"GTA VI\u2019s second trailer focuses on Jason and Lucia. Rockstar\u2019s published premise follows the pair after a robbery draws them into a conspiracy across Leonida.",paragraphs:["The trailer moves between coastal roads, open water, interiors and night-time streets. Jason and Lucia remain central to these scenes.","Its editing does not establish mission order, playable locations or the details of a gameplay system.","This is fan analysis of Rockstar\u2019s trailer and character material, not an additional official announcement."],source:bo,trailer:!0},{id:"beyond-vice",kind:"Story",category:"Region guide",title:"Leonida\u2019s six regions",subtitle:"The locations introduced alongside Vice City.",image:ho("leonida_keys_01"),tag:"REGIONS",readTime:"1 MIN READ",description:"Rockstar has introduced six regions in Leonida, covering a coastal city, islands, wetlands, industrial towns and mountain wilderness.",paragraphs:["The Leonida Keys feature islands and coastal roads. Grassrivers is the wetland region. Port Gellhorn is presented through its motels and older coastal infrastructure.","Ambrosia represents the industrial interior. Mount Kalaga National Park introduces mountain and wilderness landscapes.","These profiles summarise Rockstar\u2019s introductions. They are not a complete gameplay map or an activity list."],source:bo},{id:"vice-after-dark",kind:"Story",category:"Visual analysis",title:"Vice City after dark",subtitle:"Lighting and colour in the official screenshots.",image:ho("vice_city_06"),tag:"SCREENSHOTS",readTime:"1 MIN READ",description:"Official Vice City screenshots contrast bright beachfront scenes with neon-lit streets and night-time interiors.",paragraphs:["The published imagery uses warmer light on the coast and stronger pink, blue and violet lighting after dark.","This article describes the images, not venue availability or gameplay activities. Screenshots are Rockstar material; the observations are fan editorial."],source:bo}],_o=[{id:"frame-skyline",kind:"Image",title:"Vice City skyline",category:"The city",image:ho("vice_city_11"),subtitle:"Vice City \xb7 Official screenshot",source:bo},{id:"frame-partners",kind:"Image",title:"Jason and Lucia",category:"The people",image:ho("jason_and_lucia_01"),subtitle:"Jason & Lucia \xb7 Official screenshot",source:bo},{id:"frame-keys",kind:"Image",title:"Leonida Keys",category:"The wilds",image:ho("leonida_keys_01"),subtitle:"Leonida Keys \xb7 Official screenshot",source:bo},{id:"frame-night",kind:"Image",title:"Vice City at night",category:"The city",image:ho("vice_city_06"),subtitle:"Vice City \xb7 Official screenshot",source:bo},{id:"frame-beach",kind:"Image",title:"Vice City beach",category:"The people",image:ho("vice_city_05"),subtitle:"Vice City \xb7 Official screenshot",source:bo},{id:"frame-getaway",kind:"Image",title:"Vice City street car",category:"The city",image:ho("vice_city_24"),subtitle:"Vice City \xb7 Official screenshot",source:bo}],Co=[{id:"coastal-custom",kind:"Vehicle spotlight",title:"Vice City custom car",subtitle:"Custom-car imagery from Vice City.",category:"Street culture",image:ho("vice_city_24"),tag:"IMAGE REFERENCE",description:"A custom street car appears in this official Vice City screenshot. This record describes its appearance, not confirmed modifications or performance.",details:["Official screenshot","Image reference","No performance data"],source:bo},{id:"backcountry-buggy",kind:"Vehicle spotlight",title:"Off-road vehicle imagery",subtitle:"An image reference from GTA Town.",category:"Off-road",image:ho("garage-preview"),tag:"IMAGE REFERENCE",description:"Off-road vehicle imagery sourced through GTA Town. The vehicle model, speed, handling and unlock conditions are not verified in this atlas.",details:["Image reference","Off-road","Via GTA Town"],source:"https://gtatown.com/"},{id:"island-hopper",kind:"Vehicle spotlight",title:"Aircraft over the Keys",subtitle:"Aircraft in official Leonida Keys imagery.",category:"Air & water",image:ho("leonida_keys_01"),tag:"IMAGE REFERENCE",description:"An aircraft appears above the Leonida Keys in this official image. Its model and specifications are not verified in this atlas.",details:["Official screenshot","Leonida Keys","Image reference"],source:bo}],xo=[["experience","The experience",null,"The camera never tells the whole story. See Leonida through Rockstar\u2019s trailers, artwork and location reveals.","rs-launch"],["explore","Leonida",null,"The postcard only gets you so far. From Vice City to the Keys, Grassrivers, Port Gellhorn, Ambrosia and Mount Kalaga.","vice_city_11"],["map","Map","explore","Every road leads somewhere. Get your bearings across six introduced regions. Illustrated reference, not an in-game map.","hub-map"],["regions","Regions","explore","Six regions. Plenty of different scenery. Six corners of Leonida, with official imagery and traceable sources.","leonida_keys_01"],["locations","Locations","explore","The view changes when you leave the main road. From downtown streets to island roads and the wild interior.","vice_city_06"],["activities","Activities","explore","There is more to life than the main story. Things to do, where to find them and what they require.","vice_city_05"],["properties","Properties","explore","Even paradise charges rent. Where to live, what to own and how ownership works.","port_gellhorn_01"],["animals","Animals & wildlife","explore","The locals have teeth. The wild side of Leonida: documented wildlife and habitats.","grassrivers_03"],["story","Story & characters",null,"Everybody wants something. The faces and connections behind Rockstar\u2019s GTA VI story material.","jason_and_lucia_01"],["characters","Characters","story","Everybody has a story. Meet the cast and their connections. Backstories stay hidden with spoilers off.","jason_and_lucia_02"],["characters/protagonists","Protagonists","characters","Two people. Plenty on the line. The two leads at the heart of GTA VI: Jason Duval and Lucia Caminos.","jason_and_lucia_01"],["characters/supporting","Supporting characters","characters","The company you keep. Meet the wider cast through credited roles and sourced backstories.","cal_hampton_01"],["characters/side-contacts","Side contacts","characters","A familiar face can take you a long way. Optional encounters and side-job contacts, backed by documented references.","cal_hampton_01"],["characters/media-radio","Radio & podcasts","characters","The city has a voice. The voices behind Leonida\u2019s official radio, talk shows and podcasts.","vice_city_06"],["characters/media-tv","Television & news","characters","Everybody wants airtime. The faces and voices credited in television and news broadcasts.","vice_city_06"],["characters/media-games","In-world games","characters","Even the locals need a little escapism. Credited roles in Leonida\u2019s fictional video games.","vice_city_06"],["characters/encounters","Additional encounters","characters","You never know who is around the corner. Named appearances in gameplay and media without established cast credits.","vice_city_06"],["gangs","Gangs & factions","story","Everybody knows somebody. Groups, crews and the affiliations documented in the sources.","ambrosia_01"],["missions","Missions","story","Every job has a catch. The main story, side jobs and encounters.","story-preview"],["missions/main","Main story","missions","One thing leads to another. Follow the story missions and their documented requirements.","jason_and_lucia_01"],["missions/side","Side missions","missions","A little extra on the side. Side jobs: where they start, what they ask and what they reward.","port_gellhorn_01"],["missions/random-events","Random events & encounters","missions","Life rarely sticks to the schedule. Unexpected encounters, their locations and documented conditions.","vice_city_06"],["story/timeline","Story timeline","story","It all adds up, eventually. Story events on record. Trailer cuts do not establish mission order.","jason_and_lucia_01"],["progress","Your progress",null,"Make your mark. Make your way through the atlas. Your checklist and bookmarks stay in this browser.","vice_city_12"],["progress/checklist","Personal checklist","progress","One stop at a time. Mark the atlas pages you have explored, independently of your game save.","vice_city_11"],["progress/100-percent","100% completion","progress","Leave nothing unchecked. The requirements for in-game completion, separate from your atlas checklist.","vice_city_12"],["collectibles","Collectibles","progress","Some things are worth looking for. What to collect, where to look and the requirements on record.","grassrivers_03"],["trophies","Trophies & achievements","progress","A little something to show for it. The documented requirements behind trophies and achievements.","vice_city_06"],["challenges","Challenges","progress","Nothing comes easy. Milestones, challenges and the conditions to unlock them.","garage-preview"],["saved","Saved atlas","progress","Some things are worth keeping. Your personal collection of bookmarks, kept on this device without cloud sync.","leonida_keys_01"],["garage","Garage",null,"Fast rides. Faster decisions. Find your next ride: vehicle classes, imagery and side-by-side comparisons.","garage-preview"],["vehicles","Vehicles","garage","Life in the fast lane. The rides on record, from community listings to official images. Performance stays unverified unless stated.","vice_city_24"],["vehicles/super","Super cars","vehicles","Subtlety was never the point. Super-class rides from the community vehicle reference.","car-thrax"],["vehicles/sports","Sports cars","vehicles","The long way home just got interesting. Sports-class rides from the community vehicle reference.","car-comet"],["vehicles/muscle","Muscle cars","vehicles","A little less restraint. Muscle-class rides from the community vehicle reference.","car-gauntlet"],["vehicles/coupes","Coupes & convertibles","vehicles","Two doors. Plenty of attitude. Coupe and open-top models on record.","garage-preview"],["vehicles/sedans","Sedans & wagons","vehicles","Even the everyday deserves a little style. Sedans and station wagons in the catalog.","garage-preview"],["vehicles/suvs","SUVs","vehicles","Room for a few more plans. Sport utility vehicles on record.","garage-preview"],["vehicles/compacts","Compacts","vehicles","Small footprint. Big personality. Small cars and hatchbacks in the catalog.","garage-preview"],["vehicles/commercial","Commercial & utility","vehicles","Somebody has to do the work. Workhorses of the road: trucks, vans and utility vehicles.","garage-preview"],["vehicles/military","Military vehicles","vehicles","Not your average commuter. Military vehicle records and references.","garage-preview"],["vehicles/bicycles","Bicycles","vehicles","Two wheels and a little fresh air. Two wheels, no engine: bicycle references.","garage-preview"],["vehicles/standout","Standout collection","vehicles","Blending in is overrated. Named special variants, organized by their source collections.","vice_city_24"],["vehicles/other","Other vehicles","vehicles","Not everything fits a parking space. The rest of the vehicle records, including unclassified models.","garage-preview"],["vehicles/motorcycles","Motorcycles","vehicles","Less metal between you and the road. Motorcycle entries from the community catalog.","bike-carbon"],["vehicles/off-road","Off-road","vehicles","The pavement is optional. Rides for rougher terrain, with image references.","garage-preview"],["vehicles/boats","Boats","vehicles","The scenic route comes with a wake. The boats on record, with source references.","leonida_keys_01"],["vehicles/aircraft","Aircraft","vehicles","A different angle on Leonida. Aircraft on record and aviation imagery.","leonida_keys_01"],["vehicles/service","Service & emergency","vehicles","The streets have a working day too. Service and emergency rides in the source records.","vice_city_24"],["vehicles/customisation","Vehicle customisation","garage","Make it yours. A closer look at vehicle styling and modifications. Images alone do not establish available upgrades.","vice_city_24"],["vehicles/rankings","Vehicle rankings","garage","Bragging rights need evidence. Rankings need comparable GTA VI measurements. No borrowed stats from earlier games.","car-emerus"],["compare","Compare vehicles","garage","Settle the debate. Put rides head to head by class, manufacturer and documented attributes.","car-thrax"],["weapons","Weapons",null,"Trouble comes fully loaded. The weapons on record, organized by type and community source.","weapon-556"],["weapons/handguns","Handguns","weapons","A closer look at the hardware. Handguns listed in the community reference.","weapon-38"],["weapons/assault-rifles","Assault rifles","weapons","The hardware on record. Assault rifles on record, with their sources.","weapon-556"],["weapons/shotguns","Shotguns","weapons","Know what is on file. Shotgun records and their sources.","weapon-az1200"],["weapons/melee","Melee","weapons","Not everything runs on ammunition. Melee weapons on record.","weapon-bat"],["weapons/throwables","Throwables","weapons","Some things come with a warning label. Throwable weapon records and documented availability.","story-preview"],["weapons/smgs","Submachine guns","weapons","A closer look at the arsenal. Submachine guns on record.","weapon-556"],["weapons/snipers","Sniper rifles","weapons","Every detail matters. Sniper and marksman rifle records.","weapon-556"],["weapons/heavy","Heavy weapons","weapons","Subtle was never the brief. Heavy weapons on record.","weapon-556"],["weapons/other","Other weapons","weapons","The rest of the armory. Weapon categories outside the main groups, as listed by sources.","weapon-556"],["weapons/customisation","Weapon customisation","weapons","The details make the difference. Attachments, upgrades and the documented conditions to unlock them.","weapon-1922"],["weapons/compare","Compare weapons","weapons","Know what is on record. Compare weapon types and known attributes. Damage values remain unverified.","weapon-556"],["guides","Guides",null,"Know before you go. Know the territory: game references, source notes and common questions.","guides-preview"],["guides/getting-started","Getting started","guides","Everybody starts somewhere. Get your bearings with the setting, the cast and the sources.","vice_city_11"],["guides/money","Money & economy","guides","Cash talks. Money in and money out: earnings, purchases and prices.","vice_city_24"],["guides/controls","Controls & settings","guides","Get a handle on things. The controls and settings for each documented platform.","jason_and_lucia_01"],["guides/cheats","Cheats","guides","Play by your own rules. GTA VI codes by platform, without recycling codes from earlier games.","vice_city_06"],["guides/cheats/playstation","PlayStation cheats","guides/cheats","A different way to play. Cheat-code records for GTA VI on PlayStation.","vice_city_06"],["guides/cheats/xbox","Xbox cheats","guides/cheats","Your game, your call. Cheat-code records for GTA VI on Xbox.","vice_city_06"],["guides/cheats/pc","PC cheats","guides/cheats","Patience is part of the game. A console announcement alone establishes neither PC availability nor cheat support.","vice_city_06"],["guides/clothing","Clothing & appearance","guides","Dress for the occasion. The wardrobe: outfits, appearance and documented availability.","lucia_caminos_01"],["guides/faq","Frequently asked questions","guides","Good questions deserve straight answers. The essentials about platforms, sources, bookmarks and atlas progress.","leonida_keys_01"],["mechanics","Gameplay mechanics","guides","Learn the rules of the road. How Leonida works, according to documented gameplay systems.","garage-preview"],["mechanics/wanted","Police & wanted system","mechanics","Some attention you do not want. Police behavior and the wanted system, backed by source references.","story-preview"],["mechanics/combat","Combat","mechanics","When words fail. Combat systems and equipment on record.","weapon-556"],["mechanics/driving","Driving","mechanics","Keep your eyes on the road. How driving and handling work, according to the sources.","vice_city_24"],["universe","Life in Leonida",null,"Life goes on after sunset. Tune in to the broadcasts, nightlife and fictional brands of Leonida.","vice_city_06"],["radio","Radio stations","universe","Bad decisions. Good music. Stations from community listings. Trailer tracks do not establish station playlists.","vice_city_06"],["television","Television","universe","Stay tuned. The programs and broadcasts on record.","vice_city_09"],["nightlife","Clubs & nightlife","universe","The city has a second shift. Leonida after dark: nightlife images and venue references.","vice_city_06"],["brands","Fictional brands","universe","Everything has a price tag. The fictional businesses and brands visible in GTA VI material.","vice_city_24"],["news","News & features",null,"Word gets around. The latest word: announcements and fan editorials, clearly sourced.","news-preview"],["news/announcements","Official announcements","news","Straight from the source. The announcements on record, linked to their original sources.","rs-trailer2"],["news/updates","Game updates","news","Things change around here. Published game updates and patch notes.","vice_city_11"],["news/features","Features & analysis","news","There is always more to the story. A closer look at public GTA VI material, from an independent fan perspective.","leonida_keys_01"],["media","Media",null,"Paradise, caught in the act. Leonida in frame: screenshots, trailers and promotional artwork.","rs-media"],["screenshots","Screenshots","media","A closer look at the good life. The official GTA VI frames published by Rockstar Games.","rs-screens"],["videos","Videos & trailers","media","The big picture. Watch Rockstar\u2019s official trailers through their YouTube sources.","rs-trailer2"],["artwork","Artwork","media","Paradise on paper. The official promotional art of GTA VI.","rs-poster-2"],["wallpapers","Wallpapers","media","Take a little Leonida home. Original available images to download, without artificial 4K upscales.","rs-poster-2"],["covers","Covers & key art","media","First impressions count. Promotional key art, not confirmed retail packaging.","rs-poster-2"],["game","Game information",null,"Get the facts straight. The facts on record: platforms, development and release information.","jason_and_lucia_01"],["game/prices","Global price index","game","The price of admission. Historical storefront prices by platform and country, credited to Leonida Lab.","rs-poster-2"],["game/editions","Editions & platforms","game","Take your pick, when the facts are in. Editions and platforms documented in official announcements.","rs-poster-2"],["online","GTA VI Online","game","Some things are better with company. GTA VI multiplayer references, without importing assumptions from other GTA games.","vice_city_11"],["game/development","Development","game","Behind the scenes. What Rockstar has publicly shared about GTA VI development.","rs-trailer2"],["game/reception","Reception","game","Everybody has an opinion. Published reviews and scores, linked to their sources.","vice_city_09"],["game/trivia","Trivia & discoveries","game","Look a little closer. Details spotted in official material, distinct from confirmed gameplay mechanics.","vice_city_05"],["about","About Vice Atlas","game","An atlas with a point of view. Behind the atlas: an independent GTA VI fan guide, its sources, credits and local storage.","leonida_keys_01"]].map(([e,a,t,o,n])=>({id:e,title:a,parent:t,description:o,image:ho(n),path:`/${e}`,kind:"Section",source:bo})),ko=Object.fromEntries(xo.map(e=>[e.id,e])),So=e=>xo.filter(a=>a.parent===e),Lo=xo.filter(e=>!e.parent),Ao=e=>[e,...So(e).flatMap(e=>Ao(e.id))],Do=e=>null!==e&&void 0!==e&&e.includes("gtabase")?"GTABase \xb7 community reference":null!==e&&void 0!==e&&e.includes("gtatown")?"GTA Town \xb7 community reference":null!==e&&void 0!==e&&e.includes("gta6ops.com")?"GTA6Ops \xb7 community reference":null!==e&&void 0!==e&&e.includes("powerpyx.com")?"PowerPyx \xb7 community reference":null!==e&&void 0!==e&&e.includes("gta6.university")?"GTA6 University \xb7 community reference":null!==e&&void 0!==e&&e.includes("gta6wiki.eu")?"GTA6Wiki \xb7 community reference":null!==e&&void 0!==e&&e.includes("gta6tracker.org")?"GTA6Tracker \xb7 community reference":null!==e&&void 0!==e&&e.includes("rockstargames.com")?"Rockstar Games \xb7 official":null!==e&&void 0!==e&&e.includes("gta6data.com")?"GTA6DATA \xb7 community reference":null!==e&&void 0!==e&&e.includes("gameta.gg")?"Gameta \xb7 community reference":null!==e&&void 0!==e&&e.includes("gta6heists.com")?"GTA6Heists \xb7 community reference":null!==e&&void 0!==e&&e.includes("gta6walk.com")?"GTA6Walk \xb7 community reference":null!==e&&void 0!==e&&e.includes("gta.exputer.com")?"eXputer \xb7 community reference":null!==e&&void 0!==e&&e.includes("leonidex.com")?"Leonidex \xb7 community reference":"External reference",Bo={annabelle:{source:"https://gta6data.com/gta-6-character-annabelle/",contextImage:"https://gta6data.com/wp-content/uploads/2026/11/g6d-cast-footage-annabelle-scene.jpg",contextCaption:"Halifax addresses Annabelle at the motel; this scene is not an isolated portrait.",description:"A client of Benedict Halifax encountered during the motel sequence. Halifax attributes the contents of a bag to a gift from her; this is his account, not an independently established fact."},"officer-jackson":{source:"https://gta6data.com/gta-6-character-officer-jackson/",contextImage:"https://gta6data.com/wp-content/uploads/2026/11/g6d-cast-footage-officer-jackson-scene.jpg",contextCaption:"Galeki introduces Jackson and Gutierrez at the visitor centre; the shot does not isolate Jackson.",description:"One of the officers named by Sergeant Galeki during Tourist Trap at the Grassrivers Visitor Center."},bert:{source:"https://gta6data.com/gta-6-character-bert/",contextImage:"https://gta6data.com/wp-content/uploads/2026/11/g6d-cast-footage-bert-scene.jpg",contextCaption:"Bert is addressed during a neighborhood parking dispute.",description:"Mandy's neighbor complains about frequent short-term renters and parking problems in Key Lento."},alan:{source:"https://gta6data.com/gta-6-character-alan-coleman/",contextImage:"https://gta6data.com/wp-content/uploads/2026/11/gta6-find-janet-alan-broken-car.jpg",contextCaption:"Alan beside his broken-down car on Grouper Lane.",description:"Alan Coleman asks Jason for help finding Janet after his vehicle breaks down in Key Lento. The search leads to La Medusa and a later conversation with Janet."},janet:{source:"https://gta6data.com/gta-6-character-janet/",contextImage:"https://gta6data.com/wp-content/uploads/2026/11/gta6-find-janet-pool-terrace.jpg",contextCaption:"The pool terrace where Janet is located; not an isolated portrait.",description:"Alan's wife is the subject of the Find Janet encounter. The recorded route shows her at a party, where she speaks with Alan and chooses to stay."},fabi:{source:"https://gta6data.com/gta-6-character-fabi/",contextImage:"https://gta6data.com/wp-content/uploads/2026/11/g6d-cast-footage-fabi-scene.jpg",contextCaption:"Driving sequence in which Fabi is addressed; identity within the image is not isolated.",description:"A person addressed during the evening drive in Day Release, when the cars approach the tunnel."},"greg-island-dreams":{source:"https://gta6data.com/gta-6-character-greg/",contextImage:"https://gta6data.com/wp-content/uploads/2026/11/g6d-cast-footage-greg-scene.jpg",contextCaption:"Andy talks to Greg at the pier; the image documents the encounter.",description:"A pier contact whom Andy informs that she is taking a short break during Island Dreams."},"phillip-yacht":{source:"https://gta6data.com/gta-6-character-phillip/",contextImage:"https://gta6data.com/wp-content/uploads/2026/11/g6d-cast-footage-phillip-scene.jpg",contextCaption:"Yacht deck sequence after Phillip is called.",description:"A person called by name on the yacht during Day Release, in a conversation concerning clothing."},"liza-safe-word":{source:"https://gta6data.com/gta-6-character-liza/",contextImage:"https://gta6data.com/wp-content/uploads/2026/11/g6d-cast-scene-liza.jpg",contextCaption:"Poolside filming sequence at Peacock Estates; not a verified isolated portrait.",description:"Directs the poolside filming activity during Safe Word before Jason proceeds inside the mansion."},monty:{source:"https://gta6data.com/gta-6-character-monty/",contextImage:"https://gta6data.com/wp-content/uploads/2026/11/g6d-cast-scene-monty.jpg",contextCaption:"Photo encounter with Monty at the storage yard.",description:"A storage-yard contact encountered in The Missing Link. The recorded sequence includes a photograph with Andrea and the player."},"damien-poundamos":{source:"https://gta6data.com/gta-6-character-damien-poundamos/",contextImage:"https://gta6data.com/wp-content/uploads/2026/11/g6d-cast-footage-damien-poundamos-scene.jpg",contextCaption:"Judd's message naming Damien; this screenshot is textual evidence, not a likeness.",description:"Named as Lucia's co-star by Judd during the Amateur Hour pickup. Cisco also recognizes the name."},"media-time-jackers-jack-hoffman-chronos-jared-canfield":{source:"https://gta6data.com/gta-6-character-captain-jack-hoffman/",contextImage:"https://gta6data.com/wp-content/uploads/2026/11/g6d-cast-footage-captain-jack-hoffman-scene.jpg",contextCaption:"In-game radio interface; no face is shown.",description:"Captain Jack Hoffman identifies himself over the radio and requests support in Time Jackers Rewind. Rockstar credits Hoffman and Chronos together to Jared Canfield."},"marissa-tercio":{source:"https://six.mics.dev/extras/tv-news",description:"A Weazel News presenter who appears in broadcasts about crime, public policy and the Grassrivers.",spoiler:!0},"jerry-turner":{source:"https://six.mics.dev/extras/tv-news",description:"A Weazel News presenter who reports on Leonida's crime stories, robberies and the search for the protagonists.",spoiler:!0},"media-tv-news-hannah-garcia-isabel-arraiza":{source:"https://six.mics.dev/extras/tv-news",description:"Appears in Weazel News coverage of environmental activism alongside Marissa Tercio.",spoiler:!0},"media-tv-news-mason-hughes-jake-daehler":{source:"https://six.mics.dev/extras/tv-news",description:"Appears in Weazel News hospital and port-related reports.",spoiler:!0},"media-tv-news-dave-ling-ted-guzman":{source:"https://six.mics.dev/extras/tv-news",description:"Weazel News reporter who interviews Captain M\xe9ndez and appears in a report about a frightening encounter.",spoiler:!0},"media-tv-news-liliana-saavedra-ana-isabel-dow":{source:"https://six.mics.dev/extras/tv-news",description:"Appears alongside Alejandro Modero in Megamundo News coverage of the network's new American headquarters.",spoiler:!0},"media-tv-news-sebastian-nunez-andres-montejo":{source:"https://six.mics.dev/extras/tv-news",description:"Appears alongside Alejandro Modero in a Megamundo News report.",spoiler:!0},"media-tv-news-julia-pena-gisela-chipe":{source:"https://six.mics.dev/extras/tv-news",description:"Appears alongside Alejandro Modero in Megamundo News coverage of an upcoming historic event.",spoiler:!0},"media-tv-news-alejandro-modero-luis-carlos-de-la-lombana":{source:"https://gta6data.com/gta-6-character-alejandro-modero/",description:"Megamundo news presenter who closes the broadcast about the network's new offices."},"media-el-destino-extiende-sus-alas-marisol-camila-moreno":{source:"https://gta6data.com/gta-6-character-marisol-destino/",description:"A character named Marisol Destino in the period serial El Destino Extiende Sus Alas."},"media-el-destino-extiende-sus-alas-jose-luis-j-eddie-martinez":{source:"https://gta6data.com/gta-6-character-jose-luis-de-ramos/",description:"A character identified as Jos\xe9 Luis de Ramos in the period serial El Destino Extiende Sus Alas."},"media-el-destino-extiende-sus-alas-don-antonio-tony-chiroldes":{source:"https://gta6data.com/gta-6-character-don-antonio-de-ramos/",description:"A character identified as Don Antonio de Ramos in the period serial El Destino Extiende Sus Alas."},"media-el-destino-extiende-sus-alas-dona-lucrecia-karina-arroyave":{source:"https://gta6data.com/gta-6-character-dona-lucrecia-de-ramos/",description:"A character identified as Do\xf1a Lucrecia de Ramos in the period serial El Destino Extiende Sus Alas."},"media-maccas-magical-smoke-boat-tour-officer-buttski-henry-zebrowski":{source:"https://gta6data.com/gta-6-character-officer-buttsk/",description:"Uniformed cartoon character appearing in Macca's Magical Smoke Boat Tour on Weazel."},"media-right-wing-right-wing-dave-willis":{source:"https://gta6data.com/gta-6-character-right-wing/",description:"Winged hero in the animated television programme Right Wing."},"media-right-wing-the-educated-woman-marianne-mckenzie":{source:"https://gta6data.com/gta-6-character-the-educated-woman/",description:"An animated adversary in Right Wing."},"media-the-doctor-will-see-you-now-dr-ray-deangelo-harris-j-b-smoove":{source:"https://gta6data.com/gta-6-character-dr-ray-de-angelo-harris/",description:"Presenter of the in-world Weazel programme The Doctor Will See You Now."},"media-where-does-it-hurt-yarelis-camila-moreno":{source:"https://gta6data.com/gta-6-character-yarelis/",description:"Hospital worker named Yarelis in the Megamundo serial Where Does It Hurt?."},"media-where-does-it-hurt-dr-domingo-dominguez-tony-chiroldes":{source:"https://gta6data.com/gta-6-character-dr-domingo-dominguez/",description:"Doctor who introduces himself in the Megamundo hospital serial Where Does It Hurt?."},"media-where-does-it-hurt-andreina-karina-arroyave":{source:"https://gta6data.com/gta-6-character-andreina/",description:"A credited character in the Megamundo hospital serial Where Does It Hurt?."},"media-afrobank-fm-burna-burna-boy":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-afrobank-fm-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"AFROBANK FM station artwork, not a portrait of Burna.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-1",description:"Burna Boy is credited on AFROBANK FM as Burna. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-afrobank-fm-palmsy-jay-donaldson":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-afrobank-fm-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"AFROBANK FM station artwork, not a portrait of Palmsy.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-2",description:"Jay Donaldson is credited on AFROBANK FM as Palmsy. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-back-country-radio-mw-morgan-wallen":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-back-country-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"BACK COUNTRY RADIO station artwork, not a portrait of MW.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-3",description:"Morgan Wallen is credited on BACK COUNTRY RADIO as MW. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-back-country-radio-delta-dawne-lana-del-rey":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-back-country-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"BACK COUNTRY RADIO station artwork, not a portrait of Delta Dawne.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-4",description:"Lana Del Rey is credited on BACK COUNTRY RADIO as Delta Dawne. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-back-country-radio-mud-dog-mike-jeremy-dufrene":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-back-country-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"BACK COUNTRY RADIO station artwork, not a portrait of Mud Dog Mike.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-5",description:"Jeremy Dufrene is credited on BACK COUNTRY RADIO as Mud Dog Mike. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-cocoteo-fm-el-martillo-bad-bunny":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-cocoteo-fm-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"COCOTEO FM station artwork, not a portrait of El Martillo.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-8",description:"Bad Bunny is credited on COCOTEO FM as El Martillo. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-cocoteo-fm-la-gata-rainao":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-cocoteo-fm-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"COCOTEO FM station artwork, not a portrait of La Gata.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-9",description:"RaiNao is credited on COCOTEO FM as La Gata. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-dirty-south-classics-trina-trina":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-dirty-south-classics-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"DIRTY SOUTH CLASSICS station artwork, not a portrait of Trina.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-10",description:"Trina is credited on DIRTY SOUTH CLASSICS as Herself. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-dirty-south-classics-trick-daddy-trick-daddy":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-dirty-south-classics-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"DIRTY SOUTH CLASSICS station artwork, not a portrait of Trick Daddy.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-11",description:"Trick Daddy is credited on DIRTY SOUTH CLASSICS as Himself. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-flash-fm-robyn-robyn":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-flash-fm-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"FLASH FM station artwork, not a portrait of Robyn.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-14",description:"Robyn is credited on FLASH FM as Herself. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-flash-fm-alex-consani-alex-consani":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-flash-fm-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"FLASH FM station artwork, not a portrait of Alex Consani.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-15",description:"Alex Consani is credited on FLASH FM as Herself. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-the-chamber-106-6-dj-kerry-kerry-king":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-the-chamber-106-6-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"THE CHAMBER 106.6 station artwork, not a portrait of DJ Kerry.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-31",description:"Kerry King is credited on THE CHAMBER 106.6 as DJ Kerry. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-the-chamber-106-6-dj-tom-tom-araya":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-the-chamber-106-6-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"THE CHAMBER 106.6 station artwork, not a portrait of DJ Tom.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-32",description:"Tom Araya is credited on THE CHAMBER 106.6 as DJ Tom. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-the-chamber-106-6-big-fan-brian-brian-posehn":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-the-chamber-106-6-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"THE CHAMBER 106.6 station artwork, not a portrait of Big Fan Brian.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-33",description:"Brian Posehn is credited on THE CHAMBER 106.6 as Big Fan Brian. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},"media-dirty-south-classics-the-tap-in-gucci-mane-gucci-mane":{contextImage:"https://www.gta6everything.com/_next/image?url=%2Fimages%2Fofficial%2Fgta-6-dirty-south-classics-radio-station-art.jpg&w=1920&q=75&dpl=dpl_ArkB9cZ9ehRzWhrgVHNyvgxd7MTW",contextCaption:"DIRTY SOUTH CLASSICS station artwork, not a portrait of Gucci Mane.",contextImageSource:"https://www.gta6everything.com/images",source:"https://gta6ops.com/story/radio-character-profiles/#profile-12",description:"Gucci Mane is credited on DIRTY SOUTH CLASSICS / THE TAP IN as Himself. The credits establish the on-air role, but no personal biography or in-game likeness is established.",creditOnly:!0},zeek:{source:"https://meowdb.com/gta6/npcs/zeek",description:"Encountered in Boobie Time at a parking area beneath an overpass. Zeek reacts to Boobie's customized Emperor and asks about following his example.",mission:"Boobie Time",relations:["boobie-ike"],spoiler:!0},cerise:{source:"https://wikily.gg/gta-6/missions/welcome-to-vice-city",description:"Appears in the celebration conversation with Ali in Welcome to Vice City, discussing the prospect of greater wealth.",mission:"Welcome to Vice City",relations:["ali","boobie-ike","drequan-priest"],spoiler:!0},ali:{source:"https://wikily.gg/gta-6/missions/welcome-to-vice-city",description:"Participates in the conversation with Cerise in Welcome to Vice City and calls for the group to celebrate.",mission:"Welcome to Vice City",relations:["cerise","boobie-ike"],spoiler:!0},marcel:{source:"https://wikily.gg/gta-6/missions/dealer-s-choice",description:"Participates in a disputed exchange of cash and a backpack during Dealer's Choice, urging the others to leave.",mission:"Dealer's Choice",relations:[],spoiler:!0},marco:{source:"https://wikily.gg/gta-6/missions/headliners",description:"A participant in the Headliners nightclub sequence, commenting on the music, drinks and atmosphere.",mission:"Headliners",relations:[],spoiler:!0},"bianca-celestino":{source:"https://wikily.gg/gta-6/missions/party-hard",description:"Appears in Party Hard and asks the security personnel for help during the disruption at the event.",mission:"Party Hard",relations:["andres-de-leon","cesar-navarro"],spoiler:!0},nayib:{source:"https://wikily.gg/gta-6/missions/adventures-in-babysitting",description:"Meets Andr\xe9s during Adventures in Babysitting and explains he came downstairs for drinks; the dialogue establishes that they know one another.",mission:"Adventures in Babysitting",relations:["andres-de-leon"],spoiler:!0},erjon:{source:"https://wikily.gg/gta-6/missions/starting-from-zero",description:"Appears during Starting From Zero and repeatedly tells the protagonists to follow Giorgio.",mission:"Starting From Zero",relations:["giorgio-gallo"],spoiler:!0},abel:{source:"https://wikily.gg/gta-6/missions/bricked-up",description:"Appears in Bricked Up, speaking to the protagonists about the building and warning them about the situation inside.",mission:"Bricked Up",relations:[],spoiler:!0},jasir:{source:"https://wikily.gg/gta-6/missions/the-end-of-the-road",description:"A named speaker in the recorded dialogue of The End of the Road. The available transcript establishes his participation, but not a full personal history.",mission:"The End of the Road",relations:[],spoiler:!0},debora:{source:"https://wikily.gg/gta-6/missions/day-release",description:"A partygoer addresses someone named Debora during Day Release. The transcript does not independently establish that this is the role credited to Riley Noland.",mission:"Day Release",qualified:!0,spoiler:!0},"wade-howard":{source:"https://gameta.gg/gta6/characters/wade-howard/",description:"A racing enthusiast who helps run an informal league at Gellhorn Raceway. Beau introduces him to Lucia after her supervised lap, and Wade adds her to the Keep it PG group chat.",relations:["beau-raceway","lucia-caminos"],spoiler:!0},"beau-raceway":{source:"https://gameta.gg/gta6/characters/beau/",description:"Track marshal at Gellhorn Raceway. He supervises Lucia's first lap, assesses her driving and introduces her to Wade Howard in the pits.",relations:["wade-howard","lucia-caminos"],spoiler:!0},"dante-fresh":{source:"https://gameta.gg/gta6/characters/dante-fresh/",description:"Founder of Mo' Money Music LLC and an established figure in the Vice City music business. Allegations against him lead to house arrest; his relationship with Royce Jones becomes important to the missions Watch It and Fresh Evidence.",relations:["royce-jones","dwnply","drequan-priest"],spoiler:!0},"cecilia-richardson-real":{source:"https://gameta.gg/gta6/characters/cecilia-richardson/",description:"Founder and CEO of Cellerica, a wellness sales organisation founded in 1996 according to its in-game news coverage. Its sales hierarchy, promotional videos and the physical founder become important to Andy and Lucia's storyline.",relations:["andy","lucia-caminos","cecilia-richardson-fake"],spoiler:!0},"cecilia-richardson-fake":{source:"https://gameta.gg/gta6/characters/cecilia-richardson/",description:"Cellerica presents an idealised version of its founder through promotional media, contrasting with her physical appearance. Rockstar lists a separate Fake Cecilia Richardson credit, but the available profile does not independently attribute every video appearance to that credit.",relations:["cecilia-richardson-real"],spoiler:!0},percy:{source:"https://gameta.gg/gta6/characters/dante-fresh/",description:"The story guide identifies Percy as Dante Fresh's Siberian tiger. Whether this animal is the same Percy as the role credited to Anthony Robert Grasso is not established.",qualified:!0,spoiler:!0},"dodo-noah":{source:"https://www.gtabase.com/gta-6/characters/noah",description:"A member of Dodos Rising who leads a protest near the Vice City airport and recruits the protagonists for Bring Out the Chimp.",mission:"Bring Out the Chimp",relations:["dodo-jeremy"],spoiler:!0},"dodo-tyler":{source:"https://www.gtabase.com/gta-6/characters/tyler",description:"An anti-fracking activist in Dodos Rising. He and Steve enlist the protagonists in the Watson Bay mission Twin Flames.",mission:"Twin Flames",relations:["dodo-steve"],spoiler:!0},"dodo-steve":{source:"https://www.gtabase.com/gta-6/characters/tyler",description:"A fellow activist and friend of Tyler involved in the Dodos Rising mission Twin Flames at Watson Bay.",mission:"Twin Flames",relations:["dodo-tyler"],spoiler:!0},"mother-dodo-yvonne":{source:"https://www.gtabase.com/gta-6/characters/yvonne",description:"Known as Mother Dodo, Yvonne leads Dodos Rising. Lucia meets her in the group's concluding mission, Dodo, Rise!",mission:"Dodo, Rise!",relations:["dodo-noah","dodo-tyler","dodo-steve"],spoiler:!0},"kodak-black":{source:"https://gta.wiki/w/Kodak_Black",description:"The rapper appears as himself in GTA VI and is depicted in an official Vice City promotional screenshot.",portrait:{url:"https://gta.wiki/images/thumb/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity25.jpg/300px-OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity25.jpg?85626",page:"https://gta.wiki/w/Kodak_Black",source:"GTA Wiki / Rockstar Games"}},sam:{source:"https://gta.wiki/w/Sam_(Mud_Club)",description:"Sam is a longtime member of Billy's off-road riding group at the Thrillbilly Mud Club in Ambrosia. The wiki identifies her riding a Sanchez but does not independently confirm the voice performer.",portrait:{url:"https://gta.wiki/images/thumb/SamMudClub-GTAVI-Portrait.png/300px-SamMudClub-GTAVI-Portrait.png?7a85a",page:"https://gta.wiki/w/Sam_(Mud_Club)",source:"GTA Wiki"},relations:["billy","ej"],spoiler:!0},"ms-sharleen":{source:"https://gta.wiki/w/Ms._Sharleen",description:"A resident of Calypso Avenue, Key Lento, who holds a yard sale where Jason can buy clothing and meet her pet alligator Gary.",portrait:{url:"https://gta.wiki/images/thumb/MsSharleen-GTAVI-Portrait.png/300px-MsSharleen-GTAVI-Portrait.png?74e33",page:"https://gta.wiki/w/Ms._Sharleen",source:"GTA Wiki"},relations:["gary-alligator","jason-duval"],spoiler:!0},kai:{source:"https://gta.wiki/w/Kai_(GTA_VI)",description:"GTA Wiki documents a character called Kai with a possible connection to Billy. Its profile does not establish that the character is the role performed by Michael Giese.",qualified:!0,spoiler:!0},"joe-laurino":{source:"https://gta.fandom.com/wiki/Joe_Laurino",description:"Fandom tentatively identifies Joe Laurino as a parole officer in Down to Earth, but its incomplete page also incorrectly labels him as a GTA IV character. The identity and appearance need independent verification.",qualified:!0,spoiler:!0},"mitico-mario":{source:"https://gta.fandom.com/wiki/Mitico_Mario",description:"A dancer at Delights in Port Gellhorn, encountered during the Chapter 2 club sequence. Fandom identifies Mario as the role played by Bad Bunny, who also performs as El Martillo on Cocoteo FM.",portrait:{url:"https://static.wikia.nocookie.net/gtawiki/images/9/95/Mario_GTA6.png/revision/latest/smart/width/40/height/30?cb=20261127111022",page:"https://gta.fandom.com/wiki/Category:Characters_in_GTA_VI",source:"GTA Fandom (directory thumbnail)"},relations:["vicki","mario","media-cocoteo-fm-el-martillo-bad-bunny"],spoiler:!0},mario:{source:"https://gta.fandom.com/wiki/Mitico_Mario",description:"The Delights dancer described by Fandom as Mitico Mario. This gameplay encounter is retained as a legacy cross-reference rather than claiming a separate person.",relations:["mitico-mario"],spoiler:!0},"the-pretender":{source:"https://gta.fandom.com/wiki/The_Pretender",description:"A mysterious GTA VI character. Fandom records the name The Pretender; alternative names circulated by players are not established.",portrait:{url:"https://static.wikia.nocookie.net/gtawiki/images/c/cb/Pretender.png/revision/latest/smart/width/40/height/30?cb=20261127090221",page:"https://gta.fandom.com/wiki/Category:Characters_in_GTA_VI",source:"GTA Fandom (directory thumbnail)"},spoiler:!0},"jimmy-de-santa":{source:"https://www.gtabase.com/gta-6/articles/all-returning-characters-from-past-games-in-gta-6",description:"Returning GTA V character who appears at the club in Headliners; the protagonists may decide whether to admit him. His brief appearance is reported by GTABase.",portrait:{url:"https://www.gtabase.com/images/gta-6/articles/gta-6-jimmy-de-santa-headliners.jpg",page:"https://www.gtabase.com/gta-6/articles/all-returning-characters-from-past-games-in-gta-6",source:"GTABase"},mission:"Headliners",spoiler:!0},"media-final-act-wade-herbert-matthew-maher":{source:"https://www.gtabase.com/gta-6/articles/all-returning-characters-from-past-games-in-gta-6",description:"The returning GTA V character Wade Hebert is interviewed on Final Act. He discusses his conviction and refers to former associates. The official GTA VI credit spells the surname Herbert.",spoiler:!0},"media-final-act-dave-norton-julian-gamble":{source:"https://www.gtabase.com/gta-6/articles/all-returning-characters-from-past-games-in-gta-6",description:"A returning GTA V FIB agent heard on Final Act, discussing Michael De Santa and other people from his past.",spoiler:!0},"media-final-act-solomon-richards-michael-quinlan":{source:"https://www.gtabase.com/gta-6/articles/all-returning-characters-from-past-games-in-gta-6",description:"The film producer from GTA V returns as a guest on the in-game Final Act podcast.",spoiler:!0},valentina:{source:"https://www.gtabase.com/gta-6/articles/all-returning-characters-from-past-games-in-gta-6",description:"A returning GTA Online character who connects the protagonists with work involving Andr\xe9s de Le\xf3n in GTA VI.",relations:["andres-de-leon"],spoiler:!0},"media-maccas-magical-smoke-boat-tour-macca-darius-marquis-johnson":{source:"https://gta.wiki/w/Macca_the_Gator",description:"Macca is the titular alligator character of Macca & Friends and appears in Macca's Magical Smoke Boat Tour.",portrait:{url:"https://gta.wiki/images/thumb/Macca%26Friends-MaccaTheGator-GTAVI-CE-Artwork.png/300px-Macca%26Friends-MaccaTheGator-GTAVI-CE-Artwork.png?7fef3",page:"https://gta.wiki/w/Macca_the_Gator",source:"GTA Wiki / Rockstar Games official artwork"}},"media-maccas-magical-smoke-boat-tour-chunkee-kyle-chapple":{source:"https://gta.wiki/w/Chunkee_the_Manatee",description:"Chunkee is the manatee character in Macca & Friends and the credited television special.",portrait:{url:"https://gta.wiki/images/thumb/Macca%26Friends-ChunkeeTheManatee-GTAVI-CE-Artwork.png/300px-Macca%26Friends-ChunkeeTheManatee-GTAVI-CE-Artwork.png?4e4d3",page:"https://gta.wiki/w/Chunkee_the_Manatee",source:"GTA Wiki / Rockstar Games official artwork"}},"media-maccas-magical-smoke-boat-tour-pinche-felipe-di-poi":{source:"https://gta.wiki/w/Pinche_the_Crab",description:"Pinche is the crab character in Macca & Friends, identified in GTA Wiki as a landlord.",portrait:{url:"https://gta.wiki/images/thumb/Macca%26Friends-PincheTheCrab-GTAVI-CE-Artwork.png/300px-Macca%26Friends-PincheTheCrab-GTAVI-CE-Artwork.png?13718",page:"https://gta.wiki/w/Pinche_the_Crab",source:"GTA Wiki / Rockstar Games official artwork"}},"media-maccas-magical-smoke-boat-tour-fede-jason-kaye":{source:"https://gta.wiki/w/Fede_the_Flamingo",description:"Fede is the flamingo character in Macca & Friends and is voiced by Jason Kaye.",portrait:{url:"https://gta.wiki/images/thumb/Macca%26Friends-FedeTheFlamingo-GTAVI-CE-Artwork.png/300px-Macca%26Friends-FedeTheFlamingo-GTAVI-CE-Artwork.png?95759",page:"https://gta.wiki/w/Fede_the_Flamingo",source:"GTA Wiki / Rockstar Games official artwork"}},"media-maccas-magical-smoke-boat-tour-sunny-t-l-flint":{source:"https://gta.wiki/w/Sunny_(GTA_VI)",description:"Sunny is a character from Macca & Friends, voiced by T.L. Flint.",portrait:{url:"https://gta.wiki/images/thumb/Macca%26Friends-Sunny-GTAVI-CE-Artwork.png/300px-Macca%26Friends-Sunny-GTAVI-CE-Artwork.png?7ae3d",page:"https://gta.wiki/w/Sunny_(GTA_VI)",source:"GTA Wiki / Rockstar Games official artwork"}}},Mo=[{category:"Radio host",program:"AFROBANK FM",role:"Burna",performer:"Burna Boy",id:"media-afrobank-fm-burna-burna-boy",creditedRole:"Burna",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-1"},{category:"Radio host",program:"AFROBANK FM",role:"Palmsy",performer:"Jay Donaldson",id:"media-afrobank-fm-palmsy-jay-donaldson",creditedRole:"Palmsy",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-2"},{category:"Radio host",program:"BACK COUNTRY RADIO",role:"MW",performer:"Morgan Wallen",id:"media-back-country-radio-mw-morgan-wallen",creditedRole:"MW",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-3"},{category:"Radio host",program:"BACK COUNTRY RADIO",role:"Delta Dawne",performer:"Lana Del Rey",id:"media-back-country-radio-delta-dawne-lana-del-rey",creditedRole:"Delta Dawne",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-4"},{category:"Radio host",program:"BACK COUNTRY RADIO",role:"Mud Dog Mike",performer:"Jeremy Dufrene",id:"media-back-country-radio-mud-dog-mike-jeremy-dufrene",creditedRole:"Mud Dog Mike",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-5"},{category:"Radio host",program:"CIRCOLOCO RECORDS RADIO",role:"DJ Seth",performer:"Seth Troxler",id:"media-circoloco-records-radio-dj-seth-seth-troxler",creditedRole:"DJ Seth",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-6"},{category:"Radio host",program:"CIRCOLOCO RECORDS RADIO",role:"DJ Antonio",performer:"Antonio Carbonaro",id:"media-circoloco-records-radio-dj-antonio-antonio-carbonaro",creditedRole:"DJ Antonio",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-7"},{category:"Radio host",program:"COCOTEO FM",role:"El Martillo",performer:"Bad Bunny",id:"media-cocoteo-fm-el-martillo-bad-bunny",creditedRole:"El Martillo",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-8"},{category:"Radio host",program:"COCOTEO FM",role:"La Gata",performer:"RaiNao",id:"media-cocoteo-fm-la-gata-rainao",creditedRole:"La Gata",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-9"},{category:"Radio host",program:"DIRTY SOUTH CLASSICS",role:"Herself",performer:"Trina",id:"media-dirty-south-classics-trina-trina",creditedRole:"Herself",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-10"},{category:"Radio host",program:"DIRTY SOUTH CLASSICS",role:"Himself",performer:"Trick Daddy",id:"media-dirty-south-classics-trick-daddy-trick-daddy",creditedRole:"Himself",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-11"},{category:"Radio host",program:"EMOTION 98.3",role:"Doug Van Dyke",performer:"Doug Stanhope",id:"media-emotion-98-3-doug-van-dyke-doug-stanhope",creditedRole:"Doug Van Dyke",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-13"},{category:"Radio host",program:"FLASH FM",role:"Herself",performer:"Robyn",id:"media-flash-fm-robyn-robyn",creditedRole:"Herself",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-14"},{category:"Radio host",program:"FLASH FM",role:"Herself",performer:"Alex Consani",id:"media-flash-fm-alex-consani-alex-consani",creditedRole:"Herself",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-15"},{category:"Radio host",program:"GLORIANA BLUES RADIO",role:"DJ Buddy",performer:"Buddy Guy",id:"media-gloriana-blues-radio-dj-buddy-buddy-guy",creditedRole:"DJ Buddy",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-16"},{category:"Radio host",program:"GLORIANA BLUES RADIO",role:"DJ Keith",performer:"Keith Richards",id:"media-gloriana-blues-radio-dj-keith-keith-richards",creditedRole:"DJ Keith",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-17"},{category:"Radio host",program:"HONEY FM",role:"Herself",performer:"Chilli",id:"media-honey-fm-chilli-chilli",creditedRole:"Herself",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-18"},{category:"Radio host",program:"HONEY FM",role:"Herself",performer:"T-Boz",id:"media-honey-fm-t-boz-t-boz",creditedRole:"Herself",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-19"},{category:"Radio host",program:"HONEY FM - LIQUID CITY",role:"Liquid Wilson",performer:"Craig Robinson",id:"media-honey-fm-liquid-city-liquid-wilson-craig-robinson",creditedRole:"Liquid Wilson",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-20"},{category:"Radio host",program:"KALEIDOSCOPE FM",role:"DJ Dicky",performer:"Jeremy Irons",id:"media-kaleidoscope-fm-dj-dicky-jeremy-irons",creditedRole:"DJ Dicky",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-21"},{category:"Radio host",program:"LEONIDA JAZZ RADIO",role:"DJ Randy",performer:"Randy Brecker",id:"media-leonida-jazz-radio-dj-randy-randy-brecker",creditedRole:"DJ Randy",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-22"},{category:"Radio host",program:"LEONIDA JAZZ RADIO",role:"DJ Stanley",performer:"Stanley Clarke",id:"media-leonida-jazz-radio-dj-stanley-stanley-clarke",creditedRole:"DJ Stanley",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-23"},{category:"Radio host",program:"RADIO LA OLA",role:"Emilio",performer:"Emilio Estefan",id:"media-radio-la-ola-emilio-emilio-estefan",creditedRole:"Emilio",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-25"},{category:"Radio host",program:"RADIO LA OLA",role:"Gloria",performer:"Gloria Estefan",id:"media-radio-la-ola-gloria-gloria-estefan",creditedRole:"Gloria",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-26"},{category:"Radio host",program:"RADIO ON-U",role:"Himself",performer:"Adrian Sherwood",id:"media-radio-on-u-adrian-sherwood-adrian-sherwood",creditedRole:"Himself",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-27"},{category:"Radio host",program:"STOCKYARD FM",role:"Harrison",performer:"The Dare",id:"media-stockyard-fm-harrison-the-dare",creditedRole:"Harrison",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-28"},{category:"Radio host",program:"STOCKYARD FM",role:"Victoria",performer:"PinkPantheress",id:"media-stockyard-fm-victoria-pinkpantheress",creditedRole:"Victoria",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-29"},{category:"Radio host",program:"SYMPHONY FM",role:"Yuja",performer:"Yuja Wang",id:"media-symphony-fm-yuja-yuja-wang",creditedRole:"Yuja",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-30"},{category:"Radio host",program:"THE CHAMBER 106.6",role:"DJ Kerry",performer:"Kerry King",id:"media-the-chamber-106-6-dj-kerry-kerry-king",creditedRole:"DJ Kerry",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-31"},{category:"Radio host",program:"THE CHAMBER 106.6",role:"DJ Tom",performer:"Tom Araya",id:"media-the-chamber-106-6-dj-tom-tom-araya",creditedRole:"DJ Tom",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-32"},{category:"Radio host",program:"THE CHAMBER 106.6",role:"Big Fan Brian",performer:"Brian Posehn",id:"media-the-chamber-106-6-big-fan-brian-brian-posehn",creditedRole:"Big Fan Brian",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-33"},{category:"Radio host",program:"THE VAULT RADIO",role:"Himself",performer:"DJ Pretzel",existingId:"dj-pretzel",creditedRole:"Himself",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-34"},{category:"Radio host",program:"VICE CITY RAP RADIO",role:"DJ JT",performer:"JT",id:"media-vice-city-rap-radio-dj-jt-jt",creditedRole:"DJ JT",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-35"},{category:"Radio host",program:"VICE CITY RAP RADIO",role:"DJ Stevie",performer:"DJ Stevie J",existingId:"stevie-j",creditedRole:"DJ Stevie",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-36"},{category:"Radio host",program:"VICE CITY FM",role:"DJ Al",performer:'"Weird Al" Yankovic',id:"media-vice-city-fm-dj-al-weird-al-yankovic",creditedRole:"DJ Al",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-39"},{category:"Radio host",program:"VICE CITY FM",role:"Madame Brigitte",performer:"Brigitte Nielsen",id:"media-vice-city-fm-madame-brigitte-brigitte-nielsen",creditedRole:"Madame Brigitte",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-40"},{category:"Radio host",program:"V-ROCK",role:"The Buck",performer:"Lindsey Buckingham",id:"media-v-rock-the-buck-lindsey-buckingham",creditedRole:"The Buck",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-41"},{category:"Radio host",program:"V-ROCK",role:"Skipper McD",performer:"Michael McDonald",id:"media-v-rock-skipper-mcd-michael-mcdonald",creditedRole:"Skipper McD",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-42"},{category:"Radio host",program:"WORLDWIDE FM",role:"Himself",performer:"Gilles Peterson",id:"media-worldwide-fm-gilles-peterson-gilles-peterson",creditedRole:"Himself",profileUrl:"https://gta6ops.com/story/radio-character-profiles/#profile-43"},{category:"Talk radio",program:"ASK DR. NITA",role:"Dr. Nita",performer:"Anitta",id:"media-ask-dr-nita-dr-nita-anitta",creditedRole:"Dr. Nita",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-1"},{category:"Talk radio",program:"ASK DR. NITA",role:"Sergio",performer:"Alex Rich",id:"media-ask-dr-nita-sergio-alex-rich",creditedRole:"Sergio",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-2"},{category:"Talk radio",program:"ASK DR. NITA",role:"Bobby",performer:"Barbie Ferreira",id:"media-ask-dr-nita-bobby-barbie-ferreira",creditedRole:"Bobby",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-3"},{category:"Talk radio",program:"ASK DR. NITA",role:"Christine",performer:"Dione Kuraoaka",id:"media-ask-dr-nita-christine-dione-kuraoaka",creditedRole:"Christine",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-4"},{category:"Talk radio",program:"ASK DR. NITA",role:"Madeline",performer:"Jenny Lorenzo",id:"media-ask-dr-nita-madeline-maria-jenny-lorenzo",creditedRole:"Madeline / Maria",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-5"},{category:"Talk radio",program:"ASK DR. NITA",role:"Maria",performer:"Jenny Lorenzo",id:"media-ask-dr-nita-madeline-maria-jenny-lorenzo--maria",creditedRole:"Madeline / Maria",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-6"},{category:"Talk radio",program:"ASK DR. NITA",role:"Tom Spaulding",performer:"Jeremy Levick",id:"media-ask-dr-nita-tom-spaulding-jeremy-levick",creditedRole:"Tom Spaulding",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-7"},{category:"Talk radio",program:"ASK DR. NITA",role:"Fabricio",performer:"Jesus E. Martinez",id:"media-ask-dr-nita-fabricio-jesus-e-martinez",creditedRole:"Fabricio",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-8"},{category:"Talk radio",program:"ASK DR. NITA",role:"Jazmin Shrimpo",performer:"Joanna Hausmann",id:"media-ask-dr-nita-jazmin-shrimpo-joanna-hausmann",creditedRole:"Jazmin Shrimpo",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-9"},{category:"Talk radio",program:"ASK DR. NITA",role:"Dr. Rafferty",performer:"Johnathan Fernandez",id:"media-ask-dr-nita-dr-rafferty-johnathan-fernandez",creditedRole:"Dr. Rafferty",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-10"},{category:"Talk radio",program:"ASK DR. NITA",role:"Vanessa from Tequesta",performer:"Laura Di Lorenzo",id:"media-ask-dr-nita-vanessa-from-tequesta-laura-di-lorenzo",creditedRole:"Vanessa from Tequesta",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-11"},{category:"Talk radio",program:"ASK DR. NITA",role:"Destiny Stallion",performer:"Liza Treyger",id:"media-ask-dr-nita-destiny-stallion-liza-treyger",creditedRole:"Destiny Stallion",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-12"},{category:"Talk radio",program:"ASK DR. NITA",role:"Isabella",performer:"Natalie Ortega",id:"media-ask-dr-nita-isabella-natalie-ortega",creditedRole:"Isabella",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-13"},{category:"Talk radio",program:"ASK DR. NITA",role:"Kendra St. James",performer:"Zainab Johnson",id:"media-ask-dr-nita-kendra-st-james-zainab-johnson",creditedRole:"Kendra St. James",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-14"},{category:"Talk radio",program:"EL OTRO LADO",role:"Enrique \u201cEl Enigma\u201d Romero",performer:"John Leguizamo",id:"media-el-otro-lado-enrique-el-enigma-romero-john-leguizamo",creditedRole:"Enrique \u201cEl Enigma\u201d Romero",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-15"},{category:"Talk radio",program:"EL OTRO LADO",role:"Billy",performer:"Andrew Knox",id:"media-el-otro-lado-billy-face-ripper-nicolas-andrew-knox",creditedRole:"Billy / Face Ripper / Nicolas",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-16"},{category:"Talk radio",program:"EL OTRO LADO",role:"Face Ripper",performer:"Andrew Knox",id:"media-el-otro-lado-billy-face-ripper-nicolas-andrew-knox--face-ripper",creditedRole:"Billy / Face Ripper / Nicolas",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-17"},{category:"Talk radio",program:"EL OTRO LADO",role:"Nicolas",performer:"Andrew Knox",id:"media-el-otro-lado-billy-face-ripper-nicolas-andrew-knox--nicolas",creditedRole:"Billy / Face Ripper / Nicolas",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-18"},{category:"Talk radio",program:"EL OTRO LADO",role:"Caller 6",performer:"Cooke Maroney",id:"media-el-otro-lado-caller-6-cooke-maroney",creditedRole:"Caller 6",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-19"},{category:"Talk radio",program:"EL OTRO LADO",role:"Daniela",performer:"Darlene Demorizi",id:"media-el-otro-lado-daniela-darlene-demorizi",creditedRole:"Daniela",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-20"},{category:"Talk radio",program:"EL OTRO LADO",role:"Valerie",performer:"Dione Kuraoaka",id:"media-el-otro-lado-valerie-dione-kuraoaka",creditedRole:"Valerie",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-21"},{category:"Talk radio",program:"EL OTRO LADO",role:"Carlos",performer:"Eddie Mujica",id:"media-el-otro-lado-carlos-eddie-mujica",creditedRole:"Carlos",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-22"},{category:"Talk radio",program:"EL OTRO LADO",role:"VO",performer:"Francisco Ramos",id:"media-el-otro-lado-vo-hector-francisco-ramos",creditedRole:"VO / Hector",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-23"},{category:"Talk radio",program:"EL OTRO LADO",role:"Hector",performer:"Francisco Ramos",id:"media-el-otro-lado-vo-hector-francisco-ramos--hector",creditedRole:"VO / Hector",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-24"},{category:"Talk radio",program:"EL OTRO LADO",role:"Caller 1",performer:"Frank Caeti",id:"media-el-otro-lado-caller-1-trent-frank-caeti",creditedRole:"Caller 1 / Trent",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-25"},{category:"Talk radio",program:"EL OTRO LADO",role:"Trent",performer:"Frank Caeti",id:"media-el-otro-lado-caller-1-trent-frank-caeti--trent",creditedRole:"Caller 1 / Trent",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-26"},{category:"Talk radio",program:"EL OTRO LADO",role:"Allen",performer:"Jeremiah Watkins",id:"media-el-otro-lado-allen-jeremiah-watkins",creditedRole:"Allen",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-27"},{category:"Talk radio",program:"EL OTRO LADO",role:"Crazy Caller",performer:"Jesus E. Martinez",id:"media-el-otro-lado-crazy-caller-caller-4-jesus-e-martinez",creditedRole:"Crazy Caller / Caller 4",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-28"},{category:"Talk radio",program:"EL OTRO LADO",role:"Caller 4",performer:"Jesus E. Martinez",id:"media-el-otro-lado-crazy-caller-caller-4-jesus-e-martinez--caller-4",creditedRole:"Crazy Caller / Caller 4",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-29"},{category:"Talk radio",program:"EL OTRO LADO",role:"Officer Witt",performer:"Joanna Hausmann",id:"media-el-otro-lado-officer-witt-joanna-hausmann",creditedRole:"Officer Witt",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-30"},{category:"Talk radio",program:"EL OTRO LADO",role:"Caller 3",performer:"Natalie Ortega",id:"media-el-otro-lado-caller-3-natalie-ortega",creditedRole:"Caller 3",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-31"},{category:"Talk radio",program:"EL OTRO LADO",role:"Veronica",performer:"Raiza Licea",id:"media-el-otro-lado-veronica-raiza-licea",creditedRole:"Veronica",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-32"},{category:"Talk radio",program:"EL OTRO LADO",role:"Lenore",performer:"Stevie Shale",id:"media-el-otro-lado-lenore-stevie-shale",creditedRole:"Lenore",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-33"},{category:"Talk radio",program:"EL OTRO LADO",role:"Caller 2",performer:"Tony Rodriguez",id:"media-el-otro-lado-caller-2-caller-5-tony-rodriguez",creditedRole:"Caller 2 / Caller 5",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-34"},{category:"Talk radio",program:"EL OTRO LADO",role:"Caller 5",performer:"Tony Rodriguez",id:"media-el-otro-lado-caller-2-caller-5-tony-rodriguez--caller-5",creditedRole:"Caller 2 / Caller 5",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-35"},{category:"Talk radio",program:"EL OTRO LADO",role:"Pedro",performer:"Yamil Piedra",id:"media-el-otro-lado-pedro-yamil-piedra",creditedRole:"Pedro",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-36"},{category:"Talk radio",program:"EL OTRO LADO",role:"Tim Cruz",performer:"Yul Vazquez",id:"media-el-otro-lado-tim-cruz-yul-vazquez",creditedRole:"Tim Cruz",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-37"},{category:"Talk radio",program:"SHE GOT ASSETS",role:"Tish",performer:"Janelle James",id:"media-she-got-assets-tish-janelle-james",creditedRole:"Tish",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-38"},{category:"Talk radio",program:"SHE GOT ASSETS",role:"Jonathan Hauser",performer:"Alex Rich",id:"media-she-got-assets-jonathan-hauser-alex-rich",creditedRole:"Jonathan Hauser",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-39"},{category:"Talk radio",program:"SHE GOT ASSETS",role:"Gladis Johnson",performer:"Joanna Hausmann",id:"media-she-got-assets-gladis-johnson-joanna-hausmann",creditedRole:"Gladis Johnson",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-40"},{category:"Talk radio",program:"SHE GOT ASSETS",role:"Dr Rafferty",performer:"Johnathan Fernandez",id:"media-she-got-assets-dr-rafferty-johnathan-fernandez",creditedRole:"Dr Rafferty",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-41"},{category:"Talk radio",program:"SHE GOT ASSETS",role:"Vanessa from Tequesta",performer:"Laura Di Lorenzo",id:"media-she-got-assets-vanessa-from-tequesta-laura-di-lorenzo",creditedRole:"Vanessa from Tequesta",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-42"},{category:"Talk radio",program:"SHE GOT ASSETS",role:"Destiny Stallion",performer:"Liza Treyger",id:"media-she-got-assets-destiny-stallion-liza-treyger",creditedRole:"Destiny Stallion",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-43"},{category:"Talk radio",program:"SHE GOT ASSETS",role:"Kendra St. James",performer:"Zainab Johnson",id:"media-she-got-assets-kendra-st-james-zainab-johnson",creditedRole:"Kendra St. James",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-44"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Richard Bastion",performer:"Jason Sudeikis",id:"media-the-richard-bastion-show-richard-bastion-jason-sudeikis",creditedRole:"Richard Bastion",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-45"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Man 2",performer:"Alex Morf",id:"media-the-richard-bastion-show-man-2-alex-morf",creditedRole:"Man 2",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-46"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Tanya",performer:"Ann M. Scobie",id:"media-the-richard-bastion-show-tanya-ann-m-scobie",creditedRole:"Tanya",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-47"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Bryce McNaughton",performer:"Blake Roman",id:"media-the-richard-bastion-show-bryce-mcnaughton-blake-roman",creditedRole:"Bryce McNaughton",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-48"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Broski 1",performer:"Brandon Miles",id:"media-the-richard-bastion-show-broski-1-brandon-miles",creditedRole:"Broski 1",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-49"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Woman 1",performer:"Carey Van Driest",id:"media-the-richard-bastion-show-woman-1-carey-van-driest",creditedRole:"Woman 1",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-50"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Dixie",performer:"Chelsea Lee Williams",id:"media-the-richard-bastion-show-dixie-chelsea-lee-williams",creditedRole:"Dixie",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-51"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Natalie",performer:"Claire Lilley",id:"media-the-richard-bastion-show-natalie-claire-lilley",creditedRole:"Natalie",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-52"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Billy",performer:"Clinton Brandhagen",id:"media-the-richard-bastion-show-billy-clinton-brandhagen",creditedRole:"Billy",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-53"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Pete",performer:"Curran Conner",id:"media-the-richard-bastion-show-pete-dougie-curran-conner",creditedRole:"Pete / Dougie",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-54"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Dougie",performer:"Curran Conner",id:"media-the-richard-bastion-show-pete-dougie-curran-conner--dougie",creditedRole:"Pete / Dougie",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-55"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Broski 2",performer:"Ethan Dubin",id:"media-the-richard-bastion-show-broski-2-ethan-dubin",creditedRole:"Broski 2",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-56"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Police",performer:"Juli\xe1n Rebolledo",id:"media-the-richard-bastion-show-police-julian-rebolledo",creditedRole:"Police",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-57"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Woman 2",performer:"Liz Days",id:"media-the-richard-bastion-show-woman-2-liz-days",creditedRole:"Woman 2",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-58"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Frankie",performer:"Martin Ortiz",id:"media-the-richard-bastion-show-frankie-martin-ortiz",creditedRole:"Frankie",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-59"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Gumbo",performer:"Matthew J. Harris",id:"media-the-richard-bastion-show-gumbo-matthew-j-harris",creditedRole:"Gumbo",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-60"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Broski 3",performer:"Pedro Saint Morillo",id:"media-the-richard-bastion-show-broski-3-pedro-saint-morillo",creditedRole:"Broski 3",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-61"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Announcer",performer:"Tim Powers",id:"media-the-richard-bastion-show-announcer-tim-powers",creditedRole:"Announcer",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-62"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Man 1",performer:"Troy Hall",id:"media-the-richard-bastion-show-man-1-troy-hall",creditedRole:"Man 1",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-63"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Curtis",performer:"Varick Boyd",id:"media-the-richard-bastion-show-curtis-varick-boyd",creditedRole:"Curtis",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-64"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Man 2",performer:"Will Roland",id:"media-the-richard-bastion-show-man-2-man-1-will-roland",creditedRole:"Man 2 / Man 1",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-65"},{category:"Talk radio",program:"THE RICHARD BASTION SHOW",role:"Man 1",performer:"Will Roland",id:"media-the-richard-bastion-show-man-2-man-1-will-roland--man-1",creditedRole:"Man 2 / Man 1",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-66"},{category:"Talk radio",program:"HIT THE BRICKS",role:"Dominic \u201cThe Brick\u201d Brizzolato",performer:"Stavros Emmanuel Halkias",id:"media-hit-the-bricks-dominic-the-brick-brizzolato-stavros-emmanuel-halkias",creditedRole:"Dominic \u201cThe Brick\u201d Brizzolato",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-67"},{category:"Talk radio",program:"HIT THE BRICKS",role:"Caller 4",performer:"Benjamin O'Brien",id:"media-hit-the-bricks-caller-4-benjamin-obrien",creditedRole:"Caller 4",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-68"},{category:"Talk radio",program:"HIT THE BRICKS",role:"Caller 1",performer:"Carl Tart",id:"media-hit-the-bricks-caller-1-delord-nathan-alford-carl-tart",creditedRole:"Caller 1 / DeLord Nathan Alford",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-69"},{category:"Talk radio",program:"HIT THE BRICKS",role:"DeLord Nathan Alford",performer:"Carl Tart",id:"media-hit-the-bricks-caller-1-delord-nathan-alford-carl-tart--delord-nathan-alford",creditedRole:"Caller 1 / DeLord Nathan Alford",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-70"},{category:"Talk radio",program:"HIT THE BRICKS",role:"Caller 3",performer:"Eldis Sula",id:"media-hit-the-bricks-caller-3-eldis-sula",creditedRole:"Caller 3",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-71"},{category:"Talk radio",program:"HIT THE BRICKS",role:"Producer",performer:"James Patrick McDade",id:"media-hit-the-bricks-producer-caller-2-james-patrick-mcdade",creditedRole:"Producer / Caller 2",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-72"},{category:"Talk radio",program:"HIT THE BRICKS",role:"Caller 2",performer:"James Patrick McDade",id:"media-hit-the-bricks-producer-caller-2-james-patrick-mcdade--caller-2",creditedRole:"Producer / Caller 2",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-73"},{category:"Talk radio",program:"HIT THE BRICKS",role:"Marie",performer:"Sarah Sherman",id:"media-hit-the-bricks-marie-sarah-sherman",creditedRole:"Marie",profileUrl:"https://gta6ops.com/story/talk-radio-character-profiles/#profile-74"},{category:"Podcast",program:"DRUNK KINGS",role:"DJ EFN",performer:"Himself",id:"media-drunk-kings-dj-efn-himself",creditedRole:"DJ EFN",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-1"},{category:"Podcast",program:"DRUNK KINGS",role:"DJ Stevie J",performer:"Himself",existingId:"stevie-j",creditedRole:"DJ Stevie J",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-2"},{category:"Podcast",program:"DRUNK KINGS",role:"Wax",performer:"Himself",existingId:"wax",creditedRole:"Wax",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-3"},{category:"Podcast",program:"DRUNK KINGS",role:"DWNPLY",performer:"Denzel Curry",existingId:"dwnply",creditedRole:"DWNPLY",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-4"},{category:"Podcast",program:"DRUNK KINGS",role:"Bae-Lux",performer:"HoodBrat",existingId:"bae-luxe",creditedRole:"Bae-Lux",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-5"},{category:"Podcast",program:"DRUNK KINGS",role:"Roxxy",performer:"Krissy",existingId:"roxy-rashad",creditedRole:"Roxxy",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-6"},{category:"Podcast",program:"DRUNK KINGS",role:"N.O.R.E.",performer:"Himself",id:"media-drunk-kings-n-o-r-e-himself",creditedRole:"N.O.R.E.",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-7"},{category:"Podcast",program:"FINAL ACT",role:"Reagan Carter",performer:"Ren\xe9e Felice Smith",id:"media-final-act-reagan-carter-renee-felice-smith",creditedRole:"Reagan Carter",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-8"},{category:"Podcast",program:"FINAL ACT",role:"J.B. Bradshaw",performer:"Barron B. Bass",id:"media-final-act-j-b-bradshaw-barron-b-bass",creditedRole:"J.B. Bradshaw",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-9"},{category:"Podcast",program:"FINAL ACT",role:"Wade Herbert",performer:"Matthew Maher",id:"media-final-act-wade-herbert-matthew-maher",creditedRole:"Wade Herbert",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-10"},{category:"Podcast",program:"FINAL ACT",role:"Dave Norton",performer:"Julian Gamble",id:"media-final-act-dave-norton-julian-gamble",creditedRole:"Dave Norton",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-11"},{category:"Podcast",program:"FINAL ACT",role:"Vanessa Triage",performer:"Karen Braga",id:"media-final-act-vanessa-triage-karen-braga",creditedRole:"Vanessa Triage",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-12"},{category:"Podcast",program:"FINAL ACT",role:"Solomon Richards",performer:"Michael Quinlan",id:"media-final-act-solomon-richards-michael-quinlan",creditedRole:"Solomon Richards",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-13"},{category:"Podcast",program:"FINAL ACT",role:"Waitress Louise",performer:"Anne O'Sullivan",id:"media-final-act-waitress-louise-anne-osullivan",creditedRole:"Waitress Louise",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-14"},{category:"Podcast",program:"FINAL ACT",role:"Security Guard Toby",performer:"Adrian Arthur",id:"media-final-act-security-guard-toby-adrian-arthur",creditedRole:"Security Guard Toby",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-15"},{category:"Podcast",program:"FINAL ACT",role:"Officer Liebowitz",performer:"Suzanne Savoy",id:"media-final-act-officer-liebowitz-suzanne-savoy",creditedRole:"Officer Liebowitz",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-16"},{category:"Podcast",program:"FINAL ACT",role:"St. John Clairmont",performer:"Ty Jones",id:"media-final-act-st-john-clairmont-ty-jones",creditedRole:"St. John Clairmont",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-17"},{category:"Podcast",program:"FINAL ACT",role:"Reader 2",performer:"Alba Ponce de Le\xf3n",id:"media-final-act-reader-2-alba-ponce-de-leon",creditedRole:"Reader 2",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-18"},{category:"Podcast",program:"FINAL ACT",role:"News Reader 5",performer:"Bartley Booz",id:"media-final-act-news-reader-5-bartley-booz",creditedRole:"News Reader 5",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-19"},{category:"Podcast",program:"FINAL ACT",role:"Gideon",performer:"Brian Walters",id:"media-final-act-gideon-brian-walters",creditedRole:"Gideon",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-20"},{category:"Podcast",program:"FINAL ACT",role:"Reader 1",performer:"Gregory Abbey",id:"media-final-act-reader-1-gregory-abbey",creditedRole:"Reader 1",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-21"},{category:"Podcast",program:"FINAL ACT",role:"Police Department Operator",performer:"Kristine Amarante",id:"media-final-act-police-department-operator-prison-loudspeaker-kristine-amarante",creditedRole:"Police Department Operator / Prison Loudspeaker",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-22"},{category:"Podcast",program:"FINAL ACT",role:"Prison Loudspeaker",performer:"Kristine Amarante",id:"media-final-act-police-department-operator-prison-loudspeaker-kristine-amarante--prison-loudspeaker",creditedRole:"Police Department Operator / Prison Loudspeaker",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-23"},{category:"Podcast",program:"FINAL ACT",role:"News Reader 3",performer:"Serena Berman",id:"media-final-act-news-reader-3-serena-berman",creditedRole:"News Reader 3",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-24"},{category:"Podcast",program:"FINAL ACT",role:"News Reader 4",performer:"William Ragsdale",id:"media-final-act-news-reader-4-william-ragsdale",creditedRole:"News Reader 4",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-25"},{category:"Podcast",program:"FUCK MARRY MURDER",role:"Amber",performer:"Chloe Fineman",id:"media-fuck-marry-murder-amber-chloe-fineman",creditedRole:"Amber",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-26"},{category:"Podcast",program:"FUCK MARRY MURDER",role:"Sienna",performer:"Sarah Sherman",id:"media-fuck-marry-murder-sienna-sarah-sherman",creditedRole:"Sienna",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-27"},{category:"Podcast",program:"FUCK MARRY MURDER",role:"Brenda Strokes",performer:"Allegra Henderson",id:"media-fuck-marry-murder-brenda-strokes-allegra-henderson",creditedRole:"Brenda Strokes",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-28"},{category:"Podcast",program:"FUCK MARRY MURDER",role:"Security",performer:"Andy Lucien",id:"media-fuck-marry-murder-security-andy-lucien",creditedRole:"Security",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-29"},{category:"Podcast",program:"FUCK MARRY MURDER",role:"Don Richards",performer:"Armando Riesco",id:"media-fuck-marry-murder-don-richards-armando-riesco",creditedRole:"Don Richards",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-30"},{category:"Podcast",program:"FUCK MARRY MURDER",role:"Victim",performer:"Bill English",id:"media-fuck-marry-murder-victim-bill-english",creditedRole:"Victim",profileUrl:"https://gta6ops.com/story/podcast-character-profiles/#profile-31"},{category:"Podcast",program:"FUCK MARRY MURDER",role:"Alvin",performer:"David Beach",id:"media-fuck-marry-murder-alvin-david-beach",creditedRole:"Alvin",profileUrl:"https://gta6ops.com/story/podcast-characç^;çNÊ×¬¢h­µç^]–ÖÌKÌKWK[žN–ÖÌKKÌWWK[–ÖÌKÌKWW_KœÏ^ÞŒNŒNÙ[˜Ý[ÛˆÜÊKK
^ØÛÛœÝÛÙ™œÙ]›ÏTË[O]Ý\™Ù]›YK^\ÎœHžHŸO]HžHOO\ÈšZYÚŽˆÚY‹Ï[ˆOOYOÙ[˜Ý[ÛŠKJ^ØÛÛœÝ^ÞŒNŒNÛ]ÏYNÙ›ÜŠÛÉ‰›ÈOOXNÊZYŠÈ[œÝ[˜Ù[ÙˆS[[Y[
]ž
Ï[Ë›Ù™œÙ]YžJÏ[Ë›Ù™œÙ]ÜÏ[Ë›Ù™œÙ]\™[Ù[ÙHYŠœÝ™ÈOO[ËYÓ˜[YJ^ØÛÛœÝO[Ë™Ù]›Ý[™[™ÐÛY[™XÝ

NÛÏ[Ëœ\™[[[Y[ØÛÛœÝO[Ë™Ù]›Ý[™[™ÐÛY[™XÝ

NÝž
ÏYK›YXK›YžJÏYKÜXKÜY[Ù^ÚYŠJÈ[œÝ[˜Ù[ÙˆÕ‘ÑÜ˜\XÜÑ[[Y[
JXœ™XZÎÞØÛÛœÝÞ™KN˜_O[Ë™Ù]›Þ

NÝž
ÏYKžJÏXNÛ][[[Ëœ\™[›ÙNÙ›ÜŠÈ[ŽÊHœÝ™ÈOO\‹YÓ˜[YI‰Š\ŠK[Ëœ\™[›ÙNÛÏ[Ÿ_\™]\›ˆJ‹JN‘œËO[OOYOÞÝÚY™KœØÜ›ÛÚYZYÚ™KœØÜ›ÛZYÚN™[˜Ý[ÛŠJ^Ü™]\›ˆ™Ù]›Þš[ˆI‰ˆœÝ™ÈˆOOYKYÓ˜[YOÙK™Ù]›Þ

NžÝÚY™K˜ÛY[ÚYZYÚ™K˜ÛY[ZYÚ_JŠKÏ^ÝÚY™K˜ÛY[ÚYZYÚ™K˜ÛY[ZYÚNØVÜ—K›Ù™œÙ]›[™ÝLÛ]OHXVÜ—Kš[\œÛ]NØÛÛœÝO[Ë›[™ÝÙ›ÜŠ]LÜNÜ
ÊÊ^ØÛÛœÝOTœÊÖÜKÖÛKVÛKÖÜ—JNÝ_OOOXVÜ—Kš[\œÛ]Ü“Ù™œÙ]ÖÜ_
OHL
KVÜ—K›Ù™œÙ]ÜOY_]I‰ŠVÜ—Kš[\œÛ]OQÊVÜ—K›Ù™œÙ]œÊÊKØÛ[\ˆL_JKVÜ—Kš[\œÛ]Ü“Ù™œÙ]ÏVË‹‹˜VÜ—K›Ù™œÙ]JKVÜ—Kœ›ÙÜ™\ÜÏU
KVÜ—Kš[\œÛ]JVÜ—K˜Ý\œ™[
J_Y[˜Ý[ÛˆÜÊKKÏ^ßJ^Ü™]\›žÛYX\Ý\™NŠ
OO™[˜Ý[ÛŠKOYK
^ÚYŠž\™Ù]Ù™œÙ]LžK\™Ù]Ù™œÙ]LHOOYJ^Û]ÏXNÙ›ÜŠÛÉ‰›ÈOOYNÊ]ž\™Ù]Ù™œÙ]
Ï[Ë›Ù™œÙ]YžK\™Ù]Ù™œÙ]
Ï[Ë›Ù™œÙ]ÜÏ[Ë›Ù™œÙ]\™[]ž\™Ù][™ÝXOOOYOØKœØÜ›ÛÚY˜K˜ÛY[ÚYžK\™Ù][™ÝXOOOYOØKœØÜ›ÛZYÚ˜K˜ÛY[ZYÚž˜ÛÛZ[™\“[™ÝYK˜ÛY[ÚYžK˜ÛÛZ[™\“[™ÝYK˜ÛY[ZYÚJKË\™Ù]
K\]N˜OOžÈY[˜Ý[ÛŠKK
^Ó[
Kž‹K
K[
KžH‹K
KK[YO]JKJK
Ë›Ù™œÙ]Ë\™Ù]
I‰‘ÜÊKÊ_K›ÝYžNŠ
OO˜J
__XÛÛœÝÜÏ[™]ÈÙXZÓX\\Ï[™]ÈÙXZÓX\Ï[™]ÈÙXZÓX\œÏYOO™OOOYØÝ[Y[™ØÝ[Y[[[Y[ÝÚ[™ÝÎ™NÙ[˜Ý[ÛˆÜÊKØÛÛZ[™\Ž˜OYØÝ[Y[™ØÝ[Y[[[Y[‹‹O^ßJ^Û]ÏRË™Ù]
JNÛß
Ï[™]ÈÙ]ËœÙ]
KÊJNØÛÛœÝUÜÊKKÝ[YNŒžØÝ\œ™[ŒÙ™œÙ]–×K›ÙÜ™\ÜÎŒØÜ›Û[™ÝŒ\™Ù]Ù™œÙ]Œ\™Ù][™ÝŒÛÛZ[™\“[™ÝŒ™[ØÚ]NŒKNžØÝ\œ™[ŒÙ™œÙ]–×K›ÙÜ™\ÜÎŒØÜ›Û[™ÝŒ\™Ù]Ù™œÙ]Œ\™Ù][™ÝŒÛÛZ[™\“[™ÝŒ™[ØÚ]NŒ_K
NÚYŠË˜Y
ŠKSÜËš\ÊJJ^ØÛÛœÝOJ
OOžÙ›ÜŠÛÛœÝHÙˆÊYK›YX\Ý\™J
_KJ
OOžÙ›ÜŠÛÛœÝHÙˆÊYK\]J\‹[Y\Ý[\
_KJ
OOžÙ›ÜŠÛÛœÝHÙˆÊYK››ÝYžJ
_KÏJ
OOžÔÜ‹œ™XY
KLKL
KÜ‹œ™XY
LKL
KÜ‹\]J‹LKL
_NÓÜËœÙ]
KÊNØÛÛœÝOSœÊJNÝÚ[™ÝË˜Y]™[\Ý[™\Šœ™\Ú^™H‹ËÜ\ÜÚ]™NˆLJKHOOYØÝ[Y[™ØÝ[Y[[[Y[	‰‘\ËœÙ]
K
\Ë™[˜Ý[ÛˆOO]\[ÙŠXJOÑ
ŠN”Û
‹
JJKK˜Y]™[\Ý[™\ŠœØÜ›Û‹ËÜ\ÜÚ]™NˆLJ_]˜\ˆ‹ØÛÛœÝÏSÜË™Ù]
JNÜ™]\›ˆÜ‹œ™XY
ËLKL
K

OOžÝ˜\ˆNÓŠÊNØÛÛœÝRË™Ù]
JNÚYŠ]
\™]\›ŽÚYŠ™[]JŠKœÚ^™J\™]\›ŽØÛÛœÝÏSÜË™Ù]
JNÓÜË™[]JJKÉ‰ŠœÊJKœ™[[Ý™Q]™[\Ý[™\ŠœØÜ›Û‹ÊK[OOJOQ\Ë™Ù]
JJ_›ÚYOOY_J
KÚ[™ÝËœ™[[Ý™Q]™[\Ý[™\Šœ™\Ú^™H‹ÊJ__XÛÛœÝœÏ[™]ÈX\Ù[˜Ý[Ûˆ\ÊÜÛÝ\˜ÙN™KÛÛZ[™\Ž˜OYØÝ[Y[™ØÝ[Y[[[Y[^\ÎHžHŸO^ßJ^ÙI‰ŠOYJKœËš\ÊJ_œËœÙ]
KßJNØÛÛœÝÏZœË™Ù]
JNÜ™]\›ˆÖÝ_
ÖÝORÜŠ
OÛ™]ÈØÜ›Û[Y[[™JÜÛÝ\˜ÙN˜K^\ÎJN™[˜Ý[ÛŠÜÛÝ\˜ÙN™KÛÛZ[™\Ž˜K^\ÎHžHŸJ^ÙI‰ŠOYJNØÛÛœÝÏ^Ý˜[YNŒKRÜÊOOžÛË˜[YOLL
™VÝKœ›ÙÜ™\ÜßKØÛÛZ[™\Ž˜K^\ÎJNÜ™]\›žØÝ\œ™[[YN›ËØ[˜Ù[›Ÿ_JÜÛÝ\˜ÙN˜K^\ÎJJKÖÝ_Y[˜Ý[ÛˆœÊJ^Ü™]\›ˆI‰ŠK\™Ù]K›Ù™œÙ]
_Y[˜Ý[Ûˆ\ÊKØ^\Î˜OHžH‹‹‹O^ßJ^ØÛÛœÝÏ^Ø^\Î˜K‹‹NÜ™]\›ˆ™[˜Ý[ÛˆOO]\[ÙˆOÙ[˜Ý[ÛŠKJ^Ü™]\›ˆ[˜Ý[ÛŠJ^Ü™]\›ˆOOYK›[™ÝJJ_œÊJOÒÜÊOžÙJØK˜^\×Kœ›ÙÜ™\ÜË
_KJN›
K\ÊJJ_JKÊN™[˜Ý[ÛŠKJ^ÚYŠK™›][Š
KœÊJJ\™]\›ˆKœ]\ÙJ
KÜÊOžÙK[YOYK™\˜][ÛŠØK˜^\×Kœ›ÙÜ™\ÜßKJNÞØÛÛœÝR\ÊJNÜ™]\›ˆK˜]XÚ[Y[[™OÙK˜]XÚ[Y[[™JOOŠKœ]\ÙJ
K›
OOžÙK[YOYK™\˜][ÛŠ˜_K
JJNÜŸ_JKÊ_XÛÛœÝ\ÏTÝÚJ
K\ÙS^[Ý]Y™™XÝšJ
K\ÙQY™™XÝÙ[˜Ý[ÛˆœÊKJ^Ñ\Š›ÛÛX[ŠX_K˜Ý\œ™[
K[ÝH]™HYš[™YH	Ù_HÜ[ÛœÈ]H›ÝšYY™Yˆ\È›ÝY]Y˜]Y›Ø˜X›H™XØ]\ÙH]	ÜÈYš[™YYÚ\ˆ\H™YKˆžHØ[[™È\ÙTØÜ›Û

H[ˆHØ[YHÛÛ\Û™[\ÈH™Y‹ÜˆÙ][™È]È^[Ý]Y™™XÝˆ˜[ÙWÜ[Û‹˜
_XÛÛœÝ\ÏJ
OOŠÜØÜ›Û“ÜŠ
KØÜ›ÛN“ÜŠ
KØÜ›Û›ÙÜ™\ÜÎ“ÜŠ
KØÜ›ÛT›ÙÜ™\ÜÎ“ÜŠ
_JNÙ[˜Ý[Ûˆ	ÊØÛÛZ[™\Ž™K\™Ù]˜K^[Ý]Y™™XÝHL‹‹›ßO^ßJ^ØÛÛœÝQ
\ÊNÜ™]\›ŠÜ\ÎšJ
K\ÙQY™™XÝ
J

OOŠœÊ\™Ù]‹JKœÊ˜ÛÛZ[™\ˆ‹JK\Ê
KÞ˜KNJOOžÛ‹œØÜ›ÛœÙ]
K˜Ý\œ™[
K‹œØÜ›Û›ÙÜ™\ÜËœÙ]
Kœ›ÙÜ™\ÜÊK‹œØÜ›ÛKœÙ]
˜Ý\œ™[
K‹œØÜ›ÛT›ÙÜ™\ÜËœÙ]
œ›ÙÜ™\ÜÊ_KË‹‹›ËÛÛZ[™\ŽŠ[OOY_›ÚYOOYOÝ›ÚY™K˜Ý\œ™[
_›ÚY\™Ù]Š[OOX_›ÚYOOXOÝ›ÚY˜K˜Ý\œ™[
_›ÚYJJKÙKK”ÓÓ‹œÝš[™ÚYžJË›Ù™œÙ]
WJKŸXÛÛœÝÏVÈ˜[œÙ›Ü›T\œÜXÝ]™H‹ž‹žH‹žˆ‹˜[œÛ]V‹˜[œÛ]VH‹˜[œÛ]Vˆ‹œØØ[H‹œØØ[V‹œØØ[VH‹œ›Ý]H‹œ›Ý]V‹œ›Ý]VH‹œ›Ý]Vˆ‹œÚÙ]È‹œÚÙ]Ö‹œÚÙ]ÖH—KœÏ[™]ÈÙ]
ÊK\ÏYOO™OOOTOOOR›ZOJKJOOœ\œÙQ›Ø]
KœÜ]
‹ŠVØWJKZOJKJOOŠÝ˜[œÙ›Ü›N›ßJOOžÚYŠ››Û™HOO[ß[Ê\™]\›ˆØÛÛœÝ[Ë›X]Ú
×›X]š^Ù

ŠÊW
IÝJNÚYŠŠ\™]\›ˆZJ–ÌWKJNÞØÛÛœÝO[Ë›X]Ú
×›X]š^

ŠÊW
IÝJNÜ™]\›ˆOÙZJVÌWKJNŒ_KO[™]ÈÙ]
Èž‹žH‹žˆ—JKÚOVË™š[\ŠOOˆ]Kš\ÊJJNØÛÛœÝšO^ÝÚYŠÞ™_KÜY[™ÓY˜OHŒ‹Y[™ÔšYÚHŒŸJOO™K›X^YK›Z[‹\\œÙQ›Ø]
JK\\œÙQ›Ø]

KZYÚŠÞN™_KÜY[™ÕÜ˜OHŒ‹Y[™Ð›ÝÛNHŒŸJOO™K›X^YK›Z[‹\\œÙQ›Ø]
JK\\œÙQ›Ø]

KÜŠKÝÜ˜_JOOœ\œÙQ›Ø]
JKYŠKÛY˜_JOOœ\œÙQ›Ø]
JK›ÝÛNŠÞN™_KÝÜ˜_JOOœ\œÙQ›Ø]
JJÊK›X^YK›Z[ŠKšYÚŠÞ™_KÛY˜_JOOœ\œÙQ›Ø]
JJÊK›X^YK›Z[ŠK˜ZJLÊKN˜ZJKM
_NÛšK˜[œÛ]V[šKžšK˜[œÛ]VO[šKžNØÛÛœÝšO[™]ÈÙ]Û]OHLKÚOHLNÙ[˜Ý[ÛˆZJ
^ÚYŠÚJ^ØÛÛœÝOP\œ˜^K™œ›ÛJšJK™š[\ŠOO™K›™YYÓYX\Ý\™[Y[
KO[™]ÈÙ]
K›X\
OO™K™[[Y[
JK[™]ÈX\ØK™›Ü‘XXÚ
OOžØÛÛœÝOY[˜Ý[ÛŠJ^ØÛÛœÝOV×NÜ™]\›ˆÚK™›Ü‘XXÚ
OžØÛÛœÝÏYK™Ù]˜[YJ
NÝ›ÚYOO[É‰ŠKœ\Ú
ÝË™Ù]

WJKËœÙ]
œÝ\ÕÚ]
œØØ[HŠOÌNŒ
J_JK_JJNØK›[™Ý	‰ŠœÙ]
KJKKœ™[™\Š
J_JKK™›Ü‘XXÚ
OO™K›YX\Ý\™R[š]X[Ý]J
JKK™›Ü‘XXÚ
OOžÙKœ™[™\Š
NØÛÛœÝO]™Ù]
JNØI‰˜K™›Ü‘XXÚ

ØKJOOžÝ˜\ˆÎÛ[OOJÏYK™Ù]˜[YJJJ_›ÚYOO[ßËœÙ]

_J_JKK™›Ü‘XXÚ
OO™K›YX\Ý\™Q[™Ý]J
JKK™›Ü‘XXÚ
OOžÝ›ÚYOOYKœÝ\Ü[™YØÜ›ÛI‰Ú[™ÝËœØÜ›ÛÊKœÝ\Ü[™YØÜ›ÛJ_J_\ÚOHLKOHLKšK™›Ü‘XXÚ
OO™K˜ÛÛ\]J
JKšK˜ÛX\Š
_Y[˜Ý[ÛˆÚJ
^ÜšK™›Ü‘XXÚ
OOžÙKœ™XYÙ^Yœ˜[Y\Ê
KK›™YYÓYX\Ý\™[Y[	‰ŠÚOHL
_J_XÛ\ÜÈZ^ØÛÛœÝXÝÜŠKKË‹HLJ^Ý\Ëš\ÐÛÛ\]OHLK\Ëš\Ð\Þ[˜ÏHLK\Ë›™YYÓYX\Ý\™[Y[HLK\Ëš\ÔØÚY[YHLK\Ë[œ™\ÛÛ™YÙ^Yœ˜[Y\ÏVË‹‹™WK\Ë›ÛÛÛ\]OXK\Ë›˜[YO]\Ë›[Ý[Û•˜[YO[Ë\Ë™[[Y[[‹\Ëš\Ð\Þ[˜Ï\Ÿ\ØÚY[T™\ÛÛ™J
^Ý\Ëš\ÔØÚY[YHL\Ëš\Ð\Þ[˜ÏÊšK˜Y
\ÊK_
OHLÜ‹œ™XY
ÚJKÜ‹œ™\ÛÛ™RÙ^Yœ˜[Y\ÊZJJJNŠ\Ëœ™XYÙ^Yœ˜[Y\Ê
K\Ë˜ÛÛ\]J
J_\™XYÙ^Yœ˜[Y\Ê
^ØÛÛœÝÝ[œ™\ÛÛ™YÙ^Yœ˜[Y\Î™K˜[YN˜K[[Y[[Ý[Û•˜[YN›ßO]\ÎÙ›ÜŠ]LÛK›[™ÝÛŠÊÊZYŠ[OOYVÛ—JZYŠOO[Š^ØÛÛœÝ[[OO[ß›ÚYOO[ÏÝ›ÚY›Ë™Ù]

KYVÙK›[™ÝLWNÚYŠ›ÚYOO[ŠYVÌO[ŽÙ[ÙHYŠ	‰˜J^ØÛÛœÝÏ]œ™XY˜[YJKŠNÝ›ÚYOO[É‰›[OO[É‰ŠVÌO[Ê_]›ÚYOOYVÌI‰ŠVÌO\ŠKÉ‰›ÚYOO[‰‰›ËœÙ]
VÌJ_Y[ÙHVÛ—OYVÛ‹LW_\Ù]š[˜[Ù^Yœ˜[YJ
^ß[YX\Ý\™R[š]X[Ý]J
^ß\™[™\‘[™Ý[\Ê
^ß[YX\Ý\™Q[™Ý]J
^ßXÛÛ\]J
^Ý\Ëš\ÐÛÛ\]OHL\Ë›ÛÛÛ\]J\Ë[œ™\ÛÛ™YÙ^Yœ˜[Y\Ë\Ë™š[˜[Ù^Yœ˜[YJKšK™[]J\Ê_XØ[˜Ù[

^Ý\Ëš\ÐÛÛ\]_
\Ëš\ÔØÚY[YHLKšK™[]J\ÊJ_\™\Ý[YJ
^Ý\Ëš\ÐÛÛ\]_\ËœØÚY[T™\ÛÛ™J
__Y[˜Ý[ÛˆZJKK
^ØÛÛœÝÏSX]›X^
KMK
NÜ™]\›ˆœŠYJÊKK[Ê_XÛÛœÝOLLOLLZOLKÚOLONšOKŒËšOKŒËÚO^ÙÜ˜[[\Ž‹ŒKY˜][ŒŸKšO^ÙÜ˜[[\Ž‹ŒKY˜][‹_KÚOKŒKÚOLLOKŒKÚOLKÚOKŒNÙ[˜Ý[ÛˆJÙ\˜][ÛŽ™OZK›Ý[˜ÙN˜OXšK™[ØÚ]NYÚKX\ÜÎ›Ï^Z_J^Û]‹ŽÑ\ŠOY›
ÚJK”Üš[™È\˜][Ûˆ]\Ý™HLÙXÛÛ™ÈÜˆ\ÜÈŠNÛ]LKXNÛU
KÚK
KOU
ÚKÚKÛ
JJKOÊXOOžØÛÛœÝÏXJ›[Ê™K[Ë]ÏQJK
KOSX]™^
[ŠNÜ™]\›ˆÚK\‹ÜÊš_KXOOžØÛÛœÝÏXJ›
™K[Ê
ÝÏSX]œÝÊŠJ“X]œÝÊKŠJ™KOSX]™^
[ÊKÏQJX]œÝÊKŠK
NÜ™]\›Š[ŠJJÔÚOŒËLNŒJJŠ
‹\ÊJšJKØßJNŠXOO“X]™^
XJ™JJŠ
K]
J™JÌJKKŒKXOO“X]™^
XJ™JJŠJ™JŠXJJJNØÛÛœÝÏY[˜Ý[ÛŠKK
^Û]Ï]Ù›ÜŠ]LNÛZNÛŠÊÊ[ËOYJÊKØJÊNÜ™]\›ˆßJ‹‹KÙJNÚYŠOY›
JK\Ó˜SŠÊJ\™]\›žÜÝY™›™\ÜÎœK[\[™Î™K\˜][ÛŽ™_NÞØÛÛœÝOSX]œÝÊËŠJ›ÎÜ™]\›žÜÝY™›™\ÜÎ˜K[\[™ÎŒŠ›
“X]œÜ\
Ê˜JK\˜][ÛŽ™___XÛÛœÝZOLLŽÙ[˜Ý[ÛˆJKJ^Ü™]\›ˆJ“X]œÜ\
KXJ˜J_XÛÛœÝšOVÈ™\˜][Ûˆ‹˜›Ý[˜ÙH—KZOVÈœÝY™›™\ÜÈ‹™[\[™È‹›X\ÜÈ—NÙ[˜Ý[ÛˆJKJ^Ü™]\›ˆKœÛÛYJOO›ÚYOOYVØWJ_Y[˜Ý[ÛˆšJOYšKOXšJ^ØÛÛœÝH›Øš™XÝˆOO]\[ÙˆOÞÝš\ÝX[\˜][ÛŽ™KÙ^Yœ˜[Y\Î–ÌWK›Ý[˜ÙN˜_N™NÛ]Ü™\ÝÜYY›Ë™\Ý[N›ŸO]ØÛÛœÝ]šÙ^Yœ˜[Y\ÖÌK]šÙ^Yœ˜[Y\ÖÝšÙ^Yœ˜[Y\Ë›[™ÝLWKÏ^ÙÛ™NˆLK˜[YNœŸKÜÝY™›™\ÜÎšK[\[™Î˜ËX\ÜÎK\˜][ÛŽ›K™[ØÚ]Nœ\Ô™\ÛÛ™Yœ›ÛQ\˜][ÛŽ™OY[˜Ý[ÛŠJ^Û]O^Ý™[ØÚ]N™ÚKÝY™›™\ÜÎœK[\[™Î™KX\ÜÎžZK\Ô™\ÛÛ™Yœ›ÛQ\˜][ÛŽˆLK‹‹™_NÚYŠUJKZJI‰•JKšJJZYŠKš\ÝX[\˜][ÛŠ^ØÛÛœÝYKš\ÝX[\˜][Û‹ÏLŠ“X]”KÊKŒŠ
K[Ê›ËLŠ•
ŒKKKJK˜›Ý[˜Ù_
JJ“X]œÜ\
ŠNØO^Ë‹‹˜KX\ÜÎžZKÝY™›™\ÜÎ›‹[\[™ÎœŸ_Y[Ù^ØÛÛœÝSJJNØO^Ë‹‹˜K‹‹X\ÜÎžZ_KKš\Ô™\ÛÛ™Yœ›ÛQ\˜][ÛHL\™]\›ˆ_JË‹‹™[ØÚ]N‹]Û
™[ØÚ]_
_JKO\ÏXËÊŠ“X]œÜ\
JJJK[\‹]Û
X]œÜ\
KÝJJKSX]˜XœÊ
ONÛ]ÎÚYŠß
ÏYÝÚK™Ü˜[[\ŽÚK™Y˜][
KŸ
YÝšK™Ü˜[[\ŽšK™Y˜][
KÏJ^ØÛÛœÝOQJ‹ÊNÝÏXOOžØÛÛœÝSX]™^
YÊ˜Š˜JNÜ™]\›ˆ]
Š
JÙÊ˜Šš
KÙJ“X]œÚ[ŠJ˜JJÚ
“X]˜ÛÜÊJ˜JJ__Y[ÙHYŠOOOYÊ]ÏYOO›SX]™^
XŠ™JJŠ
ÊJØŠš
J™JNÙ[Ù^ØÛÛœÝOXŠ“X]œÜ\
Ê™ËLJNÝÏXOOžØÛÛœÝSX]™^
YÊ˜Š˜JKÏSX]›Z[ŠJ˜KÌ
NÜ™]\›ˆ]
Š
JÙÊ˜Šš
J“X]œÚ[š
ÊJÙJš
“X]˜ÛÜÚ
ÊJKÙ__XÛÛœÝ^ØØ[Ý[]Y\˜][ÛŽ™	‰›_[™^™OOžØÛÛœÝO]ÊJNÚYŠ
\Ë™Û™OYO[NÙ[Ù^Û]LÙÏI‰ŠLOOYOÙ›
JN›ZJËKJJNØÛÛœÝSX]˜XœÊ
O[ËOSX]˜XœÊXJO[ŽÜË™Û™O\‰‰š_\™]\›ˆË˜[YO\Ë™Û™OÛ˜KßKÔÝš[™ÎŠ
OOžØÛÛœÝOSX]›Z[Š\ŠŠK™M
KOY[
OO‹›™^
J˜JK˜[YKKÌ
NÜ™]\›ˆJÈ›\ÈŠØ__NÜ™]\›ˆŸY[˜Ý[ÛˆšJÚÙ^Yœ˜[Y\Î™K™[ØÚ]N˜OLÝÙ\ŽKŽ[YPÛÛœÝ[›ÏLÌK›Ý[˜ÙQ[\[™Î›LL›Ý[˜ÙTÝY™›™\ÜÎœML[ÙYžU\™Ù]›Z[ŽœËX^šK™\Ý[N˜ÏKK™\ÝÜYY_J^ØÛÛœÝOYVÌK^ÙÛ™NˆLK˜[YN›_KYOO›ÚYOO\ÏÚN›ÚYOOZ_X]˜XœÊËYJOX]˜XœÊKYJOÜÎšNÛ]O]
˜NØÛÛœÝÏ[JÞK]›ÚYOO[ÙÎ›
ÊNÚOOYÉ‰ŠOZ[JNØÛÛœÝYOO‹^J“X]™^
YKÛÊKYOOš
ØŠJKÏYOOžØÛÛœÝOXŠJKYŠJNÜ™Û™OSX]˜XœÊJOXË˜[YO\™Û™OÚNÛ]‹ÎØÛÛœÝÏYOOžÝ˜\ˆNÊO\˜[YK›ÚYOO\É‰˜Oß›ÚYOOZI‰˜OšJI‰ŠYKÏUšJÚÙ^Yœ˜[Y\Î–Ü˜[YK
˜[YJWK™[ØÚ]N›ZJ‹K˜[YJK[\[™Î›‹ÝY™›™\ÜÎœ‹™\Ý[N˜Ë™\ÝÜYY_JJ_NÜ™]\›ˆÊ
KØØ[Ý[]Y\˜][ÛŽ›[™^™OOžÛ]OHLNÜ™]\›ˆß›ÚYOO]Ÿ
OHLÊJKÊJJK›ÚYOO]‰‰™O]×Ë›™^
K]ŠNŠXI‰ÊJK
___XÛÛœÝOJKK
OOŠ

KLÊ
ÌÊ˜JJ™JÊÊMŠ˜JJJ™JÌÊ˜JJ™NÙ[˜Ý[ÛˆšJKKÊ^ÚYŠOOOXI‰OO[Ê\™]\›ˆÜŽØÛÛœÝXOO™[˜Ý[ÛŠKKËŠ^Û]‹ÏLÙÞÛXJÊXJKÌ‹TJËŠKYKŒÝ[˜O[]Ú[JX]˜XœÊŠOŒYKMÉ‰ŠÊÜÏLŠNÜ™]\›ˆJKKK
NÜ™]\›ˆOOŒOOY_OOOYOÙN”JŠJKKÊ_XÛÛœÝÚOQšJ‹KJKÚOQšJNJKÚOQšJ‹NJKZOYOO˜OO˜OKOÙJŠ˜JKÌŽŠ‹YJŠŠKXJJJKÌ‹OYOO˜OOŒKYJKXJKšOQšJŒÌËKLËŽKŽNJKÚORJšJKšOQZJÚJKZOYOOŠJLŠOOËJ’ÚJJN‹JŠ‹SX]œÝÊ‹LL
ŠKLJJJKšOYOOŒKSX]œÚ[ŠX]˜XÛÜÊJJKZORJšJKZOQZJšJKšO^Û[™X\ŽÜ‹X\ÙR[Ž‘ÚKX\ÙR[“Ý]“ÚKX\ÙSÝ]•ÚKÚ\˜Ò[ŽžšKÚ\˜Ò[“Ý]œZKÚ\˜ÓÝ]•ZK˜XÚÒ[Ž’ÚK˜XÚÒ[“Ý]ššK˜XÚÓÝ]“šK[XÚ\]N’Z_KZOYOOžÚYŠ\ŠJJ^ÒŠOOYK›[™ÝÝXšXÈ™^šY\ˆ\œ˜^\È]\ÝÛÛZ[ˆ›Ý\ˆ[Y\šXØ[˜[Y\ËˆŠNØÛÛœÝØKË—OYNÜ™]\›ˆšJKËŠ_\™]\›ˆœÝš[™ÈOO]\[ÙˆOÊŠ›ÚYOORšVÙWK[˜[YX\Ú[™È\H	ÉÙ_IØ
KšVÙWJN™_NÙ[˜Ý[Ûˆ	JÙ\˜][ÛŽ™OLÌÙ^Yœ˜[Y\Î˜K[Y\ÎX\ÙN›ÏH™X\ÙR[“Ý]ŸJ^ØÛÛœÝJOO\œ˜^Kš\Ð\œ˜^JJI‰ˆ›[X™\ˆˆOO]\[ÙˆVÌJJÊOÛË›X\
ZJN–ZJÊK^ÙÛ™NˆLK˜[YN˜VÌ_KY[˜Ý[ÛŠKJ^Ü™]\›ˆK›X\
OO™J˜J_J	‰›[™ÝOOXK›[™ÝÝœÊJKJKÏQÊKÙX\ÙN\œ˜^Kš\Ð\œ˜^JŠOÛŽŠOXKÏ[‹K›X\


OO˜ßÚJKœÜXÙJK›[™ÝLJJ_JNÝ˜\ˆKÎÜ™]\›žØØ[Ý[]Y\˜][ÛŽ™K™^˜OOŠ‹˜[YO\ÊJK‹™Û™OXOYKŠ__XÛÛœÝOHLKšOJKJOOˆž’[™^ˆOOXI‰ŠJ›[X™\ˆˆOO]\[ÙˆI‰ˆP\œ˜^Kš\Ð\œ˜^JJJ_JœÝš[™ÈˆOO]\[Ùˆ_YÜË\Ý
JI‰ˆŒˆOOY_KœÝ\ÕÚ]
\›
ŠJJNÙ[˜Ý[ÛˆZJKKÊ^ØÛÛœÝYVÌNÚYŠ[OO[Š\™]\›ˆLNÚYŠ™\Ü^HOOX_š\ÚXš[]HOOXJ\™]\›ˆLØÛÛœÝYVÙK›[™ÝLWKVšJ‹JKÏVšJ‹JNÜ™]\›ˆ\ŠOO\Ë[ÝH\™HžZ[™ÈÈ[š[X]H	Ø_Hœ›ÛH‰ÛŸHˆÈ‰ÜŸH‹ˆ	ÛŸH\È›Ý[ˆ[š[X]X›H˜[YHHÈ[˜X›H\È[š[X][ÛˆÙ]	ÛŸHÈH˜[YH[š[X]X›HÈ	ÜŸHšXHHÝ[W›Ü\K˜
KJ[\ÊI‰Š[˜Ý[ÛŠJ^ØÛÛœÝOYVÌNÚYŠOOOYK›[™Ý
\™]\›ˆLÙ›ÜŠ]LÝK›[™ÝÝ
ÊÊZYŠVÝHOOXJ\™]\›ˆLJJ_
œÜš[™ÈOO]\Š
JI‰›Ê_XÛÛœÝXÏYOO›[OOYNÙ[˜Ý[ÛˆXÊKÜ™\X]˜K™\X]\NH›ÛÜŸKÊ^ØÛÛœÝYK™š[\ŠXÊKXI‰ˆ›ÛÜˆOO]	‰˜ILOOLOÌ›‹›[™ÝLNÜ™]\›ˆ‰‰›ÚYOO[ÏÛÎ›–Ü—_XÛ\ÜÈÞØÛÛœÝXÝÜŠØ]]Ü^N™OHL[^N˜OL\NHšÙ^Yœ˜[Y\È‹™\X]›ÏL™\X][^N›L™\X]\NœH›ÛÜ‹‹‹›J^Ý\Ëš\ÔÝÜYHLK\Ëš\Ð][\Y™\ÛÛ™OHLK\Ë˜Ü™X]Y]U‹››ÝÊ
K\Ë›Ü[ÛœÏ^Ø]]Ü^N™K[^N˜K\N™\X]›Ë™\X][^N›‹™\X]\Nœ‹‹‹›K\Ë\]Qš[š\ÚY›ÛZ\ÙJ
_XØ[ÔÝ\[YJ
^Ü™]\›ˆ\Ëœ™\ÛÛ™Y]	‰\Ëœ™\ÛÛ™Y]]\Ë˜Ü™X]Y]Ý\Ëœ™\ÛÛ™Y]\Ë˜Ü™X]Y]YÙ]™\ÛÛ™Y

^Ü™]\›ˆ\Ë—Ü™\ÛÛ™Y\Ëš\Ð][\Y™\ÛÛ™_
ÚJ
KZJ
JK\Ë—Ü™\ÛÛ™Y[Û’Ù^Yœ˜[Y\Ô™\ÛÛ™Y
KJ^Ý\Ëœ™\ÛÛ™Y]U‹››ÝÊ
K\Ëš\Ð][\Y™\ÛÛ™OHLØÛÛœÝÛ˜[YN\N›Ë™[ØÚ]N›‹[^Nœ‹ÛÛÛ\]N›Û•\]NœË\ÑÙ[™\˜]ÜŽš_O]\Ë›Ü[ÛœÎÚYŠZI‰ˆTZJKËŠJ^ÚYŠ_\Š\™]\›ˆ[OO\ß›ÚYOO\ßÊXÊK\Ë›Ü[ÛœËJJK[OO[›ÚYOO[

K›ÚY\Ëœ™\ÛÛ™Qš[š\ÚY›ÛZ\ÙJ
NÝ\Ë›Ü[ÛœË™\˜][ÛLXÛÛœÝÏ]\Ëš[š]^X˜XÚÊKJNÈLHOOXÉ‰Š\Ë—Ü™\ÛÛ™Y^ÚÙ^Yœ˜[Y\Î™Kš[˜[Ù^Yœ˜[YN˜K‹‹˜ßK\Ë›Û”ÜÝ™\ÛÛ™Y

J_[Û”ÜÝ™\ÛÛ™Y

^ß][ŠKJ^Ü™]\›ˆ\Ë˜Ý\œ™[š[š\ÚY›ÛZ\ÙK[ŠKJ_Y›][Š
^Ý\Ë›Ü[ÛœË\OHšÙ^Yœ˜[Y\È‹\Ë›Ü[ÛœË™X\ÙOH›[™X\ˆŸ]\]Qš[š\ÚY›ÛZ\ÙJ
^Ý\Ë˜Ý\œ™[š[š\ÚY›ÛZ\ÙO[™]È›ÛZ\ÙJOOžÝ\Ëœ™\ÛÛ™Qš[š\ÚY›ÛZ\ÙOY_J__XÛÛœÝØÏYOOžØÛÛœÝOJÝ[Y\Ý[\˜_JOO™JJNÜ™]\›žÜÝ\Š
OO”Ü‹\]JKL
KÝÜŠ
OO“ŠJK›ÝÎŠ
OO\‹š\Ô›ØÙ\ÜÚ[™ÏÐ\‹[Y\Ý[\•‹››ÝÊ
__K˜Ï^ÙXØ^N”šK[™\XN”šKÙY[Ž‰KÙ^Yœ˜[Y\Î‰KÜš[™Î•š_K˜ÏYOO™KÌLØÛ\ÜÈÈ^[™ÈÞØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJK\ËšÛ[YO[[\Ë˜Ø[˜Ù[[YO[[\Ë˜Ý\œ™[[YOL\Ëœ^X˜XÚÔÜYYLK\Ëœ[™[™Ô^TÝ]OHœ[›š[™È‹\ËœÝ\[YO[[\ËœÝ]OHšYH‹\ËœÝÜJ
OOžÚYŠ\Ëœ™\ÛÛ™\‹˜Ø[˜Ù[

K\Ëš\ÔÝÜYHLšYHOO]\ËœÝ]J\™]\›ŽÝ\ËX\™ÝÛŠ
NØÛÛœÝÛÛ”ÝÜ™_O]\Ë›Ü[ÛœÎÙI‰™J
_NØÛÛœÝÛ˜[YN˜K[Ý[Û•˜[YN[[Y[›ËÙ^Yœ˜[Y\Î›ŸO]\Ë›Ü[ÛœËJ[OO[ß›ÚYOO[ÏÝ›ÚY›Ë’Ù^Yœ˜[YT™\ÛÛ™\Š_ZNÝ\Ëœ™\ÛÛ™\[™]ÈŠ‹
KJOO\Ë›Û’Ù^Yœ˜[Y\Ô™\ÛÛ™Y
KJKKÊK\Ëœ™\ÛÛ™\‹œØÚY[T™\ÛÛ™J
_Y›][Š
^ÜÝ\\‹™›][Š
K\Ë—Ü™\ÛÛ™Y	‰“Øš™XÝ˜\ÜÚYÛŠ\Ë—Ü™\ÛÛ™Y\Ëš[š]^X˜XÚÊ\Ë—Ü™\ÛÛ™YšÙ^Yœ˜[Y\ÊJ_Z[š]^X˜XÚÊJ^ØÛÛœÝÝ\N˜OHšÙ^Yœ˜[Y\È‹™\X]L™\X][^N›ÏL™\X]\N›‹™[ØÚ]NœLO]\Ë›Ü[ÛœË\\ŠJOØN›˜ÖØW_	NÛ]ËNÛOOII‰ˆ›[X™\ˆˆOO]\[ÙˆVÌI‰ŠÏ\œÊ˜Ë\ÊVÌKVÌWJJKOVÌLJNØÛÛœÝÏ[
Ë‹‹\Ë›Ü[ÛœËÙ^Yœ˜[Y\Î™_JNÈ›Z\œ›ÜˆOO[‰‰ŠO[
Ë‹‹\Ë›Ü[ÛœËÙ^Yœ˜[Y\Î–Ë‹‹™WKœ™]™\œÙJ
K™[ØÚ]N‹\ŸJJK[OOXË˜Ø[Ý[]Y\˜][Û‰‰ŠË˜Ø[Ý[]Y\˜][ÛU\ŠÊJNØÛÛœÝØØ[Ý[]Y\˜][ÛŽ_OXËO]JÛÎÜ™]\›žÙÙ[™\˜]ÜŽ˜ËZ\œ›Ü™YÙ[™\˜]ÜŽšKX\\˜Ù[ÒÙ^Yœ˜[Y\ÎœËØ[Ý[]Y\˜][ÛŽK™\ÛÛ™Y\˜][ÛŽ›KÝ[\˜][ÛŽ›JŠ
ÌJK[ß_[Û”ÜÝ™\ÛÛ™Y

^ØÛÛœÝØ]]Ü^N™OHLO]\Ë›Ü[ÛœÎÝ\Ëœ^J
Kœ]\ÙYˆOO]\Ëœ[™[™Ô^TÝ]I‰™OÝ\ËœÝ]O]\Ëœ[™[™Ô^TÝ]N\Ëœ]\ÙJ
_]XÚÊKOHLJ^ØÛÛœÝÜ™\ÛÛ™YO]\ÎÚYŠ]
^ØÛÛœÝÚÙ^Yœ˜[Y\Î™_O]\Ë›Ü[ÛœÎÜ™]\›žÙÛ™NˆL˜[YN™VÙK›[™ÝLW__XÛÛœÝÙš[˜[Ù^Yœ˜[YN›ËÙ[™\˜]ÜŽ›‹Z\œ›Ü™YÙ[™\˜]ÜŽœ‹X\\˜Ù[ÒÙ^Yœ˜[Y\Î›Ù^Yœ˜[Y\ÎœËØ[Ý[]Y\˜][ÛŽšKÝ[\˜][ÛŽ˜Ë™\ÛÛ™Y\˜][ÛŽ_O]ÚYŠ[OO]\ËœÝ\[YJ\™]\›ˆ‹›™^

NØÛÛœÝÙ[^N›K™\X]œ™\X]\N™™\X][^NžKÛ•\]N™ßO]\Ë›Ü[ÛœÎÝ\ËœÜYYŒÝ\ËœÝ\[YOSX]›Z[Š\ËœÝ\[YKJN\ËœÜYY	‰Š\ËœÝ\[YOSX]›Z[ŠKXËÝ\ËœÜYY\ËœÝ\[YJJKOÝ\Ë˜Ý\œ™[[YOYN›[OO]\ËšÛ[YOÝ\Ë˜Ý\œ™[[YO]\ËšÛ[YN\Ë˜Ý\œ™[[YOSX]œ›Ý[™
K]\ËœÝ\[YJJ\ËœÜYYØÛÛœÝ]\Ë˜Ý\œ™[[YK[JŠ\ËœÜYYLÌN‹LJK]\ËœÜYYLÚš˜ÎÝ\Ë˜Ý\œ™[[YOSX]›X^

K™š[š\ÚYOO]\ËœÝ]I‰›[OO]\ËšÛ[YI‰Š\Ë˜Ý\œ™[[YOXÊNÛ]]\Ë˜Ý\œ™[[YKÏ[ŽÚYŠ
^ØÛÛœÝOSX]›Z[Š\Ë˜Ý\œ™[[YKÊKÝNÛ]OSX]™›ÛÜŠJKYILNÈ]	‰™OLI‰ŠLJKOOO]	‰˜KKKOSX]›Z[ŠK
ÌJNÐ›ÛÛX[ŠILŠI‰Šœ™]™\œÙHOOYÊLK]I‰ŠO^KÝJJNˆ›Z\œ›ÜˆOOY	‰ŠÏ\ŠJKU
K
J_XÛÛœÝXÞÙÛ™NˆLK˜[YNœÖÌ_NË›™^
ŠNÛ	‰Š‹˜[YO[
‹˜[YJJNÛ]ÙÛ™N—ßO]ŽØŸ[OOZ_
Ï]\ËœÜYYLÝ\Ë˜Ý\œ™[[YOXÎ\Ë˜Ý\œ™[[YOL
NØÛÛœÝÏ[[OO]\ËšÛ[YI‰Š™š[š\ÚYOO]\ËœÝ]_œ[›š[™ÈOO]\ËœÝ]I‰—ÊNÜ™]\›ˆÉ‰›ÚYOO[É‰Š‹˜[YOXXÊË\Ë›Ü[ÛœËÊJKÉ‰™Ê‹˜[YJKÉ‰\Ë™š[š\Ú

KŸYÙ]\˜][ÛŠ
^ØÛÛœÝÜ™\ÛÛ™Y™_O]\ÎÜ™]\›ˆOÝÛ
K˜Ø[Ý[]Y\˜][ÛŠNŒYÙ][YJ
^Ü™]\›ˆÛ
\Ë˜Ý\œ™[[YJ_\Ù][YJJ^ÙOY›
JK\Ë˜Ý\œ™[[YOYK[OO]\ËšÛ[Y_OO]\ËœÜYYÝ\ËšÛ[YOYN\Ë™š]™\‰‰Š\ËœÝ\[YO]\Ë™š]™\‹››ÝÊ
KYKÝ\ËœÜYY
_YÙ]ÜYY

^Ü™]\›ˆ\Ëœ^X˜XÚÔÜYY\Ù]ÜYY
J^ØÛÛœÝO]\Ëœ^X˜XÚÔÜYYOOYNÝ\Ëœ^X˜XÚÔÜYYYKI‰Š\Ë[YO]Û
\Ë˜Ý\œ™[[YJJ_\^J
^ÚYŠ\Ëœ™\ÛÛ™\‹š\ÔØÚY[Y\Ëœ™\ÛÛ™\‹œ™\Ý[YJ
K]\Ë—Ü™\ÛÛ™Y
\™]\›ˆ›ÚY
\Ëœ[™[™Ô^TÝ]OHœ[›š[™ÈŠNÚYŠ\Ëš\ÔÝÜY
\™]\›ŽØÛÛœÝÙš]™\Ž™O[ØËÛ”^N˜KÝ\[YNO]\Ë›Ü[ÛœÎÝ\Ë™š]™\Ÿ
\Ë™š]™\YJOO\ËXÚÊJJJKI‰˜J
NØÛÛœÝÏ]\Ë™š]™\‹››ÝÊ
NÛ[OO]\ËšÛ[YOÝ\ËœÝ\[YO[Ë]\ËšÛ[YN\ËœÝ\[YOÈ™š[š\ÚYOO]\ËœÝ]I‰Š\ËœÝ\[YO[ÊN\ËœÝ\[YO[[OO]	‰›ÚYOO]Ý\Ë˜Ø[ÔÝ\[YJ
K™š[š\ÚYOO]\ËœÝ]I‰\Ë\]Qš[š\ÚY›ÛZ\ÙJ
K\Ë˜Ø[˜Ù[[YO]\ËœÝ\[YK\ËšÛ[YO[[\ËœÝ]OHœ[›š[™È‹\Ë™š]™\‹œÝ\

_\]\ÙJ
^Ý˜\ˆNÝ\Ë—Ü™\ÛÛ™YÊ\ËœÝ]OHœ]\ÙY‹\ËšÛ[YO[[OOJO]\Ë˜Ý\œ™[[YJI‰›ÚYOOYOÙNŒ
N\Ëœ[™[™Ô^TÝ]OHœ]\ÙYŸXÛÛ\]J
^Èœ[›š[™ÈˆOO]\ËœÝ]I‰\Ëœ^J
K\Ëœ[™[™Ô^TÝ]O]\ËœÝ]OH™š[š\ÚY‹\ËšÛ[YO[[Yš[š\Ú

^Ý\ËX\™ÝÛŠ
K\ËœÝ]OH™š[š\ÚYŽØÛÛœÝÛÛÛÛ\]N™_O]\Ë›Ü[ÛœÎÙI‰™J
_XØ[˜Ù[

^Û[OO]\Ë˜Ø[˜Ù[[YI‰\ËXÚÊ\Ë˜Ø[˜Ù[[YJK\ËX\™ÝÛŠ
K\Ë\]Qš[š\ÚY›ÛZ\ÙJ
_]X\™ÝÛŠ
^Ý\ËœÝ]OHšYH‹\ËœÝÜš]™\Š
K\Ëœ™\ÛÛ™Qš[š\ÚY›ÛZ\ÙJ
K\Ë\]Qš[š\ÚY›ÛZ\ÙJ
K\ËœÝ\[YO]\Ë˜Ø[˜Ù[[YO[[\Ëœ™\ÛÛ™\‹˜Ø[˜Ù[

_\ÝÜš]™\Š
^Ý\Ë™š]™\‰‰Š\Ë™š]™\‹œÝÜ

K\Ë™š]™\]›ÚY
_\Ø[\JJ^Ü™]\›ˆ\ËœÝ\[YOL\ËXÚÊKL
__Y[˜Ý[ÛˆØÊJ^ØÛÛœÝOQ


OO“ÜŠJJKÚ\ÔÝ]XÎOJJ
K\ÙPÛÛ^
J]
NÚYŠ
^ØÛÛœÝËOJJ
K\ÙTÝ]JJJNÊJ
K\ÙQY™™XÝ
J

OO˜K›ÛŠ˜Ú[™ÙH‹
K×J_\™]\›ˆ_XÛÛœÝXÏYOO›ÛÛX[ŠI‰™K™Ù]™[ØÚ]JNÙ[˜Ý[ÛˆØÊJ^Ü™]\›ˆ›[X™\ˆOO]\[ÙˆOÙNœ\œÙQ›Ø]
J_Y[˜Ý[ÛˆXÊKO^ßJ^ØÛÛœÝÚ\ÔÝ]XÎOJJ
K\ÙPÛÛ^
J]
KÏJJ
K\ÙT™YŠJ[
K\ØÊXÊJOØØÊK™Ù]

JN™JKJJ
K\ÙT™YŠJ‹™Ù]

JKJJ
K\ÙT™YŠJ

OOžßJKÏJ
OOžØÛÛœÝO[Ë˜Ý\œ™[Ý˜\ˆÙI‰ŒOOYK[YI‰™KœØ[\J\‹™[JKÊ
KË˜Ý\œ™[J^ÚÙ^Yœ˜[Y\Î–Û‹™Ù]

K‹˜Ý\œ™[K™[ØÚ]N›‹™Ù]™[ØÚ]J
K\NˆœÜš[™È‹™\Ý[N‹ŒK™\ÝÜYY‹ŒK‹‹˜KÛ•\]N›˜Ý\œ™[K™]ÈÊ
J_KÏJ
OOžÛË˜Ý\œ™[	‰›Ë˜Ý\œ™[œÝÜ

_NÜ™]\›ŠJ
K\ÙR[œÙ\[Û‘Y™™XÝ
J

OO›‹˜]XÚ

KJOOØJJNŠ‹˜Ý\œ™[YK˜Ý\œ™[XKÜ‹\]JÊK‹™Ù]

JKÊKÒ”ÓÓ‹œÝš[™ÚYžJJWJK\Ê

OOžÚYŠXÊJJ\™]\›ˆK›ÛŠ˜Ú[™ÙH‹OO›‹œÙ]
ØÊJJJ_KÛ—JKŸY[˜Ý[ÛˆXÊJ^ÚYŠ[™Yš[™YOO]\[Ùˆ›ÞJ\™]\›ˆNØÛÛœÝO[™]ÈX\Ü™]\›ˆ™]È›ÞJ
‹‹˜JOO™J‹‹˜JKÙÙ]ŠÊOOˆ˜Ü™X]HOO[ÏÙNŠKš\ÊÊ_KœÙ]
ËJÊJKK™Ù]
ÊJ_J_Y[˜Ý[ÛˆÊJ^Ü™]\›ˆ[OOYI‰ˆ›Øš™XÝOO]\[ÙˆI‰ˆ™[˜Ý[ÛˆOO]\[ÙˆKœÝ\XÛÛœÝÏYOO\œ˜^Kš\Ð\œ˜^JJNÙ[˜Ý[ÛˆXÊKJ^ÚYŠP\œ˜^Kš\Ð\œ˜^JJJ\™]\›ˆLNØÛÛœÝXK›[™ÝÚYŠOOYK›[™Ý
\™]\›ˆLNÙ›ÜŠ]ÏLÛÏÛÊÊÊZYŠVÛ×HOOYVÛ×J\™]\›ˆLNÜ™]\›ˆLY[˜Ý[ÛˆØÊJ^Ü™]\›ˆœÝš[™ÈOO]\[Ùˆ_\œ˜^Kš\Ð\œ˜^JJ_Y[˜Ý[ÛˆÊJ^ØÛÛœÝOVÞßKßWNÜ™]\›ˆ[OOY_›ÚYOOY_K˜[Y\Ë™›Ü‘XXÚ

K
OOžØVÌVÝOYK™Ù]

KVÌWVÝOYK™Ù]™[ØÚ]J
_JK_Y[˜Ý[Ûˆ˜ÊKKÊ^ÚYŠ™[˜Ý[ÛˆOO]\[ÙˆJ^ØÛÛœÝÛ‹—OZÊÊNØOXJ›ÚYOO]Ý™K˜Ý\ÝÛK‹Š_ZYŠœÝš[™ÈOO]\[ÙˆI‰ŠOYK˜\šX[É‰™K˜\šX[ÖØWJK™[˜Ý[ÛˆOO]\[ÙˆJ^ØÛÛœÝÛ‹—OZÊÊNØOXJ›ÚYOO]Ý™K˜Ý\ÝÛK‹Š_\™]\›ˆ_Y[˜Ý[Ûˆ˜ÊKK
^ØÛÛœÝÏYK™Ù]›ÜÊ
NÜ™]\›ˆ˜ÊËK›ÚYOO]Ý›Ë˜Ý\ÝÛKJ_XÛÛœÝØÏVÈ˜[š[X]H‹Ú[R[•šY]È‹Ú[Q›ØÝ\È‹Ú[RÝ™\ˆ‹Ú[U\‹Ú[Q˜YÈ‹™^]—K˜ÏVÈš[š]X[‹‹‹Ø×KØÏ[™]ÈÙ]
ÈÚY‹šZYÚ‹Ü‹›Y‹œšYÚ‹˜›ÝÛH‹‹‹–×JKØÏYOO™ÊJOÙVÙK›[™ÝLW_™NÙ[˜Ý[ÛˆÊKK
^ÙKš\Õ˜[YJJOÙK™Ù]˜[YJJKœÙ]

N™K˜Y˜[YJKÜŠ
J_Y[˜Ý[ÛˆØÊKJ^ØÛÛœÝYK™Ù]˜[YJÚ[Ú[™ÙHŠNÚYŠÏ]›ÛÛX[ŠXÊÊI‰›Ë˜Y
J\™]\›ˆ˜Y
JNÝ˜\ˆßXÛÛœÝØÏYOO™Kœ™\XÙJÊØK^—JJÐKV—JKÙÝK‰KIˆŠKÓÝÙ\Ø\ÙJ
KÏH™]KHŠÔØÊ™œ˜[Y\\X\’YŠNÙ[˜Ý[ÛˆXÊJ^Ü™]\›ˆKœ›ÜÖÓ×_XÛÛœÝÏYOO‹×Œ×‹—×JÉÝK\Ý
JNÙ[˜Ý[Ûˆ˜ÊJ^Ü™]\›ˆ›[X™\ˆOO]\[ÙˆOÌOOYN›[OOY_
››Û™HOOY_ŒOOY_ÊJJ_XÛÛœÝXÏ[™]ÈÙ]
È˜œšYÚ™\ÜÈ‹˜ÛÛ˜\Ý‹œØ]\˜]H‹›ÜXÚ]H—JNÙ[˜Ý[ÛˆÊJ^ØÛÛœÝØKOYKœÛXÙJLJKœÜ]
ŠŠNÚYŠ™›Ü\ÚYÝÈOOXJ\™]\›ˆNØÛÛœÝÛ×O]›X]Ú
Û
_×NÚYŠ[Ê\™]\›ˆNØÛÛœÝ]œ™\XÙJËˆŠNÛ]SXËš\ÊJOÌNŒÜ™]\›ˆÈOO]	‰ŠŠLL
KJÈŠŠÜŠÛŠÈŠHŸXÛÛœÝ˜ÏK×ŠØK^‹WJŠW
Š×
KÙÝK˜Ï^Ë‹‹™ÜËÙ][š[X]X›S›Û™N™OOžØÛÛœÝOYK›X]Ú
˜ÊNÜ™]\›ˆOØK›X\
ÊKš›Ú[ŠˆŠN™__KÏ^Ø›Ü™\•ÚY’››Ü™\•ÜÚY’››Ü™\”šYÚÚY’››Ü™\›ÝÛUÚY’››Ü™\“YÚY’››Ü™\”˜Y]\Î’›˜Y]\Î’››Ü™\•ÜY˜Y]\Î’››Ü™\•ÜšYÚ˜Y]\Î’››Ü™\›ÝÛTšYÚ˜Y]\Î’››Ü™\›ÝÛSY˜Y]\Î’›ÚY’›X^ÚY’›ZYÚ’›X^ZYÚ’›Ü’›šYÚ’››ÝÛN’›Y’›Y[™Î’›Y[™ÕÜ’›Y[™ÔšYÚ’›Y[™Ð›ÝÛN’›Y[™ÓY’›X\™Ú[Ž’›X\™Ú[•Ü’›X\™Ú[”šYÚ’›X\™Ú[›ÝÛN’›X\™Ú[“Y’›˜XÚÙÜ›Ý[™ÜÚ][Û–’›˜XÚÙÜ›Ý[™ÜÚ][Û–N’›K˜Ï^Ü›Ý]N•[›Ý]V•[›Ý]VN•[›Ý]VŽ•[ØØ[N‘ÛØØ[V‘ÛØØ[VN‘ÛØØ[VŽ‘ÛÚÙ]Î•[ÚÙ]Ö•[ÚÙ]ÖN•[\Ý[˜ÙN’›˜[œÛ]V’›˜[œÛ]VN’›˜[œÛ]VŽ’›’›N’›Ž’›\œÜXÝ]™N’›˜[œÙ›Ü›T\œÜXÝ]™N’›ÜXÚ]N‘›ÜšYÚ[––ÜšYÚ[–N–ÜšYÚ[–Ž’›KØÏ^Ë‹‹”˜[œÙ›Ü›N“X]œ›Ý[™KØÏ^Ë‹‹”Ë‹‹‘˜Ë’[™^‘ØËÚ^™N’›š[ÜXÚ]N‘›Ý›ÚÙSÜXÚ]N‘›[SØÝ]™\Î‘ØßKØÏ^Ë‹‹•ØËÛÛÜŽ›Ë˜XÚÙÜ›Ý[™ÛÛÜŽ›ËÝ][™PÛÛÜŽ›Ëš[›ËÝ›ÚÙN›Ë›Ü™\ÛÛÜŽ›Ë›Ü™\•ÜÛÛÜŽ›Ë›Ü™\”šYÚÛÛÜŽ›Ë›Ü™\›ÝÛPÛÛÜŽ›Ë›Ü™\“YÛÛÜŽ›Ëš[\Ž”˜ËÙXšÚ]š[\Ž”˜ßKXÏYOO“ØÖÙWNÙ[˜Ý[ÛˆÊKJ^Û]QXÊJNÜ™]\›ˆOOT˜É‰ŠYÜÊK™Ù][š[X]X›S›Û™OÝ™Ù][š[X]X›S›Û™JJN›ÚYXÛÛœÝ˜Ï[™]ÈÙ]
È˜]]È‹››Û™H‹Œ—JNØÛÛœÝØÏYOO‹×‹OÊÎ—
ÊÎ——
ÊOß—
ÊIÝK\Ý
JK˜ÏK×˜\—
KJÎŠ×ËWJÊ_
×ËWJÊKÊØK^KV—

IHË‹WJÊJW
KÝNÙ[˜Ý[ÛˆXÊKKLJ^ÒŠMX^ÔÔÈ˜\šXX›H˜[˜XÚÈ\]XÝY[ˆ›Ü\H‰Ù_H‹ˆ\ÈX^H[™XØ]HHÚ\˜Ý[\ˆ˜[˜XÚÈ\[™[˜ÞK˜
NØÛÛœÝÛË—OY[˜Ý[ÛŠJ^ØÛÛœÝOZ˜Ë™^XÊJNÚYŠXJ\™]\›–ËNØÛÛœÝËË—OXNÜ™]\›–ØKIÛ[OO]	‰›ÚYOO]Ý›ßX—_JJNÚYŠ[Ê\™]\›ŽØÛÛœÝ]Ú[™ÝË™Ù]ÛÛ\]YÝ[JJK™Ù]›Ü\U˜[YJÊNÚYŠŠ^ØÛÛœÝO\‹š[J
NÜ™]\›ˆØÊJOÜ\œÙQ›Ø]
JN™_\™]\›ˆÜÊŠOÒXÊ‹K
ÌJN›ŸXÛÛœÝ˜ÏYOO˜OO˜K\Ý
JKXÏVÔ›[[	[Ý\Ý™OOˆ˜]]ÈOOYK\œÙN™OO™_WKXÏYOO•XË™š[™
˜ÊJJNØÛ\ÜÈ˜È^[™ÈZ^ØÛÛœÝXÝÜŠKKËŠ^ÜÝ\\ŠKKË‹L
_\™XYÙ^Yœ˜[Y\Ê
^ØÛÛœÝÝ[œ™\ÛÛ™YÙ^Yœ˜[Y\Î™K[[Y[˜K˜[YNO]\ÎÚYŠX_XK˜Ý\œ™[
\™]\›ŽÜÝ\\‹œ™XYÙ^Yœ˜[Y\Ê
NÙ›ÜŠ]ÏLÜÏK›[™ÝÜÊÊÊ^Û]YVÜ×NÚYŠœÝš[™ÈOO]\[Ùˆ	‰Š]š[J
KÜÊ
JJ^ØÛÛœÝÏRXÊK˜Ý\œ™[
NÝ›ÚYOO[É‰ŠVÜ×O[ÊKÏOOYK›[™ÝLI‰Š\Ë™š[˜[Ù^Yœ˜[YO]
__ZYŠ\Ëœ™\ÛÛ™S›Û™RÙ^Yœ˜[Y\Ê
KWØËš\Ê
_ˆOOYK›[™Ý
\™]\›ŽØÛÛœÝÛË—OYK\XÊÊK\XÊŠNÚYŠˆOO[
ZYŠ\ÊŠI‰”\Ê
JY›ÜŠ]ÏLÜÏK›[™ÝÜÊÊÊ^ØÛÛœÝOYVÜ×NÈœÝš[™ÈOO]\[ÙˆI‰ŠVÜ×O\\œÙQ›Ø]
JJ_Y[ÙH\Ë›™YYÓYX\Ý\™[Y[HL\™\ÛÛ™S›Û™RÙ^Yœ˜[Y\Ê
^ØÛÛœÝÝ[œ™\ÛÛ™YÙ^Yœ˜[Y\Î™K˜[YN˜_O]\ËV×NÙ›ÜŠ]ÏLÛÏK›[™ÝÛÊÊÊP˜ÊVÛ×JI‰œ\Ú
ÊNÝ›[™Ý	‰™[˜Ý[ÛŠKK
^Û]ËLÙ›ÜŠÛK›[™Ý	‰ˆ[ÎÊ^ØÛÛœÝOYVÛ—NÈœÝš[™ÈOO]\[ÙˆI‰ˆS˜Ëš\ÊJI‰›\ÊJK˜[Y\Ë›[™Ý	‰ŠÏYVÛ—JKŠÊßZYŠÉ‰
Y›ÜŠÛÛœÝˆÙˆJYVÜ—ORÊÊ_JKJ_[YX\Ý\™R[š]X[Ý]J
^ØÛÛœÝÙ[[Y[™K[œ™\ÛÛ™YÙ^Yœ˜[Y\Î˜K˜[YNO]\ÎÚYŠY_YK˜Ý\œ™[
\™]\›ŽÈšZYÚOO]	‰Š\ËœÝ\Ü[™YØÜ›ÛO]Ú[™ÝËœYÙVSÙ™œÙ]
K\Ë›YX\Ý\™YÜšYÚ[[šVÝJK›YX\Ý\™UšY]ÜÜ›Þ

KÚ[™ÝË™Ù]ÛÛ\]YÝ[JK˜Ý\œ™[
JKVÌO]\Ë›YX\Ý\™YÜšYÚ[ŽØÛÛœÝÏXVØK›[™ÝLWNÝ›ÚYOO[É‰™K™Ù]˜[YJÊKš[\
ËLJ_[YX\Ý\™Q[™Ý]J
^Ý˜\ˆNØÛÛœÝÙ[[Y[˜K˜[YN[œ™\ÛÛ™YÙ^Yœ˜[Y\Î›ßO]\ÎÚYŠX_XK˜Ý\œ™[
\™]\›ŽØÛÛœÝXK™Ù]˜[YJ
NÛ‰‰›‹š[\
\Ë›YX\Ý\™YÜšYÚ[‹LJNØÛÛœÝ[Ë›[™ÝLK[ÖÜ—NÛÖÜ—O[šVÝJK›YX\Ý\™UšY]ÜÜ›Þ

KÚ[™ÝË™Ù]ÛÛ\]YÝ[JK˜Ý\œ™[
JK[OO[	‰›ÚYOO]\Ë™š[˜[Ù^Yœ˜[YI‰Š\Ë™š[˜[Ù^Yœ˜[YO[
K
[OOJO]\Ëœ™[[Ý™Y˜[œÙ›Ü›\Ê_›ÚYOOYOÝ›ÚY™K›[™Ý
I‰\Ëœ™[[Ý™Y˜[œÙ›Ü›\Ë™›Ü‘XXÚ

ÙKJOOžØK™Ù]˜[YJJKœÙ]

_JK\Ëœ™\ÛÛ™S›Û™RÙ^Yœ˜[Y\Ê
__XÛÛœÝXÏ[™]ÈÙ]
È›ÜXÚ]H‹˜Û\]‹™š[\ˆ‹˜[œÙ›Ü›H—JNØÛÛœÝ	ÏSœŠ

OO“Øš™XÝš\ÓÝÛ”›Ü\K˜Ø[
[[Y[œ›ÝÝ\K˜[š[X]HŠJNØÛÛœÝÏ^Ø[XÚ\]N’ZK˜XÚÒ[“Ý]ššKÚ\˜Ò[“Ý]œZ_NØÛ\ÜÈ˜È^[™ÈÞØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJNØÛÛœÝÛ˜[YN˜K[Ý[Û•˜[YN[[Y[›ËÙ^Yœ˜[Y\Î›ŸO]\Ë›Ü[ÛœÎÝ\Ëœ™\ÛÛ™\[™]È˜Ê‹
KJOO\Ë›Û’Ù^Yœ˜[Y\Ô™\ÛÛ™Y
KJKKÊK\Ëœ™\ÛÛ™\‹œØÚY[T™\ÛÛ™J
_Z[š]^X˜XÚÊKJ^Ý˜\ˆÛ]Ù\˜][ÛŽ›ÏLÌ[Y\Î›‹X\ÙNœ‹\N›[Ý[Û•˜[YNœË˜[YNšKÝ\[YN˜ßO]\Ë›Ü[ÛœÎÚYŠJ[OOJ\Ë›ÝÛ™\Š_›ÚYOO]Ý›ÚY˜Ý\œ™[
J\™]\›ˆLNÝ˜\ˆNÚYŠœÝš[™ÈOO]\[Ùˆ‰‰–œŠ
I‰œˆ[ˆÉ‰ŠVÖÜ—JK\Š
O]\Ë›Ü[ÛœÊK\J_œÜš[™ÈOO]K\_X[
K™X\ÙJJ^ØÛÛœÝÛÛÛÛ\]N˜KÛ•\]N[Ý[Û•˜[YNœË[[Y[šK‹‹˜ßO]\Ë›Ü[ÛœËOY[˜Ý[ÛŠKJ^ØÛÛœÝ[™]ÈÊË‹‹˜KÙ^Yœ˜[Y\Î™K™\X]Œ[^NŒ\ÑÙ[™\˜]ÜŽˆLJNÛ]Ï^ÙÛ™NˆLK˜[YN™VÌ_NØÛÛœÝV×NÛ]LÙ›ÜŠÈ[Ë™Û™I‰œ™MÊ[Ï]œØ[\JŠK‹œ\Ú
Ë˜[YJKŠÏLLÜ™]\›žÝ[Y\Î›ÚYÙ^Yœ˜[Y\Î›‹\˜][ÛŽœ‹LLX\ÙNˆ›[™X\ˆŸ_JKÊNÌOOOJO]KšÙ^Yœ˜[Y\ÊK›[™Ý	‰ŠVÌWOYVÌJKÏ]K™\˜][Û‹]K[Y\Ë]K™X\ÙKHšÙ^Yœ˜[Y\ÈŸXÛÛœÝOY[˜Ý[ÛŠKKÙ[^N›ÏL\˜][ÛŽ›LÌ™\X]œL™\X]\N›H›ÛÜ‹X\ÙNœÏH™X\ÙR[“Ý]‹[Y\Îš_O^ßJ^ØÛÛœÝÏ^ÖØWNNÚI‰ŠË›Ù™œÙ]ZJNØÛÛœÝO[›
ËŠNÜ™]\›ˆ\œ˜^Kš\Ð\œ˜^JJI‰ŠË™X\Ú[™Ï]JKK˜[š[X]JËÙ[^N›Ë\˜][ÛŽ›‹X\Ú[™Î\œ˜^Kš\Ð\œ˜^JJOÈ›[™X\ˆŽKš[ˆ˜›Ý‹]\˜][ÛœÎœŠÌK\™XÝ[ÛŽˆœ™]™\œÙHOO[È˜[\›˜]HŽˆ››Ü›X[ŸJ_JË›ÝÛ™\‹˜Ý\œ™[KKË‹‹\Ë›Ü[ÛœË\˜][ÛŽ›Ë[Y\Î›‹X\ÙNœŸJNÜ™]\›ˆKœÝ\[YO[[OOXÉ‰›ÚYOOXÏØÎ\Ë˜Ø[ÔÝ\[YJ
K\Ëœ[™[™Õ[Y[[™OÊœŠK\Ëœ[™[™Õ[Y[[™JK\Ëœ[™[™Õ[Y[[™O]›ÚY
N›K›Û™š[š\ÚJ
OOžØÛÛœÝÛÛÛÛ\]NO]\Ë›Ü[ÛœÎÜËœÙ]
XÊK\Ë›Ü[ÛœËJJK	‰

K\Ë˜Ø[˜Ù[

K\Ëœ™\ÛÛ™Qš[š\ÚY›ÛZ\ÙJ
_KØ[š[X][ÛŽ›K\˜][ÛŽ›Ë[Y\Î›‹\N›X\ÙNœ‹Ù^Yœ˜[Y\Î™__YÙ]\˜][ÛŠ
^ØÛÛœÝÜ™\ÛÛ™Y™_O]\ÎÚYŠYJ\™]\›ˆØÛÛœÝÙ\˜][ÛŽ˜_OYNÜ™]\›ˆÛ
J_YÙ][YJ
^ØÛÛœÝÜ™\ÛÛ™Y™_O]\ÎÚYŠYJ\™]\›ˆØÛÛœÝØ[š[X][ÛŽ˜_OYNÜ™]\›ˆÛ
K˜Ý\œ™[[Y_
_\Ù][YJJ^ØÛÛœÝÜ™\ÛÛ™Y˜_O]\ÎÚYŠXJ\™]\›ŽØÛÛœÝØ[š[X][ÛŽOXNÝ˜Ý\œ™[[YOY›
J_YÙ]ÜYY

^ØÛÛœÝÜ™\ÛÛ™Y™_O]\ÎÚYŠYJ\™]\›ˆNØÛÛœÝØ[š[X][ÛŽ˜_OYNÜ™]\›ˆKœ^X˜XÚÔ˜]_\Ù]ÜYY
J^ØÛÛœÝÜ™\ÛÛ™Y˜_O]\ÎÚYŠXJ\™]\›ŽØÛÛœÝØ[š[X][ÛŽOXNÝœ^X˜XÚÔ˜]OY_YÙ]Ý]J
^ØÛÛœÝÜ™\ÛÛ™Y™_O]\ÎÚYŠYJ\™]\›ˆšYHŽØÛÛœÝØ[š[X][ÛŽ˜_OYNÜ™]\›ˆKœ^TÝ]_YÙ]Ý\[YJ
^ØÛÛœÝÜ™\ÛÛ™Y™_O]\ÎÚYŠYJ\™]\›ˆ[ØÛÛœÝØ[š[X][ÛŽ˜_OYNÜ™]\›ˆKœÝ\[Y_X]XÚ[Y[[™JJ^ÚYŠ\Ë—Ü™\ÛÛ™Y
^ØÛÛœÝÜ™\ÛÛ™Y˜_O]\ÎÚYŠXJ\™]\›ˆÜŽØÛÛœÝØ[š[X][ÛŽOXNÒœŠJ_Y[ÙH\Ëœ[™[™Õ[Y[[™OYNÜ™]\›ˆÜŸ\^J
^ÚYŠ\Ëš\ÔÝÜY
\™]\›ŽØÛÛœÝÜ™\ÛÛ™Y™_O]\ÎÚYŠYJ\™]\›ŽØÛÛœÝØ[š[X][ÛŽ˜_OYNÈ™š[š\ÚYOOXKœ^TÝ]I‰\Ë\]Qš[š\ÚY›ÛZ\ÙJ
KKœ^J
_\]\ÙJ
^ØÛÛœÝÜ™\ÛÛ™Y™_O]\ÎÚYŠYJ\™]\›ŽØÛÛœÝØ[š[X][ÛŽ˜_OYNØKœ]\ÙJ
_\ÝÜ

^ÚYŠ\Ëœ™\ÛÛ™\‹˜Ø[˜Ù[

K\Ëš\ÔÝÜYHLšYHOO]\ËœÝ]J\™]\›ŽÝ\Ëœ™\ÛÛ™Qš[š\ÚY›ÛZ\ÙJ
K\Ë\]Qš[š\ÚY›ÛZ\ÙJ
NØÛÛœÝÜ™\ÛÛ™Y™_O]\ÎÚYŠYJ\™]\›ŽØÛÛœÝØ[š[X][ÛŽ˜KÙ^Yœ˜[Y\Î\˜][ÛŽ›Ë\N›‹X\ÙNœ‹[Y\Î›OYNÚYŠšYHOOXKœ^TÝ]_™š[š\ÚYOOXKœ^TÝ]J\™]\›ŽÚYŠ\Ë[YJ^ØÛÛœÝÛ[Ý[Û•˜[YN™KÛ•\]N˜KÛÛÛ\]NœË[[Y[šK‹‹˜ßO]\Ë›Ü[ÛœËO[™]ÈÊË‹‹˜ËÙ^Yœ˜[Y\Î\˜][ÛŽ›Ë\N›‹X\ÙNœ‹[Y\Î›\ÑÙ[™\˜]ÜŽˆLJKOY›
\Ë[YJNÙKœÙ]Ú]™[ØÚ]JKœØ[\JKLL
K˜[YKKœØ[\JJK˜[YKL
_XÛÛœÝÛÛ”ÝÜœßO]\Ë›Ü[ÛœÎÜÉ‰œÊ
K\Ë˜Ø[˜Ù[

_XÛÛ\]J
^ØÛÛœÝÜ™\ÛÛ™Y™_O]\ÎÙI‰™K˜[š[X][Û‹™š[š\Ú

_XØ[˜Ù[

^ØÛÛœÝÜ™\ÛÛ™Y™_O]\ÎÙI‰™K˜[š[X][Û‹˜Ø[˜Ù[

_\Ý]XÈÝ\ÜÊJ^ØÛÛœÝÛ[Ý[Û•˜[YN˜K˜[YN™\X][^N›Ë™\X]\N›‹[\[™Îœ‹\N›OYNÜ™]\›ˆ	Ê
I‰	‰–XËš\Ê
I‰˜I‰˜K›ÝÛ™\‰‰˜K›ÝÛ™\‹˜Ý\œ™[[œÝ[˜Ù[ÙˆS[[Y[	‰ˆXK›ÝÛ™\‹™Ù]›ÜÊ
K›Û•\]I‰ˆ[É‰ˆ›Z\œ›ÜˆˆOO[‰‰ŒOO\‰‰ˆš[™\XHˆOO[_XÛÛœÝXÏ^Ý\NˆœÜš[™È‹ÝY™›™\ÜÎL[\[™ÎŒK™\ÝÜYYŒLK]O^Ý\NˆšÙ^Yœ˜[Y\È‹\˜][ÛŽ‹ŽK]O^Ý\NˆšÙ^Yœ˜[Y\È‹X\ÙN–ËŒKŒKŒÍKWK\˜][ÛŽ‹ŒßKOJKÚÙ^Yœ˜[Y\Î˜_JOO˜K›[™ÝŒÙ]N–œËš\ÊJOÙKœÝ\ÕÚ]
œØØ[HŠOÞÝ\NˆœÜš[™È‹ÝY™›™\ÜÎML[\[™ÎŒOOXVÌWOÌŠ“X]œÜ\
ML
NŒÌ™\ÝÜYYŒLN”XÎ˜]NØÛÛœÝÝOJKKÏ^ßK‹ŠOO›OžØÛÛœÝÏ^œŠËJ_ßKO\Ë™[^_Ë™[^_Û]Ù[\ÙY˜ÏLO[ÎØËOY›
JNÛ]O^ÚÙ^Yœ˜[Y\Î\œ˜^Kš\Ð\œ˜^J
OÝ–Û[KX\ÙNˆ™X\ÙSÝ]‹™[ØÚ]N˜K™Ù]™[ØÚ]J
K‹‹œË[^N‹XËÛ•\]N™OOžØKœÙ]
JKË›Û•\]I‰œË›Û•\]JJ_KÛÛÛ\]NŠ
OOžÛ

KË›ÛÛÛ\]I‰œË›ÛÛÛ\]J
_K˜[YN™K[Ý[Û•˜[YN˜K[[Y[œÝ›ÚY›ŸNÊ[˜Ý[ÛŠÝÚ[Ž™K[^N˜K[^PÚ[™[ŽÝYÙÙ\Ú[™[Ž›ËÝYÙÙ\‘\™XÝ[ÛŽ›‹™\X]œ‹™\X]\N›™\X][^NœËœ›ÛNšK[\ÙY˜Ë‹‹_J^Ü™]\›ˆHSØš™XÝšÙ^\ÊJK›[™ÝJJÊ_
O^Ë‹‹K‹‹JKJ_JKK™\˜][Û‰‰ŠK™\˜][ÛY›
K™\˜][ÛŠJKKœ™\X][^I‰ŠKœ™\X][^OY›
Kœ™\X][^JJK›ÚYOO]K™œ›ÛI‰ŠKšÙ^Yœ˜[Y\ÖÌO]K™œ›ÛJNÛ]OHLNÚYŠ
LOOO]K\_OO]K™\˜][Û‰‰ˆ]Kœ™\X][^JI‰ŠK™\˜][ÛLOO]K™[^I‰ŠOHL
JK
_œŠI‰ŠOHLK™\˜][ÛLK™[^OL
KI‰ˆ\‰‰›ÚYOOXK™Ù]

J^ØÛÛœÝOXXÊKšÙ^Yœ˜[Y\ËÊNÚYŠ›ÚYOOYJ\™]\›ˆÜ‹\]J

OOžÝK›Û•\]JJKK›ÛÛÛ\]J
_JK™]È\Š×J_\™]\›ˆ\‰‰–˜ËœÝ\ÜÊJOÛ™]È˜ÊJN›™]ÈÊJ_NÙ[˜Ý[ÛˆJÜ›ÝXÝYÙ^\Î™K™YYÐ[š[X][™Î˜_K
^ØÛÛœÝÏYKš\ÓÝÛ”›Ü\J
I‰ˆLOOXVÝNÜ™]\›ˆVÝOHLKßY[˜Ý[ÛˆJKKÙ[^NL˜[œÚ][Û“Ý™\œšYN›Ë\N›ŸO^ßJ^Ý˜\ˆŽÛ]Ý˜[œÚ][ÛŽ›YK™Ù]Y˜][˜[œÚ][ÛŠ
K˜[œÚ][Û‘[™œË‹‹š_OXNÛÉ‰Š[ÊNØÛÛœÝÏV×KO[‰‰™K˜[š[X][Û”Ý]I‰™K˜[š[X][Û”Ý]K™Ù]Ý]J
VÛ—NÙ›ÜŠÛÛœÝH[ˆJ^ØÛÛœÝOYK™Ù]˜[YJK[OOJYK›]\Ý˜[Y\ÖÛWJI‰›ÚYOO\ÜŽ›[
KÏZVÛWNÚYŠ›ÚYOO[ßI‰›JKJJXÛÛ[YNØÛÛœÝ^Ù[^N‹‹žœŠßKJ_NÛ]ÏHLNÚYŠÚ[™ÝË“[Ý[Û’[™Ù™[š[X][ÛŠ^ØÛÛœÝOPXÊJNÚYŠJ^ØÛÛœÝO]Ú[™ÝË“[Ý[Û’[™Ù™[š[X][ÛŠKKÜŠNÛ[OOYI‰Š‹œÝ\[YOYKÏHL
__ZØÊKJKKœÝ\
ÝJKKËKœÚÝ[™YXÙS[Ý[Û‰‰—ØËš\ÊJOÞÝ\NˆL_N›‹KÊJNØÛÛœÝXK˜[š[X][ÛŽÜ	‰˜Ëœ\Ú

_\™]\›ˆÉ‰”›ÛZ\ÙK˜[
ÊK[Š

OOžÔÜ‹\]J

OOžÜÉ‰™[˜Ý[ÛŠKJ^ØÛÛœÝY˜ÊKJNÛ]Ý˜[œÚ][Û‘[™›Ï^ßK˜[œÚ][ÛŽ›^ßK‹‹œŸO]ßNÜ^Ë‹‹œ‹‹‹›ßNÙ›ÜŠÛÛœÝ[ˆŠ^ÊKØÊ–ÛJJ_JKÊ_J_JKßY[˜Ý[ÛˆJKK^ßJ^Ý˜\ˆÎØÛÛœÝY˜ÊKK™^]OO]\OÛ[OOJÏYKœ™\Ù[˜ÙPÛÛ^
_›ÚYOO[ÏÝ›ÚY›Ë˜Ý\ÝÛN›ÚY
NÛ]Ý˜[œÚ][ÛŽœYK™Ù]Y˜][˜[œÚ][ÛŠ
_ß_O[ŸßNÝ˜[œÚ][Û“Ý™\œšYI‰Š]˜[œÚ][Û“Ý™\œšYJNØÛÛœÝ[Ê
OO”›ÛZ\ÙK˜[
JK‹
JNŠ
OO”›ÛZ\ÙKœ™\ÛÛ™J
KÏYK˜\šX[Ú[™[‰‰™K˜\šX[Ú[™[‹œÚ^™OÊÏL
OOžØÛÛœÝÙ[^PÚ[™[Ž›LÝYÙÙ\Ú[™[Ž›ÝYÙÙ\‘\™XÝ[ÛŽœßO\ŽÜ™]\›ˆ[˜Ý[ÛŠKKLÏLLKŠ^ØÛÛœÝV×KÏJK˜\šX[Ú[™[‹œÚ^™KLJJ›ËOLOOO[ÊOL
OO™J›ÎŠOL
OOœËYJ›ÎÜ™]\›ˆ\œ˜^K™œ›ÛJK˜\šX[Ú[™[ŠKœÛÜ
ÝJK™›Ü‘XXÚ

KÊOOžÙK››ÝYžJ[š[X][Û”Ý\‹JKœ\Ú
JKKË‹‹œ‹[^N
ÚJÊ_JK[Š

OO™K››ÝYžJ[š[X][ÛÛÛ\]H‹JJJ_JK›ÛZ\ÙK˜[

_JKKŠÛËË
_NŠ
OO”›ÛZ\ÙKœ™\ÛÛ™J
KÝÚ[Žš_O\ŽÚYŠJ^ØÛÛœÝÙKWOH˜™Y›Ü™PÚ[™[ˆOOZOÖÛ×N–ÜËNÜ™]\›ˆJ
K[Š

OO˜J
J_\™]\›ˆ›ÛZ\ÙK˜[
Û

KÊ™[^JWJ_Y[˜Ý[ÛˆÝJKJ^Ü™]\›ˆKœÛÜ›ÙTÜÚ][ÛŠJ_XÛÛœÝ]O]˜Ë›[™ÝÙ[˜Ý[ÛˆÝJJ^ÚYŠYJ\™]\›ŽÚYŠYKš\ÐÛÛ›Û[™Õ˜\šX[Ê^ØÛÛœÝOYKœ\™[	‰˜ÝJKœ\™[
_ßNÜ™]\›ˆ›ÚYOOYKœ›ÜËš[š]X[	‰ŠKš[š]X[YKœ›ÜËš[š]X[
K_XÛÛœÝO^ßNÙ›ÜŠ]LÝ]NÝ
ÊÊ^ØÛÛœÝÏ]˜ÖÝKYKœ›ÜÖÛ×NÊØÊŠ_LOOO[ŠI‰ŠVÛ×O[Š_\™]\›ˆ_XÛÛœÝ]OVË‹‹Ø×Kœ™]™\œÙJ
K]O]ØË›[™ÝÙ[˜Ý[ÛˆJJ^Ü™]\›ˆOO”›ÛZ\ÙK˜[
K›X\

Ø[š[X][ÛŽ˜KÜ[ÛœÎJOO™[˜Ý[ÛŠKK^ßJ^Û]ÎÚYŠK››ÝYžJ[š[X][Û”Ý\‹JK\œ˜^Kš\Ð\œ˜^JJJ^ØÛÛœÝXK›X\
OO›JKK
JNÛÏT›ÛZ\ÙK˜[
Š_Y[ÙHYŠœÝš[™ÈOO]\[ÙˆJ[Ï[JKK
NÙ[Ù^ØÛÛœÝH™[˜Ý[ÛˆOO]\[ÙˆOÙ˜ÊKK˜Ý\ÝÛJN˜NÛÏT›ÛZ\ÙK˜[
JK‹
J_\™]\›ˆË[Š

OOžÙK››ÝYžJ[š[X][ÛÛÛ\]H‹J_J_JKK
JJ_Y[˜Ý[ÛˆJJ^Û]O\JJKZJ
KÏHLØÛÛœÝXOOŠÊOOžÝ˜\ˆŽØÛÛœÝY˜ÊKË™^]OOXOÛ[OOJYKœ™\Ù[˜ÙPÛÛ^
_›ÚYOO[Ý›ÚY›‹˜Ý\ÝÛN›ÚY
NÚYŠŠ^ØÛÛœÝÝ˜[œÚ][ÛŽ™K˜[œÚ][Û‘[™˜K‹‹›ßO\ŽÝ^Ë‹‹‹‹›Ë‹‹˜__\™]\›ˆNÙ[˜Ý[ÛˆŠŠ^ØÛÛœÝÜ›ÜÎ›OYKÏXÝJKœ\™[
_ßKOV×KÏ[™]ÈÙ]Û]O^ßKOLKÌÙ›ÜŠ]OLØO]NØJÊÊ^ØÛÛœÝ]]VØWK]ÜKO]›ÚYOO[ÜOÛÜNœÖÜKÏYØÊJK\OO\Ùš\ÐXÝ]™N›[ÈLOOOZ	‰ŠOXJNÛ]^OOO\ÖÜI‰žHOO[ÜI‰™ÎÚYŠ‰‰›É‰™K›X[X[P[š[X]SÛ“[Ý[	‰ŠHLJKœ›ÝXÝYÙ^\Ï^Ë‹‹_KYš\ÐXÝ]™I‰›[OOZ^I‰ˆYœ™]”›ÜÊJ_˜›ÛÛX[ˆOO]\[ÙˆJXÛÛ[YNØÛÛœÝ^]Jœ™]”›ÜJNÛ]ÏYŸOO\‰‰™š\ÐXÝ]™I‰ˆX‰‰™ßO›I‰™ËHLNØÛÛœÝÏP\œ˜^Kš\Ð\œ˜^JJOÞN–ÞWNÛ]ÏWËœ™YXÙJŠ
KßJNÈLOOOZ	‰ŠÏ^ßJNØÛÛœÝÜ™]”™\ÛÛ™Y˜[Y\Îž^ß_OYÏ^Ë‹‹ž‹‹ßKÏXOOžÝÏHLËš\ÊJI‰ŠHLË™[]JJJK›™YYÐ[š[X][™ÖØWOHLØÛÛœÝYK™Ù]˜[YJJNÝ	‰Š›]™TÝ[OHLJ_NÙ›ÜŠÛÛœÝH[ˆÊ^ØÛÛœÝOPÖÙWK^ÙWNÚYŠKš\ÓÝÛ”›Ü\JJJXÛÛ[YNÛ]ÏHLNÛÏYÊJI‰™Ê
OÈ^XÊK
N˜HOO]ÏÝ›ÚYOOXI‰›[OOXOÔÊJN˜Ë˜Y
JN›ÚYOOXI‰˜Ëš\ÊJOÔÊJN™œ›ÝXÝYÙ^\ÖÙWOHLYœ™]”›Ü^Kœ™]”™\ÛÛ™Y˜[Y\ÏPËš\ÐXÝ]™I‰ŠO^Ë‹‹K‹‹ßJKÉ‰™K˜›ØÚÒ[š]X[[š[X][Û‰‰ŠÏHLJNÝÉ‰ŠJ‰‰™Š_ŠI‰šKœ\Ú
‹‹—Ë›X\
OOŠØ[š[X][ÛŽ™KÜ[ÛœÎžÝ\Nœ_JJJ_ZYŠËœÚ^™J^ØÛÛœÝO^ßNØË™›Ü‘XXÚ
OžØÛÛœÝÏYK™Ù]˜\ÙU\™Ù]

KYK™Ù]˜[YJ
NÛ‰‰Š‹›]™TÝ[OHL
KVÝO[[OO[É‰›ÚYOO[ÏÛÎ›[JKKœ\Ú
Ø[š[X][ÛŽ˜_J_[]P›ÛÛX[ŠK›[™Ý
NÜ™]\›ˆ[ßLHOO[š[š]X[	‰›š[š]X[OO[˜[š[X]_K›X[X[P[š[X]SÛ“[Ý[
HLJKÏHLKØJJN”›ÛZ\ÙKœ™\ÛÛ™J
_\™]\›žØ[š[X]PÚ[™Ù\Îœ‹Ù]XÝ]™N™[˜Ý[ÛŠKÊ^Ý˜\ˆŽÚYŠØWKš\ÐXÝ]™OOO[Ê\™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÛ[OOJYK˜\šX[Ú[™[Š_›ÚYOO[Ÿ‹™›Ü‘XXÚ
OOžÝ˜\ˆÜ™]\›ˆ[OOJYK˜[š[X][Û”Ý]J_›ÚYOO]Ý›ÚYœÙ]XÝ]™JKÊ_JKØWKš\ÐXÝ]™O[ÎØÛÛœÝ\ŠJNÙ›ÜŠÛÛœÝH[ˆ
]ÙWKœ›ÝXÝYÙ^\Ï^ßNÜ™]\›ˆKÙ][š[X]Q[˜Ý[ÛŽ™[˜Ý[ÛŠ
^ØO]
J_KÙ]Ý]NŠ
OO™\Ù]Š
OOžÝZJ
KÏHL__Y[˜Ý[Ûˆ]JKJ^Ü™]\›ˆœÝš[™ÈOO]\[ÙˆOØHOOYNˆHP\œ˜^Kš\Ð\œ˜^JJI‰ˆ^XÊKJ_Y[˜Ý[ÛˆÝJOHLJ^Ü™]\›žÚ\ÐXÝ]™N™K›ÝXÝYÙ^\ÎžßK™YYÐ[š[X][™ÎžßK™]”™\ÛÛ™Y˜[Y\Îžß__Y[˜Ý[ÛˆJ
^Ü™]\›žØ[š[X]N™ÝJL
KÚ[R[•šY]Î™ÝJ
KÚ[RÝ™\Ž™ÝJ
KÚ[U\™ÝJ
KÚ[Q˜YÎ™ÝJ
KÚ[Q›ØÝ\Î™ÝJ
K^]™ÝJ
__XÛ\ÜÈ^ØÛÛœÝXÝÜŠJ^Ý\Ëš\Ó[Ý[YHLK\Ë››ÙOY_]\]J
^ß_[]OLØÛÛœÝÝO^Ø[š[X][ÛŽžÑ™X]\™N˜Û\ÜÈ^[™È^ØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJKK˜[š[X][Û”Ý]_
K˜[š[X][Û”Ý]OYJJJ_]\]P[š[X][ÛÛÛ›ÛÔÝXœØÜš\[ÛŠ
^ØÛÛœÝØ[š[X]N™_O]\Ë››ÙK™Ù]›ÜÊ
NÜÊJI‰Š\Ë[›[Ý[ÛÛ›ÛÏYKœÝXœØÜšX™J\Ë››ÙJJ_[[Ý[

^Ý\Ë\]P[š[X][ÛÛÛ›ÛÔÝXœØÜš\[ÛŠ
_]\]J
^ØÛÛœÝØ[š[X]N™_O]\Ë››ÙK™Ù]›ÜÊ
KØ[š[X]N˜_O]\Ë››ÙKœ™]”›ÜßßNÙHOOXI‰\Ë\]P[š[X][ÛÛÛ›ÛÔÝXœØÜš\[ÛŠ
_][›[Ý[

^Ý˜\ˆNÝ\Ë››ÙK˜[š[X][Û”Ý]Kœ™\Ù]

K[OOJO]\Ë[›[Ý[ÛÛ›ÛÊ_›ÚYOOY_K˜Ø[
\Ê___K^]žÑ™X]\™N˜Û\ÜÈ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊK\ËšYYJÊß]\]J
^ÚYŠ]\Ë››ÙKœ™\Ù[˜ÙPÛÛ^
\™]\›ŽØÛÛœÝÚ\Ô™\Ù[™KÛ‘^]ÛÛ\]N˜_O]\Ë››ÙKœ™\Ù[˜ÙPÛÛ^Ú\Ô™\Ù[O]\Ë››ÙKœ™]”™\Ù[˜ÙPÛÛ^ßNÚYŠ]\Ë››ÙK˜[š[X][Û”Ý]_OOO]
\™]\›ŽØÛÛœÝÏ]\Ë››ÙK˜[š[X][Û”Ý]KœÙ]XÝ]™J™^]‹YJNØI‰ˆYI‰›Ë[Š

OO˜J\ËšY
J_[[Ý[

^ØÛÛœÝÜ™YÚ\Ý\Ž™_O]\Ë››ÙKœ™\Ù[˜ÙPÛÛ^ßNÙI‰Š\Ë[›[Ý[YJ\ËšY
J_][›[Ý[

^ß___NÙ[˜Ý[ÛˆJKKÏ^Ü\ÜÚ]™NˆLJ^Ü™]\›ˆK˜Y]™[\Ý[™\ŠKÊK

OO™Kœ™[[Ý™Q]™[\Ý[™\ŠK
_Y[˜Ý[ÛˆÝJJ^Ü™]\›žÜÚ[žÞ™KœYÙVN™KœYÙV___Y[˜Ý[ÛˆÝJKKÊ^Ü™]\›ˆJKK
OO˜OO›[
JI‰™JKÝJJJJJ
KÊ_XÛÛœÝOJKJOO“X]˜XœÊKXJNØÛ\ÜÈÝ^ØÛÛœÝXÝÜŠKKÝ˜[œÙ›Ü›TYÙTÚ[ÛÛ^Ú[™ÝÎ›Ë˜YÔÛ˜\ÓÜšYÚ[Ž›HL_O^ßJ^ÚYŠ\ËœÝ\]™[[[\Ë›\Ý[Ý™Q]™[[[\Ë›\Ý[Ý™Q]™[[™›Ï[[\Ëš[™\œÏ^ßK\Ë˜ÛÛ^Ú[™ÝÏ]Ú[™ÝË\Ë\]TÚ[J
OOžÚYŠ]\Ë›\Ý[Ý™Q]™[]\Ë›\Ý[Ý™Q]™[[™›Ê\™]\›ŽØÛÛœÝOP]J\Ë›\Ý[Ý™Q]™[[™›Ë\Ëš\ÝÜžJKO[[OO]\ËœÝ\]™[Y[˜Ý[ÛŠKJ^ØÛÛœÝ^JKžKž
KÏ^JKžKKžJNÜ™]\›ˆX]œÜ\

ŠŒŠÛÊŠŒŠ_JK›Ù™œÙ]ÞŒNŒJOLÎÚYŠXI‰ˆ]
\™]\›ŽØÛÛœÝÜÚ[›ßOYKÝ[Y\Ý[\›ŸOP\ŽÝ\Ëš\ÝÜžKœ\Ú
Ë‹‹›Ë[Y\Ý[\›ŸJNØÛÛœÝÛÛ”Ý\œ‹Û“[Ý™N›O]\Ëš[™\œÎØ_
‰‰œŠ\Ë›\Ý[Ý™Q]™[JK\ËœÝ\]™[]\Ë›\Ý[Ý™Q]™[
K	‰›
\Ë›\Ý[Ý™Q]™[J_K\Ëš[™TÚ[\“[Ý™OJKJOOžÝ\Ë›\Ý[Ý™Q]™[YK\Ë›\Ý[Ý™Q]™[[™›ÏTÝJK\Ë˜[œÙ›Ü›TYÙTÚ[
KÜ‹\]J\Ë\]TÚ[L
_K\Ëš[™TÚ[\•\JKJOOžÝ\Ë™[™

NØÛÛœÝÛÛ‘[™Û”Ù\ÜÚ[Û‘[™›Ë™\Ý[YP[š[X][ÛŽ›ŸO]\Ëš[™\œÎÚYŠ\Ë™˜YÔÛ˜\ÓÜšYÚ[‰‰›‰‰›Š
K]\Ë›\Ý[Ý™Q]™[]\Ë›\Ý[Ý™Q]™[[™›Ê\™]\›ŽØÛÛœÝP]JœÚ[\˜Ø[˜Ù[OOYK\OÝ\Ë›\Ý[Ý™Q]™[[™›Î”ÝJK\Ë˜[œÙ›Ü›TYÙTÚ[
K\Ëš\ÝÜžJNÝ\ËœÝ\]™[	‰	‰
KŠKÉ‰›ÊKŠ_K[[
JJ\™]\›ŽÝ\Ë™˜YÔÛ˜\ÓÜšYÚ[[‹\Ëš[™\œÏXK\Ë˜[œÙ›Ü›TYÙTÚ[]\Ë˜ÛÛ^Ú[™ÝÏ[ßÚ[™ÝÎØÛÛœÝTÝJÝJJK\Ë˜[œÙ›Ü›TYÙTÚ[
KÜÚ[›O\‹Ý[Y\Ý[\œßOP\ŽÝ\Ëš\ÝÜžOVÞË‹‹›[Y\Ý[\œßWNØÛÛœÝÛÛ”Ù\ÜÚ[Û”Ý\š_OXNÚI‰šJK]J‹\Ëš\ÝÜžJJK\Ëœ™[[Ý™S\Ý[™\œÏ\œÊÝJ\Ë˜ÛÛ^Ú[™ÝËœÚ[\›[Ý™H‹\Ëš[™TÚ[\“[Ý™JKÝJ\Ë˜ÛÛ^Ú[™ÝËœÚ[\\‹\Ëš[™TÚ[\•\
KÝJ\Ë˜ÛÛ^Ú[™ÝËœÚ[\˜Ø[˜Ù[‹\Ëš[™TÚ[\•\
J_]\]R[™\œÊJ^Ý\Ëš[™\œÏY_Y[™

^Ý\Ëœ™[[Ý™S\Ý[™\œÉ‰\Ëœ™[[Ý™S\Ý[™\œÊ
KŠ\Ë\]TÚ[
__Y[˜Ý[ÛˆÝJKJ^Ü™]\›ˆOÞÜÚ[˜JKœÚ[
_N™_Y[˜Ý[ÛˆJKJ^Ü™]\›žÞ™KžXKžN™KžKXKž__Y[˜Ý[Ûˆ]JÜÚ[™_KJ^Ü™]\›žÜÚ[™K[N“JKJJJKÙ™œÙ]“JKJJJK™[ØÚ]N“]JKŒJ__Y[˜Ý[ÛˆJJ^Ü™]\›ˆVÌ_Y[˜Ý[ÛˆJJ^Ü™]\›ˆVÙK›[™ÝLW_Y[˜Ý[Ûˆ]JKJ^ÚYŠK›[™ÝŠ\™]\›žÞŒNŒNÛ]YK›[™ÝLKÏ[[ØÛÛœÝPJJNÙ›ÜŠÝL	‰ŠÏYVÝKJ‹[Y\Ý[\[Ë[Y\Ý[\™›
JJJNÊ]KNÚYŠ[Ê\™]\›žÞŒNŒNØÛÛœÝ]Û
‹[Y\Ý[\[Ë[Y\Ý[\
NÚYŠOO\Š\™]\›žÞŒNŒNØÛÛœÝ^ÞŠ‹ž[Ëž
KÜ‹NŠ‹žK[ËžJKÜŸNÜ™]\›ˆžOOLKÌ	‰ŠžL
KžOOOLKÌ	‰ŠžOL
KY[˜Ý[ÛˆJJ^Ü™]\›ˆI‰ˆ›Øš™XÝOO]\[ÙˆI‰“Øš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
K˜Ý\œ™[Š_Y[˜Ý[ÛˆJJ^Ü™]\›ˆK›X^YK›Z[ŸY[˜Ý[ÛˆJKKÏKJ^ÙK›ÜšYÚ[[ËK›ÜšYÚ[”Ú[U›
K›Z[‹K›X^K›ÜšYÚ[ŠKKœØØ[OUJ
KÕJJKK˜[œÛ]OU›
›Z[‹›X^K›ÜšYÚ[ŠKYK›ÜšYÚ[”Ú[
KœØØ[OKŽNNNI‰™KœØØ[OLKŒ_\Ó˜SŠKœØØ[JJI‰ŠKœØØ[OLJK
K˜[œÛ]OKKŒI‰™K˜[œÛ]OKŒ_\Ó˜SŠK˜[œÛ]JJI‰ŠK˜[œÛ]OL
_Y[˜Ý[ÛˆJKKÊ^ÔJKžKžžÏÛË›ÜšYÚ[–›ÚY
KJKžKKžKžKÏÛË›ÜšYÚ[–N›ÚY
_Y[˜Ý[ÛˆJKK
^ÙK›Z[]›Z[ŠØK›Z[‹K›X^YK›Z[ŠÕJJ_Y[˜Ý[ÛˆÝJKK
^ÙK›Z[XK›Z[‹]›Z[‹K›X^YK›Z[ŠÕJJ_Y[˜Ý[ÛˆÝJKK
^ÑÝJKžKžž
KÝJKžKKžKžJ_Y[˜Ý[ÛˆÝJKK
^Ü™]\›žÛZ[Ž›ÚYOOXOÙK›Z[ŠØN›ÚYX^›ÚYOO]ÙK›X^
ÝJK›X^YK›Z[ŠN›ÚY_Y[˜Ý[Ûˆ]JKJ^Û]XK›Z[‹YK›Z[‹ÏXK›X^YK›X^Ü™]\›ˆK›X^XK›Z[K›X^YK›Z[‰‰ŠÝ×OVÛËJKÛZ[ŽX^›ß_Y[˜Ý[ÛˆJKK
^Ü™]\›žÛZ[Ž“JKJKX^“JK
__Y[˜Ý[ÛˆJKJ^Ü™]\›ˆ›[X™\ˆOO]\[ÙˆOÙN™VØW_XÛÛœÝÝOJ
OOŠÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_JNÙ[˜Ý[ÛˆJJ^Ü™]\›–ÙJžŠKJžHŠW_Y[˜Ý[Ûˆ]JÝÜ™KY˜KšYÚ›ÝÛN›ßJ^Ü™]\›žÞžÛZ[Ž˜KX^KNžÛZ[Ž™KX^›ß__Y[˜Ý[ÛˆJJ^Ü™]\›ˆ›ÚYOOY_OOOY_Y[˜Ý[Ûˆ]JÜØØ[N™KØØ[V˜KØØ[VNJ^Ü™]\›ˆ^JJ_^JJ_^J
_Y[˜Ý[Ûˆ]JJ^Ü™]\›ˆ]JJ_JJ_KžŸKœ›Ý]_Kœ›Ý]VKœ›Ý]V_KœÚÙ]ÖKœÚÙ]Ö_Y[˜Ý[ÛˆJJ^Ü™]\›ˆ]JKž
_]JKžJ_Y[˜Ý[Ûˆ]JJ^Ü™]\›ˆI‰ˆŒ	HˆOOY_Y[˜Ý[Ûˆ	JKK
^Ü™]\›ˆ
ØJŠK]
_Y[˜Ý[ÛˆJKKËŠ^Ü™]\›ˆ›ÚYOO[‰‰ŠOIJK‹ÊJK	JKÊJØ_Y[˜Ý[ÛˆJKOLLKËŠ^ÙK›Z[VJK›Z[‹KËŠKK›X^VJK›X^KËŠ_Y[˜Ý[Ûˆ]JKÞ˜KNJ^ÖJKžK˜[œÛ]KKœØØ[KK›ÜšYÚ[”Ú[
KJKžK˜[œÛ]KœØØ[K›ÜšYÚ[”Ú[
_XÛÛœÝ[OKŽNNNNNNNNNNNK[OLKŒNÙ[˜Ý[ÛˆJKJ^ÙK›Z[YK›Z[ŠØKK›X^YK›X^
Ø_Y[˜Ý[ÛˆÛJKKËKJ^ÖJKK›
K›Z[‹K›X^ŠKÊ_Y[˜Ý[Ûˆ›JKJ^ÛÛJKžKžKœØØ[VKœØØ[KK›ÜšYÚ[–
KÛJKžKKžKKœØØ[VKKœØØ[KK›ÜšYÚ[–J_Y[˜Ý[Ûˆ›JKJ^Ü™]\›ˆ]J[˜Ý[ÛŠKJ^ÚYŠXJ\™]\›ˆNØÛÛœÝXJÞ™K›YN™KÜJKÏXJÞ™KœšYÚN™K˜›ÝÛ_JNÜ™]\›žÝÜžKYž›ÝÛN›ËžKšYÚ›Ëž_JK™Ù]›Ý[™[™ÐÛY[™XÝ

KJJ_XÛÛœÝOJØÝ\œ™[™_JOO™OÙK›ÝÛ™\‘ØÝ[Y[™Y˜][šY]Î›[ÛO[™]ÈÙXZÓX\ØÛ\ÜÈ[^ØÛÛœÝXÝÜŠJ^Ý\Ë›Ü[‘˜YÓØÚÏ[[\Ëš\Ñ˜YÙÚ[™ÏHLK\Ë˜Ý\œ™[\™XÝ[Û[[\Ë›ÜšYÚ[”Ú[^ÞŒNŒK\Ë˜ÛÛœÝ˜Z[ÏHLK\Ëš\Ó]]]YÛÛœÝ˜Z[ÏHLK\Ë™[\ÝXÏ^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_K\Ëš\ÝX[[[Y[Y_\Ý\
KÜÛ˜\ÐÝ\œÛÜŽ˜OHL_O^ßJ^ØÛÛœÝÜ™\Ù[˜ÙPÛÛ^O]\Ëš\ÝX[[[Y[ÚYŠ	‰ˆLOOO]š\Ô™\Ù[
\™]\›ŽØÛÛœÝÙ˜YÔÛ˜\ÓÜšYÚ[Ž›ßO]\Ë™Ù]›ÜÊ
NÝ\Ëœ[”Ù\ÜÚ[Û[™]ÈÝJKÛÛ”Ù\ÜÚ[Û”Ý\™OOžØÛÛœÝÙ˜YÔÛ˜\ÓÜšYÚ[ŽO]\Ë™Ù]›ÜÊ
NÝÝ\Ëœ]\ÙP[š[X][ÛŠ
N\ËœÝÜ[š[X][ÛŠ
KI‰\ËœÛ˜\ÐÝ\œÛÜŠÝJJKœÚ[
_KÛ”Ý\ŠKJOOžØÛÛœÝÙ˜YÎ˜YÔ›ÜYØ][ÛŽ›ËÛ‘˜YÔÝ\›ŸO]\Ë™Ù]›ÜÊ
NÚYŠ	‰ˆ[É‰Š\Ë›Ü[‘˜YÓØÚÉ‰\Ë›Ü[‘˜YÓØÚÊ
K\Ë›Ü[‘˜YÓØÚÏHžOOJ]
_žHOO\Ü›Ü—OÛ[Š›Ü—OHL

OOžÜ›Ü—OHL_JNœ›ž›žOÛ[Š›ž\›žOHL

OOžÜ›ž\›žOHL_JK]\Ë›Ü[‘˜YÓØÚÊJ\™]\›ŽÝ˜\ˆŽÝ\Ëš\Ñ˜YÙÚ[™ÏHL\Ë˜Ý\œ™[\™XÝ[Û[[\Ëœ™\ÛÛ™PÛÛœÝ˜Z[Ê
K\Ëš\ÝX[[[Y[œ›Ú™XÝ[Û‰‰Š\Ëš\ÝX[[[Y[œ›Ú™XÝ[Û‹š\Ð[š[X][Û›ØÚÙYHL\Ëš\ÝX[[[Y[œ›Ú™XÝ[Û‹\™Ù]]›ÚY
KJOOžÛ]O]\Ë™Ù]^\Ó[Ý[Û•˜[YJJK™Ù]

_ÚYŠ[\Ý
JJ^ØÛÛœÝÜ›Ú™XÝ[ÛŽO]\Ëš\ÝX[[[Y[ÚYŠ	‰›^[Ý]
^ØÛÛœÝÏ]›^[Ý]›^[Ý]›ÞÙWNÚYŠÊ^ØOUJÊJŠ\œÙQ›Ø]
JKÌL
___]\Ë›ÜšYÚ[”Ú[ÙWOX_JK‰‰”Ü‹œÜÝ™[™\Š

OO›ŠKJJKØÊ\Ëš\ÝX[[[Y[˜[œÙ›Ü›HŠNØÛÛœÝØ[š[X][Û”Ý]N›O]\Ëš\ÝX[[[Y[Û	‰›œÙ]XÝ]™JÚ[Q˜YÈ‹L
_KÛ“[Ý™NŠKJOOžØÛÛœÝÙ˜YÔ›ÜYØ][ÛŽ˜YÑ\™XÝ[Û“ØÚÎ›ËÛ‘\™XÝ[Û“ØÚÎ›‹Û‘˜YÎœŸO]\Ë™Ù]›ÜÊ
NÚYŠ]	‰ˆ]\Ë›Ü[‘˜YÓØÚÊ\™]\›ŽØÛÛœÝÛÙ™œÙ]›OXNÚYŠÉ‰›[OO]\Ë˜Ý\œ™[\™XÝ[ÛŠ\™]\›ˆ\Ë˜Ý\œ™[\™XÝ[ÛY[˜Ý[ÛŠKOLL
^Û][[ÓX]˜XœÊKžJO˜OÝHžHŽ“X]˜XœÊKž
O˜I‰ŠHžŠNÜ™]\›ˆJ
K›ÚY
[OO]\Ë˜Ý\œ™[\™XÝ[Û‰‰›‰‰›Š\Ë˜Ý\œ™[\™XÝ[ÛŠJNÝ\Ë\]P^\Êž‹KœÚ[
K\Ë\]P^\ÊžH‹KœÚ[
K\Ëš\ÝX[[[Y[œ™[™\Š
K‰‰œŠKJ_KÛ”Ù\ÜÚ[Û‘[™ŠKJOO\ËœÝÜ
KJK™\Ý[YP[š[X][ÛŽŠ
OOšJOOžÝ˜\ˆNÜ™]\›ˆœ]\ÙYOO]\Ë™Ù][š[X][Û”Ý]JJI‰Š[OOJO]\Ë™Ù]^\Ó[Ý[Û•˜[YJJK˜[š[X][ÛŠ_›ÚYOOXOÝ›ÚY˜Kœ^J
J_J_KÝ˜[œÙ›Ü›TYÙTÚ[\Ëš\ÝX[[[Y[™Ù]˜[œÙ›Ü›TYÙTÚ[

K˜YÔÛ˜\ÓÜšYÚ[Ž›ËÛÛ^Ú[™ÝÎ›J\Ëš\ÝX[[[Y[
_J_\ÝÜ
KJ^ØÛÛœÝ]\Ëš\Ñ˜YÙÚ[™ÎÚYŠ\Ë˜Ø[˜Ù[

K]
\™]\›ŽØÛÛœÝÝ™[ØÚ]N›ßOXNÝ\ËœÝ\[š[X][ÛŠÊNØÛÛœÝÛÛ‘˜YÑ[™›ŸO]\Ë™Ù]›ÜÊ
NÛ‰‰”Ü‹œÜÝ™[™\Š

OO›ŠKJJ_XØ[˜Ù[

^Ý\Ëš\Ñ˜YÙÚ[™ÏHLNØÛÛœÝÜ›Ú™XÝ[ÛŽ™K[š[X][Û”Ý]N˜_O]\Ëš\ÝX[[[Y[ÙI‰ŠKš\Ð[š[X][Û›ØÚÙYHLJK\Ëœ[”Ù\ÜÚ[Û‰‰\Ëœ[”Ù\ÜÚ[Û‹™[™

K\Ëœ[”Ù\ÜÚ[Û]›ÚYØÛÛœÝÙ˜YÔ›ÜYØ][ÛŽO]\Ë™Ù]›ÜÊ
NÈ]	‰\Ë›Ü[‘˜YÓØÚÉ‰Š\Ë›Ü[‘˜YÓØÚÊ
K\Ë›Ü[‘˜YÓØÚÏ[[
KI‰˜KœÙ]XÝ]™JÚ[Q˜YÈ‹LJ_]\]P^\ÊKK
^ØÛÛœÝÙ˜YÎ›ßO]\Ë™Ù]›ÜÊ
NÚYŠ]XÛJKË\Ë˜Ý\œ™[\™XÝ[ÛŠJ\™]\›ŽØÛÛœÝ]\Ë™Ù]^\Ó[Ý[Û•˜[YJJNÛ]]\Ë›ÜšYÚ[”Ú[ÙWJÝÙWNÝ\Ë˜ÛÛœÝ˜Z[É‰\Ë˜ÛÛœÝ˜Z[ÖÙWI‰ŠY[˜Ý[ÛŠKÛZ[Ž˜KX^KÊ^Ü™]\›ˆ›ÚYOOXI‰™OOÙO[ÏÕ›
KKË›Z[ŠN“X]›X^
KJN›ÚYOO]	‰™O	‰ŠO[ÏÕ›
KË›X^
N“X]›Z[ŠK
JK_J‹\Ë˜ÛÛœÝ˜Z[ÖÙWK\Ë™[\ÝXÖÙWJJK‹œÙ]
Š_\™\ÛÛ™PÛÛœÝ˜Z[Ê
^Ý˜\ˆNØÛÛœÝÙ˜YÐÛÛœÝ˜Z[Î˜K˜YÑ[\ÝXÎO]\Ë™Ù]›ÜÊ
KÏ]\Ëš\ÝX[[[Y[œ›Ú™XÝ[Û‰‰ˆ]\Ëš\ÝX[[[Y[œ›Ú™XÝ[Û‹›^[Ý]Ý\Ëš\ÝX[[[Y[œ›Ú™XÝ[Û‹›YX\Ý\™JLJN›[OOJO]\Ëš\ÝX[[[Y[œ›Ú™XÝ[ÛŠ_›ÚYOOYOÝ›ÚY™K›^[Ý]]\Ë˜ÛÛœÝ˜Z[ÎØI‰•JJOÝ\Ë˜ÛÛœÝ˜Z[ß
\Ë˜ÛÛœÝ˜Z[Ï]\Ëœ™\ÛÛ™T™YÛÛœÝ˜Z[Ê
JN\Ë˜ÛÛœÝ˜Z[ÏHJX_[ÊI‰™[˜Ý[ÛŠKÝÜ˜KY›ÝÛN›ËšYÚ›ŸJ^Ü™]\›žÞ“ÝJKžŠKN“ÝJKžKKÊ__JË›^[Ý]›ÞJK\Ë™[\ÝXÏY[˜Ý[ÛŠOKŒÍJ^Ü™]\›ˆLOOOYOÙOLˆLOOYI‰ŠOKŒÍJKÞ’JK›Y‹œšYÚŠKN’JKÜ‹˜›ÝÛHŠ__J
KˆOO]\Ë˜ÛÛœÝ˜Z[É‰›É‰\Ë˜ÛÛœÝ˜Z[É‰ˆ]\Ëš\Ó]]]YÛÛœÝ˜Z[É‰šJOOžÈLHOO]\Ë˜ÛÛœÝ˜Z[É‰\Ë™Ù]^\Ó[Ý[Û•˜[YJJI‰Š\Ë˜ÛÛœÝ˜Z[ÖÙWOY[˜Ý[ÛŠKJ^ØÛÛœÝ^ßNÜ™]\›ˆ›ÚYOOXK›Z[‰‰Š›Z[XK›Z[‹YK›Z[ŠK›ÚYOOXK›X^	‰Š›X^XK›X^YK›Z[ŠKJË›^[Ý]›ÞÙWK\Ë˜ÛÛœÝ˜Z[ÖÙWJJ_J_\™\ÛÛ™T™YÛÛœÝ˜Z[Ê
^ØÛÛœÝÙ˜YÐÛÛœÝ˜Z[Î™KÛ“YX\Ý\™Q˜YÐÛÛœÝ˜Z[Î˜_O]\Ë™Ù]›ÜÊ
NÚYŠY_UJJJ\™]\›ˆLNØÛÛœÝYK˜Ý\œ™[ÒŠ[OO]’Yˆ˜YÐÛÛœÝ˜Z[Ø\ÈÙ]\ÈH™XXÝ™Y‹]™Yˆ]\Ý™H\ÜÙYÈ[›Ý\ˆÛÛ\Û™[	ÜÈ™Y˜›ÜˆŠNØÛÛœÝÜ›Ú™XÝ[ÛŽ›ßO]\Ëš\ÝX[[[Y[ÚYŠ[ß[Ë›^[Ý]
\™]\›ˆLNØÛÛœÝY[˜Ý[ÛŠKK
^ØÛÛœÝÏ\›JK
KÜØÜ›Û›ŸOXNÜ™]\›ˆ‰‰ŠJËž‹›Ù™œÙ]ž
KJËžK‹›Ù™œÙ]žJJKßJËœ›ÛÝ\Ëš\ÝX[[[Y[™Ù]˜[œÙ›Ü›TYÙTÚ[

JNÛ]Y[˜Ý[ÛŠKJ^Ü™]\›žÞ‘]JKžKž
KN‘]JKžKKžJ__JË›^[Ý]›^[Ý]›ÞŠNÚYŠJ^ØÛÛœÝOXJ[˜Ý[ÛŠÞ™KN˜_J^Ü™]\›žÝÜ˜K›Z[‹šYÚ™K›X^›ÝÛN˜K›X^Y™K›Z[Ÿ_JŠJNÝ\Ëš\Ó]]]YÛÛœÝ˜Z[ÏHHYKI‰ŠR]JJJ_\™]\›ˆŸ\Ý\[š[X][ÛŠJ^ØÛÛœÝÙ˜YÎ˜K˜YÓ[ÛY[[N˜YÑ[\ÝXÎ›Ë˜YÕ˜[œÚ][ÛŽ›‹˜YÔÛ˜\ÓÜšYÚ[Žœ‹Û‘˜YÕ˜[œÚ][Û‘[™›O]\Ë™Ù]›ÜÊ
KÏ]\Ë˜ÛÛœÝ˜Z[ßßKOZJOžÚYŠXÛJK\Ë˜Ý\œ™[\™XÝ[ÛŠJ\™]\›ŽÛ]O\É‰œÖÛ_ßNÜ‰‰ŠO^ÛZ[ŽŒX^ŒJNØÛÛœÝÏ[ÏÌŒŒYM‹O[ÏÍŒYMËO^Ý\Nˆš[™\XH‹™[ØÚ]NÙVÛNŒ›Ý[˜ÙTÝY™›™\ÜÎ˜Ë›Ý[˜ÙQ[\[™ÎK[YPÛÛœÝ[ÍL™\Ý[NŒK™\ÝÜYYŒL‹‹›‹‹‹š_NÜ™]\›ˆ\ËœÝ\^\Õ˜[YP[š[X][ÛŠJ_JNÜ™]\›ˆ›ÛZ\ÙK˜[
JK[Š
_\Ý\^\Õ˜[YP[š[X][ÛŠKJ^ØÛÛœÝ]\Ë™Ù]^\Ó[Ý[Û•˜[YJJNÜ™]\›ˆØÊ\Ëš\ÝX[[[Y[JKœÝ\
ÝJKK\Ëš\ÝX[[[Y[LJJ_\ÝÜ[š[X][ÛŠ
^ÚJOO\Ë™Ù]^\Ó[Ý[Û•˜[YJJKœÝÜ

J_\]\ÙP[š[X][ÛŠ
^ÚJOOžÝ˜\ˆNÜ™]\›ˆ[OOJO]\Ë™Ù]^\Ó[Ý[Û•˜[YJJK˜[š[X][ÛŠ_›ÚYOOXOÝ›ÚY˜Kœ]\ÙJ
_J_YÙ][š[X][Û”Ý]JJ^Ý˜\ˆNÜ™]\›ˆ[OOJO]\Ë™Ù]^\Ó[Ý[Û•˜[YJJK˜[š[X][ÛŠ_›ÚYOOXOÝ›ÚY˜KœÝ]_YÙ]^\Ó[Ý[Û•˜[YJJ^ØÛÛœÝOXÙ˜YÉÙKÕ\\Ø\ÙJ
_X]\Ëš\ÝX[[[Y[™Ù]›ÜÊ
KÏ]ØWNÜ™]\›ˆß\Ëš\ÝX[[[Y[™Ù]˜[YJK
š[š]X[Ýš[š]X[ÙWN›ÚY
_
_\Û˜\ÐÝ\œÛÜŠJ^ÚJOOžØÛÛœÝÙ˜YÎO]\Ë™Ù]›ÜÊ
NÚYŠXÛJK\Ë˜Ý\œ™[\™XÝ[ÛŠJ\™]\›ŽØÛÛœÝÜ›Ú™XÝ[ÛŽ›ßO]\Ëš\ÝX[[[Y[]\Ë™Ù]^\Ó[Ý[Û•˜[YJJNÚYŠÉ‰›Ë›^[Ý]
^ØÛÛœÝÛZ[ŽX^œŸO[Ë›^[Ý]›^[Ý]›ÞØWNÛ‹œÙ]
VØWKU›
‹JJ__J_\ØØ[TÜÚ][Û•Ú][ÛÛœÝ˜Z[Ê
^ÚYŠ]\Ëš\ÝX[[[Y[˜Ý\œ™[
\™]\›ŽØÛÛœÝÙ˜YÎ™K˜YÐÛÛœÝ˜Z[Î˜_O]\Ë™Ù]›ÜÊ
KÜ›Ú™XÝ[ÛŽO]\Ëš\ÝX[[[Y[ÚYŠUJJ_]]\Ë˜ÛÛœÝ˜Z[Ê\™]\›ŽÝ\ËœÝÜ[š[X][ÛŠ
NØÛÛœÝÏ^ÞŒNŒNÚJOOžØÛÛœÝO]\Ë™Ù]^\Ó[Ý[Û•˜[YJJNÚYŠI‰ˆLHOO]\Ë˜ÛÛœÝ˜Z[Ê^ØÛÛœÝXK™Ù]

NÛÖÙWOY[˜Ý[ÛŠKJ^Û]KNØÛÛœÝÏUJJKUJJNÜ™]\›ˆ›ÏÝT\ŠK›Z[‹K›X^[ËK›Z[ŠN›Ï›‰‰ŠT\ŠK›Z[‹K›X^[‹K›Z[ŠJK
K
_JÛZ[ŽX^K\Ë˜ÛÛœÝ˜Z[ÖÙWJ__JNØÛÛœÝÝ˜[œÙ›Ü›U[\]N›ŸO]\Ëš\ÝX[[[Y[™Ù]›ÜÊ
NÝ\Ëš\ÝX[[[Y[˜Ý\œ™[œÝ[K˜[œÙ›Ü›O[ÛŠßKˆŠNˆ››Û™H‹œ›ÛÝ	‰œ›ÛÝ\]TØÜ›Û

K\]S^[Ý]

K\Ëœ™\ÛÛ™PÛÛœÝ˜Z[Ê
KJOOžÚYŠXÛJKK[
J\™]\›ŽØÛÛœÝ]\Ë™Ù]^\Ó[Ý[Û•˜[YJJKÛZ[Ž›‹X^œŸO]\Ë˜ÛÛœÝ˜Z[ÖØWNÝœÙ]
›
‹‹ÖØWJJ_J_XY\Ý[™\œÊ
^ÚYŠ]\Ëš\ÝX[[[Y[˜Ý\œ™[
\™]\›ŽÜÛKœÙ]
\Ëš\ÝX[[[Y[\ÊNØÛÛœÝOPÝJ\Ëš\ÝX[[[Y[˜Ý\œ™[œÚ[\™ÝÛˆ‹OOžØÛÛœÝÙ˜YÎ˜K˜YÓ\Ý[™\ŽHLO]\Ë™Ù]›ÜÊ
NØI‰	‰\ËœÝ\
J_JKOJ
OOžØÛÛœÝÙ˜YÐÛÛœÝ˜Z[Î™_O]\Ë™Ù]›ÜÊ
NÕJJI‰™K˜Ý\œ™[	‰Š\Ë˜ÛÛœÝ˜Z[Ï]\Ëœ™\ÛÛ™T™YÛÛœÝ˜Z[Ê
J_KÜ›Ú™XÝ[ÛŽO]\Ëš\ÝX[[[Y[Ï]˜Y]™[\Ý[™\Š›YX\Ý\™H‹JNÝ	‰ˆ]›^[Ý]	‰Šœ›ÛÝ	‰œ›ÛÝ\]TØÜ›Û

K\]S^[Ý]

JKÜ‹œ™XY
JNØÛÛœÝ]JÚ[™ÝËœ™\Ú^™H‹

OO\ËœØØ[TÜÚ][Û•Ú][ÛÛœÝ˜Z[Ê
JK]˜Y]™[\Ý[™\Š™Y\]H‹
Ù[N™K\Ó^[Ý]Ú[™ÙY˜_JOOžÝ\Ëš\Ñ˜YÙÚ[™É‰˜I‰ŠJOOžØÛÛœÝ]\Ë™Ù]^\Ó[Ý[Û•˜[YJJNÝ	‰Š\Ë›ÜšYÚ[”Ú[ØWJÏYVØWK˜[œÛ]KœÙ]
™Ù]

JÙVØWK˜[œÛ]JJ_JK\Ëš\ÝX[[[Y[œ™[™\Š
J_JNÜ™]\›Š
OOžÛŠ
KJ
KÊ
K‰‰œŠ
__YÙ]›ÜÊ
^ØÛÛœÝO]\Ëš\ÝX[[[Y[™Ù]›ÜÊ
KÙ˜YÎ˜OHLK˜YÑ\™XÝ[Û“ØÚÎHLK˜YÔ›ÜYØ][ÛŽ›ÏHLK˜YÐÛÛœÝ˜Z[Î›HLK˜YÑ[\ÝXÎœKŒÍK˜YÓ[ÛY[[N›HLOYNÜ™]\›žË‹‹™K˜YÎ˜K˜YÑ\™XÝ[Û“ØÚÎ˜YÔ›ÜYØ][ÛŽ›Ë˜YÐÛÛœÝ˜Z[Î›‹˜YÑ[\ÝXÎœ‹˜YÓ[ÛY[[N›__Y[˜Ý[ÛˆÛJKK
^Ü™]\›ŠLOOX_OOOYJI‰Š[OO]OOYJ_XÛÛœÝ[OYOOŠK
OOžÙI‰”Ü‹œÜÝ™[™\Š

OO™JK
J_NØÛÛœÝ[OJJ
K˜Ü™X]PÛÛ^
J[
NÙ[˜Ý[ÛˆJOHL
^ØÛÛœÝOJJ
K\ÙPÛÛ^
J[JNÚYŠ[OOXJ\™]\›–ÈL[NØÛÛœÝÚ\Ô™\Ù[Û‘^]ÛÛ\]N›Ë™YÚ\Ý\Ž›ŸOXKJJ
K\ÙRY
J
NÊJ
K\ÙQY™™XÝ
J

OOžÙI‰›ŠŠ_KÙWJNØÛÛœÝJJ
K\ÙPØ[˜XÚÊJ

OO™I‰›É‰›ÊŠKÜ‹ËWJNÜ™]\›ˆ]	‰›ÏÖÈLKN–ÈL_XÛÛœÝOJJ
K˜Ü™X]PÛÛ^
JßJK[OJJ
K˜Ü™X]PÛÛ^
JßJKÛO^Ú\Ð[š[X]YÚ[˜ÙT™\Ú^™NˆL\Ñ]™\•\]YˆL_NÙ[˜Ý[ÛˆJKJ^Ü™]\›ˆK›X^OOXK›Z[Ì™KÊK›X^XK›Z[ŠJŒLXÛÛœÝ›O^ØÛÜœ™XÝŠKJOOžÚYŠXK\™Ù]
\™]\›ˆNÚYŠœÝš[™ÈOO]\[ÙˆJ^ÚYŠR›\Ý
JJ\™]\›ˆNÙO\\œÙQ›Ø]
J_\™]\›˜	ÚJKK\™Ù]ž
_IH	ÚJKK\™Ù]žJ_IX_K›O^ØÛÜœ™XÝŠKÝ™YTØØ[N˜K›Ú™XÝ[Û‘[NJOOžØÛÛœÝÏYKYÜËœ\œÙJJNÚYŠ‹›[™ÝJ\™]\›ˆÎØÛÛœÝYÜË˜Ü™X]U˜[œÙ›Ü›Y\ŠJKH›[X™\ˆˆOO]\[Ùˆ–ÌOÌNŒÏ]žœØØ[J˜KžO]žKœØØ[J˜KžNÛ–Ì
ÛKÏ\Ë–ÌJÛKÏZNØÛÛœÝÏU›
ËKJNÜ™]\›ˆ›[X™\ˆOO]\[Ùˆ–ÌŠÛI‰Š–ÌŠÛKÏXÊK›[X™\ˆOO]\[Ùˆ–ÌÊÛI‰Š–ÌÊÛKÏXÊKŠŠ__KÛO^ßNØÛÛœÝÜØÚY[N›KØ[˜Ù[—Û_OZÜŠ]Y]YSZXÜ›Ý\ÚËLJNØÛ\ÜÈÛH^[™ÈJ
KÛÛ\Û™[ØÛÛ\Û™[Y[Ý[

^ØÛÛœÝÝš\ÝX[[[Y[™K^[Ý]Ü›Ý\˜KÝÚ]Ú^[Ý]Ü›Ý\^[Ý]Y›ßO]\Ëœ›ÜËÜ›Ú™XÝ[ÛŽ›ŸOYNÝ˜\ˆŽÜZÛKØš™XÝ˜\ÜÚYÛŠÛKŠK‰‰ŠK™Ü›Ý\	‰˜K™Ü›Ý\˜Y
ŠK	‰œ™YÚ\Ý\‰‰›É‰œ™YÚ\Ý\ŠŠK‹œ›ÛÝ™Y\]J
K‹˜Y]™[\Ý[™\Š˜[š[X][ÛÛÛ\]H‹

OOžÝ\ËœØY™UÔ™[[Ý™J
_JK‹œÙ]Ü[ÛœÊË‹‹›‹›Ü[ÛœËÛ‘^]ÛÛ\]NŠ
OO\ËœØY™UÔ™[[Ý™J
_JJKÛKš\Ñ]™\•\]YHLYÙ]Û˜\ÚÝ™Y›Ü™U\]JJ^ØÛÛœÝÛ^[Ý]\[™[˜ÞN˜Kš\ÝX[[[Y[˜YÎ›Ë\Ô™\Ù[›ŸO]\Ëœ›ÜË]œ›Ú™XÝ[ÛŽÜ™]\›ˆÊ‹š\Ô™\Ù[[‹ßK›^[Ý]\[™[˜ÞHOOX_›ÚYOOXOÜ‹Ú[\]J
N\ËœØY™UÔ™[[Ý™J
KKš\Ô™\Ù[OO[‰‰ŠÜ‹œ›Û[ÝJ
Nœ‹œ™[YØ]J
_Ü‹œÜÝ™[™\Š

OOžØÛÛœÝO\‹™Ù]ÝXÚÊ
NÙI‰™K›Y[X™\œË›[™Ý\ËœØY™UÔ™[[Ý™J
_JJK[
N›[XÛÛ\Û™[Y\]J
^ØÛÛœÝÜ›Ú™XÝ[ÛŽ™_O]\Ëœ›ÜËš\ÝX[[[Y[ÙI‰ŠKœ›ÛÝ™Y\]J
K›KœÜÝ™[™\Š

OOžÈYK˜Ý\œ™[[š[X][Û‰‰™Kš\ÓXY

I‰\ËœØY™UÔ™[[Ý™J
_JJ_XÛÛ\Û™[Ú[[›[Ý[

^ØÛÛœÝÝš\ÝX[[[Y[™K^[Ý]Ü›Ý\˜KÝÚ]Ú^[Ý]Ü›Ý\O]\Ëœ›ÜËÜ›Ú™XÝ[ÛŽ›ßOYNÛÉ‰ŠËœØÚY[PÚXÚÐY\•[›[Ý[

KI‰˜K™Ü›Ý\	‰˜K™Ü›Ý\œ™[[Ý™JÊK	‰™\™YÚ\Ý\‰‰™\™YÚ\Ý\ŠÊJ_\ØY™UÔ™[[Ý™J
^ØÛÛœÝÜØY™UÔ™[[Ý™N™_O]\Ëœ›ÜÎÙI‰™J
_\™[™\Š
^Ü™]\›ˆ[_Y[˜Ý[ÛˆJJ^ØÛÛœÝØKO\J
KÏJJ
K\ÙPÛÛ^
JJNÜ™]\›ŠÊ
KšœÞ
JÛKË‹‹™K^[Ý]Ü›Ý\›ËÝÚ]Ú^[Ý]Ü›Ý\ŠJ
K\ÙPÛÛ^
J[JK\Ô™\Ù[˜KØY™UÔ™[[Ý™NJ_XÛÛœÝÛO^Ø›Ü™\”˜Y]\ÎžË‹‹˜›K\UÎ–È˜›Ü™\•ÜY˜Y]\È‹˜›Ü™\•ÜšYÚ˜Y]\È‹˜›Ü™\›ÝÛSY˜Y]\È‹˜›Ü™\›ÝÛTšYÚ˜Y]\È—_K›Ü™\•ÜY˜Y]\Î˜›K›Ü™\•ÜšYÚ˜Y]\Î˜›K›Ü™\›ÝÛSY˜Y]\Î˜›K›Ü™\›ÝÛTšYÚ˜Y]\Î˜›K›ÞÚYÝÎ™›_NØÛÛœÝÛOJKJOO™K™\XK™\ØÛ\ÜÈ^ØÛÛœÝXÝÜŠ
^Ý\Ë˜Ú[™[V×K\Ëš\Ñ\OHL_XY
J^ÕœŠ\Ë˜Ú[™[‹JK\Ëš\Ñ\OHL\™[[Ý™JJ^ÔœŠ\Ë˜Ú[™[‹JK\Ëš\Ñ\OHLY›Ü‘XXÚ
J^Ý\Ëš\Ñ\I‰\Ë˜Ú[™[‹œÛÜ
ÛJK\Ëš\Ñ\OHLK\Ë˜Ú[™[‹™›Ü‘XXÚ
J__Y[˜Ý[Ûˆ[JKJ^ØÛÛœÝU‹››ÝÊ
KÏJÝ[Y\Ý[\›ŸJOOžØÛÛœÝ[‹]ÜXI‰ŠŠÊKJ‹XJJ_NÜ™]\›ˆÜ‹œ™XY
ËL
K

OO“ŠÊ_Y[˜Ý[ÛˆJJ^ØÛÛœÝOZXÊJOÙK™Ù]

N™NÜ™]\›ˆXK›ÛÛX[Š	‰ˆ›Øš™XÝOO]\[Ùˆ	‰›Z^	‰Õ˜[YJOØKÕ˜[YJ
N˜NÝ˜\ˆXÛÛœÝ›OVÈ•ÜY‹•ÜšYÚ‹›ÝÛSY‹›ÝÛTšYÚ—K[OP›K›[™ÝOYOOˆœÝš[™ÈOO]\[ÙˆOÜ\œÙQ›Ø]
JN™K›OYOOˆ›[X™\ˆOO]\[Ùˆ_›\Ý
JNÙ[˜Ý[Ûˆ›JKJ^Ü™]\›ˆ›ÚYOOYVØWOÙVØWN™K˜›Ü™\”˜Y]\ßXÛÛœÝOQÛJKZJK›OQÛJKŽMKÜŠNÙ[˜Ý[ÛˆÛJKK
^Ü™]\›ˆÏO›ÏOÌ›Ï˜OÌN
\ŠKKÊJ_Y[˜Ý[ÛˆÛJKJ^ÙK›Z[XK›Z[‹K›X^XK›X^Y[˜Ý[ÛˆÛJKJ^ÕÛJKžKž
KÛJKžKKžJ_Y[˜Ý[Ûˆ[JKJ^ÙK˜[œÛ]OXK˜[œÛ]KKœØØ[OXKœØØ[KK›ÜšYÚ[”Ú[XK›ÜšYÚ[”Ú[K›ÜšYÚ[XK›ÜšYÚ[ŸY[˜Ý[ÛˆJKKËŠ^Ü™]\›ˆOIJKOXKKÝÊK›ÚYOO[‰‰ŠOIJKKÛ‹ÊJK_Y[˜Ý[Ûˆ›JKKÝË—K‹
^ÈY[˜Ý[ÛŠKOLLKÏKK‹YKYJ^Ü[\Ý
JI‰ŠO\\œÙQ›Ø]
JKOU›
›Z[‹›X^KÌL
K[›Z[ŠNÚYŠ›[X™\ˆˆOO]\[ÙˆJ\™]\›ŽÛ]ÏU›
‹›Z[‹‹›X^ÊNÙOOO\‰‰ŠËOXJKK›Z[RJK›Z[‹KËŠKK›X^RJK›X^KËŠ_JKVÝKVÛ×KVÛ—KKœØØ[K‹
_XÛÛœÝÛOVÈž‹œØØ[V‹›ÜšYÚ[–—K›OVÈžH‹œØØ[VH‹›ÜšYÚ[–H—NÙ[˜Ý[Ûˆ[JKKÊ^Ó›JKžKÛKÝž›ÚYÏÛËž›ÚY
K›JKžKK›KÝžN›ÚYÏÛËžN›ÚY
_Y[˜Ý[Ûˆ›JJ^Ü™]\›ˆOOYK˜[œÛ]I‰ŒOOOYKœØØ[_Y[˜Ý[Ûˆ[JJ^Ü™]\›ˆ›JKž
I‰ž›JKžJ_Y[˜Ý[Ûˆ[JKJ^Ü™]\›ˆK›Z[OOXK›Z[‰‰™K›X^OOXK›X^Y[˜Ý[Ûˆ›JKJ^Ü™]\›ˆX]œ›Ý[™
K›Z[ŠOOOSX]œ›Ý[™
K›Z[ŠI‰“X]œ›Ý[™
K›X^
OOOSX]œ›Ý[™
K›X^
_Y[˜Ý[Ûˆ[JKJ^Ü™]\›ˆ›JKžKž
I‰’›JKžKKžJ_Y[˜Ý[Ûˆ	JJ^Ü™]\›ˆJKž
KÕJKžJ_Y[˜Ý[ÛˆJKJ^Ü™]\›ˆK˜[œÛ]OOOXK˜[œÛ]I‰™KœØØ[OOOXKœØØ[I‰™K›ÜšYÚ[”Ú[OOXK›ÜšYÚ[”Ú[XÛ\ÜÈ›^ØÛÛœÝXÝÜŠ
^Ý\Ë›Y[X™\œÏV×_XY
J^ÕœŠ\Ë›Y[X™\œËJKKœØÚY[T™[™\Š
_\™[[Ý™JJ^ÚYŠœŠ\Ë›Y[X™\œËJKOOO]\Ëœ™]“XY	‰Š\Ëœ™]“XY]›ÚY
KOOO]\Ë›XY
^ØÛÛœÝO]\Ë›Y[X™\œÖÝ\Ë›Y[X™\œË›[™ÝLWNÙI‰\Ëœ›Û[ÝJJ__\™[YØ]JJ^ØÛÛœÝO]\Ë›Y[X™\œË™š[™[™^
OO™OOOXJNÚYŠOOXJ\™]\›ˆLNÛ]Ù›ÜŠ]ÏXNÛÏLÛËKJ^ØÛÛœÝO]\Ë›Y[X™\œÖÛ×NÚYŠLHOOYKš\Ô™\Ù[
^ÝYNØœ™XZß_\™]\›ˆH]	‰Š\Ëœ›Û[ÝJ
KL
_\›Û[ÝJKJ^ØÛÛœÝ]\Ë›XYÚYŠHOO]	‰Š\Ëœ™]“XY]\Ë›XYYKKœÚÝÊ
K
J^Ýš[œÝ[˜ÙI‰œØÚY[T™[™\Š
KKœØÚY[T™[™\Š
KKœ™\Ý[YQœ›ÛO]I‰ŠKœ™\Ý[YQœ›ÛKœ™\Ù\™SÜXÚ]OHL
KœÛ˜\ÚÝ	‰ŠKœÛ˜\ÚÝ]œÛ˜\ÚÝKœÛ˜\ÚÝ›]\Ý˜[Y\Ï]˜[š[X][Û•˜[Y\ß›]\Ý˜[Y\ÊKKœ›ÛÝ	‰™Kœ›ÛÝš\Õ\][™É‰ŠKš\Ó^[Ý]\OHL
NØÛÛœÝØÜ›ÜÜÙ˜YN›ßOYK›Ü[ÛœÎÈLOOO[É‰šYJ
__Y^][š[X][ÛÛÛ\]J
^Ý\Ë›Y[X™\œË™›Ü‘XXÚ
OOžØÛÛœÝÛÜ[ÛœÎ˜K™\Ý[Z[™Ñœ›ÛNOYNØK›Û‘^]ÛÛ\]I‰˜K›Û‘^]ÛÛ\]J
K	‰›Ü[ÛœË›Û‘^]ÛÛ\]I‰›Ü[ÛœË›Û‘^]ÛÛ\]J
_J_\ØÚY[T™[™\Š
^Ý\Ë›Y[X™\œË™›Ü‘XXÚ
OOžÙKš[œÝ[˜ÙI‰™KœØÚY[T™[™\ŠLJ_J_\™[[Ý™SXYÛ˜\ÚÝ

^Ý\Ë›XY	‰\Ë›XYœÛ˜\ÚÝ	‰Š\Ë›XYœÛ˜\ÚÝ]›ÚY
__XÛÛœÝ[O^Ý\Nˆœ›Ú™XÝ[Û‘œ˜[YH‹Ý[›Ù\ÎŒ™\ÛÛ™Y\™Ù][\ÎŒ™XØ[Ý[]Y›Ú™XÝ[ÛŽŒK\H[™Yš[™YˆOO]\[ÙˆÚ[™ÝÉ‰›ÚYOO]Ú[™ÝË“[Ý[Û‘XYË\VÈˆ‹–‹–H‹–ˆ—K^Ýš\ÚXš[]NˆšY[ˆŸNÛ]ÜLÙ[˜Ý[Ûˆœ
KKÊ^ØÛÛœÝÛ]\Ý˜[Y\Î›ŸOXNÛ–ÙWI‰ŠÙWO[–ÙWKKœÙ]Ý]XÕ˜[YJK
KÉ‰ŠÖÙWOL
J_Y[˜Ý[Ûˆœ
J^ÚYŠKš\ÐÚXÚÙYÜ[Z\ÙY\X\HLKœ›ÛÝOOYJ\™]\›ŽØÛÛœÝÝš\ÝX[[[Y[˜_OYK›Ü[ÛœÎÚYŠXJ\™]\›ŽØÛÛœÝPXÊJNÚYŠÚ[™ÝË“[Ý[Û’\ÓÜ[Z\ÙY[š[X][ÛŠ˜[œÙ›Ü›HŠJ^ØÛÛœÝÛ^[Ý]˜K^[Ý]Y›ßOYK›Ü[ÛœÎÝÚ[™ÝË“[Ý[ÛØ[˜Ù[Ü[Z\ÙY[š[X][ÛŠ˜[œÙ›Ü›H‹Ü‹J_ÊJ_XÛÛœÝÜ\™[›ßOYNÛÉ‰ˆ[Ëš\ÐÚXÚÙYÜ[Z\ÙY\X\‰‰œœ
Ê_Y[˜Ý[Ûˆ
Ø]XÚ™\Ú^™S\Ý[™\Ž™KY˜][\™[˜KYX\Ý\™TØÜ›ÛÚXÚÒ\ÔØÜ›Û›ÛÝ›Ë™\Ù]˜[œÙ›Ü›N›ŸJ^Ü™]\›ˆÛ\ÜÞØÛÛœÝXÝÜŠO^ßKJ[OOX_›ÚYOOXOÝ›ÚY˜J
JJ^Ý\ËšY[Ü
ÊË\Ë˜[š[X][Û’YL\Ë˜Ú[™[[™]ÈÙ]\Ë›Ü[ÛœÏ^ßK\Ëš\Õ™YP[š[X][™ÏHLK\Ëš\Ð[š[X][Û›ØÚÙYHLK\Ëš\Ó^[Ý]\OHLK\Ëš\Ô›Ú™XÝ[Û‘\OHLK\Ëš\ÔÚ\™Y›Ú™XÝ[Û‘\OHLK\Ëš\Õ˜[œÙ›Ü›Q\OHLK\Ë\]SX[X[P›ØÚÙYHLK\Ë\]P›ØÚÙYžT™\Ú^™OHLK\Ëš\Õ\][™ÏHLK\Ëš\ÔÕ‘ÏHLK\Ë›™YYÔ™\Ù]HLK\ËœÚÝ[™\Ù]˜[œÙ›Ü›OHLK\Ëš\ÐÚXÚÙYÜ[Z\ÙY\X\HLK\Ë™YTØØ[O^ÞŒKNŒ_K\Ë™]™[[™\œÏ[™]ÈX\\Ëš\Õ™YP[š[X]YHLK\Ë\]TØÚY[YHLK\ËœØÚY[U\]OJ
OO\Ë\]J
K\Ëœ›Ú™XÝ[Û•\]TØÚY[YHLK\Ë˜ÚXÚÕ\]Q˜Z[YJ
OOžÝ\Ëš\Õ\][™É‰Š\Ëš\Õ\][™ÏHLK\Ë˜ÛX\[Û˜\ÚÝÊ
J_K\Ë\]T›Ú™XÝ[ÛJ
OOžÝ\Ëœ›Ú™XÝ[Û•\]TØÚY[YHLK\	‰Š[KÝ[›Ù\ÏT[Kœ™\ÛÛ™Y\™Ù][\ÏT[Kœ™XØ[Ý[]Y›Ú™XÝ[ÛL
K\Ë››Ù\Ë™›Ü‘XXÚ
Ü
K\Ë››Ù\Ë™›Ü‘XXÚ

K\Ë››Ù\Ë™›Ü‘XXÚ
œ
K\Ë››Ù\Ë™›Ü‘XXÚ
\
K\	‰Ú[™ÝË“[Ý[Û‘XYËœ™XÛÜ™
[J_K\Ëœ™\ÛÛ™Y™[]]™U\™Ù]]L\Ëš\Ô›Ú™XÝYHLK\Ëš\Õš\ÚX›OHL\Ë˜[š[X][Û”›ÙÜ™\ÜÏL\ËœÚ\™Y›Ù\Ï[™]ÈX\\Ë›]\Ý˜[Y\ÏYK\Ëœ›ÛÝ]Ýœ›ÛÝ\Ë\Ëœ]]ÖË‹‹œ]N–×K\Ëœ\™[]\Ë™\]Ý™\
ÌNŒÙ›ÜŠ]OLØO\Ëœ]›[™ÝØJÊÊ]\Ëœ]ØWKœÚÝ[™\Ù]˜[œÙ›Ü›OHLÝ\Ëœ›ÛÝOO]\É‰Š\Ë››Ù\Ï[™]ÈJ_XY]™[\Ý[™\ŠKJ^Ü™]\›ˆ\Ë™]™[[™\œËš\ÊJ_\Ë™]™[[™\œËœÙ]
K™]ÈŠK\Ë™]™[[™\œË™Ù]
JK˜Y
J_[›ÝYžS\Ý[™\œÊK‹‹˜J^ØÛÛœÝ]\Ë™]™[[™\œË™Ù]
JNÝ	‰››ÝYžJ‹‹˜J_Z\Ó\Ý[™\œÊJ^Ü™]\›ˆ\Ë™]™[[™\œËš\ÊJ_[[Ý[
K]\Ëœ›ÛÝš\Õ™YP[š[X]Y
^ÚYŠ\Ëš[œÝ[˜ÙJ\™]\›ŽÝ˜\ˆÎÝ\Ëš\ÔÕ‘ÏJÏXJZ[œÝ[˜Ù[ÙˆÕ‘Ñ[[Y[	‰ˆœÝ™ÈˆOO[ËYÓ˜[YK\Ëš[œÝ[˜ÙOXNØÛÛœÝÛ^[Ý]Y›‹^[Ý]œ‹š\ÝX[[[Y[›O]\Ë›Ü[ÛœÎÚYŠ	‰ˆ[˜Ý\œ™[	‰››[Ý[
JK\Ëœ›ÛÝ››Ù\Ë˜Y
\ÊK\Ëœ\™[	‰\Ëœ\™[˜Ú[™[‹˜Y
\ÊK	‰ŠŸŠI‰Š\Ëš\Ó^[Ý]\OHL
KJ^Û]ØÛÛœÝÏJ
OO\Ëœ›ÛÝ\]P›ØÚÙYžT™\Ú^™OHLNÙJK

OOžÝ\Ëœ›ÛÝ\]P›ØÚÙYžT™\Ú^™OHL	‰

KP[JËL
KÛKš\Ð[š[X]YÚ[˜ÙT™\Ú^™I‰ŠÛKš\Ð[š[X]YÚ[˜ÙT™\Ú^™OHLK\Ë››Ù\Ë™›Ü‘XXÚ
Ü
J_J_[‰‰\Ëœ›ÛÝœ™YÚ\Ý\”Ú\™Y›ÙJ‹\ÊKLHOO]\Ë›Ü[ÛœË˜[š[X]I‰›	‰ŠŸŠI‰\Ë˜Y]™[\Ý[™\Š™Y\]H‹
Ù[N™K\Ó^[Ý]Ú[™ÙY˜K\Ô™[]]™U\™Ù]Ú[™ÙY^[Ý]›ßJOOžÚYŠ\Ëš\Õ™YP[š[X][Û›ØÚÙY

J\™]\›ˆ\Ë\™Ù]]›ÚY›ÚY
\Ëœ™[]]™U\™Ù]]›ÚY
NØÛÛœÝ]\Ë›Ü[ÛœË˜[œÚ][ÛŸ™Ù]Y˜][˜[œÚ][ÛŠ
_ÛÛ“^[Ý][š[X][Û”Ý\œ‹Û“^[Ý][š[X][ÛÛÛ\]NœßO[™Ù]›ÜÊ
KOH]\Ë\™Ù]^[Ý]V[J\Ë\™Ù]^[Ý]Ê_ÏHXI‰ÚYŠ\Ë›Ü[ÛœË›^[Ý]›ÛÝ\Ëœ™\Ý[YQœ›ÛI‰\Ëœ™\Ý[YQœ›ÛKš[œÝ[˜Ù_ßI‰Š_]\Ë˜Ý\œ™[[š[X][ÛŠJ^Ý\Ëœ™\Ý[YQœ›ÛI‰Š\Ëœ™\Ý[Z[™Ñœ›ÛO]\Ëœ™\Ý[YQœ›ÛK\Ëœ™\Ý[Z[™Ñœ›ÛKœ™\Ý[Z[™Ñœ›ÛO]›ÚY
K\ËœÙ][š[X][Û“ÜšYÚ[ŠKÊNØÛÛœÝO^Ë‹‹žœŠ‹›^[Ý]ŠKÛ”^Nœ‹ÛÛÛ\]NœßNÊœÚÝ[™YXÙS[Ý[ÛŸ\Ë›Ü[ÛœË›^[Ý]›ÛÝ
I‰ŠK™[^OLK\OHLJK\ËœÝ\[š[X][ÛŠJ_Y[ÙH_Ü
\ÊK\Ëš\ÓXY

I‰\Ë›Ü[ÛœË›Û‘^]ÛÛ\]I‰\Ë›Ü[ÛœË›Û‘^]ÛÛ\]J
NÝ\Ë\™Ù]^[Ý][ßJ_][›[Ý[

^Ý\Ë›Ü[ÛœË›^[Ý]Y	‰\ËÚ[\]J
K\Ëœ›ÛÝ››Ù\Ëœ™[[Ý™J\ÊNØÛÛœÝO]\Ë™Ù]ÝXÚÊ
NÙI‰™Kœ™[[Ý™J\ÊK\Ëœ\™[	‰\Ëœ\™[˜Ú[™[‹™[]J\ÊK\Ëš[œÝ[˜ÙO]›ÚYŠ\Ë\]T›Ú™XÝ[ÛŠ_X›ØÚÕ\]J
^Ý\Ë\]SX[X[P›ØÚÙYHL][˜›ØÚÕ\]J
^Ý\Ë\]SX[X[P›ØÚÙYHL_Z\Õ\]P›ØÚÙY

^Ü™]\›ˆ\Ë\]SX[X[P›ØÚÙY\Ë\]P›ØÚÙYžT™\Ú^™_Z\Õ™YP[š[X][Û›ØÚÙY

^Ü™]\›ˆ\Ëš\Ð[š[X][Û›ØÚÙY\Ëœ\™[	‰\Ëœ\™[š\Õ™YP[š[X][Û›ØÚÙY

_L_\Ý\\]J
^Ý\Ëš\Õ\]P›ØÚÙY

_
\Ëš\Õ\][™ÏHL\Ë››Ù\É‰\Ë››Ù\Ë™›Ü‘XXÚ
œ
K\Ë˜[š[X][Û’Y
ÊÊ_YÙ]˜[œÙ›Ü›U[\]J
^ØÛÛœÝÝš\ÝX[[[Y[™_O]\Ë›Ü[ÛœÎÜ™]\›ˆI‰™K™Ù]›ÜÊ
K˜[œÙ›Ü›U[\]_]Ú[\]JOHL
^ÚYŠ\Ëœ›ÛÝš\Õ™YP[š[X]YHL\Ëœ›ÛÝš\Õ\]P›ØÚÙY

J\™]\›ˆ›ÚY
\Ë›Ü[ÛœË›Û‘^]ÛÛ\]I‰\Ë›Ü[ÛœË›Û‘^]ÛÛ\]J
JNÚYŠÚ[™ÝË“[Ý[ÛØ[˜Ù[Ü[Z\ÙY[š[X][Û‰‰ˆ]\Ëš\ÐÚXÚÙYÜ[Z\ÙY\X\‰‰œœ
\ÊK]\Ëœ›ÛÝš\Õ\][™É‰\Ëœ›ÛÝœÝ\\]J
K\Ëš\Ó^[Ý]\J\™]\›ŽÝ\Ëš\Ó^[Ý]\OHLÙ›ÜŠ]LÛ\Ëœ]›[™ÝÛŠÊÊ^ØÛÛœÝO]\Ëœ]Û—NÙKœÚÝ[™\Ù]˜[œÙ›Ü›OHLK\]TØÜ›Û
œÛ˜\ÚÝŠKK›Ü[ÛœË›^[Ý]›ÛÝ	‰™KÚ[\]JLJ_XÛÛœÝÛ^[Ý]Y˜K^[Ý]O]\Ë›Ü[ÛœÎÚYŠ›ÚYOOXI‰ˆ]
\™]\›ŽØÛÛœÝÏ]\Ë™Ù]˜[œÙ›Ü›U[\]J
NÝ\Ëœ™]•˜[œÙ›Ü›U[\]U˜[YO[ÏÛÊ\Ë›]\Ý˜[Y\ËˆŠN›ÚY\Ë\]TÛ˜\ÚÝ

KI‰\Ë››ÝYžS\Ý[™\œÊÚ[\]HŠ_]\]J
^Ý\Ë\]TØÚY[YHLNÚYŠ\Ëš\Õ\]P›ØÚÙY

J\™]\›ˆ\Ë[˜›ØÚÕ\]J
K\Ë˜ÛX\[Û˜\ÚÝÊ
K›ÚY\Ë››Ù\Ë™›Ü‘XXÚ

NÝ\Ëš\Õ\][™ß\Ë››Ù\Ë™›Ü‘XXÚ

K\Ëš\Õ\][™ÏHLK\Ë››Ù\Ë™›Ü‘XXÚ
\
K\Ë››Ù\Ë™›Ü‘XXÚ
Ü
K\Ë››Ù\Ë™›Ü‘XXÚ
\
K\Ë˜ÛX\[Û˜\ÚÝÊ
NØÛÛœÝOU‹››ÝÊ
NÐ\‹™[OU
YLËÍŒKP\‹[Y\Ý[\
K\‹[Y\Ý[\YK\‹š\Ô›ØÙ\ÜÚ[™ÏHL‹\]Kœ›ØÙ\ÜÊ\ŠK‹œ™T™[™\‹œ›ØÙ\ÜÊ\ŠK‹œ™[™\‹œ›ØÙ\ÜÊ\ŠK\‹š\Ô›ØÙ\ÜÚ[™ÏHL_YY\]J
^Ý\Ë\]TØÚY[Y
\Ë\]TØÚY[YHL›Kœ™XY
\ËœØÚY[U\]JJ_XÛX\[Û˜\ÚÝÊ
^Ý\Ë››Ù\Ë™›Ü‘XXÚ
\
K\ËœÚ\™Y›Ù\Ë™›Ü‘XXÚ
Ü
_\ØÚY[U\]T›Ú™XÝ[ÛŠ
^Ý\Ëœ›Ú™XÝ[Û•\]TØÚY[Y
\Ëœ›Ú™XÝ[Û•\]TØÚY[YHLÜ‹œ™T™[™\Š\Ë\]T›Ú™XÝ[Û‹LKL
J_\ØÚY[PÚXÚÐY\•[›[Ý[

^ÔÜ‹œÜÝ™[™\Š

OOžÝ\Ëš\Ó^[Ý]\OÝ\Ëœ›ÛÝ™Y\]J
N\Ëœ›ÛÝ˜ÚXÚÕ\]Q˜Z[Y

_J_]\]TÛ˜\ÚÝ

^È]\ËœÛ˜\ÚÝ	‰\Ëš[œÝ[˜ÙI‰Š\ËœÛ˜\ÚÝ]\Ë›YX\Ý\™J
J_]\]S^[Ý]

^ÚYŠ]\Ëš[œÝ[˜ÙJ\™]\›ŽÚYŠ\Ë\]TØÜ›Û

K
]\Ë›Ü[ÛœË˜[Ø^\ÓYX\Ý\™S^[Ý]]\Ëš\ÓXY

JI‰ˆ]\Ëš\Ó^[Ý]\J\™]\›ŽÚYŠ\Ëœ™\Ý[YQœ›ÛI‰ˆ]\Ëœ™\Ý[YQœ›ÛKš[œÝ[˜ÙJY›ÜŠ]LÝ\Ëœ]›[™ÝÝ
ÊÊ^Ý\Ëœ]ÝK\]TØÜ›Û

_XÛÛœÝO]\Ë›^[Ý]Ý\Ë›^[Ý]]\Ë›YX\Ý\™JLJK\Ë›^[Ý]ÛÜœ™XÝY^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_K\Ëš\Ó^[Ý]\OHLK\Ëœ›Ú™XÝ[Û‘[O]›ÚY\Ë››ÝYžS\Ý[™\œÊ›YX\Ý\™H‹\Ë›^[Ý]›^[Ý]›Þ
NØÛÛœÝÝš\ÝX[[[Y[˜_O]\Ë›Ü[ÛœÎØI‰˜K››ÝYžJ“^[Ý]YX\Ý\™H‹\Ë›^[Ý]›^[Ý]›ÞOÙK›^[Ý]›Þ›ÚY
_]\]TØÜ›Û
OH›YX\Ý\™HŠ^Û]OP›ÛÛX[Š\Ë›Ü[ÛœË›^[Ý]ØÜ›Û	‰\Ëš[œÝ[˜ÙJNÚYŠ\ËœØÜ›Û	‰\ËœØÜ›Û˜[š[X][Û’YOO]\Ëœ›ÛÝ˜[š[X][Û’Y	‰\ËœØÜ›Ûœ\ÙOOOYI‰ŠOHLJKJ^ØÛÛœÝO[Ê\Ëš[œÝ[˜ÙJNÝ\ËœØÜ›Û^Ø[š[X][Û’Y\Ëœ›ÛÝ˜[š[X][Û’Y\ÙN™K\Ô›ÛÝ˜KÙ™œÙ]
\Ëš[œÝ[˜ÙJKØ\Ô›ÛÝ\ËœØÜ›ÛÝ\ËœØÜ›Ûš\Ô›ÛÝ˜___\™\Ù]˜[œÙ›Ü›J
^ÚYŠ[Š\™]\›ŽØÛÛœÝO]\Ëš\Ó^[Ý]\_\ËœÚÝ[™\Ù]˜[œÙ›Ü›_\Ë›Ü[ÛœË˜[Ø^\ÓYX\Ý\™S^[Ý]O]\Ëœ›Ú™XÝ[Û‘[I‰ˆU[J\Ëœ›Ú™XÝ[Û‘[JK]\Ë™Ù]˜[œÙ›Ü›U[\]J
KÏ]Ý
\Ë›]\Ý˜[Y\ËˆŠN›ÚY[ÈOO]\Ëœ™]•˜[œÙ›Ü›U[\]U˜[YNÙI‰Š_]J\Ë›]\Ý˜[Y\Ê_ŠI‰ŠŠ\Ëš[œÝ[˜ÙKÊK\ËœÚÝ[™\Ù]˜[œÙ›Ü›OHLK\ËœØÚY[T™[™\Š
J_[YX\Ý\™JOHL
^ØÛÛœÝO]\Ë›YX\Ý\™TYÙP›Þ

NÛ]]\Ëœ™[[Ý™Q[[Y[ØÜ›Û
JNÝ˜\ˆÎÜ™]\›ˆI‰Š]\Ëœ™[[Ý™U˜[œÙ›Ü›J
JK

Ï]
Kž
K
ËžJKØ[š[X][Û’Y\Ëœ›ÛÝ˜[š[X][Û’YYX\Ý\™Y›Þ˜K^[Ý]›Þ]\Ý˜[Y\ÎžßKÛÝ\˜ÙN\ËšY_[YX\Ý\™TYÙP›Þ

^Ý˜\ˆNØÛÛœÝÝš\ÝX[[[Y[˜_O]\Ë›Ü[ÛœÎÚYŠXJ\™]\›žÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_NØÛÛœÝXK›YX\Ý\™UšY]ÜÜ›Þ

NÚYŠJ
[OOJO]\ËœØÜ›Û
_›ÚYOOYOÝ›ÚY™KØ\Ô›ÛÝ
_\Ëœ]œÛÛYJ
JJ^ØÛÛœÝÜØÜ›Û™_O]\Ëœ›ÛÝÙI‰ŠJžK›Ù™œÙ]ž
KJžKK›Ù™œÙ]žJJ_\™]\›ˆ\™[[Ý™Q[[Y[ØÜ›Û
J^Ý˜\ˆNØÛÛœÝ^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_NÚYŠÛJJK[OOJO]\ËœØÜ›Û
_›ÚYOOXOÝ›ÚY˜KØ\Ô›ÛÝ
\™]\›ˆÙ›ÜŠ]ÏLÛÏ\Ëœ]›[™ÝÛÊÊÊ^ØÛÛœÝO]\Ëœ]Û×KÜØÜ›Û›‹Ü[ÛœÎœŸOXNØHOO]\Ëœ›ÛÝ	‰›‰‰œ‹›^[Ý]ØÜ›Û	‰Š‹Ø\Ô›ÛÝ	‰“ÛJJKJž‹›Ù™œÙ]ž
KJžK‹›Ù™œÙ]žJJ_\™]\›ˆX\U˜[œÙ›Ü›JKOHLJ^ØÛÛœÝ^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_NÓÛJJNÙ›ÜŠ]ÏLÛÏ\Ëœ]›[™ÝÛÊÊÊ^ØÛÛœÝO]\Ëœ]Û×NÈXI‰™K›Ü[ÛœË›^[Ý]ØÜ›Û	‰™KœØÜ›Û	‰™HOOYKœ›ÛÝ	‰››JÞ‹YKœØÜ›Û›Ù™œÙ]žN‹YKœØÜ›Û›Ù™œÙ]ž_JK]JK›]\Ý˜[Y\ÊI‰››JK›]\Ý˜[Y\Ê_\™]\›ˆ]J\Ë›]\Ý˜[Y\ÊI‰››J\Ë›]\Ý˜[Y\ÊK\™[[Ý™U˜[œÙ›Ü›JJ^ØÛÛœÝO^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_NÓÛJKJNÙ›ÜŠ]LÝ\Ëœ]›[™ÝÝ
ÊÊ^ØÛÛœÝO]\Ëœ]ÝNÚYŠYKš[œÝ[˜ÙJXÛÛ[YNÚYŠ\]JK›]\Ý˜[Y\ÊJXÛÛ[YNÕ]JK›]\Ý˜[Y\ÊI‰™K\]TÛ˜\ÚÝ

NØÛÛœÝÏRÝJ
NÓÛJËK›YX\Ý\™TYÙP›Þ

JK[JKK›]\Ý˜[Y\ËKœÛ˜\ÚÝÙKœÛ˜\ÚÝ›^[Ý]›Þ›ÚYÊ_\™]\›ˆ]J\Ë›]\Ý˜[Y\ÊI‰’[JK\Ë›]\Ý˜[Y\ÊK_\Ù]\™Ù][JJ^Ý\Ë\™Ù][OYK\Ëœ›ÛÝœØÚY[U\]T›Ú™XÝ[ÛŠ
K\Ëš\Ô›Ú™XÝ[Û‘\OHL\Ù]Ü[ÛœÊJ^Ý\Ë›Ü[ÛœÏ^Ë‹‹\Ë›Ü[ÛœË‹‹™KÜ›ÜÜÙ˜YN›ÚYOOYK˜Ü›ÜÜÙ˜Y_K˜Ü›ÜÜÙ˜Y__XÛX\“YX\Ý\™[Y[Ê
^Ý\ËœØÜ›Û]›ÚY\Ë›^[Ý]]›ÚY\ËœÛ˜\ÚÝ]›ÚY\Ëœ™]•˜[œÙ›Ü›U[\]U˜[YO]›ÚY\Ë\™Ù][O]›ÚY\Ë\™Ù]]›ÚY\Ëš\Ó^[Ý]\OHL_Y›Ü˜ÙT™[]]™T\™[Ô™\ÛÛ™U\™Ù]

^Ý\Ëœ™[]]™T\™[	‰\Ëœ™[]]™T\™[œ™\ÛÛ™Y™[]]™U\™Ù]]OOP\‹[Y\Ý[\	‰\Ëœ™[]]™T\™[œ™\ÛÛ™U\™Ù][JL
_\™\ÛÛ™U\™Ù][JOHLJ^Ý˜\ˆNØÛÛœÝ]\Ë™Ù]XY

NÝ\Ëš\Ô›Ú™XÝ[Û‘\_
\Ëš\Ô›Ú™XÝ[Û‘\O]š\Ô›Ú™XÝ[Û‘\JK\Ëš\Õ˜[œÙ›Ü›Q\_
\Ëš\Õ˜[œÙ›Ü›Q\O]š\Õ˜[œÙ›Ü›Q\JK\Ëš\ÔÚ\™Y›Ú™XÝ[Û‘\_
\Ëš\ÔÚ\™Y›Ú™XÝ[Û‘\O]š\ÔÚ\™Y›Ú™XÝ[Û‘\JNØÛÛœÝÏP›ÛÛX[Š\Ëœ™\Ý[Z[™Ñœ›ÛJ_\ÈOO]ÚYŠJ_É‰\Ëš\ÔÚ\™Y›Ú™XÝ[Û‘\_\Ëš\Ô›Ú™XÝ[Û‘\_
[OOJO]\Ëœ\™[
_›ÚYOOXOÝ›ÚY˜Kš\Ô›Ú™XÝ[Û‘\J_\Ë˜][\Ô™\ÛÛ™T™[]]™U\™Ù]\Ëœ›ÛÝ\]P›ØÚÙYžT™\Ú^™JJ\™]\›ŽØÛÛœÝÛ^[Ý]›‹^[Ý]YœŸO]\Ë›Ü[ÛœÎÚYŠ\Ë›^[Ý]	‰ŠŸŠJ^ÚYŠ\Ëœ™\ÛÛ™Y™[]]™U\™Ù]]P\‹[Y\Ý[\]\Ë\™Ù][I‰ˆ]\Ëœ™[]]™U\™Ù]
^ØÛÛœÝO]\Ë™Ù]ÛÜÙ\Ý›Ú™XÝ[™Ô\™[

NÙI‰™K›^[Ý]	‰ŒHOO]\Ë˜[š[X][Û”›ÙÜ™\ÜÏÊ\Ëœ™[]]™T\™[YK\Ë™›Ü˜ÙT™[]]™T\™[Ô™\ÛÛ™U\™Ù]

K\Ëœ™[]]™U\™Ù]^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_K\Ëœ™[]]™U\™Ù]ÜšYÚ[^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_KÝJ\Ëœ™[]]™U\™Ù]ÜšYÚ[‹\Ë›^[Ý]›^[Ý]›ÞK›^[Ý]›^[Ý]›Þ
KÛJ\Ëœ™[]]™U\™Ù]\Ëœ™[]]™U\™Ù]ÜšYÚ[ŠJN\Ëœ™[]]™T\™[]\Ëœ™[]]™U\™Ù]]›ÚYZYŠ\Ëœ™[]]™U\™Ù]\Ë\™Ù][J^Ý˜\ˆËNÚYŠ\Ë\™Ù]
\Ë\™Ù]^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_K\Ë\™Ù]Ú]˜[œÙ›Ü›\Ï^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_JK\Ëœ™[]]™U\™Ù]	‰\Ëœ™[]]™U\™Ù]ÜšYÚ[‰‰\Ëœ™[]]™T\™[	‰\Ëœ™[]]™T\™[\™Ù]Ê\Ë™›Ü˜ÙT™[]]™T\™[Ô™\ÛÛ™U\™Ù]

K]\Ë\™Ù]Ï]\Ëœ™[]]™U\™Ù]O]\Ëœ™[]]™T\™[\™Ù]JžËžKž
KJžKËžKKžJJN\Ë\™Ù][OÊ›ÛÛX[Š\Ëœ™\Ý[Z[™Ñœ›ÛJOÝ\Ë\™Ù]]\Ë˜\U˜[œÙ›Ü›J\Ë›^[Ý]›^[Ý]›Þ
N“ÛJ\Ë\™Ù]\Ë›^[Ý]›^[Ý]›Þ
K]J\Ë\™Ù]\Ë\™Ù][JJN“ÛJ\Ë\™Ù]\Ë›^[Ý]›^[Ý]›Þ
K\Ë˜][\Ô™\ÛÛ™T™[]]™U\™Ù]
^Ý\Ë˜][\Ô™\ÛÛ™T™[]]™U\™Ù]HLNØÛÛœÝO]\Ë™Ù]ÛÜÙ\Ý›Ú™XÝ[™Ô\™[

NÙI‰›ÛÛX[ŠKœ™\Ý[Z[™Ñœ›ÛJOOOP›ÛÛX[Š\Ëœ™\Ý[Z[™Ñœ›ÛJI‰ˆYK›Ü[ÛœË›^[Ý]ØÜ›Û	‰™K\™Ù]	‰ŒHOO]\Ë˜[š[X][Û”›ÙÜ™\ÜÏÊ\Ëœ™[]]™T\™[YK\Ë™›Ü˜ÙT™[]]™T\™[Ô™\ÛÛ™U\™Ù]

K\Ëœ™[]]™U\™Ù]^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_K\Ëœ™[]]™U\™Ù]ÜšYÚ[^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_KÝJ\Ëœ™[]]™U\™Ù]ÜšYÚ[‹\Ë\™Ù]K\™Ù]
KÛJ\Ëœ™[]]™U\™Ù]\Ëœ™[]]™U\™Ù]ÜšYÚ[ŠJN\Ëœ™[]]™T\™[]\Ëœ™[]]™U\™Ù]]›ÚYY\	‰”[Kœ™\ÛÛ™Y\™Ù][\ÊÊß__YÙ]ÛÜÙ\Ý›Ú™XÝ[™Ô\™[

^ÚYŠ\Ëœ\™[	‰ˆU]J\Ëœ\™[›]\Ý˜[Y\ÊI‰ˆRJ\Ëœ\™[›]\Ý˜[Y\ÊJ\™]\›ˆ\Ëœ\™[š\Ô›Ú™XÝ[™Ê
OÝ\Ëœ\™[\Ëœ\™[™Ù]ÛÜÙ\Ý›Ú™XÝ[™Ô\™[

_Z\Ô›Ú™XÝ[™Ê
^Ü™]\›ˆ›ÛÛX[Š
\Ëœ™[]]™U\™Ù]\Ë\™Ù][_\Ë›Ü[ÛœË›^[Ý]›ÛÝ
I‰\Ë›^[Ý]
_XØ[Ô›Ú™XÝ[ÛŠ
^Ý˜\ˆNØÛÛœÝO]\Ë™Ù]XY

KP›ÛÛX[Š\Ëœ™\Ý[Z[™Ñœ›ÛJ_\ÈOOXNÛ]ÏHLÚYŠ
\Ëš\Ô›Ú™XÝ[Û‘\_
[OOJO]\Ëœ\™[
_›ÚYOOYOÝ›ÚY™Kš\Ô›Ú™XÝ[Û‘\JJI‰ŠÏHLJK	‰Š\Ëš\ÔÚ\™Y›Ú™XÝ[Û‘\_\Ëš\Õ˜[œÙ›Ü›Q\JI‰ŠÏHLJK\Ëœ™\ÛÛ™Y™[]]™U\™Ù]]OOP\‹[Y\Ý[\	‰ŠÏHLJKÊ\™]\›ŽØÛÛœÝÛ^[Ý]›‹^[Ý]YœŸO]\Ë›Ü[ÛœÎÚYŠ\Ëš\Õ™YP[š[X][™ÏP›ÛÛX[Š\Ëœ\™[	‰\Ëœ\™[š\Õ™YP[š[X][™ß\Ë˜Ý\œ™[[š[X][ÛŸ\Ëœ[™[™Ð[š[X][ÛŠK\Ëš\Õ™YP[š[X][™ß
\Ë\™Ù][O]\Ëœ™[]]™U\™Ù]]›ÚY
K]\Ë›^[Ý][‰‰ˆ\Š\™]\›ŽÓÛJ\Ë›^[Ý]ÛÜœ™XÝY\Ë›^[Ý]›^[Ý]›Þ
NØÛÛœÝ]\Ë™YTØØ[KžÏ]\Ë™YTØØ[KžNÈY[˜Ý[ÛŠKKÏHLJ^ØÛÛœÝ]›[™ÝÚYŠ[Š\™]\›ŽÛ]‹ØKžXKžOLNÙ›ÜŠ]ÏLÜÏŽÜÊÊÊ^Ü]Ü×K\‹œ›Ú™XÝ[Û‘[NØÛÛœÝÝš\ÝX[[[Y[›ŸO\‹›Ü[ÛœÎÛ‰‰›‹œ›ÜËœÝ[I‰ˆ˜ÛÛ[ÈOO[‹œ›ÜËœÝ[K™\Ü^_
É‰œ‹›Ü[ÛœË›^[Ý]ØÜ›Û	‰œ‹œØÜ›Û	‰œˆOO\‹œ›ÛÝ	‰››JKÞ‹\‹œØÜ›Û›Ù™œÙ]žN‹\‹œØÜ›Û›Ù™œÙ]ž_JK	‰ŠKž
[žœØØ[KKžJ[žKœØØ[K]JK
JKÉ‰œ]J‹›]\Ý˜[Y\ÊI‰››JK‹›]\Ý˜[Y\ÊJ_XKž[I‰˜Kž™[I‰ŠKžLJKKžO[I‰˜KžO™[I‰ŠKžOLJ_J\Ë›^[Ý]ÛÜœ™XÝY\Ë™YTØØ[K\Ëœ]
KXK›^[Ý]K\™Ù]OOO]\Ë™YTØØ[Kž	‰ŒOOO]\Ë™YTØØ[Kž_
K\™Ù]XK›^[Ý]›^[Ý]›ÞK\™Ù]Ú]˜[œÙ›Ü›\Ï^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_JNØÛÛœÝÝ\™Ù]š_OXNÚOÊ\Ëœ›Ú™XÝ[Û‘[I‰\Ëœ™]”›Ú™XÝ[Û‘[OÊ[J\Ëœ™]”›Ú™XÝ[Û‘[Kž\Ëœ›Ú™XÝ[Û‘[Kž
K[J\Ëœ™]”›Ú™XÝ[Û‘[KžK\Ëœ›Ú™XÝ[Û‘[KžJJN\Ë˜Ü™X]T›Ú™XÝ[Û‘[\Ê
KJ\Ëœ›Ú™XÝ[Û‘[K\Ë›^[Ý]ÛÜœ™XÝYK\Ë›]\Ý˜[Y\ÊK\Ë™YTØØ[KžOO[	‰\Ë™YTØØ[KžOOO\É‰–J\Ëœ›Ú™XÝ[Û‘[Kž\Ëœ™]”›Ú™XÝ[Û‘[Kž
I‰–J\Ëœ›Ú™XÝ[Û‘[KžK\Ëœ™]”›Ú™XÝ[Û‘[KžJ_
\Ëš\Ô›Ú™XÝYHL\ËœØÚY[T™[™\Š
K\Ë››ÝYžS\Ý[™\œÊœ›Ú™XÝ[Û•\]H‹JJK\	‰”[Kœ™XØ[Ý[]Y›Ú™XÝ[ÛŠÊÊN\Ëœ™]”›Ú™XÝ[Û‘[I‰Š\Ë˜Ü™X]T›Ú™XÝ[Û‘[\Ê
K\ËœØÚY[T™[™\Š
J_ZYJ
^Ý\Ëš\Õš\ÚX›OHL_\ÚÝÊ
^Ý\Ëš\Õš\ÚX›OHL\ØÚY[T™[™\ŠOHL
^Ý˜\ˆNÚYŠ[OOJO]\Ë›Ü[ÛœËš\ÝX[[[Y[
_›ÚYOOX_KœØÚY[T™[™\Š
KJ^ØÛÛœÝO]\Ë™Ù]ÝXÚÊ
NÙI‰™KœØÚY[T™[™\Š
_]\Ëœ™\Ý[Z[™Ñœ›ÛI‰ˆ]\Ëœ™\Ý[Z[™Ñœ›ÛKš[œÝ[˜ÙI‰Š\Ëœ™\Ý[Z[™Ñœ›ÛO]›ÚY
_XÜ™X]T›Ú™XÝ[Û‘[\Ê
^Ý\Ëœ™]”›Ú™XÝ[Û‘[O^ÞžÝ˜[œÛ]NŒØØ[NŒKÜšYÚ[ŽŒÜšYÚ[”Ú[ŒKNžÝ˜[œÛ]NŒØØ[NŒKÜšYÚ[ŽŒÜšYÚ[”Ú[Œ_K\Ëœ›Ú™XÝ[Û‘[O^ÞžÝ˜[œÛ]NŒØØ[NŒKÜšYÚ[ŽŒÜšYÚ[”Ú[ŒKNžÝ˜[œÛ]NŒØØ[NŒKÜšYÚ[ŽŒÜšYÚ[”Ú[Œ_K\Ëœ›Ú™XÝ[Û‘[UÚ]˜[œÙ›Ü›O^ÞžÝ˜[œÛ]NŒØØ[NŒKÜšYÚ[ŽŒÜšYÚ[”Ú[ŒKNžÝ˜[œÛ]NŒØØ[NŒKÜšYÚ[ŽŒÜšYÚ[”Ú[Œ__\Ù][š[X][Û“ÜšYÚ[ŠKOHLJ^ØÛÛœÝ]\ËœÛ˜\ÚÝÏ]Ý›]\Ý˜[Y\ÎžßK^Ë‹‹\Ë›]\Ý˜[Y\ßK^ÞžÝ˜[œÛ]NŒØØ[NŒKÜšYÚ[ŽŒÜšYÚ[”Ú[ŒKNžÝ˜[œÛ]NŒØØ[NŒKÜšYÚ[ŽŒÜšYÚ[”Ú[Œ_NÝ\Ëœ™[]]™T\™[	‰\Ëœ™[]]™T\™[›Ü[ÛœË›^[Ý]›ÛÝ
\Ëœ™[]]™U\™Ù]]\Ëœ™[]]™U\™Ù]ÜšYÚ[]›ÚY
K\Ë˜][\Ô™\ÛÛ™T™[]]™U\™Ù]HXNØÛÛœÝ^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_KÏJÝœÛÝ\˜ÙN›ÚY
HOOJ\Ë›^[Ý]Ý\Ë›^[Ý]œÛÝ\˜ÙN›ÚY
KO]\Ë™Ù]ÝXÚÊ
KÏHZ_K›Y[X™\œË›[™ÝLKOP›ÛÛX[ŠÉ‰ˆXÉ‰ˆLOO]\Ë›Ü[ÛœË˜Ü›ÜÜÙ˜YI‰ˆ]\Ëœ]œÛÛYJÜ
JNÛ]NÝ\Ë˜[š[X][Û”›ÙÜ™\ÜÏL\Ë›Z^\™Ù][OXOOžØÛÛœÝXKÌYLÎÝ˜\ˆKKËÝœ
‹žKž
Kœ
‹žKKžK
K\ËœÙ]\™Ù][JŠK\Ëœ™[]]™U\™Ù]	‰\Ëœ™[]]™U\™Ù]ÜšYÚ[‰‰\Ë›^[Ý]	‰\Ëœ™[]]™T\™[	‰\Ëœ™[]]™T\™[›^[Ý]	‰ŠÝJ\Ë›^[Ý]›^[Ý]›Þ\Ëœ™[]]™T\™[›^[Ý]›^[Ý]›Þ
K]\Ëœ™[]]™U\™Ù]O]\Ëœ™[]]™U\™Ù]ÜšYÚ[‹Ï[]Ü
žKžËž
KÜ
žKKžKËžK
KI‰ŠO]\Ëœ™[]]™U\™Ù][K[JKžž
I‰œ[JKžKžJJI‰Š\Ëš\Ô›Ú™XÝ[Û‘\OHLJK_
O^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_JKÛJK\Ëœ™[]]™U\™Ù]
JKÉ‰Š\Ë˜[š[X][Û•˜[Y\Ï[‹[˜Ý[ÛŠKKË‹Š^ÛÊK›ÜXÚ]OU›
›ÚYOO]›ÜXÚ]OÝ›ÜXÚ]NŒKJÊJKK›ÜXÚ]Q^]U›
›ÚYOOXK›ÜXÚ]OØK›ÜXÚ]NŒK›JÊJJNœ‰‰ŠK›ÜXÚ]OU›
›ÚYOOXK›ÜXÚ]OØK›ÜXÚ]NŒK›ÚYOO]›ÜXÚ]OÝ›ÜXÚ]NŒKÊJNÙ›ÜŠ]LÛ[NÛ
ÊÊ^ØÛÛœÝX›Ü™\‰Ð›VÛ_T˜Y]\ØÛ]T›JKŠKÏT›JŠNÝ›ÚYOO\‰‰›ÚYOO\ß
Ÿ
L
Kß
ÏL
KOO\ŸOO\ß›JŠOOOU›JÊOÊVÛ—OSX]›X^
›
JŠKJÊKÊK
K
[\Ý
Ê_[\Ý
ŠJI‰ŠVÛ—JÏH‰HŠJN™VÛ—O\Ê_JKœ›Ý]_œ›Ý]JI‰ŠKœ›Ý]OU›
Kœ›Ý]_œ›Ý]_ÊJ_J‹Ë\Ë›]\Ý˜[Y\ËKÊJK\Ëœ›ÛÝœØÚY[U\]T›Ú™XÝ[ÛŠ
K\ËœØÚY[T™[™\Š
K\Ë˜[š[X][Û”›ÙÜ™\ÜÏ]K\Ë›Z^\™Ù][J\Ë›Ü[ÛœË›^[Ý]›ÛÝÌYLÎŒ
_\Ý\[š[X][ÛŠJ^Ý\Ë››ÝYžS\Ý[™\œÊ˜[š[X][Û”Ý\ŠK\Ë˜Ý\œ™[[š[X][Û‰‰\Ë˜Ý\œ™[[š[X][Û‹œÝÜ

K\Ëœ™\Ý[Z[™Ñœ›ÛI‰\Ëœ™\Ý[Z[™Ñœ›ÛK˜Ý\œ™[[š[X][Û‰‰\Ëœ™\Ý[Z[™Ñœ›ÛK˜Ý\œ™[[š[X][Û‹œÝÜ

K\Ëœ[™[™Ð[š[X][Û‰‰ŠŠ\Ëœ[™[™Ð[š[X][ÛŠK\Ëœ[™[™Ð[š[X][Û]›ÚY
K\Ëœ[™[™Ð[š[X][ÛTÜ‹\]J

OOžÙÛKš\Ð[š[X]YÚ[˜ÙT™\Ú^™OHL\Ë˜Ý\œ™[[š[X][ÛY[˜Ý[ÛŠKK
^ØÛÛœÝÏZXÊJOÙN“ÜŠJNÜ™]\›ˆËœÝ\
ÝJˆ‹ËK
JKË˜[š[X][ÛŸJYLËË‹‹™KÛ•\]N˜OOžÝ\Ë›Z^\™Ù][JJKK›Û•\]I‰™K›Û•\]JJ_KÛÛÛ\]NŠ
OOžÙK›ÛÛÛ\]I‰™K›ÛÛÛ\]J
K\Ë˜ÛÛ\]P[š[X][ÛŠ
__JK\Ëœ™\Ý[Z[™Ñœ›ÛI‰Š\Ëœ™\Ý[Z[™Ñœ›ÛK˜Ý\œ™[[š[X][Û]\Ë˜Ý\œ™[[š[X][ÛŠK\Ëœ[™[™Ð[š[X][Û]›ÚYJ_XÛÛ\]P[š[X][ÛŠ
^Ý\Ëœ™\Ý[Z[™Ñœ›ÛI‰Š\Ëœ™\Ý[Z[™Ñœ›ÛK˜Ý\œ™[[š[X][Û]›ÚY\Ëœ™\Ý[Z[™Ñœ›ÛKœ™\Ù\™SÜXÚ]O]›ÚY
NØÛÛœÝO]\Ë™Ù]ÝXÚÊ
NÙI‰™K™^][š[X][ÛÛÛ\]J
K\Ëœ™\Ý[Z[™Ñœ›ÛO]\Ë˜Ý\œ™[[š[X][Û]\Ë˜[š[X][Û•˜[Y\Ï]›ÚY\Ë››ÝYžS\Ý[™\œÊ˜[š[X][ÛÛÛ\]HŠ_Yš[š\Ú[š[X][ÛŠ
^Ý\Ë˜Ý\œ™[[š[X][Û‰‰Š\Ë›Z^\™Ù][I‰\Ë›Z^\™Ù][JYLÊK\Ë˜Ý\œ™[[š[X][Û‹œÝÜ

JK\Ë˜ÛÛ\]P[š[X][ÛŠ
_X\U˜[œÙ›Ü›\ÕÕ\™Ù]

^ØÛÛœÝO]\Ë™Ù]XY

NÛ]Ý\™Ù]Ú]˜[œÙ›Ü›\Î˜K\™Ù]^[Ý]›Ë]\Ý˜[Y\Î›ŸOYNÚYŠI‰	‰›Ê^ÚYŠ\ÈOOYI‰\Ë›^[Ý]	‰›É‰\
\Ë›Ü[ÛœË˜[š[X][Û•\K\Ë›^[Ý]›^[Ý]›ÞË›^[Ý]›Þ
J^Ý]\Ë\™Ù]ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_NØÛÛœÝOUJ\Ë›^[Ý]›^[Ý]›Þž
NÝž›Z[YK\™Ù]ž›Z[‹ž›X^]ž›Z[ŠØNØÛÛœÝÏUJ\Ë›^[Ý]›^[Ý]›ÞžJNÝžK›Z[YK\™Ù]žK›Z[‹žK›X^]žK›Z[ŠÛßSÛJK
K›JKŠKJ\Ëœ›Ú™XÝ[Û‘[UÚ]˜[œÙ›Ü›K\Ë›^[Ý]ÛÜœ™XÝYKŠ__\™YÚ\Ý\”Ú\™Y›ÙJKJ^Ý\ËœÚ\™Y›Ù\Ëš\ÊJ_\ËœÚ\™Y›Ù\ËœÙ]
K™]È›JNÝ\ËœÚ\™Y›Ù\Ë™Ù]
JK˜Y
JNØÛÛœÝXK›Ü[ÛœËš[š]X[›Û[Ý[ÛÛÛ™šYÎØKœ›Û[ÝJÝ˜[œÚ][ÛŽÝ˜[œÚ][ÛŽ›ÚY™\Ù\™Q›ÛÝÓÜXÚ]N	‰œÚÝ[™\Ù\™Q›ÛÝÓÜXÚ]OÝœÚÝ[™\Ù\™Q›ÛÝÓÜXÚ]JJN›ÚYJ_Z\ÓXY

^ØÛÛœÝO]\Ë™Ù]ÝXÚÊ
NÜ™]\›ˆY_K›XYOO]\ßYÙ]XY

^Ý˜\ˆNØÛÛœÝÛ^[Ý]Y˜_O]\Ë›Ü[ÛœÎÜ™]\›ˆI‰Š[OOJO]\Ë™Ù]ÝXÚÊ
J_›ÚYOOYOÝ›ÚY™K›XY
_\ßYÙ]™]“XY

^Ý˜\ˆNØÛÛœÝÛ^[Ý]Y˜_O]\Ë›Ü[ÛœÎÜ™]\›ˆOÛ[OOJO]\Ë™Ù]ÝXÚÊ
J_›ÚYOOYOÝ›ÚY™Kœ™]“XY›ÚYYÙ]ÝXÚÊ
^ØÛÛœÝÛ^[Ý]Y™_O]\Ë›Ü[ÛœÎÚYŠJ\™]\›ˆ\Ëœ›ÛÝœÚ\™Y›Ù\Ë™Ù]
J_\›Û[ÝJÛ™YYÔ™\Ù]™K˜[œÚ][ÛŽ˜K™\Ù\™Q›ÛÝÓÜXÚ]NO^ßJ^ØÛÛœÝÏ]\Ë™Ù]ÝXÚÊ
NÛÉ‰›Ëœ›Û[ÝJ\Ë
KI‰Š\Ëœ›Ú™XÝ[Û‘[O]›ÚY\Ë›™YYÔ™\Ù]HL
KI‰\ËœÙ]Ü[ÛœÊÝ˜[œÚ][ÛŽ˜_J_\™[YØ]J
^ØÛÛœÝO]\Ë™Ù]ÝXÚÊ
NÜ™]\›ˆHYI‰™Kœ™[YØ]J\Ê_\™\Ù]ÚÙ]Ð[™›Ý][ÛŠ
^ØÛÛœÝÝš\ÝX[[[Y[™_O]\Ë›Ü[ÛœÎÚYŠYJ\™]\›ŽÛ]OHLNØÛÛœÝÛ]\Ý˜[Y\ÎOYNÚYŠ
žŸœ›Ý]_œ›Ý]Vœ›Ý]V_œ›Ý]VŸœÚÙ]ÖœÚÙ]ÖJI‰ŠOHL
KXJ\™]\›ŽØÛÛœÝÏ^ßNÝž‰‰›œ
žˆ‹KË\Ë˜[š[X][Û•˜[Y\ÊNÙ›ÜŠ]LÛ\›[™ÝÛŠÊÊ[œ
›Ý]IØ\Û—_XKË\Ë˜[š[X][Û•˜[Y\ÊKœ
ÚÙ]ÉØ\Û—_XKË\Ë˜[š[X][Û•˜[Y\ÊNÙKœ™[™\Š
NÙ›ÜŠÛÛœÝˆ[ˆÊYKœÙ]Ý]XÕ˜[YJ‹ÖÛ—JK\Ë˜[š[X][Û•˜[Y\É‰Š\Ë˜[š[X][Û•˜[Y\ÖÛ—O[ÖÛ—JNÙKœØÚY[T™[™\Š
_YÙ]›Ú™XÝ[Û”Ý[\ÊJ^Ý˜\ˆKÚYŠ]\Ëš[œÝ[˜Ù_\Ëš\ÔÕ‘Ê\™]\›ŽÚYŠ]\Ëš\Õš\ÚX›J\™]\›ˆØÛÛœÝÏ^Ýš\ÚXš[]NˆˆŸK]\Ë™Ù]˜[œÙ›Ü›U[\]J
NÚYŠ\Ë›™YYÔ™\Ù]
\™]\›ˆ\Ë›™YYÔ™\Ù]HLKË›ÜXÚ]OHˆ‹ËœÚ[\‘]™[ÏQJ[OOY_›ÚYOOYOÝ›ÚY™KœÚ[\‘]™[Ê_ˆ‹Ë˜[œÙ›Ü›O[ÛŠ\Ë›]\Ý˜[Y\ËˆŠNˆ››Û™H‹ÎØÛÛœÝ]\Ë™Ù]XY

NÚYŠ]\Ëœ›Ú™XÝ[Û‘[_]\Ë›^[Ý]\‹\™Ù]
^ØÛÛœÝO^ßNÜ™]\›ˆ\Ë›Ü[ÛœË›^[Ý]Y	‰ŠK›ÜXÚ]O]›ÚYOO]\Ë›]\Ý˜[Y\Ë›ÜXÚ]OÝ\Ë›]\Ý˜[Y\Ë›ÜXÚ]NŒKKœÚ[\‘]™[ÏQJ[OOY_›ÚYOOYOÝ›ÚY™KœÚ[\‘]™[Ê_ˆŠK\Ëš\Ô›Ú™XÝY	‰ˆ\]J\Ë›]\Ý˜[Y\ÊI‰ŠK˜[œÙ›Ü›O[ÛŠßKˆŠNˆ››Û™H‹\Ëš\Ô›Ú™XÝYHLJK_XÛÛœÝ\‹˜[š[X][Û•˜[Y\ß‹›]\Ý˜[Y\ÎÝ\Ë˜\U˜[œÙ›Ü›\ÕÕ\™Ù]

KË˜[œÙ›Ü›OY[˜Ý[ÛŠKK
^Û]ÏHˆŽØÛÛœÝYKž˜[œÛ]KØKžYKžK˜[œÛ]KØKžKJ[OO]›ÚYOO]Ý›ÚYžŠ_ÚYŠ
ŸŸ
I‰ŠÏX˜[œÛ]LÙ
	ÛŸ\	ÜŸ\	Û\
H
KOOOXKž	‰ŒOOOXKž_
ÊÏXØØ[J	ÌKØKžK	ÌKØKž_JH
K
^ØÛÛœÝÝ˜[œÙ›Ü›T\œÜXÝ]™N™K›Ý]N˜K›Ý]V›‹›Ý]VNœ‹ÚÙ]Ö›ÚÙ]ÖNœßO]ÙI‰ŠÏX\œÜXÝ]™J	Ù_\
H	ÛßX
KI‰ŠÊÏX›Ý]J	Ø_YYÊH
K‰‰ŠÊÏX›Ý]V
	ÛŸYYÊH
K‰‰ŠÊÏX›Ý]VJ	ÜŸYYÊH
K	‰ŠÊÏXÚÙ]Ö
	ÛYYÊH
KÉ‰ŠÊÏXÚÙ]ÖJ	ÜßYYÊH
_XÛÛœÝÏYKžœØØ[J˜KžOYKžKœØØ[J˜KžNÜ™]\›ˆOOO\É‰ŒOOOZ_
ÊÏXØØ[J	ÜßK	Ú_JX
Kß››Û™HŸJ\Ëœ›Ú™XÝ[Û‘[UÚ]˜[œÙ›Ü›K\Ë™YTØØ[K
K‰‰ŠË˜[œÙ›Ü›O[ŠË˜[œÙ›Ü›JJNØÛÛœÝÞœËNš_O]\Ëœ›Ú™XÝ[Û‘[NÛË˜[œÙ›Ü›SÜšYÚ[X	ÌL
œË›ÜšYÚ[ŸIH	ÌL
šK›ÜšYÚ[ŸIH‹˜[š[X][Û•˜[Y\ÏÛË›ÜXÚ]O\OO]\ÏÛ[OOJ[[OOJO[›ÜXÚ]JI‰›ÚYOOXOØN\Ë›]\Ý˜[Y\Ë›ÜXÚ]JI‰›ÚYOO]ÝŒN\Ëœ™\Ù\™SÜXÚ]OÝ\Ë›]\Ý˜[Y\Ë›ÜXÚ]N››ÜXÚ]Q^]›Ë›ÜXÚ]O\OO]\ÏÝ›ÚYOO[›ÜXÚ]OÛ›ÜXÚ]NˆˆŽ›ÚYOO[›ÜXÚ]Q^]Û›ÜXÚ]Q^]ŒÙ›ÜŠÛÛœÝÈ[ˆÛJ^ÚYŠ›ÚYOO[Ø×JXÛÛ[YNØÛÛœÝØÛÜœ™XÝ™K\UÎ˜_O]ÛVØ×KH››Û™HOO[Ë˜[œÙ›Ü›OÛØ×N™JØ×KŠNÚYŠJ^ØÛÛœÝOXK›[™ÝÙ›ÜŠ]LÛNÛŠÊÊ[ÖØVÛ—WO]Y[ÙHÖØ×O]\™]\›ˆ\Ë›Ü[ÛœË›^[Ý]Y	‰ŠËœÚ[\‘]™[Ï\OO]\ÏÑJ[OOY_›ÚYOOYOÝ›ÚY™KœÚ[\‘]™[Ê_ˆŽˆ››Û™HŠKßXÛX\”Û˜\ÚÝ

^Ý\Ëœ™\Ý[YQœ›ÛO]\ËœÛ˜\ÚÝ]›ÚY\™\Ù]™YJ
^Ý\Ëœ›ÛÝ››Ù\Ë™›Ü‘XXÚ
OOžÝ˜\ˆNÜ™]\›ˆ[OOJOYK˜Ý\œ™[[š[X][ÛŠ_›ÚYOOXOÝ›ÚY˜KœÝÜ

_JK\Ëœ›ÛÝ››Ù\Ë™›Ü‘XXÚ

K\Ëœ›ÛÝœÚ\™Y›Ù\Ë˜ÛX\Š
___Y[˜Ý[ÛˆÜ
J^ÙK\]S^[Ý]

_Y[˜Ý[Ûˆ\
J^Ý˜\ˆNØÛÛœÝJ[OOJOYKœ™\Ý[YQœ›ÛJ_›ÚYOOXOÝ›ÚY˜KœÛ˜\ÚÝ
_KœÛ˜\ÚÝÚYŠKš\ÓXY

I‰™K›^[Ý]	‰	‰™Kš\Ó\Ý[™\œÊ™Y\]HŠJ^ØÛÛœÝÛ^[Ý]›Þ˜KYX\Ý\™Y›Þ›ßOYK›^[Ý]Ø[š[X][Û•\N›ŸOYK›Ü[ÛœË]œÛÝ\˜ÙHOOYK›^[Ý]œÛÝ\˜ÙNÈœÚ^™HOO[ÚJOOžØÛÛœÝÏ\Ý›YX\Ý\™Y›ÞÙWN›^[Ý]›ÞÙWKUJÊNÛË›Z[XVÙWK›Z[‹Ë›X^[Ë›Z[ŠÛŸJN\
‹›^[Ý]›ÞJI‰šJÏOžØÛÛœÝ\Ý›YX\Ý\™Y›ÞÛ×N›^[Ý]›ÞÛ×KUJVÛ×JNÛ‹›X^[‹›Z[ŠÛKœ™[]]™U\™Ù]	‰ˆYK˜Ý\œ™[[š[X][Û‰‰ŠKš\Ô›Ú™XÝ[Û‘\OHLKœ™[]]™U\™Ù]Û×K›X^YKœ™[]]™U\™Ù]Û×K›Z[ŠÛ
_JNØÛÛœÝ^ÞžÝ˜[œÛ]NŒØØ[NŒKÜšYÚ[ŽŒÜšYÚ[”Ú[ŒKNžÝ˜[œÛ]NŒØØ[NŒKÜšYÚ[ŽŒÜšYÚ[”Ú[Œ_NÔJK›^[Ý]›Þ
NØÛÛœÝÏ^ÞžÝ˜[œÛ]NŒØØ[NŒKÜšYÚ[ŽŒÜšYÚ[”Ú[ŒKNžÝ˜[œÛ]NŒØØ[NŒKÜšYÚ[ŽŒÜšYÚ[”Ú[Œ_NÜÔJËK˜\U˜[œÙ›Ü›JËL
K›YX\Ý\™Y›Þ
N”JËK›^[Ý]›Þ
NØÛÛœÝOHU[J
NÛ]ÏHLNÚYŠYKœ™\Ý[YQœ›ÛJ^ØÛÛœÝÏYK™Ù]ÛÜÙ\Ý›Ú™XÝ[™Ô\™[

NÚYŠÉ‰ˆ[Ëœ™\Ý[YQœ›ÛJ^ØÛÛœÝÜÛ˜\ÚÝ›‹^[Ý]œŸO[ÎÚYŠ‰‰œŠ^ØÛÛœÝ^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_NÕÝJ›^[Ý]›Þ‹›^[Ý]›Þ
NØÛÛœÝÏ^ÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ_NÕÝJËK‹›^[Ý]›Þ
K[JÊ_
ÏHL
KË›Ü[ÛœË›^[Ý]›ÛÝ	‰ŠKœ™[]]™U\™Ù]\ËKœ™[]]™U\™Ù]ÜšYÚ[[Kœ™[]]™T\™[[Ê___YK››ÝYžS\Ý[™\œÊ™Y\]H‹Û^[Ý]˜KÛ˜\ÚÝ[NœË^[Ý][N›\Ó^[Ý]Ú[™ÙYšK\Ô™[]]™U\™Ù]Ú[™ÙY˜ßJ_Y[ÙHYŠKš\ÓXY

J^ØÛÛœÝÛÛ‘^]ÛÛ\]N˜_OYK›Ü[ÛœÎØI‰˜J
_YK›Ü[ÛœË˜[œÚ][Û]›ÚYY[˜Ý[ÛˆÜ
J^Ù\	‰”[KÝ[›Ù\ÊÊËKœ\™[	‰ŠKš\Ô›Ú™XÝ[™Ê
_
Kš\Ô›Ú™XÝ[Û‘\OYKœ\™[š\Ô›Ú™XÝ[Û‘\JKKš\ÔÚ\™Y›Ú™XÝ[Û‘\_
Kš\ÔÚ\™Y›Ú™XÝ[Û‘\OP›ÛÛX[ŠKš\Ô›Ú™XÝ[Û‘\_Kœ\™[š\Ô›Ú™XÝ[Û‘\_Kœ\™[š\ÔÚ\™Y›Ú™XÝ[Û‘\JJKKš\Õ˜[œÙ›Ü›Q\_
Kš\Õ˜[œÙ›Ü›Q\OYKœ\™[š\Õ˜[œÙ›Ü›Q\JJ_Y[˜Ý[Ûˆ\
J^ÙKš\Ô›Ú™XÝ[Û‘\OYKš\ÔÚ\™Y›Ú™XÝ[Û‘\OYKš\Õ˜[œÙ›Ü›Q\OHL_Y[˜Ý[Ûˆ\
J^ÙK˜ÛX\”Û˜\ÚÝ

_Y[˜Ý[Ûˆ
J^ÙK˜ÛX\“YX\Ý\™[Y[Ê
_Y[˜Ý[Ûˆ
J^ÙKš\Ó^[Ý]\OHL_Y[˜Ý[Ûˆ\
J^ØÛÛœÝÝš\ÝX[[[Y[˜_OYK›Ü[ÛœÎØI‰˜K™Ù]›ÜÊ
K›Û™Y›Ü™S^[Ý]YX\Ý\™I‰˜K››ÝYžJ™Y›Ü™S^[Ý]YX\Ý\™HŠKKœ™\Ù]˜[œÙ›Ü›J
_Y[˜Ý[ÛˆÜ
J^ÙK™š[š\Ú[š[X][ÛŠ
KK\™Ù][OYKœ™[]]™U\™Ù]YK\™Ù]]›ÚYKš\Ô›Ú™XÝ[Û‘\OHLY[˜Ý[Ûˆ
J^ÙKœ™\ÛÛ™U\™Ù][J
_Y[˜Ý[Ûˆœ
J^ÙK˜Ø[Ô›Ú™XÝ[ÛŠ
_Y[˜Ý[Ûˆœ
J^ÙKœ™\Ù]ÚÙ]Ð[™›Ý][ÛŠ
_Y[˜Ý[ÛˆÜ
J^ÙKœ™[[Ý™SXYÛ˜\ÚÝ

_Y[˜Ý[Ûˆœ
KK
^ÙK˜[œÛ]OU›
K˜[œÛ]K
KKœØØ[OU›
KœØØ[KK
KK›ÜšYÚ[XK›ÜšYÚ[‹K›ÜšYÚ[”Ú[XK›ÜšYÚ[”Ú[Y[˜Ý[ÛˆÜ
KKÊ^ÙK›Z[U›
K›Z[‹›Z[‹ÊKK›X^U›
K›X^›X^Ê_Y[˜Ý[ÛˆÜ
J^Ü™]\›ˆK˜[š[X][Û•˜[Y\É‰›ÚYOOYK˜[š[X][Û•˜[Y\Ë›ÜXÚ]Q^]XÛÛœÝ^Ù\˜][ÛŽ‹KX\ÙN–ËŒKW_KÜYOOˆ[™Yš[™YˆOO]\[Ùˆ˜]šYØ]Ü‰‰›˜]šYØ]Ü‹\Ù\YÙ[	‰›˜]šYØ]Ü‹\Ù\YÙ[ÓÝÙ\Ø\ÙJ
Kš[˜ÛY\ÊJKÜZÜ
˜\]ÙXšÚ]ÈŠI‰ˆZÜ
˜Ú›ÛYKÈŠOÓX]œ›Ý[™ÜŽÙ[˜Ý[Ûˆ
J^ÙK›Z[TÜ
K›Z[ŠKK›X^TÜ
K›X^
_Y[˜Ý[Ûˆ\
KK
^Ü™]\›ˆœÜÚ][ÛˆOOY_œ™\Ù\™KX\ÜXÝOOYI‰ŠÏIJJKIJ
KKŒ‹JX]˜XœÊË[ŠO\ŠJNÝ˜\ˆË‹ŸY[˜Ý[Ûˆ
J^Ý˜\ˆNÜ™]\›ˆHOOYKœ›ÛÝ	‰Š[OOJOYKœØÜ›Û
_›ÚYOOXOÝ›ÚY˜KØ\Ô›ÛÝ
_XÛÛœÝœ[
Ø]XÚ™\Ú^™S\Ý[™\ŽŠKJOOJKœ™\Ú^™H‹JKYX\Ý\™TØÜ›ÛŠ
OOŠÞ™ØÝ[Y[™ØÝ[Y[[[Y[œØÜ›ÛYØÝ[Y[˜›ÙKœØÜ›ÛYN™ØÝ[Y[™ØÝ[Y[[[Y[œØÜ›ÛÜØÝ[Y[˜›ÙKœØÜ›ÛÜJKÚXÚÒ\ÔØÜ›Û›ÛÝŠ
OOˆLJK\^ØÝ\œ™[›ÚYK[
ÛYX\Ý\™TØÜ›Û™OOŠÞ™KœØÜ›ÛYN™KœØÜ›ÛÜJKY˜][\™[Š
OOžÚYŠS\˜Ý\œ™[
^ØÛÛœÝO[™]Èœ
ßJNÙK›[Ý[
Ú[™ÝÊKKœÙ]Ü[ÛœÊÛ^[Ý]ØÜ›ÛˆLJK\˜Ý\œ™[Y_\™]\›ˆ\˜Ý\œ™[K™\Ù]˜[œÙ›Ü›NŠKJOOžÙKœÝ[K˜[œÙ›Ü›O]›ÚYOOXOØNˆ››Û™HŸKÚXÚÒ\ÔØÜ›Û›ÛÝ™OO›ÛÛX[Š™š^YOO]Ú[™ÝË™Ù]ÛÛ\]YÝ[JJKœÜÚ][ÛŠ_JKœ^Ü[ŽžÑ™X]\™N˜Û\ÜÈ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊK\Ëœ™[[Ý™TÚ[\‘ÝÛ“\Ý[™\PÜŸ[Û”Ú[\‘ÝÛŠJ^Ý\ËœÙ\ÜÚ[Û[™]ÈÝJK\Ë˜Ü™X]T[’[™\œÊ
KÝ˜[œÙ›Ü›TYÙTÚ[\Ë››ÙK™Ù]˜[œÙ›Ü›TYÙTÚ[

KÛÛ^Ú[™ÝÎ›J\Ë››ÙJ_J_XÜ™X]T[’[™\œÊ
^ØÛÛœÝÛÛ”[”Ù\ÜÚ[Û”Ý\™KÛ”[”Ý\˜KÛ”[ŽÛ”[‘[™›ßO]\Ë››ÙK™Ù]›ÜÊ
NÜ™]\›žÛÛ”Ù\ÜÚ[Û”Ý\[JJKÛ”Ý\[JJKÛ“[Ý™NÛ‘[™ŠKJOOžÙ[]H\ËœÙ\ÜÚ[Û‹É‰”Ü‹œÜÝ™[™\Š

OO›ÊKJJ___[[Ý[

^Ý\Ëœ™[[Ý™TÚ[\‘ÝÛ“\Ý[™\PÝJ\Ë››ÙK˜Ý\œ™[œÚ[\™ÝÛˆ‹OO\Ë›Û”Ú[\‘ÝÛŠJJ_]\]J
^Ý\ËœÙ\ÜÚ[Û‰‰\ËœÙ\ÜÚ[Û‹\]R[™\œÊ\Ë˜Ü™X]T[’[™\œÊ
J_][›[Ý[

^Ý\Ëœ™[[Ý™TÚ[\‘ÝÛ“\Ý[™\Š
K\ËœÙ\ÜÚ[Û‰‰\ËœÙ\ÜÚ[Û‹™[™

___K˜YÎžÑ™X]\™N˜Û\ÜÈ^[™È^ØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJK\Ëœ™[[Ý™QÜ›Ý\ÛÛ›ÛÏPÜ‹\Ëœ™[[Ý™S\Ý[™\œÏPÜ‹\Ë˜ÛÛ›ÛÏ[™]È[JJ_[[Ý[

^ØÛÛœÝÙ˜YÐÛÛ›ÛÎ™_O]\Ë››ÙK™Ù]›ÜÊ
NÙI‰Š\Ëœ™[[Ý™QÜ›Ý\ÛÛ›ÛÏYKœÝXœØÜšX™J\Ë˜ÛÛ›ÛÊJK\Ëœ™[[Ý™S\Ý[™\œÏ]\Ë˜ÛÛ›ÛË˜Y\Ý[™\œÊ
_ÜŸ][›[Ý[

^Ý\Ëœ™[[Ý™QÜ›Ý\ÛÛ›ÛÊ
K\Ëœ™[[Ý™S\Ý[™\œÊ
__K›Ú™XÝ[Û“›ÙN•YX\Ý\™S^[Ý]ž__NÙ[˜Ý[Ûˆœ
KK
^ØÛÛœÝÜ›ÜÎ›ßOYNÙK˜[š[X][Û”Ý]I‰›ËÚ[RÝ™\‰‰™K˜[š[X][Û”Ý]KœÙ]XÝ]™JÚ[RÝ™\ˆ‹”Ý\OO]
NØÛÛœÝ[ÖÈ›Û’Ý™\ˆŠÝNÛ‰‰”Ü‹œÜÝ™[™\Š

OO›ŠKÝJJJJ_Y[˜Ý[Ûˆ
KK
^ØÛÛœÝÜ›ÜÎ›ßOYNÙK˜[š[X][Û”Ý]I‰›ËÚ[U\	‰™K˜[š[X][Û”Ý]KœÙ]XÝ]™JÚ[U\‹”Ý\OO]
NØÛÛœÝ[ÖÈ›Û•\ŠÊ‘[™OO]ÈˆŽ
WNÛ‰‰”Ü‹œÜÝ™[™\Š

OO›ŠKÝJJJJ_XÛÛœÝœ[™]ÈÙXZÓX\Ü[™]ÈÙXZÓX\ÜYOOžØÛÛœÝOQœ™Ù]
K\™Ù]
NØI‰˜JJ_KÜYOOžÙK™›Ü‘XXÚ
Ü
_NÙ[˜Ý[Ûˆ\
KK
^ØÛÛœÝÏY[˜Ý[ÛŠÜ›ÛÝ™K‹‹˜_J^ØÛÛœÝY_ØÝ[Y[ÑÜš\Ê
_ÜœÙ]
ßJNØÛÛœÝÏQÜ™Ù]

KR”ÓÓ‹œÝš[™ÚYžJJNÜ™]\›ˆÖÛ—_
ÖÛ—O[™]È[\œÙXÝ[Û“ØœÙ\™\ŠÜÜ›ÛÝ™K‹‹˜_JJKÖÛ—_JJNÜ™]\›ˆœœÙ]
K
KË›ØœÙ\™JJK

OOžÑœ™[]JJKË[›ØœÙ\™JJ__XÛÛœÝ^ÜÛÛYNŒ[Œ_NØÛÛœÝœ^Ú[•šY]ÎžÑ™X]\™N˜Û\ÜÈ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊK\Ëš\Ñ[\™YšY]ÏHLK\Ëš\Ò[•šY]ÏHL_\Ý\ØœÙ\™\Š
^Ý\Ë[›[Ý[

NØÛÛœÝÝšY]ÜÜ™O^ß_O]\Ë››ÙK™Ù]›ÜÊ
KÜ›ÛÝ˜KX\™Ú[Ž[[Ý[›ÏHœÛÛYH‹Û˜ÙN›ŸOYK^Ü›ÛÝ˜OØK˜Ý\œ™[›ÚY›ÛÝX\™Ú[Ž™\ÚÛˆ›[X™\ˆOO]\[ÙˆÏÛÎ’Û×_NÜ™]\›ˆ\
\Ë››ÙK˜Ý\œ™[‹OOžØÛÛœÝÚ\Ò[\œÙXÝ[™Î˜_OYNÚYŠ\Ëš\Ò[•šY]ÏOOXJ\™]\›ŽÚYŠ\Ëš\Ò[•šY]ÏXK‰‰ˆXI‰\Ëš\Ñ[\™YšY]Ê\™]\›ŽØI‰Š\Ëš\Ñ[\™YšY]ÏHL
K\Ë››ÙK˜[š[X][Û”Ý]I‰\Ë››ÙK˜[š[X][Û”Ý]KœÙ]XÝ]™JÚ[R[•šY]È‹JNØÛÛœÝÛÛ•šY]ÜÜ[\ŽÛ•šY]ÜÜX]™N›ßO]\Ë››ÙK™Ù]›ÜÊ
KXOÝ›ÎÜ‰‰œŠJ_J_[[Ý[

^Ý\ËœÝ\ØœÙ\™\Š
_]\]J
^ÚYŠ[™Yš[™YOO]\[Ùˆ[\œÙXÝ[Û“ØœÙ\™\Š\™]\›ŽØÛÛœÝÜ›ÜÎ™K™]”›ÜÎ˜_O]\Ë››ÙNÖÈ˜[[Ý[‹›X\™Ú[ˆ‹œ›ÛÝ—KœÛÛYJ[˜Ý[ÛŠÝšY]ÜÜ™O^ß_KÝšY]ÜÜ˜O^ß_O^ßJ^Ü™]\›ˆO™VÝHOOXVÝ_JKJJI‰\ËœÝ\ØœÙ\™\Š
_][›[Ý[

^ß__K\žÑ™X]\™N˜Û\ÜÈ^[™È^Û[Ý[

^ØÛÛœÝØÝ\œ™[™_O]\Ë››ÙNÙI‰Š\Ë[›[Ý[X›
KOOŠ
\Ë››ÙKK”Ý\ŠK
KÜÝXØÙ\ÜÎ˜_JOO”
\Ë››ÙKKOÈ‘[™ŽˆØ[˜Ù[ŠJKÝ\ÙQÛØ˜[\™Ù]\Ë››ÙKœ›ÜË™ÛØ˜[\\™Ù]JJ_][›[Ý[

^ß__K›ØÝ\ÎžÑ™X]\™N˜Û\ÜÈ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊK\Ëš\ÐXÝ]™OHL_[Û‘›ØÝ\Ê
^Û]OHLNÝž^ÙO]\Ë››ÙK˜Ý\œ™[›X]Ú\ÊŽ™›ØÝ\Ë]š\ÚX›HŠ_XØ]Ú
Ñ
^ÙOHLYI‰\Ë››ÙK˜[š[X][Û”Ý]I‰Š\Ë››ÙK˜[š[X][Û”Ý]KœÙ]XÝ]™JÚ[Q›ØÝ\È‹L
K\Ëš\ÐXÝ]™OHL
_[Û›\Š
^Ý\Ëš\ÐXÝ]™I‰\Ë››ÙK˜[š[X][Û”Ý]I‰Š\Ë››ÙK˜[š[X][Û”Ý]KœÙ]XÝ]™JÚ[Q›ØÝ\È‹LJK\Ëš\ÐXÝ]™OHLJ_[[Ý[

^Ý\Ë[›[Ý[\œÊJ\Ë››ÙK˜Ý\œ™[™›ØÝ\È‹

OO\Ë›Û‘›ØÝ\Ê
JKJ\Ë››ÙK˜Ý\œ™[˜›\ˆ‹

OO\Ë›Û›\Š
JJ_][›[Ý[

^ß__KÝ™\ŽžÑ™X]\™N˜Û\ÜÈ^[™È^Û[Ý[

^ØÛÛœÝØÝ\œ™[™_O]\Ë››ÙNÙI‰Š\Ë[›[Ý[Y[˜Ý[ÛŠKK^ßJ^ØÛÛœÝÛË‹—OZ[
K
KXÛ
OOžØÛÛœÝÝ\™Ù]OYKÏXJJNÚYŠ™[˜Ý[ÛˆˆOO]\[Ùˆß]
\™]\›ŽØÛÛœÝXÛ
OOžÛÊJKœ™[[Ý™Q]™[\Ý[™\ŠœÚ[\›X]™H‹Š_JNÝ˜Y]™[\Ý[™\ŠœÚ[\›X]™H‹‹Š_JNÜ™]\›ˆË™›Ü‘XXÚ
OOžÙK˜Y]™[\Ý[™\ŠœÚ[\™[\ˆ‹Š_JKŸJKOOŠœ
\Ë››ÙKK”Ý\ŠKOO”œ
\Ë››ÙKK‘[™ŠJJJ_][›[Ý[

^ß___KÜ^Û^[Ý]žÔ›Ú™XÝ[Û“›ÙN•YX\Ý\™S^[Ý]ž__KœJJ
K˜Ü™X]PÛÛ^
JÜÝšXÝˆL_JK\JJ
K˜Ü™X]PÛÛ^
JßJNÙ[˜Ý[Ûˆœ
J^Ü™]\›ˆÊK˜[š[X]J_˜ËœÛÛYJOO™ØÊVØWJJ_Y[˜Ý[Ûˆ\
J^Ü™]\›ˆ›ÛÛX[Šœ
J_K˜\šX[Ê_Y[˜Ý[Ûˆ\
J^ØÛÛœÝÚ[š]X[˜K[š[X]NOY[˜Ý[ÛŠKJ^ÚYŠœ
JJ^ØÛÛœÝÚ[š]X[˜K[š[X]NOYNÜ™]\›žÚ[š]X[ˆLOOOX_ØÊJOØN›ÚY[š[X]N™ØÊ
OÝ›ÚY_\™]\›ˆLHOOYKš[š\š]ØNžß_JK
J
K\ÙPÛÛ^
J\
JNÜ™]\›ŠJ
K\ÙSY[[ÊJ

OOŠÚ[š]X[˜K[š[X]NJKÒœ
JKœ

WJ_Y[˜Ý[Ûˆœ
J^Ü™]\›ˆ\œ˜^Kš\Ð\œ˜^JJOÙKš›Ú[ŠˆŠN™_XÛÛœÝ\^Ø[š[X][ÛŽ–È˜[š[X]H‹˜\šX[È‹Ú[RÝ™\ˆ‹Ú[U\‹™^]‹Ú[R[•šY]È‹Ú[Q›ØÝ\È‹Ú[Q˜YÈ—K^]–È™^]—K˜YÎ–È™˜YÈ‹™˜YÐÛÛ›ÛÈ—K›ØÝ\Î–ÈÚ[Q›ØÝ\È—KÝ™\Ž–ÈÚ[RÝ™\ˆ‹›Û’Ý™\”Ý\‹›Û’Ý™\‘[™—K\–ÈÚ[U\‹›Û•\‹›Û•\Ý\‹›Û•\Ø[˜Ù[—K[Ž–È›Û”[ˆ‹›Û”[”Ý\‹›Û”[”Ù\ÜÚ[Û”Ý\‹›Û”[‘[™—K[•šY]Î–ÈÚ[R[•šY]È‹›Û•šY]ÜÜ[\ˆ‹›Û•šY]ÜÜX]™H—K^[Ý]–È›^[Ý]‹›^[Ý]Y—_K	^ßNÙ›ÜŠÛÛœÝ[ˆ\
IÑO^Ú\Ñ[˜X›Y™OO–\ÑKœÛÛYJOOˆHYVØWJ_NØÛÛœÝTÞ[X›Û™›ÜŠ›[Ý[ÛÛÛ\Û™[Þ[X›ÛŠNÙ[˜Ý[Ûˆœ
KK
^Ü™]\›ŠJ
K\ÙPØ[˜XÚÊJÏOžÛÉ‰™K›Û“[Ý[	‰™K›Û“[Ý[
ÊKI‰ŠÏØK›[Ý[
ÊN˜K[›[Ý[

JK	‰Š™[˜Ý[ÛˆOO]\[ÙˆÝ
ÊN•J
I‰Š˜Ý\œ™[[ÊJ_KØWJ_Y[˜Ý[Ûˆ\
KKËŠ^Ý˜\ˆ‹ØÛÛœÝÝš\ÝX[[[Y[œßOJJ
K\ÙPÛÛ^
J\
KÏJJ
K\ÙPÛÛ^
Jœ
KOJJ
K\ÙPÛÛ^
J[JKOJJ
K\ÙPÛÛ^
J]
Kœ™YXÙY[Ý[Û‹JJ
K\ÙT™YŠJ[
NÛÏ[ßËœ™[™\™\‹\˜Ý\œ™[	‰›É‰Š˜Ý\œ™[[ÊKÝš\ÝX[Ý]N˜K\™[œË›ÜÎ™\Ù[˜ÙPÛÛ^K›ØÚÒ[š]X[[š[X][ÛŽˆH]I‰ˆLOOO]Kš[š]X[™YXÙY[Ý[ÛÛÛ™šYÎ›_JJNØÛÛœÝ\˜Ý\œ™[OJJ
K\ÙPÛÛ^
J[JNÈYœ›Ú™XÝ[ÛŸ[Ÿš[ˆOOY\I‰ˆœÝ™ÈˆOOY\_[˜Ý[ÛŠKKÊ^ØÛÛœÝÛ^[Ý]Y›‹^[Ý]œ‹˜YÎ›˜YÐÛÛœÝ˜Z[ÎœË^[Ý]ØÜ›ÛšK^[Ý]›ÛÝ˜ßOXNÙKœ›Ú™XÝ[Û[™]È
K›]\Ý˜[Y\ËVÈ™]KYœ˜[Y\‹\Ü[ZY—OÝ›ÚY™Y
Kœ\™[
JKKœ›Ú™XÝ[Û‹œÙ]Ü[ÛœÊÛ^[Ý]Y›‹^[Ý]œ‹[Ø^\ÓYX\Ý\™S^[Ý]›ÛÛX[Š
_É‰•JÊKš\ÝX[[[Y[™K[š[X][Û•\NˆœÝš[™ÈOO]\[ÙˆÜŽˆ˜›Ý‹[š]X[›Û[Ý[ÛÛÛ™šYÎ›Ë^[Ý]ØÜ›ÛšK^[Ý]›ÛÝ˜ßJ_J˜Ý\œ™[‹JNØÛÛœÝÏJJ
K\ÙT™YŠJLJNÊJ
K\ÙR[œÙ\[Û‘Y™™XÝ
J

OOžÙ	‰™Ë˜Ý\œ™[	‰™\]JJ_JNØÛÛœÝ]Ó×KJJ
K\ÙT™YŠJ›ÛÛX[Š
I‰ˆJ[OOJ]Ú[™ÝË“[Ý[Û’[™Ù™’\ÐÛÛ\]J_›ÚYOO\Ý›ÚYœ‹˜Ø[
Ú[™ÝË
JI‰Š[OOJ]Ú[™ÝË“[Ý[Û’\ÓÜ[Z\ÙY[š[X][ÛŠ_›ÚYOO[Ý›ÚY›˜Ø[
Ú[™ÝË
JJNÜ™]\›ˆ\Ê

OOžÙ	‰ŠË˜Ý\œ™[HLÚ[™ÝË“[Ý[Û’\Ó[Ý[YHL\]Q™X]\™\Ê
K›Kœ™[™\Šœ™[™\ŠK‹˜Ý\œ™[	‰™˜[š[X][Û”Ý]I‰™˜[š[X][Û”Ý]K˜[š[X]PÚ[™Ù\Ê
J_JK
J
K\ÙQY™™XÝ
J

OOžÙ	‰ŠX‹˜Ý\œ™[	‰™˜[š[X][Û”Ý]I‰™˜[š[X][Û”Ý]K˜[š[X]PÚ[™Ù\Ê
K‹˜Ý\œ™[	‰Š]Y]YSZXÜ›Ý\ÚÊ

OOžÝ˜\ˆNÛ[OOJO]Ú[™ÝË“[Ý[Û’[™Ù™“X\šÐ\ÐÛÛ\]J_›ÚYOOY_K˜Ø[
Ú[™ÝË
_JK‹˜Ý\œ™[HLJJ_JKY[˜Ý[ÛˆY
J^ÚYŠJ\™]\›ˆLHOOYK›Ü[ÛœË˜[ÝÔ›Ú™XÝ[ÛÙKœ›Ú™XÝ[ÛŽ™Y
Kœ\™[
_Y[˜Ý[ÛˆY
Ü™[ØYY™X]\™\Î™KÜ™X]Uš\ÝX[[[Y[˜K\ÙT™[™\Ž\ÙUš\ÝX[Ý]N›ËÛÛ\Û™[›ŸJ^Ý˜\ˆ‹Ù[˜Ý[ÛˆÊKŠ^Û]ØÛÛœÝÏ^Ë‹‹ŠJ
K\ÙPÛÛ^
J]
K‹‹™K^[Ý]Y
J_KÚ\ÔÝ]XÎ_OXËO\\
JK[ÊKJNÚYŠ]I‰”Ý
^ÈY[˜Ý[ÛŠ
^ÊJ
K\ÙPÛÛ^
Jœ
KœÝšXÝÌJ
NØÛÛœÝOY[˜Ý[ÛŠJ^ØÛÛœÝÙ˜YÎ˜K^[Ý]OIÚYŠXI‰ˆ]
\™]\›žßNØÛÛœÝÏ^Ë‹‹˜K‹‹NÜ™]\›žÓYX\Ý\™S^[Ý]Š[OOX_›ÚYOOXOÝ›ÚY˜Kš\Ñ[˜X›Y
JJ_
[OO]›ÚYOO]Ý›ÚYš\Ñ[˜X›Y
JJOÛË“YX\Ý\™S^[Ý]›ÚY›Ú™XÝ[Û“›ÙN›Ë”›Ú™XÝ[Û“›Ù__JÊNÛYK“YX\Ý\™S^[Ý]Kš\ÝX[[[Y[T\
‹ËKK”›Ú™XÝ[Û“›ÙJ_\™]\›ŠÊ
KšœÞÊJ\”›ÝšY\‹Ý˜[YN›KÚ[™[Ž–Û	‰›Kš\ÝX[[[Y[ÊÊ
KšœÞ
JÝš\ÝX[[[Y[›Kš\ÝX[[[Y[‹‹˜ßJN›[
‹Kœ
Kš\ÝX[[[Y[ŠKKKš\ÝX[[[Y[
W_J_YI‰™[˜Ý[ÛŠJ^Ù›ÜŠÛÛœÝH[ˆJIØWO^Ë‹‹‰ØWK‹‹™VØW__JJKË™\Ü^S˜[YOX[Ý[Û‹‰ÈœÝš[™ÈOO]\[ÙˆÛŽ˜Ü™X]J	Û[OOJ[[OOJ[‹™\Ü^S˜[YJI‰›ÚYOO\ÜŽ›‹›˜[YJI‰›ÚYOO[ÛˆˆŸJXXØÛÛœÝOJJ
K™›ÜØ\™™YŠJÊNÜ™]\›ˆVÖO[‹_Y[˜Ý[Ûˆ
Û^[Ý]Y™_J^ØÛÛœÝOJJ
K\ÙPÛÛ^
JJKšYÜ™]\›ˆI‰›ÚYOOYOØJÈ‹HŠÙN™_XÛÛœÝÙVÈ˜[š[X]H‹˜Ú\˜ÛH‹™YœÈ‹™\ØÈ‹™[\ÙH‹™È‹š[XYÙH‹›[™H‹™š[\ˆ‹›X\šÙ\ˆ‹›X\ÚÈ‹›Y]Y]H‹œ]‹œ]\›ˆ‹œÛYÛÛˆ‹œÛ[[™H‹œ™XÝ‹œÝÜ‹œÝÚ]Ú‹œÞ[X›Û‹œÝ™È‹^‹Ü[ˆ‹\ÙH‹šY]È—NÙ[˜Ý[Ûˆ™
J^Ü™]\›ˆœÝš[™ÈOO]\[ÙˆI‰ˆYKš[˜ÛY\Ê‹HŠI‰ˆHJÙš[™^ÙŠJO‹L_ÖÐKV—KÝK\Ý
JJ_XÛÛœÝ™YOOŠK
OOžØÛÛœÝÏJJ
K\ÙPÛÛ^
J\
KJJ
K\ÙPÛÛ^
J[JKJ
OO™[˜Ý[ÛŠÜØÜ˜\S[Ý[Û•˜[Y\Ñœ›ÛT›ÜÎ™KÜ™X]T™[™\”Ý]N˜KÛ•\]NKË‹Š^ØÛÛœÝ^Û]\Ý˜[Y\Î›
Ë‹‹JK™[™\”Ý]N˜J
_NÜ™]\›ˆ	‰Š›Û“[Ý[YOO
Ü›ÜÎ›ËÝ\œ™[™K‹‹›JK›Û•\]OYOO
JJKJKKËŠNÜ™]\›ˆÜŠ
N‘
Š_NÙ[˜Ý[Ûˆ
KKÊ^ØÛÛœÝ^ßK[ÊKßJNÙ›ÜŠÛÛœÝ[ˆŠ[–ÜOQJ–ÜJNÛ]Ú[š]X[›[š[X]NœßOYNØÛÛœÝO^œ
JKÏU\
JNØI‰˜É‰ˆZI‰ˆLHOOYKš[š\š]	‰Š›ÚYOO[	‰ŠXKš[š]X[
K›ÚYOO\É‰ŠÏXK˜[š[X]JJNÛ]OHH]	‰ˆLOOO]š[š]X[ÝO]_LOOO[ØÛÛœÝO]OÜÎ›ÚYŠI‰ˆ˜›ÛÛX[ˆˆOO]\[ÙˆI‰ˆ\ÊJJ^ØÛÛœÝOP\œ˜^Kš\Ð\œ˜^JJOÛN–ÛWNÙ›ÜŠ]LÝK›[™ÝÝ
ÊÊ^ØÛÛœÝÏX˜ÊKVÝJNÚYŠÊ^ØÛÛœÝÝ˜[œÚ][Û‘[™™K˜[œÚ][ÛŽ˜K‹‹O[ÎÙ›ÜŠÛÛœÝÈ[ˆ
^Û]O]Û×NÚYŠ\œ˜^Kš\Ð\œ˜^JJJ^ÙOYVÝOÙK›[™ÝLNŒ_[[OOYI‰Š–Û×OYJ_Y›ÜŠÛÛœÝÈ[ˆJ[–Û×OYVÛ×___\™]\›ˆŸXÛÛœÝÙJKJOO˜I‰ˆ›[X™\ˆOO]\[ÙˆOØK˜[œÙ›Ü›JJN™KY^Þˆ˜[œÛ]V‹Nˆ˜[œÛ]VH‹Žˆ˜[œÛ]Vˆ‹˜[œÙ›Ü›T\œÜXÝ]™Nˆœ\œÜXÝ]™HŸKÙVË›[™ÝÙ[˜Ý[ÛˆY
KK
^ØÛÛœÝÜÝ[N›Ë˜\œÎ›‹˜[œÙ›Ü›SÜšYÚ[ŽœŸOYNÛ]HLKÏHLNÙ›ÜŠÛÛœÝH[ˆJ^ØÛÛœÝOXVÚWNÚYŠœËš\ÊJJ[HLÙ[ÙHYŠœÊJJ[–ÚWOYNÙ[Ù^ØÛÛœÝO\Ù
KØÖÚWJNÚKœÝ\ÕÚ]
›ÜšYÚ[ˆŠOÊÏHL–ÚWOXJN›ÖÚWOX__ZYŠK˜[œÙ›Ü›_
ÛË˜[œÙ›Ü›OY[˜Ý[ÛŠKK
^Û]ÏHˆ‹HLÙ›ÜŠ]LÜÙÜŠÊÊ^ØÛÛœÝVÖÜ—KÏYVÛNÚYŠ›ÚYOO\ÊXÛÛ[YNÛ]OHLÚYŠOH›[X™\ˆOO]\[ÙˆÏÜÏOOJœÝ\ÕÚ]
œØØ[HŠOÌNŒ
NŒOO\\œÙQ›Ø]
ÊKZ_
^ØÛÛœÝO\Ù
ËØÖÛJNÚ_
HLKÊÏX	ÚYÛ_J	Ù_JH
K	‰ŠVÛOYJ__\™]\›ˆÏ[Ëš[J
KÛÏ]
KÈˆŽ›ÊN›‰‰ŠÏH››Û™HŠKßJKK˜[œÙ›Ü›K
N›Ë˜[œÙ›Ü›I‰ŠË˜[œÙ›Ü›OH››Û™HŠJKÊ^ØÛÛœÝÛÜšYÚ[–™OHL	H‹ÜšYÚ[–N˜OHL	H‹ÜšYÚ[–ŽLO\ŽÛË˜[œÙ›Ü›SÜšYÚ[X	Ù_H	Ø_H	ÝX_Y[˜Ý[ÛˆY
KK
^Ü™]\›ˆœÝš[™ÈOO]\[ÙˆOÙN’›˜[œÙ›Ü›JJÝ
™J_XÛÛœÝ^ÛÙ™œÙ]ˆœÝ›ÚÙKY\ÚÙ™œÙ]‹\œ˜^NˆœÝ›ÚÙKY\Ú\œ˜^HŸK^ÛÙ™œÙ]ˆœÝ›ÚÙQ\ÚÙ™œÙ]‹\œ˜^NˆœÝ›ÚÙQ\Ú\œ˜^HŸNÙ[˜Ý[ÛˆY
KØ]–˜K]–N]”ØØ[N›ËÜšYÚ[–›‹ÜšYÚ[–Nœ‹][™Ý›]ÜXÚ[™ÎœÏLK]Ù™œÙ]šOL‹‹˜ßKKJ^ÚYŠY
KËJKJ\™]\›ˆ›ÚY
KœÝ[KšY]Ð›Þ	‰ŠK˜]œËšY]Ð›ÞYKœÝ[KšY]Ð›Þ
JNÙK˜]œÏYKœÝ[KKœÝ[O^ßNØÛÛœÝØ]œÎœÝ[N™[Y[œÚ[ÛœÎž_OYNÜ˜[œÙ›Ü›I‰ŠI‰Š˜[œÙ›Ü›O\˜[œÙ›Ü›JK[]H˜[œÙ›Ü›JKI‰Š›ÚYOO[Ÿ›ÚYOO\Ÿ˜[œÙ›Ü›JI‰Š˜[œÙ›Ü›SÜšYÚ[Y[˜Ý[ÛŠKK
^Ü™]\›˜	ÛY
KKžKÚY
_H	ÛY
KžKKšZYÚ
_XJK›ÚYOO[ÛŽ‹K›ÚYOO\ÜŽ‹JJK›ÚYOOXI‰ŠžXJK›ÚYOO]	‰ŠžO]
K›ÚYOO[É‰ŠœØØ[O[ÊK›ÚYOO[	‰™[˜Ý[ÛŠKKLKÏLHL
^ÙKœ][™ÝLNØÛÛœÝ[Ü™ÙVÜ‹›Ù™œÙ]OR›˜[œÙ›Ü›J[ÊNØÛÛœÝR›˜[œÙ›Ü›JJKÏR›˜[œÙ›Ü›J
NÙVÜ‹˜\œ˜^WOX	ÛH	ÜßXJËKLJ_XÛÛœÝÙJ
OOŠÜÝ[NžßK˜[œÙ›Ü›NžßK˜[œÙ›Ü›SÜšYÚ[ŽžßK˜\œÎžß_JKJ
OOŠÜÝ[NžßK˜[œÙ›Ü›NžßK˜[œÙ›Ü›SÜšYÚ[ŽžßK˜\œÎžßK]œÎžß_JK™YOOˆœÝš[™ÈOO]\[ÙˆI‰ˆœÝ™ÈOOYKÓÝÙ\Ø\ÙJ
NÙ[˜Ý[Ûˆ™
KÜÝ[N˜K˜\œÎKËŠ^ÓØš™XÝ˜\ÜÚYÛŠKœÝ[KK‰‰›‹™Ù]›Ú™XÝ[Û”Ý[\ÊÊJNÙ›ÜŠÛÛœÝˆ[ˆ
YKœÝ[KœÙ]›Ü\J‹Ü—J_XÛÛœÝÙ[™]ÈÙ]
È˜˜\ÙQœ™\]Y[˜ÞH‹™Y™\ÙPÛÛœÝ[‹šÙ\›™[X]š^‹šÙ\›™[[š][™Ý‹šÙ^TÜ[™\È‹šÙ^U[Y\È‹›[Z][™ÐÛÛ™P[™ÛH‹›X\šÙ\’ZYÚ‹›X\šÙ\•ÚY‹›[SØÝ]™\È‹\™Ù]‹\™Ù]H‹œÝ\™˜XÙTØØ[H‹œÜXÝ[\ÛÛœÝ[‹œÜXÝ[\‘^Û™[‹œÝ]šX][Ûˆ‹X›U˜[Y\È‹šY]Ð›Þ‹™Ü˜YY[˜[œÙ›Ü›H‹œ][™Ý‹œÝ\Ù™œÙ]‹^[™Ý‹›[™ÝY\Ý—JNÙ[˜Ý[Ûˆ™
KKÊ^Ù™
KK›ÚYÊNÙ›ÜŠÛÛœÝˆ[ˆK˜]œÊYKœÙ]]šX]JÙš\ÊŠOÛŽ”ØÊŠKK˜]œÖÛ—J_Y[˜Ý[ÛˆÙ
KÛ^[Ý]˜K^[Ý]YJ^Ü™]\›ˆœËš\ÊJ_KœÝ\ÕÚ]
›ÜšYÚ[ˆŠ_
_›ÚYOO]
I‰ŠH]ÛVÙW_›ÜXÚ]HOOYJ_Y[˜Ý[ÛˆÙ
KK
^Ý˜\ˆÎØÛÛœÝÜÝ[N›ŸOYK^ßNÙ›ÜŠÛÛœÝ[ˆŠJXÊ–ÛJ_KœÝ[I‰šXÊKœÝ[VÛJ_Ù
J_›ÚYOOJ[OOJÏ[[OO]›ÚYOO]Ý›ÚY™Ù]˜[YJ
J_›ÚYOO[ÏÝ›ÚY›Ë›]™TÝ[JJI‰Š–ÛO[–ÛJNÜ™]\›ˆŸY[˜Ý[Ûˆ
KK
^ØÛÛœÝÏPÙ
KK
NÙ›ÜŠÛÛœÝˆ[ˆJZYŠXÊVÛ—J_XÊVÛ—JJ^ÛÖËLHOOVËš[™^ÙŠŠOÈ˜]ˆŠÛ‹˜Ú\]

KÕ\\Ø\ÙJ
JÛ‹œÝXœÝš[™ÊJN›—OYVÛ—_\™]\›ˆßXÛÛœÝÙVÈž‹žH‹ÚY‹šZYÚ‹˜Þ‹˜ÞH‹œˆ—KÙ^Ý\ÙUš\ÝX[Ý]Nœ™
ÜØÜ˜\S[Ý[Û•˜[Y\Ñœ›ÛT›ÜÎžÜ™X]T™[™\”Ý]NšÛ•\]NŠÜ›ÜÎ™K™]”›ÜÎ˜KÝ\œ™[™[™\”Ý]N›Ë]\Ý˜[Y\Î›ŸJOOžÚYŠ]
\™]\›ŽÛ]HHYK™˜YÎÚYŠ\ŠY›ÜŠÛÛœÝÈ[ˆŠZYŠœËš\ÊÊJ^ÜHLØœ™XZßZYŠ\Š\™]\›ŽÛ]HXNÚYŠJY›ÜŠ]ÏLÜÏÙ›[™ÝÜÊÊÊ^ØÛÛœÝZÙÜ×NÙVÝHOOXVÝI‰ŠHL
_[	‰ŠÜ‹œ™XY


OO™[˜Ý[ÛŠKJ^Ýž^ØK™[Y[œÚ[ÛœÏH™[˜Ý[ÛˆOO]\[ÙˆK™Ù]›ÞÙK™Ù]›Þ

N™K™Ù]›Ý[™[™ÐÛY[™XÝ

_XØ]Ú
Ñ
^ØK™[Y[œÚ[ÛœÏ^ÞŒNŒÚYŒZYÚŒ__JÊJKÜ‹œ™[™\Š

OOžÞY
Ë‹™
YÓ˜[YJKK˜[œÙ›Ü›U[\]JK™
Ê_JJ__J_K^Ý\ÙUš\ÝX[Ý]Nœ™
ÜØÜ˜\S[Ý[Û•˜[Y\Ñœ›ÛT›ÜÎÙÜ™X]T™[™\”Ý]N™ÙJ_NÙ[˜Ý[ÛˆY
KK
^Ù›ÜŠÛÛœÝÈ[ˆJZXÊVÛ×J_Ù
Ë
_
VÛ×OXVÛ×J_Y[˜Ý[Ûˆ
KJ^ØÛÛœÝ^ßNÜ™]\›ˆY
KœÝ[_ßKJKØš™XÝ˜\ÜÚYÛŠ[˜Ý[ÛŠÝ˜[œÙ›Ü›U[\]N™_KJ^Ü™]\›ŠJ
K\ÙSY[[ÊJ

OOžØÛÛœÝ^ÜÝ[NžßK˜[œÙ›Ü›NžßK˜[œÙ›Ü›SÜšYÚ[ŽžßK˜\œÎžß_NÜ™]\›ˆY
KJKØš™XÝ˜\ÜÚYÛŠßK˜\œËœÝ[J_KØWJ_JKJJKY[˜Ý[Ûˆ™
KJ^ØÛÛœÝ^ßKÏQ
KJNÜ™]\›ˆK™˜YÉ‰ˆLHOOYK™˜YÓ\Ý[™\‰‰Š™˜YÙØX›OHLKË\Ù\”Ù[XÝ[Ë•ÙXšÚ]\Ù\”Ù[XÝ[Ë•ÙXšÚ]ÝXÚØ[Ý]H››Û™H‹ËÝXÚXÝ[ÛHLOOYK™˜YÏÈ››Û™HŽˆœ[‹HŠÊžOOYK™˜YÏÈžHŽˆžŠJK›ÚYOOYKX’[™^	‰ŠK›Û•\K›Û•\Ý\KÚ[U\
I‰ŠX’[™^L
KœÝ[O[ËY[˜Ý[ÛˆY
KKÊ^ØÛÛœÝJJ
K\ÙSY[[ÊJ

OOžØÛÛœÝ^ÜÝ[NžßK˜[œÙ›Ü›NžßK˜[œÙ›Ü›SÜšYÚ[ŽžßK˜\œÎžßK]œÎžß_NÜ™]\›ˆY
K™
ÊKK˜[œÙ›Ü›U[\]JKË‹‹˜]œËÝ[NžË‹‹œÝ[___KØWJNÚYŠKœÝ[J^ØÛÛœÝO^ßNÐY
KKœÝ[KJK‹œÝ[O^Ë‹‹˜K‹‹›‹œÝ[__\™]\›ˆŸY[˜Ý[Ûˆ
OHLJ^Ü™]\›ŠKËÛ]\Ý˜[Y\Î›ŸKŠOOžØÛÛœÝJ™
JOÓY™
J‹‹JKÏY[˜Ý[ÛŠKK
^ØÛÛœÝÏ^ßNÙ›ÜŠÛÛœÝˆ[ˆJH˜[Y\ÈOO[‰‰ˆ›Øš™XÝOO]\[ÙˆK˜[Y\ß

Š_LOO]	‰•
Š_XI‰ˆU
Š_K™˜YÙØX›I‰›‹œÝ\ÕÚ]
›Û‘˜YÈŠJI‰ŠÖÛ—OYVÛ—JNÜ™]\›ˆßJœÝš[™ÈOO]\[ÙˆKJKÏXHOOZJ
K‘œ˜YÛY[ÞË‹‹œË‹‹›™YŽ›ßNžßKØÚ[™[Ž_O]OJJ
K\ÙSY[[ÊJ

OOšXÊJOÝK™Ù]

NKÝWJNÜ™]\›ŠJ
K˜Ü™X]Q[[Y[
JKË‹‹˜ËÚ[™[Ž›_J__Y[˜Ý[Ûˆ™
KJ^Ü™]\›ˆ[˜Ý[ÛŠÙ›ÜØ\™[Ý[Û”›ÜÎ›ßO^Ù›ÜØ\™[Ý[Û”›ÜÎˆL_J^Ü™]\›ˆY
Ë‹‹›™

OÔÙ“™[ØYY™X]\™\Î™K\ÙT™[™\Ž•
ÊKÜ™X]Uš\ÝX[[[Y[˜KÛÛ\Û™[J__XÛÛœÝ™VË‹‹•XËËÜ×K[™]ÈÙXZÓX\ØÛÛœÝ™VÈ[š[X][Û”Ý\‹[š[X][ÛÛÛ\]H‹•\]H‹™Y›Ü™S^[Ý]YX\Ý\™H‹“^[Ý]YX\Ý\™H‹“^[Ý][š[X][Û”Ý\‹“^[Ý][š[X][ÛÛÛ\]H—NØÛ\ÜÈÙÜØÜ˜\S[Ý[Û•˜[Y\Ñœ›ÛT›ÜÊKK
^Ü™]\›žß_XÛÛœÝXÝÜŠÜ\™[™K›ÜÎ˜K™\Ù[˜ÙPÛÛ^™YXÙY[Ý[ÛÛÛ™šYÎ›Ë›ØÚÒ[š]X[[š[X][ÛŽ›‹š\ÝX[Ý]NœŸK^ßJ^Ý\Ë˜Ý\œ™[[[\Ë˜Ú[™[[™]ÈÙ]\Ëš\Õ˜\šX[›ÙOHLK\Ëš\ÐÛÛ›Û[™Õ˜\šX[ÏHLK\ËœÚÝ[™YXÙS[Ý[Û[[\Ë˜[Y\Ï[™]ÈX\\Ë’Ù^Yœ˜[YT™\ÛÛ™\]ZK\Ë™™X]\™\Ï^ßK\Ë˜[YTÝXœØÜš\[ÛœÏ[™]ÈX\\Ëœ™]“[Ý[Û•˜[Y\Ï^ßK\Ë™]™[Ï^ßK\Ëœ›Ü]™[ÝXœØÜš\[ÛœÏ^ßK\Ë››ÝYžU\]OJ
OO\Ë››ÝYžJ•\]H‹\Ë›]\Ý˜[Y\ÊK\Ëœ™[™\J
OOžÝ\Ë˜Ý\œ™[	‰Š\ËšYÙÙ\Z[

K\Ëœ™[™\’[œÝ[˜ÙJ\Ë˜Ý\œ™[\Ëœ™[™\”Ý]K\Ëœ›ÜËœÝ[K\Ëœ›Ú™XÝ[ÛŠJ_K\Ëœ™[™\”ØÚY[Y]L\ËœØÚY[T™[™\J
OOžØÛÛœÝOU‹››ÝÊ
NÝ\Ëœ™[™\”ØÚY[Y]I‰Š\Ëœ™[™\”ØÚY[Y]YKÜ‹œ™[™\Š\Ëœ™[™\‹LKL
J_NØÛÛœÝÛ]\Ý˜[Y\ÎœË™[™\”Ý]NšKÛ•\]N˜ßO\ŽÝ\Ë›Û•\]OXË\Ë›]\Ý˜[Y\Ï\Ë\Ë˜˜\ÙU\™Ù]^Ë‹‹œßK\Ëš[š]X[˜[Y\ÏXKš[š]X[ÞË‹‹œßNžßK\Ëœ™[™\”Ý]OZK\Ëœ\™[YK\Ëœ›ÜÏXK\Ëœ™\Ù[˜ÙPÛÛ^]\Ë™\YOÙK™\
ÌNŒ\Ëœ™YXÙY[Ý[ÛÛÛ™šYÏ[Ë\Ë›Ü[ÛœÏ[\Ë˜›ØÚÒ[š]X[[š[X][ÛP›ÛÛX[ŠŠK\Ëš\ÐÛÛ›Û[™Õ˜\šX[Ï^œ
JK\Ëš\Õ˜\šX[›ÙOU\
JK\Ëš\Õ˜\šX[›ÙI‰Š\Ë˜\šX[Ú[™[[™]ÈÙ]
K\Ë›X[X[P[š[X]SÛ“[Ý[P›ÛÛX[ŠI‰™K˜Ý\œ™[
NØÛÛœÝÝÚ[Ú[™ÙNK‹‹›_O]\ËœØÜ˜\S[Ý[Û•˜[Y\Ñœ›ÛT›ÜÊKßK\ÊNÙ›ÜŠÛÛœÝ[ˆJ^ØÛÛœÝO[VÜNÝ›ÚYOO\ÖÜI‰šXÊJI‰™KœÙ]
ÖÜKLJ__[[Ý[
J^Ý\Ë˜Ý\œ™[YKœÙ]
K\ÊK\Ëœ›Ú™XÝ[Û‰‰ˆ]\Ëœ›Ú™XÝ[Û‹š[œÝ[˜ÙI‰\Ëœ›Ú™XÝ[Û‹›[Ý[
JK\Ëœ\™[	‰\Ëš\Õ˜\šX[›ÙI‰ˆ]\Ëš\ÐÛÛ›Û[™Õ˜\šX[É‰Š\Ëœ™[[Ý™Qœ›ÛU˜\šX[™YO]\Ëœ\™[˜Y˜\šX[Ú[
\ÊJK\Ë˜[Y\Ë™›Ü‘XXÚ

KJOO\Ë˜š[™Ó[Ý[Û•˜[YJKJJK]˜Ý\œ™[

K\ËœÚÝ[™YXÙS[Ý[ÛH›™]™\ˆˆOO]\Ëœ™YXÙY[Ý[ÛÛÛ™šYÉ‰Š˜[Ø^\ÈOO]\Ëœ™YXÙY[Ý[ÛÛÛ™šYß˜Ý\œ™[
K\Ëœ\™[	‰\Ëœ\™[˜Ú[™[‹˜Y
\ÊK\Ë\]J\Ëœ›ÜË\Ëœ™\Ù[˜ÙPÛÛ^
_][›[Ý[

^Ô™[]J\Ë˜Ý\œ™[
K\Ëœ›Ú™XÝ[Û‰‰\Ëœ›Ú™XÝ[Û‹[›[Ý[

KŠ\Ë››ÝYžU\]JKŠ\Ëœ™[™\ŠK\Ë˜[YTÝXœØÜš\[ÛœË™›Ü‘XXÚ
OO™J
JK\Ë˜[YTÝXœØÜš\[ÛœË˜ÛX\Š
K\Ëœ™[[Ý™Qœ›ÛU˜\šX[™YI‰\Ëœ™[[Ý™Qœ›ÛU˜\šX[™YJ
K\Ëœ\™[	‰\Ëœ\™[˜Ú[™[‹™[]J\ÊNÙ›ÜŠÛÛœÝH[ˆ\Ë™]™[Ê]\Ë™]™[ÖÙWK˜ÛX\Š
NÙ›ÜŠÛÛœÝH[ˆ\Ë™™X]\™\Ê^ØÛÛœÝO]\Ë™™X]\™\ÖÙWNØI‰ŠK[›[Ý[

KKš\Ó[Ý[YHLJ_]\Ë˜Ý\œ™[[[Xš[™Ó[Ý[Û•˜[YJKJ^Ý\Ë˜[YTÝXœØÜš\[ÛœËš\ÊJI‰\Ë˜[YTÝXœØÜš\[ÛœË™Ù]
JJ
NØÛÛœÝVœËš\ÊJKÏXK›ÛŠ˜Ú[™ÙH‹OOžÝ\Ë›]\Ý˜[Y\ÖÙWOXK\Ëœ›ÜË›Û•\]I‰”Ü‹œ™T™[™\Š\Ë››ÝYžU\]JK	‰\Ëœ›Ú™XÝ[Û‰‰Š\Ëœ›Ú™XÝ[Û‹š\Õ˜[œÙ›Ü›Q\OHL
_JKXK›ÛŠœ™[™\”™\]Y\Ý‹\ËœØÚY[T™[™\ŠNÛ]ŽÝÚ[™ÝË“[Ý[ÛÚXÚÐ\X\”Þ[˜É‰Š]Ú[™ÝË“[Ý[ÛÚXÚÐ\X\”Þ[˜Ê\ËKJJK\Ë˜[YTÝXœØÜš\[ÛœËœÙ]
K

OOžÛÊ
KŠ
K‰‰œŠ
KK›ÝÛ™\‰‰˜KœÝÜ

_J_\ÛÜ›ÙTÜÚ][ÛŠJ^Ü™]\›ˆ\Ë˜Ý\œ™[	‰\ËœÛÜ[œÝ[˜ÙS›ÙTÜÚ][Û‰‰\Ë\OOOYK\OÝ\ËœÛÜ[œÝ[˜ÙS›ÙTÜÚ][ÛŠ\Ë˜Ý\œ™[K˜Ý\œ™[
NŒ]\]Q™X]\™\Ê
^Û]OH˜[š[X][ÛˆŽÙ›ÜŠH[ˆ	
^ØÛÛœÝOIÙWNÚYŠXJXÛÛ[YNØÛÛœÝÚ\Ñ[˜X›Y™X]\™N›ßOXNÚYŠ]\Ë™™X]\™\ÖÙWI‰›É‰
\Ëœ›ÜÊI‰Š\Ë™™X]\™\ÖÙWO[™]ÈÊ\ÊJK\Ë™™X]\™\ÖÙWJ^ØÛÛœÝO]\Ë™™X]\™\ÖÙWNØKš\Ó[Ý[YØK\]J
NŠK›[Ý[

KKš\Ó[Ý[YHL
___]šYÙÙ\Z[

^Ý\Ë˜Z[
\Ëœ™[™\”Ý]K\Ë›]\Ý˜[Y\Ë\Ëœ›ÜÊ_[YX\Ý\™UšY]ÜÜ›Þ

^Ü™]\›ˆ\Ë˜Ý\œ™[Ý\Ë›YX\Ý\™R[œÝ[˜ÙUšY]ÜÜ›Þ
\Ë˜Ý\œ™[\Ëœ›ÜÊNžÞžÛZ[ŽŒX^ŒKNžÛZ[ŽŒX^Œ__YÙ]Ý]XÕ˜[YJJ^Ü™]\›ˆ\Ë›]\Ý˜[Y\ÖÙW_\Ù]Ý]XÕ˜[YJKJ^Ý\Ë›]\Ý˜[Y\ÖÙWOX_]\]JKJ^ÊK˜[œÙ›Ü›U[\]_\Ëœ›ÜË˜[œÙ›Ü›U[\]JI‰\ËœØÚY[T™[™\Š
K\Ëœ™]”›ÜÏ]\Ëœ›ÜË\Ëœ›ÜÏYK\Ëœ™]”™\Ù[˜ÙPÛÛ^]\Ëœ™\Ù[˜ÙPÛÛ^\Ëœ™\Ù[˜ÙPÛÛ^XNÙ›ÜŠ]LÝ™›[™ÝÝ
ÊÊ^ØÛÛœÝOQ™ÝNÝ\Ëœ›Ü]™[ÝXœØÜš\[ÛœÖØWI‰Š\Ëœ›Ü]™[ÝXœØÜš\[ÛœÖØWJ
K[]H\Ëœ›Ü]™[ÝXœØÜš\[ÛœÖØWJNØÛÛœÝÏYVÈ›ÛˆŠØWNÛÉ‰Š\Ëœ›Ü]™[ÝXœØÜš\[ÛœÖØWO]\Ë›ÛŠKÊJ_]\Ëœ™]“[Ý[Û•˜[Y\ÏY[˜Ý[ÛŠKK
^Ù›ÜŠÛÛœÝÈ[ˆJ^ØÛÛœÝXVÛ×K]Û×NÚYŠXÊŠJYK˜Y˜[YJËŠNÙ[ÙHYŠXÊŠJYK˜Y˜[YJËÜŠ‹ÛÝÛ™\Ž™_JJNÙ[ÙHYŠˆOO[ŠZYŠKš\Õ˜[YJÊJ^ØÛÛœÝOYK™Ù]˜[YJÊNÈLOOXK›]™TÝ[OØKš[\
ŠN˜Kš\Ð[š[X]YKœÙ]
Š_Y[Ù^ØÛÛœÝOYK™Ù]Ý]XÕ˜[YJÊNÙK˜Y˜[YJËÜŠ›ÚYOOXOØN›‹ÛÝÛ™\Ž™_JJ__Y›ÜŠÛÛœÝÈ[ˆ
]›ÚYOOXVÛ×I‰™Kœ™[[Ý™U˜[YJÊNÜ™]\›ˆ_J\Ë\ËœØÜ˜\S[Ý[Û•˜[Y\Ñœ›ÛT›ÜÊK\Ëœ™]”›ÜË\ÊK\Ëœ™]“[Ý[Û•˜[Y\ÊK\Ëš[™PÚ[[Ý[Û•˜[YI‰\Ëš[™PÚ[[Ý[Û•˜[YJ
K\Ë›Û•\]I‰\Ë›Û•\]J\Ê_YÙ]›ÜÊ
^Ü™]\›ˆ\Ëœ›ÜßYÙ]˜\šX[
J^Ü™]\›ˆ\Ëœ›ÜË˜\šX[ÏÝ\Ëœ›ÜË˜\šX[ÖÙWN›ÚYYÙ]Y˜][˜[œÚ][ÛŠ
^Ü™]\›ˆ\Ëœ›ÜË˜[œÚ][ÛŸYÙ]˜[œÙ›Ü›TYÙTÚ[

^Ü™]\›ˆ\Ëœ›ÜË˜[œÙ›Ü›TYÙTÚ[YÙ]ÛÜÙ\Ý˜\šX[›ÙJ
^Ü™]\›ˆ\Ëš\Õ˜\šX[›ÙOÝ\Î\Ëœ\™[Ý\Ëœ\™[™Ù]ÛÜÙ\Ý˜\šX[›ÙJ
N›ÚYXY˜\šX[Ú[
J^ØÛÛœÝO]\Ë™Ù]ÛÜÙ\Ý˜\šX[›ÙJ
NÚYŠJ\™]\›ˆK˜\šX[Ú[™[‰‰˜K˜\šX[Ú[™[‹˜Y
JK

OO˜K˜\šX[Ú[™[‹™[]JJ_XY˜[YJKJ^ØÛÛœÝ]\Ë˜[Y\Ë™Ù]
JNØHOO]	‰Š	‰\Ëœ™[[Ý™U˜[YJJK\Ë˜š[™Ó[Ý[Û•˜[YJKJK\Ë˜[Y\ËœÙ]
KJK\Ë›]\Ý˜[Y\ÖÙWOXK™Ù]

J_\™[[Ý™U˜[YJJ^Ý\Ë˜[Y\Ë™[]JJNØÛÛœÝO]\Ë˜[YTÝXœØÜš\[ÛœË™Ù]
JNØI‰ŠJ
K\Ë˜[YTÝXœØÜš\[ÛœË™[]JJJK[]H\Ë›]\Ý˜[Y\ÖÙWK\Ëœ™[[Ý™U˜[YQœ›ÛT™[™\”Ý]JK\Ëœ™[™\”Ý]J_Z\Õ˜[YJJ^Ü™]\›ˆ\Ë˜[Y\Ëš\ÊJ_YÙ]˜[YJKJ^ÚYŠ\Ëœ›ÜË˜[Y\É‰\Ëœ›ÜË˜[Y\ÖÙWJ\™]\›ˆ\Ëœ›ÜË˜[Y\ÖÙWNÛ]]\Ë˜[Y\Ë™Ù]
JNÜ™]\›ˆ›ÚYOO]	‰›ÚYOOXI‰ŠSÜŠ[OOXOÝ›ÚY˜KÛÝÛ™\Ž\ßJK\Ë˜Y˜[YJK
JK\™XY˜[YJKJ^Ý˜\ˆÛ]Ï]›ÚYOO]\Ë›]\Ý˜[Y\ÖÙWI‰\Ë˜Ý\œ™[Û[OOJ]\Ë™Ù]˜\ÙU\™Ù]œ›ÛT›ÜÊ\Ëœ›ÜËJJI‰›ÚYOO]Ý\Ëœ™XY˜[YQœ›ÛR[œÝ[˜ÙJ\Ë˜Ý\œ™[K\Ë›Ü[ÛœÊN\Ë›]\Ý˜[Y\ÖÙWNÝ˜\ˆŽÜ™]\›ˆ›ÚYOO[É‰›[OO[É‰ŠœÝš[™ÈOO]\[ÙˆÉ‰ŠØÊÊ_ÊÊJOÛÏ\\œÙQ›Ø]
ÊNŠ[ËT™™š[™
˜ÊŠJI‰™ÜË\Ý
JI‰ŠÏRÊKJJJK\ËœÙ]˜\ÙU\™Ù]
KXÊÊOÛË™Ù]

N›ÊJKXÊÊOÛË™Ù]

N›ß\Ù]˜\ÙU\™Ù]
KJ^Ý\Ë˜˜\ÙU\™Ù]ÙWOX_YÙ]˜\ÙU\™Ù]
J^Ý˜\ˆNØÛÛœÝÚ[š]X[O]\Ëœ›ÜÎÛ]ÎÚYŠœÝš[™ÈOO]\[Ùˆ›Øš™XÝOO]\[Ùˆ
^ØÛÛœÝX˜Ê\Ëœ›ÜË[OOJO]\Ëœ™\Ù[˜ÙPÛÛ^
_›ÚYOOXOÝ›ÚY˜K˜Ý\ÝÛJNÛ‰‰ŠÏ[–ÙWJ_ZYŠ	‰›ÚYOO[Ê\™]\›ˆÎØÛÛœÝ]\Ë™Ù]˜\ÙU\™Ù]œ›ÛT›ÜÊ\Ëœ›ÜËJNÜ™]\›ˆ›ÚYOO[ŸXÊŠOÝ›ÚYOO]\Ëš[š]X[˜[Y\ÖÙWI‰›ÚYOO[ÏÝ›ÚY\Ë˜˜\ÙU\™Ù]ÙWN›Ÿ[ÛŠKJ^Ü™]\›ˆ\Ë™]™[ÖÙW_
\Ë™]™[ÖÙWO[™]ÈŠK\Ë™]™[ÖÙWK˜Y
J_[›ÝYžJK‹‹˜J^Ý\Ë™]™[ÖÙWI‰\Ë™]™[ÖÙWK››ÝYžJ‹‹˜J__XÛ\ÜÈÙ^[™ÈÙØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊK\Ë’Ù^Yœ˜[YT™\ÛÛ™\R˜ß\ÛÜ[œÝ[˜ÙS›ÙTÜÚ][ÛŠKJ^Ü™]\›ˆ‰™K˜ÛÛ\\™QØÝ[Y[ÜÚ][ÛŠJOÌN‹L_YÙ]˜\ÙU\™Ù]œ›ÛT›ÜÊKJ^Ü™]\›ˆKœÝ[OÙKœÝ[VØWN›ÚY\™[[Ý™U˜[YQœ›ÛT™[™\”Ý]JKÝ˜\œÎ˜KÝ[NJ^Ù[]HVÙWK[]HÙW_Z[™PÚ[[Ý[Û•˜[YJ
^Ý\Ë˜Ú[ÝXœØÜš\[Û‰‰Š\Ë˜Ú[ÝXœØÜš\[ÛŠ
K[]H\Ë˜Ú[ÝXœØÜš\[ÛŠNØÛÛœÝØÚ[™[Ž™_O]\Ëœ›ÜÎÚXÊJI‰Š\Ë˜Ú[ÝXœØÜš\[ÛYK›ÛŠ˜Ú[™ÙH‹OOžÝ\Ë˜Ý\œ™[	‰Š\Ë˜Ý\œ™[^ÛÛ[X	Ù_X
_JJ__XÛ\ÜÈÙ^[™ÈÙØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊK\Ë\OHš[‹\Ëœ™[™\’[œÝ[˜ÙOY™\™XY˜[YQœ›ÛR[œÝ[˜ÙJKJ^ÚYŠœËš\ÊJJ^ØÛÛœÝOQXÊJNÜ™]\›ˆI‰™K™Y˜][^ØÛÛœÝÏJYKÚ[™ÝË™Ù]ÛÛ\]YÝ[J
JKJœÊJOÛË™Ù]›Ü\U˜[YJJN›ÖØWJ_Ü™]\›ˆœÝš[™ÈOO]\[ÙˆÛ‹š[J
N›Ÿ]˜\ˆ[YX\Ý\™R[œÝ[˜ÙUšY]ÜÜ›Þ
KÝ˜[œÙ›Ü›TYÙTÚ[˜_J^Ü™]\›ˆ›JKJ_XZ[
KK
^ÝY
KK˜[œÙ›Ü›U[\]J_\ØÜ˜\S[Ý[Û•˜[Y\Ñœ›ÛT›ÜÊKK
^Ü™]\›ˆÙ
KK
__XÛ\ÜÈY^[™ÈÙØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊK\Ë\OHœÝ™È‹\Ëš\ÔÕ‘ÕYÏHLK\Ë›YX\Ý\™R[œÝ[˜ÙUšY]ÜÜ›ÞRÝ_YÙ]˜\ÙU\™Ù]œ›ÛT›ÜÊKJ^Ü™]\›ˆVØW_\™XY˜[YQœ›ÛR[œÝ[˜ÙJKJ^ÚYŠœËš\ÊJJ^ØÛÛœÝOQXÊJNÜ™]\›ˆI‰™K™Y˜][\™]\›ˆO]Ùš\ÊJOØN”ØÊJKK™Ù]]šX]JJ_\ØÜ˜\S[Ý[Û•˜[Y\Ñœ›ÛT›ÜÊKK
^Ü™]\›ˆ
KK
_XZ[
KK
^ÞY
KK\Ëš\ÔÕ‘ÕYË˜[œÙ›Ü›U[\]J_\™[™\’[œÝ[˜ÙJKKÊ^Ý™
KKÊ_[[Ý[
J^Ý\Ëš\ÔÕ‘ÕYÏX™
KYÓ˜[YJKÝ\\‹›[Ý[
J__XÛÛœÝ[XÊ™
Ë‹‹ÝK‹‹“œ‹‹•œ‹‹’ÜK
KJOO›™
JOÛ™]ÈY
JN›™]ÈÙ
KØ[ÝÔ›Ú™XÝ[ÛŽ™HOOZJ
K‘œ˜YÛY[JJJK™YOOžØÛÛœÝOJOO™Kœ™\XÙJ×ŠÐKV—J_×ËW×JÊÊKÙË
KK
OOÝÕ\\Ø\ÙJ
N˜KÓÝÙ\Ø\ÙJ
JJJJNÜ™]\›ˆK˜Ú\]

KÕ\\Ø\ÙJ
JØKœÛXÙJJ_KÙJ‹‹™JOO™K™š[\Š
KK
OO›ÛÛX[ŠJI‰ˆˆˆOOYKš[J
I‰š[™^ÙŠJOOOXJKš›Ú[ŠˆŠKš[J
K™YOOžÙ›ÜŠÛÛœÝH[ˆJZYŠKœÝ\ÕÚ]
˜\šXKHŠ_œ›ÛHOOX_]HOOXJ\™]\›ˆLNÝ˜\ˆY^Þ[œÎˆš‹ËÝÝÝËÌË›Ü™ËÌŒÜÝ™È‹ÚYŒZYÚŒšY]Ð›ÞˆŒ‹š[ˆ››Û™H‹Ý›ÚÙNˆ˜Ý\œ™[ÛÛÜˆ‹Ý›ÚÙUÚYŒ‹Ý›ÚÙS[™XØ\ˆœ›Ý[™‹Ý›ÚÙS[™Z›Ú[Žˆœ›Ý[™ŸNØÛÛœÝ™JJ
K™›ÜØ\™™YŠJ
ØÛÛÜŽ™OH˜Ý\œ™[ÛÛÜˆ‹Ú^™N˜OLÝ›ÚÙUÚYL‹XœÛÛ]TÝ›ÚÙUÚY›ËÛ\ÜÓ˜[YN›Hˆ‹Ú[™[Žœ‹XÛÛ“›ÙN›‹‹œßKÊOOŠJ
K˜Ü™X]Q[[Y[
JœÝ™È‹Ü™YŽ˜Ë‹‹’YÚY˜KZYÚ˜KÝ›ÚÙN™KÝ›ÚÙUÚY›ÏÌ
“[X™\Š
KÓ[X™\ŠJNÛ\ÜÓ˜[YN’Ù
›XÚYH‹ŠK‹‹ˆ\‰‰ˆZ™
ÊI‰žÈ˜\šXKZY[ˆŽˆYHŸK‹‹œßKË‹‹››X\

ÙKWJOOŠJ
K˜Ü™X]Q[[Y[
JKJJK‹‹\œ˜^Kš\Ð\œ˜^JŠOÜŽ–Ü—WJJKYJKJOOžØÛÛœÝJJ
K™›ÜØ\™™YŠJ
ØÛ\ÜÓ˜[YN‹‹›ßKŠOOžÜ™]\›ŠJ
K˜Ü™X]Q[[Y[
J™Ü™YŽ›‹XÛÛ“›ÙN˜KÛ\ÜÓ˜[YN’Ù
XÚYKIÜS™
JK‹œ™\XÙJÊØK^ŒNWJJÐKV—JKÙË‰KIˆŠKÓÝÙ\Ø\ÙJ
_XXÚYKIÙ_X
K‹‹›ßJNÝ˜\ˆŸJNÜ™]\›ˆ™\Ü^S˜[YOS™
JKKYUY
™^YH‹ÖÈœ]‹Ùˆ“L‹ŒŒˆL‹ŒÍLHHHKŽMˆLÍHLÍHHNKŽÍˆHHHŽMˆLÍHLÍHKLNKŽÍˆ‹Ù^NˆŒ[˜ÛÌŸWKÈ˜Ú\˜ÛH‹ØÞˆŒLˆ‹ÞNˆŒLˆ‹ŽˆŒÈ‹Ù^NˆŒ]Þœ™ŸWWJK™UY
™^YK[Ù™ˆ‹ÖÈœ]‹Ùˆ“LLÌÌÈKŒÍ˜LLÍLÍHLKŒŒH‹MÍHHHHŽMˆLÍÈLÍÈKLK‹H‹Ù^Nˆ˜ÝLYˆŸWKÈœ]‹Ùˆ“LMŒMŒMNLÈÈKMŒ‹MŒˆ‹Ù^NˆŒML\žŸWKÈœ]‹Ùˆ“LMËÎHMËNXLLÍHLÍHKLMKMËMKŒMLHHHHKŽMˆLÍHLÍHH‹MKŒMÈ‹Ù^NˆŒLØšŽXHŸWKÈœ]‹Ùˆ›LˆˆŒŒ‹Ù^NˆŒ[ÛÙ]ÞHŸWWJKYUY
œÙX\˜Ú‹ÖÈœ]‹Ùˆ›LŒHŒKMŒÍMŒÍ‹Ù^NˆŒMÜšˆŸWKÈ˜Ú\˜ÛH‹ØÞˆŒLH‹ÞNˆŒLH‹ŽˆŽ‹Ù^NˆZŽMÝHŸWWJK	UY
˜›ÛÚÛX\šÈ‹ÖÈœ]‹Ùˆ›LNHŒKMËMMÈXLˆˆH‹LšLLˆˆHˆŒMžˆ‹Ù^NˆŒYžLÚÈŸWWJKUY
™ÜšYLžˆ‹ÖÈœ]‹Ùˆ“LLˆÝŒN‹Ù^NˆŒLÈŸWKÈœ]‹Ùˆ“LÈLšN‹Ù^NˆŒZL›ŒŒHŸWKÈœ™XÝ‹ÞˆŒÈ‹NˆŒÈ‹ÚYˆŒN‹ZYÚˆŒN‹žˆŒˆ‹Ù^Nˆš[ÚXˆŸWWJK™J
OOŠÊ
KšœÞ
JœÝ™È‹ÝÚYˆŒÌ‹ZYÚˆŒÍ‹šY]Ð›ÞˆŒÎ‹š[ˆ˜Ý\œ™[ÛÛÜˆ‹˜\šXKZY[ˆŽˆYH‹Ú[™[ŽŠÊ
KšœÞ
Jœ]‹Ùˆ“LZÛHL“MÈZÛNHŒRSV›LˆÝŒŒZMÕŒV“LHÛKLÚL’LH]›HZ’›MKLÕŒÖ›LNKLÚM]šNŒšÝZMÝŒšRŒŒˆŸJ_JKYJÛÜ[Ž™KØ]™Y˜KÜÚ[\œÎÙ]ÜÚ[\œÎ›ßJOOžÝ˜\ˆ‹ŽØÛÛœÝÛ×OJJ
K\ÙTÝ]JJLJKOJJ
K\ÙT™YŠJ[
KOP

KÜOJJ
K\ÙTÝ]JJ[
KÜ]˜[YNž_OYJ
KÜØÜ›ÛT›ÙÜ™\ÜÎ™ßOIÊ
K]XÊËÜÝY™›™\ÜÎŒMÌ[\[™ÎŒÍ_JNÛ]ZÛÖÞKœÛXÙJJW_ÛÖÛ[OOJ[Ü‹™š[™
OO™Kœ]OO^JJ_›ÚYOO[Ý›ÚY›‹˜ÛÛXÝ[ÛœÖÌWNÙ›ÜŠÛ[OOJXŠI‰›ÚYOOY‰‰™‹œ\™[Ê^Ý˜\ˆŽØZÛÖØ‹œ\™[_XÛÛœÝÏ[[OOJXŠ_›ÚYOO\Ý›ÚYœ‹šYÜ™]\›ŠJ
K\ÙQY™™XÝ
J

OOžØÛÛœÝO]K˜Ý\œ™[ÚYŠYJ\™]\›ŽØÛÛœÝOJ
OOžØÛÛœÝOYKœ]Y\žTÙ[XÝÜŠ‹›˜]‹XXÝ]™HŠNØI‰™K˜ÛY[ÚYÙ
Þ˜K›Ù™œÙ]YÚY˜K›Ù™œÙ]ÚYJN™
[
_NØJ
NØÛÛœÝH™[˜Ý[ÛˆOO]\[Ùˆ™\Ú^™SØœÙ\™\Û™]È™\Ú^™SØœÙ\™\ŠJN›[Û[OO]›ÚYOO]›ØœÙ\™JJNÙ›ÜŠÛÛœÝÈÙˆKœ]Y\žTÙ[XÝÜ[
˜HŠJ[[OO]›ÚYOO]›ØœÙ\™JÊNÜ™]\›ˆÚ[™ÝË˜Y]™[\Ý[™\Šœ™\Ú^™H‹KÜ\ÜÚ]™NˆLJK

OOžÛ[OO]›ÚYOO]™\ØÛÛ›™XÝ

KÚ[™ÝËœ™[[Ý™Q]™[\Ý[™\Šœ™\Ú^™H‹J__KÝ×JK
J
K\ÙQY™™XÝ
J

OOžØÛÛœÝOJ
OO˜ÊÚ[™ÝËœØÜ›ÛO
NÜ™]\›ˆJ
KÚ[™ÝË˜Y]™[\Ý[™\ŠœØÜ›Û‹KÜ\ÜÚ]™NˆLJK

OOÚ[™ÝËœ™[[Ý™Q]™[\Ý[™\ŠœØÜ›Û‹J_K×JK
Ê
KšœÞÊJšXY\ˆ‹ØÛ\ÜÓ˜[YN˜ÝÛ‹ZXY\ˆ	ÛÈš\Ë\ÝXÚÈŽˆˆŸH	È‹ÈˆOO^OÈœÜ[ZXY\ˆŽˆˆŸX™]K]\ÝYŽˆœÚ]KZXY\ˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJÝÎˆ‹È‹Û\ÜÓ˜[YNˆÝÛ‹Xœ˜[™‹˜\šXK[X™[Žˆ•šXÙH]\ÈÛYH‹™]K]\ÝYŽˆšXY\‹[ÙÛÈ‹Ú[™[Ž–ÊÊ
KšœÞ
J™ßJK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆÝÛ‹]ÛÜ™X\šÈ‹Ú[™[Ž–È•’PÑH‹
Ê
KšœÞ
J˜œˆ‹ßJKUTÈ—_JW_JK
Ê
KšœÞÊJ›˜]ˆ‹Ü™YŽKÛ\ÜÓ˜[YNˆÝÛ‹[˜]ˆÛ[ÛÝ[˜]ˆ‹™]K\Û[ÛÝ[˜]‹\™XYHŽˆH\›ÚY˜\šXK[X™[Žˆ“XZ[ˆ˜]šYØ][Ûˆ‹Ú[™[Ž–ÖÖÈ“X\‹‹ÛX\‹™^Ü™H—KÈ”ÝÜžH‹‹ÜÝÜžH‹œÝÜžH—KÈ”›ÙÜ™\ÜÈ‹‹Ü›ÙÜ™\ÜÈ‹œ›ÙÜ™\ÜÈ—KÈ‘Ø\˜YÙH‹‹ÙØ\˜YÙH‹™Ø\˜YÙH—KÈ‘ÝZY\È‹‹ÙÝZY\È‹™ÝZY\È—KÈ“™]ÜÈ‹‹Û™]ÜÈ‹›™]ÜÈ—WK›X\

ÙKKJOOŠÊ
KšœÞ
JÝÎ˜K™]K]\ÝYŽ˜˜]‹IÙKÓÝÙ\Ø\ÙJ
_XÛ\ÜÓ˜[YNÏOO]È›˜]‹XXÝ]™HŽˆˆ‹˜\šXKXÝ\œ™[ŽžOOOXOÈœYÙHŽ›ÚYÚ[™[Ž™_KJJK	‰ŠÊ
KšœÞ
JœÜ[‹ØÛ\ÜÓ˜[YNˆœÛ[ÛÝ[˜]‹Z[™XØ]Üˆ‹˜\šXKZY[ˆŽˆYH‹[š]X[ˆLK[š[X]NžÞœžÚYœÚYK˜[œÚ][ÛŽ›OÞÙ\˜][ÛŽŒNžÝ\NˆœÜš[™È‹ÝY™›™\ÜÎŒÍ[\[™ÎŒÍX\ÜÎ‹ß_JW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆÝÛ‹ZXY\‹XXÝ[ÛœÈ‹Ú[™[Ž–ÊÊ
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœÜÚ[\‹]ÙÙÛH‹™]K]\ÝYŽˆœÜÚ[\‹]ÙÙÛH‹˜\šXK[X™[Žˆ”ÜÚ[\œÈŠÊÈ›ÛˆŽˆ›Ù™ˆŠK]Nˆ”ÜÚ[\œÈŠÊÈ›ÛˆŽˆ›Ù™ˆŠK˜\šXK\™\ÜÙYŽÛÛXÚÎŠ
OO›Ê]
KÚ[™[Ž–ÝÊÊ
KšœÞ
JYÜÚ^™NŒMßJNŠÊ
KšœÞ
J™ÜÚ^™NŒMßJK
Ê
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–È”ÜÚ[\œÈ‹È›ÛˆŽˆ›Ù™ˆ—_JW_JK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆÝÛ‹ZXÛÛˆ‹™]K]\ÝYŽˆ›Ü[‹\ÙX\˜Ú‹˜\šXK[X™[Žˆ”ÙX\˜ÚšXÙH]\È‹]Nˆ”ÙX\˜Ú‹ÛÛXÚÎŠ
OO™JÝ\NˆœÙX\˜ÚŸJKÚ[™[ŽŠÊ
KšœÞ
JYÜÚ^™NŒŒJ_JK
Ê
KšœÞÊJÝÎˆ‹ÜØ]™Y‹Û\ÜÓ˜[YNˆÝÛ‹ZXÛÛˆ[Ý\‹X]\È‹™]K]\ÝYŽˆ›Ü[‹\Ø]™Y‹]Nˆ”Ø]™Y[šY\È‹˜\šXK[X™[Ž˜[Ý\ˆ]\Îˆ	ØK›[™ÝHØ]™Y][\ØÚ[™[Ž–ÊÊ
KšœÞ
J	ÜÚ^™NŒNJKK›[™ÝŒ	‰ŠÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœØ]™YXÛÝ[‹™]K]\ÝYŽˆœØ]™YXÛÝ[‹Ú[™[Ž˜K›[™ÝJW_JK
Ê
KšœÞÊJÝÎˆ‹Ù\™XÝÜžH‹Û\ÜÓ˜[YNˆÝÛ‹X[\YÙ\È‹™]K]\ÝYŽˆ›Ü[‹[Y[H‹˜\šXK[X™[Žˆ‘[[™^‹Ú[™[Ž–ÊÊ
KšœÞ
JÜÚ^™NŒMßJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ‘[[™^ŸJW_JW_JK
Ê
KšœÞ
J™]‹ØÛ\ÜÓ˜[YNˆœ™XY[™Ë\›ÙÜ™\ÜÈ‹Ý[NžÜØØ[VšK˜\šXKZY[ˆŽˆYHŸJW_J_NÙ[˜Ý[Ûˆ^JKKL
^ØÛÛœÝÏTÝš[™ÊJKP\œ˜^K™œ›ÛJÊKSX]›Z[ŠKX]›X^
[X™\‹š\Ñš[š]JJOØNŒJJNÚYŠOOO\Ÿ‹›[™ÝÌŠ\™]\›ˆÎØÛÛœÝ[‹™š[\ŠOO‹×–ÐKV˜K^ŒNWIË\Ý
JJK›[™ÝÚYŠ[
\™]\›ˆÎÛ]ÏLÜ™]\›ˆ‹›X\
OOžØÛÛœÝOK×–ÌNWIË\Ý
JOÈŒLŒÍMÎHŽ‹×–ÐKV—IË\Ý
JOÈPÑQ‘Ò’ÓS”T”ÕU•ÖVˆŽ‹×–ØK^—IË\Ý
JOÈ˜X˜ÙY™ÚšÛ[œ\œÝ]Þ^ˆŽ›[ÚYŠXJ\™]\›ˆNØÛÛœÝÏ\ÊÊÎÚYŠKŒLŠÊÊÌJKÛ
‹Ž
\™]\›ˆNØÛÛœÝLLÌJŠÊÌJJÌMÊ“X]›X^
X]™›ÛÜŠ
JJÍÊ™K˜Ú\ÛÙP]

OŒÛ]OXVÛ‰XK›[™ÝNÜ™]\›ˆOOOYI‰ŠOXVÊŠÌJIXK›[™ÝJK_JKš›Ú[ŠˆŠ_Y[˜Ý[Ûˆ^JÝ˜[YN™K˜\šX[˜OH]H‹›ØÚÎHL_J^ØÛÛœÝÏTÝš[™Ê[OOYI‰›ÚYOOYOÙNˆˆŠKJJ
K\ÙT™YŠJ[
KJJ
K\ÙT™YŠJ[
KJJ
K\ÙT™YŠJLJKÏP

NÜ™]\›ŠJ
K\ÙQY™™XÝ
J

OOžØÛÛœÝO[‹˜Ý\œ™[\‹˜Ý\œ™[ÚYŠY_]˜Ý\œ™[ßKÖÐKV˜K^ŒNWKË\Ý
Ê_\œ˜^K™œ›ÛJÊK›[™ÝÌŠ\™]\›ŽØÛÛœÝÏ]Ú[™ÝË›X]ÚYYXJŠ™Y™\œË\™YXÙY[[Ý[ÛŽˆ™YXÙJHŠKO]Ú[™ÝË›X]ÚYYXJŠX^]ÚYˆN\
K
Ú[\ŽˆÛØ\œÙJHŠNÛ]KKLHLKOKLNØÛÛœÝÏJ
OOžØØ[˜Ù[[š[X][Û‘œ˜[YJ
KKœ™[[Ý™P]šX]J™]KXÚ\\‹XXÝ]™HŠKœ™[[Ý™P]šX]J™]KXÚ\\‹Yœ˜[YHŠ_KJ
OOžÝ˜\ˆNÛ˜Ý\œ™[HL[OOJO]J_›ÚYOOY_K™\ØÛÛ›™XÝ

KÊ
_KYOOžÚYŠË›X]Ú\ßØÝ[Y[šY[Š\™]\›ˆ›ÚY

NÝ›ÚYOO[I‰ŠOYJNØÛÛœÝY[˜Ý[ÛŠKJ^Ü™]\›ˆX]›Z[ŠOÍŒŒŒLL˜Ø\™OOXOÍÎˆ›[X™\ˆOOXOÍÍŒŒLL
_JK›X]Ú\ËJKSX]›Z[ŠK
K[JKÛŠNÚYŠLJ\™]\›ˆ›ÚYÊ
NØÛÛœÝSX]™›ÛÜŠ
K[JKÊK›X]Ú\ÏÌLNJJNÛOO^I‰ŠO[œÙ]]šX]J™]KXÚ\\‹Yœ˜[YH‹^JË‹
JJK\™\]Y\Ý[š[X][Û‘œ˜[YJŠ_NÈ™[˜Ý[ÛˆOO]\[Ùˆ[\œÙXÝ[Û“ØœÙ\™\ÊO[™]È[\œÙXÝ[Û“ØœÙ\™\ŠOžÛ‹œÛÛYJOO™Kš\Ò[\œÙXÝ[™ÊI‰Š

OOžÝ˜\ˆŽÙ˜Ý\œ™[
Ë›X]Ú\ßØÝ[Y[šY[ŸK›X]Ú\É‰ˆ˜Ø\™OOXOÚ

NŠHL˜Ý\œ™[HL[OOJ]J_›ÚYOO[Ÿ‹™\ØÛÛ›™XÝ

KœÙ]]šX]J™]KXÚ\\‹Yœ˜[YH‹^JË
JKKœÙ]]šX]J™]KXÚ\\‹XXÝ]™H‹YHŠK\™\]Y\Ý[š[X][Û‘œ˜[YJŠJJ_JJ
_KÝ™\ÚÛ‹ŒM_JKK›ØœÙ\™JJJN›˜Ý\œ™[HLØÛÛœÝJ
OOžÊË›X]Ú\ßK›X]Ú\ÊI‰š

_KÏJ
OOžÙØÝ[Y[šY[‰‰š

_NÜ™]\›ˆË˜Y]™[\Ý[™\Š˜Ú[™ÙH‹ŠKK˜Y]™[\Ý[™\Š˜Ú[™ÙH‹ŠKØÝ[Y[˜Y]™[\Ý[™\Šš\ÚXš[]XÚ[™ÙH‹ÊK

OOžÝ˜\ˆNÛ[OOJO]J_›ÚYOOY_K™\ØÛÛ›™XÝ

KÊ
KËœ™[[Ý™Q]™[\Ý[™\Š˜Ú[™ÙH‹ŠKKœ™[[Ý™Q]™[\Ý[™\Š˜Ú[™ÙH‹ŠKØÝ[Y[œ™[[Ý™Q]™[\Ý[™\Šš\ÚXš[]XÚ[™ÙH‹Ê__KÛËK×JK
Ê
KšœÞÊJœÜ[ˆ‹Ü™YŽ›‹Û\ÜÓ˜[YN˜™[Û‹XÚ\\ˆ™[Û‹XÚ\\‹IØ_IÝÈˆ™[Û‹XÚ\\‹X›ØÚÈŽˆˆŸXÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›™[Û‹XÚ\\‹[ÜšYÚ[˜[‹Ú[™[Ž›ßJK
Ê
KšœÞ
JœÜ[ˆ‹Ü™YŽœ‹Û\ÜÓ˜[YNˆ›™[Û‹XÚ\\‹[Ý™\›^H‹˜\šXKZY[ˆŽˆYHŸJW_J_XÛ\ÜÈH^[™ÈJ
KÛÛ\Û™[ÙÙ]Û˜\ÚÝ™Y›Ü™U\]JJ^ØÛÛœÝO]\Ëœ›ÜË˜Ú[™Y‹˜Ý\œ™[ÚYŠI‰™Kš\Ô™\Ù[	‰ˆ]\Ëœ›ÜËš\Ô™\Ù[
^ØÛÛœÝO]\Ëœ›ÜËœÚ^™T™Y‹˜Ý\œ™[ÙKšZYÚXK›Ù™œÙ]ZYÚKÚYXK›Ù™œÙ]ÚYKÜXK›Ù™œÙ]ÜK›YXK›Ù™œÙ]Y\™]\›ˆ[XÛÛ\Û™[Y\]J
^ß\™[™\Š
^Ü™]\›ˆ\Ëœ›ÜË˜Ú[™[Ÿ_Y[˜Ý[ÛˆÞJØÚ[™[Ž™K\Ô™\Ù[˜_J^ØÛÛœÝJJ
K\ÙRY
J
KÏJJ
K\ÙT™YŠJ[
KJJ
K\ÙT™YŠJÝÚYŒZYÚŒÜŒYŒJKÛ›Û˜ÙNœŸOJJ
K\ÙPÛÛ^
J]
NÜ™]\›ŠJ
K\ÙR[œÙ\[Û‘Y™™XÝ
J

OOžØÛÛœÝÝÚY™KZYÚ›ÜœËYš_O[‹˜Ý\œ™[ÚYŠ_[Ë˜Ý\œ™[Y_[
\™]\›ŽÛË˜Ý\œ™[™]\Ù]›[Ý[Û”ÜY]ØÛÛœÝÏYØÝ[Y[˜Ü™X]Q[[Y[
œÝ[HŠNÜ™]\›ˆ‰‰ŠË››Û˜ÙO\ŠKØÝ[Y[šXY˜\[™Ú[
ÊKËœÚY]	‰˜ËœÚY]š[œÙ\[JˆÙ]K[[Ý[Û‹\ÜZYH‰ÝH—H×ˆÜÚ][ÛŽˆXœÛÛ]HZ[\Ü[×ˆÚYˆ	Ù_\Z[\Ü[×ˆZYÚˆ	Û\Z[\Ü[×ˆÜˆ	Üß\Z[\Ü[×ˆYˆ	Ú_\Z[\Ü[×ˆWˆ
K

OOžÙØÝ[Y[šXYœ™[[Ý™PÚ[
Ê__KØWJK
Ê
KšœÞ
JKÚ\Ô™\Ù[˜KÚ[™YŽ›ËÚ^™T™YŽ›‹Ú[™[ŽšJ
K˜ÛÛ™Q[[Y[
KÜ™YŽ›ßJ_J_XÛÛœÝžOJØÚ[™[Ž™K[š]X[˜K\Ô™\Ù[Û‘^]ÛÛ\]N›ËÝ\ÝÛN›‹™\Ù[˜ÙPY™™XÝÓ^[Ý]œ‹[ÙN›JOOžØÛÛœÝÏQ
žJKOJJ
K\ÙRY
J
KOJJ
K\ÙPØ[˜XÚÊJOOžØËœÙ]
KL
NÙ›ÜŠÛÛœÝHÙˆË˜[Y\Ê
JZYŠXJ\™]\›ŽÛÉ‰›Ê
_KØË×JKJJ
K\ÙSY[[ÊJ

OOŠÚYK[š]X[˜K\Ô™\Ù[Ý\ÝÛN›‹Û‘^]ÛÛ\]N›K™YÚ\Ý\Ž™OOŠËœÙ]
KLJK

OO˜Ë™[]JJJ_JKÖÓX]œ˜[™ÛJ
KWN–ÝWJNÜ™]\›ŠJ
K\ÙSY[[ÊJ

OOžØË™›Ü‘XXÚ

KJOO˜ËœÙ]
KLJJ_KÝJKJ
K\ÙQY™™XÝ


OOžÈ]	‰ˆXËœÚ^™I‰›É‰›Ê
_KÝJKœÜ^[Ý]OO[	‰ŠOJÊ
KšœÞ
JÞKÚ\Ô™\Ù[Ú[™[Ž™_JJK
Ê
KšœÞ
J[K”›ÝšY\‹Ý˜[YNœÚ[™[Ž™_J_NÙ[˜Ý[ÛˆžJ
^Ü™]\›ˆ™]ÈX\XÛÛœÝOYOO™KšÙ^_ˆŽÙ[˜Ý[ÛˆÞJJ^ØÛÛœÝOV×NÜ™]\›ˆJ
KÚ[™[‹™›Ü‘XXÚ
KOOžÊJ
Kš\Õ˜[Y[[Y[
JJI‰˜Kœ\Ú
J_JK_XÛÛœÝ^OJØÚ[™[Ž™KÝ\ÝÛN˜K[š]X[HLÛ‘^]ÛÛ\]N›Ë™\Ù[˜ÙPY™™XÝÓ^[Ý]›HL[ÙNœHœÞ[˜È‹›ÜYØ]N›HL_JOOžØÛÛœÝØËWO\J
KOJJ
K\ÙSY[[ÊJ

OOœÞJJKÙWJK[	‰ˆXÏÖ×N›K›X\
JKJJ
K\ÙT™YŠJL
KOJJ
K\ÙT™YŠJJKÏQ


OO›™]ÈX\
KÚ—OJJ
K\ÙTÝ]JJJKÙ‹×OJJ
K\ÙTÝ]JJJNÜ\Ê

OOžÙ˜Ý\œ™[HLKK˜Ý\œ™[[NÙ›ÜŠ]OLÙO‹›[™ÝÙJÊÊ^ØÛÛœÝO[J–ÙWJNÜš[˜ÛY\ÊJOÙË™[]JJNˆLOOYË™Ù]
JI‰™ËœÙ]
KLJ__KÙ‹›[™Ýš›Ú[Š‹HŠWJNØÛÛœÝV×NÚYŠHOOZ
^Û]OVË‹‹›WNÙ›ÜŠ]OLØO‹›[™ÝØJÊÊ^ØÛÛœÝY–ØWKÏ[J
NÜš[˜ÛY\ÊÊ_
KœÜXÙJK
K‹œ\Ú

J_\™]\›ˆØZ]OO\‰‰‹›[™Ý	‰ŠO]ŠKÊÞJJJK›ÚYŠJ_XÛÛœÝÙ›Ü˜ÙT™[™\Ž—ßOJJ
K\ÙPÛÛ^
JJNÜ™]\›ŠÊ
KšœÞ
JÊ
K‘œ˜YÛY[ØÚ[™[Ž™‹›X\
OOžØÛÛœÝO[JJKHJ	‰ˆXÊI‰ŠOOOYŸš[˜ÛY\ÊJJNÜ™]\›ŠÊ
KšœÞ
JžKÚ\Ô™\Ù[š[š]X[ˆJ˜Ý\œ™[	‰ˆ]
I‰›ÚYÝ\ÝÛNšÝ›ÚY˜K™\Ù[˜ÙPY™™XÝÓ^[Ý]›‹[ÙNœ‹Û‘^]ÛÛ\]NšÝ›ÚYŠ
OOžÚYŠYËš\ÊJJ\™]\›ŽÙËœÙ]
KL
NÛ]OHLÙË™›Ü‘XXÚ
OOžØ_
OHLJ_JKI‰Š[OOWß›ÚYOOWßÊ
KÊK˜Ý\œ™[
K	‰Š[OO]_›ÚYOO]_J
JKÉ‰›Ê
J_KÚ[™[Ž™_KJ_J_J_KÞOUY
›X\‹ÖÈœ]‹Ùˆ“LMŒLˆKMLØLˆˆKÎËNKLKŽÐLHHHŒHŒN]ŒL‹ÍLHHKKMLËŽMMMLÈ‹ŒÍØLˆˆKLKÎMŒŒL‹L‹ŒL˜LˆˆLKÎLËNHKŽÐLHHHÈNKŒÎU‹ŒNLHHHMLËKŽMMLËL‹ŒÍØLˆˆHKÎˆ‹Ù^NˆŒMŽ^MHŸWKÈœ]‹Ùˆ“LMHKÍŒMH‹Ù^NˆŒ\[ˆŸWKÈœ]‹Ùˆ“NHËŒŒÍŒMH‹Ù^NˆŒ]Z[YšŸWWJK^OUY
œÙ[™‹ÖÈœ]‹Ùˆ“LMLÍˆŒKŽ˜KKHŽLÍËKŒ‹KLNXKM‹MˆKŒÍKKŒÍ[LNH‹XKKHKŒŽLÍÛËŽLÈËŒNLˆˆHKŒLLˆKŒL^ˆ‹Ù^NˆŒY™žLÈŸWKÈœ]‹Ùˆ›LŒKŽM‹ŒMËLLŽMLŽLÎH‹Ù^NˆŒL˜ÚœHŸWWJK^OUY
˜Ú\˜ÛKXÚXÚÈ‹ÖÈ˜Ú\˜ÛH‹ØÞˆŒLˆ‹ÞNˆŒLˆ‹ŽˆŒL‹Ù^NˆŒ[YÛ^HŸWKÈœ]‹Ùˆ›NHLˆˆˆM‹Ù^Nˆ™›[MÍŸWWJKOUY
˜Ø\‹Yœ›Û‹ÖÈœ]‹Ùˆ›LŒHLˆ‹LKKLËÐLˆˆMKˆRLˆˆLKŽLÈKŒMÓHLÈ‹Ù^NˆŒZ[ZÝŸWKÈœ]‹Ùˆ“MÈMŒH‹Ù^NˆŒ\XLÙŒHŸWKÈœ]‹Ùˆ“LMÈMŒH‹Ù^NˆÛÜZŽˆŸWKÈœ™XÝ‹ÝÚYˆŒN‹ZYÚˆŽ‹ˆŒÈ‹NˆŒL‹žˆŒˆ‹Ù^Nˆ˜MÚ]NŸWKÈœ]‹Ùˆ“MHNŒˆ‹Ù^Nˆœž][ˆŸWKÈœ]‹Ùˆ“LNHNŒˆ‹Ù^Nˆ™ÞMÍÎˆŸWWJKOUY
˜›ÛÚË[Ü[ˆ‹ÖÈœ]‹Ùˆ“LLˆÝŒM‹Ù^NˆŒXZÞ]ÈŸWKÈœ]‹Ùˆ“LÈNLHHKLKLULHHHKLZXMHHMXLHHHH]ŒLØLHHKLHZM˜LÈÈLÈÈÈÈLËLÞˆ‹Ù^NˆœZŽHŸWWJK^OUY
›™]ÜÜ\\ˆ‹ÖÈœ]‹Ùˆ“LMHNMH‹Ù^NˆŽMYÌ[LˆŸWKÈœ]‹Ùˆ“LNMN‹Ù^NˆœÜÛ˜YHŸWKÈœ]‹Ùˆ“MŒšM˜Lˆˆ‹L•LˆˆL‹L’LˆˆLˆŒM˜LˆˆKM‹NXLˆˆH‹Lšˆ‹Ù^NˆŒÎ\ÍˆŸWKÈœ™XÝ‹ÝÚYˆŽ‹ZYÚˆ‹ˆŒL‹Nˆˆ‹žˆŒH‹Ù^Nˆ˜^]ÝŒ[ˆŸWWJKÞOUY
œÝ[ˆ‹ÖÈ˜Ú\˜ÛH‹ØÞˆŒLˆ‹ÞNˆŒLˆ‹Žˆ‹Ù^Nˆ^\ˆŸWKÈœ]‹Ùˆ“LLˆŒˆ‹Ù^Nˆ\ÌÛHŸWKÈœ]‹Ùˆ“LLˆŒŒˆ‹Ù^NˆŒ[ZÙÈŸWKÈœ]‹Ùˆ›MŽLÈŽLÈKHKH‹Ù^NˆŒM]šˆŸWKÈœ]‹Ùˆ›LMËˆMËˆKHKH‹Ù^Nˆœ™Ý]ˆŸWKÈœ]‹Ùˆ“LˆLšˆ‹Ù^NˆŒ]ŽˆŸWKÈœ]‹Ùˆ“LŒLšˆ‹Ù^NˆŒ\NZÈŸWKÈœ]‹Ùˆ›M‹ŒÍMË‹LKHKH‹Ù^NˆŒ[NžHŸWKÈœ]‹Ùˆ›LNKŒÈŽLËLKHKH‹Ù^NˆŒ\ÚÜÈŸWWJKOUY
˜\œ›ÝË]\\šYÚ‹ÖÈœ]‹Ùˆ“MÈÚLŒL‹Ù^NˆŒ]]›ŽHŸWKÈœ]‹Ùˆ“MÈMÈMÈÈ‹Ù^NˆŒ]šÚ^˜HŸWWJKžOUY
˜\œ›ÝËYÝÛˆ‹ÖÈœ]‹Ùˆ“LLˆ]ŒM‹Ù^NˆœÍŽN[HŸWKÈœ]‹Ùˆ›LNHL‹MÈËMËMÈ‹Ù^NˆŒZYZ™HŸWWJKžOVÞÚYˆ›X\‹]Nˆ“X\‹XÛÛŽ˜ÞK[XŽˆšXÙWØÚ]WÌˆ‹™]šY]Îˆ›[ÛšYK[šYÚ‹XÝ[ÛŽˆ›X\‹Ø\[ÛŽˆˆŸKÚYˆœÝÜžH‹]Nˆ”ÝÜžH‹XÛÛŽ^K[XŽˆœÝÜžK\™]šY]È‹™]šY]ÎˆœÝÜžK\™]šY]È‹XÝ[ÛŽˆœÝÜžH‹Ø\[ÛŽˆˆŸKÚYˆœ›ÙÜ™\ÜÈ‹]Nˆ”›ÙÜ™\ÜÈ‹XÛÛŽ›^K[XŽˆšXÙWØÚ]WÌLˆ‹™]šY]ÎˆšXÙWØÚ]WÌLˆ‹XÝ[ÛŽˆœ›ÙÜ™\ÜÈ‹Ø\[ÛŽˆˆŸKÚYˆ™Ø\˜YÙH‹]Nˆ‘Ø\˜YÙH‹XÛÛŽœK[XŽˆ™Ø\˜YÙK\™]šY]È‹™]šY]Îˆ™Ø\˜YÙK\™]šY]È‹XÝ[ÛŽˆ™Ø\˜YÙH‹Ø\[ÛŽˆ”šY\ËÜXÜÈ	ˆX]Ú\ÈŸKÚYˆ™ÝZY\È‹]Nˆ‘ÝZY\È‹XÛÛŽ™K[XŽˆ™ÝZY\Ë\™]šY]È‹™]šY]Îˆ™ÝZY\Ë\™]šY]È‹XÝ[ÛŽˆ™ÝZY\È‹Ø\[ÛŽˆ’Û›ÝÈH\œš]ÜžHŸKÚYˆ›™]ÜÈ‹]Nˆ“™]ÜÈ‹XÛÛŽž^K[XŽˆ›™]ÜË\™]šY]È‹™]šY]Îˆ›™]ÜË\™]šY]È‹XÝ[ÛŽˆœÝÜšY\È‹Ø\[ÛŽˆ•H]\ÝÛÜ™ŸWKÞOVÖÈ“SSSÖÓÕS•H‹LM—KÈ“SÓT‘ÓÕS•H‹ŒËÌ×KÈ’ÑSHÓÕS•H‹ÎKÎWKÈ•’PÑKQSHÓÕS•H‹K—KÈ“PT’PSHÓÕS•H‹ËWKžOJÛX™[Î™OHLJOOŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›šYÚ[X\‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊ›[ÛšYK[šYÚŠK[ˆ‘ÕHÝÛ—LŒN\ÈšYÚX\Ùˆ[ÛšYHŸJKI‰ÞK›X\

ÙKKJOOŠÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜ÛÝ[K[X™[‹Ý[NžÛY˜	Ø_IXÜ˜	ÝIXKÚ[™[Ž™_KJJW_JKÞOJÛÜ[Ž™KØ]™Y˜_JOOžØÛÛœÝÝ×OJJ
K\ÙTÝ]JJ›X\ŠKÛ‹—OJJ
K\ÙTÝ]JJˆŠKP

KÏJJ
K\ÙT™YŠJ×JKOYžK™š[™
OO™KšYOO]
NÊJ
K\ÙQY™™XÝ
J

OOžØÛÛœÝOJ
OOœŠ™]È[‘]U[YQ›Ü›X]
™[‹UTÈ‹Ý[YV›Û™Nˆ[Y\šXØKÓ™]×Ö[ÜšÈ‹Ý\Žˆ›[Y\šXÈ‹Z[]NˆŒ‹YYÚ]ŸJK™›Ü›X]
™]È]JJNÙJ
NØÛÛœÝO\Ù][\˜[
KÙM
NÜ™]\›Š
OO˜ÛX\’[\˜[
J_K×JNØÛÛœÝOXOOžÝ˜\ˆØK˜[˜ÚÜÛ[OOJYØÝ[Y[™Ù][[Y[žRY
K˜[˜ÚÜŠJ_›ÚYOO]œØÜ›Û[ÕšY]ÊØ™Z]š[ÜŽ›È˜]]ÈŽˆœÛ[ÛÝŸJN™JÝ\N˜K˜XÝ[ÛŸJ_NÜ™]\›ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ÚYˆšÛYH‹Û\ÜÓ˜[YNˆœ]\ÙKZÛYH‹™]K]\ÝYŽˆš\›Ë\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ]\ÙKXÛÛ[[ˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ]\ÙK]]KX\™XH‹Ú[™[Ž–ÊÊ
KšœÞ
JšH‹ØÛ\ÜÓ˜[YNˆœ]\ÙK]]H‹™]K]\ÝYŽˆš\›ËZXY[™È‹Ú[™[Ž–È“SÓ’QH‹•S‘’ST‘Q—K›X\

KJOOŠÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ]\ÙK[X\ÚÈ‹Ú[™[ŽŠÊ
KšœÞ
JœÜ[‹Ú[š]X[ˆ[	‰žÞNˆŒLIHŸK[š[X]NžÞNŒK˜[œÚ][ÛŽžÙ\˜][ÛŽ‹ŽK[^N‹ŒLŠËŒJ˜KX\ÙN–ËŒM‹KŒËW_KÚ[™[ŽŠÊ
KšœÞ
J^KÝ˜[YN™K›ØÚÎˆLJ_J_KJJ_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ]\ÙKZY‹™]K]\ÝYŽˆš\›ËZY‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ“SÓ’QHŸJK
Ê
KšœÞ
JœÝ›Û™È‹È™]K]\ÝYŽˆ™X\Ý\›‹][YH‹Ú[™[Ž›ŸJK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆšY\Ý[ˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JÞKÜÚ^™NŒM_JKˆÕS”ÒS‘HÕUH—_JK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆšY\XÙH‹Ú[™[Žˆ‘PTÕT“ˆSQHŸJW_JW_JK
Ê
KšœÞ
J›Û‹ØÛ\ÜÓ˜[YNˆœ]\ÙK[Y[H‹˜\šXK[X™[Žˆ–[Ý\ˆÚ[™ÝÈ[ÈÕH’H‹Ú[™[Ž™žK›X\

KŠOOŠÊ
KšœÞ
J›KÚ[š]X[ˆ[	‰žÛÜXÚ]NŒ‹LLŸK[š[X]NžÛÜXÚ]NŒKŒK˜[œÚ][ÛŽžÙ[^N‹ŒJËŒMJ›‹\˜][ÛŽ‹_KÚ[™[ŽŠÊ
KšœÞÊJ˜]Ûˆ‹Ü™YŽ™OOžØË˜Ý\œ™[Û—OY_KÛ\ÜÓ˜[YNˆœ]\ÙK\›ÝÈŠÊOOYKšYÈœÙ[XÝYŽˆˆŠK™]K]\ÝYŽ˜]\ÙKIÙKšYXÛ“[Ý\ÙQ[\ŽŠ
OO›ÊKšY
KÛ‘›ØÝ\ÎŠ
OO›ÊKšY
KÛ’Ù^QÝÛŽ™OOŠ
KJOOžÚYŠÈ\œ›ÝÑÝÛˆ‹\œ›ÝÕ\—Kš[˜ÛY\ÊKšÙ^JJ^Ý˜\ˆÙKœ™]™[Y˜][

NØÛÛœÝJJÊ\œ›ÝÑÝÛˆOOYKšÙ^OÌN‹LJJÙžK›[™Ý
IYžK›[™ÝÛÊžVÛ—KšY
K[OOJXË˜Ý\œ™[Û—J_›ÚYOO]™›ØÝ\Ê
__JJKŠKÛÛXÚÎŠ
OO›JJKÚ[™[Ž–ÝOOYKšY	‰ŠÊ
KšœÞ
JœÜ[‹ØÛ\ÜÓ˜[YNˆœ]\ÙK\Ù[XÝ[Ûˆ‹^[Ý]Y›Ý›ÚYˆœ]\ÙK[Y[K\Ù[XÝ[Ûˆ‹˜[œÚ][ÛŽžÝ\NˆœÜš[™È‹ÝY™›™\ÜÎŒ[\[™ÎŒÎ_K˜\šXKZY[ˆŽˆYHŸJK
Ê
KšœÞ
JKšXÛÛ‹ØÛ\ÜÓ˜[YNˆœ]\ÙK\›ÝËZXÛÛˆ‹Ú^™NŒNKÝ›ÚÙUÚYŒKŽ_JK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ]\ÙK\›ÝËXÛÜH‹Ú[™[Ž–ÊÊ
KšœÞ
JœÝ›Û™È‹ØÚ[™[Ž™K]_JKK˜Ø\[Û‰‰ŠÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž™K˜Ø\[ÛŸJKœ›ÙÜ™\ÜÈOOYKšY	‰˜K›[™ÝŒ	‰ŠÊ
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ØK›[™Ýˆ[šY\È›ÛÚÛX\šÙY—_JW_JK
Ê
KšœÞ
JKØÛ\ÜÓ˜[YNˆœ]\ÙK\›ÝËX\œ›ÝÈ‹Ú^™NŒN˜\šXKZY[ˆŽˆYHŸJK
Ê
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊK[XŠK[ˆˆ‹Û\ÜÓ˜[YNˆœ]\ÙK][X›˜Z[ŸJW_J_KKšY
J_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆœ]\ÙKX\‹™]K]\ÝYŽˆœ]\ÙKX\‹Ú[™[ŽŠÊ
KšœÞ
J^KÛ[ÙNˆœÞ[˜È‹Ú[™[Žˆ›X\OO]ÊÊ
KšœÞÊJ˜]Û‹ØÛ\ÜÓ˜[YNˆœ]\ÙK[X\X]Ûˆ‹˜\šXK[X™[Žˆ“Ü[ˆH[ÛšYH™YÚ[ÛˆX\‹™]K]\ÝYŽˆš\›Ë[X\[Ü[ˆ‹ÛÛXÚÎŠ
OO™JÝ\Nˆ›X\ŸJK[š]X[ˆ[	‰žÛÜXÚ]NŒK[š[X]NžÛÜXÚ]NŒ_K^]žÛÜXÚ]N›ÌNŒK˜[œÚ][ÛŽžÙ\˜][ÛŽ›Ì‹ŒÌ‹X\ÙN–ËŒ‹ŽŒ‹W_KÚ[™[Ž–ÊÊ
KšœÞ
JžKßJK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ]\ÙKX\Z[‹Ú[™[Ž–È’UHPT‹
Ê
KšœÞ
JKÜÚ^™NŒM_JW_JW_K›X\ŠNŠÊ
KšœÞÊJ˜]Û‹ØÛ\ÜÓ˜[YNˆœ]\ÙK\ÝËX]Ûˆ‹™]K]\ÝYŽ˜\›Ë\™]šY]ËIÝKšYX˜\šXK[X™[Ž˜Ü[ˆ	ÝK]_XÛÛXÚÎŠ
OO›JJK[š]X[ˆ[	‰žÛÜXÚ]NŒØØ[NŒKŒKš[\Žˆ˜›\Šœ
HŸK[š[X]NžÛÜXÚ]NŒKØØ[NŒKš[\Žˆ˜›\Š
HŸK^]žÛÜXÚ]N›ÌNŒK˜[œÚ][ÛŽžÙ\˜][ÛŽ›Ì‹ŒÎX\ÙN–ËŒ‹ŽŒ‹W_KÚ[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊKœ™]šY]ÊK[˜	ÝK]_H[ˆÜ˜[™Y]]È’XJK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ]\ÙK\ÝËXØ\[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJœÛX[‹ØÚ[™[Ž–È•’PÑHUTÈÈ‹K]KÕ\\Ø\ÙJ
W_JK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[ŽK]_JK
Ê
KšœÞ
JKÜÚ^™NŒÌŸJW_JW_KKšY
_J_JK
Ê
KšœÞÊJ˜H‹Ú™YŽˆˆÚ[\Z[ˆ‹™]K]\ÝYŽˆœ]\ÙKZ[\YÝÛˆ‹Û\ÜÓ˜[YNˆœ]\ÙK\ØÜ›Û‹Ú[™[Ž–ÊÊ
KšœÞ
JžKÜÚ^™NŒLßJKˆÑQTVÔ’S‘È—_JW_J_NÙ[˜Ý[ÛˆÞJKJ^ØÛÛœÝ\ØÊJ
JKÏJ
OOœÙ]
J
JNÜ™]\›ˆÊ
K\Ê

OOžØÛÛœÝOJ
OO”Ü‹œ™T™[™\ŠËLKL
KYK›X\
OO™K›ÛŠ˜Ú[™ÙH‹JJNÜ™]\›Š
OOžÝ™›Ü‘XXÚ
OO™J
JKŠÊ__JKY[˜Ý[ÛˆJKKÊ^ÚYŠ™[˜Ý[ÛˆOO]\[ÙˆJ\™]\›ˆ[˜Ý[ÛŠJ^ÑÜ‹˜Ý\œ™[V×KJ
NØÛÛœÝOPÞJÜ‹˜Ý\œ™[JNÜ™]\›ˆÜ‹˜Ý\œ™[]›ÚY_JJNØÛÛœÝH™[˜Ý[ÛˆOO]\[ÙˆOØN™[˜Ý[ÛŠ‹‹™J^ØÛÛœÝOHP\œ˜^Kš\Ð\œ˜^JVÌJKXOÌ‹LKÏYVÌ
ÝKYVÌJÝKYVÌŠÝKYVÌÊÝKÏQÊ‹‹ÛZ^\ŽŠO\–ÌK
OO™I‰ˆ›Øš™XÝOO]\[ÙˆI‰™K›Z^
JJOÚK›Z^›ÚY
K‹‹›JNÝ˜\ˆNÜ™]\›ˆOÜÊÊNœßJKÊNÜ™]\›ˆ\œ˜^Kš\Ð\œ˜^JJOÚÞJKŠNšÞJÙWK
ÙWJOO›ŠJJ_Y[˜Ý[ÛˆÞJKJ^ØÛÛœÝQ


OO–×JNÜ™]\›ˆÞJK

OOžÝ›[™ÝLØÛÛœÝÏYK›[™ÝÙ›ÜŠ]OLØOÎØJÊÊ]ØWOYVØWK™Ù]

NÜ™]\›ˆJ
_J_XÛÛœÝÞOUY
›X\\[ˆ‹ÖÈœ]‹Ùˆ“LŒLÌŽNLËMKLÎHLŒNLËMËŒÎNHLKÎNXLHHKLKŒŒˆÎKLÎHŒŒNLÈMŽNLÈLNHMˆ‹Ù^NˆŒ\ŒŒˆŸWKÈ˜Ú\˜ÛH‹ØÞˆŒLˆ‹ÞNˆŒL‹ŽˆŒÈ‹Ù^Nˆš[ZÈŸWWJKOUY
˜ÚXÚÈ‹ÖÈœ]‹Ùˆ“LŒˆHMÛMKMH‹Ù^NˆŒYÛYŒ˜ÈŸWWJNÙ[˜Ý[Ûˆ^JKJ^ÚYŠ™[˜Ý[ÛˆOO]\[ÙˆJ\™]\›ˆJJNÛ[OOYI‰›ÚYOOYI‰ŠK˜Ý\œ™[XJ_Y[˜Ý[ÛˆJ‹‹™J^Ü™]\›ˆOOžÛ]HLNØÛÛœÝÏYK›X\
OOžØÛÛœÝÏP^JKJNÜ™]\›ˆ™[˜Ý[ÛˆˆO]\[Ùˆß
HL
KßJNÚYŠ
\™]\›Š
OOžÙ›ÜŠ]OLØOË›[™ÝØJÊÊ^ØÛÛœÝ[ÖØWNÈ™[˜Ý[ÛˆO]\[ÙˆÝ

N^JVØWK[
____Y[˜Ý[ÛˆžJ‹‹™J^Ü™]\›ˆJ
K\ÙPØ[˜XÚÊJ‹‹™JKJ_Y[˜Ý[Ûˆ^JJ^ØÛÛœÝOUžJJKZJ
K™›ÜØ\™™YŠ
K
OOžØÛÛœÝØÚ[™[Ž›Ë‹‹›ŸOYKZJ
KÚ[™[‹Ð\œ˜^JÊK\‹™š[™
JNÚYŠ
^ØÛÛœÝO[œ›ÜË˜Ú[™[‹Ï\‹›X\
OO˜OOO[ÚJ
KÚ[™[‹˜ÛÝ[
JOŒOÚJ
KÚ[™[‹›Û›J[
NšJ
Kš\Õ˜[Y[[Y[
JOÙKœ›ÜË˜Ú[™[Ž›[˜JNÜ™]\›ŠÊ
KšœÞ
JKË‹‹›‹™YŽÚ[™[ŽšJ
Kš\Õ˜[Y[[Y[
JOÚJ
K˜ÛÛ™Q[[Y[
K›ÚYÊN›[J_\™]\›ŠÊ
KšœÞ
JKË‹‹›‹™YŽÚ[™[Ž›ßJ_JNÜ™]\›ˆ™\Ü^S˜[YOX	Ù_K”ÛÝ]˜\ˆOS^J”ÛÝŠNÙ[˜Ý[ÛˆžJJ^ØÛÛœÝOZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝØÚ[™[Ž‹‹›ßOYNÚYŠJ
Kš\Õ˜[Y[[Y[

J^ØÛÛœÝOY[˜Ý[ÛŠJ^Û]OSØš™XÝ™Ù]ÝÛ”›Ü\Q\ØÜš\ÜŠKœ›ÜËœ™YˆŠOË™Ù]XI‰ˆš\Ô™XXÝØ\›š[™Èš[ˆI‰˜Kš\Ô™XXÝØ\›š[™ÎÚYŠ
\™]\›ˆKœ™YŽÚYŠOSØš™XÝ™Ù]ÝÛ”›Ü\Q\ØÜš\ÜŠKœ™YˆŠOË™Ù]XI‰ˆš\Ô™XXÝØ\›š[™Èš[ˆI‰˜Kš\Ô™XXÝØ\›š[™Ë
\™]\›ˆKœ›ÜËœ™YŽÜ™]\›ˆKœ›ÜËœ™YŸKœ™YŸJ
KY[˜Ý[ÛŠKJ^ØÛÛœÝ^Ë‹‹˜_NÙ›ÜŠÛÛœÝÈ[ˆJ^ØÛÛœÝYVÛ×KXVÛ×NË×›Û–ÐKV—KË\Ý
ÊOÛ‰‰œÝÛ×OJ‹‹™JOOžÜŠ‹‹™JKŠ‹‹™J_N›‰‰ŠÛ×O[ŠNˆœÝ[HOO[ÏÝÛ×O^Ë‹‹›‹‹‹œŸNˆ˜Û\ÜÓ˜[YHOO[É‰ŠÛ×OVÛ‹—K™š[\Š›ÛÛX[ŠKš›Ú[ŠˆŠJ_\™]\›žË‹‹™K‹‹_JËœ›ÜÊNÜ™]\›ˆ\HOOZJ
K‘œ˜YÛY[	‰Š‹œ™YXOÑJKJN™JKJ
K˜ÛÛ™Q[[Y[
Š_\™]\›ˆJ
KÚ[™[‹˜ÛÝ[

OŒOÚJ
KÚ[™[‹›Û›J[
N›[JNÜ™]\›ˆK™\Ü^S˜[YOX	Ù_K”ÛÝÛÛ™X_]˜\ˆžOTÞ[X›Û
œ˜Y^œÛÝX›HŠNÙ[˜Ý[ÛˆJJ^Ü™]\›ˆJ
Kš\Õ˜[Y[[Y[
JI‰ˆ™[˜Ý[ÛˆOO]\[ÙˆK\I‰ˆ—×Ü˜Y^Yš[ˆK\I‰™K\K—×Ü˜Y^YOOTž_Y[˜Ý[ÛˆžJJ^Ý˜\ˆKÏHˆŽÚYŠœÝš[™ÈO]\[Ùˆ_›[X™\ˆO]\[ÙˆJ[ÊÏYNÙ[ÙHYŠ›Øš™XÝO]\[ÙˆJZYŠ\œ˜^Kš\Ð\œ˜^JJJ^Ý˜\ˆYK›[™ÝÙ›ÜŠOLØOŽØJÊÊYVØWI‰ŠQžJVØWJJI‰ŠÉ‰ŠÊÏHˆŠKÊÏ]
_Y[ÙH›ÜŠ[ˆJYVÝI‰ŠÉ‰ŠÊÏHˆŠKÊÏ]
NÜ™]\›ˆßY[˜Ý[ÛˆÞJ
^Ù›ÜŠ˜\ˆKKLÏHˆ‹X\™Ý[Y[Ë›[™ÝÝŽÝ
ÊÊJOX\™Ý[Y[ÖÝJI‰ŠOQžJJJI‰ŠÉ‰ŠÊÏHˆŠKÊÏXJNÜ™]\›ˆßXÛÛœÝÞOYOOˆ˜›ÛÛX[ˆOO]\[ÙˆOØ	Ù_XŒOOYOÈŒŽ™KÞOQÞK^OJKJOOOžÝ˜\ˆÎÚYŠ[OJ[OOX_›ÚYOOXOÝ›ÚY˜K˜\šX[ÊJ\™]\›ˆÞJK[OO]›ÚYOO]Ý›ÚY˜Û\ÜË[OO]›ÚYOO]Ý›ÚY˜Û\ÜÓ˜[YJNØÛÛœÝÝ˜\šX[Î›‹Y˜][˜\šX[ÎœŸOXKSØš™XÝšÙ^\ÊŠK›X\
OOžØÛÛœÝO[[OO]›ÚYOO]Ý›ÚYÙWKÏ[[OO\Ÿ›ÚYOO\Ý›ÚYœ–ÙWNÚYŠ[OOXJ\™]\›ˆ[ØÛÛœÝUÞJJ_ÞJÊNÜ™]\›ˆ–ÙWVÛ_JKÏ]	‰“Øš™XÝ™[šY\Ê
Kœ™YXÙJ
KJOOžÛ]Ý×OXNÜ™]\›ˆ›ÚYOO[ß
VÝO[ÊK_KßJKO[[OOX_›ÚYOOX_[OOJÏXK˜ÛÛ\Ý[™˜\šX[Ê_›ÚYOO[ÏÝ›ÚY›Ëœ™YXÙJ
KJOOžÛ]ØÛ\ÜÎÛ\ÜÓ˜[YN›Ë‹‹›ŸOXNÜ™]\›ˆØš™XÝ™[šY\ÊŠK™]™\žJOOžÛ]ØKOYNÜ™]\›ˆ\œ˜^Kš\Ð\œ˜^J
OÝš[˜ÛY\ÊË‹‹œ‹‹‹œßVØWJNžË‹‹œ‹‹‹œßVØWOOO]JOÖË‹‹™K×N™_K×JNÜ™]\›ˆÞJKK[OO]›ÚYOO]Ý›ÚY˜Û\ÜË[OO]›ÚYOO]Ý›ÚY˜Û\ÜÓ˜[YJ_KOYOOžØÛÛœÝOR^JJKØÛÛ™›XÝ[™ÐÛ\ÜÑÜ›Ý\ÎÛÛ™›XÝ[™ÐÛ\ÜÑÜ›Ý\[ÙYšY\œÎ›ßOYNÜ™]\›žÙÙ]Û\ÜÑÜ›Ý\Y™OOžØÛÛœÝYKœÜ]
‹HŠNÜ™]\›ˆˆOO]ÌI‰ŒHOO]›[™Ý	‰œÚY

KžJJ_žJJ_KÙ]ÛÛ™›XÝ[™ÐÛ\ÜÑÜ›Ý\YÎŠKJOOžØÛÛœÝ]ÙW_×NÜ™]\›ˆI‰›ÖÙWOÖË‹‹›‹‹‹›ÖÙWWN›Ÿ__KžOJKJOOžÚYŠOOYK›[™Ý
\™]\›ˆK˜Û\ÜÑÜ›Ý\YØÛÛœÝYVÌKÏXK›™^\™Ù]

K[ÏÓžJKœÛXÙJJKÊN›ÚYÚYŠŠ\™]\›ˆŽÚYŠOOXK˜[Y]ÜœË›[™Ý
\™]\›ŽØÛÛœÝYKš›Ú[Š‹HŠNÜ™]\›ˆK˜[Y]ÜœË™š[™

Ý˜[Y]ÜŽ™_JOO™JŠJOË˜Û\ÜÑÜ›Ý\YKÞOK×—ÊŠÊWIËžOYOOžÚYŠÞK\Ý
JJ^ØÛÛœÝORÞK™^XÊJVÌWKXOËœÝXœÝš[™ÊKš[™^ÙŠŽˆŠJNÚYŠ
\™]\›ˆ˜\˜š]˜\žK‹ˆŠÝ_K^OYOOžØÛÛœÝÝ[YN˜KÛ\ÜÑÜ›Ý\ÎOYKÏ^Û™^\›™]ÈX\˜[Y]ÜœÎ–×_NÙ›ÜŠÛÛœÝˆ[ˆ
^žJÛ—KË‹JNÜ™]\›ˆßKžOJKKÊOOžÙK™›Ü‘XXÚ
OOžÚYŠœÝš[™ÈOO]\[ÙˆJ^Ü™]\›ˆ›ÚY

ˆOOYOØN•^JKJJK˜Û\ÜÑÜ›Ý\Y]
_ZYŠ™[˜Ý[ÛˆOO]\[ÙˆJ\™]\›ˆ^JJOÝ›ÚYžJJÊKKÊN›ÚYK˜[Y]ÜœËœ\Ú
Ý˜[Y]ÜŽ™KÛ\ÜÑÜ›Ý\YJNÓØš™XÝ™[šY\ÊJK™›Ü‘XXÚ

ÙK—JOOžÞžJ‹^JKJKÊ_J_J_K^OJKJOOžÛ]YNÜ™]\›ˆKœÜ]
‹HŠK™›Ü‘XXÚ
OOžÝ›™^\š\ÊJ_›™^\œÙ]
KÛ™^\›™]ÈX\˜[Y]ÜœÎ–×_JK]›™^\™Ù]
J_JKK^OYOO™Kš\Õ[YQÙ]\‹žOYOOžÚYŠOJ\™]\›žÙÙ]Š
OOžßKÙ]Š
OOžß_NÛ]OL[™]ÈX\Ï[™]ÈX\ØÛÛœÝJ‹ŠOOžÝœÙ]
‹ŠKJÊËO™I‰ŠOLÏ][™]ÈX\
_NÜ™]\›žÙÙ]
J^Û]O]™Ù]
JNÜ™]\›ˆ›ÚYOOXOØN›ÚYOOJO[Ë™Ù]
JJOÊŠKJKJN›ÚYKÙ]
KJ^Ýš\ÊJOÝœÙ]
KJN›ŠKJ___K^OYOOžØÛÛœÝÜ™Yš^˜K^\š[Y[[\œÙPÛ\ÜÓ˜[YNOYNÛ]ÏYOOžØÛÛœÝOV×NÛ]ÏLLLÙ›ÜŠ]OLÚOK›[™ÝÚJÊÊ^Û]YVÚWNÚYŠOO[É‰ŒOO[Š^ÚYŠŽˆOO[
^ØKœ\Ú
KœÛXÙJ‹JJKZJÌNØÛÛ[Y_ZYŠ‹ÈOO[
^ÝZNØÛÛ[Y__H–ÈOO[ÛÊÊÎˆ—HOO[ÛËKNˆŠOO[ÛŠÊÎˆŠHOO[	‰›‹K_XÛÛœÝLOOXK›[™ÝÙN™KœÝXœÝš[™ÊŠKÏIJ
NÜ™]\›žÛ[ÙYšY\œÎ˜K\Ò[\Ü[[ÙYšY\ŽœÈOO[˜\ÙPÛ\ÜÓ˜[YNœËX^X™TÜÝš^[ÙYšY\”ÜÚ][ÛŽ	‰œÝ\Ž›ÚY_NÚYŠJ^ØÛÛœÝOXJÈŽˆ‹[ÎÛÏXOO˜KœÝ\ÕÚ]
JOÝ
KœÝXœÝš[™ÊK›[™Ý
JNžÚ\Ñ^\›˜[ˆL[ÙYšY\œÎ–×K\Ò[\Ü[[ÙYšY\ŽˆLK˜\ÙPÛ\ÜÓ˜[YN˜KX^X™TÜÝš^[ÙYšY\”ÜÚ][ÛŽ›ÚY_ZYŠ
^ØÛÛœÝO[ÎÛÏXOO
ØÛ\ÜÓ˜[YN˜K\œÙPÛ\ÜÓ˜[YN™_J_\™]\›ˆßK	OYOO™K™[™ÕÚ]
ˆHŠOÙKœÝXœÝš[™ÊK›[™ÝLJN™KœÝ\ÕÚ]
ˆHŠOÙKœÝXœÝš[™ÊJN™KOYOOžØÛÛœÝOSØš™XÝ™œ›ÛQ[šY\ÊK›Ü™\”Ù[œÚ]]™S[ÙYšY\œË›X\
OO–ÙKLJJNÜ™]\›ˆOOžÚYŠK›[™ÝLJ\™]\›ˆNØÛÛœÝV×NÛ]ÏV×NÜ™]\›ˆK™›Ü‘XXÚ
OOžÈ–ÈOOYVÌ_VÙWOÊœ\Ú
‹‹›ËœÛÜ

KJKÏV×JN›Ëœ\Ú
J_JKœ\Ú
‹‹›ËœÛÜ

JK_KžOK×ÊËÎÙ[˜Ý[Ûˆ^J
^Û]KKLÏHˆŽÙ›ÜŠÝ\™Ý[Y[Ë›[™ÝÊJOX\™Ý[Y[ÖÝ
Ê×JI‰ŠOYYÊJJI‰ŠÉ‰ŠÊÏHˆŠKÊÏXJNÜ™]\›ˆßXÛÛœÝYÏYOOžÚYŠœÝš[™ÈOO]\[ÙˆJ\™]\›ˆNÛ]KHˆŽÙ›ÜŠ]ÏLÛÏK›[™ÝÛÊÊÊYVÛ×I‰ŠOYYÊVÛ×JJI‰Š	‰Š
ÏHˆŠK
ÏXJNÜ™]\›ˆNÙ[˜Ý[ÛˆYÊK‹‹˜J^Û]Ë‹Y[˜Ý[ÛŠÊ^ØÛÛœÝOXKœ™YXÙJ
KJOO˜JJKJ
JNÜ™]\›ˆJOOŠØØXÚN’žJK˜ØXÚTÚ^™JK\œÙPÛ\ÜÓ˜[YN–^JJKÛÜ[ÙYšY\œÎ–JJK‹‹’JJ_JJJJKÏ]˜ØXÚK™Ù]]˜ØXÚKœÙ][
Ê_NÙ[˜Ý[Ûˆ
J^ØÛÛœÝO[ÊJNÚYŠJ\™]\›ˆNØÛÛœÝJ
KJOOžØÛÛœÝÜ\œÙPÛ\ÜÓ˜[YNÙ]Û\ÜÑÜ›Ý\Y›ËÙ]ÛÛ™›XÝ[™ÐÛ\ÜÑÜ›Ý\YÎ›‹ÛÜ[ÙYšY\œÎœŸOXKV×KÏYKš[J
KœÜ]
žJNÛ]OHˆŽÙ›ÜŠ]Ï\Ë›[™ÝLNØÏLØËOLJ^ØÛÛœÝO\ÖØ×KÚ\Ñ^\›˜[˜K[ÙYšY\œÎK\Ò[\Ü[[ÙYšY\Ž›K˜\ÙPÛ\ÜÓ˜[YNœX^X™TÜÝš^[ÙYšY\”ÜÚ][ÛŽ™O]
JNÚYŠJ^ÚOYJÊK›[™ÝŒÈˆŠÚNšJNØÛÛ[Y_[]OHHYÏ[ÊOÜœÝXœÝš[™Ê
Nœ
NÚYŠYÊ^ÚYŠ^J^ÚOYJÊK›[™ÝŒÈˆŠÚNšJNØÛÛ[Y_ZYŠÏ[Ê
KYÊ^ÚOYJÊK›[™ÝŒÈˆŠÚNšJNØÛÛ[Y_^OHL_XÛÛœÝ\ŠJKš›Ú[ŠŽˆŠK[OÚ
ÈˆHŽšXŠÙÎÚYŠš[˜ÛY\ÊŠJXÛÛ[YNÛœ\Ú
ŠNØÛÛœÝÏ[ŠËJNÙ›ÜŠ]LÝË›[™ÝÊÊÝ
^ØÛÛœÝO]ÖÝNÛœ\Ú
ŠÙJ_ZOYJÊK›[™ÝŒÈˆŠÚNšJ_\™]\›ˆ_JJK
NÜ™]\›ˆŠKŠKŸ\™]\›ˆ[˜Ý[ÛŠ
^Ü™]\›ˆŠ^K˜\J[\™Ý[Y[ÊJ__XÛÛœÝÏYOOžØÛÛœÝOXOO˜VÙW_×NÜ™]\›ˆKš\Õ[YQÙ]\HL_KÙÏK×—ÊÎŠÖ×ËWJŠNŠOÊŠÊWIÚK™ÏK×—

ÎŠÖ×ËWJŠNŠOÊŠÊW
IÚK™ÏK×—
××
ÉËÏK×Š
Ê—
ÊOÊOÊßÛ_Yß
IËÙÏK×
Ê	_Ù[_ÜÙOÝŠÚÚX—_Z[ŸX^
_ß[ŸÛ_[_Ø\Ú^ÛÜJß_ŸZ[ŸX^
J_ŠØ[ßZ[ŸX^Û[\
W
Š×
_Œ	ËYÏK×Š™Ø˜OßÛOßØŸ
ÚÊOÊXŸÚ
JW
Š×
IËÙÏK×Š[œÙ]ÊOËOÊ

ÊO×Ê
ÊVØK^—Jß
WËOÊ

ÊO×Ê
ÊVØK^—Jß
KËYÏK×Š\›[XYÙ_[XYÙK\Ù]Ü›ÜÜËY˜Y_[[Y[
™\X][™ËJOÊ[™X\Ÿ˜YX[ÛÛšXÊKYÜ˜YY[
W
Š×
IËYÏYOOœ™Ë\Ý
JKÏYOOˆHYI‰ˆS[X™\‹š\Ó˜SŠ[X™\ŠJJKÏYOOˆHYI‰“[X™\‹š\Ò[YÙ\Š[X™\ŠJJKYÏYOO™K™[™ÕÚ]
‰HŠI‰œÊKœÛXÙJLJJKÙÏYOO›Ë\Ý
JKÏJ
OOˆL™ÏYOOœÙË\Ý
JI‰ˆZYË\Ý
JK™ÏJ
OOˆLKÙÏYOO˜ÙË\Ý
JK™ÏYOOYË\Ý
JKÙÏYOOˆ^ÊJI‰ˆP™ÊJKÙÏYOO‘ÙÊKË™ÊKÏYOO›ÙË\Ý
JKÙÏYOO‘ÙÊK™Ë™ÊKÙÏYOO‘ÙÊKÙËÊKÏYOO‘ÙÊKÙË™ÊKYÏYOO‘ÙÊKYË™ÊKÏYOO‘ÙÊKYËÙÊK™ÏYOO›™Ë\Ý
JKYÏYOO•ÙÊK™ÊKÏYOO•ÙÊK™ÊK™ÏYOO•ÙÊKÙÊK™ÏYOO•ÙÊKÊKÏYOO•ÙÊKYÊK™ÏYOO•ÙÊKYËL
KÙÏJKK
OOžØÛÛœÝÏ[ÙË™^XÊJNÜ™]\›ˆH[É‰ŠÖÌWOØJÖÌWJN
ÖÌ—JJ_KÙÏJKKHLJOOžØÛÛœÝÏ[™Ë™^XÊJNÜ™]\›ˆH[É‰ŠÖÌWOØJÖÌWJN
_KÙÏYOOˆœÜÚ][ÛˆOOY_œ\˜Ù[YÙHOOYKYÏYOOˆš[XYÙHOOY_\›OOYKÏYOOˆ›[™ÝOOY_œÚ^™HOOY_˜™Ë\Ú^™HOOYK™ÏYOOˆ›[™ÝOOYKÙÏYOOˆ›[X™\ˆOOYK™ÏYOOˆ™˜[Z[K[˜[YHOOYKYÏYOOˆœÚYÝÈOOYK™ÏJÞ[X›ÛÔÝš[™ÕYË

OOžØÛÛœÝO]Ê˜ÛÛÜˆŠKO]Ê™›ÛŠK]Ê^ŠKÏ]Ê™›Û]ÙZYÚŠK]Ê˜XÚÚ[™ÈŠK]Ê›XY[™ÈŠK]Ê˜œ™XZÜÚ[ŠKÏ]Ê˜ÛÛZ[™\ˆŠKO]ÊœÜXÚ[™ÈŠKÏ]Êœ˜Y]\ÈŠKO]ÊœÚYÝÈŠKO]Êš[œÙ]\ÚYÝÈŠK]Ê^\ÚYÝÈŠK]Ê™›Ü\ÚYÝÈŠKO]Ê˜›\ˆŠKÏ]Êœ\œÜXÝ]™HŠK]Ê˜\ÜXÝŠK]Ê™X\ÙHŠK]Ê˜[š[X]HŠKÏJ
OO–È˜Ù[\ˆ‹Ü‹˜›ÝÛH‹›Y‹œšYÚ‹Ü[Y‹›Y]Ü‹Ü\šYÚ‹œšYÚ]Ü‹˜›ÝÛK\šYÚ‹œšYÚX›ÝÛH‹˜›ÝÛK[Y‹›YX›ÝÛH‹™Ë×KJ
OO–Ð™ËËWKÏJ
OO–ÛYË™[‹˜]]È‹‹‹Š
WKÏJ
OO–ÙË››Û™H‹œÝX™ÜšY‹™Ë×KJ
OO–È˜]]È‹ÜÜ[Ž–È™[‹Ë™Ë×_KË™Ë×KÏJ
OO–ÙË˜]]È‹™Ë×KÏJ
OO–È˜]]È‹›Z[ˆ‹›X^‹™œˆ‹™Ë×KJ
OO–È˜]]È‹‹‹Š
WKOJ
OO–ÛYË˜]]È‹™[‹™È‹™š‹›È‹›š‹œÝÈ‹œÝš‹›Z[ˆ‹›X^‹™š]‹‹‹Š
WKJ
OO–ÙK™Ë×KJ
OO–È˜Ù[\ˆ‹Ü‹˜›ÝÛH‹›Y‹œšYÚ‹Ü[Y‹›Y]Ü‹Ü\šYÚ‹œšYÚ]Ü‹˜›ÝÛK\šYÚ‹œšYÚX›ÝÛH‹˜›ÝÛK[Y‹›YX›ÝÛH‹™ËËÜÜÚ][ÛŽ–Ð™Ë×_WKOJ
OO–È˜]]È‹˜ÛÝ™\ˆ‹˜ÛÛZ[ˆ‹™ËÙËÜÚ^™N–Ð™Ë×_WKJ
OO–ÞYËYËÙ×KJ
OO–Èˆ‹››Û™H‹™[‹Ë™Ë×KJ
OO–Èˆ‹ËYËÙ×KJ
OO–ÜËYË™Ë×KJ
OO–Èˆ‹››Û™H‹K™Ë×KÏJ
OO–È››Û™H‹Ë™Ë×KÏJ
OO–È››Û™H‹Ë™Ë×KÏJ
OO–ÜË™Ë×KOJ
OO–ÛYË™[‹‹‹Š
WNÜ™]\›žØØXÚTÚ^™NL[YNžØ[š[X]N–ÈœÜ[ˆ‹œ[™È‹œ[ÙH‹˜›Ý[˜ÙH—K\ÜXÝ–ÈšY[È—K›\Ž–ÙÙ×Kœ™XZÜÚ[–ÙÙ×KÛÛÜŽ–Ú×KÛÛZ[™\Ž–ÙÙ×K™›Ü\ÚYÝÈŽ–ÙÙ×KX\ÙN–Èš[ˆ‹›Ý]‹š[‹[Ý]—K›Û–×Ù×K™›Û]ÙZYÚŽ–È[ˆ‹™^˜[YÚ‹›YÚ‹››Ü›X[‹›YY][H‹œÙ[ZX›Û‹˜›Û‹™^˜X›Û‹˜›XÚÈ—Kš[œÙ]\ÚYÝÈŽ–ÙÙ×KXY[™Î–È››Û™H‹YÚ‹œÛYÈ‹››Ü›X[‹œ™[^Y‹›ÛÜÙH—K\œÜXÝ]™N–È™˜[X]XÈ‹›™X\ˆ‹››Ü›X[‹›ZY˜[™ÙH‹™\Ý[‹››Û™H—K˜Y]\Î–ÙÙ×KÚYÝÎ–ÙÙ×KÜXÚ[™Î–Èœ‹×K^–ÙÙ×K^\ÚYÝÈŽ–ÙÙ×K˜XÚÚ[™Î–ÈYÚ\ˆ‹YÚ‹››Ü›X[‹ÚYH‹ÚY\ˆ‹ÚY\Ý—_KÛ\ÜÑÜ›Ý\ÎžØ\ÜXÝ–ÞØ\ÜXÝ–È˜]]È‹œÜ]X\™H‹YËË™Ë_WKÛÛZ[™\Ž–È˜ÛÛZ[™\ˆ—KÛÛ[[œÎ–ÞØÛÛ[[œÎ–ÜËË™Ë×_WK˜œ™XZËXY\ˆŽ–ÞÈ˜œ™XZËXY\ˆŽ–È˜]]È‹˜]›ÚY‹˜[‹˜]›ÚY\YÙH‹œYÙH‹›Y‹œšYÚ‹˜ÛÛ[[ˆ—_WK˜œ™XZËX™Y›Ü™HŽ–ÞÈ˜œ™XZËX™Y›Ü™HŽ–È˜]]È‹˜]›ÚY‹˜[‹˜]›ÚY\YÙH‹œYÙH‹›Y‹œšYÚ‹˜ÛÛ[[ˆ—_WK˜œ™XZËZ[œÚYHŽ–ÞÈ˜œ™XZËZ[œÚYHŽ–È˜]]È‹˜]›ÚY‹˜]›ÚY\YÙH‹˜]›ÚYXÛÛ[[ˆ—_WK˜›ÞYXÛÜ˜][ÛˆŽ–ÞÈ˜›ÞYXÛÜ˜][ÛˆŽ–ÈœÛXÙH‹˜ÛÛ™H—_WK›Þ–ÞØ›Þ–È˜›Ü™\ˆ‹˜ÛÛ[—_WK\Ü^N–È˜›ØÚÈ‹š[›[™KX›ØÚÈ‹š[›[™H‹™›^‹š[›[™KY›^‹X›H‹š[›[™K]X›H‹X›KXØ\[Ûˆ‹X›KXÙ[‹X›KXÛÛ[[ˆ‹X›KXÛÛ[[‹YÜ›Ý\‹X›KY›ÛÝ\‹YÜ›Ý\‹X›KZXY\‹YÜ›Ý\‹X›K\›ÝËYÜ›Ý\‹X›K\›ÝÈ‹™›ÝË\›ÛÝ‹™ÜšY‹š[›[™KYÜšY‹˜ÛÛ[È‹›\ÝZ][H‹šY[ˆ—KÜŽ–ÈœÜ‹[Û›H‹››Ý\Ü‹[Û›H—K›Ø]–ÞÙ›Ø]–ÈœšYÚ‹›Y‹››Û™H‹œÝ\‹™[™—_WKÛX\Ž–ÞØÛX\Ž–È›Y‹œšYÚ‹˜›Ý‹››Û™H‹œÝ\‹™[™—_WK\ÛÛ][ÛŽ–Èš\ÛÛ]H‹š\ÛÛ][Û‹X]]È—K›Øš™XÝYš]Ž–ÞÛØš™XÝ–È˜ÛÛZ[ˆ‹˜ÛÝ™\ˆ‹™š[‹››Û™H‹œØØ[KYÝÛˆ—_WK›Øš™XÝ\ÜÚ][ÛˆŽ–ÞÛØš™XÝÊ
_WKÝ™\™›ÝÎ–ÞÛÝ™\™›ÝÎ–È˜]]È‹šY[ˆ‹˜Û\‹š\ÚX›H‹œØÜ›Û—_WK›Ý™\™›ÝË^Ž–ÞÈ›Ý™\™›ÝË^Ž–È˜]]È‹šY[ˆ‹˜Û\‹š\ÚX›H‹œØÜ›Û—_WK›Ý™\™›ÝË^HŽ–ÞÈ›Ý™\™›ÝË^HŽ–È˜]]È‹šY[ˆ‹˜Û\‹š\ÚX›H‹œØÜ›Û—_WKÝ™\œØÜ›Û–ÞÛÝ™\œØÜ›Û–È˜]]È‹˜ÛÛZ[ˆ‹››Û™H—_WK›Ý™\œØÜ›Û^Ž–ÞÈ›Ý™\œØÜ›Û^Ž–È˜]]È‹˜ÛÛZ[ˆ‹››Û™H—_WK›Ý™\œØÜ›Û^HŽ–ÞÈ›Ý™\œØÜ›Û^HŽ–È˜]]È‹˜ÛÛZ[ˆ‹››Û™H—_WKÜÚ][ÛŽ–ÈœÝ]XÈ‹™š^Y‹˜XœÛÛ]H‹œ™[]]™H‹œÝXÚÞH—K[œÙ]–ÞÚ[œÙ]—Ê
_WKš[œÙ]^Ž–ÞÈš[œÙ]^Ž—Ê
_WKš[œÙ]^HŽ–ÞÈš[œÙ]^HŽ—Ê
_WKÝ\–ÞÜÝ\—Ê
_WK[™–ÞÙ[™—Ê
_WKÜ–ÞÝÜ—Ê
_WKšYÚ–ÞÜšYÚ—Ê
_WK›ÝÛN–ÞØ›ÝÛN—Ê
_WKY–ÞÛY—Ê
_WKš\ÚXš[]N–Èš\ÚX›H‹š[š\ÚX›H‹˜ÛÛ\ÙH—KŽ–ÞÞŽ–ÙË˜]]È‹™Ë×_WK˜\Ú\Î–ÞØ˜\Ú\Î–ÛYË™[‹˜]]È‹Ë‹‹Š
W_WK™›^Y\™XÝ[ÛˆŽ–ÞÙ›^–Èœ›ÝÈ‹œ›ÝË\™]™\œÙH‹˜ÛÛ‹˜ÛÛ\™]™\œÙH—_WK™›^]Ü˜\Ž–ÞÙ›^–È››ÝÜ˜\‹Ü˜\‹Ü˜\\™]™\œÙH—_WK›^–ÞÙ›^–ÜËYË˜]]È‹š[š]X[‹››Û™H‹×_WKÜ›ÝÎ–ÞÙÜ›ÝÎ–Èˆ‹Ë™Ë×_WKÚš[šÎ–ÞÜÚš[šÎ–Èˆ‹Ë™Ë×_WKÜ™\Ž–ÞÛÜ™\Ž–ÙË™š\œÝ‹›\Ý‹››Û™H‹™Ë×_WK™ÜšYXÛÛÈŽ–ÞÈ™ÜšYXÛÛÈŽÊ
_WK˜ÛÛ\Ý\Y[™Ž–ÞØÛÛž

_WK˜ÛÛ\Ý\Ž–ÞÈ˜ÛÛ\Ý\ŽšÊ
_WK˜ÛÛY[™Ž–ÞÈ˜ÛÛY[™ŽšÊ
_WK™ÜšY\›ÝÜÈŽ–ÞÈ™ÜšY\›ÝÜÈŽÊ
_WKœ›ÝË\Ý\Y[™Ž–ÞÜ›ÝÎž

_WKœ›ÝË\Ý\Ž–ÞÈœ›ÝË\Ý\ŽšÊ
_WKœ›ÝËY[™Ž–ÞÈœ›ÝËY[™ŽšÊ
_WK™ÜšYY›ÝÈŽ–ÞÈ™ÜšYY›ÝÈŽ–Èœ›ÝÈ‹˜ÛÛ‹™[œÙH‹œ›ÝËY[œÙH‹˜ÛÛY[œÙH—_WK˜]]ËXÛÛÈŽ–ÞÈ˜]]ËXÛÛÈŽ”Ê
_WK˜]]Ë\›ÝÜÈŽ–ÞÈ˜]]Ë\›ÝÜÈŽ”Ê
_WKØ\–ÞÙØ\Š
_WK™Ø\^Ž–ÞÈ™Ø\^ŽŠ
_WK™Ø\^HŽ–ÞÈ™Ø\^HŽŠ
_WKš\ÝYžKXÛÛ[Ž–ÞÚ\ÝYžN–ÈœÝ\‹™[™‹˜Ù[\ˆ‹˜™]ÙY[ˆ‹˜\›Ý[™‹™]™[›H‹œÝ™]Ú‹˜˜\Ù[[™H‹˜Ù[\‹\ØY™H‹™[™\ØY™H‹››Ü›X[—_WKš\ÝYžKZ][\ÈŽ–ÞÈš\ÝYžKZ][\ÈŽ–ÈœÝ\‹™[™‹˜Ù[\ˆ‹œÝ™]Ú‹˜Ù[\‹\ØY™H‹™[™\ØY™H‹››Ü›X[—_WKš\ÝYžK\Ù[ˆŽ–ÞÈš\ÝYžK\Ù[ˆŽ–È˜]]È‹œÝ\‹™[™‹˜Ù[\ˆ‹œÝ™]Ú‹˜Ù[\‹\ØY™H‹™[™\ØY™H—_WK˜[YÛ‹XÛÛ[Ž–ÞØÛÛ[–È››Ü›X[‹œÝ\‹™[™‹˜Ù[\ˆ‹˜™]ÙY[ˆ‹˜\›Ý[™‹™]™[›H‹œÝ™]Ú‹˜˜\Ù[[™H‹˜Ù[\‹\ØY™H‹™[™\ØY™H—_WK˜[YÛ‹Z][\ÈŽ–ÞÚ][\Î–ÈœÝ\‹™[™‹˜Ù[\ˆ‹œÝ™]Ú‹˜Ù[\‹\ØY™H‹™[™\ØY™H‹Ø˜\Ù[[™N–Èˆ‹›\Ý—_W_WK˜[YÛ‹\Ù[ˆŽ–ÞÜÙ[Ž–È˜]]È‹œÝ\‹™[™‹˜Ù[\ˆ‹œÝ™]Ú‹˜Ù[\‹\ØY™H‹™[™\ØY™H‹Ø˜\Ù[[™N–Èˆ‹›\Ý—_W_WKœXÙKXÛÛ[Ž–ÞÈœXÙKXÛÛ[Ž–ÈœÝ\‹™[™‹˜Ù[\ˆ‹˜™]ÙY[ˆ‹˜\›Ý[™‹™]™[›H‹œÝ™]Ú‹˜˜\Ù[[™H‹˜Ù[\‹\ØY™H‹™[™\ØY™H—_WKœXÙKZ][\ÈŽ–ÞÈœXÙKZ][\ÈŽ–ÈœÝ\‹™[™‹˜Ù[\ˆ‹œÝ™]Ú‹˜Ù[\‹\ØY™H‹™[™\ØY™H‹˜˜\Ù[[™H—_WKœXÙK\Ù[ˆŽ–ÞÈœXÙK\Ù[ˆŽ–È˜]]È‹œÝ\‹™[™‹˜Ù[\ˆ‹œÝ™]Ú‹˜Ù[\‹\ØY™H‹™[™\ØY™H—_WK–ÞÜŠ
_WK–ÞÜŠ
_WKN–ÞÜNŠ
_WKÎ–ÞÜÎŠ
_WKN–ÞÜNŠ
_WK–ÞÜŠ
_WKŽ–ÞÜŽŠ
_WKŽ–ÞÜŽŠ
_WK–ÞÜŠ
_WKN–ÞÛN“

_WK^–ÞÛ^“

_WK^N–ÞÛ^N“

_WK\Î–ÞÛ\Î“

_WKYN–ÞÛYN“

_WK]–ÞÛ]“

_WK\Ž–ÞÛ\Ž“

_WKXŽ–ÞÛXŽ“

_WK[–ÞÛ[“

_WKœÜXÙK^Ž–ÞÈœÜXÙK^ŽŠ
_WKœÜXÙK^\™]™\œÙHŽ–ÈœÜXÙK^\™]™\œÙH—KœÜXÙK^HŽ–ÞÈœÜXÙK^HŽŠ
_WKœÜXÙK^K\™]™\œÙHŽ–ÈœÜXÙK^K\™]™\œÙH—KÚ^™N–ÞÜÚ^™NJ
_WKÎ–ÞÝÎ–ÜËœØÜ™Y[ˆ‹‹‹J
W_WK›Z[‹]ÈŽ–ÞÈ›Z[‹]ÈŽ–ÜËœØÜ™Y[ˆ‹››Û™H‹‹‹J
W_WK›X^]ÈŽ–ÞÈ›X^]ÈŽ–ÜËœØÜ™Y[ˆ‹››Û™H‹œ›ÜÙH‹ÜØÜ™Y[Ž–Û_K‹‹J
W_WK–ÞÚ–ÈœØÜ™Y[ˆ‹‹‹J
W_WK›Z[‹ZŽ–ÞÈ›Z[‹ZŽ–ÈœØÜ™Y[ˆ‹››Û™H‹‹‹J
W_WK›X^ZŽ–ÞÈ›X^ZŽ–ÈœØÜ™Y[ˆ‹‹‹J
W_WK™›Û\Ú^™HŽ–ÞÝ^–È˜˜\ÙH‹YËÙ×_WK™›Û\Û[ÛÝ[™ÈŽ–È˜[X[X\ÙY‹œÝXœ^[X[X[X\ÙY—K™›Û\Ý[HŽ–Èš][XÈ‹››ÝZ][XÈ—K™›Û]ÙZYÚŽ–ÞÙ›Û–ÛË™ËÙ×_WK™›Û\Ý™]ÚŽ–ÞÈ™›Û\Ý™]ÚŽ–È[˜KXÛÛ™[œÙY‹™^˜KXÛÛ™[œÙY‹˜ÛÛ™[œÙY‹œÙ[ZKXÛÛ™[œÙY‹››Ü›X[‹œÙ[ZKY^[™Y‹™^[™Y‹™^˜KY^[™Y‹[˜KY^[™Y‹YË×_WK™›ÛY˜[Z[HŽ–ÞÙ›Û–ÕËËW_WK™›‹[›Ü›X[Ž–È››Ü›X[[[\È—K™›‹[Ü™[˜[Ž–È›Ü™[˜[—K™›‹\Û\ÚY^™\›ÈŽ–ÈœÛ\ÚY^™\›È—K™›‹YšYÝ\™HŽ–È›[š[™Ë[[\È‹›ÛÝ[K[[\È—K™›‹\ÜXÚ[™ÈŽ–Èœ›ÜÜ[Û˜[[[\È‹X[\‹[[\È—K™›‹Yœ˜XÝ[ÛˆŽ–È™XYÛÛ˜[Yœ˜XÝ[ÛœÈ‹œÝXÚÙYYœ˜XÝ[ÛœÈ—K˜XÚÚ[™Î–ÞÝ˜XÚÚ[™Î–Û‹™Ë×_WK›[™KXÛ[\Ž–ÞÈ›[™KXÛ[\Ž–ÜË››Û™H‹™ËÙ×_WKXY[™Î–ÞÛXY[™Î–Ü‹‹‹Š
W_WK›\ÝZ[XYÙHŽ–ÞÈ›\ÝZ[XYÙHŽ–È››Û™H‹™Ë×_WK›\Ý\Ý[K\ÜÚ][ÛˆŽ–ÞÛ\Ý–Èš[œÚYH‹›Ý]ÚYH—_WK›\Ý\Ý[K]\HŽ–ÞÛ\Ý–È™\ØÈ‹™XÚ[X[‹››Û™H‹™Ë×_WK^X[YÛ›Y[Ž–ÞÝ^–È›Y‹˜Ù[\ˆ‹œšYÚ‹š\ÝYžH‹œÝ\‹™[™—_WKœXÙZÛ\‹XÛÛÜˆŽ–ÞÜXÙZÛ\Ž‘

_WK^XÛÛÜˆŽ–ÞÝ^‘

_WK^YXÛÜ˜][ÛˆŽ–È[™\›[™H‹›Ý™\›[™H‹›[™K]›ÝYÚ‹››Ë][™\›[™H—K^YXÛÜ˜][Û‹\Ý[HŽ–ÞÙXÛÜ˜][ÛŽ–ÈœÛÛY‹™\ÚY‹™ÝY‹™ÝX›H‹Ø]žH—_WK^YXÛÜ˜][Û‹]XÚÛ™\ÜÈŽ–ÞÙXÛÜ˜][ÛŽ–ÜË™œ›ÛKY›Û‹˜]]È‹™ËÙ×_WK^YXÛÜ˜][Û‹XÛÛÜˆŽ–ÞÙXÛÜ˜][ÛŽ‘

_WK[™\›[™K[Ù™œÙ]Ž–ÞÈ[™\›[™K[Ù™œÙ]Ž–ÜË˜]]È‹™Ë×_WK^]˜[œÙ›Ü›HŽ–È\\˜Ø\ÙH‹›ÝÙ\˜Ø\ÙH‹˜Ø\][^™H‹››Ü›X[XØ\ÙH—K^[Ý™\™›ÝÈŽ–È[˜Ø]H‹^Y[\Ú\È‹^XÛ\—K^]Ü˜\Ž–ÞÝ^–ÈÜ˜\‹››ÝÜ˜\‹˜˜[[˜ÙH‹œ™]H—_WK[™[–ÞÚ[™[Š
_WK™\XØ[X[YÛˆŽ–ÞØ[YÛŽ–È˜˜\Ù[[™H‹Ü‹›ZYH‹˜›ÝÛH‹^]Ü‹^X›ÝÛH‹œÝXˆ‹œÝ\\ˆ‹™Ë×_WKÚ]\ÜXÙN–ÞÝÚ]\ÜXÙN–È››Ü›X[‹››ÝÜ˜\‹œ™H‹œ™K[[™H‹œ™K]Ü˜\‹˜œ™XZË\ÜXÙ\È—_WKœ™XZÎ–ÞØœ™XZÎ–È››Ü›X[‹ÛÜ™È‹˜[‹šÙY\—_WKÜ˜\–ÞÝÜ˜\–È˜œ™XZË]ÛÜ™‹˜[ž]Ú\™H‹››Ü›X[—_WK\[œÎ–ÞÚ\[œÎ–È››Û™H‹›X[X[‹˜]]È—_WKÛÛ[–ÞØÛÛ[–È››Û™H‹™Ë×_WK˜™ËX]XÚY[Ž–ÞØ™Î–È™š^Y‹›ØØ[‹œØÜ›Û—_WK˜™ËXÛ\Ž–ÞÈ˜™ËXÛ\Ž–È˜›Ü™\ˆ‹œY[™È‹˜ÛÛ[‹^—_WK˜™Ë[ÜšYÚ[ˆŽ–ÞÈ˜™Ë[ÜšYÚ[ˆŽ–È˜›Ü™\ˆ‹œY[™È‹˜ÛÛ[—_WK˜™Ë\ÜÚ][ÛˆŽ–ÞØ™ÎŠ
_WK˜™Ë\™\X]Ž–ÞØ™Î–È››Ë\™\X]‹Ü™\X]–Èˆ‹ž‹žH‹œÜXÙH‹œ›Ý[™—_W_WK˜™Ë\Ú^™HŽ–ÞØ™Î“J
_WK˜™ËZ[XYÙHŽ–ÞØ™Î–È››Û™H‹Û[™X\Ž–ÞÝÎ–È‹ˆ‹œˆ‹˜œˆ‹˜ˆ‹˜›‹›‹—_KË™Ë×K˜YX[–Èˆ‹™Ë×KÛÛšXÎ–ÙË™Ë×_KËY×_WK˜™ËXÛÛÜˆŽ–ÞØ™Î‘

_WK™Ü˜YY[Yœ›ÛK\ÜÈŽ–ÞÙœ›ÛN•

_WK™Ü˜YY[]šXK\ÜÈŽ–ÞÝšXN•

_WK™Ü˜YY[]Ë\ÜÈŽ–ÞÝÎ•

_WK™Ü˜YY[Yœ›ÛHŽ–ÞÙœ›ÛN‘

_WK™Ü˜YY[]šXHŽ–ÞÝšXN‘

_WK™Ü˜YY[]ÈŽ–ÞÝÎ‘

_WK›Ý[™Y–ÞÜ›Ý[™Y•Š
_WKœ›Ý[™Y\ÈŽ–ÞÈœ›Ý[™Y\ÈŽ•Š
_WKœ›Ý[™YYHŽ–ÞÈœ›Ý[™YYHŽ•Š
_WKœ›Ý[™Y]Ž–ÞÈœ›Ý[™Y]Ž•Š
_WKœ›Ý[™Y\ˆŽ–ÞÈœ›Ý[™Y\ˆŽ•Š
_WKœ›Ý[™YXˆŽ–ÞÈœ›Ý[™YXˆŽ•Š
_WKœ›Ý[™Y[Ž–ÞÈœ›Ý[™Y[Ž•Š
_WKœ›Ý[™Y\ÜÈŽ–ÞÈœ›Ý[™Y\ÜÈŽ•Š
_WKœ›Ý[™Y\ÙHŽ–ÞÈœ›Ý[™Y\ÙHŽ•Š
_WKœ›Ý[™YYYHŽ–ÞÈœ›Ý[™YYYHŽ•Š
_WKœ›Ý[™YY\ÈŽ–ÞÈœ›Ý[™YY\ÈŽ•Š
_WKœ›Ý[™Y]Ž–ÞÈœ›Ý[™Y]Ž•Š
_WKœ›Ý[™Y]ˆŽ–ÞÈœ›Ý[™Y]ˆŽ•Š
_WKœ›Ý[™YXœˆŽ–ÞÈœ›Ý[™YXœˆŽ•Š
_WKœ›Ý[™YX›Ž–ÞÈœ›Ý[™YX›Ž•Š
_WK˜›Ü™\‹]ÈŽ–ÞØ›Ü™\Ž”Š
_WK˜›Ü™\‹]Ë^Ž–ÞÈ˜›Ü™\‹^Ž”Š
_WK˜›Ü™\‹]Ë^HŽ–ÞÈ˜›Ü™\‹^HŽ”Š
_WK˜›Ü™\‹]Ë\ÈŽ–ÞÈ˜›Ü™\‹\ÈŽ”Š
_WK˜›Ü™\‹]ËYHŽ–ÞÈ˜›Ü™\‹YHŽ”Š
_WK˜›Ü™\‹]Ë]Ž–ÞÈ˜›Ü™\‹]Ž”Š
_WK˜›Ü™\‹]Ë\ˆŽ–ÞÈ˜›Ü™\‹\ˆŽ”Š
_WK˜›Ü™\‹]ËXˆŽ–ÞÈ˜›Ü™\‹XˆŽ”Š
_WK˜›Ü™\‹]Ë[Ž–ÞÈ˜›Ü™\‹[Ž”Š
_WK™]šYK^Ž–ÞÈ™]šYK^Ž”Š
_WK™]šYK^\™]™\œÙHŽ–È™]šYK^\™]™\œÙH—K™]šYK^HŽ–ÞÈ™]šYK^HŽ”Š
_WK™]šYK^K\™]™\œÙHŽ–È™]šYK^K\™]™\œÙH—K˜›Ü™\‹\Ý[HŽ–ÞØ›Ü™\Ž–ÈœÛÛY‹™\ÚY‹™ÝY‹™ÝX›H‹šY[ˆ‹››Û™H—_WK™]šYK\Ý[HŽ–ÞÙ]šYN–ÈœÛÛY‹™\ÚY‹™ÝY‹™ÝX›H‹šY[ˆ‹››Û™H—_WK˜›Ü™\‹XÛÛÜˆŽ–ÞØ›Ü™\Ž‘

_WK˜›Ü™\‹XÛÛÜ‹^Ž–ÞÈ˜›Ü™\‹^Ž‘

_WK˜›Ü™\‹XÛÛÜ‹^HŽ–ÞÈ˜›Ü™\‹^HŽ‘

_WK˜›Ü™\‹XÛÛÜ‹\ÈŽ–ÞÈ˜›Ü™\‹\ÈŽ‘

_WK˜›Ü™\‹XÛÛÜ‹YHŽ–ÞÈ˜›Ü™\‹YHŽ‘

_WK˜›Ü™\‹XÛÛÜ‹]Ž–ÞÈ˜›Ü™\‹]Ž‘

_WK˜›Ü™\‹XÛÛÜ‹\ˆŽ–ÞÈ˜›Ü™\‹\ˆŽ‘

_WK˜›Ü™\‹XÛÛÜ‹XˆŽ–ÞÈ˜›Ü™\‹XˆŽ‘

_WK˜›Ü™\‹XÛÛÜ‹[Ž–ÞÈ˜›Ü™\‹[Ž‘

_WK™]šYKXÛÛÜˆŽ–ÞÙ]šYN‘

_WK›Ý][™K\Ý[HŽ–ÞÛÝ][™N–ÈœÛÛY‹™\ÚY‹™ÝY‹™ÝX›H‹››Û™H‹šY[ˆ—_WK›Ý][™K[Ù™œÙ]Ž–ÞÈ›Ý][™K[Ù™œÙ]Ž–ÜË™Ë×_WK›Ý][™K]ÈŽ–ÞÛÝ][™N–Èˆ‹ËYËÙ×_WK›Ý][™KXÛÛÜˆŽ–ÞÛÝ][™N‘

_WKÚYÝÎ–ÞÜÚYÝÎ–Èˆ‹››Û™H‹K™Ë×_WKœÚYÝËXÛÛÜˆŽ–ÞÜÚYÝÎ‘

_WKš[œÙ]\ÚYÝÈŽ–ÞÈš[œÙ]\ÚYÝÈŽ–È››Û™H‹K™Ë×_WKš[œÙ]\ÚYÝËXÛÛÜˆŽ–ÞÈš[œÙ]\ÚYÝÈŽ‘

_WKœš[™Ë]ÈŽ–ÞÜš[™Î”Š
_WKœš[™Ë]ËZ[œÙ]Ž–Èœš[™ËZ[œÙ]—Kœš[™ËXÛÛÜˆŽ–ÞÜš[™Î‘

_WKœš[™Ë[Ù™œÙ]]ÈŽ–ÞÈœš[™Ë[Ù™œÙ]Ž–ÜËÙ×_WKœš[™Ë[Ù™œÙ]XÛÛÜˆŽ–ÞÈœš[™Ë[Ù™œÙ]Ž‘

_WKš[œÙ]\š[™Ë]ÈŽ–ÞÈš[œÙ]\š[™ÈŽ”Š
_WKš[œÙ]\š[™ËXÛÛÜˆŽ–ÞÈš[œÙ]\š[™ÈŽ‘

_WK^\ÚYÝÈŽ–ÞÈ^\ÚYÝÈŽ–È››Û™H‹™Ë×_WK^\ÚYÝËXÛÛÜˆŽ–ÞÈ^\ÚYÝÈŽ‘

_WKÜXÚ]N–ÞÛÜXÚ]N–ÜË™Ë×_WK›Z^X›[™Ž–ÞÈ›Z^X›[™Ž–È››Ü›X[‹›][\H‹œØÜ™Y[ˆ‹›Ý™\›^H‹™\šÙ[ˆ‹›YÚ[ˆ‹˜ÛÛÜ‹YÙÙH‹˜ÛÛÜ‹X\›ˆ‹š\™[YÚ‹œÛÙ[YÚ‹™Y™™\™[˜ÙH‹™^Û\Ú[Ûˆ‹šYH‹œØ]\˜][Ûˆ‹˜ÛÛÜˆ‹›[Z[›ÜÚ]H‹œ\ËY\šÙ\ˆ‹œ\Ë[YÚ\ˆ—_WK˜™ËX›[™Ž–ÞÈ˜™ËX›[™Ž–È››Ü›X[‹›][\H‹œØÜ™Y[ˆ‹›Ý™\›^H‹™\šÙ[ˆ‹›YÚ[ˆ‹˜ÛÛÜ‹YÙÙH‹˜ÛÛÜ‹X\›ˆ‹š\™[YÚ‹œÛÙ[YÚ‹™Y™™\™[˜ÙH‹™^Û\Ú[Ûˆ‹šYH‹œØ]\˜][Ûˆ‹˜ÛÛÜˆ‹›[Z[›ÜÚ]H—_WK›X\ÚËXÛ\Ž–ÞÈ›X\ÚËXÛ\Ž–È˜›Ü™\ˆ‹œY[™È‹˜ÛÛ[‹™š[‹œÝ›ÚÙH‹šY]È—_K›X\ÚË[›ËXÛ\—K›X\ÚËXÛÛ\ÜÚ]HŽ–ÞÛX\ÚÎ–È˜Y‹œÝX˜XÝ‹š[\œÙXÝ‹™^ÛYH—_WK›X\ÚËZ[XYÙK[[™X\‹\ÜÈŽ–ÞÈ›X\ÚË[[™X\ˆŽ–Ü×_WK›X\ÚËZ[XYÙK[[™X\‹Yœ›ÛK\ÜÈŽ–ÞÈ›X\ÚË[[™X\‹Yœ›ÛHŽ”

_WK›X\ÚËZ[XYÙK[[™X\‹]Ë\ÜÈŽ–ÞÈ›X\ÚË[[™X\‹]ÈŽ”

_WK›X\ÚËZ[XYÙK[[™X\‹Yœ›ÛKXÛÛÜˆŽ–ÞÈ›X\ÚË[[™X\‹Yœ›ÛHŽ‘

_WK›X\ÚËZ[XYÙK[[™X\‹]ËXÛÛÜˆŽ–ÞÈ›X\ÚË[[™X\‹]ÈŽ‘

_WK›X\ÚËZ[XYÙK]Yœ›ÛK\ÜÈŽ–ÞÈ›X\ÚË]Yœ›ÛHŽ”

_WK›X\ÚËZ[XYÙK]]Ë\ÜÈŽ–ÞÈ›X\ÚË]]ÈŽ”

_WK›X\ÚËZ[XYÙK]Yœ›ÛKXÛÛÜˆŽ–ÞÈ›X\ÚË]Yœ›ÛHŽ‘

_WK›X\ÚËZ[XYÙK]]ËXÛÛÜˆŽ–ÞÈ›X\ÚË]]ÈŽ‘

_WK›X\ÚËZ[XYÙK\‹Yœ›ÛK\ÜÈŽ–ÞÈ›X\ÚË\‹Yœ›ÛHŽ”

_WK›X\ÚËZ[XYÙK\‹]Ë\ÜÈŽ–ÞÈ›X\ÚË\‹]ÈŽ”

_WK›X\ÚËZ[XYÙK\‹Yœ›ÛKXÛÛÜˆŽ–ÞÈ›X\ÚË\‹Yœ›ÛHŽ‘

_WK›X\ÚËZ[XYÙK\‹]ËXÛÛÜˆŽ–ÞÈ›X\ÚË\‹]ÈŽ‘

_WK›X\ÚËZ[XYÙKX‹Yœ›ÛK\ÜÈŽ–ÞÈ›X\ÚËX‹Yœ›ÛHŽ”

_WK›X\ÚËZ[XYÙKX‹]Ë\ÜÈŽ–ÞÈ›X\ÚËX‹]ÈŽ”

_WK›X\ÚËZ[XYÙKX‹Yœ›ÛKXÛÛÜˆŽ–ÞÈ›X\ÚËX‹Yœ›ÛHŽ‘

_WK›X\ÚËZ[XYÙKX‹]ËXÛÛÜˆŽ–ÞÈ›X\ÚËX‹]ÈŽ‘

_WK›X\ÚËZ[XYÙK[Yœ›ÛK\ÜÈŽ–ÞÈ›X\ÚË[Yœ›ÛHŽ”

_WK›X\ÚËZ[XYÙK[]Ë\ÜÈŽ–ÞÈ›X\ÚË[]ÈŽ”

_WK›X\ÚËZ[XYÙK[Yœ›ÛKXÛÛÜˆŽ–ÞÈ›X\ÚË[Yœ›ÛHŽ‘

_WK›X\ÚËZ[XYÙK[]ËXÛÛÜˆŽ–ÞÈ›X\ÚË[]ÈŽ‘

_WK›X\ÚËZ[XYÙK^Yœ›ÛK\ÜÈŽ–ÞÈ›X\ÚË^Yœ›ÛHŽ”

_WK›X\ÚËZ[XYÙK^]Ë\ÜÈŽ–ÞÈ›X\ÚË^]ÈŽ”

_WK›X\ÚËZ[XYÙK^Yœ›ÛKXÛÛÜˆŽ–ÞÈ›X\ÚË^Yœ›ÛHŽ‘

_WK›X\ÚËZ[XYÙK^]ËXÛÛÜˆŽ–ÞÈ›X\ÚË^]ÈŽ‘

_WK›X\ÚËZ[XYÙK^KYœ›ÛK\ÜÈŽ–ÞÈ›X\ÚË^KYœ›ÛHŽ”

_WK›X\ÚËZ[XYÙK^K]Ë\ÜÈŽ–ÞÈ›X\ÚË^K]ÈŽ”

_WK›X\ÚËZ[XYÙK^KYœ›ÛKXÛÛÜˆŽ–ÞÈ›X\ÚË^KYœ›ÛHŽ‘

_WK›X\ÚËZ[XYÙK^K]ËXÛÛÜˆŽ–ÞÈ›X\ÚË^K]ÈŽ‘

_WK›X\ÚËZ[XYÙK\˜YX[Ž–ÞÈ›X\ÚË\˜YX[Ž–Ð™Ë×_WK›X\ÚËZ[XYÙK\˜YX[Yœ›ÛK\ÜÈŽ–ÞÈ›X\ÚË\˜YX[Yœ›ÛHŽ”

_WK›X\ÚËZ[XYÙK\˜YX[]Ë\ÜÈŽ–ÞÈ›X\ÚË\˜YX[]ÈŽ”

_WK›X\ÚËZ[XYÙK\˜YX[Yœ›ÛKXÛÛÜˆŽ–ÞÈ›X\ÚË\˜YX[Yœ›ÛHŽ‘

_WK›X\ÚËZ[XYÙK\˜YX[]ËXÛÛÜˆŽ–ÞÈ›X\ÚË\˜YX[]ÈŽ‘

_WK›X\ÚËZ[XYÙK\˜YX[\Ú\HŽ–ÞÈ›X\ÚË\˜YX[Ž–È˜Ú\˜ÛH‹™[\ÙH—_WK›X\ÚËZ[XYÙK\˜YX[\Ú^™HŽ–ÞÈ›X\ÚË\˜YX[Ž–ÞØÛÜÙ\Ý–ÈœÚYH‹˜ÛÜ›™\ˆ—K˜\\Ý–ÈœÚYH‹˜ÛÜ›™\ˆ—_W_WK›X\ÚËZ[XYÙK\˜YX[\ÜÈŽ–ÞÈ›X\ÚË\˜YX[X]Ž–È˜Ù[\ˆ‹Ü‹˜›ÝÛH‹›Y‹œšYÚ‹Ü[Y‹›Y]Ü‹Ü\šYÚ‹œšYÚ]Ü‹˜›ÝÛK\šYÚ‹œšYÚX›ÝÛH‹˜›ÝÛK[Y‹›YX›ÝÛH—_WK›X\ÚËZ[XYÙKXÛÛšXË\ÜÈŽ–ÞÈ›X\ÚËXÛÛšXÈŽ–Ü×_WK›X\ÚËZ[XYÙKXÛÛšXËYœ›ÛK\ÜÈŽ–ÞÈ›X\ÚËXÛÛšXËYœ›ÛHŽ”

_WK›X\ÚËZ[XYÙKXÛÛšXË]Ë\ÜÈŽ–ÞÈ›X\ÚËXÛÛšXË]ÈŽ”

_WK›X\ÚËZ[XYÙKXÛÛšXËYœ›ÛKXÛÛÜˆŽ–ÞÈ›X\ÚËXÛÛšXËYœ›ÛHŽ‘

_WK›X\ÚËZ[XYÙKXÛÛšXË]ËXÛÛÜˆŽ–ÞÈ›X\ÚËXÛÛšXË]ÈŽ‘

_WK›X\ÚË[[ÙHŽ–ÞÛX\ÚÎ–È˜[H‹›[Z[˜[˜ÙH‹›X]Ú—_WK›X\ÚË[ÜšYÚ[ˆŽ–ÞÈ›X\ÚË[ÜšYÚ[ˆŽ–È˜›Ü™\ˆ‹œY[™È‹˜ÛÛ[‹™š[‹œÝ›ÚÙH‹šY]È—_WK›X\ÚË\ÜÚ][ÛˆŽ–ÞÛX\ÚÎŠ
_WK›X\ÚË\™\X]Ž–ÞÛX\ÚÎ–È››Ë\™\X]‹Ü™\X]–Èˆ‹ž‹žH‹œÜXÙH‹œ›Ý[™—_W_WK›X\ÚË\Ú^™HŽ–ÞÛX\ÚÎ“J
_WK›X\ÚË]\HŽ–ÞÈ›X\ÚË]\HŽ–È˜[H‹›[Z[˜[˜ÙH—_WK›X\ÚËZ[XYÙHŽ–ÞÛX\ÚÎ–È››Û™H‹™Ë×_WKš[\Ž–ÞÙš[\Ž–Èˆ‹››Û™H‹™Ë×_WK›\Ž–ÞØ›\Ž‘Š
_WKœšYÚ™\ÜÎ–ÞØœšYÚ™\ÜÎ–ÜË™Ë×_WKÛÛ˜\Ý–ÞØÛÛ˜\Ý–ÜË™Ë×_WK™›Ü\ÚYÝÈŽ–ÞÈ™›Ü\ÚYÝÈŽ–Èˆ‹››Û™H‹™Ë×_WK™›Ü\ÚYÝËXÛÛÜˆŽ–ÞÈ™›Ü\ÚYÝÈŽ‘

_WKÜ˜^\ØØ[N–ÞÙÜ˜^\ØØ[N–Èˆ‹Ë™Ë×_WKšYK\›Ý]HŽ–ÞÈšYK\›Ý]HŽ–ÜË™Ë×_WK[™\–ÞÚ[™\–Èˆ‹Ë™Ë×_WKØ]\˜]N–ÞÜØ]\˜]N–ÜË™Ë×_WKÙ\XN–ÞÜÙ\XN–Èˆ‹Ë™Ë×_WK˜˜XÚÙ›ÜYš[\ˆŽ–ÞÈ˜˜XÚÙ›ÜYš[\ˆŽ–Èˆ‹››Û™H‹™Ë×_WK˜˜XÚÙ›ÜX›\ˆŽ–ÞÈ˜˜XÚÙ›ÜX›\ˆŽ‘Š
_WK˜˜XÚÙ›ÜXœšYÚ™\ÜÈŽ–ÞÈ˜˜XÚÙ›ÜXœšYÚ™\ÜÈŽ–ÜË™Ë×_WK˜˜XÚÙ›ÜXÛÛ˜\ÝŽ–ÞÈ˜˜XÚÙ›ÜXÛÛ˜\ÝŽ–ÜË™Ë×_WK˜˜XÚÙ›ÜYÜ˜^\ØØ[HŽ–ÞÈ˜˜XÚÙ›ÜYÜ˜^\ØØ[HŽ–Èˆ‹Ë™Ë×_WK˜˜XÚÙ›ÜZYK\›Ý]HŽ–ÞÈ˜˜XÚÙ›ÜZYK\›Ý]HŽ–ÜË™Ë×_WK˜˜XÚÙ›ÜZ[™\Ž–ÞÈ˜˜XÚÙ›ÜZ[™\Ž–Èˆ‹Ë™Ë×_WK˜˜XÚÙ›Ü[ÜXÚ]HŽ–ÞÈ˜˜XÚÙ›Ü[ÜXÚ]HŽ–ÜË™Ë×_WK˜˜XÚÙ›Ü\Ø]\˜]HŽ–ÞÈ˜˜XÚÙ›Ü\Ø]\˜]HŽ–ÜË™Ë×_WK˜˜XÚÙ›Ü\Ù\XHŽ–ÞÈ˜˜XÚÙ›Ü\Ù\XHŽ–Èˆ‹Ë™Ë×_WK˜›Ü™\‹XÛÛ\ÙHŽ–ÞØ›Ü™\Ž–È˜ÛÛ\ÙH‹œÙ\\˜]H—_WK˜›Ü™\‹\ÜXÚ[™ÈŽ–ÞÈ˜›Ü™\‹\ÜXÚ[™ÈŽŠ
_WK˜›Ü™\‹\ÜXÚ[™Ë^Ž–ÞÈ˜›Ü™\‹\ÜXÚ[™Ë^ŽŠ
_WK˜›Ü™\‹\ÜXÚ[™Ë^HŽ–ÞÈ˜›Ü™\‹\ÜXÚ[™Ë^HŽŠ
_WKX›K[^[Ý]Ž–ÞÝX›N–È˜]]È‹™š^Y—_WKØ\[ÛŽ–ÞØØ\[ÛŽ–ÈÜ‹˜›ÝÛH—_WK˜[œÚ][ÛŽ–ÞÝ˜[œÚ][ÛŽ–Èˆ‹˜[‹˜ÛÛÜœÈ‹›ÜXÚ]H‹œÚYÝÈ‹˜[œÙ›Ü›H‹››Û™H‹™Ë×_WK˜[œÚ][Û‹X™Z]š[ÜˆŽ–ÞÝ˜[œÚ][ÛŽ–È››Ü›X[‹™\ØÜ™]H—_WK\˜][ÛŽ–ÞÙ\˜][ÛŽ–ÜËš[š]X[‹™Ë×_WKX\ÙN–ÞÙX\ÙN–È›[™X\ˆ‹š[š]X[‹‹™Ë×_WK[^N–ÞÙ[^N–ÜË™Ë×_WK[š[X]N–ÞØ[š[X]N–È››Û™H‹‹™Ë×_WK˜XÚÙ˜XÙN–ÞØ˜XÚÙ˜XÙN–ÈšY[ˆ‹š\ÚX›H—_WK\œÜXÝ]™N–ÞÜ\œÜXÝ]™N–ÙË™Ë×_WKœ\œÜXÝ]™K[ÜšYÚ[ˆŽ–ÞÈœ\œÜXÝ]™K[ÜšYÚ[ˆŽÊ
_WK›Ý]N–ÞÜ›Ý]N‘Ê
_WKœ›Ý]K^Ž–ÞÈœ›Ý]K^Ž‘Ê
_WKœ›Ý]K^HŽ–ÞÈœ›Ý]K^HŽ‘Ê
_WKœ›Ý]K^ˆŽ–ÞÈœ›Ý]K^ˆŽ‘Ê
_WKØØ[N–ÞÜØØ[N•Ê
_WKœØØ[K^Ž–ÞÈœØØ[K^Ž•Ê
_WKœØØ[K^HŽ–ÞÈœØØ[K^HŽ•Ê
_WKœØØ[K^ˆŽ–ÞÈœØØ[K^ˆŽ•Ê
_WKœØØ[KLÙŽ–ÈœØØ[KLÙ—KÚÙ]Î–ÞÜÚÙ]Î“Ê
_WKœÚÙ]Ë^Ž–ÞÈœÚÙ]Ë^Ž“Ê
_WKœÚÙ]Ë^HŽ–ÞÈœÚÙ]Ë^HŽ“Ê
_WK˜[œÙ›Ü›N–ÞÝ˜[œÙ›Ü›N–Ð™ËËˆ‹››Û™H‹™ÜH‹˜ÜH—_WK˜[œÙ›Ü›K[ÜšYÚ[ˆŽ–ÞÛÜšYÚ[ŽÊ
_WK˜[œÙ›Ü›K\Ý[HŽ–ÞÝ˜[œÙ›Ü›N–ÈŒÙ‹™›]—_WK˜[œÛ]N–ÞÝ˜[œÛ]N‘J
_WK˜[œÛ]K^Ž–ÞÈ˜[œÛ]K^Ž‘J
_WK˜[œÛ]K^HŽ–ÞÈ˜[œÛ]K^HŽ‘J
_WK˜[œÛ]K^ˆŽ–ÞÈ˜[œÛ]K^ˆŽ‘J
_WK˜[œÛ]K[›Û™HŽ–È˜[œÛ]K[›Û™H—KXØÙ[–ÞØXØÙ[‘

_WK\X\˜[˜ÙN–ÞØ\X\˜[˜ÙN–È››Û™H‹˜]]È—_WK˜Ø\™]XÛÛÜˆŽ–ÞØØ\™]‘

_WK˜ÛÛÜ‹\ØÚ[YHŽ–ÞÜØÚ[YN–È››Ü›X[‹™\šÈ‹›YÚ‹›YÚY\šÈ‹›Û›KY\šÈ‹›Û›K[YÚ—_WKÝ\œÛÜŽ–ÞØÝ\œÛÜŽ–È˜]]È‹™Y˜][‹œÚ[\ˆ‹ØZ]‹^‹›[Ý™H‹š[‹››ÝX[ÝÙY‹››Û™H‹˜ÛÛ^[Y[H‹œ›ÙÜ™\ÜÈ‹˜Ù[‹˜Ü›ÜÜÚZ\ˆ‹™\XØ[]^‹˜[X\È‹˜ÛÜH‹››ËY›Ü‹™Ü˜Xˆ‹™Ü˜X˜š[™È‹˜[\ØÜ›Û‹˜ÛÛ\™\Ú^™H‹œ›ÝË\™\Ú^™H‹›‹\™\Ú^™H‹™K\™\Ú^™H‹œË\™\Ú^™H‹Ë\™\Ú^™H‹›™K\™\Ú^™H‹›Ë\™\Ú^™H‹œÙK\™\Ú^™H‹œÝË\™\Ú^™H‹™]Ë\™\Ú^™H‹›œË\™\Ú^™H‹›™\ÝË\™\Ú^™H‹›ÜÙK\™\Ú^™H‹ž›ÛÛKZ[ˆ‹ž›ÛÛK[Ý]‹™Ë×_WK™šY[\Ú^š[™ÈŽ–ÞÈ™šY[\Ú^š[™ÈŽ–È™š^Y‹˜ÛÛ[—_WKœÚ[\‹Y]™[ÈŽ–ÞÈœÚ[\‹Y]™[ÈŽ–È˜]]È‹››Û™H—_WK™\Ú^™N–ÞÜ™\Ú^™N–È››Û™H‹ˆ‹žH‹ž—_WKœØÜ›ÛX™Z]š[ÜˆŽ–ÞÜØÜ›Û–È˜]]È‹œÛ[ÛÝ—_WKœØÜ›Û[HŽ–ÞÈœØÜ›Û[HŽŠ
_WKœØÜ›Û[^Ž–ÞÈœØÜ›Û[^ŽŠ
_WKœØÜ›Û[^HŽ–ÞÈœØÜ›Û[^HŽŠ
_WKœØÜ›Û[\ÈŽ–ÞÈœØÜ›Û[\ÈŽŠ
_WKœØÜ›Û[YHŽ–ÞÈœØÜ›Û[YHŽŠ
_WKœØÜ›Û[]Ž–ÞÈœØÜ›Û[]ŽŠ
_WKœØÜ›Û[\ˆŽ–ÞÈœØÜ›Û[\ˆŽŠ
_WKœØÜ›Û[XˆŽ–ÞÈœØÜ›Û[XˆŽŠ
_WKœØÜ›Û[[Ž–ÞÈœØÜ›Û[[ŽŠ
_WKœØÜ›Û\Ž–ÞÈœØÜ›Û\ŽŠ
_WKœØÜ›Û\Ž–ÞÈœØÜ›Û\ŽŠ
_WKœØÜ›Û\HŽ–ÞÈœØÜ›Û\HŽŠ
_WKœØÜ›Û\ÈŽ–ÞÈœØÜ›Û\ÈŽŠ
_WKœØÜ›Û\HŽ–ÞÈœØÜ›Û\HŽŠ
_WKœØÜ›Û\Ž–ÞÈœØÜ›Û\ŽŠ
_WKœØÜ›Û\ˆŽ–ÞÈœØÜ›Û\ˆŽŠ
_WKœØÜ›Û\ˆŽ–ÞÈœØÜ›Û\ˆŽŠ
_WKœØÜ›Û\Ž–ÞÈœØÜ›Û\ŽŠ
_WKœÛ˜\X[YÛˆŽ–ÞÜÛ˜\–ÈœÝ\‹™[™‹˜Ù[\ˆ‹˜[YÛ‹[›Û™H—_WKœÛ˜\\ÝÜŽ–ÞÜÛ˜\–È››Ü›X[‹˜[Ø^\È—_WKœÛ˜\]\HŽ–ÞÜÛ˜\–È››Û™H‹ž‹žH‹˜›Ý—_WKœÛ˜\\ÝšXÝ™\ÜÈŽ–ÞÜÛ˜\–È›X[™]ÜžH‹œ›Þ[Z]H—_WKÝXÚ–ÞÝÝXÚ–È˜]]È‹››Û™H‹›X[š\[][Ûˆ—_WKÝXÚ^Ž–ÞÈÝXÚ\[ˆŽ–Èž‹›Y‹œšYÚ—_WKÝXÚ^HŽ–ÞÈÝXÚ\[ˆŽ–ÈžH‹\‹™ÝÛˆ—_WKÝXÚ\ˆŽ–ÈÝXÚ\[˜Ú^›ÛÛH—KÙ[XÝ–ÞÜÙ[XÝ–È››Û™H‹^‹˜[‹˜]]È—_WKÚ[XÚ[™ÙHŽ–ÞÈÚ[XÚ[™ÙHŽ–È˜]]È‹œØÜ›Û‹˜ÛÛ[È‹˜[œÙ›Ü›H‹™Ë×_WKš[–ÞÙš[–È››Û™H‹‹‹‘

W_WKœÝ›ÚÙK]ÈŽ–ÞÜÝ›ÚÙN–ÜËYËÙËÙ×_WKÝ›ÚÙN–ÞÜÝ›ÚÙN–È››Û™H‹‹‹‘

W_WK™›Ü˜ÙYXÛÛÜ‹XY\ÝŽ–ÞÈ™›Ü˜ÙYXÛÛÜ‹XY\ÝŽ–È˜]]È‹››Û™H—_W_KÛÛ™›XÝ[™ÐÛ\ÜÑÜ›Ý\ÎžÛÝ™\™›ÝÎ–È›Ý™\™›ÝË^‹›Ý™\™›ÝË^H—KÝ™\œØÜ›Û–È›Ý™\œØÜ›Û^‹›Ý™\œØÜ›Û^H—K[œÙ]–Èš[œÙ]^‹š[œÙ]^H‹œÝ\‹™[™‹Ü‹œšYÚ‹˜›ÝÛH‹›Y—Kš[œÙ]^Ž–ÈœšYÚ‹›Y—Kš[œÙ]^HŽ–ÈÜ‹˜›ÝÛH—K›^–È˜˜\Ú\È‹™Ü›ÝÈ‹œÚš[šÈ—KØ\–È™Ø\^‹™Ø\^H—K–Èœ‹œH‹œÈ‹œH‹œ‹œˆ‹œˆ‹œ—K–Èœˆ‹œ—KN–Èœ‹œˆ—KN–È›^‹›^H‹›\È‹›YH‹›]‹›\ˆ‹›Xˆ‹›[—K^–È›\ˆ‹›[—K^N–È›]‹›Xˆ—KÚ^™N–ÈÈ‹š—K™›Û\Ú^™HŽ–È›XY[™È—K™›‹[›Ü›X[Ž–È™›‹[Ü™[˜[‹™›‹\Û\ÚY^™\›È‹™›‹YšYÝ\™H‹™›‹\ÜXÚ[™È‹™›‹Yœ˜XÝ[Ûˆ—K™›‹[Ü™[˜[Ž–È™›‹[›Ü›X[—K™›‹\Û\ÚY^™\›ÈŽ–È™›‹[›Ü›X[—K™›‹YšYÝ\™HŽ–È™›‹[›Ü›X[—K™›‹\ÜXÚ[™ÈŽ–È™›‹[›Ü›X[—K™›‹Yœ˜XÝ[ÛˆŽ–È™›‹[›Ü›X[—K›[™KXÛ[\Ž–È™\Ü^H‹›Ý™\™›ÝÈ—K›Ý[™Y–Èœ›Ý[™Y\È‹œ›Ý[™YYH‹œ›Ý[™Y]‹œ›Ý[™Y\ˆ‹œ›Ý[™YXˆ‹œ›Ý[™Y[‹œ›Ý[™Y\ÜÈ‹œ›Ý[™Y\ÙH‹œ›Ý[™YYYH‹œ›Ý[™YY\È‹œ›Ý[™Y]‹œ›Ý[™Y]ˆ‹œ›Ý[™YXœˆ‹œ›Ý[™YX›—Kœ›Ý[™Y\ÈŽ–Èœ›Ý[™Y\ÜÈ‹œ›Ý[™YY\È—Kœ›Ý[™YYHŽ–Èœ›Ý[™Y\ÙH‹œ›Ý[™YYYH—Kœ›Ý[™Y]Ž–Èœ›Ý[™Y]‹œ›Ý[™Y]ˆ—Kœ›Ý[™Y\ˆŽ–Èœ›Ý[™Y]ˆ‹œ›Ý[™YXœˆ—Kœ›Ý[™YXˆŽ–Èœ›Ý[™YXœˆ‹œ›Ý[™YX›—Kœ›Ý[™Y[Ž–Èœ›Ý[™Y]‹œ›Ý[™YX›—K˜›Ü™\‹\ÜXÚ[™ÈŽ–È˜›Ü™\‹\ÜXÚ[™Ë^‹˜›Ü™\‹\ÜXÚ[™Ë^H—K˜›Ü™\‹]ÈŽ–È˜›Ü™\‹]Ë^‹˜›Ü™\‹]Ë^H‹˜›Ü™\‹]Ë\È‹˜›Ü™\‹]ËYH‹˜›Ü™\‹]Ë]‹˜›Ü™\‹]Ë\ˆ‹˜›Ü™\‹]ËXˆ‹˜›Ü™\‹]Ë[—K˜›Ü™\‹]Ë^Ž–È˜›Ü™\‹]Ë\ˆ‹˜›Ü™\‹]Ë[—K˜›Ü™\‹]Ë^HŽ–È˜›Ü™\‹]Ë]‹˜›Ü™\‹]ËXˆ—K˜›Ü™\‹XÛÛÜˆŽ–È˜›Ü™\‹XÛÛÜ‹^‹˜›Ü™\‹XÛÛÜ‹^H‹˜›Ü™\‹XÛÛÜ‹\È‹˜›Ü™\‹XÛÛÜ‹YH‹˜›Ü™\‹XÛÛÜ‹]‹˜›Ü™\‹XÛÛÜ‹\ˆ‹˜›Ü™\‹XÛÛÜ‹Xˆ‹˜›Ü™\‹XÛÛÜ‹[—K˜›Ü™\‹XÛÛÜ‹^Ž–È˜›Ü™\‹XÛÛÜ‹\ˆ‹˜›Ü™\‹XÛÛÜ‹[—K˜›Ü™\‹XÛÛÜ‹^HŽ–È˜›Ü™\‹XÛÛÜ‹]‹˜›Ü™\‹XÛÛÜ‹Xˆ—K˜[œÛ]N–È˜[œÛ]K^‹˜[œÛ]K^H‹˜[œÛ]K[›Û™H—K˜[œÛ]K[›Û™HŽ–È˜[œÛ]H‹˜[œÛ]K^‹˜[œÛ]K^H‹˜[œÛ]K^ˆ—KœØÜ›Û[HŽ–ÈœØÜ›Û[^‹œØÜ›Û[^H‹œØÜ›Û[\È‹œØÜ›Û[YH‹œØÜ›Û[]‹œØÜ›Û[\ˆ‹œØÜ›Û[Xˆ‹œØÜ›Û[[—KœØÜ›Û[^Ž–ÈœØÜ›Û[\ˆ‹œØÜ›Û[[—KœØÜ›Û[^HŽ–ÈœØÜ›Û[]‹œØÜ›Û[Xˆ—KœØÜ›Û\Ž–ÈœØÜ›Û\‹œØÜ›Û\H‹œØÜ›Û\È‹œØÜ›Û\H‹œØÜ›Û\‹œØÜ›Û\ˆ‹œØÜ›Û\ˆ‹œØÜ›Û\—KœØÜ›Û\Ž–ÈœØÜ›Û\ˆ‹œØÜ›Û\—KœØÜ›Û\HŽ–ÈœØÜ›Û\‹œØÜ›Û\ˆ—KÝXÚ–ÈÝXÚ^‹ÝXÚ^H‹ÝXÚ\ˆ—KÝXÚ^Ž–ÈÝXÚ—KÝXÚ^HŽ–ÈÝXÚ—KÝXÚ\ˆŽ–ÈÝXÚ—_KÛÛ™›XÝ[™ÐÛ\ÜÑÜ›Ý\[ÙYšY\œÎžÈ™›Û\Ú^™HŽ–È›XY[™È—_KÜ™\”Ù[œÚ]]™S[ÙYšY\œÎ–ÈŠˆ‹ŠŠˆ‹˜Y\ˆ‹˜˜XÚÙ›Ü‹˜™Y›Ü™H‹™]Z[ËXÛÛ[‹™š[H‹™š\œÝ[]\ˆ‹™š\œÝ[[™H‹›X\šÙ\ˆ‹œXÙZÛ\ˆ‹œÙ[XÝ[Ûˆ—__JKYÏXYÊ™ÊNÙ[˜Ý[ÛˆYÊ‹‹™J^Ü™]\›ˆYÊÞJJJ_XÛÛœÝ™ÏQ^Jš[›[™KY›^][\ËXÙ[\ˆ\ÝYžKXÙ[\ˆØ\LˆÚ]\ÜXÙK[›ÝÜ˜\›Ý[™Y[Y^\ÛH›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ›ØÝ\Ë]š\ÚX›N›Ý][™K[›Û™H›ØÝ\Ë]š\ÚX›Nœš[™ËLH›ØÝ\Ë]š\ÚX›Nœš[™Ë\š[™È\ØX›YœÚ[\‹Y]™[Ë[›Û™H\ØX›Y›ÜXÚ]KMLÉ—ÜÝ™×NœÚ[\‹Y]™[Ë[›Û™HÉ—ÜÝ™×NœÚ^™KMÉ—ÜÝ™×NœÚš[šËL‹Ý˜\šX[ÎžÝ˜\šX[žÙY˜][ˆ˜™Ë\š[X\žH^\š[X\žKY›Ü™YÜ›Ý[™ÚYÝÈÝ™\Ž˜™Ë\š[X\žKÎL‹\ÝXÝ]™Nˆ˜™ËY\ÝXÝ]™H^Y\ÝXÝ]™KY›Ü™YÜ›Ý[™ÚYÝË\ÛHÝ™\Ž˜™ËY\ÝXÝ]™KÎL‹Ý][™Nˆ˜›Ü™\ˆ›Ü™\‹Z[œ]ÚYÝË\ÛHÝ™\Ž˜™ËXXØÙ[Ý™\Ž^XXØÙ[Y›Ü™YÜ›Ý[™‹ÙXÛÛ™\žNˆ˜™Ë\ÙXÛÛ™\žH^\ÙXÛÛ™\žKY›Ü™YÜ›Ý[™ÚYÝË\ÛHÝ™\Ž˜™Ë\ÙXÛÛ™\žKÎ‹ÚÜÝˆšÝ™\Ž˜™ËXXØÙ[Ý™\Ž^XXØÙ[Y›Ü™YÜ›Ý[™‹[šÎˆ^\š[X\žH[™\›[™K[Ù™œÙ]MÝ™\Ž[™\›[™HŸKÚ^™NžÙY˜][ˆšNHMKLˆ‹ÛNˆšN›Ý[™Y[YLÈ^^È‹ÎˆšLL›Ý[™Y[YN‹XÛÛŽˆšNHËNHŸ_KY˜][˜\šX[ÎžÝ˜\šX[ˆ™Y˜][‹Ú^™Nˆ™Y˜][Ÿ_JNÚJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K˜\šX[˜KÚ^™N\ÐÚ[›ÏHLK‹‹›ŸKŠOOžØÛÛœÝ[ÏÕNˆ˜]ÛˆŽÜ™]\›ŠÊ
KšœÞ
JØÛ\ÜÓ˜[YNœYÊ™ÊÝ˜\šX[˜KÚ^™NÛ\ÜÓ˜[YN™_JJK™YŽœ‹‹‹›ŸJ_JK™\Ü^S˜[YOH]ÛˆŽØÛÛœÝYÏJÙ›ÛÝ\Ž™OHL_JOOŠÊ
KšœÞÊJÝÎˆ‹È‹Û\ÜÓ˜[YNˆ˜œ˜[™ŠÊOÈ˜œ˜[™Y›ÛÝ\ˆŽˆˆŠK˜\šXK[X™[Žˆ•šXÙH]\ÈÛYH‹™]K]\ÝYŽ™OÈ™›ÛÝ\‹[ÙÛÈŽˆšXY\‹[ÙÛÈ‹Ú[™[Ž–ÊÊ
KšœÞÊJœÝ™È‹ØÛ\ÜÓ˜[YNˆ˜œ˜[™[X\šÈ‹ÚYˆH‹ZYÚˆˆ‹šY]Ð›ÞˆŒˆˆ‹š[ˆ››Û™H‹˜\šXKZY[ˆŽˆYH‹Ú[™[Ž–ÊÊ
KšœÞ
Jœ]‹Ùˆ“Lˆš[HÌšLNSˆ–ˆ‹š[ˆ˜Ý\œ™[ÛÛÜˆŸJK
Ê
KšœÞ
Jœ]‹Ùˆ“LˆÈŒˆM[MÞˆ‹š[ˆ˜\ŠKYÝKXÛÜ˜[
HŸJK
Ê
KšœÞ
Jœ]‹Ùˆ“MˆMÚŽSNHŒÚŒÈ‹Ý›ÚÙNˆ˜\ŠKYÝK[ZYšYÚ
H‹Ý›ÚÙUÚYˆŒˆŸJW_JK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜œ˜[™]\H‹Ú[™[Ž–È•’PÑH‹
Ê
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÈUTÈ‹
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜œ˜[™YÝ‹Ú[™[Žˆ—YHŸJW_JW_JW_JK	ÏJØÚ[™[Ž™KÛ\ÜÓ˜[YN˜OHˆ‹[^NL‹‹›ßJOOžØÛÛœÝP

KHœÙXÝ[Û‹Y\ØÜš\[ÛˆOOXNÜ™]\›ŠÊ
KšœÞ
J™]‹Ú[š]X[ˆ[‰‰žÛÜXÚ]NŒNŒÌ‹‹œÞÙš[\Žˆ˜›\ŠÜ
HŸNžß_KÚ[R[•šY]ÎžÛÜXÚ]NŒKNŒ‹‹œÞÙš[\Žˆ˜›\Š
HŸNžß_KšY]ÜÜžÛÛ˜ÙNˆL[[Ý[‹ŒK˜[œÚ][ÛŽžÙ\˜][ÛŽ›Ì‹K[^N›Ì“X]›Z[ŠŒŽ
KX\ÙN–ËŒŒ‹KŒÍ‹W_KÛ\ÜÓ˜[YN˜K‹‹›ËÚ[™[Ž™_J_KÏJÚ][N™KØ]™Y˜KÙÙÛTØ]™N™Yš^›ÏHœØ]™H‹^›HLKÛÛ\XÝœHL_JOOŠÊ
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YN˜Ø]™KX]Ûˆ	ØKš[˜ÛY\ÊKšY
OÈš\Ë\Ø]™YŽˆˆŸH	ÛÈÚ]]^ŽˆˆŸX™]K]\ÝYŽ˜	ÛßKIÙKšYX˜\šXK[X™[Ž˜	ØKš[˜ÛY\ÊKšY
OÈ”™[[Ý™HŽˆ”Ø]™HŸH	ÙK]_X]NˆˆŠÊKš[˜ÛY\ÊKšY
OÈ”™[[Ý™H›ÛÚÛX\šÈŽˆ”Ø]™H[žHŠK˜\šXK\™\ÜÙYŽ˜Kš[˜ÛY\ÊKšY
KÛÛXÚÎ˜OOžØKœÝÜ›ÜYØ][ÛŠ
K
KšY
_KÚ[™[Ž–ØKš[˜ÛY\ÊKšY
OÊÊ
KšœÞ
JKÜÚ^™NŒMßJNŠÊ
KšœÞ
J	ÜÚ^™NŒMßJKˆ‹‰‰ŠØKš[˜ÛY\ÊKšY
OÈ”Ø]™YŽˆ”Ø]™H[žHŽ˜Kš[˜ÛY\ÊKšY
OÈ”Ø]™YÈ[Ý\ˆ]\ÈŽˆ”Ø]™HÈ[Ý\ˆ]\ÈŠW_JK™ÏJÛ[X™\Ž™K^YXœ›ÝÎ˜K]N\ØÜš\[ÛŽ›ËY›ŸJOOŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÙXÝ[Û‹ZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞÊJ	ËØÚ[™[Ž–ÊÊ
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™^YXœ›ÝÈ‹™]K]\ÝYŽ˜	ÛŸKY^YXœ›ÝØÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÙXÝ[Û‹Z[™^‹Ú[™[Ž™_JKW_JK
Ê
KšœÞ
Jšˆ‹ØÛ\ÜÓ˜[YNˆ™\Ü^HÙXÝ[Û‹]]H‹™]K]\ÝYŽ˜	ÛŸKZXY[™ØÚ[™[ŽŠÊ
KšœÞ
J^KÝ˜[YN›ØÚÎˆLJ_JW_JKÉ‰ŠÊ
KšœÞ
J	ËØÛ\ÜÓ˜[YNˆœÙXÝ[Û‹Y\ØÜš\[Ûˆ‹Ú[™[ŽŠÊ
KšœÞ
Jœ‹È™]K]\ÝYŽ˜	ÛŸKY\ØÜš\[Û˜Ú[™[Ž›ßJ_JW_JKYÏJÛÜ[ÛœÎ™K˜[YN˜KÙ]˜[YN™Yš^›ßJOOŠÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ™š[\‹[\Ý‹˜\šXK[X™[Ž˜	ÛßHš[\œØÚ[™[Ž™K›X\
OOŠÊ
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ™š[\‹X]ÛˆŠÊOOOYOÈ˜XÝ]™HŽˆˆŠK˜\šXK\™\ÜÙYŽ˜OOOYK™]K]\ÝYŽ˜	ÛßKYš[\‹IÙKÓÝÙ\Ø\ÙJ
Kœ™\XÙP[
ˆ‹‹HŠ_XÛÛXÚÎŠ
OO
JKÚ[™[Ž™_KJJ_JKZJ
OOžØÛÛœÝOJJ
K\ÙT™YŠJ[
KOP

KÜØÜ›ÛT›ÙÜ™\ÜÎOIÊÝ\™Ù]™KÙ™œÙ]–ÈœÝ\[™‹™[™Ý\—_JKÏ^JÌWKÈ‹MIH‹IH—JNÜ™]\›ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆÛÜ›\[›Ü˜[XH‹™YŽ™KÚ[™[Ž–ÊÊ
KšœÞ
Jš[YËÜÜ˜ÎšÊœœËY™X]\™LˆŠK[ˆ•HÙ™šXÚX[šXÙHÚ]HÚÞ[[™H]\ÚÈ‹ØY[™Îˆ›^žH‹Ý[N˜OÞßNžÞN›ß_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆÛÜ›\[›Ü˜[XK\ÚYHŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆÛÜ›\[›Ü˜[XK]Ü‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™^YXœ›ÝÈ‹™]K]\ÝYŽˆÛÜ›Y^YXœ›ÝÈ‹Ú[™[ŽˆŒHÈÓˆHÔ“ÕS‘ŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆÛÜ›YY][Ûˆ‹™]K]\ÝYŽˆÛÜ›YY][Ûˆ‹Ú[™[Žˆ‘VSÓ‘HÒUHSRUËˆŸJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆÛÜ›\[›Ü˜[XKXÛÜH‹Ú[™[Ž–ÊÊ
KšœÞ
J	ËØÚ[™[ŽŠÊ
KšœÞÊJšˆ‹È™]K]\ÝYŽˆÛÜ›ZXY[™È‹Ú[™[Ž–È“SÓ’QKˆ‹
Ê
KšœÞ
J˜œˆ‹ßJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ”ÒV‘QÒSÓ”ËˆŸJW_J_JK
Ê
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆÛÜ›\[›Ü˜[XKY\ØÜš\[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
Jœ‹È™]K]\ÝYŽˆÛÜ›Y\ØÜš\[Ûˆ‹Ú[™[Žˆ•HÜÝØ\™Û›HÙ]È[ÝHÛÈ˜\‹ˆÚ^™YÚ[ÛœÈ[›ÙXÙYžH›ØÚÜÝ\‹œ›ÛHHÛØ\ÝÈH˜XÚØÛÝ[žKˆŸJK
Ê
KšœÞÊJœÜ[ˆ‹È™]K]\ÝYŽˆÛÜ›Z[XYÙK[ØØ][Ûˆ‹Ú[™[Ž–È•’PÑHÒUKSÓ’QH‹
Ê
KšœÞ
JÞKÜÚ^™NŒLŸJW_JW_JW_JW_J_KZJÛÜ[Ž™KØ]™Y˜KÙÙÛTØ]™NJOOžØÛÛœÝÛË—OJJ
K\ÙTÝ]JJ[™YÚ[ÛœÈŠKH[™YÚ[ÛœÈOO[ÏÙ›Î™›Ë™š[\ŠOO™K˜Ø]YÛÜžOOO[ÊNÜ™]\›ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ÚYˆÛÜ›‹Û\ÜÓ˜[YNˆœÙXÝ[ÛˆÛÜ›\ÙXÝ[Ûˆ‹™]K]\ÝYŽˆÛÜ›\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JZßJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™š[\‹\›ÝÈ‹Ú[™[Ž–ÊÊ
KšœÞ
JYËÛÜ[ÛœÎ–È[™YÚ[ÛœÈ‹Ú]HY™H‹ÛØ\Ý‹•HÚ[È—K˜[YN›ËÙ]˜[YN›‹™Yš^ˆœ™YÚ[ÛœÈŸJK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ™\Ý[[X™[‹™]K]\ÝYŽˆœ™YÚ[Û‹\™\Ý[XÛÝ[‹Ú[™[Ž–ÔÝš[™Ê‹›[™Ý
KœYÝ\
‹ŒŠKˆ‘QÒSÓ”È—_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™YÚ[Û‹YÜšYŠÊ[™YÚ[ÛœÈˆOO[ÏÈš\ËYš[\™YŽˆˆŠK™]K]\ÝYŽˆœ™YÚ[Û‹YÜšY‹Ú[™[Žœ‹›X\

ËŠOOŠÊ
KšœÞÊJ	ËØÛ\ÜÓ˜[YN˜™YÚ[Û‹XØ\™™YÚ[Û‹IÛËšYX[^N‹ŒMJ›‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜Î›Ëš[XYÙK[ˆ“[Ý[Ø[YØHOO[Ë]OÈ“Ù™šXÚX[[Ý[Ø[YØH˜][Û˜[\šÈÜÝØ\™Ž˜	ÛË]_H[ˆÜ˜[™Y]]È’XØY[™Îˆ›^žHŸJK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™\ØÜš[HŸJK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™XÛXÚË]\™Ù]‹™]K]\ÝYŽ˜™YÚ[Û‹[Ü[‹IÛËšYXÛÛXÚÎŠ
OO™JÝ\Nˆ™]Z[‹][N›ßJK˜\šXK[X™[Ž˜^Ü™H	ÛË]_XJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™]Ü‹Ú[™[Ž–ÊÊ
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ™YÚ[Û‹[X™[‹™]K]\ÝYŽ˜™YÚ[Û‹XØ]YÛÜžKIÛËšYXÚ[™[Ž–ÊÊ
KšœÞ
JÞKÜÚ^™NŒL_JKË˜Ø]YÛÜžW_JK
Ê
KšœÞ
JËÚ][N›ËØ]™Y˜KÙÙÛTØ]™N™Yš^ˆœ™YÚ[Û‹\Ø]™HŸJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™YÚ[Û‹XØ\™XÛÜH‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™Y^YXœ›ÝÈ‹™]K]\ÝYŽ˜™YÚ[Û‹[[X™\‹IÛËšYXÚ[™[Ž–È”‘QÒSÓˆÈ‹Ë›[X™\—_JK
Ê
KšœÞ
JšÈ‹ØÛ\ÜÓ˜[YNˆ™\Ü^H‹™]K]\ÝYŽ˜™YÚ[Û‹]]KIÛËšYXÚ[™[Ž›Ë]_JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽ˜™YÚ[Û‹\ÝX]KIÛËšYXÚ[™[Ž›ËœÝX]_JW_JK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ›Ý[™X\œ›ÝÈ‹˜\šXKZY[ˆŽˆYH‹Ú[™[ŽŠÊ
KšœÞ
JKÜÚ^™NŒŒßJ_JW_JW_KËšY
J_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÙXÝ[Û‹Y›ÛÝ›ÝH‹™]K]\ÝYŽˆÛÜ›Y›ÛÝ›ÝH‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ”‘QÒSÓˆ’STÈŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ”ÛÝ\˜ÙNˆ›ØÚÜÝ\ˆØ[Y\ÈÈ[™\[™[Ý[[X\šY\ÈŸJW_JW_J_KJ
OOŠÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X\œ]YYH‹˜\šXK[X™[Žˆ•šXÙHÚ]K[ÛšYHÙ^\ËÜ˜\ÜÜš]™\œËÜÙ[Ü›‹[Xœ›ÜÚXK[Ý[Ø[YØH‹™]K]\ÝYŽˆ™Y]ÜšX[[X\œ]YYH‹Ú[™[ŽŠÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X\œ]YYK]˜XÚÈ‹˜\šXKZY[ˆŽˆYH‹Ú[™[Ž–ÌWK›X\
OOŠÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž™›Ë›X\
OOŠÊ
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÙK]KÕ\\Ø\ÙJ
Kˆ‹
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›X\œ]YYK\Ý\ˆ‹Ú[™[Žˆ—LÌÌÈŸJKˆ—_KKšY
J_KJJ_J_JKÚUY
œ^H‹ÖÈœÛYÛÛˆ‹ÜÚ[ÎˆˆÈŒLˆˆŒHˆÈ‹Ù^NˆŒ[ØNˆŸWWJKšUY
˜\œ›ÝË\šYÚ‹ÖÈœ]‹Ùˆ“MHLšM‹Ù^NˆŒX^\ÌŸWKÈœ]‹Ùˆ›LLˆHÈËMÈÈ‹Ù^Nˆž]^ÈŸWWJKšJÛÜ[Ž™KØ]™Y˜KÙÙÛTØ]™NJOOŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ÚYˆ˜Ú\˜XÝ\œÈ‹Û\ÜÓ˜[YNˆ˜Ú\˜XÝ\œË\ÙXÝ[Ûˆ‹™]K]\ÝYŽˆ˜Ú\˜XÝ\œË\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ú\˜XÝ\œËX˜XÚÙ›Ü‹Ú[™[ŽŠÊ
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊš˜\ÛÛ—Ø[™ÛXÚXWÌHŠK[ˆˆ‹ØY[™Îˆ›^žHŸJ_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ú\˜XÝ\œËZ[›™\ˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆ˜Ú\˜XÝ\œËZ[›È‹Ú[™[Ž–ÊÊ
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™^YXœ›ÝÈ‹™]K]\ÝYŽˆ˜Ú\˜XÝ\œËY^YXœ›ÝÈ‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÙXÝ[Û‹Z[™^‹Ú[™[ŽˆŒˆŸJKˆ“ÕQÓÓ’TÕÈ—_JK
Ê
KšœÞÊJšˆ‹ØÛ\ÜÓ˜[YNˆ™\Ü^H‹™]K]\ÝYŽˆ˜Ú\˜XÝ\œËZXY[™È‹Ú[™[Ž–È’TÓÓˆ	ˆ‹
Ê
KšœÞ
J˜œˆ‹ßJK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÛÙ\[šÈ‹Ú[™[Žˆ“PÒPKˆŸJW_JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽˆ˜Ú\˜XÝ\œËY\ØÜš\[Ûˆ‹Ú[™[Žˆ‘]™\žX›ÙHØ[ÈÛÛY][™ËˆYY]HXYÈ›ÝYÚ›ØÚÜÝ\—LŒN\ÈÙ™šXÚX[[›ÙXÝ[ÛœËˆŸJK
Ê
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ^[[šÈ‹™]K]\ÝYŽˆ˜Ú\˜XÝ\œË]Ø]Ú]˜Z[\ˆ‹ÛÛXÚÎŠ
OO™JÝ\Nˆ˜Z[\ˆŸJKÚ[™[Ž–È•Ø]Ú˜Z[\ˆˆ‹
Ê
KšœÞ
JÚÜÚ^™NŒL‹š[ˆ˜Ý\œ™[ÛÛÜˆŸJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™[Ë[›ÝH‹™]K]\ÝYŽˆ˜Ú\˜XÝ\œË[›ÝH‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™[Ë[[™HŸJK‘ÔS‘Q•UUÈ’H‹
Ê
KšœÞ
J˜œˆ‹ßJK
Ê
KšœÞ
JœÛX[‹ØÚ[™[Žˆ•Z\ˆ˜XÚÜÝÜšY\ÈÝ^H[™\ˆÜ˜\È[[[ÝH[˜X›HÜÚ[\œËˆŸJW_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ú\˜XÝ\‹XØ\™È‹Ú[™[ŽÛË›X\

ËŠOOŠÊ
KšœÞÊJ	ËØÛ\ÜÓ˜[YN˜Ú\˜XÝ\‹XØ\™Ú\˜XÝ\‹IÛŸX[^N‹ŒLŠ›‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜Î›Ëš[XYÙK[˜	ÛË]_H[ˆÜ˜[™Y]]È’XØY[™Îˆ›^žHŸJK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™\ØÜš[HŸJK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™XÛXÚË]\™Ù]‹™]K]\ÝYŽ˜Ú\˜XÝ\‹[Ü[‹IÛËšYX˜\šXK[X™[Ž˜™XY	ÛË]_IÜÈÝÜžXÛÛXÚÎŠ
OO™JÝ\Nˆ™]Z[‹][N›ßJ_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ú\˜XÝ\‹XØ\™]Ü‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™Y^YXœ›ÝÈ‹™]K]\ÝYŽ˜Ú\˜XÝ\‹]YËIÛËšYXÚ[™[Ž›ËYßJK
Ê
KšœÞ
JËÜ™Yš^ˆ˜Ú\˜XÝ\‹\Ø]™H‹][N›ËØ]™Y˜KÙÙÛTØ]™NJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ú\˜XÝ\‹XØ\™XÛÜH‹Ú[™[Ž–ÊÊ
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ú\˜XÝ\‹Yš\œÝ˜[YH\Ü^H‹™]K]\ÝYŽ˜Ú\˜XÝ\‹[˜[YKIÛËšYXÚ[™[Ž–ÛË]KœÜ]
ˆŠVÌK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž›Ë]KœÜ]
ˆŠVÌW_JW_JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽ˜Ú\˜XÝ\‹\ÝX]KIÛËšYXÚ[™[Ž›ËœÝX]_JK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ú\˜XÝ\‹\™XY‹Ú[™[Ž–È“QQUHÐTÕ‹
Ê
KšœÞ
JKÜÚ^™NŒMßJW_JW_JW_KËšY
J_JW_JW_JKJÛÜ[Ž™KØ]™Y˜KÙÙÛTØ]™NJOOŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ÚYˆÚ\™H‹Û\ÜÓ˜[YNˆœÙXÝ[ÛˆÚ\™K\ÙXÝ[Ûˆ‹™]K]\ÝYŽˆÚ\™K\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
J™ËÛ[X™\ŽˆŒÈ‹^YXœ›ÝÎˆ•H’PÑHÒT‘H‹]Nˆ‘™X]\™\È‹\ØÜš\[ÛŽˆ•ÛÜ™Ù]È\›Ý[™ˆÝ\ˆZÙHÛˆH›ÛÝYÙKœ˜[Y\È[™XÙ\È›ØÚÜÝ\ˆ\È™]™X[Yˆ‹YˆÚ\™HŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆÚ\™K[X™[\›ÝÈ‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™^YXœ›ÝÈ‹™]K]\ÝYŽˆÚ\™KXÝ\˜]Y[X™[‹Ú[™[Žˆ‘SˆQUÔ’PSŸJK
Ê
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ^[[šÈ‹™]K]\ÝYŽˆÚ\™KX[\ÝÜšY\È‹ÛÛXÚÎŠ
OO™JÝ\NˆœÝÜšY\ÈŸJKÚ[™[Ž–È”™XYHÚ\™H‹
Ê
KšœÞ
JšÜÚ^™NŒMŸJW_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜\XÛKYÜšY‹Ú[™[Ž›Ë›X\

ËŠOOŠÊ
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆ˜\XÛKXØ\™‹[^N‹ŒJ›‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜\XÛK\ÝÈ‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜Î›Ëš[XYÙK[›ËœÝX]KØY[™Îˆ›^žHŸJK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™XÛXÚË]\™Ù]‹™]K]\ÝYŽ˜\XÛKZ[XYÙK[Ü[‹IÛËšYX˜\šXK[X™[Ž˜™XY	ÛË]_XÛÛXÚÎŠ
OO™JÝ\Nˆ™]Z[‹][N›ßJ_JK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜\XÛKXØ]YÛÜžH‹™]K]\ÝYŽ˜\XÛKXØ]YÛÜžKIÛËšYXÚ[™[Ž›Ë˜Ø]YÛÜž_JK
Ê
KšœÞ
JËÜ™Yš^ˆ˜\XÛK\Ø]™H‹][N›ËØ]™Y˜KÙÙÛTØ]™NJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜\XÛK[Y]H‹™]K]\ÝYŽ˜\XÛK[Y]KIÛËšYXÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ•’PÑHUTÈQUÔ’PSŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž›Ëœ™XY[Y_JW_JK
Ê
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜\XÛK]]H‹™]K]\ÝYŽ˜\XÛK[Ü[‹IÛËšYXÛÛXÚÎŠ
OO™JÝ\Nˆ™]Z[‹][N›ßJKÚ[™[Ž–ÊÊ
KšœÞ
JšÈ‹ØÚ[™[Ž›Ë]_JK
Ê
KšœÞ
JKÜÚ^™NŒŒŸJW_JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽ˜\XÛK\ÝX]KIÛËšYXÚ[™[Ž›ËœÝX]_JW_KËšY
J_JW_JKÚUY
™^[™‹ÖÈœ]‹Ùˆ›LMHMHˆˆ‹Ù^NˆŒ\Í]ÈŸWKÈœ]‹Ùˆ›LMHH‹Mˆ‹Ù^NˆšÛÌ]™]ˆŸWKÈœ]‹Ùˆ“LŒHMZMH‹Ù^NˆŒXÚÌœÙˆŸWKÈœ]‹Ùˆ“LŒHŒÚMH‹Ù^NˆŒ\[ÜNHŸWKÈœ]‹Ùˆ“LÈMZH‹Ù^NˆŒ][HŸWKÈœ]‹Ùˆ›LÈŒH‹Mˆ‹Ù^NˆÝÛ[ZHŸWKÈœ]‹Ùˆ“LÈŒÚH‹Ù^NˆŒ[ŒLHŸWKÈœ]‹Ùˆ“NHHÈÈ‹Ù^NˆMLZ]ˆŸWWJKZUY
˜Ú]œ›Û‹\šYÚ‹ÖÈœ]‹Ùˆ›NHN‹M‹M‹Mˆ‹Ù^Nˆ›]ÜHŸWWJKÚUY
˜ÛÛ\\ÜÈ‹ÖÈœ]‹Ùˆ›LM‹ŒËÍ‹LKŽKLXLˆˆKLKŒHKŒSËÍˆM‹ŒKŽMKLXLˆˆHKŒKLKŒ^ˆ‹Ù^NˆŽZÝŒHŸWKÈ˜Ú\˜ÛH‹ØÞˆŒLˆ‹ÞNˆŒLˆ‹ŽˆŒL‹Ù^NˆŒ[YÛ^HŸWWJKZUY
˜Ú]œ›Û‹YÝÛˆ‹ÖÈœ]‹Ùˆ›MˆHˆˆ‹Mˆ‹Ù^Nˆœ\[œÛŸWWJNÙ[˜Ý[ÛˆZ
KKØÚXÚÑ›Ü‘Y˜][™]™[YHLO^ßJ^Ü™]\›ˆ[˜Ý[ÛŠÊ^ÚYŠOËŠÊKLOOO][Ë™Y˜][™]™[Y
\™]\›ˆOËŠÊ__Y[˜Ý[Ûˆ
KOV×J^Û]V×NØÛÛœÝÏJ
OOžØÛÛœÝO]›X\
OOšJ
K˜Ü™X]PÛÛ^
JJNÜ™]\›ˆ[˜Ý[ÛŠ
^ØÛÛœÝÏ]Ë–ÙW_NÜ™]\›ˆJ
K\ÙSY[[Ê

OOŠÖØ×ÜØÛÜIÙ_XNžË‹‹ÙWN›ß_JKÝ×J__NÜ™]\›ˆËœØÛÜS˜[YOYKÙ[˜Ý[ÛŠKÊ^ØÛÛœÝZJ
K˜Ü™X]PÛÛ^
ÊK]›[™ÝÝVË‹‹×NØÛÛœÝXOOžØÛÛœÝÜØÛÜNÚ[™[Ž›Ë‹‹›OXKÏ]Ë–ÙWOË–Ü—_‹OZJ
K\ÙSY[[Ê

OO›Øš™XÝ˜[Y\Ê
JNÜ™]\›ŠÊ
KšœÞ
JË”›ÝšY\‹Ý˜[YNKÚ[™[Ž›ßJ_NÜ™]\›ˆ™\Ü^S˜[YOXJÈ”›ÝšY\ˆ‹Û[˜Ý[ÛŠ
^ØÛÛœÝÏ[Ë–ÙWOË–Ü—_‹ÏZJ
K\ÙPÛÛ^
ÊNÚYŠÊ\™]\›ˆÎÚYŠ›ÚYOO[Ê\™]\›ˆÎÝ›ÝÈ™]È\œ›ÜŠ	ÝW]\Ý™H\ÙYÚ][ˆ	Ø_W
_W_K
Ë‹‹˜JW_Y[˜Ý[Ûˆ
‹‹™J^ØÛÛœÝOYVÌNÚYŠOOOYK›[™Ý
\™]\›ˆNØÛÛœÝJ
OOžØÛÛœÝYK›X\
OOŠÝ\ÙTØÛÜN™J
KØÛÜS˜[YN™KœØÛÜS˜[Y_JJNÜ™]\›ˆ[˜Ý[ÛŠJ^ØÛÛœÝÏ]œ™YXÙJ
KÝ\ÙTØÛÜNØÛÜS˜[YN›ßJOOŠË‹‹˜K‹‹
JVØ×ÜØÛÜIÛßX_JKßJNÜ™]\›ˆJ
K\ÙSY[[Ê

OOŠÖØ×ÜØÛÜIØKœØÛÜS˜[Y_XN›ßJKÛ×J__NÜ™]\›ˆœØÛÜS˜[YOXKœØÛÜS˜[YK]˜\ˆZYÛØ˜[\ÏË™ØÝ[Y[ÚJ
K\ÙS^[Ý]Y™™XÝŠ
OOžßKÚY

VÈˆ\ÙR[œÙ\[Û‘Y™™XÝ‹š[J
KÔÝš[™Ê
W_ZÙ[˜Ý[Ûˆ
Ü›Ü™KY˜][›Ü˜KÛÚ[™ÙNJ
OOžßKØ[\Ž›ßJ^ØÛÛœÝÛ‹‹OY[˜Ý[ÛŠÙY˜][›Ü™KÛÚ[™ÙN˜_J^ØÛÛœÝÝ×OZJ
K\ÙTÝ]JJKZJ
K\ÙT™YŠ
KZJ
K\ÙT™YŠJNÜ™]\›ˆÚ


OOžÜ‹˜Ý\œ™[X_KØWJKJ
K\ÙQY™™XÝ


OOžÛ‹˜Ý\œ™[OO]	‰Š‹˜Ý\œ™[ËŠ
K‹˜Ý\œ™[]
_KÝ—JKÝË—_JÙY˜][›Ü˜KÛÚ[™ÙNJKÏ]›ÚYOOYKÏ\ÏÙN›ŽÞØÛÛœÝOZJ
K\ÙT™YŠ›ÚYOOYJNÚJ
K\ÙQY™™XÝ


OOžØÛÛœÝOXK˜Ý\œ™[ÚYŠHOO\Ê^ØÛÛœÝOYOÈ˜ÛÛ›ÛYŽˆ[˜ÛÛ›ÛY‹\ÏÈ˜ÛÛ›ÛYŽˆ[˜ÛÛ›ÛYŽØÛÛœÛÛKØ\›Š	ÛßH\ÈÚ[™Ú[™Èœ›ÛH	Ø_HÈ	ÝKˆÛÛ\Û™[ÈÚÝ[›ÝÝÚ]Úœ›ÛHÛÛ›ÛYÈ[˜ÛÛ›ÛY
ÜˆšXÙH™\œØJKˆXÚYH™]ÙY[ˆ\Ú[™ÈHÛÛ›ÛYÜˆ[˜ÛÛ›ÛY˜[YH›ÜˆHY™][YHÙˆHÛÛ\Û™[˜
_XK˜Ý\œ™[\ßKÜË×J_XÛÛœÝOZJ
K\ÙPØ[˜XÚÊOOžÚYŠÊ^ØÛÛœÝY[˜Ý[ÛŠJ^Ü™]\›ˆ™[˜Ý[ÛˆOO]\[Ùˆ_JJOØJJN˜NÝOOYI‰›˜Ý\œ™[ËŠ
_Y[ÙHŠJ_KÜËK‹JNÜ™]\›–ØËW_TÞ[X›Û
”QV”ÖS×ÔÕUHŠNÝ˜\ˆšVÈ˜H‹˜]Ûˆ‹™]ˆ‹™›Ü›H‹šˆ‹šÈ‹š[YÈ‹š[œ]‹›X™[‹›H‹›˜]ˆ‹›Û‹œ‹œÙ[XÝ‹œÜ[ˆ‹œÝ™È‹[—Kœ™YXÙJ
KJOOžØÛÛœÝS^Jš[Z]]™K‰Ø_X
KÏZJ
K™›ÜØ\™™YŠ
KÊOOžØÛÛœÝØ\ÐÚ[›‹‹‹œŸOYK[Ý˜NÜ™]\›ˆ[™Yš[™YˆOO]\[ÙˆÚ[™ÝÉ‰ŠÚ[™ÝÖÔÞ[X›Û™›ÜŠœ˜Y^]ZHŠWOHL
K
Ê
KšœÞ
JË‹‹œ‹™YŽ›ßJ_JNÜ™]\›ˆË™\Ü^S˜[YOXš[Z]]™K‰Ø_XË‹‹™KØWN›ß_KßJNÙ[˜Ý[Ûˆš
KJ^ÙI‰›Š
K™›\ÚÞ[˜Ê

OO™K™\Ü]Ú]™[
JJ_Y[˜Ý[ÛˆÚ
J^ØÛÛœÝOYJÈÛÛXÝ[Û”›ÝšY\ˆ‹Ý×O\
JKÛ‹—O]
KØÛÛXÝ[Û”™YŽžØÝ\œ™[›[K][SX\›™]ÈX\JKYOOžØÛÛœÝÜØÛÜN˜KÚ[™[ŽOYKÏZJ
K\ÙT™YŠ[
KZJ
K\ÙT™YŠ™]ÈX\
K˜Ý\œ™[Ü™]\›ŠÊ
KšœÞ
J‹ÜØÛÜN˜K][SX\œ‹ÛÛXÝ[Û”™YŽ›ËÚ[™[ŽJ_NÛ™\Ü^S˜[YOXNØÛÛœÝÏYJÈÛÛXÝ[Û”ÛÝ‹OS^JÊKOZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝÜØÛÜNÚ[™[Ž›ßOYKPžJKŠË
K˜ÛÛXÝ[Û”™YŠNÜ™]\›ŠÊ
KšœÞ
JKÜ™YŽ›‹Ú[™[Ž›ßJ_JNÛK™\Ü^S˜[YOXÎØÛÛœÝYJÈÛÛXÝ[Û’][TÛÝ‹H™]K\˜Y^XÛÛXÝ[Û‹Z][H‹OS^J
KÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝÜØÛÜNÚ[™[Ž›Ë‹‹›ŸOYKZJ
K\ÙT™YŠ[
KÏPžJK
KO\Š
NÜ™]\›ˆJ
K\ÙQY™™XÝ


OOŠKš][SX\œÙ]
Ü™YŽ›‹‹›ŸJK

OOžÝKš][SX\™[]J
_JJK
Ê
KšœÞ
JKÖÙNˆˆ‹™YŽ˜ËÚ[™[Ž›ßJ_JNÜ™]\›ˆË™\Ü^S˜[YO\ÞÔ›ÝšY\Ž›ÛÝ›K][TÛÝ™ßK[˜Ý[ÛŠJ^ØÛÛœÝ\ŠJÈÛÛXÝ[ÛÛÛœÝ[Y\ˆ‹JNÜ™]\›ˆJ
K\ÙPØ[˜XÚÊ

OOžØÛÛœÝO]˜ÛÛXÝ[Û”™Y‹˜Ý\œ™[ÚYŠYJ\™]\›–×NØÛÛœÝOP\œ˜^K™œ›ÛJKœ]Y\žTÙ[XÝÜ[
ÉÙWX
JNÜ™]\›ˆ\œ˜^K™œ›ÛJš][SX\˜[Y\Ê
JKœÛÜ

K
OO˜Kš[™^ÙŠKœ™Y‹˜Ý\œ™[
KXKš[™^ÙŠœ™Y‹˜Ý\œ™[
J_KÝ˜ÛÛXÝ[Û”™Y‹š][SX\J_K×_]˜\ˆš[™]ÈÙXZÓX\ÓX\Ù[˜Ý[ÛˆÚ
KJ^ÚYŠ˜]š[ˆ\œ˜^Kœ›ÝÝ\J\™]\›ˆ\œ˜^Kœ›ÝÝ\K˜]˜Ø[
KJNØÛÛœÝY[˜Ý[ÛŠKJ^ØÛÛœÝYK›[™ÝÏPÚ
JK[ÏLÛÎ
ÛÎÜ™]\›ˆ]ËLN›ŸJKJNÜ™]\›‹LOOO]Ý›ÚY™VÝ_Y[˜Ý[ÛˆÚ
J^Ü™]\›ˆHOOY_OOYOÌ“X][˜ÊJ_]˜\ˆZJ
K˜Ü™X]PÛÛ^
›ÚY
NÙ[˜Ý[ÛˆÚ
J^ØÛÛœÝOZJ
K\ÙPÛÛ^

NÜ™]\›ˆ__›ˆŸY[˜Ý[ÛˆÚ
J^ØÛÛœÝOZJ
K\ÙT™YŠJNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØK˜Ý\œ™[Y_JKJ
K\ÙSY[[Ê

OOŠ‹‹™JOO˜K˜Ý\œ™[ËŠ‹‹™JK×J_]˜\ˆZH™\ÛZ\ÜØX›S^Y\‹\]H‹H™\ÛZ\ÜØX›S^Y\‹œÚ[\‘ÝÛ“Ý]ÚYH‹šH™\ÛZ\ÜØX›S^Y\‹™›ØÝ\ÓÝ]ÚYH‹ZZJ
K˜Ü™X]PÛÛ^
Û^Y\œÎ›™]ÈÙ]^Y\œÕÚ]Ý]ÚYTÚ[\‘]™[Ñ\ØX›Y›™]ÈÙ]œ˜[˜Ú\Î›™]ÈÙ]JKZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝÙ\ØX›SÝ]ÚYTÚ[\‘]™[ÎHLKÛ‘\ØØ\RÙ^QÝÛŽ›ËÛ”Ú[\‘ÝÛ“Ý]ÚYN›‹Û‘›ØÝ\ÓÝ]ÚYNœ‹Û’[\˜XÝÝ]ÚYN›Û‘\ÛZ\ÜÎ˜Ë‹‹_OYKOZJ
K\ÙPÛÛ^
Z
KÜOZJ
K\ÙTÝ]J[
KO\Ë›ÝÛ™\‘ØÝ[Y[ÏÙÛØ˜[\ÏË™ØÝ[Y[Ë×OZJ
K\ÙTÝ]JßJKPžJKOO™
JJKP\œ˜^K™œ›ÛJK›^Y\œÊKÙ—OVË‹‹›K›^Y\œÕÚ]Ý]ÚYTÚ[\‘]™[Ñ\ØX›YKœÛXÙJLJKÏX‹š[™^ÙŠŠK\Ø‹š[™^ÙŠ
N‹LKÏ[K›^Y\œÕÚ]Ý]ÚYTÚ[\‘]™[Ñ\ØX›YœÚ^™OŒÏ]]ËY[˜Ý[ÛŠKOYÛØ˜[\ÏË™ØÝ[Y[
^ØÛÛœÝTÚ
JKÏZJ
K\ÙT™YŠLJKZJ
K\ÙT™YŠ

OOžßJNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝOYOOžÚYŠK\™Ù]	‰ˆ[Ë˜Ý\œ™[
^Û]ÏY[˜Ý[ÛŠ
^Ô
‹Ù\ØÜ™]NˆLJ_NØÛÛœÝ^ÛÜšYÚ[˜[]™[™_NÈÝXÚOOYKœÚ[\•\OÊKœ™[[Ý™Q]™[\Ý[™\Š˜ÛXÚÈ‹‹˜Ý\œ™[
K‹˜Ý\œ™[[ËK˜Y]™[\Ý[™\Š˜ÛXÚÈ‹‹˜Ý\œ™[ÛÛ˜ÙNˆLJJN›Ê
_Y[ÙHKœ™[[Ý™Q]™[\Ý[™\Š˜ÛXÚÈ‹‹˜Ý\œ™[
NÛË˜Ý\œ™[HL_K]Ú[™ÝËœÙ][Y[Ý]


OOžØK˜Y]™[\Ý[™\ŠœÚ[\™ÝÛˆ‹J_K
NÜ™]\›Š
OOžÝÚ[™ÝË˜ÛX\•[Y[Ý]
ŠKKœ™[[Ý™Q]™[\Ý[™\ŠœÚ[\™ÝÛˆ‹JKKœ™[[Ý™Q]™[\Ý[™\Š˜ÛXÚÈ‹‹˜Ý\œ™[
__KØKJKÛÛ”Ú[\‘ÝÛØ\\™NŠ
OO›Ë˜Ý\œ™[HL_JOOžØÛÛœÝOYK\™Ù]VË‹‹›K˜œ˜[˜Ú\×KœÛÛYJOO™K˜ÛÛZ[œÊJJNÐÉ‰ˆ]	‰ŠËŠJKËŠJKK™Y˜][™]™[YÏËŠ
J_KJKÏY[˜Ý[ÛŠKOYÛØ˜[\ÏË™ØÝ[Y[
^ØÛÛœÝTÚ
JKÏZJ
K\ÙT™YŠLJNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝOYOOžÚYŠK\™Ù]	‰ˆ[Ë˜Ý\œ™[
^Ô
šÛÜšYÚ[˜[]™[™_KÙ\ØÜ™]NˆL_J__NÜ™]\›ˆK˜Y]™[\Ý[™\Š™›ØÝ\Ú[ˆ‹JK

OO˜Kœ™[[Ý™Q]™[\Ý[™\Š™›ØÝ\Ú[ˆ‹J_KØKJKÛÛ‘›ØÝ\ÐØ\\™NŠ
OO›Ë˜Ý\œ™[HLÛ›\Ø\\™NŠ
OO›Ë˜Ý\œ™[HL__JOOžØÛÛœÝOYK\™Ù]ÖË‹‹›K˜œ˜[˜Ú\×KœÛÛYJOO™K˜ÛÛZ[œÊJJ_
ËŠJKËŠJKK™Y˜][™]™[YÏËŠ
J_KJNÜ™]\›ˆ[˜Ý[ÛŠKOYÛØ˜[\ÏË™ØÝ[Y[
^ØÛÛœÝTÚ
JNÚJ
K\ÙQY™™XÝ


OOžØÛÛœÝOYOOžÈ‘\ØØ\HOOYKšÙ^I‰
J_NÜ™]\›ˆK˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹KØØ\\™NˆLJK

OO˜Kœ™[[Ý™Q]™[\Ý[™\ŠšÙ^YÝÛˆ‹KØØ\\™NˆLJ_KÝWJ_JOOžÝOO[K›^Y\œËœÚ^™KLI‰ŠÏËŠJKYK™Y˜][™]™[Y	‰˜É‰ŠKœ™]™[Y˜][

KÊ
JJ_KJKJ
K\ÙQY™™XÝ


OOžÚYŠ
\™]\›ˆ	‰ŠOO[K›^Y\œÕÚ]Ý]ÚYTÚ[\‘]™[Ñ\ØX›YœÚ^™I‰Š^K˜›ÙKœÝ[KœÚ[\‘]™[ËK˜›ÙKœÝ[KœÚ[\‘]™[ÏH››Û™HŠKK›^Y\œÕÚ]Ý]ÚYTÚ[\‘]™[Ñ\ØX›Y˜Y

JKK›^Y\œË˜Y

Kš

K

OOžÝ	‰ŒOOO[K›^Y\œÕÚ]Ý]ÚYTÚ[\‘]™[Ñ\ØX›YœÚ^™I‰ŠK˜›ÙKœÝ[KœÚ[\‘]™[ÏS
__KÜKWJKJ
K\ÙQY™™XÝ


OOŠ
OOžÜ	‰ŠK›^Y\œË™[]J
KK›^Y\œÕÚ]Ý]ÚYTÚ[\‘]™[Ñ\ØX›Y™[]J
Kš

J_KÜWJKJ
K\ÙQY™™XÝ


OOžØÛÛœÝOJ
OO™ÊßJNÜ™]\›ˆØÝ[Y[˜Y]™[\Ý[™\ŠZJK

OO™ØÝ[Y[œ™[[Ý™Q]™[\Ý[™\ŠZJ_K×JK
Ê
KšœÞ
Jš™]‹Ë‹‹K™YŽšÝ[NžÜÚ[\‘]™[Î—ÏÐÏÈ˜]]ÈŽˆ››Û™HŽ›ÚY‹‹™KœÝ[_KÛ‘›ØÝ\ÐØ\\™N›Z
K›Û‘›ØÝ\ÐØ\\™KË›Û‘›ØÝ\ÐØ\\™JKÛ›\Ø\\™N›Z
K›Û›\Ø\\™KË›Û›\Ø\\™JKÛ”Ú[\‘ÝÛØ\\™N›Z
K›Û”Ú[\‘ÝÛØ\\™K›Û”Ú[\‘ÝÛØ\\™J_J_JNÕ™\Ü^S˜[YOH‘\ÛZ\ÜØX›S^Y\ˆŽÝ˜\ˆšZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝZJ
K\ÙPÛÛ^
Z
KÏZJ
K\ÙT™YŠ[
KPžJKÊNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝO[Ë˜Ý\œ™[ÚYŠJ\™]\›ˆ˜œ˜[˜Ú\Ë˜Y
JK

OOžÝ˜œ˜[˜Ú\Ë™[]JJ__KÝ˜œ˜[˜Ú\×JK
Ê
KšœÞ
Jš™]‹Ë‹‹™K™YŽ›ŸJ_JNÙ[˜Ý[Ûˆš

^ØÛÛœÝO[™]ÈÝ\ÝÛQ]™[
Z
NÙØÝ[Y[™\Ü]Ú]™[
J_Y[˜Ý[Ûˆ
KKÙ\ØÜ™]N›ßJ^ØÛÛœÝ]›ÜšYÚ[˜[]™[\™Ù][™]ÈÝ\ÝÛQ]™[
KØX˜›\ÎˆLKØ[˜Ù[X›NˆL]Z[JNØI‰›‹˜Y]™[\Ý[™\ŠKKÛÛ˜ÙNˆLJKÏÙš
‹ŠN›‹™\Ü]Ú]™[
Š_Uš™\Ü^S˜[YOH‘\ÛZ\ÜØX›S^Y\œ˜[˜ÚŽÝ˜\ˆšLÙ[˜Ý[ÛˆÚ

^ÚJ
K\ÙQY™™XÝ


OOžØÛÛœÝOYØÝ[Y[œ]Y\žTÙ[XÝÜ[
–Ù]K\˜Y^Y›ØÝ\ËYÝX\™HŠNÜ™]\›ˆØÝ[Y[˜›ÙKš[œÙ\Y˜XÙ[[[Y[
˜Y\˜™YÚ[ˆ‹VÌOÏÕÚ

JKØÝ[Y[˜›ÙKš[œÙ\Y˜XÙ[[[Y[
˜™Y›Ü™Y[™‹VÌWOÏÕÚ

JKš
ÊË

OOžÌOOOQš	‰™ØÝ[Y[œ]Y\žTÙ[XÝÜ[
–Ù]K\˜Y^Y›ØÝ\ËYÝX\™HŠK™›Ü‘XXÚ
OO™Kœ™[[Ý™J
JKšK__K×J_Y[˜Ý[ÛˆÚ

^ØÛÛœÝOYØÝ[Y[˜Ü™X]Q[[Y[
œÜ[ˆŠNÜ™]\›ˆKœÙ]]šX]J™]K\˜Y^Y›ØÝ\ËYÝX\™‹ˆŠKKX’[™^LKœÝ[K›Ý][™OH››Û™H‹KœÝ[K›ÜXÚ]OHŒ‹KœÝ[KœÜÚ][ÛH™š^Y‹KœÝ[KœÚ[\‘]™[ÏH››Û™H‹_]˜\ˆÚH™›ØÝ\ÔØÛÜK˜]]Ñ›ØÝ\ÓÛ“[Ý[‹ZH™›ØÝ\ÔØÛÜK˜]]Ñ›ØÝ\ÓÛ•[›[Ý[‹^ØX˜›\ÎˆLKØ[˜Ù[X›NˆLKšZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝÛÛÜHLK˜\Y›ÏHLKÛ“[Ý[]]Ñ›ØÝ\Î›‹Û•[›[Ý[]]Ñ›ØÝ\Îœ‹‹‹›OYKØËWOZJ
K\ÙTÝ]J[
KOTÚ
ŠKTÚ
ŠKZJ
K\ÙT™YŠ[
KOPžJKOOJJJKÏZJ
K\ÙT™YŠÜ]\ÙYˆLK]\ÙJ
^Ý\Ëœ]\ÙYHLK™\Ý[YJ
^Ý\Ëœ]\ÙYHL__JK˜Ý\œ™[ÚJ
K\ÙQY™™XÝ


OOžÚYŠÊ^Û]OY[˜Ý[ÛŠJ^ÚYŠËœ]\ÙYXÊ\™]\›ŽØÛÛœÝOYK\™Ù]ØË˜ÛÛZ[œÊJOÙ˜Ý\œ™[XNžš
˜Ý\œ™[ÜÙ[XÝˆLJ_KOY[˜Ý[ÛŠJ^ÚYŠËœ]\ÙYXÊ\™]\›ŽØÛÛœÝOYKœ™[]Y\™Ù]Û[OOXI‰ŠË˜ÛÛZ[œÊJ_š
˜Ý\œ™[ÜÙ[XÝˆLJJ_KY[˜Ý[ÛŠJ^ÚYŠØÝ[Y[˜XÝ]™Q[[Y[OOYØÝ[Y[˜›ÙJY›ÜŠÛÛœÝHÙˆJXKœ™[[Ý™Y›Ù\Ë›[™ÝŒ	‰žš
Ê_NÙØÝ[Y[˜Y]™[\Ý[™\Š™›ØÝ\Ú[ˆ‹JKØÝ[Y[˜Y]™[\Ý[™\Š™›ØÝ\ÛÝ]‹JNØÛÛœÝÏ[™]È]]][Û“ØœÙ\™\Š
NÜ™]\›ˆÉ‰›Ë›ØœÙ\™JËØÚ[\ÝˆLÝX™YNˆLJK

OOžÙØÝ[Y[œ™[[Ý™Q]™[\Ý[™\Š™›ØÝ\Ú[ˆ‹JKØÝ[Y[œ™[[Ý™Q]™[\Ý[™\Š™›ØÝ\ÛÝ]‹JKË™\ØÛÛ›™XÝ

___KÛËËËœ]\ÙYJKJ
K\ÙQY™™XÝ


OOžÚYŠÊ^ÕZ˜Y
ÊNØÛÛœÝOYØÝ[Y[˜XÝ]™Q[[Y[ÚYŠXË˜ÛÛZ[œÊJJ^ØÛÛœÝ[™]ÈÝ\ÝÛQ]™[
Ú
NØË˜Y]™[\Ý[™\ŠÚJKË™\Ü]Ú]™[

K™Y˜][™]™[Y
Y[˜Ý[ÛŠKÜÙ[XÝ˜OHL_O^ßJ^ØÛÛœÝYØÝ[Y[˜XÝ]™Q[[Y[Ù›ÜŠÛÛœÝÈÙˆJZYŠš
ËÜÙ[XÝ˜_JKØÝ[Y[˜XÝ]™Q[[Y[OO]
\™]\›ŸJ
ORÚ
ÊKK™š[\ŠOOˆHˆOOYKYÓ˜[YJJKÜÙ[XÝˆLJKØÝ[Y[˜XÝ]™Q[[Y[OOXI‰žš
ÊJ_\™]\›Š
OOžØËœ™[[Ý™Q]™[\Ý[™\ŠÚJKÙ][Y[Ý]


OOžØÛÛœÝO[™]ÈÝ\ÝÛQ]™[
Z
NØË˜Y]™[\Ý[™\ŠZ
KË™\Ü]Ú]™[
JKK™Y˜][™]™[Yš
OÏÙØÝ[Y[˜›ÙKÜÙ[XÝˆLJKËœ™[[Ý™Q]™[\Ý[™\ŠZ
KZœ™[[Ý™JÊ_K
__]˜\ˆ_KØËK×JNØÛÛœÝZJ
K\ÙPØ[˜XÚÊOOžÚYŠ]	‰ˆ[Ê\™]\›ŽÚYŠËœ]\ÙY
\™]\›ŽØÛÛœÝOH•XˆOOYKšÙ^I‰ˆYK˜[Ù^I‰ˆYK˜Ý›Ù^I‰ˆYK›Y]RÙ^KYØÝ[Y[˜XÝ]™Q[[Y[ÚYŠI‰›Š^ØÛÛœÝOYK˜Ý\œ™[\™Ù]ÛË—OY[˜Ý[ÛŠJ^ØÛÛœÝORÚ
JKZš
KJKÏZš
Kœ™]™\œÙJ
KJNÜ™]\›–Ý×_JJNÛÉ‰œÙKœÚYÙ^_ˆOO\ÙKœÚYÙ^I‰›OO[É‰ŠKœ™]™[Y˜][

K	‰žš
‹ÜÙ[XÝˆLJJNŠKœ™]™[Y˜][

K	‰žš
ËÜÙ[XÝˆLJJN›OOXI‰™Kœ™]™[Y˜][

__KÝËËœ]\ÙYJNÜ™]\›ŠÊ
KšœÞ
Jš™]‹ÝX’[™^‹LK‹‹›™YŽžKÛ’Ù^QÝÛŽšJ_JNÙ[˜Ý[ÛˆÚ
J^ØÛÛœÝOV×KYØÝ[Y[˜Ü™X]U™YUØ[Ù\ŠK›ÙQš[\‹”ÒÕ×ÑSSQS•ØXØÙ\›ÙN™OOžØÛÛœÝOH’S”UOOYKYÓ˜[YI‰ˆšY[ˆOOYK\NÜ™]\›ˆK™\ØX›YKšY[ŸOÓ›ÙQš[\‹‘’ST—ÔÒÒT™KX’[™^LÓ›ÙQš[\‹‘’ST—ÐPÐÑT“›ÙQš[\‹‘’ST—ÔÒÒT_JNÙ›ÜŠÝ›™^›ÙJ
NÊXKœ\Ú
˜Ý\œ™[›ÙJNÜ™]\›ˆ_Y[˜Ý[Ûˆš
KJ^Ù›ÜŠÛÛœÝÙˆJZYŠRZ
Ý\Î˜_JJ\™]\›ˆY[˜Ý[ÛˆZ
KÝ\Î˜_J^ÚYŠšY[ˆOOYÙ]ÛÛ\]YÝ[JJKš\ÚXš[]J\™]\›ˆLÙ›ÜŠÙNÊ^ÚYŠ›ÚYOOXI‰™OOOXJ\™]\›ˆLNÚYŠ››Û™HOOYÙ]ÛÛ\]YÝ[JJK™\Ü^J\™]\›ˆLÙOYKœ\™[[[Y[\™]\›ˆL_Y[˜Ý[Ûˆš
KÜÙ[XÝ˜OHL_O^ßJ^ÚYŠI‰™K™›ØÝ\Ê^ØÛÛœÝYØÝ[Y[˜XÝ]™Q[[Y[ÙK™›ØÝ\ÊÜ™]™[ØÜ›ÛˆLJKHOO]	‰™[˜Ý[ÛŠJ^Ü™]\›ˆH[œÝ[˜Ù[ÙˆS[œ][[Y[	‰ˆœÙ[XÝš[ˆ_JJI‰˜I‰™KœÙ[XÝ

__Sš™\Ü^S˜[YOH‘›ØÝ\ÔØÛÜHŽÝ˜\ˆZY[˜Ý[ÛŠ
^Û]OV×NÜ™]\›žØY
J^ØÛÛœÝYVÌNØHOO]	‰Ëœ]\ÙJ
KO\Z
KJKK[œÚY
J_K™[[Ý™JJ^ÙO\Z
KJKVÌOËœ™\Ý[YJ
___J
NÙ[˜Ý[ÛˆZ
KJ^ØÛÛœÝVË‹‹™WKÏ]š[™^ÙŠJNÜ™]\›‹LHOO[É‰œÜXÙJËJK]˜\ˆšY

VÈˆ\ÙRY‹š[J
KÔÝš[™Ê
W_


OOžßJKZLÙ[˜Ý[Ûˆ	
J^ØÛÛœÝØKOZJ
K\ÙTÝ]Jš

JNÜ™]\›ˆZ


OOžÙ_
OO™OÏÔÝš[™ÊZ
ÊÊJ_KÙWJK_
OØ˜Y^IØ_XˆˆŠ_XÛÛœÝVÈÜ‹œšYÚ‹˜›ÝÛH‹›Y—KšSX]›Z[‹ZSX]›X^XSX]œ›Ý[™XSX]™›ÛÜ‹YOOŠÞ™KN™_JKØ^ÛYˆœšYÚ‹šYÚˆ›Y‹›ÝÛNˆÜ‹Üˆ˜›ÝÛHŸNÙ[˜Ý[Ûˆ˜ŠKK
^Ü™]\›ˆZ
Kš
K
J_Y[˜Ý[Ûˆ˜ŠKJ^Ü™]\›ˆ™[˜Ý[ÛˆOO]\[ÙˆOÙJJN™_Y[˜Ý[ÛˆŠJ^Ü™]\›ˆKœÜ]
‹HŠVÌ_Y[˜Ý[ÛˆØŠJ^Ü™]\›ˆKœÜ]
‹HŠVÌW_Y[˜Ý[ÛˆXŠJ^Ü™]\›ˆžOOYOÈžHŽˆžŸY[˜Ý[ÛˆØŠJ^Ü™]\›ˆžHOOYOÈšZYÚŽˆÚYŸY[˜Ý[ÛˆXŠJ^ØÛÛœÝOYVÌNÜ™]\›ˆOOX_˜ˆOOXOÈžHŽˆžŸY[˜Ý[ÛˆXŠJ^Ü™]\›ˆXŠXŠJJ_Y[˜Ý[ÛˆŠJ^Ü™]\›ˆKš[˜ÛY\ÊœÝ\ŠOÙKœ™\XÙJœÝ\‹™[™ŠN™Kœ™\XÙJ™[™‹œÝ\Š_XÛÛœÝVÈ›Y‹œšYÚ—KXVÈœšYÚ‹›Y—KØVÈÜ‹˜›ÝÛH—KVÈ˜›ÝÛH‹Ü—NÙ[˜Ý[Ûˆ˜ŠKKÊ^ØÛÛœÝ\ØŠJNÛ]Y[˜Ý[ÛŠKK
^ÜÝÚ]Ú
J^ØØ\ÙHÜŽ˜Ø\ÙH˜›ÝÛHŽœ™]\›ˆØOÞXŽ™Ž˜OÙŽžXŽØØ\ÙH›YŽ˜Ø\ÙHœšYÚŽœ™]\›ˆOÙØŽšŽÙY˜][œ™]\›–×__JŠJKœÝ\OO]ÊNÜ™]\›ˆ‰‰Š\‹›X\
OO™JÈ‹HŠÛŠKI‰Š\‹˜ÛÛ˜Ø]
‹›X\
ŠJJJKŸY[˜Ý[Ûˆ˜ŠJ^ØÛÛœÝO[ŠJNÜ™]\›ˆØ–ØWJÙKœÛXÙJK›[™Ý
_Y[˜Ý[ÛˆØŠJ^Ü™]\›ˆ›[X™\ˆˆOO]\[ÙˆOÙ[˜Ý[ÛŠJ^Ý˜\ˆKËŽÜ™]\›žÝÜ›[OJOYKÜ
OØNŒšYÚ›[OJYKœšYÚ
OÝŒ›ÝÛN›[OJÏYK˜›ÝÛJOÛÎŒY›[OJYK›Y
OÛŽŒ_JJNžÝÜ™KšYÚ™K›ÝÛN™KY™__Y[˜Ý[Ûˆ˜ŠJ^ØÛÛœÝÞ˜KNÚY›ËZYÚ›ŸOYNÜ™]\›žÝÚY›ËZYÚ›‹ÜY˜KšYÚ˜JÛË›ÝÛN
Û‹˜KN_Y[˜Ý[ÛˆØŠKK
^Û]Ü™Y™\™[˜ÙN›Ë›Ø][™Î›ŸOYNØÛÛœÝ]XŠJK[XŠJKÏXØŠ
KO[ŠJKÏHžHOO\‹O[Ëž
ÛËÚYÌ‹[‹ÚYÌ‹O[ËžJÛËšZYÚÌ‹[‹šZYÚÌ‹[ÖÜ×KÌ‹[–Ü×KÌŽÛ]ÜÝÚ]Ú
J^ØØ\ÙHÜŽ™^ÞKN›ËžK[‹šZYÚNØœ™XZÎØØ\ÙH˜›ÝÛHŽ™^ÞKN›ËžJÛËšZYÚNØœ™XZÎØØ\ÙHœšYÚŽ™^Þ›Ëž
ÛËÚYN›_NØœ™XZÎØØ\ÙH›YŽ™^Þ›Ëž[‹ÚYN›_NØœ™XZÎÙY˜][™^Þ›ËžN›Ëž__XÛÛœÝO\ØŠJNÜ™]\›ˆI‰ŠÛJÏ\
Š™[™OO^OÌN‹LJJŠ	‰˜ÏËLNŒJJKX\Þ[˜È[˜Ý[ÛˆØŠKJ^Ý˜\ˆÝ›ÚYOOXI‰ŠO^ßJNØÛÛœÝÞ›ËN›‹]›Ü›Nœ‹™XÝÎ›[[Y[ÎœËÝ˜]YÞNš_OYKØ›Ý[™\žN˜ÏH˜Û\[™Ð[˜Ù\ÝÜœÈ‹›ÛÝ›Ý[™\žNOHšY]ÜÜ‹[[Y[ÛÛ^›OH™›Ø][™È‹[›Ý[™\žNœHLKY[™Î™LO\˜ŠKJKO]ØŠ
KÏ\ÖÜÈ™›Ø][™ÈOO[OÈœ™Y™\™[˜ÙHŽˆ™›Ø][™ÈŽ›WK]˜Š]ØZ]‹™Ù]Û\[™Ô™XÝ
Ù[[Y[›[OJX]ØZ]
[O\‹š\Ñ[[Y[Ý›ÚYœ‹š\Ñ[[Y[
ÊJJ_ÙÎ™Ë˜ÛÛ^[[Y[]ØZ]
[O\‹™Ù]ØÝ[Y[[[Y[Ý›ÚYœ‹™Ù]ØÝ[Y[[[Y[
Ë™›Ø][™ÊJK›Ý[™\žN˜Ë›ÛÝ›Ý[™\žNKÝ˜]YÞNš_JJKH™›Ø][™ÈOO[OÞÞ›ËN›‹ÚY›™›Ø][™ËÚYZYÚ›™›Ø][™ËšZYÚN›œ™Y™\™[˜ÙKX]ØZ]
[O\‹™Ù]Ù™œÙ]\™[Ý›ÚYœ‹™Ù]Ù™œÙ]\™[
Ë™›Ø][™ÊJKÏX]ØZ]
[O\‹š\Ñ[[Y[Ý›ÚYœ‹š\Ñ[[Y[
ŠJI‰˜]ØZ]
[O\‹™Ù]ØØ[OÝ›ÚYœ‹™Ù]ØØ[JŠJ_ÞŒKNŒ_K]˜Š‹˜ÛÛ™\Ù™œÙ]\™[™[]]™T™XÝÕšY]ÜÜ™[]]™T™XÝØ]ØZ]‹˜ÛÛ™\Ù™œÙ]\™[™[]]™T™XÝÕšY]ÜÜ™[]]™T™XÝ
Ù[[Y[ÎœË™XÝ˜‹Ù™œÙ]\™[™‹Ý˜]YÞNš_JN˜ŠNÜ™]\›žÝÜŠÜ]‹Ü
ÞKÜ
KÝËžK›ÝÛNŠ‹˜›ÝÛKZ˜›ÝÛJÞK˜›ÝÛJKÝËžKYŠ›Y]‹›Y
ÞK›Y
KÝËžšYÚŠ‹œšYÚZœšYÚ
ÞKœšYÚ
KÝËž_Y[˜Ý[ÛˆŠKJ^Ü™]\›žÝÜ™KÜXKšZYÚšYÚ™KœšYÚXKÚY›ÝÛN™K˜›ÝÛKXKšZYÚY™K›YXKÚY_Y[˜Ý[ÛˆØŠJ^Ü™]\›ˆœÛÛYJOO™VØWOL
_XÛÛœÝØ[™]ÈÙ]
È›Y‹Ü—JNÙ[˜Ý[ÛˆŠ
^Ü™]\›ˆ[™Yš[™YˆOO]\[ÙˆÚ[™ÝßY[˜Ý[ÛˆXŠJ^Ü™]\›ˆXŠJOÊK››ÙS˜[Y_ˆŠKÓÝÙ\Ø\ÙJ
NˆˆÙØÝ[Y[ŸY[˜Ý[ÛˆŠJ^Ý˜\ˆNÜ™]\›Š[OY_[OJOYK›ÝÛ™\‘ØÝ[Y[
OÝ›ÚY˜K™Y˜][šY]Ê_Ú[™ÝßY[˜Ý[Ûˆ˜ŠJ^Ý˜\ˆNÜ™]\›ˆ[OJOJXŠJOÙK›ÝÛ™\‘ØÝ[Y[™K™ØÝ[Y[
_Ú[™ÝË™ØÝ[Y[
OÝ›ÚY˜K™ØÝ[Y[[[Y[Y[˜Ý[ÛˆXŠJ^Ü™]\›ˆHSŠ
I‰ŠH[œÝ[˜Ù[Ùˆ›Ù_H[œÝ[˜Ù[ÙˆŠJK“›ÙJ_Y[˜Ý[ÛˆŠJ^Ü™]\›ˆHSŠ
I‰ŠH[œÝ[˜Ù[Ùˆ[[Y[H[œÝ[˜Ù[ÙˆŠJK‘[[Y[
_Y[˜Ý[Ûˆ˜ŠJ^Ü™]\›ˆHSŠ
I‰ŠH[œÝ[˜Ù[ÙˆS[[Y[H[œÝ[˜Ù[ÙˆŠJK’S[[Y[
_Y[˜Ý[Ûˆ˜ŠJ^Ü™]\›ˆJSŠ
_[™Yš[™YOO]\[ÙˆÚYÝÔ›ÛÝ
I‰ŠH[œÝ[˜Ù[ÙˆÚYÝÔ›ÛÝH[œÝ[˜Ù[ÙˆŠJK”ÚYÝÔ›ÛÝ
_Y[˜Ý[ÛˆŠJ^ØÛÛœÝÛÝ™\™›ÝÎ˜KÝ™\™›ÝÖÝ™\™›ÝÖN›Ë\Ü^N›ŸORXŠJNÜ™]\›‹Ø]]ßØÜ›ÛÝ™\›^_Y[ŸÛ\Ë\Ý
JÛÊÝ
I‰ˆš[›[™HˆOO[‰‰ˆ˜ÛÛ[ÈˆOO[ŸY[˜Ý[Ûˆ˜ŠJ^Ü™]\›‹×ŠX›_
IË\Ý
XŠJJ_Y[˜Ý[ÛˆØŠJ^Ýž^ÚYŠK›X]Ú\ÊŽœÜÝ™\‹[Ü[ˆŠJ\™]\›ˆLXØ]Ú
J^ß]ž^Ü™]\›ˆK›X]Ú\ÊŽ›[Ù[Š_XØ]Ú
J^Ü™]\›ˆL__XÛÛœÝØKÝ˜[œÙ›Ü›_˜[œÛ]_ØØ[_›Ý]_\œÜXÝ]™_š[\‹ËØKÜZ[^[Ý]ÝšXÝÛÛ[ËXYOOˆHYI‰ˆ››Û™HˆOOYNÛ]ŽÙ[˜Ý[Ûˆ˜ŠJ^ØÛÛœÝOUŠJOÒXŠJN™NÜ™]\›ˆXŠK˜[œÙ›Ü›J_XŠK˜[œÛ]J_XŠKœØØ[J_XŠKœ›Ý]J_XŠKœ\œÜXÝ]™J_RØŠ
I‰ŠXŠK˜˜XÚÙ›Üš[\Š_XŠK™š[\ŠJ_Ø‹\Ý
KÚ[Ú[™Ù_ˆŠ_Ø‹\Ý
K˜ÛÛZ[ŸˆŠ_Y[˜Ý[ÛˆØŠ
^Ü™]\›ˆ[OR‰‰ŠH[™Yš[™YˆOO]\[ÙˆÔÔÉ‰ÔÔËœÝ\ÜÉ‰ÔÔËœÝ\ÜÊ‹]ÙXšÚ]X˜XÚÙ›ÜYš[\ˆ‹››Û™HŠJKŸY[˜Ý[Ûˆ˜ŠJ^Ü™]\›‹×Š[›Ù_ÙØÝ[Y[
IË\Ý
XŠJJ_Y[˜Ý[ÛˆXŠJ^Ü™]\›ˆŠJK™Ù]ÛÛ\]YÝ[JJ_Y[˜Ý[Ûˆ˜ŠJ^Ü™]\›ˆŠJOÞÜØÜ›ÛY™KœØÜ›ÛYØÜ›ÛÜ™KœØÜ›ÛÜNžÜØÜ›ÛY™KœØÜ›ÛØÜ›ÛÜ™KœØÜ›Û__Y[˜Ý[ÛˆXŠJ^ÚYŠš[OOPXŠJJ\™]\›ˆNØÛÛœÝOYK˜\ÜÚYÛ™YÛÝKœ\™[›Ù_˜ŠJI‰™KšÜÝ˜ŠJNÜ™]\›ˆ˜ŠJOØKšÜÝ˜_Y[˜Ý[ÛˆXŠJ^ØÛÛœÝOUXŠJNÜ™]\›ˆ˜ŠJOÊK›ÝÛ™\‘ØÝ[Y[JK˜›ÙN•˜ŠJI‰”ŠJOØNœXŠJ_Y[˜Ý[Ûˆ˜ŠKK
^Ý˜\ˆÎÝ›ÚYOOXI‰ŠOV×JK›ÚYOO]	‰ŠHL
NØÛÛœÝ\XŠJK[OOJ[OJÏYK›ÝÛ™\‘ØÝ[Y[
OÝ›ÚY›Ë˜›ÙJKQŠŠNÚYŠŠ^ØÛÛœÝOVXŠ
NÜ™]\›ˆK˜ÛÛ˜Ø]
š\ÝX[šY]ÜÜ×KŠŠOÛŽ–×KI‰Ò˜ŠJN–×J_\™]\›ˆK˜ÛÛ˜Ø]
‹˜Š‹×K
J_Y[˜Ý[ÛˆXŠJ^Ü™]\›ˆKœ\™[	‰“Øš™XÝ™Ù]›ÝÝ\SÙŠKœ\™[
OÙK™œ˜[YQ[[Y[›[Y[˜Ý[Ûˆ	ŠJ^ØÛÛœÝORXŠJNÛ]\\œÙQ›Ø]
KÚY
_Ï\\œÙQ›Ø]
KšZYÚ
_ØÛÛœÝU˜ŠJK[ÙK›Ù™œÙ]ÚY[ÙK›Ù™œÙ]ZYÚ›ËÏYXŠ
HOO\ŸXŠÊHOO[Ü™]\›ˆÉ‰Š\‹Ï[
KÝÚYZYÚ›Ë	œß_Y[˜Ý[ÛˆŠJ^Ü™]\›ˆŠJOÙN™K˜ÛÛ^[[Y[Y[˜Ý[Ûˆ˜ŠJ^ØÛÛœÝOVŠJNÚYŠU˜ŠJJ\™]\›ˆŠJNØÛÛœÝXK™Ù]›Ý[™[™ÐÛY[™XÝ

KÝÚY›ËZYÚ›‹	œŸOIŠJNÛ]JÙXŠÚY
NÚY
KÛËÏJÙXŠšZYÚ
NšZYÚ
KÛŽÜ™]\›ˆ	‰“[X™\‹š\Ñš[š]J
_
LJKÉ‰“[X™\‹š\Ñš[š]JÊ_
ÏLJKÞ›Nœß_XÛÛœÝX]Š
NÙ[˜Ý[ÛˆYŠJ^ØÛÛœÝOQŠJNÜ™]\›ˆØŠ
I‰˜Kš\ÝX[šY]ÜÜÞÞ˜Kš\ÝX[šY]ÜÜ›Ù™œÙ]YN˜Kš\ÝX[šY]ÜÜ›Ù™œÙ]ÜN”XŸY[˜Ý[ÛˆYŠKKÊ^Ý›ÚYOOXI‰ŠOHLJK›ÚYOO]	‰ŠHLJNØÛÛœÝYK™Ù]›Ý[™[™ÐÛY[™XÝ

KVŠJNÛ]]ŠJNØI‰ŠÏÕŠÊI‰ŠV˜ŠÊJN›V˜ŠJJNØÛÛœÝÏY[˜Ý[ÛŠKK
^Ü™]\›ˆ›ÚYOOXI‰ŠOHLJKH]	‰˜I‰OOQŠJ_J‹ÊOÙYŠŠNŠ
NÛ]OJ‹›Y
ÜËž
KÛžÏJ‹Ü
ÜËžJKÛžKO[‹ÚYÛžO[‹šZYÚÛžNÚYŠ‰‰›Ê^ØÛÛœÝOQŠŠKOUŠÊOÑŠÊN›ÎÛ]YKVXŠ
NÙ›ÜŠÛ‰‰˜HOO]Ê^ØÛÛœÝOV˜ŠŠKO[‹™Ù]›Ý[™[™ÐÛY[™XÝ

KÏRXŠŠKXK›Y
Ê‹˜ÛY[Y
Ü\œÙQ›Ø]
ËœY[™ÓY
JJ™KžXKÜ
Ê‹˜ÛY[Ü
Ü\œÙQ›Ø]
ËœY[™ÕÜ
JJ™KžNÚJYKžÊYKžKJYKžJYKžKJÏ\‹ÊÏ[QŠŠKVXŠ
__\™]\›ˆ˜ŠÝÚYKZYÚ›KšKN˜ßJ_Y[˜Ý[ÛˆŠKJ^ØÛÛœÝ^˜ŠJKœØÜ›ÛYÜ™]\›ˆOØK›Y
Ý˜YŠ˜ŠJJK›Y
ÝY[˜Ý[ÛˆÙŠKJ^ØÛÛœÝYK™Ù]›Ý[™[™ÐÛY[™XÝ

NÜ™]\›žÞ›Y
ØKœØÜ›ÛY]ŠK
KNÜ
ØKœØÜ›ÛÜ_Y[˜Ý[Ûˆ™ŠKK
^Û]ÎÚYŠšY]ÜÜOOX_›^[Ý]šY]ÜÜOOXJ[ÏY[˜Ý[ÛŠKK
^Ý›ÚYOO]	‰ŠHšY]ÜÜŠNØÛÛœÝÏH›^[Ý]šY]ÜÜOO]QŠJKP˜ŠJK[‹š\ÝX[šY]ÜÜÛ]Ï\‹˜ÛY[ÚYO\‹˜ÛY[ZYÚÏLOLÚYŠ
^ØÛÛœÝOHRØŠ
_™š^YOOXNÛÏÙ_
ÏK[›Ù™œÙ]YOK[›Ù™œÙ]Ü
NŠÏ[ÚYO[šZYÚI‰ŠÏ[›Ù™œÙ]YO[›Ù™œÙ]Ü
J_ZYŠŠŠOL
^ØÛÛœÝO\‹›ÝÛ™\‘ØÝ[Y[OYK˜›ÙKYÙ]ÛÛ\]YÝ[JJKÏHÔÔÌPÛÛ\]OOYK˜ÛÛ\][ÙI‰œ\œÙQ›Ø]
›X\™Ú[“Y
JÜ\œÙQ›Ø]
›X\™Ú[”šYÚ
_SX]˜XœÊ‹˜ÛY[ÚYXK˜ÛY[ÚY[ÊKHœÝX›H›ÝYYÙ\ÈOOYÙ]ÛÛ\]YÝ[JŠKœØÜ›Û˜\‘Ý]\Û‹ÌŽ›ŽÛLI‰ŠËO[
_\™]\›žÝÚYœËZYÚšK˜ËN__JKJNÙ[ÙHYŠ™ØÝ[Y[OOXJ[ÏY[˜Ý[ÛŠJ^ØÛÛœÝO^˜ŠJKYK›ÝÛ™\‘ØÝ[Y[˜›ÙKÏTZ
KœØÜ›ÛÚYK˜ÛY[ÚYœØÜ›ÛÚY˜ÛY[ÚY
KTZ
KœØÜ›ÛZYÚK˜ÛY[ZYÚœØÜ›ÛZYÚ˜ÛY[ZYÚ
NÛ]KXKœØÜ›ÛY
ÝŠJNØÛÛœÝKXKœØÜ›ÛÜÜ™]\›ˆœOORXŠ
K™\™XÝ[Û‰‰ŠŠÏTZ
K˜ÛY[ÚY˜ÛY[ÚY
K[ÊKÝÚY›ËZYÚ›‹œ‹N›_J˜ŠJJNÙ[ÙHYŠŠJJ[ÏY[˜Ý[ÛŠKJ^ØÛÛœÝXYŠKL™š^YOOXJKÏ]Ü
ÙK˜ÛY[Ü]›Y
ÙK˜ÛY[YV˜ŠJNÜ™]\›žÝÚY™K˜ÛY[ÚY
œ‹žZYÚ™K˜ÛY[ZYÚ
œ‹žK›Šœ‹žN›Êœ‹ž__JK
NÙ[Ù^ØÛÛœÝYYŠJNÛÏ^Þ˜Kž]žN˜KžK]žKÚY˜KÚYZYÚ˜KšZYÚ_\™]\›ˆ˜ŠÊ_Y[˜Ý[Ûˆ™ŠKK
^ØÛÛœÝÏU˜ŠJKP˜ŠJKH™š^YOO]XYŠKL‹JNÛ]Ï^ÜØÜ›ÛYŒØÜ›ÛÜŒNØÛÛœÝO]Š
NÚYŠ
ß\ŠI‰Š
˜›ÙHˆOOPXŠJ_ŠŠJI‰ŠÏ^˜ŠJJKÊJ^ØÛÛœÝOXYŠKL‹JNÚKžYKž
ØK˜ÛY[YKžOYKžJØK˜ÛY[ÜH[É‰›‰‰ŠKž]ŠŠJNØÛÛœÝÏH[ŸßÝŠ
N›ÙŠ‹ÊNÜ™]\›žÞ››Y
ÜËœØÜ›ÛYZKžXËžN›Ü
ÜËœØÜ›ÛÜZKžKXËžKÚY›ÚYZYÚ›šZYÚ_Y[˜Ý[ÛˆŠJ^Ü™]\›ˆœÝ]XÈOORXŠJKœÜÚ][ÛŸY[˜Ý[ÛˆÙŠKJ^ÚYŠU˜ŠJ_™š^YOORXŠJKœÜÚ][ÛŠ\™]\›ˆ[ÚYŠJ\™]\›ˆJJNÛ]YK›Ù™œÙ]\™[Ü™]\›ˆ˜ŠJOOO]	‰Š]›ÝÛ™\‘ØÝ[Y[˜›ÙJKY[˜Ý[ÛˆÙŠKJ^ØÛÛœÝQŠJNÚYŠØŠJJ\™]\›ˆÚYŠU˜ŠJJ^Û]OUXŠJNÙ›ÜŠØI‰ˆZ˜ŠJNÊ^ÚYŠŠJI‰ˆ[ŠJJ\™]\›ˆNØOUXŠJ_\™]\›ˆ[]Ï\ÙŠKJNÙ›ÜŠÛÉ‰‘˜ŠÊI‰›ŠÊNÊ[Ï\ÙŠËJNÜ™]\›ˆÉ‰š˜ŠÊI‰›ŠÊI‰ˆS˜ŠÊOÝ›ß[˜Ý[ÛŠJ^Û]OUXŠJNÙ›ÜŠÕ˜ŠJI‰ˆZ˜ŠJNÊ^ÚYŠ˜ŠJJ\™]\›ˆNÚYŠØŠJJ\™]\›ˆ[ØOUXŠJ_\™]\›ˆ[JJ_XÛÛœÝY^ØÛÛ™\Ù™œÙ]\™[™[]]™T™XÝÕšY]ÜÜ™[]]™T™XÝ™[˜Ý[ÛŠJ^Û]Ù[[Y[Î˜K™XÝÙ™œÙ]\™[›ËÝ˜]YÞN›ŸOYNØÛÛœÝH™š^YOO[‹P˜ŠÊKÏHHXI‰‘ØŠK™›Ø][™ÊNÚYŠÏOO[É‰œŠ\™]\›ˆÛ]O^ÜØÜ›ÛYŒØÜ›ÛÜŒKÏ]ŠJNØÛÛœÝO]Š
KOU˜ŠÊNÚYŠ
_\ŠI‰Š
˜›ÙHˆOOPXŠÊ_Š
JI‰ŠO^˜ŠÊJKJJ^ØÛÛœÝOXYŠÊNØÏV˜ŠÊKKžYKž
ÛË˜ÛY[YKžOYKžJÛË˜ÛY[ÜXÛÛœÝH[_ÝŠ
N›ÙŠJNÜ™]\›žÝÚYÚY
˜ËžZYÚšZYÚ
˜ËžKž
˜ËžZKœØÜ›ÛY
˜Ëž
ÝKž
ÜžNžJ˜ËžKZKœØÜ›ÛÜ
˜ËžJÝKžJÜž__KÙ]ØÝ[Y[[[Y[˜‹Ù]Û\[™Ô™XÝ™[˜Ý[ÛŠJ^Û]Ù[[Y[˜K›Ý[™\žN›ÛÝ›Ý[™\žN›ËÝ˜]YÞN›ŸOYNØÛÛœÝVË‹‹ˆ˜Û\[™Ð[˜Ù\ÝÜœÈOO]ÑØŠJOÖ×N™[˜Ý[ÛŠKJ^ØÛÛœÝXK™Ù]
JNÚYŠ
\™]\›ˆÛ]ÏR˜ŠK×KLJK™š[\ŠOO•ŠJI‰ˆ˜›ÙHˆOOPXŠJJK[[ØÛÛœÝH™š^YOORXŠJKœÜÚ][ÛŽÛ]\ÕXŠJN™NÙ›ÜŠÕŠ
I‰ˆZ˜Š
NÊ^ØÛÛœÝORXŠ
KOS˜Š
K[Û‹œÜÚ][ÛŽœÈ™š^YŽˆˆŽØ_™š^YˆOO]	‰Š˜XœÛÛ]HˆOO]œÝ]XÈˆOOYKœÜÚ][ÛŠOÛYN›Ï[Ë™š[\ŠOO™HOO[
KUXŠ
_\™]\›ˆKœÙ]
KÊKßJK\Ë—ØÊN–×K˜ÛÛ˜Ø]

K×K[™ŠK–ÌKŠNÛ]Ï[ÜO[œšYÚÏ[˜›ÝÛKO[›YÙ›ÜŠ]OLNÛO‹›[™ÝÛJÊÊ^ØÛÛœÝO[™ŠK–ÛWKŠNÜÏTZ
KÜÊKOVš
KœšYÚJKÏVš
K˜›ÝÛKÊKOTZ
K›YJ_\™]\›žÝÚYšK]KZYÚ˜Ë\ËKNœß_KÙ]Ù™œÙ]\™[˜Ù‹Ù][[Y[™XÝÎ˜\Þ[˜È[˜Ý[ÛŠJ^ØÛÛœÝO]\Ë™Ù]Ù™œÙ]\™[Ù‹]\Ë™Ù][Y[œÚ[ÛœËÏX]ØZ]
K™›Ø][™ÊNÜ™]\›žÜ™Y™\™[˜ÙNœ™ŠKœ™Y™\™[˜ÙK]ØZ]JK™›Ø][™ÊKKœÝ˜]YÞJK›Ø][™ÎžÞŒNŒÚY›ËÚYZYÚ›ËšZYÚ__KÙ]ÛY[™XÝÎ™[˜Ý[ÛŠJ^Ü™]\›ˆK™Ù]ÛY[™XÝÏÐ\œ˜^K™œ›ÛJK™Ù]ÛY[™XÝÊ
JN–×_KÙ][Y[œÚ[ÛœÎ™[˜Ý[ÛŠJ^ØÛÛœÝÝÚY˜KZYÚOIŠJNÜ™]\›žÝÚY˜KZYÚ_KÙ]ØØ[N–˜‹\Ñ[[Y[•‹\Ô•™[˜Ý[ÛŠJ^Ü™]\›ˆœOORXŠJK™\™XÝ[ÛŸ_NÙ[˜Ý[ÛˆYŠKJ^Ü™]\›ˆKžOOXKž	‰™KžOOOXKžI‰™KÚYOOXKÚY	‰™KšZYÚOOXKšZYÚY[˜Ý[ÛˆŠKKÊ^Ý›ÚYOO[É‰ŠÏ^ßJNØÛÛœÝØ[˜Ù\ÝÜ”ØÜ›Û›HL[˜Ù\ÝÜ”™\Ú^™NœHL[[Y[™\Ú^™N›H™[˜Ý[ÛˆOO]\[Ùˆ™\Ú^™SØœÙ\™\‹^[Ý]ÚYœÏH™[˜Ý[ÛˆOO]\[Ùˆ[\œÙXÝ[Û“ØœÙ\™\‹[š[X][Û‘œ˜[YNšOHL_O[ËÏVŠJKO[ŸÖË‹‹˜ÏÒ˜ŠÊN–×K‹‹˜OÒ˜ŠJN–×WN–×NÝK™›Ü‘XXÚ
OOžÛ‰‰™K˜Y]™[\Ý[™\ŠœØÜ›Û‹
K‰‰™K˜Y]™[\Ý[™\Šœ™\Ú^™H‹
_JNØÛÛœÝOXÉ‰œÏÙ[˜Ý[ÛŠKK
^Û]Ë[[ØÛÛœÝP˜ŠJNÙ[˜Ý[Ûˆ

^Ý˜\ˆNØÛX\•[Y[Ý]
ÊK[OJO[Š_K™\ØÛÛ›™XÝ

K[[Y[˜Ý[ÛˆÊJ^Ý›ÚYOO]	‰ŠHLJK›ÚYOOZI‰ŠOLJK

NØÛÛœÝÏYK™Ù]›Ý[™[™ÐÛY[™XÝ

KÛYKÜ›KÚYœZYÚ™OXÎÚYŠJ
K\Y
\™]\›ŽØÛÛœÝO^Ü›ÛÝX\™Ú[Ž‹XXŠJJÈœŠËXXŠ‹˜ÛY[ÚYJJÜ
JJÈœŠËXXŠ‹˜ÛY[ZYÚJJÙ
JJÈœŠËXXŠJJÈœ‹™\ÚÛ”Z
š
KJJ__NÛ]ÏHLÙ[˜Ý[Ûˆ
J^ØÛÛœÝXVÌKš[\œÙXÝ[Û”˜][ÎÚYŠ[YŠËK™Ù]›Ý[™[™ÐÛY[™XÝ

JJ\™]\›ˆÊ
NÚYŠOOZJ^ÚYŠYÊ\™]\›ˆÊ
NÝÜÊLK
N›Ï\Ù][Y[Ý]


OOžÜÊLKYKMÊ_KYLÊ_YÏHL_]ž^Û[™]È[\œÙXÝ[Û“ØœÙ\™\ŠË‹‹žK›ÛÝœ‹›ÝÛ™\‘ØÝ[Y[J_XØ]Ú
J^Û[™]È[\œÙXÝ[Û“ØœÙ\™\ŠJ_[‹›ØœÙ\™JJ_XÛÛœÝOQŠJKÏJ
OOœÊ
NÜ™]\›ˆK˜Y]™[\Ý[™\Šœ™\Ú^™H‹ÊKÊL
K

OOžÚKœ™[[Ý™Q]™[\Ý[™\Šœ™\Ú^™H‹ÊK

__JËŠN›[Û]KLKO[[Û	‰ŠO[™]È™\Ú^™SØœÙ\™\ŠOOžÛ]Û×OYNÛÉ‰›Ë\™Ù]OOXÉ‰žI‰˜I‰ŠK[›ØœÙ\™JJKØ[˜Ù[[š[X][Û‘œ˜[YJ
K\™\]Y\Ý[š[X][Û‘œ˜[YJ

OOžÝ˜\ˆNÛ[OJO^J_K›ØœÙ\™JJ_JJK

_JKÉ‰ˆZI‰žK›ØœÙ\™JÊKI‰žK›ØœÙ\™JJJNÛ]ÏZOØYŠJN›[Ü™]\›ˆI‰™[˜Ý[ÛˆJ
^ØÛÛœÝÏXYŠJNÙÉ‰ˆ[YŠËÊI‰

NÙÏ[Ë\™\]Y\Ý[š[X][Û‘œ˜[YJJ_J
K

K

OOžÝ˜\ˆNÝK™›Ü‘XXÚ
OOžÛ‰‰™Kœ™[[Ý™Q]™[\Ý[™\ŠœØÜ›Û‹
K‰‰™Kœ™[[Ý™Q]™[\Ý[™\Šœ™\Ú^™H‹
_JK[O[_J
K[OJO^J_K™\ØÛÛ›™XÝ

KO[[I‰˜Ø[˜Ù[[š[X][Û‘œ˜[YJ
__XÛÛœÝY[˜Ý[ÛŠJ^Ü™]\›ˆ›ÚYOOYI‰ŠOL
KÛ˜[YNˆ›Ù™œÙ]‹Ü[ÛœÎ™K\Þ[˜È›ŠJ^Ý˜\ˆÎØÛÛœÝÞ›‹Nœ‹XÙ[Y[›ZY]Ø\™Q]NœßOXKOX]ØZ]\Þ[˜È[˜Ý[ÛŠKJ^ØÛÛœÝÜXÙ[Y[]›Ü›N›Ë[[Y[Î›ŸOYKX]ØZ]
[O[Ëš\Ô•Ý›ÚY›Ëš\Ô•
‹™›Ø][™ÊJK[Š
KÏ\ØŠ
KOHžHOO]XŠ
KÏTØ‹š\Ê
OËLNŒKO\‰‰šOËLNŒKO\˜ŠKJNÛ]ÛXZ[^\ÎœÜ›ÜÜÐ^\Î™[YÛ›Y[^\Îž_OH›[X™\ˆOO]\[ÙˆOÞÛXZ[^\Î›KÜ›ÜÜÐ^\ÎŒ[YÛ›Y[^\Î›[NžÛXZ[^\Î›K›XZ[^\ßÜ›ÜÜÐ^\Î›K˜Ü›ÜÜÐ^\ß[YÛ›Y[^\Î›K˜[YÛ›Y[^\ßNÜ™]\›ˆÉ‰ˆ›[X™\ˆOO]\[ÙˆI‰ŠH™[™OO\ÏËLJžNžJKOÞÞ™
KNœ
˜ßNžÞœ
˜ËN™
__JKJNÜ™]\›ˆOOJ[OJ\Ë›Ù™œÙ]
OÝ›ÚYœXÙ[Y[
I‰›[OJÏ\Ë˜\œ›ÝÊI‰›Ë˜[YÛ›Y[Ù™œÙ]ÞßNžÞ›ŠÚKžNœŠÚKžK]NžË‹‹šKXÙ[Y[›____KYY[˜Ý[ÛŠJ^Ü™]\›ˆ›ÚYOOYI‰ŠO^ßJKÛ˜[YNˆœÚY‹Ü[ÛœÎ™K\Þ[˜È›ŠJ^ØÛÛœÝÞN›ËXÙ[Y[›‹]›Ü›NœŸOXKÛXZ[^\Î›HLÜ›ÜÜÐ^\ÎœÏHLK[Z]\ŽšO^Ù›Ž™OOžÛ]Þ˜KNOYNÜ™]\›žÞ˜KN__K‹‹˜ßO\˜ŠKJKO^ÞN›ßKOX]ØZ]‹™]XÝÝ™\™›ÝÊKÊK]XŠŠKZXŠ
NÛ]O]VÙKÏ]VÜNØÛÛœÝJKJOO›˜ŠJÛVÈžHOOYOÈÜŽˆ›Y—KKK[VÈžHOOYOÈ˜›ÝÛHŽˆœšYÚ—JNÛ	‰ŠOZ
JJKÉ‰ŠÏZ
ÊJNØÛÛœÝZK™›ŠË‹‹˜KÙNžKÜN™ßJNÜ™]\›žË‹‹˜‹]NžÞ˜‹ž]N˜‹žK[Ë[˜X›YžÖÙN›ÜNœß_____KÙY[˜Ý[ÛŠJ^Ü™]\›ˆ›ÚYOOYI‰ŠO^ßJKÛ˜[YNˆ™›\‹Ü[ÛœÎ™K\Þ[˜È›ŠJ^Ý˜\ˆÎØÛÛœÝÜXÙ[Y[›‹ZY]Ø\™Q]Nœ‹™XÝÎ›[š]X[XÙ[Y[œË]›Ü›NšK[[Y[Î˜ßOXKÛXZ[^\ÎOHLÜ›ÜÜÐ^\Î›OHL˜[˜XÚÔXÙ[Y[Îœ˜[˜XÚÔÝ˜]YÞN™H˜™\Ýš]‹˜[˜XÚÐ^\ÔÚYQ\™XÝ[ÛŽžOH››Û™H‹›\[YÛ›Y[™ÏHL‹‹šO\˜ŠKJNÚYŠ[OJ\‹˜\œ›ÝÊI‰˜[YÛ›Y[Ù™œÙ]
\™]\›žßNØÛÛœÝ[ŠŠK]XŠÊKÏ[ŠÊOOO\ËX]ØZ]
[OZKš\Ô•Ý›ÚYšKš\Ô•
Ë™›Ø][™ÊJKÏ\
ßYÏÖÙ˜ŠÊWN™[˜Ý[ÛŠJ^ØÛÛœÝOY˜ŠJNÜ™]\›–ÜŠJKKŠJW_JÊJKÏH››Û™HˆOO^NÈ\	‰É‰—Ëœ\Ú
‹‹˜˜ŠËËKŠJNØÛÛœÝVÜË‹‹—×KÏX]ØZ]K™]XÝÝ™\™›ÝÊK
KÏV×NÛ]J[OJÏ\‹™›\
OÝ›ÚY›Ë›Ý™\™›ÝÜÊ_×NÚYŠI‰”Ëœ\Ú
ÖØ—JKJ^ØÛÛœÝOY[˜Ý[ÛŠKK
^Ý›ÚYOO]	‰ŠHLJNØÛÛœÝÏ\ØŠJK[XŠJKXØŠŠNÛ]HžOO[ÛÏOOJÈ™[™ŽˆœÝ\ŠOÈœšYÚŽˆ›YŽˆœÝ\OO[ÏÈ˜›ÝÛHŽˆÜŽÜ™]\›ˆKœ™Y™\™[˜ÙVÜ—O˜K™›Ø][™ÖÜ—I‰ŠY˜Š
JKÛ˜Š
W_J‹ŠNÔËœ\Ú
ÖÙVÌWKÖÙVÌWWJ_ZYŠVË‹‹“ÜXÙ[Y[›‹Ý™\™›ÝÜÎ”ßWKTË™]™\žJOO™OL
J^Ý˜\ˆKØÛÛœÝOJ
[OJO\‹™›\
OÝ›ÚYKš[™^
_
JÌKO^ÙWNÚYŠJ^ÚYŠJ˜[YÛ›Y[OO[I‰™ˆOO]XŠJJ_™]™\žJOOXŠKœXÙ[Y[
HOOYŸK›Ý™\™›ÝÜÖÌOŒ
J\™]\›žÙ]NžÚ[™^™KÝ™\™›ÝÜÎ“K™\Ù]žÜXÙ[Y[˜___[][[OJS™š[\ŠOO™K›Ý™\™›ÝÜÖÌOL
KœÛÜ

KJOO™K›Ý™\™›ÝÜÖÌWKXK›Ý™\™›ÝÜÖÌWJVÌJOÝ›ÚY‘œXÙ[Y[ÚYŠ]
\ÝÚ]Ú

^ØØ\ÙH˜™\Ýš]ŽžÝ˜\ˆŽØÛÛœÝO[[OJS™š[\ŠOOžÚYŠÊ^ØÛÛœÝO]XŠKœXÙ[Y[
NÜ™]\›ˆOOOYŸžHOOX_\™]\›ˆLJK›X\
OO–ÙKœXÙ[Y[K›Ý™\™›ÝÜË™š[\ŠOO™OŒ
Kœ™YXÙJ
KJOO™JØK
WJKœÛÜ

KJOO™VÌWKXVÌWJVÌJOÝ›ÚY–ÌNÙI‰ŠYJNØœ™XZßXØ\ÙHš[š]X[XÙ[Y[Ž\ßZYŠˆOO]
\™]\›žÜ™\Ù]žÜXÙ[Y[__\™]\›žß___KY[˜Ý[ÛŠJ^Ü™]\›ˆ›ÚYOOYI‰ŠO^ßJKÛ˜[YNˆœÚ^™H‹Ü[ÛœÎ™K\Þ[˜È›ŠJ^ØÛÛœÝÜXÙ[Y[™XÝÎ›Ë]›Ü›N›‹[[Y[ÎœŸOXKØ\N›J
OOžßK‹‹œßO\˜ŠKJKOX]ØZ]‹™]XÝÝ™\™›ÝÊKÊKÏ[Š
KO\ØŠ
KOHžHOO]XŠ
KÝÚYœZYÚ™O[Ë™›Ø][™ÎÛ]KÎÈÜOOXß˜›ÝÛHOOXÏÊOXËÏ]OOOJ]ØZ]
[O[‹š\Ô•Ý›ÚY›‹š\Ô•
‹™›Ø][™ÊJOÈœÝ\Žˆ™[™ŠOÈ›YŽˆœšYÚŠNŠÏXËOH™[™OO]OÈÜŽˆ˜›ÝÛHŠNØÛÛœÝYZKÜZK˜›ÝÛK\ZK›YZKœšYÚVš
ZVÞWK
KÏVš
ZVÙ×KŠKXK›ZY]Ø\™Q]KœÚYÏH]ŽÛ]ÏY‹]ÎÛ[O]‰‰‹™[˜X›Yž	‰ŠXŠK[O]‰‰‹™[˜X›YžI‰ŠÏZ
KÉ‰ˆ]I‰ŠOÞ\LŠ”Z
K›YKœšYÚ
NÏYLŠ”Z
KÜK˜›ÝÛJJK]ØZ]
Ë‹‹˜K]˜Z[X›UÚYž]˜Z[X›RZYÚßJNØÛÛœÝÏX]ØZ]‹™Ù][Y[œÚ[ÛœÊ‹™›Ø][™ÊNÜ™]\›ˆOOZËÚYOOZËšZYÚÞÜ™\Ù]žÜ™XÝÎˆL_Nžß___K™Y[˜Ý[ÛŠJ^Ü™]\›ˆ›ÚYOOYI‰ŠO^ßJKÛ˜[YNˆšYH‹Ü[ÛœÎ™K\Þ[˜È›ŠJ^ØÛÛœÝÜ™XÝÎ]›Ü›N›ßOXKÜÝ˜]YÞN›Hœ™Y™\™[˜ÙRY[ˆ‹‹‹œŸO\˜ŠKJNÜÝÚ]Ú
Š^ØØ\ÙHœ™Y™\™[˜ÙRY[ˆŽžØÛÛœÝO^Š]ØZ]Ë™]XÝÝ™\™›ÝÊKË‹‹œ‹[[Y[ÛÛ^ˆœ™Y™\™[˜ÙHŸJKœ™Y™\™[˜ÙJNÜ™]\›žÙ]NžÜ™Y™\™[˜ÙRY[“Ù™œÙ]Î™K™Y™\™[˜ÙRY[ŽšØŠJ___XØ\ÙH™\ØØ\YŽžØÛÛœÝO^Š]ØZ]Ë™]XÝÝ™\™›ÝÊKË‹‹œ‹[›Ý[™\žNˆLJK™›Ø][™ÊNÜ™]\›žÙ]NžÙ\ØØ\YÙ™œÙ]Î™K\ØØ\YšØŠJ___YY˜][œ™]\›žß____K™YOOŠÛ˜[YNˆ˜\œ›ÝÈ‹Ü[ÛœÎ™K\Þ[˜È›ŠJ^ØÛÛœÝÞN›ËXÙ[Y[›‹™XÝÎœ‹]›Ü›N›[[Y[ÎœËZY]Ø\™Q]Nš_OXKÙ[[Y[˜ËY[™ÎOLO\˜ŠKJ_ßNÚYŠ[OXÊ\™]\›žßNØÛÛœÝO]ØŠJK^ÞN›ßK[XŠŠKOXØŠ
KÏX]ØZ]™Ù][Y[œÚ[ÛœÊÊKHžHOOYZÈÜŽˆ›Y‹ZÈ˜›ÝÛHŽˆœšYÚ‹ÏZÈ˜ÛY[ZYÚŽˆ˜ÛY[ÚY‹\‹œ™Y™\™[˜ÙVÞWJÜ‹œ™Y™\™[˜ÙVÙK\ÙK\‹™›Ø][™ÖÞWKÏ\ÙK\‹œ™Y™\™[˜ÙVÙKÏX]ØZ]
[O[™Ù]Ù™œÙ]\™[Ý›ÚY›™Ù]Ù™œÙ]\™[
ÊJNÛ]PÏÐÖÝ×NŒÞ	‰˜]ØZ]
[O[š\Ñ[[Y[Ý›ÚY›š\Ñ[[Y[
ÊJ_
\Ë™›Ø][™ÖÝ×_‹™›Ø][™ÖÞWJNØÛÛœÝÏ]‹Ì‹WËÌ‹Ï^Ì‹YÖÞWKÌ‹LKVš
VØ—KÊKOVš
VÙ—KÊK^YÖÞWKPK^Ì‹YÖÞWKÌŠÚËO[˜Š‹
KHZK˜\œ›ÝÉ‰›[O\ØŠŠI‰ˆOOSI‰œ‹œ™Y™\™[˜ÙVÞWKÌ‹JÓJKYÖÞWKÌUÐÐ‹S‹QŒÜ™]\›žÖÙNœÙJÕ‹]NžÖÙN“KÙ[\“Ù™œÙ]‹SKU‹‹‹•	‰žØ[YÛ›Y[Ù™œÙ]•Ÿ_K™\Ù]•__JKÙY[˜Ý[ÛŠJ^Ü™]\›ˆ›ÚYOOYI‰ŠO^ßJKÛÜ[ÛœÎ™K›ŠJ^Ý˜\ˆÎØÛÛœÝÞ›‹Nœ‹XÙ[Y[›™XÝÎœËZY]Ø\™Q]Nš_OXKÛÙ™œÙ]˜ÏLXZ[^\ÎOHLÜ›ÜÜÐ^\Î›OHLO\˜ŠKJK^Þ›‹NœŸK]XŠ
KOZXŠ
NÛ]Ï\ÞWK\ÙNØÛÛœÝ\˜ŠËJKH›[X™\ˆOO]\[ÙˆÞÛXZ[^\Î˜‹Ü›ÜÜÐ^\ÎŒNžÛXZ[^\Î›[OJX‹›XZ[^\ÊOÝŒÜ›ÜÜÐ^\Î›[OJÏX‹˜Ü›ÜÜÐ^\ÊOÛÎŒNÚYŠJ^ØÛÛœÝOHžHOO^OÈšZYÚŽˆÚY‹O\Ëœ™Y™\™[˜ÙVÞWK\Ë™›Ø][™ÖÙWJÙ‹›XZ[^\Ë\Ëœ™Y™\™[˜ÙVÞWJÜËœ™Y™\™[˜ÙVÙWKY‹›XZ[^\ÎÙÏOÙÏXN™Ï	‰ŠÏ]
_ZYŠJ^Ý˜\ˆËŽØÛÛœÝOHžHOO^OÈÚYŽˆšZYÚ‹OTØ‹š\ÊŠ
JK\Ëœ™Y™\™[˜ÙVÙK\Ë™›Ø][™ÖÙWJÊI‰Š[OJÏZK›Ù™œÙ]
OÝ›ÚYÖÙJ_
JÊOÌ™‹˜Ü›ÜÜÐ^\ÊKÏ\Ëœ™Y™\™[˜ÙVÙJÜËœ™Y™\™[˜ÙVÙWJÊOÌŠ[OJZK›Ù™œÙ]
OÝ›ÚY–ÙJ_
KJOÙ‹˜Ü›ÜÜÐ^\ÎŒ
NÚÚ]š›É‰Š[Ê_\™]\›žÖÞWN™ËÙNš___K™JKK
OOžØÛÛœÝÏ[™]ÈX\[[O]ÝžßK^Ë‹‹Y‹‹‹›‹œ]›Ü›KØÎ›ßNÜ™]\›Š\Þ[˜ÊKK
OOžØÛÛœÝÜXÙ[Y[›ÏH˜›ÝÛH‹Ý˜]YÞN›H˜XœÛÛ]H‹ZY]Ø\™NœV×K]›Ü›N›O]Ï[™]XÝÝ™\™›ÝÏÛžË‹‹›]XÝÝ™\™›ÝÎØŸKOX]ØZ]
[O[š\Ô•Ý›ÚY›š\Ô•
JJNÛ]ÏX]ØZ]™Ù][[Y[™XÝÊÜ™Y™\™[˜ÙN™K›Ø][™Î˜KÝ˜]YÞN›ŸJKÞKN›_OWØŠËËJK[ËLØÛÛœÝO^ßNÙ›ÜŠ]ÏLÙÏ‹›[™ÝÙÊÊÊ^ØÛÛœÝ\–Ù×NÚYŠ]
XÛÛ[YNØÛÛœÝÛ˜[YNš›Ž˜ŸO]Þ™‹NË]N‹™\Ù]—ßOX]ØZ]ŠÞKN›K[š]X[XÙ[Y[›ËXÙ[Y[œÝ˜]YÞN›‹ZY]Ø\™Q]NžK™XÝÎ˜Ë]›Ü›NœË[[Y[ÎžÜ™Y™\™[˜ÙN™K›Ø][™Î˜__JNÝO[[OYÙŽKO[[O]ÏÝÎ›KVÚO^Ë‹‹žVÚK‹‹ŸKÉ‰™L	‰Š
ÊË›Øš™XÝOO]\[ÙˆÉ‰ŠËœXÙ[Y[	‰ŠWËœXÙ[Y[
KËœ™XÝÉ‰ŠÏHLOOWËœ™XÝÏØ]ØZ]™Ù][[Y[™XÝÊÜ™Y™\™[˜ÙN™K›Ø][™Î˜KÝ˜]YÞN›ŸJN—Ëœ™XÝÊK
ÞKN›_OWØŠËJJJKÏKLJ_\™]\›žÞKN›KXÙ[Y[œÝ˜]YÞN›‹ZY]Ø\™Q]Nž__JJKKË‹‹›‹]›Ü›NœŸJ_NÝ˜\ˆÙH[™Yš[™YˆOO]\[ÙˆØÝ[Y[ÚJ
K\ÙS^[Ý]Y™™XÝ™[˜Ý[ÛŠ
^ßNÙ[˜Ý[ÛˆÙŠKJ^ÚYŠOOOXJ\™]\›ˆLÚYŠ\[ÙˆHOO]\[ÙˆJ\™]\›ˆLNÚYŠ™[˜Ý[ÛˆOO]\[ÙˆI‰™KÔÝš[™Ê
OOOXKÔÝš[™Ê
J\™]\›ˆLÛ]ËŽÚYŠI‰˜I‰ˆ›Øš™XÝOO]\[ÙˆJ^ÚYŠ\œ˜^Kš\Ð\œ˜^JJJ^ÚYŠYK›[™ÝOOXK›[™Ý
\™]\›ˆLNÙ›ÜŠÏ]ÌOO[ËKNÊZYŠPÙŠVÛ×KVÛ×JJ\™]\›ˆLNÜ™]\›ˆLZYŠSØš™XÝšÙ^\ÊJK[‹›[™ÝOOSØš™XÝšÙ^\ÊJK›[™Ý
\™]\›ˆLNÙ›ÜŠÏ]ÌOO[ËKNÊZYŠ^ßKš\ÓÝÛ”›Ü\K˜Ø[
K–Û×JJ\™]\›ˆLNÙ›ÜŠÏ]ÌOO[ËKNÊ^ØÛÛœÝ[–Û×NÚYŠ
—ÛÝÛ™\ˆˆOO]YK‰	\[ÙŠI‰ˆPÙŠVÝKVÝJJ\™]\›ˆL_\™]\›ˆL\™]\›ˆHOOYI‰˜HOOX_Y[˜Ý[ÛˆŠJ^ÚYŠ[™Yš[™YOO]\[ÙˆÚ[™ÝÊ\™]\›ˆNÜ™]\›ŠK›ÝÛ™\‘ØÝ[Y[™Y˜][šY]ßÚ[™ÝÊK™]šXÙT^[˜][ß_Y[˜Ý[ÛˆÙŠKJ^ØÛÛœÝ^ŠJNÜ™]\›ˆX]œ›Ý[™
J
KÝY[˜Ý[ÛˆÙŠJ^ØÛÛœÝOZJ
K\ÙT™YŠJNÜ™]\›ˆÙŠ

OOžØK˜Ý\œ™[Y_JK_XÛÛœÝJKJOOžØÛÛœÝYŠJNÜ™]\›žÛ˜[YN›˜[YK›Ž™›‹Ü[ÛœÎ–ÙKW__KYJKJOOžØÛÛœÝ^YŠJNÜ™]\›žÛ˜[YN›˜[YK›Ž™›‹Ü[ÛœÎ–ÙKW__KJKJOOžØÛÛœÝYÙŠJNÜ™]\›žÛ˜[YN›˜[YK›Ž™›‹Ü[ÛœÎ–ÙKW__K™JKJOOžØÛÛœÝZŠJNÜ™]\›žÛ˜[YN›˜[YK›Ž™›‹Ü[ÛœÎ–ÙKW__KYJKJOOžØÛÛœÝX™ŠJNÜ™]\›žÛ˜[YN›˜[YK›Ž™›‹Ü[ÛœÎ–ÙKW__KJKJOOžØÛÛœÝJOOŠÛ˜[YNˆ˜\œ›ÝÈ‹Ü[ÛœÎ™K›ŠJ^ØÛÛœÝÙ[[Y[Y[™Î›ßOH™[˜Ý[ÛˆOO]\[ÙˆOÙJJN™NÜ™]\›ˆ	‰Š]ßKš\ÓÝÛ”›Ü\K˜Ø[
‹˜Ý\œ™[ŠJOÛ[O]˜Ý\œ™[Ù™ŠÙ[[Y[˜Ý\œ™[Y[™Î›ßJK™›ŠJNžßNÙ™ŠÙ[[Y[Y[™Î›ßJK™›ŠJNžßNÝ˜\ˆŸ_JJJJNÜ™]\›žÛ˜[YN›˜[YK›Ž™›‹Ü[ÛœÎ–ÙKW__NÝ˜\ˆ™ZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝØÚ[™[ŽÚY›ÏLLZYÚ›MK‹‹œŸOYNÜ™]\›ŠÊ
KšœÞ
JšœÝ™ËË‹‹œ‹™YŽ˜KÚY›ËZYÚ›‹šY]Ð›ÞˆŒÌL‹™\Ù\™P\ÜXÝ˜][Îˆ››Û™H‹Ú[™[Ž™K˜\ÐÚ[ÝŠÊ
KšœÞ
JœÛYÛÛˆ‹ÜÚ[ÎˆŒÌMKLŸJ_J_JNÕ™‹™\Ü^S˜[YOH\œ›ÝÈŽÝ˜\ˆ™U™ŽÙ[˜Ý[ÛˆŠJ^ØÛÛœÝØKOZJ
K\ÙTÝ]J›ÚY
NÜ™]\›ˆZ


OOžÚYŠJ^Ý
ÝÚY™K›Ù™œÙ]ÚYZYÚ™K›Ù™œÙ]ZYÚJNØÛÛœÝO[™]È™\Ú^™SØœÙ\™\ŠOOžÚYŠP\œ˜^Kš\Ð\œ˜^JJJ\™]\›ŽÚYŠXK›[™Ý
\™]\›ŽØÛÛœÝÏXVÌNÛ]‹ŽÚYŠ˜›Ü™\›ÞÚ^™Hš[ˆÊ^ØÛÛœÝO[Ë˜›Ü™\›ÞÚ^™KOP\œ˜^Kš\Ð\œ˜^JJOÙVÌN™NÛXKš[›[™TÚ^™KXK˜›ØÚÔÚ^™_Y[ÙHYK›Ù™œÙ]ÚYYK›Ù™œÙ]ZYÚÝ
ÝÚY›‹ZYÚœŸJ_JNÜ™]\›ˆK›ØœÙ\™JKØ›Þˆ˜›Ü™\‹X›ÞŸJK

OO˜K[›ØœÙ\™JJ_]
›ÚY
_KÙWJK_]˜\ˆ™H”Ü\ˆ‹ÑÙ‹Ù—O\
™ŠKÓÙ‹Y—OQÙŠ™ŠKYOOžØÛÛœÝ××ÜØÛÜTÜ\Ž˜KÚ[™[ŽOYKÛË—OZJ
K\ÙTÝ]J[
NÜ™]\›ŠÊ
KšœÞ
JÙ‹ÜØÛÜN˜K[˜ÚÜŽ›ËÛ[˜ÚÜÚ[™ÙN›‹Ú[™[ŽJ_NÒ‹™\Ü^S˜[YOQ™ŽÝ˜\ˆ™H”Ü\[˜ÚÜˆ‹ÙZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÜ\Žš\X[™YŽ›Ë‹‹›ŸOYKQYŠ™‹
KZJ
K\ÙT™YŠ[
KÏPžJK
NÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžÜ‹›Û[˜ÚÜÚ[™ÙJÏË˜Ý\œ™[˜Ý\œ™[
_JKÏÛ[ŠÊ
KšœÞ
Jš™]‹Ë‹‹›‹™YŽ˜ßJ_JNÒÙ‹™\Ü^S˜[YOS™ŽÝ˜\ˆ™H”Ü\ÛÛ[‹ÒY‹™—OQÙŠ™ŠKYZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÜ\ŽÚYN›ÏH˜›ÝÛH‹ÚYSÙ™œÙ]œL[YÛŽ›H˜Ù[\ˆ‹[YÛ“Ù™œÙ]˜ÏL\œ›ÝÔY[™ÎOL]›ÚYÛÛ\Ú[ÛœÎ›OHLÛÛ\Ú[Û›Ý[™\žNœV×KÛÛ\Ú[Û”Y[™Î™LÝXÚÞNžOHœ\X[‹YUÚ[‘]XÚY™ÏHLK\]TÜÚ][Û”Ý˜]YÞNšH›Ü[Z^™Y‹Û”XÙY˜‹‹‹™ŸOYKÏQYŠ™‹
KÝ‹×OZJ
K\ÙTÝ]J[
KÏPžJKOO—ÊJJKÞ×OZJ
K\ÙTÝ]J[
KÏTŠ
KTÏËÚYÏÌOTÏËšZYÚÏÌ[ÊÊ˜Ù[\ˆˆOO[È‹HŠÛˆˆŠKH›[X™\ˆOO]\[ÙˆÙžÝÜŒšYÚŒ›ÝÛNŒYŒ‹‹™KOP\œ˜^Kš\Ð\œ˜^J
OÜ–ÜKSK›[™ÝŒ^ÜY[™Î‹›Ý[™\žN“K™š[\Š	ŠK[›Ý[™\žN•KÜ™YœÎ”‹›Ø][™ÔÝ[\Î”XÙ[Y[‘‹\ÔÜÚ][Û™Y‘ËZY]Ø\™Q]N•ßOY[˜Ý[ÛŠJ^Ý›ÚYOOYI‰ŠO^ßJNØÛÛœÝÜXÙ[Y[˜OH˜›ÝÛH‹Ý˜]YÞNH˜XœÛÛ]H‹ZY]Ø\™N›ÏV×K]›Ü›Nœ‹[[Y[ÎžÜ™Y™\™[˜ÙN››Ø][™ÎœßO^ßK˜[œÙ›Ü›N˜ÏHLÚ[Q[[Y[Ó[Ý[YKÜ[Ž›_OYKÜOZJ
K\ÙTÝ]JÞŒNŒÝ˜]YÞNXÙ[Y[˜KZY]Ø\™Q]NžßK\ÔÜÚ][Û™YˆL_JKÞK×OZJ
K\ÙTÝ]JÊNÐÙŠKÊ_ÊÊNØÛÛœÝÚ—OZJ
K\ÙTÝ]J[
KÙ‹×OZJ
K\ÙTÝ]J[
KZJ
K\ÙPØ[˜XÚÊOOžÙHOOZË˜Ý\œ™[	‰ŠË˜Ý\œ™[YKŠJJ_K×JKÏZJ
K\ÙPØ[˜XÚÊOOžÙHOOTË˜Ý\œ™[	‰ŠË˜Ý\œ™[YKÊJJ_K×JKÏ[\ß‹ÏZJ
K\ÙT™YŠ[
KÏZJ
K\ÙT™YŠ[
KZJ
K\ÙT™YŠ
KO[[O]KTÙŠJKTÙŠŠKOTÙŠJKZJ
K\ÙPØ[˜XÚÊ

OOžÚYŠZË˜Ý\œ™[TË˜Ý\œ™[
\™]\›ŽØÛÛœÝO^ÜXÙ[Y[˜KÝ˜]YÞNZY]Ø\™Nž_NÐ‹˜Ý\œ™[	‰ŠKœ]›Ü›OP‹˜Ý\œ™[
K™ŠË˜Ý\œ™[Ë˜Ý\œ™[JK[ŠOOžØÛÛœÝO^Ë‹‹™K\ÔÜÚ][Û™YˆLHOOSK˜Ý\œ™[NÕ‹˜Ý\œ™[	‰ˆPÙŠ˜Ý\œ™[JI‰Š˜Ý\œ™[XKŠ
K™›\ÚÞ[˜Ê

OOžÙ
J_JJ_J_KÞKK‹WJN×ÙŠ

OOžÈLOOO[I‰“˜Ý\œ™[š\ÔÜÚ][Û™Y	‰Š˜Ý\œ™[š\ÔÜÚ][Û™YHLK
OOŠË‹‹™K\ÔÜÚ][Û™YˆL_JJJ_KÛWJNØÛÛœÝZJ
K\ÙT™YŠLJN×ÙŠ

OOŠ‹˜Ý\œ™[HL

OOžÕ‹˜Ý\œ™[HL_JK×JKÙŠ

OOžÚYŠÉ‰ŠË˜Ý\œ™[PÊK	‰ŠË˜Ý\œ™[^
KÉ‰ž
^ÚYŠ˜Ý\œ™[
\™]\›ˆ˜Ý\œ™[
Ë
NÕ

__KÐËWJNØÛÛœÝZJ
K\ÙSY[[Ê

OOŠÜ™Y™\™[˜ÙNšË›Ø][™Î”ËÙ]™Y™\™[˜ÙN‹Ù]›Ø][™Î—ßJKÝ‹×JKZJ
K\ÙSY[[Ê

OOŠÜ™Y™\™[˜ÙNË›Ø][™ÎžJKÐËJKZJ
K\ÙSY[[Ê

OOžØÛÛœÝO^ÜÜÚ][ÛŽYŒÜŒNÚYŠT™›Ø][™Ê\™]\›ˆNØÛÛœÝOZÙŠ™›Ø][™Ëž
KÏZÙŠ™›Ø][™ËžJNÜ™]\›ˆÏÞË‹‹™K˜[œÙ›Ü›Nˆ˜[œÛ]JŠØJÈœŠÛÊÈœ
H‹‹‹žŠ™›Ø][™ÊOLKI‰žÝÚ[Ú[™ÙNˆ˜[œÙ›Ü›HŸ_NžÜÜÚ][ÛŽY˜KÜ›ß_KÝË™›Ø][™ËžžWJNÜ™]\›ˆJ
K\ÙSY[[Ê

OOŠË‹‹œ\]N•™YœÎ”‹[[Y[Î”›Ø][™ÔÝ[\Î‘ŸJKÜ‹—J_JÜÝ˜]YÞNˆ™š^Y‹XÙ[Y[‘Ú[Q[[Y[Ó[Ý[YŠ‹‹™JOOœŠ‹‹™KØ[š[X][Û‘œ˜[YNˆ˜[Ø^\ÈOOZJK[[Y[ÎžÜ™Y™\™[˜ÙNË˜[˜ÚÜŸKZY]Ø\™N–ÓŠÛXZ[^\ÎœŠÐK[YÛ›Y[^\Î˜ßJKI‰YŠÛXZ[^\ÎˆLÜ›ÜÜÐ^\ÎˆLK[Z]\Žˆœ\X[OO^OÞÙ›ŽÙŠÊK™›‹Ü[ÛœÎ–ÓËW_N›ÚY‹‹•ŸJKI‰‘ŠË‹‹•ŸJK™ŠË‹‹•‹\NŠÙ[[Y[Î™K™XÝÎ˜K]˜Z[X›UÚY]˜Z[X›RZYÚ›ßJOOžØÛÛœÝÝÚY›‹ZYÚœŸOXKœ™Y™\™[˜ÙKYK™›Ø][™ËœÝ[NÛœÙ]›Ü\J‹K\˜Y^\Ü\‹X]˜Z[X›K]ÚY‹	Ý\
KœÙ]›Ü\J‹K\˜Y^\Ü\‹X]˜Z[X›KZZYÚ‹	Ûß\
KœÙ]›Ü\J‹K\˜Y^\Ü\‹X[˜ÚÜ‹]ÚY‹	ÛŸ\
KœÙ]›Ü\J‹K\˜Y^\Ü\‹X[˜ÚÜ‹ZZYÚ‹	ÜŸ\
__JK	‰•ŠÙ[[Y[žY[™Î_JKŠØ\œ›ÝÕÚY“\œ›ÝÒZYÚ_JKÉ‰“YŠÜÝ˜]YÞNˆœ™Y™\™[˜ÙRY[ˆ‹‹‹•ŸJW_JNÝ˜\ˆËNØÛÛœÝÒ—OV™ŠŠKÏTÚ
ŠNÞZ


OOžÑÉ‰’ÏËŠ
_KÑË×JNØÛÛœÝUË˜\œ›ÝÏËžOUË˜\œ›ÝÏËžKLOOUË˜\œ›ÝÏË˜Ù[\“Ù™œÙ]ÕKWOZJ
K\ÙTÝ]J
NÜ™]\›ˆZ


OOžÝ‰‰œJÚ[™ÝË™Ù]ÛÛ\]YÝ[JŠKž’[™^
_KÝ—JK
Ê
KšœÞ
J™]ˆ‹Ü™YŽ”‹œÙ]›Ø][™Ë™]K\˜Y^\Ü\‹XÛÛ[]Ü˜\\ˆŽˆˆ‹Ý[NžË‹‹”˜[œÙ›Ü›N‘ÏÔ˜[œÙ›Ü›Nˆ˜[œÛ]JLŒ	JH‹Z[•ÚYˆ›X^XÛÛ[‹’[™^•K‹K\˜Y^\Ü\‹]˜[œÙ›Ü›K[ÜšYÚ[ˆŽ–ÕË˜[œÙ›Ü›SÜšYÚ[ËžË˜[œÙ›Ü›SÜšYÚ[ËžWKš›Ú[ŠˆŠK‹‹•ËšYOËœ™Y™\™[˜ÙRY[‰‰žÝš\ÚXš[]NˆšY[ˆ‹Ú[\‘]™[Îˆ››Û™HŸ_K\Ž™K™\‹Ú[™[ŽŠÊ
KšœÞ
JY‹ÜØÛÜNXÙYÚYN’Û\œ›ÝÐÚ[™ÙNšË\œ›ÝÖš‹\œ›ÝÖN’KÚÝ[YP\œ›ÝÎž‹Ú[™[ŽŠÊ
KšœÞ
Jš™]‹È™]K\ÚYHŽ’™]KX[YÛˆŽ“‹‹‹™‹™YŽËÝ[NžË‹‹™‹œÝ[K[š[X][ÛŽ‘ÏÝ›ÚYˆ››Û™HŸ_J_J_J_JNÕY‹™\Ü^S˜[YOZ™ŽÝ˜\ˆYH”Ü\\œ›ÝÈ‹™^ÝÜˆ˜›ÝÛH‹šYÚˆ›Y‹›ÝÛNˆÜ‹YˆœšYÚŸKYZJ
K™›ÜØ\™™YŠ[˜Ý[ÛŠKJ^ØÛÛœÝ××ÜØÛÜTÜ\Ž‹‹›ßOYK^™ŠY‹
KR™–Û‹œXÙYÚYWNÜ™]\›ŠÊ
KšœÞ
JœÜ[ˆ‹Ü™YŽ›‹›Û\œ›ÝÐÚ[™ÙKÝ[NžÜÜÚ][ÛŽˆ˜XœÛÛ]H‹Y›‹˜\œ›ÝÖÜ›‹˜\œ›ÝÖKÜ—NŒ˜[œÙ›Ü›SÜšYÚ[ŽžÝÜˆˆ‹šYÚˆŒ‹›ÝÛNˆ˜Ù[\ˆ‹YˆŒL	HŸVÛ‹œXÙYÚYWK˜[œÙ›Ü›NžÝÜˆ˜[œÛ]VJL	JH‹šYÚˆ˜[œÛ]VJL	JH›Ý]JLYÊH˜[œÛ]V
ML	JH‹›ÝÛNˆœ›Ý]JNYÊH‹Yˆ˜[œÛ]VJL	JH›Ý]JNLYÊH˜[œÛ]V
L	JHŸVÛ‹œXÙYÚYWKš\ÚXš[]N›‹œÚÝ[YP\œ›ÝÏÈšY[ˆŽ›ÚYKÚ[™[ŽŠÊ
KšœÞ
J™‹Ë‹‹›Ë™YŽ˜KÝ[NžË‹‹›ËœÝ[K\Ü^Nˆ˜›ØÚÈŸ_J_J_JNÙ[˜Ý[Ûˆ	ŠJ^Ü™]\›ˆ[OOY_VY‹™\Ü^S˜[YO\YŽÝ˜\ˆYOOŠÛ˜[YNˆ˜[œÙ›Ü›SÜšYÚ[ˆ‹Ü[ÛœÎ™K›ŠJ^ØÛÛœÝÜXÙ[Y[™XÝÎ›ËZY]Ø\™Q]N›ŸOXKLOO[‹˜\œ›ÝÏË˜Ù[\“Ù™œÙ]\Ì™K˜\œ›ÝÕÚYÏ\Ì™K˜\œ›ÝÒZYÚÚK×OV™Š
KO^ÜÝ\ˆŒ	H‹Ù[\ŽˆL	H‹[™ˆŒL	HŸVØ×KOJ‹˜\œ›ÝÏËžÏÌ
JÛÌ‹J‹˜\œ›ÝÏËžOÏÌ
JÜËÌŽÛ]Hˆ‹OHˆŽÜ™]\›ˆ˜›ÝÛHOOZOÊ\ÝN˜	Û_\OK\ÊÈœŠNˆÜOOZOÊ\ÝN˜	Û_\OX	ÛË™›Ø][™ËšZYÚ
Üß\
NˆœšYÚOOZOÊK\ÊÈœ‹O\ÝN˜	Ü\
Nˆ›YOOZI‰ŠX	ÛË™›Ø][™ËÚY
Üß\O\ÝN˜	Ü\
KÙ]NžÞ™Nž____JNÙ[˜Ý[Ûˆ™ŠJ^ØÛÛœÝØKH˜Ù[\ˆ—OYKœÜ]
‹HŠNÜ™]\›–ØK_]˜\ˆYR‹]ÏRÙ‹]ÏUY‹ÏVY‹ÝÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝØÛÛZ[™\Ž‹‹›ßOYKÜ‹OZJ
K\ÙTÝ]JLJNÞZ


OO›
L
K×JNØÛÛœÝÏ]‰‰™ÛØ˜[\ÏË™ØÝ[Y[Ë˜›ÙNÜ™]\›ˆÏÛŠ
K˜Ü™X]TÜ[

Ê
KšœÞ
Jš™]‹Ë‹‹›Ë™YŽ˜_JKÊN›[JNÛÝË™\Ü^S˜[YOH”Ü[ŽÝ˜\ˆÏYOOžØÛÛœÝÜ™\Ù[˜KÚ[™[ŽOYKÏY[˜Ý[ÛŠJ^ØÛÛœÝØKOZJ
K\ÙTÝ]J
KÏZJ
K\ÙT™YŠ[
KZJ
K\ÙT™YŠJKZJ
K\ÙT™YŠ››Û™HŠKYOÈ›[Ý[YŽˆ[›[Ý[Y‹ÜË×OY[˜Ý[ÛŠKJ^Ü™]\›ˆJ
K\ÙT™YXÙ\Š
K
OO˜VÙWVÝOÏÙKJ_JÛ[Ý[YžÕS“SÕS•ˆ[›[Ý[Y‹S’SPUSÓ—ÓÕUˆ[›[Ý[Ý\Ü[™YŸK[›[Ý[Ý\Ü[™YžÓSÕS•ˆ›[Ý[Y‹S’SPUSÓ—ÑS‘ˆ[›[Ý[YŸK[›[Ý[YžÓSÕS•ˆ›[Ý[YŸ_JNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝO\ÊË˜Ý\œ™[
NÜ‹˜Ý\œ™[H›[Ý[YOO\ÏÙNˆ››Û™HŸKÜ×JKZ


OOžØÛÛœÝO[Ë˜Ý\œ™[[‹˜Ý\œ™[ÚYŠOOYJ^ØÛÛœÝÏ\‹˜Ý\œ™[\ÊJNÚYŠJXÊ“SÕS•ŠNÙ[ÙHYŠ››Û™HOO[››Û™HOOXOË™\Ü^JXÊ•S“SÕS•ŠNÙ[Ù^ØÊ	‰›ÈOO[ÈS’SPUSÓ—ÓÕUŽˆ•S“SÕS•Š_[‹˜Ý\œ™[Y__KÙK×JKZ


OOžÚYŠJ^Û]NØÛÛœÝXK›ÝÛ™\‘ØÝ[Y[™Y˜][šY]ÏÏÝÚ[™ÝË\OžØÛÛœÝ\ÊË˜Ý\œ™[
Kš[˜ÛY\Ê‹˜[š[X][Û“˜[YJNÚYŠ‹\™Ù]OOXI‰›	‰ŠÊS’SPUSÓ—ÑS‘ŠK[‹˜Ý\œ™[
J^ØÛÛœÝÏXKœÝ[K˜[š[X][Û‘š[[ÙNØKœÝ[K˜[š[X][Û‘š[[ÙOH™›ÜØ\™È‹O]œÙ][Y[Ý]


OOžÈ™›ÜØ\™ÈOOXKœÝ[K˜[š[X][Û‘š[[ÙI‰ŠKœÝ[K˜[š[X][Û‘š[[ÙO[Ê_J__KÏYOOžÙK\™Ù]OOXI‰Š‹˜Ý\œ™[\ÊË˜Ý\œ™[
J_NÜ™]\›ˆK˜Y]™[\Ý[™\Š˜[š[X][ÛœÝ\‹ÊKK˜Y]™[\Ý[™\Š˜[š[X][Û˜Ø[˜Ù[‹
KK˜Y]™[\Ý[™\Š˜[š[X][Û™[™‹
K

OOžÝ˜ÛX\•[Y[Ý]
JKKœ™[[Ý™Q]™[\Ý[™\Š˜[š[X][ÛœÝ\‹ÊKKœ™[[Ý™Q]™[\Ý[™\Š˜[š[X][Û˜Ø[˜Ù[‹
KKœ™[[Ý™Q]™[\Ý[™\Š˜[š[X][Û™[™‹
__XÊS’SPUSÓ—ÑS‘Š_KØK×JKÚ\Ô™\Ù[–È›[Ý[Y‹[›[Ý[Ý\Ü[™Y—Kš[˜ÛY\ÊÊK™YŽšJ
K\ÙPØ[˜XÚÊOOžÛË˜Ý\œ™[YOÙÙ]ÛÛ\]YÝ[JJN›[
J_K×J__JJKH™[˜Ý[ÛˆOO]\[ÙˆÝ
Ü™\Ù[›Ëš\Ô™\Ù[JNšJ
KÚ[™[‹›Û›J
KPžJËœ™Y‹[˜Ý[ÛŠJ^Û]OSØš™XÝ™Ù]ÝÛ”›Ü\Q\ØÜš\ÜŠKœ›ÜËœ™YˆŠOË™Ù]XI‰ˆš\Ô™XXÝØ\›š[™Èš[ˆI‰˜Kš\Ô™XXÝØ\›š[™ÎÚYŠ
\™]\›ˆKœ™YŽÚYŠOSØš™XÝ™Ù]ÝÛ”›Ü\Q\ØÜš\ÜŠKœ™YˆŠOË™Ù]XI‰ˆš\Ô™XXÝØ\›š[™Èš[ˆI‰˜Kš\Ô™XXÝØ\›š[™Ë
\™]\›ˆKœ›ÜËœ™YŽÜ™]\›ˆKœ›ÜËœ™YŸKœ™YŸJŠJNÜ™]\›ˆ™[˜Ý[ÛˆOO]\[ÙˆËš\Ô™\Ù[ÚJ
K˜ÛÛ™Q[[Y[
‹Ü™YŽœŸJN›[NÙ[˜Ý[ÛˆÊJ^Ü™]\›ˆOË˜[š[X][Û“˜[Y_››Û™HŸ[Ë™\Ü^S˜[YOH”™\Ù[˜ÙHŽÝ˜\ˆÏHœ›Ýš[™Ñ›ØÝ\ÑÜ›Ý\›Û‘[žQ›ØÝ\È‹ÝÏ^ØX˜›\ÎˆLKØ[˜Ù[X›NˆLK]ÏH”›Ýš[™Ñ›ØÝ\ÑÜ›Ý\‹ØÝË]Ë]×O]Ú
]ÊKÜË×O\
]ËÛ]×JKÞ]ËÝ×O\Ê]ÊKÏZJ
K™›ÜØ\™™YŠ
KJOOŠÊ
KšœÞ
JÝË”›ÝšY\‹ÜØÛÜN™K—×ÜØÛÜT›Ýš[™Ñ›ØÝ\ÑÜ›Ý\Ú[™[ŽŠÊ
KšœÞ
JÝË”ÛÝÜØÛÜN™K—×ÜØÛÜT›Ýš[™Ñ›ØÝ\ÑÜ›Ý\Ú[™[ŽŠÊ
KšœÞ
JËË‹‹™K™YŽ˜_J_J_JJNÚË™\Ü^S˜[YOZ]ÎÝ˜\ˆÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜT›Ýš[™Ñ›ØÝ\ÑÜ›Ý\ÜšY[][ÛŽ›ËÛÜ›HLK\Žœ‹Ý\œ™[X”ÝÜY›Y˜][Ý\œ™[X”ÝÜY˜ËÛÝ\œ™[X”ÝÜYÚ[™ÙNKÛ‘[žQ›ØÝ\Î›K™]™[ØÜ›ÛÛ‘[žQ›ØÝ\ÎœHLK‹‹™OYKOZJ
K\ÙT™YŠ[
KÏPžJKJKZÚ
ŠKØ‹—OZ
Ü›Ü›Y˜][›Ü˜ÏÏÛ[ÛÚ[™ÙNKØ[\Žš]ßJKÝË—OZJ
K\ÙTÝ]JLJKÏTÚ
JKÏ]]Ê
KZJ
K\ÙT™YŠLJKÚË×OZJ
K\ÙTÝ]J
NÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝO^K˜Ý\œ™[ÚYŠJ\™]\›ˆK˜Y]™[\Ý[™\ŠËÊK

OO™Kœ™[[Ý™Q]™[\Ý[™\ŠËÊ_K××JK
Ê
KšœÞ
J]ËÜØÛÜNÜšY[][ÛŽ›Ë\ŽšÛÜ›‹Ý\œ™[X”ÝÜY˜‹Û’][Q›ØÝ\ÎšJ
K\ÙPØ[˜XÚÊOO™ŠJKÙ—JKÛ’][TÚYXŽšJ
K\ÙPØ[˜XÚÊ

OOŠL
K×JKÛ‘›ØÝ\ØX›R][PYšJ
K\ÙPØ[˜XÚÊ

OO”ÊOO™JÌJK×JKÛ‘›ØÝ\ØX›R][T™[[Ý™NšJ
K\ÙPØ[˜XÚÊ

OO”ÊOO™KLJK×JKÚ[™[ŽŠÊ
KšœÞ
Jš™]‹ÝX’[™^ßOOZÏËLNŒ™]K[ÜšY[][ÛˆŽ›Ë‹‹™™YŽ™ËÝ[NžÛÝ][™Nˆ››Û™H‹‹‹™KœÝ[_KÛ“[Ý\ÙQÝÛŽ›Z
K›Û“[Ý\ÙQÝÛ‹

OOžÞ˜Ý\œ™[HLJKÛ‘›ØÝ\Î›Z
K›Û‘›ØÝ\ËOOžØÛÛœÝOH^˜Ý\œ™[ÚYŠK\™Ù]OOYK˜Ý\œ™[\™Ù]	‰˜I‰ˆ]Ê^ØÛÛœÝO[™]ÈÝ\ÝÛQ]™[
ËÝÊNÚYŠK˜Ý\œ™[\™Ù]™\Ü]Ú]™[
JKXK™Y˜][™]™[Y
^ØÛÛœÝOPÊ
K™š[\ŠOO™K™›ØÝ\ØX›JN×ÝÊÙK™š[™
OO™K˜XÝ]™JKK™š[™
OO™KšYOOXŠK‹‹™WK™š[\Š›ÛÛX[ŠK›X\
OO™Kœ™Y‹˜Ý\œ™[
K
__^˜Ý\œ™[HL_JKÛ›\Ž›Z
K›Û›\‹

OOŠLJJ_J_J_JKÏH”›Ýš[™Ñ›ØÝ\ÑÜ›Ý\][H‹ÝÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜT›Ýš[™Ñ›ØÝ\ÑÜ›Ý\›ØÝ\ØX›N›ÏHLXÝ]™N›HLKX”ÝÜYœ‹Ú[™[Ž›‹‹˜ßOYKOI

KO\ŸKYÝÊË
K\˜Ý\œ™[X”ÝÜYOO[KO]]Ê
KÛÛ‘›ØÝ\ØX›R][PY™ËÛ‘›ØÝ\ØX›R][T™[[Ý™NšÝ\œ™[X”ÝÜY˜ŸO\Ü™]\›ˆJ
K\ÙQY™™XÝ


OOžÚYŠÊ\™]\›ˆÊ
K

OOš

_KÛËËJK
Ê
KšœÞ
JÝË’][TÛÝÜØÛÜNY›K›ØÝ\ØX›N›ËXÝ]™N›‹Ú[™[ŽŠÊ
KšœÞ
JšœÜ[‹ÝX’[™^™Ì‹LK™]K[ÜšY[][ÛˆŽœ›ÜšY[][Û‹‹‹˜Ë™YŽ˜KÛ“[Ý\ÙQÝÛŽ›Z
K›Û“[Ý\ÙQÝÛ‹OOžÛÏÜ›Û’][Q›ØÝ\ÊJN™Kœ™]™[Y˜][

_JKÛ‘›ØÝ\Î›Z
K›Û‘›ØÝ\Ë

OOœ›Û’][Q›ØÝ\ÊJJKÛ’Ù^QÝÛŽ›Z
K›Û’Ù^QÝÛ‹OOžÚYŠ•XˆOOYKšÙ^I‰™KœÚYÙ^J\™]\›ˆ›ÚY›Û’][TÚYXŠ
NÚYŠK\™Ù]OOYK˜Ý\œ™[\™Ù]
\™]\›ŽØÛÛœÝOY[˜Ý[ÛŠKK
^ØÛÛœÝÏY[˜Ý[ÛŠKJ^Ü™]\›ˆœˆOOXOÙNˆ\œ›ÝÓYOOYOÈ\œ›ÝÔšYÚŽˆ\œ›ÝÔšYÚOOYOÈ\œ›ÝÓYŽ™_JKšÙ^K
NÜ™]\›ˆ™\XØ[OOXI‰–È\œ›ÝÓY‹\œ›ÝÔšYÚ—Kš[˜ÛY\ÊÊ_šÜš^›Û[OOXI‰–È\œ›ÝÕ\‹\œ›ÝÑÝÛˆ—Kš[˜ÛY\ÊÊOÝ›ÚYÖÛ×_JK›ÜšY[][Û‹™\ŠNÚYŠ›ÚYOOXJ^ÚYŠK›Y]RÙ^_K˜Ý›Ù^_K˜[Ù^_KœÚYÙ^J\™]\›ŽÙKœ™]™[Y˜][

NÛ]^J
K™š[\ŠOO™K™›ØÝ\ØX›JK›X\
OO™Kœ™Y‹˜Ý\œ™[
NÚYŠ›\ÝOOXJ[‹œ™]™\œÙJ
NÙ[ÙHYŠœ™]ˆOOX_›™^OOXJ^Èœ™]ˆOOXI‰›‹œ™]™\œÙJ
NØÛÛœÝ[‹š[™^ÙŠK˜Ý\œ™[\™Ù]
NÛ\›ÛÜÊÏ\ŠÌK
[ŠK›X\

KJOOÊÊØJI]›[™ÝJJN›‹œÛXÙJŠÌJ_\Ù][Y[Ý]


OO—ÝÊŠJ_]˜\ˆßJKÚ[™[Žˆ™[˜Ý[ÛˆOO]\[ÙˆÛ
Ú\ÐÝ\œ™[X”ÝÜ™\ÕX”ÝÜ›[OXŸJN›J_J_JNÝÝË™\Ü^S˜[YOYÎÝ˜\ˆÏ^Ð\œ›ÝÓYˆœ™]ˆ‹\œ›ÝÕ\ˆœ™]ˆ‹\œ›ÝÔšYÚˆ›™^‹\œ›ÝÑÝÛŽˆ›™^‹YÙU\ˆ™š\œÝ‹ÛYNˆ™š\œÝ‹YÙQÝÛŽˆ›\Ý‹[™ˆ›\ÝŸNÙ[˜Ý[ÛˆÝÊKOHLJ^ØÛÛœÝYØÝ[Y[˜XÝ]™Q[[Y[Ù›ÜŠÛÛœÝÈÙˆJ^ÚYŠÏOO]
\™]\›ŽÚYŠË™›ØÝ\ÊÜ™]™[ØÜ›Û˜_JKØÝ[Y[˜XÝ]™Q[[Y[OO]
\™]\›Ÿ_]˜\ˆÝÏZËÏ]ÝËÝÏY[˜Ý[ÛŠJ^Ü™]\›ˆ[™Yš[™YOO]\[ÙˆØÝ[Y[Û[Š\œ˜^Kš\Ð\œ˜^JJOÙVÌN™JK›ÝÛ™\‘ØÝ[Y[˜›Ù_KÝÏ[™]ÈÙXZÓX\Ï[™]ÈÙXZÓX\]Ï^ßKÏLÏY[˜Ý[ÛŠJ^Ü™]\›ˆI‰ŠKšÜÝÊKœ\™[›ÙJJ_K]ÏY[˜Ý[ÛŠKKÊ^Ý˜\ˆY[˜Ý[ÛŠKJ^Ü™]\›ˆK›X\
[˜Ý[ÛŠJ^ÚYŠK˜ÛÛZ[œÊJJ\™]\›ˆNÝ˜\ˆPÊJNÜ™]\›ˆ	‰™K˜ÛÛZ[œÊ
OÝŠÛÛœÛÛK™\œ›ÜŠ˜\šXKZY[ˆ‹Kš[ˆ›ÝÛÛZ[™Y[œÚYH‹K‹ˆÚ[™È›Ý[™ÈŠK[
_JK™š[\Š[˜Ý[ÛŠJ^Ü™]\›ˆ›ÛÛX[ŠJ_J_JK\œ˜^Kš\Ð\œ˜^JJOÙN–ÙWJNÐ]ÖÝ_
]ÖÝO[™]ÈÙXZÓX\
NÝ˜\ˆP]ÖÝKV×KÏ[™]ÈÙ]O[™]ÈÙ]
ŠKÏY[˜Ý[ÛŠJ^ÙI‰ˆ\Ëš\ÊJI‰ŠË˜Y
JKÊKœ\™[›ÙJJ_NÛ‹™›Ü‘XXÚ
ÊNÝ˜\ˆOY[˜Ý[ÛŠJ^ÙI‰ˆZKš\ÊJI‰\œ˜^Kœ›ÝÝ\K™›Ü‘XXÚ˜Ø[
K˜Ú[™[‹[˜Ý[ÛŠJ^ÚYŠËš\ÊJJ]JJNÙ[ÙHž^Ý˜\ˆOYK™Ù]]šX]JÊK[[OOXI‰ˆ™˜[ÙHˆOOXKOJÝË™Ù]
J_
JÌKÏJ‹™Ù]
J_
JÌNÔÝËœÙ]
KJK‹œÙ]
KÊKœ\Ú
JKOOOZI‰›‰‰“ËœÙ]
KL
KOOOXÉ‰™KœÙ]]šX]JYHŠKŸKœÙ]]šX]JËYHŠ_XØ]Ú
Ñ
^ØÛÛœÛÛK™\œ›ÜŠ˜\šXKZY[ŽˆØ[››ÝÜ\˜]HÛˆ‹KÑ
__J_NÜ™]\›ˆJJKË˜ÛX\Š
KÊÊË[˜Ý[ÛŠ
^Û™›Ü‘XXÚ
[˜Ý[ÛŠJ^Ý˜\ˆOTÝË™Ù]
JKLK\‹™Ù]
JKLNÔÝËœÙ]
KJK‹œÙ]
KŠK_
Ëš\ÊJ_Kœ™[[Ý™P]šX]JÊKË™[]JJJKŸKœ™[[Ý™P]šX]J
_JKKQß
ÝÏ[™]ÈÙXZÓX\ÝÏ[™]ÈÙXZÓX\Ï[™]ÈÙXZÓX\]Ï^ßJ__KÏY[˜Ý[ÛŠKK
^Ý›ÚYOO]	‰ŠH™]KX\šXKZY[ˆŠNÝ˜\ˆÏP\œ˜^K™œ›ÛJ\œ˜^Kš\Ð\œ˜^JJOÙN–ÙWJKX_ÝÊJNÜ™]\›ˆÊËœ\Ú˜\JË\œ˜^K™œ›ÛJ‹œ]Y\žTÙ[XÝÜ[
–Ø\šXK[]™WKØÜš\ŠJJK]ÊË‹˜\šXKZY[ˆŠJN™[˜Ý[ÛŠ
^Ü™]\›ˆ[_NÝ˜\ˆÏY[˜Ý[ÛŠ
^Ü™]\›ˆÏSØš™XÝ˜\ÜÚYÛŸ[˜Ý[ÛŠJ^Ù›ÜŠ˜\ˆKLKÏX\™Ý[Y[Ë›[™ÝÝÎÝ
ÊÊY›ÜŠ˜\ˆˆ[ˆOX\™Ý[Y[ÖÝJSØš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
KŠI‰ŠVÛ—OXVÛ—JNÜ™]\›ˆ_KË˜\J\Ë\™Ý[Y[Ê_NÙ[˜Ý[ÛˆÊKJ^Ý˜\ˆ^ßNÙ›ÜŠ˜\ˆÈ[ˆJSØš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
KÊI‰˜Kš[™^ÙŠÊO	‰ŠÛ×OYVÛ×JNÚYŠ[OYI‰ˆ™[˜Ý[ÛˆOO]\[ÙˆØš™XÝ™Ù]ÝÛ”›Ü\TÞ[X›ÛÊ^Ý˜\ˆLÙ›ÜŠÏSØš™XÝ™Ù]ÝÛ”›Ü\TÞ[X›ÛÊJNÛË›[™ÝÛŠÊÊXKš[™^ÙŠÖÛ—JO	‰“Øš™XÝœ›ÝÝ\Kœ›Ü\R\Ñ[[Y\˜X›K˜Ø[
KÖÛ—JI‰ŠÛÖÛ—WOYVÛÖÛ—WJ_\™]\›ˆSØš™XÝ˜Ü™X]NÙ[˜Ý[ÛˆÊKK
^ÚYŠOOX\™Ý[Y[Ë›[™Ý
Y›ÜŠ˜\ˆËLXK›[™ÝÛŽÛŠÊÊH[É‰›ˆ[ˆ_
ß
ÏP\œ˜^Kœ›ÝÝ\KœÛXÙK˜Ø[
KŠJKÖÛ—OXVÛ—JNÜ™]\›ˆK˜ÛÛ˜Ø]
ß\œ˜^Kœ›ÝÝ\KœÛXÙK˜Ø[
JJ_SØš™XÝ˜Ü™X]NÝ˜\ˆÏHœšYÚ\ØÜ›ÛX˜\‹\ÜÚ][Ûˆ‹ÝÏHÚYX™Y›Ü™K\ØÜ›ÛX˜\ˆŽÙ[˜Ý[ÛˆÝÊKJ^Ü™]\›ˆ™[˜Ý[ÛˆOO]\[ÙˆOÙJJN™I‰ŠK˜Ý\œ™[XJK_]˜\ˆÝÏH[™Yš[™YˆOO]\[ÙˆÚ[™ÝÏÚJ
K\ÙS^[Ý]Y™™XÝšJ
K\ÙQY™™XÝ]Ï[™]ÈÙXZÓX\Ù[˜Ý[ÛˆÊKJ^Ý˜\ˆY[˜Ý[ÛŠKJ^Ý˜\ˆJJ
K\ÙTÝ]JJ[˜Ý[ÛŠ
^Ü™]\›žÝ˜[YN™KØ[˜XÚÎ˜K˜XØYNžÙÙ]Ý\œ™[

^Ü™]\›ˆ˜[Y_KÙ]Ý\œ™[
J^Ý˜\ˆO]˜[YNØHOOYI‰Š˜[YOYK˜Ø[˜XÚÊKJJ____JVÌNÜ™]\›ˆ˜Ø[˜XÚÏXK™˜XØY_J_[[˜Ý[ÛŠJ^Ü™]\›ˆK™›Ü‘XXÚ
[˜Ý[ÛŠJ^Ü™]\›ˆÝÊKJ_J_JNÜ™]\›ˆÝÊ[˜Ý[ÛŠ
^Ý˜\ˆOQ]Ë™Ù]

NÚYŠJ^Ý˜\ˆÏ[™]ÈÙ]
JK[™]ÈÙ]
JK]˜Ý\œ™[ÛË™›Ü‘XXÚ
[˜Ý[ÛŠJ^Û‹š\ÊJ_ÝÊK[
_JK‹™›Ü‘XXÚ
[˜Ý[ÛŠJ^ÛËš\ÊJ_ÝÊKŠ_J_Q]ËœÙ]
J_KÙWJKY[˜Ý[ÛˆÊJ^Ü™]\›ˆ_Y[˜Ý[ÛˆÝÊKJ^Ý›ÚYOOXI‰ŠOSÊNÝ˜\ˆV×KÏHLK^Ü™XY™[˜Ý[ÛŠ
^ÚYŠÊ]›ÝÈ™]È\œ›ÜŠ”ÚYXØ\ŽˆÛÝ[›Ý™XYœ›ÛH[ˆ\ÜÚYÛ™YYY][Kˆ™XYÛÝ[™H\ÙYÛ›HÚ]\ÙSYY][XˆŠNÜ™]\›ˆ›[™ÝÝÝ›[™ÝLWN™_K\ÙSYY][N™[˜Ý[ÛŠJ^Ý˜\ˆXJKÊNÜ™]\›ˆœ\Ú
ŠK[˜Ý[ÛŠ
^Ý]™š[\Š[˜Ý[ÛŠJ^Ü™]\›ˆHOO[ŸJ__K\ÜÚYÛ”Þ[˜ÓYY][N™[˜Ý[ÛŠJ^Ù›ÜŠÏHLÝ›[™ÝÊ^Ý˜\ˆO]ÝV×KK™›Ü‘XXÚ
J_]^Ü\Ú™[˜Ý[ÛŠJ^Ü™]\›ˆJJ_Kš[\Ž™[˜Ý[ÛŠ
^Ü™]\›ˆ__K\ÜÚYÛ“YY][N™[˜Ý[ÛŠJ^ÛÏHLÝ˜\ˆOV×NÚYŠ›[™Ý
^Ý˜\ˆ]ÝV×K‹™›Ü‘XXÚ
JKO]]˜\ˆY[˜Ý[ÛŠ
^Ý˜\ˆXNØOV×K™›Ü‘XXÚ
J_KY[˜Ý[ÛŠ
^Ü™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
K[ŠŠ_NÛ

K^Ü\Ú™[˜Ý[ÛŠJ^ØKœ\Ú
JK

_Kš[\Ž™[˜Ý[ÛŠJ^Ü™]\›ˆOXK™š[\ŠJK___NÜ™]\›ˆŸ]˜\ˆÏY[˜Ý[ÛŠJ^Ý›ÚYOOYI‰ŠO^ßJNÝ˜\ˆORÝÊ[
NÜ™]\›ˆK›Ü[ÛœÏUÊØ\Þ[˜ÎˆLÜÜŽˆL_KJK_J
K]ÏY[˜Ý[ÛŠ
^ßKÏZJ
K™›ÜØ\™™YŠ[˜Ý[ÛŠKJ^Ý˜\ˆZJ
K\ÙT™YŠ[
KÏZJ
K\ÙTÝ]JÛÛ”ØÜ›ÛØ\\™N’]ËÛ•ÚY[Ø\\™N’]ËÛ•ÝXÚ[Ý™PØ\\™N’]ßJK[ÖÌK[ÖÌWKYK™›ÜØ\™›ÜËÏYK˜Ú[™[‹ÏYK˜Û\ÜÓ˜[YKOYKœ™[[Ý™TØÜ›Û˜\‹OYK™[˜X›YYKœÚ\™ËYKœÚYPØ\‹OYK››Ô™[]]™KÏYK››Ò\ÛÛ][Û‹YKš[™\YK˜[ÝÔ[˜Ú›ÛÛKYK˜\ËÏ]›ÚYOOYÈ™]ˆŽ™‹YK™Ø\[ÙKÏTÊKÈ™›ÜØ\™›ÜÈ‹˜Ú[™[ˆ‹˜Û\ÜÓ˜[YH‹œ™[[Ý™TØÜ›Û˜\ˆ‹™[˜X›Y‹œÚ\™È‹œÚYPØ\ˆ‹››Ô™[]]™H‹››Ò\ÛÛ][Ûˆ‹š[™\‹˜[ÝÔ[˜Ú›ÛÛH‹˜\È‹™Ø\[ÙH—JKÏYRÊÝWJKÏUÊÊßKÊKŠNÜ™]\›ˆJ
K˜Ü™X]Q[[Y[
J
K‘œ˜YÛY[[I‰šJ
K˜Ü™X]Q[[Y[
ËÜÚYPØ\ŽšË™[[Ý™TØÜ›Û˜\ŽKÚ\™Îœ›Ô™[]]™NžK›Ò\ÛÛ][ÛŽ™Ë[™\šÙ]Ø[˜XÚÜÎœ‹[ÝÔ[˜Ú›ÛÛNˆHX‹ØÚÔ™YŽØ\[ÙNŸJKÚJ
K˜ÛÛ™Q[[Y[
J
KÚ[™[‹›Û›JÊKÊÊßKÊKÜ™YŽžJJNšJ
K˜Ü™X]Q[[Y[
ËÊßKËØÛ\ÜÓ˜[YN˜Ë™YŽžJKÊJ_JNÞË™Y˜][›ÜÏ^Ù[˜X›YˆL™[[Ý™TØÜ›Û˜\ŽˆL[™\ˆL_KË˜Û\ÜÓ˜[Y\Ï^Ù[ÚY‘ÝË™\›ÔšYÚ‘ßNÝ˜\ˆ]Ë]ÏY[˜Ý[ÛŠJ^Ý˜\ˆOYKœÚYPØ\‹TÊKÈœÚYPØ\ˆ—JNÚYŠXJ]›ÝÈ™]È\œ›ÜŠ”ÚYXØ\ŽˆX\ÙH›ÝšYHÚYPØ\˜›Ü\HÈ[\ÜHšYÚØ\ˆŠNÝ˜\ˆÏXKœ™XY

NÚYŠ[Ê]›ÝÈ™]È\œ›ÜŠ”ÚYXØ\ˆYY][H›Ý›Ý[™ŠNÜ™]\›ˆJ
K˜Ü™X]Q[[Y[
ËÊßK
J_NÜ]Ëš\ÔÚYPØ\‘^ÜHLÙ[˜Ý[ÛˆÊ
^ÚYŠYØÝ[Y[
\™]\›ˆ[Ý˜\ˆOYØÝ[Y[˜Ü™X]Q[[Y[
œÝ[HŠNÙK\OH^ØÜÜÈŽÝ˜\ˆOU]ß›˜ÎÜ™]\›ˆI‰™KœÙ]]šX]J››Û˜ÙH‹JK_]˜\ˆ]ÏY[˜Ý[ÛŠ
^Ý˜\ˆOLO[[Ü™]\›žØY™[˜Ý[ÛŠ
^Ý˜\ˆÎÌOYI‰ŠORÊ
JI‰ŠY[˜Ý[ÛŠKJ^ÙKœÝ[TÚY]ÙKœÝ[TÚY]˜ÜÜÕ^XN™K˜\[™Ú[
ØÝ[Y[˜Ü™X]U^›ÙJJJ_JK
KÏXK
ØÝ[Y[šXYØÝ[Y[™Ù][[Y[ÐžUYÓ˜[YJšXYŠVÌJK˜\[™Ú[
ÊJKJÊßK™[[Ý™N™[˜Ý[ÛŠ
^ÈHKYI‰˜I‰ŠKœ\™[›ÙI‰˜Kœ\™[›ÙKœ™[[Ý™PÚ[
JKO[[
___K	ÏY[˜Ý[ÛŠ
^Ý˜\ˆOY[˜Ý[ÛŠ
^Ý˜\ˆOV]Ê
NÜ™]\›ˆ[˜Ý[ÛŠK
^ÚJ
K\ÙQY™™XÝ
[˜Ý[ÛŠ
^Ü™]\›ˆK˜Y
JK[˜Ý[ÛŠ
^ÙKœ™[[Ý™J
__KØI‰J__J
NÜ™]\›ˆ[˜Ý[ÛŠJ^Ý˜\ˆXKœÝ[\ËÏXK™[˜[ZXÎÜ™]\›ˆJÊK[_KÏ^ÛYŒÜŒšYÚŒØ\ŒKÏY[˜Ý[ÛŠJ^Ü™]\›ˆ\œÙR[
_ˆ‹L
_K]ÏY[˜Ý[ÛŠJ^ÚYŠ›ÚYOOYI‰ŠOH›X\™Ú[ˆŠK[™Yš[™YOO]\[ÙˆÚ[™ÝÊ\™]\›ˆÎÝ˜\ˆOY[˜Ý[ÛŠJ^Ý˜\ˆO]Ú[™ÝË™Ù]ÛÛ\]YÝ[JØÝ[Y[˜›ÙJKXVÈœY[™ÈOOYOÈœY[™ÓYŽˆ›X\™Ú[“Y—KÏXVÈœY[™ÈOOYOÈœY[™ÕÜŽˆ›X\™Ú[•Ü—KXVÈœY[™ÈOOYOÈœY[™ÔšYÚŽˆ›X\™Ú[”šYÚ—NÜ™]\›–ÖÊ
KÊÊKÊŠW_JJKYØÝ[Y[™ØÝ[Y[[[Y[˜ÛY[ÚYÏ]Ú[™ÝËš[›™\•ÚYÜ™]\›žÛY˜VÌKÜ˜VÌWKšYÚ˜VÌ—KØ\“X]›X^
Ë]
ØVÌ—KXVÌJ__K]IÊ
K]H™]K\ØÜ›Û[ØÚÙY‹Y[˜Ý[ÛŠKKÊ^Ý˜\ˆYK›YYKÜYKœšYÚÏYK™Ø\Ü™]\›ˆ›ÚYOO]	‰ŠH›X\™Ú[ˆŠK—ˆˆ‹˜ÛÛ˜Ø]
Ú]\ØÜ›ÛX˜\œËZY[ˆ‹ˆ×ˆÝ™\™›ÝÎˆY[ˆŠK˜ÛÛ˜Ø]
ËŽ×ˆY[™Ë\šYÚˆŠK˜ÛÛ˜Ø]
ËœŠK˜ÛÛ˜Ø]
ËŽ×ˆWˆ›ÙVÈŠK˜ÛÛ˜Ø]
]‹—H×ˆÝ™\™›ÝÎˆY[ˆŠK˜ÛÛ˜Ø]
ËŽ×ˆÝ™\œØÜ›ÛX™Z]š[ÜŽˆÛÛZ[Ž×ˆŠK˜ÛÛ˜Ø]
ØI‰ˆœÜÚ][ÛŽˆ™[]]™H‹˜ÛÛ˜Ø]
ËŽÈŠK›X\™Ú[ˆOO]	‰ˆ—ˆY[™Ë[Yˆ‹˜ÛÛ˜Ø]
‹œ×ˆY[™Ë]ÜˆŠK˜ÛÛ˜Ø]
‹œ×ˆY[™Ë\šYÚˆŠK˜ÛÛ˜Ø]
œ×ˆX\™Ú[‹[YŒ×ˆX\™Ú[‹]ÜŒ×ˆX\™Ú[‹\šYÚˆŠK˜ÛÛ˜Ø]
ËœŠK˜ÛÛ˜Ø]
ËŽ×ˆŠKœY[™ÈOO]	‰ˆœY[™Ë\šYÚˆ‹˜ÛÛ˜Ø]
ËœŠK˜ÛÛ˜Ø]
ËŽÈŠWK™š[\Š›ÛÛX[ŠKš›Ú[ŠˆŠK—ˆWˆˆˆŠK˜ÛÛ˜Ø]
Ëˆ×ˆšYÚˆŠK˜ÛÛ˜Ø]
ËœŠK˜ÛÛ˜Ø]
ËŽ×ˆWˆˆˆŠK˜ÛÛ˜Ø]
ÝËˆ×ˆX\™Ú[‹\šYÚˆŠK˜ÛÛ˜Ø]
ËœŠK˜ÛÛ˜Ø]
ËŽ×ˆWˆˆˆŠK˜ÛÛ˜Ø]
ËˆˆŠK˜ÛÛ˜Ø]
Ëˆ×ˆšYÚˆŠK˜ÛÛ˜Ø]
ËŽ×ˆWˆˆˆŠK˜ÛÛ˜Ø]
ÝËˆˆŠK˜ÛÛ˜Ø]
ÝËˆ×ˆX\™Ú[‹\šYÚˆŠK˜ÛÛ˜Ø]
ËŽ×ˆWˆˆ›ÙVÈŠK˜ÛÛ˜Ø]
]‹—H×ˆŠK˜ÛÛ˜Ø]
‹K\™[[Ý™YX›ÙK\ØÜ›ÛX˜\‹\Ú^™H‹ŽˆŠK˜ÛÛ˜Ø]
Ëœ×ˆWˆŠ_KÝY[˜Ý[ÛŠ
^Ý˜\ˆO\\œÙR[
ØÝ[Y[˜›ÙK™Ù]]šX]J]Š_Œ‹L
NÜ™]\›ˆ\Ñš[š]JJOÙNŒKY[˜Ý[ÛŠJ^Ý˜\ˆOYK››Ô™[]]™KYK››Ò[\Ü[ÏYK™Ø\[ÙK]›ÚYOO[ÏÈ›X\™Ú[ˆŽ›ÎÚJ
K\ÙQY™™XÝ
[˜Ý[ÛŠ
^Ü™]\›ˆØÝ[Y[˜›ÙKœÙ]]šX]J]‹
ÝŠ
JÌJKÔÝš[™Ê
JK[˜Ý[ÛŠ
^Ý˜\ˆO[ÝŠ
KLNÙOLÙØÝ[Y[˜›ÙKœ™[[Ý™P]šX]J]ŠN™ØÝ[Y[˜›ÙKœÙ]]šX]J]‹KÔÝš[™Ê
J__K×JNÝ˜\ˆZJ
K\ÙSY[[Ê[˜Ý[ÛŠ
^Ü™]\›ˆ]ÊŠ_KÛ—JNÜ™]\›ˆJ
K˜Ü™X]Q[[Y[
]‹ÜÝ[\ÎŠ‹XK‹ÈˆŽˆˆZ[\Ü[Š_J_KHLNÚYŠ[™Yš[™YˆOO]\[ÙˆÚ[™ÝÊ]ž^Ý˜\ˆSØš™XÝ™Yš[™T›Ü\JßKœ\ÜÚ]™H‹ÙÙ]™[˜Ý[ÛŠ
^Ü™]\›ˆHLL_JNÝÚ[™ÝË˜Y]™[\Ý[™\Š\Ý‹‹ŠKÚ[™ÝËœ™[[Ý™Q]™[\Ý[™\Š\Ý‹‹Š_XØ]Ú
Q
^ÜHL_]˜\ˆÝHH\‰‰žÜ\ÜÚ]™NˆL_K]Y[˜Ý[ÛŠKJ^ÚYŠJH[œÝ[˜Ù[Ùˆ[[Y[
J\™]\›ˆLNÝ˜\ˆ]Ú[™ÝË™Ù]ÛÛ\]YÝ[JJNÜ™]\›ˆšY[ˆˆOO]ØWI‰ˆJ›Ý™\™›ÝÖOOO]›Ý™\™›ÝÖ	‰ˆY[˜Ý[ÛŠJ^Ü™]\›ˆ•VT‘PHOOYKYÓ˜[Y_JJI‰ˆš\ÚX›HOO]ØWJ_KÝY[˜Ý[ÛŠKJ^Ý˜\ˆXK›ÝÛ™\‘ØÝ[Y[ÏXNÙÞÚYŠ[™Yš[™YˆOO]\[ÙˆÚYÝÔ›ÛÝ	‰›È[œÝ[˜Ù[ÙˆÚYÝÔ›ÛÝ	‰ŠÏ[ËšÜÝ
K]ŠKÊJ^Ý˜\ˆ[]ŠKÊNÚYŠ–ÌWO›–Ì—J\™]\›ˆL[Ï[Ëœ\™[›Ù_]Ú[JÉ‰›ÈOO]˜›ÙJNÜ™]\›ˆL_K]Y[˜Ý[ÛŠKJ^Ü™]\›ˆˆOOYOÙ[˜Ý[ÛŠJ^Ü™]\›ˆ]ŠK›Ý™\™›ÝÖHŠ_JJN™[˜Ý[ÛŠJ^Ü™]\›ˆ]ŠK›Ý™\™›ÝÖŠ_JJ_K]Y[˜Ý[ÛŠKJ^Ü™]\›ˆˆOOYOÖÊXJKœØÜ›ÛÜœØÜ›ÛZYÚ˜ÛY[ZYÚN™[˜Ý[ÛŠJ^Ü™]\›–ÙKœØÜ›ÛYKœØÜ›ÛÚYK˜ÛY[ÚY_JJNÝ˜\ˆKY[˜Ý[ÛŠJ^Ü™]\›ˆ˜Ú[™ÙYÝXÚ\Èš[ˆOÖÙK˜Ú[™ÙYÝXÚ\ÖÌK˜ÛY[K˜Ú[™ÙYÝXÚ\ÖÌK˜ÛY[WN–Ì_KY[˜Ý[ÛŠJ^Ü™]\›–ÙK™[VK™[VW_K]Y[˜Ý[ÛŠJ^Ü™]\›ˆI‰ˆ˜Ý\œ™[š[ˆOÙK˜Ý\œ™[™_KÝY[˜Ý[ÛŠJ^Ü™]\›ˆ—ˆ˜›ØÚËZ[\˜XÝ]š]KH‹˜ÛÛ˜Ø]
KˆÜÚ[\‹Y]™[Îˆ›Û™NßWˆ˜[ÝËZ[\˜XÝ]š]KHŠK˜ÛÛ˜Ø]
KˆÜÚ[\‹Y]™[Îˆ[ßWˆŠ_KLV×NÙ[˜Ý[ÛˆŠJ^Ù›ÜŠ˜\ˆO[[Û[OOYNÊYH[œÝ[˜Ù[ÙˆÚYÝÔ›ÛÝ	‰ŠOYKšÜÝOYKšÜÝ
KOYKœ\™[›ÙNÜ™]\›ˆ_XÛÛœÝÝJY[˜Ý[ÛŠJ^Ý˜\ˆOZJ
K\ÙT™YŠ×JKZJ
K\ÙT™YŠÌJKÏZJ
K\ÙT™YŠ
KZJ
K\ÙTÝ]JŠÊÊVÌKZJ
K\ÙTÝ]J	ÊVÌKZJ
K\ÙT™YŠJNÚJ
K\ÙQY™™XÝ
[˜Ý[ÛŠ
^Û˜Ý\œ™[Y_KÙWJKJ
K\ÙQY™™XÝ
[˜Ý[ÛŠ
^ÚYŠKš[™\
^ÙØÝ[Y[˜›ÙK˜Û\ÜÓ\Ý˜Y
˜›ØÚËZ[\˜XÝ]š]KH‹˜ÛÛ˜Ø]
ŠJNÝ˜\ˆOTÊÙK›ØÚÔ™Y‹˜Ý\œ™[K
KœÚ\™ß×JK›X\
]ŠKL
K™š[\Š›ÛÛX[ŠNÜ™]\›ˆK™›Ü‘XXÚ
[˜Ý[ÛŠJ^Ü™]\›ˆK˜Û\ÜÓ\Ý˜Y
˜[ÝËZ[\˜XÝ]š]KH‹˜ÛÛ˜Ø]
ŠJ_JK[˜Ý[ÛŠ
^ÙØÝ[Y[˜›ÙK˜Û\ÜÓ\Ýœ™[[Ý™J˜›ØÚËZ[\˜XÝ]š]KH‹˜ÛÛ˜Ø]
ŠJKK™›Ü‘XXÚ
[˜Ý[ÛŠJ^Ü™]\›ˆK˜Û\ÜÓ\Ýœ™[[Ý™J˜[ÝËZ[\˜XÝ]š]KH‹˜ÛÛ˜Ø]
ŠJ_J___KÙKš[™\K›ØÚÔ™Y‹˜Ý\œ™[KœÚ\™×JNÝ˜\ˆÏZJ
K\ÙPØ[˜XÚÊ[˜Ý[ÛŠKJ^ÚYŠÝXÚ\Èš[ˆI‰ŒOOYKÝXÚ\Ë›[™ÝÚY[OOYK\I‰™K˜Ý›Ù^J\™]\›ˆ[˜Ý\œ™[˜[ÝÔ[˜Ú›ÛÛNÝ˜\ˆ‹\ŠJKÏ]˜Ý\œ™[OH™[Vš[ˆOÙK™[VœÖÌK\–ÌKÏH™[VHš[ˆOÙK™[VNœÖÌWK\–ÌWKOYK\™Ù]OSX]˜XœÊJO“X]˜XœÊÊOÈšŽˆˆŽÚYŠÝXÚ\Èš[ˆI‰ˆšOO[I‰ˆœ˜[™ÙHOO]K\J\™]\›ˆLNÝ˜\ˆ]Ú[™ÝË™Ù]Ù[XÝ[ÛŠ
K\	‰œ˜[˜ÚÜ“›ÙNÚYŠ	‰ŠOO]_˜ÛÛZ[œÊJJJ\™]\›ˆLNÝ˜\ˆOXÝŠKJNÚYŠ^J\™]\›ˆLÚYŠOÛ[NŠHˆOO[OÈšŽˆˆ‹OXÝŠKJJK^J\™]\›ˆLNÚYŠ[Ë˜Ý\œ™[	‰ˆ˜Ú[™ÙYÝXÚ\Èš[ˆI‰Š_ÊI‰ŠË˜Ý\œ™[[ŠK[Š\™]\›ˆLÝ˜\ˆÏ[Ë˜Ý\œ™[ŽÜ™]\›ˆ[˜Ý[ÛŠKKËŠ^Ý˜\ˆY[˜Ý[ÛŠKJ^Ü™]\›ˆšOOYI‰ˆœOOXOËLNŒ_JKÚ[™ÝË™Ù]ÛÛ\]YÝ[JJK™\™XÝ[ÛŠK\Š›ËÏ]\™Ù]OXK˜ÛÛZ[œÊÊKÏHLKO[ŒOLLÙÞÚYŠ\ÊXœ™XZÎÝ˜\ˆ[]ŠKÊKOYÌKÏYÌWKYÌ—K\ŠžNÊ_ÊI‰]ŠKÊI‰ŠJÏYË
Ï^JNÝ˜\ˆ\Ëœ\™[›ÙNÜÏZ	‰š››ÙU\OOOS›ÙK‘ÐÕSQS•Ñ”QÓQS•Ó“ÑOÚšÜÝš]Ú[JZI‰œÈOOYØÝ[Y[˜›Ù_I‰ŠK˜ÛÛZ[œÊÊ_OOO\ÊJNÜ™]\›ŠI‰Š‰‰“X]˜XœÊJO_[‰‰››J_]I‰Š‰‰“X]˜XœÊ
O_[‰‰‹[œ
JI‰ŠÏHL
KßJËKKšOOYÏÚN˜ËL
_K×JKÏZJ
K\ÙPØ[˜XÚÊ[˜Ý[ÛŠJ^Ý˜\ˆYNÚYŠ‹›[™Ý	‰˜–Ø‹›[™ÝLWOOO\Š^Ý˜\ˆÏH™[VHš[ˆÙŠ
NœŠ
KXK˜Ý\œ™[™š[\Š[˜Ý[ÛŠJ^Ü™]\›ˆK›˜[YOOO]\I‰ŠK\™Ù]OO]\™Ù]\™Ù]OOYKœÚYÝÔ\™[
I‰ŠOYK™[K[ËVÌOOO[–ÌI‰˜VÌWOOO[–ÌWJNÝ˜\ˆKŸJVÌNÚYŠ‰‰›‹œÚÝ[
]˜Ø[˜Ù[X›I‰œ™]™[Y˜][

NÙ[ÙHYŠ[Š^Ý˜\ˆOJ˜Ý\œ™[œÚ\™ß×JK›X\
]ŠK™š[\Š›ÛÛX[ŠK™š[\Š[˜Ý[ÛŠJ^Ü™]\›ˆK˜ÛÛZ[œÊ\™Ù]
_JNÊK›[™ÝŒÜÊVÌJNˆ[˜Ý\œ™[››Ò\ÛÛ][ÛŠI‰˜Ø[˜Ù[X›I‰œ™]™[Y˜][

___K×JKOZJ
K\ÙPØ[˜XÚÊ[˜Ý[ÛŠKËŠ^Ý˜\ˆ^Û˜[YN™K[N\™Ù]›ËÚÝ[›‹ÚYÝÔ\™[™ŠÊ_NØK˜Ý\œ™[œ\Ú
ŠKÙ][Y[Ý]
[˜Ý[ÛŠ
^ØK˜Ý\œ™[XK˜Ý\œ™[™š[\Š[˜Ý[ÛŠJ^Ü™]\›ˆHOO\ŸJ_KJ_K×JKOZJ
K\ÙPØ[˜XÚÊ[˜Ý[ÛŠJ^Ý˜Ý\œ™[\ŠJKË˜Ý\œ™[]›ÚYK×JKZJ
K\ÙPØ[˜XÚÊ[˜Ý[ÛŠJ^ÝJK\KŠJKK\™Ù]ÊKK›ØÚÔ™Y‹˜Ý\œ™[
J_K×JKZJ
K\ÙPØ[˜XÚÊ[˜Ý[ÛŠJ^ÝJK\KŠJKK\™Ù]ÊKK›ØÚÔ™Y‹˜Ý\œ™[
J_K×JNÚJ
K\ÙQY™™XÝ
[˜Ý[ÛŠ
^Ü™]\›ˆ‹œ\Ú
ŠKKœÙ]Ø[˜XÚÜÊÛÛ”ØÜ›ÛØ\\™NœÛ•ÚY[Ø\\™NœÛ•ÝXÚ[Ý™PØ\\™N™JKØÝ[Y[˜Y]™[\Ý[™\ŠÚY[‹ËÝŠKØÝ[Y[˜Y]™[\Ý[™\ŠÝXÚ[Ý™H‹ËÝŠKØÝ[Y[˜Y]™[\Ý[™\ŠÝXÚÝ\‹KÝŠK[˜Ý[ÛŠ
^ØX‹™š[\Š[˜Ý[ÛŠJ^Ü™]\›ˆHOO\ŸJKØÝ[Y[œ™[[Ý™Q]™[\Ý[™\ŠÚY[‹ËÝŠKØÝ[Y[œ™[[Ý™Q]™[\Ý[™\ŠÝXÚ[Ý™H‹ËÝŠKØÝ[Y[œ™[[Ý™Q]™[\Ý[™\ŠÝXÚÝ\‹KÝŠ__K×JNÝ˜\ˆOYKœ™[[Ý™TØÜ›Û˜\‹ÏYKš[™\Ü™]\›ˆJ
K˜Ü™X]Q[[Y[
J
K‘œ˜YÛY[[ÏÚJ
K˜Ü™X]Q[[Y[
‹ÜÝ[\Î™ÝŠŠ_JN›[OÚJ
K˜Ü™X]Q[[Y[
‹Û›Ô™[]]™N™K››Ô™[]]™KØ\[ÙN™K™Ø\[Ù_JN›[
_KË\ÙSYY][JŠK]ÊNÝ˜\ˆ‹ÝZJ
K™›ÜØ\™™YŠ[˜Ý[ÛŠKJ^Ü™]\›ˆJ
K˜Ü™X]Q[[Y[
ËÊßKKÜ™YŽ˜KÚYPØ\ŽÝŸJJ_JN×Ý‹˜Û\ÜÓ˜[Y\Ï^Ë˜Û\ÜÓ˜[Y\ÎØÛÛœÝÝWÝŽÝ˜\ˆVÈ‘[\ˆ‹ˆ—KÝVÈ\œ›ÝÕ\‹”YÙQÝÛˆ‹‘[™—KÝVÈ\œ›ÝÑÝÛˆ‹”YÙU\‹’ÛYH‹‹‹šÝ—K^ÛŽ–Ë‹‹ž‹\œ›ÝÔšYÚ—K–Ë‹‹ž‹\œ›ÝÓY—_K]^ÛŽ–È\œ›ÝÓY—K–È\œ›ÝÔšYÚ—_KH“Y[H‹Ð‹]‹—O]Ú
ŠKÕ‹—O\
‹Õ‹Ù‹×JKUÙŠ
KYÊ
KÑÝ‹Ý—OUŠŠKÓÝ‹]—OUŠŠKYOOžØÛÛœÝ××ÜØÛÜSY[N˜KÜ[ŽHLKÚ[™[Ž›Ë\Ž›‹Û“Ü[Ú[™ÙNœ‹[Ù[›HLOYKÏTŠJKÝKWOZJ
K\ÙTÝ]J[
KZJ
K\ÙT™YŠLJKTÚ
ŠKOZÚ
ŠNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝOJ
OOžÜ˜Ý\œ™[HLØÝ[Y[˜Y]™[\Ý[™\ŠœÚ[\™ÝÛˆ‹KØØ\\™NˆLÛ˜ÙNˆLJKØÝ[Y[˜Y]™[\Ý[™\ŠœÚ[\›[Ý™H‹KØØ\\™NˆLÛ˜ÙNˆLJ_KOJ
OOœ˜Ý\œ™[HLNÜ™]\›ˆØÝ[Y[˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹KØØ\\™NˆLJK

OOžÙØÝ[Y[œ™[[Ý™Q]™[\Ý[™\ŠšÙ^YÝÛˆ‹KØØ\\™NˆLJKØÝ[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\™ÝÛˆ‹KØØ\\™NˆLJKØÝ[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\›[Ý™H‹KØØ\\™NˆLJ__K×JK
Ê
KšœÞ
JY‹Ë‹‹˜ËÚ[™[ŽŠÊ
KšœÞ
JÝ‹ÜØÛÜN˜KÜ[ŽÛ“Ü[Ú[™ÙN™ÛÛ[KÛÛÛ[Ú[™ÙN›KÚ[™[ŽŠÊ
KšœÞ
JÝ‹ÜØÛÜN˜KÛÛÜÙNšJ
K\ÙPØ[˜XÚÊ

OO™
LJKÙJK\Õ\Ú[™ÒÙ^X›Ø\™™YŽœ\ŽžK[Ù[›Ú[™[Ž›ßJ_J_J_NÒ‹™\Ü^S˜[YOQŽÝ˜\ˆZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜSY[N‹‹›ßOYKTŠ
NÜ™]\›ŠÊ
KšœÞ
J]ËË‹‹›‹‹‹›Ë™YŽ˜_J_JNÓ‹™\Ü^S˜[YOH“Y[P[˜ÚÜˆŽÝ˜\ˆÝH“Y[TÜ[‹Ú‹]—OUŠÝ‹Ù›Ü˜ÙS[Ý[›ÚYJKYOOžØÛÛœÝ××ÜØÛÜSY[N˜K›Ü˜ÙS[Ý[Ú[™[Ž›ËÛÛZ[™\Ž›ŸOYKUÝŠÝ‹JNÜ™]\›ŠÊ
KšœÞ
J‹ÜØÛÜN˜K›Ü˜ÙS[Ý[Ú[™[ŽŠÊ
KšœÞ
JËÜ™\Ù[‹›Ü[‹Ú[™[ŽŠÊ
KšœÞ
JÝËØ\ÐÚ[ˆLÛÛZ[™\Ž›‹Ú[™[Ž›ßJ_J_J_NÞ‹™\Ü^S˜[YORÝŽÝ˜\ˆ]H“Y[PÛÛ[‹Ü]‹—OUŠ]ŠK]ZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝR]Š]‹K—×ÜØÛÜSY[JKÙ›Ü˜ÙS[Ý[›Ï]™›Ü˜ÙS[Ý[‹‹›ŸOYKUÝŠ]‹K—×ÜØÛÜSY[JKQ]Š]‹K—×ÜØÛÜSY[JNÜ™]\›ŠÊ
KšœÞ
J‹”›ÝšY\‹ÜØÛÜN™K—×ÜØÛÜSY[KÚ[™[ŽŠÊ
KšœÞ
JËÜ™\Ù[›ß‹›Ü[‹Ú[™[ŽŠÊ
KšœÞ
J‹”ÛÝÜØÛÜN™K—×ÜØÛÜSY[KÚ[™[Ž››[Ù[ÊÊ
KšœÞ
J	‹Ë‹‹›‹™YŽ˜_JNŠÊ
KšœÞ
J‹Ë‹‹›‹™YŽ˜_J_J_J_J_JK	ZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝUÝŠ]‹K—×ÜØÛÜSY[JKÏZJ
K\ÙT™YŠ[
KPžJKÊNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝO[Ë˜Ý\œ™[ÚYŠJ\™]\›ˆÊJ_K×JK
Ê
KšœÞ
J]‹Ë‹‹™K™YŽ›‹˜\›ØÝ\Î›Ü[‹\ØX›SÝ]ÚYTÚ[\‘]™[Î›Ü[‹\ØX›SÝ]ÚYTØÜ›ÛˆLÛ‘›ØÝ\ÓÝ]ÚYN›Z
K›Û‘›ØÝ\ÓÝ]ÚYKOO™Kœ™]™[Y˜][

KØÚXÚÑ›Ü‘Y˜][™]™[YˆL_JKÛ‘\ÛZ\ÜÎŠ
OO›Û“Ü[Ú[™ÙJLJ_J_JKZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝUÝŠ]‹K—×ÜØÛÜSY[JNÜ™]\›ŠÊ
KšœÞ
J]‹Ë‹‹™K™YŽ˜K˜\›ØÝ\ÎˆLK\ØX›SÝ]ÚYTÚ[\‘]™[ÎˆLK\ØX›SÝ]ÚYTØÜ›ÛˆLKÛ‘\ÛZ\ÜÎŠ
OO›Û“Ü[Ú[™ÙJLJ_J_JKS^J“Y[PÛÛ[”ØÜ›ÛØÚÈŠK]ZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜSY[NÛÜ›ÏHLK˜\›ØÝ\Î›‹Û“Ü[]]Ñ›ØÝ\Îœ‹ÛÛÜÙP]]Ñ›ØÝ\Î›\ØX›SÝ]ÚYTÚ[\‘]™[Î˜ËÛ‘[žQ›ØÝ\ÎKÛ‘\ØØ\RÙ^QÝÛŽ›KÛ”Ú[\‘ÝÛ“Ý]ÚYNœÛ‘›ØÝ\ÓÝ]ÚYN™Û’[\˜XÝÝ]ÚYNžKÛ‘\ÛZ\ÜÎ™Ë\ØX›SÝ]ÚYTØÜ›Ûš‹‹˜ŸOYKUÝŠ]‹
KÏQ]Š]‹
KTŠ
KÏQŠ
KÏS]Š
KÞ×OZJ
K\ÙTÝ]J[
KÏZJ
K\ÙT™YŠ[
KPžJKË‹›ÛÛÛ[Ú[™ÙJKOZJ
K\ÙT™YŠ
KZJ
K\ÙT™YŠˆŠKZJ
K\ÙT™YŠ
KOZJ
K\ÙT™YŠ[
KZJ
K\ÙT™YŠœšYÚŠKZJ
K\ÙT™YŠ
KZÐÝŽšJ
K‘œ˜YÛY[ZÞØ\Î–‹[ÝÔ[˜Ú›ÛÛNˆLN›ÚYYOOžØÛÛœÝOQ˜Ý\œ™[
ÙKPÊ
K™š[\ŠOOˆYK™\ØX›Y
KÏYØÝ[Y[˜XÝ]™Q[[Y[]™š[™
OO™Kœ™Y‹˜Ý\œ™[OO[ÊOË^˜[YKY[˜Ý[ÛŠKK
^ØÛÛœÝÏXK›[™ÝŒI‰\œ˜^K™œ›ÛJJK™]™\žJOO™OOOXVÌJK[ÏØVÌN˜K]ÙKš[™^ÙŠ
N‹LNÛ]JÏYKOSX]›X^
‹
KË›X\

KJOOœÖÊJØJI\Ë›[™ÝJJNÝ˜\ˆËNÌOOO[‹›[™Ý	‰Š[™š[\ŠOO™HOO]
JNØÛÛœÝÏ[™š[™
OO™KÓÝÙ\Ø\ÙJ
KœÝ\ÕÚ]
‹ÓÝÙ\Ø\ÙJ
JJNÜ™]\›ˆÈOO]ØÎ›ÚYJ›X\
OO™K^˜[YJKKŠK]™š[™
OO™K^˜[YOOO\ŠOËœ™Y‹˜Ý\œ™[ÈY[˜Ý[ÛˆJJ^Ñ˜Ý\œ™[XKÚ[™ÝË˜ÛX\•[Y[Ý]
K˜Ý\œ™[
KˆˆOOXI‰ŠK˜Ý\œ™[]Ú[™ÝËœÙ][Y[Ý]


OO™JˆŠKYLÊJ_JJK	‰œÙ][Y[Ý]


OO›™›ØÝ\Ê
J_NÚJ
K\ÙQY™™XÝ


OOŠ
OOÚ[™ÝË˜ÛX\•[Y[Ý]
K˜Ý\œ™[
K×JKÚ

NØÛÛœÝÏZJ
K\ÙPØ[˜XÚÊOO•˜Ý\œ™[OOSK˜Ý\œ™[ËœÚYI‰™[˜Ý[ÛŠKJ^ÚYŠXJ\™]\›ˆLNØÛÛœÝ^Þ™K˜ÛY[N™K˜ÛY[_NÜ™]\›ˆ[˜Ý[ÛŠKJ^ØÛÛœÝÞN›ßOYNÛ]HLNÙ›ÜŠ]LXK›[™ÝLNÜK›[™ÝÛ\ŠÊÊ^ØÛÛœÝOXVÜ—KÏXVÛKOYKžÏYKžKO\ËžO\ËžNØÏ›ÈOO[O›É‰
KZJJŠËXÊKÊKXÊJÚI‰ŠH[Š_\™]\›ˆŸJJ_JKK˜Ý\œ™[Ë˜\™XJK×JNÜ™]\›ŠÊ
KšœÞ
J]‹ÜØÛÜNÙX\˜Ú™YŽ‘Û’][Q[\ŽšJ
K\ÙPØ[˜XÚÊOOžÑÊJI‰™Kœ™]™[Y˜][

_KÑ×JKÛ’][SX]™NšJ
K\ÙPØ[˜XÚÊOOžÑÊJ_
Ë˜Ý\œ™[Ë™›ØÝ\Ê
KÊ[
J_KÑ×JKÛ•šYÙÙ\“X]™NšJ
K\ÙPØ[˜XÚÊOOžÑÊJI‰™Kœ™]™[Y˜][

_KÑ×JKÚ[\‘Ü˜XÙU[Y\”™YŽ‹Û”Ú[\‘Ü˜XÙR[[Ú[™ÙNšJ
K\ÙPØ[˜XÚÊOOžÓK˜Ý\œ™[Y_K×JKÚ[™[ŽŠÊ
KšœÞ
J‹Ë‹‹”Ú[™[ŽŠÊ
KšœÞ
JšØ\ÐÚ[ˆL˜\Y›‹Û“[Ý[]]Ñ›ØÝ\Î›Z
‹OOžÙKœ™]™[Y˜][

KË˜Ý\œ™[Ë™›ØÝ\ÊÜ™]™[ØÜ›ÛˆLJ_JKÛ•[›[Ý[]]Ñ›ØÝ\Î›Ú[™[ŽŠÊ
KšœÞ
JØ\ÐÚ[ˆL\ØX›SÝ]ÚYTÚ[\‘]™[Î˜ËÛ‘\ØØ\RÙ^QÝÛŽ›KÛ”Ú[\‘ÝÛ“Ý]ÚYNœÛ‘›ØÝ\ÓÝ]ÚYN™Û’[\˜XÝÝ]ÚYNžKÛ‘\ÛZ\ÜÎ™ËÚ[™[ŽŠÊ
KšœÞ
JÝËØ\ÐÚ[ˆL‹‹—Ë\ŽË™\‹ÜšY[][ÛŽˆ™\XØ[‹ÛÜ›ËÝ\œ™[X”ÝÜYžÛÝ\œ™[X”ÝÜYÚ[™ÙNšËÛ‘[žQ›ØÝ\Î›Z
KOOžÝËš\Õ\Ú[™ÒÙ^X›Ø\™™Y‹˜Ý\œ™[Kœ™]™[Y˜][

_JK™]™[ØÜ›ÛÛ‘[žQ›ØÝ\ÎˆLÚ[™[ŽŠÊ
KšœÞ
J]ËÜ›ÛNˆ›Y[H‹˜\šXK[ÜšY[][ÛˆŽˆ™\XØ[‹™]K\Ý]HŽWÊ‹›Ü[ŠK™]K\˜Y^[Y[KXÛÛ[Žˆˆ‹\ŽË™\‹‹‹‹‹‹˜‹™YŽ“Ý[NžÛÝ][™Nˆ››Û™H‹‹‹˜‹œÝ[_KÛ’Ù^QÝÛŽ›Z
‹›Û’Ù^QÝÛ‹OOžØÛÛœÝOYK\™Ù]˜ÛÜÙ\Ý
–Ù]K\˜Y^[Y[KXÛÛ[HŠOOOYK˜Ý\œ™[\™Ù]YK˜Ý›Ù^_K˜[Ù^_K›Y]RÙ^KÏLOOOYKšÙ^K›[™ÝØI‰Š•XˆOOYKšÙ^I‰™Kœ™]™[Y˜][

K]	‰›É‰‘ŠKšÙ^JJNØÛÛœÝTË˜Ý\œ™[ÚYŠK\™Ù]OO[Š\™]\›ŽÚYŠTÝ‹š[˜ÛY\ÊKšÙ^JJ\™]\›ŽÙKœ™]™[Y˜][

NØÛÛœÝPÊ
K™š[\ŠOOˆYK™\ØX›Y
K›X\
OO™Kœ™Y‹˜Ý\œ™[
NÚÝ‹š[˜ÛY\ÊKšÙ^JI‰œ‹œ™]™\œÙJ
K[˜Ý[ÛŠJ^ØÛÛœÝOYØÝ[Y[˜XÝ]™Q[[Y[Ù›ÜŠÛÛœÝÙˆJ^ÚYŠOOXJ\™]\›ŽÚYŠ™›ØÝ\Ê
KØÝ[Y[˜XÝ]™Q[[Y[OOXJ\™]\›Ÿ_JŠ_JKÛ›\Ž›Z
K›Û›\‹OOžÙK˜Ý\œ™[\™Ù]˜ÛÛZ[œÊK\™Ù]
_
Ú[™ÝË˜ÛX\•[Y[Ý]
K˜Ý\œ™[
K˜Ý\œ™[HˆŠ_JKÛ”Ú[\“[Ý™N›Z
K›Û”Ú[\“[Ý™KWÊOOžØÛÛœÝOYK\™Ù]U‹˜Ý\œ™[OOYK˜ÛY[ÚYŠK˜Ý\œ™[\™Ù]˜ÛÛZ[œÊJI‰
^ØÛÛœÝOYK˜ÛY[•‹˜Ý\œ™[ÈœšYÚŽˆ›YŽÕ˜Ý\œ™[XK‹˜Ý\œ™[YK˜ÛY[_JJ_J_J_J_J_J_J_JNÖ]‹™\Ü^S˜[YOU]ŽÝ˜\ˆWÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜSY[N‹‹›ßOYNÜ™]\›ŠÊ
KšœÞ
Jš™]‹Ü›ÛNˆ™Ü›Ý\‹‹‹›Ë™YŽ˜_J_JNÙWË™\Ü^S˜[YOH“Y[QÜ›Ý\ŽÝ˜\ˆWÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜSY[N‹‹›ßOYNÜ™]\›ŠÊ
KšœÞ
Jš™]‹Ë‹‹›Ë™YŽ˜_J_JNØWË™\Ü^S˜[YOH“Y[SX™[ŽÝ˜\ˆÏH“Y[R][H‹×ÏH›Y[Kš][TÙ[XÝ‹—ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝÙ\ØX›YHLKÛ”Ù[XÝ›Ë‹‹›ŸOYKZJ
K\ÙT™YŠ[
KQ]ŠËK—×ÜØÛÜSY[JKÏRŠËK—×ÜØÛÜSY[JKOPžJKŠKOZJ
K\ÙT™YŠLJNÜ™]\›ŠÊ
KšœÞ
J—ËË‹‹›‹™YŽK\ØX›YÛÛXÚÎ›Z
K›ÛÛXÚË

OOžØÛÛœÝO\‹˜Ý\œ™[ÚYŠ]	‰™J^ØÛÛœÝO[™]ÈÝ\ÝÛQ]™[
×ËØX˜›\ÎˆLØ[˜Ù[X›NˆLJNÙK˜Y]™[\Ý[™\Š×ËOO›ÏËŠJKÛÛ˜ÙNˆLJKš
KJKK™Y˜][™]™[YÛK˜Ý\œ™[HLN››ÛÛÜÙJ
__JKÛ”Ú[\‘ÝÛŽ˜OOžÙK›Û”Ú[\‘ÝÛËŠJKK˜Ý\œ™[HLKÛ”Ú[\•\›Z
K›Û”Ú[\•\OOžÛK˜Ý\œ™[K˜Ý\œ™[\™Ù]Ë˜ÛXÚÊ
_JKÛ’Ù^QÝÛŽ›Z
K›Û’Ù^QÝÛ‹OOžØÛÛœÝOHˆˆOOXËœÙX\˜Ú™Y‹˜Ý\œ™[ÝI‰ˆˆOOYKšÙ^_‹š[˜ÛY\ÊKšÙ^JI‰ŠK˜Ý\œ™[\™Ù]˜ÛXÚÊ
KKœ™]™[Y˜][

J_J_J_JNÛ—Ë™\Ü^S˜[YO]ÎÝ˜\ˆ—ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜSY[N\ØX›Y›ÏHLK^˜[YN›‹‹‹œŸOYKRŠË
KÏQŠ
KOZJ
K\ÙT™YŠ[
KOPžJKJKÜOZJ
K\ÙTÝ]JLJKÞK×OZJ
K\ÙTÝ]JˆŠNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝO]K˜Ý\œ™[ÙI‰™Ê
K^ÛÛ[ÏÈˆŠKš[J
J_KÜ‹˜Ú[™[—JK
Ê
KšœÞ
J‹’][TÛÝÜØÛÜN\ØX›Y›Ë^˜[YN›ÏÞKÚ[™[ŽŠÊ
KšœÞ
JËØ\ÐÚ[ˆL‹‹˜Ë›ØÝ\ØX›Nˆ[ËÚ[™[ŽŠÊ
KšœÞ
Jš™]‹Ü›ÛNˆ›Y[Z][H‹™]KZYÚYÚYŽœÈˆŽ›ÚY˜\šXKY\ØX›YŽ›ß›ÚY™]KY\ØX›YŽ›ÏÈˆŽ›ÚY‹‹œ‹™YŽ›KÛ”Ú[\“[Ý™N›Z
K›Û”Ú[\“[Ý™KWÊOOžÚYŠÊ[›Û’][SX]™JJNÙ[ÙHYŠ›Û’][Q[\ŠJKYK™Y˜][™]™[Y
^ÙK˜Ý\œ™[\™Ù]™›ØÝ\ÊÜ™]™[ØÜ›ÛˆLJ__JJKÛ”Ú[\“X]™N›Z
K›Û”Ú[\“X]™KWÊOO››Û’][SX]™JJJJKÛ‘›ØÝ\Î›Z
K›Û‘›ØÝ\Ë

OO™
L
JKÛ›\Ž›Z
K›Û›\‹

OO™
LJJ_J_J_J_JKÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝØÚXÚÙYHLKÛÚXÚÙYÚ[™ÙN›Ë‹‹›ŸOYNÜ™]\›ŠÊ
KšœÞ
JWËÜØÛÜN™K—×ÜØÛÜSY[KÚXÚÙYÚ[™[ŽŠÊ
KšœÞ
J—ËÜ›ÛNˆ›Y[Z][XÚXÚØ›Þ‹˜\šXKXÚXÚÙYŽ‘Ê
OÈ›Z^YŽ‹‹›‹™YŽ˜K™]K\Ý]HŽ—Ê
KÛ”Ù[XÝ›Z
‹›Û”Ù[XÝ

OO›ÏËŠHQÊ
_]
KØÚXÚÑ›Ü‘Y˜][™]™[YˆL_J_J_J_JNÛË™\Ü^S˜[YOH“Y[PÚXÚØ›Þ][HŽÝ˜\ˆ×ÏH“Y[T˜Y[ÑÜ›Ý\‹ÚWË××OUŠ×ËÝ˜[YN›ÚYÛ•˜[YPÚ[™ÙNŠ
OOžß_JKWÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝÝ˜[YNÛ•˜[YPÚ[™ÙN›Ë‹‹›ŸOYKTÚ
ÊNÜ™]\›ŠÊ
KšœÞ
JWËÜØÛÜN™K—×ÜØÛÜSY[K˜[YNÛ•˜[YPÚ[™ÙNœ‹Ú[™[ŽŠÊ
KšœÞ
JWËË‹‹›‹™YŽ˜_J_J_JNÝWË™\Ü^S˜[YO\×ÎÝ˜\ˆWÏH“Y[T˜Y[Ò][H‹ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝÝ˜[YN‹‹›ßOYKX×ÊWËK—×ÜØÛÜSY[JK]OO[‹˜[YNÜ™]\›ŠÊ
KšœÞ
JWËÜØÛÜN™K—×ÜØÛÜSY[KÚXÚÙYœ‹Ú[™[ŽŠÊ
KšœÞ
J—ËÜ›ÛNˆ›Y[Z][\˜Y[È‹˜\šXKXÚXÚÙYŽœ‹‹‹›Ë™YŽ˜K™]K\Ý]HŽ—ÊŠKÛ”Ù[XÝ›Z
Ë›Û”Ù[XÝ

OO›‹›Û•˜[YPÚ[™ÙOËŠ
KØÚXÚÑ›Ü‘Y˜][™]™[YˆL_J_J_J_JNÜË™\Ü^S˜[YO[WÎÝ˜\ˆÏH“Y[R][R[™XØ]Üˆ‹ÞWË××OUŠËØÚXÚÙYˆL_JKÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜSY[N›Ü˜ÙS[Ý[›Ë‹‹›ŸOYKY×ÊË
NÜ™]\›ŠÊ
KšœÞ
JËÜ™\Ù[›ßÊ‹˜ÚXÚÙY
_LOO\‹˜ÚXÚÙYÚ[™[ŽŠÊ
KšœÞ
JšœÜ[‹Ë‹‹›‹™YŽ˜K™]K\Ý]HŽ—Ê‹˜ÚXÚÙY
_J_J_JNÚË™\Ü^S˜[YOYÎÝ˜\ˆ—ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜSY[N‹‹›ßOYNÜ™]\›ŠÊ
KšœÞ
Jš™]‹Ü›ÛNˆœÙ\\˜]Üˆ‹˜\šXK[ÜšY[][ÛˆŽˆšÜš^›Û[‹‹‹›Ë™YŽ˜_J_JNØ—Ë™\Ü^S˜[YOH“Y[TÙ\\˜]ÜˆŽÝ˜\ˆ—ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜSY[N‹‹›ßOYKTŠ
NÜ™]\›ŠÊ
KšœÞ
JËË‹‹›‹‹‹›Ë™YŽ˜_J_JNÙ—Ë™\Ü^S˜[YOH“Y[P\œ›ÝÈŽÝ˜\ˆ×ÏH“Y[TÝXˆ‹Ý—Ë××OUŠ×ÊK×ÏYOOžØÛÛœÝ××ÜØÛÜSY[N˜KÚ[™[ŽÜ[Ž›ÏHLKÛ“Ü[Ú[™ÙN›ŸOYKUÝŠ×ËJKTŠJKØËWOZJ
K\ÙTÝ]J[
KÛKOZJ
K\ÙTÝ]J[
KTÚ
ŠNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOŠLOOO\‹›Ü[‰‰™
LJK

OO™
LJJKÜ‹›Ü[‹JK
Ê
KšœÞ
JY‹Ë‹‹›Ú[™[ŽŠÊ
KšœÞ
JÝ‹ÜØÛÜN˜KÜ[Ž›ËÛ“Ü[Ú[™ÙN™ÛÛ[›KÛÛÛ[Ú[™ÙNœÚ[™[ŽŠÊ
KšœÞ
J—ËÜØÛÜN˜KÛÛ[Y‰

KšYÙÙ\’Y‰

KšYÙÙ\Ž˜ËÛ•šYÙÙ\Ú[™ÙNKÚ[™[ŽJ_J_J_NÐ×Ë™\Ü^S˜[YO]×ÎÝ˜\ˆÏH“Y[TÝX•šYÙÙ\ˆ‹×ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝUÝŠËK—×ÜØÛÜSY[JKÏQ]ŠËK—×ÜØÛÜSY[JKW×ÊËK—×ÜØÛÜSY[JKRŠËK—×ÜØÛÜSY[JKZJ
K\ÙT™YŠ[
KÜÚ[\‘Ü˜XÙU[Y\”™YŽ˜ËÛ”Ú[\‘Ü˜XÙR[[Ú[™ÙN_O\‹O^××ÜØÛÜSY[N™K—×ÜØÛÜSY[_KZJ
K\ÙPØ[˜XÚÊ

OOžÛ˜Ý\œ™[	‰Ú[™ÝË˜ÛX\•[Y[Ý]
˜Ý\œ™[
K˜Ý\œ™[[[K×JNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOœÜJKJ
K\ÙQY™™XÝ


OOžØÛÛœÝOXË˜Ý\œ™[Ü™]\›Š
OOžÝÚ[™ÝË˜ÛX\•[Y[Ý]
JKJ[
__KØËWJK
Ê
KšœÞ
J‹Ø\ÐÚ[ˆL‹‹›KÚ[™[ŽŠÊ
KšœÞ
J—ËÚY›‹šYÙÙ\’Y˜\šXKZ\ÜÜ\Žˆ›Y[H‹˜\šXKY^[™YŽ›Ü[‹˜\šXKXÛÛ›ÛÈŽ›‹˜ÛÛ[Y™]K\Ý]HŽWÊ›Ü[ŠK‹‹™K™YŽ‘JK‹›Û•šYÙÙ\Ú[™ÙJKÛÛXÚÎ˜OOžÙK›ÛÛXÚÏËŠJKK™\ØX›YK™Y˜][™]™[Y
K˜Ý\œ™[\™Ù]™›ØÝ\Ê
K›Ü[Ÿ›Û“Ü[Ú[™ÙJL
J_KÛ”Ú[\“[Ý™N›Z
K›Û”Ú[\“[Ý™KWÊOOžÜ‹›Û’][Q[\ŠJKK™Y˜][™]™[YK™\ØX›Y›Ü[Ÿ˜Ý\œ™[
‹›Û”Ú[\‘Ü˜XÙR[[Ú[™ÙJ[
K˜Ý\œ™[]Ú[™ÝËœÙ][Y[Ý]


OOžÝ›Û“Ü[Ú[™ÙJL
K

_KL
J_JJKÛ”Ú[\“X]™N›Z
K›Û”Ú[\“X]™KWÊOOžÜ

NØÛÛœÝO]˜ÛÛ[Ë™Ù]›Ý[™[™ÐÛY[™XÝ

NÚYŠJ^ØÛÛœÝÏ]˜ÛÛ[Ë™]\Ù]œÚYKHœšYÚOO[Ë[ËMNKÏXVÛÈ›YŽˆœšYÚ—KOXVÛÈœšYÚŽˆ›Y—NÜ‹›Û”Ú[\‘Ü˜XÙR[[Ú[™ÙJØ\™XN–ÞÞ™K˜ÛY[
ÛN™K˜ÛY[_KÞœËN˜KÜKÞšKN˜KÜKÞšKN˜K˜›ÝÛ_KÞœËN˜K˜›ÝÛ_WKÚYN›ßJKÚ[™ÝË˜ÛX\•[Y[Ý]
Ë˜Ý\œ™[
KË˜Ý\œ™[]Ú[™ÝËœÙ][Y[Ý]


OOœ‹›Û”Ú[\‘Ü˜XÙR[[Ú[™ÙJ[
KÌ
_Y[Ù^ÚYŠ‹›Û•šYÙÙ\“X]™JJKK™Y˜][™]™[Y
\™]\›ŽÜ‹›Û”Ú[\‘Ü˜XÙR[[Ú[™ÙJ[
__JJKÛ’Ù^QÝÛŽ›Z
K›Û’Ù^QÝÛ‹OOžØÛÛœÝHˆˆOO\‹œÙX\˜Ú™Y‹˜Ý\œ™[ÙK™\ØX›Y‰‰ˆˆOOXKšÙ^_–ÛË™\—Kš[˜ÛY\ÊKšÙ^JI‰Š›Û“Ü[Ú[™ÙJL
K˜ÛÛ[Ë™›ØÝ\Ê
KKœ™]™[Y˜][

J_J_J_J_JNÚ×Ë™\Ü^S˜[YO^ÎÝ˜\ˆ×ÏH“Y[TÝXÛÛ[‹ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝR]Š]‹K—×ÜØÛÜSY[JKÙ›Ü˜ÙS[Ý[›Ï]™›Ü˜ÙS[Ý[‹‹›ŸOYKUÝŠ]‹K—×ÜØÛÜSY[JKQ]Š]‹K—×ÜØÛÜSY[JKÏW×Ê×ËK—×ÜØÛÜSY[JKOZJ
K\ÙT™YŠ[
KOPžJKJNÜ™]\›ŠÊ
KšœÞ
J‹”›ÝšY\‹ÜØÛÜN™K—×ÜØÛÜSY[KÚ[™[ŽŠÊ
KšœÞ
JËÜ™\Ù[›ß‹›Ü[‹Ú[™[ŽŠÊ
KšœÞ
J‹”ÛÝÜØÛÜN™K—×ÜØÛÜSY[KÚ[™[ŽŠÊ
KšœÞ
J]‹ÚY˜Ë˜ÛÛ[Y˜\šXK[X™[YžHŽ˜ËšYÙÙ\’Y‹‹›‹™YŽ›K[YÛŽˆœÝ\‹ÚYNˆœOO[™\È›YŽˆœšYÚ‹\ØX›SÝ]ÚYTÚ[\‘]™[ÎˆLK\ØX›SÝ]ÚYTØÜ›ÛˆLK˜\›ØÝ\ÎˆLKÛ“Ü[]]Ñ›ØÝ\Î™OOžÛš\Õ\Ú[™ÒÙ^X›Ø\™™Y‹˜Ý\œ™[	‰K˜Ý\œ™[Ë™›ØÝ\Ê
KKœ™]™[Y˜][

_KÛÛÜÙP]]Ñ›ØÝ\Î™OO™Kœ™]™[Y˜][

KÛ‘›ØÝ\ÓÝ]ÚYN›Z
K›Û‘›ØÝ\ÓÝ]ÚYKOOžÙK\™Ù]OOXËšYÙÙ\‰‰œ‹›Û“Ü[Ú[™ÙJLJ_JKÛ‘\ØØ\RÙ^QÝÛŽ›Z
K›Û‘\ØØ\RÙ^QÝÛ‹OOžÛ›ÛÛÜÙJ
KKœ™]™[Y˜][

_JKÛ’Ù^QÝÛŽ›Z
K›Û’Ù^QÝÛ‹OOžØÛÛœÝOYK˜Ý\œ™[\™Ù]˜ÛÛZ[œÊK\™Ù]
KP]–Û™\—Kš[˜ÛY\ÊKšÙ^JNØI‰	‰Š‹›Û“Ü[Ú[™ÙJLJKËšYÙÙ\Ë™›ØÝ\Ê
KKœ™]™[Y˜][

J_J_J_J_J_J_JNÙ[˜Ý[ÛˆWÊJ^Ü™]\›ˆOÈ›Ü[ˆŽˆ˜ÛÜÙYŸY[˜Ý[ÛˆÊJ^Ü™]\›ˆš[™]\›Z[˜]HOOY_Y[˜Ý[Ûˆ—ÊJ^Ü™]\›ˆÊJOÈš[™]\›Z[˜]HŽ™OÈ˜ÚXÚÙYŽˆ[˜ÚXÚÙYŸY[˜Ý[ÛˆWÊJ^Ü™]\›ˆOOˆ›[Ý\ÙHOOXKœÚ[\•\OÙJJN›ÚYSË™\Ü^S˜[YOT×ÎÝ˜\ˆÏR‹—ÏS‹—Ï^‹ÏV]‹—ÏYWË×ÏXWË×Ï[—Ë×Ï[ËWÏ]WËÏ\Ë—ÏZË×ÏX—Ë—ÏY—ËWÏZ×Ë—ÏSËWÏH‘›ÜÝÛ“Y[H‹ÜWË—×O\
WËÔ—JKWÏTŠ
KÉË×O\WÊWÊK—ÏYOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N˜KÚ[™[Ž\Ž›ËÜ[Ž›‹Y˜][Ü[Žœ‹Û“Ü[Ú[™ÙN›[Ù[˜ÏHLOYKOVWÊJKOZJ
K\ÙT™YŠ[
KÜOZ
Ü›Ü›‹Y˜][›ÜœÏÈLKÛÚ[™ÙN›Ø[\Ž•WßJNÜ™]\›ŠÊ
KšœÞ
J	ËÜØÛÜN˜KšYÙÙ\’Y‰

KšYÙÙ\”™YŽ›KÛÛ[Y‰

KÜ[ŽœÛ“Ü[Ú[™ÙN™Û“Ü[•ÙÙÛNšJ
K\ÙPØ[˜XÚÊ

OO™
OOˆYJKÙJK[Ù[˜ËÚ[™[ŽŠÊ
KšœÞ
JËË‹‹KÜ[ŽœÛ“Ü[Ú[™ÙN™\Ž›Ë[Ù[˜ËÚ[™[ŽJ_J_NÖ—Ë™\Ü^S˜[YOUWÎÝ˜\ˆWÏH‘›ÜÝÛ“Y[UšYÙÙ\ˆ‹PÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N\ØX›Y›ÏHLK‹‹›ŸOYKVÊWË
KVWÊ
NÜ™]\›ŠÊ
KšœÞ
J—ËØ\ÐÚ[ˆL‹‹›Ú[™[ŽŠÊ
KšœÞ
Jš˜]Û‹Ý\Nˆ˜]Ûˆ‹Yœ‹šYÙÙ\’Y˜\šXKZ\ÜÜ\Žˆ›Y[H‹˜\šXKY^[™YŽœ‹›Ü[‹˜\šXKXÛÛ›ÛÈŽœ‹›Ü[Ü‹˜ÛÛ[Y›ÚY™]K\Ý]HŽœ‹›Ü[È›Ü[ˆŽˆ˜ÛÜÙY‹™]KY\ØX›YŽ›ÏÈˆŽ›ÚY\ØX›Y›Ë‹‹›‹™YŽ‘JK‹šYÙÙ\”™YŠKÛ”Ú[\‘ÝÛŽ›Z
K›Û”Ú[\‘ÝÛ‹OOžÛßOOYK˜]ÛŸLHOOYK˜Ý›Ù^_
‹›Û“Ü[•ÙÙÛJ
K‹›Ü[ŸKœ™]™[Y˜][

J_JKÛ’Ù^QÝÛŽ›Z
K›Û’Ù^QÝÛ‹OOžÛß
È‘[\ˆ‹ˆ—Kš[˜ÛY\ÊKšÙ^JI‰œ‹›Û“Ü[•ÙÙÛJ
K\œ›ÝÑÝÛˆOOYKšÙ^I‰œ‹›Û“Ü[Ú[™ÙJL
KÈ‘[\ˆ‹ˆ‹\œ›ÝÑÝÛˆ—Kš[˜ÛY\ÊKšÙ^JI‰™Kœ™]™[Y˜][

J_J_J_J_JNÙPË™\Ü^S˜[YOTWÎÝ˜\ˆPÏYOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N˜K‹‹OYKÏVWÊJNÜ™]\›ŠÊ
KšœÞ
J—ËË‹‹›Ë‹‹J_NØPË™\Ü^S˜[YOH‘›ÜÝÛ“Y[TÜ[ŽÝ˜\ˆÏH‘›ÜÝÛ“Y[PÛÛ[‹ÐÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N‹‹›ßOYKVÊË
KVWÊ
KZJ
K\ÙT™YŠLJNÜ™]\›ŠÊ
KšœÞ
JËÚY›‹˜ÛÛ[Y˜\šXK[X™[YžHŽ›‹šYÙÙ\’Y‹‹œ‹‹‹›Ë™YŽ˜KÛÛÜÙP]]Ñ›ØÝ\Î›Z
K›ÛÛÜÙP]]Ñ›ØÝ\ËOOžÛ˜Ý\œ™[‹šYÙÙ\”™Y‹˜Ý\œ™[Ë™›ØÝ\Ê
K˜Ý\œ™[HLKKœ™]™[Y˜][

_JKÛ’[\˜XÝÝ]ÚYN›Z
K›Û’[\˜XÝÝ]ÚYKOOžØÛÛœÝOYK™]Z[›ÜšYÚ[˜[]™[LOOXK˜]Û‰‰ˆLOOXK˜Ý›Ù^KÏLOOXK˜]ÛŸÛ‹›[Ù[	‰ˆ[ß
˜Ý\œ™[HL
_JKÝ[NžË‹‹™KœÝ[K‹K\˜Y^Y›ÜÝÛ‹[Y[KXÛÛ[]˜[œÙ›Ü›K[ÜšYÚ[ˆŽˆ˜\ŠK\˜Y^\Ü\‹]˜[œÙ›Ü›K[ÜšYÚ[ŠH‹‹K\˜Y^Y›ÜÝÛ‹[Y[KXÛÛ[X]˜Z[X›K]ÚYŽˆ˜\ŠK\˜Y^\Ü\‹X]˜Z[X›K]ÚY
H‹‹K\˜Y^Y›ÜÝÛ‹[Y[KXÛÛ[X]˜Z[X›KZZYÚŽˆ˜\ŠK\˜Y^\Ü\‹X]˜Z[X›KZZYÚ
H‹‹K\˜Y^Y›ÜÝÛ‹[Y[K]šYÙÙ\‹]ÚYŽˆ˜\ŠK\˜Y^\Ü\‹X[˜ÚÜ‹]ÚY
H‹‹K\˜Y^Y›ÜÝÛ‹[Y[K]šYÙÙ\‹ZZYÚŽˆ˜\ŠK\˜Y^\Ü\‹X[˜ÚÜ‹ZZYÚ
HŸ_J_JNÛÐË™\Ü^S˜[YO]ÎÝ˜\ˆÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N‹‹›ßOYKVWÊ
NÜ™]\›ŠÊ
KšœÞ
J—ËË‹‹›‹‹‹›Ë™YŽ˜_J_JNÛË™\Ü^S˜[YOH‘›ÜÝÛ“Y[QÜ›Ý\ŽÝ˜\ˆÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N‹‹›ßOYKVWÊ
NÜ™]\›ŠÊ
KšœÞ
J×ËË‹‹›‹‹‹›Ë™YŽ˜_J_JNÜË™\Ü^S˜[YOH‘›ÜÝÛ“Y[SX™[ŽÝ˜\ˆÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N‹‹›ßOYKVWÊ
NÜ™]\›ŠÊ
KšœÞ
J×ËË‹‹›‹‹‹›Ë™YŽ˜_J_JNÛË™\Ü^S˜[YOH‘›ÜÝÛ“Y[R][HŽÝ˜\ˆÐÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N‹‹›ßOYKVWÊ
NÜ™]\›ŠÊ
KšœÞ
J×ËË‹‹›‹‹‹›Ë™YŽ˜_J_JNÜÐË™\Ü^S˜[YOH‘›ÜÝÛ“Y[PÚXÚØ›Þ][HŽÝ˜\ˆPÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N‹‹›ßOYKVWÊ
NÜ™]\›ŠÊ
KšœÞ
JWËË‹‹›‹‹‹›Ë™YŽ˜_J_JNÚPË™\Ü^S˜[YOH‘›ÜÝÛ“Y[T˜Y[ÑÜ›Ý\ŽÝ˜\ˆÐÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N‹‹›ßOYKVWÊ
NÜ™]\›ŠÊ
KšœÞ
JËË‹‹›‹‹‹›Ë™YŽ˜_J_JNØÐË™\Ü^S˜[YOH‘›ÜÝÛ“Y[T˜Y[Ò][HŽÝ˜\ˆPÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N‹‹›ßOYKVWÊ
NÜ™]\›ŠÊ
KšœÞ
J—ËË‹‹›‹‹‹›Ë™YŽ˜_J_JNÝPË™\Ü^S˜[YOH‘›ÜÝÛ“Y[R][R[™XØ]ÜˆŽÝ˜\ˆPÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N‹‹›ßOYKVWÊ
NÜ™]\›ŠÊ
KšœÞ
J×ËË‹‹›‹‹‹›Ë™YŽ˜_J_JNÛPË™\Ü^S˜[YOH‘›ÜÝÛ“Y[TÙ\\˜]ÜˆŽÝ˜\ˆÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N‹‹›ßOYKVWÊ
NÜ™]\›ŠÊ
KšœÞ
J—ËË‹‹›‹‹‹›Ë™YŽ˜_J_JNÜË™\Ü^S˜[YOH‘›ÜÝÛ“Y[P\œ›ÝÈŽÝ˜\ˆÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N‹‹›ßOYKVWÊ
NÜ™]\›ŠÊ
KšœÞ
JWËË‹‹›‹‹‹›Ë™YŽ˜_J_JNÙË™\Ü^S˜[YOH‘›ÜÝÛ“Y[TÝX•šYÙÙ\ˆŽÝ˜\ˆPÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQ›ÜÝÛ“Y[N‹‹›ßOYKVWÊ
NÜ™]\›ŠÊ
KšœÞ
J—ËË‹‹›‹‹‹›Ë™YŽ˜KÝ[NžË‹‹™KœÝ[K‹K\˜Y^Y›ÜÝÛ‹[Y[KXÛÛ[]˜[œÙ›Ü›K[ÜšYÚ[ˆŽˆ˜\ŠK\˜Y^\Ü\‹]˜[œÙ›Ü›K[ÜšYÚ[ŠH‹‹K\˜Y^Y›ÜÝÛ‹[Y[KXÛÛ[X]˜Z[X›K]ÚYŽˆ˜\ŠK\˜Y^\Ü\‹X]˜Z[X›K]ÚY
H‹‹K\˜Y^Y›ÜÝÛ‹[Y[KXÛÛ[X]˜Z[X›KZZYÚŽˆ˜\ŠK\˜Y^\Ü\‹X]˜Z[X›KZZYÚ
H‹‹K\˜Y^Y›ÜÝÛ‹[Y[K]šYÙÙ\‹]ÚYŽˆ˜\ŠK\˜Y^\Ü\‹X[˜ÚÜ‹]ÚY
H‹‹K\˜Y^Y›ÜÝÛ‹[Y[K]šYÙÙ\‹ZZYÚŽˆ˜\ŠK\˜Y^\Ü\‹X[˜ÚÜ‹ZZYÚ
HŸ_J_JNÞPË™\Ü^S˜[YOH‘›ÜÝÛ“Y[TÝXÛÛ[ŽÝ˜\ˆÐÏV—ËÏYPËÏXPËÏ[ÐËÐÏ\ËÏ[ËÐÏ\ÐËÐÏXÐËÏ]PËÐÏ[PËÐÏYËÏ^PÎØÛÛœÝPÏUY
˜Ú\˜ÛH‹ÖÈ˜Ú\˜ÛH‹ØÞˆŒLˆ‹ÞNˆŒLˆ‹ŽˆŒL‹Ù^NˆŒ[YÛ^HŸWWJKÏYÐËÏZÎÚJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K[œÙ]˜KÚ[™[Ž‹‹›ßKŠOOŠÊ
KšœÞÊJÐËÜ™YŽ›‹Û\ÜÓ˜[YNœYÊ™›^Ý\œÛÜ‹YY˜][Ù[XÝ[›Û™H][\ËXÙ[\ˆØ\Lˆ›Ý[™Y\ÛHLˆKLKH^\ÛHÝ][™K[›Û™H›ØÝ\Î˜™ËXXØÙ[]KVÜÝ]O[Ü[—N˜™ËXXØÙ[É—ÜÝ™×NœÚ[\‹Y]™[Ë[›Û™HÉ—ÜÝ™×NœÚ^™KMÉ—ÜÝ™×NœÚš[šËL‹I‰ˆœN‹JK‹‹›ËÚ[™[Ž–Ý
Ê
KšœÞ
JZØÛ\ÜÓ˜[YNˆ›[X]]ÈŸJW_JJK™\Ü^S˜[YOTÐË™\Ü^S˜[YNÚJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JËÜ™YŽÛ\ÜÓ˜[YNœYÊž‹MLZ[‹]ËVÎ™[WHÝ™\™›ÝËZY[ˆ›Ý[™Y[Y›Ü™\ˆ™Ë\ÜÝ™\ˆLH^\ÜÝ™\‹Y›Ü™YÜ›Ý[™ÚYÝË[È]KVÜÝ]O[Ü[—N˜[š[X]KZ[ˆ]KVÜÝ]OXÛÜÙYN˜[š[X]K[Ý]]KVÜÝ]OXÛÜÙYN™˜YK[Ý]L]KVÜÝ]O[Ü[—N™˜YKZ[‹L]KVÜÝ]OXÛÜÙYNž›ÛÛK[Ý]NMH]KVÜÝ]O[Ü[—Nž›ÛÛKZ[‹NMH]KVÜÚYOX›ÝÛWNœÛYKZ[‹Yœ›ÛK]ÜLˆ]KVÜÚYO[YNœÛYKZ[‹Yœ›ÛK\šYÚLˆ]KVÜÚYO\šYÚNœÛYKZ[‹Yœ›ÛK[YLˆ]KVÜÚYO]ÜNœÛYKZ[‹Yœ›ÛKX›ÝÛKLˆÜšYÚ[‹VËK\˜Y^Y›ÜÝÛ‹[Y[KXÛÛ[]˜[œÙ›Ü›K[ÜšYÚ[—H‹JK‹‹˜_JJK™\Ü^S˜[YOSË™\Ü^S˜[YNØÛÛœÝPÏZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™KÚYSÙ™œÙ]˜OM‹‹KÊOOŠÊ
KšœÞ
JËØÚ[™[ŽŠÊ
KšœÞ
JËÜ™YŽ›ËÚYSÙ™œÙ]˜KÛ\ÜÓ˜[YNœYÊž‹MLX^ZVÝ˜\ŠK\˜Y^Y›ÜÝÛ‹[Y[KXÛÛ[X]˜Z[X›KZZYÚ
WHZ[‹]ËVÎ™[WHÝ™\™›ÝË^KX]]ÈÝ™\™›ÝË^ZY[ˆ›Ý[™Y[Y›Ü™\ˆ™Ë\ÜÝ™\ˆLH^\ÜÝ™\‹Y›Ü™YÜ›Ý[™ÚYÝË[Y‹™]KVÜÝ]O[Ü[—N˜[š[X]KZ[ˆ]KVÜÝ]OXÛÜÙYN˜[š[X]K[Ý]]KVÜÝ]OXÛÜÙYN™˜YK[Ý]L]KVÜÝ]O[Ü[—N™˜YKZ[‹L]KVÜÝ]OXÛÜÙYNž›ÛÛK[Ý]NMH]KVÜÝ]O[Ü[—Nž›ÛÛKZ[‹NMH]KVÜÚYOX›ÝÛWNœÛYKZ[‹Yœ›ÛK]ÜLˆ]KVÜÚYO[YNœÛYKZ[‹Yœ›ÛK\šYÚLˆ]KVÜÚYO\šYÚNœÛYKZ[‹Yœ›ÛK[YLˆ]KVÜÚYO]ÜNœÛYKZ[‹Yœ›ÛKX›ÝÛKLˆÜšYÚ[‹VËK\˜Y^Y›ÜÝÛ‹[Y[KXÛÛ[]˜[œÙ›Ü›K[ÜšYÚ[—H‹JK‹‹J_JJNÓPË™\Ü^S˜[YOYË™\Ü^S˜[YNØÛÛœÝÏZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K[œÙ]˜K‹‹KÊOOŠÊ
KšœÞ
JËÜ™YŽ›ËÛ\ÜÓ˜[YNœYÊœ™[]]™H›^Ý\œÛÜ‹YY˜][Ù[XÝ[›Û™H][\ËXÙ[\ˆØ\Lˆ›Ý[™Y\ÛHLˆKLKH^\ÛHÝ][™K[›Û™H˜[œÚ][Û‹XÛÛÜœÈ›ØÝ\Î˜™ËXXØÙ[›ØÝ\Î^XXØÙ[Y›Ü™YÜ›Ý[™]KVÙ\ØX›YNœÚ[\‹Y]™[Ë[›Û™H]KVÙ\ØX›YN›ÜXÚ]KMLÉœÝ™×NœÚ^™KMÉœÝ™×NœÚš[šËL‹I‰ˆœN‹JK‹‹JJNÕË™\Ü^S˜[YO]Ë™\Ü^S˜[YNÚJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™KÚ[™[Ž˜KÚXÚÙY‹‹›ßKŠOOŠÊ
KšœÞÊJÐËÜ™YŽ›‹Û\ÜÓ˜[YNœYÊœ™[]]™H›^Ý\œÛÜ‹YY˜][Ù[XÝ[›Û™H][\ËXÙ[\ˆ›Ý[™Y\ÛHKLKHN‹Lˆ^\ÛHÝ][™K[›Û™H˜[œÚ][Û‹XÛÛÜœÈ›ØÝ\Î˜™ËXXØÙ[›ØÝ\Î^XXØÙ[Y›Ü™YÜ›Ý[™]KVÙ\ØX›YNœÚ[\‹Y]™[Ë[›Û™H]KVÙ\ØX›YN›ÜXÚ]KML‹JKÚXÚÙY‹‹›ËÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜XœÛÛ]HYLˆ›^LËHËLËH][\ËXÙ[\ˆ\ÝYžKXÙ[\ˆ‹Ú[™[ŽŠÊ
KšœÞ
JËØÚ[™[ŽŠÊ
KšœÞ
JKØÛ\ÜÓ˜[YNˆšMËMŸJ_J_JKW_JJK™\Ü^S˜[YOWÐË™\Ü^S˜[YNÚJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™KÚ[™[Ž˜K‹‹KÊOOŠÊ
KšœÞÊJÐËÜ™YŽ›ËÛ\ÜÓ˜[YNœYÊœ™[]]™H›^Ý\œÛÜ‹YY˜][Ù[XÝ[›Û™H][\ËXÙ[\ˆ›Ý[™Y\ÛHKLKHN‹Lˆ^\ÛHÝ][™K[›Û™H˜[œÚ][Û‹XÛÛÜœÈ›ØÝ\Î˜™ËXXØÙ[›ØÝ\Î^XXØÙ[Y›Ü™YÜ›Ý[™]KVÙ\ØX›YNœÚ[\‹Y]™[Ë[›Û™H]KVÙ\ØX›YN›ÜXÚ]KML‹JK‹‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜XœÛÛ]HYLˆ›^LËHËLËH][\ËXÙ[\ˆ\ÝYžKXÙ[\ˆ‹Ú[™[ŽŠÊ
KšœÞ
JËØÚ[™[ŽŠÊ
KšœÞ
JPËØÛ\ÜÓ˜[YNˆšLˆËLˆš[XÝ\œ™[ŸJ_J_JKW_JJK™\Ü^S˜[YOPÐË™\Ü^S˜[YNÚJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K[œÙ]˜K‹‹KÊOOŠÊ
KšœÞ
JÐËÜ™YŽ›ËÛ\ÜÓ˜[YNœYÊœLˆKLKH^\ÛH›Û\Ù[ZX›Û‹I‰ˆœN‹JK‹‹JJK™\Ü^S˜[YO]ÐË™\Ü^S˜[YNÚJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JÐËÜ™YŽÛ\ÜÓ˜[YNœYÊ‹[^LH^KLH\™Ë[]]Y‹JK‹‹˜_JJK™\Ü^S˜[YOZÐË™\Ü^S˜[YNÝ˜\ˆÏH‘X[ÙÈ‹ÔË×O\
ÊKÑËÐ×OTÊÊKÐÏYOOžØÛÛœÝ××ÜØÛÜQX[ÙÎ˜KÚ[™[ŽÜ[Ž›ËY˜][Ü[Ž›‹Û“Ü[Ú[™ÙNœ‹[Ù[›HLOYKÏZJ
K\ÙT™YŠ[
KOZJ
K\ÙT™YŠ[
KÛKOZ
Ü›Ü›ËY˜][›Ü›ÏÈLKÛÚ[™ÙNœ‹Ø[\Ž•ßJNÜ™]\›ŠÊ
KšœÞ
JËÜØÛÜN˜KšYÙÙ\”™YŽ˜ËÛÛ[™YŽKÛÛ[Y‰

K]RY‰

K\ØÜš\[Û’Y‰

KÜ[Ž›KÛ“Ü[Ú[™ÙNœÛ“Ü[•ÙÙÛNšJ
K\ÙPØ[˜XÚÊ

OOœ
OOˆYJKÜJK[Ù[›Ú[™[ŽJ_NÕÐË™\Ü^S˜[YOUÎÝ˜\ˆÐÏH‘X[ÙÕšYÙÙ\ˆ‹PÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQX[ÙÎ‹‹›ßOYKQÐÊÐË
KPžJK‹šYÙÙ\”™YŠNÜ™]\›ŠÊ
KšœÞ
Jš˜]Û‹Ý\Nˆ˜]Ûˆ‹˜\šXKZ\ÜÜ\Žˆ™X[ÙÈ‹˜\šXKY^[™YŽ›‹›Ü[‹˜\šXKXÛÛ›ÛÈŽ›‹˜ÛÛ[Y™]K\Ý]HŽœž
‹›Ü[ŠK‹‹›Ë™YŽœ‹ÛÛXÚÎ›Z
K›ÛÛXÚË‹›Û“Ü[•ÙÙÛJ_J_JNÑPË™\Ü^S˜[YOSÐÎÝ˜\ˆÏH‘X[ÙÔÜ[‹ÓËÐ×OTÊËÙ›Ü˜ÙS[Ý[›ÚYJKÏYOOžØÛÛœÝ××ÜØÛÜQX[ÙÎ˜K›Ü˜ÙS[Ý[Ú[™[Ž›ËÛÛZ[™\Ž›ŸOYKQÐÊËJNÜ™]\›ŠÊ
KšœÞ
JËÜØÛÜN˜K›Ü˜ÙS[Ý[Ú[™[ŽšJ
KÚ[™[‹›X\
ËOOŠÊ
KšœÞ
JËÜ™\Ù[‹›Ü[‹Ú[™[ŽŠÊ
KšœÞ
JÝËØ\ÐÚ[ˆLÛÛZ[™\Ž›‹Ú[™[Ž™_J_JJ_J_NÚË™\Ü^S˜[YORÎÝ˜\ˆPÏH‘X[ÙÓÝ™\›^H‹ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝRÐÊPËK—×ÜØÛÜQX[ÙÊKÙ›Ü˜ÙS[Ý[›Ï]™›Ü˜ÙS[Ý[‹‹›ŸOYKQÐÊPËK—×ÜØÛÜQX[ÙÊNÜ™]\›ˆ‹›[Ù[ÊÊ
KšœÞ
JËÜ™\Ù[›ß‹›Ü[‹Ú[™[ŽŠÊ
KšœÞ
JPËË‹‹›‹™YŽ˜_J_JN›[JNÞË™\Ü^S˜[YORPÎÝ˜\ˆPÏS^J‘X[ÙÓÝ™\›^K”™[[Ý™TØÜ›ÛŠKPÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQX[ÙÎ‹‹›ßOYKQÐÊPË
NÜ™]\›ŠÊ
KšœÞ
JÝ‹Ø\Î•PË[ÝÔ[˜Ú›ÛÛNˆLÚ\™Î–Û‹˜ÛÛ[™Y—KÚ[™[ŽŠÊ
KšœÞ
Jš™]‹È™]K\Ý]HŽœž
‹›Ü[ŠK‹‹›Ë™YŽ˜KÝ[NžÜÚ[\‘]™[Îˆ˜]]È‹‹‹›ËœÝ[__J_J_JKÏH‘X[ÙÐÛÛ[‹PÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝRÐÊËK—×ÜØÛÜQX[ÙÊKÙ›Ü˜ÙS[Ý[›Ï]™›Ü˜ÙS[Ý[‹‹›ŸOYKQÐÊËK—×ÜØÛÜQX[ÙÊNÜ™]\›ŠÊ
KšœÞ
JËÜ™\Ù[›ß‹›Ü[‹Ú[™[Žœ‹›[Ù[ÊÊ
KšœÞ
J	ËË‹‹›‹™YŽ˜_JNŠÊ
KšœÞ
JËË‹‹›‹™YŽ˜_J_J_JNÖPË™\Ü^S˜[YORÎÝ˜\ˆ	ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝQÐÊËK—×ÜØÛÜQX[ÙÊKÏZJ
K\ÙT™YŠ[
KPžJK˜ÛÛ[™Y‹ÊNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝO[Ë˜Ý\œ™[ÚYŠJ\™]\›ˆÊJ_K×JK
Ê
KšœÞ
JËË‹‹™K™YŽ›‹˜\›ØÝ\Î›Ü[‹\ØX›SÝ]ÚYTÚ[\‘]™[ÎˆLÛÛÜÙP]]Ñ›ØÝ\Î›Z
K›ÛÛÜÙP]]Ñ›ØÝ\ËOOžÙKœ™]™[Y˜][

KšYÙÙ\”™Y‹˜Ý\œ™[Ë™›ØÝ\Ê
_JKÛ”Ú[\‘ÝÛ“Ý]ÚYN›Z
K›Û”Ú[\‘ÝÛ“Ý]ÚYKOOžØÛÛœÝOYK™]Z[›ÜšYÚ[˜[]™[LOOXK˜]Û‰‰ˆLOOXK˜Ý›Ù^NÊOOXK˜]ÛŸ
I‰™Kœ™]™[Y˜][

_JKÛ‘›ØÝ\ÓÝ]ÚYN›Z
K›Û‘›ØÝ\ÓÝ]ÚYKOO™Kœ™]™[Y˜][

J_J_JKÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝQÐÊËK—×ÜØÛÜQX[ÙÊKÏZJ
K\ÙT™YŠLJKZJ
K\ÙT™YŠLJNÜ™]\›ŠÊ
KšœÞ
JËË‹‹™K™YŽ˜K˜\›ØÝ\ÎˆLK\ØX›SÝ]ÚYTÚ[\‘]™[ÎˆLKÛÛÜÙP]]Ñ›ØÝ\Î˜OOžÙK›ÛÛÜÙP]]Ñ›ØÝ\ÏËŠJKK™Y˜][™]™[Y
Ë˜Ý\œ™[šYÙÙ\”™Y‹˜Ý\œ™[Ë™›ØÝ\Ê
KKœ™]™[Y˜][

JKË˜Ý\œ™[HLK‹˜Ý\œ™[HL_KÛ’[\˜XÝÝ]ÚYN˜OOžÙK›Û’[\˜XÝÝ]ÚYOËŠJKK™Y˜][™]™[Y
Ë˜Ý\œ™[HLœÚ[\™ÝÛˆOOXK™]Z[›ÜšYÚ[˜[]™[\I‰Š‹˜Ý\œ™[HL
JNØÛÛœÝXK\™Ù]]šYÙÙ\”™Y‹˜Ý\œ™[Ë˜ÛÛZ[œÊŠNÛ	‰˜Kœ™]™[Y˜][

K™›ØÝ\Ú[ˆOOXK™]Z[›ÜšYÚ[˜[]™[\I‰›‹˜Ý\œ™[	‰˜Kœ™]™[Y˜][

__J_JKÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQX[ÙÎ˜\›ØÝ\Î›ËÛ“Ü[]]Ñ›ØÝ\Î›‹ÛÛÜÙP]]Ñ›ØÝ\Îœ‹‹‹›OYKÏQÐÊË
KOZJ
K\ÙT™YŠ[
KOPžJKJNÜ™]\›ˆÚ

K
Ê
KšœÞÊJÊ
K‘œ˜YÛY[ØÚ[™[Ž–ÊÊ
KšœÞ
JšØ\ÐÚ[ˆLÛÜˆL˜\Y›ËÛ“[Ý[]]Ñ›ØÝ\Î›‹Û•[›[Ý[]]Ñ›ØÝ\Îœ‹Ú[™[ŽŠÊ
KšœÞ
JÜ›ÛNˆ™X[ÙÈ‹Y˜Ë˜ÛÛ[Y˜\šXKY\ØÜšX™YžHŽ˜Ë™\ØÜš\[Û’Y˜\šXK[X™[YžHŽ˜Ë]RY™]K\Ý]HŽœž
Ë›Ü[ŠK‹‹›™YŽ›KÛ‘\ÛZ\ÜÎŠ
OO˜Ë›Û“Ü[Ú[™ÙJLJ_J_JK
Ê
KšœÞÊJÊ
K‘œ˜YÛY[ØÚ[™[Ž–ÊÊ
KšœÞ
JÞÝ]RY˜Ë]RYJK
Ê
KšœÞ
J^ØÛÛ[™YŽK\ØÜš\[Û’Y˜Ë™\ØÜš\[Û’YJW_JW_J_JKPÏH‘X[ÙÕ]H‹^ZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQX[ÙÎ‹‹›ßOYKQÐÊPË
NÜ™]\›ŠÊ
KšœÞ
Jšš‹ÚY›‹]RY‹‹›Ë™YŽ˜_J_JNÙ^™\Ü^S˜[YOTPÎÝ˜\ˆ^H‘X[ÙÑ\ØÜš\[Ûˆ‹ZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQX[ÙÎ‹‹›ßOYKQÐÊ^
NÜ™]\›ŠÊ
KšœÞ
JšœÚY›‹™\ØÜš\[Û’Y‹‹›Ë™YŽ˜_J_JNÝ™\Ü^S˜[YOX^Ý˜\ˆÞH‘X[ÙÐÛÜÙH‹žZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜQX[ÙÎ‹‹›ßOYKQÐÊÞ
NÜ™]\›ŠÊ
KšœÞ
Jš˜]Û‹Ý\Nˆ˜]Ûˆ‹‹‹›Ë™YŽ˜KÛÛXÚÎ›Z
K›ÛÛXÚË

OO›‹›Û“Ü[Ú[™ÙJLJJ_J_JNÙ[˜Ý[Ûˆž
J^Ü™]\›ˆOÈ›Ü[ˆŽˆ˜ÛÜÙYŸ[ž™\Ü^S˜[YO[ÞÝ˜\ˆH‘X[ÙÕ]UØ\›š[™È‹ÜÞ^OY[˜Ý[ÛŠKJ^ØÛÛœÝZJ
K˜Ü™X]PÛÛ^
JKÏYOOžØÛÛœÝØÚ[™[Ž˜K‹‹›ßOYKZJ
K\ÙSY[[Ê

OO›ËØš™XÝ˜[Y\ÊÊJNÜ™]\›ŠÊ
KšœÞ
J”›ÝšY\‹Ý˜[YN›‹Ú[™[Ž˜_J_NÜ™]\›ˆË™\Ü^S˜[YOYJÈ”›ÝšY\ˆ‹ÛË[˜Ý[ÛŠÊ^ØÛÛœÝZJ
K\ÙPÛÛ^

NÚYŠŠ\™]\›ˆŽÚYŠ›ÚYOOXJ\™]\›ˆNÝ›ÝÈ™]È\œ›ÜŠ	ÛßW]\Ý™H\ÙYÚ][ˆ	Ù_W
_W_JØÛÛ[˜[YN’Ë]S˜[YN”PËØÜÔÛYÎˆ™X[ÙÈŸJKÞJÝ]RY™_JOOžØÛÛœÝOZ^

KX	ØK˜ÛÛ[˜[Y_W™\]Z\™\ÈH	ØK]S˜[Y_W›ÜˆHÛÛ\Û™[È™HXØÙ\ÜÚX›H›ÜˆØÜ™Y[ˆ™XY\ˆ\Ù\œË——’Yˆ[ÝHØ[ÈYHH	ØK]S˜[Y_W[ÝHØ[ˆÜ˜\]Ú]Ý\ˆš\ÝX[RY[ˆÛÛ\Û™[——‘›Üˆ[Ü™H[™›Ü›X][Û‹ÙYHÎ‹ËÜ˜Y^]ZK˜ÛÛKÜš[Z]]™\ËÙØÜËØÛÛ\Û™[ËÉØK™ØÜÔÛYßXÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžÚYŠJ^ÙØÝ[Y[™Ù][[Y[žRY
J_ÛÛœÛÛK™\œ›ÜŠ
__KÝWJK[K^JØÛÛ[™YŽ™K\ØÜš\[Û’Y˜_JOOžØÛÛœÝXØ\›š[™ÎˆZ\ÜÚ[™È\ØÜš\[Û—Üˆ\šXKY\ØÜšX™YžO^Ý[™Yš[™YW›ÜˆÉÚ^
‘X[ÙÑ\ØÜš\[Û•Ø\›š[™ÈŠK˜ÛÛ[˜[Y__K˜Ü™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝÏYK˜Ý\œ™[Ë™Ù]]šX]J˜\šXKY\ØÜšX™YžHŠNÚYŠI‰›Ê^ÙØÝ[Y[™Ù][[Y[žRY
J_ÛÛœÛÛKØ\›Š
__KÝKWJK[K^UÐËQPËZË^^ËÞVPËY^ž]ž[žØÛÛœÝÞUY
ž‹ÖÈœ]‹Ùˆ“LNˆˆN‹Ù^NˆŒX›YŽŸWKÈœ]‹Ùˆ›MˆˆLˆLˆ‹Ù^Nˆ™šÍˆŸWWJKž[^Þ\ÞYZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
J^ØÛ\ÜÓ˜[YNœYÊ™š^Y[œÙ]L‹ML™ËX›XÚËÎ]KVÜÝ]O[Ü[—N˜[š[X]KZ[ˆ]KVÜÝ]OXÛÜÙYN˜[š[X]K[Ý]]KVÜÝ]OXÛÜÙYN™˜YK[Ý]L]KVÜÝ]O[Ü[—N™˜YKZ[‹L‹JK‹‹˜K™YŽJJNÞ™\Ü^S˜[YO^^™\Ü^S˜[YNØÛÛœÝÞQ^J™š^Y‹MLØ\M™ËX˜XÚÙÜ›Ý[™MˆÚYÝË[È˜[œÚ][ÛˆX\ÙKZ[‹[Ý]]KVÜÝ]OXÛÜÙYN™\˜][Û‹LÌ]KVÜÝ]O[Ü[—N™\˜][Û‹ML]KVÜÝ]O[Ü[—N˜[š[X]KZ[ˆ]KVÜÝ]OXÛÜÙYN˜[š[X]K[Ý]‹Ý˜\šX[ÎžÜÚYNžÝÜˆš[œÙ]^LÜL›Ü™\‹Xˆ]KVÜÝ]OXÛÜÙYNœÛYK[Ý]]Ë]Ü]KVÜÝ]O[Ü[—NœÛYKZ[‹Yœ›ÛK]Ü‹›ÝÛNˆš[œÙ]^L›ÝÛKL›Ü™\‹]]KVÜÝ]OXÛÜÙYNœÛYK[Ý]]ËX›ÝÛH]KVÜÝ]O[Ü[—NœÛYKZ[‹Yœ›ÛKX›ÝÛH‹Yˆš[œÙ]^KLYLY[ËLËÍ›Ü™\‹\ˆ]KVÜÝ]OXÛÜÙYNœÛYK[Ý]]Ë[Y]KVÜÝ]O[Ü[—NœÛYKZ[‹Yœ›ÛK[YÛN›X^]Ë\ÛH‹šYÚˆš[œÙ]^KLšYÚLY[ËLËÍ›Ü™\‹[]KVÜÝ]OXÛÜÙYNœÛYK[Ý]]Ë\šYÚ]KVÜÝ]O[Ü[—NœÛYKZ[‹Yœ›ÛK\šYÚÛN›X^]Ë\ÛHŸ_KY˜][˜\šX[ÎžÜÚYNˆœšYÚŸ_JKÞZJ
K™›ÜØ\™™YŠ
ÜÚYN™OHœšYÚ‹Û\ÜÓ˜[YN˜KÚ[™[Ž‹‹›ßKŠOOŠÊ
KšœÞÊJÞØÚ[™[Ž–ÊÊ
KšœÞ
JßJK
Ê
KšœÞÊJÞÜ™YŽ›‹Û\ÜÓ˜[YNœYÊÞ
ÜÚYN™_JKJK‹‹›ËÚ[™[Ž–ÊÊ
KšœÞÊJžØÛ\ÜÓ˜[YNˆ˜XœÛÛ]HšYÚMÜM›Ý[™Y\ÛHÜXÚ]KMÌš[™Ë[Ù™œÙ]X˜XÚÙÜ›Ý[™˜[œÚ][Û‹[ÜXÚ]HÝ™\Ž›ÜXÚ]KLL›ØÝ\Î›Ý][™K[›Û™H›ØÝ\Îœš[™ËLˆ›ØÝ\Îœš[™Ë\š[™È›ØÝ\Îœš[™Ë[Ù™œÙ]Lˆ\ØX›YœÚ[\‹Y]™[Ë[›Û™H]KVÜÝ]O[Ü[—N˜™Ë\ÙXÛÛ™\žH‹Ú[™[Ž–ÊÊ
KšœÞ
JÞØÛ\ÜÓ˜[YNˆšMËMŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÜ‹[Û›H‹Ú[™[ŽˆÛÜÙHŸJW_JK_JW_JJNÔÞ™\Ü^S˜[YOYÞ™\Ü^S˜[YNØÛÛœÝZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JÜ™YŽÛ\ÜÓ˜[YNœYÊ^[È›Û\Ù[ZX›Û^Y›Ü™YÜ›Ý[™‹JK‹‹˜_JJNÓ™\Ü^S˜[YOZ™\Ü^S˜[YNØÛÛœÝ^ZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JžÜ™YŽÛ\ÜÓ˜[YNœYÊ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹JK‹‹˜_JJNÐ^™\Ü^S˜[YOXž™\Ü^S˜[YNØÛÛœÝUY
™š[H‹ÖÈœ™XÝ‹ÝÚYˆŒN‹ZYÚˆŒN‹ˆŒÈ‹NˆŒÈ‹žˆŒˆ‹Ù^Nˆ˜Yš]ÈŸWKÈœ]‹Ùˆ“MÈÝŒN‹Ù^Nˆ˜˜šØÜÈŸWKÈœ]‹Ùˆ“LÈËZ‹Ù^Nˆž™™ÛŽŸWKÈœ]‹Ùˆ“LÈLšN‹Ù^NˆŒZL›ŒŒHŸWKÈœ]‹Ùˆ“LÈM‹Z‹Ù^NˆŒLŒÌ]HŸWKÈœ]‹Ùˆ“LMÈÝŒN‹Ù^Nˆš[˜MHŸWKÈœ]‹Ùˆ“LMÈËZ‹Ù^Nˆ›^\ŒXÌHŸWKÈœ]‹Ùˆ“LMÈM‹Z‹Ù^Nˆ™ÛÍÌYŸWWJKžUY
\Ù\œÈ‹ÖÈœ]‹Ùˆ“LMˆŒ]‹L˜MMM˜MMŒˆ‹Ù^NˆŒ^^Z]HŸWKÈœ]‹Ùˆ“LMˆËŒLŽMHËÍ‹Ù^NˆŒM™ÜŽˆŸWKÈœ]‹Ùˆ“LŒˆŒ]‹L˜MLËLËŽÈ‹Ù^NˆšÜÚYÙŸWKÈ˜Ú\˜ÛH‹ØÞˆŽH‹ÞNˆÈ‹Žˆ‹Ù^Nˆ›YšÎŸWWJK^UY
˜Ü›ÜÜÚZ\ˆ‹ÖÈ˜Ú\˜ÛH‹ØÞˆŒLˆ‹ÞNˆŒLˆ‹ŽˆŒL‹Ù^NˆŒ[YÛ^HŸWKÈ›[™H‹ÞNˆŒŒˆ‹ŽˆŒN‹LNˆŒLˆ‹LŽˆŒLˆ‹Ù^Nˆ›X˜ÜÚHŸWKÈ›[™H‹ÞNˆˆ‹ŽˆŒˆ‹LNˆŒLˆ‹LŽˆŒLˆ‹Ù^NˆŒLÚÞŸWKÈ›[™H‹ÞNˆŒLˆ‹ŽˆŒLˆ‹LNˆˆ‹LŽˆŒˆ‹Ù^NˆŒLÌÙŒÈŸWKÈ›[™H‹ÞNˆŒLˆ‹ŽˆŒLˆ‹LNˆŒŒˆ‹LŽˆŒN‹Ù^NˆŒMYÎZÜHŸWWJKUY
œ˜Y[È‹ÖÈœ]‹Ùˆ“LM‹ŒÈËÍŒXMˆˆHÎ‹Ù^NˆŒYÚœÍHŸWKÈœ]‹Ùˆ“LNKŒÍHŽLÌØLLLHMŒLÍ‹Ù^Nˆ™Z]ŒHŸWKÈœ]‹Ùˆ“MŽLHNKŒØLLLHLMŒLÍ‹Ù^NˆŒ\LŒ™ÚHŸWKÈœ]‹Ùˆ“MËÍLÈM‹ŒŒÎXMˆˆHNÎ‹Ù^NˆœŒœMÜ[HŸWKÈ˜Ú\˜ÛH‹ØÞˆŒLˆ‹ÞNˆŒLˆ‹ŽˆŒˆ‹Ù^NˆŒXÎ\ÎŸWWJKžUY
š[XYÙ\È‹ÖÈœ]‹Ùˆ“LNŒ’LˆˆKL‹L•ˆ‹Ù^Nˆœ›NYHŸWKÈœ]‹Ùˆ›LŒˆLËLKŒŽM‹LKŒŽM˜L‹H‹HLËLHN‹Ù^Nˆ›™˜›šŸWKÈ˜Ú\˜ÛH‹ØÞˆŒLˆ‹ÞNˆŽ‹ŽˆŒˆ‹Ù^NˆŒNŒ˜ŒHŸWKÈœ™XÝ‹ÝÚYˆŒMˆ‹ZYÚˆŒMˆ‹ˆˆ‹NˆŒˆ‹žˆŒˆ‹Ù^NˆŒL™\ÜŸWWJKžUY
™Ø[Y\YLˆ‹ÖÈ›[™H‹ÞNˆˆ‹ŽˆŒL‹LNˆŒLH‹LŽˆŒLH‹Ù^NˆŒYÚÝˆŸWKÈ›[™H‹ÞNˆŽ‹ŽˆŽ‹LNˆŽH‹LŽˆŒLÈ‹Ù^Nˆœ[šÎ[ÝÈŸWKÈ›[™H‹ÞNˆŒMH‹ŽˆŒMKŒH‹LNˆŒLˆ‹LŽˆŒLˆ‹Ù^NˆšÜ›ÝÛÈŸWKÈ›[™H‹ÞNˆŒN‹ŽˆŒNŒH‹LNˆŒL‹LŽˆŒL‹Ù^NˆŒ[Ý]LHŸWKÈœ]‹Ùˆ“LMËŒÌˆR‹ŽMLËŽMÎËNXËKŒ‹ŒL‹KŒKŒLKKŒMËŒMLÌ‹ŒKMˆˆMMˆˆM˜LÈÈÈØÌHKKKH‹L[KMLKMLˆˆHKŽŽMšŒÍLˆˆHKMN“MÈNËKHHHˆXLÈÈËLØÌLKMKKŒM‹NKŽKMËŒNKŒËKŒKKŒLKKŒKKŒMËKŒMLPMMËŒÌˆ^ˆ‹Ù^Nˆ›YœXÌLŸWWJK^Ù^\šY[˜ÙN‘^Ü™N˜ÞKÝÜžNž›ÙÜ™\ÜÎ›^KØ\˜YÙNœKÙX\ÛœÎ“^ÝZY\Î™K[š]™\œÙN•™]ÜÎž^KYYXN•žØ[YN”žKžYOOžÝ˜\ˆNÜ™]\›ˆÛÖÙKœÛXÙJJW_ÛÖÛ[OOJO[Ü‹™š[™
OO˜Kœ]OOYJJ_›ÚYOOXOÝ›ÚY˜K˜ÛÛXÝ[ÛœÖÌW_KÞYOOžÛ]OYNÙ›ÜŠÛ[OOJXJI‰›ÚYOO]	‰œ\™[Ê^Ý˜\ˆØOZÛÖØKœ\™[_\™]\›ˆ_KÞJÜÙXÝ[ÛŽ™K]˜[YN˜K™Yš^]™[›ÏLJOOžÜ™]\›ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YN˜]\Ë]™YK[]™[]™[IÛßXÚ[™[Ž–ÊÊ
KšœÞ
JÝÎ™Kœ]™]K]\ÝYŽ˜	ÝKIÛYKšY‹œ™\XÙP[
‹È‹‹HŠ_X˜\šXKXÝ\œ™[Ž˜OOOYKœ]ÈœYÙHŽ›ÚYÚ[™[Ž™K]_JKÛÊKšY
K›X\
OOŠÊ
KšœÞ
JÞÜÙXÝ[ÛŽ™K]˜[YN˜K™Yš^]™[›ÊÌ_KKšY
JW_JNÝ˜\ˆŸKÞJÜ™Yš^™_JOOžØÛÛœÝÜ]˜[YN˜_OYJ
KQÞ
ž
JJNÜ™]\›ŠÊ
KšœÞ
J›˜]ˆ‹ØÛ\ÜÓ˜[YNˆ˜]\Ë]™YH‹˜\šXK[X™[Žˆ]\ÈØ]YÛÜšY\È‹Ú[™[Ž“Ë›X\
ÏOžØÛÛœÝTÛËšY_ÚTÛÊËšY
NÜ™]\›ˆ‹›[™ÝÊÊ
KšœÞÊJ™]Z[È‹ÛÜ[ŽŠ[OO]›ÚYOO]Ý›ÚYšY
OOO[ËšY™]K]\ÝYŽ˜	Ù_KYÜ›Ý\IÛËšYXÚ[™[Ž–ÊÊ
KšœÞÊJœÝ[[X\žH‹È™]K]\ÝYŽ˜	Ù_KY^[™IÛËšYXÛ\ÜÓ˜[YNŠ[OO]›ÚYOO]Ý›ÚYšY
OOO[ËšYÈ˜XÝ]™HŽˆˆ‹Ú[™[Ž–ÊÊ
KšœÞ
J‹ÜÚ^™NŒMŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž›Ë]_JK
Ê
KšœÞ
JZÜÚ^™NŒLßJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜]\Ë]™YKXÚ[™[ˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJÝÎ›Ëœ]™]K]\ÝYŽ˜	Ù_KIÛËšYX˜\šXKXÝ\œ™[Ž˜OOO[Ëœ]ÈœYÙHŽ›ÚYÚ[™[Ž–È“Ý™\šY]È‹
Ê
KšœÞ
JKÜÚ^™NŒLŸJW_JK‹›X\
OŠÊ
KšœÞ
JÞÜÙXÝ[ÛŽ]˜[YN˜K™Yš^™_KšY
JW_JW_K	ÛËšYKIØ_X
NŠÊ
KšœÞÊJØÛ\ÜÓ˜[YNˆ˜]\Ë]™YK\Ú[™ÛH‹Î›Ëœ]™]K]\ÝYŽ˜	Ù_KIÛËšYX˜\šXKXÝ\œ™[Ž˜OOO[Ëœ]ÈœYÙHŽ›ÚYÚ[™[Ž–ÊÊ
KšœÞ
J‹ÜÚ^™NŒMŸJKË]K
Ê
KšœÞ
JKÜÚ^™NŒLßJW_KËšY
_J_J_K^J
OOžØÛÛœÝÜ]˜[YN™_OYJ
KOQž
JNÜ™]\›ŠÊ
KšœÞ
JØXÝ]™N˜_KJ_KJØXÝ]™N™_JOOžØÛÛœÝØKOJJ
K\ÙTÝ]JJLJNÜ™]\›ŠÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ›[Øš[KX]\Ë[˜]šYØ][ÛˆÚ]K[[Øš[K[˜]šYØ][Ûˆ‹™]K]\ÝYŽˆ›[Øš[KX]\Ë[˜]šYØ][Ûˆ‹Ú[™[ŽŠÊ
KšœÞÊJžÛÜ[Ž˜KÛ“Ü[Ú[™ÙNÚ[™[Ž–ÊÊ
KšœÞ
JÞØ\ÐÚ[ˆLÚ[™[ŽŠÊ
KšœÞÊJ˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆœÚ]K[[Øš[K]šYÙÙ\ˆ‹™]K]\ÝYŽˆ›[Øš[KX]\Ë]ÙÙÛH‹Ú[™[Ž–ÊÊ
KšœÞ
JÚÜÚ^™NŒMßJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[ŽŠ[OOY_›ÚYOOYOÝ›ÚY™K]J_‘^Ü™HH]\ÈŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›[Øš[KXœ›ÝÜÙK[X™[‹Ú[™[Žˆœ›ÝÜÙHŸJK
Ê
KšœÞ
JZÜÚ^™NŒM_JW_J_JK
Ê
KšœÞÊJÞÜÚYNˆœšYÚ‹Û\ÜÓ˜[YNˆœÚ]K]ZK\Ý\™˜XÙHÚ]K[˜]šYØ][Û‹\ÚY]‹™]K[[š\Ë\™]™[ŽˆLÚ[™[Ž–ÊÊ
KšœÞ
JØÚ[™[Žˆ‘š[™[Ý\ˆ™^ÝÜŸJK
Ê
KšœÞ
J^ØÚ[™[Žˆ”XÚÈHØ]YÛÜžHÜˆ[\ÈH[[™^ˆŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÚ]K[˜]šYØ][Û‹\ØÜ›Û‹™]K[[š\Ë\™]™[ŽˆLÛÛXÚÎ™OOžÙK\™Ù]˜ÛÜÙ\Ý
˜HŠI‰
LJ_KÚ[™[Ž–ÊÊ
KšœÞÊJØÛ\ÜÓ˜[YNˆ›[Øš[KX[\YÙ\È‹Îˆ‹Ù\™XÝÜžH‹™]K]\ÝYŽˆ›[Øš[KX[\YÙ\È‹Ú[™[Ž–È‘[[™^‹
Ê
KšœÞ
JKÜÚ^™NŒMŸJW_JK
Ê
KšœÞ
JÞÜ™Yš^ˆ›[Øš[K[˜]ˆŸJW_JW_JW_J_J_KžYOO™Kœ™\XÙP[
‹È‹‹HŠKÞJÜÙXÝ[ÛŽ™K][N˜_JOOžØÛÛœÝV×NÛ]ÏYNÙ›ÜŠÛÎÊ][œÚY
ÊKÏZÛÖÛËœ\™[NÜ™]\›ŠÊ
KšœÞÊJ›˜]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[Xœ™XYÜ[XœÈ‹˜\šXK[X™[Žˆœ™XYÜ[Xˆ‹™]K]\ÝYŽˆ˜œ™XYÜ[XœÈ‹Ú[™[Ž–ÊÊ
KšœÞ
JÝÎˆ‹È‹™]K]\ÝYŽˆ˜œ™XYÜ[X‹ZÛYH‹Ú[™[Žˆ•šXÙH]\ÈŸJK›X\
OŠÊ
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JZÜÚ^™NŒL_JK
Ê
KšœÞ
JÝÎœ]™]K]\ÝYŽ˜œ™XYÜ[X‹IÓž
šY
_X˜\šXKXÝ\œ™[Ž˜_šYOOJ[OOY_›ÚYOOYOÝ›ÚY™KšY
OÝ›ÚYˆœYÙH‹Ú[™[Ž]_JW_KšY
JKI‰ŠÊ
KšœÞÊJœÜ[ˆ‹È™]K]\ÝYŽˆ˜œ™XYÜ[X‹XÝ\œ™[‹Ú[™[Ž–ÊÊ
KšœÞ
JZÜÚ^™NŒL_JKK]W_JW_J_KžJ
OOŠÊ
KšœÞÊJ˜\ÚYH‹ØÛ\ÜÓ˜[YNˆœÜ[\ÚYX˜\ˆ‹™]K]\ÝYŽˆœÜ[\ÚYX˜\ˆ‹™]K[[š\Ë\™]™[ŽˆLÚ[™[Ž–ÊÊ
KšœÞÊJØÛ\ÜÓ˜[YNˆœÚYX˜\‹ZÛYH‹Îˆ‹Ù\™XÝÜžH‹™]K]\ÝYŽˆœÚYX˜\‹Y\™XÝÜžH‹Ú[™[Ž–ÊÊ
KšœÞ
JÚÜÚ^™NŒMßJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ‘•SS‘VŸJK
Ê
KšœÞ
JKÜÚ^™NŒM_JW_JK
Ê
KšœÞ
JÞÜ™Yš^ˆœÚYX˜\ˆŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÚYX˜\‹[›ÝH‹Ú[™[Ž–ÊÊ
KšœÞ
J	ÜÚ^™NŒMŸJK
Ê
KšœÞÊJœ‹È™]K]\ÝYŽˆœÚYX˜\‹\ÝÜ˜YÙH‹Ú[™[Ž–È–[Ý\ˆØ]™Y[šY\È	ˆÚXÚÛ\Ý‹
Ê
KšœÞ
J˜œˆ‹ßJK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[Žˆ’Ù\Ûˆ\È]šXÙKˆŸJW_JW_JW_JK^JØÚ[™[Ž™_JOOŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[[^[Ý]‹Ú[™[Ž–ÊÊ
KšœÞ
JžßJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[[XZ[ˆ‹Ú[™[Ž–ÊÊ
KšœÞ
J^ßJKW_JW_JKžJÜÙXÝ[ÛŽ™K^YXœ›ÝÎ˜KÚ[™[ŽÛÛ\XÝ›ÏHL_JOOžÝ˜\ˆŽØÛÛœÝ\œŠKšY
K›[™ÝTÛÊKšY
K›[™ÝOQÞ
JKÏVÈ›X\‹˜ÛÛ\\™H‹ÙX\ÛœËØÛÛ\\™H‹œ›ÙÜ™\ÜÈ‹œ›ÙÜ™\ÜËØÚXÚÛ\Ý‹œØ]™Y—Kš[˜ÛY\ÊKšY
NÜ™]\›ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YN˜Ü[Z\›È	ÛÏÈ˜Ø][ÙÝYKZ\›ÈŽˆˆŸH	ØÏÈÛÛZ\›ÈŽˆˆŸH	ÈÙX\ÛœÈOOYKšYKšYœÝ\ÕÚ]
ÙX\ÛœËÈŠOÈ›Øš™XÝZ\›ÈŽˆˆŸX™]K]\ÝYŽˆœYÙKZ\›È‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜Î™Kš[XYÙK[ˆˆ‹Û\ÜÓ˜[YNˆœÜ[Z\›ËZ[XYÙHŸJK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[Z\›Ë\ØÜš[HŸJK
Ê
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆœÜ[Z\›ËXÛÜH‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[ZÚXÚÙ\ˆ‹™]K]\ÝYŽˆœYÙKZÚXÚÙ\ˆ‹Ú[™[Ž˜_’PÑHUTÈÈ	Ê[OOZ_›ÚYOOZ_[OOJZK]J_›ÚYOO[Ý›ÚY›‹Õ\\Ø\ÙJ
J_“SÓ’QHŸXJK
Ê
KšœÞ
JšH‹È™]K]\ÝYŽˆœYÙK]]H‹Ú[™[ŽŠÊ
KšœÞ
J^KÝ˜[YN™K]K›ØÚÎˆLJ_JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽˆœYÙKY\ØÜš\[Ûˆ‹Ú[™[Ž™K™\ØÜš\[ÛŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[Z\›Ë[Y]H‹™]K]\ÝYŽˆœYÙK[Y]H‹Ú[™[Ž–ÜŒ	‰ŠÊ
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
J^KÝ˜[YN”Ýš[™ÊŠKœYÝ\
‹ŒŠK˜\šX[ˆ›[X™\ˆŸJKˆ[šY\È—_JKŒ	‰ŠÊ
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
J^KÝ˜[YN”Ýš[™Ê
KœYÝ\
‹ŒŠK˜\šX[ˆ›[X™\ˆŸJKˆ\Ý[˜][ÛœÈ—_JK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ“SÓ’QHÈ’QSÕRQHŸJW_JK_JK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[Z\›ËZ[™^‹˜\šXKZY[ˆŽˆYH‹Ú[™[Ž–È•’PÑH‹
Ê
KšœÞ
J˜œˆ‹ßJKUTÈ‹
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ•’HŸJW_JW_J_K^JÜÙXÝ[ÛŽ™_JOOžØÛÛœÝOTÛÊKšY
NÜ™]\›ˆK›[™ÝÊÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙÝYKY\Ý[˜][ÛœÈ‹™]K]\ÝYŽˆœÝXœÙXÝ[ÛœÈ‹Ú[™[ŽŠÊ
KšœÞÊJËØÚ[™[Ž–ÊÊ
KšœÞ
JËØ\ÐÚ[ˆLÚ[™[ŽŠÊ
KšœÞÊJ˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆœÚ]KY\Ý[˜][ÛœË]šYÙÙ\ˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–È‘^Ü™H‹K]W_JK
Ê
KšœÞÊJœÛX[‹ØÚ[™[Ž–ØK›[™ÝˆYÙ\È—_JK
Ê
KšœÞ
JZÜÚ^™NŒMŸJW_J_JK
Ê
KšœÞ
JPËØÛ\ÜÓ˜[YNˆœÚ]K]ZK\Ý\™˜XÙHÚ]KY\Ý[˜][ÛœË[Y[H‹[YÛŽˆœÝ\‹ÛÛ\Ú[Û”Y[™ÎŒL‹™]K[[š\Ë\™]™[ŽˆL˜\šXK[X™[Ž™K]JÈˆYÙ\È‹Ú[™[Ž˜K›X\
OOŠÊ
KšœÞ
JËØ\ÐÚ[ˆLÚ[™[ŽŠÊ
KšœÞÊJÝÎ™Kœ]™]K]\ÝYŽ˜ÝXœÙXÝ[Û‹IÓž
KšY
_XÚ[™[Ž–ÙK]K
Ê
KšœÞ
JKÜÚ^™NŒMJW_J_KKšY
J_JW_J_JN›[K^JÜ™Yš^™OH™›ÛÝ\‹Z[™^ŸJOOŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜]\ËY›ÛÝ\‹Z[™^‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜]\ËY›ÛÝ\‹Z[™^ZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞ
Jšˆ‹È™]K]\ÝYŽ˜	Ù_KZXY[™ØÚ[™[Žˆ–[Ý\ˆ™^ÝÜŸJK
Ê
KšœÞÊJÝÎˆ‹Ù\™XÝÜžH‹™]K]\ÝYŽ˜	Ù_KX[Ú[™[Ž–È‘[[™^‹
Ê
KšœÞ
JKÜÚ^™NŒMßJW_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜]\ËY›ÛÝ\‹XÛÛ[[œÈ‹Ú[™[Ž“Ë™š[\ŠOOˆ™^\šY[˜ÙHˆOOYKšY
K›X\
OOŠÊ
KšœÞÊJ›˜]ˆ‹È˜\šXK[X™[Ž˜›ÛÝ\ˆ	ØK]_XÚ[™[Ž–ÊÊ
KšœÞ
JÝÎ˜Kœ]Û\ÜÓ˜[YNˆ™›ÛÝ\‹X\™XK]]H‹™]K]\ÝYŽ˜	Ù_KIØKšYXÚ[™[Ž˜K]_JKÛÊKšY
KœÛXÙJ
K›X\
OOŠÊ
KšœÞ
JÝÎ˜Kœ]™]K]\ÝYŽ˜	Ù_KIÓž
KšY
_XÚ[™[Ž˜K]_KKšY
JW_KKšY
J_JW_JKžJ
OOŠÊ
KšœÞÊJ™›ÛÝ\ˆ‹È™]K]\ÝYŽˆœÜ[Y›ÛÝ\ˆ‹Ú[™[Ž–ÊÊ
KšœÞ
J^ßJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[Y›ÛÝ\ˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JÝÎˆ‹È‹™]K]\ÝYŽˆœÜ[Y›ÛÝ\‹ZÛYH‹Ú[™[Žˆ•’PÑHUTÈŸJK
Ê
KšœÞÊJœ‹È™]K]\ÝYŽˆœÜ[Y›ÛÝ\‹Y\ØÛZ[Y\ˆ‹Ú[™[Ž–È’[™\[™[ÕH’HšY[ÝZYKˆ‹
Ê
KšœÞ
J˜œˆ‹ßJK“›ÝY™š[X]YÚ]›ØÚÜÝ\ˆØ[Y\ÈÜˆZÙKUÛÈ[\˜XÝ]™Kˆ—_JK
Ê
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JÝÎˆ‹Ù^\šY[˜ÙH‹™]K]\ÝYŽˆœÜ[Y›ÛÝ\‹Y^\šY[˜ÙH‹Ú[™[Žˆ•H^\šY[˜ÙHŸJK
Ê
KšœÞ
JÝÎˆ‹ØX›Ý]‹™]K]\ÝYŽˆœÜ[Y›ÛÝ\‹XX›Ý]‹Ú[™[ŽˆX›Ý]	ˆÜ™Y]ÈŸJK
Ê
KšœÞÊJÝÎˆ‹Ù\™XÝÜžH‹™]K]\ÝYŽˆœÜ[Y›ÛÝ\‹Y\™XÝÜžH‹Ú[™[Ž–È‘[[™^‹
Ê
KšœÞ
JšÜÚ^™NŒLßJW_JW_JW_JW_JK^JÛÜ[Ž™_JOOžØÛÛœÝØKOJJ
K\ÙTÝ]JJ[œ˜[Y\ÈŠKÏH[œ˜[Y\ÈOOXO×ÛÎ—ÛË™š[\ŠOO™K˜Ø]YÛÜžOOOXJNÜ™]\›ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ÚYˆ™Ø[\žH‹Û\ÜÓ˜[YNˆœÙXÝ[ÛˆØ[\žK\ÙXÝ[Ûˆ‹™]K]\ÝYŽˆ™Ø[\žK\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
J™ËÛ[X™\ŽˆŒ‹^YXœ›ÝÎˆ”“ÐÒÔÕTˆÐSQTÈ‹]NŠÊ
KšœÞÊJÊ
K‘œ˜YÛY[ØÚ[™[Ž–È“Ñ‘’PÒPS‹
Ê
KšœÞ
J˜œˆ‹ßJK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÛÙ\[šÈ‹Ú[™[Žˆ”ÐÔ‘QS”ÒÕËˆŸJW_JK\ØÜš\[ÛŽˆ”\˜Y\ÙKØ]YÚ[ˆHXÝˆÜ[ˆHÚÝ›ÜˆH[[XYÙH[™ÛÝ\˜ÙKˆ‹Yˆ™Ø[\žHŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™š[\‹\›ÝÈ‹Ú[™[Ž–ÊÊ
KšœÞ
JYËÛÜ[ÛœÎ–È[œ˜[Y\È‹•HÚ]H‹•H[ÜH‹•HÚ[È—K˜[YN˜KÙ]˜[YN™Yš^ˆ™Ø[\žHŸJK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ™\Ý[[X™[‹™]K]\ÝYŽˆ™Ø[\žK\™\Ý[XÛÝ[‹Ú[™[Ž–ÔÝš[™ÊË›[™Ý
KœYÝ\
‹ŒŠKˆ”SQTÈÈ“ÐÒÔÕTˆÐSQTÈ—_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ™Ø[\žKYÜšY‹Ú[™[Ž›Ë›X\

K
OOŠÊ
KšœÞ
J	ËØÛ\ÜÓ˜[YNˆ™Ø[\žKXØ\™‹[^N‹ŒŠÚ[™[ŽŠÊ
KšœÞÊJ˜]Ûˆ‹È™]K]\ÝYŽ˜Ø[\žK[Ü[‹IØKšYX˜\šXK[X™[Ž˜šY]È	ØK]_XÛÛXÚÎŠ
OO™JÝ\Nˆš[XYÙH‹][N˜_JKÚ[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜Î˜Kš[XYÙK[˜K]KØY[™Îˆ›^žHŸJK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™Ø[\žK[Ý™\›^H‹Ú[™[Ž–ÊÊ
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞÊJœÛX[‹È™]K]\ÝYŽ˜Ø[\žK[[X™\‹IØKšYXÚ[™[Ž–È‘”SQH‹Ýš[™ÊÛËš[™^ÙŠJJÌJKœYÝ\
‹ŒŠW_JK
Ê
KšœÞ
JœÝ›Û™È‹È™]K]\ÝYŽ˜Ø[\žK]]KIØKšYXÚ[™[Ž˜K]_JW_JK
Ê
KšœÞ
JÚÜÚ^™NŒŒJW_JW_J_KKšY
J_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÙXÝ[Û‹Y›ÛÝ›ÝH‹™]K]\ÝYŽˆ™Ø[\žKXÜ™Y]‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ‘ÕH’HÐÔ‘QS”ÒÕÈŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ[[XYÙ\ÈNH›ØÚÜÝ\ˆØ[Y\ÈŸJW_JW_J_K	JÛÜ[Ž™_JOOŠÊ
KšœÞÊJ™›ÛÝ\ˆ‹È™]K]\ÝYŽˆœÚ]KY›ÛÝ\ˆ‹Ú[™[Ž–ÊÊ
KšœÞ
J^Ü™Yš^ˆšÛYKY›ÛÝ\‹Z[™^ŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛÝ\‹XØ[Ý]‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛÝ\‹XØ[Ý]]Ü‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™^YXœ›ÝÈ‹™]K]\ÝYŽˆ™›ÛÝ\‹]YÛ[™H‹Ú[™[Žˆ’S‘TS‘S•ÕH’HÓÓTS’SÓˆŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛÝ\‹XÛÛÜ™[˜]H‹™]K]\ÝYŽˆ™›ÛÝ\‹[›ÝH‹Ú[™[Žˆ““ÕQ‘’SPUQÒU“ÐÒÔÕTˆÐSQTÈŸJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛÝ\‹ZXY[™K\›ÝÈ‹Ú[™[Ž–ÊÊ
KšœÞ
J	ËØÚ[™[ŽŠÊ
KšœÞÊJšˆ‹ØÛ\ÜÓ˜[YNˆ™\Ü^H‹™]K]\ÝYŽˆ™›ÛÝ\‹ZXY[™È‹Ú[™[Ž–È•’PÑH‹
Ê
KšœÞ
J˜œˆ‹ßJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[ŽˆUTËˆŸJW_J_JK
Ê
KšœÞÊJ˜H‹Ú™YŽˆˆÚÛYH‹Û\ÜÓ˜[YNˆ˜˜XÚË]Ë]Ü‹˜\šXK[X™[Žˆ˜XÚÈÈÜ‹™]K]\ÝYŽˆ˜˜XÚË]Ë]Ü‹Ú[™[Ž–ÊÊ
KšœÞ
JKÜÝ›ÚÙUÚYŒ_JK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[ŽˆPÒÈÈÔŸJW_JW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛÝ\‹XØ[Ý]X›ÝÛH‹Ú[™[Ž–ÊÊ
KšœÞ
Jœ‹È™]K]\ÝYŽˆ™›ÛÝ\‹Y\ØÜš\[Ûˆ‹Ú[™[Žˆ•H[ÜKH›ØYÈ[™HÛÜ›ÙˆÕH’KˆŸJK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛÝ\‹\Ý[\‹˜\šXKZY[ˆŽˆYH‹Ú[™[Ž–È•’H‹
Ê
KšœÞ
J˜œˆ‹ßJK
Ê
KšœÞ
JœÛX[‹ØÚ[™[ŽˆUTÈŸJW_JW_JW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛÝ\‹X˜\ˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JYËÙ›ÛÝ\ŽˆLJK
Ê
KšœÞÊJœ‹È™]K]\ÝYŽˆ™›ÛÝ\‹Y\ØÛZ[Y\ˆ‹Ú[™[Ž–È[ˆ[™\[™[šY[ÝZYHÈÜ˜[™Y]]È’Kˆ‹
Ê
KšœÞ
J˜œˆ‹ßJK“›ÝY™š[X]YÚ]›ØÚÜÝ\ˆØ[Y\ÈÜˆZÙKUÛÈ[\˜XÝ]™Kˆ—_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛÝ\‹[[šÜÈ‹Ú[™[Ž–ÊÊ
KšœÞ
J˜]Ûˆ‹È™]K]\ÝYŽˆ˜X›Ý]\›Ú™XÝ‹ÛÛXÚÎŠ
OO™JÝ\Nˆ˜X›Ý]ŸJKÚ[™[Žˆ™Z[™H]\ÈŸJK
Ê
KšœÞÊJ˜H‹Ú™YŽˆšÎ‹ËÝÝÝËœ›ØÚÜÝ\™Ø[Y\Ë˜ÛÛKÕ’H‹\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹™]K]\ÝYŽˆ›Ù™šXÚX[\Ú]K[[šÈ‹Ú[™[Ž–È“Ù™šXÚX[ÕH’H‹
Ê
KšœÞ
JKÜÚ^™NŒLßJW_JW_JK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™›ÛÝ\‹XÛÜ\šYÚ‹™]K]\ÝYŽˆ™›ÛÝ\‹XÛÜ\šYÚ‹Ú[™[Žˆ•’PÑHUTÈNHŒˆŸJW_JW_JKUY
˜Ø[Y\˜H‹ÖÈœ]‹Ùˆ“LMHMSÈÒLˆˆLˆŽXLˆˆˆšM˜Lˆˆ‹L•ŽXLˆˆL‹LšLÛL‹KLÞˆ‹Ù^NˆŒ]Î\YÈŸWKÈ˜Ú\˜ÛH‹ØÞˆŒLˆ‹ÞNˆŒLÈ‹ŽˆŒÈ‹Ù^NˆŒ]™ÌÙ]HŸWWJKžUY
š[XYÙH‹ÖÈœ™XÝ‹ÝÚYˆŒN‹ZYÚˆŒN‹ˆŒÈ‹NˆŒÈ‹žˆŒˆ‹žNˆŒˆ‹Ù^NˆŒ[LØYÛˆŸWKÈ˜Ú\˜ÛH‹ØÞˆŽH‹ÞNˆŽH‹ŽˆŒˆ‹Ù^Nˆ˜YŒYŒÈŸWKÈœ]‹Ùˆ›LŒHMKLËŒ‹LËŒ˜LˆˆL‹ŽŽˆŒH‹Ù^NˆŒ^[ÈŸWWJK^JÜØ]™Y™_JOOžØÛÛœÝOSX]œ›Ý[™
K›[™ÝÛÜ‹›[™Ý
ŒL
KVÖÈ”™YÚ[ÛœÈ‹”™YÚ[Ûˆ—KÈÚ\˜XÝ\œÈ‹Ú\˜XÝ\ˆ—KÈ”ØÜ™Y[œÚÝÈ‹’[XYÙH—WNÜ™]\›ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆšX‹\›ÙÜ™\ÜË\™]šY]È‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆšX‹\›ÙÜ™\ÜË]Ü‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆšX‹\š[™È‹Ý[NžÈ‹K\›ÙÜ™\ÜÈŽ˜	Ø_IXKÚ[™[Ž–ÊÊ
KšœÞ
JœÝ›Û™È‹È™]K]\ÝYŽˆšÛYK\Ø]™Y\\˜Ù[YÙH‹Ú[™[ŽŠÊ
KšœÞ
J^KÝ˜[YN˜	Ø_IX˜\šX[ˆ›[X™\ˆŸJ_JK
Ê
KšœÞ
JœÛX[‹ØÚ[™[ŽˆœØ]™YŸJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆšX‹\›ÙÜ™\ÜËZÙ^H‹Ú[™[Ž–ÊÊ
KšœÞ
JœÝ›Û™È‹ØÚ[™[Žˆ”Ø]™Y[šY\ÈŸJK›X\

ØKJOOŠÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž˜_JK
Ê
KšœÞÊJœÜ[ˆ‹È™]K]\ÝYŽ˜ÛYK\Ø]™YIÝÓÝÙ\Ø\ÙJ
_XÚ[™[Ž–ÛÜ‹™š[\ŠOO˜KšÚ[™OO]	‰™Kš[˜ÛY\ÊKšY
JK›[™ÝˆØ]™Y—_JW_K
JW_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆšX‹\›ÙÜ™\ÜË[[™\È‹Ú[™[Ž›X\

ØKJOOžØÛÛœÝÏ[Ü‹™š[\ŠOO™KšÚ[™OO]
K[Ë™š[\ŠOO™Kš[˜ÛY\ÊKšY
JK›[™ÝÜ™]\›ŠÊ
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JKÜÚ^™NŒLŸJKK
Ê
KšœÞ
JšH‹ÜÝ[NžÝÚY›‹ÛË›[™Ý
Ì
ÈœŸ_JW_K
_J_JW_J_KZÏJÛÜ[Ž™KØ]™Y˜_JOOŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆÝÛ‹ZXˆ‹Yˆš[\Z[ˆ‹™]K]\ÝYŽˆš[\Z[‹\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆÝÛ‹X˜[›™\ˆ‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊšX‹[X\ŠK[ˆ“[ÛšYHÛØ\Ý[X\]Z[ŸJK
Ê
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞÊJšˆ‹È™]K]\ÝYŽˆ˜˜[›™\‹ZXY[™È‹Ú[™[Ž–È“SÓ’QH‹
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ“ÓˆHPTŸJW_JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽˆ˜˜[›™\‹Y\ØÜš\[Ûˆ‹Ú[™[Žˆ”Ú^™YÚ[ÛœËœ›ÛHHÛØ\ÝÈH˜XÚØÛÝ[žKˆ[\Ý˜]YÝ™\šY]Ë›Ý[ˆ[‹YØ[YHX\ˆŸJW_JK
Ê
KšœÞÊJ˜]Ûˆ‹È™]K]\ÝYŽˆ˜˜[›™\‹Y^Ü™K[X\‹ÛÛXÚÎŠ
OO™JÝ\Nˆ›X\ŸJKÚ[™[Ž–ÊÊ
KšœÞ
JÞKÜÚ^™NŒMŸJKˆÜ[ˆX\—_JW_JK
Ê
KšœÞ
Jšˆ‹ØÛ\ÜÓ˜[YNˆÝÛ‹\ÙXÝ[Û‹]]H‹™]K]\ÝYŽˆš[\Z[‹ZXY[™È‹Ú[™[Žˆ”\˜Y\ÙHÛÛY\È]HšXÙKˆŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆÝÛ‹ZX‹YÜšY‹Ú[™[Ž–ÊÊ
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆšX‹][HX‹[X\][H‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊšX‹[X\ŠK[ˆÛÛÜˆX\ÙˆHšXÙHÚ]HÛØ\Ý[™HŸJK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™XÛXÚË]\™Ù]‹™]K]\ÝYŽˆšX‹[X\[Ü[ˆ‹ÛÛXÚÎŠ
OO™JÝ\Nˆ›X\ŸJK˜\šXK[X™[Žˆ‘^Ü™HH[ÛšYH™YÚ[ÛˆX\ŸJK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆšX‹[X\XÚ\‹™]K]\ÝYŽˆšÛYK\™YÚ[Û‹XÛÝ[‹Ú[™[Ž–ÊÊ
KšœÞ
JÞKÜÚ^™NŒLßJK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[ŽŠÊ
KšœÞ
J^KÝ˜[YN™›Ë›[™Ý˜\šX[ˆ›[X™\ˆŸJ_JKˆ™YÚ[ÛœÈ—_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆšX‹[X\[X\šÙ\œÈ‹˜\šXKZY[ˆŽˆYH‹Ú[™[Ž–ÖÍ‹ÌËWKÍL‹‹KÍ‹NKžKÍKÌÚKÌÍ‹KÞWKÍLËÍË	WK›X\

ÙKKKÊOOŠÊ
KšœÞ
JœÜ[ˆ‹ÜÝ[NžÛY˜	Ù_IXÜ˜	Ø_IXKÚ[™[ŽŠÊ
KšœÞ
JÜÚ^™NŒMßJ_KÊJ_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆšX‹][KXØ\[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JšÈ‹ØÚ[™[Žˆ“X\ŸJK
Ê
KšœÞ
Jœ‹ØÚ[™[Žˆ‘Ù][Ý\ˆ™X\š[™ÜÈŸJW_JW_JK
Ê
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆšX‹][HX‹\›ÙÜ™\ÜÈ‹[^N‹Œ‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊšXÙWØÚ]WÌLHŠK[ˆˆŸJK
Ê
KšœÞ
J^ÜØ]™Y˜_JK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™XÛXÚË]\™Ù]‹™]K]\ÝYŽˆšX‹\Ø]™Y[Ü[ˆ‹ÛÛXÚÎŠ
OO™JÝ\NˆœØ]™YŸJK˜\šXK[X™[Žˆ“Ü[ˆ[Ý\ˆØ]™Y]\ÈŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆšX‹][KXØ\[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JšÈ‹ØÚ[™[Žˆ”Ø]™Y]\ÈŸJK
Ê
KšœÞÊJœ‹È™]K]\ÝYŽˆšÛYK\Ø]™Y\Ý[[X\žH‹Ú[™[Ž–ØK›[™ÝˆÈ‹Ü‹›[™Ýˆ[šY\È›ÛÚÛX\šÙY—_JW_JW_JK
Ê
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆšX‹][HX‹YšY[[›Ý\È‹[^N‹ŒL‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊšXÙWØÚ]WÌˆŠK[ˆˆŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆšX‹YšY[\™]šY]È‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ•H”’QQ’S‘ÈŸJKÖÈŒH‹”Ù][™È[™Ú\˜XÝ\œÈ—KÈŒˆ‹”ÛÝ\˜Ù\È[™™\šYšXØ][Ûˆ—KÈŒÈ‹”]›Ü›\È—WK›X\

ÙKWJOOŠÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞÊJœÛX[‹ØÚ[™[Ž–ÙKˆÈÕRQH—_JK
Ê
KšœÞ
Jœ‹ØÚ[™[Ž˜_JW_KJJW_JK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™XÛXÚË]\™Ù]‹™]K]\ÝYŽˆšX‹YÝZY\Ë[Ü[ˆ‹ÛÛXÚÎŠ
OO™JÝ\Nˆ™ÝZY\ÈŸJK˜\šXK[X™[Žˆœ›ÝÜÙHÕH’HÝZY\ÈŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆšX‹][KXØ\[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JšÈ‹ØÚ[™[Žˆ‘ÝZY\ÈŸJK
Ê
KšœÞ
Jœ‹ØÚ[™[Žˆ‘Ù]\ÈÜYYŸJW_JW_JKÖÈœØÜ™Y[š[™È‹•˜Z[\ˆˆ‹“Ù™šXÚX[›ØÚÜÝ\ˆ˜Z[\ˆ‹š˜\ÛÛ—Ø[™ÛXÚXWÌH‹˜Z[\ˆ‹ÚKÈ™Ø\˜YÙH‹‘Ø\˜YÙH‹”šY\È	ˆX]Ú\È‹™Ø\˜YÙK\™]šY]È‹™Ø\˜YÙH‹[KÈ˜Ú\˜XÝ\œÈ‹Ú\˜XÝ\œÈ‹“YY]HØ\Ý‹š˜\ÛÛ—Ø[™ÛXÚXWÌˆ‹˜Ú\˜XÝ\œÈ‹žKÈ™Ø[\žH‹”ØÜ™Y[œÚÝÈ‹“Ù™šXÚX[ÕH’H[XYÙ\È‹šXÙWØÚ]WÌ‹™Ø[\žH‹žKÈœ™YÚ[ÛœÈ‹”™YÚ[ÛœÈ‹™^[Û™HÚ]H[Z]È‹›[ÛšYWÚÙ^\×ÌH‹ÛÜ›‹ÚKÈœÝÜšY\È‹‘™X]\™\È‹•ÛÜ™Ù]È\›Ý[™‹›™]ÜË\™]šY]È‹œÝÜšY\È‹WWK›X\

ØKË‹‹KJOOŠÊ
KšœÞÊJ	ËØÛ\ÜÓ˜[YN˜X‹][HX‹\ÛX[X‹IØ_X[^N‹ŒÍJšKÚ[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊŠK[JK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\™XÛXÚË]\™Ù]‹™]K]\ÝYŽ˜X‹IØ_K[Ü[˜˜\šXK[X™[Ž˜Ü[ˆ	ÝXÛÛXÚÎŠ
OO™JÝ\NœŸJ_JK	‰ŠÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆšX‹Y›Ø][™ËZXÛÛˆ‹Ú[™[ŽŠÊ
KšœÞ
JÜÚ^™NŒŽÝ›ÚÙUÚYŒKŒßJ_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆšX‹][KXØ\[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JšÈ‹ØÚ[™[ŽJK
Ê
KšœÞ
Jœ‹ØÚ[™[Ž›ßJW_JK
Ê
KšœÞ
JZØÛ\ÜÓ˜[YNˆšX‹][KX\œ›ÝÈ‹Ú^™NŒŒJW_KJJW_JW_JKZÏJÛÜ[Ž™_JOOŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆÝÛ‹Yœ™\Ú‹™]K]\ÝYŽˆ™œ™\Ú\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
Jšˆ‹ØÛ\ÜÓ˜[YNˆÝÛ‹\ÙXÝ[Û‹]]H‹™]K]\ÝYŽˆ™œ™\ÚZXY[™È‹Ú[™[Žˆ“™^ÝÜÈŸJK
Ê
KšœÞ
J™]ˆ‹ØÚ[™[Ž–ÖÈ”™YÚ[ÛœÈ‹ÛÜ›‹ÚKÈÚ\˜XÝ\ˆ›Ùš[\È‹˜Ú\˜XÝ\œÈ‹žKÈ”ØÜ™Y[œÚÝÈ‹™Ø[\žH‹žKÈ”Ø]™Y[šY\È‹œØ]™Y‹	WK›X\

ØK×JOOŠÊ
KšœÞÊJ˜]Ûˆ‹È™]K]\ÝYŽ˜œ™\ÚIÝXÛÛXÚÎŠ
OO™JÝ\NJKÚ[™[Ž–ÊÊ
KšœÞ
JËÜÚ^™NŒN_JK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[Ž˜_JK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ“Ü[ˆŸJK
Ê
KšœÞ
JšÜÚ^™NŒMŸJW_K
J_JW_JKÏJ
OOŠÊ
KšœÞÊJØÛ\ÜÓ˜[YNˆœ›ØÚÜÝ\‹\šX˜›Ûˆ‹Îˆ‹Ù^\šY[˜ÙH‹™]K]\ÝYŽˆœ›ØÚÜÝ\‹\šX˜›Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ‘ÔS‘Q•UUÈ’HŸJK
Ê
KšœÞ
JšH‹ØÚ[™[Žˆ—LŒŒˆŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ•HÓÔ“Sˆ”SQHŸJK
Ê
KšœÞ
JšÜÚ^™NŒMJW_JKÚÏJÛÜ[Ž™_JOOžØÛÛœÝOJJ
K\ÙT™YŠJ[
KP

KÜØÜ›ÛT›ÙÜ™\ÜÎ›ßOIÊÝ\™Ù]˜KÙ™œÙ]–ÈœÝ\[™‹™[™Ý\—_JK^JËÌKWKËŽLKKKŒÍWJK^JËÌWKÌÍKLÍWJNÜ™]\›ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœœË\ÜÝ\‹\ÙXÝ[Ûˆ‹™YŽ˜KÚ[™[Ž–ÊÊ
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆœœËXÚ\\‹[X\šÈ‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹È™]K]\ÝYŽˆœœËXÚ\\‹[X™[‹Ú[™[Žˆ”ÕTS•ÈŸJK
Ê
KšœÞ
Jšˆ‹È™]K]\ÝYŽˆœœËXÚ\\‹]]H‹Ú[™[Žˆ‘ÔS‘Q•UUÈ’HŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœœËXÚ\\‹[[™HŸJW_JK
Ê
KšœÞ
J™]‹ØÛ\ÜÓ˜[YNˆœœË\ÜÝ\‹Yœ˜[YH‹Ý[NÞßNžÜØØ[N›‹NœŸKÚ[™[ŽŠÊ
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊœœË\ÜÝ\‹LˆŠK[ˆ“Ù™šXÚX[Ü˜[™Y]]È’HÜÝ\ˆ™X]\š[™È˜\ÛÛ‹XÚXH[™H[ÜHÙˆ[ÛšYH‹ØY[™Îˆ›^žH‹™]K]\ÝYŽˆœœË[Ù™šXÚX[\ÜÝ\ˆŸJ_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœœË\ÜÝ\‹Z[™›È‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÝ›Û™È‹È™]K]\ÝYŽˆœœË\ÜÝ\‹]Ù[ÛÛYH‹Ú[™[Žˆ‘ÔS‘Q•UUÈ’HŸJK
Ê
KšœÞ
JœÜ[ˆ‹È™]K]\ÝYŽˆœœË\ÜÝ\‹\ÝX]H‹Ú[™[Žˆ“Ñ‘’PÒPS“ÓSÕSÓST•ÓÔ’ÈŸJW_JK
Ê
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœœË\[‹ÛÛXÚÎŠ
OO™JÝ\Nˆ˜Z[\ˆŸJK™]K]\ÝYŽˆœœË\ÜÝ\‹]Ø]Ú‹Ú[™[Ž–È•Ø]Ú˜Z[\ˆˆ‹
Ê
KšœÞ
JÚÜÚ^™NŒLËš[ˆ˜Ý\œ™[ÛÛÜˆŸJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœœËY˜[‹[X™[‹™]K]\ÝYŽˆœœË][›Ù™šXÚX[[X™[‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ’S‘TS‘S•SˆÓÓTS’SÓˆŸJK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[Žˆ•’PÑHUTÈŸJW_JW_JK
Ê
KšœÞ
J˜H‹ØÛ\ÜÓ˜[YNˆœœËYÝÛˆ‹™YŽˆˆÜœË]˜Z[\ˆ‹˜\šXK[X™[Žˆ‘^Ü™HHÚ[™[X]XÈ˜Z[\ˆÙXÝ[Ûˆ‹™]K]\ÝYŽˆœœË\ÜÝ\‹YÝÛˆ‹Ú[™[ŽŠÊ
KšœÞ
JZÜÚ^™NŒÍ_J_JW_J_KšÏJÛÜ[Ž™_JOOžØÛÛœÝOJJ
K\ÙT™YŠJ[
KP

KÜØÜ›ÛT›ÙÜ™\ÜÎ›ßOIÊÝ\™Ù]˜KÙ™œÙ]–ÈœÝ\[™‹™[™Ý\—_JK^JËÌWKÈ‹M	H‹IH—JNÜ™]\›ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœœË]˜Z[\‹\ØÙ[™H‹YˆœœË]˜Z[\ˆ‹™YŽ˜K™]K]\ÝYŽˆœœË]˜Z[\‹\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJœXÝ\™KØÛ\ÜÓ˜[YNˆœœË]˜Z[\‹X\‹Ý[NÞßNžÞN›ŸKÚ[™[Ž–ÊÊ
KšœÞ
JœÛÝ\˜ÙH‹ÛYYXNˆŠX^]ÚYˆL
H‹Ü˜ÔÙ]šÊœœË[][˜Ú[[Øš[HŠ_JK
Ê
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊœœË[][˜ÚŠK[ˆ“Ù™šXÚX[\ÛÜšÈÙˆ˜\ÛÛˆ[™XÚXH™\ÚYHH™YØ\ˆ]Ý[œÙ][ˆ[ÛšYH‹ØY[™Îˆ›^žHŸJW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆœœË]˜Z[\‹\ÚYHŸJK
Ê
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆœœË]˜Z[\‹ZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞ
Jœ‹È™]K]\ÝYŽˆœœË]˜Z[\‹]Ø]Ú[X™[‹Ú[™[Žˆ•ÐUÒŸJK
Ê
KšœÞ
Jšˆ‹È™]K]\ÝYŽˆœœË]˜Z[\‹ZXY[™È‹Ú[™[Žˆ•RSTˆˆŸJW_JK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœœËXÚ[™[XK\^H‹™]K]\ÝYŽˆœœË]˜Z[\‹\^H‹˜\šXK[X™[Žˆ•Ø]ÚÙ™šXÚX[Ü˜[™Y]]È’H˜Z[\ˆˆ‹ÛÛXÚÎŠ
OO™JÝ\Nˆ˜Z[\ˆŸJKÚ[™[ŽŠÊ
KšœÞ
JÚÜÚ^™NŒÍËš[ˆ˜Ý\œ™[ÛÛÜˆ‹Ý›ÚÙUÚYŒ_J_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœœË\ØÙ[™KX›ÝÛH‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹È™]K]\ÝYŽˆœœË]˜Z[\‹XÜ™Y]‹Ú[™[ŽˆT•ÓÔ’ÈNH“ÐÒÔÕTˆÐSQTÈŸJK
Ê
KšœÞ
JœÜ[ˆ‹È™]K]\ÝYŽˆœœË]˜Z[\‹XØ\[Ûˆ‹Ú[™[Žˆ’TÓÓˆUS	ˆPÒPHÐSRS“ÔÈŸJK
Ê
KšœÞ
J˜H‹Ú™YŽˆˆÜœË[Û›KZ[‹[[ÛšYH‹™]K]\ÝYŽˆœœË]˜Z[\‹[™^‹˜\šXK[X™[Žˆ•šY]ÈH™YÚ[ÛœÈÙXÝ[Ûˆ‹Ú[™[ŽŠÊ
KšœÞ
JžKÜÚ^™NŒN_J_JW_JW_J_KšÏJÛÜ[Ž™_JOOŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœœËYY]ÜšX[‹YˆœœË[Û›KZ[‹[[ÛšYH‹™]K]\ÝYŽˆœœËYY]ÜšX[\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆœœËYY]ÜšX[Z[›È‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹È™]K]\ÝYŽˆœœËYY]ÜšX[Y^YXœ›ÝÈ‹Ú[™[Žˆ”“ÐÒÔÕTˆÐSQTÈŸJK
Ê
KšœÞÊJšˆ‹È™]K]\ÝYŽˆœœËYY]ÜšX[ZXY[™È‹Ú[™[Ž–È‘VSÓ‘HÒUH‹
Ê
KšœÞ
J˜œˆ‹ßJK
Ê
KšœÞ
J™[H‹ØÚ[™[Žˆ“SÓ’QKˆŸJW_JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽˆœœËYY]ÜšX[Y\ØÜš\[Ûˆ‹Ú[™[Žˆ”Ú^ÛÜ›™\œÈÙˆ[ÛšYK[›ÙXÙY[ˆ›ØÚÜÝ\—LŒN\ÈÕH’HX]\šX[ˆŸJW_JK
Ê
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆœœËY™X]\™HœË[[ÛšYKY™X]\™H‹Ú[™[Ž–ÊÊ
KšœÞÊJœXÝ\™H‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÛÝ\˜ÙH‹ÛYYXNˆŠX^]ÚYˆL
H‹Ü˜ÔÙ]šÊœœË[[ÛšYK[[Øš[HŠ_JK
Ê
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊœœË[[ÛšYHŠK[ˆH[ÛšYH™\ÚY[™[^[™ÈÛˆH[šÈ›[Z[™ÛÈ›Ø][ˆHÝÚ[[Z[™ÈÛÛ‹ØY[™Îˆ›^žHŸJW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆœœËY™X]\™K\ÚYHŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœœËY™X]\™KXÛÜH‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹È™]K]\ÝYŽˆœœË[[ÛšYKXØ]YÛÜžH‹Ú[™[Žˆ”™YÚ[ÛœÈŸJK
Ê
KšœÞ
JšÈ‹È™]K]\ÝYŽˆœœË[[ÛšYK]]H‹Ú[™[Žˆ“[ÛšYHŸJK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽˆœœË[[ÛšYKY\ØÜš\[Ûˆ‹Ú[™[ŽˆÚ]HÝ™Y]Ë\Û[™›ØYËÙ][™È[™[Ý[Z[ˆÛÝ[žKˆŸJK
Ê
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœœË\[‹™]K]\ÝYŽˆœœË[[ÛšYKY^Ü™H‹ÛÛXÚÎŠ
OO™JÝ\Nˆ›X\ŸJKÚ[™[Ž–È“Ü[ˆ™YÚ[ÛˆX\‹
Ê
KšœÞ
JšÜÚ^™NŒMßJW_JW_JW_JK
Ê
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆœœËY™X]\™HœË\ØÜ™Y[œËY™X]\™H‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊœœË\ØÜ™Y[œÈŠK[ˆ“XÚXH[™˜\ÛÛˆ[™\ˆH™[ÛˆYÚÈÙˆHšXÙHÚ]HšYÚÛXˆ‹ØY[™Îˆ›^žHŸJK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆœœËY™X]\™K\ÚYHŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœœËY™X]\™KXÛÜH‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹È™]K]\ÝYŽˆœœË\ØÜ™Y[œËXØ]YÛÜžH‹Ú[™[Žˆ“Ù™šXÚX[[XYÙ\ÈŸJK
Ê
KšœÞÊJšÈ‹È™]K]\ÝYŽˆœœË\ØÜ™Y[œË]]H‹Ú[™[Ž–È‘ÕH’H‹
Ê
KšœÞ
J˜œˆ‹ßJK”ØÜ™Y[œÚÝÈ—_JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽˆœœË\ØÜ™Y[œËY\ØÜš\[Ûˆ‹Ú[™[Žˆ‘]™\žHœ˜[YH\ÈH[\Ú^™HšY]È[™H˜XÙXX›HÛÝ\˜ÙKˆŸJK
Ê
KšœÞÊJÝÎˆ‹ÜØÜ™Y[œÚÝÈ‹Û\ÜÓ˜[YNˆœœË\[‹™]K]\ÝYŽˆœœË\ØÜ™Y[œËY^Ü™H‹Ú[™[Ž–Èœ›ÝÜÙHHœ˜[Y\È‹
Ê
KšœÞ
JšÜÚ^™NŒMßJW_JW_JW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœœËYY]ÜšX[Y[™‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹È™]K]\ÝYŽˆœœËYY]ÜšX[\ÛÝ\˜ÙH‹Ú[™[Žˆ“Ñ‘’PÒPST•ÓÔ’È	ˆÐÔ‘QS”ÒÕÈNH“ÐÒÔÕTˆÐSQTÈŸJK
Ê
KšœÞÊJ˜H‹Ú™YŽˆšÎ‹ËÝÝÝËœ›ØÚÜÝ\™Ø[Y\Ë˜ÛÛKÕ’H‹\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹™]K]\ÝYŽˆœœË]š\Ú][Ù™šXÚX[‹Ú[™[Ž–È•š\Ú]HÙ™šXÚX[ÕH’HÙXœÚ]H‹
Ê
KšœÞ
JKÜÚ^™NŒM_JW_JW_JW_JKÏJÛÜ[Ž™_JOOŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœ›ØÚÜÝ\‹Y^\šY[˜ÙH‹Yˆ™^\šY[˜ÙH‹™]K]\ÝYŽˆœ›ØÚÜÝ\‹Y^\šY[˜ÙH‹Ú[™[Ž–ÊÊ
KšœÞ
JÚËÛÜ[Ž™_JK
Ê
KšœÞ
JšËÛÜ[Ž™_JK
Ê
KšœÞ
JšËÛÜ[Ž™_JW_JKÚÏJ
OOŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆÝÛ‹Y\Ý[˜][ÛœÈ‹™]K]\ÝYŽˆœ]ZXÚËY\Ý[˜][ÛœÈ‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[ZÚXÚÙ\ˆ‹™]K]\ÝYŽˆœ]ZXÚËY\Ý[˜][ÛœËZXY[™È‹Ú[™[Žˆ‘’S‘SÕTˆ‘VÕÔŸJK
Ê
KšœÞÊJÝÎˆ‹Ù\™XÝÜžH‹™]K]\ÝYŽˆšÛYKX[\YÙ\È‹Ú[™[Ž–È‘[[™^‹
Ê
KšœÞ
JKÜÚ^™NŒM_JW_JW_JK
Ê
KšœÞ
J›˜]ˆ‹È˜\šXK[X™[Žˆ”]ZXÚÈ\Ý[˜][ÛœÈ‹Ú[™[Ž–ÖÈ•™ZXÛ\È‹‹Ý™ZXÛ\È‹WKÈ•ÙX\ÛœÈ‹‹ÝÙX\ÛœÈ‹^KÈÚ\˜XÝ\œÈ‹‹ØÚ\˜XÝ\œÈ‹žKÈ”˜Y[È‹‹Ü˜Y[È‹KÈ”ØÜ™Y[œÚÝÈ‹‹ÜØÜ™Y[œÚÝÈ‹žKÈ–[Ý\ˆÚXÚÛ\Ý‹‹Ü›ÙÜ™\ÜËØÚXÚÛ\Ý‹^WWK›X\

ÙKKJOOŠÊ
KšœÞÊJÝÎ˜K™]K]\ÝYŽ˜]ZXÚËIØKœÛXÙJJKœ™\XÙP[
‹È‹‹HŠ_XÚ[™[Ž–ÊÊ
KšœÞ
JÜÚ^™NŒN_JK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž™_JK
Ê
KšœÞ
JKÜÚ^™NŒM_JW_KJJ_JW_JKZÏJ
OOŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆÝÛ‹Y^\šY[˜ÙK]X\Ù\ˆ‹™]K]\ÝYŽˆšÛYKY^\šY[˜ÙK]X\Ù\ˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJœXÝ\™H‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÛÝ\˜ÙH‹ÛYYXNˆŠX^]ÚYL
H‹Ü˜ÔÙ]šÊœœË[][˜Ú[[Øš[HŠ_JK
Ê
KšœÞ
Jš[YÈ‹ÜÜ˜ÎšÊœœË[][˜ÚŠK[ˆ“Ù™šXÚX[\ÛÜšÈÙˆ˜\ÛÛˆ[™XÚXH™\ÚYHH™YØ\ˆ[ˆ[ÛšYH‹ØY[™Îˆ›^žHŸJW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆÝÛ‹Y^\šY[˜ÙK\ÚYHŸJK
Ê
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆÝÛ‹Y^\šY[˜ÙKXÛÜH‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[ZÚXÚÙ\ˆ‹™]K]\ÝYŽˆ™^\šY[˜ÙK]X\Ù\‹XØ]YÛÜžH‹Ú[™[Žˆ‘ÔS‘Q•UUÈ’HŸJK
Ê
KšœÞÊJšˆ‹È™]K]\ÝYŽˆ™^\šY[˜ÙK]X\Ù\‹ZXY[™È‹Ú[™[Ž–È’TÓÓˆ‹
Ê
KšœÞ
J˜œˆ‹ßJK‰ˆPÒPKˆ—_JK
Ê
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞÊJÝÎˆ‹Ù^\šY[˜ÙH‹™]K]\ÝYŽˆšÛYKY[\‹Y^\šY[˜ÙH‹Ú[™[Ž–È”Ý\[È[ÛšYH‹
Ê
KšœÞ
JšÜÚ^™NŒMßJW_JK
Ê
KšœÞÊJÝÎˆ‹ÕšXÙTÜ[ÝšY[ÜËÝ˜Z[\‹Lˆ‹™]K]\ÝYŽˆšÛYKY^\šY[˜ÙK]˜Z[\ˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JÚÜÚ^™NŒMKš[ˆ˜Ý\œ™[ÛÛÜˆŸJKˆ˜Z[\ˆˆ—_JW_JW_JK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆÝÛ‹Y^\šY[˜ÙKXÜ™Y]‹™]K]\ÝYŽˆšÛYKY^\šY[˜ÙKXÜ™Y]‹Ú[™[Žˆ“Ñ‘’PÒPST•ÓÔ’ÈNH“ÐÒÔÕTˆÐSQTÈŸJW_JKÚÏ[^ZÏYZÏZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
J^Ü™YŽÛ\ÜÓ˜[YNœYÊ™š^Y[œÙ]L‹ML™ËX›XÚËÎ]KVÜÝ]O[Ü[—N˜[š[X]KZ[ˆ]KVÜÝ]OXÛÜÙYN˜[š[X]K[Ý]]KVÜÝ]OXÛÜÙYN™˜YK[Ý]L]KVÜÝ]O[Ü[—N™˜YKZ[‹L‹JK‹‹˜_JJNÛZË™\Ü^S˜[YO^^™\Ü^S˜[YNØÛÛœÝÏZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™KÚ[™[Ž˜K‹‹KÊOOŠÊ
KšœÞÊJZËØÚ[™[Ž–ÊÊ
KšœÞ
JZËßJK
Ê
KšœÞÊJÞÜ™YŽ›ËÛ\ÜÓ˜[YNœYÊ™š^YYVÍL	WHÜVÍL	WH‹MLÜšYËY[X^]Ë[È˜[œÛ]K^VËML	WH˜[œÛ]K^KVËML	WHØ\M›Ü™\ˆ™ËX˜XÚÙÜ›Ý[™MˆÚYÝË[È\˜][Û‹LŒ]KVÜÝ]O[Ü[—N˜[š[X]KZ[ˆ]KVÜÝ]OXÛÜÙYN˜[š[X]K[Ý]]KVÜÝ]OXÛÜÙYN™˜YK[Ý]L]KVÜÝ]O[Ü[—N™˜YKZ[‹L]KVÜÝ]OXÛÜÙYNž›ÛÛK[Ý]NMH]KVÜÝ]O[Ü[—Nž›ÛÛKZ[‹NMH]KVÜÝ]OXÛÜÙYNœÛYK[Ý]]Ë[YLKÌˆ]KVÜÝ]OXÛÜÙYNœÛYK[Ý]]Ë]ÜVÍ	WH]KVÜÝ]O[Ü[—NœÛYKZ[‹Yœ›ÛK[YLKÌˆ]KVÜÝ]O[Ü[—NœÛYKZ[‹Yœ›ÛK]ÜVÍ	WHÛNœ›Ý[™Y[È‹JK‹‹Ú[™[Ž–ØK
Ê
KšœÞÊJžÈ™]K]\ÝYŽˆ›[Ù[XÛÜÙH‹˜\šXK[X™[ŽˆÛÜÙHX[ÙÈ‹Û\ÜÓ˜[YNˆ˜XœÛÛ]HšYÚMÜM›Ý[™Y\ÛHÜXÚ]KMÌš[™Ë[Ù™œÙ]X˜XÚÙÜ›Ý[™˜[œÚ][Û‹[ÜXÚ]HÝ™\Ž›ÜXÚ]KLL›ØÝ\Î›Ý][™K[›Û™H›ØÝ\Îœš[™ËLˆ›ØÝ\Îœš[™Ë\š[™È›ØÝ\Îœš[™Ë[Ù™œÙ]Lˆ\ØX›YœÚ[\‹Y]™[Ë[›Û™H]KVÜÝ]O[Ü[—N˜™ËXXØÙ[]KVÜÝ]O[Ü[—N^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž–ÊÊ
KšœÞ
JÞØÛ\ÜÓ˜[YNˆšMËMŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÜ‹[Û›H‹Ú[™[ŽˆÛÜÙHŸJW_JW_JW_JJNÜË™\Ü^S˜[YOYÞ™\Ü^S˜[YNØÛÛœÝÏZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JÜ™YŽÛ\ÜÓ˜[YNœYÊ^[È›Û\Ù[ZX›ÛXY[™Ë[›Û™H˜XÚÚ[™Ë]YÚ‹JK‹‹˜_JJNÙË™\Ü^S˜[YOZ™\Ü^S˜[YNØÛÛœÝZÏZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JžÜ™YŽÛ\ÜÓ˜[YNœYÊ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹JK‹‹˜_JJNÞZË™\Ü^S˜[YOXž™\Ü^S˜[YNØÛÛœÝÚÏJÛ[Ù[™KÙ][Ù[˜K]Y\žNÙ]]Y\žN›ËÜ[Ž›‹šYÙÙ\”™YŽœ‹ÜÚ[\œÎ›JOOžØÛÛœÝØËWOJJ
K\ÙTÝ]JJ[ŠKO]š[J
KÓÝÙ\Ø\ÙJ
KœÜ]
×ÊËÊK™š[\Š›ÛÛX[ŠKVË‹‹žË‹‹›Ü—K™š[\ŠOOžÝ˜\ˆNÚYŠÛŠK
J\™]\›ˆLNÚYŠ”YÙ\ÈOOXÉ‰ˆ”ÙXÝ[ÛˆˆOOYKšÚ[™
\™]\›ˆLNÚYŠ‘ÜÜÚY\œÈOOXÉ‰ˆ”ÙXÝ[ÛˆOOYKšÚ[™
\™]\›ˆLNØÛÛœÝX	ÙK]_H	ÙKšÚ[™H	ÙK˜Ø]YÛÜž_ˆŸH	Ê[OOJOYK˜]šX]\Ê_›ÚYOOXOÝ›ÚY˜K“X[Y˜XÝ\™\Š_ˆŸH	ÙKœÜÚ[\‰‰ˆ[ÈˆŽ™K™\ØÜš\[ÛŸˆŸXÓÝÙ\Ø\ÙJ
NÜ™]\›ˆK™]™\žJOOš[˜ÛY\ÊJJ_JK]š[J
_[ˆOOXÏÜ–Ë‹‹–È™^\šY[˜ÙH‹›X\‹˜Ú\˜XÝ\œÈ‹™ZXÛ\È‹œ›ÙÜ™\ÜÈ‹œ˜Y[È—K›X\
OOžË™š[™
OO˜KšYOOYJJK‹‹›Ü‹™š[\ŠOOˆ”™YÚ[ÛˆOOYKšÚ[™
WNÜ™]\›ŠÊ
KšœÞ
JÚËÛÜ[ŽˆœÙX\˜ÚOOJ[OOY_›ÚYOOYOÝ›ÚY™K\JKÛ“Ü[Ú[™ÙN™OOžÙ_
J[
KJ[ŠJ_KÚ[™[ŽŠÊ
KšœÞ
JËØÛ\ÜÓ˜[YNˆ˜]\Ë[[Ù[[Ù[\ÙX\˜Ú‹™]K]\ÝYŽˆ˜]\Ë[[Ù[‹™]K[[š\Ë\™]™[ŽˆLÛÛÜÙP]]Ñ›ØÝ\Î™OOžÝ˜\ˆNÙKœ™]™[Y˜][

K[OOJO\‹˜Ý\œ™[
I‰›ÚYOOXI‰˜Kš\ÐÛÛ›™XÝY	‰œ‹˜Ý\œ™[™›ØÝ\ÊÜ™]™[ØÜ›ÛˆLJ_KÚ[™[ŽŠÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜]\Ë[[Ù[\ØÜ›Û‹™]K[[š\Ë\™]™[ŽˆLÚ[™[ŽŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›\Ý[[Ù[‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™^YXœ›ÝÈ‹™]K]\ÝYŽˆœÙX\˜ÚY^YXœ›ÝÈ‹Ú[™[Žˆ•’PÑHUTÈŸJK
Ê
KšœÞ
JËØÛ\ÜÓ˜[YNˆ™\Ü^H‹™]K]\ÝYŽˆ›\Ý]]H‹Ú[™[Žˆ‘’S‘UˆŸJK
Ê
KšœÞ
JZËÈ™]K]\ÝYŽˆ›\ÝY\ØÜš\[Ûˆ‹Ú[™[Žˆ“ÛÚÚ[™È›ÜˆÛÛY[Û™HÜˆÛÛY][™ÏÈÙX\˜ÚH]\ËˆŸJK
Ê
KšœÞÊJ›X™[‹ØÛ\ÜÓ˜[YNˆœÙX\˜ÚYšY[‹Ú[™[Ž–ÊÊ
KšœÞ
JYÜÚ^™NŒŒŸJK
Ê
KšœÞ
Jš[œ]‹Ø]]Ñ›ØÝ\ÎˆL™]K]\ÝYŽˆ˜Ø][ÙË\ÙX\˜ÚZ[œ]‹˜\šXK[X™[Žˆ”ÙX\˜ÚH]\È‹˜[YNÛÚ[™ÙN™OO›ÊK\™Ù]˜[YJKXÙZÛ\Žˆ“˜[YHÜˆÙ^]ÛÜ™ŸJK	‰ŠÊ
KšœÞ
J˜]Ûˆ‹È™]K]\ÝYŽˆœÙX\˜ÚXÛX\‹\]Y\žH‹˜\šXK[X™[ŽˆÛX\ˆÙX\˜Ú‹ÛÛXÚÎŠ
OO›ÊˆŠKÚ[™[ŽŠÊ
KšœÞ
JÞÜÚ^™NŒMßJ_JW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÙX\˜ÚZ[™^X˜\ˆ‹Ú[™[Ž–ÊÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[]XœÈ‹Ú[™[Ž–È[‹”YÙ\È‹‘ÜÜÚY\œÈ—K›X\
OOŠÊ
KšœÞ
J˜]Ûˆ‹È˜\šXK\™\ÜÙYŽ˜ÏOOYKÛ\ÜÓ˜[YN˜ÏOOYOÈ˜XÝ]™HŽˆˆ‹™]K]\ÝYŽ˜ÙX\˜Ú\ØÛÜKIÙKÓÝÙ\Ø\ÙJ
_XÛÛXÚÎŠ
OOJJKÚ[™[Ž™_KJJ_JK
Ê
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆœÙX\˜ÚXÛÝ[‹™]K]\ÝYŽˆœÙX\˜Ú\™\Ý[XÛÝ[‹˜\šXK[]™HŽˆœÛ]H‹Ú[™[Žš[J
_[ˆOOXÏØ	Ù›[™ÝH‘TÕSØˆ”URPÒÈTÕSUSÓ”ÈŸJW_JK
Ê
KšœÞ
J™]ˆ‹È™]K]\ÝYŽˆœÙX\˜Ú\™\Ý[È‹Ú[™[Ž™œÛXÙJL
K›X\
OOŠÊ
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœÜ[\ÙX\˜Ú\™\Ý[‹™]K]\ÝYŽ˜ÙX\˜Ú[Ü[‹IÙKšYœ™\XÙP[
‹È‹‹HŠ_XÛÛXÚÎŠ
OOžÝJ[ŠKŠÝ\Nˆ™]Z[‹][N™_J_KÚ[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜Î™Kš[XYÙK[ˆˆŸJK
Ê
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÛX[‹ØÚ[™[Žˆ”ÙXÝ[ÛˆOOYKšÚ[™È‘TÕSUSÓˆŽ™KšÚ[™Õ\\Ø\ÙJ
_JK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[Ž™K]_JW_JK
Ê
KšœÞ
JKÜÚ^™NŒN_JW_K	ÙKšÚ[™KIÙKšYX
J_JK›[™ÝŒL	‰ŠÊ
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆœÜ[[]]Y‹Ú[™[Žˆ‘š\œÝLX]Ú\ÈÚÝÛ‹ˆ˜\œ›ÝÈ[Ý\ˆÙX\˜ÚÈÙYH[Ü™KˆŸJKY›[™Ý	‰ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™[\K\Ý]H‹™]K]\ÝYŽˆ˜Ø][ÙËY[\K\Ý]H‹Ú[™[Ž–ÊÊ
KšœÞ
JÚßJK
Ê
KšœÞ
JšÈ‹ØÚ[™[Žˆ“›Ý[™ÈÛˆš[KˆŸJK
Ê
KšœÞ
Jœ‹ØÚ[™[Žˆ•žH[›Ý\ˆ˜[YHÜˆÙ^]ÛÜ™ˆŸJK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœÜ[X]Ûˆ‹™]K]\ÝYŽˆœÙX\˜ÚXÛX\ˆ‹ÛÛXÚÎŠ
OOžÛÊˆŠKJ[Š_KÚ[™[ŽˆÛX\ˆÙX\˜ÚŸJW_JW_J_J_J_J_KÏUY
™š[K\ÙX\˜Ú‹ÖÈœ]‹Ùˆ“LMLˆˆˆš‹Ù^Nˆœ\›ˆŸWKÈœ]‹Ùˆ“MŒŽŒXLˆˆKÌÈRNLˆˆ‹L•ÛMKMR˜LˆˆLˆŒÈ‹Ù^Nˆ›\ÍÙÎMŸWKÈœ]‹Ùˆ›NHNLKKLKH‹Ù^NˆŒZœZZHŸWKÈ˜Ú\˜ÛH‹ØÞˆH‹ÞNˆŒM‹ŽˆŒÈ‹Ù^NˆYœM]ŸWWJKšÏUY
œÛY\œËZÜš^›Û[‹ÖÈ›[™H‹ÞNˆŒŒH‹ŽˆŒM‹LNˆ‹LŽˆ‹Ù^Nˆ›ØY]ÙŸWKÈ›[™H‹ÞNˆŒL‹ŽˆŒÈ‹LNˆ‹LŽˆ‹Ù^NˆŒ\MŒŽNŸWKÈ›[™H‹ÞNˆŒŒH‹ŽˆŒLˆ‹LNˆŒLˆ‹LŽˆŒLˆ‹Ù^NˆŒZ]NHŸWKÈ›[™H‹ÞNˆŽ‹ŽˆŒÈ‹LNˆŒLˆ‹LŽˆŒLˆ‹Ù^Nˆ›ÜÍŽŸWKÈ›[™H‹ÞNˆŒŒH‹ŽˆŒMˆ‹LNˆŒŒ‹LŽˆŒŒ‹Ù^NˆŒMŸWKÈ›[™H‹ÞNˆŒLˆ‹ŽˆŒÈ‹LNˆŒŒ‹LŽˆŒŒ‹Ù^Nˆ›LÛNˆŸWKÈ›[™H‹ÞNˆŒM‹ŽˆŒM‹LNˆŒˆ‹LŽˆˆ‹Ù^NˆŒML\ŸWKÈ›[™H‹ÞNˆŽ‹ŽˆŽ‹LNˆŒL‹LŽˆŒM‹Ù^NˆŒZMššLŸWKÈ›[™H‹ÞNˆŒMˆ‹ŽˆŒMˆ‹LNˆŒN‹LŽˆŒŒˆ‹Ù^NˆŒ[ÝˆŸWWJKšÏUY
›^[Ý]YÜšY‹ÖÈœ™XÝ‹ÝÚYˆÈ‹ZYÚˆÈ‹ˆŒÈ‹NˆŒÈ‹žˆŒH‹Ù^NˆŒYÎN\ŸWKÈœ™XÝ‹ÝÚYˆÈ‹ZYÚˆÈ‹ˆŒM‹NˆŒÈ‹žˆŒH‹Ù^Nˆ™HŸWKÈœ™XÝ‹ÝÚYˆÈ‹ZYÚˆÈ‹ˆŒM‹NˆŒM‹žˆŒH‹Ù^Nˆ›ž[ÌŸWKÈœ™XÝ‹ÝÚYˆÈ‹ZYÚˆÈ‹ˆŒÈ‹NˆŒM‹žˆŒH‹Ù^NˆŒX˜ž\ˆŸWWJKÚÏUY
›\Ý‹ÖÈœ]‹Ùˆ“LÈLšŒH‹Ù^Nˆ››ŒŒÚÈŸWKÈœ]‹Ùˆ“LÈNŒH‹Ù^NˆŒ]LÚˆŸWKÈœ]‹Ùˆ“LÈšŒH‹Ù^NˆŒ\œ]˜HŸWKÈœ]‹Ùˆ“NLšLÈ‹Ù^NˆŒ^˜MÞ˜HŸWKÈœ]‹Ùˆ“NNLÈ‹Ù^NˆŒ[›ŒÈŸWKÈœ]‹Ùˆ“NšLÈ‹Ù^NˆšZÌÝšÚˆŸWWJNÙ[˜Ý[ÛˆšÊKØKJ^Ü™]\›ˆX]›Z[ŠX]›X^
KJJ_Y[˜Ý[ÛˆÚÊJ^ØÛÛœÝOZJ
K\ÙT™YŠÝ˜[YN™K™]š[Ý\Î™_JNÜ™]\›ˆJ
K\ÙSY[[Ê

OOŠK˜Ý\œ™[˜[YHOOYI‰ŠK˜Ý\œ™[œ™]š[Ý\ÏXK˜Ý\œ™[˜[YKK˜Ý\œ™[˜[YOYJKK˜Ý\œ™[œ™]š[Ý\ÊKÙWJ_]˜\ˆÚÏSØš™XÝ™œ™Y^™JÜÜÚ][ÛŽˆ˜XœÛÛ]H‹›Ü™\ŽŒÚYŒKZYÚŒKY[™ÎŒX\™Ú[Ž‹LKÝ™\™›ÝÎˆšY[ˆ‹Û\ˆœ™XÝ

H‹Ú]TÜXÙNˆ››ÝÜ˜\‹ÛÜ™Ü˜\ˆ››Ü›X[ŸJKÏZJ
K™›ÜØ\™™YŠ
KJOOŠÊ
KšœÞ
JšœÜ[‹Ë‹‹™K™YŽ˜KÝ[NžË‹‹ÚË‹‹™KœÝ[__JJNÞË™\Ü^S˜[YOH•š\ÝX[RY[ˆŽÝ˜\ˆÚÏVÈˆ‹‘[\ˆ‹\œ›ÝÕ\‹\œ›ÝÑÝÛˆ—KÚÏVÈˆ‹‘[\ˆ—KÏH”Ù[XÝ‹ÐZËËš×O]Ú
ÊKÓZË×O\
ËÐšËÙ—JKšÏUÙŠ
KÔšË×OSZÊÊKÑšËÚ×OSZÊÊKÚÏYOOžØÛÛœÝ××ÜØÛÜTÙ[XÝ˜KÚ[™[ŽÜ[Ž›ËY˜][Ü[Ž›‹Û“Ü[Ú[™ÙNœ‹˜[YN›Y˜][˜[YN˜ËÛ•˜[YPÚ[™ÙNK\Ž›K˜[YNœ]]ÐÛÛ\]N™\ØX›YžK™\]Z\™Y™Ë›Ü›NšOYKUšÊJKÙ‹×OZJ
K\ÙTÝ]J[
KÝ‹×OZJ
K\ÙTÝ]J[
KÐËOZJ
K\ÙTÝ]JLJKÏZÚ
JKÔËOZ
Ü›Ü›ËY˜][›Ü›ÏÈLKÛÚ[™ÙNœ‹Ø[\Ž“ßJKÐKOZ
Ü›Ü›Y˜][›Ü˜ËÛÚ[™ÙNKØ[\Ž“ßJKZJ
K\ÙT™YŠ[
KOHYŸ
HY‹˜ÛÜÙ\Ý
™›Ü›HŠJKÕ—OZJ
K\ÙTÝ]J™]ÈÙ]
KP\œ˜^K™œ›ÛJ
K›X\
OO™Kœ›ÜË˜[YJKš›Ú[ŠŽÈŠNÜ™]\›ŠÊ
KšœÞ
JY‹Ë‹‹˜‹Ú[™[ŽŠÊ
KšœÞÊJšËÜ™\]Z\™Y™ËØÛÜN˜KšYÙÙ\Ž™‹Û•šYÙÙ\Ú[™ÙNË˜[YS›ÙN‹Û•˜[YS›ÙPÚ[™ÙN—Ë˜[YS›ÙR\ÐÚ[™[ŽËÛ•˜[YS›ÙR\ÐÚ[™[Ú[™ÙNžÛÛ[Y‰

K˜[YNKÛ•˜[YPÚ[™ÙN‘Ü[Ž”ËÛ“Ü[Ú[™ÙN“\ŽšËšYÙÙ\”Ú[\‘ÝÛ”ÜÔ™YŽ‹\ØX›YžKÚ[™[Ž–ÊÊ
KšœÞ
JZË”›ÝšY\‹ÜØÛÜN˜KÚ[™[ŽŠÊ
KšœÞ
JšËÜØÛÜN™K—×ÜØÛÜTÙ[XÝÛ“˜]]™SÜ[ÛYšJ
K\ÙPØ[˜XÚÊOOžÕŠOO›™]ÈÙ]
JK˜Y
JJ_K×JKÛ“˜]]™SÜ[Û”™[[Ý™NšJ
K\ÙPØ[˜XÚÊOOžÕŠOOžØÛÛœÝ[™]ÈÙ]
JNÜ™]\›ˆ™[]JJKJ_K×JKÚ[™[ŽJ_JKOÊÊ
KšœÞÊJÔËÈ˜\šXKZY[ˆŽˆL™\]Z\™Y™ËX’[™^‹LK˜[YNœ]]ÐÛÛ\]N™˜[YNKÛÚ[™ÙN™OO‘
K\™Ù]˜[YJK\ØX›YžK›Ü›NšÚ[™[Ž–Ý›ÚYOOPOÊÊ
KšœÞ
J›Ü[Ûˆ‹Ý˜[YNˆˆŸJN›[\œ˜^K™œ›ÛJ
W_KŠN›[_J_J_NÕÚË™\Ü^S˜[YOSÎÝ˜\ˆÚÏH”Ù[XÝšYÙÙ\ˆ‹ZÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝ\ØX›Y›ÏHLK‹‹›ŸOYKUšÊ
KTÊÚË
KÏ[™\ØX›YËOPžJK›Û•šYÙÙ\Ú[™ÙJKOQÊ
KZJ
K\ÙT™YŠÝXÚŠKÙK×OPTÊOOžØÛÛœÝO[J
K™š[\ŠOOˆYK™\ØX›Y
KXK™š[™
OO™K˜[YOOO[˜[YJKÏQÊKK
NÝ›ÚYOO[É‰››Û•˜[YPÚ[™ÙJË˜[YJ_JKYOOžØß
›Û“Ü[Ú[™ÙJL
KÊ
JKI‰ŠšYÙÙ\”Ú[\‘ÝÛ”ÜÔ™Y‹˜Ý\œ™[^Þ“X]œ›Ý[™
KœYÙV
KN“X]œ›Ý[™
KœYÙVJ_J_NÜ™]\›ŠÊ
KšœÞ
J]ËØ\ÐÚ[ˆL‹‹œ‹Ú[™[ŽŠÊ
KšœÞ
Jš˜]Û‹Ý\Nˆ˜]Ûˆ‹›ÛNˆ˜ÛÛX›Ø›Þ‹˜\šXKXÛÛ›ÛÈŽ›˜ÛÛ[Y˜\šXKY^[™YŽ››Ü[‹˜\šXK\™\]Z\™YŽ›œ™\]Z\™Y˜\šXKX]]ØÛÛ\]HŽˆ››Û™H‹\Ž›™\‹™]K\Ý]HŽ››Ü[È›Ü[ˆŽˆ˜ÛÜÙY‹\ØX›Y˜Ë™]KY\ØX›YŽ˜ÏÈˆŽ›ÚY™]K\XÙZÛ\ˆŽ“Ê˜[YJOÈˆŽ›ÚY‹‹›‹™YŽKÛÛXÚÎ›Z
‹›ÛÛXÚËOOžÙK˜Ý\œ™[\™Ù]™›ØÝ\Ê
K›[Ý\ÙHˆOO\˜Ý\œ™[	‰š
J_JKÛ”Ú[\‘ÝÛŽ›Z
‹›Û”Ú[\‘ÝÛ‹OOžÜ˜Ý\œ™[YKœÚ[\•\NØÛÛœÝOYK\™Ù]ØKš\ÔÚ[\Ø\\™JKœÚ[\’Y
I‰˜Kœ™[X\ÙTÚ[\Ø\\™JKœÚ[\’Y
KOOYK˜]Û‰‰ˆLOOOYK˜Ý›Ù^I‰ˆ›[Ý\ÙHOOYKœÚ[\•\I‰Š
JKKœ™]™[Y˜][

J_JKÛ’Ù^QÝÛŽ›Z
‹›Û’Ù^QÝÛ‹OOžØÛÛœÝOHˆˆOOY˜Ý\œ™[ÙK˜Ý›Ù^_K˜[Ù^_K›Y]RÙ^_HOOYKšÙ^K›[™ÝJKšÙ^JKI‰ˆˆOOYKšÙ^_ÚËš[˜ÛY\ÊKšÙ^JI‰Š

KKœ™]™[Y˜][

J_J_J_J_JNÑZË™\Ü^S˜[YOSÚÎÝ˜\ˆÏH”Ù[XÝ˜[YH‹šÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝÛ\ÜÓ˜[YN›ËÝ[N›‹Ú[™[Žœ‹XÙZÛ\Ž›Hˆ‹‹‹š_OYKÏTÊË
KÛÛ•˜[YS›ÙR\ÐÚ[™[Ú[™ÙN_OXËO]›ÚYOO\‹PžJKË›Û•˜[YS›ÙPÚ[™ÙJNÜ™]\›ˆZ


OOžÝJJ_KÝKWJK
Ê
KšœÞ
JšœÜ[‹Ë‹‹šK™YŽœÝ[NžÜÚ[\‘]™[Îˆ››Û™HŸKÚ[™[Ž“ÊË˜[YJOÊÊ
KšœÞ
JÊ
K‘œ˜YÛY[ØÚ[™[Ž›JNœŸJ_JNÓšË™\Ü^S˜[YORÎÝ˜\ˆÚÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝÚ[™[Ž›Ë‹‹›ŸOYNÜ™]\›ŠÊ
KšœÞ
JšœÜ[‹È˜\šXKZY[ˆŽˆL‹‹›‹™YŽ˜KÚ[™[Ž›ß—LX˜ÈŸJ_JNÒÚË™\Ü^S˜[YOH”Ù[XÝXÛÛˆŽÝ˜\ˆšÏYOOŠÊ
KšœÞ
JÝËØ\ÐÚ[ˆL‹‹™_JNÚšË™\Ü^S˜[YOH”Ù[XÝÜ[ŽÝ˜\ˆZÏH”Ù[XÝÛÛ[‹šÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝTÊZËK—×ÜØÛÜTÙ[XÝ
KÛË—OZJ
K\ÙTÝ]J
NÚYŠZ


OOžÜŠ™]ÈØÝ[Y[œ˜YÛY[
_K×JK]›Ü[Š^ØÛÛœÝO[ÎÜ™]\›ˆOÛŠ
K˜Ü™X]TÜ[

Ê
KšœÞ
JZËÜØÛÜN™K—×ÜØÛÜTÙ[XÝÚ[™[ŽŠÊ
KšœÞ
JZË”ÛÝÜØÛÜN™K—×ÜØÛÜTÙ[XÝÚ[™[ŽŠÊ
KšœÞ
J™]ˆ‹ØÚ[™[Ž™K˜Ú[™[ŸJ_J_JKJN›[\™]\›ŠÊ
KšœÞ
J	ËË‹‹™K™YŽ˜_J_JNÞšË™\Ü^S˜[YORZÎÝ˜\ˆZÏLLÜZËš×OSZÊZÊKZÏS^J”Ù[XÝÛÛ[”™[[Ý™TØÜ›ÛŠK	ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝÜÚ][ÛŽ›ÏHš][KX[YÛ™Y‹ÛÛÜÙP]]Ñ›ØÝ\Î›‹Û‘\ØØ\RÙ^QÝÛŽœ‹Û”Ú[\‘ÝÛ“Ý]ÚYN›ÚYN˜ËÚYSÙ™œÙ]K[YÛŽ›K[YÛ“Ù™œÙ]œ\œ›ÝÔY[™Î™ÛÛ\Ú[Û›Ý[™\žNžKÛÛ\Ú[Û”Y[™Î™ËÝXÚÞNšYUÚ[‘]XÚY˜‹]›ÚYÛÛ\Ú[ÛœÎ™‹‹‹ßOYKTÊZË
K×Ë×OZJ
K\ÙTÝ]J[
KÞ×OZJ
K\ÙTÝ]J[
KÏPžJKOOÊJJKÓWOZJ
K\ÙTÝ]J[
KÑ—OZJ
K\ÙTÝ]J[
KOQÊ
KÕ—OZJ
K\ÙTÝ]JLJKZJ
K\ÙT™YŠLJNÚJ
K\ÙQY™™XÝ


OOžÚYŠÊ\™]\›ˆÊÊ_K××JKÚ

NØÛÛœÝZJ
K\ÙPØ[˜XÚÊOOžØÛÛœÝØK‹‹OSJ
K›X\
OO™Kœ™Y‹˜Ý\œ™[
KÛ×O]œÛXÙJLJKYØÝ[Y[˜XÝ]™Q[[Y[Ù›ÜŠÛÛœÝˆÙˆJ^ÚYŠOO[Š\™]\›ŽÚYŠËœØÜ›Û[ÕšY]ÊØ›ØÚÎˆ›™X\™\ÝŸJKOOXI‰ž	‰ŠœØÜ›ÛÜL
KOO[É‰ž	‰ŠœØÜ›ÛÜ^œØÜ›ÛZYÚ
KË™›ØÝ\Ê
KØÝ[Y[˜XÝ]™Q[[Y[OO[Š\™]\›Ÿ_KÓKJKZJ
K\ÙPØ[˜XÚÊ

OO”
Ó×JKÔ×JNÚJ
K\ÙQY™™XÝ


OOžÕ	‰‘Š
_KÕ—JNØÛÛœÝÛÛ“Ü[Ú[™ÙN‘ËšYÙÙ\”Ú[\‘ÝÛ”ÜÔ™YŽ•ßO]ŽÚJ
K\ÙQY™™XÝ


OOžÚYŠÊ^Û]O^ÞŒNŒNØÛÛœÝOXOOžÙO^Þ“X]˜XœÊX]œ›Ý[™
KœYÙV
KJË˜Ý\œ™[ËžÏÌ
JKN“X]˜XœÊX]œ›Ý[™
KœYÙVJKJË˜Ý\œ™[ËžOÏÌ
J__K]OžÙKžLL	‰™KžOLLÝœ™]™[Y˜][

N—Ë˜ÛÛZ[œÊ\™Ù]
_ÊLJKØÝ[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\›[Ý™H‹JKË˜Ý\œ™[[[NÜ™]\›ˆ[OOUË˜Ý\œ™[	‰ŠØÝ[Y[˜Y]™[\Ý[™\ŠœÚ[\›[Ý™H‹JKØÝ[Y[˜Y]™[\Ý[™\ŠœÚ[\\‹ØØ\\™NˆLÛ˜ÙNˆLJJK

OOžÙØÝ[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\›[Ý™H‹JKØÝ[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\\‹ØØ\\™NˆLJ___K×ËË×JKJ
K\ÙQY™™XÝ


OOžØÛÛœÝOJ
OO‘ÊLJNÜ™]\›ˆÚ[™ÝË˜Y]™[\Ý[™\Š˜›\ˆ‹JKÚ[™ÝË˜Y]™[\Ý[™\Šœ™\Ú^™H‹JK

OOžÝÚ[™ÝËœ™[[Ý™Q]™[\Ý[™\Š˜›\ˆ‹JKÚ[™ÝËœ™[[Ý™Q]™[\Ý[™\Šœ™\Ú^™H‹J__KÑ×JNØÛÛœÝÓËWOPTÊOOžØÛÛœÝOSJ
K™š[\ŠOOˆYK™\ØX›Y
KXK™š[™
OO™Kœ™Y‹˜Ý\œ™[OOYØÝ[Y[˜XÝ]™Q[[Y[
KÏQÊKK
NÛÉ‰œÙ][Y[Ý]


OO›Ëœ™Y‹˜Ý\œ™[™›ØÝ\Ê
J_JKZJ
K\ÙPØ[˜XÚÊ
KK
OOžØÛÛœÝÏHT‹˜Ý\œ™[	‰ˆ]Ê›ÚYOO]‹˜[YI‰‹˜[YOOOX_ÊI‰ŠJJKÉ‰Š‹˜Ý\œ™[HL
J_KÝ‹˜[YWJKZJ
K\ÙPØ[˜XÚÊ

OO—ÏË™›ØÝ\Ê
K××JKÏZJ
K\ÙPØ[˜XÚÊ
KK
OOžØÛÛœÝÏHT‹˜Ý\œ™[	‰ˆ]Ê›ÚYOO]‹˜[YI‰‹˜[YOOOX_ÊI‰ŠJ_KÝ‹˜[YWJKHœÜ\ˆOO[ÏÖšÎ–ËOZOOVšÏÞÜÚYN˜ËÚYSÙ™œÙ]K[YÛŽ›K[YÛ“Ù™œÙ]œ\œ›ÝÔY[™Î™ÛÛ\Ú[Û›Ý[™\žNžKÛÛ\Ú[Û”Y[™Î™ËÝXÚÞNšYUÚ[‘]XÚY˜‹]›ÚYÛÛ\Ú[ÛœÎ™ŸNžßNÜ™]\›ŠÊ
KšœÞ
JZËÜØÛÜNÛÛ[—ËšY]ÜÜžÛ•šY]ÜÜÚ[™ÙNšË][T™YØ[˜XÚÎ’Ù[XÝY][N“Û’][SX]™N“‹][U^™YØ[˜XÚÎ’Ë›ØÝ\ÔÙ[XÝY][N‘‹Ù[XÝY][U^‘ÜÚ][ÛŽ›Ë\ÔÜÚ][Û™Y•ÙX\˜Ú™YŽ“ËÚ[™[ŽŠÊ
KšœÞ
JÝ‹Ø\Î–ZË[ÝÔ[˜Ú›ÛÛNˆLÚ[™[ŽŠÊ
KšœÞ
JšØ\ÐÚ[ˆL˜\Y‹›Ü[‹Û“[Ý[]]Ñ›ØÝ\Î™OOžÙKœ™]™[Y˜][

_KÛ•[›[Ý[]]Ñ›ØÝ\Î›Z
‹OOžÝ‹šYÙÙ\Ë™›ØÝ\ÊÜ™]™[ØÜ›ÛˆLJKKœ™]™[Y˜][

_JKÚ[™[ŽŠÊ
KšœÞ
JØ\ÐÚ[ˆL\ØX›SÝ]ÚYTÚ[\‘]™[ÎˆLÛ‘\ØØ\RÙ^QÝÛŽœ‹Û”Ú[\‘ÝÛ“Ý]ÚYN›Û‘›ØÝ\ÓÝ]ÚYN™OO™Kœ™]™[Y˜][

KÛ‘\ÛZ\ÜÎŠ
OO‹›Û“Ü[Ú[™ÙJLJKÚ[™[ŽŠÊ
KšœÞ
J‹Ü›ÛNˆ›\Ý›Þ‹Y‹˜ÛÛ[Y™]K\Ý]HŽ‹›Ü[È›Ü[ˆŽˆ˜ÛÜÙY‹\Ž‹™\‹ÛÛÛ^Y[N™OO™Kœ™]™[Y˜][

K‹‹Ë‹‹’KÛ”XÙYŠ
OO•ŠL
K™YŽ”ËÝ[NžÙ\Ü^Nˆ™›^‹›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆ‹Ý][™Nˆ››Û™H‹‹‹ËœÝ[_KÛ’Ù^QÝÛŽ›Z
Ë›Û’Ù^QÝÛ‹OOžØÛÛœÝOYK˜Ý›Ù^_K˜[Ù^_K›Y]RÙ^NÚYŠ•XˆOOYKšÙ^I‰™Kœ™]™[Y˜][

K_HOOYKšÙ^K›[™ÝJKšÙ^JKÈ\œ›ÝÕ\‹\œ›ÝÑÝÛˆ‹’ÛYH‹‘[™—Kš[˜ÛY\ÊKšÙ^JJ^Û]OSJ
K™š[\ŠOOˆYK™\ØX›Y
K›X\
OO™Kœ™Y‹˜Ý\œ™[
NÚYŠÈ\œ›ÝÕ\‹‘[™—Kš[˜ÛY\ÊKšÙ^JI‰ŠOXKœÛXÙJ
Kœ™]™\œÙJ
JKÈ\œ›ÝÕ\‹\œ›ÝÑÝÛˆ—Kš[˜ÛY\ÊKšÙ^JJ^ØÛÛœÝYK\™Ù]ÏXKš[™^ÙŠ
NØOXKœÛXÙJÊÌJ_\Ù][Y[Ý]


OO”
JJKKœ™]™[Y˜][

__J_J_J_J_J_J_JNÉË™\Ü^S˜[YOH”Ù[XÝÛÛ[[\ŽÝ˜\ˆÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝÛ”XÙY›Ë‹‹›ŸOYKTÊZË
KRšÊZË
KØËWOZJ
K\ÙTÝ]J[
KÛKOZJ
K\ÙTÝ]J[
KPžJKOOœ
JJKOQÊ
KÏZJ
K\ÙT™YŠLJKZJ
K\ÙT™YŠL
KÝšY]ÜÜ˜‹Ù[XÝY][N™‹Ù[XÝY][U^Ë›ØÝ\ÔÙ[XÝY][NŸO[ÏZJ
K\ÙPØ[˜XÚÊ

OOžÚYŠ‹šYÙÙ\‰‰œ‹˜[YS›ÙI‰˜É‰›I‰˜‰‰™‰‰Ê^ØÛÛœÝO\‹šYÙÙ\‹™Ù]›Ý[™[™ÐÛY[™XÝ

KO[K™Ù]›Ý[™[™ÐÛY[™XÝ

K\‹˜[YS›ÙK™Ù]›Ý[™[™ÐÛY[™XÝ

K]Ë™Ù]›Ý[™[™ÐÛY[™XÝ

NÚYŠœˆOO\‹™\Š^ØÛÛœÝÏ[‹›YXK›Y]›Y[ËYK›Y\‹ÏYKÚY
ÛOSX]›X^
ËKÚY
KO]Ú[™ÝËš[›™\•ÚYUZËO]šÊ‹ÕZËX]›X^
ZËKZJWJNØËœÝ[K›Z[•ÚY\ÊÈœ‹ËœÝ[K›Y[JÈœŸY[Ù^ØÛÛœÝÏXKœšYÚ[‹œšYÚ]Ú[™ÝËš[›™\•ÚY]œšYÚ[Ë]Ú[™ÝËš[›™\•ÚYYKœšYÚ\‹ÏYKÚY
ÛOSX]›X^
ËKÚY
KO]Ú[™ÝËš[›™\•ÚYUZËO]šÊ‹ÕZËX]›X^
ZËKZJWJNØËœÝ[K›Z[•ÚY\ÊÈœ‹ËœÝ[KœšYÚ[JÈœŸXÛÛœÝ^J
KÏ]Ú[™ÝËš[›™\’ZYÚLŠ•ZËOX‹œØÜ›ÛZYÚO]Ú[™ÝË™Ù]ÛÛ\]YÝ[JJK\\œÙR[
K˜›Ü™\•ÜÚYL
K\\œÙR[
KœY[™ÕÜL
K\\œÙR[
K˜›Ü™\›ÝÛUÚYL
K\
Ù
ÚJÜ\œÙR[
KœY[™Ð›ÝÛKL
JÚÏSX]›Z[ŠJ™‹›Ù™œÙ]ZYÚŠKÏ]Ú[™ÝË™Ù]ÛÛ\]YÝ[JŠK\\œÙR[
ËœY[™ÕÜL
KÏ\\œÙR[
ËœY[™Ð›ÝÛKL
KÏYKÜ
ÙKšZYÚÌ‹UZË\ËTËOY‹›Ù™œÙ]ZYÚÌ‹\
Ù
Ê‹›Ù™œÙ]Ü
ÐJK]‹QÚYŠTÊ^ØÛÛœÝO[›[™ÝŒ	‰™OO[Û›[™ÝLWKœ™Y‹˜Ý\œ™[ØËœÝ[K˜›ÝÛOHŒŽØÛÛœÝO[K˜ÛY[ZYÚX‹›Ù™œÙ]ÜX‹›Ù™œÙ]ZYÚQ
ÓX]›X^
JÊOÚÎŒ
JØJÚ
NØËœÝ[KšZYÚ]
ÈœŸY[Ù^ØÛÛœÝO[›[™ÝŒ	‰™OO[ÌKœ™Y‹˜Ý\œ™[ØËœÝ[KÜHŒŽØÛÛœÝOSX]›X^
Ë
Ø‹›Ù™œÙ]Ü
ÊOÞŒ
JÐJJÐŽØËœÝ[KšZYÚXJÈœ‹‹œØÜ›ÛÜQTÊØ‹›Ù™œÙ]ÜXËœÝ[K›X\™Ú[X	ÕZß\ËœÝ[K›Z[’ZYÚWÊÈœ‹ËœÝ[K›X^ZYÚ\ÊÈœ‹ÏËŠ
K™\]Y\Ý[š[X][Û‘œ˜[YJ

OO™Ë˜Ý\œ™[HL
__KÞK‹šYÙÙ\‹‹˜[YS›ÙKËK‹‹Ë‹™\‹×JNÞZ


OO—Ê
K××JNØÛÛœÝÐËOZJ
K\ÙTÝ]J
NÞZ


OOžÛI‰ž
Ú[™ÝË™Ù]ÛÛ\]YÝ[JJKž’[™^
_KÛWJNØÛÛœÝÏZJ
K\ÙPØ[˜XÚÊOOžÙI‰ˆLOOZ˜Ý\œ™[	‰ŠÊ
KËŠ
K˜Ý\œ™[HLJ_K×Ë—JNÜ™]\›ŠÊ
KšœÞ
JZËÜØÛÜNÛÛ[Ü˜\\Ž˜ËÚÝ[^[™Û”ØÜ›Û™YŽ™ËÛ”ØÜ›Û]ÛÚ[™ÙNšËÚ[™[ŽŠÊ
KšœÞ
J™]ˆ‹Ü™YŽKÝ[NžÙ\Ü^Nˆ™›^‹›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆ‹ÜÚ][ÛŽˆ™š^Y‹’[™^ßKÚ[™[ŽŠÊ
KšœÞ
Jš™]‹Ë‹‹›‹™YŽ™Ý[NžØ›ÞÚ^š[™Îˆ˜›Ü™\‹X›Þ‹X^ZYÚˆŒL	H‹‹‹›‹œÝ[__J_J_J_JNÖË™\Ü^S˜[YOH”Ù[XÝ][P[YÛ™YÜÚ][ÛˆŽÝ˜\ˆšÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝ[YÛŽ›ÏHœÝ\‹ÛÛ\Ú[Û”Y[™Î›UZË‹‹œŸOYKUšÊ
NÜ™]\›ŠÊ
KšœÞ
J]ËË‹‹›‹‹œ‹™YŽ˜K[YÛŽ›ËÛÛ\Ú[Û”Y[™Î›‹Ý[NžØ›ÞÚ^š[™Îˆ˜›Ü™\‹X›Þ‹‹‹œ‹œÝ[K‹K\˜Y^\Ù[XÝXÛÛ[]˜[œÙ›Ü›K[ÜšYÚ[ˆŽˆ˜\ŠK\˜Y^\Ü\‹]˜[œÙ›Ü›K[ÜšYÚ[ŠH‹‹K\˜Y^\Ù[XÝXÛÛ[X]˜Z[X›K]ÚYŽˆ˜\ŠK\˜Y^\Ü\‹X]˜Z[X›K]ÚY
H‹‹K\˜Y^\Ù[XÝXÛÛ[X]˜Z[X›KZZYÚŽˆ˜\ŠK\˜Y^\Ü\‹X]˜Z[X›KZZYÚ
H‹‹K\˜Y^\Ù[XÝ]šYÙÙ\‹]ÚYŽˆ˜\ŠK\˜Y^\Ü\‹X[˜ÚÜ‹]ÚY
H‹‹K\˜Y^\Ù[XÝ]šYÙÙ\‹ZZYÚŽˆ˜\ŠK\˜Y^\Ü\‹X[˜ÚÜ‹ZZYÚ
HŸ_J_JNÖšË™\Ü^S˜[YOH”Ù[XÝÜ\”ÜÚ][ÛˆŽÝ˜\–ÔZËT×OSZÊZËßJKTÏH”Ù[XÝšY]ÜÜ‹ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝ›Û˜ÙN›Ë‹‹›ŸOYKRšÊTË
KYTÊTË
KÏPžJK‹›Û•šY]ÜÜÚ[™ÙJKOZJ
K\ÙT™YŠ
NÜ™]\›ŠÊ
KšœÞÊJÊ
K‘œ˜YÛY[ØÚ[™[Ž–ÊÊ
KšœÞ
JœÝ[H‹Ù[™Ù\›Ý\ÛTÙ][›™\’Sž××Ú[ˆ–Ù]K\˜Y^\Ù[XÝ]šY]ÜÜ^ÜØÜ›Û˜\‹]ÚY››Û™NË[\Ë[Ý™\™›ÝË\Ý[N››Û™NË]ÙXšÚ][Ý™\™›ÝË\ØÜ›Û[™ÎÝXÚßVÙ]K\˜Y^\Ù[XÝ]šY]ÜÜNŽ‹]ÙXšÚ]\ØÜ›Û˜\žÙ\Ü^N››Û™_HŸK›Û˜ÙN›ßJK
Ê
KšœÞ
JZË”ÛÝÜØÛÜNÚ[™[ŽŠÊ
KšœÞ
Jš™]‹È™]K\˜Y^\Ù[XÝ]šY]ÜÜŽˆˆ‹›ÛNˆœ™\Ù[][Ûˆ‹‹‹›‹™YŽ˜ËÝ[NžÜÜÚ][ÛŽˆœ™[]]™H‹›^ŒKÝ™\™›ÝÎˆšY[ˆ]]È‹‹‹›‹œÝ[_KÛ”ØÜ›Û›Z
‹›Û”ØÜ›ÛOOžØÛÛœÝOYK˜Ý\œ™[\™Ù]ØÛÛ[Ü˜\\ŽÚÝ[^[™Û”ØÜ›Û™YŽ›ßO[ÚYŠÏË˜Ý\œ™[	‰
^ØÛÛœÝOSX]˜XœÊK˜Ý\œ™[XKœØÜ›ÛÜ
NÚYŠOŒ
^ØÛÛœÝÏ]Ú[™ÝËš[›™\’ZYÚLŠ•ZË\\œÙQ›Ø]
œÝ[K›Z[’ZYÚ
K\\œÙQ›Ø]
œÝ[KšZYÚ
KSX]›X^
‹ŠNÚYŠÊ^ØÛÛœÝ[
ÙKSX]›Z[ŠËŠKÏ[‹\ŽÝœÝ[KšZYÚ\ŠÈœ‹ŒOO]œÝ[K˜›ÝÛI‰ŠKœØÜ›ÛÜ\ÏŒÜÎŒœÝ[Kš\ÝYžPÛÛ[H™›^Y[™Š___]K˜Ý\œ™[XKœØÜ›ÛÜJ_J_JW_J_JNÝË™\Ü^S˜[YOXTÎÝ˜\ˆÔÏH”Ù[XÝÜ›Ý\‹Û”Ë”×OSZÊÔÊKÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝ‹‹›ßOYKI

NÜ™]\›ŠÊ
KšœÞ
J”ËÜØÛÜNY›‹Ú[™[ŽŠÊ
KšœÞ
Jš™]‹Ü›ÛNˆ™Ü›Ý\‹˜\šXK[X™[YžHŽ›‹‹‹›Ë™YŽ˜_J_J_JNÛË™\Ü^S˜[YO[ÔÎÝ˜\ˆÔÏH”Ù[XÝX™[‹TÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝ‹‹›ßOYK\”ÊÔË
NÜ™]\›ŠÊ
KšœÞ
Jš™]‹ÚY›‹šY‹‹›Ë™YŽ˜_J_JNÚTË™\Ü^S˜[YO\ÔÎÝ˜\ˆÔÏH”Ù[XÝ][H‹ÝTËT×OSZÊÔÊKÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝ˜[YN›Ë\ØX›Y›HLK^˜[YNœ‹‹‹›OYKÏTÊÔË
KORšÊÔË
KOXË˜[YOOO[ËÜOZJ
K\ÙTÝ]JÏÈˆŠKÞK×OZJ
K\ÙTÝ]JLJKPžJKOOKš][T™YØ[˜XÚÏËŠKËŠJKI

KZJ
K\ÙT™YŠÝXÚŠKÏJ
OOžÛŸ
Ë›Û•˜[YPÚ[™ÙJÊKË›Û“Ü[Ú[™ÙJLJJ_NÚYŠˆOO[Ê]›ÝÈ™]È\œ›ÜŠHÙ[XÝ’][HÏˆ]\Ý]™HH˜[YH›Ü]\È›Ý[ˆ[\HÝš[™Ëˆ\È\È™XØ]\ÙHHÙ[XÝ˜[YHØ[ˆ™HÙ]È[ˆ[\HÝš[™ÈÈÛX\ˆHÙ[XÝ[Ûˆ[™ÚÝÈHXÙZÛ\‹ˆŠNÜ™]\›ŠÊ
KšœÞ
JTËÜØÛÜN˜[YN›Ë\ØX›Y›‹^Y˜‹\ÔÙ[XÝY›KÛ’][U^Ú[™ÙNšJ
K\ÙPØ[˜XÚÊOOžÙ
OO˜_
OË^ÛÛ[ÏÈˆŠKš[J
J_K×JKÚ[™[ŽŠÊ
KšœÞ
JZË’][TÛÝÜØÛÜN˜[YN›Ë\ØX›Y›‹^˜[YNœÚ[™[ŽŠÊ
KšœÞ
Jš™]‹Ü›ÛNˆ›Ü[Ûˆ‹˜\šXK[X™[YžHŽ˜‹™]KZYÚYÚYŽžOÈˆŽ›ÚY˜\šXK\Ù[XÝYŽ›I‰žK™]K\Ý]HŽ›OÈ˜ÚXÚÙYŽˆ[˜ÚXÚÙY‹˜\šXKY\ØX›YŽ›Ÿ›ÚY™]KY\ØX›YŽ›ÈˆŽ›ÚYX’[™^›Ý›ÚY‹LK‹‹›™YŽšÛ‘›ØÝ\Î›Z
›Û‘›ØÝ\Ë

OO™ÊL
JKÛ›\Ž›Z
›Û›\‹

OO™ÊLJJKÛÛXÚÎ›Z
›ÛÛXÚË

OOžÈ›[Ý\ÙHˆOOY‹˜Ý\œ™[	‰Ê
_JKÛ”Ú[\•\›Z
›Û”Ú[\•\

OOžÈ›[Ý\ÙHOOY‹˜Ý\œ™[	‰Ê
_JKÛ”Ú[\‘ÝÛŽ›Z
›Û”Ú[\‘ÝÛ‹OOžÙ‹˜Ý\œ™[YKœÚ[\•\_JKÛ”Ú[\“[Ý™N›Z
›Û”Ú[\“[Ý™KOOžÙ‹˜Ý\œ™[YKœÚ[\•\KÝK›Û’][SX]™OËŠ
Nˆ›[Ý\ÙHOOY‹˜Ý\œ™[	‰™K˜Ý\œ™[\™Ù]™›ØÝ\ÊÜ™]™[ØÜ›ÛˆLJ_JKÛ”Ú[\“X]™N›Z
›Û”Ú[\“X]™KOOžÙK˜Ý\œ™[\™Ù]OOYØÝ[Y[˜XÝ]™Q[[Y[	‰K›Û’][SX]™OËŠ
_JKÛ’Ù^QÝÛŽ›Z
›Û’Ù^QÝÛ‹OOžÈˆˆOO]KœÙX\˜Ú™YË˜Ý\œ™[	‰ˆˆOOYKšÙ^_
ÚËš[˜ÛY\ÊKšÙ^JI‰Ê
KˆOOYKšÙ^I‰™Kœ™]™[Y˜][

J_J_J_J_J_JNÜË™\Ü^S˜[YOXÔÎÝ˜\ˆÏH”Ù[XÝ][U^‹TÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝÛ\ÜÓ˜[YN›ËÝ[Nœ‹‹‹›OYKÏTÊË
KORšÊË
KO[TÊË
KQÚÊË
KÙWOZJ
K\ÙTÝ]J[
KÏPžJKOOžJJKK›Û’][U^Ú[™ÙKOOKš][U^™YØ[˜XÚÏËŠKK˜[YKK™\ØX›Y
JKYË^ÛÛ[ZJ
K\ÙSY[[Ê

OOŠÊ
KšœÞ
J›Ü[Ûˆ‹Ý˜[YN›K˜[YK\ØX›Y›K™\ØX›YÚ[™[ŽšKK˜[YJKÛK™\ØX›YK˜[YKJKÛÛ“˜]]™SÜ[ÛY™‹Û“˜]]™SÜ[Û”™[[Ý™NßO\Ü™]\›ˆZ


OOŠŠŠK

OOÊŠJKÙ‹Ë—JK
Ê
KšœÞÊJÊ
K‘œ˜YÛY[ØÚ[™[Ž–ÊÊ
KšœÞ
JšœÜ[‹ÚY›K^Y‹‹›™YŽ™ßJKKš\ÔÙ[XÝY	‰˜Ë˜[YS›ÙI‰ˆXË˜[YS›ÙR\ÐÚ[™[ÛŠ
K˜Ü™X]TÜ[
˜Ú[™[‹Ë˜[YS›ÙJN›[_J_JNÞTË™\Ü^S˜[YOYÎÝ˜\ˆÔÏH”Ù[XÝ][R[™XØ]Üˆ‹ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝ‹‹›ßOYNÜ™]\›ˆTÊÔË
Kš\ÔÙ[XÝYÊÊ
KšœÞ
JšœÜ[‹È˜\šXKZY[ˆŽˆL‹‹›Ë™YŽ˜_JN›[JNÚË™\Ü^S˜[YOYÔÎÝ˜\ˆ”ÏH”Ù[XÝØÜ›Û\]Ûˆ‹”ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝRšÊ”ËK—×ÜØÛÜTÙ[XÝ
KÏYTÊ”ËK—×ÜØÛÜTÙ[XÝ
KÛ‹—OZJ
K\ÙTÝ]JLJKPžJKË›Û”ØÜ›Û]ÛÚ[™ÙJNÜ™]\›ˆZ


OOžÚYŠšY]ÜÜ	‰š\ÔÜÚ][Û™Y
^Û]OY[˜Ý[ÛŠ
^ØÛÛœÝOXKœØÜ›ÛÜŒÜŠJ_NØÛÛœÝO]šY]ÜÜÜ™]\›ˆJ
KK˜Y]™[\Ý[™\ŠœØÜ›Û‹JK

OO˜Kœ™[[Ý™Q]™[\Ý[™\ŠœØÜ›Û‹J__KÝšY]ÜÜš\ÔÜÚ][Û™YJKÊÊ
KšœÞ
JÔËË‹‹™K™YŽ›Û]]ÔØÜ›ÛŠ
OOžØÛÛœÝÝšY]ÜÜ™KÙ[XÝY][N˜_O]ÙI‰˜I‰ŠKœØÜ›ÛÜYKœØÜ›ÛÜXK›Ù™œÙ]ZYÚ
__JN›[JNÙ”Ë™\Ü^S˜[YOX”ÎÝ˜\ˆÔÏH”Ù[XÝØÜ›ÛÝÛ]Ûˆ‹”ÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝRšÊÔËK—×ÜØÛÜTÙ[XÝ
KÏYTÊÔËK—×ÜØÛÜTÙ[XÝ
KÛ‹—OZJ
K\ÙTÝ]JLJKPžJKË›Û”ØÜ›Û]ÛÚ[™ÙJNÜ™]\›ˆZ


OOžÚYŠšY]ÜÜ	‰š\ÔÜÚ][Û™Y
^Û]OY[˜Ý[ÛŠ
^ØÛÛœÝOXKœØÜ›ÛZYÚXK˜ÛY[ZYÚSX]˜ÙZ[
KœØÜ›ÛÜ
ONÜŠ
_NØÛÛœÝO]šY]ÜÜÜ™]\›ˆJ
KK˜Y]™[\Ý[™\ŠœØÜ›Û‹JK

OO˜Kœ™[[Ý™Q]™[\Ý[™\ŠœØÜ›Û‹J__KÝšY]ÜÜš\ÔÜÚ][Û™YJKÊÊ
KšœÞ
JÔËË‹‹™K™YŽ›Û]]ÔØÜ›ÛŠ
OOžØÛÛœÝÝšY]ÜÜ™KÙ[XÝY][N˜_O]ÙI‰˜I‰ŠKœØÜ›ÛÜYKœØÜ›ÛÜ
ØK›Ù™œÙ]ZYÚ
__JN›[JNÝ”Ë™\Ü^S˜[YO]ÔÎÝ˜\ˆÔÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝÛ]]ÔØÜ›Û›Ë‹‹›ŸOYKRšÊ”Ù[XÝØÜ›Û]Ûˆ‹
KZJ
K\ÙT™YŠ[
KÏQÊ
KOZJ
K\ÙPØ[˜XÚÊ

OOžÛ[OO[˜Ý\œ™[	‰ŠÚ[™ÝË˜ÛX\’[\˜[
˜Ý\œ™[
K˜Ý\œ™[[[
_K×JNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOŠ
OOJ
KÝWJKZ


OOžØÛÛœÝOXÊ
K™š[™
OO™Kœ™Y‹˜Ý\œ™[OOYØÝ[Y[˜XÝ]™Q[[Y[
NÙOËœ™Y‹˜Ý\œ™[ËœØÜ›Û[ÕšY]ÊØ›ØÚÎˆ›™X\™\ÝŸJ_KØ×JK
Ê
KšœÞ
Jš™]‹È˜\šXKZY[ˆŽˆL‹‹›‹™YŽ˜KÝ[NžÙ›^Úš[šÎŒ‹‹›‹œÝ[_KÛ”Ú[\‘ÝÛŽ›Z
‹›Û”Ú[\‘ÝÛ‹

OOžÛ[OO[˜Ý\œ™[	‰Š˜Ý\œ™[]Ú[™ÝËœÙ][\˜[
ËL
J_JKÛ”Ú[\“[Ý™N›Z
‹›Û”Ú[\“[Ý™K

OOžÜ‹›Û’][SX]™OËŠ
K[OO[˜Ý\œ™[	‰Š˜Ý\œ™[]Ú[™ÝËœÙ][\˜[
ËL
J_JKÛ”Ú[\“X]™N›Z
‹›Û”Ú[\“X]™K

OOžÝJ
_J_J_JKÔÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝ‹‹›ßOYNÜ™]\›ŠÊ
KšœÞ
Jš™]‹È˜\šXKZY[ˆŽˆL‹‹›Ë™YŽ˜_J_JNÐÔË™\Ü^S˜[YOH”Ù[XÝÙ\\˜]ÜˆŽÝ˜\ˆÏH”Ù[XÝ\œ›ÝÈ‹ÔÏZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÙ[XÝ‹‹›ßOYKUšÊ
KTÊË
KRšÊË
NÜ™]\›ˆ‹›Ü[‰‰ˆœÜ\ˆOO[œÜÚ][ÛÊÊ
KšœÞ
JËË‹‹›‹‹‹›Ë™YŽ˜_JN›[JNÚÔË™\Ü^S˜[YO^ÎÝ˜\ˆÔÏZJ
K™›ÜØ\™™YŠ
××ÜØÛÜTÙ[XÝ™K˜[YN˜K‹‹KÊOOžØÛÛœÝZJ
K\ÙT™YŠ[
KPžJËŠKWÚÊJNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝO[‹˜Ý\œ™[ÚYŠYJ\™]\›ŽØÛÛœÝ]Ú[™ÝË’SÙ[XÝ[[Y[œ›ÝÝ\KÏSØš™XÝ™Ù]ÝÛ”›Ü\Q\ØÜš\ÜŠ˜[YHŠKœÙ]ÚYŠOOXI‰›Ê^ØÛÛœÝ[™]È]™[
˜Ú[™ÙH‹ØX˜›\ÎˆLJNÛË˜Ø[
KJKK™\Ü]Ú]™[

__KÛWJK
Ê
KšœÞ
JšœÙ[XÝË‹‹Ý[NžË‹‹ÚË‹‹œÝ[_K™YŽœ‹Y˜][˜[YN˜_J_JNÙ[˜Ý[ÛˆÊJ^Ü™]\›ˆˆOOY_›ÚYOOY_Y[˜Ý[ÛˆTÊJ^ØÛÛœÝOTÚ
JKZJ
K\ÙT™YŠˆŠKÏZJ
K\ÙT™YŠ
KZJ
K\ÙPØ[˜XÚÊOOžØÛÛœÝ]˜Ý\œ™[
ÙNØJŠK[˜Ý[ÛˆJJ^Ý˜Ý\œ™[XKÚ[™ÝË˜ÛX\•[Y[Ý]
Ë˜Ý\œ™[
KˆˆOOXI‰ŠË˜Ý\œ™[]Ú[™ÝËœÙ][Y[Ý]


OO™JˆŠKYLÊJ_JŠ_KØWJKZJ
K\ÙPØ[˜XÚÊ

OOžÝ˜Ý\œ™[Hˆ‹Ú[™ÝË˜ÛX\•[Y[Ý]
Ë˜Ý\œ™[
_K×JNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOŠ
OOÚ[™ÝË˜ÛX\•[Y[Ý]
Ë˜Ý\œ™[
K×JKÝ‹—_Y[˜Ý[ÛˆÊKK
^ØÛÛœÝÏXK›[™ÝŒI‰\œ˜^K™œ›ÛJJK™]™\žJOO™OOOXVÌJOØVÌN˜K]ÙKš[™^ÙŠ
N‹LNÛ]JYKÏSX]›X^
‹
K›X\

KJOO›ÊÊØJI[›[™ÝJJNÝ˜\ˆÎÌOOO[Ë›[™Ý	‰Š\‹™š[\ŠOO™HOO]
JNØÛÛœÝO\‹™š[™
OO™K^˜[YKÓÝÙ\Ø\ÙJ
KœÝ\ÕÚ]
ËÓÝÙ\Ø\ÙJ
JJNÜ™]\›ˆHOO]ÚN›ÚYTÔË™\Ü^S˜[YOH”Ù[XÝX˜›R[œ]ŽÝ˜\ˆ”ÏUÚËTÏQZËÏSšË”ÏRÚË”ÏZšËÏ^šË”Ï]ËÔÏZTËÔÏ\ËÔÏ^TËTÏZËÏY”Ë”Ï]”ËÔÏPÔÎØÛÛœÝ”ÏUY
˜Ú]œ›Û‹]\‹ÖÈœ]‹Ùˆ›LNMKM‹M‹Mˆˆ‹Ù^NˆŒMLÝYˆŸWWJKTÏP”Ë”ÏUËTÏZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™KÚ[™[Ž˜K‹‹KÊOOŠÊ
KšœÞÊJTËÜ™YŽ›ËÛ\ÜÓ˜[YNœYÊ™›^NHËY[][\ËXÙ[\ˆ\ÝYžKX™]ÙY[ˆÚ]\ÜXÙK[›ÝÜ˜\›Ý[™Y[Y›Ü™\ˆ›Ü™\‹Z[œ]™Ë]˜[œÜ\™[LÈKLˆ^\ÛHÚYÝË\ÛHš[™Ë[Ù™œÙ]X˜XÚÙÜ›Ý[™]KVÜXÙZÛ\—N^[]]YY›Ü™YÜ›Ý[™›ØÝ\Î›Ý][™K[›Û™H›ØÝ\Îœš[™ËLH›ØÝ\Îœš[™Ë\š[™È\ØX›Y˜Ý\œÛÜ‹[›ÝX[ÝÙY\ØX›Y›ÜXÚ]KMLÉœÜ[—N›[™KXÛ[\LH‹JK‹‹Ú[™[Ž–ØK
Ê
KšœÞ
J”ËØ\ÐÚ[ˆLÚ[™[ŽŠÊ
KšœÞ
JZØÛ\ÜÓ˜[YNˆšMËMÜXÚ]KMLŸJ_JW_JJNÕTË™\Ü^S˜[YOSTË™\Ü^S˜[YNØÛÛœÝTÏZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JËÜ™YŽÛ\ÜÓ˜[YNœYÊ™›^Ý\œÛÜ‹YY˜][][\ËXÙ[\ˆ\ÝYžKXÙ[\ˆKLH‹JK‹‹˜KÚ[™[ŽŠÊ
KšœÞ
J”ËØÛ\ÜÓ˜[YNˆšMËMŸJ_JJNÜTË™\Ü^S˜[YORË™\Ü^S˜[YNØÛÛœÝ”ÏZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
J”ËÜ™YŽÛ\ÜÓ˜[YNœYÊ™›^Ý\œÛÜ‹YY˜][][\ËXÙ[\ˆ\ÝYžKXÙ[\ˆKLH‹JK‹‹˜KÚ[™[ŽŠÊ
KšœÞ
JZØÛ\ÜÓ˜[YNˆšMËMŸJ_JJNÒ”Ë™\Ü^S˜[YOS”Ë™\Ü^S˜[YNØÛÛœÝTÏZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™KÚ[™[Ž˜KÜÚ][ÛŽHœÜ\ˆ‹‹‹›ßKŠOOŠÊ
KšœÞ
J”ËØÚ[™[ŽŠÊ
KšœÞÊJËÜ™YŽ›‹Û\ÜÓ˜[YNœYÊœ™[]]™H‹MLX^ZVËK\˜Y^\Ù[XÝXÛÛ[X]˜Z[X›KZZYÚHZ[‹]ËVÎ™[WHÝ™\™›ÝË^KX]]ÈÝ™\™›ÝË^ZY[ˆ›Ý[™Y[Y›Ü™\ˆ™Ë\ÜÝ™\ˆ^\ÜÝ™\‹Y›Ü™YÜ›Ý[™ÚYÝË[Y]KVÜÝ]O[Ü[—N˜[š[X]KZ[ˆ]KVÜÝ]OXÛÜÙYN˜[š[X]K[Ý]]KVÜÝ]OXÛÜÙYN™˜YK[Ý]L]KVÜÝ]O[Ü[—N™˜YKZ[‹L]KVÜÝ]OXÛÜÙYNž›ÛÛK[Ý]NMH]KVÜÝ]O[Ü[—Nž›ÛÛKZ[‹NMH]KVÜÚYOX›ÝÛWNœÛYKZ[‹Yœ›ÛK]ÜLˆ]KVÜÚYO[YNœÛYKZ[‹Yœ›ÛK\šYÚLˆ]KVÜÚYO\šYÚNœÛYKZ[‹Yœ›ÛK[YLˆ]KVÜÚYO]ÜNœÛYKZ[‹Yœ›ÛKX›ÝÛKLˆÜšYÚ[‹VËK\˜Y^\Ù[XÝXÛÛ[]˜[œÙ›Ü›K[ÜšYÚ[—H‹œÜ\ˆOO]	‰ˆ™]KVÜÚYOX›ÝÛWN˜[œÛ]K^KLH]KVÜÚYO[YN‹]˜[œÛ]K^LH]KVÜÚYO\šYÚN˜[œÛ]K^LH]KVÜÚYO]ÜN‹]˜[œÛ]K^KLH‹JKÜÚ][ÛŽ‹‹›ËÚ[™[Ž–ÊÊ
KšœÞ
JTËßJK
Ê
KšœÞ
J”ËØÛ\ÜÓ˜[YNœYÊœLH‹œÜ\ˆOO]	‰ˆšVÝ˜\ŠK\˜Y^\Ù[XÝ]šYÙÙ\‹ZZYÚ
WHËY[Z[‹]ËVÝ˜\ŠK\˜Y^\Ù[XÝ]šYÙÙ\‹]ÚY
WHŠKÚ[™[Ž˜_JK
Ê
KšœÞ
J”ËßJW_J_JJNÖTË™\Ü^S˜[YOTË™\Ü^S˜[YNÚJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JÔËÜ™YŽÛ\ÜÓ˜[YNœYÊœLˆKLKH^\ÛH›Û\Ù[ZX›Û‹JK‹‹˜_JJK™\Ü^S˜[YOQÔË™\Ü^S˜[YNØÛÛœÝ	ÏZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™KÚ[™[Ž˜K‹‹KÊOOŠÊ
KšœÞÊJÔËÜ™YŽ›ËÛ\ÜÓ˜[YNœYÊœ™[]]™H›^ËY[Ý\œÛÜ‹YY˜][Ù[XÝ[›Û™H][\ËXÙ[\ˆ›Ý[™Y\ÛHKLKHLˆ‹N^\ÛHÝ][™K[›Û™H›ØÝ\Î˜™ËXXØÙ[›ØÝ\Î^XXØÙ[Y›Ü™YÜ›Ý[™]KVÙ\ØX›YNœÚ[\‹Y]™[Ë[›Û™H]KVÙ\ØX›YN›ÜXÚ]KML‹JK‹‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜XœÛÛ]HšYÚLˆ›^LËHËLËH][\ËXÙ[\ˆ\ÝYžKXÙ[\ˆ‹Ú[™[ŽŠÊ
KšœÞ
JTËØÚ[™[ŽŠÊ
KšœÞ
JKØÛ\ÜÓ˜[YNˆšMËMŸJ_J_JK
Ê
KšœÞ
JÔËØÚ[™[Ž˜_JW_JJNÉË™\Ü^S˜[YOUÔË™\Ü^S˜[YNÚJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JÔËÜ™YŽÛ\ÜÓ˜[YNœYÊ‹[^LH^KLH\™Ë[]]Y‹JK‹‹˜_JJK™\Ü^S˜[YORÔË™\Ü^S˜[YNÝ˜\ˆÏH”ÜÝ™\ˆ‹Ö”ËT×O\
ËÕÙ—JKSUÙŠ
KØSOV”ÊÊKÓYOOžØÛÛœÝ××ÜØÛÜTÜÝ™\Ž˜KÚ[™[ŽÜ[Ž›ËY˜][Ü[Ž›‹Û“Ü[Ú[™ÙNœ‹[Ù[›HL_OYKÏYS
JKOZJ
K\ÙT™YŠ[
KÛKOZJ
K\ÙTÝ]JLJKÙWOZ
Ü›Ü›ËY˜][›Ü›ÏÈLKÛÚ[™ÙNœ‹Ø[\Ž–ßJNÜ™]\›ŠÊ
KšœÞ
JY‹Ë‹‹˜ËÚ[™[ŽŠÊ
KšœÞ
JSÜØÛÜN˜KÛÛ[Y‰

KšYÙÙ\”™YŽKÜ[Ž™Û“Ü[Ú[™ÙNžKÛ“Ü[•ÙÙÛNšJ
K\ÙPØ[˜XÚÊ

OOžJOOˆYJKÞWJK\ÐÝ\ÝÛP[˜ÚÜŽ›KÛÝ\ÝÛP[˜ÚÜYšJ
K\ÙPØ[˜XÚÊ

OOœ
L
K×JKÛÝ\ÝÛP[˜ÚÜ”™[[Ý™NšJ
K\ÙPØ[˜XÚÊ

OOœ
LJK×JK[Ù[›Ú[™[ŽJ_J_NÛÓ™\Ü^S˜[YOVÎÝ˜\ˆ“H”ÜÝ™\[˜ÚÜˆ‹“ZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÜÝ™\Ž‹‹›ßOYK]
“
KYS

KÛÛÝ\ÝÛP[˜ÚÜY›ÛÝ\ÝÛP[˜ÚÜ”™[[Ý™N˜ßO[ŽÜ™]\›ˆJ
K\ÙQY™™XÝ


OOŠ

K

OO˜Ê
JKÛ×JK
Ê
KšœÞ
J]ËË‹‹œ‹‹‹›Ë™YŽ˜_J_JNÜ“™\Ü^S˜[YO[“Ý˜\ˆH”ÜÝ™\•šYÙÙ\ˆ‹ÓZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÜÝ™\Ž‹‹›ßOYK]

KYS

KPžJK‹šYÙÙ\”™YŠKOJÊ
KšœÞ
Jš˜]Û‹Ý\Nˆ˜]Ûˆ‹˜\šXKZ\ÜÜ\Žˆ™X[ÙÈ‹˜\šXKY^[™YŽ›‹›Ü[‹˜\šXKXÛÛ›ÛÈŽ›‹˜ÛÛ[Y™]K\Ý]HŽ—Ó
‹›Ü[ŠK‹‹›Ë™YŽ›ÛÛXÚÎ›Z
K›ÛÛXÚË‹›Û“Ü[•ÙÙÛJ_JNÜ™]\›ˆ‹š\ÐÝ\ÝÛP[˜ÚÜÚNŠÊ
KšœÞ
J]ËØ\ÐÚ[ˆL‹‹œ‹Ú[™[Žš_J_JNÜÓ™\Ü^S˜[YO[Ý˜\ˆSH”ÜÝ™\”Ü[‹ØÓSOV”ÊSÙ›Ü˜ÙS[Ý[›ÚYJKSYOOžØÛÛœÝ××ÜØÛÜTÜÝ™\Ž˜K›Ü˜ÙS[Ý[Ú[™[Ž›ËÛÛZ[™\Ž›ŸOYK]
SJNÜ™]\›ŠÊ
KšœÞ
JÓÜØÛÜN˜K›Ü˜ÙS[Ý[Ú[™[ŽŠÊ
KšœÞ
JËÜ™\Ù[‹›Ü[‹Ú[™[ŽŠÊ
KšœÞ
JÝËØ\ÐÚ[ˆLÛÛZ[™\Ž›‹Ú[™[Ž›ßJ_J_J_NÛS™\Ü^S˜[YOZSÝ˜\ˆH”ÜÝ™\ÛÛ[‹ZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ]S
K—×ÜØÛÜTÜÝ™\ŠKÙ›Ü˜ÙS[Ý[›Ï]™›Ü˜ÙS[Ý[‹‹›ŸOYK]
K—×ÜØÛÜTÜÝ™\ŠNÜ™]\›ŠÊ
KšœÞ
JËÜ™\Ù[›ß‹›Ü[‹Ú[™[Žœ‹›[Ù[ÊÊ
KšœÞ
JÓË‹‹›‹™YŽ˜_JNŠÊ
KšœÞ
JË‹‹›‹™YŽ˜_J_J_JNÙ™\Ü^S˜[YO\Ý˜\ˆSS^J”ÜÝ™\ÛÛ[”™[[Ý™TØÜ›ÛŠKÓZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ]
K—×ÜØÛÜTÜÝ™\ŠKÏZJ
K\ÙT™YŠ[
KPžJKÊKZJ
K\ÙT™YŠLJNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝO[Ë˜Ý\œ™[ÚYŠJ\™]\›ˆÊJ_K×JK
Ê
KšœÞ
JÝ‹Ø\ÎžS[ÝÔ[˜Ú›ÛÛNˆLÚ[™[ŽŠÊ
KšœÞ
J“Ë‹‹™K™YŽ›‹˜\›ØÝ\Î›Ü[‹\ØX›SÝ]ÚYTÚ[\‘]™[ÎˆLÛÛÜÙP]]Ñ›ØÝ\Î›Z
K›ÛÛÜÙP]]Ñ›ØÝ\ËOOžÙKœ™]™[Y˜][

K‹˜Ý\œ™[šYÙÙ\”™Y‹˜Ý\œ™[Ë™›ØÝ\Ê
_JKÛ”Ú[\‘ÝÛ“Ý]ÚYN›Z
K›Û”Ú[\‘ÝÛ“Ý]ÚYKOOžØÛÛœÝOYK™]Z[›ÜšYÚ[˜[]™[LOOXK˜]Û‰‰ˆLOOXK˜Ý›Ù^KÏLOOXK˜]ÛŸÜ‹˜Ý\œ™[[ßKØÚXÚÑ›Ü‘Y˜][™]™[YˆL_JKÛ‘›ØÝ\ÓÝ]ÚYN›Z
K›Û‘›ØÝ\ÓÝ]ÚYKOO™Kœ™]™[Y˜][

KØÚXÚÑ›Ü‘Y˜][™]™[YˆL_J_J_J_JKZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ]
K—×ÜØÛÜTÜÝ™\ŠKÏZJ
K\ÙT™YŠLJKZJ
K\ÙT™YŠLJNÜ™]\›ŠÊ
KšœÞ
J“Ë‹‹™K™YŽ˜K˜\›ØÝ\ÎˆLK\ØX›SÝ]ÚYTÚ[\‘]™[ÎˆLKÛÛÜÙP]]Ñ›ØÝ\Î˜OOžÙK›ÛÛÜÙP]]Ñ›ØÝ\ÏËŠJKK™Y˜][™]™[Y
Ë˜Ý\œ™[šYÙÙ\”™Y‹˜Ý\œ™[Ë™›ØÝ\Ê
KKœ™]™[Y˜][

JKË˜Ý\œ™[HLK‹˜Ý\œ™[HL_KÛ’[\˜XÝÝ]ÚYN˜OOžÙK›Û’[\˜XÝÝ]ÚYOËŠJKK™Y˜][™]™[Y
Ë˜Ý\œ™[HLœÚ[\™ÝÛˆOOXK™]Z[›ÜšYÚ[˜[]™[\I‰Š‹˜Ý\œ™[HL
JNØÛÛœÝXK\™Ù]]šYÙÙ\”™Y‹˜Ý\œ™[Ë˜ÛÛZ[œÊŠNÛ	‰˜Kœ™]™[Y˜][

K™›ØÝ\Ú[ˆOOXK™]Z[›ÜšYÚ[˜[]™[\I‰›‹˜Ý\œ™[	‰˜Kœ™]™[Y˜][

__J_JK“ZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÜÝ™\Ž˜\›ØÝ\Î›ËÛ“Ü[]]Ñ›ØÝ\Î›‹ÛÛÜÙP]]Ñ›ØÝ\Îœ‹\ØX›SÝ]ÚYTÚ[\‘]™[Î›Û‘\ØØ\RÙ^QÝÛŽšKÛ”Ú[\‘ÝÛ“Ý]ÚYN˜ËÛ‘›ØÝ\ÓÝ]ÚYNKÛ’[\˜XÝÝ]ÚYN›K‹‹œOYK]

KOYS

NÜ™]\›ˆÚ

K
Ê
KšœÞ
JšØ\ÐÚ[ˆLÛÜˆL˜\Y›ËÛ“[Ý[]]Ñ›ØÝ\Î›‹Û•[›[Ý[]]Ñ›ØÝ\Îœ‹Ú[™[ŽŠÊ
KšœÞ
JØ\ÐÚ[ˆL\ØX›SÝ]ÚYTÚ[\‘]™[Î›Û’[\˜XÝÝ]ÚYN›KÛ‘\ØØ\RÙ^QÝÛŽšKÛ”Ú[\‘ÝÛ“Ý]ÚYN˜ËÛ‘›ØÝ\ÓÝ]ÚYNKÛ‘\ÛZ\ÜÎŠ
OO™›Û“Ü[Ú[™ÙJLJKÚ[™[ŽŠÊ
KšœÞ
J]ËÈ™]K\Ý]HŽ—Ó
›Ü[ŠK›ÛNˆ™X[ÙÈ‹Y™˜ÛÛ[Y‹‹žK‹‹œ™YŽ˜KÝ[NžË‹‹œœÝ[K‹K\˜Y^\ÜÝ™\‹XÛÛ[]˜[œÙ›Ü›K[ÜšYÚ[ˆŽˆ˜\ŠK\˜Y^\Ü\‹]˜[œÙ›Ü›K[ÜšYÚ[ŠH‹‹K\˜Y^\ÜÝ™\‹XÛÛ[X]˜Z[X›K]ÚYŽˆ˜\ŠK\˜Y^\Ü\‹X]˜Z[X›K]ÚY
H‹‹K\˜Y^\ÜÝ™\‹XÛÛ[X]˜Z[X›KZZYÚŽˆ˜\ŠK\˜Y^\Ü\‹X]˜Z[X›KZZYÚ
H‹‹K\˜Y^\ÜÝ™\‹]šYÙÙ\‹]ÚYŽˆ˜\ŠK\˜Y^\Ü\‹X[˜ÚÜ‹]ÚY
H‹‹K\˜Y^\ÜÝ™\‹]šYÙÙ\‹ZZYÚŽˆ˜\ŠK\˜Y^\Ü\‹X[˜ÚÜ‹ZZYÚ
HŸ_J_J_J_JK“H”ÜÝ™\ÛÜÙH‹ÓZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÜÝ™\Ž‹‹›ßOYK]
“
NÜ™]\›ŠÊ
KšœÞ
Jš˜]Û‹Ý\Nˆ˜]Ûˆ‹‹‹›Ë™YŽ˜KÛÛXÚÎ›Z
K›ÛÛXÚË

OO›‹›Û“Ü[Ú[™ÙJLJJ_J_JNÝÓ™\Ü^S˜[YOY“Ý˜\ˆ“ZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜTÜÝ™\Ž‹‹›ßOYKYS

NÜ™]\›ŠÊ
KšœÞ
JËË‹‹›‹‹‹›Ë™YŽ˜_J_JNÙ[˜Ý[ÛˆÓ
J^Ü™]\›ˆOÈ›Ü[ˆŽˆ˜ÛÜÙYŸ]“™\Ü^S˜[YOH”ÜÝ™\\œ›ÝÈŽÝ˜\ˆÓ[SYØÛÛœÝÓ[ÓÓ\ÓZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K[YÛŽ˜OH˜Ù[\ˆ‹ÚYSÙ™œÙ]M‹‹›ßKŠOOŠÊ
KšœÞ
JÓØÚ[™[ŽŠÊ
KšœÞ
JÜ™YŽ›‹[YÛŽ˜KÚYSÙ™œÙ]Û\ÜÓ˜[YNœYÊž‹MLËMÌˆ›Ý[™Y[Y›Ü™\ˆ™Ë\ÜÝ™\ˆM^\ÜÝ™\‹Y›Ü™YÜ›Ý[™ÚYÝË[YÝ][™K[›Û™H]KVÜÝ]O[Ü[—N˜[š[X]KZ[ˆ]KVÜÝ]OXÛÜÙYN˜[š[X]K[Ý]]KVÜÝ]OXÛÜÙYN™˜YK[Ý]L]KVÜÝ]O[Ü[—N™˜YKZ[‹L]KVÜÝ]OXÛÜÙYNž›ÛÛK[Ý]NMH]KVÜÝ]O[Ü[—Nž›ÛÛKZ[‹NMH]KVÜÚYOX›ÝÛWNœÛYKZ[‹Yœ›ÛK]ÜLˆ]KVÜÚYO[YNœÛYKZ[‹Yœ›ÛK\šYÚLˆ]KVÜÚYO\šYÚNœÛYKZ[‹Yœ›ÛK[YLˆ]KVÜÚYO]ÜNœÛYKZ[‹Yœ›ÛKX›ÝÛKLˆÜšYÚ[‹VËK\˜Y^\ÜÝ™\‹XÛÛ[]˜[œÙ›Ü›K[ÜšYÚ[—H‹JK‹‹›ßJ_JJNÓ™\Ü^S˜[YO^™\Ü^S˜[YNÝ˜\ˆSKŽNNKKÖ××ÊËˆÈ×
É—KË“KÖ××ÊËˆÈ×
É—KÙËSKÖ×ËWKËKÖ×ËWKÙÎÙ[˜Ý[Ûˆ“
KKË‹‹
^ÚYŠOOXK›[™Ý
\™]\›ˆOOYK›[™ÝÌN‹ŽNNÝ˜\ˆÏX	ÛŸK	ÜŸXÚYŠ›ÚYOO[Ü×J\™]\›ˆÜ×NÙ›ÜŠ˜\ˆKËKK[Ë˜Ú\]
ŠK]š[™^ÙŠŠKOLÙLÊJOU“
KKË
ÌKŠÌK
JOžI‰ŠOO[ÚJLN‘\Ý
K˜Ú\]
LJJOÊJKŽ
OYKœÛXÙJ‹LJK›X]Ú
“
JI‰›Œ	‰ŠJSX]œÝÊSK›[™Ý
JJN“S\Ý
K˜Ú\]
LJJOÊJKŽK
OYKœÛXÙJ‹LJK›X]Ú

JI‰›Œ	‰ŠJSX]œÝÊSK›[™Ý
JJNŠJKŒMËŒ	‰ŠJSX]œÝÊS[ŠJJKK˜Ú\]

HOOXK˜Ú\]
ŠI‰ŠJKŽNNNJJK
OŒI‰˜Ú\]
LJOOO[Ë˜Ú\]
ŠÌJ_Ë˜Ú\]
ŠÌJOOO[Ë˜Ú\]
ŠI‰˜Ú\]
LJHOO[Ë˜Ú\]
ŠJI‰ŠŒJŠÏU“
KKË
ÌKŠÌ‹
JOšI‰ŠOKŒJ˜ÊJKOžI‰ŠOZJK]š[™^ÙŠ
ÌJNÜ™]\›ˆÜ×O^K_Y[˜Ý[Ûˆ“
J^Ü™]\›ˆKÓÝÙ\Ø\ÙJ
Kœ™\XÙJˆŠ_Y[˜Ý[Ûˆ
KK
^Ü™]\›ˆ“
O]	‰›[™ÝŒÈˆŠÊJÈˆŠÝš›Ú[ŠˆŠJN™KK“
JK“
JKßJ_]˜\ˆ“IÖØÛYËYÜ›Ý\Hˆ—IËÓIÖØÛYËYÜ›Ý\Z][\ÏHˆ—IËÓIÖØÛYËZ][OHˆ—IËÓX	ÕÓN››Ý
Ø\šXKY\ØX›YHYH—JXSH˜ÛYËZ][K\Ù[XÝ‹H™]K]˜[YH‹“JKK
OO”
KK
KÓZJ
K˜Ü™X]PÛÛ^
›ÚY
K“J
OOšJ
K\ÙPÛÛ^
Ó
KSZJ
K˜Ü™X]PÛÛ^
›ÚY
K“J
OOšJ
K\ÙPÛÛ^
S
KSZJ
K˜Ü™X]PÛÛ^
›ÚY
KSZJ
K™›ÜØ\™™YŠ
KJOOžÛ]\ÐJ

OOžÝ˜\ˆKÜ™]\›žÜÙX\˜Úˆˆ‹˜[YN›[OJ[[OJOYK˜[YJOØN™K™Y˜][˜[YJOÝˆˆ‹Ù[XÝY][RY›ÚYš[\™YžØÛÝ[Œ][\Î›™]ÈX\Ü›Ý\Î›™]ÈÙ]__JKÏ\ÐJ

OO›™]ÈÙ]
K\ÐJ

OO›™]ÈX\
K\ÐJ

OO›™]ÈX\
K\ÐJ

OO›™]ÈÙ]
KÏ\JJKÛX™[˜ËÚ[™[ŽK˜[YN›KÛ•˜[YPÚ[™ÙNœš[\Ž™ÚÝ[š[\ŽžKÛÜ™Ë\ØX›TÚ[\”Ù[XÝ[ÛŽšHLKš[Pš[™[™ÜÎ˜HL‹‹™ŸOYKÏI

KI

KÏI

KÏZJ
K\ÙT™YŠ[
K]PJ
NÛJ

OOžÚYŠ›ÚYOO[J^Û]O[Kš[J
NÝ˜Ý\œ™[˜[YOYKË™[Z]

__KÛWJKJ

OOžÞ
‹J_K×JNÛ]ÏZJ
K\ÙSY[[Ê

OOŠÜÝXœØÜšX™N™OOŠ˜Ý\œ™[˜Y
JK

OO›˜Ý\œ™[™[]JJJKÛ˜\ÚÝŠ
OO˜Ý\œ™[Ù]Ý]NŠKKÊOOžÝ˜\ˆ‹‹NÚYŠSØš™XÝš\Ê˜Ý\œ™[ÙWKJJ^ÚYŠ˜Ý\œ™[ÙWOXKœÙX\˜ÚOOYJPŠ
KJ
K
K
NÙ[ÙHYŠ˜[YHOOYJ^ÚYŠØÝ[Y[˜XÝ]™Q[[Y[š\Ð]šX]J˜ÛYËZ[œ]Š_ØÝ[Y[˜XÝ]™Q[[Y[š\Ð]šX]J˜ÛYË\›ÛÝŠJ^Û]OYØÝ[Y[™Ù][[Y[žRY
ÊNÙOÙK™›ØÝ\Ê
N›[OJYØÝ[Y[™Ù][[Y[žRY
ÊJ_‹™›ØÝ\Ê
_ZYŠ
Ë

OOžÝ˜\ˆNÝ˜Ý\œ™[œÙ[XÝY][RY[[OJOU

JOÝ›ÚY™KšYË™[Z]

_JKß
KJK›ÚYOOJ[OJ\Ë˜Ý\œ™[
OÝ›ÚYœ‹˜[YJJ^Û]O[[OXOØNˆˆŽÜ™]\›ˆ›ÚY
[OJOJ\Ë˜Ý\œ™[
K›Û•˜[YPÚ[™ÙJ_K˜Ø[
JJ__ZË™[Z]

__K[Z]Š
OOžÛ˜Ý\œ™[™›Ü‘XXÚ
OO™J
J__JK×JKÏZJ
K\ÙSY[[Ê

OOŠÝ˜[YNŠKKÊOOžÝ˜\ˆŽØHOOJ[OJ\‹˜Ý\œ™[™Ù]
JJOÝ›ÚY›‹˜[YJI‰Š‹˜Ý\œ™[œÙ]
KÝ˜[YN˜KÙ^]ÛÜ™Î›ßJK˜Ý\œ™[™š[\™Yš][\ËœÙ]
K
KÊJK
‹

OOžÐJ
KË™[Z]

_JJ_K][NŠKJOOŠË˜Ý\œ™[˜Y
JKI‰Š‹˜Ý\œ™[š\ÊJOÛ‹˜Ý\œ™[™Ù]
JK˜Y
JN›‹˜Ý\œ™[œÙ]
K™]ÈÙ]
ÙWJJJK
Ë

OOžÐŠ
KJ
K˜Ý\œ™[˜[Y_

KË™[Z]

_JK

OOžÜ‹˜Ý\œ™[™[]JJKË˜Ý\œ™[™[]JJK˜Ý\œ™[™š[\™Yš][\Ë™[]JJNÛ]OU

NÞ


OOžÐŠ
K
[OXOÝ›ÚY˜K™Ù]]šX]JšYŠJOOOYI‰‘

KË™[Z]

_J_JKÜ›Ý\™OOŠ‹˜Ý\œ™[š\ÊJ_‹˜Ý\œ™[œÙ]
K™]ÈÙ]
K

OOžÜ‹˜Ý\œ™[™[]JJK‹˜Ý\œ™[™[]JJ_JKš[\ŽŠ
OOœË˜Ý\œ™[œÚÝ[š[\‹X™[˜ßVÈ˜\šXK[X™[—KÙ]\ØX›TÚ[\”Ù[XÝ[ÛŽŠ
OOœË˜Ý\œ™[™\ØX›TÚ[\”Ù[XÝ[Û‹\ÝYË[œ]Y—ËX™[Y‹\Ý[›™\”™YŽßJK×JNÙ[˜Ý[Ûˆ
KJ^Ý˜\ˆËŽÛ][[OJ[[OJÏ\Ë˜Ý\œ™[
OÝ›ÚY›Ë™š[\ŠOÛŽ““Ü™]\›ˆOÜŠK˜Ý\œ™[œÙX\˜ÚJNŒY[˜Ý[ÛˆJ
^ÚYŠ]˜Ý\œ™[œÙX\˜ÚLOOO\Ë˜Ý\œ™[œÚÝ[š[\Š\™]\›ŽÛ]O]˜Ý\œ™[™š[\™Yš][\ËOV×NÝ˜Ý\œ™[™š[\™Y™Ü›Ý\Ë™›Ü‘XXÚ
OžÛ]Ï[‹˜Ý\œ™[™Ù]

KLÛË™›Ü‘XXÚ
OOžÛ]YK™Ù]
JNÜSX]›X^
Š_JKKœ\Ú
Ý—J_JNÛ]ÏPË˜Ý\œ™[ÕŠ
KœÛÜ

K
OOžÝ˜\ˆËŽÛ]XK™Ù]]šX]JšYŠK]™Ù]]šX]JšYŠNÜ™]\›Š[OJÏYK™Ù]

JOÛÎŒ
KJ[OJYK™Ù]
ŠJOÛŽŒ
_JK™›Ü‘XXÚ
OOžÛ]OYK˜ÛÜÙ\Ý
Ó
NØOØK˜\[™Ú[
Kœ\™[[[Y[OOXOÙN™K˜ÛÜÙ\Ý
	ÑÓHˆ
˜
JN›Ë˜\[™Ú[
Kœ\™[[[Y[OO[ÏÙN™K˜ÛÜÙ\Ý
	ÑÓHˆ
˜
J_JKKœÛÜ

KJOO˜VÌWKYVÌWJK™›Ü‘XXÚ
OOžÝ˜\ˆNÛ][[OJOPË˜Ý\œ™[
OÝ›ÚY˜Kœ]Y\žTÙ[XÝÜŠ	Ñ“VÉÒOH‰Ù[˜ÛÙUT’PÛÛ\Û™[
VÌJ_H—X
NÛ[O]œ\™[[[Y[˜\[™Ú[

_J_Y[˜Ý[Ûˆ

^Û]OUŠ
K™š[™
OOˆYHˆOOYK™Ù]]šX]J˜\šXKY\ØX›YŠJKO[[OYOÝ›ÚY™K™Ù]]šX]J
NÚËœÙ]Ý]J˜[YH‹_›ÚY
_Y[˜Ý[ÛˆŠ
^Ý˜\ˆKKNÚYŠ]˜Ý\œ™[œÙX\˜ÚLOOO\Ë˜Ý\œ™[œÚÝ[š[\Š\™]\›ˆ›ÚY
˜Ý\œ™[™š[\™Y˜ÛÝ[[Ë˜Ý\œ™[œÚ^™JNÝ˜Ý\œ™[™š[\™Y™Ü›Ý\Ï[™]ÈÙ]Û]ÏLÙ›ÜŠ]ˆÙˆË˜Ý\œ™[
^Û]ÏS
[OJO[[OJO\‹˜Ý\œ™[™Ù]
ŠJOÝ›ÚY™K˜[YJOØNˆˆ‹[OJO[[OJ\‹˜Ý\œ™[™Ù]
ŠJOÝ›ÚY›šÙ^]ÛÜ™ÊOÚN–×JNÝ˜Ý\œ™[™š[\™Yš][\ËœÙ]
‹ÊKÏŒ	‰˜ÊÊßY›ÜŠ]ÛË—[Ùˆ‹˜Ý\œ™[
Y›ÜŠ]HÙˆŠZYŠ˜Ý\œ™[™š[\™Yš][\Ë™Ù]
JOŒ
^Ý˜Ý\œ™[™š[\™Y™Ü›Ý\Ë˜Y
ÊNØœ™XZß]˜Ý\œ™[™š[\™Y˜ÛÝ[XßY[˜Ý[ÛˆJ
^Ý˜\ˆKKÛ]ÏU

NÛÉ‰Š
[OJO[Ëœ\™[[[Y[
OÝ›ÚY™K™š\œÝÚ[
OOO[É‰Š[OJ[[OJO[Ë˜ÛÜÙ\Ý
“
JOÝ›ÚY˜Kœ]Y\žTÙ[XÝÜŠ	ÖØÛYËYÜ›Ý\ZXY[™ÏHˆ—IÊJ_œØÜ›Û[ÕšY]ÊØ›ØÚÎˆ›™X\™\ÝŸJJKËœØÜ›Û[ÕšY]ÊØ›ØÚÎˆ›™X\™\ÝŸJJ_Y[˜Ý[Ûˆ

^Ý˜\ˆNÜ™]\›ˆ[OJOPË˜Ý\œ™[
OÝ›ÚY™Kœ]Y\žTÙ[XÝÜŠ	ÕÓVØ\šXK\Ù[XÝYHYH—X
_Y[˜Ý[ÛˆŠ
^Ý˜\ˆNÜ™]\›ˆ\œ˜^K™œ›ÛJ
[OJOPË˜Ý\œ™[
OÝ›ÚY™Kœ]Y\žTÙ[XÝÜ[
Ó
J_×J_Y[˜Ý[ÛˆŠJ^Û]OUŠ
VÙWNØI‰šËœÙ]Ý]J˜[YH‹K™Ù]]šX]J
J_Y[˜Ý[Ûˆ
J^Ý˜\ˆNÛ]U

KÏUŠ
K[Ë™š[™[™^
OO™OOO]
K[ÖÛŠÙWNÛ[OJO\Ë˜Ý\œ™[
I‰˜K›ÛÜ	‰Š[ŠÙOÛÖÛË›[™ÝLWN›ŠÙOOO[Ë›[™ÝÛÖÌN›ÖÛŠÙWJK‰‰šËœÙ]Ý]J˜[YH‹‹™Ù]]šX]J
J_Y[˜Ý[ÛˆŠJ^Û]KU

KÏ[[O]Ý›ÚY˜ÛÜÙ\Ý
“
NÙ›ÜŠÛÉ‰ˆXNÊ[ÏYOŒÛÐJË“
N›JË“
KO[[O[ÏÝ›ÚY›Ëœ]Y\žTÙ[XÝÜŠÓ
NØOÚËœÙ]Ý]J˜[YH‹K™Ù]]šX]J
JN”
J_[]ÏJ
OO”ŠŠ
K›[™ÝLJKÏYOOžÙKœ™]™[Y˜][

KK›Y]RÙ^OÑÊ
N™K˜[Ù^OÑŠJN”
J_KÏYOOžÙKœ™]™[Y˜][

KK›Y]RÙ^OÔŠ
N™K˜[Ù^OÑŠLJN”
LJ_NÜ™]\›ˆJ
K˜Ü™X]Q[[Y[
š™]‹Ü™YŽ˜KX’[™^‹LK‹‹™‹˜ÛYË\›ÛÝŽˆˆ‹Û’Ù^QÝÛŽ™OOžÝ˜\ˆNÛ[OJOY‹›Û’Ù^QÝÛŠ_K˜Ø[
‹JNÛ]YK›˜]]™Q]™[š\ÐÛÛ\ÜÚ[™ßŒŽOOOYKšÙ^PÛÙNÚYŠYK™Y˜][™]™[Y	‰ˆ]
\ÝÚ]Ú
KšÙ^J^ØØ\ÙH›ˆŽ˜Ø\ÙHšˆŽ˜‰‰™K˜Ý›Ù^I‰•ÊJNØœ™XZÎØØ\ÙH\œ›ÝÑÝÛˆŽ•ÊJNØœ™XZÎØØ\ÙHœŽ˜Ø\ÙHšÈŽ˜‰‰™K˜Ý›Ù^I‰“ÊJNØœ™XZÎØØ\ÙH\œ›ÝÕ\Ž“ÊJNØœ™XZÎØØ\ÙH’ÛYHŽ™Kœ™]™[Y˜][

KŠ
NØœ™XZÎØØ\ÙH‘[™Ž™Kœ™]™[Y˜][

KÊ
NØœ™XZÎØØ\ÙH‘[\ˆŽžÙKœ™]™[Y˜][

NÛ]OU

NÚYŠJ^Û]O[™]È]™[
S
NØK™\Ü]Ú]™[
J_____KJ
K˜Ü™X]Q[[Y[
›X™[‹È˜ÛYË[X™[Žˆˆ‹[›ÜŽ”Ëš[œ]YY”Ë›X™[YÝ[Nœ_KÊKPJKOOšJ
K˜Ü™X]Q[[Y[
S”›ÝšY\‹Ý˜[YNšßKJ
K˜Ü™X]Q[[Y[
Ó”›ÝšY\‹Ý˜[YN”ßKJJJJ_JK“ZJ
K™›ÜØ\™™YŠ
KJOOžÝ˜\ˆÎÛ]I

KZJ
K\ÙT™YŠ[
KZJ
K\ÙPÛÛ^
S
KÏZ“

KÏ\JJKO[[OJÏ[[OJXË˜Ý\œ™[
OÝ›ÚY™›Ü˜ÙS[Ý[
OÛÎ›[O[Ý›ÚY›™›Ü˜ÙS[Ý[ÛJ

OOžÚYŠ]J\™]\›ˆËš][J‹[O[Ý›ÚY›šY
_KÝWJNÛ]OXÐJ‹‹ÙK˜[YKK˜Ú[™[‹—KKšÙ^]ÛÜ™ÊK^“

KZPJOO™K˜[YI‰™K˜[YOOO[K˜Ý\œ™[
KOZPJOOˆJ]I‰ˆLHOO\Ë™š[\Š
J_
YKœÙX\˜ÚK™š[\™Yš][\Ë™Ù]
ŠOŒ
JNÙ[˜Ý[ÛˆÊ
^Ý˜\ˆKNÚ

K[OJOJOXË˜Ý\œ™[
K›Û”Ù[XÝ
_K˜Ø[
KK˜Ý\œ™[
_Y[˜Ý[Ûˆ

^ÜœÙ]Ý]J˜[YH‹K˜Ý\œ™[L
_ZYŠJ
K\ÙQY™™XÝ


OOžÛ]O\‹˜Ý\œ™[ÚYŠI‰ˆYK™\ØX›Y
\™]\›ˆK˜Y]™[\Ý[™\ŠSÊK

OO˜Kœ™[[Ý™Q]™[\Ý[™\ŠSÊ_KÞKK›Û”Ù[XÝK™\ØX›YJK^J\™]\›ˆ[Û]Ù\ØX›Y˜‹˜[YN™‹Û”Ù[XÝË›Ü˜ÙS[Ý[‹Ù^]ÛÜ™Î—Ë‹‹ßOYNÜ™]\›ˆJ
K˜Ü™X]Q[[Y[
š™]‹Ü™YŽ‘J‹JK‹‹ËY›‹˜ÛYËZ][HŽˆˆ‹›ÛNˆ›Ü[Ûˆ‹˜\šXKY\ØX›YŽˆHX‹˜\šXK\Ù[XÝYŽˆHY™]KY\ØX›YŽˆHX‹™]K\Ù[XÝYŽˆHYÛ”Ú[\“[Ý™N˜ŸË™Ù]\ØX›TÚ[\”Ù[XÝ[ÛŠ
OÝ›ÚYšÛÛXÚÎ˜Ý›ÚY™ßKK˜Ú[™[Š_JKSZJ
K™›ÜØ\™™YŠ
KJOOžÛ]ÚXY[™ÎÚ[™[Ž›Ë›Ü˜ÙS[Ý[›‹‹‹œŸOYKI

KÏZJ
K\ÙT™YŠ[
KÏZJ
K\ÙT™YŠ[
KOI

KOZ“

KZPJOOˆJ[‰‰ˆLHOO[K™š[\Š
J_
YKœÙX\˜ÚK™š[\™Y™Ü›Ý\Ëš\Ê
JJNÛJ

OO›K™Ü›Ý\

K×JKÐJËÙK˜[YKKšXY[™Ë×JNÛ]ZJ
K\ÙSY[[Ê

OOŠÚY››Ü˜ÙS[Ý[›ŸJKÛ—JNÜ™]\›ˆJ
K˜Ü™X]Q[[Y[
š™]‹Ü™YŽ‘JËJK‹‹œ‹˜ÛYËYÜ›Ý\Žˆˆ‹›ÛNˆœ™\Ù[][Ûˆ‹Y[Žˆ\›ÚYK	‰šJ
K˜Ü™X]Q[[Y[
™]ˆ‹Ü™YŽ˜Ë˜ÛYËYÜ›Ý\ZXY[™ÈŽˆˆ‹˜\šXKZY[ˆŽˆLY_K
KPJKOOšJ
K˜Ü™X]Q[[Y[
™]ˆ‹È˜ÛYËYÜ›Ý\Z][\ÈŽˆˆ‹›ÛNˆ™Ü›Ý\‹˜\šXK[X™[YžHŽÝN›ÚYKJ
K˜Ü™X]Q[[Y[
S”›ÝšY\‹Ý˜[YN™KJJJJ_JK	ZJ
K™›ÜØ\™™YŠ
KJOOžÛ]Ø[Ø^\Ô™[™\Ž‹‹›ßOYKZJ
K\ÙT™YŠ[
KZPJOOˆYKœÙX\˜Ú
NÜ™]\›ˆÚJ
K˜Ü™X]Q[[Y[
š™]‹Ü™YŽ‘J‹JK‹‹›Ë˜ÛYË\Ù\\˜]ÜˆŽˆˆ‹›ÛNˆœÙ\\˜]ÜˆŸJN›[JKZJ
K™›ÜØ\™™YŠ
KJOOžÛ]ÛÛ•˜[YPÚ[™ÙN‹‹›ßOYK[[OYK˜[YK^“

KZPJOO™KœÙX\˜Ú
KÏZPJOO™KœÙ[XÝY][RY
KÏZ“

NÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžÛ[OYK˜[YI‰œ‹œÙ]Ý]JœÙX\˜Ú‹K˜[YJ_KÙK˜[YWJKJ
K˜Ü™X]Q[[Y[
šš[œ]Ü™YŽ˜K‹‹›Ë˜ÛYËZ[œ]Žˆˆ‹]]ÐÛÛ\]Nˆ›Ù™ˆ‹]]ÐÛÜœ™XÝˆ›Ù™ˆ‹Ü[ÚXÚÎˆLK˜\šXKX]]ØÛÛ\]HŽˆ›\Ý‹›ÛNˆ˜ÛÛX›Ø›Þ‹˜\šXKY^[™YŽˆL˜\šXKXÛÛ›ÛÈŽ˜Ë›\ÝY˜\šXK[X™[YžHŽ˜Ë›X™[Y˜\šXKXXÝ]™Y\ØÙ[™[ŽœËY˜Ëš[œ]Y\Nˆ^‹˜[YN›ÙK˜[YN›ÛÚ[™ÙN™OOžÛŸ‹œÙ]Ý]JœÙX\˜Ú‹K\™Ù]˜[YJK[O]
K\™Ù]˜[YJ__J_JK“ZJ
K™›ÜØ\™™YŠ
KJOOžÛ]ØÚ[™[ŽX™[›ÏH”ÝYÙÙ\Ý[ÛœÈ‹‹‹›ŸOYKZJ
K\ÙT™YŠ[
KZJ
K\ÙT™YŠ[
KÏZPJOO™KœÙ[XÝY][RY
KÏZ“

NÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžÚYŠ˜Ý\œ™[	‰œ‹˜Ý\œ™[
^Û]KO[˜Ý\œ™[\‹˜Ý\œ™[Ï[™]È™\Ú^™SØœÙ\™\Š

OOžÙO\™\]Y\Ý[š[X][Û‘œ˜[YJ

OOžÛ]OXK›Ù™œÙ]ZYÚÝœÝ[KœÙ]›Ü\J‹KXÛYË[\ÝZZYÚ‹KÑš^Y
JJÈœŠ_J_JNÜ™]\›ˆË›ØœÙ\™JJK

OOžØØ[˜Ù[[š[X][Û‘œ˜[YJJKË[›ØœÙ\™JJ___K×JKJ
K˜Ü™X]Q[[Y[
š™]‹Ü™YŽ‘J‹JK‹‹›‹˜ÛYË[\ÝŽˆˆ‹›ÛNˆ›\Ý›Þ‹X’[™^‹LK˜\šXKXXÝ]™Y\ØÙ[™[ŽœË˜\šXK[X™[Ž›ËY˜Ë›\ÝYKPJKOOšJ
K˜Ü™X]Q[[Y[
™]ˆ‹Ü™YŽ‘JË›\Ý[›™\”™YŠK˜ÛYË[\Ý\Ú^™\ˆŽˆˆŸKJJJ_JKSZJ
K™›ÜØ\™™YŠ
KJOOžÛ]ÛÜ[ŽÛ“Ü[Ú[™ÙN›ËÝ™\›^PÛ\ÜÓ˜[YN›‹ÛÛ[Û\ÜÓ˜[YNœ‹ÛÛZ[™\Ž›‹‹œßOYNÜ™]\›ˆJ
K˜Ü™X]Q[[Y[
^ÛÜ[ŽÛ“Ü[Ú[™ÙN›ßKJ
K˜Ü™X]Q[[Y[
ØÛÛZ[™\Ž›KJ
K˜Ü™X]Q[[Y[
^È˜ÛYË[Ý™\›^HŽˆˆ‹Û\ÜÓ˜[YN›ŸJKJ
K˜Ü™X]Q[[Y[
ÞÈ˜\šXK[X™[Ž™K›X™[˜ÛYËYX[ÙÈŽˆˆ‹Û\ÜÓ˜[YNœŸKJ
K˜Ü™X]Q[[Y[
SÜ™YŽ˜K‹‹œßJJJJ_JKPOZJ
K™›ÜØ\™™YŠ
KJOOšPJOOŒOOYK™š[\™Y˜ÛÝ[
OÚJ
K˜Ü™X]Q[[Y[
š™]‹Ü™YŽ˜K‹‹™K˜ÛYËY[\HŽˆˆ‹›ÛNˆœ™\Ù[][ÛˆŸJN›[
KPOZJ
K™›ÜØ\™™YŠ
KJOOžÛ]Ü›ÙÜ™\ÜÎÚ[™[Ž›ËX™[›H“ØY[™Ë‹‹ˆ‹‹‹œŸOYNÜ™]\›ˆJ
K˜Ü™X]Q[[Y[
š™]‹Ü™YŽ˜K‹‹œ‹˜ÛYË[ØY[™ÈŽˆˆ‹›ÛNˆœ›ÙÜ™\ÜØ˜\ˆ‹˜\šXK]˜[Y[›ÝÈŽ˜\šXK]˜[Y[Z[ˆŽŒ˜\šXK]˜[Y[X^ŽŒL˜\šXK[X™[Ž›ŸKPJKOOšJ
K˜Ü™X]Q[[Y[
™]ˆ‹È˜\šXKZY[ˆŽˆLKJJJ_JKOSØš™XÝ˜\ÜÚYÛŠSÓ\Ý–“][N’“[œ]–Ü›Ý\–SÙ\\˜]ÜŽ‰X[ÙÎ”S[\N™PKØY[™Î˜P_JNÙ[˜Ý[ÛˆÐJKJ^Û]YK›™^[[Y[ÚX›[™ÎÙ›ÜŠÝÊ^ÚYŠ›X]Ú\ÊJJ\™]\›ˆÝ]›™^[[Y[ÚX›[™ß_Y[˜Ý[ÛˆJKJ^Û]YKœ™]š[Ý\Ñ[[Y[ÚX›[™ÎÙ›ÜŠÝÊ^ÚYŠ›X]Ú\ÊJJ\™]\›ˆÝ]œ™]š[Ý\Ñ[[Y[ÚX›[™ß_Y[˜Ý[ÛˆJJ^Û]OZJ
K\ÙT™YŠJNÜ™]\›ˆJ

OOžØK˜Ý\œ™[Y_JK_]˜\ˆOH[™Yš[™YO]\[ÙˆÚ[™ÝÏÚJ
K\ÙQY™™XÝšJ
K\ÙS^[Ý]Y™™XÝÙ[˜Ý[ÛˆÐJJ^Û]OZJ
K\ÙT™YŠ
NÜ™]\›ˆ›ÚYOOXK˜Ý\œ™[	‰ŠK˜Ý\œ™[YJ
JK_Y[˜Ý[ÛˆPJJ^Û]O^“

KJ
OO™JKœÛ˜\ÚÝ

JNÜ™]\›ˆJ
K\ÙTÞ[˜Ñ^\›˜[ÝÜ™JKœÝXœØÜšX™K
_Y[˜Ý[ÛˆÐJKKÏV×J^Û]ZJ
K\ÙT™YŠ
KZ“

NÜ™]\›ˆJ

OOžÝ˜\ˆÛ]ÏJ

OOžÝ˜\ˆNÙ›ÜŠ]HÙˆ
^ÚYŠœÝš[™ÈO]\[ÙˆJ\™]\›ˆKš[J
NÚYŠ›Øš™XÝO]\[ÙˆI‰ˆ˜Ý\œ™[š[ˆJ\™]\›ˆK˜Ý\œ™[Û[OJOXK˜Ý\œ™[^ÛÛ[
OÝ›ÚY™Kš[J
N›‹˜Ý\œ™[_JJ
KO[Ë›X\
OO™Kš[J
JNÜ‹˜[YJKËJK[OJXK˜Ý\œ™[
_œÙ]]šX]JÊK‹˜Ý\œ™[\ßJKŸ]˜\ˆPOJ
OOžÛ]ÙKWOZJ
K\ÙTÝ]J
K\ÐJ

OO›™]ÈX\
NÜ™]\›ˆJ

OOžÝ˜Ý\œ™[™›Ü‘XXÚ
OO™J
JK˜Ý\œ™[[™]ÈX\KÙWJK
KÊOOžÝ˜Ý\œ™[œÙ]
KÊKJßJ__NÙ[˜Ý[ÛˆPJØ\ÐÚ[™KÚ[™[Ž˜_K
^Ü™]\›ˆI‰šJ
Kš\Õ˜[Y[[Y[
JOÚJ
K˜ÛÛ™Q[[Y[
[˜Ý[ÛŠJ^Û]OYK\NÜ™]\›ˆ™[˜Ý[ÛˆO]\[ÙˆOØJKœ›ÜÊNˆœ™[™\ˆš[ˆOØKœ™[™\ŠKœ›ÜÊN™_JJKÜ™YŽ˜Kœ™YŸK
Kœ›ÜË˜Ú[™[ŠJN
J_]˜\ˆO^ÜÜÚ][ÛŽˆ˜XœÛÛ]H‹ÚYˆŒ\‹ZYÚˆŒ\‹Y[™ÎˆŒ‹X\™Ú[Žˆ‹L\‹Ý™\™›ÝÎˆšY[ˆ‹Û\ˆœ™XÝ

H‹Ú]TÜXÙNˆ››ÝÜ˜\‹›Ü™\•ÚYˆŒŸNØÛÛœÝOZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JKÜ™YŽÛ\ÜÓ˜[YNœYÊ™›^Y[ËY[›^XÛÛÝ™\™›ÝËZY[ˆ›Ý[™Y[Y™Ë\ÜÝ™\ˆ^\ÜÝ™\‹Y›Ü™YÜ›Ý[™‹JK‹‹˜_JJNÙK™\Ü^S˜[YO]K™\Ü^S˜[YNØÛÛœÝPOZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆ›Ü™\‹XˆLÈ‹˜ÛYËZ[œ]]Ü˜\\ˆŽˆˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JYØÛ\ÜÓ˜[YNˆ›\‹LˆMËMÚš[šËLÜXÚ]KMLŸJK
Ê
KšœÞ
JK’[œ]Ü™YŽÛ\ÜÓ˜[YNœYÊ™›^LLËY[›Ý[™Y[Y™Ë]˜[œÜ\™[KLÈ^\ÛHÝ][™K[›Û™HXÙZÛ\Ž^[]]YY›Ü™YÜ›Ý[™\ØX›Y˜Ý\œÛÜ‹[›ÝX[ÝÙY\ØX›Y›ÜXÚ]KML‹JK‹‹˜_JW_JJNÞPK™\Ü^S˜[YO]K’[œ]™\Ü^S˜[YNØÛÛœÝÐOZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JK“\ÝÜ™YŽÛ\ÜÓ˜[YNœYÊ›X^ZVÌÌHÝ™\™›ÝË^KX]]ÈÝ™\™›ÝË^ZY[ˆ‹JK‹‹˜_JJNÙÐK™\Ü^S˜[YO]K“\Ý™\Ü^S˜[YNØÛÛœÝOZJ
K™›ÜØ\™™YŠ
KJOOŠÊ
KšœÞ
JK‘[\KÜ™YŽ˜KÛ\ÜÓ˜[YNˆœKMˆ^XÙ[\ˆ^\ÛH‹‹‹™_JJNÚK™\Ü^S˜[YO]K‘[\K™\Ü^S˜[YNÚJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JK‘Ü›Ý\Ü™YŽÛ\ÜÓ˜[YNœYÊ›Ý™\™›ÝËZY[ˆLH^Y›Ü™YÜ›Ý[™É—ÖØÛYËYÜ›Ý\ZXY[™×WNœLˆÉ—ÖØÛYËYÜ›Ý\ZXY[™×WNœKLKHÉ—ÖØÛYËYÜ›Ý\ZXY[™×WN^^ÈÉ—ÖØÛYËYÜ›Ý\ZXY[™×WN™›Û[YY][HÉ—ÖØÛYËYÜ›Ý\ZXY[™×WN^[]]YY›Ü™YÜ›Ý[™‹JK‹‹˜_JJK™\Ü^S˜[YO]K‘Ü›Ý\™\Ü^S˜[YNÚJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JK”Ù\\˜]Ü‹Ü™YŽÛ\ÜÓ˜[YNœYÊ‹[^LH\™ËX›Ü™\ˆ‹JK‹‹˜_JJK™\Ü^S˜[YO]K”Ù\\˜]Ü‹™\Ü^S˜[YNØÛÛœÝOZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JK’][KÜ™YŽÛ\ÜÓ˜[YNœYÊœ™[]]™H›^Ý\œÛÜ‹YY˜][Ø\LˆÙ[XÝ[›Û™H][\ËXÙ[\ˆ›Ý[™Y\ÛHLˆKLKH^\ÛHÝ][™K[›Û™H]KVÙ\ØX›Y]YWNœÚ[\‹Y]™[Ë[›Û™H]KVÜÙ[XÝY]YWN˜™ËXXØÙ[]KVÜÙ[XÝY]YWN^XXØÙ[Y›Ü™YÜ›Ý[™]KVÙ\ØX›Y]YWN›ÜXÚ]KMLÉ—ÜÝ™×NœÚ[\‹Y]™[Ë[›Û™HÉ—ÜÝ™×NœÚ^™KMÉ—ÜÝ™×NœÚš[šËL‹JK‹‹˜_JJNØK™\Ü^S˜[YO]K’][K™\Ü^S˜[YNØÛÛœÝOYOOˆ›Ü[ÛŽˆŠÔÝš[™ÊJNÙ[˜Ý[ÛˆÐJÛX™[™K˜[YN˜KÛÚ[™ÙNÜ[ÛœÎ›Ë\ÝY›‹ÙX\˜ÚX›NœHLKXÙZÛ\Ž›HÚÛÜÙH[ˆÜ[ÛˆŸJ^ØÛÛœÝØËWOJJ
K\ÙTÝ]JJLJKOJOO™K›X\
OO\œ˜^Kš\Ð\œ˜^JJOÞÝ˜[YN™VÌKX™[™VÌW_NˆœÝš[™ÈOO]\[ÙˆOÞÝ˜[YN™KX™[™_N™JJJÊK[K™š[™
OO™K˜[YOOOXJNÜ™]\›ˆÊÊ
KšœÞÊJÓÛÜ[Ž˜ËÛ“Ü[Ú[™ÙNKÚ[™[Ž–ÊÊ
KšœÞ
JÓØ\ÐÚ[ˆLÚ[™[ŽŠÊ
KšœÞÊJ˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆœÚ]K\Ù[XÝ]šYÙÙ\ˆÚ]KXÛÛX›Ø›Þ]šYÙÙ\ˆ‹˜\šXK[X™[Ž™K™]K]\ÝYŽ›‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[ŽŠ[OO\›ÚYOO\Ý›ÚYœ›X™[
_JK
Ê
KšœÞ
JZÜÚ^™NŒMŸJW_J_JK
Ê
KšœÞ
JØÛ\ÜÓ˜[YNˆœÚ]K]ZK\Ý\™˜XÙHÚ]KXÛÛ[X[™\ÜÝ™\ˆ‹[YÛŽˆœÝ\‹ÚYSÙ™œÙ]‹ÛÛ\Ú[Û”Y[™ÎŒL‹™]K[[š\Ë\™]™[ŽˆLÛ“Ü[]]Ñ›ØÝ\Î™OO™Kœ™]™[Y˜][

KÚ[™[ŽŠÊ
KšœÞÊJKØÛ\ÜÓ˜[YNˆœÚ]KXÛÛ[X[™‹X™[™KÚ[™[Ž–ÊÊ
KšœÞ
JPKÈ˜\šXK[X™[Žˆ”ÙX\˜ÚŠÙKXÙZÛ\Žˆ”ÙX\˜Ú[šY\Ë‹‹ˆ‹Û\ÜÓ˜[YNˆœÚ]KXÛÛ[X[™Z[œ]ŸJK
Ê
KšœÞÊJÐKØÛ\ÜÓ˜[YNˆœÚ]KXÛÛ[X[™[\Ý‹™]K[[š\Ë\™]™[ŽˆLÚ[™[Ž–ÊÊ
KšœÞ
JKØÚ[™[Žˆ“›ÈX]Ú\ËˆŸJKK›X\
OOŠÊ
KšœÞÊJKÝ˜[YN™JK˜[YJKÙ^]ÛÜ™Î–ÙK›X™[K\ØX›Y™K™\ØX›YÛ”Ù[XÝŠ
OOžÝ
K˜[YJKJLJ_KÛ\ÜÓ˜[YNˆœÚ]KXÛÛ[X[™Z][H‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž™K›X™[JKOOOYK˜[YI‰ŠÊ
KšœÞ
JKÜÚ^™NŒM‹˜\šXKZY[ˆŽˆYHŸJW_KJK˜[YJJJW_JW_J_JW_JNŠÊ
KšœÞÊJTËÝ˜[YNœÙJJNˆˆ‹Û•˜[YPÚ[™ÙN™OOžØÛÛœÝO[K™š[™
OO™JK˜[YJOOOYJNØI‰ˆXK™\ØX›Y	‰
K˜[YJ_KÚ[™[Ž–ÊÊ
KšœÞ
JTËØÛ\ÜÓ˜[YNˆœÚ]K\Ù[XÝ]šYÙÙ\ˆ‹˜\šXK[X™[Ž™K™]K]\ÝYŽ›‹Ú[™[ŽŠÊ
KšœÞ
J”ËÜXÙZÛ\Ž›J_JK
Ê
KšœÞ
JTËØÛ\ÜÓ˜[YNˆœÚ]K]ZK\Ý\™˜XÙHÚ]K\Ù[XÝXÛÛ[‹ÜÚ][ÛŽˆœÜ\ˆ‹ÚYSÙ™œÙ]‹ÛÛ\Ú[Û”Y[™ÎŒL‹™]K[[š\Ë\™]™[ŽˆLÚ[™[Ž›K›X\
OOŠÊ
KšœÞ
J	ËÝ˜[YN™JK˜[YJK\ØX›Y™K™\ØX›YÛ\ÜÓ˜[YNˆœÚ]K\Ù[XÝZ][H‹Ú[™[Ž™K›X™[KJK˜[YJJJ_JW_J_]˜\ˆOHÚXÚØ›Þ‹×ÐKÐWO\
JKÞKÐWOWÐJJKÐOZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜPÚXÚØ›Þ˜[YN›ËÚXÚÙY›‹Y˜][ÚXÚÙYœ‹™\]Z\™Y›\ØX›Y˜Ë˜[YNOH›Ûˆ‹ÛÚXÚÙYÚ[™ÙN›K›Ü›Nœ‹‹™OYKÞK×OZJ
K\ÙTÝ]J[
KPžJKOO™ÊJJKZJ
K\ÙT™YŠLJKH^_
H^K˜ÛÜÙ\Ý
™›Ü›HŠJKÝË—OZ
Ü›Ü›‹Y˜][›ÜœÏÈLKÛÚ[™ÙN›KØ[\Ž_JKÏZJ
K\ÙT™YŠÊNÜ™]\›ˆJ
K\ÙQY™™XÝ


OOžØÛÛœÝO^OË™›Ü›NÚYŠJ^ØÛÛœÝOJ
OOŠË˜Ý\œ™[
NÜ™]\›ˆK˜Y]™[\Ý[™\Šœ™\Ù]‹JK

OO™Kœ™[[Ý™Q]™[\Ý[™\Šœ™\Ù]‹J__KÞK—JK
Ê
KšœÞÊJKÜØÛÜNÝ]NË\ØX›Y˜ËÚ[™[Ž–ÊÊ
KšœÞ
Jš˜]Û‹Ý\Nˆ˜]Ûˆ‹›ÛNˆ˜ÚXÚØ›Þ‹˜\šXKXÚXÚÙYŽJÊOÈ›Z^YŽË˜\šXK\™\]Z\™YŽ›™]K\Ý]HŽ“PJÊK™]KY\ØX›YŽ˜ÏÈˆŽ›ÚY\ØX›Y˜Ë˜[YNK‹‹™™YŽšÛ’Ù^QÝÛŽ›Z
K›Û’Ù^QÝÛ‹OOžÈ‘[\ˆOOYKšÙ^I‰™Kœ™]™[Y˜][

_JKÛÛXÚÎ›Z
K›ÛÛXÚËOOžÝŠOOˆHPJJ_YJK‰‰Š‹˜Ý\œ™[YKš\Ô›ÜYØ][Û”ÝÜY

K‹˜Ý\œ™[KœÝÜ›ÜYØ][ÛŠ
J_J_JK‰‰ŠÊ
KšœÞ
JKØÛÛ›ÛžKX˜›\ÎˆX‹˜Ý\œ™[˜[YN›Ë˜[YNKÚXÚÙYË™\]Z\™Y›\ØX›Y˜Ë›Ü›NœÝ[NžÝ˜[œÙ›Ü›Nˆ˜[œÛ]V
LL	JHŸKY˜][ÚXÚÙYˆPJŠI‰œŸJW_J_JNÔÐK™\Ü^S˜[YO]NÝ˜\ˆOHÚXÚØ›Þ[™XØ]Üˆ‹POZJ
K™›ÜØ\™™YŠ
KJOOžØÛÛœÝ××ÜØÛÜPÚXÚØ›Þ›Ü˜ÙS[Ý[›Ë‹‹›ŸOYKZÐJK
NÜ™]\›ŠÊ
KšœÞ
JËÜ™\Ù[›ßJ‹œÝ]J_LOO\‹œÝ]KÚ[™[ŽŠÊ
KšœÞ
JšœÜ[‹È™]K\Ý]HŽ“PJ‹œÝ]JK™]KY\ØX›YŽœ‹™\ØX›YÈˆŽ›ÚY‹‹›‹™YŽ˜KÝ[NžÜÚ[\‘]™[Îˆ››Û™H‹‹‹™KœÝ[__J_J_JNÐPK™\Ü^S˜[YOSNÝ˜\ˆOZJ
K™›ÜØ\™™YŠ
××ÜØÛÜPÚXÚØ›Þ™KÛÛ›Û˜KÚXÚÙYX˜›\Î›ÏHLY˜][ÚXÚÙY›‹‹‹œŸK
OOžØÛÛœÝÏZJ
K\ÙT™YŠ[
KOPžJË
KOWÚÊ
KTŠJNÚJ
K\ÙQY™™XÝ


OOžØÛÛœÝOXË˜Ý\œ™[ÚYŠYJ\™]\›ŽØÛÛœÝO]Ú[™ÝË’S[œ][[Y[œ›ÝÝ\KSØš™XÝ™Ù]ÝÛ”›Ü\Q\ØÜš\ÜŠK˜ÚXÚÙYŠKœÙ]ÚYŠHOO]	‰›Š^ØÛÛœÝO[™]È]™[
˜ÛXÚÈ‹ØX˜›\Î›ßJNÙKš[™]\›Z[˜]OPJ
K‹˜Ø[
KPJ
I‰
KK™\Ü]Ú]™[
J__KÛK×JNØÛÛœÝZJ
K\ÙT™YŠPJ
I‰
NÜ™]\›ŠÊ
KšœÞ
Jšš[œ]Ý\Nˆ˜ÚXÚØ›Þ‹˜\šXKZY[ˆŽˆLY˜][ÚXÚÙY›ÏÙ˜Ý\œ™[‹‹œ‹X’[™^‹LK™YŽKÝ[NžË‹‹œ‹œÝ[K‹‹œÜÚ][ÛŽˆ˜XœÛÛ]H‹Ú[\‘]™[Îˆ››Û™H‹ÜXÚ]NŒX\™Ú[ŽŒ_J_JNÙ[˜Ý[ÛˆJJ^Ü™]\›ˆš[™]\›Z[˜]HOOY_Y[˜Ý[ÛˆPJJ^Ü™]\›ˆJJOÈš[™]\›Z[˜]HŽ™OÈ˜ÚXÚÙYŽˆ[˜ÚXÚÙYŸQK™\Ü^S˜[YOHÚXÚØ›ÞX˜›R[œ]ŽÝ˜\ˆOTÐKOPPNØÛÛœÝOZJ
K™›ÜØ\™™YŠ
ØÛ\ÜÓ˜[YN™K‹‹˜_K
OOŠÊ
KšœÞ
JKÜ™YŽÛ\ÜÓ˜[YNœYÊœY\ˆMËMÚš[šËL›Ý[™Y\ÛH›Ü™\ˆ›Ü™\‹\š[X\žHÚYÝÈ›ØÝ\Ë]š\ÚX›N›Ý][™K[›Û™H›ØÝ\Ë]š\ÚX›Nœš[™ËLH›ØÝ\Ë]š\ÚX›Nœš[™Ë\š[™È\ØX›Y˜Ý\œÛÜ‹[›ÝX[ÝÙY\ØX›Y›ÜXÚ]KML]KVÜÝ]OXÚXÚÙYN˜™Ë\š[X\žH]KVÜÝ]OXÚXÚÙYN^\š[X\žKY›Ü™YÜ›Ý[™‹JK‹‹˜KÚ[™[ŽŠÊ
KšœÞ
JKØÛ\ÜÓ˜[YNœYÊ™›^][\ËXÙ[\ˆ\ÝYžKXÙ[\ˆ^XÝ\œ™[ŠKÚ[™[ŽŠÊ
KšœÞ
JKØÛ\ÜÓ˜[YNˆšMËMŸJ_J_JJNÔK™\Ü^S˜[YOUK™\Ü^S˜[YNØÛÛœÝO^Ü]Y\žNˆˆ‹Ú[™ˆ[‹ÛÜˆ™™X]\™Y‹XZÙ\Žˆ[‹™ZXÛPÛ\ÜÎˆ[‹ÛÝ™\˜YÙNˆ˜[‹Ü›Ý\ˆ[‹šY]Îˆ™ÜšY‹Ü›Ý\YˆLKOYOO”Ýš[™Ê[OOYI‰›ÚYOOYOÙNˆˆŠK››Ü›X[^™J“‘‘ŠKœ™\XÙJÖ×LÌWLÍ™—KÙËˆŠKÓÝÙ\Ø\ÙJ
Kš[J
KÐOJKJOO”Ýš[™ÊJK›ØØ[PÛÛ\\™JÝš[™ÊJK™[ˆ‹Û[Y\šXÎˆLÙ[œÚ]]š]Nˆ˜˜\ÙHŸJNÙ[˜Ý[ÛˆÐJKJ^ÚYŠ•™ZXÛHOOYKšÚ[™
^Ý˜\ˆÎØÛÛœÝO[[OOJYK˜ÛÛXÝ[ÛœÊ_›ÚYOO][OOJÏ]™š[™
OO™KœÝ\ÕÚ]
™ZXÛ\ËÈŠJJ_›ÚYOO[ÏÝ›ÚY›ËœÜ]
‹ÈŠVÌWNÚYŠœÝ[™Ý]OOXJ\™]\›ˆ”Ý[™Ý]ÛÛXÝ[ÛˆŽÜ™]\›žÜÝ\\Žˆ”Ý\\˜Ø\œÈ‹ÜÜÎˆ”ÜÜÈØ\œÈ‹]\ØÛNˆ“]\ØÛHØ\œÈ‹ÛÝ\\ÎˆÛÝ\\È	ˆÛÛ™\X›\È‹ÙY[œÎˆ”ÙY[œÈ	ˆØYÛÛœÈ‹Ý]œÎˆ”ÕUœÈ‹ÛÛ\XÝÎˆÛÛ\XÝÈ‹ÛÛ[Y\˜ÚX[ˆÛÛ[Y\˜ÚX[	ˆ][]H‹Z[]\žNˆ“Z[]\žH™ZXÛ\È‹šXÞXÛ\ÎˆšXÞXÛ\È‹[ÝÜ˜ÞXÛ\Îˆ“[ÝÜ˜ÞXÛ\È‹›Ù™‹\›ØYŽˆ“Ù™‹\›ØY‹›Ø]Îˆ›Ø]È‹Z\˜Ü˜YˆZ\˜Ü˜Y‹Ù\šXÙNˆ”Ù\šXÙH	ˆ[Y\™Ù[˜ÞH‹Ý\Žˆ“Ý\ˆ™ZXÛ\È‹Ý\ÝÛZ\Ø][ÛŽˆÝ\ÝÛZ\Ø][ÛˆŸVØW_K˜Ø]YÛÜž_•™ZXÛ\ÈŸZYŠÚ\˜XÝ\ˆOOYKšÚ[™
^ÚYŠ”›ÝYÛÛš\ÝOOYK˜Ø]YÛÜžJ\™]\›ˆ”›ÝYÛÛš\ÝÈŽØÛÛœÝOYK˜ÛÛXÝ[Ûœß×NÜ™]\›ˆKš[˜ÛY\Ê˜Ú\˜XÝ\œËÜÚYKXÛÛXÝÈŠOÈ”ÚYHÛÛXÝÈŽ˜Kš[˜ÛY\Ê˜Ú\˜XÝ\œËÜÝ\Ü[™ÈŠOÈ”Ý\Ü[™ÈÚ\˜XÝ\œÈŽ˜Kš[˜ÛY\Ê˜Ú\˜XÝ\œËÙ[˜ÛÝ[\œÈŠOÈY][Û˜[[˜ÛÝ[\œÈŽ˜Kš[˜ÛY\Ê˜Ú\˜XÝ\œËÛYYXK\˜Y[ÈŠOÈ”˜Y[È	ˆÙØ\ÝÈŽ˜Kš[˜ÛY\Ê˜Ú\˜XÝ\œËÛYYXK]ˆŠOÈ•[]š\Ú[Ûˆ	ˆ™]ÜÈŽ˜Kš[˜ÛY\Ê˜Ú\˜XÝ\œËÛYYXKYØ[Y\ÈŠOÈ’[‹]ÛÜ›Ø[Y\ÈŽ™K˜Ø]YÛÜž_Ú\˜XÝ\œÈŸZYŠ›Z\ÜÚ[ÛœÈOOXJ^ØÛÛœÝOYK˜ÛÛXÝ[Ûœß×NÚYŠKš[˜ÛY\Ê›Z\ÜÚ[ÛœËÛXZ[ˆŠJ\™]\›ˆ“XZ[ˆÝÜžHŽÚYŠKš[˜ÛY\Ê›Z\ÜÚ[ÛœËÜÚYHŠJ\™]\›ˆ”ÚYHZ\ÜÚ[ÛœÈŽÚYŠKš[˜ÛY\Ê›Z\ÜÚ[ÛœËÜ˜[™ÛKY]™[ÈŠJ\™]\›ˆ”˜[™ÛH]™[È	ˆ[˜ÛÝ[\œÈŸ\™]\›ˆ›YYXHOOXOÙKšÚ[™“YYXHŽˆœ˜Y[ÈOOXOÙK˜Ø]YÛÜž_”˜Y[ÈÝ][ÛœÈŽ™K˜Ø]YÛÜž_KšÚ[™“Ý\ˆ[šY\ÈŸXÛÛœÝÐOVÈ”›ÝYÛÛš\ÝÈ‹”Ý\Ü[™ÈÚ\˜XÝ\œÈ‹”ÚYHÛÛXÝÈ‹Y][Û˜[[˜ÛÝ[\œÈ‹”˜Y[È	ˆÙØ\ÝÈ‹•[]š\Ú[Ûˆ	ˆ™]ÜÈ‹’[‹]ÛÜ›Ø[Y\È‹”Ý\\˜Ø\œÈ‹”ÜÜÈØ\œÈ‹“]\ØÛHØ\œÈ‹ÛÝ\\È	ˆÛÛ™\X›\È‹”ÙY[œÈ	ˆØYÛÛœÈ‹”ÕUœÈ‹ÛÛ\XÝÈ‹“[ÝÜ˜ÞXÛ\È‹“Ù™‹\›ØY‹šXÞXÛ\È‹›Ø]È‹Z\˜Ü˜Y‹ÛÛ[Y\˜ÚX[	ˆ][]H‹”Ù\šXÙH	ˆ[Y\™Ù[˜ÞH‹“Z[]\žH™ZXÛ\È‹”Ý[™Ý]ÛÛXÝ[Ûˆ‹“Ý\ˆ™ZXÛ\È‹’[™Ý[œÈ‹\ÜØ][šY›\È‹”ÚÝÝ[œÈ‹“Y[YH‹•›ÝØX›\È‹“XZ[ˆÝÜžH‹”ÚYHZ\ÜÚ[ÛœÈ‹”˜[™ÛH]™[È	ˆ[˜ÛÝ[\œÈ—KPOYOO“ÐKš[˜ÛY\ÊJOÓÐKš[™^ÙŠJN“ÐK›[™ÝØÛÛœÝOJÚ][N™K]\Î˜K™Yš^H˜Ø][ÙÈ‹Ü™\Ž›ÏLJOOžØÛÛœÝÛ‹—OJJ
K\ÙTÝ]JJœ[™[™ÈŠNÜ™]\›ŠÊ
KšœÞÊJ˜\XÛH‹È™]KXÚ[™[XK[Ü™\ˆŽ›ËÝ[NžÈ‹KXÚ[™[XK[Ü™\ˆŽ“X]›Z[ŠËLJ_KÛ\ÜÓ˜[YN˜Ü[XØ\™	ÖÈ•™ZXÛH‹•ÙX\Ûˆ‹”˜Y[ÈÝ][Ûˆ—Kš[˜ÛY\ÊKšÚ[™
OÈ›Øš™XÝXØ\™ŽˆˆŸH	ÈÚ\˜XÝ\ˆOOYKšÚ[™Èœ\œÛÛ‹XØ\™ŽˆˆŸH	ÖÈ’[XYÙH‹\ÛÜšÈ—Kš[˜ÛY\ÊKšÚ[™
OÈ›YYXKXØ\™ŽˆˆŸX™]K]\ÝYŽ˜	ÝKXØ\™IÙKšYXÚ[™[Ž–ÊÊ
KšœÞÊJÝÎ™Kœ]ÛÛXÚÎ˜OO˜œŠKJKÛ\ÜÓ˜[YN˜Ü[XØ\™Z[XYÙHÚ[™[XK[YYXKIÛŸX™]K]\ÝYŽ˜	ÝKZ[XYÙKIÙKšYXX’[™^‹LK˜\šXKZY[ˆŽˆYH‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜Î™Kš[XYÙK[ˆˆ‹ØY[™Îˆ›^žH‹™Y™\œ™\”ÛXÞN™Kš[XYÙTÛÝ\˜ÙOÈ››Ë\™Y™\œ™\ˆŽ›ÚY]N™Kš[XYÙTÛÝ\˜ÙOØ[XYÙH™Y™\™[˜ÙHšXH	ÙKš[XYÙTÛÝ\˜Ù_X›ÚYÛ“ØYŠ
OOœŠœ™XYHŠKÛ‘\œ›ÜŽ˜OOžÙKš[XYÙQ˜[˜XÚÉ‰ˆXK˜Ý\œ™[\™Ù]œÜ˜Ë™[™ÕÚ]
Kš[XYÙQ˜[˜XÚÊOØK˜Ý\œ™[\™Ù]œÜ˜ÏYKš[XYÙQ˜[˜XÚÎœŠ™˜Z[YŠ__JK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž™KšÚ[™JW_JK
Ê
KšœÞ
JËÚ][N™KØ]™Y˜KœØ]™YÙÙÛTØ]™N˜KÙÙÛTØ]™K™Yš^˜	ÝK\Ø]™XJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[XØ\™XÛÜH‹Ú[™[Ž–ÊÊ
KšœÞ
JœÛX[‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\Ý]\ÈŠÊ“Ù™šXÚX[ÛÝ\˜ÙHOOYKœÝ]\ÏÈ›Ù™šXÚX[ŽˆˆŠK™]K]\ÝYŽ˜	ÝK\Ý]\ËIÙKšYXÚ[™[Ž™KœÝ]\ßJK
Ê
KšœÞÊJÝÎ™Kœ]ÛÛXÚÎ˜OO˜œŠKJK™]K]\ÝYŽ˜	ÝK[Ü[‹IÙKšYXÚ[™[Ž–ÊÊ
KšœÞ
JšÈ‹ØÚ[™[ŽŠÊ
KšœÞ
J^KÝ˜[YN™K]K˜\šX[ˆ˜Ø\™‹›ØÚÎˆLJ_JK
Ê
KšœÞ
JKÜÚ^™NŒN_JW_JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽ˜	ÝKY\ØÜš\[Û‹IÙKšYXÚ[™[Ž™KœÜÚ[\‰‰ˆXKœÜÚ[\œÏÈ”ÝÜžH]Z[È\™HY[‹ˆŽ™KœÝX]_K˜Ø]YÛÜž_K™\ØÜš\[ÛŸJK‘ÕHÝÛˆOOYK™]PÜ™Y]	‰ŠÊ
KšœÞ
J˜H‹Ú™YŽ™KœÛÝ\˜ÙK\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Ý[NžÙ›ÛÚ^™NŒLK\Ü^Nˆš[›[™KX›ØÚÈ‹X\™Ú[•ÜŽKÚ[™[Žˆ‘]NˆÕHÝÛˆŸJW_JW_J_KOYOO–Ë‹‹›™]ÈÙ]
K™š[\Š›ÛÛX[ŠJWKœÛÜ

KJOO™K›ØØ[PÛÛ\\™JJJKÐOJÛX™[™K˜[YN˜KÛÚ[™ÙNÜ[ÛœÎ›Ë\ÝY›ŸJOOŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙÝYKYšY[‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž™_JK
Ê
KšœÞ
JÐKÛX™[™K˜[YN˜KÛÚ[™ÙNÜ[ÛœÎ›Ë\ÝY›ŸJW_JKOJÚ][\Î™K]\Î˜KÙXÝ[ÛŽ™Yš^›ÏH˜Ø][ÙÈ‹]N›H“Ûˆš[HŸJOOžØÛÛœÝÜ‹OJJ
K\ÙTÝ]JJJKØËWOJJ
K\ÙTÝ]JJ
KOY[˜Ý[ÛŠJ^ØÛÛœÝOHœÝš[™ÈOO]\[ÙˆOÙNŠ[OOY_›ÚYOOYOÝ›ÚY™KšY
_ˆŽÜ™]\›‹×Š™ZXÛ\ßØ\˜YÙJJß	
KË\Ý
JOÈ™ZXÛ\ÈŽ‹×ÙX\ÛœÊß	
KË\Ý
JOÈÙX\ÛœÈŽ‹×˜Ú\˜XÝ\œÊß	
KË\Ý
JOÈ˜Ú\˜XÝ\œÈŽ‹×Š™YÚ[ÛœßØØ][Ûœß^Ü™_XÝ]š]Y\ß›Ü\Y\ß[š[X[ÊJß	
KË\Ý
JOÈÛÜ›Ž‹×›Z\ÜÚ[ÛœÊß	
KË\Ý
J_œÝÜžKÝ[Y[[™HOOXOÈ›Z\ÜÚ[ÛœÈŽˆœ˜Y[ÈOOXOÈœ˜Y[ÈŽ‹×ŠØÜ™Y[œÚÝßšY[ÜßYYX_\ÛÜšßØ[\\œßÛÝ™\œÊJß	
KË\Ý
JOÈ›YYXHŽ‹×ŠÝZY\ßYXÚ[šXÜß™]ÜßØ[YJJß	
KË\Ý
JOÈ™Y]ÜšX[Žˆ™Ù[™\˜[ŸJ
KJJ
K\ÙSY[[ÊJ

OOŠ
KJOO™K™š[\ŠOOˆSÛŠKJJJJKKœÜÚ[\œÊKÙKKœÜÚ[\œ×JK\œÛÛYJOOˆ•™ZXÛHOOYKšÚ[™
KO\›[™ÝŒ	‰œ™]™\žJOOˆÚ\˜XÝ\ˆOOYKšÚ[™
KÏSJ›X\
OO™KšÚ[™
JKSJ™š[\ŠOOˆ•™ZXÛHOOYKšÚ[™
K›X\
OOžÝ˜\ˆNÜ™]\›ˆ[OOJOYK˜]šX]\Ê_›ÚYOOXOÝ›ÚY˜K“X[Y˜XÝ\™\ŸJJKSJ™š[\ŠOOˆ•™ZXÛHOOYKšÚ[™
K›X\
OO™K˜Ø]YÛÜžJJKSJ›X\
OO•ÐJKJJJKÏJJ
K\ÙSY[[ÊJ

OO™[˜Ý[ÛŠKK
^ØÛÛœÝÏQJKœ]Y\žJKYK™š[\ŠOOžØÛÛœÝYK˜]šX]\ßßNÚYŠ[ˆOOXKšÚ[™	‰™KšÚ[™OOXKšÚ[™
\™]\›ˆLNÚYŠ[ˆOOXK›XZÙ\‰‰›‹“X[Y˜XÝ\™\ˆOOXK›XZÙ\Š\™]\›ˆLNÚYŠ[ˆOOXK™ZXÛPÛ\ÜÉ‰™K˜Ø]YÛÜžHOOXK™ZXÛPÛ\ÜÊ\™]\›ˆLNÚYŠ[ˆOOXK™Ü›Ý\	‰•ÐJK
HOOXK™Ü›Ý\
\™]\›ˆLNÚYŠœÜ˜Z]OOXK˜ÛÝ™\˜YÙI‰™KœXÙZÛ\’[XYÙJ\™]\›ˆLNÚYŠ˜ÛÛ^OOXK˜ÛÝ™\˜YÙI‰ŠYKœXÙZÛ\’[XYÙ_YK˜ÛÛ^[XYÙJJ\™]\›ˆLNÚYŠ›Z\ÜÚ[™ÈOOXK˜ÛÝ™\˜YÙI‰ŠYKœXÙZÛ\’[XYÙ_K˜ÛÛ^[XYÙJJ\™]\›ˆLNÚYŠœÛÝ\˜ÙYOOXK˜ÛÝ™\˜YÙI‰™KœXÙZÛ\’[XYÙJ\™]\›ˆLNÚYŠœXÙZÛ\ˆOOXK˜ÛÝ™\˜YÙI‰ˆYKœXÙZÛ\’[XYÙJ\™]\›ˆLNØÛÛœÝQJÙK]KK˜Ø]YÛÜžKKœÝX]KKšÚ[™‹“X[Y˜XÝ\™\‹–ÈÜ™Y]Y\™›Ü›Y\ˆ—K–ÈÜ™Y]Y\È—K‹”›ÙÜ˜[[YK–È“ÜšYÚ[˜[Ü™Y]—K–È“YYXHÜ™Y]È—KÐJK
WK™š[\Š›ÛÛX[ŠKš›Ú[ŠˆŠJNÜ™]\›ˆËœÜ]
×ÊËÊK™]™\žJOOœ‹š[˜ÛY\ÊJJ_JNÜ™]\›ˆ˜^ˆˆOOXKœÛÜ	‰ˆž˜HˆOOXKœÛÜ‹œÛÜ

K
OO‘ÐJK]K]JJŠ˜^ˆOOXKœÛÜÌN‹LJJKÈœÜYY‹˜XØÙ[\˜][Ûˆ‹š[™[™È—Kš[˜ÛY\ÊKœÛÜ
I‰›‹œÛÜ

K
OOžÝ˜\ˆË‹‹Ü™]\›Š[OOJÏ[[OOJ]™ZXÛTÝ]Ê_›ÚYOO[Ý›ÚY›–ØKœÛÜJI‰›ÚYOO[ÏÛÎ‹LJKJ[OOJ[[OOJYK™ZXÛTÝ]Ê_›ÚYOO[Ý›ÚY›ØKœÛÜJI‰›ÚYOO\ÜŽ‹LJ_ÐJK]K]J_JK›Z\ÜÚ[ÛœÈOO]	‰ˆ™™X]\™YOOXKœÛÜ	‰›‹œÛÜ

KJOOŠ[X™\‹š\Ñš[š]JKœÝÜžSÜ™\ŠOÙKœÝÜžSÜ™\ŽŒKÌ
KJ[X™\‹š\Ñš[š]JKœÝÜžSÜ™\ŠOØKœÝÜžSÜ™\ŽŒKÌ
_
KŸJ‹JKÜ‹WJK\‹™Ü›Ý\Y	‰ˆ™™X]\™YOO\‹œÛÜ	‰ˆ[OO\‹™Ü›Ý\ÏJJ
K\ÙSY[[ÊJ

OO™[˜Ý[ÛŠKKHL
^ÚYŠ]
\™]\›ˆK›[™ÝÖÞÛX™[ˆ[[šY\È‹][\Î™_WN–×NØÛÛœÝÏ[™]ÈX\Ù›ÜŠÛÛœÝˆÙˆJ^ØÛÛœÝOUÐJ‹JNÛËš\ÊJ_ËœÙ]
K×JKË™Ù]
JKœ\Ú
Š_\™]\›–Ë‹‹›×K›X\

ÙKWJOOŠÛX™[™K][\Î˜_JJKœÛÜ

KJOO‘PJK›X™[
KQPJK›X™[
_ÐJK›X™[K›X™[
J_JËKŠKÝËK—JKÏY[˜Ý[ÛŠKJ^Û]SX]›X^
JNÜ™]\›ˆK™›]X\

ÛX™[™K][\Î˜_JOOžÚYŠ]
\™]\›–×NØÛÛœÝÏXKœÛXÙJ
NÜ™]\›ˆO[Ë›[™ÝÞÛX™[™KÝ[˜K›[™Ý][\Î›ßW_J_JËÊKVÈšÚ[™‹›XZÙ\ˆ‹™ZXÛPÛ\ÜÈ‹˜ÛÝ™\˜YÙH‹™Ü›Ý\‹œÛÜ—K™š[\ŠOOœ–ÙWHOOTVÙWJK›[™ÝÏJKJOOžÛ
OŠË‹‹ÙWN˜_JJKJ
_KÏJ
OOžÛ
JKJ
_NÜ™]\›ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙË\ÙXÝ[ÛˆÚ[™[X]XËXØ][ÙÝYHØ][ÙÝYKHŠÛK™]K]\ÝYŽ›ÊÈ‹\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[\ÙXÝ[Û‹ZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞ
Jšˆ‹È™]K]\ÝYŽ›ÊÈ‹ZXY[™È‹Ú[™[Ž›ŸJK
Ê
KšœÞÊJœÜ[ˆ‹È™]K]\ÝYŽ›ÊÈ‹XÛÝ[‹˜\šXK[]™HŽˆœÛ]H‹Ú[™[Ž–ÊÊ
KšœÞ
J^KÝ˜[YN”Ýš[™ÊË›[™Ý
KœYÝ\
‹ŒŠK˜\šX[ˆ›[X™\ˆŸJKˆ‹OOO]Ë›[™ÝÈ™[žHŽˆ™[šY\È—_JW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙÝYK]ÛÛ˜\ˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ›X™[‹ØÛ\ÜÓ˜[YNˆœÜ[Z[œ]Ø][ÙÝYK\ÙX\˜Ú‹Ú[™[Ž–ÊÊ
KšœÞ
JYÜÚ^™NŒNJK
Ê
KšœÞ
Jš[œ]‹Ý˜[YNœ‹œ]Y\žKÛÚ[™ÙN™OOšÊœ]Y\žH‹K\™Ù]˜[YJKXÙZÛ\Žˆ‘š[™[ˆ[žK‹‹ˆ‹˜\šXK[X™[Žˆ”ÙX\˜Ú\ÈÛÛXÝ[Ûˆ‹™]K]\ÝYŽ›ÊÈ‹Yš[\ˆŸJK‹œ]Y\žI‰ŠÊ
KšœÞ
J˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOšÊœ]Y\žH‹ˆŠK˜\šXK[X™[ŽˆÛX\ˆš[\ˆ‹™]K]\ÝYŽ›ÊÈ‹XÛX\ˆ‹Ú[™[ŽŠÊ
KšœÞ
JÞÜÚ^™NŒMŸJ_JW_JK
Ê
KšœÞ
JÓØÚ[™[ŽŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙÝYKYš[\‹\[™[‹™]K]\ÝYŽ›ÊÈ‹Yš[\‹\[™[‹Ú[™[Ž–ÊÊ
KšœÞ
JÓØ\ÐÚ[ˆLÚ[™[ŽŠÊ
KšœÞÊJ˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆœÚ]KYš[\‹]šYÙÙ\ˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JšËÜÚ^™NŒMßJK
Ê
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–È‘š[\œÈ‹Èˆ
ŠÞ
ÈŠHŽˆˆ—_JK
Ê
KšœÞ
JZÜÚ^™NŒMJW_J_JK
Ê
KšœÞ
JØÛ\ÜÓ˜[YNˆœÚ]K]ZK\Ý\™˜XÙHÚ]KYš[\‹\ÜÝ™\ˆ‹[YÛŽˆ™[™‹ÚYSÙ™œÙ]‹ÛÛ\Ú[Û”Y[™ÎŒL‹™]K[[š\Ë\™]™[ŽˆLÛ“Ü[]]Ñ›ØÝ\Î™OO™Kœ™]™[Y˜][

KÚ[™[ŽŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙÝYKYš[\‹YšY[È‹Ú[™[Ž–Ù‹›[™ÝŒI‰ŠÊ
KšœÞ
JÐKÛX™[ˆØ]YÛÜžH‹˜[YNœ‹™Ü›Ý\ÛÚ[™ÙN™OOšÊ™Ü›Ý\‹JKÜ[ÛœÎ–È[‹‹‹™—K\ÝY›ÊÈ‹YÜ›Ý\ŸJKË›[™ÝŒI‰ŠÊ
KšœÞ
JÐKÛX™[ˆ‘š[\ˆžH\H‹˜[YNœ‹šÚ[™ÛÚ[™ÙN™OOšÊšÚ[™‹JKÜ[ÛœÎ–È[‹‹‹™×K\ÝY›ÊÈ‹]\HŸJK	‰ŠÊ
KšœÞÊJÊ
K‘œ˜YÛY[ØÚ[™[Ž–ÊÊ
KšœÞ
JÐKÛX™[ˆ•™ZXÛHX[Y˜XÝ\™\ˆ‹˜[YNœ‹›XZÙ\‹ÛÚ[™ÙN™OOšÊ›XZÙ\ˆ‹JKÜ[ÛœÎ–È[‹‹‹šK\ÝY›ÊÈ‹[X[Y˜XÝ\™\ˆŸJK
Ê
KšœÞ
JÐKÛX™[ˆ•™ZXÛHÛ\ÜÈ‹˜[YNœ‹™ZXÛPÛ\ÜËÛÚ[™ÙN™OOšÊ™ZXÛPÛ\ÜÈ‹JKÜ[ÛœÎ–È[‹‹‹˜—K\ÝY›ÊÈ‹XÛ\ÜÈŸJW_JKOÊÊ
KšœÞ
JÐKÛX™[ˆ‘š[\ˆžHš\ÝX[]šY[˜ÙH‹˜[YNœ‹˜ÛÝ™\˜YÙKÛÚ[™ÙN™OOšÊ˜ÛÝ™\˜YÙH‹JKÜ[ÛœÎ–ÖÈ˜[‹[[XYÙHÝ]\Ù\È—KÈœÜ˜Z]‹’[XYÙH™Y™\™[˜ÙH—KÈ˜ÛÛ^‹ÛÛ^X[[XYÙHÛ›H—KÈ›Z\ÜÚ[™È‹“›ÈÛÝ\˜ÙY[XYÙH—WK\ÝY›ÊÈ‹XÛÝ™\˜YÙHŸJN™	‰ŠÊ
KšœÞ
JÐKÛX™[ˆ’[XYÙHÝ]\È‹˜[YNœ‹˜ÛÝ™\˜YÙKÛÚ[™ÙN™OOšÊ˜ÛÝ™\˜YÙH‹JKÜ[ÛœÎ–ÖÈ˜[‹[[XYÙHÝ]\Ù\È—KÈœÛÝ\˜ÙY‹’[XYÙH™Y™\™[˜ÙH—KÈœXÙZÛ\ˆ‹“›ÈÛÝ\˜ÙY[XYÙH—WK\ÝY›ÊÈ‹XÛÝ™\˜YÙHŸJK
Ê
KšœÞ
JÐKÛX™[ˆ”ÛÜ[šY\È‹˜[YNœ‹œÛÜÛÚ[™ÙN™OOšÊœÛÜ‹JKÜ[ÛœÎ–ÖÈ™™X]\™Y‹‘™X]\™Yš\œÝ—KÈ˜^ˆ‹“˜[YNˆWLŒLÖˆ—KÈž˜H‹“˜[YNˆ—LŒLÐH—K‹‹™ÖÖÈœÜYY‹”ÜYY˜][™È—KÈ˜XØÙ[\˜][Ûˆ‹XØÙ[\˜][Ûˆ˜][™È—KÈš[™[™È‹’[™[™È˜][™È—WN–×WK\ÝY›ÊÈ‹\ÛÜŸJK
Ê
KšœÞÊJ›X™[‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙÝYKYÜ›Ý\]ÙÙÛH‹Ú[™[Ž–ÊÊ
KšœÞ
JKØÚXÚÙYœ‹™Ü›Ý\YÛÚXÚÙYÚ[™ÙN™OOšÊ™Ü›Ý\Y‹LOOYJK˜\šXK[X™[Žˆ‘Ü›Ý\žHØ]YÛÜžH‹Û\ÜÓ˜[YNˆœÚ]KXÚXÚØ›ÞŸJKˆÜ›Ý\žHØ]YÛÜžH—_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙÝYKYš[\‹XXÝ[ÛœÈ‹Ú[™[Ž–ÊÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙË]šY]Ë]ÙÙÛH‹›ÛNˆ™Ü›Ý\‹˜\šXK[X™[ŽˆÛÛXÝ[Ûˆ^[Ý]‹Ú[™[Ž–ÖÈ™ÜšY‹š×KÈ›\Ý‹Ú×WK›X\

ÙKWJOOŠÊ
KšœÞ
J˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹˜\šXK[X™[Ž™JÈˆšY]È‹]N™JÈˆšY]È‹˜\šXK\™\ÜÙYŽœ‹šY]ÏOOYKÛÛXÚÎŠ
OOšÊšY]È‹JK™]K]\ÝYŽ›ÊÈ‹]šY]ËHŠÙKÚ[™[ŽŠÊ
KšœÞ
JKÜÚ^™NŒMßJ_KJJ_JK
Ê
KšœÞ
J˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆ˜Ø][ÙÝYK\™\Ù]‹ÛÛXÚÎ”Ë™]K]\ÝYŽ›ÊÈ‹\™\Ù]Yš[\œÈ‹Ú[™[Žˆ”™\Ù]š[\œÈŸJW_JW_J_JW_J_JW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙÝYK\™\Ý[[Y]H‹Ú[™[Ž–ÊÊ
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–È”ÚÝÚ[™È‹X]›Z[ŠËË›[™Ý
KˆÙˆ‹Ë›[™Ý_JK
Œ‹œ]Y\žJI‰ŠÊ
KšœÞÊJ˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹ÛÛXÚÎ”ËÚ[™[Ž–ÈÛX\ˆ[‹
Ê
KšœÞ
JÞÜÚ^™NŒLßJW_JW_JK
Ê
KšœÞ
J™]ˆ‹È™]K]\ÝYŽ›ÊÈ‹\™\Ý[È‹Û\ÜÓ˜[YNˆ˜Ø][ÙÝYK\™\Ý[È‹Ú[™[ŽË›X\

K
OOŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙÝYKYÜ›Ý\‹˜\šXK[X™[YžHŽ›ÊÈ‹YÜ›Ý\ZXY[™ËHŠÝÚ[™[Ž–Ý‰‰—Ë›[™ÝŒI‰ŠÊ
KšœÞÊJšXY\ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙÝYKYÜ›Ý\ZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞ
JšÈ‹ÚY›ÊÈ‹YÜ›Ý\ZXY[™ËHŠÝÚ[™[Ž™K›X™[JK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž™KÝ[JW_JKˆ‹
]ŸOOOWË›[™Ý
I‰ŠÊ
KšœÞ
JšÈ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙÝYK\Ü‹[Û›H‹Y›ÊÈ‹YÜ›Ý\ZXY[™ËHŠÝÚ[™[Ž™K›X™[JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[YÜšYŠÊ›\ÝOO\‹šY]ÏÈš\Ë[\ÝŽˆˆŠKÚ[™[Ž™Kš][\Ë›X\

K
OOŠÊ
KšœÞ
JKÛÜ™\Ž][N™K]\Î˜K™Yš^›ßKKšY
J_JW_KK›X™[
J_JK]Ë›[™Ý	‰ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[Y[\H‹™]K]\ÝYŽ›ÊÈ‹Y[\H‹Ú[™[Ž–ÊÊ
KšœÞ
JYÜÚ^™NŒÌJK
Ê
KšœÞ
Jšˆ‹ØÚ[™[Žˆ“›ÈX]Ú\ÈÛˆš[KˆŸJK
Ê
KšœÞ
Jœ‹ØÚ[™[Žˆ•žH[›Ý\ˆ˜[YHÜˆØ]YÛÜžKˆŸJK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœÜ[X]Ûˆ‹ÛÛXÚÎ”ËÚ[™[Žˆ”™\Ù]š[\œÈŸJW_JKË›[™Ý˜É‰ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø][ÙÝYK[[Ü™H‹Ú[™[Ž–ÊÊ
KšœÞÊJ˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆœÜ[X]Ûˆ‹™]K]\ÝYŽ›ÊÈ‹[ØY[[Ü™H‹ÛÛXÚÎŠ
OOJOO™JÌ
KÚ[™[Ž–È“ØY‹X]›Z[ŠË›[™ÝXÊKˆ[Ü™H‹
Ê
KšœÞ
JZÜÚ^™NŒMßJW_JK
Ê
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÓX]›Z[ŠËË›[™Ý
KˆÈ‹Ë›[™Ýˆ[šY\È—_JW_JW_J_KPOUY
œ\È‹ÖÈœ]‹Ùˆ“MHLšM‹Ù^NˆŒX^\ÌŸWKÈœ]‹Ùˆ“LLˆ]ŒM‹Ù^NˆœÍŽN[HŸWWJKOUY
›Z[\È‹ÖÈœ]‹Ùˆ“MHLšM‹Ù^NˆŒX^\ÌŸWWJKPOUY
œ›Ý]KXØÝÈ‹ÖÈœ]‹Ùˆ“LÈL˜NHHHKNHKÍHKÍHM‹Í‹ÍÈ‹Ù^NˆŒLÍMÙLÈŸWKÈœ]‹Ùˆ“LÈÝZH‹Ù^NˆŒ^NHŸWWJKPOJ
OOžØÛÛœÝÙKWOJJ
K\ÙTÝ]JJ›ÖÌJKÝ×OJJ
K\ÙTÝ]JJJNÜ™]\›ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœÜ[[X\‹™]K]\ÝYŽˆœ™YÚ[Û‹[X\‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[[X\\™YÚ[ÛœÈ‹Ú[™[Ž–Ù›Ë›X\
OŠÊ
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YN™KšYOO]šYÈ˜XÝ]™HŽˆˆ‹ÛÛXÚÎŠ
OO˜J
K˜\šXK\™\ÜÙYŽ™KšYOO]šY™]K]\ÝYŽ˜X\\Ù[XÝIÝšYXÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž›[X™\ŸJK
Ê
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÝ›Û™È‹ØÚ[™[Ž]_JK
Ê
KšœÞ
JœÛX[‹ØÚ[™[Ž˜Ø]YÛÜž_JW_JK
Ê
KšœÞ
JKÜÚ^™NŒMßJW_KšY
JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽˆ›X\[Ý™\šY]Ë[›ÝH‹Ú[™[Žˆ’[\Ý˜]]™H™YÚ[ÛˆÝ™\šY]Ë›ÝH˜]šYØX›HØ[Y\^HX\ˆX\\ÛÜšÎˆÕHÝÛ‹ˆ›ÈÛÛXÝX›HÛÛÜ™[˜]\È\™H[\YYˆŸJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[[X\\ÝYÙH‹Ú[™[Ž–ÊÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[[X\\ØÜ›Û‹™]K]\ÝYŽˆ›X\]šY]ÜÜ‹™]K[[š\Ë\™]™[ŽˆLÚ[™[ŽŠÊ
KšœÞ
J™]ˆ‹ÜÝ[NžÝÚYŒL

È‰H‹ZYÚŒL

È‰HŸKÚ[™[ŽŠÊ
KšœÞ
JžKÛX™[ÎˆL_J_J_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X\^›ÛÛKXÛÛ›ÛÈ‹Ú[™[Ž–ÊÊ
KšœÞ
J˜]Ûˆ‹ÛÛÛXÚÎŠ
OO›ÊX]›Z[Š‹
ËŒJJK\ØX›YL‹˜\šXK[X™[Žˆ–›ÛÛH[ˆ‹™]K]\ÝYŽˆ›X\^›ÛÛKZ[ˆ‹Ú[™[ŽŠÊ
KšœÞ
JPKÜÚ^™NŒMßJ_JK
Ê
KšœÞ
J˜]Ûˆ‹ÛÛÛXÚÎŠ
OO›ÊX]›X^
KKŒJJK\ØX›YLK˜\šXK[X™[Žˆ–›ÛÛHÝ]‹™]K]\ÝYŽˆ›X\^›ÛÛK[Ý]‹Ú[™[ŽŠÊ
KšœÞ
JKÜÚ^™NŒMßJ_JK
Ê
KšœÞ
J˜]Ûˆ‹ÛÛÛXÚÎŠ
OO›ÊJK˜\šXK[X™[Žˆ”™\Ù]›ÛÛH‹™]K]\ÝYŽˆ›X\^›ÛÛK\™\Ù]‹Ú[™[ŽŠÊ
KšœÞ
JPKÜÚ^™NŒMßJ_JW_JK
Ê
KšœÞÊJØÛ\ÜÓ˜[YNˆœÜ[[X\\™]šY]È‹Î˜Ü™YÚ[ÛœËÉÙKšYX™]K]\ÝYŽˆ›X\\™YÚ[Û‹Y^Ü™H‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜Î™Kš[XYÙK[ˆˆŸJK
Ê
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÛX[‹ØÚ[™[Ž™K˜Ø]YÛÜž_JK
Ê
KšœÞ
JœÝ›Û™È‹È™]K]\ÝYŽˆ›X\\Ù[XÝY\™YÚ[Ûˆ‹Ú[™[Ž™K]_JK
Ê
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–È“Ü[ˆ™YÚ[Ûˆ‹
Ê
KšœÞ
JKÜÚ^™NŒM_JW_JW_JW_JW_JW_J_NÙ[˜Ý[ÛˆJÝ˜[YN™_J^ØÛÛœÝOTÝš[™ÊJKJJ
K\ÙT™YŠJJKÏJJ
K\ÙT™YŠJ[
KJJ
K\ÙT™YŠJ[
KP

NÜ™]\›ŠJ
K\ÙQY™™XÝ
J

OOžØÛÛœÝO[Ë˜Ý\œ™[[‹˜Ý\œ™[Ï]˜Ý\œ™[ÚYŠ˜Ý\œ™[XKY_[ÏOOX_ŸØÝ[Y[šY[ŸÚ[™ÝË›X]ÚYYXJŠ™Y™\œË\™YXÙY[[Ý[ÛŽˆ™YXÙJHŠK›X]Ú\Ê\™]\›ŽÚYŠK×—
ÉË\Ý
Ê_K×—
ÉË\Ý
JJ\™]\›ŽØÛÛœÝOYK™Ù]›Ý[™[™ÐÛY[™XÝ

NÚYŠK˜›ÝÛOKÜÚ[™ÝËš[›™\’ZYÚ
\™]\›ŽØÛÛœÝÏY[˜Ý[ÛŠKJ^Ü™]\›ˆ[X™\ŠJO[X™\ŠJOËLNŒ_JËJNÛœÙ]]šX]J™]K\›Û\™]š[Ý\È‹ÊKKœÝ[KœÙ]›Ü\J‹K\›ÛY\™XÝ[Ûˆ‹ÊKKœÙ]]šX]J™]K\›ÛXXÝ]™H‹YHŠNØÛÛœÝO\Ù][Y[Ý]


OOžÙKœ™[[Ý™P]šX]J™]K\›ÛXXÝ]™HŠKœ™[[Ý™P]šX]J™]K\›Û\™]š[Ý\ÈŠ_KÌŒ
NÜ™]\›Š
OOžØÛX\•[Y[Ý]
JKKœ™[[Ý™P]šX]J™]K\›ÛXXÝ]™HŠKœ™[[Ý™P]šX]J™]K\›Û\™]š[Ý\ÈŠKKœÝ[Kœ™[[Ý™T›Ü\J‹K\›ÛY\™XÝ[ÛˆŠ__KØK—JK
Ê
KšœÞÊJœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÛ[ÛÝ[ÙÛY]\ˆ‹™YŽ›ËÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÛ[ÛÝ[ÙÛY]\‹]˜[YH‹Ú[™[Ž˜_JK
Ê
KšœÞ
JœÜ[ˆ‹Ü™YŽ›‹Û\ÜÓ˜[YNˆœÛ[ÛÝ[ÙÛY]\‹[Û‹˜\šXKZY[ˆŽˆYHŸJW_J_XÛÛœÝPOJØ]\Î™KØ]™YÛ›N˜OHL_JOOžØÛÛœÝÝ×OJJ
K\ÙTÝ]JJ[ŠK[‹™š[\ŠOO™K˜ÛÛ\]Yš[˜ÛY\ÊKšY
JK›[™ÝSX]œ›Ý[™
‹Û‹›[™Ý
ŒL
K[Ü‹™š[\ŠOO™KœØ]™Yš[˜ÛY\ÊKšY
JNÜ™]\›ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙÜ™\ÜË\YÙH‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙÜ™\ÜË\Ý]È‹™]K]\ÝYŽˆœ›ÙÜ™\ÜË\Ý[[X\žH‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
J^KßJK
Ê
KšœÞÊJœÝ›Û™È‹È™]K]\ÝYŽˆ˜ÛÛ\]Y]Ý[‹Ú[™[Ž–ÊÊ
KšœÞ
JKÝ˜[YN›ŸJK
Ê
KšœÞÊJœÛX[‹ØÚ[™[Ž–ÈˆÈ‹‹›[™Ý_JW_JK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ]\È\ÚÜÈÚXÚÙYÙ™ˆŸJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
J	ßJK
Ê
KšœÞ
JœÝ›Û™È‹È™]K]\ÝYŽˆœØ]™Y]Ý[‹Ú[™[ŽŠÊ
KšœÞ
JKÝ˜[YN››[™ÝJ_JK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ‘[šY\È›ÛÚÛX\šÙYŸJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™]šXÙKYÝŸJK
Ê
KšœÞ
JœÝ›Û™È‹ØÛ\ÜÓ˜[YNˆ™]šXÙK[X™[‹Ú[™[Žˆ•TÈU’PÑHŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ“ØØ[Û›Kˆ›ÈXØÛÝ[ÜˆØ[YK\Ø]™H[šËˆŸJW_JW_JKXI‰ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜ÚXÚÛ\Ý\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[\ÙXÝ[Û‹ZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞ
Jšˆ‹È™]K]\ÝYŽˆœ\œÛÛ˜[XÚXÚÛ\ÝZXY[™È‹Ú[™[Žˆ”\œÛÛ˜[ÚXÚÛ\ÝŸJK
Ê
KšœÞÊJœÜ[ˆ‹È™]K]\ÝYŽˆ˜ÚXÚÛ\Ý\\˜Ù[YÙH‹Ú[™[Ž–ÊÊ
KšœÞ
J^KÝ˜[YN˜	ÜŸIX˜\šX[ˆ›[X™\ˆŸJKˆÙˆ\È\œÛÛ˜[ÚXÚÛ\Ý—_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜ÚXÚÛ\Ý[Y]\ˆ‹›ÛNˆœ›ÙÜ™\ÜØ˜\ˆ‹˜\šXK[X™[Žˆ”\œÛÛ˜[]\ÈÚXÚÛ\ÝÛÛ\][Ûˆ‹˜\šXK]˜[Y[›ÝÈŽ›‹˜\šXK]˜[Y[Z[ˆŽŒ˜\šXK]˜[Y[X^Ž›‹›[™Ý™]K]\ÝYŽˆ˜ÚXÚÛ\Ý[Y]\ˆ‹Ú[™[ŽŠÊ
KšœÞ
JœÜ[ˆ‹ÜÝ[NžÝÚY˜	ÜŸIX_J_JK
Ê
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆœÜ[[]]Y‹™]K]\ÝYŽˆœ›ÙÜ™\ÜËY\ØÛZ[Y\ˆ‹Ú[™[Žˆ•˜XÚÈ[Ý\ˆØ^H›ÝYÚ\È]\Ë›ÝÕH’WLŒN\È[‹YØ[YHÛÛ\][Û‹ˆŸJK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[]XœÈ‹Ú[™[Ž–È[‹“Ü[ˆ‹ÛÛ\]Y—K›X\
OOŠÊ
KšœÞ
J˜]Ûˆ‹È˜\šXK\™\ÜÙYŽOOYKÛ\ÜÓ˜[YNOOYOÈ˜XÝ]™HŽˆˆ‹™]K]\ÝYŽ˜ÚXÚÛ\ÝYš[\‹IÙKÓÝÙ\Ø\ÙJ
_XÛÛXÚÎŠ
OO›ÊJKÚ[™[Ž™_KJJ_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜ÚXÚÛ\Ý\›ÝÜÈ‹Ú[™[Ž›‹™š[\ŠOOˆ[OO]
ÛÛ\]YOO]ÙK˜ÛÛ\]Yš[˜ÛY\ÊKšY
NˆYK˜ÛÛ\]Yš[˜ÛY\ÊKšY
JJK›X\
OOŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜ÚXÚÛ\Ý\›ÝÈŠÊK˜ÛÛ\]Yš[˜ÛY\ÊKšY
OÈ˜ÛÛ\]YŽˆˆŠKÚ[™[Ž–ÊÊ
KšœÞ
J˜]Ûˆ‹Ü›ÛNˆ˜ÚXÚØ›Þ‹˜\šXKXÚXÚÙYŽ™K˜ÛÛ\]Yš[˜ÛY\ÊKšY
K˜\šXK[X™[Ž˜K]KÛÛXÚÎŠ
OO™KÙÙÛPÛÛ\]JKšY
K™]K]\ÝYŽ˜ÚXÚÛ\Ý]ÙÙÛKIØKšYXÚ[™[Ž™K˜ÛÛ\]Yš[˜ÛY\ÊKšY
OÊÊ
KšœÞ
JKÜÚ^™NŒNJNŠÊ
KšœÞ
JPËÜÚ^™NŒNJ_JK
Ê
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÛX[‹ØÚ[™[Ž˜K™Ü›Ý\JK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[Ž˜K]_JW_JK
Ê
KšœÞ
JÝÎ˜Kœ]˜\šXK[X™[Ž˜Ü[Žˆ	ØK]_X™]K]\ÝYŽ˜ÚXÚÛ\Ý[Ü[‹IØKšYXÚ[™[ŽŠÊ
KšœÞ
JKÜÚ^™NŒŒJ_JW_KKšY
J_JKÛÛ\]YOO]	‰ˆ[‰‰ŠÊ
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆœÜ[Y[\K[[™H‹™]K]\ÝYŽˆ˜ÚXÚÛ\ÝY[\H‹Ú[™[Žˆ“›ÈÛÛ\]Y\ÚÜËˆŸJK“Ü[ˆOO]	‰›OO[‹›[™Ý	‰ŠÊ
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆœÜ[Y[\K[[™H‹™]K]\ÝYŽˆ˜ÚXÚÛ\ÝX[YÛ™H‹Ú[™[Žˆ[]\È\ÚÜÈÛÛ\]YˆŸJW_JK›[™ÝÊÊ
KšœÞ
JKÚ][\Î›]\Î™K™Yš^ˆœØ]™Y‹]Nˆ”Ø]™Y[šY\ÈŸJNŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[Y[\H‹™]K]\ÝYŽˆœØ]™YY[\H‹Ú[™[Ž–ÊÊ
KšœÞ
J	ÜÚ^™NŒÌŸJK
Ê
KšœÞ
Jšˆ‹ØÚ[™[Žˆ“›Ý[™ÈØ]™YY]ˆŸJK
Ê
KšœÞ
Jœ‹ØÚ[™[Žˆ’ÙY\›Ùš[\È[™[XYÙ\È\™H›Üˆ[Ý\ˆ™^š\Ú]ˆŸJK
Ê
KšœÞÊJØÛ\ÜÓ˜[YNˆœÜ[X]Ûˆ‹Îˆ‹Ü™YÚ[ÛœÈ‹™]K]\ÝYŽˆœØ]™Y\Ý\Y^Üš[™È‹Ú[™[Ž–Èœ›ÝÜÙH™YÚ[ÛœÈ‹
Ê
KšœÞ
JKÜÚ^™NŒMŸJW_JW_JW_J_K	OJÝÙX\ÛœÎ™OHLKÜÚ[\œÎ˜OHL_JOOžØÛÛœÝÝ×OWÝ

KJOØ\Ž™\ŠK™š[\ŠOO˜_YKœÜÚ[\ŠKVÈ˜H‹˜ˆ‹˜È—K\‹›X\

KJOOžÝ˜\ˆÎÜ™]\›ˆ‹œÛÛYJOO˜KšYOO]™Ù]
JJOÝ™Ù]
JNš\ÊJOÈˆŽŠ[OOJÏ[–ØWJ_›ÚYOO[ÏÝ›ÚY›ËšY
_ˆŸJKO]š\Ê˜ÈŠKÏ[œÛXÙJOÌÎŒŠK›X\
OO›‹™š[™
OO˜KšYOOYJJKOJKJOOžØÛÛœÝ[™]ÈT“ÙX\˜Ú\˜[\Ê
NÜ‹™›Ü‘XXÚ

ÊOO›‹œÙ]
ÏOOYOØN›Û×JJK_OOY_‹™[]J˜ÈŠKÊ‹Ü™\XÙNˆLJ_KOYOÖÈ•\H‹‘[XYÙH‹”šXÙH‹]˜Z[Xš[]H—N–È“X[Y˜XÝ\™\ˆ‹Û\ÜÈ‹”ÜYY˜][™È‹XØÙ[\˜][Ûˆ‹’[™[™È‹“Ù™‹\›ØY˜][™È‹”Ý™[™Ý‹•ÜÜYY‹”šXÙH‹]˜Z[Xš[]H‹”ÙX]È‹‘š]™H—NÜ™]\›ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜ÛÛ\\š\ÛÛ‹\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[\ÙXÝ[Û‹ZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞ
Jšˆ‹ØÚ[™[Žˆ’XYÈXYŸJKZI‰ŠÊ
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœÜ[X]ÛˆÙXÛÛ™\žH‹™]K]\ÝYŽˆ˜ÛÛ\\™KXY‹ÛÛXÚÎŠ
OOJ‹Ì—JKÚ[™[Ž–ÊÊ
KšœÞ
JPKÜÚ^™NŒM_JKˆY\™—_JKI‰ŠÊ
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœÜ[X]ÛˆÙXÛÛ™\žH‹™]K]\ÝYŽˆ˜ÛÛ\\™K\™[[Ý™K]\™‹ÛÛXÚÎŠ
OOžØÛÛœÝO[™]ÈT“ÙX\˜Ú\˜[\Ê
NÙK™[]J˜ÈŠKÊKÜ™\XÙNˆLJ_KÚ[™[Ž–ÊÊ
KšœÞ
JÞÜÚ^™NŒM_JKˆ™[[Ý™H\™—_JW_JK
Ê
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆœÜ[[]]Y‹™]K]\ÝYŽˆ˜ÛÛ\\™KY\ØÛZ[Y\ˆ‹Ú[™[ŽˆÛÛ[][š]H™Y™\™[˜ÙH[šY\Ëˆ™ZXÛH˜][™ÜÈ\™HLŒLÌLÛÝ\˜ÙHÝ]˜\œË›ÝYX\Ý\™YÜÜYYËˆ[™\šYšYY˜[Y\È\™H›ÝØÛÜ™YˆŸJK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YN˜ÛÛ\\š\ÛÛ‹YÜšYÛÛ[[œËIØË›[™ÝXÚ[™[Ž˜Ë›X\

K
OOŠÊ
KšœÞÊJ˜\XÛH‹ØÛ\ÜÓ˜[YNˆ˜ÛÛ\\š\ÛÛ‹XÛÛ[[ˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜ÛÛ\\š\ÛÛ‹\XÚÙ\ˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÙOÈ•ÙX\ÛˆŽˆ•™ZXÛH‹ˆ‹
ÌW_JK
Ê
KšœÞ
JÐKÝ˜[YN›ÝK\ÝY˜ÛÛ\\™K\Ù[XÝIÝXÛÚ[™ÙN™OOJJKX™[˜ÚÛÜÙH	ÙOÈÙX\ÛˆŽˆ™ZXÛHŸH	Ý
Ì_XÙX\˜ÚX›NˆYKÜ[ÛœÎ–ÞÝ˜[YNˆˆ‹X™[ˆ”Ù[XÝ[ˆ[žHŸK‹‹›‹›X\
OOŠÝ˜[YN™KšYX™[™K]K\ØX›Y˜ËœÛÛYJ
KÊOO›ÈOO]	‰Š[OOX_›ÚYOOXOÝ›ÚY˜KšY
OOOYKšY
_JJW_JW_JKOÊÊ
KšœÞÊJÊ
K‘œ˜YÛY[ØÚ[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜Î˜Kš[XYÙK[˜KœXÙZÛ\’[XYÙOÈ•™ZXÛH[XYÙH›Ý™\šYšYYŽ˜K]KÛ‘\œ›ÜŽ™OOžØKš[XYÙQ˜[˜XÚÉ‰ˆYK˜Ý\œ™[\™Ù]œÜ˜Ë™[™ÕÚ]
Kš[XYÙQ˜[˜XÚÊI‰ŠK˜Ý\œ™[\™Ù]œÜ˜ÏXKš[XYÙQ˜[˜XÚÊ__JK
Ê
KšœÞÊJÝÎ˜Kœ]™]K]\ÝYŽ˜ÛÛ\\™KY]Z[IÝXÚ[™[Ž–ÊÊ
KšœÞ
JšÈ‹ØÚ[™[Ž˜K]_JK
Ê
KšœÞ
JKÜÚ^™NŒMßJW_JK
Ê
KšœÞ
J™‹ØÚ[™[Ž›K›X\
OOŠÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
J™‹ØÚ[™[Ž™_JK
Ê
KšœÞ
J™‹È™]K]\ÝYŽ˜ÛÛ\\™KIÝKIÙKÓÝÙ\Ø\ÙJ
Kœ™\XÙP[
ˆ‹‹HŠ_XÚ[™[Ž˜K˜]šX]\ÖÙW_JW_KJJ_JK
Ê
KšœÞÊJ˜H‹Ú™YŽ˜KœÛÝ\˜ÙK\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹™]K]\ÝYŽ˜ÛÛ\\™K\ÛÝ\˜ÙKIÝXÚ[™[Ž–È‘ÕHÝÛˆOOXK™]PÜ™Y]È‘]NˆÕHÝÛˆŽˆ‘ÕP˜\ÙH™Y™\™[˜ÙH‹ˆ‹
Ê
KšœÞ
JKÜÚ^™NŒMJW_JW_JNŠÊ
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆ˜ÛÛ\\š\ÛÛ‹Y[\H‹™]K]\ÝYŽ˜ÛÛ\\™KY[\KIÝXÚ[™[Žˆ”XÚÈ[ˆ[žHX›Ý™HÈÛÛ\\™KˆŸJW_K–ÝJJ_JW_J_KOVÖÈ’\ÈšXÙH]\È[ˆÙ™šXÚX[›ØÚÜÝ\ˆÙXœÚ]OÈ‹“›ËˆšXÙH]\È\È[ˆ[™\[™[˜[ˆÛÛ\[š[Û‹ˆ]\È›ÝY™š[X]YÚ]›ØÚÜÝ\ˆØ[Y\ÈÜˆZÙKUÛÈ[\˜XÝ]™Kˆ—KÈ•ÚXÚ]›Ü›\ÈÙ\È›ØÚÜÝ\ˆ\ÝÈ‹•HÙ™šXÚX[ÕH’HÚ]H\ÝÈ^TÝ][ÛˆH[™›ÞÙ\šY\ÈËˆÚXÚÈ›ØÚÜÝ\—LŒN\ÈÝ\œ™[[››Ý[˜Ù[Y[È›Üˆ]˜Z[Xš[]Kˆ›ÈÈ™[X\ÙH\È[™™\œ™Y\™Kˆ—KÈ‘Ù\È\È˜XÚÈ^HØ[YHØ]™OÈ‹“›ËˆHÚXÚÛ\Ý™XÛÜ™È[Ý\ˆ^Ü˜][ÛˆÙˆ\È]\Ëˆ]\È›ÝÛÛ›™XÝYÈÕH’H[™Ù\È›ÝØ[Ý[]H[ˆ[‹YØ[YHÛÛ\][Ûˆ\˜Ù[YÙKˆ—KÈ•Ú\™H\™H^H›ÛÚÛX\šÜÈÝÜ™YÈ‹’[ˆ\Èœ›ÝÜÙ\—LŒN\ÈØØ[ÝÜ˜YÙHÛˆ\È]šXÙKˆ[›Ý\ˆœ›ÝÜÙ\ˆÜˆ]šXÙH\ÈHÙ\\˜]HÛÛXÝ[Û‹ˆÛX\š[™ÈÚ]HÝÜ˜YÙH™[[Ý™\È[Ý\ˆØ]™Y[šY\È[™ÚXÚÛ\Ýˆ—KÈ•ÚH\™HÛÛYHØ][ÙÜÈ[\OÈ‹•^H]™H›ÝY]™XÙZ]™YÛÝ\˜ÙKXÚXÚÙY[šY\Ëˆ[ˆ[\H[™^\È›ÝHÛZ[H]H™X]\™H\ÈXœÙ[œ›ÛHHØ[YKˆ—KÈ\™HÛÛ[][š]HY[YšXØ][ÛœÈÙ™šXÚX[ÜXÚYšXØ][ÛœÏÈ‹“›ËˆÛÛ[][š]HØ][ÙÈ[šY\È\™HX™[YÙ\\˜][Kˆ[™\šYšYYšXÙ\Ë[XYÙH˜[Y\ËÜYYÈ[™[›ØÚÈ™\]Z\™[Y[È\™H›Ýš[YÚ]ÝY\ÜÙ\ÈÜˆÝ]\ÝXÜÈœ›ÛH[›Ý\ˆÕHØ[YKˆ—WKOJÜÙXÝ[ÛŽ™_JOOŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜ÛÝ™\˜YÙK\ÙXÝ[Ûˆ‹™]K]\ÝYŽˆ˜ÛÝ™\˜YÙK\Ý]\È‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JËÜÚ^™NŒŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[ZÚXÚÙ\ˆ‹Ú[™[Ž™K]KÕ\\Ø\ÙJ
_JK
Ê
KšœÞ
Jšˆ‹È™]K]\ÝYŽˆ˜ÛÝ™\˜YÙKZXY[™È‹Ú[™[Žˆ“›Ý[™ÈÛˆš[HY]ˆŸJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜ÛÝ™\˜YÙK\Ý]\È‹™]K]\ÝYŽˆ˜ÛÝ™\˜YÙK[X™[‹Ú[™[Žˆ”S‘S‘ÈÓÕTÑHÒPÒÈŸJK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽˆ˜ÛÝ™\˜YÙKY\ØÜš\[Ûˆ‹Ú[™[Žˆ“›Ý[™È\È\ÜÙYÝ\ˆÛÝ\˜ÙHÚXÚÜÈ›Üˆ\ÈÙXÝ[ÛˆY]ˆ]Ù\È›ÝYX[ˆ]\ÈZ\ÜÚ[™Èœ›ÛHÕH’KˆŸJK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽˆ˜ÛÝ™\˜YÙK\ÛXÞH‹Ú[™[Žˆ•ÙHÈ›Ýš[Ø\ÈÚ]]Hœ›ÛHÝ\ˆÕHØ[Y\ËˆŸJK
Ê
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞÊJ˜H‹Ú™YŽˆšÎ‹ËÝÝÝËœ›ØÚÜÝ\™Ø[Y\Ë˜ÛÛKÕ’H‹\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹™]K]\ÝYŽˆ˜ÛÝ™\˜YÙK[Ù™šXÚX[\ÛÝ\˜ÙH‹Ú[™[Ž–È“Ù™šXÚX[ÕH’HÚ]H‹
Ê
KšœÞ
JKÜÚ^™NŒMŸJW_JK
Ê
KšœÞÊJÝÎˆ‹ÙÝZY\ËÙÙ][™Ë\Ý\YÜÛÝ\˜ÙKYÝZYH‹™]K]\ÝYŽˆ˜ÛÝ™\˜YÙK\ÛÝ\˜ÙK\ÛXÞH‹Ú[™[Ž–È”ÛÝ\˜Ù\È[™™\šYšXØ][Ûˆ‹
Ê
KšœÞ
JšÜÚ^™NŒMŸJW_JW_JW_JW_JNÙ[˜Ý[ÛˆPJÜÙXÝ[ÛŽ™K]\Î˜_J^ØÛÛœÝ\œŠKšY
KÏVÈœ›ÙÜ™\ÜÈ‹œ›ÙÜ™\ÜËØÚXÚÛ\Ý‹œØ]™Y—Kš[˜ÛY\ÊKšY
KVÈ˜ÛÛ\\™H‹ÙX\ÛœËØÛÛ\\™H—Kš[˜ÛY\ÊKšY
NÜ™]\›ŠÊ
KšœÞÊJÊ
K‘œ˜YÛY[ØÚ[™[Ž–ÊÊ
KšœÞ
JÞÜÙXÝ[ÛŽ™_JK
Ê
KšœÞ
JžÜÙXÝ[ÛŽ™KÛÛ\XÝ›[™ÝŒ	‰ˆ[É‰ˆ[ŸJK
Ê
KšœÞ
J^ÜÙXÝ[ÛŽ™_JK›X\OOYKšY	‰ŠÊ
KšœÞ
JPKßJKÉ‰ŠÊ
KšœÞ
JPKØ]\Î˜KØ]™YÛ›NˆœØ]™YOOYKšYJKˆ‹‰‰ŠÊ
KšœÞ
J	KÝÙX\ÛœÎˆÙX\ÛœËØÛÛ\\™HOOYKšYÜÚ[\œÎ˜KœÜÚ[\œßJK
™Ø\˜YÙHOOYKšY™ZXÛ\ÈOOYKšYKšYœÝ\ÕÚ]
™ZXÛ\ËÈŠJI‰ŠÊ
KšœÞÊJœ‹ØÛ\ÜÓ˜[YNˆœÜ[[]]Y‹™]K]\ÝYŽˆ™ZXÛKXØ][ÙÝYK\ÛÝ\˜ÙH‹Ú[™[Ž–ÞÈ’[\ÜYX›XÈ™ZXÛHØ][ÙÝYKˆŽ˜	ÚÛŸHÙˆ	ÔÛŸH\ÝY™ZXÛ\È[\ÜYÈ	ÓŸHY[ˆžHHÛÝ\˜ÙKˆ[˜X›HÜÚ[\œÈÈšY]ÈÝÜžK\Ù[œÚ]]™H[šY\Ë˜ˆ‹
Ê
KšœÞ
J˜H‹Ú™YŽˆšÎ‹ËÙÝ]ÝÛ‹˜ÛÛKØÜ™X]ÜœËÙ]H‹\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Ú[™[Žˆ‘]NˆÕHÝÛˆÈÐÈ–HŒŸJW_JK™ÝZY\ËÙ˜\HOOYKšY	‰ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ™˜\K[\Ý‹™]K]\ÝYŽˆ™˜\K[\Ý‹Ú[™[Ž–ÖK›X\

ÙKWK
OOŠÊ
KšœÞÊJ™]Z[È‹ØÚ[™[Ž–ÊÊ
KšœÞÊJœÝ[[X\žH‹È™]K]\ÝYŽ˜˜\K\]Y\Ý[Û‹IÝXÚ[™[Ž–ÙK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[ŽˆŠÈŸJW_JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽ˜˜\KX[œÝÙ\‹IÝXÚ[™[Ž˜_JW_KJJK
Ê
KšœÞÊJ˜H‹Ú™YŽˆšÎ‹ËÝÝÝËœ›ØÚÜÝ\™Ø[Y\Ë˜ÛÛKÕ’H‹\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Û\ÜÓ˜[YNˆœÜ[\ÛÝ\˜ÙK[[šÈ‹™]K]\ÝYŽˆ™˜\K\ÛÝ\˜ÙH‹Ú[™[Ž–È“Ù™šXÚX[ÕH’HÚ]H‹
Ê
KšœÞ
JKÜÚ^™NŒMŸJW_JW_JK[É‰ˆ[‰‰ˆ™ÝZY\ËÙ˜\HˆOOYKšY	‰Š›[™ÝÊÊ
KšœÞ
JKÚ][\Î]\Î˜KÙXÝ[ÛŽ™K]NˆœÝÜžHOOYKšYÈ•H˜XÙ\È™Z[™HÝÜžHŽˆ›YYXHOOYKšYÈ”Ý˜ZYÚœ›ÛHHÙ™šXÚX[\˜Ú]™HŽˆ•Hš[\ÈŸJNˆ›X\ˆOOYKšY	‰ŠÊ
KšœÞ
JKÜÙXÝ[ÛŽ™_JJK]›[™Ý	‰ˆ[É‰ˆ[‰‰ˆ›X\ˆOOYKšY	‰™Kœ\™[	‰ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[\™]\›ˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJÝÎšÛÖÙKœ\™[Kœ]™]K]\ÝYŽˆœ™]\›‹\\™[‹Ú[™[Ž–È‘^Ü™H‹ÛÖÙKœ\™[K]K
Ê
KšœÞ
JšÜÚ^™NŒMßJW_JK
Ê
KšœÞÊJÝÎˆ‹Ù\™XÝÜžH‹™]K]\ÝYŽˆœ™]\›‹Y\™XÝÜžH‹Ú[™[Ž–È‘[[™^‹
Ê
KšœÞ
JKÜÚ^™NŒMßJW_JW_JW_J_XÛÛœÝQUY
œÚ\™KLˆ‹ÖÈ˜Ú\˜ÛH‹ØÞˆŒN‹ÞNˆH‹ŽˆŒÈ‹Ù^Nˆ™ÜNXÙŸWKÈ˜Ú\˜ÛH‹ØÞˆˆ‹ÞNˆŒLˆ‹ŽˆŒÈ‹Ù^NˆÍÛœYÈŸWKÈ˜Ú\˜ÛH‹ØÞˆŒN‹ÞNˆŒNH‹ŽˆŒÈ‹Ù^NˆŒ^ÙÈŸWKÈ›[™H‹ÞNˆŽNH‹ŽˆŒMKˆ‹LNˆŒLËLH‹LŽˆŒMËH‹Ù^NˆÛ^[šÈŸWKÈ›[™H‹ÞNˆŒMKH‹ŽˆŽNH‹LNˆ‹LH‹LŽˆŒLH‹Ù^NˆŒ[ŒÛYZHŸWWJKQUY
›Z[š[Z^™H‹ÖÈœ]‹Ùˆ“NÝŒØLˆˆKLˆ’È‹Ù^NˆšÚˆŸWKÈœ]‹Ùˆ“LŒHLØLˆˆKL‹L•ŒÈ‹Ù^NˆZÌYŒÈŸWKÈœ]‹Ùˆ“LÈMšØLˆˆHˆŒÈ‹Ù^NˆŒNNœˆŸWKÈœ]‹Ùˆ“LMˆŒ]‹LØLˆˆH‹LšÈ‹Ù^Nˆœ^ŸWWJKUY
š[XYÙK[Ù™ˆ‹ÖÈ›[™H‹ÞNˆŒˆ‹ŽˆŒŒˆ‹LNˆŒˆ‹LŽˆŒŒˆ‹Ù^Nˆ˜MœZˆŸWKÈœ]‹Ùˆ“LLHLXLˆˆHKL‹ŽËL‹ŽÈ‹Ù^NˆŒXž›ÎHŸWKÈ›[™H‹ÞNˆŒLËH‹Žˆˆ‹LNˆŒLËH‹LŽˆŒŒH‹Ù^NˆŒ\LY]HŸWKÈ›[™H‹ÞNˆŒN‹ŽˆŒŒH‹LNˆŒLˆ‹LŽˆŒMH‹Ù^Nˆ[[Þ™]HŸWKÈœ]‹Ùˆ“LËNHËNPLKŽNHKŽNHÈ]ŒMLˆˆˆšMËMHKŒL‹KŒŒˆKKKNH‹Ù^Nˆ›[Z™NNŸWKÈœ]‹Ùˆ“LŒHMUXLˆˆL‹L’H‹Ù^NˆÙ[ÍÈŸWWJKÑYOOˆ•™ZXÛHOOYKšÚ[™	‰™KœXÙZÛ\’[XYÙOÈ”XÙZÛ\ˆÈ™ZXÛH[XYÙH›Ý™\šYšYYŽˆ•™ZXÛHOOYKšÚ[™	‰™Kš[XYÙTÛÝ\˜ÙOÙKš[XYÙTÛÝ\˜ÙN™Kš[XYÙTÛÝ\˜ÙOØ[XYÙH™Y™\™[˜ÙHšXH	ÙKš[XYÙTÛÝ\˜Ù_IÙKœÚ\™YÜ˜Z]Èˆ
Ú\™YØÙ[™JHŽˆˆŸHÈ™\ÜXÝ]™HšYÚÈÛ\œØ™KœXÙZÛ\’[XYÙOÈ”XÙZÛ\ˆÈ[XYÙH›Ý™\šYšYYŽ™KœÛÝ\˜ÙKš[˜ÛY\Ê™Ý]ÝÛˆŠOÈ’[XYÙH™Y™\™[˜ÙHšXHÕHÝÛˆÈ™\ÜXÝ]™HšYÚÈÛ\œÈŽ™KœÛÝ\˜ÙKš[˜ÛY\Ê™ÝX˜\ÙHŠOÈ’[XYÙH™Y™\™[˜ÙHšXHÕP˜\ÙHÈ™\ÜXÝ]™HšYÚÈÛ\œÈŽˆ“Ù™šXÚX[›Û[Ý[Û˜[[XYÙ\žHNH›ØÚÜÝ\ˆØ[Y\È‹‘JÚ][N™K^[™Y˜KÙ]^[™YÛ‘[Y[œÚ[ÛœÎ›ßJOOžØÛÛœÝP

KÜ‹OJJ
K\ÙTÝ]JJLJKØËWOJJ
K\ÙTÝ]JJLJKÛKOJJ
K\ÙTÝ]JJLJKÙWOJJ
K\ÙTÝ]JJLJKÏH•šY[ÈOOYKšÚ[™Ü™]\›ŠÊ
KšœÞÊJ™]‹Û^[Ý]ˆ[‰‰ˆYË^[Ý]\[™[˜ÞN˜K˜[œÚ][ÛŽžÛ^[Ý]žÝ\NˆœÜš[™È‹ÝY™›™\ÜÎŒÌ[\[™ÎŒÍX\ÜÎ‹Ž_KÛ\ÜÓ˜[YNˆœ™XÛÜ™[YYXK\[™[‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™[YYXK]ÛÛ˜\ˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹È™]K]\ÝYŽˆ™]Z[[YYXK]\H‹Ú[™[Ž™ÏÈ“Ñ‘’PÒPSRSTˆŽˆ”˜Y[ÈÝ][ÛˆOOYKšÚ[™È”ÕUSÓˆT•ÓÔ’ÈŽˆ’SPQÑH‘Q‘T‘SÑHŸJK
Ê
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÈYÉ‰ŠÊ
KšœÞÊJ˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹˜\šXK[X™[Ž˜OÈ‘š][XYÙH^[Ý]Žˆ‘^[™[XYÙH^[Ý]‹]N˜OÈ‘š][XYÙH^[Ý]Žˆ‘^[™[XYÙH^[Ý]‹˜\šXK\™\ÜÙYŽ˜KÛÛXÚÎŠ
OO
XJK™]K]\ÝYŽˆ™]Z[Y^[™Z[XYÙH‹Ú[™[Ž–ØOÊÊ
KšœÞ
JQÜÚ^™NŒMŸJNŠÊ
KšœÞ
JÚÜÚ^™NŒMŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž˜OÈ‘š]Žˆ‘^[™ŸJW_JK
Ê
KšœÞ
J˜H‹Ú™YŽ™ÏÙKœÛÝ\˜ÙN™Kš[XYÙK\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹™]K]\ÝYŽˆ™]Z[[Ü[‹[ÜšYÚ[˜[‹˜\šXK[X™[Ž™ÏÈ“Ü[ˆ˜Z[\ˆÛˆ[ÝUX™HŽˆ“Ü[ˆÜšYÚ[˜[[XYÙH‹]N™ÏÈ“Ü[ˆÛˆ[ÝUX™HŽˆ“Ü[ˆÜšYÚ[˜[[XYÙH‹Ú[™[ŽŠÊ
KšœÞ
JKÜÚ^™NŒMßJ_JW_JW_JK
Ê
KšœÞ
J™šYÝ\™H‹ØÛ\ÜÓ˜[YN˜™XÛÜ™Z[XYÙH	ÙÏÈœ™XÛÜ™]šY[ÈŽˆˆŸH	ÜŸÏÈˆŽ™È˜Ú[™[XK[YYXK\™XYHŽˆ˜Ú[™[XK[YYXK\[™[™ÈŸX™]K]\ÝYŽˆ™]Z[[YYXKYœ˜[YH‹Ú[™[Ž™É‰œÊÊ
KšœÞ
JšYœ˜[YH‹È™]K]\ÝYŽˆ˜Z[\‹ZYœ˜[YH‹]N˜Ü˜[™Y]]È’H	ÙK]_XÜ˜Î˜Î‹ËÝÝÝËž[Ý]X™K[›ØÛÛÚÚYK˜ÛÛKÙ[X™YÉÙKšY[ÒYOØ]]Ü^OLIœ™[L[ÝÎˆ˜]]Ü^NÈ[˜Üž\Y[YYXNÈXÝ\™KZ[‹\XÝ\™H‹[ÝÑ[ØÜ™Y[ŽˆL™Y™\œ™\”ÛXÞNˆœÝšXÝ[ÜšYÚ[‹]Ú[‹XÜ›ÜÜË[ÜšYÚ[ˆŸJN˜ÏÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™Z[XYÙKY\œ›Üˆ‹™]K]\ÝYŽˆ™]Z[Z[XYÙKY\œ›Üˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JÜÚ^™NŒÌJK
Ê
KšœÞ
Jœ‹ØÚ[™[Žˆ’[XYÙH[˜]˜Z[X›KˆŸJK
Ê
KšœÞÊJ˜H‹Ú™YŽ™KœÛÝ\˜ÙK\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹™]K]\ÝYŽˆ™]Z[Z[XYÙKY\œ›Ü‹\ÛÝ\˜ÙH‹Ú[™[Ž–È“Ü[ˆÛÝ\˜ÙH‹
Ê
KšœÞ
JKÜÚ^™NŒM_JW_JW_JNŠÊ
KšœÞÊJÊ
K‘œ˜YÛY[ØÚ[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜Î›OÙKš[XYÙQ˜[˜XÚÎ™Kš[XYÙK™Y™\œ™\”ÛXÞN™Kš[XYÙTÛÝ\˜ÙOÈ››Ë\™Y™\œ™\ˆŽ›ÚY[™ÏÈ‘ÕH’H›Û[Ý[Û˜[\ÛÜšÈŽ™KœXÙZÛ\’[XYÙ_OÈ•™ZXÛHOOYKšÚ[™È•™ZXÛH[XYÙH›Ý™\šYšYYŽˆ’[XYÙH›Ý™\šYšYYŽ™K]K™]K]\ÝYŽˆ™]Z[Z[XYÙH‹Û“ØY™OOžÞJL
KÊÝÚY™K˜Ý\œ™[\™Ù]›˜]\˜[ÚYZYÚ™K˜Ý\œ™[\™Ù]›˜]\˜[ZYÚJ_KÛ‘\œ›ÜŽŠ
OOžÞJLJKKš[XYÙQ˜[˜XÚÉ‰ˆ[OÜ
L
NJL
_KXÛÙ[™Îˆ˜\Þ[˜ÈŸJKÉ‰ŠÊ
KšœÞÊJ˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆœ™XÛÜ™]šY[Ë\^H‹™]K]\ÝYŽˆ˜Ú[™[XK\^H‹˜\šXK[X™[Ž˜^H	ÙK]_XÛÛXÚÎŠ
OO›
L
KÚ[™[Ž–ÊÊ
KšœÞ
JÚÜÚ^™NŒËš[ˆ˜Ý\œ™[ÛÛÜˆŸJK
Ê
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–È”^H‹K]W_JW_JW_J_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™Z[XYÙKXØ\[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹È™]K]\ÝYŽˆ™]Z[Z[XYÙKXÜ™Y]‹Ú[™[Ž›OÈ”XÙZÛ\ˆÈ^\›˜[[XYÙH[˜]˜Z[X›HŽ›Ñ
J_JK
Ê
KšœÞ
JœÜ[ˆ‹È˜\šXKZY[ˆŽˆYH‹Ú[™[Žˆ•’HÈUTÈŸJW_JW_J_K‘UY
œÚY[XÚXÚÈ‹ÖÈœ]‹Ùˆ“LŒLØÌKLËHËKMËˆŽMXLHHKKËKŒPÍËHŒHNLÕ˜LHHHKLXÌˆKLKŒˆ‹ŒL‹Ì˜LKŒMÈKŒMÈHKLˆÌMLHËŽHMÈHNHXLHHHH^ˆ‹Ù^Nˆ›Ù[^HŸWKÈœ]‹Ùˆ›NHLˆˆˆM‹Ù^Nˆ™›[MÍŸWWJKUY
š[™›È‹ÖÈ˜Ú\˜ÛH‹ØÞˆŒLˆ‹ÞNˆŒLˆ‹ŽˆŒL‹Ù^NˆŒ[YÛ^HŸWKÈœ]‹Ùˆ“LLˆM‹M‹Ù^NˆŒYYHŸWKÈœ]‹Ùˆ“LLˆŒH‹Ù^Nˆ™NX›ÚLÈŸWWJKÑYOO™KœÛÝ\˜ÙKš[˜ÛY\Ê™ÝX˜\ÙHŠOÈ‘ÕP˜\ÙHŽ™KœÛÝ\˜ÙKš[˜ÛY\Ê™Ý]ÝÛˆŠOÈ‘ÕHÝÛˆŽ™KœÛÝ\˜ÙKš[˜ÛY\Ê™ÝM›ÜË˜ÛÛHŠOÈ‘ÕM“ÜÈŽ™KœÛÝ\˜ÙKš[˜ÛY\ÊœÝÙ\œ^˜ÛÛHŠOÈ”ÝÙ\”^Ž™KœÛÝ\˜ÙKš[˜ÛY\Ê™ÝM‹[š]™\œÚ]HŠOÈ‘ÕMˆ[š]™\œÚ]HŽ™KœÛÝ\˜ÙKš[˜ÛY\Ê™ÝMÚZÚK™]HŠOÈ‘ÕM•ÚZÚHŽ™KœÛÝ\˜ÙKš[˜ÛY\Ê™ÝM˜XÚÙ\‹›Ü™ÈŠOÈ‘ÕM•˜XÚÙ\ˆŽ™KœÛÝ\˜ÙKš[˜ÛY\Êœ›ØÚÜÝ\™Ø[Y\Ë˜ÛÛHŠOÈ”›ØÚÜÝ\ˆØ[Y\ÈŽ™KœÛÝ\˜ÙKš[˜ÛY\Ê™ÝM™]K˜ÛÛHŠOÈ‘ÕM‘UHŽ™KœÛÝ\˜ÙKš[˜ÛY\Ê™Ø[Y]K™ÙÈŠOÈ‘Ø[Y]HŽ™KœÛÝ\˜ÙKš[˜ÛY\Ê™ÝMšZ\ÝË˜ÛÛHŠOÈ‘ÕM’Z\ÝÈŽ™KœÛÝ\˜ÙKš[˜ÛY\Ê™ÝMØ[Ë˜ÛÛHŠOÈ‘ÕM•Ø[ÈŽ™KœÛÝ\˜ÙKš[˜ÛY\Ê™ÝK™^]\‹˜ÛÛHŠOÈ™V]\ˆŽ™KœÛÝ\˜ÙKš[˜ÛY\Ê›[ÛšY^˜ÛÛHŠOÈ“[ÛšY^Žˆ‘^\›˜[ÛÝ\˜ÙH‹QYOO‹×››Ý™\šYšYYÚK\Ý
JKÑYOOˆ”ÝÜžHOOYKšÚ[™È\XÛHŽ™KšÚ[™QJÚ][N™KÙXÝ[ÛŽ˜K]\Î\ÚÎ›Ë[Y[œÚ[ÛœÎ›ŸJOOžØÛÛœÝH“Ù™šXÚX[ÛÝ\˜ÙHOOYKœÝ]\ËYKœÜÚ[\‰‰ˆ]œÜÚ[\œËOVÈ•™ZXÛH‹•ÙX\Ûˆ—Kš[˜ÛY\ÊKšÚ[™
KÏJ
KK
OOžØÛÛœÝÏSØš™XÝ™[šY\ÊK˜]šX]\ßßJK™š[\Š
ËWJOOˆZQ
JJNÚYŠË›[™Ý
Ú\˜XÝ\ˆOOYKšÚ[™ÛËœ\Ú
È”›ÛH‹KšY™[™ÕÚ]
œ›ÝYÛÛš\ÝÈŠOÈ”›ÝYÛÛš\ÝŽˆ”Ý\Ü[™ÈÚ\˜XÝ\ˆ—JNˆ”™YÚ[ÛˆOOYKšÚ[™ÛËœ\Ú
È”™YÚ[Ûˆ\H‹K˜Ø]YÛÜžWKÈ”Ù][™È‹“[ÛšYH—JNˆ•šY[ÈOOYKšÚ[™ÛËœ\Ú
È”X›\ÚYžH‹”›ØÚÜÝ\ˆØ[Y\È—KÈ”^X˜XÚÈ‹–[ÝUX™H—JNˆ\ÛÜšÈOOYKšÚ[™ÛËœ\Ú
È•\H‹”›Û[Ý[Û˜[\ÛÜšÈ—JN™K˜Ø]YÛÜžI‰›Ëœ\Ú
ÈØ]YÛÜžH‹K˜Ø]YÛÜžWJJKÈ‘ÝZYH‹”ÝÜžH—Kš[˜ÛY\ÊKšÚ[™
J^ØÛÛœÝOVÙK™\ØÜš\[Û‹‹‹™Kœ\˜YÜ˜\ß×WK™š[\Š›ÛÛX[ŠKš›Ú[ŠˆŠKœÜ]
×ÊËÊK›[™ÝÛËœ\Ú
È”™XY[™È[YH‹	ÓX]›X^
KX]˜ÙZ[
KÌŒ
J_HZ[˜J_\™]\›–È’[XYÙH‹\ÛÜšÈ—Kš[˜ÛY\ÊKšÚ[™
I‰	‰›Ëœ\Ú
È’[XYÙHÚ^™H‹	ÝÚYHÈ	ÝšZYÚXJKßJJKKŠK™š[\Š
ÙWJOOˆ[È”›ÛH‹Ü™Y]Y\™›Ü›Y\ˆ‹Ü™Y]ÙXÝ[Ûˆ‹Ü™Y]Y\È‹‘]šY[˜ÙH—Kš[˜ÛY\ÊJJNÜ™]\›ŠÊ
KšœÞÊJ˜\ÚYH‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™[Y]H‹˜\šXK[X™[Žˆ‘[žHÝ[[X\žH‹™]K]\ÝYŽˆ™]Z[\Ý[[X\žH‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™[Y]KZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ•HÕÑÕÓˆŸJK
Ê
KšœÞ
JœÜ[ˆ‹È˜\šXKZY[ˆŽˆYH‹Ú[™[Ž˜Ñ
JKÕ\\Ø\ÙJ
_JW_JK
Ê
KšœÞ
J™‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\]ZXÚËY˜XÝÈ‹Ú[™[Ž˜Ë›X\

ÙKWK
OOŠÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
J™‹ØÚ[™[Ž™_JK
Ê
KšœÞ
J™‹È™]K]\ÝYŽ˜]Z[\]ZXÚËY˜XÝIÝXÚ[™[Ž‹×–×Ë‹	WÎŠ×LŒŒL—LŒLËWJÉË\Ý
Ýš[™ÊJJOÊÊ
KšœÞ
J^KÝ˜[YN˜K˜\šX[ˆ›[X™\ˆŸJN˜_JW_KJJ_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\›Ý™[˜[˜ÙHŠÊÈš\Ë[Ù™šXÚX[ŽˆˆŠKÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[ŽœÊÊ
KšœÞ
J‘ÜÚ^™NŒNJNŠÊ
KšœÞ
JÜÚ^™NŒNJ_JK
Ê
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÝ›Û™È‹È™]K]\ÝYŽˆ™]Z[\›Ý™[˜[˜ÙK\Ý]\È‹Ú[™[Ž™KœÝ]\ßJK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽˆ™]Z[\›Ý™[˜[˜ÙK\ÛÝ\˜ÙH‹Ú[™[ŽœÑ
J_JW_JW_JK	‰ŠÊ
KšœÞÊJœ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™XÛÛ^[›ÝH‹™]K]\ÝYŽˆ™]Z[\ÜÚ[\‹\Ý]\È‹Ú[™[Ž–ÊÊ
KšœÞ
J™ÜÚ^™NŒM_JK”ÝÜžH[™\ˆÜ˜\È—_JK”˜Y[ÈÝ][ÛˆOOYKšÚ[™	‰ŠÊ
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™XÛÛ^[›ÝH‹™]K]\ÝYŽˆ™]Z[\˜Y[Ë[›ÝH‹Ú[™[Žˆ“›È]Y[ÈÝ™X[H\ÈÜÝYˆŸJKI‰ŠÊ
KšœÞÊJØÛ\ÜÓ˜[YNˆœ™XÛÜ™\š[X\žK[[šÈ‹Î˜	È•ÙX\ÛˆOOYKšÚ[™È‹ÝÙX\ÛœËØÛÛ\\™HŽˆ‹ØÛÛ\\™HŸOØOIÙKšYI˜X™]K]\ÝYŽˆ™]Z[XÛÛ\\™H‹Ú[™[Ž–ÈÛÛ\\™H‹KšÚ[™ÓÝÙ\Ø\ÙJ
K
Ê
KšœÞ
JšÜÚ^™NŒMßJW_JK”™YÚ[ÛˆOOYKšÚ[™	‰ŠÊ
KšœÞÊJØÛ\ÜÓ˜[YNˆœ™XÛÜ™\š[X\žK[[šÈ‹Îˆ‹ÛX\‹™]K]\ÝYŽˆ™]Z[\™YÚ[Û‹[X\‹Ú[™[Ž–È”™YÚ[ÛˆX\‹
Ê
KšœÞ
JšÜÚ^™NŒMßJW_JKÉ‰ŠÊ
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™XÚXÚÛ\ÝŠÊ˜ÛÛ\]Yš[˜ÛY\ÊËšY
OÈš\ËXÛÛ\]YŽˆˆŠK™]K]\ÝYŽˆ™]Z[XÛÛ\]H‹˜\šXK\™\ÜÙYŽ˜ÛÛ\]Yš[˜ÛY\ÊËšY
KÛÛXÚÎŠ
OOÙÙÛPÛÛ\]JËšY
KÚ[™[Ž–ÊÊ
KšœÞ
JKÜÚ^™NŒMßJK
Ê
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–Ý˜ÛÛ\]Yš[˜ÛY\ÊËšY
OÈ“X\šÙY\È^Ü™YŽˆ“X\šÈ\È^Ü™Y‹
Ê
KšœÞ
JœÛX[‹ØÚ[™[Žˆ”\œÛÛ˜[]\ÈÚXÚÛ\ÝŸJW_JW_JK
Ê
KšœÞÊJØÛ\ÜÓ˜[YNˆœ™XÛÜ™XÛÛXÝ[Û‹[[šÈ‹Î˜Kœ]™]K]\ÝYŽˆ™]Z[XÛÛXÝ[Û‹[[šÈ‹Ú[™[Ž–È[‹K]KÓÝÙ\Ø\ÙJ
K
Ê
KšœÞ
JšÜÚ^™NŒMJW_JW_J_KQUY
›[šËLˆ‹ÖÈœ]‹Ùˆ“NHMÒÐMHHHÈÚˆ‹Ù^NˆŽM]YMHŸWKÈœ]‹Ùˆ“LMHÚ˜MHHHHLLˆ‹Ù^NˆŒXŽ\[ŸWKÈ›[™H‹ÞNˆŽ‹ŽˆŒMˆ‹LNˆŒLˆ‹LŽˆŒLˆ‹Ù^NˆŒZ›Û˜ÝŸWWJKUY
™ÝÛ›ØY‹ÖÈœ]‹Ùˆ“LLˆMUŒÈ‹Ù^Nˆ›NYÌ^HŸWKÈœ]‹Ùˆ“LŒHM]LˆˆKLˆ’XLˆˆKL‹L‹M‹Ù^NˆšZÛŒÚŸWKÈœ]‹Ùˆ›MÈLHHKMH‹Ù^Nˆ˜œœÛÌŸWWJKJK‹‹˜JOOžÙ›ÜŠÛÛœÝÈÙˆJ^Ý˜\ˆØÛÛœÝO[[OOJYK˜]šX]\Ê_›ÚYOO]Ý›ÚYÛ×NÚYŠ›ÚYOOXI‰ˆZQ
JI‰ˆˆˆOOXJ\™]\›ˆ_\™]\›ˆ[KQJÛX™[™K˜[YN˜_JOOžÚYŠ[OOX_›ÚYOOX_Q
JJ\™]\›ˆ[ØÛÛœÝS[X™\‹œ\œÙQ›Ø]
Ýš[™ÊJKœ™\XÙJÖ×——WKÙËˆŠJKÏS[X™\‹š\Ñš[š]J
OØ	ÓX]›X^
X]›Z[ŠLLLÌL

J_IXˆŒ	HŽÜ™]\›ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆÙX\Û‹\Ý]‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž™_JK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[Ž˜_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆÙX\Û‹\Ý]]˜XÚÈ‹Ú[™[ŽŠÊ
KšœÞ
JšH‹ÜÝ[NžÝÚY›ß_J_JW_J_KÑJÚY™KÚXÚÙ\Ž˜K]NÚ[™[Ž›ßJOOŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ÚY™KÛ\ÜÓ˜[YNˆœ™XÛÜ™\™XY[™Ë\ÙXÝ[ÛˆÙX\Û‹\™XY[™Ë\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÙXÝ[Û‹]]H‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž˜_JK
Ê
KšœÞ
Jšˆ‹ØÚ[™[ŽJW_JK×_JKJÚ][N™K]\Î˜K™[]YJOOžÝ˜\ˆËŽØÛÛœÝYKœÜÚ[\‰‰ˆXKœÜÚ[\œËVÖÈ‘[XYÙH‹
K‘[XYÙHŠWKÈ‘š\™H˜]H‹
K‘š\™H˜]HŠWKÈXØÝ\˜XÞH‹
KXØÝ\˜XÞHŠWKÈ”˜[™ÙH‹
K”˜[™ÙHŠWKÈÛ\Ú^™H‹
KÛ\Ú^™HŠWWK™š[\Š
ËWJOO›[OOYJKOVÖÈØ]YÛÜžH‹
K•\HŠ_K˜Ø]YÛÜžWKÈ“X[Y˜XÝ\™\ˆ‹
K“X[Y˜XÝ\™\ˆŠWKÈ‘Y][Ûˆ‹
K‘Y][ÛˆŠWKÈ”™X[[Y™H[œÜ\˜][Ûˆ‹
K”™X[Y™HŠWWK™š[\Š
ËWJOO›[OOYI‰›ÚYOOYI‰ˆZQ
JJKÏY
K]˜Z[Xš[]HŠKOY
K”šXÙHŠKOY
K]XÚY[ÈŠNÜ™]\›ŠÊ
KšœÞÊJ˜\XÛH‹ØÛ\ÜÓ˜[YNˆÙX\Û‹YÜÜÚY\‹XÛÛ[‹Ú[™[Ž–ÊÊ
KšœÞÊJ›˜]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÙXÝ[Û‹[˜]ˆ\Ë]ÙX\Ûˆ‹˜\šXK[X™[Žˆ“Ûˆ\ÈYÙH‹Ú[™[Ž–ÊÊ
KšœÞ
J˜H‹Ú™YŽˆˆÝÙX\Û‹[Ý™\šY]È‹Ú[™[Žˆ“Ý™\šY]ÈŸJKK›[™ÝŒ	‰ŠÊ
KšœÞ
J˜H‹Ú™YŽˆˆÝÙX\Û‹\›Ùš[H‹Ú[™[Žˆ”›Ùš[HŸJK›[™ÝŒ	‰ŠÊ
KšœÞ
J˜H‹Ú™YŽˆˆÝÙX\Û‹\\™›Ü›X[˜ÙH‹Ú[™[Žˆ”\™›Ü›X[˜ÙHŸJK
ßJI‰ŠÊ
KšœÞ
J˜H‹Ú™YŽˆˆÝÙX\Û‹XXÜ]Z\Ú][Ûˆ‹Ú[™[ŽˆXÜ]Z\Ú][ÛˆŸJKI‰ŠÊ
KšœÞ
J˜H‹Ú™YŽˆˆÝÙX\Û‹XÝ\ÝÛZ^˜][Ûˆ‹Ú[™[ŽˆÝ\ÝÛZ^˜][ÛˆŸJK›[™ÝŒ	‰ŠÊ
KšœÞ
J˜H‹Ú™YŽˆˆÝÙX\Û‹\™[]Y‹Ú[™[Žˆ”™[]YŸJK
Ê
KšœÞ
J˜H‹Ú™YŽˆˆÜ™XÛÜ™\ÛÝ\˜ÙH‹Ú[™[Žˆ”ÛÝ\˜Ù\ÈŸJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž™KœÝ]\ßJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\™XY[™ËYÜšYÙX\Û‹\™XY[™ËYÜšY‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™[XZ[‹]^‹Ú[™[Ž–ÊÊ
KšœÞ
JÑÚYˆÙX\Û‹[Ý™\šY]È‹ÚXÚÙ\ŽˆŒH‹]Nˆ“Ý™\šY]È‹Ú[™[ŽŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\›ÜÙHÙX\Û‹[Ý™\šY]È‹Ú[™[Ž–ÊÊ
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™[XY‹Ú[™[Ž™K™\ØÜš\[ÛŸJK\‰‰Š[OOJÏYKœ\˜YÜ˜\Ê_›ÚYOO[ÏÝ›ÚY›Ë›X\

KJOOŠÊ
KšœÞ
Jœ‹ØÚ[™[Ž™_KJJJW_J_JKK›[™ÝŒ	‰ŠÊ
KšœÞ
JÑÚYˆÙX\Û‹\›Ùš[H‹ÚXÚÙ\ŽˆŒˆ‹]Nˆ•ÙX\Ûˆ›Ùš[H‹Ú[™[ŽŠÊ
KšœÞ
J™‹ØÛ\ÜÓ˜[YNˆÙX\Û‹\›Ùš[KYÜšY‹Ú[™[ŽšK›X\

ÙKWJOOŠÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
J™‹ØÚ[™[Ž™_JK
Ê
KšœÞ
J™‹ØÚ[™[Ž˜_JW_KJJ_J_JK›[™ÝŒ	‰ŠÊ
KšœÞÊJÑÚYˆÙX\Û‹\\™›Ü›X[˜ÙH‹ÚXÚÙ\ŽšK›[™ÝŒÈŒÈŽˆŒˆ‹]Nˆ”\™›Ü›X[˜ÙH‹Ú[™[Ž–ÊÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆÙX\Û‹\Ý]YÜšY‹Ú[™[Ž››X\

ÙKWJOOŠÊ
KšœÞ
JQÛX™[™K˜[YN˜_KJJ_JK
Ê
KšœÞÊJœ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™Y›ÛÝ›ÝH‹Ú[™[Ž–ÊÊ
KšœÞ
JÜÚ^™NŒMJK•˜[Y\È\™H™\›ÙXÙYœ›ÛHHÜ™Y]YÛÝ\˜ÙH[™\™H›Ý™\Ù[Y\È[™\[™[HYX\Ý\™Y˜[\ÝXÜËˆ—_JW_JK
ßJI‰ŠÊ
KšœÞ
JÑÚYˆÙX\Û‹XXÜ]Z\Ú][Ûˆ‹ÚXÚÙ\ŽˆŒ‹]NˆXÜ]Z\Ú][Ûˆ‹Ú[™[ŽŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆÙX\Û‹XXÜ]Z\Ú][Û‹YÜšY‹Ú[™[Ž–ØÉ‰ŠÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ]˜Z[Xš[]HŸJK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[Ž˜ßJW_JKI‰ŠÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ”\˜Ú\ÙHšXÙHŸJK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[Ž_JW_JW_J_JKI‰ŠÊ
KšœÞ
JÑÚYˆÙX\Û‹XÝ\ÝÛZ^˜][Ûˆ‹ÚXÚÙ\ŽˆŒH‹]NˆÝ\ÝÛZ^˜][Ûˆ‹Ú[™[ŽŠÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\›ÜÙH‹Ú[™[ŽŠÊ
KšœÞ
Jœ‹ØÚ[™[Ž›_J_J_JK›[™ÝŒ	‰ˆ\‰‰ŠÊ
KšœÞ
JÑÚYˆÙX\Û‹\™[]Y‹ÚXÚÙ\ŽˆŒˆ‹]Nˆ”™[]YÙX\ÛœÈ‹Ú[™[ŽŠÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆÙX\Û‹\™[]Y[\Ý‹Ú[™[ŽœÛXÙJŠK›X\
OOŠÊ
KšœÞÊJÝÎ™Kœ]Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž™K˜Ø]YÛÜž_•ÙX\ÛˆŸJK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[Ž™K]_JK
Ê
KšœÞ
JKÜÚ^™NŒM_JW_KKšY
J_J_JW_JK
Ê
KšœÞÊJ˜\ÚYH‹ÚYˆœ™XÛÜ™\ÛÝ\˜ÙH‹Û\ÜÓ˜[YNˆœ™XÛÜ™\ÛÝ\˜ÙH‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÛÝ\˜ÙKZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞ
JQÜÚ^™NŒNJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ•HTTˆRSŸJW_JK
Ê
KšœÞ
Jšˆ‹ØÚ[™[Ž‘ÊKœÛÝ\˜ÙJ_JK
Ê
KšœÞ
Jœ‹ØÚ[™[Ž™K˜Ü™X]Ü‘]\Ù]È”ÛÝ\˜ÙNˆÕHÝÛˆÈÐÈ–HŒˆÙX\Ûˆ˜[Y\È\™HÛÛ[][š]H]H[™X^HÚ[™ÙH\ÈHÛÝ\˜ÙH\È\]YˆŽˆ•ÙX\Ûˆ[™›Ü›X][Ûˆ\È]šX]YÈH[šÙYÛÝ\˜ÙKˆŸJK
Ê
KšœÞÊJ˜H‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÛÝ\˜ÙKX]Ûˆ‹™YŽ™KœÛÝ\˜ÙK\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Ú[™[Ž–È‘]HÛÝ\˜ÙH‹
Ê
KšœÞ
JKÜÚ^™NŒMßJW_JK
[OOJYKœ™[]YÛÝ\˜Ù\Ê_›ÚYOO[Ý›ÚY›‹›[™Ý
OŒ	‰ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\™[]Y\ÛÝ\˜Ù\È‹Ú[™[Ž–ÊÊ
KšœÞ
JšÈ‹ØÚ[™[Žˆ‘›ÛÝÈHÛÝ\˜Ù\ÈŸJKKœ™[]YÛÝ\˜Ù\Ë›X\
OOŠÊ
KšœÞ
Jœ‹ØÚ[™[ŽŠÊ
KšœÞÊJ˜H‹Ú™YŽ™K\›\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Ú[™[Ž–ÙK›X™[ˆ‹
Ê
KšœÞ
JKÜÚ^™NŒMJW_J_KK\›
JW_JKK™\šYšYYÛ‰‰ŠÊ
KšœÞÊJœ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™Y›ÛÝ›ÝH‹Ú[™[Ž–È”ÛÝ\˜Ù\ÈÚXÚÙYˆ‹K™\šYšYYÛ—_JK
Ê
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\šYÚË[›ÝH‹Ú[™[Žˆ’[XYÙ\È™[Û™ÈÈZ\ˆ™\ÜXÝ]™HšYÚÈÛ\œËˆšXÙH]\È\È[ˆ[™\[™[˜[ˆ›Ú™XÝˆŸJW_JW_JW_J_K‘JÚ][N™K]\Î˜K™[]YV×_JOOžÝ˜\ˆËŽÚYŠ•ÙX\ÛˆOOYKšÚ[™
\™]\›ŠÊ
KšœÞ
JÚ][N™K]\Î˜K™[]YJNØÛÛœÝYKœÜÚ[\‰‰ˆXKœÜÚ[\œËVÈ’[XYÙH‹\ÛÜšÈ—Kš[˜ÛY\ÊKšÚ[™
KOHÚ\˜XÝ\ˆOOYKšÚ[™ÏSØš™XÝ™[šY\ÊK˜]šX]\ßßJK™š[\Š
ÙWJOOˆ\ŸÈ”›ÛH‹Ü™Y]Y\™›Ü›Y\ˆ‹Ü™Y]ÙXÝ[Ûˆ‹Ü™Y]Y\È‹‘]šY[˜ÙH—Kš[˜ÛY\ÊJJKOXË™š[\Š
ËWJOOˆZQ
JJK›[™ÝOVÈ”›ÛH‹“ØØÝ\][ÛˆÈY™š[X][Ûˆ‹Ü™Y]Y\™›Ü›Y\ˆ‹Ü™Y]ÙXÝ[Ûˆ‹‘š\œÝØÝ[Y[YZ\ÜÚ[Ûˆ‹‘]šY[˜ÙH‹š[ÙÜ˜\H]˜Z[Xš[]H‹”Ü˜Z]]˜Z[Xš[]H—K™š[\ŠOOžÝ˜\ˆÜ™]\›ˆ›ÚYOOJ[OOJYK˜]šX]\Ê_›ÚYOO]Ý›ÚYØWJ_JNÜ™]\›ŠÊ
KšœÞÊJÊ
K‘œ˜YÛY[ØÚ[™[Ž–ÊÊ
KšœÞÊJ›˜]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÙXÝ[Û‹[˜]ˆŠÊOÈš\ËXš[ÙÜ˜\HŽˆˆŠK˜\šXK[X™[Žˆ“Ûˆ\ÈYÙH‹Ú[™[Ž–ÊÊ
KšœÞ
J˜H‹Ú™YŽˆˆÜ™XÛÜ™[Ý™\šY]È‹™]K]\ÝYŽˆ™]Z[Z[\[Ý™\šY]È‹Ú[™[ŽšOÈš[ÙÜ˜\HŽˆ“Ý™\šY]ÈŸJKË›[™ÝŒ	‰ŠÊ
KšœÞ
J˜H‹Ú™YŽˆˆÜ™XÛÜ™\ÜXÚYšXØ][ÛœÈ‹™]K]\ÝYŽˆ™]Z[Z[\\ÜXÚYšXØ][ÛœÈ‹Ú[™[ŽšOÈ”›Ùš[HŽˆ‘]Z[ÈŸJKI‰›[™ÝŒ	‰ŠÊ
KšœÞ
J˜H‹Ú™YŽˆˆÜ™XÛÜ™XÛÛ›™XÝ[ÛœÈ‹™]K]\ÝYŽˆ™]Z[Z[\XÛÛ›™XÝ[ÛœÈ‹Ú[™[ŽˆÛÛ›™XÝ[ÛœÈŸJK
Ê
KšœÞ
J˜H‹Ú™YŽˆˆÜ™XÛÜ™\ÛÝ\˜ÙH‹™]K]\ÝYŽˆ™]Z[Z[\\ÛÝ\˜ÙH‹Ú[™[Žˆ”ÛÝ\˜Ù\ÈŸJK
Ê
KšœÞ
JœÜ[ˆ‹È™]K]\ÝYŽˆ™]Z[XÛÛ[[X™[‹Ú[™[Ž™KœÝ]\ßJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\™XY[™ËYÜšY‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™[XZ[‹]^‹Ú[™[Ž–ÊÊ
KšœÞÊJœÙXÝ[Ûˆ‹ÚYˆœ™XÛÜ™[Ý™\šY]È‹Û\ÜÓ˜[YNˆœ™XÛÜ™\™XY[™Ë\ÙXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÙXÝ[Û‹]]H‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[ŽˆŒHŸJK
Ê
KšœÞ
Jšˆ‹È™]K]\ÝYŽˆ™]Z[[Ý™\šY]ËZXY[™È‹Ú[™[ŽšOÈš[ÙÜ˜\HŽˆ“Ý™\šY]ÈŸJW_JKÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÜÚ[\ˆ‹™]K]\ÝYŽˆœÝÜžK\›ÝXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JYÜÚ^™NŒJK
Ê
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JšÈ‹È™]K]\ÝYŽˆœÜÚ[\‹\›ÝXÝ[Û‹ZXY[™È‹Ú[™[Žˆ”ÝÜžH[™\ˆÜ˜\ÈŸJK
Ê
KšœÞ
Jœ‹ØÚ[™[Žˆ˜XÚÜÝÜšY\È[™Ý]Z[ÈÝ^HY[ˆÚ[HÜÚ[\œÈ\™HÙ™‹ˆŸJK
Ê
KšœÞÊJ˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœÜ[X]Ûˆ‹™]K]\ÝYŽˆœ™]™X[XÚ\˜XÝ\‹\ÝÜžH‹ÛÛXÚÎŠ
OO˜KœÙ]ÜÚ[\œÊL
KÚ[™[Ž–È”ÚÝÈÝÜžH]Z[È‹
Ê
KšœÞ
JYÜÚ^™NŒMŸJW_JW_JW_JNŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\›ÜÙHŠÊOÈ˜Ú\˜XÝ\‹Xš[ÙÜ˜\KZ[›ÈŽˆˆŠKÚ[™[Ž–ÊÊ
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™[XY‹™]K]\ÝYŽˆ™]Z[Y\ØÜš\[Ûˆ‹Ú[™[Ž™K™\ØÜš\[ÛŸJK[OOJÏYKœ\˜YÜ˜\Ê_›ÚYOO[ÏÝ›ÚY›Ë›X\

KJOOŠÊ
KšœÞ
Jœ‹È™]K]\ÝYŽ˜]Z[\\˜YÜ˜\IØ_XÚ[™[Ž™_KJJKK™]Z[É‰ŠÊ
KšœÞ
J[‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™]YÜÈ‹™]K]\ÝYŽˆ™]Z[Y˜XÝÈ‹Ú[™[Ž™K™]Z[Ë›X\
OOŠÊ
KšœÞ
J›H‹ØÚ[™[Ž™_KJJ_JW_JK\‰‰™K˜ÛÛ^[XYÙI‰ŠÊ
KšœÞÊJ™šYÝ\™H‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™XÛÛ^Z[XYÙH‹™]K]\ÝYŽˆ™]Z[XÛÛ^X[Z[XYÙH‹Ú[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜Î™K˜ÛÛ^[XYÙK[™K˜ÛÛ^Ø\[Û‹ØY[™Îˆ›^žH‹™Y™\œ™\”ÛXÞNˆ››Ë\™Y™\œ™\ˆ‹Ý[NžÝÚYˆŒL	H‹ZYÚˆ˜]]È‹›Ü™\”˜Y]\ÎˆŽŸKÛ‘\œ›ÜŽ™OOžÙK˜Ý\œ™[\™Ù]šY[HL_JK
Ê
KšœÞÊJ™šYØØ\[Ûˆ‹ØÚ[™[Ž–ÙK˜ÛÛ^Ø\[Û‹ˆ‹
Ê
KšœÞÊJ˜H‹Ú™YŽ™K˜ÛÛ^[XYÙTÛÝ\˜ÙK\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Ú[™[Ž–È”ÛÝ\˜ÙH‹
Ê
KšœÞ
JKÜÚ^™NŒMJW_JW_JW_JK•šY[ÈOOYKšÚ[™	‰ŠÊ
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™Y›ÛÝ›ÝH‹™]K]\ÝYŽˆ˜Z[\‹Z[‹Ú[™[Žˆ”^X˜XÚÈ\È›ÝšYYžH[ÝUX™KˆYˆ[˜]˜Z[X›KÜ[ˆHÛÝ\˜ÙHšY[ËˆŸJW_JKË›[™ÝŒ	‰ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ÚYˆœ™XÛÜ™\ÜXÚYšXØ][ÛœÈ‹Û\ÜÓ˜[YNˆœ™XÛÜ™\™XY[™Ë\ÙXÝ[ÛˆŠÊOÈ˜Ú\˜XÝ\‹\›Ùš[K\ÙXÝ[ÛˆŽˆˆŠKÚ[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÙXÝ[Û‹]]H‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[ŽˆŒˆŸJK
Ê
KšœÞ
Jšˆ‹È™]K]\ÝYŽˆ™]Z[\ÜXÚYšXØ][ÛœËZXY[™È‹Ú[™[ŽšOÈÚ\˜XÝ\ˆ[™›Ü›X][ÛˆŽˆ“Ûˆ™XÛÜ™ŸJK
Ê
KšœÞÊJœÛX[‹È™]K]\ÝYŽˆ™]Z[YØÝ[Y[YXÛÝ[‹Ú[™[Ž–ÝKˆÈ‹Ë›[™ÝˆšY[È™XÛÜ™Y—_JW_JKOÊÊ
KšœÞ
J™‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÜXÚYšXØ][ÛœÈÚ\˜XÝ\‹\›Ùš[KYÜšY‹Ú[™[Ž›K›X\
OOžØÛÛœÝYK˜]šX]\ÖØWNÜ™]\›ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNšQ

OÈš\Ë][™\šYšYYŽˆˆ‹Ú[™[Ž–ÊÊ
KšœÞ
J™‹ØÚ[™[Ž˜_JK
Ê
KšœÞÊJ™‹È™]K]\ÝYŽ˜]Z[X]šX]KIØKÓÝÙ\Ø\ÙJ
Kœ™\XÙP[
ˆ‹‹HŠ_XÚ[™[Ž–ÚQ

I‰ŠÊ
KšœÞ
JKÜÚ^™NŒMJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[ŽJW_JW_KJ_J_JNŠÊ
KšœÞ
J™‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÜXÚYšXØ][ÛœÈ‹Ú[™[Ž˜Ë›X\

ÙKWJOOŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNšQ
JOÈš\Ë][™\šYšYYŽˆˆ‹Ú[™[Ž–ÊÊ
KšœÞ
J™‹ØÚ[™[Ž™_JK
Ê
KšœÞÊJ™‹È™]K]\ÝYŽ˜]Z[X]šX]KIÙKÓÝÙ\Ø\ÙJ
Kœ™\XÙP[
ˆ‹‹HŠ_XÚ[™[Ž–ÚQ
JI‰ŠÊ
KšœÞ
JKÜÚ^™NŒMJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž˜_JW_JW_KJJ_JKËœÛÛYJ
ËWJOOšQ
JJI‰ŠÊ
KšœÞÊJœ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™Y›ÛÝ›ÝH‹™]K]\ÝYŽˆ™]Z[][šÛ›ÝÛ‹[›ÝH‹Ú[™[Ž–ÊÊ
KšœÞ
JÜÚ^™NŒMJK•[™\šYšYYšY[È\™H›ÝØÛÜ™YÜˆ[™™\œ™Yœ›ÛHÝ\ˆÕHØ[Y\Ëˆ—_JW_JKI‰›[™ÝŒ	‰ˆ\‰‰ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ÚYˆœ™XÛÜ™XÛÛ›™XÝ[ÛœÈ‹Û\ÜÓ˜[YNˆœ™XÛÜ™\™XY[™Ë\ÙXÝ[ÛˆÚ\˜XÝ\‹XÛÛ›™XÝ[ÛœÈ‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÙXÝ[Û‹]]H‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[ŽˆŒÈŸJK
Ê
KšœÞ
Jšˆ‹ØÚ[™[ŽˆÛÛ›™XÝ[ÛœÈŸJK
Ê
KšœÞÊJœÛX[‹ØÚ[™[Ž–Ý›[™Ýˆ[šÙYÜÜÚY\œÈ—_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ú\˜XÝ\‹XÛÛ›™XÝ[Û‹[\Ý‹Ú[™[ŽœÛXÙJ
K›X\
OOŠÊ
KšœÞÊJÝÎ™Kœ]Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÚ[™[Ž™K˜Ø]YÛÜž_Ú\˜XÝ\ˆŸJK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[Ž™K]_JK
Ê
KšœÞ
JKÜÚ^™NŒM_JW_KKšY
J_JW_JW_JK
Ê
KšœÞÊJ˜\ÚYH‹ÚYˆœ™XÛÜ™\ÛÝ\˜ÙH‹Û\ÜÓ˜[YNˆœ™XÛÜ™\ÛÝ\˜ÙH‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÛÝ\˜ÙKZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞ
JQÜÚ^™NŒNJK
Ê
KšœÞ
JœÜ[ˆ‹ØÚ[™[Žˆ•HTTˆRSŸJW_JK
Ê
KšœÞ
Jšˆ‹È™]K]\ÝYŽˆ™]Z[\ÛÝ\˜ÙK[X™[‹Ú[™[Ž‘ÊKœÛÝ\˜ÙJ_JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽˆ™]Z[Y\ØÛZ[Y\ˆ‹Ú[™[Žˆ[š]™\œØ[OOYK˜Ü™X]Ü‘]\Ù]ÈÛÛ[][š]H™Y™\™[˜ÙHœ›ÛHH[šÙYÜ™Y]Y]\Ù]ˆÛÝ\˜ÙH[š]Ë\ÝÜšXØ[]\È[™[˜Ù\Z[H\™H™\Ù\™YˆŽ™K˜Ü™X]Ü‘]\Ù]È”ÛÝ\˜ÙNˆÝ]ÝÛ‹˜ÛÛHÈÐÈ–HŒˆÛÛ[][š]H]\Ù]›Ý[™\[™[H™\šYšYYÙ™šXÚX[[™›Ü›X][Û‹ˆŽˆ‘ÕHÝÛˆOOYK™]PÜ™Y]È•™ZXÛHÛ\ÜÚYšXØ][ÛœÈ[™LŒLÌL˜][™ÜÈ\™H]šX]YÈÕHÝÛ‹ˆ^H\™HÛÛ[][š]K\™\ÜY›ÝÙ™šXÚX[YX\Ý\™Y\™›Ü›X[˜ÙKˆŽˆÛÛ[][š]H™Y™\™[˜ÙHOOYKœÝ]\ÏÈÛÛ[][š]H™\ÙX\˜ÚˆÝÜžHÛZ[\È\™H]šX]YÈH[šÙY™Y™\™[˜Ù\ÎÈØ\ÝÜ™Y]È\™H\Ý[™ÝZ\ÚYœ›ÛHØ[Y\^H™\Ü[™ËˆŽˆ‘˜[ˆY]ÜšX[OOYKœÝ]\ÏÈ’[™\[™[ÛÛ[Y[\žHÛˆX›XÈX]\šX[ˆ›Ý[ˆY][Û˜[›ØÚÜÝ\ˆ[››Ý[˜Ù[Y[ˆŽˆ•š\ÝX[ÜÝYÚOOYKœÝ]\ÏÈ’[XYÙH™Y™\™[˜ÙHÛ›KˆHXÝ\™YØš™XÝÙ\È›ÝÛÛ™š\›H]ÈÜXÚYšXØ][ÛœÈÜˆ]˜Z[Xš[]KˆŽˆ˜\ÙYÛˆ›ØÚÜÝ\—LŒN\ÈX›XÈÕH’HX]\šX[ˆH[šÙYÛÝ\˜ÙHZÙ\È™XÙY[˜ÙHÝ™\ˆ\ÈÝ[[X\žKˆŸJK
Ê
KšœÞÊJ˜H‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÛÝ\˜ÙKX]Ûˆ‹™YŽ™KœÛÝ\˜ÙK\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹™]K]\ÝYŽˆ™]Z[[Ù™šXÚX[\ÛÝ\˜ÙH‹Ú[™[Ž–È•šY[ÈOOYKšÚ[™È•Ø]ÚÛˆ[ÝUX™HŽˆ‘ÕHÝÛˆOOYK™]PÜ™Y]È‘]NˆÕHÝÛˆŽ˜Ü[ˆ	ÜÑ
J_X
Ê
KšœÞ
JKÜÚ^™NŒMßJW_JK
[OOJYKœ™[]YÛÝ\˜Ù\Ê_›ÚYOO[Ý›ÚY›‹›[™Ý
OŒ	‰ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\™[]Y\ÛÝ\˜Ù\È‹Ú[™[Ž–ÊÊ
KšœÞ
JšÈ‹ØÚ[™[Žˆ‘›ÛÝÈHÛÝ\˜Ù\ÈŸJKKœ™[]YÛÝ\˜Ù\Ë›X\
OOŠÊ
KšœÞ
Jœ‹ØÚ[™[ŽŠÊ
KšœÞÊJ˜H‹Ú™YŽ™K\›\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Ú[™[Ž–ÙK›X™[ˆ‹
Ê
KšœÞ
JKÜÚ^™NŒMJW_J_KK\›
JW_JKK™\šYšYYÛ‰‰ŠÊ
KšœÞÊJœ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™Y›ÛÝ›ÝH‹Ú[™[Ž–È”ÛÝ\˜Ù\ÈÚXÚÙYˆ‹K™\šYšYYÛ—_JK	‰ŠÊ
KšœÞÊJ˜H‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÛÝ\˜ÙKYÝÛ›ØY‹™YŽ™Kš[XYÙKÝÛ›ØYˆL™]K]\ÝYŽˆ™]Z[YÝÛ›ØY‹Ú[™[Ž–ÊÊ
KšœÞ
JÜÚ^™NŒMŸJK‘ÝÛ›ØY[XYÙH—_JK
Ê
KšœÞ
Jœ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\šYÚË[›ÝH‹™]K]\ÝYŽˆ™]Z[\šYÚË[›ÝH‹Ú[™[Žˆ’[XYÙ\È™[Û™ÈÈZ\ˆ™\ÜXÝ]™HšYÚÈÛ\œËˆšXÙH]\È\È[ˆ[™\[™[˜[ˆ›Ú™XÝˆŸJW_JW_JW_J_K‘UY
˜\œ›ÝË[Y‹ÖÈœ]‹Ùˆ›LLˆNKMËMÈËMÈ‹Ù^NˆŒ[ÌŽ[ˆŸWKÈœ]‹Ùˆ“LNHL’H‹Ù^NˆžÞ›ŸWWJKÑJÚ][N™KY\œÎ˜KÙXÝ[ÛŽJOOžÚYŠK›[™ÝŠ\™]\›ˆ[ØÛÛœÝÏXK™š[™[™^
OO˜KšYOOYKšY
KXVÊËLJØK›[™Ý
IXK›[™ÝKXVÊÊÌJIXK›[™ÝKVÈ’[XYÙH‹\ÛÜšÈ—Kš[˜ÛY\ÊKšÚ[™
NÜ™]\›ŠÊ
KšœÞÊJ›˜]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\YÙ\ˆ‹˜\šXK[X™[Žˆ’ÙY\^Üš[™È‹Ú[™[Ž–ÊÊ
KšœÞÊJÝÎ›‹œ]™]K]\ÝYŽ›Èš[XYÙK\™]š[Ý\ÈŽˆ™]Z[\™]š[Ý\È‹Ú[™[Ž–ÊÊ
KšœÞ
J‘ÜÚ^™NŒNJK
Ê
KšœÞ
Jš[YÈ‹ÜÜ˜Î›‹š[XYÙK[ˆˆ‹ØY[™Îˆ›^žHŸJK
Ê
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÛX[‹ØÚ[™[Žˆ”‘U’SÕTÈŸJK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[Ž›‹]_JW_JW_JK
Ê
KšœÞÊJØÛ\ÜÓ˜[YNˆœ™XÛÜ™\YÙ\‹Z[™^‹Îœ]˜\šXK[X™[Ž˜˜XÚÈÈ	Ý]_X™]K]\ÝYŽˆ™]Z[\YÙ\‹XÛÛXÝ[Ûˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JšËÜÚ^™NŒNJK
Ê
KšœÞÊJœÜ[ˆ‹È™]K]\ÝYŽ›Èš[XYÙK\ÜÚ][ÛˆŽˆ™]Z[\ÜÚ][Ûˆ‹Ú[™[Ž–ÔÝš[™ÊÊÌJKœYÝ\
‹ŒŠKˆÈ‹Ýš[™ÊK›[™Ý
KœYÝ\
‹ŒŠW_JW_JK
Ê
KšœÞÊJÝÎœ‹œ]™]K]\ÝYŽ›Èš[XYÙK[™^Žˆ™]Z[[™^‹Ú[™[Ž–ÊÊ
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÛX[‹ØÚ[™[Žˆ“‘VŸJK
Ê
KšœÞ
JœÝ›Û™È‹ØÚ[™[Žœ‹]_JW_JK
Ê
KšœÞ
Jš[YÈ‹ÜÜ˜Îœ‹š[XYÙK[ˆˆ‹ØY[™Îˆ›^žHŸJK
Ê
KšœÞ
JšÜÚ^™NŒNJW_JW_J_NÙ[˜Ý[Ûˆ‘
Ú][N™K]\Î˜_J^ØÛÛœÝÝ×OJJ
K\ÙTÝ]JJLJKÛ‹—OJJ
K\ÙTÝ]JJ[
KZÛÖÙK˜ÛÛXÝ[ÛœÖÌWKÏ[Ü‹™š[\ŠOšÚ[™OOYKšÚ[™	‰ˆSÛŠKœÜÚ[\œÊJKOXKœÜÚ[\œÉ‰™Kœ™[]YÚ\˜XÝ\’Yß×KOXË™š[\ŠOO˜KšYOOYKšY
KœÛÜ

K
OO“[X™\ŠKš[˜ÛY\ÊšY
JKS[X™\ŠKš[˜ÛY\ÊKšY
J_[X™\Š˜ÛÛXÝ[ÛœËœÛÛYJOO™K˜ÛÛXÝ[ÛœËš[˜ÛY\ÊJJJKS[X™\ŠK˜ÛÛXÝ[ÛœËœÛÛYJOO™K˜ÛÛXÝ[ÛœËš[˜ÛY\ÊJJJJKœÛXÙJX]›X^
ËK›[™Ý
JK[‹™š[™
OO˜Kœ]OOYKœ]
KH”˜Y[ÈÝ][ÛˆOOYKšÚ[™Èœ˜Y[ÈŽˆÚ\˜XÝ\ˆOOYKšÚ[™Èœ\œÛÛˆŽˆ•ÙX\ÛˆOOYKšÚ[™ÈÙX\ÛˆŽˆ•™ZXÛHOOYKšÚ[™È›Øš™XÝŽ–È’[XYÙH‹\ÛÜšÈ—Kš[˜ÛY\ÊKšÚ[™
OÈ™Ø[\žHŽˆ•šY[ÈOOYKšÚ[™ÈšY[ÈŽˆ›[™ØØ\HŽÜ™]\›ŠÊ
KšœÞÊJ˜\XÛH‹ØÛ\ÜÓ˜[YN˜ÜÜÚY\‹]Œˆ™XÛÜ™IÙX™]K]\ÝYŽˆ™ÜÜÚY\‹\YÙH‹Ú[™[Ž–ÊÊ
KšœÞ
JÞÜÙXÝ[ÛŽ›][N™_JK
Ê
KšœÞÊJšXY\ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™ZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™ZXY[™ËXÛÜH‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™ZXY[™ËZÚXÚÙ\ˆ‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹È™]K]\ÝYŽˆ™]Z[ZÚ[™‹Ú[™[ŽˆÚ\˜XÝ\ˆOOYKšÚ[™ÈÚ\˜XÝ\ˆ[›ÙXÝ[ÛˆŽ˜Ñ
J_JK
Ê
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\Ý]\Ë[X™[ŠÊ“Ù™šXÚX[ÛÝ\˜ÙHOOYKœÝ]\ÏÈš\Ë[Ù™šXÚX[ŽˆˆŠK™]K]\ÝYŽˆ™]Z[\Ý]\È‹Ú[™[Ž™KœÝ]\ßJW_JK
Ê
KšœÞ
JšH‹È™]K]\ÝYŽˆ™]Z[]]H‹Ú[™[ŽŠÊ
KšœÞ
J^KÝ˜[YN™K]K›ØÚÎˆLJ_JK
Ê
KšœÞ
Jœ‹È™]K]\ÝYŽˆ™]Z[\ÝX]H‹Ú[™[Ž™KœÝX]_K˜Ø]YÛÜž_]_JW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™ZXY[™ËXXÝ[ÛœÈ‹Ú[™[Ž–ÊÊ
KšœÞ
JËÚ][N™KØ]™Y˜KœØ]™YÙÙÛTØ]™N˜KÙÙÛTØ]™K™Yš^ˆ™]Z[\Ø]™H‹^ˆLÛÛ\XÝˆLJK
Ê
KšœÞ
J˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆœ™XÛÜ™\Ú\™H‹]NˆÛÜHYÙH[šÈ‹˜\šXK[X™[ŽˆÛÜHYÙH[šÈ‹ÛÛXÚÎ˜\Þ[˜Ê
OOžÝž^Ø]ØZ]˜]šYØ]Ü‹˜Û\›Ø\™Üš]U^
™]ÈT“
Ú[™ÝË›ØØ][Û‹œ]˜[YKÚ[™ÝË›ØØ][Û‹›ÜšYÚ[ŠKš™YŠKËœÝXØÙ\ÜÊ”YÙH[šÈÛÜYYˆŠ_XØ]ÚÛË™\œ›ÜŠÛÝ[›ÝÛÜKˆ[ÝHØ[ˆÚ\™HHYÙHY™\ÜÈ[œÝXYˆŠ__K™]K]\ÝYŽˆ™]Z[\Ú\™H‹Ú[™[ŽŠÊ
KšœÞ
JQÜÚ^™NŒMßJ_JW_JW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\ÝYÙHŠÊÈš\ËY^[™YŽˆˆŠK™]K]\ÝYŽˆ™]Z[\ÝYÙH‹Ú[™[Ž–ÊÊ
KšœÞ
J‘Ú][N™K^[™YÙ]^[™Y›ËÛ‘[Y[œÚ[ÛœÎœŸKKšY
K
Ê
KšœÞ
JQÚ][N™KÙXÝ[ÛŽ›]\Î˜K\ÚÎœ[Y[œÚ[ÛœÎ›ŸJW_JK
Ê
KšœÞ
JÑÚ][N™KY\œÎ˜ËÙXÝ[ÛŽ›JK
Ê
KšœÞ
J‘Ú][N™K]\Î˜K™[]Y›_JKK›[™ÝŒ	‰ŠÊ
KšœÞÊJœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\™[]Y‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™XÛÜ™\™[]YZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞÊJ™]ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[ZÚXÚÙ\ˆ‹Ú[™[Ž›]_JK
Ê
KšœÞ
Jšˆ‹È™]K]\ÝYŽˆ™]Z[\™[]YZXY[™È‹Ú[™[Žˆ•ÙX\ÛˆOOYKšÚ[™È”™[]YÙX\ÛœÈŽˆÛÛ›™XÝYš[\ÈŸJW_JK
Ê
KšœÞÊJÝÎ›œ]™]K]\ÝYŽˆ™]Z[X˜XÚË]ËXÛÛXÝ[Ûˆ‹Ú[™[Ž–È˜XÚÈÈHÛÛXÝ[Ûˆ‹
Ê
KšœÞ
JKÜÚ^™NŒNJW_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[YÜšY‹Ú[™[Ž›K›X\

K
OOŠÊ
KšœÞ
J	ËÙ[^N‹ŒJÚ[™[ŽŠÊ
KšœÞ
JKÚ][N™K]\Î˜K™Yš^ˆœ™[]YŸJ_KKšY
J_JW_JK[K›[™Ý	‰ŠÊ
KšœÞÊJØÛ\ÜÓ˜[YNˆœ™XÛÜ™\™]\›ˆ‹Î›œ]™]K]\ÝYŽˆ™]Z[X˜XÚË]ËXÛÛXÝ[Ûˆ‹Ú[™[Ž–È˜XÚÈÈ‹]KÓÝÙ\Ø\ÙJ
K
Ê
KšœÞ
JšÜÚ^™NŒMßJW_JW_J_Y[˜Ý[ÛˆÑ

^ØÛÛœÝÙKWOJJ
K\ÙTÝ]JJˆŠKÝ×OJJ
K\ÙTÝ]JJ˜[ŠK^ÚYˆ™\™XÝÜžH‹]Nˆ‘[[™^‹\ØÜš\[ÛŽˆ‘œ›ÛHHÝ™Y]ÈÈHÝÜžKˆš[™[Ý\ˆ™^ÝÜˆ‹[XYÙNšÊšXÙWØÚ]WÌHŠ_KYKš[J
KÓÝÙ\Ø\ÙJ
KœÜ]
×ÊËÊK™š[\Š›ÛÛX[ŠK^Ë™š[\ŠOOŠ˜[OO][Ê
Kš[˜ÛY\ÊKšY
JI‰œ‹™]™\žJOO™K]KÓÝÙ\Ø\ÙJ
Kš[˜ÛY\ÊJJJNÜ™]\›ŠÊ
KšœÞÊJÊ
K‘œ˜YÛY[ØÚ[™[Ž–ÊÊ
KšœÞ
JÞßJK
Ê
KšœÞ
JžÜÙXÝ[ÛŽ›ŸJK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™\™XÝÜžK]ÛÛ˜\ˆ‹Ú[™[Ž–ÊÊ
KšœÞÊJ›X™[‹ØÛ\ÜÓ˜[YNˆœÜ[Z[œ]\™XÝÜžK\ÙX\˜Ú‹Ú[™[Ž–ÊÊ
KšœÞ
JYÜÚ^™NŒNJK
Ê
KšœÞ
Jš[œ]‹È™]K]\ÝYŽˆ™\™XÝÜžKYš[\ˆ‹˜\šXK[X™[Žˆ‘š[™HÙXÝ[Ûˆ‹XÙZÛ\Žˆ‘š[™HÙXÝ[Ûˆ‹˜[YN™KÛÚ[™ÙN™OO˜JK\™Ù]˜[YJ_JKI‰ŠÊ
KšœÞ
J˜]Ûˆ‹ÛÛÛXÚÎŠ
OO˜JˆŠK˜\šXK[X™[ŽˆÛX\ˆYÙHÙX\˜Ú‹™]K]\ÝYŽˆ™\™XÝÜžKXÛX\‹\]Y\žH‹Ú[™[ŽŠÊ
KšœÞ
JÞÜÚ^™NŒMŸJ_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ™\™XÝÜžK\Ú]K\Ù[XÝ‹Ú[™[ŽŠÊ
KšœÞ
JÐKÝ˜[YNÛÚ[™ÙN›ËX™[ˆ‘š[\ˆ]\È\™XH‹\ÝYˆ™\™XÝÜžKX\™XH‹Ü[ÛœÎ–ÖÈ˜[‹[Ø]YÛÜšY\È—K‹‹“Ë›X\
OO–ÙKšYK]WJW_J_JK
Ê
KšœÞÊJœÜ[ˆ‹È™]K]\ÝYŽˆ™\™XÝÜžKXÛÝ[‹˜\šXK[]™HŽˆœÛ]H‹Ú[™[Ž–Û›[™ÝˆYÙ\È—_JW_JK
Ê
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ™\™XÝÜžKYÜšY‹Ú[™[Ž“Ë›X\

KJOOžØÛÛœÝP[ÊKšY
KÏ[™š[\ŠOOš[˜ÛY\ÊKšY
JNÜ™]\›ˆË›[™ÝÊÊ
KšœÞÊJ	ËØÛ\ÜÓ˜[YNˆ™\™XÝÜžKX\™XKXØ\™‹[^N˜ILÊ‹ŒÚ[™[Ž–ÊÊ
KšœÞÊJØÛ\ÜÓ˜[YNˆ™\™XÝÜžKYÜ›Ý\‹Î™Kœ]™]K]\ÝYŽ˜\™XÝÜžK\›ÛÝIÙKšYXÚ[™[Ž–ÊÊ
KšœÞ
Jš[YÈ‹ÜÜ˜Î™Kš[XYÙK[ˆˆ‹ØY[™Îˆ›^žHŸJK
Ê
KšœÞÊJœÜ[ˆ‹ØÚ[™[Ž–ÊÊ
KšœÞÊJœÛX[‹ØÚ[™[Ž–ÔÝš[™Ê›[™Ý
KœYÝ\
‹ŒŠKˆ‹OOO]›[™ÝÈ”QÑHŽˆ”QÑTÈ—_JK
Ê
KšœÞ
Jšˆ‹ØÚ[™[Ž™K]_JW_JK
Ê
KšœÞ
JKÜÚ^™NŒŒŸJW_JK
Ê
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™\™XÝÜžKX\™XK[[šÜÈ‹Ú[™[Ž–ÛË™š[\ŠOO˜KšYOOYKšY
K›X\
OOŠÊ
KšœÞÊJÝÎ˜Kœ]™]K]\ÝYŽ˜\™XÝÜžKIØKšYœ™\XÙP[
‹È‹‹HŠ_XÛ\ÜÓ˜[YN˜Kœ\™[OOYKšYÈš\Ë[™\ÝYŽˆˆ‹Ú[™[Ž–ØK]K
Ê
KšœÞ
JKÜÚ^™NŒLßJW_KKšY
JKOOO[Ë›[™Ý	‰›ÖÌKšYOOYKšY	‰ŠÊ
KšœÞÊJÝÎ™Kœ]™]K]\ÝYŽ˜\™XÝÜžKY^Ü™KIÙKšYXÚ[™[Ž–È“Ü[ˆÙXÝ[Ûˆ‹
Ê
KšœÞ
JKÜÚ^™NŒMJW_JW_JW_KKšY
N›[J_JK[›[™Ý	‰ŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[Y[\H‹™]K]\ÝYŽˆ™\™XÝÜžKY[\H‹Ú[™[Ž–ÊÊ
KšœÞ
JYÜÚ^™NŒŽJK
Ê
KšœÞ
Jšˆ‹ØÚ[™[Žˆ“›ÈX]Ú[™ÈÙXÝ[ÛœËˆŸJK
Ê
KšœÞ
Jœ‹ØÚ[™[Žˆ•žHHY™™\™[˜[YHÜˆØ]YÛÜžKˆŸJK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœÜ[X]Ûˆ‹™]K]\ÝYŽˆ™\™XÝÜžKXÛX\ˆ‹ÛÛXÚÎŠ
OOžØJˆŠKÊ˜[Š_KÚ[™[Žˆ”™\Ù]š[\œÈŸJW_JW_J_Y[˜Ý[ÛˆÑ

^Ý˜\ˆKNØÛÛœÝZ\Š
KÏP

KÜ]˜[YN›‹\ÚœŸOYJ
K[‹œ™\XÙJ×ÊÉËˆŠ_‹È‹ÏJJ
K\ÙT™YŠJ[
NÜŠËÊNØÛÛœÝO^Ë™š[™
OO™Kœ]OO[
KO[Ü‹™š[™
OO™Kœ]OO[
KSÛŠKœÜÚ[\œÊNÙœŠ[OO[_›ÚYOO[OÝ›ÚY›KšY
NØÛÛœÝH‹ÈOO[OH‹Ù^\šY[˜ÙHOO[Û]Ï]_ÛÖÛ[OO[_›ÚYOO[OÝ›ÚY›K˜ÛÛXÝ[ÛœÖÌWNÙ›ÜŠÛ[OOJYÊI‰›ÚYOOZ	‰šœ\™[Ê^Ý˜\ˆÙÏZÛÖÙËœ\™[_\™]\›ŠJ
K\ÙS^[Ý]Y™™XÝ
J

OOžÝÚ[™ÝËœØÜ›ÛÊÝÜŒ™Z]š[ÜŽˆš[œÝ[ŸJK‰‰œ™\]Y\Ý[š[X][Û‘œ˜[YJ

OOžÝ˜\ˆNÜ™]\›ˆ[OOJOYØÝ[Y[™Ù][[Y[žRY
‹œÛXÙJJJJ_›ÚYOOYOÝ›ÚY™KœØÜ›Û[ÕšY]Ê
_J_KÛ‹—JK
J
K\ÙQY™™XÝ
J

OOžÙØÝ[Y[]OX	ÊÈ’Y[ˆ[žHŽ›[OO[_›ÚYOO[OÝ›ÚY›K]J_
[OO]_›ÚYOO]OÝ›ÚYK]J_
‹Ù\™XÝÜžHOO[È‘[[™^Žˆ“[ÛšYH[™š[\™YŠ_HLŒMšXÙH]\ØKÛKKJK
J
K\ÙQY™™XÝ
J

OOžÚYŠÊ\™]\›ŽØÛÛœÝO[™]È
Ù\˜][ÛŽŒKŒMKÛ[ÛÝÚY[ˆL[˜ÚÜœÎˆL]]Ô˜YŽˆL™]™[™OO™Kš\Ð]šX]J™]K[[š\Ë\™]™[Š_JNÜ™]\›Š
OO™K™\Ý›ÞJ
_KÛ×JK
Ê
KšœÞ
JÝÜ™YXÙY[Ý[ÛŽˆ\Ù\ˆ‹Ú[™[ŽŠÊ
KšœÞÊJ™]ˆ‹Ü™YŽ˜ËÛ\ÜÓ˜[YNˆ˜]\ËX\ŠÊÈˆŽˆœÜ[[[ÙHŠK™]KX]\ËX\™XHŽŠ[OOJOYÊ_›ÚYOOYOÝ›ÚY™KšY
_šÛYH‹Ú[™[Ž–ÊÊ
KšœÞ
J˜H‹Ú™YŽˆˆÛXZ[‹XÛÛ[‹Û\ÜÓ˜[YNˆœÚÚ\[[šÈ‹™]K]\ÝYŽˆœÚÚ\XÛÛ[‹Ú[™[Žˆ”ÚÚ\ÈÛÛ[ŸJK	‰ŠÊ
KšœÞ
JËßJK
Ê
KšœÞ
JYË‹‹JK
Ê
KšœÞ
J›XZ[ˆ‹ÚYˆ›XZ[‹XÛÛ[‹X’[™^‹LK™]K]\ÝYŽˆ›XZ[‹XÛÛ[‹Ú[™[Ž™ÊÊ
KšœÞÊJÊ
K‘œ˜YÛY[ØÚ[™[Ž–ÊÊ
KšœÞ
JÞKË‹‹JK
Ê
KšœÞ
JÚËßJK
Ê
KšœÞ
JZËË‹‹JK
Ê
KšœÞ
JË‹‹JK
Ê
KšœÞ
JZËË‹‹JK
Ê
KšœÞ
JZËßJK
Ê
KšœÞ
JZË‹‹JK
Ê
KšœÞ
JßJK
Ê
KšœÞ
JšË‹‹JK
Ê
KšœÞ
J^Ë‹‹JW_JNžOÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™^\šY[˜ÙK\YÙH‹Ú[™[Ž–ÊÊ
KšœÞÊJšXY\ˆ‹ØÛ\ÜÓ˜[YNˆ™^\šY[˜ÙK\YÙKZXY[™È‹Ú[™[Ž–ÊÊ
KšœÞ
JÝÎˆ‹Ù\™XÝÜžH‹™]K]\ÝYŽˆ™^\šY[˜ÙKX˜XÚÈ‹Ú[™[Žˆ—LŒNL[[™^ŸJK
Ê
KšœÞ
JšH‹È™]K]\ÝYŽˆ™^\šY[˜ÙK]]H‹Ú[™[ŽŠÊ
KšœÞ
JÜ‹Ý˜[YNˆ•HÕH’HVT’QSÑHŸJ_JW_JK
Ê
KšœÞ
JËË‹‹JW_JNŠÊ
KšœÞ
J^ØÚ[™[ŽŠÊ
KšœÞ
J™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ú[™[XK\›Ý]H‹Ú[™[ŽOÊÊ
KšœÞ
JPKÜÙXÝ[ÛŽK]\ÎJNœÊÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[Y[\H‹Ú[™[Ž–ÊÊ
KšœÞ
JšH‹ØÚ[™[Žˆ”ÜÚ[\‹\›ÝXÝY[žHŸJK
Ê
KšœÞ
Jœ‹ØÚ[™[Žˆ•\Èš[HÛÛZ[œÈÝÜžK\Ù[œÚ]]™H[™›Ü›X][Û‹ˆŸJK
Ê
KšœÞ
J˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœÜ[X]Ûˆ‹ÛÛXÚÎŠ
OOœÙ]ÜÚ[\œÊL
KÚ[™[Žˆ”ÚÝÈÜÚ[\œÈŸJK
Ê
KšœÞ
JÝÎŠ[OOJOZÛÖÛ[OO[_›ÚYOO[OÝ›ÚY›K˜ÛÛXÝ[ÛœÖÌWJ_›ÚYOOXOÝ›ÚY˜Kœ]
_‹Ù\™XÝÜžH‹Ú[™[Žˆœ›ÝÜÙHÛÛXÝ[ÛˆŸJW_JN›OÊÊ
KšœÞ
J‘Ú][N›K]\ÎJNˆ‹Ù\™XÝÜžHOO[ÊÊ
KšœÞ
JÑßJNŠÊ
KšœÞÊJ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[[›ÝY›Ý[™‹™]K]\ÝYŽˆ››ÝY›Ý[™‹Ú[™[Ž–ÊÊ
KšœÞ
JœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÜ[ZÚXÚÙ\ˆ‹Ú[™[ŽˆŸJK
Ê
KšœÞ
JšH‹È™]K]\ÝYŽˆ››ÝY›Ý[™]]H‹Ú[™[Žˆ•Ü›Û™È\›‹[ˆŸJK
Ê
KšœÞ
Jœ‹ØÚ[™[ŽˆÚXÚÈHY™\ÜÈÜˆXY˜XÚÈÈH[[™^ˆŸJK
Ê
KšœÞ
JÝÎˆ‹Ù\™XÝÜžH‹Û\ÜÓ˜[YNˆœÜ[X]Ûˆ‹™]K]\ÝYŽˆ››ÝY›Ý[™Y\™XÝÜžH‹Ú[™[Žˆ‘[[™^ŸJW_J_K
_J_JKÊÊ
KšœÞ
J	Ë‹‹JNŠÊ
KšœÞ
JžßJK
Ê
KšœÞ
JÚËË‹‹JK
Ê
KšœÞ
JÛËÝ[YNˆ™\šÈ‹ÜÚ][ÛŽˆ˜›ÝÛK\šYÚ‹šXÚÛÛÜœÎˆLJW_J_J_Y[˜Ý[Ûˆ

^Ü™]\›ŠÊ
KšœÞ
JØ˜\Ù[˜[YNˆ‹ÕšXÙTÜ[‹Ú[™[ŽŠÊ
KšœÞ
JÑßJ_J_XÛÛœÝÑ[™]ÈÛ\ÜÞÈØŽÈÞNÈØÎÈÙŽÈÝÎÈÝŽÈ×ÎÈÐÎØÛÛœÝXÝÜŠO^ßJ^Ý\ËˆØYKœ]Y\žPØXÚ_™]ÈË\ËˆÞOYK›]]][ÛØXÚ_™]ÈK\ËˆØÏYK™Y˜][Ü[ÛœßßK\ËˆÙ[™]ÈX\\ËˆÝÏ[™]ÈX\\ËˆÝL[[Ý[

^Ý\ËˆÝŠÊËOOO]\ËˆÝ‰‰Š\Ëˆ×ÏT‹œÝXœØÜšX™J\Þ[˜ÈOOžÙI‰Š]ØZ]\Ëœ™\Ý[YT]\ÙY]]][ÛœÊ
K\ËˆØ‹›Û‘›ØÝ\Ê
J_JK\ËˆÐÏTœÝXœØÜšX™J\Þ[˜ÈOOžÙI‰Š]ØZ]\Ëœ™\Ý[YT]\ÙY]]][ÛœÊ
K\ËˆØ‹›Û“Û›[™J
J_JJ_][›[Ý[

^Ý\ËˆÝ‹KKOO]\ËˆÝ‰‰Š\Ëˆ×ÏËŠ
K\Ëˆ×Ï]›ÚY\ËˆÐÏËŠ
K\ËˆÐÏ]›ÚY
_Z\Ñ™]Ú[™ÊJ^Ü™]\›ˆ\ËˆØ‹™š[™[
Ë‹‹™K™]ÚÝ]\Îˆ™™]Ú[™ÈŸJK›[™ÝZ\Ó]]][™ÊJ^Ü™]\›ˆ\ËˆÞK™š[™[
Ë‹‹™KÝ]\Îˆœ[™[™ÈŸJK›[™ÝYÙ]]Y\žQ]JJ^ØÛÛœÝO]\Ë™Y˜][]Y\žSÜ[ÛœÊÜ]Y\žRÙ^N™_JNÜ™]\›ˆ\ËˆØ‹™Ù]
Kœ]Y\žR\Ú
OËœÝ]K™]_Y[œÝ\™T]Y\žQ]JJ^ØÛÛœÝO]\Ë™Ù]]Y\žQ]JKœ]Y\žRÙ^JNÚYŠ›ÚYOOXJ\™]\›ˆ\Ë™™]Ú]Y\žJJNÞØÛÛœÝ]\Ë™Y˜][]Y\žSÜ[ÛœÊJKÏ]\ËˆØ‹˜Z[
\Ë
NÜ™]\›ˆKœ™]˜[Y]RY”Ý[I‰›Ëš\ÔÝ[PžU[YJ
œÝ[U[YKÊJI‰\Ëœ™Y™]Ú]Y\žJ
K›ÛZ\ÙKœ™\ÛÛ™JJ__YÙ]]Y\šY\Ñ]JJ^Ü™]\›ˆ\ËˆØ‹™š[™[
JK›X\

Ü]Y\žRÙ^N™KÝ]N˜_JOO–ÙKK™]WJ_\Ù]]Y\žQ]JKK
^ØÛÛœÝÏ]\Ë™Y˜][]Y\žSÜ[ÛœÊÜ]Y\žRÙ^N™_JK]\ËˆØ‹™Ù]
Ëœ]Y\žR\Ú
K[ËœÝ]K™]KY[˜Ý[ÛŠKJ^Ü™]\›ˆ™[˜Ý[ÛˆOO]\[ÙˆOÙJJN™_JKŠNÚYŠ›ÚYOO[
\™]\›ˆ\ËˆØ‹˜Z[
\ËÊKœÙ]]JË‹‹X[X[ˆLJ_\Ù]]Y\šY\Ñ]JKK
^Ü™]\›ˆ˜˜]Ú


OO\ËˆØ‹™š[™[
JK›X\

Ü]Y\žRÙ^N™_JOO–ÙK\ËœÙ]]Y\žQ]JKK
WJJ_YÙ]]Y\žTÝ]JJ^ØÛÛœÝO]\Ë™Y˜][]Y\žSÜ[ÛœÊÜ]Y\žRÙ^N™_JNÜ™]\›ˆ\ËˆØ‹™Ù]
Kœ]Y\žR\Ú
OËœÝ]_\™[[Ý™T]Y\šY\ÊJ^ØÛÛœÝO]\ËˆØŽÕ˜˜]Ú


OOžØK™š[™[
JK™›Ü‘XXÚ
OOžØKœ™[[Ý™JJ_J_J_\™\Ù]]Y\šY\ÊKJ^ØÛÛœÝ]\ËˆØ‹Ï^Ý\Nˆ˜XÝ]™H‹‹‹™_NÜ™]\›ˆ˜˜]Ú


OOŠ™š[™[
JK™›Ü‘XXÚ
OOžÙKœ™\Ù]

_JK\Ëœ™Y™]Ú]Y\šY\ÊËJJJ_XØ[˜Ù[]Y\šY\ÊO^ßKO^ßJ^ØÛÛœÝ^Ü™]™\ˆL‹‹˜_KÏU˜˜]Ú


OO\ËˆØ‹™š[™[
JK›X\
OO™K˜Ø[˜Ù[

JJNÜ™]\›ˆ›ÛZ\ÙK˜[
ÊK[ŠÊK˜Ø]Ú
Ê_Z[˜[Y]T]Y\šY\ÊO^ßKO^ßJ^Ü™]\›ˆ˜˜]Ú


OOžÚYŠ\ËˆØ‹™š[™[
JK™›Ü‘XXÚ
OOžÙKš[˜[Y]J
_JK››Û™HOOYKœ™Y™]Ú\J\™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NØÛÛœÝ^Ë‹‹™K\N™Kœ™Y™]Ú\OÏÙK\OÏÈ˜XÝ]™HŸNÜ™]\›ˆ\Ëœ™Y™]Ú]Y\šY\ÊJ_J_\™Y™]Ú]Y\šY\ÊO^ßKJ^ØÛÛœÝ^Ë‹‹˜KØ[˜Ù[™Y™]Ú˜OË˜Ø[˜Ù[™Y™]ÚÏÈLKÏU˜˜]Ú


OO\ËˆØ‹™š[™[
JK™š[\ŠOOˆYKš\Ñ\ØX›Y

JK›X\
OOžÛ]OYK™™]Ú
›ÚY
NÜ™]\›ˆ›ÝÓÛ‘\œ›ÜŸ
OXK˜Ø]Ú
ÊJKœ]\ÙYOOYKœÝ]K™™]ÚÝ]\ÏÔ›ÛZ\ÙKœ™\ÛÛ™J
N˜_JJNÜ™]\›ˆ›ÛZ\ÙK˜[
ÊK[ŠÊ_Y™]Ú]Y\žJJ^ØÛÛœÝO]\Ë™Y˜][]Y\žSÜ[ÛœÊJNÝ›ÚYOOXKœ™]žI‰ŠKœ™]žOHLJNØÛÛœÝ]\ËˆØ‹˜Z[
\ËJNÜ™]\›ˆš\ÔÝ[PžU[YJ
KœÝ[U[YK
JOÝ™™]Ú
JN”›ÛZ\ÙKœ™\ÛÛ™JœÝ]K™]J_\™Y™]Ú]Y\žJJ^Ü™]\›ˆ\Ë™™]Ú]Y\žJJK[ŠÊK˜Ø]Ú
Ê_Y™]Ú[™š[š]T]Y\žJJ^Ü™]\›ˆK˜™Z]š[ÜUJKœYÙ\ÊK\Ë™™]Ú]Y\žJJ_\™Y™]Ú[™š[š]T]Y\žJJ^Ü™]\›ˆ\Ë™™]Ú[™š[š]T]Y\žJJK[ŠÊK˜Ø]Ú
Ê_Y[œÝ\™R[™š[š]T]Y\žQ]JJ^Ü™]\›ˆK˜™Z]š[ÜUJKœYÙ\ÊK\Ë™[œÝ\™T]Y\žQ]JJ_\™\Ý[YT]\ÙY]]][ÛœÊ
^Ü™]\›ˆš\ÓÛ›[™J
OÝ\ËˆÞKœ™\Ý[YT]\ÙY]]][ÛœÊ
N”›ÛZ\ÙKœ™\ÛÛ™J
_YÙ]]Y\žPØXÚJ
^Ü™]\›ˆ\ËˆØŸYÙ]]]][ÛØXÚJ
^Ü™]\›ˆ\ËˆÞ_YÙ]Y˜][Ü[ÛœÊ
^Ü™]\›ˆ\ËˆØß\Ù]Y˜][Ü[ÛœÊJ^Ý\ËˆØÏY_\Ù]]Y\žQY˜][ÊKJ^Ý\ËˆÙ‹œÙ]
ŠJKÜ]Y\žRÙ^N™KY˜][Ü[ÛœÎ˜_J_YÙ]]Y\žQY˜][ÊJ^ØÛÛœÝOVË‹‹\ËˆÙ‹˜[Y\Ê
WNÛ]^ßNÜ™]\›ˆK™›Ü‘XXÚ
OOž×ÊKKœ]Y\žRÙ^JI‰Š^Ë‹‹‹‹˜K™Y˜][Ü[ÛœßJ_JK\Ù]]]][Û‘Y˜][ÊKJ^Ý\ËˆÝËœÙ]
ŠJKÛ]]][Û’Ù^N™KY˜][Ü[ÛœÎ˜_J_YÙ]]]][Û‘Y˜][ÊJ^ØÛÛœÝOVË‹‹\ËˆÝË˜[Y\Ê
WNÛ]^ßNÜ™]\›ˆK™›Ü‘XXÚ
OOž×ÊKK›]]][Û’Ù^JI‰Š^Ë‹‹‹‹˜K™Y˜][Ü[ÛœßJ_JKYY˜][]Y\žSÜ[ÛœÊJ^ÚYŠK—ÙY˜][Y
\™]\›ˆNØÛÛœÝO^Ë‹‹\ËˆØËœ]Y\šY\Ë‹‹\Ë™Ù]]Y\žQY˜][ÊKœ]Y\žRÙ^JK‹‹™KÙY˜][YˆLNÜ™]\›ˆKœ]Y\žR\Ú
Kœ]Y\žR\Ú]ÊKœ]Y\žRÙ^KJJK›ÚYOOXKœ™Y™]ÚÛ”™XÛÛ›™XÝ	‰ŠKœ™Y™]ÚÛ”™XÛÛ›™XÝH˜[Ø^\ÈˆOOXK›™]ÛÜšÓ[ÙJK›ÚYOOXK›ÝÓÛ‘\œ›Ü‰‰ŠK›ÝÓÛ‘\œ›ÜHHXKœÝ\Ü[œÙJKXK›™]ÛÜšÓ[ÙI‰˜Kœ\œÚ\Ý\‰‰ŠK›™]ÛÜšÓ[ÙOH›Ù™›[™Qš\œÝŠKLOOXK™[˜X›Y	‰˜Kœ]Y\žQ›OOP‰‰ŠK™[˜X›YHLJK_YY˜][]]][Û“Ü[ÛœÊJ^Ü™]\›ˆOË—ÙY˜][YÙNžË‹‹\ËˆØË›]]][ÛœË‹‹™OË›]]][Û’Ù^I‰\Ë™Ù]]]][Û‘Y˜][ÊK›]]][Û’Ù^JK‹‹™KÙY˜][YˆL_XÛX\Š
^Ý\ËˆØ‹˜ÛX\Š
K\ËˆÞK˜ÛX\Š
__JÙY˜][Ü[ÛœÎžÜ]Y\šY\ÎžÜÝ[U[YN™M™Y™]ÚÛ•Ú[™ÝÑ›ØÝ\ÎˆL___JNÛÊ
K˜Ü™X]T›ÛÝ
ØÝ[Y[™Ù][[Y[žRY
œ›ÛÝŠJKœ™[™\Š
Ê
KšœÞ
JJ
K”ÝšXÝ[ÙKØÚ[™[ŽŠÊ
KšœÞ
J	ØÛY[šÑÚ[™[ŽŠÊ
KšœÞ
JßJ_J_JJ_JJ
N