(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Js={exports:{}},Lo={},Gs={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr=Symbol.for("react.element"),Md=Symbol.for("react.portal"),Fd=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),Pd=Symbol.for("react.profiler"),Ld=Symbol.for("react.provider"),Id=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),Ad=Symbol.for("react.suspense"),_d=Symbol.for("react.memo"),Rd=Symbol.for("react.lazy"),Sa=Symbol.iterator;function Od(e){return e===null||typeof e!="object"?null:(e=Sa&&e[Sa]||e["@@iterator"],typeof e=="function"?e:null)}var Zs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xs=Object.assign,qs={};function Pn(e,t,n){this.props=e,this.context=t,this.refs=qs,this.updater=n||Zs}Pn.prototype.isReactComponent={};Pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function eu(){}eu.prototype=Pn.prototype;function yl(e,t,n){this.props=e,this.context=t,this.refs=qs,this.updater=n||Zs}var wl=yl.prototype=new eu;wl.constructor=yl;Xs(wl,Pn.prototype);wl.isPureReactComponent=!0;var Na=Array.isArray,tu=Object.prototype.hasOwnProperty,kl={current:null},nu={key:!0,ref:!0,__self:!0,__source:!0};function ru(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)tu.call(t,r)&&!nu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:jr,type:e,key:i,ref:a,props:o,_owner:kl.current}}function Bd(e,t){return{$$typeof:jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bl(e){return typeof e=="object"&&e!==null&&e.$$typeof===jr}function Wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ca=/\/+/g;function Go(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wd(""+e.key):t.toString(36)}function Jr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case jr:case Md:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Go(a,0):r,Na(o)?(n="",e!=null&&(n=e.replace(Ca,"$&/")+"/"),Jr(o,t,n,"",function(d){return d})):o!=null&&(bl(o)&&(o=Bd(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ca,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Na(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Go(i,s);a+=Jr(i,t,n,u,o)}else if(u=Od(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Go(i,s++),a+=Jr(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Fr(e,t,n){if(e==null)return e;var r=[],o=0;return Jr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ud(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Gr={transition:null},$d={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Gr,ReactCurrentOwner:kl};function ou(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Fr,forEach:function(e,t,n){Fr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fr(e,function(){t++}),t},toArray:function(e){return Fr(e,function(t){return t})||[]},only:function(e){if(!bl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Pn;V.Fragment=Fd;V.Profiler=Pd;V.PureComponent=yl;V.StrictMode=Dd;V.Suspense=Ad;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$d;V.act=ou;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xs({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=kl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)tu.call(t,u)&&!nu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:jr,type:e.type,key:o,ref:i,props:r,_owner:a}};V.createContext=function(e){return e={$$typeof:Id,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ld,_context:e},e.Consumer=e};V.createElement=ru;V.createFactory=function(e){var t=ru.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Td,render:e}};V.isValidElement=bl;V.lazy=function(e){return{$$typeof:Rd,_payload:{_status:-1,_result:e},_init:Ud}};V.memo=function(e,t){return{$$typeof:_d,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Gr.transition;Gr.transition={};try{e()}finally{Gr.transition=t}};V.unstable_act=ou;V.useCallback=function(e,t){return je.current.useCallback(e,t)};V.useContext=function(e){return je.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return je.current.useDeferredValue(e)};V.useEffect=function(e,t){return je.current.useEffect(e,t)};V.useId=function(){return je.current.useId()};V.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return je.current.useMemo(e,t)};V.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};V.useRef=function(e){return je.current.useRef(e)};V.useState=function(e){return je.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return je.current.useTransition()};V.version="18.3.1";Gs.exports=V;var w=Gs.exports;const iu=zd(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd=w,Hd=Symbol.for("react.element"),Qd=Symbol.for("react.fragment"),Yd=Object.prototype.hasOwnProperty,Kd=Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jd={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Yd.call(t,r)&&!Jd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Hd,type:e,key:i,ref:a,props:o,_owner:Kd.current}}Lo.Fragment=Qd;Lo.jsx=lu;Lo.jsxs=lu;Js.exports=Lo;var l=Js.exports,ji={},au={exports:{}},Te={},su={exports:{}},uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(h,F){var y=h.length;h.push(F);e:for(;0<y;){var I=y-1>>>1,O=h[I];if(0<o(O,F))h[I]=F,h[y]=O,y=I;else break e}}function n(h){return h.length===0?null:h[0]}function r(h){if(h.length===0)return null;var F=h[0],y=h.pop();if(y!==F){h[0]=y;e:for(var I=0,O=h.length,q=O>>>1;I<q;){var Ne=2*(I+1)-1,it=h[Ne],ae=Ne+1,_e=h[ae];if(0>o(it,y))ae<O&&0>o(_e,it)?(h[I]=_e,h[ae]=y,I=ae):(h[I]=it,h[Ne]=y,I=Ne);else if(ae<O&&0>o(_e,y))h[I]=_e,h[ae]=y,I=ae;else break e}}return F}function o(h,F){var y=h.sortIndex-F.sortIndex;return y!==0?y:h.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],x=1,m=null,g=3,C=!1,N=!1,E=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(h){for(var F=n(d);F!==null;){if(F.callback===null)r(d);else if(F.startTime<=h)r(d),F.sortIndex=F.expirationTime,t(u,F);else break;F=n(d)}}function b(h){if(E=!1,f(h),!N)if(n(u)!==null)N=!0,M(j);else{var F=n(d);F!==null&&_(b,F.startTime-h)}}function j(h,F){N=!1,E&&(E=!1,p(P),P=-1),C=!0;var y=g;try{for(f(F),m=n(u);m!==null&&(!(m.expirationTime>F)||h&&!L());){var I=m.callback;if(typeof I=="function"){m.callback=null,g=m.priorityLevel;var O=I(m.expirationTime<=F);F=e.unstable_now(),typeof O=="function"?m.callback=O:m===n(u)&&r(u),f(F)}else r(u);m=n(u)}if(m!==null)var q=!0;else{var Ne=n(d);Ne!==null&&_(b,Ne.startTime-F),q=!1}return q}finally{m=null,g=y,C=!1}}var S=!1,D=null,P=-1,W=5,v=-1;function L(){return!(e.unstable_now()-v<W)}function B(){if(D!==null){var h=e.unstable_now();v=h;var F=!0;try{F=D(!0,h)}finally{F?$():(S=!1,D=null)}}else S=!1}var $;if(typeof c=="function")$=function(){c(B)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,he=G.port2;G.port1.onmessage=B,$=function(){he.postMessage(null)}}else $=function(){A(B,0)};function M(h){D=h,S||(S=!0,$())}function _(h,F){P=A(function(){h(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(h){h.callback=null},e.unstable_continueExecution=function(){N||C||(N=!0,M(j))},e.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<h?Math.floor(1e3/h):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(h){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var y=g;g=F;try{return h()}finally{g=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(h,F){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var y=g;g=h;try{return F()}finally{g=y}},e.unstable_scheduleCallback=function(h,F,y){var I=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?I+y:I):y=I,h){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=y+O,h={id:x++,callback:F,priorityLevel:h,startTime:y,expirationTime:O,sortIndex:-1},y>I?(h.sortIndex=y,t(d,h),n(u)===null&&h===n(d)&&(E?(p(P),P=-1):E=!0,_(b,y-I))):(h.sortIndex=O,t(u,h),N||C||(N=!0,M(j))),h},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(h){var F=g;return function(){var y=g;g=F;try{return h.apply(this,arguments)}finally{g=y}}}})(uu);su.exports=uu;var Gd=su.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=w,Ie=Gd;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cu=new Set,lr={};function qt(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(lr[e]=t,e=0;e<t.length;e++)cu.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Si=Object.prototype.hasOwnProperty,Xd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ea={},za={};function qd(e){return Si.call(za,e)?!0:Si.call(Ea,e)?!1:Xd.test(e)?za[e]=!0:(Ea[e]=!0,!1)}function ep(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tp(e,t,n,r){if(t===null||typeof t>"u"||ep(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var jl=/[\-:]([a-z])/g;function Sl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jl,Sl);ge[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jl,Sl);ge[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jl,Sl);ge[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nl(e,t,n,r){var o=ge.hasOwnProperty(t)?ge[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tp(t,n,o,r)&&(n=null),r||o===null?qd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ht=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dr=Symbol.for("react.element"),ln=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),Cl=Symbol.for("react.strict_mode"),Ni=Symbol.for("react.profiler"),du=Symbol.for("react.provider"),pu=Symbol.for("react.context"),El=Symbol.for("react.forward_ref"),Ci=Symbol.for("react.suspense"),Ei=Symbol.for("react.suspense_list"),zl=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),fu=Symbol.for("react.offscreen"),Ma=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=Ma&&e[Ma]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Zo;function Qn(e){if(Zo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zo=t&&t[1]||""}return`
`+Zo+e}var Xo=!1;function qo(e,t){if(!e||Xo)return"";Xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Xo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qn(e):""}function np(e){switch(e.tag){case 5:return Qn(e.type);case 16:return Qn("Lazy");case 13:return Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 2:case 15:return e=qo(e.type,!1),e;case 11:return e=qo(e.type.render,!1),e;case 1:return e=qo(e.type,!0),e;default:return""}}function zi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case an:return"Fragment";case ln:return"Portal";case Ni:return"Profiler";case Cl:return"StrictMode";case Ci:return"Suspense";case Ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pu:return(e.displayName||"Context")+".Consumer";case du:return(e._context.displayName||"Context")+".Provider";case El:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zl:return t=e.displayName||null,t!==null?t:zi(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return zi(e(t))}catch{}}return null}function rp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zi(t);case 8:return t===Cl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function op(e){var t=mu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){e._valueTracker||(e._valueTracker=op(e))}function gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function so(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mi(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hu(e,t){t=t.checked,t!=null&&Nl(e,"checked",t,!1)}function Fi(e,t){hu(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Di(e,t.type,n):t.hasOwnProperty("defaultValue")&&Di(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Da(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Di(e,t,n){(t!=="number"||so(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yn=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Pi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Yn(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function vu(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function La(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Li(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,yu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ip=["Webkit","ms","Moz","O"];Object.keys(Gn).forEach(function(e){ip.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gn[t]=Gn[e]})});function wu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Gn.hasOwnProperty(e)&&Gn[e]?(""+t).trim():t+"px"}function ku(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=wu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var lp=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(e,t){if(t){if(lp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Ti(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=null;function Ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,yn=null,wn=null;function Ia(e){if(e=Cr(e)){if(typeof _i!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Ro(t),_i(e.stateNode,e.type,t))}}function bu(e){yn?wn?wn.push(e):wn=[e]:yn=e}function ju(){if(yn){var e=yn,t=wn;if(wn=yn=null,Ia(e),t)for(e=0;e<t.length;e++)Ia(t[e])}}function Su(e,t){return e(t)}function Nu(){}var ei=!1;function Cu(e,t,n){if(ei)return e(t,n);ei=!0;try{return Su(e,t,n)}finally{ei=!1,(yn!==null||wn!==null)&&(Nu(),ju())}}function sr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Ri=!1;if(pt)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Ri=!1}function ap(e,t,n,r,o,i,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(x){this.onError(x)}}var Zn=!1,uo=null,co=!1,Oi=null,sp={onError:function(e){Zn=!0,uo=e}};function up(e,t,n,r,o,i,a,s,u){Zn=!1,uo=null,ap.apply(sp,arguments)}function cp(e,t,n,r,o,i,a,s,u){if(up.apply(this,arguments),Zn){if(Zn){var d=uo;Zn=!1,uo=null}else throw Error(z(198));co||(co=!0,Oi=d)}}function en(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ta(e){if(en(e)!==e)throw Error(z(188))}function dp(e){var t=e.alternate;if(!t){if(t=en(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ta(o),e;if(i===r)return Ta(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function zu(e){return e=dp(e),e!==null?Mu(e):null}function Mu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mu(e);if(t!==null)return t;e=e.sibling}return null}var Fu=Ie.unstable_scheduleCallback,Aa=Ie.unstable_cancelCallback,pp=Ie.unstable_shouldYield,fp=Ie.unstable_requestPaint,le=Ie.unstable_now,mp=Ie.unstable_getCurrentPriorityLevel,Fl=Ie.unstable_ImmediatePriority,Du=Ie.unstable_UserBlockingPriority,po=Ie.unstable_NormalPriority,gp=Ie.unstable_LowPriority,Pu=Ie.unstable_IdlePriority,Io=null,nt=null;function hp(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Io,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:yp,vp=Math.log,xp=Math.LN2;function yp(e){return e>>>=0,e===0?32:31-(vp(e)/xp|0)|0}var Ir=64,Tr=4194304;function Kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Kn(s):(i&=a,i!==0&&(r=Kn(i)))}else a=n&~o,a!==0?r=Kn(a):i!==0&&(r=Kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),o=1<<n,r|=e[n],t&=~o;return r}function wp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ke(i),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=wp(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Bi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lu(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function ti(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function bp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ke(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Dl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function Iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tu,Pl,Au,_u,Ru,Wi=!1,Ar=[],Nt=null,Ct=null,Et=null,ur=new Map,cr=new Map,kt=[],jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _a(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(t.pointerId)}}function Rn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Cr(t),t!==null&&Pl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sp(e,t,n,r,o){switch(t){case"focusin":return Nt=Rn(Nt,e,t,n,r,o),!0;case"dragenter":return Ct=Rn(Ct,e,t,n,r,o),!0;case"mouseover":return Et=Rn(Et,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ur.set(i,Rn(ur.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,cr.set(i,Rn(cr.get(i)||null,e,t,n,r,o)),!0}return!1}function Ou(e){var t=Ut(e.target);if(t!==null){var n=en(t);if(n!==null){if(t=n.tag,t===13){if(t=Eu(n),t!==null){e.blockedOn=t,Ru(e.priority,function(){Au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ui(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ai=r,n.target.dispatchEvent(r),Ai=null}else return t=Cr(n),t!==null&&Pl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ra(e,t,n){Zr(e)&&n.delete(t)}function Np(){Wi=!1,Nt!==null&&Zr(Nt)&&(Nt=null),Ct!==null&&Zr(Ct)&&(Ct=null),Et!==null&&Zr(Et)&&(Et=null),ur.forEach(Ra),cr.forEach(Ra)}function On(e,t){e.blockedOn===t&&(e.blockedOn=null,Wi||(Wi=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Np)))}function dr(e){function t(o){return On(o,e)}if(0<Ar.length){On(Ar[0],e);for(var n=1;n<Ar.length;n++){var r=Ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&On(Nt,e),Ct!==null&&On(Ct,e),Et!==null&&On(Et,e),ur.forEach(t),cr.forEach(t),n=0;n<kt.length;n++)r=kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)Ou(n),n.blockedOn===null&&kt.shift()}var kn=ht.ReactCurrentBatchConfig,mo=!0;function Cp(e,t,n,r){var o=K,i=kn.transition;kn.transition=null;try{K=1,Ll(e,t,n,r)}finally{K=o,kn.transition=i}}function Ep(e,t,n,r){var o=K,i=kn.transition;kn.transition=null;try{K=4,Ll(e,t,n,r)}finally{K=o,kn.transition=i}}function Ll(e,t,n,r){if(mo){var o=Ui(e,t,n,r);if(o===null)di(e,t,r,go,n),_a(e,r);else if(Sp(o,e,t,n,r))r.stopPropagation();else if(_a(e,r),t&4&&-1<jp.indexOf(e)){for(;o!==null;){var i=Cr(o);if(i!==null&&Tu(i),i=Ui(e,t,n,r),i===null&&di(e,t,r,go,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else di(e,t,r,null,n)}}var go=null;function Ui(e,t,n,r){if(go=null,e=Ml(r),e=Ut(e),e!==null)if(t=en(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Eu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return go=e,null}function Bu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mp()){case Fl:return 1;case Du:return 4;case po:case gp:return 16;case Pu:return 536870912;default:return 16}default:return 16}}var jt=null,Il=null,Xr=null;function Wu(){if(Xr)return Xr;var e,t=Il,n=t.length,r,o="value"in jt?jt.value:jt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Xr=o.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function Oa(){return!1}function Ae(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_r:Oa,this.isPropagationStopped=Oa,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Ae(Ln),Nr=re({},Ln,{view:0,detail:0}),zp=Ae(Nr),ni,ri,Bn,To=re({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(ni=e.screenX-Bn.screenX,ri=e.screenY-Bn.screenY):ri=ni=0,Bn=e),ni)},movementY:function(e){return"movementY"in e?e.movementY:ri}}),Ba=Ae(To),Mp=re({},To,{dataTransfer:0}),Fp=Ae(Mp),Dp=re({},Nr,{relatedTarget:0}),oi=Ae(Dp),Pp=re({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=Ae(Pp),Ip=re({},Ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tp=Ae(Ip),Ap=re({},Ln,{data:0}),Wa=Ae(Ap),_p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Op={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Op[e])?!!t[e]:!1}function Al(){return Bp}var Wp=re({},Nr,{key:function(e){if(e.key){var t=_p[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Al,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Up=Ae(Wp),$p=re({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ua=Ae($p),Vp=re({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Al}),Hp=Ae(Vp),Qp=re({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yp=Ae(Qp),Kp=re({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jp=Ae(Kp),Gp=[9,13,27,32],_l=pt&&"CompositionEvent"in window,Xn=null;pt&&"documentMode"in document&&(Xn=document.documentMode);var Zp=pt&&"TextEvent"in window&&!Xn,Uu=pt&&(!_l||Xn&&8<Xn&&11>=Xn),$a=" ",Va=!1;function $u(e,t){switch(e){case"keyup":return Gp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function Xp(e,t){switch(e){case"compositionend":return Vu(t);case"keypress":return t.which!==32?null:(Va=!0,$a);case"textInput":return e=t.data,e===$a&&Va?null:e;default:return null}}function qp(e,t){if(sn)return e==="compositionend"||!_l&&$u(e,t)?(e=Wu(),Xr=Il=jt=null,sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uu&&t.locale!=="ko"?null:t.data;default:return null}}var ef={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ha(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ef[e.type]:t==="textarea"}function Hu(e,t,n,r){bu(r),t=ho(t,"onChange"),0<t.length&&(n=new Tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,pr=null;function tf(e){nc(e,0)}function Ao(e){var t=dn(e);if(gu(t))return e}function nf(e,t){if(e==="change")return t}var Qu=!1;if(pt){var ii;if(pt){var li="oninput"in document;if(!li){var Qa=document.createElement("div");Qa.setAttribute("oninput","return;"),li=typeof Qa.oninput=="function"}ii=li}else ii=!1;Qu=ii&&(!document.documentMode||9<document.documentMode)}function Ya(){qn&&(qn.detachEvent("onpropertychange",Yu),pr=qn=null)}function Yu(e){if(e.propertyName==="value"&&Ao(pr)){var t=[];Hu(t,pr,e,Ml(e)),Cu(tf,t)}}function rf(e,t,n){e==="focusin"?(Ya(),qn=t,pr=n,qn.attachEvent("onpropertychange",Yu)):e==="focusout"&&Ya()}function of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(pr)}function lf(e,t){if(e==="click")return Ao(t)}function af(e,t){if(e==="input"||e==="change")return Ao(t)}function sf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:sf;function fr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Si.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function Ka(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ja(e,t){var n=Ka(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ka(n)}}function Ku(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ku(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ju(){for(var e=window,t=so();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=so(e.document)}return t}function Rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uf(e){var t=Ju(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ku(n.ownerDocument.documentElement,n)){if(r!==null&&Rl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ja(n,i);var a=Ja(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cf=pt&&"documentMode"in document&&11>=document.documentMode,un=null,$i=null,er=null,Vi=!1;function Ga(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vi||un==null||un!==so(r)||(r=un,"selectionStart"in r&&Rl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&fr(er,r)||(er=r,r=ho($i,"onSelect"),0<r.length&&(t=new Tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=un)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},ai={},Gu={};pt&&(Gu=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function _o(e){if(ai[e])return ai[e];if(!cn[e])return e;var t=cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gu)return ai[e]=t[n];return e}var Zu=_o("animationend"),Xu=_o("animationiteration"),qu=_o("animationstart"),ec=_o("transitionend"),tc=new Map,Za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){tc.set(e,t),qt(t,[e])}for(var si=0;si<Za.length;si++){var ui=Za[si],df=ui.toLowerCase(),pf=ui[0].toUpperCase()+ui.slice(1);Tt(df,"on"+pf)}Tt(Zu,"onAnimationEnd");Tt(Xu,"onAnimationIteration");Tt(qu,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(ec,"onTransitionEnd");Nn("onMouseEnter",["mouseout","mouseover"]);Nn("onMouseLeave",["mouseout","mouseover"]);Nn("onPointerEnter",["pointerout","pointerover"]);Nn("onPointerLeave",["pointerout","pointerover"]);qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ff=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));function Xa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cp(r,t,void 0,e),e.currentTarget=null}function nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Xa(o,s,d),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Xa(o,s,d),i=u}}}if(co)throw e=Oi,co=!1,Oi=null,e}function Z(e,t){var n=t[Ji];n===void 0&&(n=t[Ji]=new Set);var r=e+"__bubble";n.has(r)||(rc(t,e,2,!1),n.add(r))}function ci(e,t,n){var r=0;t&&(r|=4),rc(n,e,r,t)}var Or="_reactListening"+Math.random().toString(36).slice(2);function mr(e){if(!e[Or]){e[Or]=!0,cu.forEach(function(n){n!=="selectionchange"&&(ff.has(n)||ci(n,!1,e),ci(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Or]||(t[Or]=!0,ci("selectionchange",!1,t))}}function rc(e,t,n,r){switch(Bu(t)){case 1:var o=Cp;break;case 4:o=Ep;break;default:o=Ll}n=o.bind(null,t,n,e),o=void 0,!Ri||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function di(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Ut(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Cu(function(){var d=i,x=Ml(n),m=[];e:{var g=tc.get(e);if(g!==void 0){var C=Tl,N=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":C=Up;break;case"focusin":N="focus",C=oi;break;case"focusout":N="blur",C=oi;break;case"beforeblur":case"afterblur":C=oi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Fp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Hp;break;case Zu:case Xu:case qu:C=Lp;break;case ec:C=Yp;break;case"scroll":C=zp;break;case"wheel":C=Jp;break;case"copy":case"cut":case"paste":C=Tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ua}var E=(t&4)!==0,A=!E&&e==="scroll",p=E?g!==null?g+"Capture":null:g;E=[];for(var c=d,f;c!==null;){f=c;var b=f.stateNode;if(f.tag===5&&b!==null&&(f=b,p!==null&&(b=sr(c,p),b!=null&&E.push(gr(c,b,f)))),A)break;c=c.return}0<E.length&&(g=new C(g,N,null,n,x),m.push({event:g,listeners:E}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",g&&n!==Ai&&(N=n.relatedTarget||n.fromElement)&&(Ut(N)||N[ft]))break e;if((C||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,C?(N=n.relatedTarget||n.toElement,C=d,N=N?Ut(N):null,N!==null&&(A=en(N),N!==A||N.tag!==5&&N.tag!==6)&&(N=null)):(C=null,N=d),C!==N)){if(E=Ba,b="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=Ua,b="onPointerLeave",p="onPointerEnter",c="pointer"),A=C==null?g:dn(C),f=N==null?g:dn(N),g=new E(b,c+"leave",C,n,x),g.target=A,g.relatedTarget=f,b=null,Ut(x)===d&&(E=new E(p,c+"enter",N,n,x),E.target=f,E.relatedTarget=A,b=E),A=b,C&&N)t:{for(E=C,p=N,c=0,f=E;f;f=nn(f))c++;for(f=0,b=p;b;b=nn(b))f++;for(;0<c-f;)E=nn(E),c--;for(;0<f-c;)p=nn(p),f--;for(;c--;){if(E===p||p!==null&&E===p.alternate)break t;E=nn(E),p=nn(p)}E=null}else E=null;C!==null&&qa(m,g,C,E,!1),N!==null&&A!==null&&qa(m,A,N,E,!0)}}e:{if(g=d?dn(d):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var j=nf;else if(Ha(g))if(Qu)j=af;else{j=of;var S=rf}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=lf);if(j&&(j=j(e,d))){Hu(m,j,n,x);break e}S&&S(e,g,d),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&Di(g,"number",g.value)}switch(S=d?dn(d):window,e){case"focusin":(Ha(S)||S.contentEditable==="true")&&(un=S,$i=d,er=null);break;case"focusout":er=$i=un=null;break;case"mousedown":Vi=!0;break;case"contextmenu":case"mouseup":case"dragend":Vi=!1,Ga(m,n,x);break;case"selectionchange":if(cf)break;case"keydown":case"keyup":Ga(m,n,x)}var D;if(_l)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else sn?$u(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Uu&&n.locale!=="ko"&&(sn||P!=="onCompositionStart"?P==="onCompositionEnd"&&sn&&(D=Wu()):(jt=x,Il="value"in jt?jt.value:jt.textContent,sn=!0)),S=ho(d,P),0<S.length&&(P=new Wa(P,e,null,n,x),m.push({event:P,listeners:S}),D?P.data=D:(D=Vu(n),D!==null&&(P.data=D)))),(D=Zp?Xp(e,n):qp(e,n))&&(d=ho(d,"onBeforeInput"),0<d.length&&(x=new Wa("onBeforeInput","beforeinput",null,n,x),m.push({event:x,listeners:d}),x.data=D))}nc(m,t)})}function gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=sr(e,n),i!=null&&r.unshift(gr(e,i,o)),i=sr(e,t),i!=null&&r.push(gr(e,i,o))),e=e.return}return r}function nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qa(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=sr(n,i),u!=null&&a.unshift(gr(n,u,s))):o||(u=sr(n,i),u!=null&&a.push(gr(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var mf=/\r\n?/g,gf=/\u0000|\uFFFD/g;function es(e){return(typeof e=="string"?e:""+e).replace(mf,`
`).replace(gf,"")}function Br(e,t,n){if(t=es(t),es(e)!==t&&n)throw Error(z(425))}function vo(){}var Hi=null,Qi=null;function Yi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ki=typeof setTimeout=="function"?setTimeout:void 0,hf=typeof clearTimeout=="function"?clearTimeout:void 0,ts=typeof Promise=="function"?Promise:void 0,vf=typeof queueMicrotask=="function"?queueMicrotask:typeof ts<"u"?function(e){return ts.resolve(null).then(e).catch(xf)}:Ki;function xf(e){setTimeout(function(){throw e})}function pi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);dr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ns(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var In=Math.random().toString(36).slice(2),tt="__reactFiber$"+In,hr="__reactProps$"+In,ft="__reactContainer$"+In,Ji="__reactEvents$"+In,yf="__reactListeners$"+In,wf="__reactHandles$"+In;function Ut(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ns(e);e!==null;){if(n=e[tt])return n;e=ns(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[tt]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Ro(e){return e[hr]||null}var Gi=[],pn=-1;function At(e){return{current:e}}function X(e){0>pn||(e.current=Gi[pn],Gi[pn]=null,pn--)}function J(e,t){pn++,Gi[pn]=e.current,e.current=t}var It={},we=At(It),ze=At(!1),Kt=It;function Cn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function xo(){X(ze),X(we)}function rs(e,t,n){if(we.current!==It)throw Error(z(168));J(we,t),J(ze,n)}function oc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,rp(e)||"Unknown",o));return re({},n,r)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Kt=we.current,J(we,e),J(ze,ze.current),!0}function os(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=oc(e,t,Kt),r.__reactInternalMemoizedMergedChildContext=e,X(ze),X(we),J(we,e)):X(ze),J(ze,n)}var st=null,Oo=!1,fi=!1;function ic(e){st===null?st=[e]:st.push(e)}function kf(e){Oo=!0,ic(e)}function _t(){if(!fi&&st!==null){fi=!0;var e=0,t=K;try{var n=st;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}st=null,Oo=!1}catch(o){throw st!==null&&(st=st.slice(e+1)),Fu(Fl,_t),o}finally{K=t,fi=!1}}return null}var fn=[],mn=0,wo=null,ko=0,Re=[],Oe=0,Jt=null,ut=1,ct="";function Bt(e,t){fn[mn++]=ko,fn[mn++]=wo,wo=e,ko=t}function lc(e,t,n){Re[Oe++]=ut,Re[Oe++]=ct,Re[Oe++]=Jt,Jt=e;var r=ut;e=ct;var o=32-Ke(r)-1;r&=~(1<<o),n+=1;var i=32-Ke(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,ut=1<<32-Ke(t)+o|n<<o|r,ct=i+e}else ut=1<<i|n<<o|r,ct=e}function Ol(e){e.return!==null&&(Bt(e,1),lc(e,1,0))}function Bl(e){for(;e===wo;)wo=fn[--mn],fn[mn]=null,ko=fn[--mn],fn[mn]=null;for(;e===Jt;)Jt=Re[--Oe],Re[Oe]=null,ct=Re[--Oe],Re[Oe]=null,ut=Re[--Oe],Re[Oe]=null}var Le=null,Pe=null,ee=!1,Ye=null;function ac(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function is(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Pe=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:ut,overflow:ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Pe=null,!0):!1;default:return!1}}function Zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xi(e){if(ee){var t=Pe;if(t){var n=t;if(!is(e,t)){if(Zi(e))throw Error(z(418));t=zt(n.nextSibling);var r=Le;t&&is(e,t)?ac(r,n):(e.flags=e.flags&-4097|2,ee=!1,Le=e)}}else{if(Zi(e))throw Error(z(418));e.flags=e.flags&-4097|2,ee=!1,Le=e}}}function ls(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Wr(e){if(e!==Le)return!1;if(!ee)return ls(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yi(e.type,e.memoizedProps)),t&&(t=Pe)){if(Zi(e))throw sc(),Error(z(418));for(;t;)ac(e,t),t=zt(t.nextSibling)}if(ls(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Le?zt(e.stateNode.nextSibling):null;return!0}function sc(){for(var e=Pe;e;)e=zt(e.nextSibling)}function En(){Pe=Le=null,ee=!1}function Wl(e){Ye===null?Ye=[e]:Ye.push(e)}var bf=ht.ReactCurrentBatchConfig;function Wn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function as(e){var t=e._init;return t(e._payload)}function uc(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=Pt(p,c),p.index=0,p.sibling=null,p}function i(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,b){return c===null||c.tag!==6?(c=wi(f,p.mode,b),c.return=p,c):(c=o(c,f),c.return=p,c)}function u(p,c,f,b){var j=f.type;return j===an?x(p,c,f.props.children,b,f.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yt&&as(j)===c.type)?(b=o(c,f.props),b.ref=Wn(p,c,f),b.return=p,b):(b=lo(f.type,f.key,f.props,null,p.mode,b),b.ref=Wn(p,c,f),b.return=p,b)}function d(p,c,f,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=ki(f,p.mode,b),c.return=p,c):(c=o(c,f.children||[]),c.return=p,c)}function x(p,c,f,b,j){return c===null||c.tag!==7?(c=Qt(f,p.mode,b,j),c.return=p,c):(c=o(c,f),c.return=p,c)}function m(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wi(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Dr:return f=lo(c.type,c.key,c.props,null,p.mode,f),f.ref=Wn(p,null,c),f.return=p,f;case ln:return c=ki(c,p.mode,f),c.return=p,c;case yt:var b=c._init;return m(p,b(c._payload),f)}if(Yn(c)||An(c))return c=Qt(c,p.mode,f,null),c.return=p,c;Ur(p,c)}return null}function g(p,c,f,b){var j=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return j!==null?null:s(p,c,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Dr:return f.key===j?u(p,c,f,b):null;case ln:return f.key===j?d(p,c,f,b):null;case yt:return j=f._init,g(p,c,j(f._payload),b)}if(Yn(f)||An(f))return j!==null?null:x(p,c,f,b,null);Ur(p,f)}return null}function C(p,c,f,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(f)||null,s(c,p,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Dr:return p=p.get(b.key===null?f:b.key)||null,u(c,p,b,j);case ln:return p=p.get(b.key===null?f:b.key)||null,d(c,p,b,j);case yt:var S=b._init;return C(p,c,f,S(b._payload),j)}if(Yn(b)||An(b))return p=p.get(f)||null,x(c,p,b,j,null);Ur(c,b)}return null}function N(p,c,f,b){for(var j=null,S=null,D=c,P=c=0,W=null;D!==null&&P<f.length;P++){D.index>P?(W=D,D=null):W=D.sibling;var v=g(p,D,f[P],b);if(v===null){D===null&&(D=W);break}e&&D&&v.alternate===null&&t(p,D),c=i(v,c,P),S===null?j=v:S.sibling=v,S=v,D=W}if(P===f.length)return n(p,D),ee&&Bt(p,P),j;if(D===null){for(;P<f.length;P++)D=m(p,f[P],b),D!==null&&(c=i(D,c,P),S===null?j=D:S.sibling=D,S=D);return ee&&Bt(p,P),j}for(D=r(p,D);P<f.length;P++)W=C(D,p,P,f[P],b),W!==null&&(e&&W.alternate!==null&&D.delete(W.key===null?P:W.key),c=i(W,c,P),S===null?j=W:S.sibling=W,S=W);return e&&D.forEach(function(L){return t(p,L)}),ee&&Bt(p,P),j}function E(p,c,f,b){var j=An(f);if(typeof j!="function")throw Error(z(150));if(f=j.call(f),f==null)throw Error(z(151));for(var S=j=null,D=c,P=c=0,W=null,v=f.next();D!==null&&!v.done;P++,v=f.next()){D.index>P?(W=D,D=null):W=D.sibling;var L=g(p,D,v.value,b);if(L===null){D===null&&(D=W);break}e&&D&&L.alternate===null&&t(p,D),c=i(L,c,P),S===null?j=L:S.sibling=L,S=L,D=W}if(v.done)return n(p,D),ee&&Bt(p,P),j;if(D===null){for(;!v.done;P++,v=f.next())v=m(p,v.value,b),v!==null&&(c=i(v,c,P),S===null?j=v:S.sibling=v,S=v);return ee&&Bt(p,P),j}for(D=r(p,D);!v.done;P++,v=f.next())v=C(D,p,P,v.value,b),v!==null&&(e&&v.alternate!==null&&D.delete(v.key===null?P:v.key),c=i(v,c,P),S===null?j=v:S.sibling=v,S=v);return e&&D.forEach(function(B){return t(p,B)}),ee&&Bt(p,P),j}function A(p,c,f,b){if(typeof f=="object"&&f!==null&&f.type===an&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Dr:e:{for(var j=f.key,S=c;S!==null;){if(S.key===j){if(j=f.type,j===an){if(S.tag===7){n(p,S.sibling),c=o(S,f.props.children),c.return=p,p=c;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yt&&as(j)===S.type){n(p,S.sibling),c=o(S,f.props),c.ref=Wn(p,S,f),c.return=p,p=c;break e}n(p,S);break}else t(p,S);S=S.sibling}f.type===an?(c=Qt(f.props.children,p.mode,b,f.key),c.return=p,p=c):(b=lo(f.type,f.key,f.props,null,p.mode,b),b.ref=Wn(p,c,f),b.return=p,p=b)}return a(p);case ln:e:{for(S=f.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=o(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=ki(f,p.mode,b),c.return=p,p=c}return a(p);case yt:return S=f._init,A(p,c,S(f._payload),b)}if(Yn(f))return N(p,c,f,b);if(An(f))return E(p,c,f,b);Ur(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,f),c.return=p,p=c):(n(p,c),c=wi(f,p.mode,b),c.return=p,p=c),a(p)):n(p,c)}return A}var zn=uc(!0),cc=uc(!1),bo=At(null),jo=null,gn=null,Ul=null;function $l(){Ul=gn=jo=null}function Vl(e){var t=bo.current;X(bo),e._currentValue=t}function qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bn(e,t){jo=e,Ul=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(jo===null)throw Error(z(308));gn=e,jo.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var $t=null;function Hl(e){$t===null?$t=[e]:$t.push(e)}function dc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Hl(t)):(n.next=o.next,o.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function Ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,mt(e,n)}return o=r.interleaved,o===null?(t.next=t,Hl(r)):(t.next=o.next,o.next=t),r.interleaved=t,mt(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dl(e,n)}}function ss(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function So(e,t,n,r){var o=e.updateQueue;wt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==a&&(s===null?x.firstBaseUpdate=d:s.next=d,x.lastBaseUpdate=u))}if(i!==null){var m=o.baseState;a=0,x=d=u=null,s=i;do{var g=s.lane,C=s.eventTime;if((r&g)===g){x!==null&&(x=x.next={eventTime:C,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,E=s;switch(g=t,C=n,E.tag){case 1:if(N=E.payload,typeof N=="function"){m=N.call(C,m,g);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=E.payload,g=typeof N=="function"?N.call(C,m,g):N,g==null)break e;m=re({},m,g);break e;case 2:wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else C={eventTime:C,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(d=x=C,u=m):x=x.next=C,a|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(x===null&&(u=m),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=x,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Zt|=a,e.lanes=a,e.memoizedState=m}}function us(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var Er={},rt=At(Er),vr=At(Er),xr=At(Er);function Vt(e){if(e===Er)throw Error(z(174));return e}function Yl(e,t){switch(J(xr,t),J(vr,e),J(rt,Er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Li(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Li(t,e)}X(rt),J(rt,t)}function Mn(){X(rt),X(vr),X(xr)}function fc(e){Vt(xr.current);var t=Vt(rt.current),n=Li(t,e.type);t!==n&&(J(vr,e),J(rt,n))}function Kl(e){vr.current===e&&(X(rt),X(vr))}var te=At(0);function No(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mi=[];function Jl(){for(var e=0;e<mi.length;e++)mi[e]._workInProgressVersionPrimary=null;mi.length=0}var to=ht.ReactCurrentDispatcher,gi=ht.ReactCurrentBatchConfig,Gt=0,ne=null,ue=null,de=null,Co=!1,tr=!1,yr=0,jf=0;function ve(){throw Error(z(321))}function Gl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Zl(e,t,n,r,o,i){if(Gt=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?Ef:zf,e=n(r,o),tr){i=0;do{if(tr=!1,yr=0,25<=i)throw Error(z(301));i+=1,de=ue=null,t.updateQueue=null,to.current=Mf,e=n(r,o)}while(tr)}if(to.current=Eo,t=ue!==null&&ue.next!==null,Gt=0,de=ue=ne=null,Co=!1,t)throw Error(z(300));return e}function Xl(){var e=yr!==0;return yr=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?ne.memoizedState=de=e:de=de.next=e,de}function $e(){if(ue===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=de===null?ne.memoizedState:de.next;if(t!==null)de=t,ue=e;else{if(e===null)throw Error(z(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},de===null?ne.memoizedState=de=e:de=de.next=e}return de}function wr(e,t){return typeof t=="function"?t(e):t}function hi(e){var t=$e(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,u=null,d=i;do{var x=d.lane;if((Gt&x)===x)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:x,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=m,a=r):u=u.next=m,ne.lanes|=x,Zt|=x}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=s,Ge(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ne.lanes|=i,Zt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vi(e){var t=$e(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ge(i,t.memoizedState)||(Ee=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function mc(){}function gc(e,t){var n=ne,r=$e(),o=t(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,Ee=!0),r=r.queue,ql(xc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,kr(9,vc.bind(null,n,r,o,t),void 0,null),pe===null)throw Error(z(349));Gt&30||hc(n,t,o)}return o}function hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vc(e,t,n,r){t.value=n,t.getSnapshot=r,yc(t)&&wc(e)}function xc(e,t,n){return n(function(){yc(t)&&wc(e)})}function yc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function wc(e){var t=mt(e,1);t!==null&&Je(t,e,1,-1)}function cs(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},t.queue=e,e=e.dispatch=Cf.bind(null,ne,e),[t.memoizedState,e]}function kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kc(){return $e().memoizedState}function no(e,t,n,r){var o=et();ne.flags|=e,o.memoizedState=kr(1|t,n,void 0,r===void 0?null:r)}function Bo(e,t,n,r){var o=$e();r=r===void 0?null:r;var i=void 0;if(ue!==null){var a=ue.memoizedState;if(i=a.destroy,r!==null&&Gl(r,a.deps)){o.memoizedState=kr(t,n,i,r);return}}ne.flags|=e,o.memoizedState=kr(1|t,n,i,r)}function ds(e,t){return no(8390656,8,e,t)}function ql(e,t){return Bo(2048,8,e,t)}function bc(e,t){return Bo(4,2,e,t)}function jc(e,t){return Bo(4,4,e,t)}function Sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nc(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4,4,Sc.bind(null,t,e),n)}function ea(){}function Cc(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ec(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zc(e,t,n){return Gt&21?(Ge(n,t)||(n=Lu(),ne.lanes|=n,Zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function Sf(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=gi.transition;gi.transition={};try{e(!1),t()}finally{K=n,gi.transition=r}}function Mc(){return $e().memoizedState}function Nf(e,t,n){var r=Dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fc(e))Dc(t,n);else if(n=dc(e,t,n,r),n!==null){var o=be();Je(n,e,r,o),Pc(n,t,r)}}function Cf(e,t,n){var r=Dt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))Dc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Ge(s,a)){var u=t.interleaved;u===null?(o.next=o,Hl(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=dc(e,t,o,r),n!==null&&(o=be(),Je(n,e,r,o),Pc(n,t,r))}}function Fc(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Dc(e,t){tr=Co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dl(e,n)}}var Eo={readContext:Ue,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},Ef={readContext:Ue,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:ds,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,Sc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nf.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:cs,useDebugValue:ea,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=cs(!1),t=e[0];return e=Sf.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,o=et();if(ee){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),pe===null)throw Error(z(349));Gt&30||hc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ds(xc.bind(null,r,i,e),[e]),r.flags|=2048,kr(9,vc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=et(),t=pe.identifierPrefix;if(ee){var n=ct,r=ut;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zf={readContext:Ue,useCallback:Cc,useContext:Ue,useEffect:ql,useImperativeHandle:Nc,useInsertionEffect:bc,useLayoutEffect:jc,useMemo:Ec,useReducer:hi,useRef:kc,useState:function(){return hi(wr)},useDebugValue:ea,useDeferredValue:function(e){var t=$e();return zc(t,ue.memoizedState,e)},useTransition:function(){var e=hi(wr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:mc,useSyncExternalStore:gc,useId:Mc,unstable_isNewReconciler:!1},Mf={readContext:Ue,useCallback:Cc,useContext:Ue,useEffect:ql,useImperativeHandle:Nc,useInsertionEffect:bc,useLayoutEffect:jc,useMemo:Ec,useReducer:vi,useRef:kc,useState:function(){return vi(wr)},useDebugValue:ea,useDeferredValue:function(e){var t=$e();return ue===null?t.memoizedState=e:zc(t,ue.memoizedState,e)},useTransition:function(){var e=vi(wr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:mc,useSyncExternalStore:gc,useId:Mc,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function el(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wo={isMounted:function(e){return(e=e._reactInternals)?en(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),o=Dt(e),i=dt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,o),t!==null&&(Je(t,e,o,r),eo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),o=Dt(e),i=dt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,o),t!==null&&(Je(t,e,o,r),eo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Dt(e),o=dt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Mt(e,o,r),t!==null&&(Je(t,e,r,n),eo(t,e,r))}};function ps(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!fr(n,r)||!fr(o,i):!0}function Lc(e,t,n){var r=!1,o=It,i=t.contextType;return typeof i=="object"&&i!==null?i=Ue(i):(o=Me(t)?Kt:we.current,r=t.contextTypes,i=(r=r!=null)?Cn(e,o):It),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function fs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wo.enqueueReplaceState(t,t.state,null)}function tl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ql(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ue(i):(i=Me(t)?Kt:we.current,o.context=Cn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(el(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Wo.enqueueReplaceState(o,o.state,null),So(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",r=t;do n+=np(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function xi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function nl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ff=typeof WeakMap=="function"?WeakMap:Map;function Ic(e,t,n){n=dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Mo||(Mo=!0,pl=r),nl(e,t)},n}function Tc(e,t,n){n=dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){nl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){nl(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ms(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ff;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Vf.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hs(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dt(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var Df=ht.ReactCurrentOwner,Ee=!1;function ke(e,t,n,r){t.child=e===null?cc(t,null,n,r):zn(t,e.child,n,r)}function vs(e,t,n,r,o){n=n.render;var i=t.ref;return bn(t,o),r=Zl(e,t,n,r,i,o),n=Xl(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(ee&&n&&Ol(t),t.flags|=1,ke(e,t,r,o),t.child)}function xs(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!sa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ac(e,t,i,r,o)):(e=lo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:fr,n(a,r)&&e.ref===t.ref)return gt(e,t,o)}return t.flags|=1,e=Pt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ac(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(fr(i,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,gt(e,t,o)}return rl(e,t,n,r,o)}function _c(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(vn,De),De|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(vn,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(vn,De),De|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(vn,De),De|=r;return ke(e,t,o,n),t.child}function Rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rl(e,t,n,r,o){var i=Me(n)?Kt:we.current;return i=Cn(t,i),bn(t,o),n=Zl(e,t,n,r,i,o),r=Xl(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(ee&&r&&Ol(t),t.flags|=1,ke(e,t,n,o),t.child)}function ys(e,t,n,r,o){if(Me(n)){var i=!0;yo(t)}else i=!1;if(bn(t,o),t.stateNode===null)ro(e,t),Lc(t,n,r),tl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ue(d):(d=Me(n)?Kt:we.current,d=Cn(t,d));var x=n.getDerivedStateFromProps,m=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&fs(t,a,r,d),wt=!1;var g=t.memoizedState;a.state=g,So(t,r,a,o),u=t.memoizedState,s!==r||g!==u||ze.current||wt?(typeof x=="function"&&(el(t,n,x,r),u=t.memoizedState),(s=wt||ps(t,n,s,r,g,u,d))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,pc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:He(t.type,s),a.props=d,m=t.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ue(u):(u=Me(n)?Kt:we.current,u=Cn(t,u));var C=n.getDerivedStateFromProps;(x=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==m||g!==u)&&fs(t,a,r,u),wt=!1,g=t.memoizedState,a.state=g,So(t,r,a,o);var N=t.memoizedState;s!==m||g!==N||ze.current||wt?(typeof C=="function"&&(el(t,n,C,r),N=t.memoizedState),(d=wt||ps(t,n,d,r,g,N,u)||!1)?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),a.props=r,a.state=N,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ol(e,t,n,r,i,o)}function ol(e,t,n,r,o,i){Rc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&os(t,n,!1),gt(e,t,i);r=t.stateNode,Df.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=zn(t,e.child,null,i),t.child=zn(t,null,s,i)):ke(e,t,s,i),t.memoizedState=r.state,o&&os(t,n,!0),t.child}function Oc(e){var t=e.stateNode;t.pendingContext?rs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rs(e,t.context,!1),Yl(e,t.containerInfo)}function ws(e,t,n,r,o){return En(),Wl(o),t.flags|=256,ke(e,t,n,r),t.child}var il={dehydrated:null,treeContext:null,retryLane:0};function ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bc(e,t,n){var r=t.pendingProps,o=te.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(te,o&1),e===null)return Xi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Vo(a,r,0,null),e=Qt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ll(n),t.memoizedState=il,e):ta(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Pf(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Pt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Pt(s,i):(i=Qt(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?ll(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=il,r}return i=e.child,e=i.sibling,r=Pt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ta(e,t){return t=Vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $r(e,t,n,r){return r!==null&&Wl(r),zn(t,e.child,null,n),e=ta(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pf(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=xi(Error(z(422))),$r(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Vo({mode:"visible",children:r.children},o,0,null),i=Qt(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&zn(t,e.child,null,a),t.child.memoizedState=ll(a),t.memoizedState=il,i);if(!(t.mode&1))return $r(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(z(419)),r=xi(i,r,void 0),$r(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ee||s){if(r=pe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,mt(e,o),Je(r,e,o,-1))}return aa(),r=xi(Error(z(421))),$r(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Hf.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Pe=zt(o.nextSibling),Le=t,ee=!0,Ye=null,e!==null&&(Re[Oe++]=ut,Re[Oe++]=ct,Re[Oe++]=Jt,ut=e.id,ct=e.overflow,Jt=t),t=ta(t,r.children),t.flags|=4096,t)}function ks(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qi(e.return,t,n)}function yi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Wc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ks(e,n,t);else if(e.tag===19)ks(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(te,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&No(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),yi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&No(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}yi(t,!0,n,null,i);break;case"together":yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lf(e,t,n){switch(t.tag){case 3:Oc(t),En();break;case 5:fc(t);break;case 1:Me(t.type)&&yo(t);break;case 4:Yl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;J(bo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?Bc(e,t,n):(J(te,te.current&1),e=gt(e,t,n),e!==null?e.sibling:null);J(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,_c(e,t,n)}return gt(e,t,n)}var Uc,al,$c,Vc;Uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};al=function(){};$c=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Vt(rt.current);var i=null;switch(n){case"input":o=Mi(e,o),r=Mi(e,r),i=[];break;case"select":o=re({},o,{value:void 0}),r=re({},r,{value:void 0}),i=[];break;case"textarea":o=Pi(e,o),r=Pi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vo)}Ii(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(lr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(lr.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Z("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Vc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Un(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function If(e,t,n){var r=t.pendingProps;switch(Bl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Me(t.type)&&xo(),xe(t),null;case 3:return r=t.stateNode,Mn(),X(ze),X(we),Jl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(gl(Ye),Ye=null))),al(e,t),xe(t),null;case 5:Kl(t);var o=Vt(xr.current);if(n=t.type,e!==null&&t.stateNode!=null)$c(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return xe(t),null}if(e=Vt(rt.current),Wr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[tt]=t,r[hr]=i,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(o=0;o<Jn.length;o++)Z(Jn[o],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Fa(r,i),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Z("invalid",r);break;case"textarea":Pa(r,i),Z("invalid",r)}Ii(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),o=["children",""+s]):lr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Z("scroll",r)}switch(n){case"input":Pr(r),Da(r,i,!0);break;case"textarea":Pr(r),La(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=vo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[tt]=t,e[hr]=r,Uc(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ti(n,r),n){case"dialog":Z("cancel",e),Z("close",e),o=r;break;case"iframe":case"object":case"embed":Z("load",e),o=r;break;case"video":case"audio":for(o=0;o<Jn.length;o++)Z(Jn[o],e);o=r;break;case"source":Z("error",e),o=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=r;break;case"details":Z("toggle",e),o=r;break;case"input":Fa(e,r),o=Mi(e,r),Z("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=re({},r,{value:void 0}),Z("invalid",e);break;case"textarea":Pa(e,r),o=Pi(e,r),Z("invalid",e);break;default:o=r}Ii(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?ku(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ar(e,u):typeof u=="number"&&ar(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Z("scroll",e):u!=null&&Nl(e,i,u,a))}switch(n){case"input":Pr(e),Da(e,r,!1);break;case"textarea":Pr(e),La(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?xn(e,!!r.multiple,i,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Vc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=Vt(xr.current),Vt(rt.current),Wr(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(i=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return xe(t),null;case 13:if(X(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Pe!==null&&t.mode&1&&!(t.flags&128))sc(),En(),t.flags|=98560,i=!1;else if(i=Wr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[tt]=t}else En(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else Ye!==null&&(gl(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?ce===0&&(ce=3):aa())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Mn(),al(e,t),e===null&&mr(t.stateNode.containerInfo),xe(t),null;case 10:return Vl(t.type._context),xe(t),null;case 17:return Me(t.type)&&xo(),xe(t),null;case 19:if(X(te),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Un(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=No(e),a!==null){for(t.flags|=128,Un(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(te,te.current&1|2),t.child}e=e.sibling}i.tail!==null&&le()>Dn&&(t.flags|=128,r=!0,Un(i,!1),t.lanes=4194304)}else{if(!r)if(e=No(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Un(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ee)return xe(t),null}else 2*le()-i.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,Un(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,n=te.current,J(te,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return la(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Tf(e,t){switch(Bl(t),t.tag){case 1:return Me(t.type)&&xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),X(ze),X(we),Jl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Kl(t),null;case 13:if(X(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(te),null;case 4:return Mn(),null;case 10:return Vl(t.type._context),null;case 22:case 23:return la(),null;case 24:return null;default:return null}}var Vr=!1,ye=!1,Af=typeof WeakSet=="function"?WeakSet:Set,T=null;function hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function sl(e,t,n){try{n()}catch(r){oe(e,t,r)}}var bs=!1;function _f(e,t){if(Hi=mo,e=Ju(),Rl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,x=0,m=e,g=null;t:for(;;){for(var C;m!==n||o!==0&&m.nodeType!==3||(s=a+o),m!==i||r!==0&&m.nodeType!==3||(u=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(C=m.firstChild)!==null;)g=m,m=C;for(;;){if(m===e)break t;if(g===n&&++d===o&&(s=a),g===i&&++x===r&&(u=a),(C=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=C}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qi={focusedElem:e,selectionRange:n},mo=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var E=N.memoizedProps,A=N.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?E:He(t.type,E),A);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(b){oe(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return N=bs,bs=!1,N}function nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&sl(t,n,i)}o=o.next}while(o!==r)}}function Uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ul(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hc(e){var t=e.alternate;t!==null&&(e.alternate=null,Hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[hr],delete t[Ji],delete t[yf],delete t[wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qc(e){return e.tag===5||e.tag===3||e.tag===4}function js(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vo));else if(r!==4&&(e=e.child,e!==null))for(cl(e,t,n),e=e.sibling;e!==null;)cl(e,t,n),e=e.sibling}function dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(dl(e,t,n),e=e.sibling;e!==null;)dl(e,t,n),e=e.sibling}var fe=null,Qe=!1;function xt(e,t,n){for(n=n.child;n!==null;)Yc(e,t,n),n=n.sibling}function Yc(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Io,n)}catch{}switch(n.tag){case 5:ye||hn(n,t);case 6:var r=fe,o=Qe;fe=null,xt(e,t,n),fe=r,Qe=o,fe!==null&&(Qe?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Qe?(e=fe,n=n.stateNode,e.nodeType===8?pi(e.parentNode,n):e.nodeType===1&&pi(e,n),dr(e)):pi(fe,n.stateNode));break;case 4:r=fe,o=Qe,fe=n.stateNode.containerInfo,Qe=!0,xt(e,t,n),fe=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&sl(n,t,a),o=o.next}while(o!==r)}xt(e,t,n);break;case 1:if(!ye&&(hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}xt(e,t,n);break;case 21:xt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,xt(e,t,n),ye=r):xt(e,t,n);break;default:xt(e,t,n)}}function Ss(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Af),t.forEach(function(r){var o=Qf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,Qe=!1;break e;case 3:fe=s.stateNode.containerInfo,Qe=!0;break e;case 4:fe=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(fe===null)throw Error(z(160));Yc(i,a,o),fe=null,Qe=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){oe(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kc(t,e),t=t.sibling}function Kc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Xe(e),r&4){try{nr(3,e,e.return),Uo(3,e)}catch(E){oe(e,e.return,E)}try{nr(5,e,e.return)}catch(E){oe(e,e.return,E)}}break;case 1:Ve(t,e),Xe(e),r&512&&n!==null&&hn(n,n.return);break;case 5:if(Ve(t,e),Xe(e),r&512&&n!==null&&hn(n,n.return),e.flags&32){var o=e.stateNode;try{ar(o,"")}catch(E){oe(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&hu(o,i),Ti(s,a);var d=Ti(s,i);for(a=0;a<u.length;a+=2){var x=u[a],m=u[a+1];x==="style"?ku(o,m):x==="dangerouslySetInnerHTML"?yu(o,m):x==="children"?ar(o,m):Nl(o,x,m,d)}switch(s){case"input":Fi(o,i);break;case"textarea":vu(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?xn(o,!!i.multiple,C,!1):g!==!!i.multiple&&(i.defaultValue!=null?xn(o,!!i.multiple,i.defaultValue,!0):xn(o,!!i.multiple,i.multiple?[]:"",!1))}o[hr]=i}catch(E){oe(e,e.return,E)}}break;case 6:if(Ve(t,e),Xe(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(E){oe(e,e.return,E)}}break;case 3:if(Ve(t,e),Xe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dr(t.containerInfo)}catch(E){oe(e,e.return,E)}break;case 4:Ve(t,e),Xe(e);break;case 13:Ve(t,e),Xe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(oa=le())),r&4&&Ss(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(d=ye)||x,Ve(t,e),ye=d):Ve(t,e),Xe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!x&&e.mode&1)for(T=e,x=e.child;x!==null;){for(m=T=x;T!==null;){switch(g=T,C=g.child,g.tag){case 0:case 11:case 14:case 15:nr(4,g,g.return);break;case 1:hn(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(E){oe(r,n,E)}}break;case 5:hn(g,g.return);break;case 22:if(g.memoizedState!==null){Cs(m);continue}}C!==null?(C.return=g,T=C):Cs(m)}x=x.sibling}e:for(x=null,m=e;;){if(m.tag===5){if(x===null){x=m;try{o=m.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,u=m.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=wu("display",a))}catch(E){oe(e,e.return,E)}}}else if(m.tag===6){if(x===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(E){oe(e,e.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;x===m&&(x=null),m=m.return}x===m&&(x=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ve(t,e),Xe(e),r&4&&Ss(e);break;case 21:break;default:Ve(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qc(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ar(o,""),r.flags&=-33);var i=js(e);dl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=js(e);cl(e,s,a);break;default:throw Error(z(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rf(e,t,n){T=e,Jc(e)}function Jc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Vr;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ye;s=Vr;var d=ye;if(Vr=a,(ye=u)&&!d)for(T=o;T!==null;)a=T,u=a.child,a.tag===22&&a.memoizedState!==null?Es(o):u!==null?(u.return=a,T=u):Es(o);for(;i!==null;)T=i,Jc(i),i=i.sibling;T=o,Vr=s,ye=d}Ns(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):Ns(e)}}function Ns(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Uo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&us(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}us(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var x=d.memoizedState;if(x!==null){var m=x.dehydrated;m!==null&&dr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}ye||t.flags&512&&ul(t)}catch(g){oe(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Cs(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Es(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Uo(4,t)}catch(u){oe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){oe(t,o,u)}}var i=t.return;try{ul(t)}catch(u){oe(t,i,u)}break;case 5:var a=t.return;try{ul(t)}catch(u){oe(t,a,u)}}}catch(u){oe(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Of=Math.ceil,zo=ht.ReactCurrentDispatcher,na=ht.ReactCurrentOwner,We=ht.ReactCurrentBatchConfig,Q=0,pe=null,se=null,me=0,De=0,vn=At(0),ce=0,br=null,Zt=0,$o=0,ra=0,rr=null,Ce=null,oa=0,Dn=1/0,at=null,Mo=!1,pl=null,Ft=null,Hr=!1,St=null,Fo=0,or=0,fl=null,oo=-1,io=0;function be(){return Q&6?le():oo!==-1?oo:oo=le()}function Dt(e){return e.mode&1?Q&2&&me!==0?me&-me:bf.transition!==null?(io===0&&(io=Lu()),io):(e=K,e!==0||(e=window.event,e=e===void 0?16:Bu(e.type)),e):1}function Je(e,t,n,r){if(50<or)throw or=0,fl=null,Error(z(185));Sr(e,n,r),(!(Q&2)||e!==pe)&&(e===pe&&(!(Q&2)&&($o|=n),ce===4&&bt(e,me)),Fe(e,r),n===1&&Q===0&&!(t.mode&1)&&(Dn=le()+500,Oo&&_t()))}function Fe(e,t){var n=e.callbackNode;kp(e,t);var r=fo(e,e===pe?me:0);if(r===0)n!==null&&Aa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Aa(n),t===1)e.tag===0?kf(zs.bind(null,e)):ic(zs.bind(null,e)),vf(function(){!(Q&6)&&_t()}),n=null;else{switch(Iu(r)){case 1:n=Fl;break;case 4:n=Du;break;case 16:n=po;break;case 536870912:n=Pu;break;default:n=po}n=rd(n,Gc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gc(e,t){if(oo=-1,io=0,Q&6)throw Error(z(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=fo(e,e===pe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Do(e,r);else{t=r;var o=Q;Q|=2;var i=Xc();(pe!==e||me!==t)&&(at=null,Dn=le()+500,Ht(e,t));do try{Uf();break}catch(s){Zc(e,s)}while(!0);$l(),zo.current=i,Q=o,se!==null?t=0:(pe=null,me=0,t=ce)}if(t!==0){if(t===2&&(o=Bi(e),o!==0&&(r=o,t=ml(e,o))),t===1)throw n=br,Ht(e,0),bt(e,r),Fe(e,le()),n;if(t===6)bt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Bf(o)&&(t=Do(e,r),t===2&&(i=Bi(e),i!==0&&(r=i,t=ml(e,i))),t===1))throw n=br,Ht(e,0),bt(e,r),Fe(e,le()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Wt(e,Ce,at);break;case 3:if(bt(e,r),(r&130023424)===r&&(t=oa+500-le(),10<t)){if(fo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ki(Wt.bind(null,e,Ce,at),t);break}Wt(e,Ce,at);break;case 4:if(bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Ke(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Of(r/1960))-r,10<r){e.timeoutHandle=Ki(Wt.bind(null,e,Ce,at),r);break}Wt(e,Ce,at);break;case 5:Wt(e,Ce,at);break;default:throw Error(z(329))}}}return Fe(e,le()),e.callbackNode===n?Gc.bind(null,e):null}function ml(e,t){var n=rr;return e.current.memoizedState.isDehydrated&&(Ht(e,t).flags|=256),e=Do(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&gl(t)),e}function gl(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function Bf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bt(e,t){for(t&=~ra,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function zs(e){if(Q&6)throw Error(z(327));jn();var t=fo(e,0);if(!(t&1))return Fe(e,le()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=Bi(e);r!==0&&(t=r,n=ml(e,r))}if(n===1)throw n=br,Ht(e,0),bt(e,t),Fe(e,le()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,Ce,at),Fe(e,le()),null}function ia(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Dn=le()+500,Oo&&_t())}}function Xt(e){St!==null&&St.tag===0&&!(Q&6)&&jn();var t=Q;Q|=1;var n=We.transition,r=K;try{if(We.transition=null,K=1,e)return e()}finally{K=r,We.transition=n,Q=t,!(Q&6)&&_t()}}function la(){De=vn.current,X(vn)}function Ht(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hf(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:Mn(),X(ze),X(we),Jl();break;case 5:Kl(r);break;case 4:Mn();break;case 13:X(te);break;case 19:X(te);break;case 10:Vl(r.type._context);break;case 22:case 23:la()}n=n.return}if(pe=e,se=e=Pt(e.current,null),me=De=t,ce=0,br=null,ra=$o=Zt=0,Ce=rr=null,$t!==null){for(t=0;t<$t.length;t++)if(n=$t[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}$t=null}return e}function Zc(e,t){do{var n=se;try{if($l(),to.current=Eo,Co){for(var r=ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Co=!1}if(Gt=0,de=ue=ne=null,tr=!1,yr=0,na.current=null,n===null||n.return===null){ce=1,br=t,se=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=me,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,x=s,m=x.tag;if(!(x.mode&1)&&(m===0||m===11||m===15)){var g=x.alternate;g?(x.updateQueue=g.updateQueue,x.memoizedState=g.memoizedState,x.lanes=g.lanes):(x.updateQueue=null,x.memoizedState=null)}var C=gs(a);if(C!==null){C.flags&=-257,hs(C,a,s,i,t),C.mode&1&&ms(i,d,t),t=C,u=d;var N=t.updateQueue;if(N===null){var E=new Set;E.add(u),t.updateQueue=E}else N.add(u);break e}else{if(!(t&1)){ms(i,d,t),aa();break e}u=Error(z(426))}}else if(ee&&s.mode&1){var A=gs(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),hs(A,a,s,i,t),Wl(Fn(u,s));break e}}i=u=Fn(u,s),ce!==4&&(ce=2),rr===null?rr=[i]:rr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Ic(i,u,t);ss(i,p);break e;case 1:s=u;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ft===null||!Ft.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=Tc(i,s,t);ss(i,b);break e}}i=i.return}while(i!==null)}ed(n)}catch(j){t=j,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Xc(){var e=zo.current;return zo.current=Eo,e===null?Eo:e}function aa(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(Zt&268435455)&&!($o&268435455)||bt(pe,me)}function Do(e,t){var n=Q;Q|=2;var r=Xc();(pe!==e||me!==t)&&(at=null,Ht(e,t));do try{Wf();break}catch(o){Zc(e,o)}while(!0);if($l(),Q=n,zo.current=r,se!==null)throw Error(z(261));return pe=null,me=0,ce}function Wf(){for(;se!==null;)qc(se)}function Uf(){for(;se!==null&&!pp();)qc(se)}function qc(e){var t=nd(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?ed(e):se=t,na.current=null}function ed(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tf(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=If(n,t,De),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function Wt(e,t,n){var r=K,o=We.transition;try{We.transition=null,K=1,$f(e,t,n,r)}finally{We.transition=o,K=r}return null}function $f(e,t,n,r){do jn();while(St!==null);if(Q&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(bp(e,i),e===pe&&(se=pe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hr||(Hr=!0,rd(po,function(){return jn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=We.transition,We.transition=null;var a=K;K=1;var s=Q;Q|=4,na.current=null,_f(e,n),Kc(n,e),uf(Qi),mo=!!Hi,Qi=Hi=null,e.current=n,Rf(n),fp(),Q=s,K=a,We.transition=i}else e.current=n;if(Hr&&(Hr=!1,St=e,Fo=o),i=e.pendingLanes,i===0&&(Ft=null),hp(n.stateNode),Fe(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Mo)throw Mo=!1,e=pl,pl=null,e;return Fo&1&&e.tag!==0&&jn(),i=e.pendingLanes,i&1?e===fl?or++:(or=0,fl=e):or=0,_t(),null}function jn(){if(St!==null){var e=Iu(Fo),t=We.transition,n=K;try{if(We.transition=null,K=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,Fo=0,Q&6)throw Error(z(331));var o=Q;for(Q|=4,T=e.current;T!==null;){var i=T,a=i.child;if(T.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(T=d;T!==null;){var x=T;switch(x.tag){case 0:case 11:case 15:nr(8,x,i)}var m=x.child;if(m!==null)m.return=x,T=m;else for(;T!==null;){x=T;var g=x.sibling,C=x.return;if(Hc(x),x===d){T=null;break}if(g!==null){g.return=C,T=g;break}T=C}}}var N=i.alternate;if(N!==null){var E=N.child;if(E!==null){N.child=null;do{var A=E.sibling;E.sibling=null,E=A}while(E!==null)}}T=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,T=a;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:nr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,T=p;break e}T=i.return}}var c=e.current;for(T=c;T!==null;){a=T;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,T=f;else e:for(a=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Uo(9,s)}}catch(j){oe(s,s.return,j)}if(s===a){T=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,T=b;break e}T=s.return}}if(Q=o,_t(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Io,e)}catch{}r=!0}return r}finally{K=n,We.transition=t}}return!1}function Ms(e,t,n){t=Fn(n,t),t=Ic(e,t,1),e=Mt(e,t,1),t=be(),e!==null&&(Sr(e,1,t),Fe(e,t))}function oe(e,t,n){if(e.tag===3)Ms(e,e,n);else for(;t!==null;){if(t.tag===3){Ms(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Fn(n,e),e=Tc(t,e,1),t=Mt(t,e,1),e=be(),t!==null&&(Sr(t,1,e),Fe(t,e));break}}t=t.return}}function Vf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(me&n)===n&&(ce===4||ce===3&&(me&130023424)===me&&500>le()-oa?Ht(e,0):ra|=n),Fe(e,t)}function td(e,t){t===0&&(e.mode&1?(t=Tr,Tr<<=1,!(Tr&130023424)&&(Tr=4194304)):t=1);var n=be();e=mt(e,t),e!==null&&(Sr(e,t,n),Fe(e,n))}function Hf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),td(e,n)}function Qf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),td(e,n)}var nd;nd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,Lf(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,ee&&t.flags&1048576&&lc(t,ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var o=Cn(t,we.current);bn(t,n),o=Zl(null,t,r,e,o,n);var i=Xl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,yo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ql(t),o.updater=Wo,t.stateNode=o,o._reactInternals=t,tl(t,r,e,n),t=ol(null,t,r,!0,i,n)):(t.tag=0,ee&&i&&Ol(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Kf(r),e=He(r,e),o){case 0:t=rl(null,t,r,e,n);break e;case 1:t=ys(null,t,r,e,n);break e;case 11:t=vs(null,t,r,e,n);break e;case 14:t=xs(null,t,r,He(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),rl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),ys(e,t,r,o,n);case 3:e:{if(Oc(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,pc(e,t),So(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Fn(Error(z(423)),t),t=ws(e,t,r,n,o);break e}else if(r!==o){o=Fn(Error(z(424)),t),t=ws(e,t,r,n,o);break e}else for(Pe=zt(t.stateNode.containerInfo.firstChild),Le=t,ee=!0,Ye=null,n=cc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===o){t=gt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return fc(t),e===null&&Xi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Yi(r,o)?a=null:i!==null&&Yi(r,i)&&(t.flags|=32),Rc(e,t),ke(e,t,a,n),t.child;case 6:return e===null&&Xi(t),null;case 13:return Bc(e,t,n);case 4:return Yl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),vs(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,J(bo,r._currentValue),r._currentValue=a,i!==null)if(Ge(i.value,a)){if(i.children===o.children&&!ze.current){t=gt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=dt(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var x=d.pending;x===null?u.next=u:(u.next=x.next,x.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),qi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(z(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),qi(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,bn(t,n),o=Ue(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),xs(e,t,r,o,n);case 15:return Ac(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),ro(e,t),t.tag=1,Me(r)?(e=!0,yo(t)):e=!1,bn(t,n),Lc(t,r,o),tl(t,r,o,n),ol(null,t,r,!0,e,n);case 19:return Wc(e,t,n);case 22:return _c(e,t,n)}throw Error(z(156,t.tag))};function rd(e,t){return Fu(e,t)}function Yf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new Yf(e,t,n,r)}function sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kf(e){if(typeof e=="function")return sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===El)return 11;if(e===zl)return 14}return 2}function Pt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")sa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case an:return Qt(n.children,o,i,t);case Cl:a=8,o|=8;break;case Ni:return e=Be(12,n,t,o|2),e.elementType=Ni,e.lanes=i,e;case Ci:return e=Be(13,n,t,o),e.elementType=Ci,e.lanes=i,e;case Ei:return e=Be(19,n,t,o),e.elementType=Ei,e.lanes=i,e;case fu:return Vo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case du:a=10;break e;case pu:a=9;break e;case El:a=11;break e;case zl:a=14;break e;case yt:a=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=Be(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Qt(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function Vo(e,t,n,r){return e=Be(22,e,r,t),e.elementType=fu,e.lanes=n,e.stateNode={isHidden:!1},e}function wi(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function ki(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ua(e,t,n,r,o,i,a,s,u){return e=new Jf(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ql(i),e}function Gf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function od(e){if(!e)return It;e=e._reactInternals;e:{if(en(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Me(n))return oc(e,n,t)}return t}function id(e,t,n,r,o,i,a,s,u){return e=ua(n,r,!0,e,o,i,a,s,u),e.context=od(null),n=e.current,r=be(),o=Dt(n),i=dt(r,o),i.callback=t??null,Mt(n,i,o),e.current.lanes=o,Sr(e,o,r),Fe(e,r),e}function Ho(e,t,n,r){var o=t.current,i=be(),a=Dt(o);return n=od(n),t.context===null?t.context=n:t.pendingContext=n,t=dt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(o,t,a),e!==null&&(Je(e,o,a,i),eo(e,o,a)),a}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ca(e,t){Fs(e,t),(e=e.alternate)&&Fs(e,t)}function Zf(){return null}var ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function da(e){this._internalRoot=e}Qo.prototype.render=da.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Ho(e,t,null,null)};Qo.prototype.unmount=da.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xt(function(){Ho(null,e,null,null)}),t[ft]=null}};function Qo(e){this._internalRoot=e}Qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=_u();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kt.length&&t!==0&&t<kt[n].priority;n++);kt.splice(n,0,e),n===0&&Ou(e)}};function pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ds(){}function Xf(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Po(a);i.call(d)}}var a=id(t,r,e,0,null,!1,!1,"",Ds);return e._reactRootContainer=a,e[ft]=a.current,mr(e.nodeType===8?e.parentNode:e),Xt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=Po(u);s.call(d)}}var u=ua(e,0,!1,null,null,!1,!1,"",Ds);return e._reactRootContainer=u,e[ft]=u.current,mr(e.nodeType===8?e.parentNode:e),Xt(function(){Ho(t,u,n,r)}),u}function Ko(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var u=Po(a);s.call(u)}}Ho(t,a,e,o)}else a=Xf(n,t,e,o,r);return Po(a)}Tu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kn(t.pendingLanes);n!==0&&(Dl(t,n|1),Fe(t,le()),!(Q&6)&&(Dn=le()+500,_t()))}break;case 13:Xt(function(){var r=mt(e,1);if(r!==null){var o=be();Je(r,e,1,o)}}),ca(e,1)}};Pl=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=be();Je(t,e,134217728,n)}ca(e,134217728)}};Au=function(e){if(e.tag===13){var t=Dt(e),n=mt(e,t);if(n!==null){var r=be();Je(n,e,t,r)}ca(e,t)}};_u=function(){return K};Ru=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};_i=function(e,t,n){switch(t){case"input":if(Fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ro(r);if(!o)throw Error(z(90));gu(r),Fi(r,o)}}}break;case"textarea":vu(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};Su=ia;Nu=Xt;var qf={usingClientEntryPoint:!1,Events:[Cr,dn,Ro,bu,ju,ia]},$n={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},em={bundleType:$n.bundleType,version:$n.version,rendererPackageName:$n.rendererPackageName,rendererConfig:$n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zu(e),e===null?null:e.stateNode},findFiberByHostInstance:$n.findFiberByHostInstance||Zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Io=Qr.inject(em),nt=Qr}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qf;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pa(t))throw Error(z(200));return Gf(e,t,null,n)};Te.createRoot=function(e,t){if(!pa(e))throw Error(z(299));var n=!1,r="",o=ld;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ua(e,1,!1,null,null,n,!1,r,o),e[ft]=t.current,mr(e.nodeType===8?e.parentNode:e),new da(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=zu(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Xt(e)};Te.hydrate=function(e,t,n){if(!Yo(t))throw Error(z(200));return Ko(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!pa(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=ld;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=id(t,null,e,1,n??null,o,!1,i,a),e[ft]=t.current,mr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Qo(t)};Te.render=function(e,t,n){if(!Yo(t))throw Error(z(200));return Ko(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Yo(e))throw Error(z(40));return e._reactRootContainer?(Xt(function(){Ko(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Te.unstable_batchedUpdates=ia;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yo(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Ko(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ad)}catch(e){console.error(e)}}ad(),au.exports=Te;var tm=au.exports,Ps=tm;ji.createRoot=Ps.createRoot,ji.hydrateRoot=Ps.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sd=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:a,...s},u)=>w.createElement("svg",{ref:u,...rm,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:sd("lucide",o),...s},[...a.map(([d,x])=>w.createElement(d,x)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=(e,t)=>{const n=w.forwardRef(({className:r,...o},i)=>w.createElement(om,{ref:i,iconNode:t,className:sd(`lucide-${nm(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=ot("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=ot("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=ot("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=ot("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=ot("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=ot("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=ot("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=ot("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=ot("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=ot("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),lm=`

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
`,am={Mon:{num:16,rows:[["6:00 AM","Morning","preferred",0],["7:00 AM","Morning","reserved",1],["9:30 AM","Morning","open",0],["12:00 PM","Afternoon","open",0],["5:30 PM","Evening","preferred",0],["6:30 PM","Evening","reserved",2]]},Tue:{num:17,rows:[["6:30 AM","Morning","preferred",0],["8:00 AM","Morning","open",0],["11:00 AM","Morning","reserved",0],["1:00 PM","Afternoon","open",0],["5:00 PM","Evening","preferred",0],["7:00 PM","Evening","open",0]]},Wed:{num:18,rows:[["6:00 AM","Morning","reserved",3],["7:30 AM","Morning","preferred",0],["10:00 AM","Morning","open",0],["2:00 PM","Afternoon","open",0],["6:00 PM","Evening","preferred",0]]},Thu:{num:19,rows:[["6:30 AM","Morning","preferred",0],["9:00 AM","Morning","open",0],["12:30 PM","Afternoon","reserved",1],["5:30 PM","Evening","preferred",0],["7:00 PM","Evening","open",0]]},Fri:{num:20,rows:[["6:00 AM","Morning","preferred",0],["8:30 AM","Morning","open",0],["11:30 AM","Morning","reserved",0],["4:30 PM","Evening","open",0],["6:00 PM","Evening","preferred",0]]},Sat:{num:21,rows:[["7:00 AM","Morning","preferred",0],["8:30 AM","Morning","preferred",0],["10:00 AM","Morning","open",0],["11:30 AM","Morning","reserved",2]]}},on=["Mon","Tue","Wed","Thu","Fri","Sat"],Ts=["Morning","Afternoon","Evening"],sm=["January","February","March","April","May","June","July","August","September","October","November","December"],As=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function um(){const e={};return on.forEach(t=>{e[t]=am[t].rows.map((n,r)=>({id:`${t}-${r}`,day:t,time:n[0],period:n[1],tier:n[2],waitlist:n[3]}))}),e}const ir={preferred:{label:"Andrea's pick",dot:"#F5841F",icon:ga},open:{label:"Open",dot:"#FFFFFF",icon:ud},reserved:{label:"Reserved",dot:"#3A3A40",icon:cd}};function cm({liveSlots:e=null,loading:t=!1,onAction:n=null,errorMsg:r=null,onErrorDismiss:o=null}){const i=w.useMemo(um,[]),a=e??i,[s,u]=w.useState("Mon"),[d,x]=w.useState(0),[m,g]=w.useState({}),[C,N]=w.useState({}),[E,A]=w.useState(null),[p,c]=w.useState(null);w.useEffect(()=>{if(!e)return;const M={};Object.values(e).flat().forEach(_=>{_.userBookingId&&(M[_.id]=_)}),g(M)},[e]),w.useEffect(()=>{r&&(g(M=>{const _={...M};return delete _[r.slotId],_}),A(r.message),o==null||o())},[r]),w.useEffect(()=>{if(!E)return;const M=setTimeout(()=>A(null),2600);return()=>clearTimeout(M)},[E]),w.useEffect(()=>{if(!n)return;const M=new Date,_=M.getDay(),h=new Date(M);h.setDate(M.getDate()-(_===0?6:_-1)+d*7),h.setHours(0,0,0,0),n({type:"weekChange",mondayISO:h.toISOString()})},[d]);const f=new Date,b=(a[s]||[]).filter(M=>{var h;const _=((h=M.slotData)==null?void 0:h.startDate)||M.startDate;return!_||new Date(_)>f}),j=w.useMemo(()=>{const M={};return Ts.forEach(_=>{M[_]=b.filter(h=>h.period===_)}),M},[b]),S=w.useMemo(()=>{const M=new Date,_=M.getDay(),h=new Date(M);h.setDate(M.getDate()-(_===0?6:_-1)+d*7);const F={};return on.forEach((y,I)=>{const O=new Date(h);O.setDate(h.getDate()+I),F[y]={num:O.getDate(),month:O.getMonth(),year:O.getFullYear()}}),F},[d]),D=w.useMemo(()=>{const M=S[on[0]],_=S[on[on.length-1]];return M.month===_.month?`${sm[M.month]} ${M.year}`:`${As[M.month]} - ${As[_.month]} ${_.year}`},[S]),P=M=>A(M);function W(M){g(_=>({..._,[M.id]:M})),N(_=>{const h={..._};return delete h[M.id],h}),P(`Booked - ${M.day}, ${M.time}`),n==null||n({type:"book",slot:M})}function v(M){if(M.tier==="open"){const _=a[M.day].find(h=>h.tier==="preferred"&&!m[h.id]);if(_){c({slot:M,alt:_});return}}W(M)}function L(M){const _=(M.waitlist||0)+1;N(h=>({...h,[M.id]:{slot:M,pos:_}})),P(`You're #${_} on the waitlist - ${M.day}, ${M.time}`),n==null||n({type:"waitlist",slot:M})}function B(M){g(_=>{const h={..._};return delete h[M],h}),P("Booking canceled"),n==null||n({type:"cancel",slotId:M})}function $(M){N(_=>{const h={..._};return delete h[M],h}),P("Left the waitlist"),n==null||n({type:"leaveWaitlist",slotId:M})}const G=Object.values(m),he=Object.values(C);return l.jsxs("div",{className:"ab",children:[l.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');"}),l.jsx("style",{children:lm}),l.jsxs("div",{className:"ab-wrap",children:[l.jsxs("h1",{className:"ab-h1",children:["Book your ",l.jsx("span",{className:"acc",children:"week."})]}),l.jsx("p",{className:"ab-sub",children:"Reduce pain, build strength, move better - with Andrea in Lake Ridge. Highlighted times are the ones she recommends; booking them keeps her week flowing so there's more room for everyone."}),l.jsxs("div",{className:"ab-legend",children:[l.jsxs("span",{className:"ab-key",children:[l.jsx("span",{className:"ab-dot",style:{background:ir.preferred.dot}}),"Preferred - recommended"]}),l.jsxs("span",{className:"ab-key",children:[l.jsx("span",{className:"ab-dot",style:{background:ir.open.dot}}),"Open - available, not preferred"]}),l.jsxs("span",{className:"ab-key",children:[l.jsx("span",{className:"ab-dot",style:{background:ir.reserved.dot}}),"Reserved - join waitlist"]})]}),l.jsxs("div",{className:"ab-week-hd",children:[l.jsx("div",{className:"ab-week-month",children:D}),l.jsx("div",{className:"ab-week-div"}),l.jsxs("div",{className:"ab-week-nav",children:[l.jsx("button",{className:"ab-week-arr",onClick:()=>x(M=>M-1),"aria-label":"Previous week",children:l.jsx(ma,{size:18})}),l.jsx("div",{className:"ab-days",children:on.map(M=>{const _=(a[M]||[]).filter(y=>{var O;const I=((O=y.slotData)==null?void 0:O.startDate)||y.startDate;return!I||new Date(I)>f}),h=_.some(y=>y.tier==="preferred"),F=_.length>0&&!h&&_.every(y=>y.tier==="reserved");return l.jsxs("div",{className:`ab-day${M===s?" on":""}`,role:"button",tabIndex:0,onClick:()=>u(M),onKeyDown:y=>y.key==="Enter"&&u(M),children:[l.jsx("div",{className:"ab-day-dow",children:M}),l.jsx("div",{className:"ab-day-num",children:S[M].num}),(h||F)&&l.jsx("span",{className:"ab-day-pref",style:F?{background:"#555558"}:void 0})]},M)})}),l.jsx("button",{className:"ab-week-arr",onClick:()=>x(M=>M+1),"aria-label":"Next week",children:l.jsx(Yt,{size:18})})]}),l.jsx("div",{className:"ab-week-div",style:{marginTop:14}})]}),t?l.jsx("div",{className:"ab-loading",children:"Loading your schedule…"}):Ts.map(M=>j[M].length?l.jsxs("div",{children:[l.jsx("div",{className:"ab-period",children:M}),j[M].map(_=>l.jsx(dm,{slot:_,mine:!!m[_.id],wait:C[_.id],onBook:()=>v(_),onWaitlist:()=>L(_),onCancel:()=>B(_.id),onLeave:()=>$(_.id)},_.id))]},M):null)]}),l.jsx("div",{className:"ab-foot",children:l.jsxs("button",{className:"ab-foot-btn",onClick:()=>n==null?void 0:n({type:"mySchedule"}),children:[l.jsx("span",{className:"ab-foot-btn-label",children:"My schedule"}),G.length+he.length>0?l.jsx("span",{className:"ab-foot-btn-count",children:G.length+he.length}):l.jsx("span",{style:{color:"var(--muted)",fontSize:13,fontWeight:400},children:"Nothing booked yet"}),l.jsx(Yt,{size:16,style:{color:"var(--muted)"}})]})}),E&&l.jsxs("div",{className:"ab-toast",children:[l.jsx(fa,{size:16,className:"ic"}),E]}),p&&l.jsx("div",{className:"ab-scrim",onClick:()=>c(null),children:l.jsxs("div",{className:"ab-modal",onClick:M=>M.stopPropagation(),children:[l.jsx("div",{className:"ab-modal-ico",children:l.jsx(ga,{size:22})}),l.jsxs("h3",{children:["A ",l.jsx("span",{className:"acc",children:"preferred"})," time close by"]}),l.jsxs("p",{children:[l.jsx("b",{children:p.slot.time})," works, but Andrea has an open recommended slot at ",l.jsx("b",{children:p.alt.time})," the same day. Choosing it helps her fit more clients in."]}),l.jsxs("div",{className:"ab-modal-acts",children:[l.jsxs("button",{className:"ab-btn ab-btn-pref",onClick:()=>{W(p.alt),c(null)},children:["Book ",p.alt.time," instead"]}),l.jsxs("button",{className:"ab-btn ab-btn-line",onClick:()=>{W(p.slot),c(null)},children:["Keep ",p.slot.time]})]})]})})]})}function dm({slot:e,mine:t,wait:n,onBook:r,onWaitlist:o,onCancel:i,onLeave:a}){const s=t?"mine":e.tier,u=t?fa:ir[e.tier].icon,d=t?"Your session":ir[e.tier].label;return l.jsxs("div",{className:`ab-slot ${s}`,children:[l.jsx("div",{className:"ab-ico",children:l.jsx(u,{size:18})}),l.jsxs("div",{className:"ab-body",children:[l.jsx("div",{className:"ab-eye",children:d}),l.jsx("div",{className:"ab-time",children:e.time}),l.jsx("div",{className:"ab-meta",children:t?`Confirmed · ${e.service||`${e.duration||60} min`}`:e.tier==="reserved"?n?l.jsxs("span",{className:"ab-wl",children:[l.jsx(Is,{size:12})," You're #",n.pos," on the waitlist"]}):l.jsxs("span",{className:"ab-wl",children:[l.jsx(Is,{size:12})," ",e.waitlist>0?`${e.waitlist} waiting`:"Taken - be first to wait"]}):e.service||"Personal Training · 60 min"})]}),l.jsx("div",{className:"ab-act",children:t?l.jsxs("button",{className:"ab-btn ab-btn-pill",onClick:i,children:[l.jsx(ha,{size:14})," Cancel"]}):e.tier==="reserved"?n?l.jsx("button",{className:"ab-btn ab-btn-wait",onClick:a,children:"Leave waitlist"}):l.jsx("button",{className:"ab-btn ab-btn-wait",onClick:o,children:"Join waitlist"}):e.tier==="preferred"?l.jsxs("button",{className:"ab-btn ab-btn-pref",onClick:r,children:["Book ",l.jsx(Yt,{size:14,style:{verticalAlign:"-2px"}})]}):l.jsx("button",{className:"ab-btn ab-btn-open",onClick:r,children:"Book"})})]})}const pm=`

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
`,Vn=["Mon","Tue","Wed","Thu","Fri","Sat"],fm=["January","February","March","April","May","June","July","August","September","October","November","December"],_s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],mm=["6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM"],ao=["Personal Training - 60 min","Personal Training - 45 min","Personal Training - 30 min","Mobility Training","Phone Consultation","Intro Offer - Wellness Consultation"],hl=[{key:"preferred",label:"Preferred",icon:ga,dot:"#F5841F"},{key:"np",label:"Non-pref",icon:ud,dot:"#FFFFFF"},{key:"reserved",label:"Reserved",icon:cd,dot:"#6A665F"}],gm=Object.fromEntries(hl.map(e=>[e.key,e]));function Rs(e){const t=e.match(/(\d+):(\d+)\s*(AM|PM)/);let n=+t[1]%12;return t[3]==="PM"&&(n+=12),n*60+ +t[2]}let vl=100;function hm(){return{Mon:[],Tue:[],Wed:[],Thu:[],Fri:[],Sat:[]}}function vm(){const e=(t,n,r=ao[0])=>({id:++vl,time:t,tier:n,service:r});return{Mon:[e("6:00 AM","preferred"),e("9:30 AM","np"),e("5:30 PM","preferred"),e("7:00 AM","reserved")],Tue:[e("6:30 AM","preferred"),e("1:00 PM","np"),e("5:00 PM","preferred")],Wed:[e("7:30 AM","preferred"),e("10:00 AM","np"),e("6:00 PM","preferred")],Thu:[e("6:30 AM","preferred"),e("9:00 AM","np"),e("5:30 PM","preferred")],Fri:[e("6:00 AM","preferred"),e("4:30 PM","np")],Sat:[e("7:00 AM","preferred"),e("8:30 AM","preferred")]}}function xm({livePrefs:e=null,loading:t=!1,onAction:n,saving:r=!1}){const[o,i]=w.useState(vm),[a,s]=w.useState("Mon"),[u,d]=w.useState(!1),[x,m]=w.useState(""),[g,C]=w.useState(0);w.useEffect(()=>{if(e===null)return;const v=hm();e.forEach(L=>{v[L.dayOfWeek]&&v[L.dayOfWeek].push({id:++vl,time:L.time,tier:L.tier==="open"?"np":L.tier,service:L.service||ao[0]})}),i(v)},[e]);const N=w.useMemo(()=>{const v=new Date,L=v.getDay(),B=new Date(v);B.setDate(v.getDate()-(L===0?6:L-1)+g*7);const $={};return Vn.forEach((G,he)=>{const M=new Date(B);M.setDate(B.getDate()+he),$[G]={num:M.getDate(),month:M.getMonth(),year:M.getFullYear()}}),$},[g]),E=w.useMemo(()=>{const v=N[Vn[0]],L=N[Vn[Vn.length-1]];return v.month===L.month?`${fm[v.month]} ${v.year}`:`${_s[v.month]} - ${_s[L.month]} ${L.year}`},[N]),A=w.useMemo(()=>[...o[a]].sort((v,L)=>Rs(v.time)-Rs(L.time)),[o,a]),p=w.useMemo(()=>{const v={preferred:0,np:0,reserved:0};return o[a].forEach(L=>v[L.tier]++),v},[o,a]),c=new Set(o[a].map(v=>v.time)),f=mm.filter(v=>!c.has(v));function b(v,L){i(B=>({...B,[a]:B[a].map($=>$.id===v?{...$,tier:L}:$)}))}function j(v,L){i(B=>({...B,[a]:B[a].map($=>$.id===v?{...$,service:L}:$)}))}function S(v){i(L=>({...L,[a]:L[a].filter(B=>B.id!==v)}))}function D(v){i(L=>({...L,[a]:[...L[a],{id:++vl,time:v,tier:"preferred",service:ao[0]}]})),d(!1),m("")}function P(){if(!x)return;const[v,L]=x.split(":").map(Number),B=v<12?"AM":"PM",G=`${v%12||12}:${String(L).padStart(2,"0")} ${B}`;c.has(G)||D(G)}function W(){const v=[];Object.entries(o).forEach(([L,B])=>{B.forEach($=>{v.push({dayOfWeek:L,time:$.time,tier:$.tier==="np"?"open":$.tier,service:$.service})})}),n==null||n({type:"savePrefs",items:v})}return l.jsxs("div",{className:"fg",children:[l.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');"}),l.jsx("style",{children:pm}),l.jsxs("div",{className:"fg-wrap",children:[l.jsx("h1",{className:"fg-h1",children:"Set your availability"}),l.jsx("p",{className:"fg-sub",children:"Add the times you'll take clients, then tag each one. Preferred times get highlighted to clients; reserved times are held and can't be booked."}),l.jsx("div",{className:"fg-legend",children:hl.map(v=>l.jsxs("span",{className:"fg-key",children:[l.jsx("span",{className:"fg-dot",style:{background:v.dot}}),v.key==="preferred"&&"Preferred — recommended",v.key==="np"&&"Non-preferred — available",v.key==="reserved"&&"Reserved — held"]},v.key))}),l.jsxs("div",{className:"fg-week-hd",children:[l.jsx("div",{className:"fg-week-month",children:E}),l.jsx("div",{className:"fg-week-div"}),l.jsxs("div",{className:"fg-week-nav",children:[l.jsx("button",{className:"fg-week-arr",onClick:()=>C(v=>v-1),"aria-label":"Previous week",children:l.jsx(ma,{size:18})}),l.jsx("div",{className:"fg-days",children:Vn.map(v=>l.jsxs("div",{className:`fg-day${v===a?" on":""}`,role:"button",tabIndex:0,onClick:()=>{s(v),d(!1)},onKeyDown:L=>L.key==="Enter"&&s(v),children:[l.jsx("div",{className:"fg-day-dow",children:v}),l.jsx("div",{className:"fg-day-num",children:N[v].num}),l.jsxs("div",{className:"fg-day-c",children:[o[v].length," slot",o[v].length!==1?"s":""]})]},v))}),l.jsx("button",{className:"fg-week-arr",onClick:()=>C(v=>v+1),"aria-label":"Next week",children:l.jsx(Yt,{size:18})})]}),l.jsx("div",{className:"fg-week-div",style:{marginTop:14}})]}),l.jsxs("div",{className:"fg-tally",children:[l.jsxs("span",{children:[l.jsx("i",{style:{color:"#F5841F"},children:"●"})," ",l.jsx("b",{children:p.preferred})," preferred"]}),l.jsxs("span",{children:[l.jsx("i",{style:{color:"#FFFFFF"},children:"●"})," ",l.jsx("b",{children:p.np})," non-pref"]}),l.jsxs("span",{children:[l.jsx("i",{style:{color:"#6A665F"},children:"●"})," ",l.jsx("b",{children:p.reserved})," reserved"]})]}),t?l.jsx("div",{className:"fg-empty",style:{padding:"40px 0"},children:"Loading your schedule…"}):l.jsxs(l.Fragment,{children:[A.length===0&&!u&&l.jsxs("div",{className:"fg-empty",children:["No times set for ",a," yet. Add one below."]}),A.map(v=>{const L=gm[v.tier].icon;return l.jsxs("div",{className:`fg-blk ${v.tier}`,children:[l.jsxs("div",{className:"fg-blk-top",children:[l.jsxs("span",{className:"fg-blk-time",children:[l.jsx("span",{className:"fg-blk-ic",children:l.jsx(L,{size:15})}),v.time]}),l.jsx("button",{className:"fg-rm",onClick:()=>S(v.id),"aria-label":"Remove time",children:l.jsx(ha,{size:18})})]}),l.jsx("div",{className:"fg-seg",role:"group","aria-label":"Tier",children:hl.map(B=>{const $=B.icon,G=v.tier===B.key;return l.jsxs("button",{className:`${G?"on":""} ${B.key}`,onClick:()=>b(v.id,B.key),children:[l.jsx($,{size:13})," ",B.label]},B.key)})}),l.jsx("div",{className:"fg-svc",children:l.jsx("select",{value:v.service,onChange:B=>j(v.id,B.target.value),"aria-label":"Service",children:ao.map(B=>l.jsx("option",{value:B,children:B},B))})})]},v.id)}),u?l.jsxs("div",{className:"fg-palette",children:[l.jsxs("div",{className:"fg-palette-h",children:[l.jsx("span",{children:"Pick a time to add"}),l.jsx("button",{onClick:()=>d(!1),children:"Cancel"})]}),f.length===0?l.jsxs("div",{className:"fg-empty",style:{padding:"4px 0"},children:["Every preset time is already added for ",a,"."]}):l.jsx("div",{className:"fg-times",children:f.map(v=>l.jsx("button",{className:"fg-tchip",onClick:()=>D(v),children:v},v))}),l.jsxs("div",{className:"fg-custom",children:[l.jsx("span",{className:"fg-custom-label",children:"Custom"}),l.jsx("input",{type:"time",value:x,onChange:v=>m(v.target.value),onKeyDown:v=>v.key==="Enter"&&P()}),l.jsx("button",{className:"fg-custom-add",disabled:!x,onClick:P,children:"Add"})]})]}):l.jsxs("button",{className:"fg-add",onClick:()=>d(!0),children:[l.jsx(im,{size:17})," Add a time"]})]})]}),l.jsx("div",{className:"fg-save",children:l.jsxs("div",{className:"fg-save-in",children:[l.jsx("span",{className:"fg-save-t",children:"Changes apply to all weeks — clients see preferred times highlighted"}),l.jsxs("button",{className:"fg-btn",disabled:r,onClick:W,children:[l.jsx(fa,{size:16})," ",r?"Saving…":"Save week"]})]})})]})}const va="/assets/logo.png",ym=window.self!==window.top,wm=`
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
`;function km({slot:e=null}){const[t,n]=w.useState("idle"),[r,o]=w.useState("");w.useEffect(()=>{const u=d=>{var x;if((x=d.data)!=null&&x.type&&(d.data.type==="abate-confirm-success"&&n("success"),d.data.type==="abate-confirm-error")){const m=d.data.message||"",g=m.toLowerCase().includes("plan")||m.toLowerCase().includes("pricing")?"No active session plan found. Please contact Andrea to update your plan.":m||"Could not confirm booking. Please try again.";o(g),n("error")}};return window.addEventListener("message",u),()=>window.removeEventListener("message",u)},[]);const i=()=>{n("loading"),o(""),ym&&window.parent.postMessage({type:"abate-confirm"},"*")},a=()=>{n("idle"),o("")},s=t==="loading"?"Booking…":"Confirm my session →";return l.jsxs("div",{className:"cv",children:[l.jsx("style",{children:wm}),l.jsx("div",{className:"cv-header",children:l.jsx("img",{src:va,alt:"Abate Wellness",className:"cv-logo"})}),l.jsx("hr",{className:"cv-rule"}),l.jsx("div",{className:"cv-body",children:t==="success"?l.jsxs("div",{className:"cv-success",children:[l.jsx("div",{className:"cv-success-icon",children:"✓"}),l.jsxs("div",{className:"cv-success-h",children:["You're ",l.jsx("em",{children:"booked"})]}),l.jsx("div",{className:"cv-success-sub",children:"Andrea will see you then. Heading back to your schedule…"})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"cv-heading",children:["Confirm your ",l.jsx("em",{children:"session"})]}),e!=null&&e.service?l.jsxs("div",{className:"cv-card",children:[l.jsxs("div",{className:"cv-card-top",children:[l.jsx("div",{className:"cv-card-eyebrow",children:"Session details"}),l.jsx("div",{className:"cv-card-service",children:e.service})]}),l.jsxs("div",{className:"cv-card-bottom",children:[e.day&&l.jsxs("div",{className:"cv-card-item",children:[l.jsx("div",{className:"cv-card-item-label",children:"Date"}),l.jsx("div",{className:"cv-card-item-value",children:e.day})]}),e.time&&l.jsxs("div",{className:"cv-card-item",children:[l.jsx("div",{className:"cv-card-item-label",children:"Time"}),l.jsx("div",{className:"cv-card-item-value",children:e.time})]})]})]}):l.jsx("div",{className:"cv-loading-slot",children:"Loading session details…"}),t==="error"&&l.jsx("div",{className:"cv-error",children:r}),t==="error"?l.jsx("button",{className:"cv-btn",onClick:a,children:"Try again"}):l.jsx("button",{className:"cv-btn",onClick:i,disabled:t==="loading",children:s}),l.jsx("div",{className:"cv-policy",children:"By confirming you agree to Abate Wellness's cancellation policy."})]})})]})}const Yr=window.self!==window.top,bm=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,jm=e=>bm.test(e||""),Sm=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],bi=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function Nm(e){const t=new Date(e),n=t.getDay();return t.setDate(t.getDate()-(n===0?6:n-1)),t.setHours(0,0,0,0),t}function Kr(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function Cm(e){return e.toLocaleDateString("en-US",{month:"long",year:"numeric"})}function Em(e){return new Date(e).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function zm(e){return new Date(e).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function Os(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const Mm=`
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
`;function Fm({sessions:e=null,onBook:t=null}){const[n,r]=w.useState(e),[o,i]=w.useState(null),[a,s]=w.useState("sessions"),u=(()=>{const h=new Date;return h.setHours(0,0,0,0),h})(),[d,x]=w.useState(()=>Nm(new Date)),[m,g]=w.useState(null),[C,N]=w.useState(!1),[E,A]=w.useState({}),[p,c]=w.useState(!1),[f,b]=w.useState(!1),[j,S]=w.useState(!1);w.useEffect(()=>{e!==null&&r(e)},[e]),w.useEffect(()=>{const h=F=>{var y,I,O;if((y=F.data)!=null&&y.type)switch(F.data.type){case"abate-schedule-data":r(F.data.sessions||[]);break;case"abate-schedule-cancelled":r(q=>(q||[]).filter(Ne=>Ne._id!==F.data.recordId)),i(null);break;case"abate-schedule-cancel-error":i(null);break;case"abate-auto-prefs-data":N(((I=F.data.prefs)==null?void 0:I.enabled)||!1),A(((O=F.data.prefs)==null?void 0:O.slots)||{}),c(!0);break;case"abate-auto-prefs-saved":b(!1),S(!0),setTimeout(()=>S(!1),3e3);break}};return window.addEventListener("message",h),()=>window.removeEventListener("message",h)},[]),w.useEffect(()=>{a==="auto"&&!p&&Yr&&window.parent.postMessage({type:"abate-auto-prefs-get"},"*")},[a,p]);const D=h=>{i(h._id),Yr&&window.parent.postMessage({type:"abate-schedule-cancel",recordId:h._id},"*")},P=()=>{Yr?window.parent.postMessage({type:"abate-schedule-book"},"*"):t&&t()},W=()=>{b(!0),Yr&&window.parent.postMessage({type:"abate-auto-prefs-save",prefs:{enabled:C,slots:E}},"*")},v=h=>{A(F=>{const y={...F};return y[h]!==void 0?delete y[h]:y[h]="",y})},L=(h,F)=>A(y=>({...y,[h]:F})),B=Array.from({length:7},(h,F)=>Kr(d,F)),$=(n||[]).filter(h=>{const F=new Date(h.startDate);return F>=d&&F<Kr(d,7)}),G=$.reduce((h,F)=>{const y=new Date(F.startDate),I=B.findIndex(O=>Os(O,y));return I>=0&&(h[I]=h[I]||[],h[I].push(F)),h},{}),he=(m!==null?G[m]||[]:$).slice().sort((h,F)=>new Date(h.startDate)-new Date(F.startDate)),M=(n||[]).length,_=n===null;return l.jsxs("div",{className:"ms",children:[l.jsx("style",{children:Mm}),l.jsx("div",{className:"ms-header",children:l.jsx("img",{src:va,alt:"Abate Wellness",className:"ms-logo"})}),l.jsx("hr",{className:"ms-rule"}),l.jsxs("div",{className:"ms-title-row",children:[l.jsxs("h1",{className:"ms-title",children:["Your ",l.jsx("em",{children:"schedule"})]}),!_&&M>0&&l.jsxs("span",{className:"ms-title-count",children:[M," upcoming"]})]}),l.jsxs("div",{className:"ms-tabs",children:[l.jsxs("button",{className:`ms-tab${a==="sessions"?" active":""}`,onClick:()=>s("sessions"),children:["My sessions",!_&&M>0&&l.jsx("span",{className:"ms-tab-badge",children:M})]}),l.jsx("button",{className:`ms-tab${a==="auto"?" active":""}`,onClick:()=>s("auto"),children:"Auto-schedule"})]}),a==="sessions"&&l.jsx(l.Fragment,{children:_?l.jsx("div",{className:"ms-loading",children:"Loading your schedule…"}):M===0?l.jsxs("div",{className:"ms-empty",children:[l.jsx("div",{className:"ms-empty-icon",children:l.jsx(Ls,{size:24})}),l.jsx("div",{className:"ms-empty-h",children:"No upcoming sessions"}),l.jsx("div",{className:"ms-empty-sub",children:"Book your first session to get started."}),l.jsx("div",{className:"ms-book-wrap",style:{padding:"0",marginTop:"4px"},children:l.jsxs("button",{className:"ms-book-btn",onClick:P,children:["Book a session ",l.jsx(Yt,{size:16})]})})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"ms-week-nav",children:[l.jsx("button",{className:"ms-week-arrow",onClick:()=>{x(h=>Kr(h,-7)),g(null)},children:l.jsx(ma,{size:16})}),l.jsx("span",{className:"ms-week-month",children:Cm(d)}),l.jsx("button",{className:"ms-week-arrow",onClick:()=>{x(h=>Kr(h,7)),g(null)},children:l.jsx(Yt,{size:16})})]}),l.jsx("div",{className:"ms-days",children:B.map((h,F)=>{var y;return l.jsxs("div",{className:`ms-day${Os(h,u)?" today":""}${m===F?" sel":""}`,onClick:()=>g(m===F?null:F),children:[l.jsx("span",{className:"ms-day-abbr",children:Sm[F]}),l.jsx("span",{className:"ms-day-num",children:h.getDate()}),((y=G[F])==null?void 0:y.length)>0&&l.jsx("span",{className:"ms-day-dot"})]},F)})}),he.length===0?l.jsxs("div",{className:"ms-empty",style:{marginTop:32},children:[l.jsx("div",{className:"ms-empty-icon",children:l.jsx(Ls,{size:24})}),l.jsx("div",{className:"ms-empty-h",children:m!==null?`No sessions on ${bi[m]}`:"No sessions this week"}),l.jsx("div",{className:"ms-empty-sub",children:"Use the arrows to browse other weeks."})]}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"ms-section",children:m!==null?bi[m]:"This week"}),l.jsx("div",{className:"ms-list",children:he.map(h=>l.jsxs("div",{className:"ms-card",children:[l.jsxs("div",{className:"ms-card-body",children:[l.jsx("div",{className:"ms-card-date",children:zm(h.startDate)}),l.jsx("div",{className:"ms-card-time",children:Em(h.startDate)}),h.service&&!jm(h.service)&&l.jsx("div",{className:"ms-card-svc",children:h.service})]}),l.jsxs("button",{className:"ms-cancel-btn",onClick:()=>D(h),disabled:o===h._id,children:[l.jsx(ha,{size:13}),o===h._id?"Cancelling…":"Cancel"]})]},h._id))})]}),l.jsx("div",{className:"ms-book-wrap",children:l.jsxs("button",{className:"ms-book-btn",onClick:P,children:["Book another session ",l.jsx(Yt,{size:16})]})})]})}),a==="auto"&&l.jsxs("div",{className:"ms-auto",children:[l.jsx("p",{className:"ms-auto-desc",children:"Choose which days and times you train each week. Once saved and enabled, those slots will be automatically reserved for you — no manual booking needed."}),l.jsxs("div",{className:`ms-auto-master${C?" on":""}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"ms-auto-master-label",children:"Enable auto-schedule"}),l.jsx("div",{className:"ms-auto-master-sub",children:C?"On — your recurring slots will be reserved each week":"Off — you book each session manually"})]}),l.jsx("button",{className:"ms-toggle","data-on":String(C),onClick:()=>N(h=>!h)})]}),l.jsx("div",{className:"ms-auto-days",children:bi.map((h,F)=>{const y=E[F]!==void 0;return l.jsxs("div",{className:`ms-auto-row${y?" on":""}${C?"":" disabled"}`,children:[l.jsx("button",{className:"ms-toggle","data-on":String(y),onClick:()=>v(F)}),l.jsx("span",{className:"ms-auto-day-name",children:h}),y?l.jsx("input",{type:"time",className:"ms-auto-time-input",value:E[F]||"",onChange:I=>L(F,I.target.value)}):l.jsx("span",{className:"ms-auto-time-off",children:"— : —"})]},F)})}),l.jsxs("div",{className:"ms-auto-save",children:[l.jsx("button",{className:"ms-save-btn",onClick:W,disabled:f,children:f?"Saving…":"Save schedule"}),j&&l.jsx("span",{className:"ms-saved-label",children:"✓ Saved"})]})]})]})}const Dm=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Bs=["MON","TUE","WED","THU","FRI","SAT","SUN"],Ws=[{emoji:"😊",label:"Great",value:5},{emoji:"🙂",label:"Good",value:4},{emoji:"😐",label:"Okay",value:3},{emoji:"😟",label:"Meh",value:2},{emoji:"😫",label:"Bad",value:1}],Us=[{id:1,name:"Probiotic Smoothie",time:"5 min",tag:"gut-friendly",emoji:"🥤"},{id:2,name:"Kimchi Rice Bowl",time:"15 min",tag:"fermented",emoji:"🍚"},{id:3,name:"Bone Broth Soup",time:"30 min",tag:"gut-healing",emoji:"🍲"},{id:4,name:"Overnight Oats",time:"5 min",tag:"prebiotic",emoji:"🥣"},{id:5,name:"Miso Salmon",time:"20 min",tag:"fermented",emoji:"🍣"},{id:6,name:"Ginger Turmeric Tea",time:"5 min",tag:"anti-inflammatory",emoji:"☕"},{id:7,name:"Greek Yogurt Bowl",time:"3 min",tag:"probiotic",emoji:"🫙"},{id:8,name:"Sauerkraut Wrap",time:"10 min",tag:"fermented",emoji:"🌯"}];function $s(){const e=new Date().getDay();return e===0?6:e-1}function Pm({score:e}){const o=N=>{const E=Math.PI*(1-N);return[+(105+70*Math.cos(E)).toFixed(2),+(88-70*Math.sin(E)).toFixed(2)]},[i,a]=o(0),[s,u]=o(1),d=Math.max(.005,Math.min(.995,e/100)),[x,m]=o(d),g=(N,E,A,p)=>`M ${N} ${E} A 70 70 0 0 1 ${A} ${p}`,C=e<34?"#FF453A":e<67?"#FFD60A":"#30D158";return l.jsxs("div",{className:"fj-gauge-wrap",children:[l.jsx("div",{className:"fj-gauge-label",children:"Gut Health"}),l.jsxs("svg",{viewBox:"0 0 210 136",style:{display:"block",width:"100%"},children:[l.jsx("path",{d:g(i,a,s,u),stroke:"#252527",strokeWidth:"14",fill:"none",strokeLinecap:"round"}),l.jsx("path",{d:g(i,a,x,m),stroke:C,strokeWidth:"14",fill:"none",strokeLinecap:"round"}),l.jsx("line",{x1:105,y1:88,x2:x,y2:m,stroke:"rgba(255,255,255,.85)",strokeWidth:"2.5",strokeLinecap:"round"}),l.jsx("circle",{cx:105,cy:88,r:"5",fill:"#fff"}),l.jsx("text",{x:105,y:118,textAnchor:"middle",fill:"#fff",fontSize:"24",fontWeight:"700",fontFamily:"Inter,sans-serif",children:e}),l.jsx("text",{x:105,y:130,textAnchor:"middle",fill:"#9C988F",fontSize:"7.5",fontFamily:"Inter,sans-serif",letterSpacing:"2",children:"GUT SCORE"}),l.jsx("text",{x:i,y:a+20,textAnchor:"middle",fill:"#FF453A",fontSize:"9",fontFamily:"Inter,sans-serif",fontWeight:"700",children:"Poor"}),l.jsx("text",{x:s,y:u+20,textAnchor:"middle",fill:"#30D158",fontSize:"9",fontFamily:"Inter,sans-serif",fontWeight:"700",children:"Good"})]})]})}const Lm=`
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
`;function Im(){const[e,t]=w.useState(""),[n,r]=w.useState($s()),[o,i]=w.useState(3),[a,s]=w.useState({}),[u,d]=w.useState(null),[x,m]=w.useState(0),[g,C]=w.useState(""),[N,E]=w.useState(""),[A,p]=w.useState(!1),[c,f]=w.useState(!1),b=w.useRef(null),j=w.useRef(null),S=[...new Set(Us.map(y=>y.tag))];iu.useEffect(()=>{const y=I=>{j.current&&!j.current.contains(I.target)&&f(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[]);const D=Us.filter(y=>{const I=g.toLowerCase();return(!I||y.name.toLowerCase().includes(I))&&(!N||y.tag===N)}),P=4,W=Math.ceil(D.length/P),v=D.slice(x*P,(x+1)*P),L=w.useRef(null),B=()=>{const y=e.trim();if(!y)return;const I={id:Date.now(),text:y,feel:o,fromRecipe:!1};s(O=>({...O,[n]:[...O[n]||[],I]})),t("")},$=(y,I)=>{s(O=>({...O,[y]:(O[y]||[]).filter(q=>q.id!==I)}))},G=y=>{const I=L.current;if(!I)return;const O={id:Date.now(),text:I.name,feel:3,fromRecipe:!0};s(q=>({...q,[y]:[...q[y]||[],O]}))},he=Object.values(a).flat(),M=he.length>0?he.reduce((y,I)=>y+I.feel,0)/he.length:3,_=Math.round(M/5*100),h=he.length===0?"Start logging your meals and feelings throughout the week. Your personalized gut health insights will appear here.":_>=67?"Your gut is thriving this week. Keep up the variety and stay consistent with hydration and fiber-rich foods.":_>=34?"You're on track. Consider adding more fermented foods — kimchi, yogurt, or miso — to boost your gut flora further.":"Your gut may need some extra support. Focus on whole foods, reduce processed items, and try incorporating a daily probiotic.",F=$s();return l.jsxs("div",{className:"fj",children:[l.jsx("style",{children:Lm}),l.jsx("div",{className:"fj-header",children:l.jsx("img",{src:va,alt:"Abate Wellness",className:"fj-logo"})}),l.jsx("hr",{className:"fj-rule"}),l.jsxs("div",{className:"fj-title-row",children:[l.jsxs("h1",{className:"fj-title",children:["Food ",l.jsx("em",{children:"journal"})]}),l.jsx("p",{className:"fj-subtitle",children:"Track what you eat, how it makes you feel, and get personalized gut health insights."})]}),l.jsxs("div",{className:"fj-top",children:[l.jsxs("div",{className:"fj-left",children:[l.jsxs("div",{className:"fj-input-box",children:[l.jsxs("div",{className:"fj-input-row",children:[l.jsx("input",{className:"fj-input",placeholder:"What did you eat? (e.g. Greek yogurt, grilled salmon…)",value:e,onChange:y=>t(y.target.value),onKeyDown:y=>y.key==="Enter"&&B()}),l.jsx("button",{className:"fj-log-btn",onClick:B,children:"Log"})]}),l.jsxs("div",{className:"fj-meta-row",children:[l.jsxs("div",{className:"fj-meta-left",children:[l.jsx("span",{className:"fj-meta-label",children:"Day"}),l.jsx("div",{className:"fj-day-pills",children:Bs.map((y,I)=>l.jsx("button",{className:`fj-day-pill${n===I?" active":""}`,onClick:()=>r(I),children:y.slice(0,3)},I))})]}),l.jsx("div",{className:"fj-feelings",children:Ws.map(y=>l.jsx("button",{className:`fj-feeling${o===y.value?" active":""}`,onClick:()=>i(y.value),title:y.label,children:y.emoji},y.value))})]})]}),l.jsxs("div",{className:"fj-recipes-header",children:[l.jsx("span",{className:"fj-week-label",children:"Recipes — drag onto a day"}),l.jsxs("div",{className:"fj-recipe-controls",children:[l.jsxs("div",{className:`fj-search-wrap${A?" expanded":""}`,children:[l.jsx("div",{className:"fj-search-slide",children:l.jsx("input",{ref:b,className:"fj-search-input",placeholder:"Search...",value:g,onChange:y=>{C(y.target.value),m(0)},onBlur:()=>{g||p(!1)}})}),l.jsx("button",{className:"fj-search-icon-btn",onMouseDown:y=>y.preventDefault(),onClick:()=>{A?(p(!1),C(""),m(0)):(p(!0),setTimeout(()=>{var y;return(y=b.current)==null?void 0:y.focus()},30))},"aria-label":"Search recipes",children:l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"11",cy:"11",r:"8"}),l.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),l.jsxs("div",{ref:j,className:`fj-filter-wrap${c?" open":""}`,children:[l.jsxs("button",{className:"fj-filter-btn",onClick:()=>f(y=>!y),children:[N||"All",l.jsx("svg",{className:"fj-filter-chevron",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),c&&l.jsx("div",{className:"fj-filter-dropdown",children:["",...S].map(y=>l.jsx("button",{className:`fj-filter-opt${N===y?" active":""}`,onMouseDown:I=>{I.preventDefault(),E(y),m(0),f(!1)},children:y||"All"},y))})]}),l.jsxs("div",{className:"fj-recipe-nav",children:[l.jsx("button",{onClick:()=>m(y=>Math.max(0,y-1)),disabled:x===0,"aria-label":"Previous recipes",children:"‹"}),l.jsx("button",{onClick:()=>m(y=>Math.min(Math.max(0,W-1),y+1)),disabled:x>=W-1,"aria-label":"Next recipes",children:"›"})]})]})]}),v.length===0&&l.jsx("div",{className:"fj-recipe-no-results",children:"No recipes match your search."}),l.jsx("div",{className:"fj-recipes-grid",children:v.map((y,I)=>l.jsxs("div",{className:"fj-recipe-card fj-recipe-card-anim",style:{animationDelay:`${I*65}ms`},draggable:!0,onDragStart:O=>{L.current=y,O.currentTarget.classList.add("fj-grabbing");const q=document.createElement("div");q.innerHTML=`<span style="font-size:15px;line-height:1">${y.emoji}</span><span style="font-size:12px;font-weight:600;font-family:Inter,sans-serif">${y.name}</span>`,q.style.cssText="position:fixed;top:-9999px;left:0;background:#1C1C1E;border:1px solid rgba(245,132,31,.75);border-radius:20px;padding:7px 14px;color:#fff;display:flex;align-items:center;gap:8px;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.75);transform:rotate(-3deg);",document.body.appendChild(q),O.dataTransfer.setDragImage(q,q.offsetWidth/2,q.offsetHeight/2),setTimeout(()=>{try{document.body.removeChild(q)}catch{}},100)},onDragEnd:O=>{O.currentTarget.classList.remove("fj-grabbing"),L.current=null,d(null)},children:[l.jsxs("div",{className:"fj-recipe-top",children:[l.jsx("span",{className:"fj-recipe-emoji",children:y.emoji}),l.jsx("span",{className:"fj-recipe-name",children:y.name})]}),l.jsxs("div",{className:"fj-recipe-meta",children:[l.jsx("span",{className:"fj-recipe-time",children:y.time}),l.jsx("span",{className:"fj-recipe-tag",children:y.tag})]})]},`${x}-${y.id}`))})]}),l.jsxs("div",{className:"fj-right",children:[l.jsx(Pm,{score:_}),l.jsxs("div",{className:"fj-advice",children:[l.jsxs("div",{className:"fj-advice-head",children:[l.jsx("span",{className:"fj-advice-dot"}),"AI Insights"]}),l.jsx("div",{className:"fj-advice-body",children:h})]})]})]}),l.jsxs("div",{className:"fj-week-section",children:[l.jsx("div",{className:"fj-week-label",children:"Weekly log"}),l.jsx("div",{className:"fj-week",children:Dm.map((y,I)=>{const O=a[I]||[],q=I===F,Ne=I===n,it=u===I;return l.jsxs("div",{className:`fj-day-col${q?" today":""}${Ne?" selected":""}${it?" drag-over":""}`,onClick:()=>r(I),onDragOver:ae=>{ae.preventDefault(),d(I)},onDragLeave:()=>d(null),onDrop:()=>{d(null),G(I)},children:[l.jsxs("div",{className:"fj-day-head",children:[l.jsx("span",{className:`fj-day-name${q?" today":""}`,children:Bs[I]}),O.length>0&&l.jsx("span",{className:"fj-day-badge",children:O.length})]}),l.jsx("div",{className:"fj-day-entries",children:O.map(ae=>{var _e;return l.jsxs("div",{className:`fj-entry${ae.fromRecipe?" from-recipe":""}`,children:[l.jsx("span",{className:"fj-entry-feel",children:((_e=Ws.find(Ze=>Ze.value===ae.feel))==null?void 0:_e.emoji)??"🙂"}),l.jsx("span",{className:"fj-entry-text",children:ae.text}),l.jsx("button",{className:"fj-entry-del",onClick:Ze=>{Ze.stopPropagation(),$(I,ae.id)},children:"×"})]},ae.id)})}),O.length===0&&l.jsx("div",{className:"fj-day-drop-hint",children:"drop recipe"})]},I)})})]})]})}const Tm="/assets/11-flame.png",Am="/assets/19-heart-pulse.png",_m="/assets/18-calendar-check.png",Rm="/assets/21-smartwatch.png",dd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAABYCAYAAADBRtRDAAAOF0lEQVR4nO1de4xcVRn/3ZnZV7v2uVvarqUFxEIRiwStIkZRQMAH4qsVxRDU+IoaNfEPjYrGRyQaHiamIfGBgMaoEZVqSBrrI2qDRlGQIvKQx9IHLdtut93O7s5c85HfVz+PM7tz79w758zM/pKb2Zl27tx77u985zvf9zvfiRA2CgB6ARQBxPxsBsC0ed+OKALoMe8rvB+5t+BQQtg4CcCLAKxgwwo5ngDwZwCPoz2xAMDzeG+DACYBjAHYC+AhAIcQGCKEgwEAZwE4hYQQC7IRwKtIkoIhyW8B7AJwL4C/AziMsPEyAM+ltRgCsInvlwA4AuApkv5+AP/m6642uK+Wog/AZgDbAexho8kxwYZ1D/n8AIDfAPg8gOUIE0MAruB1Ps17EqtxzLmfGX42DmAUwA4AHwKw2PcNhGTNpCHvAVCtQ4p6xwwJcwuAcxAOCgDWA7gOwD7jczR6yP9/EsBWAGu7fbjpB/BBAO9ho1rIw98JYD//nxKowPH8TA5Linvov0iP9I1hAN8CcD6AheZzsSJ38d7A66/yWAbgxfRZLG4F8DkAD6JLsZwPV3uQNNajAG4D8E4AI3Su+3n08XUDgE/RNNse+GXfNwTgRFo2axV2kjRvprOq96FHifd6FYDvAnjEsarXsHN0JTbQYdPGEO/+0wBObuC70uO+7pDkJvjHRc41yWzlYv5boQGrLo779wFMmXN8AV2KCzmUaEP8nLOYJJCGvdpxBO+GX1zgkORuztoaxfMB3OmcQzqON/g0YU/TFCsGU8xSxJqc4NyHzI58Inbe9ySMR91HH+Rnpn2Gfc50fJJEx2trFZJeT4HOn3XA7TlDQJRwgjBDn8SS/RJaqK4jSaFDZ2xZQIKGZfN+HYNvXtC1HnMLMZPSuhVqDGFeOsA8SfLHJC1Ds5ApsRfMk6Q1iNHGmCdJeyD2STSfJJnuECezEWRxn940NFnqSSTGsaoB4Uwv8xAiDegGxBn4ExHjQc/h38U5/q/6Qnv56p0kvZyivR7AG03yqhaksZYCuIM9Q77b6YgzsADynC5nNLbQwAgQUXfzUwC/BnCw2R9vBhLxfBOAy6i2cjO59bCKEVeJsnY64gzOETFOkiRWMsHncRaTi4/5IMlyWo+PMVEXzRIfiGk1tAesYdazGxznSkqfJJ7jnGXjpxT4WjRZ5UFKD05lauBmDvPVVpFkkGlvUU+dwc+mjNxOMp+7yWbNZgoxns0LrvB1sAuIMpMimFbL7zjGo8yh5F9s4wo7oEoqpMOeznYdoDru3QAWAfgsLXjuJJELOhvAFkOQfRz77uLNjVGqN0mSCHtX03oMkESnMIPbyUPOMbaNtEESuElBab8/AfgV2+5JamFV9dZHUvTRcpxKEZOo9V7C7Lq4BF9pFUlkmHmtkQtKQ9wO4GsUARVN71HTFpsbL9LCbKKutdNJciBFxLXkDFEz1MneQMJVeE43QSr4JzuytPdrqOJbR9H1CK1Q4otJioW0Avpw5WL/BuCBOb7nTo2P+Aw1Bz79na7xvXFa6Nl+CxyONDn4oHEBFlCX8oak63sKGThUaVL87bDmJytEKb6jule3jZOey8ooirQs4rckQlqn0WV5t0ROWwXVt7Zay5IpSeZJkS/UauQRhk88/HX69LNdo619dDyD6IzzJMkXUcrv9dWY4XhDJ5IkJO1GP+MVtoJAI+glUYJAJ5IkpFnTANcQJcl4FxlmEKLMW5IOJUnsvD+aMC4RXMcteJye5YXiHHqLvBE5bTWZcEZhl3fmgahVJAnCDNbBEBeO+8BiJjLdSk1p2jmvNpZIdyameSEzthLvh2F2D5NHkqwLFaLe+iKAG5kljVrQM6t0UF/Iojs2vH44sAVj5zGnZEuM2esdZeKwLkn6SYJzAbyFyaHYaRD12EOFzApeToFOq8pQxPzdZzmlJiaZdc1iSUVWuJmkda1bxOv8ARfeC1n+jySSsLsUwNtZ+2OkjeWFBV6/b/QwsZbGR8or+TlXxQbRCf2+FkmWkBwfAHCaYdkM64ccMjdaZC+VsX8etR+utt8ABcxJOpsm8/JyvqXUFnhNM7SA66k9VhJdTkmB1G6rCklK1IZcQVWTpqXHKXK5hinqPp50hJ/JiULEGAU6i+qMu3mhZGq9vcN8ntRx1byN+jpZk+Vqdvoenl/chysBfISElvdvoz8n9V/GNPQ7aPQh0qh/AXA9qxy6GoYFKZRWrcROiqJEbN1KxGyXcxySJCWpFWvlgdEaPtI3+bvvok/ab8tylUwJCC3+BlqM3XVELqp6ChXayMfH1BZjssZnSYiiomYVOGeNnhokkdnMdygmW8ffPj4FL9RYta4i3NnG0ZAVZT4Dae5koEw9qi0j0WgwrdVtfJjrc6p89hLvWdloDa+k/zaP/0LrsyaJkyhBWr3+1/pCBWqQXypDT3B5gg7DQvbIJAk+dVhbnf5QcuhvruS19xVSShJDzt2EhkJCy1s1/mErLbbrl5ZI8mJhll0TZosSzlugxlBmhckkEVdfQ7krvi4qaXQKrNuDKHpmEb0o40KFb6d6ukbENUmn0llNXmSJZ1lwt4HXXGb1R1lwPq47P8j6jL8ygAauzLusTqwhdKmA7zxJZP4uMKhXSuGTtHKKLgbhlVxcXqLRuI87gFT04ke5wOoS3tQQw/RrOYfWyGWV41RIxf5dvICBwP4WDouR8SWsVKDCBF+S4KPGrfLaIGmrWT+sM6h+PlPN7g8wWSmfT5SMemoHgylb6NkOBxx6nw1rGWIOAYdZFj1pNjpPp/W9DViaW1jj/pm6JkqSKs3LTTTXmzWQQsapD1Lhd0J2XGPeg/ZEHd91NZtdz2IXL831UKo1ykhoMk97ZJnto1Pe6RTKNLtxQR7Qa9QdMsqGlBF9keu5KdMzsGNlzMXG32MPOIlKq+U80VG+ruDYpVnD0CDD4y+pwNKbH+D1WsJoekErB9UjfoGNecRUcbKBLn09xOSeZFHfys8WcOgOKY3xIz7TpRwKH+O9aZzkFyxrcRyuQyWN8Q/mbbTW+wkkyBG+nsbCNRKRCxEPsw5H1SHJMnO/JTODK9QpP+7iMA934ybFQR7nGpK4i+sbgY165jHkXMu2WEFSP0yfKTJk/x8rVsvrnmZBtr08QR8bZsYIe4VEoWKsTuknG3a2w4zmenTYsFFHmOFphodrQfT/6JDi1v9YmnCRtiVgHlKBXSTBAMkx52xwrqlZXMPp0sZqN+Q5rYzN3y4hyinaSx9eHpakxHM3LIhO44DmGejJAr6vLXbeH0wxuzmWo2anJUsq5tE4Khye4ybzKF4xT5J8UU0ZoQ6GIJ1AEq811xuAxk7S+EPB3FenkCSYBnUwnUJ0FBzSksR9KKE+JN+oNGFJ2p4k7q5OvmYUbswjVJLEnn4/k99NOwW2AZ6oxq7YjcAnuVqFMqfAWcWVslieUWgFSSapANe5fy9D9LKDQhJkYYataDhEHKRWR9IZzSJO8WxXmWRjzHVUU60gicT7f8JkoJLkfGdBUj0s4ar/IbPFfLMIlSDgAxnPQAgVUetxOiUcs1ngEjUtr+Cif6kOAXbqj6chSZqHVOau2SJS2mge/haa1duZ0LI5jog3dynZfYSJQy1tkRY+1qckQdpCyC6KVAqeyU76O0o7LLSdz+YewsNmNZ4Q4w+sR58YaXuyZAq30Sps4k0Iez/BqsOaFNQ0O6h4G8lpaWWo1qTiJAXTIuLKOjkEF1ISYVf5aXuvrLEb+R8BfCbN5gPNkGSKu1+J7uBLAC7m58UUvkkz0JoaoZIkr+jpsgQ1YmS38tu4vjuV1W3GFB5l2lnNXiVBmDqrTLKm8EOdJVUznMVVzc4Uc5FO21bKhnyYJEld0KfZ8VJ++JN0qlZxNb+o7m26Wy94O0tFnUjBzwVu2aUmhptQqxxUM7IkUyz3MURfQ3yTj9KSa6eLOfPcyvoxw5xQ3NHs7CqL2UXZiJC20ald6egmYxZFESGTYl9G1mSmDfS21QzONWGWvIxx65htFDWpNZXfepQ+Y9A1T0cbLPuQtkyUi7kqIPjEBNXyWVg6rTWvVmna1aJ2YoIvy0VIvhdk1cNUFvvy+k49tHsWOFSHtd762rZEu5MEORehaxaqym9r8ncCSQZCa1SDhZz5JfX9apUBmR9uUqLENauudMEnYvP3Gk5DlzXZeSeYLIy7zZIUHFM8lbC2mH7HDeL5Xi1XdEhyERdCNTNMPdTAbqkdSZJxJqsU/czvJIGWFo2aKbCfM4YSlsMqMXM7bJ7P/d1KEslIfsMknaQq8asTLok8j5FbHfP3MtvpE1XnfdnszdsIergr+EZD/lGnQ3UVpEzEHiNmfoK7aGuSsFTjiOgQvg/AvSbBF7Nkgu9tyRYzVaHXNMaV+jfSqkR17qnEhfhfZZDM3te1Ph1X37tM7eeuCFcyvCxSgqtY0WCXKUbs9tQFzDzLYmyLW1P4NVnjEMutK0Qz8zr+3Uur4j7wmL7MelrHRU6a/8cBOOReIRqJ69i4ts6HVjGod1QdCyQ9MBSsBvBtMyPRY3KO+1JtjK7BvpNVChDwNL8liDj+aqNqVjee5VAV+hSlCu+vYVV8YwO1NtvNnjez3ZPKHuS+DgD4ISWI3snh/QIIld1t5pATcfp4Bh1ZO809wBoqe0mSHawSOBnYIqgih9C1rD+3irVdVDBU5MShzJneHh77SfztvE/vMohQSKJe/ZAp3XAyYwxrSIASTfAD3LRnN3vfUxkl0fLEiNkyZrUpbFOglXmcCrJHOOzqEQRCIomLIoNQ/WY7sAodP/Vf2g19PGR2pql/sSRCcjm8W41a+A+bD+rvo6ikdwAAAABJRU5ErkJggg==",Om="/assets/07-yoga.png",Bm="/assets/24-abs-core.png",Wm="/assets/22-sleep.png",Um="/assets/stock.mp4",Vs=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],lt=window.self!==window.top,Sn={Strength:{color:"#F5841F",bg:"rgba(245,132,31,.14)"},Mobility:{color:"#30D158",bg:"rgba(48,209,88,.14)"},Core:{color:"#BF5AF2",bg:"rgba(191,90,242,.14)"},Recovery:{color:"#64D2FF",bg:"rgba(100,210,255,.14)"}},$m=[{id:1,name:"Full Body Strength",duration:"45 min",type:"Strength",difficulty:"Moderate",video:Um,description:"A comprehensive full-body session targeting all major muscle groups through compound movements — squats, deadlifts, rows, and press variations designed to build functional strength.",trainerNotes:"Focus on bracing your core throughout the lifts. Keep your chest up on the squat and drive through the heels."},{id:2,name:"Hip Mobility Flow",duration:"30 min",type:"Mobility",difficulty:"Easy",description:"Deep hip openers, 90/90 stretches, and controlled articular rotations to improve joint range of motion and reduce tightness in the hips and lower back.",trainerNotes:"Move slowly through the 90/90 transitions. Hold each position for at least 5 deep breaths — the goal is control, not range."},{id:3,name:"Upper Body Push",duration:"30 min",type:"Strength",difficulty:"Moderate",description:"Focused push-pattern work targeting chest, shoulders, and triceps through push-up progressions, overhead press variations, and cable flys.",trainerNotes:"Prioritize shoulder packing. Depress and retract the scapula before any press movement to protect the joint."},{id:4,name:"Glute Activation",duration:"20 min",type:"Mobility",difficulty:"Easy",description:"Targeted activation protocol to wake up the posterior chain before heavier training. Banded clamshells, hip thrusts, and glute bridges."},{id:5,name:"Core & Stability",duration:"25 min",type:"Core",difficulty:"Moderate",description:"Anti-rotation and anti-flexion core work that builds real functional stability — planks, Pallof presses, dead bugs, and farmer carries.",trainerNotes:"The goal here is tension, not movement. Think about resisting force in every direction during the Pallof press."},{id:6,name:"Lower Body Power",duration:"45 min",type:"Strength",difficulty:"Hard",description:"Power development session emphasizing speed and force production — box jumps, trap bar deadlifts, Bulgarian split squats, and single-leg RDLs.",trainerNotes:"Rest fully between power sets — quality over quantity. This is not a circuit, treat each set as a max effort."},{id:7,name:"Foam Roll Recovery",duration:"20 min",type:"Recovery",difficulty:"Easy",description:"Full-body self-myofascial release targeting commonly tight areas — quads, IT band, thoracic spine, and calves. Great standalone or pre/post workout."},{id:8,name:"Shoulder Mobility",duration:"15 min",type:"Mobility",difficulty:"Easy",description:"Thoracic mobility drills, shoulder circles, and rotator cuff activation to keep the shoulder girdle healthy and pain-free for pressing movements."}],Vm={orange:"brightness(0) saturate(100%) invert(60%) sepia(88%) saturate(700%) hue-rotate(350deg) brightness(110%)",green:"brightness(0) saturate(100%) invert(72%) sepia(55%) saturate(500%) hue-rotate(88deg)",purple:"brightness(0) saturate(100%) invert(48%) sepia(86%) saturate(600%) hue-rotate(245deg) brightness(105%)",blue:"brightness(0) saturate(100%) invert(83%) sepia(60%) saturate(400%) hue-rotate(175deg) brightness(107%)",muted:"brightness(0) saturate(0%) invert(65%) brightness(140%)"};function Tn({src:e,size:t=20,colorKey:n="muted"}){return l.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:t,height:t,flexShrink:0},children:l.jsx("img",{src:e,alt:"",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:Vm[n]}})})}function Hm({size:e=20}){return l.jsx(Tn,{src:Tm,size:e,colorKey:"orange"})}function Qm({size:e=20}){return l.jsx(Tn,{src:Am,size:e,colorKey:"green"})}function Ym({size:e=20}){return l.jsx(Tn,{src:_m,size:e,colorKey:"muted"})}function Km({size:e=20}){return l.jsx(Tn,{src:Rm,size:e,colorKey:"muted"})}function Hs({size:e=32}){return l.jsx(Tn,{src:dd,size:e,colorKey:"muted"})}function xl({type:e,size:t=18}){const n={Strength:{src:dd,colorKey:"orange"},Mobility:{src:Om,colorKey:"green"},Core:{src:Bm,colorKey:"purple"},Recovery:{src:Wm,colorKey:"blue"}},{src:r,colorKey:o}=n[e]||n.Strength;return l.jsx(Tn,{src:r,size:t,colorKey:o})}function Qs(){const e=new Date().getDay();return e===0?6:e-1}function pd(e){const t=new Date,n=t.getDay(),r=new Date(t);return r.setDate(t.getDate()-(n===0?6:n-1)+e*7),Array.from({length:7},(o,i)=>{const a=new Date(r);return a.setDate(r.getDate()+i),a})}function Jm(e){const t=pd(e),n=t[0],r=t[6],o=n.toLocaleString("default",{month:"short"}),i=r.toLocaleString("default",{month:"short"});return o===i?`${o} ${n.getDate()} – ${r.getDate()}`:`${o} ${n.getDate()} – ${i} ${r.getDate()}`}function rn(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}const Gm=["Strength","Mobility","Core","Recovery"];function Ys(e,t,n){const r=String(e??"").trim().replace(/^["']+|["']+$/g,"");return t.find(i=>i.toLowerCase()===r.toLowerCase())||n}function Hn(e){return{...e,id:e._id,type:Ys(e.type,Gm,"Strength"),difficulty:Ys(e.difficulty,["Easy","Moderate","Hard"],"Moderate")}}function Ks(e){return`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,"0")}`}function Zm({src:e}){const t=w.useRef(null),n=w.useRef(null),r=w.useRef(null),o=w.useRef(null),[i,a]=w.useState(!1),[s,u]=w.useState(0),[d,x]=w.useState(0),[m,g]=w.useState(!1),[C,N]=w.useState(!0),E=()=>{n.current&&t.current&&(n.current.currentTime=t.current.currentTime)},A=()=>{N(!0),clearTimeout(r.current),r.current=setTimeout(()=>{t.current&&!t.current.paused&&N(!1)},2200)},p=()=>{var S,D;const j=t.current;j&&(j.paused?(j.play(),(S=n.current)==null||S.play()):(j.pause(),(D=n.current)==null||D.pause()))},c=()=>{t.current&&(t.current.muted=!t.current.muted,g(t.current.muted))},f=()=>{var j,S;(S=(j=o.current)==null?void 0:j.requestFullscreen)==null||S.call(j)},b=d?s/d*100:0;return l.jsxs("div",{ref:o,className:"mp-vid-wrap",onMouseMove:A,onClick:p,children:[l.jsx("video",{ref:n,className:"mp-video-bg",src:e,muted:!0,playsInline:!0}),l.jsx("video",{ref:t,className:"mp-video-fg",src:e,muted:m,playsInline:!0,onPlay:()=>{a(!0),A(),E()},onPause:()=>{var j;a(!1),N(!0),(j=n.current)==null||j.pause()},onTimeUpdate:()=>{var j;return u(((j=t.current)==null?void 0:j.currentTime)||0)},onLoadedMetadata:()=>{var j;return x(((j=t.current)==null?void 0:j.duration)||0)},onSeeked:E}),l.jsxs("div",{className:`mp-vid-ctrl${C?"":" mp-vid-ctrl-hide"}`,onClick:j=>j.stopPropagation(),children:[l.jsx("div",{className:"mp-vid-gradient"}),l.jsxs("div",{className:"mp-vid-bar",children:[l.jsx("input",{type:"range",className:"mp-vid-scrubber",min:"0",max:d||1,step:"0.05",value:s,style:{background:`linear-gradient(to right,#F5841F ${b}%,rgba(255,255,255,.22) ${b}%)`},onChange:j=>{const S=+j.target.value;t.current.currentTime=S,n.current&&(n.current.currentTime=S)},onClick:j=>j.stopPropagation()}),l.jsxs("div",{className:"mp-vid-btns",children:[l.jsx("button",{className:"mp-vid-btn",onClick:p,children:i?l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"#fff",children:[l.jsx("rect",{x:"5",y:"3",width:"4",height:"18",rx:"1"}),l.jsx("rect",{x:"15",y:"3",width:"4",height:"18",rx:"1"})]}):l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"#fff",children:l.jsx("polygon",{points:"5,3 19,12 5,21"})})}),l.jsxs("span",{className:"mp-vid-time",children:[Ks(s)," / ",Ks(d)]}),l.jsx("div",{className:"mp-vid-spacer"}),l.jsx("button",{className:"mp-vid-btn",onClick:c,children:m?l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",children:[l.jsx("polygon",{points:"11,5 6,9 2,9 2,15 6,15 11,19"}),l.jsx("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),l.jsx("line",{x1:"17",y1:"9",x2:"23",y2:"15"})]}):l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",children:[l.jsx("polygon",{points:"11,5 6,9 2,9 2,15 6,15 11,19"}),l.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),l.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})]})}),l.jsx("button",{className:"mp-vid-btn",onClick:f,children:l.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",children:[l.jsx("polyline",{points:"15,3 21,3 21,9"}),l.jsx("polyline",{points:"9,21 3,21 3,15"}),l.jsx("line",{x1:"21",y1:"3",x2:"14",y2:"10"}),l.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"})]})})]})]})]})]})}function Xm({workout:e,note:t,onNoteChange:n,onClose:r,onAddToPlan:o}){return w.useEffect(()=>{const i=a=>{a.key==="Escape"&&r()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[r]),Sn[e.type]||Sn.Strength,l.jsx("div",{className:"mp-backdrop",onClick:r,children:l.jsxs("div",{className:"mp-modal",onClick:i=>i.stopPropagation(),children:[l.jsxs("div",{className:"mp-video-area",children:[e.video?l.jsx(Zm,{src:e.video}):l.jsxs(l.Fragment,{children:[l.jsxs("svg",{width:"56",height:"56",viewBox:"0 0 56 56",children:[l.jsx("circle",{cx:"28",cy:"28",r:"27",fill:"rgba(245,132,31,.10)",stroke:"rgba(245,132,31,.35)",strokeWidth:"1.5"}),l.jsx("polygon",{points:"23,19 41,28 23,37",fill:"#F5841F"})]}),l.jsx("span",{className:"mp-video-hint",children:"Video coming soon"})]}),l.jsx("button",{className:"mp-modal-close-vid",onClick:r,children:l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:[l.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),l.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),l.jsxs("div",{className:"mp-modal-content",children:[l.jsxs("div",{className:"mp-modal-head",children:[l.jsx("div",{className:"mp-modal-type-icon",children:l.jsx(xl,{type:e.type,size:26})}),l.jsxs("div",{style:{flex:1},children:[l.jsx("div",{className:"mp-modal-name",children:e.name}),l.jsxs("div",{className:"mp-modal-chips",children:[l.jsx("span",{className:"mp-type-pill",children:e.type}),l.jsx("span",{className:"mp-chip-muted",children:e.duration}),l.jsx("span",{className:"mp-chip-muted",children:e.difficulty})]})]})]}),l.jsx("p",{className:"mp-modal-desc",children:e.description}),l.jsx("div",{className:"mp-modal-divider"}),l.jsxs("div",{className:"mp-note-block",children:[l.jsxs("div",{className:"mp-note-label",children:[l.jsx("span",{className:"mp-note-dot",style:{background:"#F5841F"}}),"Trainer Notes",l.jsx("span",{className:"mp-note-by",children:"Andrea"})]}),l.jsx("div",{className:"mp-trainer-note",children:e.trainerNotes||"No trainer notes yet for this workout."})]}),l.jsxs("div",{className:"mp-note-block",children:[l.jsxs("div",{className:"mp-note-label",children:[l.jsx("span",{className:"mp-note-dot",style:{background:"#64D2FF"}}),"Your Notes"]}),l.jsx("textarea",{className:"mp-note-area",placeholder:"How did it feel? Weights used, reps completed, anything to remember…",value:t,onChange:i=>n(i.target.value)})]}),l.jsxs("div",{className:"mp-modal-actions",children:[l.jsx("button",{className:"mp-btn-ghost",onClick:r,children:"Close"}),l.jsx("button",{className:"mp-btn-orange",onClick:o,children:"Add to Plan"})]})]})]})})}function qm({workout:e,onCancel:t,onSubmit:n}){const[r,o]=w.useState((e==null?void 0:e.name)||""),[i,a]=w.useState((e==null?void 0:e.duration)??""),[s,u]=w.useState((e==null?void 0:e.type)||"Strength"),[d,x]=w.useState((e==null?void 0:e.difficulty)||"Moderate"),[m,g]=w.useState((e==null?void 0:e.description)||""),[C,N]=w.useState((e==null?void 0:e.trainerNotes)||""),E=r.trim()&&Number(i)>0;return l.jsxs("div",{className:"mp-modal-content",children:[l.jsx("div",{className:"mp-modal-name",style:{marginBottom:4},children:e?"Edit workout":"Add a workout"}),l.jsxs("label",{className:"mp-form-label",children:["Name",l.jsx("input",{className:"mp-form-input",value:r,onChange:A=>o(A.target.value),placeholder:"e.g. Full Body Strength"})]}),l.jsxs("div",{style:{display:"flex",gap:14},children:[l.jsxs("label",{className:"mp-form-label",style:{flex:1},children:["Duration (min)",l.jsx("input",{className:"mp-form-input",type:"number",min:"1",value:i,onChange:A=>a(A.target.value)})]}),l.jsxs("label",{className:"mp-form-label",style:{flex:1},children:["Type",l.jsx("select",{className:"mp-form-input",value:s,onChange:A=>u(A.target.value),children:Object.keys(Sn).map(A=>l.jsx("option",{value:A,children:A},A))})]}),l.jsxs("label",{className:"mp-form-label",style:{flex:1},children:["Difficulty",l.jsxs("select",{className:"mp-form-input",value:d,onChange:A=>x(A.target.value),children:[l.jsx("option",{children:"Easy"}),l.jsx("option",{children:"Moderate"}),l.jsx("option",{children:"Hard"})]})]})]}),l.jsxs("label",{className:"mp-form-label",children:["Description",l.jsx("textarea",{className:"mp-form-input mp-form-textarea",value:m,onChange:A=>g(A.target.value),placeholder:"What this workout involves…"})]}),l.jsxs("label",{className:"mp-form-label",children:["Trainer notes ",l.jsx("span",{style:{color:"var(--muted)",fontWeight:400},children:"(shown to the client)"}),l.jsx("textarea",{className:"mp-form-input mp-form-textarea",value:C,onChange:A=>N(A.target.value),placeholder:"Coaching cues for this workout…"})]}),l.jsxs("div",{className:"mp-modal-actions",children:[l.jsx("button",{className:"mp-btn-ghost",onClick:t,children:"Cancel"}),l.jsx("button",{className:"mp-btn-orange",disabled:!E,style:E?void 0:{opacity:.4,cursor:"default"},onClick:()=>E&&n({name:r.trim(),duration:Number(i),type:s,difficulty:d,description:m,trainerNotes:C}),children:e?"Save changes":"Add workout"})]})]})}const eg=`
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

/* ── admin client picker ── */
.mp-admin-picker { display: flex; align-items: center; gap: 10px; margin-top: 14px; }
.mp-admin-label  { font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); }
.mp-admin-select {
  background: var(--surface); border: 1px solid var(--line); border-radius: 8px;
  color: var(--text); font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
  padding: 6px 10px; outline: none; cursor: pointer; transition: border-color .15s;
}
.mp-admin-select:focus { border-color: var(--orange); }

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

/* ── custom video player ── */
.mp-vid-wrap { position: relative; width: 100%; height: 100%; cursor: pointer; }
.mp-vid-ctrl { position: absolute; inset: 0; z-index: 2; display: flex; flex-direction: column; justify-content: flex-end; transition: opacity .25s; }
.mp-vid-ctrl-hide { opacity: 0; pointer-events: none; }
.mp-vid-gradient { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,.78) 0%, transparent 55%); pointer-events: none; }
.mp-vid-bar { position: relative; padding: 0 16px 16px; display: flex; flex-direction: column; gap: 10px; }
.mp-vid-scrubber {
  -webkit-appearance: none; appearance: none; width: 100%; height: 3px; border-radius: 2px;
  outline: none; cursor: pointer; border: none;
}
.mp-vid-scrubber::-webkit-slider-thumb {
  -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%;
  background: #F5841F; cursor: pointer; box-shadow: 0 0 5px rgba(245,132,31,.7);
}
.mp-vid-scrubber::-moz-range-thumb { width: 14px; height: 14px; border-radius: 50%; background: #F5841F; border: none; cursor: pointer; }
.mp-vid-btns { display: flex; align-items: center; gap: 14px; }
.mp-vid-btn { background: none; border: none; color: #fff; cursor: pointer; padding: 0; display: flex; align-items: center; opacity: .9; transition: opacity .15s; }
.mp-vid-btn:hover { opacity: 1; }
.mp-vid-time { font-size: 12px; color: rgba(255,255,255,.7); font-family: 'Inter', sans-serif; letter-spacing: .03em; }
.mp-vid-spacer { flex: 1; }

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
  background: #0B0B0C; border-bottom: 1px solid var(--line); height: 320px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 10px; flex-shrink: 0; position: relative; overflow: hidden;
}
.mp-video-bg {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; filter: blur(22px) brightness(0.35);
  transform: scale(1.08); pointer-events: none;
}
.mp-video-fg {
  position: relative; width: 100%; height: 100%;
  object-fit: contain; z-index: 1; display: block;
}
.mp-video-hint { font-size: 11px; color: var(--muted); }
.mp-modal-close-vid {
  position: absolute; top: 14px; right: 16px; z-index: 2;
  background: rgba(0,0,0,.55); border: none; border-radius: 50%;
  width: 28px; height: 28px;
  color: #fff; cursor: pointer;
  display: flex; align-items: center; justify-content: center; transition: opacity .15s;
}
.mp-modal-close-vid:hover { opacity: .7; }
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
.mp-btn-orange:disabled:hover { opacity: .4; }

/* ── library admin ── */
.mp-lib-admin-modal { width: min(560px, 95vw); }
.mp-lib-admin-head { display: flex; align-items: center; justify-content: space-between; }
.mp-lib-admin-list { display: flex; flex-direction: column; gap: 2px; max-height: 380px; overflow-y: auto; }
.mp-lib-admin-row {
  display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--line);
}
.mp-lib-admin-name { font-size: 13px; font-weight: 600; flex: 1; min-width: 0; }
.mp-lib-admin-meta { font-size: 11px; color: var(--muted); white-space: nowrap; }
.mp-form-label {
  display: flex; flex-direction: column; gap: 6px; font-size: 11px; font-weight: 700;
  letter-spacing: .04em; text-transform: uppercase; color: var(--muted);
}
.mp-form-input {
  background: var(--surface2); border: 1px solid var(--line); border-radius: 8px;
  color: var(--text); font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 400;
  text-transform: none; letter-spacing: 0; padding: 9px 11px; outline: none; transition: border-color .15s;
  width: 100%;
}
.mp-form-input:focus { border-color: var(--orange); }
.mp-form-input::placeholder { color: var(--line); }
.mp-form-textarea { resize: vertical; min-height: 60px; line-height: 1.6; font-family: 'Inter', sans-serif; }
select.mp-form-input { cursor: pointer; }
`;function tg(){const[e,t]=w.useState("plan"),[n,r]=w.useState(Qs()),[o,i]=w.useState(0),[a,s]=w.useState(null),[u,d]=w.useState(!1),[x,m]=w.useState(!1),[g,C]=w.useState(""),[N,E]=w.useState(""),[A,p]=w.useState(!1),[c,f]=w.useState(!1),b=w.useRef(null),j=w.useRef(null),S=w.useRef(null),D=w.useRef(null),[P,W]=w.useState(lt?null:$m),[v,L]=w.useState([]),[B,$]=w.useState({}),[G,he]=w.useState([]),[M,_]=w.useState(!lt),[h,F]=w.useState(!1),[y,I]=w.useState([]),[O,q]=w.useState(null),[Ne,it]=w.useState(!1),[ae,_e]=w.useState([]),[Ze,Rt]=w.useState(null),xa=w.useRef([]);w.useEffect(()=>{xa.current=ae},[ae]),w.useEffect(()=>{const k=U=>{S.current&&!S.current.contains(U.target)&&f(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[]),w.useEffect(()=>{const k=U=>{const R=U.data;if(R!=null&&R.type)switch(R.type){case"abate-program-init":F(!!R.isAdmin),I(R.clients||[]);break;case"abate-program-library":W((R.library||[]).map(Hn));break;case"abate-program-data":L(R.entries||[]),$(R.notes||{}),he(R.sessionDates||[]),_(!0);break;case"abate-program-item-added":L(Y=>{const H=Y.findIndex(ie=>ie._pending&&ie.date===R.item.date&&ie.tab===R.item.tab&&ie.workoutId===R.item.workoutId);if(H>=0){const ie=[...Y];return ie[H]=R.item,ie}return[...Y,R.item]});break;case"abate-program-item-removed":L(Y=>Y.filter(H=>H._id!==R.itemId));break;case"abate-program-item-toggled":L(Y=>Y.map(H=>H._id===R.itemId?{...H,done:R.done}:H));break;case"abate-library-admin-data":_e((R.library||[]).map(Hn));break;case"abate-library-item-added":_e(Y=>[...Y,Hn(R.item)]),W(Y=>[...Y||[],Hn(R.item)]),Rt(null);break;case"abate-library-item-updated":{const Y=Hn(R.item);_e(H=>H.map(ie=>ie.id===Y.id?Y:ie)),W(H=>(H||[]).map(ie=>ie.id===Y.id?Y:ie)),Rt(null);break}case"abate-library-item-toggled":_e(Y=>Y.map(H=>H.id===R.workoutId?{...H,active:R.active}:H)),W(Y=>{const H=(Y||[]).filter(tn=>tn.id!==R.workoutId);if(!R.active)return H;const ie=xa.current.find(tn=>tn.id===R.workoutId);return ie?[...H,{...ie,active:!0}]:H});break;case"abate-program-error":console.error("My Program:",R.action,R.message);break}};return window.addEventListener("message",k),lt&&window.parent.postMessage({type:"abate-ready"},"*"),()=>window.removeEventListener("message",k)},[]);const vt=pd(o),fd=Qs(),md=o===0,ya=rn(vt[0]),wa=rn(vt[6]);w.useEffect(()=>{lt&&(_(!1),L([]),window.parent.postMessage({type:"abate-program-week",weekStartISO:ya,weekEndISO:wa,memberId:O},"*"))},[o,O]);const zr=v.filter(k=>k.date>=ya&&k.date<=wa),Ot=rn(vt[n]),ka=k=>typeof k=="string"&&(k.startsWith("temp-")||k.startsWith("local-")),Jo=zr.filter(k=>k.tab===e&&k.date===Ot).map(k=>({...k,workout:(P||[]).find(U=>U.id===k.workoutId)})).filter(k=>k.workout),gd=k=>{L(U=>U.map(R=>R._id===k?{...R,done:!R.done}:R)),lt&&!ka(k)&&window.parent.postMessage({type:"abate-program-toggle",itemId:k,memberId:O},"*")},hd=k=>{L(U=>U.filter(R=>R._id!==k)),lt&&!ka(k)&&window.parent.postMessage({type:"abate-program-remove",itemId:k,memberId:O},"*")},ba=k=>{if(!lt){L(R=>[...R,{_id:`local-${Date.now()}`,date:Ot,tab:e,workoutId:k.id,done:!1}]);return}const U=`temp-${Date.now()}`;L(R=>[...R,{_id:U,date:Ot,tab:e,workoutId:k.id,done:!1,_pending:!0}]),window.parent.postMessage({type:"abate-program-add",date:Ot,tab:e,workoutId:k.id,memberId:O},"*")},vd=k=>{Ze&&Ze!=="new"?window.parent.postMessage({type:"abate-library-update",workoutId:Ze.id,workout:k},"*"):window.parent.postMessage({type:"abate-library-add",workout:k},"*")},xd=k=>{window.parent.postMessage({type:"abate-library-toggle-active",workoutId:k.id,active:!k.active},"*")},yd=(k,U)=>{$(R=>({...R,[k]:U})),lt&&(clearTimeout(D.current),D.current=setTimeout(()=>{window.parent.postMessage({type:"abate-program-note",workoutId:k,note:U,memberId:O},"*")},700))},Mr=lt?G:vt.filter((k,U)=>[0,2,4].includes(U)).map(rn),wd=[...new Set((P||[]).map(k=>k.type))],ja=(P||[]).filter(k=>{const U=g.toLowerCase();return(!U||k.name.toLowerCase().includes(U))&&(!N||k.type===N)}),kd=zr.filter(k=>k.tab==="log"&&k.done).length,bd=zr.filter(k=>k.tab==="plan").length,jd=Jo.reduce((k,U)=>k+(U.workout?parseInt(U.workout.duration):0),0),Sd=k=>{const U=rn(vt[k]);return zr.filter(R=>R.tab===e&&R.date===U).slice(0,3).map(R=>{var H;const Y=(P||[]).find(ie=>ie.id===R.workoutId);return Y&&((H=Sn[Y.type])==null?void 0:H.color)||"#F5841F"})};return l.jsxs("div",{className:"mp",children:[l.jsx("style",{children:eg}),l.jsxs("div",{className:"mp-title-row",children:[l.jsxs("h1",{className:"mp-title",children:["My ",l.jsx("em",{children:"program"})]}),l.jsx("p",{className:"mp-subtitle",children:"Your personalized training plan, workout library, and progress log."}),h&&l.jsxs("div",{className:"mp-admin-picker",children:[l.jsx("label",{className:"mp-admin-label",children:"Viewing"}),l.jsxs("select",{className:"mp-admin-select",value:O||"",onChange:k=>q(k.target.value||null),children:[l.jsx("option",{value:"",children:"Your program"}),y.map(k=>l.jsx("option",{value:k.id,children:k.name},k.id))]})]})]}),l.jsxs("div",{className:"mp-stats",children:[l.jsxs("div",{className:"mp-stat",children:[l.jsx("span",{className:"mp-stat-icon",children:l.jsx(Hm,{size:36,color:"#F5841F"})}),l.jsxs("div",{children:[l.jsx("div",{className:"mp-stat-val",children:"3"}),l.jsx("div",{className:"mp-stat-lbl",children:"Week streak"})]})]}),l.jsxs("div",{className:"mp-stat",children:[l.jsx("span",{className:"mp-stat-icon",children:l.jsx(Qm,{size:36,color:"#30D158"})}),l.jsxs("div",{children:[l.jsx("div",{className:"mp-stat-val",children:kd}),l.jsx("div",{className:"mp-stat-lbl",children:"Done this week"})]})]}),l.jsxs("div",{className:"mp-stat",children:[l.jsx("span",{className:"mp-stat-icon",children:l.jsx(Ym,{size:36,color:"#9C988F"})}),l.jsxs("div",{children:[l.jsx("div",{className:"mp-stat-val",children:bd}),l.jsx("div",{className:"mp-stat-lbl",children:"Planned"})]})]}),l.jsxs("div",{className:"mp-stat",children:[l.jsx("span",{className:"mp-stat-icon",children:l.jsx(Km,{size:36,color:"#9C988F"})}),l.jsxs("div",{children:[l.jsxs("div",{className:"mp-stat-val",children:[jd,l.jsx("span",{style:{fontSize:12,color:"var(--muted)",fontWeight:400},children:"m"})]}),l.jsx("div",{className:"mp-stat-lbl",children:"Today's time"})]})]})]}),l.jsxs("div",{className:"mp-body",children:[l.jsxs("div",{className:"mp-left",children:[l.jsxs("div",{className:"mp-top-row",children:[l.jsxs("div",{className:"mp-week-group",children:[l.jsx("button",{className:"mp-week-btn",onClick:()=>i(k=>k-1),children:"‹"}),l.jsx("span",{className:"mp-week-label",children:Jm(o)}),l.jsx("button",{className:"mp-week-btn",onClick:()=>i(k=>k+1),children:"›"})]}),l.jsxs("div",{className:"mp-tabs",children:[l.jsx("button",{className:`mp-tab${e==="log"?" active":""}`,onClick:()=>t("log"),children:"My Log"}),l.jsx("button",{className:`mp-tab${e==="plan"?" active":""}`,onClick:()=>t("plan"),children:"My Plan"})]})]}),l.jsxs("div",{className:"mp-mode-row",children:[l.jsx("span",{className:"mp-mode-label",children:u?"Showing booked session days only":"Plan freely on any day"}),l.jsx("button",{className:`mp-toggle${u?" on":""}`,onClick:()=>d(k=>!k),onMouseDown:k=>k.preventDefault(),children:l.jsx("span",{className:"mp-toggle-thumb"})})]}),l.jsx("div",{className:"mp-day-strip",children:Vs.map((k,U)=>{const R=vt[U],Y=md&&U===fd,H=U===n,ie=Sd(U),tn=Mr.includes(rn(R)),Nd=u&&!tn;return l.jsxs("div",{className:`mp-day-cell${Y?" today":""}${H?" selected":""}`,onClick:()=>r(U),style:Nd?{opacity:.35}:void 0,children:[l.jsx("div",{className:"mp-day-name",children:k}),l.jsx("div",{className:"mp-day-num",children:R.getDate()}),l.jsxs("div",{className:"mp-day-dots",children:[u&&tn&&l.jsx("div",{className:"mp-day-session"}),!u&&ie.map((Cd,Ed)=>l.jsx("div",{className:"mp-day-dot",style:{background:Cd}},Ed))]})]},U)})}),l.jsxs("div",{className:`mp-day-detail${x?" drag-over":""}`,onDragOver:k=>{u&&!Mr.includes(Ot)||(k.preventDefault(),m(!0))},onDragLeave:()=>m(!1),onDrop:()=>{m(!1),b.current&&!(u&&!Mr.includes(Ot))&&(ba(b.current),b.current=null)},children:[l.jsxs("div",{className:"mp-detail-head",children:[l.jsxs("span",{className:"mp-detail-title",children:[Vs[n],", ",vt[n].toLocaleString("default",{month:"short"})," ",vt[n].getDate()]}),l.jsx("span",{className:"mp-detail-badge",children:e==="log"?"Log":"Plan"})]}),u&&!Mr.includes(Ot)?l.jsxs("div",{className:"mp-no-session",children:[l.jsx("span",{className:"mp-empty-icon",children:l.jsx(Hs,{size:56})}),l.jsx("span",{className:"mp-no-session-txt",children:"No session booked for this day"}),l.jsx("span",{className:"mp-no-session-hint",children:"Book a session with Andrea to plan workouts here"})]}):M?Jo.length===0?l.jsxs("div",{className:"mp-empty",children:[l.jsx("span",{className:"mp-empty-icon",children:l.jsx(Hs,{size:56})}),l.jsxs("span",{className:"mp-empty-txt",children:["No workouts ",e==="log"?"logged":"planned"," for this day"]}),l.jsx("span",{className:"mp-empty-hint",children:"Drag a workout from the library"})]}):Jo.map(({_id:k,done:U,workout:R})=>l.jsxs("div",{className:"mp-workout-item",children:[e==="log"&&l.jsx("button",{className:`mp-check${U?" done":""}`,onClick:Y=>{Y.stopPropagation(),gd(k)},children:U&&l.jsx("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"20 6 9 17 4 12"})})}),l.jsx("span",{className:"mp-item-icon",children:l.jsx(xl,{type:R.type,size:30})}),l.jsxs("div",{className:"mp-item-info",onClick:()=>s(R),children:[l.jsx("div",{className:`mp-item-name${U?" done":""}`,children:R.name}),l.jsxs("div",{className:"mp-item-meta",children:[l.jsx("span",{className:"mp-type-pill",children:R.type}),l.jsx("span",{className:"mp-item-dur",children:R.duration})]})]}),l.jsx("button",{className:"mp-del",onClick:Y=>{Y.stopPropagation(),hd(k)},children:l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[l.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),l.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},k)):l.jsx("div",{className:"mp-empty",children:l.jsx("span",{className:"mp-empty-txt",children:"Loading…"})})]})]}),l.jsxs("div",{className:"mp-right",children:[l.jsxs("div",{className:"mp-lib-header",children:[l.jsx("span",{className:"mp-lib-title",children:"Library"}),l.jsxs("div",{className:"mp-lib-controls",children:[h&&l.jsx("button",{className:"mp-filter-btn",onClick:()=>{it(!0),Rt(null)},children:"Manage"}),l.jsxs("div",{className:`mp-search-wrap${A?" expanded":""}`,children:[l.jsx("div",{className:"mp-search-slide",children:l.jsx("input",{ref:j,className:"mp-search-input",placeholder:"Search…",value:g,onChange:k=>C(k.target.value),onBlur:()=>{g||p(!1)}})}),l.jsx("button",{className:"mp-search-icon",onMouseDown:k=>k.preventDefault(),onClick:()=>{A?(p(!1),C("")):(p(!0),setTimeout(()=>{var k;return(k=j.current)==null?void 0:k.focus()},30))},children:l.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"11",cy:"11",r:"8"}),l.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),l.jsxs("div",{ref:S,className:`mp-filter-wrap${c?" open":""}`,children:[l.jsxs("button",{className:"mp-filter-btn",onClick:()=>f(k=>!k),children:[N||"All",l.jsx("svg",{className:"mp-filter-chev",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),c&&l.jsx("div",{className:"mp-filter-drop",children:["",...wd].map(k=>l.jsx("button",{className:`mp-filter-opt${N===k?" active":""}`,onMouseDown:U=>{U.preventDefault(),E(k),f(!1)},children:k||"All"},k))})]})]})]}),l.jsxs("div",{className:"mp-lib-list",children:[ja.length===0&&l.jsx("div",{style:{fontSize:12,color:"var(--muted)",padding:"16px 0"},children:"No workouts match."}),ja.map(k=>{const U=(Sn[k.type]||Sn.Strength).color;return l.jsx("div",{className:"mp-lib-card",draggable:!0,onDragStart:R=>{b.current=k,R.currentTarget.classList.add("mp-grabbing");const Y=`<span style="width:7px;height:7px;border-radius:50%;background:${U};display:inline-block;flex-shrink:0"></span>`,H=document.createElement("div");H.innerHTML=`${Y}<span style="font-size:12px;font-weight:600;font-family:Inter,sans-serif">${k.name}</span>`,H.style.cssText="position:fixed;top:-9999px;left:0;background:#161617;border-top:1px solid #2A2A2D;border-bottom:1px solid #2A2A2D;padding:8px 16px;color:#fff;display:flex;align-items:center;gap:9px;white-space:nowrap;box-shadow:0 12px 32px rgba(0,0,0,.8);transform:rotate(-1.5deg);",document.body.appendChild(H),R.dataTransfer.setDragImage(H,H.offsetWidth/2,H.offsetHeight/2),setTimeout(()=>{try{document.body.removeChild(H)}catch{}},100)},onDragEnd:R=>{R.currentTarget.classList.remove("mp-grabbing"),b.current=null},onClick:()=>s(k),children:l.jsxs("div",{className:"mp-lib-row",children:[l.jsx("span",{className:"mp-lib-icon",children:l.jsx(xl,{type:k.type,size:30})}),l.jsxs("div",{className:"mp-lib-text",children:[l.jsx("span",{className:"mp-lib-name",children:k.name}),l.jsxs("div",{className:"mp-lib-meta",children:[l.jsx("span",{className:"mp-type-pill",children:k.type}),l.jsx("span",{className:"mp-lib-dur",children:k.duration}),l.jsx("span",{className:"mp-lib-diff",children:k.difficulty})]})]})]})},k.id)})]})]})]}),a&&l.jsx(Xm,{workout:a,note:B[a.id]||"",onNoteChange:k=>yd(a.id,k),onClose:()=>s(null),onAddToPlan:()=>{ba(a),s(null)}}),Ne&&l.jsx("div",{className:"mp-backdrop",onClick:()=>{it(!1),Rt(null)},children:l.jsx("div",{className:"mp-modal mp-lib-admin-modal",onClick:k=>k.stopPropagation(),children:Ze?l.jsx(qm,{workout:Ze==="new"?null:Ze,onCancel:()=>Rt(null),onSubmit:vd}):l.jsxs("div",{className:"mp-modal-content",children:[l.jsxs("div",{className:"mp-lib-admin-head",children:[l.jsx("span",{className:"mp-modal-name",children:"Manage library"}),l.jsx("button",{className:"mp-btn-orange",onClick:()=>Rt("new"),children:"+ Add workout"})]}),l.jsxs("div",{className:"mp-lib-admin-list",children:[ae.length===0&&l.jsx("div",{style:{fontSize:12,color:"var(--muted)",padding:"16px 0"},children:"No workouts yet."}),ae.map(k=>l.jsxs("div",{className:"mp-lib-admin-row",style:k.active?void 0:{opacity:.4},children:[l.jsx("span",{className:"mp-lib-admin-name",children:k.name}),l.jsxs("span",{className:"mp-lib-admin-meta",children:[k.type," · ",k.duration," min"]}),l.jsx("button",{className:"mp-btn-ghost",onClick:()=>Rt(k),children:"Edit"}),l.jsx("button",{className:"mp-btn-ghost",onClick:()=>xd(k),children:k.active?"Retire":"Restore"})]},k.id))]}),l.jsx("div",{className:"mp-modal-actions",children:l.jsx("button",{className:"mp-btn-ghost",onClick:()=>it(!1),children:"Close"})})]})})})]})}const qe=window.self!==window.top;function ng(){const e=new URLSearchParams(window.location.search).get("view");return e==="admin"?"admin":e==="client"?"client":e==="confirm"?"confirm":e==="schedule"?"schedule":e==="food-journal"?"food-journal":e==="my-program"?"my-program":qe?null:"client"}function rg(){const[e,t]=w.useState(ng),[n,r]=w.useState(null),[o,i]=w.useState(null),[a,s]=w.useState(null),[u,d]=w.useState({}),[x,m]=w.useState(null),[g,C]=w.useState(null),[N,E]=w.useState(!qe),[A,p]=w.useState(!1),c=w.useRef(null);w.useEffect(()=>{let S;const D=()=>{clearTimeout(S),S=setTimeout(()=>{var L;const v=(L=c.current)==null?void 0:L.scrollHeight;v>0&&window.parent.postMessage({type:"abate-resize",height:v+40},"*")},50)},P=new ResizeObserver(D);c.current&&P.observe(c.current),D(),qe&&window.parent.postMessage({type:"abate-ready"},"*");const W=v=>{var L;if((L=v.data)!=null&&L.type){if(v.data.type==="abate-mode"&&t(v.data.mode),v.data.type==="abate-data"){const B=v.data.slots??null;if(r(B),B){const $={};Object.values(B).flat().forEach(G=>{G.userBookingId&&($[G.id]=G.userBookingId)}),Object.keys($).length>0&&d(G=>({...$,...G}))}}v.data.type==="abate-booked"&&d(B=>({...B,[v.data.slotId]:v.data.bookingId})),v.data.type==="abate-error"&&m({slotId:v.data.slotId,message:v.data.message}),v.data.type==="abate-confirm-data"&&i(v.data.slot??null),v.data.type==="abate-schedule-data"&&s(v.data.sessions??[]),v.data.type==="abate-prefs"&&(C(v.data.prefs??[]),E(!0)),v.data.type==="abate-prefs-saved"&&p(!1),v.data.type==="abate-prefs-error"&&p(!1)}};return window.addEventListener("message",W),()=>{clearTimeout(S),P.disconnect(),window.removeEventListener("message",W)}},[]);const f=w.useCallback(S=>{if(qe)switch(S.type){case"weekChange":window.parent.postMessage({type:"abate-week",mondayISO:S.mondayISO},"*");break;case"book":window.parent.postMessage({type:"abate-book",slotId:S.slot.id,slotData:S.slot.slotData,slotInfo:{day:S.slot.day,time:S.slot.time,service:S.slot.service}},"*");break;case"waitlist":window.parent.postMessage({type:"abate-waitlist",slotId:S.slot.id,slotData:S.slot.slotData,slotInfo:{day:S.slot.day,time:S.slot.time,service:S.slot.service}},"*");break;case"cancel":window.parent.postMessage({type:"abate-cancel",slotId:S.slotId,bookingId:u[S.slotId]},"*");break;case"mySchedule":window.parent.postMessage({type:"abate-my-schedule"},"*");break;case"leaveWaitlist":window.parent.postMessage({type:"abate-leave-waitlist",slotId:S.slotId},"*");break;case"savePrefs":p(!0),window.parent.postMessage({type:"abate-save-prefs",items:S.items},"*");break}},[u]),b=(()=>{const S=new URLSearchParams(window.location.search);return S.get("serviceId")?{serviceId:S.get("serviceId"),startDate:S.get("startDate"),endDate:S.get("endDate"),service:S.get("service"),day:S.get("day"),time:S.get("time")}:null})();let j;return e==="confirm"?j=l.jsx(km,{slot:qe?o:b}):e==="food-journal"?j=l.jsx(Im,{}):e==="my-program"?j=l.jsx(tg,{}):e==="schedule"?j=l.jsx(Fm,{sessions:qe?a:[]}):e==="admin"?j=l.jsx(xm,{livePrefs:qe?g:null,loading:qe&&!N,onAction:f,saving:A}):e==="client"?j=l.jsx(cm,{liveSlots:qe?n:null,loading:qe&&n===null,onAction:f,errorMsg:x,onErrorDismiss:()=>m(null)}):j=l.jsx("div",{style:{background:"#0B0B0C",minHeight:"600px"}}),l.jsx("div",{ref:c,children:j})}ji.createRoot(document.getElementById("root")).render(l.jsx(iu.StrictMode,{children:l.jsx(rg,{})}));
