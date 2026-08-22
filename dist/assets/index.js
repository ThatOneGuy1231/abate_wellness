(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var js={exports:{}},xo={},Ss={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Uc=Symbol.for("react.portal"),Hc=Symbol.for("react.fragment"),Vc=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),Yc=Symbol.for("react.provider"),Kc=Symbol.for("react.context"),Gc=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),Jc=Symbol.for("react.memo"),Zc=Symbol.for("react.lazy"),ta=Symbol.iterator;function qc(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var Ns={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cs=Object.assign,Es={};function yn(e,t,n){this.props=e,this.context=t,this.refs=Es,this.updater=n||Ns}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zs(){}zs.prototype=yn.prototype;function ri(e,t,n){this.props=e,this.context=t,this.refs=Es,this.updater=n||Ns}var oi=ri.prototype=new zs;oi.constructor=ri;Cs(oi,yn.prototype);oi.isPureReactComponent=!0;var na=Array.isArray,Ms=Object.prototype.hasOwnProperty,li={current:null},Ps={key:!0,ref:!0,__self:!0,__source:!0};function _s(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Ms.call(t,r)&&!Ps.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:cr,type:e,key:l,ref:i,props:o,_owner:li.current}}function ed(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ii(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function td(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ra=/\/+/g;function To(e,t){return typeof e=="object"&&e!==null&&e.key!=null?td(""+e.key):t.toString(36)}function Lr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case cr:case Uc:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+To(i,0):r,na(o)?(n="",e!=null&&(n=e.replace(ra,"$&/")+"/"),Lr(o,t,n,"",function(d){return d})):o!=null&&(ii(o)&&(o=ed(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ra,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",na(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+To(l,s);i+=Lr(l,t,n,u,o)}else if(u=qc(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+To(l,s++),i+=Lr(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function gr(e,t,n){if(e==null)return e;var r=[],o=0;return Lr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function nd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Tr={transition:null},rd={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:li};function Fs(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!ii(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=yn;U.Fragment=Hc;U.Profiler=Qc;U.PureComponent=ri;U.StrictMode=Vc;U.Suspense=Xc;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rd;U.act=Fs;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cs({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=li.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ms.call(t,u)&&!Ps.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:cr,type:e.type,key:o,ref:l,props:r,_owner:i}};U.createContext=function(e){return e={$$typeof:Kc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yc,_context:e},e.Consumer=e};U.createElement=_s;U.createFactory=function(e){var t=_s.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Gc,render:e}};U.isValidElement=ii;U.lazy=function(e){return{$$typeof:Zc,_payload:{_status:-1,_result:e},_init:nd}};U.memo=function(e,t){return{$$typeof:Jc,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=t}};U.unstable_act=Fs;U.useCallback=function(e,t){return we.current.useCallback(e,t)};U.useContext=function(e){return we.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return we.current.useDeferredValue(e)};U.useEffect=function(e,t){return we.current.useEffect(e,t)};U.useId=function(){return we.current.useId()};U.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return we.current.useMemo(e,t)};U.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};U.useRef=function(e){return we.current.useRef(e)};U.useState=function(e){return we.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return we.current.useTransition()};U.version="18.3.1";Ss.exports=U;var E=Ss.exports;const Ds=Wc(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od=E,ld=Symbol.for("react.element"),id=Symbol.for("react.fragment"),ad=Object.prototype.hasOwnProperty,sd=od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ud={key:!0,ref:!0,__self:!0,__source:!0};function Ls(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)ad.call(t,r)&&!ud.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ld,type:e,key:l,ref:i,props:o,_owner:sd.current}}xo.Fragment=id;xo.jsx=Ls;xo.jsxs=Ls;js.exports=xo;var a=js.exports,sl={},Ts={exports:{}},_e={},Is={exports:{}},Rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(h,P){var y=h.length;h.push(P);e:for(;0<y;){var D=y-1>>>1,O=h[D];if(0<o(O,P))h[D]=P,h[y]=O,y=D;else break e}}function n(h){return h.length===0?null:h[0]}function r(h){if(h.length===0)return null;var P=h[0],y=h.pop();if(y!==P){h[0]=y;e:for(var D=0,O=h.length,M=O>>>1;D<M;){var A=2*(D+1)-1,H=h[A],V=A+1,pe=h[V];if(0>o(H,y))V<O&&0>o(pe,H)?(h[D]=pe,h[V]=y,D=V):(h[D]=H,h[A]=y,D=A);else if(V<O&&0>o(pe,y))h[D]=pe,h[V]=y,D=V;else break e}}return P}function o(h,P){var y=h.sortIndex-P.sortIndex;return y!==0?y:h.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],d=[],x=1,g=null,m=3,j=!1,b=!1,N=!1,$=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(h){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=h)r(d),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(d)}}function w(h){if(N=!1,p(h),!b)if(n(u)!==null)b=!0,C(z);else{var P=n(d);P!==null&&T(w,P.startTime-h)}}function z(h,P){b=!1,N&&(N=!1,f(_),_=-1),j=!0;var y=m;try{for(p(P),g=n(u);g!==null&&(!(g.expirationTime>P)||h&&!I());){var D=g.callback;if(typeof D=="function"){g.callback=null,m=g.priorityLevel;var O=D(g.expirationTime<=P);P=e.unstable_now(),typeof O=="function"?g.callback=O:g===n(u)&&r(u),p(P)}else r(u);g=n(u)}if(g!==null)var M=!0;else{var A=n(d);A!==null&&T(w,A.startTime-P),M=!1}return M}finally{g=null,m=y,j=!1}}var k=!1,F=null,_=-1,B=5,v=-1;function I(){return!(e.unstable_now()-v<B)}function R(){if(F!==null){var h=e.unstable_now();v=h;var P=!0;try{P=F(!0,h)}finally{P?W():(k=!1,F=null)}}else k=!1}var W;if(typeof c=="function")W=function(){c(R)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ue=G.port2;G.port1.onmessage=R,W=function(){ue.postMessage(null)}}else W=function(){$(R,0)};function C(h){F=h,k||(k=!0,W())}function T(h,P){_=$(function(){h(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(h){h.callback=null},e.unstable_continueExecution=function(){b||j||(b=!0,C(z))},e.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<h?Math.floor(1e3/h):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(h){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var y=m;m=P;try{return h()}finally{m=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(h,P){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var y=m;m=h;try{return P()}finally{m=y}},e.unstable_scheduleCallback=function(h,P,y){var D=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?D+y:D):y=D,h){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=y+O,h={id:x++,callback:P,priorityLevel:h,startTime:y,expirationTime:O,sortIndex:-1},y>D?(h.sortIndex=y,t(d,h),n(u)===null&&h===n(d)&&(N?(f(_),_=-1):N=!0,T(w,y-D))):(h.sortIndex=O,t(u,h),b||j||(b=!0,C(z))),h},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(h){var P=m;return function(){var y=m;m=P;try{return h.apply(this,arguments)}finally{m=y}}}})(Rs);Is.exports=Rs;var cd=Is.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd=E,Pe=cd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Os=new Set,Yn={};function Ut(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)Os.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=Object.prototype.hasOwnProperty,fd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oa={},la={};function pd(e){return ul.call(la,e)?!0:ul.call(oa,e)?!1:fd.test(e)?la[e]=!0:(oa[e]=!0,!1)}function md(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gd(e,t,n,r){if(t===null||typeof t>"u"||md(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var ai=/[\-:]([a-z])/g;function si(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ai,si);fe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ai,si);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ai,si);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function ui(e,t,n,r){var o=fe.hasOwnProperty(t)?fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gd(t,n,o,r)&&(n=null),r||o===null?pd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),ci=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),As=Symbol.for("react.provider"),$s=Symbol.for("react.context"),di=Symbol.for("react.forward_ref"),dl=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),fi=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),Bs=Symbol.for("react.offscreen"),ia=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=ia&&e[ia]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Io;function Dn(e){if(Io===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Io=t&&t[1]||""}return`
`+Io+e}var Ro=!1;function Oo(e,t){if(!e||Ro)return"";Ro=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Ro=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function hd(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=Oo(e.type,!1),e;case 11:return e=Oo(e.type.render,!1),e;case 1:return e=Oo(e.type,!0),e;default:return""}}function pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Yt:return"Portal";case cl:return"Profiler";case ci:return"StrictMode";case dl:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $s:return(e.displayName||"Context")+".Consumer";case As:return(e._context.displayName||"Context")+".Provider";case di:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fi:return t=e.displayName||null,t!==null?t:pl(e.type)||"Memo";case ct:t=e._payload,e=e._init;try{return pl(e(t))}catch{}}return null}function vd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(t);case 8:return t===ci?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xd(e){var t=Ws(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=xd(e))}function Us(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ws(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=St(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hs(e,t){t=t.checked,t!=null&&ui(e,"checked",t,!1)}function gl(e,t){Hs(e,t);var n=St(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||Yr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Ln(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:St(n)}}function Vs(e,t){var n=St(t.value),r=St(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Ys=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yd=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){yd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function Ks(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function Gs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ks(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var wd=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yl(e,t){if(t){if(wd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kl=null;function pi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,an=null,sn=null;function da(e){if(e=pr(e)){if(typeof bl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=jo(t),bl(e.stateNode,e.type,t))}}function Xs(e){an?sn?sn.push(e):sn=[e]:an=e}function Js(){if(an){var e=an,t=sn;if(sn=an=null,da(e),t)for(e=0;e<t.length;e++)da(t[e])}}function Zs(e,t){return e(t)}function qs(){}var Ao=!1;function eu(e,t,n){if(Ao)return e(t,n);Ao=!0;try{return Zs(e,t,n)}finally{Ao=!1,(an!==null||sn!==null)&&(qs(),Js())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var jl=!1;if(ot)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){jl=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{jl=!1}function kd(e,t,n,r,o,l,i,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(x){this.onError(x)}}var On=!1,Kr=null,Gr=!1,Sl=null,bd={onError:function(e){On=!0,Kr=e}};function jd(e,t,n,r,o,l,i,s,u){On=!1,Kr=null,kd.apply(bd,arguments)}function Sd(e,t,n,r,o,l,i,s,u){if(jd.apply(this,arguments),On){if(On){var d=Kr;On=!1,Kr=null}else throw Error(S(198));Gr||(Gr=!0,Sl=d)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fa(e){if(Ht(e)!==e)throw Error(S(188))}function Nd(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return fa(o),e;if(l===r)return fa(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function nu(e){return e=Nd(e),e!==null?ru(e):null}function ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ru(e);if(t!==null)return t;e=e.sibling}return null}var ou=Pe.unstable_scheduleCallback,pa=Pe.unstable_cancelCallback,Cd=Pe.unstable_shouldYield,Ed=Pe.unstable_requestPaint,re=Pe.unstable_now,zd=Pe.unstable_getCurrentPriorityLevel,mi=Pe.unstable_ImmediatePriority,lu=Pe.unstable_UserBlockingPriority,Xr=Pe.unstable_NormalPriority,Md=Pe.unstable_LowPriority,iu=Pe.unstable_IdlePriority,yo=null,Xe=null;function Pd(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Dd,_d=Math.log,Fd=Math.LN2;function Dd(e){return e>>>=0,e===0?32:31-(_d(e)/Fd|0)|0}var yr=64,wr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=Tn(s):(l&=i,l!==0&&(r=Tn(l)))}else i=n&~o,i!==0?r=Tn(i):l!==0&&(r=Tn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),o=1<<n,r|=e[n],t&=~o;return r}function Ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Td(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ue(l),s=1<<i,u=o[i];u===-1?(!(s&n)||s&r)&&(o[i]=Ld(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function Nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function au(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function $o(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function Id(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ue(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function gi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Y=0;function su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uu,hi,cu,du,fu,Cl=!1,kr=[],ht=null,vt=null,xt=null,Xn=new Map,Jn=new Map,ft=[],Rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ma(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function Nn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=pr(t),t!==null&&hi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Od(e,t,n,r,o){switch(t){case"focusin":return ht=Nn(ht,e,t,n,r,o),!0;case"dragenter":return vt=Nn(vt,e,t,n,r,o),!0;case"mouseover":return xt=Nn(xt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Xn.set(l,Nn(Xn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Jn.set(l,Nn(Jn.get(l)||null,e,t,n,r,o)),!0}return!1}function pu(e){var t=Ft(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=tu(n),t!==null){e.blockedOn=t,fu(e.priority,function(){cu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kl=r,n.target.dispatchEvent(r),kl=null}else return t=pr(n),t!==null&&hi(t),e.blockedOn=n,!1;t.shift()}return!0}function ga(e,t,n){Ir(e)&&n.delete(t)}function Ad(){Cl=!1,ht!==null&&Ir(ht)&&(ht=null),vt!==null&&Ir(vt)&&(vt=null),xt!==null&&Ir(xt)&&(xt=null),Xn.forEach(ga),Jn.forEach(ga)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Ad)))}function Zn(e){function t(o){return Cn(o,e)}if(0<kr.length){Cn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&Cn(ht,e),vt!==null&&Cn(vt,e),xt!==null&&Cn(xt,e),Xn.forEach(t),Jn.forEach(t),n=0;n<ft.length;n++)r=ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ft.length&&(n=ft[0],n.blockedOn===null);)pu(n),n.blockedOn===null&&ft.shift()}var un=st.ReactCurrentBatchConfig,Zr=!0;function $d(e,t,n,r){var o=Y,l=un.transition;un.transition=null;try{Y=1,vi(e,t,n,r)}finally{Y=o,un.transition=l}}function Bd(e,t,n,r){var o=Y,l=un.transition;un.transition=null;try{Y=4,vi(e,t,n,r)}finally{Y=o,un.transition=l}}function vi(e,t,n,r){if(Zr){var o=El(e,t,n,r);if(o===null)Xo(e,t,r,qr,n),ma(e,r);else if(Od(o,e,t,n,r))r.stopPropagation();else if(ma(e,r),t&4&&-1<Rd.indexOf(e)){for(;o!==null;){var l=pr(o);if(l!==null&&uu(l),l=El(e,t,n,r),l===null&&Xo(e,t,r,qr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Xo(e,t,r,null,n)}}var qr=null;function El(e,t,n,r){if(qr=null,e=pi(r),e=Ft(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zd()){case mi:return 1;case lu:return 4;case Xr:case Md:return 16;case iu:return 536870912;default:return 16}default:return 16}}var mt=null,xi=null,Rr=null;function gu(){if(Rr)return Rr;var e,t=xi,n=t.length,r,o="value"in mt?mt.value:mt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Rr=o.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function ha(){return!1}function Fe(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?br:ha,this.isPropagationStopped=ha,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yi=Fe(wn),fr=te({},wn,{view:0,detail:0}),Wd=Fe(fr),Bo,Wo,En,wo=te({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Bo=e.screenX-En.screenX,Wo=e.screenY-En.screenY):Wo=Bo=0,En=e),Bo)},movementY:function(e){return"movementY"in e?e.movementY:Wo}}),va=Fe(wo),Ud=te({},wo,{dataTransfer:0}),Hd=Fe(Ud),Vd=te({},fr,{relatedTarget:0}),Uo=Fe(Vd),Qd=te({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Yd=Fe(Qd),Kd=te({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gd=Fe(Kd),Xd=te({},wn,{data:0}),xa=Fe(Xd),Jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ef(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qd[e])?!!t[e]:!1}function wi(){return ef}var tf=te({},fr,{key:function(e){if(e.key){var t=Jd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wi,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nf=Fe(tf),rf=te({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=Fe(rf),of=te({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wi}),lf=Fe(of),af=te({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),sf=Fe(af),uf=te({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cf=Fe(uf),df=[9,13,27,32],ki=ot&&"CompositionEvent"in window,An=null;ot&&"documentMode"in document&&(An=document.documentMode);var ff=ot&&"TextEvent"in window&&!An,hu=ot&&(!ki||An&&8<An&&11>=An),wa=" ",ka=!1;function vu(e,t){switch(e){case"keyup":return df.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function pf(e,t){switch(e){case"compositionend":return xu(t);case"keypress":return t.which!==32?null:(ka=!0,wa);case"textInput":return e=t.data,e===wa&&ka?null:e;default:return null}}function mf(e,t){if(Gt)return e==="compositionend"||!ki&&vu(e,t)?(e=gu(),Rr=xi=mt=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hu&&t.locale!=="ko"?null:t.data;default:return null}}var gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gf[e.type]:t==="textarea"}function yu(e,t,n,r){Xs(r),t=eo(t,"onChange"),0<t.length&&(n=new yi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,qn=null;function hf(e){Pu(e,0)}function ko(e){var t=Zt(e);if(Us(t))return e}function vf(e,t){if(e==="change")return t}var wu=!1;if(ot){var Ho;if(ot){var Vo="oninput"in document;if(!Vo){var ja=document.createElement("div");ja.setAttribute("oninput","return;"),Vo=typeof ja.oninput=="function"}Ho=Vo}else Ho=!1;wu=Ho&&(!document.documentMode||9<document.documentMode)}function Sa(){$n&&($n.detachEvent("onpropertychange",ku),qn=$n=null)}function ku(e){if(e.propertyName==="value"&&ko(qn)){var t=[];yu(t,qn,e,pi(e)),eu(hf,t)}}function xf(e,t,n){e==="focusin"?(Sa(),$n=t,qn=n,$n.attachEvent("onpropertychange",ku)):e==="focusout"&&Sa()}function yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(qn)}function wf(e,t){if(e==="click")return ko(t)}function kf(e,t){if(e==="input"||e==="change")return ko(t)}function bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:bf;function er(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ul.call(t,o)||!Ve(e[o],t[o]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ju(){for(var e=window,t=Yr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yr(e.document)}return t}function bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jf(e){var t=ju(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bu(n.ownerDocument.documentElement,n)){if(r!==null&&bi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ca(n,l);var i=Ca(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sf=ot&&"documentMode"in document&&11>=document.documentMode,Xt=null,zl=null,Bn=null,Ml=!1;function Ea(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ml||Xt==null||Xt!==Yr(r)||(r=Xt,"selectionStart"in r&&bi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&er(Bn,r)||(Bn=r,r=eo(zl,"onSelect"),0<r.length&&(t=new yi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Qo={},Su={};ot&&(Su=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function bo(e){if(Qo[e])return Qo[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Su)return Qo[e]=t[n];return e}var Nu=bo("animationend"),Cu=bo("animationiteration"),Eu=bo("animationstart"),zu=bo("transitionend"),Mu=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){Mu.set(e,t),Ut(t,[e])}for(var Yo=0;Yo<za.length;Yo++){var Ko=za[Yo],Nf=Ko.toLowerCase(),Cf=Ko[0].toUpperCase()+Ko.slice(1);Ct(Nf,"on"+Cf)}Ct(Nu,"onAnimationEnd");Ct(Cu,"onAnimationIteration");Ct(Eu,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(zu,"onTransitionEnd");fn("onMouseEnter",["mouseout","mouseover"]);fn("onMouseLeave",["mouseout","mouseover"]);fn("onPointerEnter",["pointerout","pointerover"]);fn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function Ma(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Sd(r,t,void 0,e),e.currentTarget=null}function Pu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==l&&o.isPropagationStopped())break e;Ma(o,s,d),l=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,d=s.currentTarget,s=s.listener,u!==l&&o.isPropagationStopped())break e;Ma(o,s,d),l=u}}}if(Gr)throw e=Sl,Gr=!1,Sl=null,e}function X(e,t){var n=t[Ll];n===void 0&&(n=t[Ll]=new Set);var r=e+"__bubble";n.has(r)||(_u(t,e,2,!1),n.add(r))}function Go(e,t,n){var r=0;t&&(r|=4),_u(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Sr]){e[Sr]=!0,Os.forEach(function(n){n!=="selectionchange"&&(Ef.has(n)||Go(n,!1,e),Go(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Go("selectionchange",!1,t))}}function _u(e,t,n,r){switch(mu(t)){case 1:var o=$d;break;case 4:o=Bd;break;default:o=vi}n=o.bind(null,t,n,e),o=void 0,!jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Xo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Ft(s),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}s=s.parentNode}}r=r.return}eu(function(){var d=l,x=pi(n),g=[];e:{var m=Mu.get(e);if(m!==void 0){var j=yi,b=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":j=nf;break;case"focusin":b="focus",j=Uo;break;case"focusout":b="blur",j=Uo;break;case"beforeblur":case"afterblur":j=Uo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=lf;break;case Nu:case Cu:case Eu:j=Yd;break;case zu:j=sf;break;case"scroll":j=Wd;break;case"wheel":j=cf;break;case"copy":case"cut":case"paste":j=Gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=ya}var N=(t&4)!==0,$=!N&&e==="scroll",f=N?m!==null?m+"Capture":null:m;N=[];for(var c=d,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Gn(c,f),w!=null&&N.push(nr(c,w,p)))),$)break;c=c.return}0<N.length&&(m=new j(m,b,null,n,x),g.push({event:m,listeners:N}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",m&&n!==kl&&(b=n.relatedTarget||n.fromElement)&&(Ft(b)||b[lt]))break e;if((j||m)&&(m=x.window===x?x:(m=x.ownerDocument)?m.defaultView||m.parentWindow:window,j?(b=n.relatedTarget||n.toElement,j=d,b=b?Ft(b):null,b!==null&&($=Ht(b),b!==$||b.tag!==5&&b.tag!==6)&&(b=null)):(j=null,b=d),j!==b)){if(N=va,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(N=ya,w="onPointerLeave",f="onPointerEnter",c="pointer"),$=j==null?m:Zt(j),p=b==null?m:Zt(b),m=new N(w,c+"leave",j,n,x),m.target=$,m.relatedTarget=p,w=null,Ft(x)===d&&(N=new N(f,c+"enter",b,n,x),N.target=p,N.relatedTarget=$,w=N),$=w,j&&b)t:{for(N=j,f=b,c=0,p=N;p;p=Vt(p))c++;for(p=0,w=f;w;w=Vt(w))p++;for(;0<c-p;)N=Vt(N),c--;for(;0<p-c;)f=Vt(f),p--;for(;c--;){if(N===f||f!==null&&N===f.alternate)break t;N=Vt(N),f=Vt(f)}N=null}else N=null;j!==null&&Pa(g,m,j,N,!1),b!==null&&$!==null&&Pa(g,$,b,N,!0)}}e:{if(m=d?Zt(d):window,j=m.nodeName&&m.nodeName.toLowerCase(),j==="select"||j==="input"&&m.type==="file")var z=vf;else if(ba(m))if(wu)z=kf;else{z=yf;var k=xf}else(j=m.nodeName)&&j.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=wf);if(z&&(z=z(e,d))){yu(g,z,n,x);break e}k&&k(e,m,d),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&hl(m,"number",m.value)}switch(k=d?Zt(d):window,e){case"focusin":(ba(k)||k.contentEditable==="true")&&(Xt=k,zl=d,Bn=null);break;case"focusout":Bn=zl=Xt=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,Ea(g,n,x);break;case"selectionchange":if(Sf)break;case"keydown":case"keyup":Ea(g,n,x)}var F;if(ki)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Gt?vu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(hu&&n.locale!=="ko"&&(Gt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Gt&&(F=gu()):(mt=x,xi="value"in mt?mt.value:mt.textContent,Gt=!0)),k=eo(d,_),0<k.length&&(_=new xa(_,e,null,n,x),g.push({event:_,listeners:k}),F?_.data=F:(F=xu(n),F!==null&&(_.data=F)))),(F=ff?pf(e,n):mf(e,n))&&(d=eo(d,"onBeforeInput"),0<d.length&&(x=new xa("onBeforeInput","beforeinput",null,n,x),g.push({event:x,listeners:d}),x.data=F))}Pu(g,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Gn(e,n),l!=null&&r.unshift(nr(e,l,o)),l=Gn(e,t),l!=null&&r.push(nr(e,l,o))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pa(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Gn(n,l),u!=null&&i.unshift(nr(n,u,s))):o||(u=Gn(n,l),u!=null&&i.push(nr(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var zf=/\r\n?/g,Mf=/\u0000|\uFFFD/g;function _a(e){return(typeof e=="string"?e:""+e).replace(zf,`
`).replace(Mf,"")}function Nr(e,t,n){if(t=_a(t),_a(e)!==t&&n)throw Error(S(425))}function to(){}var Pl=null,_l=null;function Fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dl=typeof setTimeout=="function"?setTimeout:void 0,Pf=typeof clearTimeout=="function"?clearTimeout:void 0,Fa=typeof Promise=="function"?Promise:void 0,_f=typeof queueMicrotask=="function"?queueMicrotask:typeof Fa<"u"?function(e){return Fa.resolve(null).then(e).catch(Ff)}:Dl;function Ff(e){setTimeout(function(){throw e})}function Jo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Zn(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Da(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+kn,rr="__reactProps$"+kn,lt="__reactContainer$"+kn,Ll="__reactEvents$"+kn,Df="__reactListeners$"+kn,Lf="__reactHandles$"+kn;function Ft(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Da(e);e!==null;){if(n=e[Ge])return n;e=Da(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[Ge]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function jo(e){return e[rr]||null}var Tl=[],qt=-1;function Et(e){return{current:e}}function J(e){0>qt||(e.current=Tl[qt],Tl[qt]=null,qt--)}function K(e,t){qt++,Tl[qt]=e.current,e.current=t}var Nt={},ve=Et(Nt),Se=Et(!1),Ot=Nt;function pn(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function no(){J(Se),J(ve)}function La(e,t,n){if(ve.current!==Nt)throw Error(S(168));K(ve,t),K(Se,n)}function Fu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,vd(e)||"Unknown",o));return te({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,Ot=ve.current,K(ve,e),K(Se,Se.current),!0}function Ta(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Fu(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,J(Se),J(ve),K(ve,e)):J(Se),K(Se,n)}var et=null,So=!1,Zo=!1;function Du(e){et===null?et=[e]:et.push(e)}function Tf(e){So=!0,Du(e)}function zt(){if(!Zo&&et!==null){Zo=!0;var e=0,t=Y;try{var n=et;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}et=null,So=!1}catch(o){throw et!==null&&(et=et.slice(e+1)),ou(mi,zt),o}finally{Y=t,Zo=!1}}return null}var en=[],tn=0,oo=null,lo=0,De=[],Le=0,At=null,tt=1,nt="";function Mt(e,t){en[tn++]=lo,en[tn++]=oo,oo=e,lo=t}function Lu(e,t,n){De[Le++]=tt,De[Le++]=nt,De[Le++]=At,At=e;var r=tt;e=nt;var o=32-Ue(r)-1;r&=~(1<<o),n+=1;var l=32-Ue(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,tt=1<<32-Ue(t)+o|n<<o|r,nt=l+e}else tt=1<<l|n<<o|r,nt=e}function ji(e){e.return!==null&&(Mt(e,1),Lu(e,1,0))}function Si(e){for(;e===oo;)oo=en[--tn],en[tn]=null,lo=en[--tn],en[tn]=null;for(;e===At;)At=De[--Le],De[Le]=null,nt=De[--Le],De[Le]=null,tt=De[--Le],De[Le]=null}var Me=null,ze=null,Z=!1,We=null;function Tu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ia(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,ze=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=At!==null?{id:tt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,ze=null,!0):!1;default:return!1}}function Il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(Z){var t=ze;if(t){var n=t;if(!Ia(e,t)){if(Il(e))throw Error(S(418));t=yt(n.nextSibling);var r=Me;t&&Ia(e,t)?Tu(r,n):(e.flags=e.flags&-4097|2,Z=!1,Me=e)}}else{if(Il(e))throw Error(S(418));e.flags=e.flags&-4097|2,Z=!1,Me=e}}}function Ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function Cr(e){if(e!==Me)return!1;if(!Z)return Ra(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fl(e.type,e.memoizedProps)),t&&(t=ze)){if(Il(e))throw Iu(),Error(S(418));for(;t;)Tu(e,t),t=yt(t.nextSibling)}if(Ra(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Me?yt(e.stateNode.nextSibling):null;return!0}function Iu(){for(var e=ze;e;)e=yt(e.nextSibling)}function mn(){ze=Me=null,Z=!1}function Ni(e){We===null?We=[e]:We.push(e)}var If=st.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Er(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oa(e){var t=e._init;return t(e._payload)}function Ru(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=jt(f,c),f.index=0,f.sibling=null,f}function l(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,w){return c===null||c.tag!==6?(c=ll(p,f.mode,w),c.return=f,c):(c=o(c,p),c.return=f,c)}function u(f,c,p,w){var z=p.type;return z===Kt?x(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ct&&Oa(z)===c.type)?(w=o(c,p.props),w.ref=zn(f,c,p),w.return=f,w):(w=Vr(p.type,p.key,p.props,null,f.mode,w),w.ref=zn(f,c,p),w.return=f,w)}function d(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=il(p,f.mode,w),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function x(f,c,p,w,z){return c===null||c.tag!==7?(c=It(p,f.mode,w,z),c.return=f,c):(c=o(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ll(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case hr:return p=Vr(c.type,c.key,c.props,null,f.mode,p),p.ref=zn(f,null,c),p.return=f,p;case Yt:return c=il(c,f.mode,p),c.return=f,c;case ct:var w=c._init;return g(f,w(c._payload),p)}if(Ln(c)||jn(c))return c=It(c,f.mode,p,null),c.return=f,c;Er(f,c)}return null}function m(f,c,p,w){var z=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return z!==null?null:s(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===z?u(f,c,p,w):null;case Yt:return p.key===z?d(f,c,p,w):null;case ct:return z=p._init,m(f,c,z(p._payload),w)}if(Ln(p)||jn(p))return z!==null?null:x(f,c,p,w,null);Er(f,p)}return null}function j(f,c,p,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,s(c,f,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case hr:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,z);case Yt:return f=f.get(w.key===null?p:w.key)||null,d(c,f,w,z);case ct:var k=w._init;return j(f,c,p,k(w._payload),z)}if(Ln(w)||jn(w))return f=f.get(p)||null,x(c,f,w,z,null);Er(c,w)}return null}function b(f,c,p,w){for(var z=null,k=null,F=c,_=c=0,B=null;F!==null&&_<p.length;_++){F.index>_?(B=F,F=null):B=F.sibling;var v=m(f,F,p[_],w);if(v===null){F===null&&(F=B);break}e&&F&&v.alternate===null&&t(f,F),c=l(v,c,_),k===null?z=v:k.sibling=v,k=v,F=B}if(_===p.length)return n(f,F),Z&&Mt(f,_),z;if(F===null){for(;_<p.length;_++)F=g(f,p[_],w),F!==null&&(c=l(F,c,_),k===null?z=F:k.sibling=F,k=F);return Z&&Mt(f,_),z}for(F=r(f,F);_<p.length;_++)B=j(F,f,_,p[_],w),B!==null&&(e&&B.alternate!==null&&F.delete(B.key===null?_:B.key),c=l(B,c,_),k===null?z=B:k.sibling=B,k=B);return e&&F.forEach(function(I){return t(f,I)}),Z&&Mt(f,_),z}function N(f,c,p,w){var z=jn(p);if(typeof z!="function")throw Error(S(150));if(p=z.call(p),p==null)throw Error(S(151));for(var k=z=null,F=c,_=c=0,B=null,v=p.next();F!==null&&!v.done;_++,v=p.next()){F.index>_?(B=F,F=null):B=F.sibling;var I=m(f,F,v.value,w);if(I===null){F===null&&(F=B);break}e&&F&&I.alternate===null&&t(f,F),c=l(I,c,_),k===null?z=I:k.sibling=I,k=I,F=B}if(v.done)return n(f,F),Z&&Mt(f,_),z;if(F===null){for(;!v.done;_++,v=p.next())v=g(f,v.value,w),v!==null&&(c=l(v,c,_),k===null?z=v:k.sibling=v,k=v);return Z&&Mt(f,_),z}for(F=r(f,F);!v.done;_++,v=p.next())v=j(F,f,_,v.value,w),v!==null&&(e&&v.alternate!==null&&F.delete(v.key===null?_:v.key),c=l(v,c,_),k===null?z=v:k.sibling=v,k=v);return e&&F.forEach(function(R){return t(f,R)}),Z&&Mt(f,_),z}function $(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Kt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var z=p.key,k=c;k!==null;){if(k.key===z){if(z=p.type,z===Kt){if(k.tag===7){n(f,k.sibling),c=o(k,p.props.children),c.return=f,f=c;break e}}else if(k.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ct&&Oa(z)===k.type){n(f,k.sibling),c=o(k,p.props),c.ref=zn(f,k,p),c.return=f,f=c;break e}n(f,k);break}else t(f,k);k=k.sibling}p.type===Kt?(c=It(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=Vr(p.type,p.key,p.props,null,f.mode,w),w.ref=zn(f,c,p),w.return=f,f=w)}return i(f);case Yt:e:{for(k=p.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=il(p,f.mode,w),c.return=f,f=c}return i(f);case ct:return k=p._init,$(f,c,k(p._payload),w)}if(Ln(p))return b(f,c,p,w);if(jn(p))return N(f,c,p,w);Er(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,p),c.return=f,f=c):(n(f,c),c=ll(p,f.mode,w),c.return=f,f=c),i(f)):n(f,c)}return $}var gn=Ru(!0),Ou=Ru(!1),io=Et(null),ao=null,nn=null,Ci=null;function Ei(){Ci=nn=ao=null}function zi(e){var t=io.current;J(io),e._currentValue=t}function Ol(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cn(e,t){ao=e,Ci=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(ao===null)throw Error(S(308));nn=e,ao.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var Dt=null;function Mi(e){Dt===null?Dt=[e]:Dt.push(e)}function Au(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Mi(t)):(n.next=o.next,o.next=n),t.interleaved=n,it(e,r)}function it(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function Pi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,it(e,n)}return o=r.interleaved,o===null?(t.next=t,Mi(r)):(t.next=o.next,o.next=t),r.interleaved=t,it(e,n)}function Ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gi(e,n)}}function Aa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function so(e,t,n,r){var o=e.updateQueue;dt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,i===null?l=d:i.next=d,i=u;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==i&&(s===null?x.firstBaseUpdate=d:s.next=d,x.lastBaseUpdate=u))}if(l!==null){var g=o.baseState;i=0,x=d=u=null,s=l;do{var m=s.lane,j=s.eventTime;if((r&m)===m){x!==null&&(x=x.next={eventTime:j,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,N=s;switch(m=t,j=n,N.tag){case 1:if(b=N.payload,typeof b=="function"){g=b.call(j,g,m);break e}g=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=N.payload,m=typeof b=="function"?b.call(j,g,m):b,m==null)break e;g=te({},g,m);break e;case 2:dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else j={eventTime:j,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(d=x=j,u=g):x=x.next=j,i|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(x===null&&(u=g),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=x,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Bt|=i,e.lanes=i,e.memoizedState=g}}function $a(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var mr={},Je=Et(mr),or=Et(mr),lr=Et(mr);function Lt(e){if(e===mr)throw Error(S(174));return e}function _i(e,t){switch(K(lr,t),K(or,e),K(Je,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}J(Je),K(Je,t)}function hn(){J(Je),J(or),J(lr)}function Bu(e){Lt(lr.current);var t=Lt(Je.current),n=xl(t,e.type);t!==n&&(K(or,e),K(Je,n))}function Fi(e){or.current===e&&(J(Je),J(or))}var q=Et(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qo=[];function Di(){for(var e=0;e<qo.length;e++)qo[e]._workInProgressVersionPrimary=null;qo.length=0}var $r=st.ReactCurrentDispatcher,el=st.ReactCurrentBatchConfig,$t=0,ee=null,le=null,ae=null,co=!1,Wn=!1,ir=0,Rf=0;function me(){throw Error(S(321))}function Li(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function Ti(e,t,n,r,o,l){if($t=l,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$r.current=e===null||e.memoizedState===null?Bf:Wf,e=n(r,o),Wn){l=0;do{if(Wn=!1,ir=0,25<=l)throw Error(S(301));l+=1,ae=le=null,t.updateQueue=null,$r.current=Uf,e=n(r,o)}while(Wn)}if($r.current=fo,t=le!==null&&le.next!==null,$t=0,ae=le=ee=null,co=!1,t)throw Error(S(300));return e}function Ii(){var e=ir!==0;return ir=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?ee.memoizedState=ae=e:ae=ae.next=e,ae}function Oe(){if(le===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ae===null?ee.memoizedState:ae.next;if(t!==null)ae=t,le=e;else{if(e===null)throw Error(S(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ae===null?ee.memoizedState=ae=e:ae=ae.next=e}return ae}function ar(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,u=null,d=l;do{var x=d.lane;if(($t&x)===x)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:x,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,i=r):u=u.next=g,ee.lanes|=x,Bt|=x}d=d.next}while(d!==null&&d!==l);u===null?i=r:u.next=s,Ve(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ee.lanes|=l,Bt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ve(l,t.memoizedState)||(je=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Wu(){}function Uu(e,t){var n=ee,r=Oe(),o=t(),l=!Ve(r.memoizedState,o);if(l&&(r.memoizedState=o,je=!0),r=r.queue,Ri(Qu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,sr(9,Vu.bind(null,n,r,o,t),void 0,null),se===null)throw Error(S(349));$t&30||Hu(n,t,o)}return o}function Hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vu(e,t,n,r){t.value=n,t.getSnapshot=r,Yu(t)&&Ku(e)}function Qu(e,t,n){return n(function(){Yu(t)&&Ku(e)})}function Yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function Ku(e){var t=it(e,1);t!==null&&He(t,e,1,-1)}function Ba(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=$f.bind(null,ee,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gu(){return Oe().memoizedState}function Br(e,t,n,r){var o=Ke();ee.flags|=e,o.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function No(e,t,n,r){var o=Oe();r=r===void 0?null:r;var l=void 0;if(le!==null){var i=le.memoizedState;if(l=i.destroy,r!==null&&Li(r,i.deps)){o.memoizedState=sr(t,n,l,r);return}}ee.flags|=e,o.memoizedState=sr(1|t,n,l,r)}function Wa(e,t){return Br(8390656,8,e,t)}function Ri(e,t){return No(2048,8,e,t)}function Xu(e,t){return No(4,2,e,t)}function Ju(e,t){return No(4,4,e,t)}function Zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qu(e,t,n){return n=n!=null?n.concat([e]):null,No(4,4,Zu.bind(null,t,e),n)}function Oi(){}function ec(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Li(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Li(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function nc(e,t,n){return $t&21?(Ve(n,t)||(n=au(),ee.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function Of(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{Y=n,el.transition=r}}function rc(){return Oe().memoizedState}function Af(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oc(e))lc(t,n);else if(n=Au(e,t,n,r),n!==null){var o=ye();He(n,e,r,o),ic(n,t,r)}}function $f(e,t,n){var r=bt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oc(e))lc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,Ve(s,i)){var u=t.interleaved;u===null?(o.next=o,Mi(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Au(e,t,o,r),n!==null&&(o=ye(),He(n,e,r,o),ic(n,t,r))}}function oc(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function lc(e,t){Wn=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ic(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gi(e,n)}}var fo={readContext:Re,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Bf={readContext:Re,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,Zu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Af.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Ba,useDebugValue:Oi,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Ba(!1),t=e[0];return e=Of.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=Ke();if(Z){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),se===null)throw Error(S(349));$t&30||Hu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Wa(Qu.bind(null,r,l,e),[e]),r.flags|=2048,sr(9,Vu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ke(),t=se.identifierPrefix;if(Z){var n=nt,r=tt;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wf={readContext:Re,useCallback:ec,useContext:Re,useEffect:Ri,useImperativeHandle:qu,useInsertionEffect:Xu,useLayoutEffect:Ju,useMemo:tc,useReducer:tl,useRef:Gu,useState:function(){return tl(ar)},useDebugValue:Oi,useDeferredValue:function(e){var t=Oe();return nc(t,le.memoizedState,e)},useTransition:function(){var e=tl(ar)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Uu,useId:rc,unstable_isNewReconciler:!1},Uf={readContext:Re,useCallback:ec,useContext:Re,useEffect:Ri,useImperativeHandle:qu,useInsertionEffect:Xu,useLayoutEffect:Ju,useMemo:tc,useReducer:nl,useRef:Gu,useState:function(){return nl(ar)},useDebugValue:Oi,useDeferredValue:function(e){var t=Oe();return le===null?t.memoizedState=e:nc(t,le.memoizedState,e)},useTransition:function(){var e=nl(ar)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Uu,useId:rc,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=bt(e),l=rt(r,o);l.payload=t,n!=null&&(l.callback=n),t=wt(e,l,o),t!==null&&(He(t,e,o,r),Ar(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=bt(e),l=rt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=wt(e,l,o),t!==null&&(He(t,e,o,r),Ar(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=bt(e),o=rt(n,r);o.tag=2,t!=null&&(o.callback=t),t=wt(e,o,r),t!==null&&(He(t,e,r,n),Ar(t,e,r))}};function Ua(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(o,l):!0}function ac(e,t,n){var r=!1,o=Nt,l=t.contextType;return typeof l=="object"&&l!==null?l=Re(l):(o=Ne(t)?Ot:ve.current,r=t.contextTypes,l=(r=r!=null)?pn(e,o):Nt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ha(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function $l(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Pi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Re(l):(l=Ne(t)?Ot:ve.current,o.context=pn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Al(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Co.enqueueReplaceState(o,o.state,null),so(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=hd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hf=typeof WeakMap=="function"?WeakMap:Map;function sc(e,t,n){n=rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mo||(mo=!0,Jl=r),Bl(e,t)},n}function uc(e,t,n){n=rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(kt===null?kt=new Set([this]):kt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Va(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=op.bind(null,e,t,n),t.then(e,e))}function Qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ya(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rt(-1,1),t.tag=2,wt(n,t,1))),n.lanes|=1),e)}var Vf=st.ReactCurrentOwner,je=!1;function xe(e,t,n,r){t.child=e===null?Ou(t,null,n,r):gn(t,e.child,n,r)}function Ka(e,t,n,r,o){n=n.render;var l=t.ref;return cn(t,o),r=Ti(e,t,n,r,l,o),n=Ii(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,at(e,t,o)):(Z&&n&&ji(t),t.flags|=1,xe(e,t,r,o),t.child)}function Ga(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Qi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,cc(e,t,l,r,o)):(e=Vr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(i,r)&&e.ref===t.ref)return at(e,t,o)}return t.flags|=1,e=jt(l,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(er(l,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,at(e,t,o)}return Wl(e,t,n,r,o)}function dc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(on,Ee),Ee|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(on,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,K(on,Ee),Ee|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,K(on,Ee),Ee|=r;return xe(e,t,o,n),t.child}function fc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,n,r,o){var l=Ne(n)?Ot:ve.current;return l=pn(t,l),cn(t,o),n=Ti(e,t,n,r,l,o),r=Ii(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,at(e,t,o)):(Z&&r&&ji(t),t.flags|=1,xe(e,t,n,o),t.child)}function Xa(e,t,n,r,o){if(Ne(n)){var l=!0;ro(t)}else l=!1;if(cn(t,o),t.stateNode===null)Wr(e,t),ac(t,n,r),$l(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Re(d):(d=Ne(n)?Ot:ve.current,d=pn(t,d));var x=n.getDerivedStateFromProps,g=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ha(t,i,r,d),dt=!1;var m=t.memoizedState;i.state=m,so(t,r,i,o),u=t.memoizedState,s!==r||m!==u||Se.current||dt?(typeof x=="function"&&(Al(t,n,x,r),u=t.memoizedState),(s=dt||Ua(t,n,s,r,m,u,d))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,$u(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:$e(t.type,s),i.props=d,g=t.pendingProps,m=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Re(u):(u=Ne(n)?Ot:ve.current,u=pn(t,u));var j=n.getDerivedStateFromProps;(x=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==g||m!==u)&&Ha(t,i,r,u),dt=!1,m=t.memoizedState,i.state=m,so(t,r,i,o);var b=t.memoizedState;s!==g||m!==b||Se.current||dt?(typeof j=="function"&&(Al(t,n,j,r),b=t.memoizedState),(d=dt||Ua(t,n,d,r,m,b,u)||!1)?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,b,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,b,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),i.props=r,i.state=b,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ul(e,t,n,r,l,o)}function Ul(e,t,n,r,o,l){fc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ta(t,n,!1),at(e,t,l);r=t.stateNode,Vf.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=gn(t,e.child,null,l),t.child=gn(t,null,s,l)):xe(e,t,s,l),t.memoizedState=r.state,o&&Ta(t,n,!0),t.child}function pc(e){var t=e.stateNode;t.pendingContext?La(e,t.pendingContext,t.pendingContext!==t.context):t.context&&La(e,t.context,!1),_i(e,t.containerInfo)}function Ja(e,t,n,r,o){return mn(),Ni(o),t.flags|=256,xe(e,t,n,r),t.child}var Hl={dehydrated:null,treeContext:null,retryLane:0};function Vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function mc(e,t,n){var r=t.pendingProps,o=q.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(q,o&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Mo(i,r,0,null),e=It(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Vl(n),t.memoizedState=Hl,e):Ai(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Qf(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=jt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=jt(s,l):(l=It(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Vl(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Hl,r}return l=e.child,e=l.sibling,r=jt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ai(e,t){return t=Mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&Ni(r),gn(t,e.child,null,n),e=Ai(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(S(422))),zr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Mo({mode:"visible",children:r.children},o,0,null),l=It(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&gn(t,e.child,null,i),t.child.memoizedState=Vl(i),t.memoizedState=Hl,l);if(!(t.mode&1))return zr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(S(419)),r=rl(l,r,void 0),zr(e,t,i,r)}if(s=(i&e.childLanes)!==0,je||s){if(r=se,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,it(e,o),He(r,e,o,-1))}return Vi(),r=rl(Error(S(421))),zr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=lp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,ze=yt(o.nextSibling),Me=t,Z=!0,We=null,e!==null&&(De[Le++]=tt,De[Le++]=nt,De[Le++]=At,tt=e.id,nt=e.overflow,At=t),t=Ai(t,r.children),t.flags|=4096,t)}function Za(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ol(e.return,t,n)}function ol(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function gc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(xe(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Za(e,n,t);else if(e.tag===19)Za(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ol(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ol(t,!0,n,null,l);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function at(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yf(e,t,n){switch(t.tag){case 3:pc(t),mn();break;case 5:Bu(t);break;case 1:Ne(t.type)&&ro(t);break;case 4:_i(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(io,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?mc(e,t,n):(K(q,q.current&1),e=at(e,t,n),e!==null?e.sibling:null);K(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,dc(e,t,n)}return at(e,t,n)}var hc,Ql,vc,xc;hc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ql=function(){};vc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Lt(Je.current);var l=null;switch(n){case"input":o=ml(e,o),r=ml(e,r),l=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),l=[];break;case"textarea":o=vl(e,o),r=vl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}yl(n,r);var i;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Yn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&X("scroll",e),l||s===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};xc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kf(e,t,n){var r=t.pendingProps;switch(Si(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ne(t.type)&&no(),ge(t),null;case 3:return r=t.stateNode,hn(),J(Se),J(ve),Di(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(ei(We),We=null))),Ql(e,t),ge(t),null;case 5:Fi(t);var o=Lt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)vc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ge(t),null}if(e=Lt(Je.current),Cr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ge]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<In.length;o++)X(In[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":aa(r,l),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},X("invalid",r);break;case"textarea":ua(r,l),X("invalid",r)}yl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Nr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Nr(r.textContent,s,e),o=["children",""+s]):Yn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&X("scroll",r)}switch(n){case"input":vr(r),sa(r,l,!0);break;case"textarea":vr(r),ca(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=to)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ge]=t,e[rr]=r,hc(e,t,!1,!1),t.stateNode=e;e:{switch(i=wl(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<In.length;o++)X(In[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":aa(e,r),o=ml(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),X("invalid",e);break;case"textarea":ua(e,r),o=vl(e,r),X("invalid",e);break;default:o=r}yl(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Gs(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ys(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kn(e,u):typeof u=="number"&&Kn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&X("scroll",e):u!=null&&ui(e,l,u,i))}switch(n){case"input":vr(e),sa(e,r,!1);break;case"textarea":vr(e),ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ln(e,!!r.multiple,l,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)xc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Lt(lr.current),Lt(Je.current),Cr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(l=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:Nr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return ge(t),null;case 13:if(J(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&ze!==null&&t.mode&1&&!(t.flags&128))Iu(),mn(),t.flags|=98560,l=!1;else if(l=Cr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Ge]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),l=!1}else We!==null&&(ei(We),We=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ie===0&&(ie=3):Vi())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return hn(),Ql(e,t),e===null&&tr(t.stateNode.containerInfo),ge(t),null;case 10:return zi(t.type._context),ge(t),null;case 17:return Ne(t.type)&&no(),ge(t),null;case 19:if(J(q),l=t.memoizedState,l===null)return ge(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Mn(l,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=uo(e),i!==null){for(t.flags|=128,Mn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(q,q.current&1|2),t.child}e=e.sibling}l.tail!==null&&re()>xn&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304)}else{if(!r)if(e=uo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Z)return ge(t),null}else 2*re()-l.renderingStartTime>xn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=re(),t.sibling=null,n=q.current,K(q,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Hi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Gf(e,t){switch(Si(t),t.tag){case 1:return Ne(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),J(Se),J(ve),Di(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fi(t),null;case 13:if(J(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(q),null;case 4:return hn(),null;case 10:return zi(t.type._context),null;case 22:case 23:return Hi(),null;case 24:return null;default:return null}}var Mr=!1,he=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,L=null;function rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Yl(e,t,n){try{n()}catch(r){ne(e,t,r)}}var qa=!1;function Jf(e,t){if(Pl=Zr,e=ju(),bi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,d=0,x=0,g=e,m=null;t:for(;;){for(var j;g!==n||o!==0&&g.nodeType!==3||(s=i+o),g!==l||r!==0&&g.nodeType!==3||(u=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(j=g.firstChild)!==null;)m=g,g=j;for(;;){if(g===e)break t;if(m===n&&++d===o&&(s=i),m===l&&++x===r&&(u=i),(j=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=j}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_l={focusedElem:e,selectionRange:n},Zr=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var N=b.memoizedProps,$=b.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?N:$e(t.type,N),$);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ne(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return b=qa,qa=!1,b}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Yl(t,n,l)}o=o.next}while(o!==r)}}function Eo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yc(e){var t=e.alternate;t!==null&&(e.alternate=null,yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[rr],delete t[Ll],delete t[Df],delete t[Lf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wc(e){return e.tag===5||e.tag===3||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}var ce=null,Be=!1;function ut(e,t,n){for(n=n.child;n!==null;)kc(e,t,n),n=n.sibling}function kc(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:he||rn(n,t);case 6:var r=ce,o=Be;ce=null,ut(e,t,n),ce=r,Be=o,ce!==null&&(Be?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Be?(e=ce,n=n.stateNode,e.nodeType===8?Jo(e.parentNode,n):e.nodeType===1&&Jo(e,n),Zn(e)):Jo(ce,n.stateNode));break;case 4:r=ce,o=Be,ce=n.stateNode.containerInfo,Be=!0,ut(e,t,n),ce=r,Be=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Yl(n,t,i),o=o.next}while(o!==r)}ut(e,t,n);break;case 1:if(!he&&(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ne(n,t,s)}ut(e,t,n);break;case 21:ut(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,ut(e,t,n),he=r):ut(e,t,n);break;default:ut(e,t,n)}}function ts(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xf),t.forEach(function(r){var o=ip.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ce=s.stateNode,Be=!1;break e;case 3:ce=s.stateNode.containerInfo,Be=!0;break e;case 4:ce=s.stateNode.containerInfo,Be=!0;break e}s=s.return}if(ce===null)throw Error(S(160));kc(l,i,o),ce=null,Be=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){ne(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bc(t,e),t=t.sibling}function bc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Qe(e),r&4){try{Un(3,e,e.return),Eo(3,e)}catch(N){ne(e,e.return,N)}try{Un(5,e,e.return)}catch(N){ne(e,e.return,N)}}break;case 1:Ae(t,e),Qe(e),r&512&&n!==null&&rn(n,n.return);break;case 5:if(Ae(t,e),Qe(e),r&512&&n!==null&&rn(n,n.return),e.flags&32){var o=e.stateNode;try{Kn(o,"")}catch(N){ne(e,e.return,N)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Hs(o,l),wl(s,i);var d=wl(s,l);for(i=0;i<u.length;i+=2){var x=u[i],g=u[i+1];x==="style"?Gs(o,g):x==="dangerouslySetInnerHTML"?Ys(o,g):x==="children"?Kn(o,g):ui(o,x,g,d)}switch(s){case"input":gl(o,l);break;case"textarea":Vs(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var j=l.value;j!=null?ln(o,!!l.multiple,j,!1):m!==!!l.multiple&&(l.defaultValue!=null?ln(o,!!l.multiple,l.defaultValue,!0):ln(o,!!l.multiple,l.multiple?[]:"",!1))}o[rr]=l}catch(N){ne(e,e.return,N)}}break;case 6:if(Ae(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(N){ne(e,e.return,N)}}break;case 3:if(Ae(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(N){ne(e,e.return,N)}break;case 4:Ae(t,e),Qe(e);break;case 13:Ae(t,e),Qe(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Wi=re())),r&4&&ts(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(he=(d=he)||x,Ae(t,e),he=d):Ae(t,e),Qe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!x&&e.mode&1)for(L=e,x=e.child;x!==null;){for(g=L=x;L!==null;){switch(m=L,j=m.child,m.tag){case 0:case 11:case 14:case 15:Un(4,m,m.return);break;case 1:rn(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(N){ne(r,n,N)}}break;case 5:rn(m,m.return);break;case 22:if(m.memoizedState!==null){rs(g);continue}}j!==null?(j.return=m,L=j):rs(g)}x=x.sibling}e:for(x=null,g=e;;){if(g.tag===5){if(x===null){x=g;try{o=g.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=g.stateNode,u=g.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ks("display",i))}catch(N){ne(e,e.return,N)}}}else if(g.tag===6){if(x===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(N){ne(e,e.return,N)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;x===g&&(x=null),g=g.return}x===g&&(x=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ae(t,e),Qe(e),r&4&&ts(e);break;case 21:break;default:Ae(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Kn(o,""),r.flags&=-33);var l=es(e);Xl(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=es(e);Gl(e,s,i);break;default:throw Error(S(161))}}catch(u){ne(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zf(e,t,n){L=e,jc(e)}function jc(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Mr;if(!i){var s=o.alternate,u=s!==null&&s.memoizedState!==null||he;s=Mr;var d=he;if(Mr=i,(he=u)&&!d)for(L=o;L!==null;)i=L,u=i.child,i.tag===22&&i.memoizedState!==null?os(o):u!==null?(u.return=i,L=u):os(o);for(;l!==null;)L=l,jc(l),l=l.sibling;L=o,Mr=s,he=d}ns(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,L=l):ns(e)}}function ns(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Eo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&$a(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$a(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var x=d.memoizedState;if(x!==null){var g=x.dehydrated;g!==null&&Zn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}he||t.flags&512&&Kl(t)}catch(m){ne(t,t.return,m)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function rs(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function os(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Eo(4,t)}catch(u){ne(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ne(t,o,u)}}var l=t.return;try{Kl(t)}catch(u){ne(t,l,u)}break;case 5:var i=t.return;try{Kl(t)}catch(u){ne(t,i,u)}}}catch(u){ne(t,t.return,u)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var qf=Math.ceil,po=st.ReactCurrentDispatcher,$i=st.ReactCurrentOwner,Ie=st.ReactCurrentBatchConfig,Q=0,se=null,oe=null,de=0,Ee=0,on=Et(0),ie=0,ur=null,Bt=0,zo=0,Bi=0,Hn=null,be=null,Wi=0,xn=1/0,qe=null,mo=!1,Jl=null,kt=null,Pr=!1,gt=null,go=0,Vn=0,Zl=null,Ur=-1,Hr=0;function ye(){return Q&6?re():Ur!==-1?Ur:Ur=re()}function bt(e){return e.mode&1?Q&2&&de!==0?de&-de:If.transition!==null?(Hr===0&&(Hr=au()),Hr):(e=Y,e!==0||(e=window.event,e=e===void 0?16:mu(e.type)),e):1}function He(e,t,n,r){if(50<Vn)throw Vn=0,Zl=null,Error(S(185));dr(e,n,r),(!(Q&2)||e!==se)&&(e===se&&(!(Q&2)&&(zo|=n),ie===4&&pt(e,de)),Ce(e,r),n===1&&Q===0&&!(t.mode&1)&&(xn=re()+500,So&&zt()))}function Ce(e,t){var n=e.callbackNode;Td(e,t);var r=Jr(e,e===se?de:0);if(r===0)n!==null&&pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pa(n),t===1)e.tag===0?Tf(ls.bind(null,e)):Du(ls.bind(null,e)),_f(function(){!(Q&6)&&zt()}),n=null;else{switch(su(r)){case 1:n=mi;break;case 4:n=lu;break;case 16:n=Xr;break;case 536870912:n=iu;break;default:n=Xr}n=_c(n,Sc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sc(e,t){if(Ur=-1,Hr=0,Q&6)throw Error(S(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var r=Jr(e,e===se?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ho(e,r);else{t=r;var o=Q;Q|=2;var l=Cc();(se!==e||de!==t)&&(qe=null,xn=re()+500,Tt(e,t));do try{np();break}catch(s){Nc(e,s)}while(!0);Ei(),po.current=l,Q=o,oe!==null?t=0:(se=null,de=0,t=ie)}if(t!==0){if(t===2&&(o=Nl(e),o!==0&&(r=o,t=ql(e,o))),t===1)throw n=ur,Tt(e,0),pt(e,r),Ce(e,re()),n;if(t===6)pt(e,r);else{if(o=e.current.alternate,!(r&30)&&!ep(o)&&(t=ho(e,r),t===2&&(l=Nl(e),l!==0&&(r=l,t=ql(e,l))),t===1))throw n=ur,Tt(e,0),pt(e,r),Ce(e,re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Pt(e,be,qe);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=Wi+500-re(),10<t)){if(Jr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Dl(Pt.bind(null,e,be,qe),t);break}Pt(e,be,qe);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ue(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qf(r/1960))-r,10<r){e.timeoutHandle=Dl(Pt.bind(null,e,be,qe),r);break}Pt(e,be,qe);break;case 5:Pt(e,be,qe);break;default:throw Error(S(329))}}}return Ce(e,re()),e.callbackNode===n?Sc.bind(null,e):null}function ql(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=ho(e,t),e!==2&&(t=be,be=n,t!==null&&ei(t)),e}function ei(e){be===null?be=e:be.push.apply(be,e)}function ep(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ve(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~Bi,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function ls(e){if(Q&6)throw Error(S(327));dn();var t=Jr(e,0);if(!(t&1))return Ce(e,re()),null;var n=ho(e,t);if(e.tag!==0&&n===2){var r=Nl(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=ur,Tt(e,0),pt(e,t),Ce(e,re()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,be,qe),Ce(e,re()),null}function Ui(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(xn=re()+500,So&&zt())}}function Wt(e){gt!==null&&gt.tag===0&&!(Q&6)&&dn();var t=Q;Q|=1;var n=Ie.transition,r=Y;try{if(Ie.transition=null,Y=1,e)return e()}finally{Y=r,Ie.transition=n,Q=t,!(Q&6)&&zt()}}function Hi(){Ee=on.current,J(on)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pf(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Si(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:hn(),J(Se),J(ve),Di();break;case 5:Fi(r);break;case 4:hn();break;case 13:J(q);break;case 19:J(q);break;case 10:zi(r.type._context);break;case 22:case 23:Hi()}n=n.return}if(se=e,oe=e=jt(e.current,null),de=Ee=t,ie=0,ur=null,Bi=zo=Bt=0,be=Hn=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Dt=null}return e}function Nc(e,t){do{var n=oe;try{if(Ei(),$r.current=fo,co){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}co=!1}if($t=0,ae=le=ee=null,Wn=!1,ir=0,$i.current=null,n===null||n.return===null){ie=1,ur=t,oe=null;break}e:{var l=e,i=n.return,s=n,u=t;if(t=de,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,x=s,g=x.tag;if(!(x.mode&1)&&(g===0||g===11||g===15)){var m=x.alternate;m?(x.updateQueue=m.updateQueue,x.memoizedState=m.memoizedState,x.lanes=m.lanes):(x.updateQueue=null,x.memoizedState=null)}var j=Qa(i);if(j!==null){j.flags&=-257,Ya(j,i,s,l,t),j.mode&1&&Va(l,d,t),t=j,u=d;var b=t.updateQueue;if(b===null){var N=new Set;N.add(u),t.updateQueue=N}else b.add(u);break e}else{if(!(t&1)){Va(l,d,t),Vi();break e}u=Error(S(426))}}else if(Z&&s.mode&1){var $=Qa(i);if($!==null){!($.flags&65536)&&($.flags|=256),Ya($,i,s,l,t),Ni(vn(u,s));break e}}l=u=vn(u,s),ie!==4&&(ie=2),Hn===null?Hn=[l]:Hn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=sc(l,u,t);Aa(l,f);break e;case 1:s=u;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(kt===null||!kt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=uc(l,s,t);Aa(l,w);break e}}l=l.return}while(l!==null)}zc(n)}catch(z){t=z,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Cc(){var e=po.current;return po.current=fo,e===null?fo:e}function Vi(){(ie===0||ie===3||ie===2)&&(ie=4),se===null||!(Bt&268435455)&&!(zo&268435455)||pt(se,de)}function ho(e,t){var n=Q;Q|=2;var r=Cc();(se!==e||de!==t)&&(qe=null,Tt(e,t));do try{tp();break}catch(o){Nc(e,o)}while(!0);if(Ei(),Q=n,po.current=r,oe!==null)throw Error(S(261));return se=null,de=0,ie}function tp(){for(;oe!==null;)Ec(oe)}function np(){for(;oe!==null&&!Cd();)Ec(oe)}function Ec(e){var t=Pc(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?zc(e):oe=t,$i.current=null}function zc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gf(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,oe=null;return}}else if(n=Kf(n,t,Ee),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ie===0&&(ie=5)}function Pt(e,t,n){var r=Y,o=Ie.transition;try{Ie.transition=null,Y=1,rp(e,t,n,r)}finally{Ie.transition=o,Y=r}return null}function rp(e,t,n,r){do dn();while(gt!==null);if(Q&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Id(e,l),e===se&&(oe=se=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,_c(Xr,function(){return dn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ie.transition,Ie.transition=null;var i=Y;Y=1;var s=Q;Q|=4,$i.current=null,Jf(e,n),bc(n,e),jf(_l),Zr=!!Pl,_l=Pl=null,e.current=n,Zf(n),Ed(),Q=s,Y=i,Ie.transition=l}else e.current=n;if(Pr&&(Pr=!1,gt=e,go=o),l=e.pendingLanes,l===0&&(kt=null),Pd(n.stateNode),Ce(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(mo)throw mo=!1,e=Jl,Jl=null,e;return go&1&&e.tag!==0&&dn(),l=e.pendingLanes,l&1?e===Zl?Vn++:(Vn=0,Zl=e):Vn=0,zt(),null}function dn(){if(gt!==null){var e=su(go),t=Ie.transition,n=Y;try{if(Ie.transition=null,Y=16>e?16:e,gt===null)var r=!1;else{if(e=gt,gt=null,go=0,Q&6)throw Error(S(331));var o=Q;for(Q|=4,L=e.current;L!==null;){var l=L,i=l.child;if(L.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(L=d;L!==null;){var x=L;switch(x.tag){case 0:case 11:case 15:Un(8,x,l)}var g=x.child;if(g!==null)g.return=x,L=g;else for(;L!==null;){x=L;var m=x.sibling,j=x.return;if(yc(x),x===d){L=null;break}if(m!==null){m.return=j,L=m;break}L=j}}}var b=l.alternate;if(b!==null){var N=b.child;if(N!==null){b.child=null;do{var $=N.sibling;N.sibling=null,N=$}while(N!==null)}}L=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,L=i;else e:for(;L!==null;){if(l=L,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Un(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,L=f;break e}L=l.return}}var c=e.current;for(L=c;L!==null;){i=L;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,L=p;else e:for(i=c;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Eo(9,s)}}catch(z){ne(s,s.return,z)}if(s===i){L=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,L=w;break e}L=s.return}}if(Q=o,zt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{Y=n,Ie.transition=t}}return!1}function is(e,t,n){t=vn(n,t),t=sc(e,t,1),e=wt(e,t,1),t=ye(),e!==null&&(dr(e,1,t),Ce(e,t))}function ne(e,t,n){if(e.tag===3)is(e,e,n);else for(;t!==null;){if(t.tag===3){is(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kt===null||!kt.has(r))){e=vn(n,e),e=uc(t,e,1),t=wt(t,e,1),e=ye(),t!==null&&(dr(t,1,e),Ce(t,e));break}}t=t.return}}function op(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(de&n)===n&&(ie===4||ie===3&&(de&130023424)===de&&500>re()-Wi?Tt(e,0):Bi|=n),Ce(e,t)}function Mc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=ye();e=it(e,t),e!==null&&(dr(e,t,n),Ce(e,n))}function lp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mc(e,n)}function ip(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Mc(e,n)}var Pc;Pc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,Yf(e,t,n);je=!!(e.flags&131072)}else je=!1,Z&&t.flags&1048576&&Lu(t,lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var o=pn(t,ve.current);cn(t,n),o=Ti(null,t,r,e,o,n);var l=Ii();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(l=!0,ro(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Pi(t),o.updater=Co,t.stateNode=o,o._reactInternals=t,$l(t,r,e,n),t=Ul(null,t,r,!0,l,n)):(t.tag=0,Z&&l&&ji(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=sp(r),e=$e(r,e),o){case 0:t=Wl(null,t,r,e,n);break e;case 1:t=Xa(null,t,r,e,n);break e;case 11:t=Ka(null,t,r,e,n);break e;case 14:t=Ga(null,t,r,$e(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Wl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Xa(e,t,r,o,n);case 3:e:{if(pc(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,$u(e,t),so(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=vn(Error(S(423)),t),t=Ja(e,t,r,n,o);break e}else if(r!==o){o=vn(Error(S(424)),t),t=Ja(e,t,r,n,o);break e}else for(ze=yt(t.stateNode.containerInfo.firstChild),Me=t,Z=!0,We=null,n=Ou(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===o){t=at(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Bu(t),e===null&&Rl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Fl(r,o)?i=null:l!==null&&Fl(r,l)&&(t.flags|=32),fc(e,t),xe(e,t,i,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return mc(e,t,n);case 4:return _i(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Ka(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,K(io,r._currentValue),r._currentValue=i,l!==null)if(Ve(l.value,i)){if(l.children===o.children&&!Se.current){t=at(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=rt(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var x=d.pending;x===null?u.next=u:(u.next=x.next,x.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Ol(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ol(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,cn(t,n),o=Re(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=$e(r,t.pendingProps),o=$e(r.type,o),Ga(e,t,r,o,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Wr(e,t),t.tag=1,Ne(r)?(e=!0,ro(t)):e=!1,cn(t,n),ac(t,r,o),$l(t,r,o,n),Ul(null,t,r,!0,e,n);case 19:return gc(e,t,n);case 22:return dc(e,t,n)}throw Error(S(156,t.tag))};function _c(e,t){return ou(e,t)}function ap(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new ap(e,t,n,r)}function Qi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sp(e){if(typeof e=="function")return Qi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===di)return 11;if(e===fi)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Qi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Kt:return It(n.children,o,l,t);case ci:i=8,o|=8;break;case cl:return e=Te(12,n,t,o|2),e.elementType=cl,e.lanes=l,e;case dl:return e=Te(13,n,t,o),e.elementType=dl,e.lanes=l,e;case fl:return e=Te(19,n,t,o),e.elementType=fl,e.lanes=l,e;case Bs:return Mo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case As:i=10;break e;case $s:i=9;break e;case di:i=11;break e;case fi:i=14;break e;case ct:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Te(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function It(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Mo(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Bs,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function up(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$o(0),this.expirationTimes=$o(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$o(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Yi(e,t,n,r,o,l,i,s,u){return e=new up(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Te(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pi(l),e}function cp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fc(e){if(!e)return Nt;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Fu(e,n,t)}return t}function Dc(e,t,n,r,o,l,i,s,u){return e=Yi(n,r,!0,e,o,l,i,s,u),e.context=Fc(null),n=e.current,r=ye(),o=bt(n),l=rt(r,o),l.callback=t??null,wt(n,l,o),e.current.lanes=o,dr(e,o,r),Ce(e,r),e}function Po(e,t,n,r){var o=t.current,l=ye(),i=bt(o);return n=Fc(n),t.context===null?t.context=n:t.pendingContext=n,t=rt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wt(o,t,i),e!==null&&(He(e,o,i,l),Ar(e,o,i)),i}function vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function as(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ki(e,t){as(e,t),(e=e.alternate)&&as(e,t)}function dp(){return null}var Lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gi(e){this._internalRoot=e}_o.prototype.render=Gi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Po(e,t,null,null)};_o.prototype.unmount=Gi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Po(null,e,null,null)}),t[lt]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var t=du();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ft.length&&t!==0&&t<ft[n].priority;n++);ft.splice(n,0,e),n===0&&pu(e)}};function Xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ss(){}function fp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var d=vo(i);l.call(d)}}var i=Dc(t,r,e,0,null,!1,!1,"",ss);return e._reactRootContainer=i,e[lt]=i.current,tr(e.nodeType===8?e.parentNode:e),Wt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=vo(u);s.call(d)}}var u=Yi(e,0,!1,null,null,!1,!1,"",ss);return e._reactRootContainer=u,e[lt]=u.current,tr(e.nodeType===8?e.parentNode:e),Wt(function(){Po(t,u,n,r)}),u}function Do(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var u=vo(i);s.call(u)}}Po(t,i,e,o)}else i=fp(n,t,e,o,r);return vo(i)}uu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(gi(t,n|1),Ce(t,re()),!(Q&6)&&(xn=re()+500,zt()))}break;case 13:Wt(function(){var r=it(e,1);if(r!==null){var o=ye();He(r,e,1,o)}}),Ki(e,1)}};hi=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var n=ye();He(t,e,134217728,n)}Ki(e,134217728)}};cu=function(e){if(e.tag===13){var t=bt(e),n=it(e,t);if(n!==null){var r=ye();He(n,e,t,r)}Ki(e,t)}};du=function(){return Y};fu=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};bl=function(e,t,n){switch(t){case"input":if(gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=jo(r);if(!o)throw Error(S(90));Us(r),gl(r,o)}}}break;case"textarea":Vs(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}};Zs=Ui;qs=Wt;var pp={usingClientEntryPoint:!1,Events:[pr,Zt,jo,Xs,Js,Ui]},Pn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mp={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nu(e),e===null?null:e.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{yo=_r.inject(mp),Xe=_r}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pp;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xi(t))throw Error(S(200));return cp(e,t,null,n)};_e.createRoot=function(e,t){if(!Xi(e))throw Error(S(299));var n=!1,r="",o=Lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Yi(e,1,!1,null,null,n,!1,r,o),e[lt]=t.current,tr(e.nodeType===8?e.parentNode:e),new Gi(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=nu(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Wt(e)};_e.hydrate=function(e,t,n){if(!Fo(t))throw Error(S(200));return Do(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Xi(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Lc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Dc(t,null,e,1,n??null,o,!1,l,i),e[lt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new _o(t)};_e.render=function(e,t,n){if(!Fo(t))throw Error(S(200));return Do(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(S(40));return e._reactRootContainer?(Wt(function(){Do(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};_e.unstable_batchedUpdates=Ui;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Do(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function Tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tc)}catch(e){console.error(e)}}Tc(),Ts.exports=_e;var gp=Ts.exports,us=gp;sl.createRoot=us.createRoot,sl.hydrateRoot=us.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ic=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=E.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:i,...s},u)=>E.createElement("svg",{ref:u,...vp,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ic("lucide",o),...s},[...i.map(([d,x])=>E.createElement(d,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(e,t)=>{const n=E.forwardRef(({className:r,...o},l)=>E.createElement(xp,{ref:l,iconNode:t,className:Ic(`lucide-${hp(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=Ze("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=Ze("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=Ze("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=Ze("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=Ze("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=Ze("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=Ze("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=Ze("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=Ze("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=Ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),wp=`

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
`,kp={Mon:{num:16,rows:[["6:00 AM","Morning","preferred",0],["7:00 AM","Morning","reserved",1],["9:30 AM","Morning","open",0],["12:00 PM","Afternoon","open",0],["5:30 PM","Evening","preferred",0],["6:30 PM","Evening","reserved",2]]},Tue:{num:17,rows:[["6:30 AM","Morning","preferred",0],["8:00 AM","Morning","open",0],["11:00 AM","Morning","reserved",0],["1:00 PM","Afternoon","open",0],["5:00 PM","Evening","preferred",0],["7:00 PM","Evening","open",0]]},Wed:{num:18,rows:[["6:00 AM","Morning","reserved",3],["7:30 AM","Morning","preferred",0],["10:00 AM","Morning","open",0],["2:00 PM","Afternoon","open",0],["6:00 PM","Evening","preferred",0]]},Thu:{num:19,rows:[["6:30 AM","Morning","preferred",0],["9:00 AM","Morning","open",0],["12:30 PM","Afternoon","reserved",1],["5:30 PM","Evening","preferred",0],["7:00 PM","Evening","open",0]]},Fri:{num:20,rows:[["6:00 AM","Morning","preferred",0],["8:30 AM","Morning","open",0],["11:30 AM","Morning","reserved",0],["4:30 PM","Evening","open",0],["6:00 PM","Evening","preferred",0]]},Sat:{num:21,rows:[["7:00 AM","Morning","preferred",0],["8:30 AM","Morning","preferred",0],["10:00 AM","Morning","open",0],["11:30 AM","Morning","reserved",2]]}},Qt=["Mon","Tue","Wed","Thu","Fri","Sat"],fs=["Morning","Afternoon","Evening"],bp=["January","February","March","April","May","June","July","August","September","October","November","December"],ps=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function jp(){const e={};return Qt.forEach(t=>{e[t]=kp[t].rows.map((n,r)=>({id:`${t}-${r}`,day:t,time:n[0],period:n[1],tier:n[2],waitlist:n[3]}))}),e}const Qn={preferred:{label:"Andrea's pick",dot:"#F5841F",icon:qi},open:{label:"Open",dot:"#FFFFFF",icon:Rc},reserved:{label:"Reserved",dot:"#3A3A40",icon:Oc}};function Sp({liveSlots:e=null,loading:t=!1,onAction:n=null,errorMsg:r=null,onErrorDismiss:o=null}){const l=E.useMemo(jp,[]),i=e??l,[s,u]=E.useState("Mon"),[d,x]=E.useState(0),[g,m]=E.useState({}),[j,b]=E.useState({}),[N,$]=E.useState(null),[f,c]=E.useState(null);E.useEffect(()=>{if(!e)return;const C={};Object.values(e).flat().forEach(T=>{T.userBookingId&&(C[T.id]=T)}),m(C)},[e]),E.useEffect(()=>{r&&(m(C=>{const T={...C};return delete T[r.slotId],T}),$(r.message),o==null||o())},[r]),E.useEffect(()=>{if(!N)return;const C=setTimeout(()=>$(null),2600);return()=>clearTimeout(C)},[N]),E.useEffect(()=>{if(!n)return;const C=new Date,T=C.getDay(),h=new Date(C);h.setDate(C.getDate()-(T===0?6:T-1)+d*7),h.setHours(0,0,0,0),n({type:"weekChange",mondayISO:h.toISOString()})},[d]);const p=new Date,w=(i[s]||[]).filter(C=>{var h;const T=((h=C.slotData)==null?void 0:h.startDate)||C.startDate;return!T||new Date(T)>p}),z=E.useMemo(()=>{const C={};return fs.forEach(T=>{C[T]=w.filter(h=>h.period===T)}),C},[w]),k=E.useMemo(()=>{const C=new Date,T=C.getDay(),h=new Date(C);h.setDate(C.getDate()-(T===0?6:T-1)+d*7);const P={};return Qt.forEach((y,D)=>{const O=new Date(h);O.setDate(h.getDate()+D),P[y]={num:O.getDate(),month:O.getMonth(),year:O.getFullYear()}}),P},[d]),F=E.useMemo(()=>{const C=k[Qt[0]],T=k[Qt[Qt.length-1]];return C.month===T.month?`${bp[C.month]} ${C.year}`:`${ps[C.month]} - ${ps[T.month]} ${T.year}`},[k]),_=C=>$(C);function B(C){m(T=>({...T,[C.id]:C})),b(T=>{const h={...T};return delete h[C.id],h}),_(`Booked - ${C.day}, ${C.time}`),n==null||n({type:"book",slot:C})}function v(C){if(C.tier==="open"){const T=i[C.day].find(h=>h.tier==="preferred"&&!g[h.id]);if(T){c({slot:C,alt:T});return}}B(C)}function I(C){const T=(C.waitlist||0)+1;b(h=>({...h,[C.id]:{slot:C,pos:T}})),_(`You're #${T} on the waitlist - ${C.day}, ${C.time}`),n==null||n({type:"waitlist",slot:C})}function R(C){m(T=>{const h={...T};return delete h[C],h}),_("Booking canceled"),n==null||n({type:"cancel",slotId:C})}function W(C){b(T=>{const h={...T};return delete h[C],h}),_("Left the waitlist"),n==null||n({type:"leaveWaitlist",slotId:C})}const G=Object.values(g),ue=Object.values(j);return a.jsxs("div",{className:"ab",children:[a.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');"}),a.jsx("style",{children:wp}),a.jsxs("div",{className:"ab-wrap",children:[a.jsxs("h1",{className:"ab-h1",children:["Book your ",a.jsx("span",{className:"acc",children:"week."})]}),a.jsx("p",{className:"ab-sub",children:"Reduce pain, build strength, move better - with Andrea in Lake Ridge. Highlighted times are the ones she recommends; booking them keeps her week flowing so there's more room for everyone."}),a.jsxs("div",{className:"ab-legend",children:[a.jsxs("span",{className:"ab-key",children:[a.jsx("span",{className:"ab-dot",style:{background:Qn.preferred.dot}}),"Preferred - recommended"]}),a.jsxs("span",{className:"ab-key",children:[a.jsx("span",{className:"ab-dot",style:{background:Qn.open.dot}}),"Open - available, not preferred"]}),a.jsxs("span",{className:"ab-key",children:[a.jsx("span",{className:"ab-dot",style:{background:Qn.reserved.dot}}),"Reserved - join waitlist"]})]}),a.jsxs("div",{className:"ab-week-hd",children:[a.jsx("div",{className:"ab-week-month",children:F}),a.jsx("div",{className:"ab-week-div"}),a.jsxs("div",{className:"ab-week-nav",children:[a.jsx("button",{className:"ab-week-arr",onClick:()=>x(C=>C-1),"aria-label":"Previous week",children:a.jsx(Zi,{size:18})}),a.jsx("div",{className:"ab-days",children:Qt.map(C=>{const T=(i[C]||[]).filter(y=>{var O;const D=((O=y.slotData)==null?void 0:O.startDate)||y.startDate;return!D||new Date(D)>p}),h=T.some(y=>y.tier==="preferred"),P=T.length>0&&!h&&T.every(y=>y.tier==="reserved");return a.jsxs("div",{className:`ab-day${C===s?" on":""}`,role:"button",tabIndex:0,onClick:()=>u(C),onKeyDown:y=>y.key==="Enter"&&u(C),children:[a.jsx("div",{className:"ab-day-dow",children:C}),a.jsx("div",{className:"ab-day-num",children:k[C].num}),(h||P)&&a.jsx("span",{className:"ab-day-pref",style:P?{background:"#555558"}:void 0})]},C)})}),a.jsx("button",{className:"ab-week-arr",onClick:()=>x(C=>C+1),"aria-label":"Next week",children:a.jsx(Rt,{size:18})})]}),a.jsx("div",{className:"ab-week-div",style:{marginTop:14}})]}),t?a.jsx("div",{className:"ab-loading",children:"Loading your schedule…"}):fs.map(C=>z[C].length?a.jsxs("div",{children:[a.jsx("div",{className:"ab-period",children:C}),z[C].map(T=>a.jsx(Np,{slot:T,mine:!!g[T.id],wait:j[T.id],onBook:()=>v(T),onWaitlist:()=>I(T),onCancel:()=>R(T.id),onLeave:()=>W(T.id)},T.id))]},C):null)]}),a.jsx("div",{className:"ab-foot",children:a.jsxs("button",{className:"ab-foot-btn",onClick:()=>n==null?void 0:n({type:"mySchedule"}),children:[a.jsx("span",{className:"ab-foot-btn-label",children:"My schedule"}),G.length+ue.length>0?a.jsx("span",{className:"ab-foot-btn-count",children:G.length+ue.length}):a.jsx("span",{style:{color:"var(--muted)",fontSize:13,fontWeight:400},children:"Nothing booked yet"}),a.jsx(Rt,{size:16,style:{color:"var(--muted)"}})]})}),N&&a.jsxs("div",{className:"ab-toast",children:[a.jsx(Ji,{size:16,className:"ic"}),N]}),f&&a.jsx("div",{className:"ab-scrim",onClick:()=>c(null),children:a.jsxs("div",{className:"ab-modal",onClick:C=>C.stopPropagation(),children:[a.jsx("div",{className:"ab-modal-ico",children:a.jsx(qi,{size:22})}),a.jsxs("h3",{children:["A ",a.jsx("span",{className:"acc",children:"preferred"})," time close by"]}),a.jsxs("p",{children:[a.jsx("b",{children:f.slot.time})," works, but Andrea has an open recommended slot at ",a.jsx("b",{children:f.alt.time})," the same day. Choosing it helps her fit more clients in."]}),a.jsxs("div",{className:"ab-modal-acts",children:[a.jsxs("button",{className:"ab-btn ab-btn-pref",onClick:()=>{B(f.alt),c(null)},children:["Book ",f.alt.time," instead"]}),a.jsxs("button",{className:"ab-btn ab-btn-line",onClick:()=>{B(f.slot),c(null)},children:["Keep ",f.slot.time]})]})]})})]})}function Np({slot:e,mine:t,wait:n,onBook:r,onWaitlist:o,onCancel:l,onLeave:i}){const s=t?"mine":e.tier,u=t?Ji:Qn[e.tier].icon,d=t?"Your session":Qn[e.tier].label;return a.jsxs("div",{className:`ab-slot ${s}`,children:[a.jsx("div",{className:"ab-ico",children:a.jsx(u,{size:18})}),a.jsxs("div",{className:"ab-body",children:[a.jsx("div",{className:"ab-eye",children:d}),a.jsx("div",{className:"ab-time",children:e.time}),a.jsx("div",{className:"ab-meta",children:t?`Confirmed · ${e.service||`${e.duration||60} min`}`:e.tier==="reserved"?n?a.jsxs("span",{className:"ab-wl",children:[a.jsx(ds,{size:12})," You're #",n.pos," on the waitlist"]}):a.jsxs("span",{className:"ab-wl",children:[a.jsx(ds,{size:12})," ",e.waitlist>0?`${e.waitlist} waiting`:"Taken - be first to wait"]}):e.service||"Personal Training · 60 min"})]}),a.jsx("div",{className:"ab-act",children:t?a.jsxs("button",{className:"ab-btn ab-btn-pill",onClick:l,children:[a.jsx(ea,{size:14})," Cancel"]}):e.tier==="reserved"?n?a.jsx("button",{className:"ab-btn ab-btn-wait",onClick:i,children:"Leave waitlist"}):a.jsx("button",{className:"ab-btn ab-btn-wait",onClick:o,children:"Join waitlist"}):e.tier==="preferred"?a.jsxs("button",{className:"ab-btn ab-btn-pref",onClick:r,children:["Book ",a.jsx(Rt,{size:14,style:{verticalAlign:"-2px"}})]}):a.jsx("button",{className:"ab-btn ab-btn-open",onClick:r,children:"Book"})})]})}const Cp=`

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
`,_n=["Mon","Tue","Wed","Thu","Fri","Sat"],Ep=["January","February","March","April","May","June","July","August","September","October","November","December"],ms=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],zp=["6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM"],Qr=["Personal Training - 60 min","Personal Training - 45 min","Personal Training - 30 min","Mobility Training","Phone Consultation","Intro Offer - Wellness Consultation"],ti=[{key:"preferred",label:"Preferred",icon:qi,dot:"#F5841F"},{key:"np",label:"Non-pref",icon:Rc,dot:"#FFFFFF"},{key:"reserved",label:"Reserved",icon:Oc,dot:"#6A665F"}],Mp=Object.fromEntries(ti.map(e=>[e.key,e]));function gs(e){const t=e.match(/(\d+):(\d+)\s*(AM|PM)/);let n=+t[1]%12;return t[3]==="PM"&&(n+=12),n*60+ +t[2]}let ni=100;function Pp(){return{Mon:[],Tue:[],Wed:[],Thu:[],Fri:[],Sat:[]}}function _p(){const e=(t,n,r=Qr[0])=>({id:++ni,time:t,tier:n,service:r});return{Mon:[e("6:00 AM","preferred"),e("9:30 AM","np"),e("5:30 PM","preferred"),e("7:00 AM","reserved")],Tue:[e("6:30 AM","preferred"),e("1:00 PM","np"),e("5:00 PM","preferred")],Wed:[e("7:30 AM","preferred"),e("10:00 AM","np"),e("6:00 PM","preferred")],Thu:[e("6:30 AM","preferred"),e("9:00 AM","np"),e("5:30 PM","preferred")],Fri:[e("6:00 AM","preferred"),e("4:30 PM","np")],Sat:[e("7:00 AM","preferred"),e("8:30 AM","preferred")]}}function Fp({livePrefs:e=null,loading:t=!1,onAction:n,saving:r=!1}){const[o,l]=E.useState(_p),[i,s]=E.useState("Mon"),[u,d]=E.useState(!1),[x,g]=E.useState(""),[m,j]=E.useState(0);E.useEffect(()=>{if(e===null)return;const v=Pp();e.forEach(I=>{v[I.dayOfWeek]&&v[I.dayOfWeek].push({id:++ni,time:I.time,tier:I.tier==="open"?"np":I.tier,service:I.service||Qr[0]})}),l(v)},[e]);const b=E.useMemo(()=>{const v=new Date,I=v.getDay(),R=new Date(v);R.setDate(v.getDate()-(I===0?6:I-1)+m*7);const W={};return _n.forEach((G,ue)=>{const C=new Date(R);C.setDate(R.getDate()+ue),W[G]={num:C.getDate(),month:C.getMonth(),year:C.getFullYear()}}),W},[m]),N=E.useMemo(()=>{const v=b[_n[0]],I=b[_n[_n.length-1]];return v.month===I.month?`${Ep[v.month]} ${v.year}`:`${ms[v.month]} - ${ms[I.month]} ${I.year}`},[b]),$=E.useMemo(()=>[...o[i]].sort((v,I)=>gs(v.time)-gs(I.time)),[o,i]),f=E.useMemo(()=>{const v={preferred:0,np:0,reserved:0};return o[i].forEach(I=>v[I.tier]++),v},[o,i]),c=new Set(o[i].map(v=>v.time)),p=zp.filter(v=>!c.has(v));function w(v,I){l(R=>({...R,[i]:R[i].map(W=>W.id===v?{...W,tier:I}:W)}))}function z(v,I){l(R=>({...R,[i]:R[i].map(W=>W.id===v?{...W,service:I}:W)}))}function k(v){l(I=>({...I,[i]:I[i].filter(R=>R.id!==v)}))}function F(v){l(I=>({...I,[i]:[...I[i],{id:++ni,time:v,tier:"preferred",service:Qr[0]}]})),d(!1),g("")}function _(){if(!x)return;const[v,I]=x.split(":").map(Number),R=v<12?"AM":"PM",G=`${v%12||12}:${String(I).padStart(2,"0")} ${R}`;c.has(G)||F(G)}function B(){const v=[];Object.entries(o).forEach(([I,R])=>{R.forEach(W=>{v.push({dayOfWeek:I,time:W.time,tier:W.tier==="np"?"open":W.tier,service:W.service})})}),n==null||n({type:"savePrefs",items:v})}return a.jsxs("div",{className:"fg",children:[a.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');"}),a.jsx("style",{children:Cp}),a.jsxs("div",{className:"fg-wrap",children:[a.jsx("h1",{className:"fg-h1",children:"Set your availability"}),a.jsx("p",{className:"fg-sub",children:"Add the times you'll take clients, then tag each one. Preferred times get highlighted to clients; reserved times are held and can't be booked."}),a.jsx("div",{className:"fg-legend",children:ti.map(v=>a.jsxs("span",{className:"fg-key",children:[a.jsx("span",{className:"fg-dot",style:{background:v.dot}}),v.key==="preferred"&&"Preferred — recommended",v.key==="np"&&"Non-preferred — available",v.key==="reserved"&&"Reserved — held"]},v.key))}),a.jsxs("div",{className:"fg-week-hd",children:[a.jsx("div",{className:"fg-week-month",children:N}),a.jsx("div",{className:"fg-week-div"}),a.jsxs("div",{className:"fg-week-nav",children:[a.jsx("button",{className:"fg-week-arr",onClick:()=>j(v=>v-1),"aria-label":"Previous week",children:a.jsx(Zi,{size:18})}),a.jsx("div",{className:"fg-days",children:_n.map(v=>a.jsxs("div",{className:`fg-day${v===i?" on":""}`,role:"button",tabIndex:0,onClick:()=>{s(v),d(!1)},onKeyDown:I=>I.key==="Enter"&&s(v),children:[a.jsx("div",{className:"fg-day-dow",children:v}),a.jsx("div",{className:"fg-day-num",children:b[v].num}),a.jsxs("div",{className:"fg-day-c",children:[o[v].length," slot",o[v].length!==1?"s":""]})]},v))}),a.jsx("button",{className:"fg-week-arr",onClick:()=>j(v=>v+1),"aria-label":"Next week",children:a.jsx(Rt,{size:18})})]}),a.jsx("div",{className:"fg-week-div",style:{marginTop:14}})]}),a.jsxs("div",{className:"fg-tally",children:[a.jsxs("span",{children:[a.jsx("i",{style:{color:"#F5841F"},children:"●"})," ",a.jsx("b",{children:f.preferred})," preferred"]}),a.jsxs("span",{children:[a.jsx("i",{style:{color:"#FFFFFF"},children:"●"})," ",a.jsx("b",{children:f.np})," non-pref"]}),a.jsxs("span",{children:[a.jsx("i",{style:{color:"#6A665F"},children:"●"})," ",a.jsx("b",{children:f.reserved})," reserved"]})]}),t?a.jsx("div",{className:"fg-empty",style:{padding:"40px 0"},children:"Loading your schedule…"}):a.jsxs(a.Fragment,{children:[$.length===0&&!u&&a.jsxs("div",{className:"fg-empty",children:["No times set for ",i," yet. Add one below."]}),$.map(v=>{const I=Mp[v.tier].icon;return a.jsxs("div",{className:`fg-blk ${v.tier}`,children:[a.jsxs("div",{className:"fg-blk-top",children:[a.jsxs("span",{className:"fg-blk-time",children:[a.jsx("span",{className:"fg-blk-ic",children:a.jsx(I,{size:15})}),v.time]}),a.jsx("button",{className:"fg-rm",onClick:()=>k(v.id),"aria-label":"Remove time",children:a.jsx(ea,{size:18})})]}),a.jsx("div",{className:"fg-seg",role:"group","aria-label":"Tier",children:ti.map(R=>{const W=R.icon,G=v.tier===R.key;return a.jsxs("button",{className:`${G?"on":""} ${R.key}`,onClick:()=>w(v.id,R.key),children:[a.jsx(W,{size:13})," ",R.label]},R.key)})}),a.jsx("div",{className:"fg-svc",children:a.jsx("select",{value:v.service,onChange:R=>z(v.id,R.target.value),"aria-label":"Service",children:Qr.map(R=>a.jsx("option",{value:R,children:R},R))})})]},v.id)}),u?a.jsxs("div",{className:"fg-palette",children:[a.jsxs("div",{className:"fg-palette-h",children:[a.jsx("span",{children:"Pick a time to add"}),a.jsx("button",{onClick:()=>d(!1),children:"Cancel"})]}),p.length===0?a.jsxs("div",{className:"fg-empty",style:{padding:"4px 0"},children:["Every preset time is already added for ",i,"."]}):a.jsx("div",{className:"fg-times",children:p.map(v=>a.jsx("button",{className:"fg-tchip",onClick:()=>F(v),children:v},v))}),a.jsxs("div",{className:"fg-custom",children:[a.jsx("span",{className:"fg-custom-label",children:"Custom"}),a.jsx("input",{type:"time",value:x,onChange:v=>g(v.target.value),onKeyDown:v=>v.key==="Enter"&&_()}),a.jsx("button",{className:"fg-custom-add",disabled:!x,onClick:_,children:"Add"})]})]}):a.jsxs("button",{className:"fg-add",onClick:()=>d(!0),children:[a.jsx(yp,{size:17})," Add a time"]})]})]}),a.jsx("div",{className:"fg-save",children:a.jsxs("div",{className:"fg-save-in",children:[a.jsx("span",{className:"fg-save-t",children:"Changes apply to all weeks — clients see preferred times highlighted"}),a.jsxs("button",{className:"fg-btn",disabled:r,onClick:B,children:[a.jsx(Ji,{size:16})," ",r?"Saving…":"Save week"]})]})})]})}const Lo="/assets/logo.png",Dp=window.self!==window.top,Lp=`
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
`;function Tp({slot:e=null}){const[t,n]=E.useState("idle"),[r,o]=E.useState("");E.useEffect(()=>{const u=d=>{var x;if((x=d.data)!=null&&x.type&&(d.data.type==="abate-confirm-success"&&n("success"),d.data.type==="abate-confirm-error")){const g=d.data.message||"",m=g.toLowerCase().includes("plan")||g.toLowerCase().includes("pricing")?"No active session plan found. Please contact Andrea to update your plan.":g||"Could not confirm booking. Please try again.";o(m),n("error")}};return window.addEventListener("message",u),()=>window.removeEventListener("message",u)},[]);const l=()=>{n("loading"),o(""),Dp&&window.parent.postMessage({type:"abate-confirm"},"*")},i=()=>{n("idle"),o("")},s=t==="loading"?"Booking…":"Confirm my session →";return a.jsxs("div",{className:"cv",children:[a.jsx("style",{children:Lp}),a.jsx("div",{className:"cv-header",children:a.jsx("img",{src:Lo,alt:"Abate Wellness",className:"cv-logo"})}),a.jsx("hr",{className:"cv-rule"}),a.jsx("div",{className:"cv-body",children:t==="success"?a.jsxs("div",{className:"cv-success",children:[a.jsx("div",{className:"cv-success-icon",children:"✓"}),a.jsxs("div",{className:"cv-success-h",children:["You're ",a.jsx("em",{children:"booked"})]}),a.jsx("div",{className:"cv-success-sub",children:"Andrea will see you then. Heading back to your schedule…"})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"cv-heading",children:["Confirm your ",a.jsx("em",{children:"session"})]}),e!=null&&e.service?a.jsxs("div",{className:"cv-card",children:[a.jsxs("div",{className:"cv-card-top",children:[a.jsx("div",{className:"cv-card-eyebrow",children:"Session details"}),a.jsx("div",{className:"cv-card-service",children:e.service})]}),a.jsxs("div",{className:"cv-card-bottom",children:[e.day&&a.jsxs("div",{className:"cv-card-item",children:[a.jsx("div",{className:"cv-card-item-label",children:"Date"}),a.jsx("div",{className:"cv-card-item-value",children:e.day})]}),e.time&&a.jsxs("div",{className:"cv-card-item",children:[a.jsx("div",{className:"cv-card-item-label",children:"Time"}),a.jsx("div",{className:"cv-card-item-value",children:e.time})]})]})]}):a.jsx("div",{className:"cv-loading-slot",children:"Loading session details…"}),t==="error"&&a.jsx("div",{className:"cv-error",children:r}),t==="error"?a.jsx("button",{className:"cv-btn",onClick:i,children:"Try again"}):a.jsx("button",{className:"cv-btn",onClick:l,disabled:t==="loading",children:s}),a.jsx("div",{className:"cv-policy",children:"By confirming you agree to Abate Wellness's cancellation policy."})]})})]})}const Fr=window.self!==window.top,Ip=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,Rp=e=>Ip.test(e||""),Op=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],al=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function Ap(e){const t=new Date(e),n=t.getDay();return t.setDate(t.getDate()-(n===0?6:n-1)),t.setHours(0,0,0,0),t}function Dr(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function $p(e){return e.toLocaleDateString("en-US",{month:"long",year:"numeric"})}function Bp(e){return new Date(e).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function Wp(e){return new Date(e).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function hs(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const Up=`
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
`;function Hp({sessions:e=null,onBook:t=null}){const[n,r]=E.useState(e),[o,l]=E.useState(null),[i,s]=E.useState("sessions"),u=(()=>{const h=new Date;return h.setHours(0,0,0,0),h})(),[d,x]=E.useState(()=>Ap(new Date)),[g,m]=E.useState(null),[j,b]=E.useState(!1),[N,$]=E.useState({}),[f,c]=E.useState(!1),[p,w]=E.useState(!1),[z,k]=E.useState(!1);E.useEffect(()=>{e!==null&&r(e)},[e]),E.useEffect(()=>{const h=P=>{var y,D,O;if((y=P.data)!=null&&y.type)switch(P.data.type){case"abate-schedule-data":r(P.data.sessions||[]);break;case"abate-schedule-cancelled":r(M=>(M||[]).filter(A=>A._id!==P.data.recordId)),l(null);break;case"abate-schedule-cancel-error":l(null);break;case"abate-auto-prefs-data":b(((D=P.data.prefs)==null?void 0:D.enabled)||!1),$(((O=P.data.prefs)==null?void 0:O.slots)||{}),c(!0);break;case"abate-auto-prefs-saved":w(!1),k(!0),setTimeout(()=>k(!1),3e3);break}};return window.addEventListener("message",h),()=>window.removeEventListener("message",h)},[]),E.useEffect(()=>{i==="auto"&&!f&&Fr&&window.parent.postMessage({type:"abate-auto-prefs-get"},"*")},[i,f]);const F=h=>{l(h._id),Fr&&window.parent.postMessage({type:"abate-schedule-cancel",recordId:h._id},"*")},_=()=>{Fr?window.parent.postMessage({type:"abate-schedule-book"},"*"):t&&t()},B=()=>{w(!0),Fr&&window.parent.postMessage({type:"abate-auto-prefs-save",prefs:{enabled:j,slots:N}},"*")},v=h=>{$(P=>{const y={...P};return y[h]!==void 0?delete y[h]:y[h]="",y})},I=(h,P)=>$(y=>({...y,[h]:P})),R=Array.from({length:7},(h,P)=>Dr(d,P)),W=(n||[]).filter(h=>{const P=new Date(h.startDate);return P>=d&&P<Dr(d,7)}),G=W.reduce((h,P)=>{const y=new Date(P.startDate),D=R.findIndex(O=>hs(O,y));return D>=0&&(h[D]=h[D]||[],h[D].push(P)),h},{}),ue=(g!==null?G[g]||[]:W).slice().sort((h,P)=>new Date(h.startDate)-new Date(P.startDate)),C=(n||[]).length,T=n===null;return a.jsxs("div",{className:"ms",children:[a.jsx("style",{children:Up}),a.jsx("div",{className:"ms-header",children:a.jsx("img",{src:Lo,alt:"Abate Wellness",className:"ms-logo"})}),a.jsx("hr",{className:"ms-rule"}),a.jsxs("div",{className:"ms-title-row",children:[a.jsxs("h1",{className:"ms-title",children:["Your ",a.jsx("em",{children:"schedule"})]}),!T&&C>0&&a.jsxs("span",{className:"ms-title-count",children:[C," upcoming"]})]}),a.jsxs("div",{className:"ms-tabs",children:[a.jsxs("button",{className:`ms-tab${i==="sessions"?" active":""}`,onClick:()=>s("sessions"),children:["My sessions",!T&&C>0&&a.jsx("span",{className:"ms-tab-badge",children:C})]}),a.jsx("button",{className:`ms-tab${i==="auto"?" active":""}`,onClick:()=>s("auto"),children:"Auto-schedule"})]}),i==="sessions"&&a.jsx(a.Fragment,{children:T?a.jsx("div",{className:"ms-loading",children:"Loading your schedule…"}):C===0?a.jsxs("div",{className:"ms-empty",children:[a.jsx("div",{className:"ms-empty-icon",children:a.jsx(cs,{size:24})}),a.jsx("div",{className:"ms-empty-h",children:"No upcoming sessions"}),a.jsx("div",{className:"ms-empty-sub",children:"Book your first session to get started."}),a.jsx("div",{className:"ms-book-wrap",style:{padding:"0",marginTop:"4px"},children:a.jsxs("button",{className:"ms-book-btn",onClick:_,children:["Book a session ",a.jsx(Rt,{size:16})]})})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"ms-week-nav",children:[a.jsx("button",{className:"ms-week-arrow",onClick:()=>{x(h=>Dr(h,-7)),m(null)},children:a.jsx(Zi,{size:16})}),a.jsx("span",{className:"ms-week-month",children:$p(d)}),a.jsx("button",{className:"ms-week-arrow",onClick:()=>{x(h=>Dr(h,7)),m(null)},children:a.jsx(Rt,{size:16})})]}),a.jsx("div",{className:"ms-days",children:R.map((h,P)=>{var y;return a.jsxs("div",{className:`ms-day${hs(h,u)?" today":""}${g===P?" sel":""}`,onClick:()=>m(g===P?null:P),children:[a.jsx("span",{className:"ms-day-abbr",children:Op[P]}),a.jsx("span",{className:"ms-day-num",children:h.getDate()}),((y=G[P])==null?void 0:y.length)>0&&a.jsx("span",{className:"ms-day-dot"})]},P)})}),ue.length===0?a.jsxs("div",{className:"ms-empty",style:{marginTop:32},children:[a.jsx("div",{className:"ms-empty-icon",children:a.jsx(cs,{size:24})}),a.jsx("div",{className:"ms-empty-h",children:g!==null?`No sessions on ${al[g]}`:"No sessions this week"}),a.jsx("div",{className:"ms-empty-sub",children:"Use the arrows to browse other weeks."})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"ms-section",children:g!==null?al[g]:"This week"}),a.jsx("div",{className:"ms-list",children:ue.map(h=>a.jsxs("div",{className:"ms-card",children:[a.jsxs("div",{className:"ms-card-body",children:[a.jsx("div",{className:"ms-card-date",children:Wp(h.startDate)}),a.jsx("div",{className:"ms-card-time",children:Bp(h.startDate)}),h.service&&!Rp(h.service)&&a.jsx("div",{className:"ms-card-svc",children:h.service})]}),a.jsxs("button",{className:"ms-cancel-btn",onClick:()=>F(h),disabled:o===h._id,children:[a.jsx(ea,{size:13}),o===h._id?"Cancelling…":"Cancel"]})]},h._id))})]}),a.jsx("div",{className:"ms-book-wrap",children:a.jsxs("button",{className:"ms-book-btn",onClick:_,children:["Book another session ",a.jsx(Rt,{size:16})]})})]})}),i==="auto"&&a.jsxs("div",{className:"ms-auto",children:[a.jsx("p",{className:"ms-auto-desc",children:"Choose which days and times you train each week. Once saved and enabled, those slots will be automatically reserved for you — no manual booking needed."}),a.jsxs("div",{className:`ms-auto-master${j?" on":""}`,children:[a.jsxs("div",{children:[a.jsx("div",{className:"ms-auto-master-label",children:"Enable auto-schedule"}),a.jsx("div",{className:"ms-auto-master-sub",children:j?"On — your recurring slots will be reserved each week":"Off — you book each session manually"})]}),a.jsx("button",{className:"ms-toggle","data-on":String(j),onClick:()=>b(h=>!h)})]}),a.jsx("div",{className:"ms-auto-days",children:al.map((h,P)=>{const y=N[P]!==void 0;return a.jsxs("div",{className:`ms-auto-row${y?" on":""}${j?"":" disabled"}`,children:[a.jsx("button",{className:"ms-toggle","data-on":String(y),onClick:()=>v(P)}),a.jsx("span",{className:"ms-auto-day-name",children:h}),y?a.jsx("input",{type:"time",className:"ms-auto-time-input",value:N[P]||"",onChange:D=>I(P,D.target.value)}):a.jsx("span",{className:"ms-auto-time-off",children:"— : —"})]},P)})}),a.jsxs("div",{className:"ms-auto-save",children:[a.jsx("button",{className:"ms-save-btn",onClick:B,disabled:p,children:p?"Saving…":"Save schedule"}),z&&a.jsx("span",{className:"ms-saved-label",children:"✓ Saved"})]})]})]})}const Vp=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],vs=["MON","TUE","WED","THU","FRI","SAT","SUN"],xs=[{emoji:"😊",label:"Great",value:5},{emoji:"🙂",label:"Good",value:4},{emoji:"😐",label:"Okay",value:3},{emoji:"😟",label:"Meh",value:2},{emoji:"😫",label:"Bad",value:1}],ys=[{id:1,name:"Probiotic Smoothie",time:"5 min",tag:"gut-friendly",emoji:"🥤"},{id:2,name:"Kimchi Rice Bowl",time:"15 min",tag:"fermented",emoji:"🍚"},{id:3,name:"Bone Broth Soup",time:"30 min",tag:"gut-healing",emoji:"🍲"},{id:4,name:"Overnight Oats",time:"5 min",tag:"prebiotic",emoji:"🥣"},{id:5,name:"Miso Salmon",time:"20 min",tag:"fermented",emoji:"🍣"},{id:6,name:"Ginger Turmeric Tea",time:"5 min",tag:"anti-inflammatory",emoji:"☕"},{id:7,name:"Greek Yogurt Bowl",time:"3 min",tag:"probiotic",emoji:"🫙"},{id:8,name:"Sauerkraut Wrap",time:"10 min",tag:"fermented",emoji:"🌯"}];function ws(){const e=new Date().getDay();return e===0?6:e-1}function Qp({score:e}){const o=b=>{const N=Math.PI*(1-b);return[+(105+70*Math.cos(N)).toFixed(2),+(88-70*Math.sin(N)).toFixed(2)]},[l,i]=o(0),[s,u]=o(1),d=Math.max(.005,Math.min(.995,e/100)),[x,g]=o(d),m=(b,N,$,f)=>`M ${b} ${N} A 70 70 0 0 1 ${$} ${f}`,j=e<34?"#FF453A":e<67?"#FFD60A":"#30D158";return a.jsxs("div",{className:"fj-gauge-wrap",children:[a.jsx("div",{className:"fj-gauge-label",children:"Gut Health"}),a.jsxs("svg",{viewBox:"0 0 210 136",style:{display:"block",width:"100%"},children:[a.jsx("path",{d:m(l,i,s,u),stroke:"#252527",strokeWidth:"14",fill:"none",strokeLinecap:"round"}),a.jsx("path",{d:m(l,i,x,g),stroke:j,strokeWidth:"14",fill:"none",strokeLinecap:"round"}),a.jsx("line",{x1:105,y1:88,x2:x,y2:g,stroke:"rgba(255,255,255,.85)",strokeWidth:"2.5",strokeLinecap:"round"}),a.jsx("circle",{cx:105,cy:88,r:"5",fill:"#fff"}),a.jsx("text",{x:105,y:118,textAnchor:"middle",fill:"#fff",fontSize:"24",fontWeight:"700",fontFamily:"Inter,sans-serif",children:e}),a.jsx("text",{x:105,y:130,textAnchor:"middle",fill:"#9C988F",fontSize:"7.5",fontFamily:"Inter,sans-serif",letterSpacing:"2",children:"GUT SCORE"}),a.jsx("text",{x:l,y:i+20,textAnchor:"middle",fill:"#FF453A",fontSize:"9",fontFamily:"Inter,sans-serif",fontWeight:"700",children:"Poor"}),a.jsx("text",{x:s,y:u+20,textAnchor:"middle",fill:"#30D158",fontSize:"9",fontFamily:"Inter,sans-serif",fontWeight:"700",children:"Good"})]})]})}const Yp=`
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
`;function Kp(){const[e,t]=E.useState(""),[n,r]=E.useState(ws()),[o,l]=E.useState(3),[i,s]=E.useState({}),[u,d]=E.useState(null),[x,g]=E.useState(0),[m,j]=E.useState(""),[b,N]=E.useState(""),[$,f]=E.useState(!1),[c,p]=E.useState(!1),w=E.useRef(null),z=E.useRef(null),k=[...new Set(ys.map(y=>y.tag))];Ds.useEffect(()=>{const y=D=>{z.current&&!z.current.contains(D.target)&&p(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[]);const F=ys.filter(y=>{const D=m.toLowerCase();return(!D||y.name.toLowerCase().includes(D))&&(!b||y.tag===b)}),_=4,B=Math.ceil(F.length/_),v=F.slice(x*_,(x+1)*_),I=E.useRef(null),R=()=>{const y=e.trim();if(!y)return;const D={id:Date.now(),text:y,feel:o,fromRecipe:!1};s(O=>({...O,[n]:[...O[n]||[],D]})),t("")},W=(y,D)=>{s(O=>({...O,[y]:(O[y]||[]).filter(M=>M.id!==D)}))},G=y=>{const D=I.current;if(!D)return;const O={id:Date.now(),text:D.name,feel:3,fromRecipe:!0};s(M=>({...M,[y]:[...M[y]||[],O]}))},ue=Object.values(i).flat(),C=ue.length>0?ue.reduce((y,D)=>y+D.feel,0)/ue.length:3,T=Math.round(C/5*100),h=ue.length===0?"Start logging your meals and feelings throughout the week. Your personalized gut health insights will appear here.":T>=67?"Your gut is thriving this week. Keep up the variety and stay consistent with hydration and fiber-rich foods.":T>=34?"You're on track. Consider adding more fermented foods — kimchi, yogurt, or miso — to boost your gut flora further.":"Your gut may need some extra support. Focus on whole foods, reduce processed items, and try incorporating a daily probiotic.",P=ws();return a.jsxs("div",{className:"fj",children:[a.jsx("style",{children:Yp}),a.jsx("div",{className:"fj-header",children:a.jsx("img",{src:Lo,alt:"Abate Wellness",className:"fj-logo"})}),a.jsx("hr",{className:"fj-rule"}),a.jsxs("div",{className:"fj-title-row",children:[a.jsxs("h1",{className:"fj-title",children:["Food ",a.jsx("em",{children:"journal"})]}),a.jsx("p",{className:"fj-subtitle",children:"Track what you eat, how it makes you feel, and get personalized gut health insights."})]}),a.jsxs("div",{className:"fj-top",children:[a.jsxs("div",{className:"fj-left",children:[a.jsxs("div",{className:"fj-input-box",children:[a.jsxs("div",{className:"fj-input-row",children:[a.jsx("input",{className:"fj-input",placeholder:"What did you eat? (e.g. Greek yogurt, grilled salmon…)",value:e,onChange:y=>t(y.target.value),onKeyDown:y=>y.key==="Enter"&&R()}),a.jsx("button",{className:"fj-log-btn",onClick:R,children:"Log"})]}),a.jsxs("div",{className:"fj-meta-row",children:[a.jsxs("div",{className:"fj-meta-left",children:[a.jsx("span",{className:"fj-meta-label",children:"Day"}),a.jsx("div",{className:"fj-day-pills",children:vs.map((y,D)=>a.jsx("button",{className:`fj-day-pill${n===D?" active":""}`,onClick:()=>r(D),children:y.slice(0,3)},D))})]}),a.jsx("div",{className:"fj-feelings",children:xs.map(y=>a.jsx("button",{className:`fj-feeling${o===y.value?" active":""}`,onClick:()=>l(y.value),title:y.label,children:y.emoji},y.value))})]})]}),a.jsxs("div",{className:"fj-recipes-header",children:[a.jsx("span",{className:"fj-week-label",children:"Recipes — drag onto a day"}),a.jsxs("div",{className:"fj-recipe-controls",children:[a.jsxs("div",{className:`fj-search-wrap${$?" expanded":""}`,children:[a.jsx("div",{className:"fj-search-slide",children:a.jsx("input",{ref:w,className:"fj-search-input",placeholder:"Search...",value:m,onChange:y=>{j(y.target.value),g(0)},onBlur:()=>{m||f(!1)}})}),a.jsx("button",{className:"fj-search-icon-btn",onMouseDown:y=>y.preventDefault(),onClick:()=>{$?(f(!1),j(""),g(0)):(f(!0),setTimeout(()=>{var y;return(y=w.current)==null?void 0:y.focus()},30))},"aria-label":"Search recipes",children:a.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),a.jsxs("div",{ref:z,className:`fj-filter-wrap${c?" open":""}`,children:[a.jsxs("button",{className:"fj-filter-btn",onClick:()=>p(y=>!y),children:[b||"All",a.jsx("svg",{className:"fj-filter-chevron",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),c&&a.jsx("div",{className:"fj-filter-dropdown",children:["",...k].map(y=>a.jsx("button",{className:`fj-filter-opt${b===y?" active":""}`,onMouseDown:D=>{D.preventDefault(),N(y),g(0),p(!1)},children:y||"All"},y))})]}),a.jsxs("div",{className:"fj-recipe-nav",children:[a.jsx("button",{onClick:()=>g(y=>Math.max(0,y-1)),disabled:x===0,"aria-label":"Previous recipes",children:"‹"}),a.jsx("button",{onClick:()=>g(y=>Math.min(Math.max(0,B-1),y+1)),disabled:x>=B-1,"aria-label":"Next recipes",children:"›"})]})]})]}),v.length===0&&a.jsx("div",{className:"fj-recipe-no-results",children:"No recipes match your search."}),a.jsx("div",{className:"fj-recipes-grid",children:v.map((y,D)=>a.jsxs("div",{className:"fj-recipe-card fj-recipe-card-anim",style:{animationDelay:`${D*65}ms`},draggable:!0,onDragStart:O=>{I.current=y,O.currentTarget.classList.add("fj-grabbing");const M=document.createElement("div");M.innerHTML=`<span style="font-size:15px;line-height:1">${y.emoji}</span><span style="font-size:12px;font-weight:600;font-family:Inter,sans-serif">${y.name}</span>`,M.style.cssText="position:fixed;top:-9999px;left:0;background:#1C1C1E;border:1px solid rgba(245,132,31,.75);border-radius:20px;padding:7px 14px;color:#fff;display:flex;align-items:center;gap:8px;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.75);transform:rotate(-3deg);",document.body.appendChild(M),O.dataTransfer.setDragImage(M,M.offsetWidth/2,M.offsetHeight/2),setTimeout(()=>{try{document.body.removeChild(M)}catch{}},100)},onDragEnd:O=>{O.currentTarget.classList.remove("fj-grabbing"),I.current=null,d(null)},children:[a.jsxs("div",{className:"fj-recipe-top",children:[a.jsx("span",{className:"fj-recipe-emoji",children:y.emoji}),a.jsx("span",{className:"fj-recipe-name",children:y.name})]}),a.jsxs("div",{className:"fj-recipe-meta",children:[a.jsx("span",{className:"fj-recipe-time",children:y.time}),a.jsx("span",{className:"fj-recipe-tag",children:y.tag})]})]},`${x}-${y.id}`))})]}),a.jsxs("div",{className:"fj-right",children:[a.jsx(Qp,{score:T}),a.jsxs("div",{className:"fj-advice",children:[a.jsxs("div",{className:"fj-advice-head",children:[a.jsx("span",{className:"fj-advice-dot"}),"AI Insights"]}),a.jsx("div",{className:"fj-advice-body",children:h})]})]})]}),a.jsxs("div",{className:"fj-week-section",children:[a.jsx("div",{className:"fj-week-label",children:"Weekly log"}),a.jsx("div",{className:"fj-week",children:Vp.map((y,D)=>{const O=i[D]||[],M=D===P,A=D===n,H=u===D;return a.jsxs("div",{className:`fj-day-col${M?" today":""}${A?" selected":""}${H?" drag-over":""}`,onClick:()=>r(D),onDragOver:V=>{V.preventDefault(),d(D)},onDragLeave:()=>d(null),onDrop:()=>{d(null),G(D)},children:[a.jsxs("div",{className:"fj-day-head",children:[a.jsx("span",{className:`fj-day-name${M?" today":""}`,children:vs[D]}),O.length>0&&a.jsx("span",{className:"fj-day-badge",children:O.length})]}),a.jsx("div",{className:"fj-day-entries",children:O.map(V=>{var pe;return a.jsxs("div",{className:`fj-entry${V.fromRecipe?" from-recipe":""}`,children:[a.jsx("span",{className:"fj-entry-feel",children:((pe=xs.find(bn=>bn.value===V.feel))==null?void 0:pe.emoji)??"🙂"}),a.jsx("span",{className:"fj-entry-text",children:V.text}),a.jsx("button",{className:"fj-entry-del",onClick:bn=>{bn.stopPropagation(),W(D,V.id)},children:"×"})]},V.id)})}),O.length===0&&a.jsx("div",{className:"fj-day-drop-hint",children:"drop recipe"})]},D)})})]})]})}const ks=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],_t={Strength:{color:"#F5841F",bg:"rgba(245,132,31,.14)"},Mobility:{color:"#30D158",bg:"rgba(48,209,88,.14)"},Core:{color:"#BF5AF2",bg:"rgba(191,90,242,.14)"},Recovery:{color:"#64D2FF",bg:"rgba(100,210,255,.14)"}},Fn=[{id:1,name:"Full Body Strength",duration:"45 min",type:"Strength",emoji:"🏋️",difficulty:"Moderate",description:"A comprehensive full-body session targeting all major muscle groups through compound movements — squats, deadlifts, rows, and press variations designed to build functional strength."},{id:2,name:"Hip Mobility Flow",duration:"30 min",type:"Mobility",emoji:"🧘",difficulty:"Easy",description:"Deep hip openers, 90/90 stretches, and controlled articular rotations to improve joint range of motion and reduce tightness in the hips and lower back."},{id:3,name:"Upper Body Push",duration:"30 min",type:"Strength",emoji:"💪",difficulty:"Moderate",description:"Focused push-pattern work targeting chest, shoulders, and triceps through push-up progressions, overhead press variations, and cable flys."},{id:4,name:"Glute Activation",duration:"20 min",type:"Mobility",emoji:"🎯",difficulty:"Easy",description:"Targeted activation protocol to wake up the posterior chain before heavier training. Banded clamshells, hip thrusts, and glute bridges."},{id:5,name:"Core & Stability",duration:"25 min",type:"Core",emoji:"⚡",difficulty:"Moderate",description:"Anti-rotation and anti-flexion core work that builds real functional stability — planks, Pallof presses, dead bugs, and farmer carries."},{id:6,name:"Lower Body Power",duration:"45 min",type:"Strength",emoji:"🦵",difficulty:"Hard",description:"Power development session emphasizing speed and force production — box jumps, trap bar deadlifts, Bulgarian split squats, and single-leg RDLs."},{id:7,name:"Foam Roll Recovery",duration:"20 min",type:"Recovery",emoji:"🔄",difficulty:"Easy",description:"Full-body self-myofascial release targeting commonly tight areas — quads, IT band, thoracic spine, and calves. Great standalone or pre/post workout."},{id:8,name:"Shoulder Mobility",duration:"15 min",type:"Mobility",emoji:"🙆",difficulty:"Easy",description:"Thoracic mobility drills, shoulder circles, and rotator cuff activation to keep the shoulder girdle healthy and pain-free for pressing movements."}],Gp={1:"Focus on bracing your core throughout the lifts. Keep your chest up on the squat and drive through the heels.",2:"Move slowly through the 90/90 transitions. Hold each position for at least 5 deep breaths — the goal is control, not range.",3:"Prioritize shoulder packing. Depress and retract the scapula before any press movement to protect the joint.",5:"The goal here is tension, not movement. Think about resisting force in every direction during the Pallof press.",6:"Rest fully between power sets — quality over quantity. This is not a circuit, treat each set as a max effort."};function bs(){const e=new Date().getDay();return e===0?6:e-1}function Ac(e){const t=new Date,n=t.getDay(),r=new Date(t);return r.setDate(t.getDate()-(n===0?6:n-1)+e*7),Array.from({length:7},(o,l)=>{const i=new Date(r);return i.setDate(r.getDate()+l),i})}function Xp(e){const t=Ac(e),n=t[0],r=t[6],o=n.toLocaleString("default",{month:"short"}),l=r.toLocaleString("default",{month:"short"});return o===l?`${o} ${n.getDate()} – ${r.getDate()}`:`${o} ${n.getDate()} – ${l} ${r.getDate()}`}function Jp({workout:e,note:t,onNoteChange:n,onClose:r,onAddToPlan:o}){E.useEffect(()=>{const i=s=>{s.key==="Escape"&&r()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[r]);const l=_t[e.type]||_t.Strength;return a.jsx("div",{className:"mp-backdrop",onClick:r,children:a.jsxs("div",{className:"mp-modal",onClick:i=>i.stopPropagation(),children:[a.jsxs("div",{className:"mp-video-area",children:[a.jsx("div",{className:"mp-video-play",children:a.jsxs("svg",{width:"56",height:"56",viewBox:"0 0 56 56",children:[a.jsx("circle",{cx:"28",cy:"28",r:"27",fill:"rgba(245,132,31,.12)",stroke:"rgba(245,132,31,.4)",strokeWidth:"1.5"}),a.jsx("polygon",{points:"23,19 41,28 23,37",fill:"#F5841F"})]})}),a.jsx("span",{className:"mp-video-hint",children:"Video coming soon"}),a.jsx("button",{className:"mp-modal-close-vid",onClick:r,children:"×"})]}),a.jsxs("div",{className:"mp-modal-content",children:[a.jsxs("div",{className:"mp-modal-head",children:[a.jsx("span",{className:"mp-modal-emoji",children:e.emoji}),a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{className:"mp-modal-name",children:e.name}),a.jsxs("div",{className:"mp-modal-chips",children:[a.jsx("span",{className:"mp-type-pill",style:{color:l.color,background:l.bg},children:e.type}),a.jsx("span",{className:"mp-chip-muted",children:e.duration}),a.jsx("span",{className:"mp-chip-muted",children:e.difficulty})]})]})]}),a.jsx("p",{className:"mp-modal-desc",children:e.description}),a.jsx("div",{className:"mp-modal-divider"}),a.jsxs("div",{className:"mp-note-block",children:[a.jsxs("div",{className:"mp-note-label",children:[a.jsx("span",{className:"mp-note-dot",style:{background:"#F5841F"}}),"Trainer Notes",a.jsx("span",{className:"mp-note-by",children:"Andrea"})]}),a.jsx("div",{className:"mp-trainer-note",children:Gp[e.id]||"No trainer notes yet for this workout."})]}),a.jsxs("div",{className:"mp-note-block",children:[a.jsxs("div",{className:"mp-note-label",children:[a.jsx("span",{className:"mp-note-dot",style:{background:"#64D2FF"}}),"Your Notes"]}),a.jsx("textarea",{className:"mp-note-area",placeholder:"How did it feel? Weights used, reps completed, anything to remember…",value:t,onChange:i=>n(i.target.value)})]}),a.jsxs("div",{className:"mp-modal-actions",children:[a.jsx("button",{className:"mp-btn-ghost",onClick:r,children:"Close"}),a.jsx("button",{className:"mp-btn-orange",onClick:o,children:"Add to Plan"})]})]})]})})}const Zp=`
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
.mp { min-height: 100vh; background: var(--bg); padding-bottom: 60px; }
.mp-header { display: flex; justify-content: center; padding: 48px 0 16px; }
.mp-logo   { height: 38px; width: auto; }
.mp-rule   { border: none; border-top: 1px solid var(--line); }

/* ── title ── */
.mp-title-row { max-width: 980px; margin: 22px auto 0; padding: 0 20px; }
.mp-title     { font-family: 'Cormorant', serif; font-size: 40px; font-weight: 600; line-height: 1.1; }
.mp-title em  { font-style: italic; color: var(--orange); }
.mp-subtitle  { font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.5; }

/* ── stats bar ── */
.mp-stats { max-width: 980px; margin: 20px auto 0; padding: 0 20px; display: flex; gap: 10px; }
.mp-stat  {
  flex: 1; background: var(--surface); border: 1px solid var(--line); border-radius: 14px;
  padding: 14px 16px; display: flex; align-items: center; gap: 12px;
}
.mp-stat-icon { font-size: 22px; line-height: 1; flex-shrink: 0; }
.mp-stat-val  { font-size: 22px; font-weight: 700; line-height: 1; }
.mp-stat-lbl  { font-size: 9px; color: var(--muted); font-weight: 700; letter-spacing: .1em; text-transform: uppercase; margin-top: 3px; }

/* ── body layout ── */
.mp-body  { max-width: 980px; margin: 20px auto 0; padding: 0 20px; display: flex; gap: 20px; align-items: flex-start; }
.mp-left  { flex: 1; min-width: 0; }
.mp-right { width: 272px; flex-shrink: 0; }

/* ── top row (week nav + tabs) ── */
.mp-top-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; gap: 16px; }
.mp-week-group { display: flex; align-items: center; gap: 10px; }
.mp-week-label { font-size: 13px; font-weight: 600; }
.mp-week-btn {
  background: var(--surface2); border: 1px solid var(--line); border-radius: 8px;
  color: var(--text); width: 28px; height: 28px; font-size: 16px; cursor: pointer;
  display: flex; align-items: center; justify-content: center; transition: border-color .15s;
}
.mp-week-btn:hover { border-color: var(--orange); }

/* ── tabs ── */
.mp-tabs { display: flex; border: 1px solid var(--line); border-radius: 10px; overflow: hidden; background: var(--surface2); }
.mp-tab {
  flex: 1; padding: 7px 16px; font-size: 12px; font-weight: 600; color: var(--muted);
  background: none; border: none; cursor: pointer; font-family: 'Inter', sans-serif;
  transition: color .15s, background .15s;
}
.mp-tab.active { background: var(--surface); color: var(--text); }

/* ── day strip ── */
.mp-day-strip { display: flex; gap: 6px; margin-bottom: 14px; }
.mp-day-cell  {
  flex: 1; background: var(--surface); border: 1px solid var(--line); border-radius: 12px;
  padding: 9px 4px 8px; text-align: center; cursor: pointer;
  transition: border-color .15s, background .15s;
}
.mp-day-cell:hover       { border-color: var(--muted); }
.mp-day-cell.today       { border-color: rgba(245,132,31,.4); }
.mp-day-cell.selected    { background: var(--orange-tint); border-color: var(--orange-bd); }
.mp-day-name { font-size: 9px; font-weight: 700; letter-spacing: .08em; color: var(--muted); text-transform: uppercase; }
.mp-day-num  { font-size: 17px; font-weight: 700; margin: 3px 0 5px; }
.mp-day-dots { display: flex; justify-content: center; gap: 3px; min-height: 5px; }
.mp-day-dot  { width: 4px; height: 4px; border-radius: 50%; }

/* ── day detail ── */
.mp-day-detail {
  background: var(--surface); border: 1px solid var(--line); border-radius: 16px;
  padding: 18px; min-height: 300px; position: relative;
  transition: border-color .15s, background .15s;
}
.mp-day-detail.drag-over { border-color: var(--orange); background: var(--orange-tint); }
.mp-detail-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.mp-detail-title  { font-size: 13px; font-weight: 700; }
.mp-detail-badge  {
  font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: var(--muted); background: var(--surface2); border-radius: 8px; padding: 3px 8px;
}
.mp-empty { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 48px 0; color: var(--muted); }
.mp-empty-icon { font-size: 32px; }
.mp-empty-txt  { font-size: 13px; }
.mp-empty-hint { font-size: 11px; color: var(--line); }

/* ── workout items ── */
.mp-workout-item {
  display: flex; align-items: center; gap: 10px;
  background: var(--surface2); border: 1px solid transparent; border-radius: 12px;
  padding: 11px 13px; margin-bottom: 8px;
  transition: border-color .15s;
}
.mp-workout-item:hover { border-color: var(--line); }
.mp-check {
  width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid var(--line);
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  cursor: pointer; background: none; transition: all .15s;
}
.mp-check.done { background: #30D158; border-color: #30D158; }
.mp-item-emoji { font-size: 18px; flex-shrink: 0; }
.mp-item-info  { flex: 1; min-width: 0; cursor: pointer; }
.mp-item-name  { font-size: 13px; font-weight: 600; transition: opacity .15s; }
.mp-item-name.done { opacity: .4; text-decoration: line-through; }
.mp-item-meta  { display: flex; align-items: center; gap: 6px; margin-top: 3px; }
.mp-item-dur   { font-size: 11px; color: var(--muted); }
.mp-del {
  background: none; border: none; color: var(--line); cursor: pointer;
  font-size: 18px; padding: 0; line-height: 1; transition: color .15s; flex-shrink: 0;
}
.mp-del:hover { color: #FF453A; }
.mp-type-pill  {
  font-size: 9px; font-weight: 700; border-radius: 10px; padding: 2px 7px;
  letter-spacing: .04em; white-space: nowrap; flex-shrink: 0;
}

/* ── library ── */
.mp-lib-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.mp-lib-title  { font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); }
.mp-lib-controls { display: flex; align-items: center; gap: 6px; }
.mp-lib-list { display: flex; flex-direction: column; gap: 8px; }
.mp-lib-card {
  background: var(--surface); border: 1px solid var(--line); border-radius: 12px;
  padding: 12px 14px; cursor: pointer; user-select: none;
  transition: border-color .15s, transform .15s;
}
.mp-lib-card:hover  { border-color: var(--orange-bd); transform: translateY(-1px); }
.mp-lib-card:active { cursor: grabbing; }
.mp-lib-top  { display: flex; align-items: center; gap: 9px; margin-bottom: 6px; }
.mp-lib-emoji { font-size: 19px; }
.mp-lib-name  { font-size: 13px; font-weight: 600; }
.mp-lib-meta  { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.mp-lib-dur   { font-size: 11px; color: var(--muted); }
.mp-lib-diff  { font-size: 10px; color: var(--muted); background: var(--surface2); border-radius: 10px; padding: 2px 7px; }
@keyframes cardJiggleMP {
  0%,100% { transform: rotate(0deg)  scale(1);    }
  15%     { transform: rotate(-5deg) scale(1.05); }
  35%     { transform: rotate(4deg)  scale(1.05); }
  55%     { transform: rotate(-3deg) scale(1.03); }
  75%     { transform: rotate(2deg)  scale(1.01); }
}
.mp-lib-card.mp-grabbing { animation: cardJiggleMP .42s cubic-bezier(.36,.07,.19,.97) both; opacity: 0.5; }

/* ── library search (same pattern as food journal) ── */
.mp-search-wrap  { display: flex; align-items: center; gap: 6px; }
.mp-search-slide { max-width: 0; overflow: hidden; display: flex; justify-content: flex-end; transition: max-width .52s cubic-bezier(.22,1,.36,1); }
.mp-search-wrap.expanded .mp-search-slide { max-width: 140px; }
.mp-search-input {
  width: 120px; background: transparent; border: none; border-radius: 0;
  border-bottom: 1.5px solid var(--line); padding: 4px 2px; color: var(--text);
  font-size: 12px; font-family: 'Inter', sans-serif; outline: none;
  opacity: 0; transition: opacity .2s ease .22s, border-color .15s;
}
.mp-search-wrap.expanded .mp-search-input { opacity: 1; }
.mp-search-input::placeholder { color: var(--muted); }
.mp-search-input:focus { border-bottom-color: var(--orange); }
.mp-search-icon {
  background: var(--surface2); border: 1px solid var(--line); border-radius: 8px;
  color: var(--muted); width: 30px; height: 30px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: color .15s, border-color .15s;
}
.mp-search-icon:hover { color: var(--text); border-color: var(--orange); }
.mp-search-wrap.expanded .mp-search-icon { color: var(--text); border-color: var(--orange); }

/* ── library filter dropdown ── */
.mp-filter-wrap { position: relative; }
.mp-filter-btn {
  background: var(--surface2); border: 1px solid var(--line); border-radius: 8px;
  padding: 5px 10px; color: var(--text); font-size: 12px; font-family: 'Inter', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 6px; height: 30px;
  transition: border-color .15s; white-space: nowrap; min-width: 68px;
}
.mp-filter-btn:hover { border-color: var(--orange); }
.mp-filter-chev { color: var(--muted); transition: transform .2s; flex-shrink: 0; }
.mp-filter-wrap.open .mp-filter-chev { transform: rotate(180deg); }
@keyframes mpDropIn { from { opacity: 0; transform: translateY(-6px) scale(.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
.mp-filter-drop {
  position: absolute; top: calc(100% + 6px); right: 0; z-index: 200;
  background: var(--surface); border: 1px solid var(--line); border-radius: 10px;
  min-width: 140px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,.6);
  animation: mpDropIn .18s cubic-bezier(.22,1,.36,1) both;
}
.mp-filter-opt {
  display: block; width: 100%; padding: 9px 14px; text-align: left;
  background: none; border: none; color: var(--muted); font-size: 12px;
  font-family: 'Inter', sans-serif; cursor: pointer; transition: background .12s, color .12s;
}
.mp-filter-opt + .mp-filter-opt { border-top: 1px solid var(--line); }
.mp-filter-opt:hover  { background: var(--surface2); color: var(--text); }
.mp-filter-opt.active { color: var(--orange); font-weight: 600; }

/* ── modal ── */
.mp-backdrop {
  position: fixed; inset: 0; background: rgba(0,0,0,.78); backdrop-filter: blur(5px);
  display: flex; align-items: center; justify-content: center; z-index: 1000;
  animation: mpBackdropIn .2s ease both;
}
@keyframes mpBackdropIn { from { opacity: 0; } to { opacity: 1; } }
.mp-modal {
  background: var(--surface); border: 1px solid var(--line); border-radius: 20px;
  width: min(740px, 95vw); max-height: 88vh; overflow: hidden; display: flex; flex-direction: column;
  animation: mpModalIn .28s cubic-bezier(.22,1,.36,1) both;
}
@keyframes mpModalIn { from { opacity: 0; transform: scale(.95) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
.mp-video-area {
  background: #0B0B0C; height: 200px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 10px; flex-shrink: 0; position: relative;
}
.mp-video-hint { font-size: 11px; color: var(--muted); }
.mp-modal-close-vid {
  position: absolute; top: 12px; right: 14px;
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 50%;
  width: 30px; height: 30px; font-size: 18px; color: var(--muted); cursor: pointer;
  display: flex; align-items: center; justify-content: center; transition: color .15s;
}
.mp-modal-close-vid:hover { color: var(--text); }
.mp-modal-content { padding: 22px 26px 26px; overflow-y: auto; display: flex; flex-direction: column; gap: 16px; }
.mp-modal-head   { display: flex; align-items: flex-start; gap: 14px; }
.mp-modal-emoji  { font-size: 30px; flex-shrink: 0; }
.mp-modal-name   { font-size: 20px; font-weight: 700; margin-bottom: 6px; }
.mp-modal-chips  { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.mp-chip-muted   { font-size: 11px; color: var(--muted); background: var(--surface2); border-radius: 10px; padding: 2px 8px; }
.mp-modal-desc   { font-size: 13px; color: var(--muted); line-height: 1.7; }
.mp-modal-divider { border: none; border-top: 1px solid var(--line); }
.mp-note-block   { display: flex; flex-direction: column; gap: 8px; }
.mp-note-label   { display: flex; align-items: center; gap: 7px; font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); }
.mp-note-dot     { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.mp-note-by      { color: var(--orange); font-weight: 600; letter-spacing: 0; text-transform: none; font-size: 11px; }
.mp-trainer-note { font-size: 13px; color: var(--muted); line-height: 1.7; background: var(--surface2); border-radius: 10px; padding: 12px 14px; }
.mp-note-area    {
  background: var(--surface2); border: 1px solid var(--line); border-radius: 10px;
  padding: 11px 14px; color: var(--text); font-size: 13px; font-family: 'Inter', sans-serif;
  outline: none; resize: vertical; min-height: 80px; line-height: 1.6;
  transition: border-color .15s;
}
.mp-note-area:focus { border-color: var(--orange); }
.mp-note-area::placeholder { color: var(--muted); }
.mp-modal-actions { display: flex; gap: 10px; justify-content: flex-end; }
.mp-btn-ghost  {
  background: none; border: 1px solid var(--line); border-radius: 10px;
  padding: 10px 22px; font-size: 13px; font-weight: 600; color: var(--muted);
  cursor: pointer; font-family: 'Inter', sans-serif; transition: border-color .15s, color .15s;
}
.mp-btn-ghost:hover  { border-color: var(--muted); color: var(--text); }
.mp-btn-orange {
  background: var(--orange); border: none; border-radius: 10px;
  padding: 10px 22px; font-size: 13px; font-weight: 700; color: #fff;
  cursor: pointer; font-family: 'Inter', sans-serif; transition: opacity .15s;
}
.mp-btn-orange:hover { opacity: .88; }
`;function qp(){const[e,t]=E.useState("plan"),[n,r]=E.useState(bs()),[o,l]=E.useState(0),[i,s]=E.useState({plan:{0:[{id:"p1",wid:1}],2:[{id:"p2",wid:2},{id:"p3",wid:5}],4:[{id:"p4",wid:3},{id:"p5",wid:7}]},log:{0:[{id:"l1",wid:1,done:!0}],1:[{id:"l2",wid:2,done:!0},{id:"l3",wid:4,done:!0}],2:[{id:"l4",wid:5,done:!1}]}}),[u,d]=E.useState(null),[x,g]=E.useState({}),[m,j]=E.useState(!1),[b,N]=E.useState(""),[$,f]=E.useState(""),[c,p]=E.useState(!1),[w,z]=E.useState(!1),k=E.useRef(null),F=E.useRef(null),_=E.useRef(null);E.useEffect(()=>{const M=A=>{_.current&&!_.current.contains(A.target)&&z(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]);const B=Ac(o),v=bs(),I=o===0,R=(i[e][n]||[]).map(M=>({...M,workout:Fn.find(A=>A.id===M.wid)})).filter(M=>M.workout),W=M=>{s(A=>({...A,log:{...A.log,[n]:(A.log[n]||[]).map(H=>H.id===M?{...H,done:!H.done}:H)}}))},G=M=>{s(A=>({...A,[e]:{...A[e],[n]:(A[e][n]||[]).filter(H=>H.id!==M)}}))},ue=M=>{const A={id:Date.now().toString(),wid:M.id,done:!1};s(H=>({...H,[e]:{...H[e],[n]:[...H[e][n]||[],A]}}))},C=[...new Set(Fn.map(M=>M.type))],T=Fn.filter(M=>{const A=b.toLowerCase();return(!A||M.name.toLowerCase().includes(A))&&(!$||M.type===$)}),P=Object.values(i.log).flat().filter(M=>M.done).length,y=Object.values(i.plan).flat().length,D=(i[e][n]||[]).reduce((M,A)=>{const H=Fn.find(V=>V.id===A.wid);return M+(H?parseInt(H.duration):0)},0),O=M=>(i[e][M]||[]).slice(0,3).map(A=>{var V;const H=Fn.find(pe=>pe.id===A.wid);return H&&((V=_t[H.type])==null?void 0:V.color)||"#F5841F"});return a.jsxs("div",{className:"mp",children:[a.jsx("style",{children:Zp}),a.jsx("div",{className:"mp-header",children:a.jsx("img",{src:Lo,alt:"Abate Wellness",className:"mp-logo"})}),a.jsx("hr",{className:"mp-rule"}),a.jsxs("div",{className:"mp-title-row",children:[a.jsxs("h1",{className:"mp-title",children:["My ",a.jsx("em",{children:"program"})]}),a.jsx("p",{className:"mp-subtitle",children:"Your personalized training plan, workout library, and progress log."})]}),a.jsxs("div",{className:"mp-stats",children:[a.jsxs("div",{className:"mp-stat",children:[a.jsx("span",{className:"mp-stat-icon",children:"🔥"}),a.jsxs("div",{children:[a.jsx("div",{className:"mp-stat-val",children:"3"}),a.jsx("div",{className:"mp-stat-lbl",children:"Week streak"})]})]}),a.jsxs("div",{className:"mp-stat",children:[a.jsx("span",{className:"mp-stat-icon",children:"✅"}),a.jsxs("div",{children:[a.jsx("div",{className:"mp-stat-val",children:P}),a.jsx("div",{className:"mp-stat-lbl",children:"Done this week"})]})]}),a.jsxs("div",{className:"mp-stat",children:[a.jsx("span",{className:"mp-stat-icon",children:"📋"}),a.jsxs("div",{children:[a.jsx("div",{className:"mp-stat-val",children:y}),a.jsx("div",{className:"mp-stat-lbl",children:"Planned"})]})]}),a.jsxs("div",{className:"mp-stat",children:[a.jsx("span",{className:"mp-stat-icon",children:"⏱"}),a.jsxs("div",{children:[a.jsxs("div",{className:"mp-stat-val",children:[D,a.jsx("span",{style:{fontSize:12,color:"var(--muted)",fontWeight:400},children:"m"})]}),a.jsx("div",{className:"mp-stat-lbl",children:"Today's time"})]})]})]}),a.jsxs("div",{className:"mp-body",children:[a.jsxs("div",{className:"mp-left",children:[a.jsxs("div",{className:"mp-top-row",children:[a.jsxs("div",{className:"mp-week-group",children:[a.jsx("button",{className:"mp-week-btn",onClick:()=>l(M=>M-1),children:"‹"}),a.jsx("span",{className:"mp-week-label",children:Xp(o)}),a.jsx("button",{className:"mp-week-btn",onClick:()=>l(M=>M+1),children:"›"})]}),a.jsxs("div",{className:"mp-tabs",children:[a.jsx("button",{className:`mp-tab${e==="log"?" active":""}`,onClick:()=>t("log"),children:"My Log"}),a.jsx("button",{className:`mp-tab${e==="plan"?" active":""}`,onClick:()=>t("plan"),children:"My Plan"})]})]}),a.jsx("div",{className:"mp-day-strip",children:ks.map((M,A)=>{const H=B[A],V=I&&A===v,pe=A===n,bn=O(A);return a.jsxs("div",{className:`mp-day-cell${V?" today":""}${pe?" selected":""}`,onClick:()=>r(A),children:[a.jsx("div",{className:"mp-day-name",children:M}),a.jsx("div",{className:"mp-day-num",children:H.getDate()}),a.jsx("div",{className:"mp-day-dots",children:bn.map(($c,Bc)=>a.jsx("div",{className:"mp-day-dot",style:{background:$c}},Bc))})]},A)})}),a.jsxs("div",{className:`mp-day-detail${m?" drag-over":""}`,onDragOver:M=>{M.preventDefault(),j(!0)},onDragLeave:()=>j(!1),onDrop:()=>{j(!1),k.current&&(ue(k.current),k.current=null)},children:[a.jsxs("div",{className:"mp-detail-head",children:[a.jsxs("span",{className:"mp-detail-title",children:[ks[n],", ",B[n].toLocaleString("default",{month:"short"})," ",B[n].getDate()]}),a.jsx("span",{className:"mp-detail-badge",children:e==="log"?"My Log":"My Plan"})]}),R.length===0?a.jsxs("div",{className:"mp-empty",children:[a.jsx("span",{className:"mp-empty-icon",children:"🏃"}),a.jsxs("span",{className:"mp-empty-txt",children:["No workouts ",e==="log"?"logged":"planned"," for this day"]}),a.jsx("span",{className:"mp-empty-hint",children:"Drag a workout from the library →"})]}):R.map(({id:M,done:A,workout:H})=>{const V=_t[H.type]||_t.Strength;return a.jsxs("div",{className:"mp-workout-item",children:[e==="log"&&a.jsx("button",{className:`mp-check${A?" done":""}`,onClick:pe=>{pe.stopPropagation(),W(M)},children:A&&a.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"20 6 9 17 4 12"})})}),a.jsx("span",{className:"mp-item-emoji",children:H.emoji}),a.jsxs("div",{className:"mp-item-info",onClick:()=>d(H),children:[a.jsx("div",{className:`mp-item-name${A?" done":""}`,children:H.name}),a.jsxs("div",{className:"mp-item-meta",children:[a.jsx("span",{className:"mp-type-pill",style:{color:V.color,background:V.bg},children:H.type}),a.jsx("span",{className:"mp-item-dur",children:H.duration})]})]}),a.jsx("button",{className:"mp-del",onClick:pe=>{pe.stopPropagation(),G(M)},children:"×"})]},M)})]})]}),a.jsxs("div",{className:"mp-right",children:[a.jsxs("div",{className:"mp-lib-header",children:[a.jsx("span",{className:"mp-lib-title",children:"Workout Library"}),a.jsxs("div",{className:"mp-lib-controls",children:[a.jsxs("div",{className:`mp-search-wrap${c?" expanded":""}`,children:[a.jsx("div",{className:"mp-search-slide",children:a.jsx("input",{ref:F,className:"mp-search-input",placeholder:"Search...",value:b,onChange:M=>N(M.target.value),onBlur:()=>{b||p(!1)}})}),a.jsx("button",{className:"mp-search-icon",onMouseDown:M=>M.preventDefault(),onClick:()=>{c?(p(!1),N("")):(p(!0),setTimeout(()=>{var M;return(M=F.current)==null?void 0:M.focus()},30))},children:a.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),a.jsxs("div",{ref:_,className:`mp-filter-wrap${w?" open":""}`,children:[a.jsxs("button",{className:"mp-filter-btn",onClick:()=>z(M=>!M),children:[$||"All",a.jsx("svg",{className:"mp-filter-chev",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),w&&a.jsx("div",{className:"mp-filter-drop",children:["",...C].map(M=>a.jsx("button",{className:`mp-filter-opt${$===M?" active":""}`,onMouseDown:A=>{A.preventDefault(),f(M),z(!1)},children:M||"All"},M))})]})]})]}),a.jsxs("div",{className:"mp-lib-list",children:[T.length===0&&a.jsx("div",{style:{fontSize:12,color:"var(--muted)",textAlign:"center",padding:"20px 0"},children:"No workouts match."}),T.map(M=>{const A=_t[M.type]||_t.Strength;return a.jsxs("div",{className:"mp-lib-card",draggable:!0,onDragStart:H=>{k.current=M,H.currentTarget.classList.add("mp-grabbing");const V=document.createElement("div");V.innerHTML=`<span style="font-size:15px">${M.emoji}</span><span style="font-size:12px;font-weight:600;font-family:Inter,sans-serif">${M.name}</span>`,V.style.cssText="position:fixed;top:-9999px;left:0;background:#1C1C1E;border:1px solid rgba(245,132,31,.75);border-radius:20px;padding:7px 14px;color:#fff;display:flex;align-items:center;gap:8px;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.75);transform:rotate(-2deg);",document.body.appendChild(V),H.dataTransfer.setDragImage(V,V.offsetWidth/2,V.offsetHeight/2),setTimeout(()=>{try{document.body.removeChild(V)}catch{}},100)},onDragEnd:H=>{H.currentTarget.classList.remove("mp-grabbing"),k.current=null},onClick:()=>d(M),children:[a.jsxs("div",{className:"mp-lib-top",children:[a.jsx("span",{className:"mp-lib-emoji",children:M.emoji}),a.jsx("span",{className:"mp-lib-name",children:M.name})]}),a.jsxs("div",{className:"mp-lib-meta",children:[a.jsx("span",{className:"mp-type-pill",style:{color:A.color,background:A.bg},children:M.type}),a.jsx("span",{className:"mp-lib-dur",children:M.duration}),a.jsx("span",{className:"mp-lib-diff",children:M.difficulty})]})]},M.id)})]})]})]}),u&&a.jsx(Jp,{workout:u,note:x[u.id]||"",onNoteChange:M=>g(A=>({...A,[u.id]:M})),onClose:()=>d(null),onAddToPlan:()=>{ue(u),d(null)}})]})}const Ye=window.self!==window.top;function em(){const e=new URLSearchParams(window.location.search).get("view");return e==="admin"?"admin":e==="client"?"client":e==="confirm"?"confirm":e==="schedule"?"schedule":e==="food-journal"?"food-journal":e==="my-program"?"my-program":Ye?null:"client"}function tm(){const[e,t]=E.useState(em),[n,r]=E.useState(null),[o,l]=E.useState(null),[i,s]=E.useState(null),[u,d]=E.useState({}),[x,g]=E.useState(null),[m,j]=E.useState(null),[b,N]=E.useState(!Ye),[$,f]=E.useState(!1),c=E.useRef(null);E.useEffect(()=>{let k;const F=()=>{clearTimeout(k),k=setTimeout(()=>{var I;const v=(I=c.current)==null?void 0:I.scrollHeight;v>0&&window.parent.postMessage({type:"abate-resize",height:v+40},"*")},50)},_=new ResizeObserver(F);c.current&&_.observe(c.current),F(),Ye&&window.parent.postMessage({type:"abate-ready"},"*");const B=v=>{var I;if((I=v.data)!=null&&I.type){if(v.data.type==="abate-mode"&&t(v.data.mode),v.data.type==="abate-data"){const R=v.data.slots??null;if(r(R),R){const W={};Object.values(R).flat().forEach(G=>{G.userBookingId&&(W[G.id]=G.userBookingId)}),Object.keys(W).length>0&&d(G=>({...W,...G}))}}v.data.type==="abate-booked"&&d(R=>({...R,[v.data.slotId]:v.data.bookingId})),v.data.type==="abate-error"&&g({slotId:v.data.slotId,message:v.data.message}),v.data.type==="abate-confirm-data"&&l(v.data.slot??null),v.data.type==="abate-schedule-data"&&s(v.data.sessions??[]),v.data.type==="abate-prefs"&&(j(v.data.prefs??[]),N(!0)),v.data.type==="abate-prefs-saved"&&f(!1),v.data.type==="abate-prefs-error"&&f(!1)}};return window.addEventListener("message",B),()=>{clearTimeout(k),_.disconnect(),window.removeEventListener("message",B)}},[]);const p=E.useCallback(k=>{if(Ye)switch(k.type){case"weekChange":window.parent.postMessage({type:"abate-week",mondayISO:k.mondayISO},"*");break;case"book":window.parent.postMessage({type:"abate-book",slotId:k.slot.id,slotData:k.slot.slotData,slotInfo:{day:k.slot.day,time:k.slot.time,service:k.slot.service}},"*");break;case"waitlist":window.parent.postMessage({type:"abate-waitlist",slotId:k.slot.id,slotData:k.slot.slotData,slotInfo:{day:k.slot.day,time:k.slot.time,service:k.slot.service}},"*");break;case"cancel":window.parent.postMessage({type:"abate-cancel",slotId:k.slotId,bookingId:u[k.slotId]},"*");break;case"mySchedule":window.parent.postMessage({type:"abate-my-schedule"},"*");break;case"leaveWaitlist":window.parent.postMessage({type:"abate-leave-waitlist",slotId:k.slotId},"*");break;case"savePrefs":f(!0),window.parent.postMessage({type:"abate-save-prefs",items:k.items},"*");break}},[u]),w=(()=>{const k=new URLSearchParams(window.location.search);return k.get("serviceId")?{serviceId:k.get("serviceId"),startDate:k.get("startDate"),endDate:k.get("endDate"),service:k.get("service"),day:k.get("day"),time:k.get("time")}:null})();let z;return e==="confirm"?z=a.jsx(Tp,{slot:Ye?o:w}):e==="food-journal"?z=a.jsx(Kp,{}):e==="my-program"?z=a.jsx(qp,{}):e==="schedule"?z=a.jsx(Hp,{sessions:Ye?i:[]}):e==="admin"?z=a.jsx(Fp,{livePrefs:Ye?m:null,loading:Ye&&!b,onAction:p,saving:$}):e==="client"?z=a.jsx(Sp,{liveSlots:Ye?n:null,loading:Ye&&n===null,onAction:p,errorMsg:x,onErrorDismiss:()=>g(null)}):z=a.jsx("div",{style:{background:"#0B0B0C",minHeight:"600px"}}),a.jsx("div",{ref:c,children:z})}sl.createRoot(document.getElementById("root")).render(a.jsx(Ds.StrictMode,{children:a.jsx(tm,{})}));
