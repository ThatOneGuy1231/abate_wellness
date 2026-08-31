(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Zc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fs={exports:{}},ko={},Ds={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),Xc=Symbol.for("react.portal"),qc=Symbol.for("react.fragment"),ed=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),nd=Symbol.for("react.provider"),rd=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),ld=Symbol.for("react.suspense"),id=Symbol.for("react.memo"),ad=Symbol.for("react.lazy"),aa=Symbol.iterator;function sd(e){return e===null||typeof e!="object"?null:(e=aa&&e[aa]||e["@@iterator"],typeof e=="function"?e:null)}var Ps={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ls=Object.assign,Is={};function wn(e,t,n){this.props=e,this.context=t,this.refs=Is,this.updater=n||Ps}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ts(){}Ts.prototype=wn.prototype;function ii(e,t,n){this.props=e,this.context=t,this.refs=Is,this.updater=n||Ps}var ai=ii.prototype=new Ts;ai.constructor=ii;Ls(ai,wn.prototype);ai.isPureReactComponent=!0;var sa=Array.isArray,As=Object.prototype.hasOwnProperty,si={current:null},_s={key:!0,ref:!0,__self:!0,__source:!0};function Rs(e,t,n){var r,o={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)As.call(t,r)&&!_s.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:fr,type:e,key:l,ref:a,props:o,_owner:si.current}}function ud(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ui(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function cd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ua=/\/+/g;function _o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cd(""+e.key):t.toString(36)}function _r(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fr:case Xc:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+_o(a,0):r,sa(o)?(n="",e!=null&&(n=e.replace(ua,"$&/")+"/"),_r(o,t,n,"",function(d){return d})):o!=null&&(ui(o)&&(o=ud(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ua,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",sa(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+_o(l,s);a+=_r(l,t,n,u,o)}else if(u=sd(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+_o(l,s++),a+=_r(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function vr(e,t,n){if(e==null)return e;var r=[],o=0;return _r(e,r,"","",function(l){return t.call(n,l,o++)}),r}function dd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Rr={transition:null},fd={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Rr,ReactCurrentOwner:si};function Os(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!ui(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=wn;V.Fragment=qc;V.Profiler=td;V.PureComponent=ii;V.StrictMode=ed;V.Suspense=ld;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fd;V.act=Os;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ls({},e.props),o=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=si.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)As.call(t,u)&&!_s.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:fr,type:e.type,key:o,ref:l,props:r,_owner:a}};V.createContext=function(e){return e={$$typeof:rd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nd,_context:e},e.Consumer=e};V.createElement=Rs;V.createFactory=function(e){var t=Rs.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:od,render:e}};V.isValidElement=ui;V.lazy=function(e){return{$$typeof:ad,_payload:{_status:-1,_result:e},_init:dd}};V.memo=function(e,t){return{$$typeof:id,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Rr.transition;Rr.transition={};try{e()}finally{Rr.transition=t}};V.unstable_act=Os;V.useCallback=function(e,t){return we.current.useCallback(e,t)};V.useContext=function(e){return we.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return we.current.useDeferredValue(e)};V.useEffect=function(e,t){return we.current.useEffect(e,t)};V.useId=function(){return we.current.useId()};V.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return we.current.useMemo(e,t)};V.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};V.useRef=function(e){return we.current.useRef(e)};V.useState=function(e){return we.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return we.current.useTransition()};V.version="18.3.1";Ds.exports=V;var E=Ds.exports;const Bs=Zc(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd=E,md=Symbol.for("react.element"),gd=Symbol.for("react.fragment"),hd=Object.prototype.hasOwnProperty,vd=pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xd={key:!0,ref:!0,__self:!0,__source:!0};function Us(e,t,n){var r,o={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)hd.call(t,r)&&!xd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:md,type:e,key:l,ref:a,props:o,_owner:vd.current}}ko.Fragment=gd;ko.jsx=Us;ko.jsxs=Us;Fs.exports=ko;var i=Fs.exports,cl={},Ws={exports:{}},Pe={},$s={exports:{}},Vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(g,M){var y=g.length;g.push(M);e:for(;0<y;){var L=y-1>>>1,R=g[L];if(0<o(R,M))g[L]=M,g[y]=R,y=L;else break e}}function n(g){return g.length===0?null:g[0]}function r(g){if(g.length===0)return null;var M=g[0],y=g.pop();if(y!==M){g[0]=y;e:for(var L=0,R=g.length,Z=R>>>1;L<Z;){var be=2*(L+1)-1,P=g[be],_=be+1,$=g[_];if(0>o(P,y))_<R&&0>o($,P)?(g[L]=$,g[_]=y,L=_):(g[L]=P,g[be]=y,L=be);else if(_<R&&0>o($,y))g[L]=$,g[_]=y,L=_;else break e}}return M}function o(g,M){var y=g.sortIndex-M.sortIndex;return y!==0?y:g.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],x=1,h=null,m=3,j=!1,b=!1,N=!1,B=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(g){for(var M=n(d);M!==null;){if(M.callback===null)r(d);else if(M.startTime<=g)r(d),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(d)}}function w(g){if(N=!1,p(g),!b)if(n(u)!==null)b=!0,C(z);else{var M=n(d);M!==null&&A(w,M.startTime-g)}}function z(g,M){b=!1,N&&(N=!1,f(F),F=-1),j=!0;var y=m;try{for(p(M),h=n(u);h!==null&&(!(h.expirationTime>M)||g&&!T());){var L=h.callback;if(typeof L=="function"){h.callback=null,m=h.priorityLevel;var R=L(h.expirationTime<=M);M=e.unstable_now(),typeof R=="function"?h.callback=R:h===n(u)&&r(u),p(M)}else r(u);h=n(u)}if(h!==null)var Z=!0;else{var be=n(d);be!==null&&A(w,be.startTime-M),Z=!1}return Z}finally{h=null,m=y,j=!1}}var k=!1,D=null,F=-1,U=5,v=-1;function T(){return!(e.unstable_now()-v<U)}function O(){if(D!==null){var g=e.unstable_now();v=g;var M=!0;try{M=D(!0,g)}finally{M?W():(k=!1,D=null)}}else k=!1}var W;if(typeof c=="function")W=function(){c(O)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,fe=Y.port2;Y.port1.onmessage=O,W=function(){fe.postMessage(null)}}else W=function(){B(O,0)};function C(g){D=g,k||(k=!0,W())}function A(g,M){F=B(function(){g(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(g){g.callback=null},e.unstable_continueExecution=function(){b||j||(b=!0,C(z))},e.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<g?Math.floor(1e3/g):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(g){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var y=m;m=M;try{return g()}finally{m=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(g,M){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var y=m;m=g;try{return M()}finally{m=y}},e.unstable_scheduleCallback=function(g,M,y){var L=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?L+y:L):y=L,g){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=y+R,g={id:x++,callback:M,priorityLevel:g,startTime:y,expirationTime:R,sortIndex:-1},y>L?(g.sortIndex=y,t(d,g),n(u)===null&&g===n(d)&&(N?(f(F),F=-1):N=!0,A(w,y-L))):(g.sortIndex=R,t(u,g),b||j||(b=!0,C(z))),g},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(g){var M=m;return function(){var y=m;m=M;try{return g.apply(this,arguments)}finally{m=y}}}})(Vs);$s.exports=Vs;var yd=$s.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd=E,De=yd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hs=new Set,Jn={};function Vt(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Jn[e]=t,e=0;e<t.length;e++)Hs.add(t[e])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dl=Object.prototype.hasOwnProperty,kd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ca={},da={};function bd(e){return dl.call(da,e)?!0:dl.call(ca,e)?!1:kd.test(e)?da[e]=!0:(ca[e]=!0,!1)}function jd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sd(e,t,n,r){if(t===null||typeof t>"u"||jd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var ci=/[\-:]([a-z])/g;function di(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ci,di);de[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ci,di);de[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ci,di);de[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function fi(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sd(t,n,o,r)&&(n=null),r||o===null?bd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ct=wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Jt=Symbol.for("react.fragment"),pi=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),Qs=Symbol.for("react.provider"),Ys=Symbol.for("react.context"),mi=Symbol.for("react.forward_ref"),pl=Symbol.for("react.suspense"),ml=Symbol.for("react.suspense_list"),gi=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),Ks=Symbol.for("react.offscreen"),fa=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Ro;function In(e){if(Ro===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ro=t&&t[1]||""}return`
`+Ro+e}var Oo=!1;function Bo(e,t){if(!e||Oo)return"";Oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=r.stack.split(`
`),a=o.length-1,s=l.length-1;1<=a&&0<=s&&o[a]!==l[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==l[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==l[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Oo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function Nd(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=Bo(e.type,!1),e;case 11:return e=Bo(e.type.render,!1),e;case 1:return e=Bo(e.type,!0),e;default:return""}}function gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jt:return"Fragment";case Kt:return"Portal";case fl:return"Profiler";case pi:return"StrictMode";case pl:return"Suspense";case ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ys:return(e.displayName||"Context")+".Consumer";case Qs:return(e._context.displayName||"Context")+".Provider";case mi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gi:return t=e.displayName||null,t!==null?t:gl(e.type)||"Memo";case ft:t=e._payload,e=e._init;try{return gl(e(t))}catch{}}return null}function Cd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gl(t);case 8:return t===pi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Js(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ed(e){var t=Js(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=Ed(e))}function Gs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Js(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hl(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zs(e,t){t=t.checked,t!=null&&fi(e,"checked",t,!1)}function vl(e,t){Zs(e,t);var n=Ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&xl(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ma(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xl(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ga(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Tn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ct(n)}}function Xs(e,t){var n=Ct(t.value),r=Ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ha(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,eu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zd=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){zd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function tu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function nu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=tu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Md=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,t){if(t){if(Md[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jl=null;function hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,sn=null,un=null;function va(e){if(e=gr(e)){if(typeof Sl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Co(t),Sl(e.stateNode,e.type,t))}}function ru(e){sn?un?un.push(e):un=[e]:sn=e}function ou(){if(sn){var e=sn,t=un;if(un=sn=null,va(e),t)for(e=0;e<t.length;e++)va(t[e])}}function lu(e,t){return e(t)}function iu(){}var Uo=!1;function au(e,t,n){if(Uo)return e(t,n);Uo=!0;try{return lu(e,t,n)}finally{Uo=!1,(sn!==null||un!==null)&&(iu(),ou())}}function Zn(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Nl=!1;if(it)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Nl=!1}function Fd(e,t,n,r,o,l,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(x){this.onError(x)}}var On=!1,Zr=null,Xr=!1,Cl=null,Dd={onError:function(e){On=!0,Zr=e}};function Pd(e,t,n,r,o,l,a,s,u){On=!1,Zr=null,Fd.apply(Dd,arguments)}function Ld(e,t,n,r,o,l,a,s,u){if(Pd.apply(this,arguments),On){if(On){var d=Zr;On=!1,Zr=null}else throw Error(S(198));Xr||(Xr=!0,Cl=d)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function su(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xa(e){if(Ht(e)!==e)throw Error(S(188))}function Id(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return xa(o),e;if(l===r)return xa(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=l;break}if(s===r){a=!0,r=o,n=l;break}s=s.sibling}if(!a){for(s=l.child;s;){if(s===n){a=!0,n=l,r=o;break}if(s===r){a=!0,r=l,n=o;break}s=s.sibling}if(!a)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function uu(e){return e=Id(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cu(e);if(t!==null)return t;e=e.sibling}return null}var du=De.unstable_scheduleCallback,ya=De.unstable_cancelCallback,Td=De.unstable_shouldYield,Ad=De.unstable_requestPaint,re=De.unstable_now,_d=De.unstable_getCurrentPriorityLevel,vi=De.unstable_ImmediatePriority,fu=De.unstable_UserBlockingPriority,qr=De.unstable_NormalPriority,Rd=De.unstable_LowPriority,pu=De.unstable_IdlePriority,bo=null,Xe=null;function Od(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(bo,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Wd,Bd=Math.log,Ud=Math.LN2;function Wd(e){return e>>>=0,e===0?32:31-(Bd(e)/Ud|0)|0}var kr=64,br=4194304;function An(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=An(s):(l&=a,l!==0&&(r=An(l)))}else a=n&~o,a!==0?r=An(a):l!==0&&(r=An(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),o=1<<n,r|=e[n],t&=~o;return r}function $d(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-He(l),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=$d(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mu(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Wo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function Hd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-He(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function xi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Q=0;function gu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hu,yi,vu,xu,yu,zl=!1,jr=[],xt=null,yt=null,wt=null,Xn=new Map,qn=new Map,mt=[],Qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wa(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(t.pointerId)}}function Cn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=gr(t),t!==null&&yi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Yd(e,t,n,r,o){switch(t){case"focusin":return xt=Cn(xt,e,t,n,r,o),!0;case"dragenter":return yt=Cn(yt,e,t,n,r,o),!0;case"mouseover":return wt=Cn(wt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Xn.set(l,Cn(Xn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,qn.set(l,Cn(qn.get(l)||null,e,t,n,r,o)),!0}return!1}function wu(e){var t=Lt(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=su(n),t!==null){e.blockedOn=t,yu(e.priority,function(){vu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ml(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jl=r,n.target.dispatchEvent(r),jl=null}else return t=gr(n),t!==null&&yi(t),e.blockedOn=n,!1;t.shift()}return!0}function ka(e,t,n){Or(e)&&n.delete(t)}function Kd(){zl=!1,xt!==null&&Or(xt)&&(xt=null),yt!==null&&Or(yt)&&(yt=null),wt!==null&&Or(wt)&&(wt=null),Xn.forEach(ka),qn.forEach(ka)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,zl||(zl=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Kd)))}function er(e){function t(o){return En(o,e)}if(0<jr.length){En(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xt!==null&&En(xt,e),yt!==null&&En(yt,e),wt!==null&&En(wt,e),Xn.forEach(t),qn.forEach(t),n=0;n<mt.length;n++)r=mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mt.length&&(n=mt[0],n.blockedOn===null);)wu(n),n.blockedOn===null&&mt.shift()}var cn=ct.ReactCurrentBatchConfig,to=!0;function Jd(e,t,n,r){var o=Q,l=cn.transition;cn.transition=null;try{Q=1,wi(e,t,n,r)}finally{Q=o,cn.transition=l}}function Gd(e,t,n,r){var o=Q,l=cn.transition;cn.transition=null;try{Q=4,wi(e,t,n,r)}finally{Q=o,cn.transition=l}}function wi(e,t,n,r){if(to){var o=Ml(e,t,n,r);if(o===null)Xo(e,t,r,no,n),wa(e,r);else if(Yd(o,e,t,n,r))r.stopPropagation();else if(wa(e,r),t&4&&-1<Qd.indexOf(e)){for(;o!==null;){var l=gr(o);if(l!==null&&hu(l),l=Ml(e,t,n,r),l===null&&Xo(e,t,r,no,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Xo(e,t,r,null,n)}}var no=null;function Ml(e,t,n,r){if(no=null,e=hi(r),e=Lt(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=su(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_d()){case vi:return 1;case fu:return 4;case qr:case Rd:return 16;case pu:return 536870912;default:return 16}default:return 16}}var ht=null,ki=null,Br=null;function bu(){if(Br)return Br;var e,t=ki,n=t.length,r,o="value"in ht?ht.value:ht.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[l-r];r++);return Br=o.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ba(){return!1}function Le(e){function t(n,r,o,l,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sr:ba,this.isPropagationStopped=ba,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=Le(kn),mr=te({},kn,{view:0,detail:0}),Zd=Le(mr),$o,Vo,zn,jo=te({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?($o=e.screenX-zn.screenX,Vo=e.screenY-zn.screenY):Vo=$o=0,zn=e),$o)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),ja=Le(jo),Xd=te({},jo,{dataTransfer:0}),qd=Le(Xd),ef=te({},mr,{relatedTarget:0}),Ho=Le(ef),tf=te({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),nf=Le(tf),rf=te({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),of=Le(rf),lf=te({},kn,{data:0}),Sa=Le(lf),af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uf[e])?!!t[e]:!1}function ji(){return cf}var df=te({},mr,{key:function(e){if(e.key){var t=af[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ji,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ff=Le(df),pf=te({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Na=Le(pf),mf=te({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ji}),gf=Le(mf),hf=te({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=Le(hf),xf=te({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yf=Le(xf),wf=[9,13,27,32],Si=it&&"CompositionEvent"in window,Bn=null;it&&"documentMode"in document&&(Bn=document.documentMode);var kf=it&&"TextEvent"in window&&!Bn,ju=it&&(!Si||Bn&&8<Bn&&11>=Bn),Ca=" ",Ea=!1;function Su(e,t){switch(e){case"keyup":return wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function bf(e,t){switch(e){case"compositionend":return Nu(t);case"keypress":return t.which!==32?null:(Ea=!0,Ca);case"textInput":return e=t.data,e===Ca&&Ea?null:e;default:return null}}function jf(e,t){if(Gt)return e==="compositionend"||!Si&&Su(e,t)?(e=bu(),Br=ki=ht=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ju&&t.locale!=="ko"?null:t.data;default:return null}}var Sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sf[e.type]:t==="textarea"}function Cu(e,t,n,r){ru(r),t=ro(t,"onChange"),0<t.length&&(n=new bi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Un=null,tr=null;function Nf(e){_u(e,0)}function So(e){var t=qt(e);if(Gs(t))return e}function Cf(e,t){if(e==="change")return t}var Eu=!1;if(it){var Qo;if(it){var Yo="oninput"in document;if(!Yo){var Ma=document.createElement("div");Ma.setAttribute("oninput","return;"),Yo=typeof Ma.oninput=="function"}Qo=Yo}else Qo=!1;Eu=Qo&&(!document.documentMode||9<document.documentMode)}function Fa(){Un&&(Un.detachEvent("onpropertychange",zu),tr=Un=null)}function zu(e){if(e.propertyName==="value"&&So(tr)){var t=[];Cu(t,tr,e,hi(e)),au(Nf,t)}}function Ef(e,t,n){e==="focusin"?(Fa(),Un=t,tr=n,Un.attachEvent("onpropertychange",zu)):e==="focusout"&&Fa()}function zf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return So(tr)}function Mf(e,t){if(e==="click")return So(t)}function Ff(e,t){if(e==="input"||e==="change")return So(t)}function Df(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Df;function nr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!dl.call(t,o)||!Ye(e[o],t[o]))return!1}return!0}function Da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pa(e,t){var n=Da(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Da(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fu(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Ni(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pf(e){var t=Fu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mu(n.ownerDocument.documentElement,n)){if(r!==null&&Ni(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Pa(n,l);var a=Pa(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lf=it&&"documentMode"in document&&11>=document.documentMode,Zt=null,Fl=null,Wn=null,Dl=!1;function La(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||Zt==null||Zt!==Gr(r)||(r=Zt,"selectionStart"in r&&Ni(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wn&&nr(Wn,r)||(Wn=r,r=ro(Fl,"onSelect"),0<r.length&&(t=new bi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},Ko={},Du={};it&&(Du=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function No(e){if(Ko[e])return Ko[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Du)return Ko[e]=t[n];return e}var Pu=No("animationend"),Lu=No("animationiteration"),Iu=No("animationstart"),Tu=No("transitionend"),Au=new Map,Ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){Au.set(e,t),Vt(t,[e])}for(var Jo=0;Jo<Ia.length;Jo++){var Go=Ia[Jo],If=Go.toLowerCase(),Tf=Go[0].toUpperCase()+Go.slice(1);zt(If,"on"+Tf)}zt(Pu,"onAnimationEnd");zt(Lu,"onAnimationIteration");zt(Iu,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(Tu,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Af=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function Ta(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ld(r,t,void 0,e),e.currentTarget=null}function _u(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==l&&o.isPropagationStopped())break e;Ta(o,s,d),l=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==l&&o.isPropagationStopped())break e;Ta(o,s,d),l=u}}}if(Xr)throw e=Cl,Xr=!1,Cl=null,e}function J(e,t){var n=t[Al];n===void 0&&(n=t[Al]=new Set);var r=e+"__bubble";n.has(r)||(Ru(t,e,2,!1),n.add(r))}function Zo(e,t,n){var r=0;t&&(r|=4),Ru(n,e,r,t)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Cr]){e[Cr]=!0,Hs.forEach(function(n){n!=="selectionchange"&&(Af.has(n)||Zo(n,!1,e),Zo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cr]||(t[Cr]=!0,Zo("selectionchange",!1,t))}}function Ru(e,t,n,r){switch(ku(t)){case 1:var o=Jd;break;case 4:o=Gd;break;default:o=wi}n=o.bind(null,t,n,e),o=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Xo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Lt(s),a===null)return;if(u=a.tag,u===5||u===6){r=l=a;continue e}s=s.parentNode}}r=r.return}au(function(){var d=l,x=hi(n),h=[];e:{var m=Au.get(e);if(m!==void 0){var j=bi,b=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":j=ff;break;case"focusin":b="focus",j=Ho;break;case"focusout":b="blur",j=Ho;break;case"beforeblur":case"afterblur":j=Ho;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=gf;break;case Pu:case Lu:case Iu:j=nf;break;case Tu:j=vf;break;case"scroll":j=Zd;break;case"wheel":j=yf;break;case"copy":case"cut":case"paste":j=of;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Na}var N=(t&4)!==0,B=!N&&e==="scroll",f=N?m!==null?m+"Capture":null:m;N=[];for(var c=d,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Zn(c,f),w!=null&&N.push(or(c,w,p)))),B)break;c=c.return}0<N.length&&(m=new j(m,b,null,n,x),h.push({event:m,listeners:N}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",m&&n!==jl&&(b=n.relatedTarget||n.fromElement)&&(Lt(b)||b[at]))break e;if((j||m)&&(m=x.window===x?x:(m=x.ownerDocument)?m.defaultView||m.parentWindow:window,j?(b=n.relatedTarget||n.toElement,j=d,b=b?Lt(b):null,b!==null&&(B=Ht(b),b!==B||b.tag!==5&&b.tag!==6)&&(b=null)):(j=null,b=d),j!==b)){if(N=ja,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(N=Na,w="onPointerLeave",f="onPointerEnter",c="pointer"),B=j==null?m:qt(j),p=b==null?m:qt(b),m=new N(w,c+"leave",j,n,x),m.target=B,m.relatedTarget=p,w=null,Lt(x)===d&&(N=new N(f,c+"enter",b,n,x),N.target=p,N.relatedTarget=B,w=N),B=w,j&&b)t:{for(N=j,f=b,c=0,p=N;p;p=Qt(p))c++;for(p=0,w=f;w;w=Qt(w))p++;for(;0<c-p;)N=Qt(N),c--;for(;0<p-c;)f=Qt(f),p--;for(;c--;){if(N===f||f!==null&&N===f.alternate)break t;N=Qt(N),f=Qt(f)}N=null}else N=null;j!==null&&Aa(h,m,j,N,!1),b!==null&&B!==null&&Aa(h,B,b,N,!0)}}e:{if(m=d?qt(d):window,j=m.nodeName&&m.nodeName.toLowerCase(),j==="select"||j==="input"&&m.type==="file")var z=Cf;else if(za(m))if(Eu)z=Ff;else{z=zf;var k=Ef}else(j=m.nodeName)&&j.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=Mf);if(z&&(z=z(e,d))){Cu(h,z,n,x);break e}k&&k(e,m,d),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&xl(m,"number",m.value)}switch(k=d?qt(d):window,e){case"focusin":(za(k)||k.contentEditable==="true")&&(Zt=k,Fl=d,Wn=null);break;case"focusout":Wn=Fl=Zt=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,La(h,n,x);break;case"selectionchange":if(Lf)break;case"keydown":case"keyup":La(h,n,x)}var D;if(Si)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Gt?Su(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(ju&&n.locale!=="ko"&&(Gt||F!=="onCompositionStart"?F==="onCompositionEnd"&&Gt&&(D=bu()):(ht=x,ki="value"in ht?ht.value:ht.textContent,Gt=!0)),k=ro(d,F),0<k.length&&(F=new Sa(F,e,null,n,x),h.push({event:F,listeners:k}),D?F.data=D:(D=Nu(n),D!==null&&(F.data=D)))),(D=kf?bf(e,n):jf(e,n))&&(d=ro(d,"onBeforeInput"),0<d.length&&(x=new Sa("onBeforeInput","beforeinput",null,n,x),h.push({event:x,listeners:d}),x.data=D))}_u(h,t)})}function or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Zn(e,n),l!=null&&r.unshift(or(e,l,o)),l=Zn(e,t),l!=null&&r.push(or(e,l,o))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Aa(e,t,n,r,o){for(var l=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Zn(n,l),u!=null&&a.unshift(or(n,u,s))):o||(u=Zn(n,l),u!=null&&a.push(or(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var _f=/\r\n?/g,Rf=/\u0000|\uFFFD/g;function _a(e){return(typeof e=="string"?e:""+e).replace(_f,`
`).replace(Rf,"")}function Er(e,t,n){if(t=_a(t),_a(e)!==t&&n)throw Error(S(425))}function oo(){}var Pl=null,Ll=null;function Il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tl=typeof setTimeout=="function"?setTimeout:void 0,Of=typeof clearTimeout=="function"?clearTimeout:void 0,Ra=typeof Promise=="function"?Promise:void 0,Bf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ra<"u"?function(e){return Ra.resolve(null).then(e).catch(Uf)}:Tl;function Uf(e){setTimeout(function(){throw e})}function qo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);er(t)}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Oa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Ze="__reactFiber$"+bn,lr="__reactProps$"+bn,at="__reactContainer$"+bn,Al="__reactEvents$"+bn,Wf="__reactListeners$"+bn,$f="__reactHandles$"+bn;function Lt(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oa(e);e!==null;){if(n=e[Ze])return n;e=Oa(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[Ze]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Co(e){return e[lr]||null}var _l=[],en=-1;function Mt(e){return{current:e}}function G(e){0>en||(e.current=_l[en],_l[en]=null,en--)}function K(e,t){en++,_l[en]=e.current,e.current=t}var Et={},ve=Mt(Et),Ne=Mt(!1),Ot=Et;function mn(e,t){var n=e.type.contextTypes;if(!n)return Et;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function lo(){G(Ne),G(ve)}function Ba(e,t,n){if(ve.current!==Et)throw Error(S(168));K(ve,t),K(Ne,n)}function Ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Cd(e)||"Unknown",o));return te({},n,r)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Et,Ot=ve.current,K(ve,e),K(Ne,Ne.current),!0}function Ua(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ou(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,G(Ne),G(ve),K(ve,e)):G(Ne),K(Ne,n)}var nt=null,Eo=!1,el=!1;function Bu(e){nt===null?nt=[e]:nt.push(e)}function Vf(e){Eo=!0,Bu(e)}function Ft(){if(!el&&nt!==null){el=!0;var e=0,t=Q;try{var n=nt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,Eo=!1}catch(o){throw nt!==null&&(nt=nt.slice(e+1)),du(vi,Ft),o}finally{Q=t,el=!1}}return null}var tn=[],nn=0,ao=null,so=0,Ie=[],Te=0,Bt=null,rt=1,ot="";function Dt(e,t){tn[nn++]=so,tn[nn++]=ao,ao=e,so=t}function Uu(e,t,n){Ie[Te++]=rt,Ie[Te++]=ot,Ie[Te++]=Bt,Bt=e;var r=rt;e=ot;var o=32-He(r)-1;r&=~(1<<o),n+=1;var l=32-He(t)+o;if(30<l){var a=o-o%5;l=(r&(1<<a)-1).toString(32),r>>=a,o-=a,rt=1<<32-He(t)+o|n<<o|r,ot=l+e}else rt=1<<l|n<<o|r,ot=e}function Ci(e){e.return!==null&&(Dt(e,1),Uu(e,1,0))}function Ei(e){for(;e===ao;)ao=tn[--nn],tn[nn]=null,so=tn[--nn],tn[nn]=null;for(;e===Bt;)Bt=Ie[--Te],Ie[Te]=null,ot=Ie[--Te],Ie[Te]=null,rt=Ie[--Te],Ie[Te]=null}var Fe=null,Me=null,X=!1,Ve=null;function Wu(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Me=kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:rt,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Me=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(X){var t=Me;if(t){var n=t;if(!Wa(e,t)){if(Rl(e))throw Error(S(418));t=kt(n.nextSibling);var r=Fe;t&&Wa(e,t)?Wu(r,n):(e.flags=e.flags&-4097|2,X=!1,Fe=e)}}else{if(Rl(e))throw Error(S(418));e.flags=e.flags&-4097|2,X=!1,Fe=e}}}function $a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function zr(e){if(e!==Fe)return!1;if(!X)return $a(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Il(e.type,e.memoizedProps)),t&&(t=Me)){if(Rl(e))throw $u(),Error(S(418));for(;t;)Wu(e,t),t=kt(t.nextSibling)}if($a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Fe?kt(e.stateNode.nextSibling):null;return!0}function $u(){for(var e=Me;e;)e=kt(e.nextSibling)}function gn(){Me=Fe=null,X=!1}function zi(e){Ve===null?Ve=[e]:Ve.push(e)}var Hf=ct.ReactCurrentBatchConfig;function Mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var s=o.refs;a===null?delete s[l]:s[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Mr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Va(e){var t=e._init;return t(e._payload)}function Vu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Nt(f,c),f.index=0,f.sibling=null,f}function l(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,w){return c===null||c.tag!==6?(c=al(p,f.mode,w),c.return=f,c):(c=o(c,p),c.return=f,c)}function u(f,c,p,w){var z=p.type;return z===Jt?x(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ft&&Va(z)===c.type)?(w=o(c,p.props),w.ref=Mn(f,c,p),w.return=f,w):(w=Kr(p.type,p.key,p.props,null,f.mode,w),w.ref=Mn(f,c,p),w.return=f,w)}function d(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=sl(p,f.mode,w),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function x(f,c,p,w,z){return c===null||c.tag!==7?(c=_t(p,f.mode,w,z),c.return=f,c):(c=o(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=al(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case xr:return p=Kr(c.type,c.key,c.props,null,f.mode,p),p.ref=Mn(f,null,c),p.return=f,p;case Kt:return c=sl(c,f.mode,p),c.return=f,c;case ft:var w=c._init;return h(f,w(c._payload),p)}if(Tn(c)||Sn(c))return c=_t(c,f.mode,p,null),c.return=f,c;Mr(f,c)}return null}function m(f,c,p,w){var z=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return z!==null?null:s(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:return p.key===z?u(f,c,p,w):null;case Kt:return p.key===z?d(f,c,p,w):null;case ft:return z=p._init,m(f,c,z(p._payload),w)}if(Tn(p)||Sn(p))return z!==null?null:x(f,c,p,w,null);Mr(f,p)}return null}function j(f,c,p,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,s(c,f,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xr:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,z);case Kt:return f=f.get(w.key===null?p:w.key)||null,d(c,f,w,z);case ft:var k=w._init;return j(f,c,p,k(w._payload),z)}if(Tn(w)||Sn(w))return f=f.get(p)||null,x(c,f,w,z,null);Mr(c,w)}return null}function b(f,c,p,w){for(var z=null,k=null,D=c,F=c=0,U=null;D!==null&&F<p.length;F++){D.index>F?(U=D,D=null):U=D.sibling;var v=m(f,D,p[F],w);if(v===null){D===null&&(D=U);break}e&&D&&v.alternate===null&&t(f,D),c=l(v,c,F),k===null?z=v:k.sibling=v,k=v,D=U}if(F===p.length)return n(f,D),X&&Dt(f,F),z;if(D===null){for(;F<p.length;F++)D=h(f,p[F],w),D!==null&&(c=l(D,c,F),k===null?z=D:k.sibling=D,k=D);return X&&Dt(f,F),z}for(D=r(f,D);F<p.length;F++)U=j(D,f,F,p[F],w),U!==null&&(e&&U.alternate!==null&&D.delete(U.key===null?F:U.key),c=l(U,c,F),k===null?z=U:k.sibling=U,k=U);return e&&D.forEach(function(T){return t(f,T)}),X&&Dt(f,F),z}function N(f,c,p,w){var z=Sn(p);if(typeof z!="function")throw Error(S(150));if(p=z.call(p),p==null)throw Error(S(151));for(var k=z=null,D=c,F=c=0,U=null,v=p.next();D!==null&&!v.done;F++,v=p.next()){D.index>F?(U=D,D=null):U=D.sibling;var T=m(f,D,v.value,w);if(T===null){D===null&&(D=U);break}e&&D&&T.alternate===null&&t(f,D),c=l(T,c,F),k===null?z=T:k.sibling=T,k=T,D=U}if(v.done)return n(f,D),X&&Dt(f,F),z;if(D===null){for(;!v.done;F++,v=p.next())v=h(f,v.value,w),v!==null&&(c=l(v,c,F),k===null?z=v:k.sibling=v,k=v);return X&&Dt(f,F),z}for(D=r(f,D);!v.done;F++,v=p.next())v=j(D,f,F,v.value,w),v!==null&&(e&&v.alternate!==null&&D.delete(v.key===null?F:v.key),c=l(v,c,F),k===null?z=v:k.sibling=v,k=v);return e&&D.forEach(function(O){return t(f,O)}),X&&Dt(f,F),z}function B(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Jt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:e:{for(var z=p.key,k=c;k!==null;){if(k.key===z){if(z=p.type,z===Jt){if(k.tag===7){n(f,k.sibling),c=o(k,p.props.children),c.return=f,f=c;break e}}else if(k.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ft&&Va(z)===k.type){n(f,k.sibling),c=o(k,p.props),c.ref=Mn(f,k,p),c.return=f,f=c;break e}n(f,k);break}else t(f,k);k=k.sibling}p.type===Jt?(c=_t(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=Kr(p.type,p.key,p.props,null,f.mode,w),w.ref=Mn(f,c,p),w.return=f,f=w)}return a(f);case Kt:e:{for(k=p.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=sl(p,f.mode,w),c.return=f,f=c}return a(f);case ft:return k=p._init,B(f,c,k(p._payload),w)}if(Tn(p))return b(f,c,p,w);if(Sn(p))return N(f,c,p,w);Mr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,p),c.return=f,f=c):(n(f,c),c=al(p,f.mode,w),c.return=f,f=c),a(f)):n(f,c)}return B}var hn=Vu(!0),Hu=Vu(!1),uo=Mt(null),co=null,rn=null,Mi=null;function Fi(){Mi=rn=co=null}function Di(e){var t=uo.current;G(uo),e._currentValue=t}function Bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){co=e,Mi=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Mi!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(co===null)throw Error(S(308));rn=e,co.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var It=null;function Pi(e){It===null?It=[e]:It.push(e)}function Qu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Pi(t)):(n.next=o.next,o.next=n),t.interleaved=n,st(e,r)}function st(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pt=!1;function Li(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,st(e,n)}return o=r.interleaved,o===null?(t.next=t,Pi(r)):(t.next=o.next,o.next=t),r.interleaved=t,st(e,n)}function Wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xi(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var o=e.updateQueue;pt=!1;var l=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?l=d:a.next=d,a=u;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==a&&(s===null?x.firstBaseUpdate=d:s.next=d,x.lastBaseUpdate=u))}if(l!==null){var h=o.baseState;a=0,x=d=u=null,s=l;do{var m=s.lane,j=s.eventTime;if((r&m)===m){x!==null&&(x=x.next={eventTime:j,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,N=s;switch(m=t,j=n,N.tag){case 1:if(b=N.payload,typeof b=="function"){h=b.call(j,h,m);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=N.payload,m=typeof b=="function"?b.call(j,h,m):b,m==null)break e;h=te({},h,m);break e;case 2:pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else j={eventTime:j,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(d=x=j,u=h):x=x.next=j,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(x===null&&(u=h),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=x,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Wt|=a,e.lanes=a,e.memoizedState=h}}function Qa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var hr={},qe=Mt(hr),ir=Mt(hr),ar=Mt(hr);function Tt(e){if(e===hr)throw Error(S(174));return e}function Ii(e,t){switch(K(ar,t),K(ir,e),K(qe,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wl(t,e)}G(qe),K(qe,t)}function vn(){G(qe),G(ir),G(ar)}function Ku(e){Tt(ar.current);var t=Tt(qe.current),n=wl(t,e.type);t!==n&&(K(ir,e),K(qe,n))}function Ti(e){ir.current===e&&(G(qe),G(ir))}var q=Mt(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tl=[];function Ai(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var $r=ct.ReactCurrentDispatcher,nl=ct.ReactCurrentBatchConfig,Ut=0,ee=null,le=null,ae=null,mo=!1,$n=!1,sr=0,Qf=0;function me(){throw Error(S(321))}function _i(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Ri(e,t,n,r,o,l){if(Ut=l,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$r.current=e===null||e.memoizedState===null?Gf:Zf,e=n(r,o),$n){l=0;do{if($n=!1,sr=0,25<=l)throw Error(S(301));l+=1,ae=le=null,t.updateQueue=null,$r.current=Xf,e=n(r,o)}while($n)}if($r.current=go,t=le!==null&&le.next!==null,Ut=0,ae=le=ee=null,mo=!1,t)throw Error(S(300));return e}function Oi(){var e=sr!==0;return sr=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?ee.memoizedState=ae=e:ae=ae.next=e,ae}function Oe(){if(le===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ae===null?ee.memoizedState:ae.next;if(t!==null)ae=t,le=e;else{if(e===null)throw Error(S(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ae===null?ee.memoizedState=ae=e:ae=ae.next=e}return ae}function ur(e,t){return typeof t=="function"?t(e):t}function rl(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var a=o.next;o.next=l.next,l.next=a}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=a=null,u=null,d=l;do{var x=d.lane;if((Ut&x)===x)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:x,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,a=r):u=u.next=h,ee.lanes|=x,Wt|=x}d=d.next}while(d!==null&&d!==l);u===null?a=r:u.next=s,Ye(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ee.lanes|=l,Wt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ol(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do l=e(l,a.action),a=a.next;while(a!==o);Ye(l,t.memoizedState)||(Se=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ju(){}function Gu(e,t){var n=ee,r=Oe(),o=t(),l=!Ye(r.memoizedState,o);if(l&&(r.memoizedState=o,Se=!0),r=r.queue,Bi(qu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,cr(9,Xu.bind(null,n,r,o,t),void 0,null),se===null)throw Error(S(349));Ut&30||Zu(n,t,o)}return o}function Zu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xu(e,t,n,r){t.value=n,t.getSnapshot=r,ec(t)&&tc(e)}function qu(e,t,n){return n(function(){ec(t)&&tc(e)})}function ec(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function tc(e){var t=st(e,1);t!==null&&Qe(t,e,1,-1)}function Ya(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Jf.bind(null,ee,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nc(){return Oe().memoizedState}function Vr(e,t,n,r){var o=Ge();ee.flags|=e,o.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function zo(e,t,n,r){var o=Oe();r=r===void 0?null:r;var l=void 0;if(le!==null){var a=le.memoizedState;if(l=a.destroy,r!==null&&_i(r,a.deps)){o.memoizedState=cr(t,n,l,r);return}}ee.flags|=e,o.memoizedState=cr(1|t,n,l,r)}function Ka(e,t){return Vr(8390656,8,e,t)}function Bi(e,t){return zo(2048,8,e,t)}function rc(e,t){return zo(4,2,e,t)}function oc(e,t){return zo(4,4,e,t)}function lc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ic(e,t,n){return n=n!=null?n.concat([e]):null,zo(4,4,lc.bind(null,t,e),n)}function Ui(){}function ac(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_i(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_i(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uc(e,t,n){return Ut&21?(Ye(n,t)||(n=mu(),ee.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Yf(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),t()}finally{Q=n,nl.transition=r}}function cc(){return Oe().memoizedState}function Kf(e,t,n){var r=St(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dc(e))fc(t,n);else if(n=Qu(e,t,n,r),n!==null){var o=ye();Qe(n,e,r,o),pc(n,t,r)}}function Jf(e,t,n){var r=St(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dc(e))fc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,s=l(a,n);if(o.hasEagerState=!0,o.eagerState=s,Ye(s,a)){var u=t.interleaved;u===null?(o.next=o,Pi(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Qu(e,t,o,r),n!==null&&(o=ye(),Qe(n,e,r,o),pc(n,t,r))}}function dc(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function fc(e,t){$n=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xi(e,n)}}var go={readContext:Re,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Gf={readContext:Re,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Ka,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vr(4194308,4,lc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vr(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kf.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:Ya,useDebugValue:Ui,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=Ya(!1),t=e[0];return e=Yf.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=Ge();if(X){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),se===null)throw Error(S(349));Ut&30||Zu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ka(qu.bind(null,r,l,e),[e]),r.flags|=2048,cr(9,Xu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ge(),t=se.identifierPrefix;if(X){var n=ot,r=rt;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zf={readContext:Re,useCallback:ac,useContext:Re,useEffect:Bi,useImperativeHandle:ic,useInsertionEffect:rc,useLayoutEffect:oc,useMemo:sc,useReducer:rl,useRef:nc,useState:function(){return rl(ur)},useDebugValue:Ui,useDeferredValue:function(e){var t=Oe();return uc(t,le.memoizedState,e)},useTransition:function(){var e=rl(ur)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Ju,useSyncExternalStore:Gu,useId:cc,unstable_isNewReconciler:!1},Xf={readContext:Re,useCallback:ac,useContext:Re,useEffect:Bi,useImperativeHandle:ic,useInsertionEffect:rc,useLayoutEffect:oc,useMemo:sc,useReducer:ol,useRef:nc,useState:function(){return ol(ur)},useDebugValue:Ui,useDeferredValue:function(e){var t=Oe();return le===null?t.memoizedState=e:uc(t,le.memoizedState,e)},useTransition:function(){var e=ol(ur)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Ju,useSyncExternalStore:Gu,useId:cc,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ul(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=St(e),l=lt(r,o);l.payload=t,n!=null&&(l.callback=n),t=bt(e,l,o),t!==null&&(Qe(t,e,o,r),Wr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=St(e),l=lt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=bt(e,l,o),t!==null&&(Qe(t,e,o,r),Wr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=St(e),o=lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=bt(e,o,r),t!==null&&(Qe(t,e,r,n),Wr(t,e,r))}};function Ja(e,t,n,r,o,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!nr(n,r)||!nr(o,l):!0}function mc(e,t,n){var r=!1,o=Et,l=t.contextType;return typeof l=="object"&&l!==null?l=Re(l):(o=Ce(t)?Ot:ve.current,r=t.contextTypes,l=(r=r!=null)?mn(e,o):Et),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ga(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function Wl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Li(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Re(l):(l=Ce(t)?Ot:ve.current,o.context=mn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ul(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Mo.enqueueReplaceState(o,o.state,null),fo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=Nd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ll(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $l(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qf=typeof WeakMap=="function"?WeakMap:Map;function gc(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vo||(vo=!0,ql=r),$l(e,t)},n}function hc(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){$l(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){$l(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Za(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=pp.bind(null,e,t,n),t.then(e,e))}function Xa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qa(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,bt(n,t,1))),n.lanes|=1),e)}var ep=ct.ReactCurrentOwner,Se=!1;function xe(e,t,n,r){t.child=e===null?Hu(t,null,n,r):hn(t,e.child,n,r)}function es(e,t,n,r,o){n=n.render;var l=t.ref;return dn(t,o),r=Ri(e,t,n,r,l,o),n=Oi(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ut(e,t,o)):(X&&n&&Ci(t),t.flags|=1,xe(e,t,r,o),t.child)}function ts(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ji(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,vc(e,t,l,r,o)):(e=Kr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(a,r)&&e.ref===t.ref)return ut(e,t,o)}return t.flags|=1,e=Nt(l,r),e.ref=t.ref,e.return=t,t.child=e}function vc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(nr(l,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,ut(e,t,o)}return Vl(e,t,n,r,o)}function xc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(ln,ze),ze|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(ln,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,K(ln,ze),ze|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,K(ln,ze),ze|=r;return xe(e,t,o,n),t.child}function yc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,r,o){var l=Ce(n)?Ot:ve.current;return l=mn(t,l),dn(t,o),n=Ri(e,t,n,r,l,o),r=Oi(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ut(e,t,o)):(X&&r&&Ci(t),t.flags|=1,xe(e,t,n,o),t.child)}function ns(e,t,n,r,o){if(Ce(n)){var l=!0;io(t)}else l=!1;if(dn(t,o),t.stateNode===null)Hr(e,t),mc(t,n,r),Wl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Re(d):(d=Ce(n)?Ot:ve.current,d=mn(t,d));var x=n.getDerivedStateFromProps,h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ga(t,a,r,d),pt=!1;var m=t.memoizedState;a.state=m,fo(t,r,a,o),u=t.memoizedState,s!==r||m!==u||Ne.current||pt?(typeof x=="function"&&(Ul(t,n,x,r),u=t.memoizedState),(s=pt||Ja(t,n,s,r,m,u,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Yu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:We(t.type,s),a.props=d,h=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Re(u):(u=Ce(n)?Ot:ve.current,u=mn(t,u));var j=n.getDerivedStateFromProps;(x=typeof j=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==h||m!==u)&&Ga(t,a,r,u),pt=!1,m=t.memoizedState,a.state=m,fo(t,r,a,o);var b=t.memoizedState;s!==h||m!==b||Ne.current||pt?(typeof j=="function"&&(Ul(t,n,j,r),b=t.memoizedState),(d=pt||Ja(t,n,d,r,m,b,u)||!1)?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Hl(e,t,n,r,l,o)}function Hl(e,t,n,r,o,l){yc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Ua(t,n,!1),ut(e,t,l);r=t.stateNode,ep.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=hn(t,e.child,null,l),t.child=hn(t,null,s,l)):xe(e,t,s,l),t.memoizedState=r.state,o&&Ua(t,n,!0),t.child}function wc(e){var t=e.stateNode;t.pendingContext?Ba(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ba(e,t.context,!1),Ii(e,t.containerInfo)}function rs(e,t,n,r,o){return gn(),zi(o),t.flags|=256,xe(e,t,n,r),t.child}var Ql={dehydrated:null,treeContext:null,retryLane:0};function Yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function kc(e,t,n){var r=t.pendingProps,o=q.current,l=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(q,o&1),e===null)return Ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Po(a,r,0,null),e=_t(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Yl(n),t.memoizedState=Ql,e):Wi(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return tp(e,t,a,r,s,o,n);if(l){l=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Nt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=Nt(s,l):(l=_t(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?Yl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Ql,r}return l=e.child,e=l.sibling,r=Nt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wi(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fr(e,t,n,r){return r!==null&&zi(r),hn(t,e.child,null,n),e=Wi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tp(e,t,n,r,o,l,a){if(n)return t.flags&256?(t.flags&=-257,r=ll(Error(S(422))),Fr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Po({mode:"visible",children:r.children},o,0,null),l=_t(l,o,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&hn(t,e.child,null,a),t.child.memoizedState=Yl(a),t.memoizedState=Ql,l);if(!(t.mode&1))return Fr(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(S(419)),r=ll(l,r,void 0),Fr(e,t,a,r)}if(s=(a&e.childLanes)!==0,Se||s){if(r=se,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,st(e,o),Qe(r,e,o,-1))}return Ki(),r=ll(Error(S(421))),Fr(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=mp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Me=kt(o.nextSibling),Fe=t,X=!0,Ve=null,e!==null&&(Ie[Te++]=rt,Ie[Te++]=ot,Ie[Te++]=Bt,rt=e.id,ot=e.overflow,Bt=t),t=Wi(t,r.children),t.flags|=4096,t)}function os(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bl(e.return,t,n)}function il(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function bc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(xe(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&os(e,n,t);else if(e.tag===19)os(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),il(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&po(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}il(t,!0,n,null,l);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Nt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function np(e,t,n){switch(t.tag){case 3:wc(t),gn();break;case 5:Ku(t);break;case 1:Ce(t.type)&&io(t);break;case 4:Ii(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(uo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?kc(e,t,n):(K(q,q.current&1),e=ut(e,t,n),e!==null?e.sibling:null);K(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,xc(e,t,n)}return ut(e,t,n)}var jc,Kl,Sc,Nc;jc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kl=function(){};Sc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Tt(qe.current);var l=null;switch(n){case"input":o=hl(e,o),r=hl(e,r),l=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),l=[];break;case"textarea":o=yl(e,o),r=yl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}kl(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Jn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Jn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&J("scroll",e),l||s===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Nc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rp(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ce(t.type)&&lo(),ge(t),null;case 3:return r=t.stateNode,vn(),G(Ne),G(ve),Ai(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(ni(Ve),Ve=null))),Kl(e,t),ge(t),null;case 5:Ti(t);var o=Tt(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)Sc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ge(t),null}if(e=Tt(qe.current),zr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ze]=t,r[lr]=l,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(o=0;o<_n.length;o++)J(_n[o],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":pa(r,l),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},J("invalid",r);break;case"textarea":ga(r,l),J("invalid",r)}kl(n,l),o=null;for(var a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),o=["children",""+s]):Jn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&J("scroll",r)}switch(n){case"input":yr(r),ma(r,l,!0);break;case"textarea":yr(r),ha(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=oo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ze]=t,e[lr]=r,jc(e,t,!1,!1),t.stateNode=e;e:{switch(a=bl(n,r),n){case"dialog":J("cancel",e),J("close",e),o=r;break;case"iframe":case"object":case"embed":J("load",e),o=r;break;case"video":case"audio":for(o=0;o<_n.length;o++)J(_n[o],e);o=r;break;case"source":J("error",e),o=r;break;case"img":case"image":case"link":J("error",e),J("load",e),o=r;break;case"details":J("toggle",e),o=r;break;case"input":pa(e,r),o=hl(e,r),J("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),J("invalid",e);break;case"textarea":ga(e,r),o=yl(e,r),J("invalid",e);break;default:o=r}kl(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?nu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&eu(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Gn(e,u):typeof u=="number"&&Gn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Jn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&J("scroll",e):u!=null&&fi(e,l,u,a))}switch(n){case"input":yr(e),ma(e,r,!1);break;case"textarea":yr(e),ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ct(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?an(e,!!r.multiple,l,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Nc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Tt(ar.current),Tt(qe.current),zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ze]=t,(l=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Er(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r}return ge(t),null;case 13:if(G(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Me!==null&&t.mode&1&&!(t.flags&128))$u(),gn(),t.flags|=98560,l=!1;else if(l=zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Ze]=t}else gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),l=!1}else Ve!==null&&(ni(Ve),Ve=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ie===0&&(ie=3):Ki())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return vn(),Kl(e,t),e===null&&rr(t.stateNode.containerInfo),ge(t),null;case 10:return Di(t.type._context),ge(t),null;case 17:return Ce(t.type)&&lo(),ge(t),null;case 19:if(G(q),l=t.memoizedState,l===null)return ge(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)Fn(l,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=po(e),a!==null){for(t.flags|=128,Fn(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(q,q.current&1|2),t.child}e=e.sibling}l.tail!==null&&re()>yn&&(t.flags|=128,r=!0,Fn(l,!1),t.lanes=4194304)}else{if(!r)if(e=po(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!X)return ge(t),null}else 2*re()-l.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Fn(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=re(),t.sibling=null,n=q.current,K(q,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Yi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function op(e,t){switch(Ei(t),t.tag){case 1:return Ce(t.type)&&lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(),G(Ne),G(ve),Ai(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ti(t),null;case 13:if(G(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(q),null;case 4:return vn(),null;case 10:return Di(t.type._context),null;case 22:case 23:return Yi(),null;case 24:return null;default:return null}}var Dr=!1,he=!1,lp=typeof WeakSet=="function"?WeakSet:Set,I=null;function on(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Jl(e,t,n){try{n()}catch(r){ne(e,t,r)}}var ls=!1;function ip(e,t){if(Pl=to,e=Fu(),Ni(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,x=0,h=e,m=null;t:for(;;){for(var j;h!==n||o!==0&&h.nodeType!==3||(s=a+o),h!==l||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(j=h.firstChild)!==null;)m=h,h=j;for(;;){if(h===e)break t;if(m===n&&++d===o&&(s=a),m===l&&++x===r&&(u=a),(j=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=j}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ll={focusedElem:e,selectionRange:n},to=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var N=b.memoizedProps,B=b.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?N:We(t.type,N),B);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ne(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return b=ls,ls=!1,b}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Jl(t,n,l)}o=o.next}while(o!==r)}}function Fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cc(e){var t=e.alternate;t!==null&&(e.alternate=null,Cc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[lr],delete t[Al],delete t[Wf],delete t[$f])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function is(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}var ue=null,$e=!1;function dt(e,t,n){for(n=n.child;n!==null;)zc(e,t,n),n=n.sibling}function zc(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(bo,n)}catch{}switch(n.tag){case 5:he||on(n,t);case 6:var r=ue,o=$e;ue=null,dt(e,t,n),ue=r,$e=o,ue!==null&&($e?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&($e?(e=ue,n=n.stateNode,e.nodeType===8?qo(e.parentNode,n):e.nodeType===1&&qo(e,n),er(e)):qo(ue,n.stateNode));break;case 4:r=ue,o=$e,ue=n.stateNode.containerInfo,$e=!0,dt(e,t,n),ue=r,$e=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&Jl(n,t,a),o=o.next}while(o!==r)}dt(e,t,n);break;case 1:if(!he&&(on(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ne(n,t,s)}dt(e,t,n);break;case 21:dt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,dt(e,t,n),he=r):dt(e,t,n);break;default:dt(e,t,n)}}function as(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lp),t.forEach(function(r){var o=gp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,$e=!1;break e;case 3:ue=s.stateNode.containerInfo,$e=!0;break e;case 4:ue=s.stateNode.containerInfo,$e=!0;break e}s=s.return}if(ue===null)throw Error(S(160));zc(l,a,o),ue=null,$e=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){ne(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mc(t,e),t=t.sibling}function Mc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ke(e),r&4){try{Vn(3,e,e.return),Fo(3,e)}catch(N){ne(e,e.return,N)}try{Vn(5,e,e.return)}catch(N){ne(e,e.return,N)}}break;case 1:Ue(t,e),Ke(e),r&512&&n!==null&&on(n,n.return);break;case 5:if(Ue(t,e),Ke(e),r&512&&n!==null&&on(n,n.return),e.flags&32){var o=e.stateNode;try{Gn(o,"")}catch(N){ne(e,e.return,N)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Zs(o,l),bl(s,a);var d=bl(s,l);for(a=0;a<u.length;a+=2){var x=u[a],h=u[a+1];x==="style"?nu(o,h):x==="dangerouslySetInnerHTML"?eu(o,h):x==="children"?Gn(o,h):fi(o,x,h,d)}switch(s){case"input":vl(o,l);break;case"textarea":Xs(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var j=l.value;j!=null?an(o,!!l.multiple,j,!1):m!==!!l.multiple&&(l.defaultValue!=null?an(o,!!l.multiple,l.defaultValue,!0):an(o,!!l.multiple,l.multiple?[]:"",!1))}o[lr]=l}catch(N){ne(e,e.return,N)}}break;case 6:if(Ue(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(N){ne(e,e.return,N)}}break;case 3:if(Ue(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(N){ne(e,e.return,N)}break;case 4:Ue(t,e),Ke(e);break;case 13:Ue(t,e),Ke(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Hi=re())),r&4&&as(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(he=(d=he)||x,Ue(t,e),he=d):Ue(t,e),Ke(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!x&&e.mode&1)for(I=e,x=e.child;x!==null;){for(h=I=x;I!==null;){switch(m=I,j=m.child,m.tag){case 0:case 11:case 14:case 15:Vn(4,m,m.return);break;case 1:on(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(N){ne(r,n,N)}}break;case 5:on(m,m.return);break;case 22:if(m.memoizedState!==null){us(h);continue}}j!==null?(j.return=m,I=j):us(h)}x=x.sibling}e:for(x=null,h=e;;){if(h.tag===5){if(x===null){x=h;try{o=h.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=tu("display",a))}catch(N){ne(e,e.return,N)}}}else if(h.tag===6){if(x===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(N){ne(e,e.return,N)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;x===h&&(x=null),h=h.return}x===h&&(x=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(t,e),Ke(e),r&4&&as(e);break;case 21:break;default:Ue(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ec(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Gn(o,""),r.flags&=-33);var l=is(e);Xl(e,l,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=is(e);Zl(e,s,a);break;default:throw Error(S(161))}}catch(u){ne(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ap(e,t,n){I=e,Fc(e)}function Fc(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,l=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Dr;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||he;s=Dr;var d=he;if(Dr=a,(he=u)&&!d)for(I=o;I!==null;)a=I,u=a.child,a.tag===22&&a.memoizedState!==null?cs(o):u!==null?(u.return=a,I=u):cs(o);for(;l!==null;)I=l,Fc(l),l=l.sibling;I=o,Dr=s,he=d}ss(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,I=l):ss(e)}}function ss(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Qa(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qa(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var x=d.memoizedState;if(x!==null){var h=x.dehydrated;h!==null&&er(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}he||t.flags&512&&Gl(t)}catch(m){ne(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function us(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function cs(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fo(4,t)}catch(u){ne(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ne(t,o,u)}}var l=t.return;try{Gl(t)}catch(u){ne(t,l,u)}break;case 5:var a=t.return;try{Gl(t)}catch(u){ne(t,a,u)}}}catch(u){ne(t,t.return,u)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var sp=Math.ceil,ho=ct.ReactCurrentDispatcher,$i=ct.ReactCurrentOwner,_e=ct.ReactCurrentBatchConfig,H=0,se=null,oe=null,ce=0,ze=0,ln=Mt(0),ie=0,dr=null,Wt=0,Do=0,Vi=0,Hn=null,je=null,Hi=0,yn=1/0,tt=null,vo=!1,ql=null,jt=null,Pr=!1,vt=null,xo=0,Qn=0,ei=null,Qr=-1,Yr=0;function ye(){return H&6?re():Qr!==-1?Qr:Qr=re()}function St(e){return e.mode&1?H&2&&ce!==0?ce&-ce:Hf.transition!==null?(Yr===0&&(Yr=mu()),Yr):(e=Q,e!==0||(e=window.event,e=e===void 0?16:ku(e.type)),e):1}function Qe(e,t,n,r){if(50<Qn)throw Qn=0,ei=null,Error(S(185));pr(e,n,r),(!(H&2)||e!==se)&&(e===se&&(!(H&2)&&(Do|=n),ie===4&&gt(e,ce)),Ee(e,r),n===1&&H===0&&!(t.mode&1)&&(yn=re()+500,Eo&&Ft()))}function Ee(e,t){var n=e.callbackNode;Vd(e,t);var r=eo(e,e===se?ce:0);if(r===0)n!==null&&ya(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ya(n),t===1)e.tag===0?Vf(ds.bind(null,e)):Bu(ds.bind(null,e)),Bf(function(){!(H&6)&&Ft()}),n=null;else{switch(gu(r)){case 1:n=vi;break;case 4:n=fu;break;case 16:n=qr;break;case 536870912:n=pu;break;default:n=qr}n=Rc(n,Dc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dc(e,t){if(Qr=-1,Yr=0,H&6)throw Error(S(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var r=eo(e,e===se?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yo(e,r);else{t=r;var o=H;H|=2;var l=Lc();(se!==e||ce!==t)&&(tt=null,yn=re()+500,At(e,t));do try{dp();break}catch(s){Pc(e,s)}while(!0);Fi(),ho.current=l,H=o,oe!==null?t=0:(se=null,ce=0,t=ie)}if(t!==0){if(t===2&&(o=El(e),o!==0&&(r=o,t=ti(e,o))),t===1)throw n=dr,At(e,0),gt(e,r),Ee(e,re()),n;if(t===6)gt(e,r);else{if(o=e.current.alternate,!(r&30)&&!up(o)&&(t=yo(e,r),t===2&&(l=El(e),l!==0&&(r=l,t=ti(e,l))),t===1))throw n=dr,At(e,0),gt(e,r),Ee(e,re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Pt(e,je,tt);break;case 3:if(gt(e,r),(r&130023424)===r&&(t=Hi+500-re(),10<t)){if(eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Tl(Pt.bind(null,e,je,tt),t);break}Pt(e,je,tt);break;case 4:if(gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-He(r);l=1<<a,a=t[a],a>o&&(o=a),r&=~l}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sp(r/1960))-r,10<r){e.timeoutHandle=Tl(Pt.bind(null,e,je,tt),r);break}Pt(e,je,tt);break;case 5:Pt(e,je,tt);break;default:throw Error(S(329))}}}return Ee(e,re()),e.callbackNode===n?Dc.bind(null,e):null}function ti(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=yo(e,t),e!==2&&(t=je,je=n,t!==null&&ni(t)),e}function ni(e){je===null?je=e:je.push.apply(je,e)}function up(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ye(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gt(e,t){for(t&=~Vi,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function ds(e){if(H&6)throw Error(S(327));fn();var t=eo(e,0);if(!(t&1))return Ee(e,re()),null;var n=yo(e,t);if(e.tag!==0&&n===2){var r=El(e);r!==0&&(t=r,n=ti(e,r))}if(n===1)throw n=dr,At(e,0),gt(e,t),Ee(e,re()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,je,tt),Ee(e,re()),null}function Qi(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(yn=re()+500,Eo&&Ft())}}function $t(e){vt!==null&&vt.tag===0&&!(H&6)&&fn();var t=H;H|=1;var n=_e.transition,r=Q;try{if(_e.transition=null,Q=1,e)return e()}finally{Q=r,_e.transition=n,H=t,!(H&6)&&Ft()}}function Yi(){ze=ln.current,G(ln)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Of(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Ei(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lo();break;case 3:vn(),G(Ne),G(ve),Ai();break;case 5:Ti(r);break;case 4:vn();break;case 13:G(q);break;case 19:G(q);break;case 10:Di(r.type._context);break;case 22:case 23:Yi()}n=n.return}if(se=e,oe=e=Nt(e.current,null),ce=ze=t,ie=0,dr=null,Vi=Do=Wt=0,je=Hn=null,It!==null){for(t=0;t<It.length;t++)if(n=It[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=o,r.next=a}n.pending=r}It=null}return e}function Pc(e,t){do{var n=oe;try{if(Fi(),$r.current=go,mo){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}mo=!1}if(Ut=0,ae=le=ee=null,$n=!1,sr=0,$i.current=null,n===null||n.return===null){ie=1,dr=t,oe=null;break}e:{var l=e,a=n.return,s=n,u=t;if(t=ce,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,x=s,h=x.tag;if(!(x.mode&1)&&(h===0||h===11||h===15)){var m=x.alternate;m?(x.updateQueue=m.updateQueue,x.memoizedState=m.memoizedState,x.lanes=m.lanes):(x.updateQueue=null,x.memoizedState=null)}var j=Xa(a);if(j!==null){j.flags&=-257,qa(j,a,s,l,t),j.mode&1&&Za(l,d,t),t=j,u=d;var b=t.updateQueue;if(b===null){var N=new Set;N.add(u),t.updateQueue=N}else b.add(u);break e}else{if(!(t&1)){Za(l,d,t),Ki();break e}u=Error(S(426))}}else if(X&&s.mode&1){var B=Xa(a);if(B!==null){!(B.flags&65536)&&(B.flags|=256),qa(B,a,s,l,t),zi(xn(u,s));break e}}l=u=xn(u,s),ie!==4&&(ie=2),Hn===null?Hn=[l]:Hn.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=gc(l,u,t);Ha(l,f);break e;case 1:s=u;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(jt===null||!jt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=hc(l,s,t);Ha(l,w);break e}}l=l.return}while(l!==null)}Tc(n)}catch(z){t=z,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Lc(){var e=ho.current;return ho.current=go,e===null?go:e}function Ki(){(ie===0||ie===3||ie===2)&&(ie=4),se===null||!(Wt&268435455)&&!(Do&268435455)||gt(se,ce)}function yo(e,t){var n=H;H|=2;var r=Lc();(se!==e||ce!==t)&&(tt=null,At(e,t));do try{cp();break}catch(o){Pc(e,o)}while(!0);if(Fi(),H=n,ho.current=r,oe!==null)throw Error(S(261));return se=null,ce=0,ie}function cp(){for(;oe!==null;)Ic(oe)}function dp(){for(;oe!==null&&!Td();)Ic(oe)}function Ic(e){var t=_c(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Tc(e):oe=t,$i.current=null}function Tc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=op(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,oe=null;return}}else if(n=rp(n,t,ze),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ie===0&&(ie=5)}function Pt(e,t,n){var r=Q,o=_e.transition;try{_e.transition=null,Q=1,fp(e,t,n,r)}finally{_e.transition=o,Q=r}return null}function fp(e,t,n,r){do fn();while(vt!==null);if(H&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Hd(e,l),e===se&&(oe=se=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,Rc(qr,function(){return fn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=_e.transition,_e.transition=null;var a=Q;Q=1;var s=H;H|=4,$i.current=null,ip(e,n),Mc(n,e),Pf(Ll),to=!!Pl,Ll=Pl=null,e.current=n,ap(n),Ad(),H=s,Q=a,_e.transition=l}else e.current=n;if(Pr&&(Pr=!1,vt=e,xo=o),l=e.pendingLanes,l===0&&(jt=null),Od(n.stateNode),Ee(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(vo)throw vo=!1,e=ql,ql=null,e;return xo&1&&e.tag!==0&&fn(),l=e.pendingLanes,l&1?e===ei?Qn++:(Qn=0,ei=e):Qn=0,Ft(),null}function fn(){if(vt!==null){var e=gu(xo),t=_e.transition,n=Q;try{if(_e.transition=null,Q=16>e?16:e,vt===null)var r=!1;else{if(e=vt,vt=null,xo=0,H&6)throw Error(S(331));var o=H;for(H|=4,I=e.current;I!==null;){var l=I,a=l.child;if(I.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(I=d;I!==null;){var x=I;switch(x.tag){case 0:case 11:case 15:Vn(8,x,l)}var h=x.child;if(h!==null)h.return=x,I=h;else for(;I!==null;){x=I;var m=x.sibling,j=x.return;if(Cc(x),x===d){I=null;break}if(m!==null){m.return=j,I=m;break}I=j}}}var b=l.alternate;if(b!==null){var N=b.child;if(N!==null){b.child=null;do{var B=N.sibling;N.sibling=null,N=B}while(N!==null)}}I=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,I=a;else e:for(;I!==null;){if(l=I,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Vn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,I=f;break e}I=l.return}}var c=e.current;for(I=c;I!==null;){a=I;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,I=p;else e:for(a=c;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Fo(9,s)}}catch(z){ne(s,s.return,z)}if(s===a){I=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,I=w;break e}I=s.return}}if(H=o,Ft(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(bo,e)}catch{}r=!0}return r}finally{Q=n,_e.transition=t}}return!1}function fs(e,t,n){t=xn(n,t),t=gc(e,t,1),e=bt(e,t,1),t=ye(),e!==null&&(pr(e,1,t),Ee(e,t))}function ne(e,t,n){if(e.tag===3)fs(e,e,n);else for(;t!==null;){if(t.tag===3){fs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=xn(n,e),e=hc(t,e,1),t=bt(t,e,1),e=ye(),t!==null&&(pr(t,1,e),Ee(t,e));break}}t=t.return}}function pp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>re()-Hi?At(e,0):Vi|=n),Ee(e,t)}function Ac(e,t){t===0&&(e.mode&1?(t=br,br<<=1,!(br&130023424)&&(br=4194304)):t=1);var n=ye();e=st(e,t),e!==null&&(pr(e,t,n),Ee(e,n))}function mp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ac(e,n)}function gp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Ac(e,n)}var _c;_c=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,np(e,t,n);Se=!!(e.flags&131072)}else Se=!1,X&&t.flags&1048576&&Uu(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var o=mn(t,ve.current);dn(t,n),o=Ri(null,t,r,e,o,n);var l=Oi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(l=!0,io(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Li(t),o.updater=Mo,t.stateNode=o,o._reactInternals=t,Wl(t,r,e,n),t=Hl(null,t,r,!0,l,n)):(t.tag=0,X&&l&&Ci(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=vp(r),e=We(r,e),o){case 0:t=Vl(null,t,r,e,n);break e;case 1:t=ns(null,t,r,e,n);break e;case 11:t=es(null,t,r,e,n);break e;case 14:t=ts(null,t,r,We(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Vl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),ns(e,t,r,o,n);case 3:e:{if(wc(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Yu(e,t),fo(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=xn(Error(S(423)),t),t=rs(e,t,r,n,o);break e}else if(r!==o){o=xn(Error(S(424)),t),t=rs(e,t,r,n,o);break e}else for(Me=kt(t.stateNode.containerInfo.firstChild),Fe=t,X=!0,Ve=null,n=Hu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gn(),r===o){t=ut(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Ku(t),e===null&&Ol(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,a=o.children,Il(r,o)?a=null:l!==null&&Il(r,l)&&(t.flags|=32),yc(e,t),xe(e,t,a,n),t.child;case 6:return e===null&&Ol(t),null;case 13:return kc(e,t,n);case 4:return Ii(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),es(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value,K(uo,r._currentValue),r._currentValue=a,l!==null)if(Ye(l.value,a)){if(l.children===o.children&&!Ne.current){t=ut(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=lt(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var x=d.pending;x===null?u.next=u:(u.next=x.next,x.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Bl(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(S(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Bl(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,dn(t,n),o=Re(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=We(r,t.pendingProps),o=We(r.type,o),ts(e,t,r,o,n);case 15:return vc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Hr(e,t),t.tag=1,Ce(r)?(e=!0,io(t)):e=!1,dn(t,n),mc(t,r,o),Wl(t,r,o,n),Hl(null,t,r,!0,e,n);case 19:return bc(e,t,n);case 22:return xc(e,t,n)}throw Error(S(156,t.tag))};function Rc(e,t){return du(e,t)}function hp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new hp(e,t,n,r)}function Ji(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vp(e){if(typeof e=="function")return Ji(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mi)return 11;if(e===gi)return 14}return 2}function Nt(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,o,l){var a=2;if(r=e,typeof e=="function")Ji(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jt:return _t(n.children,o,l,t);case pi:a=8,o|=8;break;case fl:return e=Ae(12,n,t,o|2),e.elementType=fl,e.lanes=l,e;case pl:return e=Ae(13,n,t,o),e.elementType=pl,e.lanes=l,e;case ml:return e=Ae(19,n,t,o),e.elementType=ml,e.lanes=l,e;case Ks:return Po(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qs:a=10;break e;case Ys:a=9;break e;case mi:a=11;break e;case gi:a=14;break e;case ft:a=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ae(a,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function _t(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=Ks,e.lanes=n,e.stateNode={isHidden:!1},e}function al(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wo(0),this.expirationTimes=Wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gi(e,t,n,r,o,l,a,s,u){return e=new xp(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ae(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Li(l),e}function yp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Oc(e){if(!e)return Et;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ce(n))return Ou(e,n,t)}return t}function Bc(e,t,n,r,o,l,a,s,u){return e=Gi(n,r,!0,e,o,l,a,s,u),e.context=Oc(null),n=e.current,r=ye(),o=St(n),l=lt(r,o),l.callback=t??null,bt(n,l,o),e.current.lanes=o,pr(e,o,r),Ee(e,r),e}function Lo(e,t,n,r){var o=t.current,l=ye(),a=St(o);return n=Oc(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bt(o,t,a),e!==null&&(Qe(e,o,a,l),Wr(e,o,a)),a}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ps(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zi(e,t){ps(e,t),(e=e.alternate)&&ps(e,t)}function wp(){return null}var Uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xi(e){this._internalRoot=e}Io.prototype.render=Xi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Lo(e,t,null,null)};Io.prototype.unmount=Xi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){Lo(null,e,null,null)}),t[at]=null}};function Io(e){this._internalRoot=e}Io.prototype.unstable_scheduleHydration=function(e){if(e){var t=xu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mt.length&&t!==0&&t<mt[n].priority;n++);mt.splice(n,0,e),n===0&&wu(e)}};function qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ms(){}function kp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var d=wo(a);l.call(d)}}var a=Bc(t,r,e,0,null,!1,!1,"",ms);return e._reactRootContainer=a,e[at]=a.current,rr(e.nodeType===8?e.parentNode:e),$t(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=wo(u);s.call(d)}}var u=Gi(e,0,!1,null,null,!1,!1,"",ms);return e._reactRootContainer=u,e[at]=u.current,rr(e.nodeType===8?e.parentNode:e),$t(function(){Lo(t,u,n,r)}),u}function Ao(e,t,n,r,o){var l=n._reactRootContainer;if(l){var a=l;if(typeof o=="function"){var s=o;o=function(){var u=wo(a);s.call(u)}}Lo(t,a,e,o)}else a=kp(n,t,e,o,r);return wo(a)}hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=An(t.pendingLanes);n!==0&&(xi(t,n|1),Ee(t,re()),!(H&6)&&(yn=re()+500,Ft()))}break;case 13:$t(function(){var r=st(e,1);if(r!==null){var o=ye();Qe(r,e,1,o)}}),Zi(e,1)}};yi=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var n=ye();Qe(t,e,134217728,n)}Zi(e,134217728)}};vu=function(e){if(e.tag===13){var t=St(e),n=st(e,t);if(n!==null){var r=ye();Qe(n,e,t,r)}Zi(e,t)}};xu=function(){return Q};yu=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Sl=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Co(r);if(!o)throw Error(S(90));Gs(r),vl(r,o)}}}break;case"textarea":Xs(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};lu=Qi;iu=$t;var bp={usingClientEntryPoint:!1,Events:[gr,qt,Co,ru,ou,Qi]},Dn={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jp={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uu(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||wp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{bo=Lr.inject(jp),Xe=Lr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qi(t))throw Error(S(200));return yp(e,t,null,n)};Pe.createRoot=function(e,t){if(!qi(e))throw Error(S(299));var n=!1,r="",o=Uc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gi(e,1,!1,null,null,n,!1,r,o),e[at]=t.current,rr(e.nodeType===8?e.parentNode:e),new Xi(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=uu(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return $t(e)};Pe.hydrate=function(e,t,n){if(!To(t))throw Error(S(200));return Ao(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!qi(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",a=Uc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Bc(t,null,e,1,n??null,o,!1,l,a),e[at]=t.current,rr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Io(t)};Pe.render=function(e,t,n){if(!To(t))throw Error(S(200));return Ao(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!To(e))throw Error(S(40));return e._reactRootContainer?($t(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};Pe.unstable_batchedUpdates=Qi;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!To(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ao(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function Wc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc)}catch(e){console.error(e)}}Wc(),Ws.exports=Pe;var Sp=Ws.exports,gs=Sp;cl.createRoot=gs.createRoot,cl.hydrateRoot=gs.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$c=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=E.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:a,...s},u)=>E.createElement("svg",{ref:u,...Cp,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:$c("lucide",o),...s},[...a.map(([d,x])=>E.createElement(d,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=(e,t)=>{const n=E.forwardRef(({className:r,...o},l)=>E.createElement(Ep,{ref:l,iconNode:t,className:$c(`lucide-${Np(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=et("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=et("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=et("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=et("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=et("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=et("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=et("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=et("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=et("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=et("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Mp=`

/* remove iframe scrollbar — auto-resize handles height */
html { overflow-y: auto; scrollbar-width: none; }
html::-webkit-scrollbar { display: none; }
body { margin: 0; }

/* base */
.ab {
  --bg:          #0B0B0C;
  --surface:     #161617;
  --surface2:    #1C1C1E;
  --ink:         #FFFFFF;
  --muted:       #9C988F;
  --orange:      #F5841F;
  --orange-deep: #E5701A;
  --orange-tint: rgba(245, 132, 31, .13);
  --orange-bd:   rgba(245, 132, 31, .38);
  --blush:       #FFFFFF;
  --blush-tint:  rgba(255, 255, 255, .07);
  --blush-bd:    rgba(255, 255, 255, .30);
  --res:         #6A665F;
  --res-bd:      #2C2C30;
  --line:        #2A2A2D;
  --ring:        #F5841F;
  font-family: 'Inter', -apple-system, system-ui, sans-serif;
  color: var(--ink);
  background: var(--bg);
  min-height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
.ab * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.ab-serif { font-family: 'Cormorant', 'Georgia', serif; }
.ab-wrap  { max-width: 680px; margin: 0 auto; padding: 24px 16px 40px; }

/* header */
.ab-brand { text-align: center; padding: 6px 0 2px; }
.ab-logo  { height: 26px; width: auto; max-width: 260px; display: block; margin: 0 auto; object-fit: contain; }
.ab-rule  { height: 1px; background: var(--line); margin: 18px 0 0; }

/* page title */
.ab-h1 {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 46px;
  line-height: .98;
  letter-spacing: -.005em;
  margin: 22px 0 9px;
}
.ab-h1 .acc {
  font-style: italic;
  color: var(--blush);
  font-weight: 500;
}
.ab-sub {
  color: var(--muted);
  font-size: 14.5px;
  max-width: 50ch;
}

/* legend */
.ab-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 4px;
}
.ab-key {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 500;
  color: var(--ink);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 6px 12px;
}
.ab-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

/* week navigation */
.ab-week-hd    { text-align: center; margin: 20px 0 8px; }
.ab-week-div   { height: 1px; background: var(--line); margin: 0 0 14px; }
.ab-week-month {
  font-family: 'Cormorant', serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ink);
  margin-bottom: 12px;
}
.ab-week-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.ab-week-arr {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--muted);
  display: grid;
  place-items: center;
  cursor: pointer;
  flex: 0 0 auto;
  transition: background .12s, border-color .12s, color .12s;
}
.ab-week-arr:hover {
  background: var(--surface2);
  border-color: #3a3a3e;
  color: var(--ink);
}
.ab-days {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
}
.ab-days::-webkit-scrollbar { display: none; }
.ab-day {
  flex: 0 0 auto;
  min-width: 60px;
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 15px;
  padding: 11px 9px;
  cursor: pointer;
  transition: transform .12s, background .12s, border-color .12s;
}
.ab-day:hover {
  transform: translateY(-1px);
  border-color: #3a3a3e;
}
.ab-day-dow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
}
.ab-day-num {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.15;
  letter-spacing: -.01em;
}
.ab-day.on { background: var(--orange); border-color: var(--orange); }
.ab-day.on .ab-day-dow,
.ab-day.on .ab-day-num { color: #0B0B0C; }
.ab-day-pref {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--orange);
  margin: 5px auto 0;
}
.ab-day.on .ab-day-pref { background: #0B0B0C; }

/* period labels */
.ab-period {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 24px 0 10px;
}

/* slot cards */
.ab-slot {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 15px;
  margin-bottom: 11px;
  overflow: hidden;
  transition: transform .12s, box-shadow .12s, border-color .12s;
}
.ab-slot.preferred { background: var(--orange-tint); border-color: var(--orange-bd); }
.ab-slot.open      { background: var(--blush-tint);  border-color: var(--blush-bd);  }
.ab-slot.reserved {
  background: repeating-linear-gradient(
    45deg,
    #121214, #121214 7px,
    #161618, #161618 14px
  );
  opacity: .5;
}
.ab-slot.mine { background: var(--orange); border-color: var(--orange); opacity: 1; }

/* slot icon */
.ab-ico {
  width: 36px;
  height: 36px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
}
.ab-slot.preferred .ab-ico { background: var(--orange);   color: #0B0B0C; }
.ab-slot.open      .ab-ico { background: var(--surface2); color: var(--blush); border: 1px solid var(--blush-bd); }
.ab-slot.reserved  .ab-ico { background: var(--surface2); color: var(--res);   border: 1px solid var(--res-bd);   }
.ab-slot.mine      .ab-ico { background: rgba(11, 11, 12, .18); color: #0B0B0C; }

/* slot body */
.ab-body { flex: 1; min-width: 0; }
.ab-eye {
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: .13em;
  text-transform: uppercase;
}
.ab-slot.preferred .ab-eye { color: var(--orange); }
.ab-slot.open      .ab-eye { color: var(--blush);  }
.ab-slot.reserved  .ab-eye { color: var(--res);    }
.ab-slot.mine      .ab-eye { color: #0B0B0C; opacity: .7; }
.ab-time {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.05;
  letter-spacing: -.01em;
}
.ab-slot.mine .ab-time { color: #0B0B0C; }
.ab-meta {
  font-size: 12.5px;
  color: var(--muted);
  margin-top: 2px;
}
.ab-slot.mine .ab-meta { color: #0B0B0C; opacity: .7; }
.ab-meta .ab-wl { display: inline-flex; align-items: center; gap: 4px; }

/* slot action buttons */
.ab-act { flex: 0 0 auto; }
.ab-btn {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 13.5px;
  border-radius: 11px;
  padding: 10px 16px;
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: filter .12s, transform .08s, background .12s, border-color .12s;
}
.ab-btn:active { transform: translateY(1px); }
.ab-btn:hover  { filter: brightness(1.06); }
.ab-btn-pref       { background: var(--orange); color: #0B0B0C; }
.ab-btn-open       { background: transparent; color: var(--ink); border-color: var(--blush-bd); }
.ab-btn-open:hover { border-color: var(--blush); filter: none; }
.ab-btn-wait       { background: transparent; color: var(--res); border-color: var(--res-bd); }
.ab-btn-wait:hover { border-color: var(--res); filter: none; }
.ab-btn-pill {
  background: rgba(11, 11, 12, .18);
  color: #0B0B0C;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* sessions bar */
.ab-foot {
  background: var(--surface);
  border-top: 1px solid var(--line);
  padding: 12px 16px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
}
.ab-foot-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--orange-tint);
  border: 1px solid var(--orange-bd);
  border-radius: 12px;
  padding: 10px 20px;
  cursor: pointer;
  color: var(--text);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .02em;
  transition: background .15s;
}
.ab-foot-btn:hover { background: rgba(245,132,31,.2); }
.ab-foot-btn-label { text-transform: uppercase; font-size: 11px; letter-spacing: .1em; color: var(--muted); }
.ab-foot-btn-count {
  background: var(--orange);
  color: #fff;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  padding: 1px 7px;
  min-width: 20px;
  text-align: center;
}

/* loading state */
.ab-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;
  color: var(--muted);
  font-size: 15px;
  letter-spacing: .02em;
}
.ab-foot-h {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: .02em;
  white-space: nowrap;
  flex: 0 0 auto;
  text-transform: uppercase;
}
.ab-foot-tags {
  display: flex;
  gap: 6px;
  flex: 0 1 auto;
  min-width: 0;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 2px;
}
.ab-foot-tags::-webkit-scrollbar { display: none; }
.ab-tag {
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 500;
  background: var(--orange-tint);
  color: var(--orange);
  border: 1px solid var(--orange-bd);
  border-radius: 999px;
  padding: 4px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.ab-tag.wait {
  background: var(--surface2);
  color: var(--res);
  border-color: var(--res-bd);
}
.ab-tag button {
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  display: grid;
  place-items: center;
  opacity: .6;
}
.ab-tag button:hover { opacity: 1; }
.ab-foot-empty { color: var(--muted); font-size: 13px; }

/* toast */
.ab-toast {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  background: var(--surface2);
  color: #fff;
  font-size: 13.5px;
  font-weight: 500;
  padding: 11px 16px;
  border-radius: 12px;
  border: 1px solid var(--line);
  box-shadow: 0 12px 30px -8px rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  gap: 9px;
  z-index: 60;
  animation: ab-rise .22s ease;
}
.ab-toast .ic { color: var(--orange); }
@keyframes ab-rise {
  from { opacity: 0; transform: translate(-50%, 8px); }
  to   { opacity: 1; transform: translate(-50%, 0);   }
}

/* preferred-nudge modal */
.ab-scrim {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .62);
  backdrop-filter: blur(3px);
  display: grid;
  place-items: center;
  padding: 20px;
  z-index: 70;
  animation: ab-fade .15s ease;
}
@keyframes ab-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.ab-modal {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  max-width: 380px;
  width: 100%;
  padding: 24px;
  box-shadow: 0 24px 60px -12px rgba(0, 0, 0, .6);
  animation: ab-pop .18s ease;
}
@keyframes ab-pop {
  from { opacity: 0; transform: scale(.96); }
  to   { opacity: 1; transform: scale(1);   }
}
.ab-modal-ico {
  width: 44px;
  height: 44px;
  border-radius: 13px;
  background: var(--orange-tint);
  color: var(--orange);
  display: grid;
  place-items: center;
  margin-bottom: 14px;
}
.ab-modal h3 {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 29px;
  letter-spacing: -.01em;
  margin-bottom: 7px;
}
.ab-modal h3 .acc { font-style: italic; color: var(--blush); }
.ab-modal p {
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 18px;
}
.ab-modal p b { color: var(--ink); font-weight: 600; }
.ab-modal-acts { display: flex; flex-direction: column; gap: 8px; }
.ab-modal-acts .ab-btn { width: 100%; padding: 13px; font-size: 14.5px; }
.ab-btn-line { background: transparent; color: var(--muted); border: none; }

/* focus and responsive */
.ab :focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) {
  .ab * { animation: none !important; transition: none !important; }
}
@media (max-width: 420px) {
  .ab-h1 { font-size: 38px; }
  .ab-key { font-size: 11px; padding: 5px 9px; }
}
`,Fp={Mon:{num:16,rows:[["6:00 AM","Morning","preferred",0],["7:00 AM","Morning","reserved",1],["9:30 AM","Morning","open",0],["12:00 PM","Afternoon","open",0],["5:30 PM","Evening","preferred",0],["6:30 PM","Evening","reserved",2]]},Tue:{num:17,rows:[["6:30 AM","Morning","preferred",0],["8:00 AM","Morning","open",0],["11:00 AM","Morning","reserved",0],["1:00 PM","Afternoon","open",0],["5:00 PM","Evening","preferred",0],["7:00 PM","Evening","open",0]]},Wed:{num:18,rows:[["6:00 AM","Morning","reserved",3],["7:30 AM","Morning","preferred",0],["10:00 AM","Morning","open",0],["2:00 PM","Afternoon","open",0],["6:00 PM","Evening","preferred",0]]},Thu:{num:19,rows:[["6:30 AM","Morning","preferred",0],["9:00 AM","Morning","open",0],["12:30 PM","Afternoon","reserved",1],["5:30 PM","Evening","preferred",0],["7:00 PM","Evening","open",0]]},Fri:{num:20,rows:[["6:00 AM","Morning","preferred",0],["8:30 AM","Morning","open",0],["11:30 AM","Morning","reserved",0],["4:30 PM","Evening","open",0],["6:00 PM","Evening","preferred",0]]},Sat:{num:21,rows:[["7:00 AM","Morning","preferred",0],["8:30 AM","Morning","preferred",0],["10:00 AM","Morning","open",0],["11:30 AM","Morning","reserved",2]]}},Yt=["Mon","Tue","Wed","Thu","Fri","Sat"],xs=["Morning","Afternoon","Evening"],Dp=["January","February","March","April","May","June","July","August","September","October","November","December"],ys=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Pp(){const e={};return Yt.forEach(t=>{e[t]=Fp[t].rows.map((n,r)=>({id:`${t}-${r}`,day:t,time:n[0],period:n[1],tier:n[2],waitlist:n[3]}))}),e}const Yn={preferred:{label:"Andrea's pick",dot:"#F5841F",icon:na},open:{label:"Open",dot:"#FFFFFF",icon:Vc},reserved:{label:"Reserved",dot:"#3A3A40",icon:Hc}};function Lp({liveSlots:e=null,loading:t=!1,onAction:n=null,errorMsg:r=null,onErrorDismiss:o=null}){const l=E.useMemo(Pp,[]),a=e??l,[s,u]=E.useState("Mon"),[d,x]=E.useState(0),[h,m]=E.useState({}),[j,b]=E.useState({}),[N,B]=E.useState(null),[f,c]=E.useState(null);E.useEffect(()=>{if(!e)return;const C={};Object.values(e).flat().forEach(A=>{A.userBookingId&&(C[A.id]=A)}),m(C)},[e]),E.useEffect(()=>{r&&(m(C=>{const A={...C};return delete A[r.slotId],A}),B(r.message),o==null||o())},[r]),E.useEffect(()=>{if(!N)return;const C=setTimeout(()=>B(null),2600);return()=>clearTimeout(C)},[N]),E.useEffect(()=>{if(!n)return;const C=new Date,A=C.getDay(),g=new Date(C);g.setDate(C.getDate()-(A===0?6:A-1)+d*7),g.setHours(0,0,0,0),n({type:"weekChange",mondayISO:g.toISOString()})},[d]);const p=new Date,w=(a[s]||[]).filter(C=>{var g;const A=((g=C.slotData)==null?void 0:g.startDate)||C.startDate;return!A||new Date(A)>p}),z=E.useMemo(()=>{const C={};return xs.forEach(A=>{C[A]=w.filter(g=>g.period===A)}),C},[w]),k=E.useMemo(()=>{const C=new Date,A=C.getDay(),g=new Date(C);g.setDate(C.getDate()-(A===0?6:A-1)+d*7);const M={};return Yt.forEach((y,L)=>{const R=new Date(g);R.setDate(g.getDate()+L),M[y]={num:R.getDate(),month:R.getMonth(),year:R.getFullYear()}}),M},[d]),D=E.useMemo(()=>{const C=k[Yt[0]],A=k[Yt[Yt.length-1]];return C.month===A.month?`${Dp[C.month]} ${C.year}`:`${ys[C.month]} - ${ys[A.month]} ${A.year}`},[k]),F=C=>B(C);function U(C){m(A=>({...A,[C.id]:C})),b(A=>{const g={...A};return delete g[C.id],g}),F(`Booked - ${C.day}, ${C.time}`),n==null||n({type:"book",slot:C})}function v(C){if(C.tier==="open"){const A=a[C.day].find(g=>g.tier==="preferred"&&!h[g.id]);if(A){c({slot:C,alt:A});return}}U(C)}function T(C){const A=(C.waitlist||0)+1;b(g=>({...g,[C.id]:{slot:C,pos:A}})),F(`You're #${A} on the waitlist - ${C.day}, ${C.time}`),n==null||n({type:"waitlist",slot:C})}function O(C){m(A=>{const g={...A};return delete g[C],g}),F("Booking canceled"),n==null||n({type:"cancel",slotId:C})}function W(C){b(A=>{const g={...A};return delete g[C],g}),F("Left the waitlist"),n==null||n({type:"leaveWaitlist",slotId:C})}const Y=Object.values(h),fe=Object.values(j);return i.jsxs("div",{className:"ab",children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');"}),i.jsx("style",{children:Mp}),i.jsxs("div",{className:"ab-wrap",children:[i.jsxs("h1",{className:"ab-h1",children:["Book your ",i.jsx("span",{className:"acc",children:"week."})]}),i.jsx("p",{className:"ab-sub",children:"Reduce pain, build strength, move better - with Andrea in Lake Ridge. Highlighted times are the ones she recommends; booking them keeps her week flowing so there's more room for everyone."}),i.jsxs("div",{className:"ab-legend",children:[i.jsxs("span",{className:"ab-key",children:[i.jsx("span",{className:"ab-dot",style:{background:Yn.preferred.dot}}),"Preferred - recommended"]}),i.jsxs("span",{className:"ab-key",children:[i.jsx("span",{className:"ab-dot",style:{background:Yn.open.dot}}),"Open - available, not preferred"]}),i.jsxs("span",{className:"ab-key",children:[i.jsx("span",{className:"ab-dot",style:{background:Yn.reserved.dot}}),"Reserved - join waitlist"]})]}),i.jsxs("div",{className:"ab-week-hd",children:[i.jsx("div",{className:"ab-week-month",children:D}),i.jsx("div",{className:"ab-week-div"}),i.jsxs("div",{className:"ab-week-nav",children:[i.jsx("button",{className:"ab-week-arr",onClick:()=>x(C=>C-1),"aria-label":"Previous week",children:i.jsx(ta,{size:18})}),i.jsx("div",{className:"ab-days",children:Yt.map(C=>{const A=(a[C]||[]).filter(y=>{var R;const L=((R=y.slotData)==null?void 0:R.startDate)||y.startDate;return!L||new Date(L)>p}),g=A.some(y=>y.tier==="preferred"),M=A.length>0&&!g&&A.every(y=>y.tier==="reserved");return i.jsxs("div",{className:`ab-day${C===s?" on":""}`,role:"button",tabIndex:0,onClick:()=>u(C),onKeyDown:y=>y.key==="Enter"&&u(C),children:[i.jsx("div",{className:"ab-day-dow",children:C}),i.jsx("div",{className:"ab-day-num",children:k[C].num}),(g||M)&&i.jsx("span",{className:"ab-day-pref",style:M?{background:"#555558"}:void 0})]},C)})}),i.jsx("button",{className:"ab-week-arr",onClick:()=>x(C=>C+1),"aria-label":"Next week",children:i.jsx(Rt,{size:18})})]}),i.jsx("div",{className:"ab-week-div",style:{marginTop:14}})]}),t?i.jsx("div",{className:"ab-loading",children:"Loading your schedule…"}):xs.map(C=>z[C].length?i.jsxs("div",{children:[i.jsx("div",{className:"ab-period",children:C}),z[C].map(A=>i.jsx(Ip,{slot:A,mine:!!h[A.id],wait:j[A.id],onBook:()=>v(A),onWaitlist:()=>T(A),onCancel:()=>O(A.id),onLeave:()=>W(A.id)},A.id))]},C):null)]}),i.jsx("div",{className:"ab-foot",children:i.jsxs("button",{className:"ab-foot-btn",onClick:()=>n==null?void 0:n({type:"mySchedule"}),children:[i.jsx("span",{className:"ab-foot-btn-label",children:"My schedule"}),Y.length+fe.length>0?i.jsx("span",{className:"ab-foot-btn-count",children:Y.length+fe.length}):i.jsx("span",{style:{color:"var(--muted)",fontSize:13,fontWeight:400},children:"Nothing booked yet"}),i.jsx(Rt,{size:16,style:{color:"var(--muted)"}})]})}),N&&i.jsxs("div",{className:"ab-toast",children:[i.jsx(ea,{size:16,className:"ic"}),N]}),f&&i.jsx("div",{className:"ab-scrim",onClick:()=>c(null),children:i.jsxs("div",{className:"ab-modal",onClick:C=>C.stopPropagation(),children:[i.jsx("div",{className:"ab-modal-ico",children:i.jsx(na,{size:22})}),i.jsxs("h3",{children:["A ",i.jsx("span",{className:"acc",children:"preferred"})," time close by"]}),i.jsxs("p",{children:[i.jsx("b",{children:f.slot.time})," works, but Andrea has an open recommended slot at ",i.jsx("b",{children:f.alt.time})," the same day. Choosing it helps her fit more clients in."]}),i.jsxs("div",{className:"ab-modal-acts",children:[i.jsxs("button",{className:"ab-btn ab-btn-pref",onClick:()=>{U(f.alt),c(null)},children:["Book ",f.alt.time," instead"]}),i.jsxs("button",{className:"ab-btn ab-btn-line",onClick:()=>{U(f.slot),c(null)},children:["Keep ",f.slot.time]})]})]})})]})}function Ip({slot:e,mine:t,wait:n,onBook:r,onWaitlist:o,onCancel:l,onLeave:a}){const s=t?"mine":e.tier,u=t?ea:Yn[e.tier].icon,d=t?"Your session":Yn[e.tier].label;return i.jsxs("div",{className:`ab-slot ${s}`,children:[i.jsx("div",{className:"ab-ico",children:i.jsx(u,{size:18})}),i.jsxs("div",{className:"ab-body",children:[i.jsx("div",{className:"ab-eye",children:d}),i.jsx("div",{className:"ab-time",children:e.time}),i.jsx("div",{className:"ab-meta",children:t?`Confirmed · ${e.service||`${e.duration||60} min`}`:e.tier==="reserved"?n?i.jsxs("span",{className:"ab-wl",children:[i.jsx(vs,{size:12})," You're #",n.pos," on the waitlist"]}):i.jsxs("span",{className:"ab-wl",children:[i.jsx(vs,{size:12})," ",e.waitlist>0?`${e.waitlist} waiting`:"Taken - be first to wait"]}):e.service||"Personal Training · 60 min"})]}),i.jsx("div",{className:"ab-act",children:t?i.jsxs("button",{className:"ab-btn ab-btn-pill",onClick:l,children:[i.jsx(ra,{size:14})," Cancel"]}):e.tier==="reserved"?n?i.jsx("button",{className:"ab-btn ab-btn-wait",onClick:a,children:"Leave waitlist"}):i.jsx("button",{className:"ab-btn ab-btn-wait",onClick:o,children:"Join waitlist"}):e.tier==="preferred"?i.jsxs("button",{className:"ab-btn ab-btn-pref",onClick:r,children:["Book ",i.jsx(Rt,{size:14,style:{verticalAlign:"-2px"}})]}):i.jsx("button",{className:"ab-btn ab-btn-open",onClick:r,children:"Book"})})]})}const Tp=`

/* no internal iframe scrolling; body grows freely with content */
html { overflow-y: auto; scrollbar-width: none; }
html::-webkit-scrollbar { display: none; }
body { margin: 0; }

/* base */
.fg {
  --bg:          #0B0B0C;
  --surface:     #161617;
  --surface2:    #1C1C1E;
  --ink:         #FFFFFF;
  --muted:       #9C988F;
  --orange:      #F5841F;
  --orange-tint: rgba(245, 132, 31, .13);
  --orange-bd:   rgba(245, 132, 31, .38);
  --np:          #FFFFFF;
  --np-tint:     rgba(255, 255, 255, .07);
  --np-line:     rgba(255, 255, 255, .30);
  --res:         #6A665F;
  --res-bd:      #2C2C30;
  --line:        #2A2A2D;
  --ring:        #F5841F;
  font-family: 'Inter', -apple-system, system-ui, sans-serif;
  color: var(--ink);
  background: var(--bg);
  min-height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  line-height: 1.45;
}
.fg * { box-sizing: border-box; margin: 0; padding: 0; }
.fg-wrap { max-width: 680px; margin: 0 auto; padding: 24px 16px 40px; }

/* page title */
.fg-h1 {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 38px;
  line-height: 1.02;
  letter-spacing: -.01em;
  margin: 4px 0 4px;
}
.fg-sub { color: var(--muted); font-size: 13.5px; max-width: 48ch; }

/* legend */
.fg-legend { display: flex; flex-wrap: wrap; gap: 7px; margin: 15px 0 4px; }
.fg-key {
  display: flex; align-items: center; gap: 7px;
  font-size: 12px; font-weight: 500; color: var(--ink);
  background: var(--surface); border: 1px solid var(--line);
  border-radius: 999px; padding: 6px 11px;
}
.fg-dot { width: 9px; height: 9px; border-radius: 3px; }

/* week navigation */
.fg-week-hd    { text-align: center; margin: 20px 0 8px; }
.fg-week-div   { height: 1px; background: var(--line); margin: 0 0 14px; }
.fg-week-month {
  font-family: 'Cormorant', serif; font-size: 18px; font-weight: 600;
  letter-spacing: .12em; text-transform: uppercase; color: var(--ink); margin-bottom: 12px;
}
.fg-week-nav { display: flex; align-items: center; justify-content: center; gap: 10px; }
.fg-week-arr {
  width: 34px; height: 34px; border-radius: 10px;
  background: var(--surface); border: 1px solid var(--line);
  color: var(--muted); display: grid; place-items: center;
  cursor: pointer; flex: 0 0 auto;
  transition: background .12s, border-color .12s, color .12s;
}
.fg-week-arr:hover { background: var(--surface2); border-color: #3a3a3e; color: var(--ink); }
.fg-days { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; }
.fg-days::-webkit-scrollbar { display: none; }
.fg-day {
  flex: 0 0 auto; min-width: 58px; text-align: center;
  background: var(--surface); border: 1px solid var(--line);
  border-radius: 14px; padding: 9px 8px; cursor: pointer;
  transition: transform .12s, background .12s, border-color .12s;
}
.fg-day:hover { transform: translateY(-1px); border-color: #3a3a3e; }
.fg-day-dow { font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); }
.fg-day-num { font-weight: 700; font-size: 20px; line-height: 1.15; }
.fg-day-c   { font-size: 10px; color: var(--muted); margin-top: 1px; }
.fg-day.on  { background: var(--orange); border-color: var(--orange); }
.fg-day.on .fg-day-dow,
.fg-day.on .fg-day-num,
.fg-day.on .fg-day-c { color: #0B0B0C; }

/* tally */
.fg-tally { font-size: 12.5px; color: var(--muted); margin: 14px 0 10px; display: flex; gap: 12px; flex-wrap: wrap; }
.fg-tally b { font-weight: 600; color: var(--ink); }
.fg-tally i { font-style: normal; }

/* time block cards */
.fg-blk {
  background: var(--surface); border: 1px solid var(--line);
  border-left: 4px solid var(--line); border-radius: 14px;
  padding: 12px 13px; margin-bottom: 9px;
}
.fg-blk.preferred { border-left-color: var(--orange);  }
.fg-blk.np        { border-left-color: var(--np-line); }
.fg-blk.reserved  { border-left-color: var(--res-bd);  }
.fg-blk-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.fg-blk-time { font-weight: 700; font-size: 21px; display: flex; align-items: center; gap: 8px; }
.fg-blk-ic { width: 26px; height: 26px; border-radius: 7px; display: grid; place-items: center; }
.fg-blk.preferred .fg-blk-ic { background: var(--orange);   color: #0B0B0C; }
.fg-blk.np        .fg-blk-ic { background: var(--surface2); color: var(--np);  border: 1px solid var(--np-line); }
.fg-blk.reserved  .fg-blk-ic { background: var(--surface2); color: var(--res); border: 1px solid var(--res-bd);  }
.fg-rm { background: none; border: none; color: var(--muted); cursor: pointer; padding: 5px; border-radius: 8px; }
.fg-rm:hover { background: var(--surface2); color: var(--ink); }

/* tier segmented control */
.fg-seg {
  display: flex; gap: 4px;
  background: var(--surface2); border: 1px solid var(--line);
  border-radius: 11px; padding: 4px;
}
.fg-seg button {
  flex: 1; font-family: 'Inter'; font-weight: 600; font-size: 12.5px;
  border: none; background: transparent; color: var(--muted);
  padding: 9px 6px; border-radius: 8px; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 5px;
  transition: background .12s, color .12s;
}
.fg-seg button:hover        { color: var(--ink); }
.fg-seg button.on.preferred { background: var(--orange); color: #0B0B0C; }
.fg-seg button.on.np        { background: rgba(255, 255, 255, .15); color: var(--ink); }
.fg-seg button.on.reserved  { background: var(--res); color: var(--ink); }

/* add time */
.fg-add {
  width: 100%; border: 1.5px dashed var(--line); background: transparent;
  color: var(--muted); font-family: 'Inter'; font-weight: 600; font-size: 14px;
  border-radius: 13px; padding: 13px; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 7px;
  margin-top: 4px; transition: border-color .12s, color .12s;
}
.fg-add:hover { border-color: var(--orange); color: var(--orange); }
.fg-palette { background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 14px; margin-top: 4px; }
.fg-palette-h {
  font-size: 12px; font-weight: 600; color: var(--muted); margin-bottom: 10px;
  display: flex; justify-content: space-between; align-items: center;
}
.fg-palette-h button { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 12px; font-weight: 600; }
.fg-palette-h button:hover { color: var(--ink); }
.fg-times { display: flex; flex-wrap: wrap; gap: 7px; }
.fg-tchip {
  font-weight: 700; font-size: 14px;
  background: var(--surface2); border: 1px solid var(--line);
  color: var(--muted); border-radius: 9px; padding: 7px 11px;
  cursor: pointer; transition: background .12s, border-color .12s, color .12s;
}
.fg-tchip:hover { background: var(--orange); border-color: var(--orange); color: #0B0B0C; }
.fg-empty { text-align: center; color: var(--muted); font-size: 13.5px; padding: 18px 0 8px; }

/* service select */
.fg-svc {
  margin-top: 8px;
}
.fg-svc select {
  width: 100%; background: var(--surface2); border: 1px solid var(--line);
  border-radius: 9px; padding: 8px 10px; color: var(--ink);
  font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;
  appearance: none; -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239C988F' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 10px center;
  padding-right: 28px; cursor: pointer;
}
.fg-svc select:focus { outline: 2px solid var(--ring); outline-offset: 1px; }
.fg-svc select option { background: #1C1C1E; }

/* custom time row */
.fg-custom {
  display: flex; align-items: center; gap: 8px;
  margin-top: 12px; padding-top: 12px;
  border-top: 1px solid var(--line);
}
.fg-custom-label { font-size: 12px; font-weight: 600; color: var(--muted); white-space: nowrap; }
.fg-custom input[type="time"] {
  flex: 1; background: var(--surface2); border: 1px solid var(--line);
  border-radius: 9px; padding: 7px 10px; color: var(--ink);
  font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700;
  color-scheme: dark;
}
.fg-custom input[type="time"]:focus { outline: 2px solid var(--ring); outline-offset: 1px; }
.fg-custom-add {
  font-family: 'Inter'; font-weight: 600; font-size: 13px;
  background: var(--orange); color: #0B0B0C; border: none;
  border-radius: 9px; padding: 8px 14px; cursor: pointer;
  white-space: nowrap; transition: filter .12s;
}
.fg-custom-add:hover { filter: brightness(1.08); }
.fg-custom-add:disabled { opacity: .4; cursor: not-allowed; }

/* save bar — static so iframe auto-resizes correctly */
.fg-save {
  background: rgba(11, 11, 12, .92);
  border-top: 1px solid var(--line);
  padding: 12px 14px;
  margin-top: 24px;
}
.fg-save-in { max-width: 560px; margin: 0 auto; display: flex; align-items: center; gap: 12px; }
.fg-save-t  { flex: 1; font-size: 12.5px; color: var(--muted); }
.fg-btn {
  font-family: 'Inter'; font-weight: 600; font-size: 14.5px;
  border-radius: 12px; padding: 12px 20px; border: none;
  background: var(--orange); color: #0B0B0C; cursor: pointer;
  display: inline-flex; align-items: center; gap: 7px;
  transition: filter .12s;
}
.fg-btn:hover:not(:disabled) { filter: brightness(1.06); }
.fg-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.fg :focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) { .fg * { transition: none !important; } }
`,Pn=["Mon","Tue","Wed","Thu","Fri","Sat"],Ap=["January","February","March","April","May","June","July","August","September","October","November","December"],ws=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],_p=["6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM"],Jr=["Personal Training - 60 min","Personal Training - 45 min","Personal Training - 30 min","Mobility Training","Phone Consultation","Intro Offer - Wellness Consultation"],ri=[{key:"preferred",label:"Preferred",icon:na,dot:"#F5841F"},{key:"np",label:"Non-pref",icon:Vc,dot:"#FFFFFF"},{key:"reserved",label:"Reserved",icon:Hc,dot:"#6A665F"}],Rp=Object.fromEntries(ri.map(e=>[e.key,e]));function ks(e){const t=e.match(/(\d+):(\d+)\s*(AM|PM)/);let n=+t[1]%12;return t[3]==="PM"&&(n+=12),n*60+ +t[2]}let oi=100;function Op(){return{Mon:[],Tue:[],Wed:[],Thu:[],Fri:[],Sat:[]}}function Bp(){const e=(t,n,r=Jr[0])=>({id:++oi,time:t,tier:n,service:r});return{Mon:[e("6:00 AM","preferred"),e("9:30 AM","np"),e("5:30 PM","preferred"),e("7:00 AM","reserved")],Tue:[e("6:30 AM","preferred"),e("1:00 PM","np"),e("5:00 PM","preferred")],Wed:[e("7:30 AM","preferred"),e("10:00 AM","np"),e("6:00 PM","preferred")],Thu:[e("6:30 AM","preferred"),e("9:00 AM","np"),e("5:30 PM","preferred")],Fri:[e("6:00 AM","preferred"),e("4:30 PM","np")],Sat:[e("7:00 AM","preferred"),e("8:30 AM","preferred")]}}function Up({livePrefs:e=null,loading:t=!1,onAction:n,saving:r=!1}){const[o,l]=E.useState(Bp),[a,s]=E.useState("Mon"),[u,d]=E.useState(!1),[x,h]=E.useState(""),[m,j]=E.useState(0);E.useEffect(()=>{if(e===null)return;const v=Op();e.forEach(T=>{v[T.dayOfWeek]&&v[T.dayOfWeek].push({id:++oi,time:T.time,tier:T.tier==="open"?"np":T.tier,service:T.service||Jr[0]})}),l(v)},[e]);const b=E.useMemo(()=>{const v=new Date,T=v.getDay(),O=new Date(v);O.setDate(v.getDate()-(T===0?6:T-1)+m*7);const W={};return Pn.forEach((Y,fe)=>{const C=new Date(O);C.setDate(O.getDate()+fe),W[Y]={num:C.getDate(),month:C.getMonth(),year:C.getFullYear()}}),W},[m]),N=E.useMemo(()=>{const v=b[Pn[0]],T=b[Pn[Pn.length-1]];return v.month===T.month?`${Ap[v.month]} ${v.year}`:`${ws[v.month]} - ${ws[T.month]} ${T.year}`},[b]),B=E.useMemo(()=>[...o[a]].sort((v,T)=>ks(v.time)-ks(T.time)),[o,a]),f=E.useMemo(()=>{const v={preferred:0,np:0,reserved:0};return o[a].forEach(T=>v[T.tier]++),v},[o,a]),c=new Set(o[a].map(v=>v.time)),p=_p.filter(v=>!c.has(v));function w(v,T){l(O=>({...O,[a]:O[a].map(W=>W.id===v?{...W,tier:T}:W)}))}function z(v,T){l(O=>({...O,[a]:O[a].map(W=>W.id===v?{...W,service:T}:W)}))}function k(v){l(T=>({...T,[a]:T[a].filter(O=>O.id!==v)}))}function D(v){l(T=>({...T,[a]:[...T[a],{id:++oi,time:v,tier:"preferred",service:Jr[0]}]})),d(!1),h("")}function F(){if(!x)return;const[v,T]=x.split(":").map(Number),O=v<12?"AM":"PM",Y=`${v%12||12}:${String(T).padStart(2,"0")} ${O}`;c.has(Y)||D(Y)}function U(){const v=[];Object.entries(o).forEach(([T,O])=>{O.forEach(W=>{v.push({dayOfWeek:T,time:W.time,tier:W.tier==="np"?"open":W.tier,service:W.service})})}),n==null||n({type:"savePrefs",items:v})}return i.jsxs("div",{className:"fg",children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');"}),i.jsx("style",{children:Tp}),i.jsxs("div",{className:"fg-wrap",children:[i.jsx("h1",{className:"fg-h1",children:"Set your availability"}),i.jsx("p",{className:"fg-sub",children:"Add the times you'll take clients, then tag each one. Preferred times get highlighted to clients; reserved times are held and can't be booked."}),i.jsx("div",{className:"fg-legend",children:ri.map(v=>i.jsxs("span",{className:"fg-key",children:[i.jsx("span",{className:"fg-dot",style:{background:v.dot}}),v.key==="preferred"&&"Preferred — recommended",v.key==="np"&&"Non-preferred — available",v.key==="reserved"&&"Reserved — held"]},v.key))}),i.jsxs("div",{className:"fg-week-hd",children:[i.jsx("div",{className:"fg-week-month",children:N}),i.jsx("div",{className:"fg-week-div"}),i.jsxs("div",{className:"fg-week-nav",children:[i.jsx("button",{className:"fg-week-arr",onClick:()=>j(v=>v-1),"aria-label":"Previous week",children:i.jsx(ta,{size:18})}),i.jsx("div",{className:"fg-days",children:Pn.map(v=>i.jsxs("div",{className:`fg-day${v===a?" on":""}`,role:"button",tabIndex:0,onClick:()=>{s(v),d(!1)},onKeyDown:T=>T.key==="Enter"&&s(v),children:[i.jsx("div",{className:"fg-day-dow",children:v}),i.jsx("div",{className:"fg-day-num",children:b[v].num}),i.jsxs("div",{className:"fg-day-c",children:[o[v].length," slot",o[v].length!==1?"s":""]})]},v))}),i.jsx("button",{className:"fg-week-arr",onClick:()=>j(v=>v+1),"aria-label":"Next week",children:i.jsx(Rt,{size:18})})]}),i.jsx("div",{className:"fg-week-div",style:{marginTop:14}})]}),i.jsxs("div",{className:"fg-tally",children:[i.jsxs("span",{children:[i.jsx("i",{style:{color:"#F5841F"},children:"●"})," ",i.jsx("b",{children:f.preferred})," preferred"]}),i.jsxs("span",{children:[i.jsx("i",{style:{color:"#FFFFFF"},children:"●"})," ",i.jsx("b",{children:f.np})," non-pref"]}),i.jsxs("span",{children:[i.jsx("i",{style:{color:"#6A665F"},children:"●"})," ",i.jsx("b",{children:f.reserved})," reserved"]})]}),t?i.jsx("div",{className:"fg-empty",style:{padding:"40px 0"},children:"Loading your schedule…"}):i.jsxs(i.Fragment,{children:[B.length===0&&!u&&i.jsxs("div",{className:"fg-empty",children:["No times set for ",a," yet. Add one below."]}),B.map(v=>{const T=Rp[v.tier].icon;return i.jsxs("div",{className:`fg-blk ${v.tier}`,children:[i.jsxs("div",{className:"fg-blk-top",children:[i.jsxs("span",{className:"fg-blk-time",children:[i.jsx("span",{className:"fg-blk-ic",children:i.jsx(T,{size:15})}),v.time]}),i.jsx("button",{className:"fg-rm",onClick:()=>k(v.id),"aria-label":"Remove time",children:i.jsx(ra,{size:18})})]}),i.jsx("div",{className:"fg-seg",role:"group","aria-label":"Tier",children:ri.map(O=>{const W=O.icon,Y=v.tier===O.key;return i.jsxs("button",{className:`${Y?"on":""} ${O.key}`,onClick:()=>w(v.id,O.key),children:[i.jsx(W,{size:13})," ",O.label]},O.key)})}),i.jsx("div",{className:"fg-svc",children:i.jsx("select",{value:v.service,onChange:O=>z(v.id,O.target.value),"aria-label":"Service",children:Jr.map(O=>i.jsx("option",{value:O,children:O},O))})})]},v.id)}),u?i.jsxs("div",{className:"fg-palette",children:[i.jsxs("div",{className:"fg-palette-h",children:[i.jsx("span",{children:"Pick a time to add"}),i.jsx("button",{onClick:()=>d(!1),children:"Cancel"})]}),p.length===0?i.jsxs("div",{className:"fg-empty",style:{padding:"4px 0"},children:["Every preset time is already added for ",a,"."]}):i.jsx("div",{className:"fg-times",children:p.map(v=>i.jsx("button",{className:"fg-tchip",onClick:()=>D(v),children:v},v))}),i.jsxs("div",{className:"fg-custom",children:[i.jsx("span",{className:"fg-custom-label",children:"Custom"}),i.jsx("input",{type:"time",value:x,onChange:v=>h(v.target.value),onKeyDown:v=>v.key==="Enter"&&F()}),i.jsx("button",{className:"fg-custom-add",disabled:!x,onClick:F,children:"Add"})]})]}):i.jsxs("button",{className:"fg-add",onClick:()=>d(!0),children:[i.jsx(zp,{size:17})," Add a time"]})]})]}),i.jsx("div",{className:"fg-save",children:i.jsxs("div",{className:"fg-save-in",children:[i.jsx("span",{className:"fg-save-t",children:"Changes apply to all weeks — clients see preferred times highlighted"}),i.jsxs("button",{className:"fg-btn",disabled:r,onClick:U,children:[i.jsx(ea,{size:16})," ",r?"Saving…":"Save week"]})]})})]})}const oa="/assets/logo.png",Wp=window.self!==window.top,$p=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:      #0B0B0C;
  --surface: #161617;
  --line:    #2A2A2D;
  --text:    #FFFFFF;
  --muted:   #9C988F;
  --orange:  #F5841F;
  --orange-tint: rgba(245,132,31,.12);
}

body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; }

.cv {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  padding: 0 20px 40px;
}

.cv-header {
  display: flex;
  justify-content: center;
  padding: 24px 0 16px;
}
.cv-logo { height: 38px; width: auto; }
.cv-rule { border: none; border-top: 1px solid var(--line); margin: 0 0 36px; }

.cv-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.cv-heading {
  font-family: 'Cormorant', serif;
  font-size: 34px;
  font-weight: 600;
  letter-spacing: .01em;
  text-align: center;
  line-height: 1.15;
}
.cv-heading em { font-style: italic; color: var(--orange); }

.cv-card {
  width: 100%;
  max-width: 420px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
}
.cv-card-top {
  background: var(--orange-tint);
  border-bottom: 1px solid var(--line);
  padding: 16px 20px;
}
.cv-card-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 6px;
}
.cv-card-service {
  font-family: 'Cormorant', serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--text);
}
.cv-card-bottom {
  padding: 18px 20px;
  display: flex;
  gap: 28px;
}
.cv-card-item { display: flex; flex-direction: column; gap: 3px; }
.cv-card-item-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
}
.cv-card-item-value {
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
}

.cv-policy {
  font-size: 12px;
  color: var(--muted);
  text-align: center;
  max-width: 340px;
  line-height: 1.6;
}

.cv-btn {
  width: 100%;
  max-width: 420px;
  padding: 16px;
  background: var(--orange);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: .02em;
  cursor: pointer;
  transition: opacity .15s;
}
.cv-btn:hover:not(:disabled) { opacity: .88; }
.cv-btn:disabled { opacity: .45; cursor: default; }

.cv-btn-ghost {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--muted);
  width: 100%;
  max-width: 420px;
  padding: 13px;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color .15s, color .15s;
}
.cv-btn-ghost:hover { border-color: var(--muted); color: var(--text); }

.cv-error {
  width: 100%;
  max-width: 420px;
  background: rgba(255,69,58,.08);
  border: 1px solid rgba(255,69,58,.25);
  border-radius: 10px;
  padding: 14px 16px;
  font-size: 13px;
  color: #FF6B63;
  line-height: 1.55;
}

.cv-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
  padding-top: 20px;
}
.cv-success-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(52,199,89,.12);
  border: 1px solid rgba(52,199,89,.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #34C759;
}
.cv-success-h {
  font-family: 'Cormorant', serif;
  font-size: 32px;
  font-weight: 600;
}
.cv-success-h em { font-style: italic; color: var(--orange); }
.cv-success-sub { font-size: 14px; color: var(--muted); max-width: 280px; line-height: 1.6; }

.cv-loading-slot {
  width: 100%;
  max-width: 420px;
  height: 130px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-size: 14px;
}
`;function Vp({slot:e=null}){const[t,n]=E.useState("idle"),[r,o]=E.useState("");E.useEffect(()=>{const u=d=>{var x;if((x=d.data)!=null&&x.type&&(d.data.type==="abate-confirm-success"&&n("success"),d.data.type==="abate-confirm-error")){const h=d.data.message||"",m=h.toLowerCase().includes("plan")||h.toLowerCase().includes("pricing")?"No active session plan found. Please contact Andrea to update your plan.":h||"Could not confirm booking. Please try again.";o(m),n("error")}};return window.addEventListener("message",u),()=>window.removeEventListener("message",u)},[]);const l=()=>{n("loading"),o(""),Wp&&window.parent.postMessage({type:"abate-confirm"},"*")},a=()=>{n("idle"),o("")},s=t==="loading"?"Booking…":"Confirm my session →";return i.jsxs("div",{className:"cv",children:[i.jsx("style",{children:$p}),i.jsx("div",{className:"cv-header",children:i.jsx("img",{src:oa,alt:"Abate Wellness",className:"cv-logo"})}),i.jsx("hr",{className:"cv-rule"}),i.jsx("div",{className:"cv-body",children:t==="success"?i.jsxs("div",{className:"cv-success",children:[i.jsx("div",{className:"cv-success-icon",children:"✓"}),i.jsxs("div",{className:"cv-success-h",children:["You're ",i.jsx("em",{children:"booked"})]}),i.jsx("div",{className:"cv-success-sub",children:"Andrea will see you then. Heading back to your schedule…"})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"cv-heading",children:["Confirm your ",i.jsx("em",{children:"session"})]}),e!=null&&e.service?i.jsxs("div",{className:"cv-card",children:[i.jsxs("div",{className:"cv-card-top",children:[i.jsx("div",{className:"cv-card-eyebrow",children:"Session details"}),i.jsx("div",{className:"cv-card-service",children:e.service})]}),i.jsxs("div",{className:"cv-card-bottom",children:[e.day&&i.jsxs("div",{className:"cv-card-item",children:[i.jsx("div",{className:"cv-card-item-label",children:"Date"}),i.jsx("div",{className:"cv-card-item-value",children:e.day})]}),e.time&&i.jsxs("div",{className:"cv-card-item",children:[i.jsx("div",{className:"cv-card-item-label",children:"Time"}),i.jsx("div",{className:"cv-card-item-value",children:e.time})]})]})]}):i.jsx("div",{className:"cv-loading-slot",children:"Loading session details…"}),t==="error"&&i.jsx("div",{className:"cv-error",children:r}),t==="error"?i.jsx("button",{className:"cv-btn",onClick:a,children:"Try again"}):i.jsx("button",{className:"cv-btn",onClick:l,disabled:t==="loading",children:s}),i.jsx("div",{className:"cv-policy",children:"By confirming you agree to Abate Wellness's cancellation policy."})]})})]})}const Ir=window.self!==window.top,Hp=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,Qp=e=>Hp.test(e||""),Yp=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ul=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function Kp(e){const t=new Date(e),n=t.getDay();return t.setDate(t.getDate()-(n===0?6:n-1)),t.setHours(0,0,0,0),t}function Tr(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function Jp(e){return e.toLocaleDateString("en-US",{month:"long",year:"numeric"})}function Gp(e){return new Date(e).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function Zp(e){return new Date(e).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function bs(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const Xp=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:          #0B0B0C;
  --surface:     #161617;
  --surface2:    #1C1C1E;
  --line:        #2A2A2D;
  --text:        #FFFFFF;
  --muted:       #9C988F;
  --orange:      #F5841F;
  --orange-tint: rgba(245,132,31,.10);
  --orange-bd:   rgba(245,132,31,.30);
}
body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; }

/* ── shell ─────────────────────────────────────────────────────────────────── */
.ms { min-height: 100vh; background: var(--bg); padding-bottom: 60px; }

/* ── header ────────────────────────────────────────────────────────────────── */
.ms-header { display: flex; justify-content: center; padding: 52px 0 16px; }
.ms-logo   { height: 38px; width: auto; }
.ms-rule   { border: none; border-top: 1px solid var(--line); }

/* ── title row ─────────────────────────────────────────────────────────────── */
.ms-title-row {
  max-width: 600px; margin: 24px auto 0; padding: 0 20px;
  display: flex; align-items: baseline; justify-content: space-between; gap: 12px;
}
.ms-title { font-family: 'Cormorant', serif; font-size: 44px; font-weight: 600; letter-spacing: .01em; line-height: 1.1; }
.ms-title em { font-style: italic; color: var(--orange); }
.ms-title-count { font-size: 12px; font-weight: 600; letter-spacing: .10em; text-transform: uppercase; color: var(--muted); white-space: nowrap; }

/* ── tabs ───────────────────────────────────────────────────────────────────── */
.ms-tabs {
  max-width: 600px; margin: 20px auto 0; padding: 0 20px;
  display: flex; border-bottom: 1px solid var(--line);
}
.ms-tab {
  padding: 10px 18px 11px; font-size: 13px; font-weight: 600; color: var(--muted);
  background: none; border: none; cursor: pointer;
  border-bottom: 2px solid transparent; margin-bottom: -1px;
  transition: color .15s, border-color .15s;
  display: flex; align-items: center; gap: 7px;
}
.ms-tab.active { color: var(--text); border-bottom-color: var(--orange); }
.ms-tab-badge {
  background: var(--orange); color: #fff; font-size: 10px; font-weight: 700;
  border-radius: 10px; padding: 1px 6px; line-height: 1.6;
}

/* ── week nav ───────────────────────────────────────────────────────────────── */
.ms-week-nav {
  max-width: 600px; margin: 22px auto 0; padding: 0 20px;
  display: flex; align-items: center; justify-content: space-between;
}
.ms-week-month { font-family: 'Cormorant', serif; font-size: 20px; font-weight: 600; letter-spacing: .01em; }
.ms-week-arrow {
  width: 32px; height: 32px; border: 1px solid var(--line); border-radius: 8px;
  background: none; color: var(--text);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: background .15s;
}
.ms-week-arrow:hover { background: var(--surface); }

/* ── day strip ──────────────────────────────────────────────────────────────── */
.ms-days { max-width: 600px; margin: 10px auto 0; padding: 0 20px; display: flex; gap: 3px; }
.ms-day {
  flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px;
  padding: 7px 2px 9px; border-radius: 10px; cursor: pointer; transition: background .15s;
}
.ms-day:hover  { background: var(--surface); }
.ms-day.sel    { background: var(--surface2); }
.ms-day-abbr   { font-size: 9px; font-weight: 700; letter-spacing: .07em; color: var(--muted); text-transform: uppercase; }
.ms-day-num    { font-size: 15px; font-weight: 700; }
.ms-day.today .ms-day-num { color: var(--orange); }
.ms-day-dot    { width: 5px; height: 5px; border-radius: 50%; background: var(--orange); }

/* ── section label ──────────────────────────────────────────────────────────── */
.ms-section {
  max-width: 600px; margin: 22px auto 10px; padding: 0 20px;
  font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted);
}

/* ── session cards ──────────────────────────────────────────────────────────── */
.ms-list { max-width: 600px; margin: 0 auto; padding: 0 20px; display: flex; flex-direction: column; gap: 10px; }
.ms-card {
  background: var(--surface); border: 1px solid var(--line); border-radius: 14px;
  padding: 16px 18px; display: flex; align-items: center; gap: 14px;
}
.ms-card-body  { flex: 1; min-width: 0; }
.ms-card-date  { font-size: 11px; font-weight: 700; letter-spacing: .07em; color: var(--orange); text-transform: uppercase; margin-bottom: 4px; }
.ms-card-time  { font-size: 22px; font-weight: 700; line-height: 1.1; }
.ms-card-svc   { font-size: 13px; color: var(--muted); margin-top: 3px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ms-cancel-btn {
  background: none; border: 1px solid var(--line); border-radius: 8px; padding: 7px 12px;
  color: var(--muted); font-size: 12px; font-weight: 600; cursor: pointer;
  display: flex; align-items: center; gap: 5px;
  transition: border-color .15s, color .15s; white-space: nowrap; flex-shrink: 0;
}
.ms-cancel-btn:hover    { border-color: #FF453A; color: #FF453A; }
.ms-cancel-btn:disabled { opacity: .4; cursor: default; }

/* ── empty states ───────────────────────────────────────────────────────────── */
.ms-empty {
  max-width: 600px; margin: 44px auto 0; padding: 0 20px;
  display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center;
}
.ms-empty-icon {
  width: 56px; height: 56px; border-radius: 50%;
  background: var(--surface); border: 1px solid var(--line);
  display: flex; align-items: center; justify-content: center; color: var(--muted);
}
.ms-empty-h   { font-family: 'Cormorant', serif; font-size: 24px; font-weight: 600; }
.ms-empty-sub { font-size: 13px; color: var(--muted); line-height: 1.65; }

/* ── book button ────────────────────────────────────────────────────────────── */
.ms-book-wrap { max-width: 600px; margin: 0 auto; padding: 26px 20px 0; display: flex; justify-content: center; }
.ms-book-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--orange); color: #fff; border: none; border-radius: 12px;
  padding: 13px 26px; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700;
  cursor: pointer; transition: opacity .15s;
}
.ms-book-btn:hover { opacity: .88; }

/* ── loading ────────────────────────────────────────────────────────────────── */
.ms-loading {
  display: flex; align-items: center; justify-content: center;
  min-height: 220px; color: var(--muted); font-size: 14px; letter-spacing: .02em;
}

/* ── auto-schedule tab ──────────────────────────────────────────────────────── */
.ms-auto { max-width: 600px; margin: 24px auto 0; padding: 0 20px; }
.ms-auto-desc { font-size: 13px; color: var(--muted); line-height: 1.65; margin-bottom: 20px; }

/* master toggle card */
.ms-auto-master {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 16px 18px; background: var(--surface); border: 1px solid var(--line);
  border-radius: 14px; margin-bottom: 16px;
}
.ms-auto-master.on { border-color: var(--orange-bd); }
.ms-auto-master-label { font-size: 15px; font-weight: 600; }
.ms-auto-master-sub   { font-size: 12px; color: var(--muted); margin-top: 3px; }

/* toggle pill */
.ms-toggle {
  width: 42px; height: 24px; border-radius: 12px; position: relative;
  border: none; cursor: pointer; flex-shrink: 0; transition: background .2s;
}
.ms-toggle[data-on="false"] { background: var(--line); }
.ms-toggle[data-on="true"]  { background: var(--orange); }
.ms-toggle::after {
  content: ''; position: absolute;
  width: 18px; height: 18px; border-radius: 50%; background: #fff;
  top: 3px; left: 3px; transition: transform .2s;
}
.ms-toggle[data-on="true"]::after { transform: translateX(18px); }

/* day rows */
.ms-auto-days { display: flex; flex-direction: column; gap: 6px; }
.ms-auto-row {
  display: flex; align-items: center; gap: 12px;
  padding: 11px 16px; background: var(--surface); border: 1px solid var(--line);
  border-radius: 12px; transition: border-color .15s, opacity .2s;
}
.ms-auto-row.on       { border-color: var(--orange-bd); }
.ms-auto-row.disabled { opacity: .35; pointer-events: none; }
.ms-auto-day-name     { font-size: 14px; font-weight: 600; flex: 1; }
.ms-auto-time-input {
  border: 1px solid var(--line); border-radius: 8px; background: var(--surface2);
  color: var(--text); font-family: 'Inter', sans-serif; font-size: 14px;
  padding: 5px 10px; outline: none; width: 120px; text-align: center; transition: border-color .15s;
  color-scheme: dark;
}
.ms-auto-time-input:focus  { border-color: var(--orange); }
.ms-auto-time-off { font-size: 13px; color: var(--line); width: 120px; text-align: center; }

/* save row */
.ms-auto-save { margin-top: 22px; display: flex; align-items: center; gap: 14px; }
.ms-save-btn {
  background: var(--orange); color: #fff; border: none; border-radius: 12px;
  padding: 12px 28px; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700;
  cursor: pointer; transition: opacity .15s;
}
.ms-save-btn:hover    { opacity: .88; }
.ms-save-btn:disabled { opacity: .5; cursor: default; }
.ms-saved-label { font-size: 13px; color: var(--orange); font-weight: 600; }
`;function qp({sessions:e=null,onBook:t=null}){const[n,r]=E.useState(e),[o,l]=E.useState(null),[a,s]=E.useState("sessions"),u=(()=>{const g=new Date;return g.setHours(0,0,0,0),g})(),[d,x]=E.useState(()=>Kp(new Date)),[h,m]=E.useState(null),[j,b]=E.useState(!1),[N,B]=E.useState({}),[f,c]=E.useState(!1),[p,w]=E.useState(!1),[z,k]=E.useState(!1);E.useEffect(()=>{e!==null&&r(e)},[e]),E.useEffect(()=>{const g=M=>{var y,L,R;if((y=M.data)!=null&&y.type)switch(M.data.type){case"abate-schedule-data":r(M.data.sessions||[]);break;case"abate-schedule-cancelled":r(Z=>(Z||[]).filter(be=>be._id!==M.data.recordId)),l(null);break;case"abate-schedule-cancel-error":l(null);break;case"abate-auto-prefs-data":b(((L=M.data.prefs)==null?void 0:L.enabled)||!1),B(((R=M.data.prefs)==null?void 0:R.slots)||{}),c(!0);break;case"abate-auto-prefs-saved":w(!1),k(!0),setTimeout(()=>k(!1),3e3);break}};return window.addEventListener("message",g),()=>window.removeEventListener("message",g)},[]),E.useEffect(()=>{a==="auto"&&!f&&Ir&&window.parent.postMessage({type:"abate-auto-prefs-get"},"*")},[a,f]);const D=g=>{l(g._id),Ir&&window.parent.postMessage({type:"abate-schedule-cancel",recordId:g._id},"*")},F=()=>{Ir?window.parent.postMessage({type:"abate-schedule-book"},"*"):t&&t()},U=()=>{w(!0),Ir&&window.parent.postMessage({type:"abate-auto-prefs-save",prefs:{enabled:j,slots:N}},"*")},v=g=>{B(M=>{const y={...M};return y[g]!==void 0?delete y[g]:y[g]="",y})},T=(g,M)=>B(y=>({...y,[g]:M})),O=Array.from({length:7},(g,M)=>Tr(d,M)),W=(n||[]).filter(g=>{const M=new Date(g.startDate);return M>=d&&M<Tr(d,7)}),Y=W.reduce((g,M)=>{const y=new Date(M.startDate),L=O.findIndex(R=>bs(R,y));return L>=0&&(g[L]=g[L]||[],g[L].push(M)),g},{}),fe=(h!==null?Y[h]||[]:W).slice().sort((g,M)=>new Date(g.startDate)-new Date(M.startDate)),C=(n||[]).length,A=n===null;return i.jsxs("div",{className:"ms",children:[i.jsx("style",{children:Xp}),i.jsx("div",{className:"ms-header",children:i.jsx("img",{src:oa,alt:"Abate Wellness",className:"ms-logo"})}),i.jsx("hr",{className:"ms-rule"}),i.jsxs("div",{className:"ms-title-row",children:[i.jsxs("h1",{className:"ms-title",children:["Your ",i.jsx("em",{children:"schedule"})]}),!A&&C>0&&i.jsxs("span",{className:"ms-title-count",children:[C," upcoming"]})]}),i.jsxs("div",{className:"ms-tabs",children:[i.jsxs("button",{className:`ms-tab${a==="sessions"?" active":""}`,onClick:()=>s("sessions"),children:["My sessions",!A&&C>0&&i.jsx("span",{className:"ms-tab-badge",children:C})]}),i.jsx("button",{className:`ms-tab${a==="auto"?" active":""}`,onClick:()=>s("auto"),children:"Auto-schedule"})]}),a==="sessions"&&i.jsx(i.Fragment,{children:A?i.jsx("div",{className:"ms-loading",children:"Loading your schedule…"}):C===0?i.jsxs("div",{className:"ms-empty",children:[i.jsx("div",{className:"ms-empty-icon",children:i.jsx(hs,{size:24})}),i.jsx("div",{className:"ms-empty-h",children:"No upcoming sessions"}),i.jsx("div",{className:"ms-empty-sub",children:"Book your first session to get started."}),i.jsx("div",{className:"ms-book-wrap",style:{padding:"0",marginTop:"4px"},children:i.jsxs("button",{className:"ms-book-btn",onClick:F,children:["Book a session ",i.jsx(Rt,{size:16})]})})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"ms-week-nav",children:[i.jsx("button",{className:"ms-week-arrow",onClick:()=>{x(g=>Tr(g,-7)),m(null)},children:i.jsx(ta,{size:16})}),i.jsx("span",{className:"ms-week-month",children:Jp(d)}),i.jsx("button",{className:"ms-week-arrow",onClick:()=>{x(g=>Tr(g,7)),m(null)},children:i.jsx(Rt,{size:16})})]}),i.jsx("div",{className:"ms-days",children:O.map((g,M)=>{var y;return i.jsxs("div",{className:`ms-day${bs(g,u)?" today":""}${h===M?" sel":""}`,onClick:()=>m(h===M?null:M),children:[i.jsx("span",{className:"ms-day-abbr",children:Yp[M]}),i.jsx("span",{className:"ms-day-num",children:g.getDate()}),((y=Y[M])==null?void 0:y.length)>0&&i.jsx("span",{className:"ms-day-dot"})]},M)})}),fe.length===0?i.jsxs("div",{className:"ms-empty",style:{marginTop:32},children:[i.jsx("div",{className:"ms-empty-icon",children:i.jsx(hs,{size:24})}),i.jsx("div",{className:"ms-empty-h",children:h!==null?`No sessions on ${ul[h]}`:"No sessions this week"}),i.jsx("div",{className:"ms-empty-sub",children:"Use the arrows to browse other weeks."})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"ms-section",children:h!==null?ul[h]:"This week"}),i.jsx("div",{className:"ms-list",children:fe.map(g=>i.jsxs("div",{className:"ms-card",children:[i.jsxs("div",{className:"ms-card-body",children:[i.jsx("div",{className:"ms-card-date",children:Zp(g.startDate)}),i.jsx("div",{className:"ms-card-time",children:Gp(g.startDate)}),g.service&&!Qp(g.service)&&i.jsx("div",{className:"ms-card-svc",children:g.service})]}),i.jsxs("button",{className:"ms-cancel-btn",onClick:()=>D(g),disabled:o===g._id,children:[i.jsx(ra,{size:13}),o===g._id?"Cancelling…":"Cancel"]})]},g._id))})]}),i.jsx("div",{className:"ms-book-wrap",children:i.jsxs("button",{className:"ms-book-btn",onClick:F,children:["Book another session ",i.jsx(Rt,{size:16})]})})]})}),a==="auto"&&i.jsxs("div",{className:"ms-auto",children:[i.jsx("p",{className:"ms-auto-desc",children:"Choose which days and times you train each week. Once saved and enabled, those slots will be automatically reserved for you — no manual booking needed."}),i.jsxs("div",{className:`ms-auto-master${j?" on":""}`,children:[i.jsxs("div",{children:[i.jsx("div",{className:"ms-auto-master-label",children:"Enable auto-schedule"}),i.jsx("div",{className:"ms-auto-master-sub",children:j?"On — your recurring slots will be reserved each week":"Off — you book each session manually"})]}),i.jsx("button",{className:"ms-toggle","data-on":String(j),onClick:()=>b(g=>!g)})]}),i.jsx("div",{className:"ms-auto-days",children:ul.map((g,M)=>{const y=N[M]!==void 0;return i.jsxs("div",{className:`ms-auto-row${y?" on":""}${j?"":" disabled"}`,children:[i.jsx("button",{className:"ms-toggle","data-on":String(y),onClick:()=>v(M)}),i.jsx("span",{className:"ms-auto-day-name",children:g}),y?i.jsx("input",{type:"time",className:"ms-auto-time-input",value:N[M]||"",onChange:L=>T(M,L.target.value)}):i.jsx("span",{className:"ms-auto-time-off",children:"— : —"})]},M)})}),i.jsxs("div",{className:"ms-auto-save",children:[i.jsx("button",{className:"ms-save-btn",onClick:U,disabled:p,children:p?"Saving…":"Save schedule"}),z&&i.jsx("span",{className:"ms-saved-label",children:"✓ Saved"})]})]})]})}const em=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],js=["MON","TUE","WED","THU","FRI","SAT","SUN"],Ss=[{emoji:"😊",label:"Great",value:5},{emoji:"🙂",label:"Good",value:4},{emoji:"😐",label:"Okay",value:3},{emoji:"😟",label:"Meh",value:2},{emoji:"😫",label:"Bad",value:1}],Ns=[{id:1,name:"Probiotic Smoothie",time:"5 min",tag:"gut-friendly",emoji:"🥤"},{id:2,name:"Kimchi Rice Bowl",time:"15 min",tag:"fermented",emoji:"🍚"},{id:3,name:"Bone Broth Soup",time:"30 min",tag:"gut-healing",emoji:"🍲"},{id:4,name:"Overnight Oats",time:"5 min",tag:"prebiotic",emoji:"🥣"},{id:5,name:"Miso Salmon",time:"20 min",tag:"fermented",emoji:"🍣"},{id:6,name:"Ginger Turmeric Tea",time:"5 min",tag:"anti-inflammatory",emoji:"☕"},{id:7,name:"Greek Yogurt Bowl",time:"3 min",tag:"probiotic",emoji:"🫙"},{id:8,name:"Sauerkraut Wrap",time:"10 min",tag:"fermented",emoji:"🌯"}];function Cs(){const e=new Date().getDay();return e===0?6:e-1}function tm({score:e}){const o=b=>{const N=Math.PI*(1-b);return[+(105+70*Math.cos(N)).toFixed(2),+(88-70*Math.sin(N)).toFixed(2)]},[l,a]=o(0),[s,u]=o(1),d=Math.max(.005,Math.min(.995,e/100)),[x,h]=o(d),m=(b,N,B,f)=>`M ${b} ${N} A 70 70 0 0 1 ${B} ${f}`,j=e<34?"#FF453A":e<67?"#FFD60A":"#30D158";return i.jsxs("div",{className:"fj-gauge-wrap",children:[i.jsx("div",{className:"fj-gauge-label",children:"Gut Health"}),i.jsxs("svg",{viewBox:"0 0 210 136",style:{display:"block",width:"100%"},children:[i.jsx("path",{d:m(l,a,s,u),stroke:"#252527",strokeWidth:"14",fill:"none",strokeLinecap:"round"}),i.jsx("path",{d:m(l,a,x,h),stroke:j,strokeWidth:"14",fill:"none",strokeLinecap:"round"}),i.jsx("line",{x1:105,y1:88,x2:x,y2:h,stroke:"rgba(255,255,255,.85)",strokeWidth:"2.5",strokeLinecap:"round"}),i.jsx("circle",{cx:105,cy:88,r:"5",fill:"#fff"}),i.jsx("text",{x:105,y:118,textAnchor:"middle",fill:"#fff",fontSize:"24",fontWeight:"700",fontFamily:"Inter,sans-serif",children:e}),i.jsx("text",{x:105,y:130,textAnchor:"middle",fill:"#9C988F",fontSize:"7.5",fontFamily:"Inter,sans-serif",letterSpacing:"2",children:"GUT SCORE"}),i.jsx("text",{x:l,y:a+20,textAnchor:"middle",fill:"#FF453A",fontSize:"9",fontFamily:"Inter,sans-serif",fontWeight:"700",children:"Poor"}),i.jsx("text",{x:s,y:u+20,textAnchor:"middle",fill:"#30D158",fontSize:"9",fontFamily:"Inter,sans-serif",fontWeight:"700",children:"Good"})]})]})}const nm=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg:          #0B0B0C;
  --surface:     #161617;
  --surface2:    #1C1C1E;
  --line:        #2A2A2D;
  --text:        #FFFFFF;
  --muted:       #9C988F;
  --orange:      #F5841F;
  --orange-tint: rgba(245,132,31,.08);
  --orange-bd:   rgba(245,132,31,.30);
}
body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; }

/* ── shell ── */
.fj { min-height: 100vh; background: var(--bg); padding-bottom: 60px; }
.fj-header { display: flex; justify-content: center; padding: 48px 0 16px; }
.fj-logo   { height: 38px; width: auto; }
.fj-rule   { border: none; border-top: 1px solid var(--line); }

/* ── page title ── */
.fj-title-row { max-width: 980px; margin: 22px auto 0; padding: 0 20px; }
.fj-title     { font-family: 'Cormorant', serif; font-size: 40px; font-weight: 600; line-height: 1.1; }
.fj-title em  { font-style: italic; color: var(--orange); }
.fj-subtitle  { font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.5; }

/* ── top row: input + right panel ── */
.fj-top   { max-width: 980px; margin: 22px auto 0; padding: 0 20px; display: flex; gap: 20px; align-items: flex-start; }
.fj-left  { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.fj-right { width: 252px; flex-shrink: 0; }

/* ── full-width week section ── */
.fj-week-section { max-width: 980px; margin: 20px auto 0; padding: 0 20px; }

/* ── input section ── */
.fj-input-box {
  background: var(--surface); border: 1px solid var(--line); border-radius: 16px;
  padding: 16px; margin-bottom: 14px;
}
.fj-input-row { display: flex; gap: 10px; margin-bottom: 13px; }
.fj-input {
  flex: 1; background: var(--surface2); border: 1px solid var(--line); border-radius: 10px;
  padding: 11px 14px; color: var(--text); font-family: 'Inter', sans-serif; font-size: 14px;
  outline: none; transition: border-color .15s;
}
.fj-input:focus     { border-color: var(--orange); }
.fj-input::placeholder { color: var(--muted); }
.fj-log-btn {
  background: var(--orange); color: #fff; border: none; border-radius: 10px;
  padding: 11px 20px; font-size: 14px; font-weight: 700; cursor: pointer;
  white-space: nowrap; transition: opacity .15s; font-family: 'Inter', sans-serif;
}
.fj-log-btn:hover { opacity: .88; }

/* meta row */
.fj-meta-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
.fj-meta-left { display: flex; align-items: center; gap: 6px; }
.fj-meta-label { font-size: 9px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); }
.fj-day-pills { display: flex; gap: 4px; flex-wrap: wrap; }
.fj-day-pill {
  background: none; border: 1px solid var(--line); border-radius: 20px;
  padding: 4px 9px; font-size: 11px; font-weight: 600; color: var(--muted);
  cursor: pointer; transition: all .15s; font-family: 'Inter', sans-serif;
}
.fj-day-pill.active        { background: var(--orange); border-color: var(--orange); color: #fff; }
.fj-day-pill:hover:not(.active) { border-color: var(--muted); color: var(--text); }

.fj-feelings { display: flex; gap: 3px; }
.fj-feeling {
  background: none; border: 1px solid var(--line); border-radius: 8px;
  padding: 4px 7px; font-size: 15px; cursor: pointer; transition: all .15s;
  line-height: 1;
}
.fj-feeling.active { background: var(--orange-tint); border-color: var(--orange-bd); }

/* ── weekly grid ── */
.fj-week-label { font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); margin-bottom: 10px; }
.fj-week-scroll { }
.fj-week { display: flex; gap: 8px; }
.fj-day-col {
  flex: 1; min-width: 0; background: var(--surface); border: 1px solid var(--line);
  border-radius: 12px; padding: 10px 9px; cursor: pointer;
  transition: border-color .15s, background .15s; min-height: 210px;
  display: flex; flex-direction: column;
}
.fj-day-col:hover           { border-color: var(--muted); }
.fj-day-col.today           { border-color: rgba(245,132,31,.35); }
.fj-day-col.selected        { background: rgba(245,132,31,.04); border-color: var(--orange-bd); }
.fj-day-col.drag-over       { border-color: var(--orange); background: var(--orange-tint); }

.fj-day-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
.fj-day-name { font-size: 9px; font-weight: 700; letter-spacing: .08em; color: var(--muted); }
.fj-day-name.today { color: var(--orange); }
.fj-day-badge {
  background: var(--orange); color: #fff; font-size: 9px; font-weight: 700;
  border-radius: 10px; padding: 1px 5px;
}
.fj-day-entries { display: flex; flex-direction: column; gap: 5px; flex: 1; }
.fj-entry {
  display: flex; align-items: flex-start; gap: 4px;
  background: var(--surface2); border-radius: 7px; padding: 5px 6px;
}
.fj-entry.from-recipe { }
.fj-entry-feel  { font-size: 12px; flex-shrink: 0; line-height: 1.4; }
.fj-entry-text  { flex: 1; font-size: 11px; line-height: 1.4; color: var(--text); word-break: break-word; }
.fj-entry-del   { background: none; border: none; color: var(--line); cursor: pointer; font-size: 13px; flex-shrink: 0; padding: 0; transition: color .15s; line-height: 1; }
.fj-entry-del:hover { color: #FF453A; }
.fj-day-drop-hint { font-size: 10px; color: var(--line); text-align: center; padding: 18px 0; margin-top: auto; }

/* ── recipes grid (under input box, left column) ── */
.fj-recipes-header { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 20px; margin-bottom: 10px; gap: 10px; }
.fj-recipe-controls { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

/* expandable search */
.fj-search-wrap { display: flex; align-items: center; gap: 6px; }
.fj-search-slide {
  max-width: 0; overflow: hidden; display: flex; justify-content: flex-end;
  transition: max-width .52s cubic-bezier(.22,1,.36,1);
}
.fj-search-wrap.expanded .fj-search-slide { max-width: 150px; }
.fj-search-input {
  width: 130px; background: transparent; border: none; border-radius: 0;
  border-bottom: 1.5px solid var(--line);
  padding: 4px 2px; color: var(--text); font-size: 12px;
  font-family: 'Inter', sans-serif; outline: none;
  opacity: 0; transition: opacity .2s ease .22s, border-color .15s;
}
.fj-search-wrap.expanded .fj-search-input { opacity: 1; }
.fj-search-input::placeholder { color: var(--muted); }
.fj-search-input:focus { border-bottom-color: var(--orange); }
.fj-search-icon-btn {
  background: var(--surface2); border: 1px solid var(--line); border-radius: 8px;
  color: var(--muted); width: 30px; height: 30px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: color .15s, border-color .15s;
}
.fj-search-icon-btn:hover { color: var(--text); border-color: var(--orange); }
.fj-search-wrap.expanded .fj-search-icon-btn { color: var(--text); border-color: var(--orange); }

/* custom filter dropdown */
.fj-filter-wrap { position: relative; }
.fj-filter-btn {
  background: var(--surface2); border: 1px solid var(--line); border-radius: 8px;
  padding: 5px 10px; color: var(--text); font-size: 12px; font-family: 'Inter', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 6px; height: 30px;
  transition: border-color .15s; white-space: nowrap; min-width: 72px;
}
.fj-filter-btn:hover { border-color: var(--orange); }
.fj-filter-chevron { color: var(--muted); transition: transform .2s; flex-shrink: 0; }
.fj-filter-wrap.open .fj-filter-chevron { transform: rotate(180deg); }
@keyframes dropdownIn {
  from { opacity: 0; transform: translateY(-6px) scale(.97); }
  to   { opacity: 1; transform: translateY(0)   scale(1);    }
}
.fj-filter-dropdown {
  position: absolute; top: calc(100% + 6px); right: 0; z-index: 100;
  background: var(--surface); border: 1px solid var(--line); border-radius: 10px;
  min-width: 160px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,.6);
  animation: dropdownIn .18s cubic-bezier(.22,1,.36,1) both;
}
.fj-filter-opt {
  display: block; width: 100%; padding: 9px 14px; text-align: left;
  background: none; border: none; color: var(--muted); font-size: 12px;
  font-family: 'Inter', sans-serif; cursor: pointer; transition: background .12s, color .12s;
}
.fj-filter-opt + .fj-filter-opt { border-top: 1px solid var(--line); }
.fj-filter-opt:hover { background: var(--surface2); color: var(--text); }
.fj-filter-opt.active { color: var(--orange); font-weight: 600; }
.fj-recipe-no-results { font-size: 12px; color: var(--muted); padding: 20px 0; text-align: center; }
.fj-recipe-nav { display: flex; gap: 4px; }
.fj-recipe-nav button {
  background: var(--surface2); border: 1px solid var(--line); border-radius: 8px;
  color: var(--text); width: 28px; height: 28px; font-size: 18px; line-height: 1;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: border-color .15s, background .15s; font-family: 'Inter', sans-serif;
}
.fj-recipe-nav button:hover:not(:disabled) { border-color: var(--orange); background: var(--orange-tint); }
.fj-recipe-nav button:disabled { opacity: .28; cursor: default; }
.fj-recipes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
@keyframes recipeCardIn {
  from { opacity: 0; transform: scale(0.93) translateY(10px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);    }
}
.fj-recipe-card-anim { animation: recipeCardIn .32s cubic-bezier(.22,1,.36,1) both; }
@keyframes cardJiggle {
  0%,100% { transform: rotate(0deg)  scale(1); }
  15%     { transform: rotate(-5deg) scale(1.06); }
  35%     { transform: rotate(4deg)  scale(1.06); }
  55%     { transform: rotate(-3deg) scale(1.04); }
  75%     { transform: rotate(2deg)  scale(1.02); }
}
.fj-recipe-card.fj-grabbing { animation: cardJiggle .42s cubic-bezier(.36,.07,.19,.97) both; opacity: 0.5; }

/* ── gauge ── */
.fj-gauge-wrap  { padding: 4px 0 0; }
.fj-gauge-label { font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); text-align: center; margin-bottom: 4px; }

/* ── advice box ── */
.fj-advice {
  background: var(--surface); border: 1px solid var(--line); border-radius: 12px;
  padding: 14px; margin-top: 10px;
}
.fj-advice-head {
  font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 8px; display: flex; align-items: center; gap: 6px;
}
.fj-advice-dot  { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }
.fj-advice-body { font-size: 12px; color: var(--muted); line-height: 1.75; }

/* ── recipe cards ── */
.fj-recipe-card  {
  background: var(--surface); border: 1px solid var(--line); border-radius: 12px;
  padding: 12px 13px; cursor: grab; user-select: none;
  transition: border-color .15s, transform .15s;
}
.fj-recipe-card:hover  { border-color: var(--orange-bd); transform: translateY(-1px); }
.fj-recipe-card:active { cursor: grabbing; }
.fj-recipe-top   { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }
.fj-recipe-emoji { font-size: 18px; line-height: 1; }
.fj-recipe-name  { font-size: 13px; font-weight: 600; }
.fj-recipe-meta  { display: flex; align-items: center; gap: 6px; }
.fj-recipe-time  { font-size: 11px; color: var(--muted); }
.fj-recipe-tag   { background: var(--surface2); border-radius: 10px; padding: 2px 7px; font-size: 10px; color: var(--muted); font-weight: 600; }
.fj-drag-hint    { font-size: 11px; color: var(--muted); margin-bottom: 12px; }
`;function rm(){const[e,t]=E.useState(""),[n,r]=E.useState(Cs()),[o,l]=E.useState(3),[a,s]=E.useState({}),[u,d]=E.useState(null),[x,h]=E.useState(0),[m,j]=E.useState(""),[b,N]=E.useState(""),[B,f]=E.useState(!1),[c,p]=E.useState(!1),w=E.useRef(null),z=E.useRef(null),k=[...new Set(Ns.map(y=>y.tag))];Bs.useEffect(()=>{const y=L=>{z.current&&!z.current.contains(L.target)&&p(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[]);const D=Ns.filter(y=>{const L=m.toLowerCase();return(!L||y.name.toLowerCase().includes(L))&&(!b||y.tag===b)}),F=4,U=Math.ceil(D.length/F),v=D.slice(x*F,(x+1)*F),T=E.useRef(null),O=()=>{const y=e.trim();if(!y)return;const L={id:Date.now(),text:y,feel:o,fromRecipe:!1};s(R=>({...R,[n]:[...R[n]||[],L]})),t("")},W=(y,L)=>{s(R=>({...R,[y]:(R[y]||[]).filter(Z=>Z.id!==L)}))},Y=y=>{const L=T.current;if(!L)return;const R={id:Date.now(),text:L.name,feel:3,fromRecipe:!0};s(Z=>({...Z,[y]:[...Z[y]||[],R]}))},fe=Object.values(a).flat(),C=fe.length>0?fe.reduce((y,L)=>y+L.feel,0)/fe.length:3,A=Math.round(C/5*100),g=fe.length===0?"Start logging your meals and feelings throughout the week. Your personalized gut health insights will appear here.":A>=67?"Your gut is thriving this week. Keep up the variety and stay consistent with hydration and fiber-rich foods.":A>=34?"You're on track. Consider adding more fermented foods — kimchi, yogurt, or miso — to boost your gut flora further.":"Your gut may need some extra support. Focus on whole foods, reduce processed items, and try incorporating a daily probiotic.",M=Cs();return i.jsxs("div",{className:"fj",children:[i.jsx("style",{children:nm}),i.jsx("div",{className:"fj-header",children:i.jsx("img",{src:oa,alt:"Abate Wellness",className:"fj-logo"})}),i.jsx("hr",{className:"fj-rule"}),i.jsxs("div",{className:"fj-title-row",children:[i.jsxs("h1",{className:"fj-title",children:["Food ",i.jsx("em",{children:"journal"})]}),i.jsx("p",{className:"fj-subtitle",children:"Track what you eat, how it makes you feel, and get personalized gut health insights."})]}),i.jsxs("div",{className:"fj-top",children:[i.jsxs("div",{className:"fj-left",children:[i.jsxs("div",{className:"fj-input-box",children:[i.jsxs("div",{className:"fj-input-row",children:[i.jsx("input",{className:"fj-input",placeholder:"What did you eat? (e.g. Greek yogurt, grilled salmon…)",value:e,onChange:y=>t(y.target.value),onKeyDown:y=>y.key==="Enter"&&O()}),i.jsx("button",{className:"fj-log-btn",onClick:O,children:"Log"})]}),i.jsxs("div",{className:"fj-meta-row",children:[i.jsxs("div",{className:"fj-meta-left",children:[i.jsx("span",{className:"fj-meta-label",children:"Day"}),i.jsx("div",{className:"fj-day-pills",children:js.map((y,L)=>i.jsx("button",{className:`fj-day-pill${n===L?" active":""}`,onClick:()=>r(L),children:y.slice(0,3)},L))})]}),i.jsx("div",{className:"fj-feelings",children:Ss.map(y=>i.jsx("button",{className:`fj-feeling${o===y.value?" active":""}`,onClick:()=>l(y.value),title:y.label,children:y.emoji},y.value))})]})]}),i.jsxs("div",{className:"fj-recipes-header",children:[i.jsx("span",{className:"fj-week-label",children:"Recipes — drag onto a day"}),i.jsxs("div",{className:"fj-recipe-controls",children:[i.jsxs("div",{className:`fj-search-wrap${B?" expanded":""}`,children:[i.jsx("div",{className:"fj-search-slide",children:i.jsx("input",{ref:w,className:"fj-search-input",placeholder:"Search...",value:m,onChange:y=>{j(y.target.value),h(0)},onBlur:()=>{m||f(!1)}})}),i.jsx("button",{className:"fj-search-icon-btn",onMouseDown:y=>y.preventDefault(),onClick:()=>{B?(f(!1),j(""),h(0)):(f(!0),setTimeout(()=>{var y;return(y=w.current)==null?void 0:y.focus()},30))},"aria-label":"Search recipes",children:i.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"11",cy:"11",r:"8"}),i.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),i.jsxs("div",{ref:z,className:`fj-filter-wrap${c?" open":""}`,children:[i.jsxs("button",{className:"fj-filter-btn",onClick:()=>p(y=>!y),children:[b||"All",i.jsx("svg",{className:"fj-filter-chevron",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),c&&i.jsx("div",{className:"fj-filter-dropdown",children:["",...k].map(y=>i.jsx("button",{className:`fj-filter-opt${b===y?" active":""}`,onMouseDown:L=>{L.preventDefault(),N(y),h(0),p(!1)},children:y||"All"},y))})]}),i.jsxs("div",{className:"fj-recipe-nav",children:[i.jsx("button",{onClick:()=>h(y=>Math.max(0,y-1)),disabled:x===0,"aria-label":"Previous recipes",children:"‹"}),i.jsx("button",{onClick:()=>h(y=>Math.min(Math.max(0,U-1),y+1)),disabled:x>=U-1,"aria-label":"Next recipes",children:"›"})]})]})]}),v.length===0&&i.jsx("div",{className:"fj-recipe-no-results",children:"No recipes match your search."}),i.jsx("div",{className:"fj-recipes-grid",children:v.map((y,L)=>i.jsxs("div",{className:"fj-recipe-card fj-recipe-card-anim",style:{animationDelay:`${L*65}ms`},draggable:!0,onDragStart:R=>{T.current=y,R.currentTarget.classList.add("fj-grabbing");const Z=document.createElement("div");Z.innerHTML=`<span style="font-size:15px;line-height:1">${y.emoji}</span><span style="font-size:12px;font-weight:600;font-family:Inter,sans-serif">${y.name}</span>`,Z.style.cssText="position:fixed;top:-9999px;left:0;background:#1C1C1E;border:1px solid rgba(245,132,31,.75);border-radius:20px;padding:7px 14px;color:#fff;display:flex;align-items:center;gap:8px;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.75);transform:rotate(-3deg);",document.body.appendChild(Z),R.dataTransfer.setDragImage(Z,Z.offsetWidth/2,Z.offsetHeight/2),setTimeout(()=>{try{document.body.removeChild(Z)}catch{}},100)},onDragEnd:R=>{R.currentTarget.classList.remove("fj-grabbing"),T.current=null,d(null)},children:[i.jsxs("div",{className:"fj-recipe-top",children:[i.jsx("span",{className:"fj-recipe-emoji",children:y.emoji}),i.jsx("span",{className:"fj-recipe-name",children:y.name})]}),i.jsxs("div",{className:"fj-recipe-meta",children:[i.jsx("span",{className:"fj-recipe-time",children:y.time}),i.jsx("span",{className:"fj-recipe-tag",children:y.tag})]})]},`${x}-${y.id}`))})]}),i.jsxs("div",{className:"fj-right",children:[i.jsx(tm,{score:A}),i.jsxs("div",{className:"fj-advice",children:[i.jsxs("div",{className:"fj-advice-head",children:[i.jsx("span",{className:"fj-advice-dot"}),"AI Insights"]}),i.jsx("div",{className:"fj-advice-body",children:g})]})]})]}),i.jsxs("div",{className:"fj-week-section",children:[i.jsx("div",{className:"fj-week-label",children:"Weekly log"}),i.jsx("div",{className:"fj-week",children:em.map((y,L)=>{const R=a[L]||[],Z=L===M,be=L===n,P=u===L;return i.jsxs("div",{className:`fj-day-col${Z?" today":""}${be?" selected":""}${P?" drag-over":""}`,onClick:()=>r(L),onDragOver:_=>{_.preventDefault(),d(L)},onDragLeave:()=>d(null),onDrop:()=>{d(null),Y(L)},children:[i.jsxs("div",{className:"fj-day-head",children:[i.jsx("span",{className:`fj-day-name${Z?" today":""}`,children:js[L]}),R.length>0&&i.jsx("span",{className:"fj-day-badge",children:R.length})]}),i.jsx("div",{className:"fj-day-entries",children:R.map(_=>{var $;return i.jsxs("div",{className:`fj-entry${_.fromRecipe?" from-recipe":""}`,children:[i.jsx("span",{className:"fj-entry-feel",children:(($=Ss.find(pe=>pe.value===_.feel))==null?void 0:$.emoji)??"🙂"}),i.jsx("span",{className:"fj-entry-text",children:_.text}),i.jsx("button",{className:"fj-entry-del",onClick:pe=>{pe.stopPropagation(),W(L,_.id)},children:"×"})]},_.id)})}),R.length===0&&i.jsx("div",{className:"fj-day-drop-hint",children:"drop recipe"})]},L)})})]})]})}const om="/assets/11-flame.png",lm="/assets/19-heart-pulse.png",im="/assets/18-calendar-check.png",am="/assets/21-smartwatch.png",Qc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAABYCAYAAADBRtRDAAAOF0lEQVR4nO1de4xcVRn/3ZnZV7v2uVvarqUFxEIRiwStIkZRQMAH4qsVxRDU+IoaNfEPjYrGRyQaHiamIfGBgMaoEZVqSBrrI2qDRlGQIvKQx9IHLdtut93O7s5c85HfVz+PM7tz79w758zM/pKb2Zl27tx77u985zvf9zvfiRA2CgB6ARQBxPxsBsC0ed+OKALoMe8rvB+5t+BQQtg4CcCLAKxgwwo5ngDwZwCPoz2xAMDzeG+DACYBjAHYC+AhAIcQGCKEgwEAZwE4hYQQC7IRwKtIkoIhyW8B7AJwL4C/AziMsPEyAM+ltRgCsInvlwA4AuApkv5+AP/m6642uK+Wog/AZgDbAexho8kxwYZ1D/n8AIDfAPg8gOUIE0MAruB1Ps17EqtxzLmfGX42DmAUwA4AHwKw2PcNhGTNpCHvAVCtQ4p6xwwJcwuAcxAOCgDWA7gOwD7jczR6yP9/EsBWAGu7fbjpB/BBAO9ho1rIw98JYD//nxKowPH8TA5Linvov0iP9I1hAN8CcD6AheZzsSJ38d7A66/yWAbgxfRZLG4F8DkAD6JLsZwPV3uQNNajAG4D8E4AI3Su+3n08XUDgE/RNNse+GXfNwTgRFo2axV2kjRvprOq96FHifd6FYDvAnjEsarXsHN0JTbQYdPGEO/+0wBObuC70uO+7pDkJvjHRc41yWzlYv5boQGrLo779wFMmXN8AV2KCzmUaEP8nLOYJJCGvdpxBO+GX1zgkORuztoaxfMB3OmcQzqON/g0YU/TFCsGU8xSxJqc4NyHzI58Inbe9ySMR91HH+Rnpn2Gfc50fJJEx2trFZJeT4HOn3XA7TlDQJRwgjBDn8SS/RJaqK4jSaFDZ2xZQIKGZfN+HYNvXtC1HnMLMZPSuhVqDGFeOsA8SfLHJC1Ds5ApsRfMk6Q1iNHGmCdJeyD2STSfJJnuECezEWRxn940NFnqSSTGsaoB4Uwv8xAiDegGxBn4ExHjQc/h38U5/q/6Qnv56p0kvZyivR7AG03yqhaksZYCuIM9Q77b6YgzsADynC5nNLbQwAgQUXfzUwC/BnCw2R9vBhLxfBOAy6i2cjO59bCKEVeJsnY64gzOETFOkiRWMsHncRaTi4/5IMlyWo+PMVEXzRIfiGk1tAesYdazGxznSkqfJJ7jnGXjpxT4WjRZ5UFKD05lauBmDvPVVpFkkGlvUU+dwc+mjNxOMp+7yWbNZgoxns0LrvB1sAuIMpMimFbL7zjGo8yh5F9s4wo7oEoqpMOeznYdoDru3QAWAfgsLXjuJJELOhvAFkOQfRz77uLNjVGqN0mSCHtX03oMkESnMIPbyUPOMbaNtEESuElBab8/AfgV2+5JamFV9dZHUvTRcpxKEZOo9V7C7Lq4BF9pFUlkmHmtkQtKQ9wO4GsUARVN71HTFpsbL9LCbKKutdNJciBFxLXkDFEz1MneQMJVeE43QSr4JzuytPdrqOJbR9H1CK1Q4otJioW0Avpw5WL/BuCBOb7nTo2P+Aw1Bz79na7xvXFa6Nl+CxyONDn4oHEBFlCX8oak63sKGThUaVL87bDmJytEKb6jule3jZOey8ooirQs4rckQlqn0WV5t0ROWwXVt7Zay5IpSeZJkS/UauQRhk88/HX69LNdo619dDyD6IzzJMkXUcrv9dWY4XhDJ5IkJO1GP+MVtoJAI+glUYJAJ5IkpFnTANcQJcl4FxlmEKLMW5IOJUnsvD+aMC4RXMcteJye5YXiHHqLvBE5bTWZcEZhl3fmgahVJAnCDNbBEBeO+8BiJjLdSk1p2jmvNpZIdyameSEzthLvh2F2D5NHkqwLFaLe+iKAG5kljVrQM6t0UF/Iojs2vH44sAVj5zGnZEuM2esdZeKwLkn6SYJzAbyFyaHYaRD12EOFzApeToFOq8pQxPzdZzmlJiaZdc1iSUVWuJmkda1bxOv8ARfeC1n+jySSsLsUwNtZ+2OkjeWFBV6/b/QwsZbGR8or+TlXxQbRCf2+FkmWkBwfAHCaYdkM64ccMjdaZC+VsX8etR+utt8ABcxJOpsm8/JyvqXUFnhNM7SA66k9VhJdTkmB1G6rCklK1IZcQVWTpqXHKXK5hinqPp50hJ/JiULEGAU6i+qMu3mhZGq9vcN8ntRx1byN+jpZk+Vqdvoenl/chysBfISElvdvoz8n9V/GNPQ7aPQh0qh/AXA9qxy6GoYFKZRWrcROiqJEbN1KxGyXcxySJCWpFWvlgdEaPtI3+bvvok/ab8tylUwJCC3+BlqM3XVELqp6ChXayMfH1BZjssZnSYiiomYVOGeNnhokkdnMdygmW8ffPj4FL9RYta4i3NnG0ZAVZT4Dae5koEw9qi0j0WgwrdVtfJjrc6p89hLvWdloDa+k/zaP/0LrsyaJkyhBWr3+1/pCBWqQXypDT3B5gg7DQvbIJAk+dVhbnf5QcuhvruS19xVSShJDzt2EhkJCy1s1/mErLbbrl5ZI8mJhll0TZosSzlugxlBmhckkEVdfQ7krvi4qaXQKrNuDKHpmEb0o40KFb6d6ukbENUmn0llNXmSJZ1lwt4HXXGb1R1lwPq47P8j6jL8ygAauzLusTqwhdKmA7zxJZP4uMKhXSuGTtHKKLgbhlVxcXqLRuI87gFT04ke5wOoS3tQQw/RrOYfWyGWV41RIxf5dvICBwP4WDouR8SWsVKDCBF+S4KPGrfLaIGmrWT+sM6h+PlPN7g8wWSmfT5SMemoHgylb6NkOBxx6nw1rGWIOAYdZFj1pNjpPp/W9DViaW1jj/pm6JkqSKs3LTTTXmzWQQsapD1Lhd0J2XGPeg/ZEHd91NZtdz2IXL831UKo1ykhoMk97ZJnto1Pe6RTKNLtxQR7Qa9QdMsqGlBF9keu5KdMzsGNlzMXG32MPOIlKq+U80VG+ruDYpVnD0CDD4y+pwNKbH+D1WsJoekErB9UjfoGNecRUcbKBLn09xOSeZFHfys8WcOgOKY3xIz7TpRwKH+O9aZzkFyxrcRyuQyWN8Q/mbbTW+wkkyBG+nsbCNRKRCxEPsw5H1SHJMnO/JTODK9QpP+7iMA934ybFQR7nGpK4i+sbgY165jHkXMu2WEFSP0yfKTJk/x8rVsvrnmZBtr08QR8bZsYIe4VEoWKsTuknG3a2w4zmenTYsFFHmOFphodrQfT/6JDi1v9YmnCRtiVgHlKBXSTBAMkx52xwrqlZXMPp0sZqN+Q5rYzN3y4hyinaSx9eHpakxHM3LIhO44DmGejJAr6vLXbeH0wxuzmWo2anJUsq5tE4Khye4ybzKF4xT5J8UU0ZoQ6GIJ1AEq811xuAxk7S+EPB3FenkCSYBnUwnUJ0FBzSksR9KKE+JN+oNGFJ2p4k7q5OvmYUbswjVJLEnn4/k99NOwW2AZ6oxq7YjcAnuVqFMqfAWcWVslieUWgFSSapANe5fy9D9LKDQhJkYYataDhEHKRWR9IZzSJO8WxXmWRjzHVUU60gicT7f8JkoJLkfGdBUj0s4ar/IbPFfLMIlSDgAxnPQAgVUetxOiUcs1ngEjUtr+Cif6kOAXbqj6chSZqHVOau2SJS2mge/haa1duZ0LI5jog3dynZfYSJQy1tkRY+1qckQdpCyC6KVAqeyU76O0o7LLSdz+YewsNmNZ4Q4w+sR58YaXuyZAq30Sps4k0Iez/BqsOaFNQ0O6h4G8lpaWWo1qTiJAXTIuLKOjkEF1ISYVf5aXuvrLEb+R8BfCbN5gPNkGSKu1+J7uBLAC7m58UUvkkz0JoaoZIkr+jpsgQ1YmS38tu4vjuV1W3GFB5l2lnNXiVBmDqrTLKm8EOdJVUznMVVzc4Uc5FO21bKhnyYJEld0KfZ8VJ++JN0qlZxNb+o7m26Wy94O0tFnUjBzwVu2aUmhptQqxxUM7IkUyz3MURfQ3yTj9KSa6eLOfPcyvoxw5xQ3NHs7CqL2UXZiJC20ald6egmYxZFESGTYl9G1mSmDfS21QzONWGWvIxx65htFDWpNZXfepQ+Y9A1T0cbLPuQtkyUi7kqIPjEBNXyWVg6rTWvVmna1aJ2YoIvy0VIvhdk1cNUFvvy+k49tHsWOFSHtd762rZEu5MEORehaxaqym9r8ncCSQZCa1SDhZz5JfX9apUBmR9uUqLENauudMEnYvP3Gk5DlzXZeSeYLIy7zZIUHFM8lbC2mH7HDeL5Xi1XdEhyERdCNTNMPdTAbqkdSZJxJqsU/czvJIGWFo2aKbCfM4YSlsMqMXM7bJ7P/d1KEslIfsMknaQq8asTLok8j5FbHfP3MtvpE1XnfdnszdsIergr+EZD/lGnQ3UVpEzEHiNmfoK7aGuSsFTjiOgQvg/AvSbBF7Nkgu9tyRYzVaHXNMaV+jfSqkR17qnEhfhfZZDM3te1Ph1X37tM7eeuCFcyvCxSgqtY0WCXKUbs9tQFzDzLYmyLW1P4NVnjEMutK0Qz8zr+3Uur4j7wmL7MelrHRU6a/8cBOOReIRqJ69i4ts6HVjGod1QdCyQ9MBSsBvBtMyPRY3KO+1JtjK7BvpNVChDwNL8liDj+aqNqVjee5VAV+hSlCu+vYVV8YwO1NtvNnjez3ZPKHuS+DgD4ISWI3snh/QIIld1t5pATcfp4Bh1ZO809wBoqe0mSHawSOBnYIqgih9C1rD+3irVdVDBU5MShzJneHh77SfztvE/vMohQSKJe/ZAp3XAyYwxrSIASTfAD3LRnN3vfUxkl0fLEiNkyZrUpbFOglXmcCrJHOOzqEQRCIomLIoNQ/WY7sAodP/Vf2g19PGR2pql/sSRCcjm8W41a+A+bD+rvo6ikdwAAAABJRU5ErkJggg==",sm="/assets/07-yoga.png",um="/assets/24-abs-core.png",cm="/assets/22-sleep.png",dm="/assets/stock.mp4",Es=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Kn={Strength:{color:"#F5841F",bg:"rgba(245,132,31,.14)"},Mobility:{color:"#30D158",bg:"rgba(48,209,88,.14)"},Core:{color:"#BF5AF2",bg:"rgba(191,90,242,.14)"},Recovery:{color:"#64D2FF",bg:"rgba(100,210,255,.14)"}},Ln=[{id:1,name:"Full Body Strength",duration:"45 min",type:"Strength",difficulty:"Moderate",video:dm,description:"A comprehensive full-body session targeting all major muscle groups through compound movements — squats, deadlifts, rows, and press variations designed to build functional strength."},{id:2,name:"Hip Mobility Flow",duration:"30 min",type:"Mobility",difficulty:"Easy",description:"Deep hip openers, 90/90 stretches, and controlled articular rotations to improve joint range of motion and reduce tightness in the hips and lower back."},{id:3,name:"Upper Body Push",duration:"30 min",type:"Strength",difficulty:"Moderate",description:"Focused push-pattern work targeting chest, shoulders, and triceps through push-up progressions, overhead press variations, and cable flys."},{id:4,name:"Glute Activation",duration:"20 min",type:"Mobility",difficulty:"Easy",description:"Targeted activation protocol to wake up the posterior chain before heavier training. Banded clamshells, hip thrusts, and glute bridges."},{id:5,name:"Core & Stability",duration:"25 min",type:"Core",difficulty:"Moderate",description:"Anti-rotation and anti-flexion core work that builds real functional stability — planks, Pallof presses, dead bugs, and farmer carries."},{id:6,name:"Lower Body Power",duration:"45 min",type:"Strength",difficulty:"Hard",description:"Power development session emphasizing speed and force production — box jumps, trap bar deadlifts, Bulgarian split squats, and single-leg RDLs."},{id:7,name:"Foam Roll Recovery",duration:"20 min",type:"Recovery",difficulty:"Easy",description:"Full-body self-myofascial release targeting commonly tight areas — quads, IT band, thoracic spine, and calves. Great standalone or pre/post workout."},{id:8,name:"Shoulder Mobility",duration:"15 min",type:"Mobility",difficulty:"Easy",description:"Thoracic mobility drills, shoulder circles, and rotator cuff activation to keep the shoulder girdle healthy and pain-free for pressing movements."}],Ar=[0,2,4],fm={1:"Focus on bracing your core throughout the lifts. Keep your chest up on the squat and drive through the heels.",2:"Move slowly through the 90/90 transitions. Hold each position for at least 5 deep breaths — the goal is control, not range.",3:"Prioritize shoulder packing. Depress and retract the scapula before any press movement to protect the joint.",5:"The goal here is tension, not movement. Think about resisting force in every direction during the Pallof press.",6:"Rest fully between power sets — quality over quantity. This is not a circuit, treat each set as a max effort."},pm={orange:"brightness(0) saturate(100%) invert(60%) sepia(88%) saturate(700%) hue-rotate(350deg) brightness(110%)",green:"brightness(0) saturate(100%) invert(72%) sepia(55%) saturate(500%) hue-rotate(88deg)",purple:"brightness(0) saturate(100%) invert(48%) sepia(86%) saturate(600%) hue-rotate(245deg) brightness(105%)",blue:"brightness(0) saturate(100%) invert(83%) sepia(60%) saturate(400%) hue-rotate(175deg) brightness(107%)",muted:"brightness(0) saturate(0%) invert(65%) brightness(140%)"};function jn({src:e,size:t=20,colorKey:n="muted"}){return i.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:t,height:t,flexShrink:0},children:i.jsx("img",{src:e,alt:"",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:pm[n]}})})}function mm({size:e=20}){return i.jsx(jn,{src:om,size:e,colorKey:"orange"})}function gm({size:e=20}){return i.jsx(jn,{src:lm,size:e,colorKey:"green"})}function hm({size:e=20}){return i.jsx(jn,{src:im,size:e,colorKey:"muted"})}function vm({size:e=20}){return i.jsx(jn,{src:am,size:e,colorKey:"muted"})}function zs({size:e=32}){return i.jsx(jn,{src:Qc,size:e,colorKey:"muted"})}function li({type:e,size:t=18}){const n={Strength:{src:Qc,colorKey:"orange"},Mobility:{src:sm,colorKey:"green"},Core:{src:um,colorKey:"purple"},Recovery:{src:cm,colorKey:"blue"}},{src:r,colorKey:o}=n[e]||n.Strength;return i.jsx(jn,{src:r,size:t,colorKey:o})}function Ms(){const e=new Date().getDay();return e===0?6:e-1}function Yc(e){const t=new Date,n=t.getDay(),r=new Date(t);return r.setDate(t.getDate()-(n===0?6:n-1)+e*7),Array.from({length:7},(o,l)=>{const a=new Date(r);return a.setDate(r.getDate()+l),a})}function xm(e){const t=Yc(e),n=t[0],r=t[6],o=n.toLocaleString("default",{month:"short"}),l=r.toLocaleString("default",{month:"short"});return o===l?`${o} ${n.getDate()} – ${r.getDate()}`:`${o} ${n.getDate()} – ${l} ${r.getDate()}`}function ym({workout:e,note:t,onNoteChange:n,onClose:r,onAddToPlan:o}){return E.useEffect(()=>{const l=a=>{a.key==="Escape"&&r()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[r]),Kn[e.type]||Kn.Strength,i.jsx("div",{className:"mp-backdrop",onClick:r,children:i.jsxs("div",{className:"mp-modal",onClick:l=>l.stopPropagation(),children:[i.jsxs("div",{className:"mp-video-area",children:[e.video?i.jsx("video",{src:e.video,controls:!0,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):i.jsxs(i.Fragment,{children:[i.jsxs("svg",{width:"56",height:"56",viewBox:"0 0 56 56",children:[i.jsx("circle",{cx:"28",cy:"28",r:"27",fill:"rgba(245,132,31,.10)",stroke:"rgba(245,132,31,.35)",strokeWidth:"1.5"}),i.jsx("polygon",{points:"23,19 41,28 23,37",fill:"#F5841F"})]}),i.jsx("span",{className:"mp-video-hint",children:"Video coming soon"})]}),i.jsx("button",{className:"mp-modal-close-vid",onClick:r,children:i.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:[i.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),i.jsxs("div",{className:"mp-modal-content",children:[i.jsxs("div",{className:"mp-modal-head",children:[i.jsx("div",{className:"mp-modal-type-icon",children:i.jsx(li,{type:e.type,size:26})}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{className:"mp-modal-name",children:e.name}),i.jsxs("div",{className:"mp-modal-chips",children:[i.jsx("span",{className:"mp-type-pill",children:e.type}),i.jsx("span",{className:"mp-chip-muted",children:e.duration}),i.jsx("span",{className:"mp-chip-muted",children:e.difficulty})]})]})]}),i.jsx("p",{className:"mp-modal-desc",children:e.description}),i.jsx("div",{className:"mp-modal-divider"}),i.jsxs("div",{className:"mp-note-block",children:[i.jsxs("div",{className:"mp-note-label",children:[i.jsx("span",{className:"mp-note-dot",style:{background:"#F5841F"}}),"Trainer Notes",i.jsx("span",{className:"mp-note-by",children:"Andrea"})]}),i.jsx("div",{className:"mp-trainer-note",children:fm[e.id]||"No trainer notes yet for this workout."})]}),i.jsxs("div",{className:"mp-note-block",children:[i.jsxs("div",{className:"mp-note-label",children:[i.jsx("span",{className:"mp-note-dot",style:{background:"#64D2FF"}}),"Your Notes"]}),i.jsx("textarea",{className:"mp-note-area",placeholder:"How did it feel? Weights used, reps completed, anything to remember…",value:t,onChange:l=>n(l.target.value)})]}),i.jsxs("div",{className:"mp-modal-actions",children:[i.jsx("button",{className:"mp-btn-ghost",onClick:r,children:"Close"}),i.jsx("button",{className:"mp-btn-orange",onClick:o,children:"Add to Plan"})]})]})]})})}const wm=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg:     #0B0B0C;
  --line:   #2A2A2D;
  --text:   #FFFFFF;
  --muted:  #9C988F;
  --orange: #F5841F;
  --surface: #161617;
  --surface2: #1C1C1E;
}
body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; }

/* ── shell ── */
.mp { min-height: 100vh; background: var(--bg); padding-bottom: 80px; }
/* ── title ── */
.mp-title-row { max-width: 980px; margin: 28px auto 0; padding: 0 20px; }
.mp-title     { font-family: 'Cormorant', serif; font-size: 40px; font-weight: 600; line-height: 1.1; }
.mp-title em  { font-style: italic; color: var(--orange); }
.mp-subtitle  { font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.5; }

/* ── stats bar ── */
.mp-stats {
  max-width: 980px; margin: 28px auto 0; padding: 0 20px;
  display: flex;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.mp-stat {
  flex: 1; padding: 18px 0;
  display: flex; align-items: center; gap: 12px;
}
.mp-stat + .mp-stat { padding-left: 28px; }
.mp-stat-icon { display: flex; align-items: center; flex-shrink: 0; }
.mp-stat-val  { font-size: 22px; font-weight: 700; line-height: 1; }
.mp-stat-lbl  { font-size: 9px; color: var(--muted); font-weight: 700; letter-spacing: .1em; text-transform: uppercase; margin-top: 3px; }

/* ── body layout ── */
.mp-body  { max-width: 980px; margin: 28px auto 0; padding: 0 20px; display: flex; gap: 48px; align-items: flex-start; }
.mp-left  { flex: 1; min-width: 0; }
.mp-right { width: 240px; flex-shrink: 0; }

/* ── top row (week nav + tabs) ── */
.mp-top-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0; gap: 16px;
  padding-bottom: 16px; border-bottom: 1px solid var(--line); }
.mp-week-group { display: flex; align-items: center; gap: 12px; }
.mp-week-label { font-size: 13px; font-weight: 600; }
.mp-week-btn {
  background: none; border: none; color: var(--muted);
  width: 22px; height: 22px; font-size: 17px; cursor: pointer; line-height: 1;
  display: flex; align-items: center; justify-content: center;
  transition: color .15s; padding: 0;
}
.mp-week-btn:hover { color: var(--text); }

/* ── tabs ── */
.mp-tabs { display: flex; gap: 0; }
.mp-tab {
  padding: 6px 0; margin-left: 20px; font-size: 12px; font-weight: 600; color: var(--muted);
  background: none; border: none; border-bottom: 2px solid transparent;
  cursor: pointer; font-family: 'Inter', sans-serif;
  transition: color .15s, border-color .15s;
}
.mp-tab:first-child { margin-left: 0; }
.mp-tab.active { color: var(--text); border-bottom-color: var(--orange); }

/* ── day strip ── */
.mp-day-strip { display: flex; border-bottom: 1px solid var(--line); position: relative; }
.mp-day-cell  {
  flex: 1; padding: 14px 4px 14px; text-align: center; cursor: pointer; position: relative;
  transition: color .15s;
}
.mp-day-cell::after {
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
  height: 2px; background: transparent; transition: background .15s;
}
.mp-day-cell.selected::after { background: var(--orange); }
.mp-day-cell.today .mp-day-num { color: var(--orange); }
.mp-day-name { font-size: 9px; font-weight: 700; letter-spacing: .08em; color: var(--muted); text-transform: uppercase; }
.mp-day-num  { font-size: 17px; font-weight: 700; margin: 4px 0 6px; }
.mp-day-dots { display: flex; justify-content: center; gap: 3px; min-height: 5px; }
.mp-day-dot  { width: 4px; height: 4px; border-radius: 50%; }

/* ── day detail ── */
.mp-day-detail { padding-top: 6px; min-height: 280px; transition: border-color .15s; }
.mp-day-detail.drag-over { outline: 1px solid rgba(245,132,31,.3); outline-offset: -1px; }
.mp-detail-head { display: flex; align-items: center; justify-content: space-between; padding: 14px 0 12px; border-bottom: 1px solid var(--line); margin-bottom: 2px; }
.mp-detail-title { font-size: 13px; font-weight: 700; }
.mp-detail-badge { font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); }
.mp-empty { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 52px 0; color: var(--muted); }
.mp-empty-icon { display: flex; color: var(--line); }
.mp-empty-txt  { font-size: 13px; }
.mp-empty-hint { font-size: 11px; color: var(--line); }

/* ── workout items ── */
.mp-workout-item {
  display: flex; align-items: center; gap: 10px;
  padding: 13px 0; border-bottom: 1px solid var(--line);
  transition: opacity .15s;
}
.mp-workout-item:hover { opacity: .85; }
.mp-check {
  width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid var(--line);
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  cursor: pointer; background: none; transition: all .15s;
}
.mp-check.done { background: #30D158; border-color: #30D158; }
.mp-item-icon  { display: flex; align-items: center; flex-shrink: 0; }
.mp-item-info  { flex: 1; min-width: 0; cursor: pointer; }
.mp-item-name  { font-size: 13px; font-weight: 600; transition: opacity .15s; }
.mp-item-name.done { opacity: .35; text-decoration: line-through; }
.mp-item-meta  { display: flex; align-items: center; gap: 6px; margin-top: 3px; }
.mp-item-dur   { font-size: 11px; color: var(--muted); }
.mp-del {
  background: none; border: none; cursor: pointer; padding: 0;
  display: flex; align-items: center; color: var(--line); transition: color .15s; flex-shrink: 0;
}
.mp-del:hover { color: #FF453A; }
.mp-type-pill {
  font-size: 9px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
  color: var(--muted); white-space: nowrap; flex-shrink: 0;
}

/* ── session toggle row ── */
.mp-mode-row { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--line); }
.mp-mode-label { font-size: 11px; color: var(--muted); font-weight: 500; letter-spacing: .02em; }
.mp-toggle { width: 36px; height: 20px; border-radius: 10px; background: var(--line); border: none; cursor: pointer; position: relative; transition: background .2s; padding: 0; flex-shrink: 0; }
.mp-toggle.on { background: var(--orange); }
.mp-toggle-thumb { display: block; position: absolute; top: 3px; left: 3px; width: 14px; height: 14px; border-radius: 50%; background: #fff; transition: left .2s; pointer-events: none; }
.mp-toggle.on .mp-toggle-thumb { left: 19px; }
.mp-day-session { width: 4px; height: 4px; border-radius: 50%; background: var(--orange); }
.mp-no-session { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 40px 0; color: var(--muted); }
.mp-no-session-icon { font-size: 28px; opacity: .25; }
.mp-no-session-txt  { font-size: 13px; }
.mp-no-session-hint { font-size: 11px; color: var(--line); }

/* ── library header ── */
.mp-lib-header { display: flex; align-items: center; justify-content: space-between; padding-bottom: 14px; border-bottom: 1px solid var(--line); margin-bottom: 0; }
.mp-lib-title  { font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); }
.mp-lib-controls { display: flex; align-items: center; gap: 10px; }
.mp-lib-list { }

/* ── library cards ── */
.mp-lib-card {
  padding: 13px 0; border-bottom: 1px solid var(--line);
  cursor: pointer; user-select: none;
  transition: opacity .15s;
}
.mp-lib-card:hover { opacity: .75; }
.mp-lib-row   { display: flex; align-items: center; gap: 10px; }
.mp-lib-icon  { display: flex; align-items: center; flex-shrink: 0; }
.mp-lib-text  { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
.mp-lib-name  { font-size: 18px; font-weight: 700; line-height: 1.1; }
.mp-lib-meta  { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.mp-lib-dur   { font-size: 11px; color: var(--muted); }
.mp-lib-diff  { font-size: 10px; color: var(--muted); }
@keyframes cardJiggleMP {
  0%,100% { transform: rotate(0deg)  scale(1);    }
  15%     { transform: rotate(-5deg) scale(1.05); }
  35%     { transform: rotate(4deg)  scale(1.05); }
  55%     { transform: rotate(-3deg) scale(1.03); }
  75%     { transform: rotate(2deg)  scale(1.01); }
}
.mp-lib-card.mp-grabbing { animation: cardJiggleMP .42s cubic-bezier(.36,.07,.19,.97) both; opacity: 0.4; }

/* ── search ── */
.mp-search-wrap  { display: flex; align-items: center; gap: 0; }
.mp-search-slide { max-width: 0; overflow: hidden; display: flex; justify-content: flex-end; transition: max-width .52s cubic-bezier(.22,1,.36,1); }
.mp-search-wrap.expanded .mp-search-slide { max-width: 120px; }
.mp-search-input {
  width: 100px; background: transparent; border: none; border-radius: 0;
  border-bottom: 1px solid var(--line); padding: 2px 4px; color: var(--text);
  font-size: 12px; font-family: 'Inter', sans-serif; outline: none;
  opacity: 0; transition: opacity .2s ease .22s, border-color .15s;
}
.mp-search-wrap.expanded .mp-search-input { opacity: 1; }
.mp-search-input::placeholder { color: var(--muted); }
.mp-search-input:focus { border-bottom-color: var(--orange); }
.mp-search-icon {
  background: none; border: none; color: var(--muted);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: color .15s; padding: 0; width: 20px; height: 20px;
}
.mp-search-icon:hover { color: var(--text); }
.mp-search-wrap.expanded .mp-search-icon { color: var(--text); }

/* ── filter dropdown ── */
.mp-filter-wrap { position: relative; }
.mp-filter-btn {
  background: none; border: none; padding: 0;
  color: var(--muted); font-size: 12px; font-family: 'Inter', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 4px;
  transition: color .15s; border-bottom: 1px solid transparent;
}
.mp-filter-btn:hover { color: var(--text); }
.mp-filter-wrap.open .mp-filter-btn { color: var(--text); }
.mp-filter-chev { transition: transform .2s; flex-shrink: 0; }
.mp-filter-wrap.open .mp-filter-chev { transform: rotate(180deg); }
@keyframes mpDropIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
.mp-filter-drop {
  position: absolute; top: calc(100% + 8px); right: 0; z-index: 200;
  background: var(--surface); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
  min-width: 130px; box-shadow: 0 12px 32px rgba(0,0,0,.7);
  animation: mpDropIn .16s ease both;
}
.mp-filter-opt {
  display: block; width: 100%; padding: 10px 14px; text-align: left;
  background: none; border: none; color: var(--muted); font-size: 12px;
  font-family: 'Inter', sans-serif; cursor: pointer; transition: color .12s;
  border-bottom: 1px solid var(--line);
}
.mp-filter-opt:last-child { border-bottom: none; }
.mp-filter-opt:hover  { color: var(--text); }
.mp-filter-opt.active { color: var(--orange); font-weight: 600; }

/* ── modal ── */
.mp-backdrop {
  position: fixed; inset: 0; background: rgba(0,0,0,.82); backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center; z-index: 1000;
  animation: mpBackdropIn .2s ease both;
}
@keyframes mpBackdropIn { from { opacity: 0; } to { opacity: 1; } }
.mp-modal {
  background: var(--bg); border: 1px solid var(--line);
  width: min(700px, 95vw); max-height: 88vh; overflow: hidden; display: flex; flex-direction: column;
  animation: mpModalIn .26s cubic-bezier(.22,1,.36,1) both;
}
@keyframes mpModalIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
.mp-video-area {
  background: #0B0B0C; border-bottom: 1px solid var(--line); height: 190px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 10px; flex-shrink: 0; position: relative;
}
.mp-video-hint { font-size: 11px; color: var(--muted); }
.mp-modal-close-vid {
  position: absolute; top: 14px; right: 16px;
  background: none; border: none; color: var(--muted); cursor: pointer;
  display: flex; align-items: center; justify-content: center; transition: color .15s;
}
.mp-modal-close-vid:hover { color: var(--text); }
.mp-modal-content { padding: 24px 28px 28px; overflow-y: auto; display: flex; flex-direction: column; gap: 18px; }
.mp-modal-head    { display: flex; align-items: flex-start; gap: 14px; }
.mp-modal-type-icon { display: flex; align-items: center; flex-shrink: 0; margin-top: 3px; }
.mp-modal-name    { font-size: 20px; font-weight: 700; margin-bottom: 6px; }
.mp-modal-chips   { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.mp-chip-muted    { font-size: 11px; color: var(--muted); }
.mp-modal-desc    { font-size: 13px; color: var(--muted); line-height: 1.75; }
.mp-modal-divider { border: none; border-top: 1px solid var(--line); }
.mp-note-block    { display: flex; flex-direction: column; gap: 10px; }
.mp-note-label    { display: flex; align-items: center; gap: 7px; font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); }
.mp-note-dot      { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }
.mp-note-by       { color: var(--orange); font-weight: 600; letter-spacing: 0; text-transform: none; font-size: 11px; }
.mp-trainer-note  { font-size: 13px; color: var(--muted); line-height: 1.75; border-left: 2px solid rgba(245,132,31,.35); padding-left: 14px; }
.mp-note-area     {
  background: transparent; border: none; border-bottom: 1px solid var(--line);
  padding: 8px 0; color: var(--text); font-size: 13px; font-family: 'Inter', sans-serif;
  outline: none; resize: none; min-height: 72px; line-height: 1.65; transition: border-color .15s; width: 100%;
}
.mp-note-area:focus { border-bottom-color: var(--orange); }
.mp-note-area::placeholder { color: var(--line); }
.mp-modal-actions { display: flex; gap: 12px; justify-content: flex-end; padding-top: 4px; border-top: 1px solid var(--line); }
.mp-btn-ghost {
  background: none; border: none; padding: 10px 0; font-size: 13px; font-weight: 600; color: var(--muted);
  cursor: pointer; font-family: 'Inter', sans-serif; transition: color .15s;
}
.mp-btn-ghost:hover { color: var(--text); }
.mp-btn-orange {
  background: none; border: none; border-bottom: 2px solid var(--orange);
  padding: 10px 0; font-size: 13px; font-weight: 700; color: var(--orange);
  cursor: pointer; font-family: 'Inter', sans-serif; transition: opacity .15s;
}
.mp-btn-orange:hover { opacity: .75; }
`;function km(){const[e,t]=E.useState("plan"),[n,r]=E.useState(Ms()),[o,l]=E.useState(0),[a,s]=E.useState({plan:{},log:{}}),[u,d]=E.useState(null),[x,h]=E.useState({}),[m,j]=E.useState(!1),[b,N]=E.useState(!1),[B,f]=E.useState(""),[c,p]=E.useState(""),[w,z]=E.useState(!1),[k,D]=E.useState(!1),F=E.useRef(null),U=E.useRef(null),v=E.useRef(null);E.useEffect(()=>{const P=_=>{v.current&&!v.current.contains(_.target)&&D(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[]);const T=Yc(o),O=Ms(),W=o===0,Y=(a[e][n]||[]).map(P=>({...P,workout:Ln.find(_=>_.id===P.wid)})).filter(P=>P.workout),fe=P=>s(_=>({..._,log:{..._.log,[n]:(_.log[n]||[]).map($=>$.id===P?{...$,done:!$.done}:$)}})),C=P=>s(_=>({..._,[e]:{..._[e],[n]:(_[e][n]||[]).filter($=>$.id!==P)}})),A=P=>{const _={id:Date.now().toString(),wid:P.id,done:!1};s($=>({...$,[e]:{...$[e],[n]:[...$[e][n]||[],_]}}))},g=[...new Set(Ln.map(P=>P.type))],M=Ln.filter(P=>{const _=B.toLowerCase();return(!_||P.name.toLowerCase().includes(_))&&(!c||P.type===c)}),L=Object.values(a.log).flat().filter(P=>P.done).length,R=Object.values(a.plan).flat().length,Z=(a[e][n]||[]).reduce((P,_)=>{const $=Ln.find(pe=>pe.id===_.wid);return P+($?parseInt($.duration):0)},0),be=P=>(a[e][P]||[]).slice(0,3).map(_=>{var pe;const $=Ln.find(Be=>Be.id===_.wid);return $&&((pe=Kn[$.type])==null?void 0:pe.color)||"#F5841F"});return i.jsxs("div",{className:"mp",children:[i.jsx("style",{children:wm}),i.jsxs("div",{className:"mp-title-row",children:[i.jsxs("h1",{className:"mp-title",children:["My ",i.jsx("em",{children:"program"})]}),i.jsx("p",{className:"mp-subtitle",children:"Your personalized training plan, workout library, and progress log."})]}),i.jsxs("div",{className:"mp-stats",children:[i.jsxs("div",{className:"mp-stat",children:[i.jsx("span",{className:"mp-stat-icon",children:i.jsx(mm,{size:36,color:"#F5841F"})}),i.jsxs("div",{children:[i.jsx("div",{className:"mp-stat-val",children:"3"}),i.jsx("div",{className:"mp-stat-lbl",children:"Week streak"})]})]}),i.jsxs("div",{className:"mp-stat",children:[i.jsx("span",{className:"mp-stat-icon",children:i.jsx(gm,{size:36,color:"#30D158"})}),i.jsxs("div",{children:[i.jsx("div",{className:"mp-stat-val",children:L}),i.jsx("div",{className:"mp-stat-lbl",children:"Done this week"})]})]}),i.jsxs("div",{className:"mp-stat",children:[i.jsx("span",{className:"mp-stat-icon",children:i.jsx(hm,{size:36,color:"#9C988F"})}),i.jsxs("div",{children:[i.jsx("div",{className:"mp-stat-val",children:R}),i.jsx("div",{className:"mp-stat-lbl",children:"Planned"})]})]}),i.jsxs("div",{className:"mp-stat",children:[i.jsx("span",{className:"mp-stat-icon",children:i.jsx(vm,{size:36,color:"#9C988F"})}),i.jsxs("div",{children:[i.jsxs("div",{className:"mp-stat-val",children:[Z,i.jsx("span",{style:{fontSize:12,color:"var(--muted)",fontWeight:400},children:"m"})]}),i.jsx("div",{className:"mp-stat-lbl",children:"Today's time"})]})]})]}),i.jsxs("div",{className:"mp-body",children:[i.jsxs("div",{className:"mp-left",children:[i.jsxs("div",{className:"mp-top-row",children:[i.jsxs("div",{className:"mp-week-group",children:[i.jsx("button",{className:"mp-week-btn",onClick:()=>l(P=>P-1),children:"‹"}),i.jsx("span",{className:"mp-week-label",children:xm(o)}),i.jsx("button",{className:"mp-week-btn",onClick:()=>l(P=>P+1),children:"›"})]}),i.jsxs("div",{className:"mp-tabs",children:[i.jsx("button",{className:`mp-tab${e==="log"?" active":""}`,onClick:()=>t("log"),children:"My Log"}),i.jsx("button",{className:`mp-tab${e==="plan"?" active":""}`,onClick:()=>t("plan"),children:"My Plan"})]})]}),i.jsxs("div",{className:"mp-mode-row",children:[i.jsx("span",{className:"mp-mode-label",children:m?"Showing booked session days only":"Plan freely on any day"}),i.jsx("button",{className:`mp-toggle${m?" on":""}`,onClick:()=>j(P=>!P),onMouseDown:P=>P.preventDefault(),children:i.jsx("span",{className:"mp-toggle-thumb"})})]}),i.jsx("div",{className:"mp-day-strip",children:Es.map((P,_)=>{const $=T[_],pe=W&&_===O,Be=_===n,la=be(_),ia=Ar.includes(_),Kc=m&&!ia;return i.jsxs("div",{className:`mp-day-cell${pe?" today":""}${Be?" selected":""}`,onClick:()=>r(_),style:Kc?{opacity:.35}:void 0,children:[i.jsx("div",{className:"mp-day-name",children:P}),i.jsx("div",{className:"mp-day-num",children:$.getDate()}),i.jsxs("div",{className:"mp-day-dots",children:[m&&ia&&i.jsx("div",{className:"mp-day-session"}),!m&&la.map((Jc,Gc)=>i.jsx("div",{className:"mp-day-dot",style:{background:Jc}},Gc))]})]},_)})}),i.jsxs("div",{className:`mp-day-detail${b?" drag-over":""}`,onDragOver:P=>{m&&!Ar.includes(n)||(P.preventDefault(),N(!0))},onDragLeave:()=>N(!1),onDrop:()=>{N(!1),F.current&&!(m&&!Ar.includes(n))&&(A(F.current),F.current=null)},children:[i.jsxs("div",{className:"mp-detail-head",children:[i.jsxs("span",{className:"mp-detail-title",children:[Es[n],", ",T[n].toLocaleString("default",{month:"short"})," ",T[n].getDate()]}),i.jsx("span",{className:"mp-detail-badge",children:e==="log"?"Log":"Plan"})]}),m&&!Ar.includes(n)?i.jsxs("div",{className:"mp-no-session",children:[i.jsx("span",{className:"mp-empty-icon",children:i.jsx(zs,{size:56})}),i.jsx("span",{className:"mp-no-session-txt",children:"No session booked for this day"}),i.jsx("span",{className:"mp-no-session-hint",children:"Book a session with Andrea to plan workouts here"})]}):Y.length===0?i.jsxs("div",{className:"mp-empty",children:[i.jsx("span",{className:"mp-empty-icon",children:i.jsx(zs,{size:56})}),i.jsxs("span",{className:"mp-empty-txt",children:["No workouts ",e==="log"?"logged":"planned"," for this day"]}),i.jsx("span",{className:"mp-empty-hint",children:"Drag a workout from the library"})]}):Y.map(({id:P,done:_,workout:$})=>i.jsxs("div",{className:"mp-workout-item",children:[e==="log"&&i.jsx("button",{className:`mp-check${_?" done":""}`,onClick:pe=>{pe.stopPropagation(),fe(P)},children:_&&i.jsx("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"20 6 9 17 4 12"})})}),i.jsx("span",{className:"mp-item-icon",children:i.jsx(li,{type:$.type,size:30})}),i.jsxs("div",{className:"mp-item-info",onClick:()=>d($),children:[i.jsx("div",{className:`mp-item-name${_?" done":""}`,children:$.name}),i.jsxs("div",{className:"mp-item-meta",children:[i.jsx("span",{className:"mp-type-pill",children:$.type}),i.jsx("span",{className:"mp-item-dur",children:$.duration})]})]}),i.jsx("button",{className:"mp-del",onClick:pe=>{pe.stopPropagation(),C(P)},children:i.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[i.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},P))]})]}),i.jsxs("div",{className:"mp-right",children:[i.jsxs("div",{className:"mp-lib-header",children:[i.jsx("span",{className:"mp-lib-title",children:"Library"}),i.jsxs("div",{className:"mp-lib-controls",children:[i.jsxs("div",{className:`mp-search-wrap${w?" expanded":""}`,children:[i.jsx("div",{className:"mp-search-slide",children:i.jsx("input",{ref:U,className:"mp-search-input",placeholder:"Search…",value:B,onChange:P=>f(P.target.value),onBlur:()=>{B||z(!1)}})}),i.jsx("button",{className:"mp-search-icon",onMouseDown:P=>P.preventDefault(),onClick:()=>{w?(z(!1),f("")):(z(!0),setTimeout(()=>{var P;return(P=U.current)==null?void 0:P.focus()},30))},children:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"11",cy:"11",r:"8"}),i.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),i.jsxs("div",{ref:v,className:`mp-filter-wrap${k?" open":""}`,children:[i.jsxs("button",{className:"mp-filter-btn",onClick:()=>D(P=>!P),children:[c||"All",i.jsx("svg",{className:"mp-filter-chev",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),k&&i.jsx("div",{className:"mp-filter-drop",children:["",...g].map(P=>i.jsx("button",{className:`mp-filter-opt${c===P?" active":""}`,onMouseDown:_=>{_.preventDefault(),p(P),D(!1)},children:P||"All"},P))})]})]})]}),i.jsxs("div",{className:"mp-lib-list",children:[M.length===0&&i.jsx("div",{style:{fontSize:12,color:"var(--muted)",padding:"16px 0"},children:"No workouts match."}),M.map(P=>{const _=(Kn[P.type]||Kn.Strength).color;return i.jsx("div",{className:"mp-lib-card",draggable:!0,onDragStart:$=>{F.current=P,$.currentTarget.classList.add("mp-grabbing");const pe=`<span style="width:7px;height:7px;border-radius:50%;background:${_};display:inline-block;flex-shrink:0"></span>`,Be=document.createElement("div");Be.innerHTML=`${pe}<span style="font-size:12px;font-weight:600;font-family:Inter,sans-serif">${P.name}</span>`,Be.style.cssText="position:fixed;top:-9999px;left:0;background:#161617;border-top:1px solid #2A2A2D;border-bottom:1px solid #2A2A2D;padding:8px 16px;color:#fff;display:flex;align-items:center;gap:9px;white-space:nowrap;box-shadow:0 12px 32px rgba(0,0,0,.8);transform:rotate(-1.5deg);",document.body.appendChild(Be),$.dataTransfer.setDragImage(Be,Be.offsetWidth/2,Be.offsetHeight/2),setTimeout(()=>{try{document.body.removeChild(Be)}catch{}},100)},onDragEnd:$=>{$.currentTarget.classList.remove("mp-grabbing"),F.current=null},onClick:()=>d(P),children:i.jsxs("div",{className:"mp-lib-row",children:[i.jsx("span",{className:"mp-lib-icon",children:i.jsx(li,{type:P.type,size:30})}),i.jsxs("div",{className:"mp-lib-text",children:[i.jsx("span",{className:"mp-lib-name",children:P.name}),i.jsxs("div",{className:"mp-lib-meta",children:[i.jsx("span",{className:"mp-type-pill",children:P.type}),i.jsx("span",{className:"mp-lib-dur",children:P.duration}),i.jsx("span",{className:"mp-lib-diff",children:P.difficulty})]})]})]})},P.id)})]})]})]}),u&&i.jsx(ym,{workout:u,note:x[u.id]||"",onNoteChange:P=>h(_=>({..._,[u.id]:P})),onClose:()=>d(null),onAddToPlan:()=>{A(u),d(null)}})]})}const Je=window.self!==window.top;function bm(){const e=new URLSearchParams(window.location.search).get("view");return e==="admin"?"admin":e==="client"?"client":e==="confirm"?"confirm":e==="schedule"?"schedule":e==="food-journal"?"food-journal":e==="my-program"?"my-program":Je?null:"client"}function jm(){const[e,t]=E.useState(bm),[n,r]=E.useState(null),[o,l]=E.useState(null),[a,s]=E.useState(null),[u,d]=E.useState({}),[x,h]=E.useState(null),[m,j]=E.useState(null),[b,N]=E.useState(!Je),[B,f]=E.useState(!1),c=E.useRef(null);E.useEffect(()=>{let k;const D=()=>{clearTimeout(k),k=setTimeout(()=>{var T;const v=(T=c.current)==null?void 0:T.scrollHeight;v>0&&window.parent.postMessage({type:"abate-resize",height:v+40},"*")},50)},F=new ResizeObserver(D);c.current&&F.observe(c.current),D(),Je&&window.parent.postMessage({type:"abate-ready"},"*");const U=v=>{var T;if((T=v.data)!=null&&T.type){if(v.data.type==="abate-mode"&&t(v.data.mode),v.data.type==="abate-data"){const O=v.data.slots??null;if(r(O),O){const W={};Object.values(O).flat().forEach(Y=>{Y.userBookingId&&(W[Y.id]=Y.userBookingId)}),Object.keys(W).length>0&&d(Y=>({...W,...Y}))}}v.data.type==="abate-booked"&&d(O=>({...O,[v.data.slotId]:v.data.bookingId})),v.data.type==="abate-error"&&h({slotId:v.data.slotId,message:v.data.message}),v.data.type==="abate-confirm-data"&&l(v.data.slot??null),v.data.type==="abate-schedule-data"&&s(v.data.sessions??[]),v.data.type==="abate-prefs"&&(j(v.data.prefs??[]),N(!0)),v.data.type==="abate-prefs-saved"&&f(!1),v.data.type==="abate-prefs-error"&&f(!1)}};return window.addEventListener("message",U),()=>{clearTimeout(k),F.disconnect(),window.removeEventListener("message",U)}},[]);const p=E.useCallback(k=>{if(Je)switch(k.type){case"weekChange":window.parent.postMessage({type:"abate-week",mondayISO:k.mondayISO},"*");break;case"book":window.parent.postMessage({type:"abate-book",slotId:k.slot.id,slotData:k.slot.slotData,slotInfo:{day:k.slot.day,time:k.slot.time,service:k.slot.service}},"*");break;case"waitlist":window.parent.postMessage({type:"abate-waitlist",slotId:k.slot.id,slotData:k.slot.slotData,slotInfo:{day:k.slot.day,time:k.slot.time,service:k.slot.service}},"*");break;case"cancel":window.parent.postMessage({type:"abate-cancel",slotId:k.slotId,bookingId:u[k.slotId]},"*");break;case"mySchedule":window.parent.postMessage({type:"abate-my-schedule"},"*");break;case"leaveWaitlist":window.parent.postMessage({type:"abate-leave-waitlist",slotId:k.slotId},"*");break;case"savePrefs":f(!0),window.parent.postMessage({type:"abate-save-prefs",items:k.items},"*");break}},[u]),w=(()=>{const k=new URLSearchParams(window.location.search);return k.get("serviceId")?{serviceId:k.get("serviceId"),startDate:k.get("startDate"),endDate:k.get("endDate"),service:k.get("service"),day:k.get("day"),time:k.get("time")}:null})();let z;return e==="confirm"?z=i.jsx(Vp,{slot:Je?o:w}):e==="food-journal"?z=i.jsx(rm,{}):e==="my-program"?z=i.jsx(km,{}):e==="schedule"?z=i.jsx(qp,{sessions:Je?a:[]}):e==="admin"?z=i.jsx(Up,{livePrefs:Je?m:null,loading:Je&&!b,onAction:p,saving:B}):e==="client"?z=i.jsx(Lp,{liveSlots:Je?n:null,loading:Je&&n===null,onAction:p,errorMsg:x,onErrorDismiss:()=>h(null)}):z=i.jsx("div",{style:{background:"#0B0B0C",minHeight:"600px"}}),i.jsx("div",{ref:c,children:z})}cl.createRoot(document.getElementById("root")).render(i.jsx(Bs.StrictMode,{children:i.jsx(jm,{})}));
