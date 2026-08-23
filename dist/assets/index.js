(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ns={exports:{}},yo={},Cs={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),Qc=Symbol.for("react.portal"),Yc=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),Jc=Symbol.for("react.profiler"),Gc=Symbol.for("react.provider"),Zc=Symbol.for("react.context"),Xc=Symbol.for("react.forward_ref"),qc=Symbol.for("react.suspense"),ed=Symbol.for("react.memo"),td=Symbol.for("react.lazy"),ra=Symbol.iterator;function nd(e){return e===null||typeof e!="object"?null:(e=ra&&e[ra]||e["@@iterator"],typeof e=="function"?e:null)}var Es={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zs=Object.assign,Ms={};function yn(e,t,n){this.props=e,this.context=t,this.refs=Ms,this.updater=n||Es}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fs(){}Fs.prototype=yn.prototype;function oi(e,t,n){this.props=e,this.context=t,this.refs=Ms,this.updater=n||Es}var li=oi.prototype=new Fs;li.constructor=oi;zs(li,yn.prototype);li.isPureReactComponent=!0;var oa=Array.isArray,Ds=Object.prototype.hasOwnProperty,ii={current:null},Ps={key:!0,ref:!0,__self:!0,__source:!0};function Ls(e,t,n){var r,o={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)Ds.call(t,r)&&!Ps.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:dr,type:e,key:l,ref:a,props:o,_owner:ii.current}}function rd(e,t){return{$$typeof:dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ai(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function od(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var la=/\/+/g;function Io(e,t){return typeof e=="object"&&e!==null&&e.key!=null?od(""+e.key):t.toString(36)}function Ir(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case dr:case Qc:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Io(a,0):r,oa(o)?(n="",e!=null&&(n=e.replace(la,"$&/")+"/"),Ir(o,t,n,"",function(d){return d})):o!=null&&(ai(o)&&(o=rd(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(la,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",oa(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+Io(l,s);a+=Ir(l,t,n,u,o)}else if(u=nd(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+Io(l,s++),a+=Ir(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function hr(e,t,n){if(e==null)return e;var r=[],o=0;return Ir(e,r,"","",function(l){return t.call(n,l,o++)}),r}function ld(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Ar={transition:null},id={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Ar,ReactCurrentOwner:ii};function Ts(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!ai(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=yn;$.Fragment=Yc;$.Profiler=Jc;$.PureComponent=oi;$.StrictMode=Kc;$.Suspense=qc;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=id;$.act=Ts;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zs({},e.props),o=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=ii.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ds.call(t,u)&&!Ps.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:dr,type:e.type,key:o,ref:l,props:r,_owner:a}};$.createContext=function(e){return e={$$typeof:Zc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gc,_context:e},e.Consumer=e};$.createElement=Ls;$.createFactory=function(e){var t=Ls.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Xc,render:e}};$.isValidElement=ai;$.lazy=function(e){return{$$typeof:td,_payload:{_status:-1,_result:e},_init:ld}};$.memo=function(e,t){return{$$typeof:ed,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Ar.transition;Ar.transition={};try{e()}finally{Ar.transition=t}};$.unstable_act=Ts;$.useCallback=function(e,t){return we.current.useCallback(e,t)};$.useContext=function(e){return we.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return we.current.useDeferredValue(e)};$.useEffect=function(e,t){return we.current.useEffect(e,t)};$.useId=function(){return we.current.useId()};$.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return we.current.useMemo(e,t)};$.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};$.useRef=function(e){return we.current.useRef(e)};$.useState=function(e){return we.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return we.current.useTransition()};$.version="18.3.1";Cs.exports=$;var E=Cs.exports;const Is=Hc(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=E,sd=Symbol.for("react.element"),ud=Symbol.for("react.fragment"),cd=Object.prototype.hasOwnProperty,dd=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fd={key:!0,ref:!0,__self:!0,__source:!0};function As(e,t,n){var r,o={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)cd.call(t,r)&&!fd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:sd,type:e,key:l,ref:a,props:o,_owner:dd.current}}yo.Fragment=ud;yo.jsx=As;yo.jsxs=As;Ns.exports=yo;var i=Ns.exports,sl={},_s={exports:{}},De={},Rs={exports:{}},Os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(h,F){var y=h.length;h.push(F);e:for(;0<y;){var L=y-1>>>1,R=h[L];if(0<o(R,F))h[L]=F,h[y]=R,y=L;else break e}}function n(h){return h.length===0?null:h[0]}function r(h){if(h.length===0)return null;var F=h[0],y=h.pop();if(y!==F){h[0]=y;e:for(var L=0,R=h.length,M=R>>>1;L<M;){var O=2*(L+1)-1,V=h[O],Y=O+1,le=h[Y];if(0>o(V,y))Y<R&&0>o(le,V)?(h[L]=le,h[Y]=y,L=Y):(h[L]=V,h[O]=y,L=O);else if(Y<R&&0>o(le,y))h[L]=le,h[Y]=y,L=Y;else break e}}return F}function o(h,F){var y=h.sortIndex-F.sortIndex;return y!==0?y:h.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],x=1,g=null,m=3,j=!1,b=!1,N=!1,B=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(h){for(var F=n(d);F!==null;){if(F.callback===null)r(d);else if(F.startTime<=h)r(d),F.sortIndex=F.expirationTime,t(u,F);else break;F=n(d)}}function w(h){if(N=!1,p(h),!b)if(n(u)!==null)b=!0,C(z);else{var F=n(d);F!==null&&I(w,F.startTime-h)}}function z(h,F){b=!1,N&&(N=!1,f(D),D=-1),j=!0;var y=m;try{for(p(F),g=n(u);g!==null&&(!(g.expirationTime>F)||h&&!A());){var L=g.callback;if(typeof L=="function"){g.callback=null,m=g.priorityLevel;var R=L(g.expirationTime<=F);F=e.unstable_now(),typeof R=="function"?g.callback=R:g===n(u)&&r(u),p(F)}else r(u);g=n(u)}if(g!==null)var M=!0;else{var O=n(d);O!==null&&I(w,O.startTime-F),M=!1}return M}finally{g=null,m=y,j=!1}}var k=!1,P=null,D=-1,U=5,v=-1;function A(){return!(e.unstable_now()-v<U)}function _(){if(P!==null){var h=e.unstable_now();v=h;var F=!0;try{F=P(!0,h)}finally{F?W():(k=!1,P=null)}}else k=!1}var W;if(typeof c=="function")W=function(){c(_)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ce=J.port2;J.port1.onmessage=_,W=function(){ce.postMessage(null)}}else W=function(){B(_,0)};function C(h){P=h,k||(k=!0,W())}function I(h,F){D=B(function(){h(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(h){h.callback=null},e.unstable_continueExecution=function(){b||j||(b=!0,C(z))},e.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<h?Math.floor(1e3/h):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(h){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var y=m;m=F;try{return h()}finally{m=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(h,F){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var y=m;m=h;try{return F()}finally{m=y}},e.unstable_scheduleCallback=function(h,F,y){var L=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?L+y:L):y=L,h){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=y+R,h={id:x++,callback:F,priorityLevel:h,startTime:y,expirationTime:R,sortIndex:-1},y>L?(h.sortIndex=y,t(d,h),n(u)===null&&h===n(d)&&(N?(f(D),D=-1):N=!0,I(w,y-L))):(h.sortIndex=R,t(u,h),b||j||(b=!0,C(z))),h},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(h){var F=m;return function(){var y=m;m=F;try{return h.apply(this,arguments)}finally{m=y}}}})(Os);Rs.exports=Os;var pd=Rs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md=E,Fe=pd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bs=new Set,Kn={};function Wt(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Kn[e]=t,e=0;e<t.length;e++)Bs.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=Object.prototype.hasOwnProperty,gd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia={},aa={};function hd(e){return ul.call(aa,e)?!0:ul.call(ia,e)?!1:gd.test(e)?aa[e]=!0:(ia[e]=!0,!1)}function vd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xd(e,t,n,r){if(t===null||typeof t>"u"||vd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var si=/[\-:]([a-z])/g;function ui(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(si,ui);pe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(si,ui);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(si,ui);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function ci(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xd(t,n,o,r)&&(n=null),r||o===null?hd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),di=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),Us=Symbol.for("react.provider"),Ws=Symbol.for("react.context"),fi=Symbol.for("react.forward_ref"),dl=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),pi=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),$s=Symbol.for("react.offscreen"),sa=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Ao;function Ln(e){if(Ao===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ao=t&&t[1]||""}return`
`+Ao+e}var _o=!1;function Ro(e,t){if(!e||_o)return"";_o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=r.stack.split(`
`),a=o.length-1,s=l.length-1;1<=a&&0<=s&&o[a]!==l[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==l[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==l[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{_o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ln(e):""}function yd(e){switch(e.tag){case 5:return Ln(e.type);case 16:return Ln("Lazy");case 13:return Ln("Suspense");case 19:return Ln("SuspenseList");case 0:case 2:case 15:return e=Ro(e.type,!1),e;case 11:return e=Ro(e.type.render,!1),e;case 1:return e=Ro(e.type,!0),e;default:return""}}function pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Yt:return"Portal";case cl:return"Profiler";case di:return"StrictMode";case dl:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ws:return(e.displayName||"Context")+".Consumer";case Us:return(e._context.displayName||"Context")+".Provider";case fi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pi:return t=e.displayName||null,t!==null?t:pl(e.type)||"Memo";case ct:t=e._payload,e=e._init;try{return pl(e(t))}catch{}}return null}function wd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(t);case 8:return t===di?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kd(e){var t=Vs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=kd(e))}function Hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ua(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=St(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qs(e,t){t=t.checked,t!=null&&ci(e,"checked",t,!1)}function gl(e,t){Qs(e,t);var n=St(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ca(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||Kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function da(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Tn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:St(n)}}function Ys(e,t){var n=St(t.value),r=St(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ks(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ks(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bd=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function Gs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function Zs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Gs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var jd=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yl(e,t){if(t){if(jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kl=null;function mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,an=null,sn=null;function pa(e){if(e=mr(e)){if(typeof bl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=So(t),bl(e.stateNode,e.type,t))}}function Xs(e){an?sn?sn.push(e):sn=[e]:an=e}function qs(){if(an){var e=an,t=sn;if(sn=an=null,pa(e),t)for(e=0;e<t.length;e++)pa(t[e])}}function eu(e,t){return e(t)}function tu(){}var Oo=!1;function nu(e,t,n){if(Oo)return e(t,n);Oo=!0;try{return eu(e,t,n)}finally{Oo=!1,(an!==null||sn!==null)&&(tu(),qs())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=So(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var jl=!1;if(ot)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){jl=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{jl=!1}function Sd(e,t,n,r,o,l,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(x){this.onError(x)}}var Rn=!1,Jr=null,Gr=!1,Sl=null,Nd={onError:function(e){Rn=!0,Jr=e}};function Cd(e,t,n,r,o,l,a,s,u){Rn=!1,Jr=null,Sd.apply(Nd,arguments)}function Ed(e,t,n,r,o,l,a,s,u){if(Cd.apply(this,arguments),Rn){if(Rn){var d=Jr;Rn=!1,Jr=null}else throw Error(S(198));Gr||(Gr=!0,Sl=d)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ru(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ma(e){if($t(e)!==e)throw Error(S(188))}function zd(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return ma(o),e;if(l===r)return ma(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=l;break}if(s===r){a=!0,r=o,n=l;break}s=s.sibling}if(!a){for(s=l.child;s;){if(s===n){a=!0,n=l,r=o;break}if(s===r){a=!0,r=l,n=o;break}s=s.sibling}if(!a)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function ou(e){return e=zd(e),e!==null?lu(e):null}function lu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lu(e);if(t!==null)return t;e=e.sibling}return null}var iu=Fe.unstable_scheduleCallback,ga=Fe.unstable_cancelCallback,Md=Fe.unstable_shouldYield,Fd=Fe.unstable_requestPaint,re=Fe.unstable_now,Dd=Fe.unstable_getCurrentPriorityLevel,gi=Fe.unstable_ImmediatePriority,au=Fe.unstable_UserBlockingPriority,Zr=Fe.unstable_NormalPriority,Pd=Fe.unstable_LowPriority,su=Fe.unstable_IdlePriority,wo=null,Ge=null;function Ld(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(wo,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:Ad,Td=Math.log,Id=Math.LN2;function Ad(e){return e>>>=0,e===0?32:31-(Td(e)/Id|0)|0}var wr=64,kr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=In(s):(l&=a,l!==0&&(r=In(l)))}else a=n&~o,a!==0?r=In(a):l!==0&&(r=In(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),o=1<<n,r|=e[n],t&=~o;return r}function _d(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-$e(l),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=_d(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function Nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=wr;return wr<<=1,!(wr&4194240)&&(wr=64),e}function Bo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function Od(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-$e(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function hi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Q=0;function cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var du,vi,fu,pu,mu,Cl=!1,br=[],ht=null,vt=null,xt=null,Zn=new Map,Xn=new Map,ft=[],Bd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ha(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Nn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=mr(t),t!==null&&vi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ud(e,t,n,r,o){switch(t){case"focusin":return ht=Nn(ht,e,t,n,r,o),!0;case"dragenter":return vt=Nn(vt,e,t,n,r,o),!0;case"mouseover":return xt=Nn(xt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Zn.set(l,Nn(Zn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Xn.set(l,Nn(Xn.get(l)||null,e,t,n,r,o)),!0}return!1}function gu(e){var t=Dt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=ru(n),t!==null){e.blockedOn=t,mu(e.priority,function(){fu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kl=r,n.target.dispatchEvent(r),kl=null}else return t=mr(n),t!==null&&vi(t),e.blockedOn=n,!1;t.shift()}return!0}function va(e,t,n){_r(e)&&n.delete(t)}function Wd(){Cl=!1,ht!==null&&_r(ht)&&(ht=null),vt!==null&&_r(vt)&&(vt=null),xt!==null&&_r(xt)&&(xt=null),Zn.forEach(va),Xn.forEach(va)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,Wd)))}function qn(e){function t(o){return Cn(o,e)}if(0<br.length){Cn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&Cn(ht,e),vt!==null&&Cn(vt,e),xt!==null&&Cn(xt,e),Zn.forEach(t),Xn.forEach(t),n=0;n<ft.length;n++)r=ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ft.length&&(n=ft[0],n.blockedOn===null);)gu(n),n.blockedOn===null&&ft.shift()}var un=st.ReactCurrentBatchConfig,qr=!0;function $d(e,t,n,r){var o=Q,l=un.transition;un.transition=null;try{Q=1,xi(e,t,n,r)}finally{Q=o,un.transition=l}}function Vd(e,t,n,r){var o=Q,l=un.transition;un.transition=null;try{Q=4,xi(e,t,n,r)}finally{Q=o,un.transition=l}}function xi(e,t,n,r){if(qr){var o=El(e,t,n,r);if(o===null)Go(e,t,r,eo,n),ha(e,r);else if(Ud(o,e,t,n,r))r.stopPropagation();else if(ha(e,r),t&4&&-1<Bd.indexOf(e)){for(;o!==null;){var l=mr(o);if(l!==null&&du(l),l=El(e,t,n,r),l===null&&Go(e,t,r,eo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Go(e,t,r,null,n)}}var eo=null;function El(e,t,n,r){if(eo=null,e=mi(r),e=Dt(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ru(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return eo=e,null}function hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dd()){case gi:return 1;case au:return 4;case Zr:case Pd:return 16;case su:return 536870912;default:return 16}default:return 16}}var mt=null,yi=null,Rr=null;function vu(){if(Rr)return Rr;var e,t=yi,n=t.length,r,o="value"in mt?mt.value:mt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[l-r];r++);return Rr=o.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jr(){return!0}function xa(){return!1}function Pe(e){function t(n,r,o,l,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?jr:xa,this.isPropagationStopped=xa,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=Pe(wn),pr=te({},wn,{view:0,detail:0}),Hd=Pe(pr),Uo,Wo,En,ko=te({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ki,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Uo=e.screenX-En.screenX,Wo=e.screenY-En.screenY):Wo=Uo=0,En=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:Wo}}),ya=Pe(ko),Qd=te({},ko,{dataTransfer:0}),Yd=Pe(Qd),Kd=te({},pr,{relatedTarget:0}),$o=Pe(Kd),Jd=te({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=Pe(Jd),Zd=te({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xd=Pe(Zd),qd=te({},wn,{data:0}),wa=Pe(qd),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nf[e])?!!t[e]:!1}function ki(){return rf}var of=te({},pr,{key:function(e){if(e.key){var t=ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ki,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lf=Pe(of),af=te({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ka=Pe(af),sf=te({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ki}),uf=Pe(sf),cf=te({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),df=Pe(cf),ff=te({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=Pe(ff),mf=[9,13,27,32],bi=ot&&"CompositionEvent"in window,On=null;ot&&"documentMode"in document&&(On=document.documentMode);var gf=ot&&"TextEvent"in window&&!On,xu=ot&&(!bi||On&&8<On&&11>=On),ba=" ",ja=!1;function yu(e,t){switch(e){case"keyup":return mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function hf(e,t){switch(e){case"compositionend":return wu(t);case"keypress":return t.which!==32?null:(ja=!0,ba);case"textInput":return e=t.data,e===ba&&ja?null:e;default:return null}}function vf(e,t){if(Jt)return e==="compositionend"||!bi&&yu(e,t)?(e=vu(),Rr=yi=mt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xu&&t.locale!=="ko"?null:t.data;default:return null}}var xf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xf[e.type]:t==="textarea"}function ku(e,t,n,r){Xs(r),t=to(t,"onChange"),0<t.length&&(n=new wi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,er=null;function yf(e){Pu(e,0)}function bo(e){var t=Xt(e);if(Hs(t))return e}function wf(e,t){if(e==="change")return t}var bu=!1;if(ot){var Vo;if(ot){var Ho="oninput"in document;if(!Ho){var Na=document.createElement("div");Na.setAttribute("oninput","return;"),Ho=typeof Na.oninput=="function"}Vo=Ho}else Vo=!1;bu=Vo&&(!document.documentMode||9<document.documentMode)}function Ca(){Bn&&(Bn.detachEvent("onpropertychange",ju),er=Bn=null)}function ju(e){if(e.propertyName==="value"&&bo(er)){var t=[];ku(t,er,e,mi(e)),nu(yf,t)}}function kf(e,t,n){e==="focusin"?(Ca(),Bn=t,er=n,Bn.attachEvent("onpropertychange",ju)):e==="focusout"&&Ca()}function bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo(er)}function jf(e,t){if(e==="click")return bo(t)}function Sf(e,t){if(e==="input"||e==="change")return bo(t)}function Nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:Nf;function tr(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ul.call(t,o)||!He(e[o],t[o]))return!1}return!0}function Ea(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function za(e,t){var n=Ea(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ea(n)}}function Su(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Su(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nu(){for(var e=window,t=Kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cf(e){var t=Nu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Su(n.ownerDocument.documentElement,n)){if(r!==null&&ji(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=za(n,l);var a=za(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ef=ot&&"documentMode"in document&&11>=document.documentMode,Gt=null,zl=null,Un=null,Ml=!1;function Ma(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ml||Gt==null||Gt!==Kr(r)||(r=Gt,"selectionStart"in r&&ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&tr(Un,r)||(Un=r,r=to(zl,"onSelect"),0<r.length&&(t=new wi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zt={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Qo={},Cu={};ot&&(Cu=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function jo(e){if(Qo[e])return Qo[e];if(!Zt[e])return e;var t=Zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cu)return Qo[e]=t[n];return e}var Eu=jo("animationend"),zu=jo("animationiteration"),Mu=jo("animationstart"),Fu=jo("transitionend"),Du=new Map,Fa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){Du.set(e,t),Wt(t,[e])}for(var Yo=0;Yo<Fa.length;Yo++){var Ko=Fa[Yo],zf=Ko.toLowerCase(),Mf=Ko[0].toUpperCase()+Ko.slice(1);Ct(zf,"on"+Mf)}Ct(Eu,"onAnimationEnd");Ct(zu,"onAnimationIteration");Ct(Mu,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(Fu,"onTransitionEnd");fn("onMouseEnter",["mouseout","mouseover"]);fn("onMouseLeave",["mouseout","mouseover"]);fn("onPointerEnter",["pointerout","pointerover"]);fn("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ff=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function Da(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ed(r,t,void 0,e),e.currentTarget=null}function Pu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==l&&o.isPropagationStopped())break e;Da(o,s,d),l=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==l&&o.isPropagationStopped())break e;Da(o,s,d),l=u}}}if(Gr)throw e=Sl,Gr=!1,Sl=null,e}function G(e,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var r=e+"__bubble";n.has(r)||(Lu(t,e,2,!1),n.add(r))}function Jo(e,t,n){var r=0;t&&(r|=4),Lu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Nr]){e[Nr]=!0,Bs.forEach(function(n){n!=="selectionchange"&&(Ff.has(n)||Jo(n,!1,e),Jo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,Jo("selectionchange",!1,t))}}function Lu(e,t,n,r){switch(hu(t)){case 1:var o=$d;break;case 4:o=Vd;break;default:o=xi}n=o.bind(null,t,n,e),o=void 0,!jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Go(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Dt(s),a===null)return;if(u=a.tag,u===5||u===6){r=l=a;continue e}s=s.parentNode}}r=r.return}nu(function(){var d=l,x=mi(n),g=[];e:{var m=Du.get(e);if(m!==void 0){var j=wi,b=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":j=lf;break;case"focusin":b="focus",j=$o;break;case"focusout":b="blur",j=$o;break;case"beforeblur":case"afterblur":j=$o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=uf;break;case Eu:case zu:case Mu:j=Gd;break;case Fu:j=df;break;case"scroll":j=Hd;break;case"wheel":j=pf;break;case"copy":case"cut":case"paste":j=Xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=ka}var N=(t&4)!==0,B=!N&&e==="scroll",f=N?m!==null?m+"Capture":null:m;N=[];for(var c=d,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Gn(c,f),w!=null&&N.push(rr(c,w,p)))),B)break;c=c.return}0<N.length&&(m=new j(m,b,null,n,x),g.push({event:m,listeners:N}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",m&&n!==kl&&(b=n.relatedTarget||n.fromElement)&&(Dt(b)||b[lt]))break e;if((j||m)&&(m=x.window===x?x:(m=x.ownerDocument)?m.defaultView||m.parentWindow:window,j?(b=n.relatedTarget||n.toElement,j=d,b=b?Dt(b):null,b!==null&&(B=$t(b),b!==B||b.tag!==5&&b.tag!==6)&&(b=null)):(j=null,b=d),j!==b)){if(N=ya,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(N=ka,w="onPointerLeave",f="onPointerEnter",c="pointer"),B=j==null?m:Xt(j),p=b==null?m:Xt(b),m=new N(w,c+"leave",j,n,x),m.target=B,m.relatedTarget=p,w=null,Dt(x)===d&&(N=new N(f,c+"enter",b,n,x),N.target=p,N.relatedTarget=B,w=N),B=w,j&&b)t:{for(N=j,f=b,c=0,p=N;p;p=Ht(p))c++;for(p=0,w=f;w;w=Ht(w))p++;for(;0<c-p;)N=Ht(N),c--;for(;0<p-c;)f=Ht(f),p--;for(;c--;){if(N===f||f!==null&&N===f.alternate)break t;N=Ht(N),f=Ht(f)}N=null}else N=null;j!==null&&Pa(g,m,j,N,!1),b!==null&&B!==null&&Pa(g,B,b,N,!0)}}e:{if(m=d?Xt(d):window,j=m.nodeName&&m.nodeName.toLowerCase(),j==="select"||j==="input"&&m.type==="file")var z=wf;else if(Sa(m))if(bu)z=Sf;else{z=bf;var k=kf}else(j=m.nodeName)&&j.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=jf);if(z&&(z=z(e,d))){ku(g,z,n,x);break e}k&&k(e,m,d),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&hl(m,"number",m.value)}switch(k=d?Xt(d):window,e){case"focusin":(Sa(k)||k.contentEditable==="true")&&(Gt=k,zl=d,Un=null);break;case"focusout":Un=zl=Gt=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,Ma(g,n,x);break;case"selectionchange":if(Ef)break;case"keydown":case"keyup":Ma(g,n,x)}var P;if(bi)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Jt?yu(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(xu&&n.locale!=="ko"&&(Jt||D!=="onCompositionStart"?D==="onCompositionEnd"&&Jt&&(P=vu()):(mt=x,yi="value"in mt?mt.value:mt.textContent,Jt=!0)),k=to(d,D),0<k.length&&(D=new wa(D,e,null,n,x),g.push({event:D,listeners:k}),P?D.data=P:(P=wu(n),P!==null&&(D.data=P)))),(P=gf?hf(e,n):vf(e,n))&&(d=to(d,"onBeforeInput"),0<d.length&&(x=new wa("onBeforeInput","beforeinput",null,n,x),g.push({event:x,listeners:d}),x.data=P))}Pu(g,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function to(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Gn(e,n),l!=null&&r.unshift(rr(e,l,o)),l=Gn(e,t),l!=null&&r.push(rr(e,l,o))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pa(e,t,n,r,o){for(var l=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Gn(n,l),u!=null&&a.unshift(rr(n,u,s))):o||(u=Gn(n,l),u!=null&&a.push(rr(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Df=/\r\n?/g,Pf=/\u0000|\uFFFD/g;function La(e){return(typeof e=="string"?e:""+e).replace(Df,`
`).replace(Pf,"")}function Cr(e,t,n){if(t=La(t),La(e)!==t&&n)throw Error(S(425))}function no(){}var Fl=null,Dl=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,Lf=typeof clearTimeout=="function"?clearTimeout:void 0,Ta=typeof Promise=="function"?Promise:void 0,Tf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ta<"u"?function(e){return Ta.resolve(null).then(e).catch(If)}:Ll;function If(e){setTimeout(function(){throw e})}function Zo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);qn(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ia(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Je="__reactFiber$"+kn,or="__reactProps$"+kn,lt="__reactContainer$"+kn,Tl="__reactEvents$"+kn,Af="__reactListeners$"+kn,_f="__reactHandles$"+kn;function Dt(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ia(e);e!==null;){if(n=e[Je])return n;e=Ia(e)}return t}e=n,n=e.parentNode}return null}function mr(e){return e=e[Je]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function So(e){return e[or]||null}var Il=[],qt=-1;function Et(e){return{current:e}}function Z(e){0>qt||(e.current=Il[qt],Il[qt]=null,qt--)}function K(e,t){qt++,Il[qt]=e.current,e.current=t}var Nt={},ve=Et(Nt),Se=Et(!1),_t=Nt;function pn(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function ro(){Z(Se),Z(ve)}function Aa(e,t,n){if(ve.current!==Nt)throw Error(S(168));K(ve,t),K(Se,n)}function Tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,wd(e)||"Unknown",o));return te({},n,r)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,_t=ve.current,K(ve,e),K(Se,Se.current),!0}function _a(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Tu(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,Z(Se),Z(ve),K(ve,e)):Z(Se),K(Se,n)}var et=null,No=!1,Xo=!1;function Iu(e){et===null?et=[e]:et.push(e)}function Rf(e){No=!0,Iu(e)}function zt(){if(!Xo&&et!==null){Xo=!0;var e=0,t=Q;try{var n=et;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}et=null,No=!1}catch(o){throw et!==null&&(et=et.slice(e+1)),iu(gi,zt),o}finally{Q=t,Xo=!1}}return null}var en=[],tn=0,lo=null,io=0,Le=[],Te=0,Rt=null,tt=1,nt="";function Mt(e,t){en[tn++]=io,en[tn++]=lo,lo=e,io=t}function Au(e,t,n){Le[Te++]=tt,Le[Te++]=nt,Le[Te++]=Rt,Rt=e;var r=tt;e=nt;var o=32-$e(r)-1;r&=~(1<<o),n+=1;var l=32-$e(t)+o;if(30<l){var a=o-o%5;l=(r&(1<<a)-1).toString(32),r>>=a,o-=a,tt=1<<32-$e(t)+o|n<<o|r,nt=l+e}else tt=1<<l|n<<o|r,nt=e}function Si(e){e.return!==null&&(Mt(e,1),Au(e,1,0))}function Ni(e){for(;e===lo;)lo=en[--tn],en[tn]=null,io=en[--tn],en[tn]=null;for(;e===Rt;)Rt=Le[--Te],Le[Te]=null,nt=Le[--Te],Le[Te]=null,tt=Le[--Te],Le[Te]=null}var Me=null,ze=null,X=!1,We=null;function _u(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ra(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,ze=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rt!==null?{id:tt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,ze=null,!0):!1;default:return!1}}function Al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _l(e){if(X){var t=ze;if(t){var n=t;if(!Ra(e,t)){if(Al(e))throw Error(S(418));t=yt(n.nextSibling);var r=Me;t&&Ra(e,t)?_u(r,n):(e.flags=e.flags&-4097|2,X=!1,Me=e)}}else{if(Al(e))throw Error(S(418));e.flags=e.flags&-4097|2,X=!1,Me=e}}}function Oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function Er(e){if(e!==Me)return!1;if(!X)return Oa(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=ze)){if(Al(e))throw Ru(),Error(S(418));for(;t;)_u(e,t),t=yt(t.nextSibling)}if(Oa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Me?yt(e.stateNode.nextSibling):null;return!0}function Ru(){for(var e=ze;e;)e=yt(e.nextSibling)}function mn(){ze=Me=null,X=!1}function Ci(e){We===null?We=[e]:We.push(e)}var Of=st.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var s=o.refs;a===null?delete s[l]:s[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ba(e){var t=e._init;return t(e._payload)}function Ou(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=jt(f,c),f.index=0,f.sibling=null,f}function l(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,w){return c===null||c.tag!==6?(c=ll(p,f.mode,w),c.return=f,c):(c=o(c,p),c.return=f,c)}function u(f,c,p,w){var z=p.type;return z===Kt?x(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ct&&Ba(z)===c.type)?(w=o(c,p.props),w.ref=zn(f,c,p),w.return=f,w):(w=Qr(p.type,p.key,p.props,null,f.mode,w),w.ref=zn(f,c,p),w.return=f,w)}function d(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=il(p,f.mode,w),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function x(f,c,p,w,z){return c===null||c.tag!==7?(c=It(p,f.mode,w,z),c.return=f,c):(c=o(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ll(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case vr:return p=Qr(c.type,c.key,c.props,null,f.mode,p),p.ref=zn(f,null,c),p.return=f,p;case Yt:return c=il(c,f.mode,p),c.return=f,c;case ct:var w=c._init;return g(f,w(c._payload),p)}if(Tn(c)||jn(c))return c=It(c,f.mode,p,null),c.return=f,c;zr(f,c)}return null}function m(f,c,p,w){var z=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return z!==null?null:s(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vr:return p.key===z?u(f,c,p,w):null;case Yt:return p.key===z?d(f,c,p,w):null;case ct:return z=p._init,m(f,c,z(p._payload),w)}if(Tn(p)||jn(p))return z!==null?null:x(f,c,p,w,null);zr(f,p)}return null}function j(f,c,p,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,s(c,f,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vr:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,z);case Yt:return f=f.get(w.key===null?p:w.key)||null,d(c,f,w,z);case ct:var k=w._init;return j(f,c,p,k(w._payload),z)}if(Tn(w)||jn(w))return f=f.get(p)||null,x(c,f,w,z,null);zr(c,w)}return null}function b(f,c,p,w){for(var z=null,k=null,P=c,D=c=0,U=null;P!==null&&D<p.length;D++){P.index>D?(U=P,P=null):U=P.sibling;var v=m(f,P,p[D],w);if(v===null){P===null&&(P=U);break}e&&P&&v.alternate===null&&t(f,P),c=l(v,c,D),k===null?z=v:k.sibling=v,k=v,P=U}if(D===p.length)return n(f,P),X&&Mt(f,D),z;if(P===null){for(;D<p.length;D++)P=g(f,p[D],w),P!==null&&(c=l(P,c,D),k===null?z=P:k.sibling=P,k=P);return X&&Mt(f,D),z}for(P=r(f,P);D<p.length;D++)U=j(P,f,D,p[D],w),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?D:U.key),c=l(U,c,D),k===null?z=U:k.sibling=U,k=U);return e&&P.forEach(function(A){return t(f,A)}),X&&Mt(f,D),z}function N(f,c,p,w){var z=jn(p);if(typeof z!="function")throw Error(S(150));if(p=z.call(p),p==null)throw Error(S(151));for(var k=z=null,P=c,D=c=0,U=null,v=p.next();P!==null&&!v.done;D++,v=p.next()){P.index>D?(U=P,P=null):U=P.sibling;var A=m(f,P,v.value,w);if(A===null){P===null&&(P=U);break}e&&P&&A.alternate===null&&t(f,P),c=l(A,c,D),k===null?z=A:k.sibling=A,k=A,P=U}if(v.done)return n(f,P),X&&Mt(f,D),z;if(P===null){for(;!v.done;D++,v=p.next())v=g(f,v.value,w),v!==null&&(c=l(v,c,D),k===null?z=v:k.sibling=v,k=v);return X&&Mt(f,D),z}for(P=r(f,P);!v.done;D++,v=p.next())v=j(P,f,D,v.value,w),v!==null&&(e&&v.alternate!==null&&P.delete(v.key===null?D:v.key),c=l(v,c,D),k===null?z=v:k.sibling=v,k=v);return e&&P.forEach(function(_){return t(f,_)}),X&&Mt(f,D),z}function B(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Kt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case vr:e:{for(var z=p.key,k=c;k!==null;){if(k.key===z){if(z=p.type,z===Kt){if(k.tag===7){n(f,k.sibling),c=o(k,p.props.children),c.return=f,f=c;break e}}else if(k.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ct&&Ba(z)===k.type){n(f,k.sibling),c=o(k,p.props),c.ref=zn(f,k,p),c.return=f,f=c;break e}n(f,k);break}else t(f,k);k=k.sibling}p.type===Kt?(c=It(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=Qr(p.type,p.key,p.props,null,f.mode,w),w.ref=zn(f,c,p),w.return=f,f=w)}return a(f);case Yt:e:{for(k=p.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=il(p,f.mode,w),c.return=f,f=c}return a(f);case ct:return k=p._init,B(f,c,k(p._payload),w)}if(Tn(p))return b(f,c,p,w);if(jn(p))return N(f,c,p,w);zr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,p),c.return=f,f=c):(n(f,c),c=ll(p,f.mode,w),c.return=f,f=c),a(f)):n(f,c)}return B}var gn=Ou(!0),Bu=Ou(!1),ao=Et(null),so=null,nn=null,Ei=null;function zi(){Ei=nn=so=null}function Mi(e){var t=ao.current;Z(ao),e._currentValue=t}function Rl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cn(e,t){so=e,Ei=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(so===null)throw Error(S(308));nn=e,so.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var Pt=null;function Fi(e){Pt===null?Pt=[e]:Pt.push(e)}function Uu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Fi(t)):(n.next=o.next,o.next=n),t.interleaved=n,it(e,r)}function it(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function Di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,it(e,n)}return o=r.interleaved,o===null?(t.next=t,Fi(r)):(t.next=o.next,o.next=t),r.interleaved=t,it(e,n)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hi(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,r){var o=e.updateQueue;dt=!1;var l=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?l=d:a.next=d,a=u;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==a&&(s===null?x.firstBaseUpdate=d:s.next=d,x.lastBaseUpdate=u))}if(l!==null){var g=o.baseState;a=0,x=d=u=null,s=l;do{var m=s.lane,j=s.eventTime;if((r&m)===m){x!==null&&(x=x.next={eventTime:j,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,N=s;switch(m=t,j=n,N.tag){case 1:if(b=N.payload,typeof b=="function"){g=b.call(j,g,m);break e}g=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=N.payload,m=typeof b=="function"?b.call(j,g,m):b,m==null)break e;g=te({},g,m);break e;case 2:dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else j={eventTime:j,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(d=x=j,u=g):x=x.next=j,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(x===null&&(u=g),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=x,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Bt|=a,e.lanes=a,e.memoizedState=g}}function Wa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var gr={},Ze=Et(gr),lr=Et(gr),ir=Et(gr);function Lt(e){if(e===gr)throw Error(S(174));return e}function Pi(e,t){switch(K(ir,t),K(lr,e),K(Ze,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}Z(Ze),K(Ze,t)}function hn(){Z(Ze),Z(lr),Z(ir)}function $u(e){Lt(ir.current);var t=Lt(Ze.current),n=xl(t,e.type);t!==n&&(K(lr,e),K(Ze,n))}function Li(e){lr.current===e&&(Z(Ze),Z(lr))}var q=Et(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qo=[];function Ti(){for(var e=0;e<qo.length;e++)qo[e]._workInProgressVersionPrimary=null;qo.length=0}var Ur=st.ReactCurrentDispatcher,el=st.ReactCurrentBatchConfig,Ot=0,ee=null,ie=null,se=null,fo=!1,Wn=!1,ar=0,Bf=0;function me(){throw Error(S(321))}function Ii(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function Ai(e,t,n,r,o,l){if(Ot=l,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?Vf:Hf,e=n(r,o),Wn){l=0;do{if(Wn=!1,ar=0,25<=l)throw Error(S(301));l+=1,se=ie=null,t.updateQueue=null,Ur.current=Qf,e=n(r,o)}while(Wn)}if(Ur.current=po,t=ie!==null&&ie.next!==null,Ot=0,se=ie=ee=null,fo=!1,t)throw Error(S(300));return e}function _i(){var e=ar!==0;return ar=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?ee.memoizedState=se=e:se=se.next=e,se}function Re(){if(ie===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=se===null?ee.memoizedState:se.next;if(t!==null)se=t,ie=e;else{if(e===null)throw Error(S(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},se===null?ee.memoizedState=se=e:se=se.next=e}return se}function sr(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=Re(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var a=o.next;o.next=l.next,l.next=a}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=a=null,u=null,d=l;do{var x=d.lane;if((Ot&x)===x)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:x,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,a=r):u=u.next=g,ee.lanes|=x,Bt|=x}d=d.next}while(d!==null&&d!==l);u===null?a=r:u.next=s,He(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ee.lanes|=l,Bt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=Re(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do l=e(l,a.action),a=a.next;while(a!==o);He(l,t.memoizedState)||(je=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Vu(){}function Hu(e,t){var n=ee,r=Re(),o=t(),l=!He(r.memoizedState,o);if(l&&(r.memoizedState=o,je=!0),r=r.queue,Ri(Ku.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,ur(9,Yu.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(S(349));Ot&30||Qu(n,t,o)}return o}function Qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yu(e,t,n,r){t.value=n,t.getSnapshot=r,Ju(t)&&Gu(e)}function Ku(e,t,n){return n(function(){Ju(t)&&Gu(e)})}function Ju(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function Gu(e){var t=it(e,1);t!==null&&Ve(t,e,1,-1)}function $a(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},t.queue=e,e=e.dispatch=$f.bind(null,ee,e),[t.memoizedState,e]}function ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zu(){return Re().memoizedState}function Wr(e,t,n,r){var o=Ke();ee.flags|=e,o.memoizedState=ur(1|t,n,void 0,r===void 0?null:r)}function Co(e,t,n,r){var o=Re();r=r===void 0?null:r;var l=void 0;if(ie!==null){var a=ie.memoizedState;if(l=a.destroy,r!==null&&Ii(r,a.deps)){o.memoizedState=ur(t,n,l,r);return}}ee.flags|=e,o.memoizedState=ur(1|t,n,l,r)}function Va(e,t){return Wr(8390656,8,e,t)}function Ri(e,t){return Co(2048,8,e,t)}function Xu(e,t){return Co(4,2,e,t)}function qu(e,t){return Co(4,4,e,t)}function ec(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tc(e,t,n){return n=n!=null?n.concat([e]):null,Co(4,4,ec.bind(null,t,e),n)}function Oi(){}function nc(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ii(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rc(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ii(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oc(e,t,n){return Ot&21?(He(n,t)||(n=uu(),ee.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function Uf(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{Q=n,el.transition=r}}function lc(){return Re().memoizedState}function Wf(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ic(e))ac(t,n);else if(n=Uu(e,t,n,r),n!==null){var o=ye();Ve(n,e,r,o),sc(n,t,r)}}function $f(e,t,n){var r=bt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ic(e))ac(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,s=l(a,n);if(o.hasEagerState=!0,o.eagerState=s,He(s,a)){var u=t.interleaved;u===null?(o.next=o,Fi(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Uu(e,t,o,r),n!==null&&(o=ye(),Ve(n,e,r,o),sc(n,t,r))}}function ic(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function ac(e,t){Wn=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hi(e,n)}}var po={readContext:_e,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Vf={readContext:_e,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Va,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,ec.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wf.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:$a,useDebugValue:Oi,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=$a(!1),t=e[0];return e=Uf.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=Ke();if(X){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ue===null)throw Error(S(349));Ot&30||Qu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Va(Ku.bind(null,r,l,e),[e]),r.flags|=2048,ur(9,Yu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ke(),t=ue.identifierPrefix;if(X){var n=nt,r=tt;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hf={readContext:_e,useCallback:nc,useContext:_e,useEffect:Ri,useImperativeHandle:tc,useInsertionEffect:Xu,useLayoutEffect:qu,useMemo:rc,useReducer:tl,useRef:Zu,useState:function(){return tl(sr)},useDebugValue:Oi,useDeferredValue:function(e){var t=Re();return oc(t,ie.memoizedState,e)},useTransition:function(){var e=tl(sr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Vu,useSyncExternalStore:Hu,useId:lc,unstable_isNewReconciler:!1},Qf={readContext:_e,useCallback:nc,useContext:_e,useEffect:Ri,useImperativeHandle:tc,useInsertionEffect:Xu,useLayoutEffect:qu,useMemo:rc,useReducer:nl,useRef:Zu,useState:function(){return nl(sr)},useDebugValue:Oi,useDeferredValue:function(e){var t=Re();return ie===null?t.memoizedState=e:oc(t,ie.memoizedState,e)},useTransition:function(){var e=nl(sr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Vu,useSyncExternalStore:Hu,useId:lc,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ol(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eo={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=bt(e),l=rt(r,o);l.payload=t,n!=null&&(l.callback=n),t=wt(e,l,o),t!==null&&(Ve(t,e,o,r),Br(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=bt(e),l=rt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=wt(e,l,o),t!==null&&(Ve(t,e,o,r),Br(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=bt(e),o=rt(n,r);o.tag=2,t!=null&&(o.callback=t),t=wt(e,o,r),t!==null&&(Ve(t,e,r,n),Br(t,e,r))}};function Ha(e,t,n,r,o,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!tr(n,r)||!tr(o,l):!0}function uc(e,t,n){var r=!1,o=Nt,l=t.contextType;return typeof l=="object"&&l!==null?l=_e(l):(o=Ne(t)?_t:ve.current,r=t.contextTypes,l=(r=r!=null)?pn(e,o):Nt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Qa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eo.enqueueReplaceState(t,t.state,null)}function Bl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Di(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=_e(l):(l=Ne(t)?_t:ve.current,o.context=pn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ol(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Eo.enqueueReplaceState(o,o.state,null),uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=yd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yf=typeof WeakMap=="function"?WeakMap:Map;function cc(e,t,n){n=rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,Zl=r),Ul(e,t)},n}function dc(e,t,n){n=rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ul(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ul(e,t),typeof r!="function"&&(kt===null?kt=new Set([this]):kt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ya(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ap.bind(null,e,t,n),t.then(e,e))}function Ka(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ja(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rt(-1,1),t.tag=2,wt(n,t,1))),n.lanes|=1),e)}var Kf=st.ReactCurrentOwner,je=!1;function xe(e,t,n,r){t.child=e===null?Bu(t,null,n,r):gn(t,e.child,n,r)}function Ga(e,t,n,r,o){n=n.render;var l=t.ref;return cn(t,o),r=Ai(e,t,n,r,l,o),n=_i(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,at(e,t,o)):(X&&n&&Si(t),t.flags|=1,xe(e,t,r,o),t.child)}function Za(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Yi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,fc(e,t,l,r,o)):(e=Qr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:tr,n(a,r)&&e.ref===t.ref)return at(e,t,o)}return t.flags|=1,e=jt(l,r),e.ref=t.ref,e.return=t,t.child=e}function fc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(tr(l,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,at(e,t,o)}return Wl(e,t,n,r,o)}function pc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(on,Ee),Ee|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(on,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,K(on,Ee),Ee|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,K(on,Ee),Ee|=r;return xe(e,t,o,n),t.child}function mc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,n,r,o){var l=Ne(n)?_t:ve.current;return l=pn(t,l),cn(t,o),n=Ai(e,t,n,r,l,o),r=_i(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,at(e,t,o)):(X&&r&&Si(t),t.flags|=1,xe(e,t,n,o),t.child)}function Xa(e,t,n,r,o){if(Ne(n)){var l=!0;oo(t)}else l=!1;if(cn(t,o),t.stateNode===null)$r(e,t),uc(t,n,r),Bl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=_e(d):(d=Ne(n)?_t:ve.current,d=pn(t,d));var x=n.getDerivedStateFromProps,g=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Qa(t,a,r,d),dt=!1;var m=t.memoizedState;a.state=m,uo(t,r,a,o),u=t.memoizedState,s!==r||m!==u||Se.current||dt?(typeof x=="function"&&(Ol(t,n,x,r),u=t.memoizedState),(s=dt||Ha(t,n,s,r,m,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Be(t.type,s),a.props=d,g=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=Ne(n)?_t:ve.current,u=pn(t,u));var j=n.getDerivedStateFromProps;(x=typeof j=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||m!==u)&&Qa(t,a,r,u),dt=!1,m=t.memoizedState,a.state=m,uo(t,r,a,o);var b=t.memoizedState;s!==g||m!==b||Se.current||dt?(typeof j=="function"&&(Ol(t,n,j,r),b=t.memoizedState),(d=dt||Ha(t,n,d,r,m,b,u)||!1)?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $l(e,t,n,r,l,o)}function $l(e,t,n,r,o,l){mc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&_a(t,n,!1),at(e,t,l);r=t.stateNode,Kf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=gn(t,e.child,null,l),t.child=gn(t,null,s,l)):xe(e,t,s,l),t.memoizedState=r.state,o&&_a(t,n,!0),t.child}function gc(e){var t=e.stateNode;t.pendingContext?Aa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Aa(e,t.context,!1),Pi(e,t.containerInfo)}function qa(e,t,n,r,o){return mn(),Ci(o),t.flags|=256,xe(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function hc(e,t,n){var r=t.pendingProps,o=q.current,l=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(q,o&1),e===null)return _l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Fo(a,r,0,null),e=It(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Hl(n),t.memoizedState=Vl,e):Bi(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Jf(e,t,a,r,s,o,n);if(l){l=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=jt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=jt(s,l):(l=It(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?Hl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Vl,r}return l=e.child,e=l.sibling,r=jt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bi(e,t){return t=Fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mr(e,t,n,r){return r!==null&&Ci(r),gn(t,e.child,null,n),e=Bi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jf(e,t,n,r,o,l,a){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(S(422))),Mr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Fo({mode:"visible",children:r.children},o,0,null),l=It(l,o,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&gn(t,e.child,null,a),t.child.memoizedState=Hl(a),t.memoizedState=Vl,l);if(!(t.mode&1))return Mr(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(S(419)),r=rl(l,r,void 0),Mr(e,t,a,r)}if(s=(a&e.childLanes)!==0,je||s){if(r=ue,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,it(e,o),Ve(r,e,o,-1))}return Qi(),r=rl(Error(S(421))),Mr(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=sp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,ze=yt(o.nextSibling),Me=t,X=!0,We=null,e!==null&&(Le[Te++]=tt,Le[Te++]=nt,Le[Te++]=Rt,tt=e.id,nt=e.overflow,Rt=t),t=Bi(t,r.children),t.flags|=4096,t)}function es(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rl(e.return,t,n)}function ol(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function vc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(xe(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&es(e,n,t);else if(e.tag===19)es(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ol(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&co(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ol(t,!0,n,null,l);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function at(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gf(e,t,n){switch(t.tag){case 3:gc(t),mn();break;case 5:$u(t);break;case 1:Ne(t.type)&&oo(t);break;case 4:Pi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(ao,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?hc(e,t,n):(K(q,q.current&1),e=at(e,t,n),e!==null?e.sibling:null);K(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,pc(e,t,n)}return at(e,t,n)}var xc,Ql,yc,wc;xc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ql=function(){};yc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Lt(Ze.current);var l=null;switch(n){case"input":o=ml(e,o),r=ml(e,r),l=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),l=[];break;case"textarea":o=vl(e,o),r=vl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=no)}yl(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Kn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Kn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&G("scroll",e),l||s===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};wc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zf(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ne(t.type)&&ro(),ge(t),null;case 3:return r=t.stateNode,hn(),Z(Se),Z(ve),Ti(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(ei(We),We=null))),Ql(e,t),ge(t),null;case 5:Li(t);var o=Lt(ir.current);if(n=t.type,e!==null&&t.stateNode!=null)yc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ge(t),null}if(e=Lt(Ze.current),Er(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Je]=t,r[or]=l,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<An.length;o++)G(An[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":ua(r,l),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},G("invalid",r);break;case"textarea":da(r,l),G("invalid",r)}yl(n,l),o=null;for(var a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Cr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Cr(r.textContent,s,e),o=["children",""+s]):Kn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&G("scroll",r)}switch(n){case"input":xr(r),ca(r,l,!0);break;case"textarea":xr(r),fa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=no)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ks(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Je]=t,e[or]=r,xc(e,t,!1,!1),t.stateNode=e;e:{switch(a=wl(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<An.length;o++)G(An[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":ua(e,r),o=ml(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),G("invalid",e);break;case"textarea":da(e,r),o=vl(e,r),G("invalid",e);break;default:o=r}yl(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Zs(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Js(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Jn(e,u):typeof u=="number"&&Jn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Kn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&G("scroll",e):u!=null&&ci(e,l,u,a))}switch(n){case"input":xr(e),ca(e,r,!1);break;case"textarea":xr(e),fa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ln(e,!!r.multiple,l,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=no)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)wc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Lt(ir.current),Lt(Ze.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(l=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return ge(t),null;case 13:if(Z(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&ze!==null&&t.mode&1&&!(t.flags&128))Ru(),mn(),t.flags|=98560,l=!1;else if(l=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Je]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),l=!1}else We!==null&&(ei(We),We=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ae===0&&(ae=3):Qi())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return hn(),Ql(e,t),e===null&&nr(t.stateNode.containerInfo),ge(t),null;case 10:return Mi(t.type._context),ge(t),null;case 17:return Ne(t.type)&&ro(),ge(t),null;case 19:if(Z(q),l=t.memoizedState,l===null)return ge(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)Mn(l,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=co(e),a!==null){for(t.flags|=128,Mn(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(q,q.current&1|2),t.child}e=e.sibling}l.tail!==null&&re()>xn&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304)}else{if(!r)if(e=co(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!X)return ge(t),null}else 2*re()-l.renderingStartTime>xn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=re(),t.sibling=null,n=q.current,K(q,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Hi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Xf(e,t){switch(Ni(t),t.tag){case 1:return Ne(t.type)&&ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),Z(Se),Z(ve),Ti(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Li(t),null;case 13:if(Z(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(q),null;case 4:return hn(),null;case 10:return Mi(t.type._context),null;case 22:case 23:return Hi(),null;case 24:return null;default:return null}}var Fr=!1,he=!1,qf=typeof WeakSet=="function"?WeakSet:Set,T=null;function rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Yl(e,t,n){try{n()}catch(r){ne(e,t,r)}}var ts=!1;function ep(e,t){if(Fl=qr,e=Nu(),ji(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,x=0,g=e,m=null;t:for(;;){for(var j;g!==n||o!==0&&g.nodeType!==3||(s=a+o),g!==l||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(j=g.firstChild)!==null;)m=g,g=j;for(;;){if(g===e)break t;if(m===n&&++d===o&&(s=a),m===l&&++x===r&&(u=a),(j=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=j}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dl={focusedElem:e,selectionRange:n},qr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var N=b.memoizedProps,B=b.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?N:Be(t.type,N),B);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ne(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return b=ts,ts=!1,b}function $n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Yl(t,n,l)}o=o.next}while(o!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kc(e){var t=e.alternate;t!==null&&(e.alternate=null,kc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[or],delete t[Tl],delete t[Af],delete t[_f])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bc(e){return e.tag===5||e.tag===3||e.tag===4}function ns(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=no));else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}var de=null,Ue=!1;function ut(e,t,n){for(n=n.child;n!==null;)jc(e,t,n),n=n.sibling}function jc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(wo,n)}catch{}switch(n.tag){case 5:he||rn(n,t);case 6:var r=de,o=Ue;de=null,ut(e,t,n),de=r,Ue=o,de!==null&&(Ue?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ue?(e=de,n=n.stateNode,e.nodeType===8?Zo(e.parentNode,n):e.nodeType===1&&Zo(e,n),qn(e)):Zo(de,n.stateNode));break;case 4:r=de,o=Ue,de=n.stateNode.containerInfo,Ue=!0,ut(e,t,n),de=r,Ue=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&Yl(n,t,a),o=o.next}while(o!==r)}ut(e,t,n);break;case 1:if(!he&&(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ne(n,t,s)}ut(e,t,n);break;case 21:ut(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,ut(e,t,n),he=r):ut(e,t,n);break;default:ut(e,t,n)}}function rs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qf),t.forEach(function(r){var o=up.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:de=s.stateNode,Ue=!1;break e;case 3:de=s.stateNode.containerInfo,Ue=!0;break e;case 4:de=s.stateNode.containerInfo,Ue=!0;break e}s=s.return}if(de===null)throw Error(S(160));jc(l,a,o),de=null,Ue=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){ne(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sc(t,e),t=t.sibling}function Sc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Qe(e),r&4){try{$n(3,e,e.return),zo(3,e)}catch(N){ne(e,e.return,N)}try{$n(5,e,e.return)}catch(N){ne(e,e.return,N)}}break;case 1:Oe(t,e),Qe(e),r&512&&n!==null&&rn(n,n.return);break;case 5:if(Oe(t,e),Qe(e),r&512&&n!==null&&rn(n,n.return),e.flags&32){var o=e.stateNode;try{Jn(o,"")}catch(N){ne(e,e.return,N)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Qs(o,l),wl(s,a);var d=wl(s,l);for(a=0;a<u.length;a+=2){var x=u[a],g=u[a+1];x==="style"?Zs(o,g):x==="dangerouslySetInnerHTML"?Js(o,g):x==="children"?Jn(o,g):ci(o,x,g,d)}switch(s){case"input":gl(o,l);break;case"textarea":Ys(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var j=l.value;j!=null?ln(o,!!l.multiple,j,!1):m!==!!l.multiple&&(l.defaultValue!=null?ln(o,!!l.multiple,l.defaultValue,!0):ln(o,!!l.multiple,l.multiple?[]:"",!1))}o[or]=l}catch(N){ne(e,e.return,N)}}break;case 6:if(Oe(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(N){ne(e,e.return,N)}}break;case 3:if(Oe(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(N){ne(e,e.return,N)}break;case 4:Oe(t,e),Qe(e);break;case 13:Oe(t,e),Qe(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||($i=re())),r&4&&rs(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(he=(d=he)||x,Oe(t,e),he=d):Oe(t,e),Qe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!x&&e.mode&1)for(T=e,x=e.child;x!==null;){for(g=T=x;T!==null;){switch(m=T,j=m.child,m.tag){case 0:case 11:case 14:case 15:$n(4,m,m.return);break;case 1:rn(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(N){ne(r,n,N)}}break;case 5:rn(m,m.return);break;case 22:if(m.memoizedState!==null){ls(g);continue}}j!==null?(j.return=m,T=j):ls(g)}x=x.sibling}e:for(x=null,g=e;;){if(g.tag===5){if(x===null){x=g;try{o=g.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Gs("display",a))}catch(N){ne(e,e.return,N)}}}else if(g.tag===6){if(x===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(N){ne(e,e.return,N)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;x===g&&(x=null),g=g.return}x===g&&(x=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Oe(t,e),Qe(e),r&4&&rs(e);break;case 21:break;default:Oe(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Jn(o,""),r.flags&=-33);var l=ns(e);Gl(e,l,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=ns(e);Jl(e,s,a);break;default:throw Error(S(161))}}catch(u){ne(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e,t,n){T=e,Nc(e)}function Nc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,l=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Fr;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||he;s=Fr;var d=he;if(Fr=a,(he=u)&&!d)for(T=o;T!==null;)a=T,u=a.child,a.tag===22&&a.memoizedState!==null?is(o):u!==null?(u.return=a,T=u):is(o);for(;l!==null;)T=l,Nc(l),l=l.sibling;T=o,Fr=s,he=d}os(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,T=l):os(e)}}function os(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Wa(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wa(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var x=d.memoizedState;if(x!==null){var g=x.dehydrated;g!==null&&qn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}he||t.flags&512&&Kl(t)}catch(m){ne(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ls(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function is(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(u){ne(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ne(t,o,u)}}var l=t.return;try{Kl(t)}catch(u){ne(t,l,u)}break;case 5:var a=t.return;try{Kl(t)}catch(u){ne(t,a,u)}}}catch(u){ne(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var np=Math.ceil,mo=st.ReactCurrentDispatcher,Ui=st.ReactCurrentOwner,Ae=st.ReactCurrentBatchConfig,H=0,ue=null,oe=null,fe=0,Ee=0,on=Et(0),ae=0,cr=null,Bt=0,Mo=0,Wi=0,Vn=null,be=null,$i=0,xn=1/0,qe=null,go=!1,Zl=null,kt=null,Dr=!1,gt=null,ho=0,Hn=0,Xl=null,Vr=-1,Hr=0;function ye(){return H&6?re():Vr!==-1?Vr:Vr=re()}function bt(e){return e.mode&1?H&2&&fe!==0?fe&-fe:Of.transition!==null?(Hr===0&&(Hr=uu()),Hr):(e=Q,e!==0||(e=window.event,e=e===void 0?16:hu(e.type)),e):1}function Ve(e,t,n,r){if(50<Hn)throw Hn=0,Xl=null,Error(S(185));fr(e,n,r),(!(H&2)||e!==ue)&&(e===ue&&(!(H&2)&&(Mo|=n),ae===4&&pt(e,fe)),Ce(e,r),n===1&&H===0&&!(t.mode&1)&&(xn=re()+500,No&&zt()))}function Ce(e,t){var n=e.callbackNode;Rd(e,t);var r=Xr(e,e===ue?fe:0);if(r===0)n!==null&&ga(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ga(n),t===1)e.tag===0?Rf(as.bind(null,e)):Iu(as.bind(null,e)),Tf(function(){!(H&6)&&zt()}),n=null;else{switch(cu(r)){case 1:n=gi;break;case 4:n=au;break;case 16:n=Zr;break;case 536870912:n=su;break;default:n=Zr}n=Lc(n,Cc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cc(e,t){if(Vr=-1,Hr=0,H&6)throw Error(S(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var r=Xr(e,e===ue?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vo(e,r);else{t=r;var o=H;H|=2;var l=zc();(ue!==e||fe!==t)&&(qe=null,xn=re()+500,Tt(e,t));do try{lp();break}catch(s){Ec(e,s)}while(!0);zi(),mo.current=l,H=o,oe!==null?t=0:(ue=null,fe=0,t=ae)}if(t!==0){if(t===2&&(o=Nl(e),o!==0&&(r=o,t=ql(e,o))),t===1)throw n=cr,Tt(e,0),pt(e,r),Ce(e,re()),n;if(t===6)pt(e,r);else{if(o=e.current.alternate,!(r&30)&&!rp(o)&&(t=vo(e,r),t===2&&(l=Nl(e),l!==0&&(r=l,t=ql(e,l))),t===1))throw n=cr,Tt(e,0),pt(e,r),Ce(e,re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Ft(e,be,qe);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=$i+500-re(),10<t)){if(Xr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ll(Ft.bind(null,e,be,qe),t);break}Ft(e,be,qe);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-$e(r);l=1<<a,a=t[a],a>o&&(o=a),r&=~l}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*np(r/1960))-r,10<r){e.timeoutHandle=Ll(Ft.bind(null,e,be,qe),r);break}Ft(e,be,qe);break;case 5:Ft(e,be,qe);break;default:throw Error(S(329))}}}return Ce(e,re()),e.callbackNode===n?Cc.bind(null,e):null}function ql(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=vo(e,t),e!==2&&(t=be,be=n,t!==null&&ei(t)),e}function ei(e){be===null?be=e:be.push.apply(be,e)}function rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!He(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~Wi,t&=~Mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function as(e){if(H&6)throw Error(S(327));dn();var t=Xr(e,0);if(!(t&1))return Ce(e,re()),null;var n=vo(e,t);if(e.tag!==0&&n===2){var r=Nl(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=cr,Tt(e,0),pt(e,t),Ce(e,re()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,be,qe),Ce(e,re()),null}function Vi(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(xn=re()+500,No&&zt())}}function Ut(e){gt!==null&&gt.tag===0&&!(H&6)&&dn();var t=H;H|=1;var n=Ae.transition,r=Q;try{if(Ae.transition=null,Q=1,e)return e()}finally{Q=r,Ae.transition=n,H=t,!(H&6)&&zt()}}function Hi(){Ee=on.current,Z(on)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lf(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Ni(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ro();break;case 3:hn(),Z(Se),Z(ve),Ti();break;case 5:Li(r);break;case 4:hn();break;case 13:Z(q);break;case 19:Z(q);break;case 10:Mi(r.type._context);break;case 22:case 23:Hi()}n=n.return}if(ue=e,oe=e=jt(e.current,null),fe=Ee=t,ae=0,cr=null,Wi=Mo=Bt=0,be=Vn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=o,r.next=a}n.pending=r}Pt=null}return e}function Ec(e,t){do{var n=oe;try{if(zi(),Ur.current=po,fo){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}fo=!1}if(Ot=0,se=ie=ee=null,Wn=!1,ar=0,Ui.current=null,n===null||n.return===null){ae=1,cr=t,oe=null;break}e:{var l=e,a=n.return,s=n,u=t;if(t=fe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,x=s,g=x.tag;if(!(x.mode&1)&&(g===0||g===11||g===15)){var m=x.alternate;m?(x.updateQueue=m.updateQueue,x.memoizedState=m.memoizedState,x.lanes=m.lanes):(x.updateQueue=null,x.memoizedState=null)}var j=Ka(a);if(j!==null){j.flags&=-257,Ja(j,a,s,l,t),j.mode&1&&Ya(l,d,t),t=j,u=d;var b=t.updateQueue;if(b===null){var N=new Set;N.add(u),t.updateQueue=N}else b.add(u);break e}else{if(!(t&1)){Ya(l,d,t),Qi();break e}u=Error(S(426))}}else if(X&&s.mode&1){var B=Ka(a);if(B!==null){!(B.flags&65536)&&(B.flags|=256),Ja(B,a,s,l,t),Ci(vn(u,s));break e}}l=u=vn(u,s),ae!==4&&(ae=2),Vn===null?Vn=[l]:Vn.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=cc(l,u,t);Ua(l,f);break e;case 1:s=u;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(kt===null||!kt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=dc(l,s,t);Ua(l,w);break e}}l=l.return}while(l!==null)}Fc(n)}catch(z){t=z,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function zc(){var e=mo.current;return mo.current=po,e===null?po:e}function Qi(){(ae===0||ae===3||ae===2)&&(ae=4),ue===null||!(Bt&268435455)&&!(Mo&268435455)||pt(ue,fe)}function vo(e,t){var n=H;H|=2;var r=zc();(ue!==e||fe!==t)&&(qe=null,Tt(e,t));do try{op();break}catch(o){Ec(e,o)}while(!0);if(zi(),H=n,mo.current=r,oe!==null)throw Error(S(261));return ue=null,fe=0,ae}function op(){for(;oe!==null;)Mc(oe)}function lp(){for(;oe!==null&&!Md();)Mc(oe)}function Mc(e){var t=Pc(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?Fc(e):oe=t,Ui.current=null}function Fc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Xf(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,oe=null;return}}else if(n=Zf(n,t,Ee),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ae===0&&(ae=5)}function Ft(e,t,n){var r=Q,o=Ae.transition;try{Ae.transition=null,Q=1,ip(e,t,n,r)}finally{Ae.transition=o,Q=r}return null}function ip(e,t,n,r){do dn();while(gt!==null);if(H&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Od(e,l),e===ue&&(oe=ue=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dr||(Dr=!0,Lc(Zr,function(){return dn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ae.transition,Ae.transition=null;var a=Q;Q=1;var s=H;H|=4,Ui.current=null,ep(e,n),Sc(n,e),Cf(Dl),qr=!!Fl,Dl=Fl=null,e.current=n,tp(n),Fd(),H=s,Q=a,Ae.transition=l}else e.current=n;if(Dr&&(Dr=!1,gt=e,ho=o),l=e.pendingLanes,l===0&&(kt=null),Ld(n.stateNode),Ce(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(go)throw go=!1,e=Zl,Zl=null,e;return ho&1&&e.tag!==0&&dn(),l=e.pendingLanes,l&1?e===Xl?Hn++:(Hn=0,Xl=e):Hn=0,zt(),null}function dn(){if(gt!==null){var e=cu(ho),t=Ae.transition,n=Q;try{if(Ae.transition=null,Q=16>e?16:e,gt===null)var r=!1;else{if(e=gt,gt=null,ho=0,H&6)throw Error(S(331));var o=H;for(H|=4,T=e.current;T!==null;){var l=T,a=l.child;if(T.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(T=d;T!==null;){var x=T;switch(x.tag){case 0:case 11:case 15:$n(8,x,l)}var g=x.child;if(g!==null)g.return=x,T=g;else for(;T!==null;){x=T;var m=x.sibling,j=x.return;if(kc(x),x===d){T=null;break}if(m!==null){m.return=j,T=m;break}T=j}}}var b=l.alternate;if(b!==null){var N=b.child;if(N!==null){b.child=null;do{var B=N.sibling;N.sibling=null,N=B}while(N!==null)}}T=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,T=a;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:$n(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,T=f;break e}T=l.return}}var c=e.current;for(T=c;T!==null;){a=T;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,T=p;else e:for(a=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zo(9,s)}}catch(z){ne(s,s.return,z)}if(s===a){T=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,T=w;break e}T=s.return}}if(H=o,zt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(wo,e)}catch{}r=!0}return r}finally{Q=n,Ae.transition=t}}return!1}function ss(e,t,n){t=vn(n,t),t=cc(e,t,1),e=wt(e,t,1),t=ye(),e!==null&&(fr(e,1,t),Ce(e,t))}function ne(e,t,n){if(e.tag===3)ss(e,e,n);else for(;t!==null;){if(t.tag===3){ss(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kt===null||!kt.has(r))){e=vn(n,e),e=dc(t,e,1),t=wt(t,e,1),e=ye(),t!==null&&(fr(t,1,e),Ce(t,e));break}}t=t.return}}function ap(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(fe&n)===n&&(ae===4||ae===3&&(fe&130023424)===fe&&500>re()-$i?Tt(e,0):Wi|=n),Ce(e,t)}function Dc(e,t){t===0&&(e.mode&1?(t=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):t=1);var n=ye();e=it(e,t),e!==null&&(fr(e,t,n),Ce(e,n))}function sp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dc(e,n)}function up(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Dc(e,n)}var Pc;Pc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,Gf(e,t,n);je=!!(e.flags&131072)}else je=!1,X&&t.flags&1048576&&Au(t,io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$r(e,t),e=t.pendingProps;var o=pn(t,ve.current);cn(t,n),o=Ai(null,t,r,e,o,n);var l=_i();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(l=!0,oo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Di(t),o.updater=Eo,t.stateNode=o,o._reactInternals=t,Bl(t,r,e,n),t=$l(null,t,r,!0,l,n)):(t.tag=0,X&&l&&Si(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch($r(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=dp(r),e=Be(r,e),o){case 0:t=Wl(null,t,r,e,n);break e;case 1:t=Xa(null,t,r,e,n);break e;case 11:t=Ga(null,t,r,e,n);break e;case 14:t=Za(null,t,r,Be(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Wl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Xa(e,t,r,o,n);case 3:e:{if(gc(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Wu(e,t),uo(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=vn(Error(S(423)),t),t=qa(e,t,r,n,o);break e}else if(r!==o){o=vn(Error(S(424)),t),t=qa(e,t,r,n,o);break e}else for(ze=yt(t.stateNode.containerInfo.firstChild),Me=t,X=!0,We=null,n=Bu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===o){t=at(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return $u(t),e===null&&_l(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,a=o.children,Pl(r,o)?a=null:l!==null&&Pl(r,l)&&(t.flags|=32),mc(e,t),xe(e,t,a,n),t.child;case 6:return e===null&&_l(t),null;case 13:return hc(e,t,n);case 4:return Pi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Ga(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value,K(ao,r._currentValue),r._currentValue=a,l!==null)if(He(l.value,a)){if(l.children===o.children&&!Se.current){t=at(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=rt(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var x=d.pending;x===null?u.next=u:(u.next=x.next,x.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Rl(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(S(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Rl(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,cn(t,n),o=_e(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=Be(r,t.pendingProps),o=Be(r.type,o),Za(e,t,r,o,n);case 15:return fc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),$r(e,t),t.tag=1,Ne(r)?(e=!0,oo(t)):e=!1,cn(t,n),uc(t,r,o),Bl(t,r,o,n),$l(null,t,r,!0,e,n);case 19:return vc(e,t,n);case 22:return pc(e,t,n)}throw Error(S(156,t.tag))};function Lc(e,t){return iu(e,t)}function cp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new cp(e,t,n,r)}function Yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return Yi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fi)return 11;if(e===pi)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,o,l){var a=2;if(r=e,typeof e=="function")Yi(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kt:return It(n.children,o,l,t);case di:a=8,o|=8;break;case cl:return e=Ie(12,n,t,o|2),e.elementType=cl,e.lanes=l,e;case dl:return e=Ie(13,n,t,o),e.elementType=dl,e.lanes=l,e;case fl:return e=Ie(19,n,t,o),e.elementType=fl,e.lanes=l,e;case $s:return Fo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Us:a=10;break e;case Ws:a=9;break e;case fi:a=11;break e;case pi:a=14;break e;case ct:a=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ie(a,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function It(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function Fo(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=$s,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bo(0),this.expirationTimes=Bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ki(e,t,n,r,o,l,a,s,u){return e=new fp(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ie(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(l),e}function pp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tc(e){if(!e)return Nt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Tu(e,n,t)}return t}function Ic(e,t,n,r,o,l,a,s,u){return e=Ki(n,r,!0,e,o,l,a,s,u),e.context=Tc(null),n=e.current,r=ye(),o=bt(n),l=rt(r,o),l.callback=t??null,wt(n,l,o),e.current.lanes=o,fr(e,o,r),Ce(e,r),e}function Do(e,t,n,r){var o=t.current,l=ye(),a=bt(o);return n=Tc(n),t.context===null?t.context=n:t.pendingContext=n,t=rt(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wt(o,t,a),e!==null&&(Ve(e,o,a,l),Br(e,o,a)),a}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function us(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ji(e,t){us(e,t),(e=e.alternate)&&us(e,t)}function mp(){return null}var Ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gi(e){this._internalRoot=e}Po.prototype.render=Gi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Do(e,t,null,null)};Po.prototype.unmount=Gi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){Do(null,e,null,null)}),t[lt]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ft.length&&t!==0&&t<ft[n].priority;n++);ft.splice(n,0,e),n===0&&gu(e)}};function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cs(){}function gp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var d=xo(a);l.call(d)}}var a=Ic(t,r,e,0,null,!1,!1,"",cs);return e._reactRootContainer=a,e[lt]=a.current,nr(e.nodeType===8?e.parentNode:e),Ut(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=xo(u);s.call(d)}}var u=Ki(e,0,!1,null,null,!1,!1,"",cs);return e._reactRootContainer=u,e[lt]=u.current,nr(e.nodeType===8?e.parentNode:e),Ut(function(){Do(t,u,n,r)}),u}function To(e,t,n,r,o){var l=n._reactRootContainer;if(l){var a=l;if(typeof o=="function"){var s=o;o=function(){var u=xo(a);s.call(u)}}Do(t,a,e,o)}else a=gp(n,t,e,o,r);return xo(a)}du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(hi(t,n|1),Ce(t,re()),!(H&6)&&(xn=re()+500,zt()))}break;case 13:Ut(function(){var r=it(e,1);if(r!==null){var o=ye();Ve(r,e,1,o)}}),Ji(e,1)}};vi=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var n=ye();Ve(t,e,134217728,n)}Ji(e,134217728)}};fu=function(e){if(e.tag===13){var t=bt(e),n=it(e,t);if(n!==null){var r=ye();Ve(n,e,t,r)}Ji(e,t)}};pu=function(){return Q};mu=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};bl=function(e,t,n){switch(t){case"input":if(gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=So(r);if(!o)throw Error(S(90));Hs(r),gl(r,o)}}}break;case"textarea":Ys(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}};eu=Vi;tu=Ut;var hp={usingClientEntryPoint:!1,Events:[mr,Xt,So,Xs,qs,Vi]},Fn={findFiberByHostInstance:Dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vp={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ou(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{wo=Pr.inject(vp),Ge=Pr}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hp;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zi(t))throw Error(S(200));return pp(e,t,null,n)};De.createRoot=function(e,t){if(!Zi(e))throw Error(S(299));var n=!1,r="",o=Ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ki(e,1,!1,null,null,n,!1,r,o),e[lt]=t.current,nr(e.nodeType===8?e.parentNode:e),new Gi(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ou(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return Ut(e)};De.hydrate=function(e,t,n){if(!Lo(t))throw Error(S(200));return To(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!Zi(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",a=Ac;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ic(t,null,e,1,n??null,o,!1,l,a),e[lt]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Po(t)};De.render=function(e,t,n){if(!Lo(t))throw Error(S(200));return To(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!Lo(e))throw Error(S(40));return e._reactRootContainer?(Ut(function(){To(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};De.unstable_batchedUpdates=Vi;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Lo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return To(e,t,n,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";function _c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_c)}catch(e){console.error(e)}}_c(),_s.exports=De;var xp=_s.exports,ds=xp;sl.createRoot=ds.createRoot,sl.hydrateRoot=ds.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rc=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=E.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:a,...s},u)=>E.createElement("svg",{ref:u,...wp,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Rc("lucide",o),...s},[...a.map(([d,x])=>E.createElement(d,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=(e,t)=>{const n=E.forwardRef(({className:r,...o},l)=>E.createElement(kp,{ref:l,iconNode:t,className:Rc(`lucide-${yp(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=Xe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=Xe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=Xe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=Xe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=Xe("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=Xe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=Xe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=Xe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=Xe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=Xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),jp=`

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
`,Sp={Mon:{num:16,rows:[["6:00 AM","Morning","preferred",0],["7:00 AM","Morning","reserved",1],["9:30 AM","Morning","open",0],["12:00 PM","Afternoon","open",0],["5:30 PM","Evening","preferred",0],["6:30 PM","Evening","reserved",2]]},Tue:{num:17,rows:[["6:30 AM","Morning","preferred",0],["8:00 AM","Morning","open",0],["11:00 AM","Morning","reserved",0],["1:00 PM","Afternoon","open",0],["5:00 PM","Evening","preferred",0],["7:00 PM","Evening","open",0]]},Wed:{num:18,rows:[["6:00 AM","Morning","reserved",3],["7:30 AM","Morning","preferred",0],["10:00 AM","Morning","open",0],["2:00 PM","Afternoon","open",0],["6:00 PM","Evening","preferred",0]]},Thu:{num:19,rows:[["6:30 AM","Morning","preferred",0],["9:00 AM","Morning","open",0],["12:30 PM","Afternoon","reserved",1],["5:30 PM","Evening","preferred",0],["7:00 PM","Evening","open",0]]},Fri:{num:20,rows:[["6:00 AM","Morning","preferred",0],["8:30 AM","Morning","open",0],["11:30 AM","Morning","reserved",0],["4:30 PM","Evening","open",0],["6:00 PM","Evening","preferred",0]]},Sat:{num:21,rows:[["7:00 AM","Morning","preferred",0],["8:30 AM","Morning","preferred",0],["10:00 AM","Morning","open",0],["11:30 AM","Morning","reserved",2]]}},Qt=["Mon","Tue","Wed","Thu","Fri","Sat"],ms=["Morning","Afternoon","Evening"],Np=["January","February","March","April","May","June","July","August","September","October","November","December"],gs=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Cp(){const e={};return Qt.forEach(t=>{e[t]=Sp[t].rows.map((n,r)=>({id:`${t}-${r}`,day:t,time:n[0],period:n[1],tier:n[2],waitlist:n[3]}))}),e}const Qn={preferred:{label:"Andrea's pick",dot:"#F5841F",icon:ea},open:{label:"Open",dot:"#FFFFFF",icon:Oc},reserved:{label:"Reserved",dot:"#3A3A40",icon:Bc}};function Ep({liveSlots:e=null,loading:t=!1,onAction:n=null,errorMsg:r=null,onErrorDismiss:o=null}){const l=E.useMemo(Cp,[]),a=e??l,[s,u]=E.useState("Mon"),[d,x]=E.useState(0),[g,m]=E.useState({}),[j,b]=E.useState({}),[N,B]=E.useState(null),[f,c]=E.useState(null);E.useEffect(()=>{if(!e)return;const C={};Object.values(e).flat().forEach(I=>{I.userBookingId&&(C[I.id]=I)}),m(C)},[e]),E.useEffect(()=>{r&&(m(C=>{const I={...C};return delete I[r.slotId],I}),B(r.message),o==null||o())},[r]),E.useEffect(()=>{if(!N)return;const C=setTimeout(()=>B(null),2600);return()=>clearTimeout(C)},[N]),E.useEffect(()=>{if(!n)return;const C=new Date,I=C.getDay(),h=new Date(C);h.setDate(C.getDate()-(I===0?6:I-1)+d*7),h.setHours(0,0,0,0),n({type:"weekChange",mondayISO:h.toISOString()})},[d]);const p=new Date,w=(a[s]||[]).filter(C=>{var h;const I=((h=C.slotData)==null?void 0:h.startDate)||C.startDate;return!I||new Date(I)>p}),z=E.useMemo(()=>{const C={};return ms.forEach(I=>{C[I]=w.filter(h=>h.period===I)}),C},[w]),k=E.useMemo(()=>{const C=new Date,I=C.getDay(),h=new Date(C);h.setDate(C.getDate()-(I===0?6:I-1)+d*7);const F={};return Qt.forEach((y,L)=>{const R=new Date(h);R.setDate(h.getDate()+L),F[y]={num:R.getDate(),month:R.getMonth(),year:R.getFullYear()}}),F},[d]),P=E.useMemo(()=>{const C=k[Qt[0]],I=k[Qt[Qt.length-1]];return C.month===I.month?`${Np[C.month]} ${C.year}`:`${gs[C.month]} - ${gs[I.month]} ${I.year}`},[k]),D=C=>B(C);function U(C){m(I=>({...I,[C.id]:C})),b(I=>{const h={...I};return delete h[C.id],h}),D(`Booked - ${C.day}, ${C.time}`),n==null||n({type:"book",slot:C})}function v(C){if(C.tier==="open"){const I=a[C.day].find(h=>h.tier==="preferred"&&!g[h.id]);if(I){c({slot:C,alt:I});return}}U(C)}function A(C){const I=(C.waitlist||0)+1;b(h=>({...h,[C.id]:{slot:C,pos:I}})),D(`You're #${I} on the waitlist - ${C.day}, ${C.time}`),n==null||n({type:"waitlist",slot:C})}function _(C){m(I=>{const h={...I};return delete h[C],h}),D("Booking canceled"),n==null||n({type:"cancel",slotId:C})}function W(C){b(I=>{const h={...I};return delete h[C],h}),D("Left the waitlist"),n==null||n({type:"leaveWaitlist",slotId:C})}const J=Object.values(g),ce=Object.values(j);return i.jsxs("div",{className:"ab",children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');"}),i.jsx("style",{children:jp}),i.jsxs("div",{className:"ab-wrap",children:[i.jsxs("h1",{className:"ab-h1",children:["Book your ",i.jsx("span",{className:"acc",children:"week."})]}),i.jsx("p",{className:"ab-sub",children:"Reduce pain, build strength, move better - with Andrea in Lake Ridge. Highlighted times are the ones she recommends; booking them keeps her week flowing so there's more room for everyone."}),i.jsxs("div",{className:"ab-legend",children:[i.jsxs("span",{className:"ab-key",children:[i.jsx("span",{className:"ab-dot",style:{background:Qn.preferred.dot}}),"Preferred - recommended"]}),i.jsxs("span",{className:"ab-key",children:[i.jsx("span",{className:"ab-dot",style:{background:Qn.open.dot}}),"Open - available, not preferred"]}),i.jsxs("span",{className:"ab-key",children:[i.jsx("span",{className:"ab-dot",style:{background:Qn.reserved.dot}}),"Reserved - join waitlist"]})]}),i.jsxs("div",{className:"ab-week-hd",children:[i.jsx("div",{className:"ab-week-month",children:P}),i.jsx("div",{className:"ab-week-div"}),i.jsxs("div",{className:"ab-week-nav",children:[i.jsx("button",{className:"ab-week-arr",onClick:()=>x(C=>C-1),"aria-label":"Previous week",children:i.jsx(qi,{size:18})}),i.jsx("div",{className:"ab-days",children:Qt.map(C=>{const I=(a[C]||[]).filter(y=>{var R;const L=((R=y.slotData)==null?void 0:R.startDate)||y.startDate;return!L||new Date(L)>p}),h=I.some(y=>y.tier==="preferred"),F=I.length>0&&!h&&I.every(y=>y.tier==="reserved");return i.jsxs("div",{className:`ab-day${C===s?" on":""}`,role:"button",tabIndex:0,onClick:()=>u(C),onKeyDown:y=>y.key==="Enter"&&u(C),children:[i.jsx("div",{className:"ab-day-dow",children:C}),i.jsx("div",{className:"ab-day-num",children:k[C].num}),(h||F)&&i.jsx("span",{className:"ab-day-pref",style:F?{background:"#555558"}:void 0})]},C)})}),i.jsx("button",{className:"ab-week-arr",onClick:()=>x(C=>C+1),"aria-label":"Next week",children:i.jsx(At,{size:18})})]}),i.jsx("div",{className:"ab-week-div",style:{marginTop:14}})]}),t?i.jsx("div",{className:"ab-loading",children:"Loading your schedule…"}):ms.map(C=>z[C].length?i.jsxs("div",{children:[i.jsx("div",{className:"ab-period",children:C}),z[C].map(I=>i.jsx(zp,{slot:I,mine:!!g[I.id],wait:j[I.id],onBook:()=>v(I),onWaitlist:()=>A(I),onCancel:()=>_(I.id),onLeave:()=>W(I.id)},I.id))]},C):null)]}),i.jsx("div",{className:"ab-foot",children:i.jsxs("button",{className:"ab-foot-btn",onClick:()=>n==null?void 0:n({type:"mySchedule"}),children:[i.jsx("span",{className:"ab-foot-btn-label",children:"My schedule"}),J.length+ce.length>0?i.jsx("span",{className:"ab-foot-btn-count",children:J.length+ce.length}):i.jsx("span",{style:{color:"var(--muted)",fontSize:13,fontWeight:400},children:"Nothing booked yet"}),i.jsx(At,{size:16,style:{color:"var(--muted)"}})]})}),N&&i.jsxs("div",{className:"ab-toast",children:[i.jsx(Xi,{size:16,className:"ic"}),N]}),f&&i.jsx("div",{className:"ab-scrim",onClick:()=>c(null),children:i.jsxs("div",{className:"ab-modal",onClick:C=>C.stopPropagation(),children:[i.jsx("div",{className:"ab-modal-ico",children:i.jsx(ea,{size:22})}),i.jsxs("h3",{children:["A ",i.jsx("span",{className:"acc",children:"preferred"})," time close by"]}),i.jsxs("p",{children:[i.jsx("b",{children:f.slot.time})," works, but Andrea has an open recommended slot at ",i.jsx("b",{children:f.alt.time})," the same day. Choosing it helps her fit more clients in."]}),i.jsxs("div",{className:"ab-modal-acts",children:[i.jsxs("button",{className:"ab-btn ab-btn-pref",onClick:()=>{U(f.alt),c(null)},children:["Book ",f.alt.time," instead"]}),i.jsxs("button",{className:"ab-btn ab-btn-line",onClick:()=>{U(f.slot),c(null)},children:["Keep ",f.slot.time]})]})]})})]})}function zp({slot:e,mine:t,wait:n,onBook:r,onWaitlist:o,onCancel:l,onLeave:a}){const s=t?"mine":e.tier,u=t?Xi:Qn[e.tier].icon,d=t?"Your session":Qn[e.tier].label;return i.jsxs("div",{className:`ab-slot ${s}`,children:[i.jsx("div",{className:"ab-ico",children:i.jsx(u,{size:18})}),i.jsxs("div",{className:"ab-body",children:[i.jsx("div",{className:"ab-eye",children:d}),i.jsx("div",{className:"ab-time",children:e.time}),i.jsx("div",{className:"ab-meta",children:t?`Confirmed · ${e.service||`${e.duration||60} min`}`:e.tier==="reserved"?n?i.jsxs("span",{className:"ab-wl",children:[i.jsx(ps,{size:12})," You're #",n.pos," on the waitlist"]}):i.jsxs("span",{className:"ab-wl",children:[i.jsx(ps,{size:12})," ",e.waitlist>0?`${e.waitlist} waiting`:"Taken - be first to wait"]}):e.service||"Personal Training · 60 min"})]}),i.jsx("div",{className:"ab-act",children:t?i.jsxs("button",{className:"ab-btn ab-btn-pill",onClick:l,children:[i.jsx(ta,{size:14})," Cancel"]}):e.tier==="reserved"?n?i.jsx("button",{className:"ab-btn ab-btn-wait",onClick:a,children:"Leave waitlist"}):i.jsx("button",{className:"ab-btn ab-btn-wait",onClick:o,children:"Join waitlist"}):e.tier==="preferred"?i.jsxs("button",{className:"ab-btn ab-btn-pref",onClick:r,children:["Book ",i.jsx(At,{size:14,style:{verticalAlign:"-2px"}})]}):i.jsx("button",{className:"ab-btn ab-btn-open",onClick:r,children:"Book"})})]})}const Mp=`

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
`,Dn=["Mon","Tue","Wed","Thu","Fri","Sat"],Fp=["January","February","March","April","May","June","July","August","September","October","November","December"],hs=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Dp=["6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM"],Yr=["Personal Training - 60 min","Personal Training - 45 min","Personal Training - 30 min","Mobility Training","Phone Consultation","Intro Offer - Wellness Consultation"],ti=[{key:"preferred",label:"Preferred",icon:ea,dot:"#F5841F"},{key:"np",label:"Non-pref",icon:Oc,dot:"#FFFFFF"},{key:"reserved",label:"Reserved",icon:Bc,dot:"#6A665F"}],Pp=Object.fromEntries(ti.map(e=>[e.key,e]));function vs(e){const t=e.match(/(\d+):(\d+)\s*(AM|PM)/);let n=+t[1]%12;return t[3]==="PM"&&(n+=12),n*60+ +t[2]}let ni=100;function Lp(){return{Mon:[],Tue:[],Wed:[],Thu:[],Fri:[],Sat:[]}}function Tp(){const e=(t,n,r=Yr[0])=>({id:++ni,time:t,tier:n,service:r});return{Mon:[e("6:00 AM","preferred"),e("9:30 AM","np"),e("5:30 PM","preferred"),e("7:00 AM","reserved")],Tue:[e("6:30 AM","preferred"),e("1:00 PM","np"),e("5:00 PM","preferred")],Wed:[e("7:30 AM","preferred"),e("10:00 AM","np"),e("6:00 PM","preferred")],Thu:[e("6:30 AM","preferred"),e("9:00 AM","np"),e("5:30 PM","preferred")],Fri:[e("6:00 AM","preferred"),e("4:30 PM","np")],Sat:[e("7:00 AM","preferred"),e("8:30 AM","preferred")]}}function Ip({livePrefs:e=null,loading:t=!1,onAction:n,saving:r=!1}){const[o,l]=E.useState(Tp),[a,s]=E.useState("Mon"),[u,d]=E.useState(!1),[x,g]=E.useState(""),[m,j]=E.useState(0);E.useEffect(()=>{if(e===null)return;const v=Lp();e.forEach(A=>{v[A.dayOfWeek]&&v[A.dayOfWeek].push({id:++ni,time:A.time,tier:A.tier==="open"?"np":A.tier,service:A.service||Yr[0]})}),l(v)},[e]);const b=E.useMemo(()=>{const v=new Date,A=v.getDay(),_=new Date(v);_.setDate(v.getDate()-(A===0?6:A-1)+m*7);const W={};return Dn.forEach((J,ce)=>{const C=new Date(_);C.setDate(_.getDate()+ce),W[J]={num:C.getDate(),month:C.getMonth(),year:C.getFullYear()}}),W},[m]),N=E.useMemo(()=>{const v=b[Dn[0]],A=b[Dn[Dn.length-1]];return v.month===A.month?`${Fp[v.month]} ${v.year}`:`${hs[v.month]} - ${hs[A.month]} ${A.year}`},[b]),B=E.useMemo(()=>[...o[a]].sort((v,A)=>vs(v.time)-vs(A.time)),[o,a]),f=E.useMemo(()=>{const v={preferred:0,np:0,reserved:0};return o[a].forEach(A=>v[A.tier]++),v},[o,a]),c=new Set(o[a].map(v=>v.time)),p=Dp.filter(v=>!c.has(v));function w(v,A){l(_=>({..._,[a]:_[a].map(W=>W.id===v?{...W,tier:A}:W)}))}function z(v,A){l(_=>({..._,[a]:_[a].map(W=>W.id===v?{...W,service:A}:W)}))}function k(v){l(A=>({...A,[a]:A[a].filter(_=>_.id!==v)}))}function P(v){l(A=>({...A,[a]:[...A[a],{id:++ni,time:v,tier:"preferred",service:Yr[0]}]})),d(!1),g("")}function D(){if(!x)return;const[v,A]=x.split(":").map(Number),_=v<12?"AM":"PM",J=`${v%12||12}:${String(A).padStart(2,"0")} ${_}`;c.has(J)||P(J)}function U(){const v=[];Object.entries(o).forEach(([A,_])=>{_.forEach(W=>{v.push({dayOfWeek:A,time:W.time,tier:W.tier==="np"?"open":W.tier,service:W.service})})}),n==null||n({type:"savePrefs",items:v})}return i.jsxs("div",{className:"fg",children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');"}),i.jsx("style",{children:Mp}),i.jsxs("div",{className:"fg-wrap",children:[i.jsx("h1",{className:"fg-h1",children:"Set your availability"}),i.jsx("p",{className:"fg-sub",children:"Add the times you'll take clients, then tag each one. Preferred times get highlighted to clients; reserved times are held and can't be booked."}),i.jsx("div",{className:"fg-legend",children:ti.map(v=>i.jsxs("span",{className:"fg-key",children:[i.jsx("span",{className:"fg-dot",style:{background:v.dot}}),v.key==="preferred"&&"Preferred — recommended",v.key==="np"&&"Non-preferred — available",v.key==="reserved"&&"Reserved — held"]},v.key))}),i.jsxs("div",{className:"fg-week-hd",children:[i.jsx("div",{className:"fg-week-month",children:N}),i.jsx("div",{className:"fg-week-div"}),i.jsxs("div",{className:"fg-week-nav",children:[i.jsx("button",{className:"fg-week-arr",onClick:()=>j(v=>v-1),"aria-label":"Previous week",children:i.jsx(qi,{size:18})}),i.jsx("div",{className:"fg-days",children:Dn.map(v=>i.jsxs("div",{className:`fg-day${v===a?" on":""}`,role:"button",tabIndex:0,onClick:()=>{s(v),d(!1)},onKeyDown:A=>A.key==="Enter"&&s(v),children:[i.jsx("div",{className:"fg-day-dow",children:v}),i.jsx("div",{className:"fg-day-num",children:b[v].num}),i.jsxs("div",{className:"fg-day-c",children:[o[v].length," slot",o[v].length!==1?"s":""]})]},v))}),i.jsx("button",{className:"fg-week-arr",onClick:()=>j(v=>v+1),"aria-label":"Next week",children:i.jsx(At,{size:18})})]}),i.jsx("div",{className:"fg-week-div",style:{marginTop:14}})]}),i.jsxs("div",{className:"fg-tally",children:[i.jsxs("span",{children:[i.jsx("i",{style:{color:"#F5841F"},children:"●"})," ",i.jsx("b",{children:f.preferred})," preferred"]}),i.jsxs("span",{children:[i.jsx("i",{style:{color:"#FFFFFF"},children:"●"})," ",i.jsx("b",{children:f.np})," non-pref"]}),i.jsxs("span",{children:[i.jsx("i",{style:{color:"#6A665F"},children:"●"})," ",i.jsx("b",{children:f.reserved})," reserved"]})]}),t?i.jsx("div",{className:"fg-empty",style:{padding:"40px 0"},children:"Loading your schedule…"}):i.jsxs(i.Fragment,{children:[B.length===0&&!u&&i.jsxs("div",{className:"fg-empty",children:["No times set for ",a," yet. Add one below."]}),B.map(v=>{const A=Pp[v.tier].icon;return i.jsxs("div",{className:`fg-blk ${v.tier}`,children:[i.jsxs("div",{className:"fg-blk-top",children:[i.jsxs("span",{className:"fg-blk-time",children:[i.jsx("span",{className:"fg-blk-ic",children:i.jsx(A,{size:15})}),v.time]}),i.jsx("button",{className:"fg-rm",onClick:()=>k(v.id),"aria-label":"Remove time",children:i.jsx(ta,{size:18})})]}),i.jsx("div",{className:"fg-seg",role:"group","aria-label":"Tier",children:ti.map(_=>{const W=_.icon,J=v.tier===_.key;return i.jsxs("button",{className:`${J?"on":""} ${_.key}`,onClick:()=>w(v.id,_.key),children:[i.jsx(W,{size:13})," ",_.label]},_.key)})}),i.jsx("div",{className:"fg-svc",children:i.jsx("select",{value:v.service,onChange:_=>z(v.id,_.target.value),"aria-label":"Service",children:Yr.map(_=>i.jsx("option",{value:_,children:_},_))})})]},v.id)}),u?i.jsxs("div",{className:"fg-palette",children:[i.jsxs("div",{className:"fg-palette-h",children:[i.jsx("span",{children:"Pick a time to add"}),i.jsx("button",{onClick:()=>d(!1),children:"Cancel"})]}),p.length===0?i.jsxs("div",{className:"fg-empty",style:{padding:"4px 0"},children:["Every preset time is already added for ",a,"."]}):i.jsx("div",{className:"fg-times",children:p.map(v=>i.jsx("button",{className:"fg-tchip",onClick:()=>P(v),children:v},v))}),i.jsxs("div",{className:"fg-custom",children:[i.jsx("span",{className:"fg-custom-label",children:"Custom"}),i.jsx("input",{type:"time",value:x,onChange:v=>g(v.target.value),onKeyDown:v=>v.key==="Enter"&&D()}),i.jsx("button",{className:"fg-custom-add",disabled:!x,onClick:D,children:"Add"})]})]}):i.jsxs("button",{className:"fg-add",onClick:()=>d(!0),children:[i.jsx(bp,{size:17})," Add a time"]})]})]}),i.jsx("div",{className:"fg-save",children:i.jsxs("div",{className:"fg-save-in",children:[i.jsx("span",{className:"fg-save-t",children:"Changes apply to all weeks — clients see preferred times highlighted"}),i.jsxs("button",{className:"fg-btn",disabled:r,onClick:U,children:[i.jsx(Xi,{size:16})," ",r?"Saving…":"Save week"]})]})})]})}const na="/assets/logo.png",Ap=window.self!==window.top,_p=`
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
`;function Rp({slot:e=null}){const[t,n]=E.useState("idle"),[r,o]=E.useState("");E.useEffect(()=>{const u=d=>{var x;if((x=d.data)!=null&&x.type&&(d.data.type==="abate-confirm-success"&&n("success"),d.data.type==="abate-confirm-error")){const g=d.data.message||"",m=g.toLowerCase().includes("plan")||g.toLowerCase().includes("pricing")?"No active session plan found. Please contact Andrea to update your plan.":g||"Could not confirm booking. Please try again.";o(m),n("error")}};return window.addEventListener("message",u),()=>window.removeEventListener("message",u)},[]);const l=()=>{n("loading"),o(""),Ap&&window.parent.postMessage({type:"abate-confirm"},"*")},a=()=>{n("idle"),o("")},s=t==="loading"?"Booking…":"Confirm my session →";return i.jsxs("div",{className:"cv",children:[i.jsx("style",{children:_p}),i.jsx("div",{className:"cv-header",children:i.jsx("img",{src:na,alt:"Abate Wellness",className:"cv-logo"})}),i.jsx("hr",{className:"cv-rule"}),i.jsx("div",{className:"cv-body",children:t==="success"?i.jsxs("div",{className:"cv-success",children:[i.jsx("div",{className:"cv-success-icon",children:"✓"}),i.jsxs("div",{className:"cv-success-h",children:["You're ",i.jsx("em",{children:"booked"})]}),i.jsx("div",{className:"cv-success-sub",children:"Andrea will see you then. Heading back to your schedule…"})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"cv-heading",children:["Confirm your ",i.jsx("em",{children:"session"})]}),e!=null&&e.service?i.jsxs("div",{className:"cv-card",children:[i.jsxs("div",{className:"cv-card-top",children:[i.jsx("div",{className:"cv-card-eyebrow",children:"Session details"}),i.jsx("div",{className:"cv-card-service",children:e.service})]}),i.jsxs("div",{className:"cv-card-bottom",children:[e.day&&i.jsxs("div",{className:"cv-card-item",children:[i.jsx("div",{className:"cv-card-item-label",children:"Date"}),i.jsx("div",{className:"cv-card-item-value",children:e.day})]}),e.time&&i.jsxs("div",{className:"cv-card-item",children:[i.jsx("div",{className:"cv-card-item-label",children:"Time"}),i.jsx("div",{className:"cv-card-item-value",children:e.time})]})]})]}):i.jsx("div",{className:"cv-loading-slot",children:"Loading session details…"}),t==="error"&&i.jsx("div",{className:"cv-error",children:r}),t==="error"?i.jsx("button",{className:"cv-btn",onClick:a,children:"Try again"}):i.jsx("button",{className:"cv-btn",onClick:l,disabled:t==="loading",children:s}),i.jsx("div",{className:"cv-policy",children:"By confirming you agree to Abate Wellness's cancellation policy."})]})})]})}const Lr=window.self!==window.top,Op=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,Bp=e=>Op.test(e||""),Up=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],al=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function Wp(e){const t=new Date(e),n=t.getDay();return t.setDate(t.getDate()-(n===0?6:n-1)),t.setHours(0,0,0,0),t}function Tr(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function $p(e){return e.toLocaleDateString("en-US",{month:"long",year:"numeric"})}function Vp(e){return new Date(e).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function Hp(e){return new Date(e).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function xs(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const Qp=`
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
`;function Yp({sessions:e=null,onBook:t=null}){const[n,r]=E.useState(e),[o,l]=E.useState(null),[a,s]=E.useState("sessions"),u=(()=>{const h=new Date;return h.setHours(0,0,0,0),h})(),[d,x]=E.useState(()=>Wp(new Date)),[g,m]=E.useState(null),[j,b]=E.useState(!1),[N,B]=E.useState({}),[f,c]=E.useState(!1),[p,w]=E.useState(!1),[z,k]=E.useState(!1);E.useEffect(()=>{e!==null&&r(e)},[e]),E.useEffect(()=>{const h=F=>{var y,L,R;if((y=F.data)!=null&&y.type)switch(F.data.type){case"abate-schedule-data":r(F.data.sessions||[]);break;case"abate-schedule-cancelled":r(M=>(M||[]).filter(O=>O._id!==F.data.recordId)),l(null);break;case"abate-schedule-cancel-error":l(null);break;case"abate-auto-prefs-data":b(((L=F.data.prefs)==null?void 0:L.enabled)||!1),B(((R=F.data.prefs)==null?void 0:R.slots)||{}),c(!0);break;case"abate-auto-prefs-saved":w(!1),k(!0),setTimeout(()=>k(!1),3e3);break}};return window.addEventListener("message",h),()=>window.removeEventListener("message",h)},[]),E.useEffect(()=>{a==="auto"&&!f&&Lr&&window.parent.postMessage({type:"abate-auto-prefs-get"},"*")},[a,f]);const P=h=>{l(h._id),Lr&&window.parent.postMessage({type:"abate-schedule-cancel",recordId:h._id},"*")},D=()=>{Lr?window.parent.postMessage({type:"abate-schedule-book"},"*"):t&&t()},U=()=>{w(!0),Lr&&window.parent.postMessage({type:"abate-auto-prefs-save",prefs:{enabled:j,slots:N}},"*")},v=h=>{B(F=>{const y={...F};return y[h]!==void 0?delete y[h]:y[h]="",y})},A=(h,F)=>B(y=>({...y,[h]:F})),_=Array.from({length:7},(h,F)=>Tr(d,F)),W=(n||[]).filter(h=>{const F=new Date(h.startDate);return F>=d&&F<Tr(d,7)}),J=W.reduce((h,F)=>{const y=new Date(F.startDate),L=_.findIndex(R=>xs(R,y));return L>=0&&(h[L]=h[L]||[],h[L].push(F)),h},{}),ce=(g!==null?J[g]||[]:W).slice().sort((h,F)=>new Date(h.startDate)-new Date(F.startDate)),C=(n||[]).length,I=n===null;return i.jsxs("div",{className:"ms",children:[i.jsx("style",{children:Qp}),i.jsx("div",{className:"ms-header",children:i.jsx("img",{src:na,alt:"Abate Wellness",className:"ms-logo"})}),i.jsx("hr",{className:"ms-rule"}),i.jsxs("div",{className:"ms-title-row",children:[i.jsxs("h1",{className:"ms-title",children:["Your ",i.jsx("em",{children:"schedule"})]}),!I&&C>0&&i.jsxs("span",{className:"ms-title-count",children:[C," upcoming"]})]}),i.jsxs("div",{className:"ms-tabs",children:[i.jsxs("button",{className:`ms-tab${a==="sessions"?" active":""}`,onClick:()=>s("sessions"),children:["My sessions",!I&&C>0&&i.jsx("span",{className:"ms-tab-badge",children:C})]}),i.jsx("button",{className:`ms-tab${a==="auto"?" active":""}`,onClick:()=>s("auto"),children:"Auto-schedule"})]}),a==="sessions"&&i.jsx(i.Fragment,{children:I?i.jsx("div",{className:"ms-loading",children:"Loading your schedule…"}):C===0?i.jsxs("div",{className:"ms-empty",children:[i.jsx("div",{className:"ms-empty-icon",children:i.jsx(fs,{size:24})}),i.jsx("div",{className:"ms-empty-h",children:"No upcoming sessions"}),i.jsx("div",{className:"ms-empty-sub",children:"Book your first session to get started."}),i.jsx("div",{className:"ms-book-wrap",style:{padding:"0",marginTop:"4px"},children:i.jsxs("button",{className:"ms-book-btn",onClick:D,children:["Book a session ",i.jsx(At,{size:16})]})})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"ms-week-nav",children:[i.jsx("button",{className:"ms-week-arrow",onClick:()=>{x(h=>Tr(h,-7)),m(null)},children:i.jsx(qi,{size:16})}),i.jsx("span",{className:"ms-week-month",children:$p(d)}),i.jsx("button",{className:"ms-week-arrow",onClick:()=>{x(h=>Tr(h,7)),m(null)},children:i.jsx(At,{size:16})})]}),i.jsx("div",{className:"ms-days",children:_.map((h,F)=>{var y;return i.jsxs("div",{className:`ms-day${xs(h,u)?" today":""}${g===F?" sel":""}`,onClick:()=>m(g===F?null:F),children:[i.jsx("span",{className:"ms-day-abbr",children:Up[F]}),i.jsx("span",{className:"ms-day-num",children:h.getDate()}),((y=J[F])==null?void 0:y.length)>0&&i.jsx("span",{className:"ms-day-dot"})]},F)})}),ce.length===0?i.jsxs("div",{className:"ms-empty",style:{marginTop:32},children:[i.jsx("div",{className:"ms-empty-icon",children:i.jsx(fs,{size:24})}),i.jsx("div",{className:"ms-empty-h",children:g!==null?`No sessions on ${al[g]}`:"No sessions this week"}),i.jsx("div",{className:"ms-empty-sub",children:"Use the arrows to browse other weeks."})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"ms-section",children:g!==null?al[g]:"This week"}),i.jsx("div",{className:"ms-list",children:ce.map(h=>i.jsxs("div",{className:"ms-card",children:[i.jsxs("div",{className:"ms-card-body",children:[i.jsx("div",{className:"ms-card-date",children:Hp(h.startDate)}),i.jsx("div",{className:"ms-card-time",children:Vp(h.startDate)}),h.service&&!Bp(h.service)&&i.jsx("div",{className:"ms-card-svc",children:h.service})]}),i.jsxs("button",{className:"ms-cancel-btn",onClick:()=>P(h),disabled:o===h._id,children:[i.jsx(ta,{size:13}),o===h._id?"Cancelling…":"Cancel"]})]},h._id))})]}),i.jsx("div",{className:"ms-book-wrap",children:i.jsxs("button",{className:"ms-book-btn",onClick:D,children:["Book another session ",i.jsx(At,{size:16})]})})]})}),a==="auto"&&i.jsxs("div",{className:"ms-auto",children:[i.jsx("p",{className:"ms-auto-desc",children:"Choose which days and times you train each week. Once saved and enabled, those slots will be automatically reserved for you — no manual booking needed."}),i.jsxs("div",{className:`ms-auto-master${j?" on":""}`,children:[i.jsxs("div",{children:[i.jsx("div",{className:"ms-auto-master-label",children:"Enable auto-schedule"}),i.jsx("div",{className:"ms-auto-master-sub",children:j?"On — your recurring slots will be reserved each week":"Off — you book each session manually"})]}),i.jsx("button",{className:"ms-toggle","data-on":String(j),onClick:()=>b(h=>!h)})]}),i.jsx("div",{className:"ms-auto-days",children:al.map((h,F)=>{const y=N[F]!==void 0;return i.jsxs("div",{className:`ms-auto-row${y?" on":""}${j?"":" disabled"}`,children:[i.jsx("button",{className:"ms-toggle","data-on":String(y),onClick:()=>v(F)}),i.jsx("span",{className:"ms-auto-day-name",children:h}),y?i.jsx("input",{type:"time",className:"ms-auto-time-input",value:N[F]||"",onChange:L=>A(F,L.target.value)}):i.jsx("span",{className:"ms-auto-time-off",children:"— : —"})]},F)})}),i.jsxs("div",{className:"ms-auto-save",children:[i.jsx("button",{className:"ms-save-btn",onClick:U,disabled:p,children:p?"Saving…":"Save schedule"}),z&&i.jsx("span",{className:"ms-saved-label",children:"✓ Saved"})]})]})]})}const Kp=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ys=["MON","TUE","WED","THU","FRI","SAT","SUN"],ws=[{emoji:"😊",label:"Great",value:5},{emoji:"🙂",label:"Good",value:4},{emoji:"😐",label:"Okay",value:3},{emoji:"😟",label:"Meh",value:2},{emoji:"😫",label:"Bad",value:1}],ks=[{id:1,name:"Probiotic Smoothie",time:"5 min",tag:"gut-friendly",emoji:"🥤"},{id:2,name:"Kimchi Rice Bowl",time:"15 min",tag:"fermented",emoji:"🍚"},{id:3,name:"Bone Broth Soup",time:"30 min",tag:"gut-healing",emoji:"🍲"},{id:4,name:"Overnight Oats",time:"5 min",tag:"prebiotic",emoji:"🥣"},{id:5,name:"Miso Salmon",time:"20 min",tag:"fermented",emoji:"🍣"},{id:6,name:"Ginger Turmeric Tea",time:"5 min",tag:"anti-inflammatory",emoji:"☕"},{id:7,name:"Greek Yogurt Bowl",time:"3 min",tag:"probiotic",emoji:"🫙"},{id:8,name:"Sauerkraut Wrap",time:"10 min",tag:"fermented",emoji:"🌯"}];function bs(){const e=new Date().getDay();return e===0?6:e-1}function Jp({score:e}){const o=b=>{const N=Math.PI*(1-b);return[+(105+70*Math.cos(N)).toFixed(2),+(88-70*Math.sin(N)).toFixed(2)]},[l,a]=o(0),[s,u]=o(1),d=Math.max(.005,Math.min(.995,e/100)),[x,g]=o(d),m=(b,N,B,f)=>`M ${b} ${N} A 70 70 0 0 1 ${B} ${f}`,j=e<34?"#FF453A":e<67?"#FFD60A":"#30D158";return i.jsxs("div",{className:"fj-gauge-wrap",children:[i.jsx("div",{className:"fj-gauge-label",children:"Gut Health"}),i.jsxs("svg",{viewBox:"0 0 210 136",style:{display:"block",width:"100%"},children:[i.jsx("path",{d:m(l,a,s,u),stroke:"#252527",strokeWidth:"14",fill:"none",strokeLinecap:"round"}),i.jsx("path",{d:m(l,a,x,g),stroke:j,strokeWidth:"14",fill:"none",strokeLinecap:"round"}),i.jsx("line",{x1:105,y1:88,x2:x,y2:g,stroke:"rgba(255,255,255,.85)",strokeWidth:"2.5",strokeLinecap:"round"}),i.jsx("circle",{cx:105,cy:88,r:"5",fill:"#fff"}),i.jsx("text",{x:105,y:118,textAnchor:"middle",fill:"#fff",fontSize:"24",fontWeight:"700",fontFamily:"Inter,sans-serif",children:e}),i.jsx("text",{x:105,y:130,textAnchor:"middle",fill:"#9C988F",fontSize:"7.5",fontFamily:"Inter,sans-serif",letterSpacing:"2",children:"GUT SCORE"}),i.jsx("text",{x:l,y:a+20,textAnchor:"middle",fill:"#FF453A",fontSize:"9",fontFamily:"Inter,sans-serif",fontWeight:"700",children:"Poor"}),i.jsx("text",{x:s,y:u+20,textAnchor:"middle",fill:"#30D158",fontSize:"9",fontFamily:"Inter,sans-serif",fontWeight:"700",children:"Good"})]})]})}const Gp=`
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
`;function Zp(){const[e,t]=E.useState(""),[n,r]=E.useState(bs()),[o,l]=E.useState(3),[a,s]=E.useState({}),[u,d]=E.useState(null),[x,g]=E.useState(0),[m,j]=E.useState(""),[b,N]=E.useState(""),[B,f]=E.useState(!1),[c,p]=E.useState(!1),w=E.useRef(null),z=E.useRef(null),k=[...new Set(ks.map(y=>y.tag))];Is.useEffect(()=>{const y=L=>{z.current&&!z.current.contains(L.target)&&p(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[]);const P=ks.filter(y=>{const L=m.toLowerCase();return(!L||y.name.toLowerCase().includes(L))&&(!b||y.tag===b)}),D=4,U=Math.ceil(P.length/D),v=P.slice(x*D,(x+1)*D),A=E.useRef(null),_=()=>{const y=e.trim();if(!y)return;const L={id:Date.now(),text:y,feel:o,fromRecipe:!1};s(R=>({...R,[n]:[...R[n]||[],L]})),t("")},W=(y,L)=>{s(R=>({...R,[y]:(R[y]||[]).filter(M=>M.id!==L)}))},J=y=>{const L=A.current;if(!L)return;const R={id:Date.now(),text:L.name,feel:3,fromRecipe:!0};s(M=>({...M,[y]:[...M[y]||[],R]}))},ce=Object.values(a).flat(),C=ce.length>0?ce.reduce((y,L)=>y+L.feel,0)/ce.length:3,I=Math.round(C/5*100),h=ce.length===0?"Start logging your meals and feelings throughout the week. Your personalized gut health insights will appear here.":I>=67?"Your gut is thriving this week. Keep up the variety and stay consistent with hydration and fiber-rich foods.":I>=34?"You're on track. Consider adding more fermented foods — kimchi, yogurt, or miso — to boost your gut flora further.":"Your gut may need some extra support. Focus on whole foods, reduce processed items, and try incorporating a daily probiotic.",F=bs();return i.jsxs("div",{className:"fj",children:[i.jsx("style",{children:Gp}),i.jsx("div",{className:"fj-header",children:i.jsx("img",{src:na,alt:"Abate Wellness",className:"fj-logo"})}),i.jsx("hr",{className:"fj-rule"}),i.jsxs("div",{className:"fj-title-row",children:[i.jsxs("h1",{className:"fj-title",children:["Food ",i.jsx("em",{children:"journal"})]}),i.jsx("p",{className:"fj-subtitle",children:"Track what you eat, how it makes you feel, and get personalized gut health insights."})]}),i.jsxs("div",{className:"fj-top",children:[i.jsxs("div",{className:"fj-left",children:[i.jsxs("div",{className:"fj-input-box",children:[i.jsxs("div",{className:"fj-input-row",children:[i.jsx("input",{className:"fj-input",placeholder:"What did you eat? (e.g. Greek yogurt, grilled salmon…)",value:e,onChange:y=>t(y.target.value),onKeyDown:y=>y.key==="Enter"&&_()}),i.jsx("button",{className:"fj-log-btn",onClick:_,children:"Log"})]}),i.jsxs("div",{className:"fj-meta-row",children:[i.jsxs("div",{className:"fj-meta-left",children:[i.jsx("span",{className:"fj-meta-label",children:"Day"}),i.jsx("div",{className:"fj-day-pills",children:ys.map((y,L)=>i.jsx("button",{className:`fj-day-pill${n===L?" active":""}`,onClick:()=>r(L),children:y.slice(0,3)},L))})]}),i.jsx("div",{className:"fj-feelings",children:ws.map(y=>i.jsx("button",{className:`fj-feeling${o===y.value?" active":""}`,onClick:()=>l(y.value),title:y.label,children:y.emoji},y.value))})]})]}),i.jsxs("div",{className:"fj-recipes-header",children:[i.jsx("span",{className:"fj-week-label",children:"Recipes — drag onto a day"}),i.jsxs("div",{className:"fj-recipe-controls",children:[i.jsxs("div",{className:`fj-search-wrap${B?" expanded":""}`,children:[i.jsx("div",{className:"fj-search-slide",children:i.jsx("input",{ref:w,className:"fj-search-input",placeholder:"Search...",value:m,onChange:y=>{j(y.target.value),g(0)},onBlur:()=>{m||f(!1)}})}),i.jsx("button",{className:"fj-search-icon-btn",onMouseDown:y=>y.preventDefault(),onClick:()=>{B?(f(!1),j(""),g(0)):(f(!0),setTimeout(()=>{var y;return(y=w.current)==null?void 0:y.focus()},30))},"aria-label":"Search recipes",children:i.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"11",cy:"11",r:"8"}),i.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),i.jsxs("div",{ref:z,className:`fj-filter-wrap${c?" open":""}`,children:[i.jsxs("button",{className:"fj-filter-btn",onClick:()=>p(y=>!y),children:[b||"All",i.jsx("svg",{className:"fj-filter-chevron",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),c&&i.jsx("div",{className:"fj-filter-dropdown",children:["",...k].map(y=>i.jsx("button",{className:`fj-filter-opt${b===y?" active":""}`,onMouseDown:L=>{L.preventDefault(),N(y),g(0),p(!1)},children:y||"All"},y))})]}),i.jsxs("div",{className:"fj-recipe-nav",children:[i.jsx("button",{onClick:()=>g(y=>Math.max(0,y-1)),disabled:x===0,"aria-label":"Previous recipes",children:"‹"}),i.jsx("button",{onClick:()=>g(y=>Math.min(Math.max(0,U-1),y+1)),disabled:x>=U-1,"aria-label":"Next recipes",children:"›"})]})]})]}),v.length===0&&i.jsx("div",{className:"fj-recipe-no-results",children:"No recipes match your search."}),i.jsx("div",{className:"fj-recipes-grid",children:v.map((y,L)=>i.jsxs("div",{className:"fj-recipe-card fj-recipe-card-anim",style:{animationDelay:`${L*65}ms`},draggable:!0,onDragStart:R=>{A.current=y,R.currentTarget.classList.add("fj-grabbing");const M=document.createElement("div");M.innerHTML=`<span style="font-size:15px;line-height:1">${y.emoji}</span><span style="font-size:12px;font-weight:600;font-family:Inter,sans-serif">${y.name}</span>`,M.style.cssText="position:fixed;top:-9999px;left:0;background:#1C1C1E;border:1px solid rgba(245,132,31,.75);border-radius:20px;padding:7px 14px;color:#fff;display:flex;align-items:center;gap:8px;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.75);transform:rotate(-3deg);",document.body.appendChild(M),R.dataTransfer.setDragImage(M,M.offsetWidth/2,M.offsetHeight/2),setTimeout(()=>{try{document.body.removeChild(M)}catch{}},100)},onDragEnd:R=>{R.currentTarget.classList.remove("fj-grabbing"),A.current=null,d(null)},children:[i.jsxs("div",{className:"fj-recipe-top",children:[i.jsx("span",{className:"fj-recipe-emoji",children:y.emoji}),i.jsx("span",{className:"fj-recipe-name",children:y.name})]}),i.jsxs("div",{className:"fj-recipe-meta",children:[i.jsx("span",{className:"fj-recipe-time",children:y.time}),i.jsx("span",{className:"fj-recipe-tag",children:y.tag})]})]},`${x}-${y.id}`))})]}),i.jsxs("div",{className:"fj-right",children:[i.jsx(Jp,{score:I}),i.jsxs("div",{className:"fj-advice",children:[i.jsxs("div",{className:"fj-advice-head",children:[i.jsx("span",{className:"fj-advice-dot"}),"AI Insights"]}),i.jsx("div",{className:"fj-advice-body",children:h})]})]})]}),i.jsxs("div",{className:"fj-week-section",children:[i.jsx("div",{className:"fj-week-label",children:"Weekly log"}),i.jsx("div",{className:"fj-week",children:Kp.map((y,L)=>{const R=a[L]||[],M=L===F,O=L===n,V=u===L;return i.jsxs("div",{className:`fj-day-col${M?" today":""}${O?" selected":""}${V?" drag-over":""}`,onClick:()=>r(L),onDragOver:Y=>{Y.preventDefault(),d(L)},onDragLeave:()=>d(null),onDrop:()=>{d(null),J(L)},children:[i.jsxs("div",{className:"fj-day-head",children:[i.jsx("span",{className:`fj-day-name${M?" today":""}`,children:ys[L]}),R.length>0&&i.jsx("span",{className:"fj-day-badge",children:R.length})]}),i.jsx("div",{className:"fj-day-entries",children:R.map(Y=>{var le;return i.jsxs("div",{className:`fj-entry${Y.fromRecipe?" from-recipe":""}`,children:[i.jsx("span",{className:"fj-entry-feel",children:((le=ws.find(Vt=>Vt.value===Y.feel))==null?void 0:le.emoji)??"🙂"}),i.jsx("span",{className:"fj-entry-text",children:Y.text}),i.jsx("button",{className:"fj-entry-del",onClick:Vt=>{Vt.stopPropagation(),W(L,Y.id)},children:"×"})]},Y.id)})}),R.length===0&&i.jsx("div",{className:"fj-day-drop-hint",children:"drop recipe"})]},L)})})]})]})}const Xp="/assets/11-flame.png",qp="/assets/19-heart-pulse.png",em="/assets/18-calendar-check.png",tm="/assets/21-smartwatch.png",Uc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAABYCAYAAADBRtRDAAAOF0lEQVR4nO1de4xcVRn/3ZnZV7v2uVvarqUFxEIRiwStIkZRQMAH4qsVxRDU+IoaNfEPjYrGRyQaHiamIfGBgMaoEZVqSBrrI2qDRlGQIvKQx9IHLdtut93O7s5c85HfVz+PM7tz79w758zM/pKb2Zl27tx77u985zvf9zvfiRA2CgB6ARQBxPxsBsC0ed+OKALoMe8rvB+5t+BQQtg4CcCLAKxgwwo5ngDwZwCPoz2xAMDzeG+DACYBjAHYC+AhAIcQGCKEgwEAZwE4hYQQC7IRwKtIkoIhyW8B7AJwL4C/AziMsPEyAM+ltRgCsInvlwA4AuApkv5+AP/m6642uK+Wog/AZgDbAexho8kxwYZ1D/n8AIDfAPg8gOUIE0MAruB1Ps17EqtxzLmfGX42DmAUwA4AHwKw2PcNhGTNpCHvAVCtQ4p6xwwJcwuAcxAOCgDWA7gOwD7jczR6yP9/EsBWAGu7fbjpB/BBAO9ho1rIw98JYD//nxKowPH8TA5Linvov0iP9I1hAN8CcD6AheZzsSJ38d7A66/yWAbgxfRZLG4F8DkAD6JLsZwPV3uQNNajAG4D8E4AI3Su+3n08XUDgE/RNNse+GXfNwTgRFo2axV2kjRvprOq96FHifd6FYDvAnjEsarXsHN0JTbQYdPGEO/+0wBObuC70uO+7pDkJvjHRc41yWzlYv5boQGrLo779wFMmXN8AV2KCzmUaEP8nLOYJJCGvdpxBO+GX1zgkORuztoaxfMB3OmcQzqON/g0YU/TFCsGU8xSxJqc4NyHzI58Inbe9ySMR91HH+Rnpn2Gfc50fJJEx2trFZJeT4HOn3XA7TlDQJRwgjBDn8SS/RJaqK4jSaFDZ2xZQIKGZfN+HYNvXtC1HnMLMZPSuhVqDGFeOsA8SfLHJC1Ds5ApsRfMk6Q1iNHGmCdJeyD2STSfJJnuECezEWRxn940NFnqSSTGsaoB4Uwv8xAiDegGxBn4ExHjQc/h38U5/q/6Qnv56p0kvZyivR7AG03yqhaksZYCuIM9Q77b6YgzsADynC5nNLbQwAgQUXfzUwC/BnCw2R9vBhLxfBOAy6i2cjO59bCKEVeJsnY64gzOETFOkiRWMsHncRaTi4/5IMlyWo+PMVEXzRIfiGk1tAesYdazGxznSkqfJJ7jnGXjpxT4WjRZ5UFKD05lauBmDvPVVpFkkGlvUU+dwc+mjNxOMp+7yWbNZgoxns0LrvB1sAuIMpMimFbL7zjGo8yh5F9s4wo7oEoqpMOeznYdoDru3QAWAfgsLXjuJJELOhvAFkOQfRz77uLNjVGqN0mSCHtX03oMkESnMIPbyUPOMbaNtEESuElBab8/AfgV2+5JamFV9dZHUvTRcpxKEZOo9V7C7Lq4BF9pFUlkmHmtkQtKQ9wO4GsUARVN71HTFpsbL9LCbKKutdNJciBFxLXkDFEz1MneQMJVeE43QSr4JzuytPdrqOJbR9H1CK1Q4otJioW0Avpw5WL/BuCBOb7nTo2P+Aw1Bz79na7xvXFa6Nl+CxyONDn4oHEBFlCX8oak63sKGThUaVL87bDmJytEKb6jule3jZOey8ooirQs4rckQlqn0WV5t0ROWwXVt7Zay5IpSeZJkS/UauQRhk88/HX69LNdo619dDyD6IzzJMkXUcrv9dWY4XhDJ5IkJO1GP+MVtoJAI+glUYJAJ5IkpFnTANcQJcl4FxlmEKLMW5IOJUnsvD+aMC4RXMcteJye5YXiHHqLvBE5bTWZcEZhl3fmgahVJAnCDNbBEBeO+8BiJjLdSk1p2jmvNpZIdyameSEzthLvh2F2D5NHkqwLFaLe+iKAG5kljVrQM6t0UF/Iojs2vH44sAVj5zGnZEuM2esdZeKwLkn6SYJzAbyFyaHYaRD12EOFzApeToFOq8pQxPzdZzmlJiaZdc1iSUVWuJmkda1bxOv8ARfeC1n+jySSsLsUwNtZ+2OkjeWFBV6/b/QwsZbGR8or+TlXxQbRCf2+FkmWkBwfAHCaYdkM64ccMjdaZC+VsX8etR+utt8ABcxJOpsm8/JyvqXUFnhNM7SA66k9VhJdTkmB1G6rCklK1IZcQVWTpqXHKXK5hinqPp50hJ/JiULEGAU6i+qMu3mhZGq9vcN8ntRx1byN+jpZk+Vqdvoenl/chysBfISElvdvoz8n9V/GNPQ7aPQh0qh/AXA9qxy6GoYFKZRWrcROiqJEbN1KxGyXcxySJCWpFWvlgdEaPtI3+bvvok/ab8tylUwJCC3+BlqM3XVELqp6ChXayMfH1BZjssZnSYiiomYVOGeNnhokkdnMdygmW8ffPj4FL9RYta4i3NnG0ZAVZT4Dae5koEw9qi0j0WgwrdVtfJjrc6p89hLvWdloDa+k/zaP/0LrsyaJkyhBWr3+1/pCBWqQXypDT3B5gg7DQvbIJAk+dVhbnf5QcuhvruS19xVSShJDzt2EhkJCy1s1/mErLbbrl5ZI8mJhll0TZosSzlugxlBmhckkEVdfQ7krvi4qaXQKrNuDKHpmEb0o40KFb6d6ukbENUmn0llNXmSJZ1lwt4HXXGb1R1lwPq47P8j6jL8ygAauzLusTqwhdKmA7zxJZP4uMKhXSuGTtHKKLgbhlVxcXqLRuI87gFT04ke5wOoS3tQQw/RrOYfWyGWV41RIxf5dvICBwP4WDouR8SWsVKDCBF+S4KPGrfLaIGmrWT+sM6h+PlPN7g8wWSmfT5SMemoHgylb6NkOBxx6nw1rGWIOAYdZFj1pNjpPp/W9DViaW1jj/pm6JkqSKs3LTTTXmzWQQsapD1Lhd0J2XGPeg/ZEHd91NZtdz2IXL831UKo1ykhoMk97ZJnto1Pe6RTKNLtxQR7Qa9QdMsqGlBF9keu5KdMzsGNlzMXG32MPOIlKq+U80VG+ruDYpVnD0CDD4y+pwNKbH+D1WsJoekErB9UjfoGNecRUcbKBLn09xOSeZFHfys8WcOgOKY3xIz7TpRwKH+O9aZzkFyxrcRyuQyWN8Q/mbbTW+wkkyBG+nsbCNRKRCxEPsw5H1SHJMnO/JTODK9QpP+7iMA934ybFQR7nGpK4i+sbgY165jHkXMu2WEFSP0yfKTJk/x8rVsvrnmZBtr08QR8bZsYIe4VEoWKsTuknG3a2w4zmenTYsFFHmOFphodrQfT/6JDi1v9YmnCRtiVgHlKBXSTBAMkx52xwrqlZXMPp0sZqN+Q5rYzN3y4hyinaSx9eHpakxHM3LIhO44DmGejJAr6vLXbeH0wxuzmWo2anJUsq5tE4Khye4ybzKF4xT5J8UU0ZoQ6GIJ1AEq811xuAxk7S+EPB3FenkCSYBnUwnUJ0FBzSksR9KKE+JN+oNGFJ2p4k7q5OvmYUbswjVJLEnn4/k99NOwW2AZ6oxq7YjcAnuVqFMqfAWcWVslieUWgFSSapANe5fy9D9LKDQhJkYYataDhEHKRWR9IZzSJO8WxXmWRjzHVUU60gicT7f8JkoJLkfGdBUj0s4ar/IbPFfLMIlSDgAxnPQAgVUetxOiUcs1ngEjUtr+Cif6kOAXbqj6chSZqHVOau2SJS2mge/haa1duZ0LI5jog3dynZfYSJQy1tkRY+1qckQdpCyC6KVAqeyU76O0o7LLSdz+YewsNmNZ4Q4w+sR58YaXuyZAq30Sps4k0Iez/BqsOaFNQ0O6h4G8lpaWWo1qTiJAXTIuLKOjkEF1ISYVf5aXuvrLEb+R8BfCbN5gPNkGSKu1+J7uBLAC7m58UUvkkz0JoaoZIkr+jpsgQ1YmS38tu4vjuV1W3GFB5l2lnNXiVBmDqrTLKm8EOdJVUznMVVzc4Uc5FO21bKhnyYJEld0KfZ8VJ++JN0qlZxNb+o7m26Wy94O0tFnUjBzwVu2aUmhptQqxxUM7IkUyz3MURfQ3yTj9KSa6eLOfPcyvoxw5xQ3NHs7CqL2UXZiJC20ald6egmYxZFESGTYl9G1mSmDfS21QzONWGWvIxx65htFDWpNZXfepQ+Y9A1T0cbLPuQtkyUi7kqIPjEBNXyWVg6rTWvVmna1aJ2YoIvy0VIvhdk1cNUFvvy+k49tHsWOFSHtd762rZEu5MEORehaxaqym9r8ncCSQZCa1SDhZz5JfX9apUBmR9uUqLENauudMEnYvP3Gk5DlzXZeSeYLIy7zZIUHFM8lbC2mH7HDeL5Xi1XdEhyERdCNTNMPdTAbqkdSZJxJqsU/czvJIGWFo2aKbCfM4YSlsMqMXM7bJ7P/d1KEslIfsMknaQq8asTLok8j5FbHfP3MtvpE1XnfdnszdsIergr+EZD/lGnQ3UVpEzEHiNmfoK7aGuSsFTjiOgQvg/AvSbBF7Nkgu9tyRYzVaHXNMaV+jfSqkR17qnEhfhfZZDM3te1Ph1X37tM7eeuCFcyvCxSgqtY0WCXKUbs9tQFzDzLYmyLW1P4NVnjEMutK0Qz8zr+3Uur4j7wmL7MelrHRU6a/8cBOOReIRqJ69i4ts6HVjGod1QdCyQ9MBSsBvBtMyPRY3KO+1JtjK7BvpNVChDwNL8liDj+aqNqVjee5VAV+hSlCu+vYVV8YwO1NtvNnjez3ZPKHuS+DgD4ISWI3snh/QIIld1t5pATcfp4Bh1ZO809wBoqe0mSHawSOBnYIqgih9C1rD+3irVdVDBU5MShzJneHh77SfztvE/vMohQSKJe/ZAp3XAyYwxrSIASTfAD3LRnN3vfUxkl0fLEiNkyZrUpbFOglXmcCrJHOOzqEQRCIomLIoNQ/WY7sAodP/Vf2g19PGR2pql/sSRCcjm8W41a+A+bD+rvo6ikdwAAAABJRU5ErkJggg==",nm="/assets/07-yoga.png",rm="/assets/24-abs-core.png",om="/assets/22-sleep.png",js=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Yn={Strength:{color:"#F5841F",bg:"rgba(245,132,31,.14)"},Mobility:{color:"#30D158",bg:"rgba(48,209,88,.14)"},Core:{color:"#BF5AF2",bg:"rgba(191,90,242,.14)"},Recovery:{color:"#64D2FF",bg:"rgba(100,210,255,.14)"}},Pn=[{id:1,name:"Full Body Strength",duration:"45 min",type:"Strength",difficulty:"Moderate",description:"A comprehensive full-body session targeting all major muscle groups through compound movements — squats, deadlifts, rows, and press variations designed to build functional strength."},{id:2,name:"Hip Mobility Flow",duration:"30 min",type:"Mobility",difficulty:"Easy",description:"Deep hip openers, 90/90 stretches, and controlled articular rotations to improve joint range of motion and reduce tightness in the hips and lower back."},{id:3,name:"Upper Body Push",duration:"30 min",type:"Strength",difficulty:"Moderate",description:"Focused push-pattern work targeting chest, shoulders, and triceps through push-up progressions, overhead press variations, and cable flys."},{id:4,name:"Glute Activation",duration:"20 min",type:"Mobility",difficulty:"Easy",description:"Targeted activation protocol to wake up the posterior chain before heavier training. Banded clamshells, hip thrusts, and glute bridges."},{id:5,name:"Core & Stability",duration:"25 min",type:"Core",difficulty:"Moderate",description:"Anti-rotation and anti-flexion core work that builds real functional stability — planks, Pallof presses, dead bugs, and farmer carries."},{id:6,name:"Lower Body Power",duration:"45 min",type:"Strength",difficulty:"Hard",description:"Power development session emphasizing speed and force production — box jumps, trap bar deadlifts, Bulgarian split squats, and single-leg RDLs."},{id:7,name:"Foam Roll Recovery",duration:"20 min",type:"Recovery",difficulty:"Easy",description:"Full-body self-myofascial release targeting commonly tight areas — quads, IT band, thoracic spine, and calves. Great standalone or pre/post workout."},{id:8,name:"Shoulder Mobility",duration:"15 min",type:"Mobility",difficulty:"Easy",description:"Thoracic mobility drills, shoulder circles, and rotator cuff activation to keep the shoulder girdle healthy and pain-free for pressing movements."}],lm={1:"Focus on bracing your core throughout the lifts. Keep your chest up on the squat and drive through the heels.",2:"Move slowly through the 90/90 transitions. Hold each position for at least 5 deep breaths — the goal is control, not range.",3:"Prioritize shoulder packing. Depress and retract the scapula before any press movement to protect the joint.",5:"The goal here is tension, not movement. Think about resisting force in every direction during the Pallof press.",6:"Rest fully between power sets — quality over quantity. This is not a circuit, treat each set as a max effort."},im={orange:"brightness(0) saturate(100%) invert(60%) sepia(88%) saturate(700%) hue-rotate(350deg) brightness(110%)",green:"brightness(0) saturate(100%) invert(72%) sepia(55%) saturate(500%) hue-rotate(88deg)",purple:"brightness(0) saturate(100%) invert(48%) sepia(86%) saturate(600%) hue-rotate(245deg) brightness(105%)",blue:"brightness(0) saturate(100%) invert(83%) sepia(60%) saturate(400%) hue-rotate(175deg) brightness(107%)",muted:"brightness(0) saturate(0%) invert(65%) brightness(140%)"};function bn({src:e,size:t=20,colorKey:n="muted"}){return i.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:t,height:t,flexShrink:0},children:i.jsx("img",{src:e,alt:"",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:im[n]}})})}function am({size:e=20}){return i.jsx(bn,{src:Xp,size:e,colorKey:"orange"})}function sm({size:e=20}){return i.jsx(bn,{src:qp,size:e,colorKey:"green"})}function um({size:e=20}){return i.jsx(bn,{src:em,size:e,colorKey:"muted"})}function cm({size:e=20}){return i.jsx(bn,{src:tm,size:e,colorKey:"muted"})}function dm({size:e=32}){return i.jsx(bn,{src:Uc,size:e,colorKey:"muted"})}function ri({type:e,size:t=18}){const n={Strength:{src:Uc,colorKey:"orange"},Mobility:{src:nm,colorKey:"green"},Core:{src:rm,colorKey:"purple"},Recovery:{src:om,colorKey:"blue"}},{src:r,colorKey:o}=n[e]||n.Strength;return i.jsx(bn,{src:r,size:t,colorKey:o})}function Ss(){const e=new Date().getDay();return e===0?6:e-1}function Wc(e){const t=new Date,n=t.getDay(),r=new Date(t);return r.setDate(t.getDate()-(n===0?6:n-1)+e*7),Array.from({length:7},(o,l)=>{const a=new Date(r);return a.setDate(r.getDate()+l),a})}function fm(e){const t=Wc(e),n=t[0],r=t[6],o=n.toLocaleString("default",{month:"short"}),l=r.toLocaleString("default",{month:"short"});return o===l?`${o} ${n.getDate()} – ${r.getDate()}`:`${o} ${n.getDate()} – ${l} ${r.getDate()}`}function pm({workout:e,note:t,onNoteChange:n,onClose:r,onAddToPlan:o}){return E.useEffect(()=>{const l=a=>{a.key==="Escape"&&r()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[r]),Yn[e.type]||Yn.Strength,i.jsx("div",{className:"mp-backdrop",onClick:r,children:i.jsxs("div",{className:"mp-modal",onClick:l=>l.stopPropagation(),children:[i.jsxs("div",{className:"mp-video-area",children:[i.jsxs("svg",{width:"56",height:"56",viewBox:"0 0 56 56",children:[i.jsx("circle",{cx:"28",cy:"28",r:"27",fill:"rgba(245,132,31,.10)",stroke:"rgba(245,132,31,.35)",strokeWidth:"1.5"}),i.jsx("polygon",{points:"23,19 41,28 23,37",fill:"#F5841F"})]}),i.jsx("span",{className:"mp-video-hint",children:"Video coming soon"}),i.jsx("button",{className:"mp-modal-close-vid",onClick:r,children:i.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:[i.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),i.jsxs("div",{className:"mp-modal-content",children:[i.jsxs("div",{className:"mp-modal-head",children:[i.jsx("div",{className:"mp-modal-type-icon",children:i.jsx(ri,{type:e.type,size:26})}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{className:"mp-modal-name",children:e.name}),i.jsxs("div",{className:"mp-modal-chips",children:[i.jsx("span",{className:"mp-type-pill",children:e.type}),i.jsx("span",{className:"mp-chip-muted",children:e.duration}),i.jsx("span",{className:"mp-chip-muted",children:e.difficulty})]})]})]}),i.jsx("p",{className:"mp-modal-desc",children:e.description}),i.jsx("div",{className:"mp-modal-divider"}),i.jsxs("div",{className:"mp-note-block",children:[i.jsxs("div",{className:"mp-note-label",children:[i.jsx("span",{className:"mp-note-dot",style:{background:"#F5841F"}}),"Trainer Notes",i.jsx("span",{className:"mp-note-by",children:"Andrea"})]}),i.jsx("div",{className:"mp-trainer-note",children:lm[e.id]||"No trainer notes yet for this workout."})]}),i.jsxs("div",{className:"mp-note-block",children:[i.jsxs("div",{className:"mp-note-label",children:[i.jsx("span",{className:"mp-note-dot",style:{background:"#64D2FF"}}),"Your Notes"]}),i.jsx("textarea",{className:"mp-note-area",placeholder:"How did it feel? Weights used, reps completed, anything to remember…",value:t,onChange:l=>n(l.target.value)})]}),i.jsxs("div",{className:"mp-modal-actions",children:[i.jsx("button",{className:"mp-btn-ghost",onClick:r,children:"Close"}),i.jsx("button",{className:"mp-btn-orange",onClick:o,children:"Add to Plan"})]})]})]})})}const mm=`
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
.mp-lib-top   { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
.mp-lib-icon  { display: flex; align-items: center; flex-shrink: 0; }
.mp-lib-name  { font-size: 22px; font-weight: 700; line-height: 1.1; }
.mp-lib-meta  { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; padding-left: 0; margin-top: 6px; }
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
  background: var(--bg); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
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
`;function gm(){const[e,t]=E.useState("plan"),[n,r]=E.useState(Ss()),[o,l]=E.useState(0),[a,s]=E.useState({plan:{},log:{}}),[u,d]=E.useState(null),[x,g]=E.useState({}),[m,j]=E.useState(!1),[b,N]=E.useState(""),[B,f]=E.useState(""),[c,p]=E.useState(!1),[w,z]=E.useState(!1),k=E.useRef(null),P=E.useRef(null),D=E.useRef(null);E.useEffect(()=>{const M=O=>{D.current&&!D.current.contains(O.target)&&z(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]);const U=Wc(o),v=Ss(),A=o===0,_=(a[e][n]||[]).map(M=>({...M,workout:Pn.find(O=>O.id===M.wid)})).filter(M=>M.workout),W=M=>s(O=>({...O,log:{...O.log,[n]:(O.log[n]||[]).map(V=>V.id===M?{...V,done:!V.done}:V)}})),J=M=>s(O=>({...O,[e]:{...O[e],[n]:(O[e][n]||[]).filter(V=>V.id!==M)}})),ce=M=>{const O={id:Date.now().toString(),wid:M.id,done:!1};s(V=>({...V,[e]:{...V[e],[n]:[...V[e][n]||[],O]}}))},C=[...new Set(Pn.map(M=>M.type))],I=Pn.filter(M=>{const O=b.toLowerCase();return(!O||M.name.toLowerCase().includes(O))&&(!B||M.type===B)}),F=Object.values(a.log).flat().filter(M=>M.done).length,y=Object.values(a.plan).flat().length,L=(a[e][n]||[]).reduce((M,O)=>{const V=Pn.find(Y=>Y.id===O.wid);return M+(V?parseInt(V.duration):0)},0),R=M=>(a[e][M]||[]).slice(0,3).map(O=>{var Y;const V=Pn.find(le=>le.id===O.wid);return V&&((Y=Yn[V.type])==null?void 0:Y.color)||"#F5841F"});return i.jsxs("div",{className:"mp",children:[i.jsx("style",{children:mm}),i.jsxs("div",{className:"mp-title-row",children:[i.jsxs("h1",{className:"mp-title",children:["My ",i.jsx("em",{children:"program"})]}),i.jsx("p",{className:"mp-subtitle",children:"Your personalized training plan, workout library, and progress log."})]}),i.jsxs("div",{className:"mp-stats",children:[i.jsxs("div",{className:"mp-stat",children:[i.jsx("span",{className:"mp-stat-icon",children:i.jsx(am,{size:36,color:"#F5841F"})}),i.jsxs("div",{children:[i.jsx("div",{className:"mp-stat-val",children:"3"}),i.jsx("div",{className:"mp-stat-lbl",children:"Week streak"})]})]}),i.jsxs("div",{className:"mp-stat",children:[i.jsx("span",{className:"mp-stat-icon",children:i.jsx(sm,{size:36,color:"#30D158"})}),i.jsxs("div",{children:[i.jsx("div",{className:"mp-stat-val",children:F}),i.jsx("div",{className:"mp-stat-lbl",children:"Done this week"})]})]}),i.jsxs("div",{className:"mp-stat",children:[i.jsx("span",{className:"mp-stat-icon",children:i.jsx(um,{size:36,color:"#9C988F"})}),i.jsxs("div",{children:[i.jsx("div",{className:"mp-stat-val",children:y}),i.jsx("div",{className:"mp-stat-lbl",children:"Planned"})]})]}),i.jsxs("div",{className:"mp-stat",children:[i.jsx("span",{className:"mp-stat-icon",children:i.jsx(cm,{size:36,color:"#9C988F"})}),i.jsxs("div",{children:[i.jsxs("div",{className:"mp-stat-val",children:[L,i.jsx("span",{style:{fontSize:12,color:"var(--muted)",fontWeight:400},children:"m"})]}),i.jsx("div",{className:"mp-stat-lbl",children:"Today's time"})]})]})]}),i.jsxs("div",{className:"mp-body",children:[i.jsxs("div",{className:"mp-left",children:[i.jsxs("div",{className:"mp-top-row",children:[i.jsxs("div",{className:"mp-week-group",children:[i.jsx("button",{className:"mp-week-btn",onClick:()=>l(M=>M-1),children:"‹"}),i.jsx("span",{className:"mp-week-label",children:fm(o)}),i.jsx("button",{className:"mp-week-btn",onClick:()=>l(M=>M+1),children:"›"})]}),i.jsxs("div",{className:"mp-tabs",children:[i.jsx("button",{className:`mp-tab${e==="log"?" active":""}`,onClick:()=>t("log"),children:"My Log"}),i.jsx("button",{className:`mp-tab${e==="plan"?" active":""}`,onClick:()=>t("plan"),children:"My Plan"})]})]}),i.jsx("div",{className:"mp-day-strip",children:js.map((M,O)=>{const V=U[O],Y=A&&O===v,le=O===n,Vt=R(O);return i.jsxs("div",{className:`mp-day-cell${Y?" today":""}${le?" selected":""}`,onClick:()=>r(O),children:[i.jsx("div",{className:"mp-day-name",children:M}),i.jsx("div",{className:"mp-day-num",children:V.getDate()}),i.jsx("div",{className:"mp-day-dots",children:Vt.map(($c,Vc)=>i.jsx("div",{className:"mp-day-dot",style:{background:$c}},Vc))})]},O)})}),i.jsxs("div",{className:`mp-day-detail${m?" drag-over":""}`,onDragOver:M=>{M.preventDefault(),j(!0)},onDragLeave:()=>j(!1),onDrop:()=>{j(!1),k.current&&(ce(k.current),k.current=null)},children:[i.jsxs("div",{className:"mp-detail-head",children:[i.jsxs("span",{className:"mp-detail-title",children:[js[n],", ",U[n].toLocaleString("default",{month:"short"})," ",U[n].getDate()]}),i.jsx("span",{className:"mp-detail-badge",children:e==="log"?"Log":"Plan"})]}),_.length===0?i.jsxs("div",{className:"mp-empty",children:[i.jsx("span",{className:"mp-empty-icon",children:i.jsx(dm,{size:56})}),i.jsxs("span",{className:"mp-empty-txt",children:["No workouts ",e==="log"?"logged":"planned"," for this day"]}),i.jsx("span",{className:"mp-empty-hint",children:"Drag a workout from the library"})]}):_.map(({id:M,done:O,workout:V})=>i.jsxs("div",{className:"mp-workout-item",children:[e==="log"&&i.jsx("button",{className:`mp-check${O?" done":""}`,onClick:Y=>{Y.stopPropagation(),W(M)},children:O&&i.jsx("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"20 6 9 17 4 12"})})}),i.jsx("span",{className:"mp-item-icon",children:i.jsx(ri,{type:V.type,size:30})}),i.jsxs("div",{className:"mp-item-info",onClick:()=>d(V),children:[i.jsx("div",{className:`mp-item-name${O?" done":""}`,children:V.name}),i.jsxs("div",{className:"mp-item-meta",children:[i.jsx("span",{className:"mp-type-pill",children:V.type}),i.jsx("span",{className:"mp-item-dur",children:V.duration})]})]}),i.jsx("button",{className:"mp-del",onClick:Y=>{Y.stopPropagation(),J(M)},children:i.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[i.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},M))]})]}),i.jsxs("div",{className:"mp-right",children:[i.jsxs("div",{className:"mp-lib-header",children:[i.jsx("span",{className:"mp-lib-title",children:"Library"}),i.jsxs("div",{className:"mp-lib-controls",children:[i.jsxs("div",{className:`mp-search-wrap${c?" expanded":""}`,children:[i.jsx("div",{className:"mp-search-slide",children:i.jsx("input",{ref:P,className:"mp-search-input",placeholder:"Search…",value:b,onChange:M=>N(M.target.value),onBlur:()=>{b||p(!1)}})}),i.jsx("button",{className:"mp-search-icon",onMouseDown:M=>M.preventDefault(),onClick:()=>{c?(p(!1),N("")):(p(!0),setTimeout(()=>{var M;return(M=P.current)==null?void 0:M.focus()},30))},children:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"11",cy:"11",r:"8"}),i.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),i.jsxs("div",{ref:D,className:`mp-filter-wrap${w?" open":""}`,children:[i.jsxs("button",{className:"mp-filter-btn",onClick:()=>z(M=>!M),children:[B||"All",i.jsx("svg",{className:"mp-filter-chev",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),w&&i.jsx("div",{className:"mp-filter-drop",children:["",...C].map(M=>i.jsx("button",{className:`mp-filter-opt${B===M?" active":""}`,onMouseDown:O=>{O.preventDefault(),f(M),z(!1)},children:M||"All"},M))})]})]})]}),i.jsxs("div",{className:"mp-lib-list",children:[I.length===0&&i.jsx("div",{style:{fontSize:12,color:"var(--muted)",padding:"16px 0"},children:"No workouts match."}),I.map(M=>{const O=(Yn[M.type]||Yn.Strength).color;return i.jsxs("div",{className:"mp-lib-card",draggable:!0,onDragStart:V=>{k.current=M,V.currentTarget.classList.add("mp-grabbing");const Y=`<span style="width:7px;height:7px;border-radius:50%;background:${O};display:inline-block;flex-shrink:0"></span>`,le=document.createElement("div");le.innerHTML=`${Y}<span style="font-size:12px;font-weight:600;font-family:Inter,sans-serif">${M.name}</span>`,le.style.cssText="position:fixed;top:-9999px;left:0;background:#161617;border-top:1px solid #2A2A2D;border-bottom:1px solid #2A2A2D;padding:8px 16px;color:#fff;display:flex;align-items:center;gap:9px;white-space:nowrap;box-shadow:0 12px 32px rgba(0,0,0,.8);transform:rotate(-1.5deg);",document.body.appendChild(le),V.dataTransfer.setDragImage(le,le.offsetWidth/2,le.offsetHeight/2),setTimeout(()=>{try{document.body.removeChild(le)}catch{}},100)},onDragEnd:V=>{V.currentTarget.classList.remove("mp-grabbing"),k.current=null},onClick:()=>d(M),children:[i.jsxs("div",{className:"mp-lib-top",children:[i.jsx("span",{className:"mp-lib-icon",children:i.jsx(ri,{type:M.type,size:30})}),i.jsx("span",{className:"mp-lib-name",children:M.name})]}),i.jsxs("div",{className:"mp-lib-meta",children:[i.jsx("span",{className:"mp-type-pill",children:M.type}),i.jsx("span",{className:"mp-lib-dur",children:M.duration}),i.jsx("span",{className:"mp-lib-diff",children:M.difficulty})]})]},M.id)})]})]})]}),u&&i.jsx(pm,{workout:u,note:x[u.id]||"",onNoteChange:M=>g(O=>({...O,[u.id]:M})),onClose:()=>d(null),onAddToPlan:()=>{ce(u),d(null)}})]})}const Ye=window.self!==window.top;function hm(){const e=new URLSearchParams(window.location.search).get("view");return e==="admin"?"admin":e==="client"?"client":e==="confirm"?"confirm":e==="schedule"?"schedule":e==="food-journal"?"food-journal":e==="my-program"?"my-program":Ye?null:"client"}function vm(){const[e,t]=E.useState(hm),[n,r]=E.useState(null),[o,l]=E.useState(null),[a,s]=E.useState(null),[u,d]=E.useState({}),[x,g]=E.useState(null),[m,j]=E.useState(null),[b,N]=E.useState(!Ye),[B,f]=E.useState(!1),c=E.useRef(null);E.useEffect(()=>{let k;const P=()=>{clearTimeout(k),k=setTimeout(()=>{var A;const v=(A=c.current)==null?void 0:A.scrollHeight;v>0&&window.parent.postMessage({type:"abate-resize",height:v+40},"*")},50)},D=new ResizeObserver(P);c.current&&D.observe(c.current),P(),Ye&&window.parent.postMessage({type:"abate-ready"},"*");const U=v=>{var A;if((A=v.data)!=null&&A.type){if(v.data.type==="abate-mode"&&t(v.data.mode),v.data.type==="abate-data"){const _=v.data.slots??null;if(r(_),_){const W={};Object.values(_).flat().forEach(J=>{J.userBookingId&&(W[J.id]=J.userBookingId)}),Object.keys(W).length>0&&d(J=>({...W,...J}))}}v.data.type==="abate-booked"&&d(_=>({..._,[v.data.slotId]:v.data.bookingId})),v.data.type==="abate-error"&&g({slotId:v.data.slotId,message:v.data.message}),v.data.type==="abate-confirm-data"&&l(v.data.slot??null),v.data.type==="abate-schedule-data"&&s(v.data.sessions??[]),v.data.type==="abate-prefs"&&(j(v.data.prefs??[]),N(!0)),v.data.type==="abate-prefs-saved"&&f(!1),v.data.type==="abate-prefs-error"&&f(!1)}};return window.addEventListener("message",U),()=>{clearTimeout(k),D.disconnect(),window.removeEventListener("message",U)}},[]);const p=E.useCallback(k=>{if(Ye)switch(k.type){case"weekChange":window.parent.postMessage({type:"abate-week",mondayISO:k.mondayISO},"*");break;case"book":window.parent.postMessage({type:"abate-book",slotId:k.slot.id,slotData:k.slot.slotData,slotInfo:{day:k.slot.day,time:k.slot.time,service:k.slot.service}},"*");break;case"waitlist":window.parent.postMessage({type:"abate-waitlist",slotId:k.slot.id,slotData:k.slot.slotData,slotInfo:{day:k.slot.day,time:k.slot.time,service:k.slot.service}},"*");break;case"cancel":window.parent.postMessage({type:"abate-cancel",slotId:k.slotId,bookingId:u[k.slotId]},"*");break;case"mySchedule":window.parent.postMessage({type:"abate-my-schedule"},"*");break;case"leaveWaitlist":window.parent.postMessage({type:"abate-leave-waitlist",slotId:k.slotId},"*");break;case"savePrefs":f(!0),window.parent.postMessage({type:"abate-save-prefs",items:k.items},"*");break}},[u]),w=(()=>{const k=new URLSearchParams(window.location.search);return k.get("serviceId")?{serviceId:k.get("serviceId"),startDate:k.get("startDate"),endDate:k.get("endDate"),service:k.get("service"),day:k.get("day"),time:k.get("time")}:null})();let z;return e==="confirm"?z=i.jsx(Rp,{slot:Ye?o:w}):e==="food-journal"?z=i.jsx(Zp,{}):e==="my-program"?z=i.jsx(gm,{}):e==="schedule"?z=i.jsx(Yp,{sessions:Ye?a:[]}):e==="admin"?z=i.jsx(Ip,{livePrefs:Ye?m:null,loading:Ye&&!b,onAction:p,saving:B}):e==="client"?z=i.jsx(Ep,{liveSlots:Ye?n:null,loading:Ye&&n===null,onAction:p,errorMsg:x,onErrorDismiss:()=>g(null)}):z=i.jsx("div",{style:{background:"#0B0B0C",minHeight:"600px"}}),i.jsx("div",{ref:c,children:z})}sl.createRoot(document.getElementById("root")).render(i.jsx(Is.StrictMode,{children:i.jsx(vm,{})}));
