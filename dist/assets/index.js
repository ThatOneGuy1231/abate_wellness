(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function _c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ps={exports:{}},pl={},ms={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),Mc=Symbol.for("react.portal"),Pc=Symbol.for("react.fragment"),Tc=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),Lc=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),Ic=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),Rc=Symbol.for("react.memo"),Ac=Symbol.for("react.lazy"),Ji=Symbol.iterator;function $c(e){return e===null||typeof e!="object"?null:(e=Ji&&e[Ji]||e["@@iterator"],typeof e=="function"?e:null)}var gs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hs=Object.assign,vs={};function hn(e,t,n){this.props=e,this.context=t,this.refs=vs,this.updater=n||gs}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ys(){}ys.prototype=hn.prototype;function qo(e,t,n){this.props=e,this.context=t,this.refs=vs,this.updater=n||gs}var ei=qo.prototype=new ys;ei.constructor=qo;hs(ei,hn.prototype);ei.isPureReactComponent=!0;var Zi=Array.isArray,xs=Object.prototype.hasOwnProperty,ti={current:null},ws={key:!0,ref:!0,__self:!0,__source:!0};function ks(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)xs.call(t,r)&&!ws.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),d=0;d<a;d++)s[d]=arguments[d+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:or,type:e,key:o,ref:i,props:l,_owner:ti.current}}function Bc(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ni(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function Uc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qi=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Uc(""+e.key):t.toString(36)}function Mr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case or:case Mc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Ml(i,0):r,Zi(l)?(n="",e!=null&&(n=e.replace(qi,"$&/")+"/"),Mr(l,t,n,"",function(d){return d})):l!=null&&(ni(l)&&(l=Bc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(qi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Zi(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Ml(o,a);i+=Mr(o,t,n,s,l)}else if(s=$c(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Ml(o,a++),i+=Mr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function dr(e,t,n){if(e==null)return e;var r=[],l=0;return Mr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Pr={transition:null},Vc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Pr,ReactCurrentOwner:ti};function Ss(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:dr,forEach:function(e,t,n){dr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return dr(e,function(){t++}),t},toArray:function(e){return dr(e,function(t){return t})||[]},only:function(e){if(!ni(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=hn;O.Fragment=Pc;O.Profiler=Fc;O.PureComponent=qo;O.StrictMode=Tc;O.Suspense=Oc;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vc;O.act=Ss;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hs({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=ti.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)xs.call(t,s)&&!ws.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var d=0;d<s;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:or,type:e.type,key:l,ref:o,props:r,_owner:i}};O.createContext=function(e){return e={$$typeof:Dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lc,_context:e},e.Consumer=e};O.createElement=ks;O.createFactory=function(e){var t=ks.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Ic,render:e}};O.isValidElement=ni;O.lazy=function(e){return{$$typeof:Ac,_payload:{_status:-1,_result:e},_init:Wc}};O.memo=function(e,t){return{$$typeof:Rc,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Pr.transition;Pr.transition={};try{e()}finally{Pr.transition=t}};O.unstable_act=Ss;O.useCallback=function(e,t){return me.current.useCallback(e,t)};O.useContext=function(e){return me.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return me.current.useDeferredValue(e)};O.useEffect=function(e,t){return me.current.useEffect(e,t)};O.useId=function(){return me.current.useId()};O.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return me.current.useMemo(e,t)};O.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};O.useRef=function(e){return me.current.useRef(e)};O.useState=function(e){return me.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return me.current.useTransition()};O.version="18.3.1";ms.exports=O;var T=ms.exports;const Hc=_c(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qc=T,Yc=Symbol.for("react.element"),Kc=Symbol.for("react.fragment"),Xc=Object.prototype.hasOwnProperty,Gc=Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jc={key:!0,ref:!0,__self:!0,__source:!0};function Cs(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Xc.call(t,r)&&!Jc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Yc,type:e,key:o,ref:i,props:l,_owner:Gc.current}}pl.Fragment=Kc;pl.jsx=Cs;pl.jsxs=Cs;ps.exports=pl;var u=ps.exports,ro={},Ns={exports:{}},Ee={},Es={exports:{}},js={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(m,j){var z=m.length;m.push(j);e:for(;0<z;){var R=z-1>>>1,U=m[R];if(0<l(U,j))m[R]=j,m[z]=U,z=R;else break e}}function n(m){return m.length===0?null:m[0]}function r(m){if(m.length===0)return null;var j=m[0],z=m.pop();if(z!==j){m[0]=z;e:for(var R=0,U=m.length,Bt=U>>>1;R<Bt;){var Ke=2*(R+1)-1,_l=m[Ke],Et=Ke+1,cr=m[Et];if(0>l(_l,z))Et<U&&0>l(cr,_l)?(m[R]=cr,m[Et]=z,R=Et):(m[R]=_l,m[Ke]=z,R=Ke);else if(Et<U&&0>l(cr,z))m[R]=cr,m[Et]=z,R=Et;else break e}}return j}function l(m,j){var z=m.sortIndex-j.sortIndex;return z!==0?z:m.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],d=[],y=1,v=null,g=3,S=!1,C=!1,E=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(m){for(var j=n(d);j!==null;){if(j.callback===null)r(d);else if(j.startTime<=m)r(d),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(d)}}function x(m){if(E=!1,p(m),!C)if(n(s)!==null)C=!0,N(b);else{var j=n(d);j!==null&&L(x,j.startTime-m)}}function b(m,j){C=!1,E&&(E=!1,f(M),M=-1),S=!0;var z=g;try{for(p(j),v=n(s);v!==null&&(!(v.expirationTime>j)||m&&!F());){var R=v.callback;if(typeof R=="function"){v.callback=null,g=v.priorityLevel;var U=R(v.expirationTime<=j);j=e.unstable_now(),typeof U=="function"?v.callback=U:v===n(s)&&r(s),p(j)}else r(s);v=n(s)}if(v!==null)var Bt=!0;else{var Ke=n(d);Ke!==null&&L(x,Ke.startTime-j),Bt=!1}return Bt}finally{v=null,g=z,S=!1}}var w=!1,_=null,M=-1,B=5,h=-1;function F(){return!(e.unstable_now()-h<B)}function D(){if(_!==null){var m=e.unstable_now();h=m;var j=!0;try{j=_(!0,m)}finally{j?A():(w=!1,_=null)}}else w=!1}var A;if(typeof c=="function")A=function(){c(D)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,Ye=Z.port2;Z.port1.onmessage=D,A=function(){Ye.postMessage(null)}}else A=function(){I(D,0)};function N(m){_=m,w||(w=!0,A())}function L(m,j){M=I(function(){m(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(m){m.callback=null},e.unstable_continueExecution=function(){C||S||(C=!0,N(b))},e.unstable_forceFrameRate=function(m){0>m||125<m?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<m?Math.floor(1e3/m):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(m){switch(g){case 1:case 2:case 3:var j=3;break;default:j=g}var z=g;g=j;try{return m()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(m,j){switch(m){case 1:case 2:case 3:case 4:case 5:break;default:m=3}var z=g;g=m;try{return j()}finally{g=z}},e.unstable_scheduleCallback=function(m,j,z){var R=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?R+z:R):z=R,m){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=z+U,m={id:y++,callback:j,priorityLevel:m,startTime:z,expirationTime:U,sortIndex:-1},z>R?(m.sortIndex=z,t(d,m),n(s)===null&&m===n(d)&&(E?(f(M),M=-1):E=!0,L(x,z-R))):(m.sortIndex=U,t(s,m),C||S||(C=!0,N(b))),m},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(m){var j=g;return function(){var z=g;g=j;try{return m.apply(this,arguments)}finally{g=z}}}})(js);Es.exports=js;var Zc=Es.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=T,Ne=Zc;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bs=new Set,Un={};function At(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Un[e]=t,e=0;e<t.length;e++)bs.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lo=Object.prototype.hasOwnProperty,ed=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ea={},ta={};function td(e){return lo.call(ta,e)?!0:lo.call(ea,e)?!1:ed.test(e)?ta[e]=!0:(ea[e]=!0,!1)}function nd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rd(e,t,n,r){if(t===null||typeof t>"u"||nd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var ri=/[\-:]([a-z])/g;function li(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ri,li);ae[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ri,li);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ri,li);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function oi(e,t,n,r){var l=ae.hasOwnProperty(t)?ae[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rd(t,n,l,r)&&(n=null),r||l===null?td(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),ii=Symbol.for("react.strict_mode"),oo=Symbol.for("react.profiler"),zs=Symbol.for("react.provider"),_s=Symbol.for("react.context"),ai=Symbol.for("react.forward_ref"),io=Symbol.for("react.suspense"),ao=Symbol.for("react.suspense_list"),si=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Ms=Symbol.for("react.offscreen"),na=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=na&&e[na]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Pl;function zn(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var Tl=!1;function Fl(e,t){if(!e||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function ld(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function so(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Vt:return"Portal";case oo:return"Profiler";case ii:return"StrictMode";case io:return"Suspense";case ao:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _s:return(e.displayName||"Context")+".Consumer";case zs:return(e._context.displayName||"Context")+".Provider";case ai:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case si:return t=e.displayName||null,t!==null?t:so(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return so(e(t))}catch{}}return null}function od(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return so(t);case 8:return t===ii?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function id(e){var t=Ps(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pr(e){e._valueTracker||(e._valueTracker=id(e))}function Ts(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ps(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function uo(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ra(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fs(e,t){t=t.checked,t!=null&&oi(e,"checked",t,!1)}function co(e,t){Fs(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fo(e,t.type,n):t.hasOwnProperty("defaultValue")&&fo(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function la(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fo(e,t,n){(t!=="number"||Wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _n=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function po(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(_n(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function Ls(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ds(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ds(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mr,Is=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ad=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){ad.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function Os(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function Rs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Os(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var sd=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function go(e,t){if(t){if(sd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ho(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vo=null;function ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yo=null,rn=null,ln=null;function aa(e){if(e=sr(e)){if(typeof yo!="function")throw Error(k(280));var t=e.stateNode;t&&(t=yl(t),yo(e.stateNode,e.type,t))}}function As(e){rn?ln?ln.push(e):ln=[e]:rn=e}function $s(){if(rn){var e=rn,t=ln;if(ln=rn=null,aa(e),t)for(e=0;e<t.length;e++)aa(t[e])}}function Bs(e,t){return e(t)}function Us(){}var Ll=!1;function Ws(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return Bs(e,t,n)}finally{Ll=!1,(rn!==null||ln!==null)&&(Us(),$s())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var xo=!1;if(et)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){xo=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{xo=!1}function ud(e,t,n,r,l,o,i,a,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var Fn=!1,Vr=null,Hr=!1,wo=null,cd={onError:function(e){Fn=!0,Vr=e}};function dd(e,t,n,r,l,o,i,a,s){Fn=!1,Vr=null,ud.apply(cd,arguments)}function fd(e,t,n,r,l,o,i,a,s){if(dd.apply(this,arguments),Fn){if(Fn){var d=Vr;Fn=!1,Vr=null}else throw Error(k(198));Hr||(Hr=!0,wo=d)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sa(e){if($t(e)!==e)throw Error(k(188))}function pd(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return sa(l),e;if(o===r)return sa(l),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Hs(e){return e=pd(e),e!==null?Qs(e):null}function Qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qs(e);if(t!==null)return t;e=e.sibling}return null}var Ys=Ne.unstable_scheduleCallback,ua=Ne.unstable_cancelCallback,md=Ne.unstable_shouldYield,gd=Ne.unstable_requestPaint,q=Ne.unstable_now,hd=Ne.unstable_getCurrentPriorityLevel,ci=Ne.unstable_ImmediatePriority,Ks=Ne.unstable_UserBlockingPriority,Qr=Ne.unstable_NormalPriority,vd=Ne.unstable_LowPriority,Xs=Ne.unstable_IdlePriority,ml=null,Ve=null;function yd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:kd,xd=Math.log,wd=Math.LN2;function kd(e){return e>>>=0,e===0?32:31-(xd(e)/wd|0)|0}var gr=64,hr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=Mn(a):(o&=i,o!==0&&(r=Mn(o)))}else i=n&~l,i!==0?r=Mn(i):o!==0&&(r=Mn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),l=1<<n,r|=e[n],t&=~l;return r}function Sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Oe(o),a=1<<i,s=l[i];s===-1?(!(a&n)||a&r)&&(l[i]=Sd(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function ko(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gs(){var e=gr;return gr<<=1,!(gr&4194240)&&(gr=64),e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function Nd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Oe(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function di(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var W=0;function Js(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zs,fi,qs,eu,tu,So=!1,vr=[],ft=null,pt=null,mt=null,Hn=new Map,Qn=new Map,st=[],Ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ca(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function kn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=sr(t),t!==null&&fi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function jd(e,t,n,r,l){switch(t){case"focusin":return ft=kn(ft,e,t,n,r,l),!0;case"dragenter":return pt=kn(pt,e,t,n,r,l),!0;case"mouseover":return mt=kn(mt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Hn.set(o,kn(Hn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Qn.set(o,kn(Qn.get(o)||null,e,t,n,r,l)),!0}return!1}function nu(e){var t=zt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Vs(n),t!==null){e.blockedOn=t,tu(e.priority,function(){qs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vo=r,n.target.dispatchEvent(r),vo=null}else return t=sr(n),t!==null&&fi(t),e.blockedOn=n,!1;t.shift()}return!0}function da(e,t,n){Tr(e)&&n.delete(t)}function bd(){So=!1,ft!==null&&Tr(ft)&&(ft=null),pt!==null&&Tr(pt)&&(pt=null),mt!==null&&Tr(mt)&&(mt=null),Hn.forEach(da),Qn.forEach(da)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,So||(So=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,bd)))}function Yn(e){function t(l){return Sn(l,e)}if(0<vr.length){Sn(vr[0],e);for(var n=1;n<vr.length;n++){var r=vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&Sn(ft,e),pt!==null&&Sn(pt,e),mt!==null&&Sn(mt,e),Hn.forEach(t),Qn.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)nu(n),n.blockedOn===null&&st.shift()}var on=lt.ReactCurrentBatchConfig,Kr=!0;function zd(e,t,n,r){var l=W,o=on.transition;on.transition=null;try{W=1,pi(e,t,n,r)}finally{W=l,on.transition=o}}function _d(e,t,n,r){var l=W,o=on.transition;on.transition=null;try{W=4,pi(e,t,n,r)}finally{W=l,on.transition=o}}function pi(e,t,n,r){if(Kr){var l=Co(e,t,n,r);if(l===null)Hl(e,t,r,Xr,n),ca(e,r);else if(jd(l,e,t,n,r))r.stopPropagation();else if(ca(e,r),t&4&&-1<Ed.indexOf(e)){for(;l!==null;){var o=sr(l);if(o!==null&&Zs(o),o=Co(e,t,n,r),o===null&&Hl(e,t,r,Xr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Hl(e,t,r,null,n)}}var Xr=null;function Co(e,t,n,r){if(Xr=null,e=ui(r),e=zt(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hd()){case ci:return 1;case Ks:return 4;case Qr:case vd:return 16;case Xs:return 536870912;default:return 16}default:return 16}}var ct=null,mi=null,Fr=null;function lu(){if(Fr)return Fr;var e,t=mi,n=t.length,r,l="value"in ct?ct.value:ct.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Fr=l.slice(e,1<r?1-r:void 0)}function Lr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yr(){return!0}function fa(){return!1}function je(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yr:fa,this.isPropagationStopped=fa,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gi=je(vn),ar=G({},vn,{view:0,detail:0}),Md=je(ar),Il,Ol,Cn,gl=G({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cn&&(Cn&&e.type==="mousemove"?(Il=e.screenX-Cn.screenX,Ol=e.screenY-Cn.screenY):Ol=Il=0,Cn=e),Il)},movementY:function(e){return"movementY"in e?e.movementY:Ol}}),pa=je(gl),Pd=G({},gl,{dataTransfer:0}),Td=je(Pd),Fd=G({},ar,{relatedTarget:0}),Rl=je(Fd),Ld=G({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dd=je(Ld),Id=G({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Od=je(Id),Rd=G({},vn,{data:0}),ma=je(Rd),Ad={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$d={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ud(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bd[e])?!!t[e]:!1}function hi(){return Ud}var Wd=G({},ar,{key:function(e){if(e.key){var t=Ad[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$d[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hi,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vd=je(Wd),Hd=G({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ga=je(Hd),Qd=G({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hi}),Yd=je(Qd),Kd=G({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=je(Kd),Gd=G({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jd=je(Gd),Zd=[9,13,27,32],vi=et&&"CompositionEvent"in window,Ln=null;et&&"documentMode"in document&&(Ln=document.documentMode);var qd=et&&"TextEvent"in window&&!Ln,ou=et&&(!vi||Ln&&8<Ln&&11>=Ln),ha=" ",va=!1;function iu(e,t){switch(e){case"keyup":return Zd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function ef(e,t){switch(e){case"compositionend":return au(t);case"keypress":return t.which!==32?null:(va=!0,ha);case"textInput":return e=t.data,e===ha&&va?null:e;default:return null}}function tf(e,t){if(Qt)return e==="compositionend"||!vi&&iu(e,t)?(e=lu(),Fr=mi=ct=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ou&&t.locale!=="ko"?null:t.data;default:return null}}var nf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nf[e.type]:t==="textarea"}function su(e,t,n,r){As(r),t=Gr(t,"onChange"),0<t.length&&(n=new gi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Kn=null;function rf(e){xu(e,0)}function hl(e){var t=Xt(e);if(Ts(t))return e}function lf(e,t){if(e==="change")return t}var uu=!1;if(et){var Al;if(et){var $l="oninput"in document;if(!$l){var xa=document.createElement("div");xa.setAttribute("oninput","return;"),$l=typeof xa.oninput=="function"}Al=$l}else Al=!1;uu=Al&&(!document.documentMode||9<document.documentMode)}function wa(){Dn&&(Dn.detachEvent("onpropertychange",cu),Kn=Dn=null)}function cu(e){if(e.propertyName==="value"&&hl(Kn)){var t=[];su(t,Kn,e,ui(e)),Ws(rf,t)}}function of(e,t,n){e==="focusin"?(wa(),Dn=t,Kn=n,Dn.attachEvent("onpropertychange",cu)):e==="focusout"&&wa()}function af(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(Kn)}function sf(e,t){if(e==="click")return hl(t)}function uf(e,t){if(e==="input"||e==="change")return hl(t)}function cf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:cf;function Xn(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!lo.call(t,l)||!Ae(e[l],t[l]))return!1}return!0}function ka(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sa(e,t){var n=ka(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ka(n)}}function du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fu(){for(var e=window,t=Wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function df(e){var t=fu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&du(n.ownerDocument.documentElement,n)){if(r!==null&&yi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Sa(n,o);var i=Sa(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ff=et&&"documentMode"in document&&11>=document.documentMode,Yt=null,No=null,In=null,Eo=!1;function Ca(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eo||Yt==null||Yt!==Wr(r)||(r=Yt,"selectionStart"in r&&yi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),In&&Xn(In,r)||(In=r,r=Gr(No,"onSelect"),0<r.length&&(t=new gi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yt)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},Bl={},pu={};et&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function vl(e){if(Bl[e])return Bl[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pu)return Bl[e]=t[n];return e}var mu=vl("animationend"),gu=vl("animationiteration"),hu=vl("animationstart"),vu=vl("transitionend"),yu=new Map,Na="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){yu.set(e,t),At(t,[e])}for(var Ul=0;Ul<Na.length;Ul++){var Wl=Na[Ul],pf=Wl.toLowerCase(),mf=Wl[0].toUpperCase()+Wl.slice(1);St(pf,"on"+mf)}St(mu,"onAnimationEnd");St(gu,"onAnimationIteration");St(hu,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(vu,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function Ea(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fd(r,t,void 0,e),e.currentTarget=null}function xu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,d=a.currentTarget;if(a=a.listener,s!==o&&l.isPropagationStopped())break e;Ea(l,a,d),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,d=a.currentTarget,a=a.listener,s!==o&&l.isPropagationStopped())break e;Ea(l,a,d),o=s}}}if(Hr)throw e=wo,Hr=!1,wo=null,e}function H(e,t){var n=t[Mo];n===void 0&&(n=t[Mo]=new Set);var r=e+"__bubble";n.has(r)||(wu(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),wu(n,e,r,t)}var wr="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[wr]){e[wr]=!0,bs.forEach(function(n){n!=="selectionchange"&&(gf.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wr]||(t[wr]=!0,Vl("selectionchange",!1,t))}}function wu(e,t,n,r){switch(ru(t)){case 1:var l=zd;break;case 4:l=_d;break;default:l=pi}n=l.bind(null,t,n,e),l=void 0,!xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Hl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;a!==null;){if(i=zt(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}a=a.parentNode}}r=r.return}Ws(function(){var d=o,y=ui(n),v=[];e:{var g=yu.get(e);if(g!==void 0){var S=gi,C=e;switch(e){case"keypress":if(Lr(n)===0)break e;case"keydown":case"keyup":S=Vd;break;case"focusin":C="focus",S=Rl;break;case"focusout":C="blur",S=Rl;break;case"beforeblur":case"afterblur":S=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Td;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Yd;break;case mu:case gu:case hu:S=Dd;break;case vu:S=Xd;break;case"scroll":S=Md;break;case"wheel":S=Jd;break;case"copy":case"cut":case"paste":S=Od;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ga}var E=(t&4)!==0,I=!E&&e==="scroll",f=E?g!==null?g+"Capture":null:g;E=[];for(var c=d,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Vn(c,f),x!=null&&E.push(Jn(c,x,p)))),I)break;c=c.return}0<E.length&&(g=new S(g,C,null,n,y),v.push({event:g,listeners:E}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==vo&&(C=n.relatedTarget||n.fromElement)&&(zt(C)||C[tt]))break e;if((S||g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=d,C=C?zt(C):null,C!==null&&(I=$t(C),C!==I||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=d),S!==C)){if(E=pa,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=ga,x="onPointerLeave",f="onPointerEnter",c="pointer"),I=S==null?g:Xt(S),p=C==null?g:Xt(C),g=new E(x,c+"leave",S,n,y),g.target=I,g.relatedTarget=p,x=null,zt(y)===d&&(E=new E(f,c+"enter",C,n,y),E.target=p,E.relatedTarget=I,x=E),I=x,S&&C)t:{for(E=S,f=C,c=0,p=E;p;p=Ut(p))c++;for(p=0,x=f;x;x=Ut(x))p++;for(;0<c-p;)E=Ut(E),c--;for(;0<p-c;)f=Ut(f),p--;for(;c--;){if(E===f||f!==null&&E===f.alternate)break t;E=Ut(E),f=Ut(f)}E=null}else E=null;S!==null&&ja(v,g,S,E,!1),C!==null&&I!==null&&ja(v,I,C,E,!0)}}e:{if(g=d?Xt(d):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var b=lf;else if(ya(g))if(uu)b=uf;else{b=af;var w=of}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=sf);if(b&&(b=b(e,d))){su(v,b,n,y);break e}w&&w(e,g,d),e==="focusout"&&(w=g._wrapperState)&&w.controlled&&g.type==="number"&&fo(g,"number",g.value)}switch(w=d?Xt(d):window,e){case"focusin":(ya(w)||w.contentEditable==="true")&&(Yt=w,No=d,In=null);break;case"focusout":In=No=Yt=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,Ca(v,n,y);break;case"selectionchange":if(ff)break;case"keydown":case"keyup":Ca(v,n,y)}var _;if(vi)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Qt?iu(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(ou&&n.locale!=="ko"&&(Qt||M!=="onCompositionStart"?M==="onCompositionEnd"&&Qt&&(_=lu()):(ct=y,mi="value"in ct?ct.value:ct.textContent,Qt=!0)),w=Gr(d,M),0<w.length&&(M=new ma(M,e,null,n,y),v.push({event:M,listeners:w}),_?M.data=_:(_=au(n),_!==null&&(M.data=_)))),(_=qd?ef(e,n):tf(e,n))&&(d=Gr(d,"onBeforeInput"),0<d.length&&(y=new ma("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:d}),y.data=_))}xu(v,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Vn(e,n),o!=null&&r.unshift(Jn(e,o,l)),o=Vn(e,t),o!=null&&r.push(Jn(e,o,l))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ja(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,d=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&d!==null&&(a=d,l?(s=Vn(n,o),s!=null&&i.unshift(Jn(n,s,a))):l||(s=Vn(n,o),s!=null&&i.push(Jn(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var hf=/\r\n?/g,vf=/\u0000|\uFFFD/g;function ba(e){return(typeof e=="string"?e:""+e).replace(hf,`
`).replace(vf,"")}function kr(e,t,n){if(t=ba(t),ba(e)!==t&&n)throw Error(k(425))}function Jr(){}var jo=null,bo=null;function zo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _o=typeof setTimeout=="function"?setTimeout:void 0,yf=typeof clearTimeout=="function"?clearTimeout:void 0,za=typeof Promise=="function"?Promise:void 0,xf=typeof queueMicrotask=="function"?queueMicrotask:typeof za<"u"?function(e){return za.resolve(null).then(e).catch(wf)}:_o;function wf(e){setTimeout(function(){throw e})}function Ql(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Yn(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),We="__reactFiber$"+yn,Zn="__reactProps$"+yn,tt="__reactContainer$"+yn,Mo="__reactEvents$"+yn,kf="__reactListeners$"+yn,Sf="__reactHandles$"+yn;function zt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_a(e);e!==null;){if(n=e[We])return n;e=_a(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[We]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function yl(e){return e[Zn]||null}var Po=[],Gt=-1;function Ct(e){return{current:e}}function Q(e){0>Gt||(e.current=Po[Gt],Po[Gt]=null,Gt--)}function V(e,t){Gt++,Po[Gt]=e.current,e.current=t}var kt={},de=Ct(kt),ye=Ct(!1),Lt=kt;function cn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function xe(e){return e=e.childContextTypes,e!=null}function Zr(){Q(ye),Q(de)}function Ma(e,t,n){if(de.current!==kt)throw Error(k(168));V(de,t),V(ye,n)}function ku(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,od(e)||"Unknown",l));return G({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Lt=de.current,V(de,e),V(ye,ye.current),!0}function Pa(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=ku(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,Q(ye),Q(de),V(de,e)):Q(ye),V(ye,n)}var Ge=null,xl=!1,Yl=!1;function Su(e){Ge===null?Ge=[e]:Ge.push(e)}function Cf(e){xl=!0,Su(e)}function Nt(){if(!Yl&&Ge!==null){Yl=!0;var e=0,t=W;try{var n=Ge;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ge=null,xl=!1}catch(l){throw Ge!==null&&(Ge=Ge.slice(e+1)),Ys(ci,Nt),l}finally{W=t,Yl=!1}}return null}var Jt=[],Zt=0,el=null,tl=0,be=[],ze=0,Dt=null,Je=1,Ze="";function jt(e,t){Jt[Zt++]=tl,Jt[Zt++]=el,el=e,tl=t}function Cu(e,t,n){be[ze++]=Je,be[ze++]=Ze,be[ze++]=Dt,Dt=e;var r=Je;e=Ze;var l=32-Oe(r)-1;r&=~(1<<l),n+=1;var o=32-Oe(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Je=1<<32-Oe(t)+l|n<<l|r,Ze=o+e}else Je=1<<o|n<<l|r,Ze=e}function xi(e){e.return!==null&&(jt(e,1),Cu(e,1,0))}function wi(e){for(;e===el;)el=Jt[--Zt],Jt[Zt]=null,tl=Jt[--Zt],Jt[Zt]=null;for(;e===Dt;)Dt=be[--ze],be[ze]=null,Ze=be[--ze],be[ze]=null,Je=be[--ze],be[ze]=null}var Ce=null,Se=null,Y=!1,Ie=null;function Nu(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ta(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Se=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:Je,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Se=null,!0):!1;default:return!1}}function To(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fo(e){if(Y){var t=Se;if(t){var n=t;if(!Ta(e,t)){if(To(e))throw Error(k(418));t=gt(n.nextSibling);var r=Ce;t&&Ta(e,t)?Nu(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ce=e)}}else{if(To(e))throw Error(k(418));e.flags=e.flags&-4097|2,Y=!1,Ce=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Sr(e){if(e!==Ce)return!1;if(!Y)return Fa(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zo(e.type,e.memoizedProps)),t&&(t=Se)){if(To(e))throw Eu(),Error(k(418));for(;t;)Nu(e,t),t=gt(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ce?gt(e.stateNode.nextSibling):null;return!0}function Eu(){for(var e=Se;e;)e=gt(e.nextSibling)}function dn(){Se=Ce=null,Y=!1}function ki(e){Ie===null?Ie=[e]:Ie.push(e)}var Nf=lt.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function La(e){var t=e._init;return t(e._payload)}function ju(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=xt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,x){return c===null||c.tag!==6?(c=eo(p,f.mode,x),c.return=f,c):(c=l(c,p),c.return=f,c)}function s(f,c,p,x){var b=p.type;return b===Ht?y(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===it&&La(b)===c.type)?(x=l(c,p.props),x.ref=Nn(f,c,p),x.return=f,x):(x=Br(p.type,p.key,p.props,null,f.mode,x),x.ref=Nn(f,c,p),x.return=f,x)}function d(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=to(p,f.mode,x),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function y(f,c,p,x,b){return c===null||c.tag!==7?(c=Tt(p,f.mode,x,b),c.return=f,c):(c=l(c,p),c.return=f,c)}function v(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=eo(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case fr:return p=Br(c.type,c.key,c.props,null,f.mode,p),p.ref=Nn(f,null,c),p.return=f,p;case Vt:return c=to(c,f.mode,p),c.return=f,c;case it:var x=c._init;return v(f,x(c._payload),p)}if(_n(c)||xn(c))return c=Tt(c,f.mode,p,null),c.return=f,c;Cr(f,c)}return null}function g(f,c,p,x){var b=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:a(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fr:return p.key===b?s(f,c,p,x):null;case Vt:return p.key===b?d(f,c,p,x):null;case it:return b=p._init,g(f,c,b(p._payload),x)}if(_n(p)||xn(p))return b!==null?null:y(f,c,p,x,null);Cr(f,p)}return null}function S(f,c,p,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,a(c,f,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fr:return f=f.get(x.key===null?p:x.key)||null,s(c,f,x,b);case Vt:return f=f.get(x.key===null?p:x.key)||null,d(c,f,x,b);case it:var w=x._init;return S(f,c,p,w(x._payload),b)}if(_n(x)||xn(x))return f=f.get(p)||null,y(c,f,x,b,null);Cr(c,x)}return null}function C(f,c,p,x){for(var b=null,w=null,_=c,M=c=0,B=null;_!==null&&M<p.length;M++){_.index>M?(B=_,_=null):B=_.sibling;var h=g(f,_,p[M],x);if(h===null){_===null&&(_=B);break}e&&_&&h.alternate===null&&t(f,_),c=o(h,c,M),w===null?b=h:w.sibling=h,w=h,_=B}if(M===p.length)return n(f,_),Y&&jt(f,M),b;if(_===null){for(;M<p.length;M++)_=v(f,p[M],x),_!==null&&(c=o(_,c,M),w===null?b=_:w.sibling=_,w=_);return Y&&jt(f,M),b}for(_=r(f,_);M<p.length;M++)B=S(_,f,M,p[M],x),B!==null&&(e&&B.alternate!==null&&_.delete(B.key===null?M:B.key),c=o(B,c,M),w===null?b=B:w.sibling=B,w=B);return e&&_.forEach(function(F){return t(f,F)}),Y&&jt(f,M),b}function E(f,c,p,x){var b=xn(p);if(typeof b!="function")throw Error(k(150));if(p=b.call(p),p==null)throw Error(k(151));for(var w=b=null,_=c,M=c=0,B=null,h=p.next();_!==null&&!h.done;M++,h=p.next()){_.index>M?(B=_,_=null):B=_.sibling;var F=g(f,_,h.value,x);if(F===null){_===null&&(_=B);break}e&&_&&F.alternate===null&&t(f,_),c=o(F,c,M),w===null?b=F:w.sibling=F,w=F,_=B}if(h.done)return n(f,_),Y&&jt(f,M),b;if(_===null){for(;!h.done;M++,h=p.next())h=v(f,h.value,x),h!==null&&(c=o(h,c,M),w===null?b=h:w.sibling=h,w=h);return Y&&jt(f,M),b}for(_=r(f,_);!h.done;M++,h=p.next())h=S(_,f,M,h.value,x),h!==null&&(e&&h.alternate!==null&&_.delete(h.key===null?M:h.key),c=o(h,c,M),w===null?b=h:w.sibling=h,w=h);return e&&_.forEach(function(D){return t(f,D)}),Y&&jt(f,M),b}function I(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Ht&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case fr:e:{for(var b=p.key,w=c;w!==null;){if(w.key===b){if(b=p.type,b===Ht){if(w.tag===7){n(f,w.sibling),c=l(w,p.props.children),c.return=f,f=c;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===it&&La(b)===w.type){n(f,w.sibling),c=l(w,p.props),c.ref=Nn(f,w,p),c.return=f,f=c;break e}n(f,w);break}else t(f,w);w=w.sibling}p.type===Ht?(c=Tt(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=Br(p.type,p.key,p.props,null,f.mode,x),x.ref=Nn(f,c,p),x.return=f,f=x)}return i(f);case Vt:e:{for(w=p.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=to(p,f.mode,x),c.return=f,f=c}return i(f);case it:return w=p._init,I(f,c,w(p._payload),x)}if(_n(p))return C(f,c,p,x);if(xn(p))return E(f,c,p,x);Cr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=eo(p,f.mode,x),c.return=f,f=c),i(f)):n(f,c)}return I}var fn=ju(!0),bu=ju(!1),nl=Ct(null),rl=null,qt=null,Si=null;function Ci(){Si=qt=rl=null}function Ni(e){var t=nl.current;Q(nl),e._currentValue=t}function Lo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){rl=e,Si=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(Si!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(rl===null)throw Error(k(308));qt=e,rl.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var _t=null;function Ei(e){_t===null?_t=[e]:_t.push(e)}function zu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ei(t)):(n.next=l.next,l.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function ji(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,nt(e,n)}return l=r.interleaved,l===null?(t.next=t,Ei(r)):(t.next=l.next,l.next=t),r.interleaved=t,nt(e,n)}function Dr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,di(e,n)}}function Da(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,r){var l=e.updateQueue;at=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,d=s.next;s.next=null,i===null?o=d:i.next=d,i=s;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==i&&(a===null?y.firstBaseUpdate=d:a.next=d,y.lastBaseUpdate=s))}if(o!==null){var v=l.baseState;i=0,y=d=s=null,a=o;do{var g=a.lane,S=a.eventTime;if((r&g)===g){y!==null&&(y=y.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=e,E=a;switch(g=t,S=n,E.tag){case 1:if(C=E.payload,typeof C=="function"){v=C.call(S,v,g);break e}v=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=E.payload,g=typeof C=="function"?C.call(S,v,g):C,g==null)break e;v=G({},v,g);break e;case 2:at=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else S={eventTime:S,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(d=y=S,s=v):y=y.next=S,i|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(y===null&&(s=v),l.baseState=s,l.firstBaseUpdate=d,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ot|=i,e.lanes=i,e.memoizedState=v}}function Ia(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var ur={},He=Ct(ur),qn=Ct(ur),er=Ct(ur);function Mt(e){if(e===ur)throw Error(k(174));return e}function bi(e,t){switch(V(er,t),V(qn,e),V(He,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mo(t,e)}Q(He),V(He,t)}function pn(){Q(He),Q(qn),Q(er)}function Mu(e){Mt(er.current);var t=Mt(He.current),n=mo(t,e.type);t!==n&&(V(qn,e),V(He,n))}function zi(e){qn.current===e&&(Q(He),Q(qn))}var K=Ct(0);function ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kl=[];function _i(){for(var e=0;e<Kl.length;e++)Kl[e]._workInProgressVersionPrimary=null;Kl.length=0}var Ir=lt.ReactCurrentDispatcher,Xl=lt.ReactCurrentBatchConfig,It=0,X=null,te=null,re=null,il=!1,On=!1,tr=0,Ef=0;function se(){throw Error(k(321))}function Mi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function Pi(e,t,n,r,l,o){if(It=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ir.current=e===null||e.memoizedState===null?_f:Mf,e=n(r,l),On){o=0;do{if(On=!1,tr=0,25<=o)throw Error(k(301));o+=1,re=te=null,t.updateQueue=null,Ir.current=Pf,e=n(r,l)}while(On)}if(Ir.current=al,t=te!==null&&te.next!==null,It=0,re=te=X=null,il=!1,t)throw Error(k(300));return e}function Ti(){var e=tr!==0;return tr=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?X.memoizedState=re=e:re=re.next=e,re}function Te(){if(te===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?X.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(k(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?X.memoizedState=re=e:re=re.next=e}return re}function nr(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=Te(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=te,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,s=null,d=o;do{var y=d.lane;if((It&y)===y)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(a=s=v,i=r):s=s.next=v,X.lanes|=y,Ot|=y}d=d.next}while(d!==null&&d!==o);s===null?i=r:s.next=a,Ae(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,X.lanes|=o,Ot|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jl(e){var t=Te(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ae(o,t.memoizedState)||(ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Pu(){}function Tu(e,t){var n=X,r=Te(),l=t(),o=!Ae(r.memoizedState,l);if(o&&(r.memoizedState=l,ve=!0),r=r.queue,Fi(Du.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,rr(9,Lu.bind(null,n,r,l,t),void 0,null),le===null)throw Error(k(349));It&30||Fu(n,t,l)}return l}function Fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lu(e,t,n,r){t.value=n,t.getSnapshot=r,Iu(t)&&Ou(e)}function Du(e,t,n){return n(function(){Iu(t)&&Ou(e)})}function Iu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function Ou(e){var t=nt(e,1);t!==null&&Re(t,e,1,-1)}function Oa(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=zf.bind(null,X,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ru(){return Te().memoizedState}function Or(e,t,n,r){var l=Ue();X.flags|=e,l.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var l=Te();r=r===void 0?null:r;var o=void 0;if(te!==null){var i=te.memoizedState;if(o=i.destroy,r!==null&&Mi(r,i.deps)){l.memoizedState=rr(t,n,o,r);return}}X.flags|=e,l.memoizedState=rr(1|t,n,o,r)}function Ra(e,t){return Or(8390656,8,e,t)}function Fi(e,t){return wl(2048,8,e,t)}function Au(e,t){return wl(4,2,e,t)}function $u(e,t){return wl(4,4,e,t)}function Bu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uu(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,Bu.bind(null,t,e),n)}function Li(){}function Wu(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vu(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hu(e,t,n){return It&21?(Ae(n,t)||(n=Gs(),X.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function jf(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{W=n,Xl.transition=r}}function Qu(){return Te().memoizedState}function bf(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yu(e))Ku(t,n);else if(n=zu(e,t,n,r),n!==null){var l=pe();Re(n,e,r,l),Xu(n,t,r)}}function zf(e,t,n){var r=yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yu(e))Ku(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,Ae(a,i)){var s=t.interleaved;s===null?(l.next=l,Ei(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=zu(e,t,l,r),n!==null&&(l=pe(),Re(n,e,r,l),Xu(n,t,r))}}function Yu(e){var t=e.alternate;return e===X||t!==null&&t===X}function Ku(e,t){On=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,di(e,n)}}var al={readContext:Pe,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},_f={readContext:Pe,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Ra,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Or(4194308,4,Bu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){return Or(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bf.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Oa,useDebugValue:Li,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Oa(!1),t=e[0];return e=jf.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,l=Ue();if(Y){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),le===null)throw Error(k(349));It&30||Fu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ra(Du.bind(null,r,o,e),[e]),r.flags|=2048,rr(9,Lu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ue(),t=le.identifierPrefix;if(Y){var n=Ze,r=Je;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ef++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mf={readContext:Pe,useCallback:Wu,useContext:Pe,useEffect:Fi,useImperativeHandle:Uu,useInsertionEffect:Au,useLayoutEffect:$u,useMemo:Vu,useReducer:Gl,useRef:Ru,useState:function(){return Gl(nr)},useDebugValue:Li,useDeferredValue:function(e){var t=Te();return Hu(t,te.memoizedState,e)},useTransition:function(){var e=Gl(nr)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Pu,useSyncExternalStore:Tu,useId:Qu,unstable_isNewReconciler:!1},Pf={readContext:Pe,useCallback:Wu,useContext:Pe,useEffect:Fi,useImperativeHandle:Uu,useInsertionEffect:Au,useLayoutEffect:$u,useMemo:Vu,useReducer:Jl,useRef:Ru,useState:function(){return Jl(nr)},useDebugValue:Li,useDeferredValue:function(e){var t=Te();return te===null?t.memoizedState=e:Hu(t,te.memoizedState,e)},useTransition:function(){var e=Jl(nr)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Pu,useSyncExternalStore:Tu,useId:Qu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Do(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),l=yt(e),o=qe(r,l);o.payload=t,n!=null&&(o.callback=n),t=ht(e,o,l),t!==null&&(Re(t,e,l,r),Dr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),l=yt(e),o=qe(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ht(e,o,l),t!==null&&(Re(t,e,l,r),Dr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=yt(e),l=qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=ht(e,l,r),t!==null&&(Re(t,e,r,n),Dr(t,e,r))}};function Aa(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(l,o):!0}function Gu(e,t,n){var r=!1,l=kt,o=t.contextType;return typeof o=="object"&&o!==null?o=Pe(o):(l=xe(t)?Lt:de.current,r=t.contextTypes,o=(r=r!=null)?cn(e,l):kt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function $a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function Io(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ji(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Pe(o):(o=xe(t)?Lt:de.current,l.context=cn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Do(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&kl.enqueueReplaceState(l,l.state,null),ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=ld(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Tf=typeof WeakMap=="function"?WeakMap:Map;function Ju(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,Yo=r),Oo(e,t)},n}function Zu(e,t,n){n=qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Oo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Oo(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ba(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Qf.bind(null,e,t,n),t.then(e,e))}function Ua(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var Ff=lt.ReactCurrentOwner,ve=!1;function fe(e,t,n,r){t.child=e===null?bu(t,null,n,r):fn(t,e.child,n,r)}function Va(e,t,n,r,l){n=n.render;var o=t.ref;return an(t,l),r=Pi(e,t,n,r,o,l),n=Ti(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):(Y&&n&&xi(t),t.flags|=1,fe(e,t,r,l),t.child)}function Ha(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ui(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qu(e,t,o,r,l)):(e=Br(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(i,r)&&e.ref===t.ref)return rt(e,t,l)}return t.flags|=1,e=xt(o,r),e.ref=t.ref,e.return=t,t.child=e}function qu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Xn(o,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,rt(e,t,l)}return Ro(e,t,n,r,l)}function ec(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(tn,ke),ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(tn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(tn,ke),ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(tn,ke),ke|=r;return fe(e,t,l,n),t.child}function tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ro(e,t,n,r,l){var o=xe(n)?Lt:de.current;return o=cn(t,o),an(t,l),n=Pi(e,t,n,r,o,l),r=Ti(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):(Y&&r&&xi(t),t.flags|=1,fe(e,t,n,l),t.child)}function Qa(e,t,n,r,l){if(xe(n)){var o=!0;qr(t)}else o=!1;if(an(t,l),t.stateNode===null)Rr(e,t),Gu(t,n,r),Io(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Pe(d):(d=xe(n)?Lt:de.current,d=cn(t,d));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==d)&&$a(t,i,r,d),at=!1;var g=t.memoizedState;i.state=g,ll(t,r,i,l),s=t.memoizedState,a!==r||g!==s||ye.current||at?(typeof y=="function"&&(Do(t,n,y,r),s=t.memoizedState),(a=at||Aa(t,n,a,r,g,s,d))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=d,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,_u(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Le(t.type,a),i.props=d,v=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Pe(s):(s=xe(n)?Lt:de.current,s=cn(t,s));var S=n.getDerivedStateFromProps;(y=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==v||g!==s)&&$a(t,i,r,s),at=!1,g=t.memoizedState,i.state=g,ll(t,r,i,l);var C=t.memoizedState;a!==v||g!==C||ye.current||at?(typeof S=="function"&&(Do(t,n,S,r),C=t.memoizedState),(d=at||Aa(t,n,d,r,g,C,s)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,C,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,C,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),i.props=r,i.state=C,i.context=s,r=d):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ao(e,t,n,r,o,l)}function Ao(e,t,n,r,l,o){tc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Pa(t,n,!1),rt(e,t,o);r=t.stateNode,Ff.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=fn(t,e.child,null,o),t.child=fn(t,null,a,o)):fe(e,t,a,o),t.memoizedState=r.state,l&&Pa(t,n,!0),t.child}function nc(e){var t=e.stateNode;t.pendingContext?Ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(e,t.context,!1),bi(e,t.containerInfo)}function Ya(e,t,n,r,l){return dn(),ki(l),t.flags|=256,fe(e,t,n,r),t.child}var $o={dehydrated:null,treeContext:null,retryLane:0};function Bo(e){return{baseLanes:e,cachePool:null,transitions:null}}function rc(e,t,n){var r=t.pendingProps,l=K.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),V(K,l&1),e===null)return Fo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Nl(i,r,0,null),e=Tt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Bo(n),t.memoizedState=$o,e):Di(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Lf(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=xt(a,o):(o=Tt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Bo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=$o,r}return o=e.child,e=o.sibling,r=xt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Di(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nr(e,t,n,r){return r!==null&&ki(r),fn(t,e.child,null,n),e=Di(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Zl(Error(k(422))),Nr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Nl({mode:"visible",children:r.children},l,0,null),o=Tt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&fn(t,e.child,null,i),t.child.memoizedState=Bo(i),t.memoizedState=$o,o);if(!(t.mode&1))return Nr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Zl(o,r,void 0),Nr(e,t,i,r)}if(a=(i&e.childLanes)!==0,ve||a){if(r=le,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,nt(e,l),Re(r,e,l,-1))}return Bi(),r=Zl(Error(k(421))),Nr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Yf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Se=gt(l.nextSibling),Ce=t,Y=!0,Ie=null,e!==null&&(be[ze++]=Je,be[ze++]=Ze,be[ze++]=Dt,Je=e.id,Ze=e.overflow,Dt=t),t=Di(t,r.children),t.flags|=4096,t)}function Ka(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Lo(e.return,t,n)}function ql(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function lc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ka(e,n,t);else if(e.tag===19)Ka(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(K,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ol(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ql(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ol(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ql(t,!0,n,null,o);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Rr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Df(e,t,n){switch(t.tag){case 3:nc(t),dn();break;case 5:Mu(t);break;case 1:xe(t.type)&&qr(t);break;case 4:bi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;V(nl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?rc(e,t,n):(V(K,K.current&1),e=rt(e,t,n),e!==null?e.sibling:null);V(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,ec(e,t,n)}return rt(e,t,n)}var oc,Uo,ic,ac;oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uo=function(){};ic=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Mt(He.current);var o=null;switch(n){case"input":l=uo(e,l),r=uo(e,r),o=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":l=po(e,l),r=po(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}go(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Un.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var s=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&s!==a&&(s!=null||a!=null))if(d==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Un.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&H("scroll",e),o||a===s||(o=[])):(o=o||[]).push(d,s))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};ac=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function If(e,t,n){var r=t.pendingProps;switch(wi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return xe(t.type)&&Zr(),ue(t),null;case 3:return r=t.stateNode,pn(),Q(ye),Q(de),_i(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Sr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Go(Ie),Ie=null))),Uo(e,t),ue(t),null;case 5:zi(t);var l=Mt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)ic(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ue(t),null}if(e=Mt(He.current),Sr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[We]=t,r[Zn]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(l=0;l<Pn.length;l++)H(Pn[l],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ra(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":oa(r,o),H("invalid",r)}go(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&kr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&kr(r.textContent,a,e),l=["children",""+a]):Un.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&H("scroll",r)}switch(n){case"input":pr(r),la(r,o,!0);break;case"textarea":pr(r),ia(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ds(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[We]=t,e[Zn]=r,oc(e,t,!1,!1),t.stateNode=e;e:{switch(i=ho(n,r),n){case"dialog":H("cancel",e),H("close",e),l=r;break;case"iframe":case"object":case"embed":H("load",e),l=r;break;case"video":case"audio":for(l=0;l<Pn.length;l++)H(Pn[l],e);l=r;break;case"source":H("error",e),l=r;break;case"img":case"image":case"link":H("error",e),H("load",e),l=r;break;case"details":H("toggle",e),l=r;break;case"input":ra(e,r),l=uo(e,r),H("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=G({},r,{value:void 0}),H("invalid",e);break;case"textarea":oa(e,r),l=po(e,r),H("invalid",e);break;default:l=r}go(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Rs(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Is(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Wn(e,s):typeof s=="number"&&Wn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Un.hasOwnProperty(o)?s!=null&&o==="onScroll"&&H("scroll",e):s!=null&&oi(e,o,s,i))}switch(n){case"input":pr(e),la(e,r,!1);break;case"textarea":pr(e),ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)ac(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Mt(er.current),Mt(He.current),Sr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(o=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return ue(t),null;case 13:if(Q(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Se!==null&&t.mode&1&&!(t.flags&128))Eu(),dn(),t.flags|=98560,o=!1;else if(o=Sr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[We]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),o=!1}else Ie!==null&&(Go(Ie),Ie=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):Bi())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return pn(),Uo(e,t),e===null&&Gn(t.stateNode.containerInfo),ue(t),null;case 10:return Ni(t.type._context),ue(t),null;case 17:return xe(t.type)&&Zr(),ue(t),null;case 19:if(Q(K),o=t.memoizedState,o===null)return ue(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)En(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ol(e),i!==null){for(t.flags|=128,En(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>gn&&(t.flags|=128,r=!0,En(o,!1),t.lanes=4194304)}else{if(!r)if(e=ol(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Y)return ue(t),null}else 2*q()-o.renderingStartTime>gn&&n!==1073741824&&(t.flags|=128,r=!0,En(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=K.current,V(K,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return $i(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Of(e,t){switch(wi(t),t.tag){case 1:return xe(t.type)&&Zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),Q(ye),Q(de),_i(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zi(t),null;case 13:if(Q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(K),null;case 4:return pn(),null;case 10:return Ni(t.type._context),null;case 22:case 23:return $i(),null;case 24:return null;default:return null}}var Er=!1,ce=!1,Rf=typeof WeakSet=="function"?WeakSet:Set,P=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Wo(e,t,n){try{n()}catch(r){J(e,t,r)}}var Xa=!1;function Af(e,t){if(jo=Kr,e=fu(),yi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,d=0,y=0,v=e,g=null;t:for(;;){for(var S;v!==n||l!==0&&v.nodeType!==3||(a=i+l),v!==o||r!==0&&v.nodeType!==3||(s=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(S=v.firstChild)!==null;)g=v,v=S;for(;;){if(v===e)break t;if(g===n&&++d===l&&(a=i),g===o&&++y===r&&(s=i),(S=v.nextSibling)!==null)break;v=g,g=v.parentNode}v=S}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(bo={focusedElem:e,selectionRange:n},Kr=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var E=C.memoizedProps,I=C.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?E:Le(t.type,E),I);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){J(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return C=Xa,Xa=!1,C}function Rn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Wo(t,n,o)}l=l.next}while(l!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sc(e){var t=e.alternate;t!==null&&(e.alternate=null,sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[Zn],delete t[Mo],delete t[kf],delete t[Sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uc(e){return e.tag===5||e.tag===3||e.tag===4}function Ga(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ho(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Ho(e,t,n),e=e.sibling;e!==null;)Ho(e,t,n),e=e.sibling}function Qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qo(e,t,n),e=e.sibling;e!==null;)Qo(e,t,n),e=e.sibling}var oe=null,De=!1;function ot(e,t,n){for(n=n.child;n!==null;)cc(e,t,n),n=n.sibling}function cc(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:ce||en(n,t);case 6:var r=oe,l=De;oe=null,ot(e,t,n),oe=r,De=l,oe!==null&&(De?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(De?(e=oe,n=n.stateNode,e.nodeType===8?Ql(e.parentNode,n):e.nodeType===1&&Ql(e,n),Yn(e)):Ql(oe,n.stateNode));break;case 4:r=oe,l=De,oe=n.stateNode.containerInfo,De=!0,ot(e,t,n),oe=r,De=l;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Wo(n,t,i),l=l.next}while(l!==r)}ot(e,t,n);break;case 1:if(!ce&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,ot(e,t,n),ce=r):ot(e,t,n);break;default:ot(e,t,n)}}function Ja(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rf),t.forEach(function(r){var l=Kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,De=!1;break e;case 3:oe=a.stateNode.containerInfo,De=!0;break e;case 4:oe=a.stateNode.containerInfo,De=!0;break e}a=a.return}if(oe===null)throw Error(k(160));cc(o,i,l),oe=null,De=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(d){J(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dc(t,e),t=t.sibling}function dc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),$e(e),r&4){try{Rn(3,e,e.return),Sl(3,e)}catch(E){J(e,e.return,E)}try{Rn(5,e,e.return)}catch(E){J(e,e.return,E)}}break;case 1:Fe(t,e),$e(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(Fe(t,e),$e(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var l=e.stateNode;try{Wn(l,"")}catch(E){J(e,e.return,E)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Fs(l,o),ho(a,i);var d=ho(a,o);for(i=0;i<s.length;i+=2){var y=s[i],v=s[i+1];y==="style"?Rs(l,v):y==="dangerouslySetInnerHTML"?Is(l,v):y==="children"?Wn(l,v):oi(l,y,v,d)}switch(a){case"input":co(l,o);break;case"textarea":Ls(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?nn(l,!!o.multiple,S,!1):g!==!!o.multiple&&(o.defaultValue!=null?nn(l,!!o.multiple,o.defaultValue,!0):nn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Zn]=o}catch(E){J(e,e.return,E)}}break;case 6:if(Fe(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(E){J(e,e.return,E)}}break;case 3:if(Fe(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(E){J(e,e.return,E)}break;case 4:Fe(t,e),$e(e);break;case 13:Fe(t,e),$e(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ri=q())),r&4&&Ja(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(d=ce)||y,Fe(t,e),ce=d):Fe(t,e),$e(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(P=e,y=e.child;y!==null;){for(v=P=y;P!==null;){switch(g=P,S=g.child,g.tag){case 0:case 11:case 14:case 15:Rn(4,g,g.return);break;case 1:en(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(E){J(r,n,E)}}break;case 5:en(g,g.return);break;case 22:if(g.memoizedState!==null){qa(v);continue}}S!==null?(S.return=g,P=S):qa(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{l=v.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=v.stateNode,s=v.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Os("display",i))}catch(E){J(e,e.return,E)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(E){J(e,e.return,E)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Fe(t,e),$e(e),r&4&&Ja(e);break;case 21:break;default:Fe(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Wn(l,""),r.flags&=-33);var o=Ga(e);Qo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ga(e);Ho(e,a,i);break;default:throw Error(k(161))}}catch(s){J(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $f(e,t,n){P=e,fc(e)}function fc(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var l=P,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Er;if(!i){var a=l.alternate,s=a!==null&&a.memoizedState!==null||ce;a=Er;var d=ce;if(Er=i,(ce=s)&&!d)for(P=l;P!==null;)i=P,s=i.child,i.tag===22&&i.memoizedState!==null?es(l):s!==null?(s.return=i,P=s):es(l);for(;o!==null;)P=o,fc(o),o=o.sibling;P=l,Er=a,ce=d}Za(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,P=o):Za(e)}}function Za(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ia(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ia(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&Yn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ce||t.flags&512&&Vo(t)}catch(g){J(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function qa(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function es(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(s){J(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){J(t,l,s)}}var o=t.return;try{Vo(t)}catch(s){J(t,o,s)}break;case 5:var i=t.return;try{Vo(t)}catch(s){J(t,i,s)}}}catch(s){J(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var Bf=Math.ceil,sl=lt.ReactCurrentDispatcher,Ii=lt.ReactCurrentOwner,Me=lt.ReactCurrentBatchConfig,$=0,le=null,ee=null,ie=0,ke=0,tn=Ct(0),ne=0,lr=null,Ot=0,Cl=0,Oi=0,An=null,he=null,Ri=0,gn=1/0,Xe=null,ul=!1,Yo=null,vt=null,jr=!1,dt=null,cl=0,$n=0,Ko=null,Ar=-1,$r=0;function pe(){return $&6?q():Ar!==-1?Ar:Ar=q()}function yt(e){return e.mode&1?$&2&&ie!==0?ie&-ie:Nf.transition!==null?($r===0&&($r=Gs()),$r):(e=W,e!==0||(e=window.event,e=e===void 0?16:ru(e.type)),e):1}function Re(e,t,n,r){if(50<$n)throw $n=0,Ko=null,Error(k(185));ir(e,n,r),(!($&2)||e!==le)&&(e===le&&(!($&2)&&(Cl|=n),ne===4&&ut(e,ie)),we(e,r),n===1&&$===0&&!(t.mode&1)&&(gn=q()+500,xl&&Nt()))}function we(e,t){var n=e.callbackNode;Cd(e,t);var r=Yr(e,e===le?ie:0);if(r===0)n!==null&&ua(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ua(n),t===1)e.tag===0?Cf(ts.bind(null,e)):Su(ts.bind(null,e)),xf(function(){!($&6)&&Nt()}),n=null;else{switch(Js(r)){case 1:n=ci;break;case 4:n=Ks;break;case 16:n=Qr;break;case 536870912:n=Xs;break;default:n=Qr}n=wc(n,pc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pc(e,t){if(Ar=-1,$r=0,$&6)throw Error(k(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Yr(e,e===le?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=dl(e,r);else{t=r;var l=$;$|=2;var o=gc();(le!==e||ie!==t)&&(Xe=null,gn=q()+500,Pt(e,t));do try{Vf();break}catch(a){mc(e,a)}while(!0);Ci(),sl.current=o,$=l,ee!==null?t=0:(le=null,ie=0,t=ne)}if(t!==0){if(t===2&&(l=ko(e),l!==0&&(r=l,t=Xo(e,l))),t===1)throw n=lr,Pt(e,0),ut(e,r),we(e,q()),n;if(t===6)ut(e,r);else{if(l=e.current.alternate,!(r&30)&&!Uf(l)&&(t=dl(e,r),t===2&&(o=ko(e),o!==0&&(r=o,t=Xo(e,o))),t===1))throw n=lr,Pt(e,0),ut(e,r),we(e,q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:bt(e,he,Xe);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=Ri+500-q(),10<t)){if(Yr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_o(bt.bind(null,e,he,Xe),t);break}bt(e,he,Xe);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Oe(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bf(r/1960))-r,10<r){e.timeoutHandle=_o(bt.bind(null,e,he,Xe),r);break}bt(e,he,Xe);break;case 5:bt(e,he,Xe);break;default:throw Error(k(329))}}}return we(e,q()),e.callbackNode===n?pc.bind(null,e):null}function Xo(e,t){var n=An;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=dl(e,t),e!==2&&(t=he,he=n,t!==null&&Go(t)),e}function Go(e){he===null?he=e:he.push.apply(he,e)}function Uf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ae(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~Oi,t&=~Cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function ts(e){if($&6)throw Error(k(327));sn();var t=Yr(e,0);if(!(t&1))return we(e,q()),null;var n=dl(e,t);if(e.tag!==0&&n===2){var r=ko(e);r!==0&&(t=r,n=Xo(e,r))}if(n===1)throw n=lr,Pt(e,0),ut(e,t),we(e,q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,he,Xe),we(e,q()),null}function Ai(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(gn=q()+500,xl&&Nt())}}function Rt(e){dt!==null&&dt.tag===0&&!($&6)&&sn();var t=$;$|=1;var n=Me.transition,r=W;try{if(Me.transition=null,W=1,e)return e()}finally{W=r,Me.transition=n,$=t,!($&6)&&Nt()}}function $i(){ke=tn.current,Q(tn)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(wi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:pn(),Q(ye),Q(de),_i();break;case 5:zi(r);break;case 4:pn();break;case 13:Q(K);break;case 19:Q(K);break;case 10:Ni(r.type._context);break;case 22:case 23:$i()}n=n.return}if(le=e,ee=e=xt(e.current,null),ie=ke=t,ne=0,lr=null,Oi=Cl=Ot=0,he=An=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}_t=null}return e}function mc(e,t){do{var n=ee;try{if(Ci(),Ir.current=al,il){for(var r=X.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}il=!1}if(It=0,re=te=X=null,On=!1,tr=0,Ii.current=null,n===null||n.return===null){ne=1,lr=t,ee=null;break}e:{var o=e,i=n.return,a=n,s=t;if(t=ie,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,y=a,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var g=y.alternate;g?(y.updateQueue=g.updateQueue,y.memoizedState=g.memoizedState,y.lanes=g.lanes):(y.updateQueue=null,y.memoizedState=null)}var S=Ua(i);if(S!==null){S.flags&=-257,Wa(S,i,a,o,t),S.mode&1&&Ba(o,d,t),t=S,s=d;var C=t.updateQueue;if(C===null){var E=new Set;E.add(s),t.updateQueue=E}else C.add(s);break e}else{if(!(t&1)){Ba(o,d,t),Bi();break e}s=Error(k(426))}}else if(Y&&a.mode&1){var I=Ua(i);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Wa(I,i,a,o,t),ki(mn(s,a));break e}}o=s=mn(s,a),ne!==4&&(ne=2),An===null?An=[o]:An.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ju(o,s,t);Da(o,f);break e;case 1:a=s;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(vt===null||!vt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Zu(o,a,t);Da(o,x);break e}}o=o.return}while(o!==null)}vc(n)}catch(b){t=b,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function gc(){var e=sl.current;return sl.current=al,e===null?al:e}function Bi(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(Ot&268435455)&&!(Cl&268435455)||ut(le,ie)}function dl(e,t){var n=$;$|=2;var r=gc();(le!==e||ie!==t)&&(Xe=null,Pt(e,t));do try{Wf();break}catch(l){mc(e,l)}while(!0);if(Ci(),$=n,sl.current=r,ee!==null)throw Error(k(261));return le=null,ie=0,ne}function Wf(){for(;ee!==null;)hc(ee)}function Vf(){for(;ee!==null&&!md();)hc(ee)}function hc(e){var t=xc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?vc(e):ee=t,Ii.current=null}function vc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Of(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=If(n,t,ke),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function bt(e,t,n){var r=W,l=Me.transition;try{Me.transition=null,W=1,Hf(e,t,n,r)}finally{Me.transition=l,W=r}return null}function Hf(e,t,n,r){do sn();while(dt!==null);if($&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Nd(e,o),e===le&&(ee=le=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,wc(Qr,function(){return sn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var i=W;W=1;var a=$;$|=4,Ii.current=null,Af(e,n),dc(n,e),df(bo),Kr=!!jo,bo=jo=null,e.current=n,$f(n),gd(),$=a,W=i,Me.transition=o}else e.current=n;if(jr&&(jr=!1,dt=e,cl=l),o=e.pendingLanes,o===0&&(vt=null),yd(n.stateNode),we(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ul)throw ul=!1,e=Yo,Yo=null,e;return cl&1&&e.tag!==0&&sn(),o=e.pendingLanes,o&1?e===Ko?$n++:($n=0,Ko=e):$n=0,Nt(),null}function sn(){if(dt!==null){var e=Js(cl),t=Me.transition,n=W;try{if(Me.transition=null,W=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,cl=0,$&6)throw Error(k(331));var l=$;for($|=4,P=e.current;P!==null;){var o=P,i=o.child;if(P.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var d=a[s];for(P=d;P!==null;){var y=P;switch(y.tag){case 0:case 11:case 15:Rn(8,y,o)}var v=y.child;if(v!==null)v.return=y,P=v;else for(;P!==null;){y=P;var g=y.sibling,S=y.return;if(sc(y),y===d){P=null;break}if(g!==null){g.return=S,P=g;break}P=S}}}var C=o.alternate;if(C!==null){var E=C.child;if(E!==null){C.child=null;do{var I=E.sibling;E.sibling=null,E=I}while(E!==null)}}P=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,P=i;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,P=f;break e}P=o.return}}var c=e.current;for(P=c;P!==null;){i=P;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,P=p;else e:for(i=c;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sl(9,a)}}catch(b){J(a,a.return,b)}if(a===i){P=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,P=x;break e}P=a.return}}if($=l,Nt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{W=n,Me.transition=t}}return!1}function ns(e,t,n){t=mn(n,t),t=Ju(e,t,1),e=ht(e,t,1),t=pe(),e!==null&&(ir(e,1,t),we(e,t))}function J(e,t,n){if(e.tag===3)ns(e,e,n);else for(;t!==null;){if(t.tag===3){ns(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=mn(n,e),e=Zu(t,e,1),t=ht(t,e,1),e=pe(),t!==null&&(ir(t,1,e),we(t,e));break}}t=t.return}}function Qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ie&n)===n&&(ne===4||ne===3&&(ie&130023424)===ie&&500>q()-Ri?Pt(e,0):Oi|=n),we(e,t)}function yc(e,t){t===0&&(e.mode&1?(t=hr,hr<<=1,!(hr&130023424)&&(hr=4194304)):t=1);var n=pe();e=nt(e,t),e!==null&&(ir(e,t,n),we(e,n))}function Yf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yc(e,n)}function Kf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),yc(e,n)}var xc;xc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,Df(e,t,n);ve=!!(e.flags&131072)}else ve=!1,Y&&t.flags&1048576&&Cu(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Rr(e,t),e=t.pendingProps;var l=cn(t,de.current);an(t,n),l=Pi(null,t,r,e,l,n);var o=Ti();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(o=!0,qr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ji(t),l.updater=kl,t.stateNode=l,l._reactInternals=t,Io(t,r,e,n),t=Ao(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&xi(t),fe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Rr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Gf(r),e=Le(r,e),l){case 0:t=Ro(null,t,r,e,n);break e;case 1:t=Qa(null,t,r,e,n);break e;case 11:t=Va(null,t,r,e,n);break e;case 14:t=Ha(null,t,r,Le(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ro(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Qa(e,t,r,l,n);case 3:e:{if(nc(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,l=o.element,_u(e,t),ll(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=mn(Error(k(423)),t),t=Ya(e,t,r,n,l);break e}else if(r!==l){l=mn(Error(k(424)),t),t=Ya(e,t,r,n,l);break e}else for(Se=gt(t.stateNode.containerInfo.firstChild),Ce=t,Y=!0,Ie=null,n=bu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===l){t=rt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Mu(t),e===null&&Fo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,zo(r,l)?i=null:o!==null&&zo(r,o)&&(t.flags|=32),tc(e,t),fe(e,t,i,n),t.child;case 6:return e===null&&Fo(t),null;case 13:return rc(e,t,n);case 4:return bi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Va(e,t,r,l,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,V(nl,r._currentValue),r._currentValue=i,o!==null)if(Ae(o.value,i)){if(o.children===l.children&&!ye.current){t=rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=qe(-1,n&-n),s.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?s.next=s:(s.next=y.next,y.next=s),d.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Lo(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(k(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Lo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}fe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,an(t,n),l=Pe(l),r=r(l),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Ha(e,t,r,l,n);case 15:return qu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Rr(e,t),t.tag=1,xe(r)?(e=!0,qr(t)):e=!1,an(t,n),Gu(t,r,l),Io(t,r,l,n),Ao(null,t,r,!0,e,n);case 19:return lc(e,t,n);case 22:return ec(e,t,n)}throw Error(k(156,t.tag))};function wc(e,t){return Ys(e,t)}function Xf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new Xf(e,t,n,r)}function Ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gf(e){if(typeof e=="function")return Ui(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ai)return 11;if(e===si)return 14}return 2}function xt(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Br(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ui(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ht:return Tt(n.children,l,o,t);case ii:i=8,l|=8;break;case oo:return e=_e(12,n,t,l|2),e.elementType=oo,e.lanes=o,e;case io:return e=_e(13,n,t,l),e.elementType=io,e.lanes=o,e;case ao:return e=_e(19,n,t,l),e.elementType=ao,e.lanes=o,e;case Ms:return Nl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zs:i=10;break e;case _s:i=9;break e;case ai:i=11;break e;case si:i=14;break e;case it:i=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=_e(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Tt(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=_e(22,e,r,t),e.elementType=Ms,e.lanes=n,e.stateNode={isHidden:!1},e}function eo(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function to(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Wi(e,t,n,r,l,o,i,a,s){return e=new Jf(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ji(o),e}function Zf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kc(e){if(!e)return kt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(xe(n))return ku(e,n,t)}return t}function Sc(e,t,n,r,l,o,i,a,s){return e=Wi(n,r,!0,e,l,o,i,a,s),e.context=kc(null),n=e.current,r=pe(),l=yt(n),o=qe(r,l),o.callback=t??null,ht(n,o,l),e.current.lanes=l,ir(e,l,r),we(e,r),e}function El(e,t,n,r){var l=t.current,o=pe(),i=yt(l);return n=kc(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(l,t,i),e!==null&&(Re(e,l,i,o),Dr(e,l,i)),i}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vi(e,t){rs(e,t),(e=e.alternate)&&rs(e,t)}function qf(){return null}var Cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hi(e){this._internalRoot=e}jl.prototype.render=Hi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));El(e,t,null,null)};jl.prototype.unmount=Hi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){El(null,e,null,null)}),t[tt]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&nu(e)}};function Qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ls(){}function ep(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=fl(i);o.call(d)}}var i=Sc(t,r,e,0,null,!1,!1,"",ls);return e._reactRootContainer=i,e[tt]=i.current,Gn(e.nodeType===8?e.parentNode:e),Rt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=fl(s);a.call(d)}}var s=Wi(e,0,!1,null,null,!1,!1,"",ls);return e._reactRootContainer=s,e[tt]=s.current,Gn(e.nodeType===8?e.parentNode:e),Rt(function(){El(t,s,n,r)}),s}function zl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var s=fl(i);a.call(s)}}El(t,i,e,l)}else i=ep(n,t,e,l,r);return fl(i)}Zs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(di(t,n|1),we(t,q()),!($&6)&&(gn=q()+500,Nt()))}break;case 13:Rt(function(){var r=nt(e,1);if(r!==null){var l=pe();Re(r,e,1,l)}}),Vi(e,1)}};fi=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=pe();Re(t,e,134217728,n)}Vi(e,134217728)}};qs=function(e){if(e.tag===13){var t=yt(e),n=nt(e,t);if(n!==null){var r=pe();Re(n,e,t,r)}Vi(e,t)}};eu=function(){return W};tu=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};yo=function(e,t,n){switch(t){case"input":if(co(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=yl(r);if(!l)throw Error(k(90));Ts(r),co(r,l)}}}break;case"textarea":Ls(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};Bs=Ai;Us=Rt;var tp={usingClientEntryPoint:!1,Events:[sr,Xt,yl,As,$s,Ai]},jn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},np={bundleType:jn.bundleType,version:jn.version,rendererPackageName:jn.rendererPackageName,rendererConfig:jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hs(e),e===null?null:e.stateNode},findFiberByHostInstance:jn.findFiberByHostInstance||qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{ml=br.inject(np),Ve=br}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tp;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qi(t))throw Error(k(200));return Zf(e,t,null,n)};Ee.createRoot=function(e,t){if(!Qi(e))throw Error(k(299));var n=!1,r="",l=Cc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Wi(e,1,!1,null,null,n,!1,r,l),e[tt]=t.current,Gn(e.nodeType===8?e.parentNode:e),new Hi(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Hs(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Rt(e)};Ee.hydrate=function(e,t,n){if(!bl(t))throw Error(k(200));return zl(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Qi(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Cc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Sc(t,null,e,1,n??null,l,!1,o,i),e[tt]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new jl(t)};Ee.render=function(e,t,n){if(!bl(t))throw Error(k(200));return zl(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!bl(e))throw Error(k(40));return e._reactRootContainer?(Rt(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};Ee.unstable_batchedUpdates=Ai;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return zl(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function Nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nc)}catch(e){console.error(e)}}Nc(),Ns.exports=Ee;var rp=Ns.exports,os=rp;ro.createRoot=os.createRoot,ro.hydrateRoot=os.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ec=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var op={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=T.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:o,iconNode:i,...a},s)=>T.createElement("svg",{ref:s,...op,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ec("lucide",l),...a},[...i.map(([d,y])=>T.createElement(d,y)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(e,t)=>{const n=T.forwardRef(({className:r,...l},o)=>T.createElement(ip,{ref:o,iconNode:t,className:Ec(`lucide-${lp(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=Qe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=Qe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=Qe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=Qe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=Qe("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=Qe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=Qe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=Qe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=Qe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=Qe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),sp=`

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
`,up={Mon:{num:16,rows:[["6:00 AM","Morning","preferred",0],["7:00 AM","Morning","reserved",1],["9:30 AM","Morning","open",0],["12:00 PM","Afternoon","open",0],["5:30 PM","Evening","preferred",0],["6:30 PM","Evening","reserved",2]]},Tue:{num:17,rows:[["6:30 AM","Morning","preferred",0],["8:00 AM","Morning","open",0],["11:00 AM","Morning","reserved",0],["1:00 PM","Afternoon","open",0],["5:00 PM","Evening","preferred",0],["7:00 PM","Evening","open",0]]},Wed:{num:18,rows:[["6:00 AM","Morning","reserved",3],["7:30 AM","Morning","preferred",0],["10:00 AM","Morning","open",0],["2:00 PM","Afternoon","open",0],["6:00 PM","Evening","preferred",0]]},Thu:{num:19,rows:[["6:30 AM","Morning","preferred",0],["9:00 AM","Morning","open",0],["12:30 PM","Afternoon","reserved",1],["5:30 PM","Evening","preferred",0],["7:00 PM","Evening","open",0]]},Fri:{num:20,rows:[["6:00 AM","Morning","preferred",0],["8:30 AM","Morning","open",0],["11:30 AM","Morning","reserved",0],["4:30 PM","Evening","open",0],["6:00 PM","Evening","preferred",0]]},Sat:{num:21,rows:[["7:00 AM","Morning","preferred",0],["8:30 AM","Morning","preferred",0],["10:00 AM","Morning","open",0],["11:30 AM","Morning","reserved",2]]}},Wt=["Mon","Tue","Wed","Thu","Fri","Sat"],ss=["Morning","Afternoon","Evening"],cp=["January","February","March","April","May","June","July","August","September","October","November","December"],us=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function dp(){const e={};return Wt.forEach(t=>{e[t]=up[t].rows.map((n,r)=>({id:`${t}-${r}`,day:t,time:n[0],period:n[1],tier:n[2],waitlist:n[3]}))}),e}const Bn={preferred:{label:"Andrea's pick",dot:"#F5841F",icon:Xi},open:{label:"Open",dot:"#FFFFFF",icon:jc},reserved:{label:"Reserved",dot:"#3A3A40",icon:bc}};function fp({liveSlots:e=null,loading:t=!1,onAction:n=null,errorMsg:r=null,onErrorDismiss:l=null}){const o=T.useMemo(dp,[]),i=e??o,[a,s]=T.useState("Mon"),[d,y]=T.useState(0),[v,g]=T.useState({}),[S,C]=T.useState({}),[E,I]=T.useState(null),[f,c]=T.useState(null);T.useEffect(()=>{if(!e)return;const N={};Object.values(e).flat().forEach(L=>{L.userBookingId&&(N[L.id]=L)}),g(N)},[e]),T.useEffect(()=>{r&&(g(N=>{const L={...N};return delete L[r.slotId],L}),I(r.message),l==null||l())},[r]),T.useEffect(()=>{if(!E)return;const N=setTimeout(()=>I(null),2600);return()=>clearTimeout(N)},[E]),T.useEffect(()=>{if(!n)return;const N=new Date,L=N.getDay(),m=new Date(N);m.setDate(N.getDate()-(L===0?6:L-1)+d*7),m.setHours(0,0,0,0),n({type:"weekChange",mondayISO:m.toISOString()})},[d]);const p=new Date,x=(i[a]||[]).filter(N=>{var m;const L=((m=N.slotData)==null?void 0:m.startDate)||N.startDate;return!L||new Date(L)>p}),b=T.useMemo(()=>{const N={};return ss.forEach(L=>{N[L]=x.filter(m=>m.period===L)}),N},[x]),w=T.useMemo(()=>{const N=new Date,L=N.getDay(),m=new Date(N);m.setDate(N.getDate()-(L===0?6:L-1)+d*7);const j={};return Wt.forEach((z,R)=>{const U=new Date(m);U.setDate(m.getDate()+R),j[z]={num:U.getDate(),month:U.getMonth(),year:U.getFullYear()}}),j},[d]),_=T.useMemo(()=>{const N=w[Wt[0]],L=w[Wt[Wt.length-1]];return N.month===L.month?`${cp[N.month]} ${N.year}`:`${us[N.month]} - ${us[L.month]} ${L.year}`},[w]),M=N=>I(N);function B(N){g(L=>({...L,[N.id]:N})),C(L=>{const m={...L};return delete m[N.id],m}),M(`Booked - ${N.day}, ${N.time}`),n==null||n({type:"book",slot:N})}function h(N){if(N.tier==="open"){const L=i[N.day].find(m=>m.tier==="preferred"&&!v[m.id]);if(L){c({slot:N,alt:L});return}}B(N)}function F(N){const L=(N.waitlist||0)+1;C(m=>({...m,[N.id]:{slot:N,pos:L}})),M(`You're #${L} on the waitlist - ${N.day}, ${N.time}`),n==null||n({type:"waitlist",slot:N})}function D(N){g(L=>{const m={...L};return delete m[N],m}),M("Booking canceled"),n==null||n({type:"cancel",slotId:N})}function A(N){C(L=>{const m={...L};return delete m[N],m}),M("Left the waitlist"),n==null||n({type:"leaveWaitlist",slotId:N})}const Z=Object.values(v),Ye=Object.values(S);return u.jsxs("div",{className:"ab",children:[u.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');"}),u.jsx("style",{children:sp}),u.jsxs("div",{className:"ab-wrap",children:[u.jsxs("h1",{className:"ab-h1",children:["Book your ",u.jsx("span",{className:"acc",children:"week."})]}),u.jsx("p",{className:"ab-sub",children:"Reduce pain, build strength, move better - with Andrea in Lake Ridge. Highlighted times are the ones she recommends; booking them keeps her week flowing so there's more room for everyone."}),u.jsxs("div",{className:"ab-legend",children:[u.jsxs("span",{className:"ab-key",children:[u.jsx("span",{className:"ab-dot",style:{background:Bn.preferred.dot}}),"Preferred - recommended"]}),u.jsxs("span",{className:"ab-key",children:[u.jsx("span",{className:"ab-dot",style:{background:Bn.open.dot}}),"Open - available, not preferred"]}),u.jsxs("span",{className:"ab-key",children:[u.jsx("span",{className:"ab-dot",style:{background:Bn.reserved.dot}}),"Reserved - join waitlist"]})]}),u.jsxs("div",{className:"ab-week-hd",children:[u.jsx("div",{className:"ab-week-month",children:_}),u.jsx("div",{className:"ab-week-div"}),u.jsxs("div",{className:"ab-week-nav",children:[u.jsx("button",{className:"ab-week-arr",onClick:()=>y(N=>N-1),"aria-label":"Previous week",children:u.jsx(Ki,{size:18})}),u.jsx("div",{className:"ab-days",children:Wt.map(N=>{const L=(i[N]||[]).filter(z=>{var U;const R=((U=z.slotData)==null?void 0:U.startDate)||z.startDate;return!R||new Date(R)>p}),m=L.some(z=>z.tier==="preferred"),j=L.length>0&&!m&&L.every(z=>z.tier==="reserved");return u.jsxs("div",{className:`ab-day${N===a?" on":""}`,role:"button",tabIndex:0,onClick:()=>s(N),onKeyDown:z=>z.key==="Enter"&&s(N),children:[u.jsx("div",{className:"ab-day-dow",children:N}),u.jsx("div",{className:"ab-day-num",children:w[N].num}),(m||j)&&u.jsx("span",{className:"ab-day-pref",style:j?{background:"#555558"}:void 0})]},N)})}),u.jsx("button",{className:"ab-week-arr",onClick:()=>y(N=>N+1),"aria-label":"Next week",children:u.jsx(Ft,{size:18})})]}),u.jsx("div",{className:"ab-week-div",style:{marginTop:14}})]}),t?u.jsx("div",{className:"ab-loading",children:"Loading your schedule…"}):ss.map(N=>b[N].length?u.jsxs("div",{children:[u.jsx("div",{className:"ab-period",children:N}),b[N].map(L=>u.jsx(pp,{slot:L,mine:!!v[L.id],wait:S[L.id],onBook:()=>h(L),onWaitlist:()=>F(L),onCancel:()=>D(L.id),onLeave:()=>A(L.id)},L.id))]},N):null)]}),u.jsx("div",{className:"ab-foot",children:u.jsxs("button",{className:"ab-foot-btn",onClick:()=>n==null?void 0:n({type:"mySchedule"}),children:[u.jsx("span",{className:"ab-foot-btn-label",children:"My schedule"}),Z.length+Ye.length>0?u.jsx("span",{className:"ab-foot-btn-count",children:Z.length+Ye.length}):u.jsx("span",{style:{color:"var(--muted)",fontSize:13,fontWeight:400},children:"Nothing booked yet"}),u.jsx(Ft,{size:16,style:{color:"var(--muted)"}})]})}),E&&u.jsxs("div",{className:"ab-toast",children:[u.jsx(Yi,{size:16,className:"ic"}),E]}),f&&u.jsx("div",{className:"ab-scrim",onClick:()=>c(null),children:u.jsxs("div",{className:"ab-modal",onClick:N=>N.stopPropagation(),children:[u.jsx("div",{className:"ab-modal-ico",children:u.jsx(Xi,{size:22})}),u.jsxs("h3",{children:["A ",u.jsx("span",{className:"acc",children:"preferred"})," time close by"]}),u.jsxs("p",{children:[u.jsx("b",{children:f.slot.time})," works, but Andrea has an open recommended slot at ",u.jsx("b",{children:f.alt.time})," the same day. Choosing it helps her fit more clients in."]}),u.jsxs("div",{className:"ab-modal-acts",children:[u.jsxs("button",{className:"ab-btn ab-btn-pref",onClick:()=>{B(f.alt),c(null)},children:["Book ",f.alt.time," instead"]}),u.jsxs("button",{className:"ab-btn ab-btn-line",onClick:()=>{B(f.slot),c(null)},children:["Keep ",f.slot.time]})]})]})})]})}function pp({slot:e,mine:t,wait:n,onBook:r,onWaitlist:l,onCancel:o,onLeave:i}){const a=t?"mine":e.tier,s=t?Yi:Bn[e.tier].icon,d=t?"Your session":Bn[e.tier].label;return u.jsxs("div",{className:`ab-slot ${a}`,children:[u.jsx("div",{className:"ab-ico",children:u.jsx(s,{size:18})}),u.jsxs("div",{className:"ab-body",children:[u.jsx("div",{className:"ab-eye",children:d}),u.jsx("div",{className:"ab-time",children:e.time}),u.jsx("div",{className:"ab-meta",children:t?`Confirmed · ${e.service||`${e.duration||60} min`}`:e.tier==="reserved"?n?u.jsxs("span",{className:"ab-wl",children:[u.jsx(as,{size:12})," You're #",n.pos," on the waitlist"]}):u.jsxs("span",{className:"ab-wl",children:[u.jsx(as,{size:12})," ",e.waitlist>0?`${e.waitlist} waiting`:"Taken - be first to wait"]}):e.service||"Personal Training · 60 min"})]}),u.jsx("div",{className:"ab-act",children:t?u.jsxs("button",{className:"ab-btn ab-btn-pill",onClick:o,children:[u.jsx(Gi,{size:14})," Cancel"]}):e.tier==="reserved"?n?u.jsx("button",{className:"ab-btn ab-btn-wait",onClick:i,children:"Leave waitlist"}):u.jsx("button",{className:"ab-btn ab-btn-wait",onClick:l,children:"Join waitlist"}):e.tier==="preferred"?u.jsxs("button",{className:"ab-btn ab-btn-pref",onClick:r,children:["Book ",u.jsx(Ft,{size:14,style:{verticalAlign:"-2px"}})]}):u.jsx("button",{className:"ab-btn ab-btn-open",onClick:r,children:"Book"})})]})}const mp=`

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
`,bn=["Mon","Tue","Wed","Thu","Fri","Sat"],gp=["January","February","March","April","May","June","July","August","September","October","November","December"],cs=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],hp=["6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM"],Ur=["Personal Training - 60 min","Personal Training - 45 min","Personal Training - 30 min","Mobility Training","Phone Consultation","Intro Offer - Wellness Consultation"],Jo=[{key:"preferred",label:"Preferred",icon:Xi,dot:"#F5841F"},{key:"np",label:"Non-pref",icon:jc,dot:"#FFFFFF"},{key:"reserved",label:"Reserved",icon:bc,dot:"#6A665F"}],vp=Object.fromEntries(Jo.map(e=>[e.key,e]));function ds(e){const t=e.match(/(\d+):(\d+)\s*(AM|PM)/);let n=+t[1]%12;return t[3]==="PM"&&(n+=12),n*60+ +t[2]}let Zo=100;function yp(){return{Mon:[],Tue:[],Wed:[],Thu:[],Fri:[],Sat:[]}}function xp(){const e=(t,n,r=Ur[0])=>({id:++Zo,time:t,tier:n,service:r});return{Mon:[e("6:00 AM","preferred"),e("9:30 AM","np"),e("5:30 PM","preferred"),e("7:00 AM","reserved")],Tue:[e("6:30 AM","preferred"),e("1:00 PM","np"),e("5:00 PM","preferred")],Wed:[e("7:30 AM","preferred"),e("10:00 AM","np"),e("6:00 PM","preferred")],Thu:[e("6:30 AM","preferred"),e("9:00 AM","np"),e("5:30 PM","preferred")],Fri:[e("6:00 AM","preferred"),e("4:30 PM","np")],Sat:[e("7:00 AM","preferred"),e("8:30 AM","preferred")]}}function wp({livePrefs:e=null,loading:t=!1,onAction:n,saving:r=!1}){const[l,o]=T.useState(xp),[i,a]=T.useState("Mon"),[s,d]=T.useState(!1),[y,v]=T.useState(""),[g,S]=T.useState(0);T.useEffect(()=>{if(e===null)return;const h=yp();e.forEach(F=>{h[F.dayOfWeek]&&h[F.dayOfWeek].push({id:++Zo,time:F.time,tier:F.tier==="open"?"np":F.tier,service:F.service||Ur[0]})}),o(h)},[e]);const C=T.useMemo(()=>{const h=new Date,F=h.getDay(),D=new Date(h);D.setDate(h.getDate()-(F===0?6:F-1)+g*7);const A={};return bn.forEach((Z,Ye)=>{const N=new Date(D);N.setDate(D.getDate()+Ye),A[Z]={num:N.getDate(),month:N.getMonth(),year:N.getFullYear()}}),A},[g]),E=T.useMemo(()=>{const h=C[bn[0]],F=C[bn[bn.length-1]];return h.month===F.month?`${gp[h.month]} ${h.year}`:`${cs[h.month]} - ${cs[F.month]} ${F.year}`},[C]),I=T.useMemo(()=>[...l[i]].sort((h,F)=>ds(h.time)-ds(F.time)),[l,i]),f=T.useMemo(()=>{const h={preferred:0,np:0,reserved:0};return l[i].forEach(F=>h[F.tier]++),h},[l,i]),c=new Set(l[i].map(h=>h.time)),p=hp.filter(h=>!c.has(h));function x(h,F){o(D=>({...D,[i]:D[i].map(A=>A.id===h?{...A,tier:F}:A)}))}function b(h,F){o(D=>({...D,[i]:D[i].map(A=>A.id===h?{...A,service:F}:A)}))}function w(h){o(F=>({...F,[i]:F[i].filter(D=>D.id!==h)}))}function _(h){o(F=>({...F,[i]:[...F[i],{id:++Zo,time:h,tier:"preferred",service:Ur[0]}]})),d(!1),v("")}function M(){if(!y)return;const[h,F]=y.split(":").map(Number),D=h<12?"AM":"PM",Z=`${h%12||12}:${String(F).padStart(2,"0")} ${D}`;c.has(Z)||_(Z)}function B(){const h=[];Object.entries(l).forEach(([F,D])=>{D.forEach(A=>{h.push({dayOfWeek:F,time:A.time,tier:A.tier==="np"?"open":A.tier,service:A.service})})}),n==null||n({type:"savePrefs",items:h})}return u.jsxs("div",{className:"fg",children:[u.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');"}),u.jsx("style",{children:mp}),u.jsxs("div",{className:"fg-wrap",children:[u.jsx("h1",{className:"fg-h1",children:"Set your availability"}),u.jsx("p",{className:"fg-sub",children:"Add the times you'll take clients, then tag each one. Preferred times get highlighted to clients; reserved times are held and can't be booked."}),u.jsx("div",{className:"fg-legend",children:Jo.map(h=>u.jsxs("span",{className:"fg-key",children:[u.jsx("span",{className:"fg-dot",style:{background:h.dot}}),h.key==="preferred"&&"Preferred — recommended",h.key==="np"&&"Non-preferred — available",h.key==="reserved"&&"Reserved — held"]},h.key))}),u.jsxs("div",{className:"fg-week-hd",children:[u.jsx("div",{className:"fg-week-month",children:E}),u.jsx("div",{className:"fg-week-div"}),u.jsxs("div",{className:"fg-week-nav",children:[u.jsx("button",{className:"fg-week-arr",onClick:()=>S(h=>h-1),"aria-label":"Previous week",children:u.jsx(Ki,{size:18})}),u.jsx("div",{className:"fg-days",children:bn.map(h=>u.jsxs("div",{className:`fg-day${h===i?" on":""}`,role:"button",tabIndex:0,onClick:()=>{a(h),d(!1)},onKeyDown:F=>F.key==="Enter"&&a(h),children:[u.jsx("div",{className:"fg-day-dow",children:h}),u.jsx("div",{className:"fg-day-num",children:C[h].num}),u.jsxs("div",{className:"fg-day-c",children:[l[h].length," slot",l[h].length!==1?"s":""]})]},h))}),u.jsx("button",{className:"fg-week-arr",onClick:()=>S(h=>h+1),"aria-label":"Next week",children:u.jsx(Ft,{size:18})})]}),u.jsx("div",{className:"fg-week-div",style:{marginTop:14}})]}),u.jsxs("div",{className:"fg-tally",children:[u.jsxs("span",{children:[u.jsx("i",{style:{color:"#F5841F"},children:"●"})," ",u.jsx("b",{children:f.preferred})," preferred"]}),u.jsxs("span",{children:[u.jsx("i",{style:{color:"#FFFFFF"},children:"●"})," ",u.jsx("b",{children:f.np})," non-pref"]}),u.jsxs("span",{children:[u.jsx("i",{style:{color:"#6A665F"},children:"●"})," ",u.jsx("b",{children:f.reserved})," reserved"]})]}),t?u.jsx("div",{className:"fg-empty",style:{padding:"40px 0"},children:"Loading your schedule…"}):u.jsxs(u.Fragment,{children:[I.length===0&&!s&&u.jsxs("div",{className:"fg-empty",children:["No times set for ",i," yet. Add one below."]}),I.map(h=>{const F=vp[h.tier].icon;return u.jsxs("div",{className:`fg-blk ${h.tier}`,children:[u.jsxs("div",{className:"fg-blk-top",children:[u.jsxs("span",{className:"fg-blk-time",children:[u.jsx("span",{className:"fg-blk-ic",children:u.jsx(F,{size:15})}),h.time]}),u.jsx("button",{className:"fg-rm",onClick:()=>w(h.id),"aria-label":"Remove time",children:u.jsx(Gi,{size:18})})]}),u.jsx("div",{className:"fg-seg",role:"group","aria-label":"Tier",children:Jo.map(D=>{const A=D.icon,Z=h.tier===D.key;return u.jsxs("button",{className:`${Z?"on":""} ${D.key}`,onClick:()=>x(h.id,D.key),children:[u.jsx(A,{size:13})," ",D.label]},D.key)})}),u.jsx("div",{className:"fg-svc",children:u.jsx("select",{value:h.service,onChange:D=>b(h.id,D.target.value),"aria-label":"Service",children:Ur.map(D=>u.jsx("option",{value:D,children:D},D))})})]},h.id)}),s?u.jsxs("div",{className:"fg-palette",children:[u.jsxs("div",{className:"fg-palette-h",children:[u.jsx("span",{children:"Pick a time to add"}),u.jsx("button",{onClick:()=>d(!1),children:"Cancel"})]}),p.length===0?u.jsxs("div",{className:"fg-empty",style:{padding:"4px 0"},children:["Every preset time is already added for ",i,"."]}):u.jsx("div",{className:"fg-times",children:p.map(h=>u.jsx("button",{className:"fg-tchip",onClick:()=>_(h),children:h},h))}),u.jsxs("div",{className:"fg-custom",children:[u.jsx("span",{className:"fg-custom-label",children:"Custom"}),u.jsx("input",{type:"time",value:y,onChange:h=>v(h.target.value),onKeyDown:h=>h.key==="Enter"&&M()}),u.jsx("button",{className:"fg-custom-add",disabled:!y,onClick:M,children:"Add"})]})]}):u.jsxs("button",{className:"fg-add",onClick:()=>d(!0),children:[u.jsx(ap,{size:17})," Add a time"]})]})]}),u.jsx("div",{className:"fg-save",children:u.jsxs("div",{className:"fg-save-in",children:[u.jsx("span",{className:"fg-save-t",children:"Changes apply to all weeks — clients see preferred times highlighted"}),u.jsxs("button",{className:"fg-btn",disabled:r,onClick:B,children:[u.jsx(Yi,{size:16})," ",r?"Saving…":"Save week"]})]})})]})}const zc="/assets/logo.png",kp=window.self!==window.top,Sp=`
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
`;function Cp({slot:e=null}){const[t,n]=T.useState("idle"),[r,l]=T.useState("");T.useEffect(()=>{const s=d=>{var y;if((y=d.data)!=null&&y.type&&(d.data.type==="abate-confirm-success"&&n("success"),d.data.type==="abate-confirm-error")){const v=d.data.message||"",g=v.toLowerCase().includes("plan")||v.toLowerCase().includes("pricing")?"No active session plan found. Please contact Andrea to update your plan.":v||"Could not confirm booking. Please try again.";l(g),n("error")}};return window.addEventListener("message",s),()=>window.removeEventListener("message",s)},[]);const o=()=>{n("loading"),l(""),kp&&window.parent.postMessage({type:"abate-confirm"},"*")},i=()=>{n("idle"),l("")},a=t==="loading"?"Booking…":"Confirm my session →";return u.jsxs("div",{className:"cv",children:[u.jsx("style",{children:Sp}),u.jsx("div",{className:"cv-header",children:u.jsx("img",{src:zc,alt:"Abate Wellness",className:"cv-logo"})}),u.jsx("hr",{className:"cv-rule"}),u.jsx("div",{className:"cv-body",children:t==="success"?u.jsxs("div",{className:"cv-success",children:[u.jsx("div",{className:"cv-success-icon",children:"✓"}),u.jsxs("div",{className:"cv-success-h",children:["You're ",u.jsx("em",{children:"booked"})]}),u.jsx("div",{className:"cv-success-sub",children:"Andrea will see you then. Heading back to your schedule…"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"cv-heading",children:["Confirm your ",u.jsx("em",{children:"session"})]}),e!=null&&e.service?u.jsxs("div",{className:"cv-card",children:[u.jsxs("div",{className:"cv-card-top",children:[u.jsx("div",{className:"cv-card-eyebrow",children:"Session details"}),u.jsx("div",{className:"cv-card-service",children:e.service})]}),u.jsxs("div",{className:"cv-card-bottom",children:[e.day&&u.jsxs("div",{className:"cv-card-item",children:[u.jsx("div",{className:"cv-card-item-label",children:"Date"}),u.jsx("div",{className:"cv-card-item-value",children:e.day})]}),e.time&&u.jsxs("div",{className:"cv-card-item",children:[u.jsx("div",{className:"cv-card-item-label",children:"Time"}),u.jsx("div",{className:"cv-card-item-value",children:e.time})]})]})]}):u.jsx("div",{className:"cv-loading-slot",children:"Loading session details…"}),t==="error"&&u.jsx("div",{className:"cv-error",children:r}),t==="error"?u.jsx("button",{className:"cv-btn",onClick:i,children:"Try again"}):u.jsx("button",{className:"cv-btn",onClick:o,disabled:t==="loading",children:a}),u.jsx("div",{className:"cv-policy",children:"By confirming you agree to Abate Wellness's cancellation policy."})]})})]})}const zr=window.self!==window.top,Np=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,Ep=e=>Np.test(e||""),jp=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],no=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function bp(e){const t=new Date(e),n=t.getDay();return t.setDate(t.getDate()-(n===0?6:n-1)),t.setHours(0,0,0,0),t}function _r(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function zp(e){return e.toLocaleDateString("en-US",{month:"long",year:"numeric"})}function _p(e){return new Date(e).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function Mp(e){return new Date(e).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function fs(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const Pp=`
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
`;function Tp({sessions:e=null,onBook:t=null}){const[n,r]=T.useState(e),[l,o]=T.useState(null),[i,a]=T.useState("sessions"),s=(()=>{const m=new Date;return m.setHours(0,0,0,0),m})(),[d,y]=T.useState(()=>bp(new Date)),[v,g]=T.useState(null),[S,C]=T.useState(!1),[E,I]=T.useState({}),[f,c]=T.useState(!1),[p,x]=T.useState(!1),[b,w]=T.useState(!1);T.useEffect(()=>{e!==null&&r(e)},[e]),T.useEffect(()=>{const m=j=>{var z,R,U;if((z=j.data)!=null&&z.type)switch(j.data.type){case"abate-schedule-data":r(j.data.sessions||[]);break;case"abate-schedule-cancelled":r(Bt=>(Bt||[]).filter(Ke=>Ke._id!==j.data.recordId)),o(null);break;case"abate-schedule-cancel-error":o(null);break;case"abate-auto-prefs-data":C(((R=j.data.prefs)==null?void 0:R.enabled)||!1),I(((U=j.data.prefs)==null?void 0:U.slots)||{}),c(!0);break;case"abate-auto-prefs-saved":x(!1),w(!0),setTimeout(()=>w(!1),3e3);break}};return window.addEventListener("message",m),()=>window.removeEventListener("message",m)},[]),T.useEffect(()=>{i==="auto"&&!f&&zr&&window.parent.postMessage({type:"abate-auto-prefs-get"},"*")},[i,f]);const _=m=>{o(m._id),zr&&window.parent.postMessage({type:"abate-schedule-cancel",recordId:m._id},"*")},M=()=>{zr?window.parent.postMessage({type:"abate-schedule-book"},"*"):t&&t()},B=()=>{x(!0),zr&&window.parent.postMessage({type:"abate-auto-prefs-save",prefs:{enabled:S,slots:E}},"*")},h=m=>{I(j=>{const z={...j};return z[m]!==void 0?delete z[m]:z[m]="",z})},F=(m,j)=>I(z=>({...z,[m]:j})),D=Array.from({length:7},(m,j)=>_r(d,j)),A=(n||[]).filter(m=>{const j=new Date(m.startDate);return j>=d&&j<_r(d,7)}),Z=A.reduce((m,j)=>{const z=new Date(j.startDate),R=D.findIndex(U=>fs(U,z));return R>=0&&(m[R]=m[R]||[],m[R].push(j)),m},{}),Ye=(v!==null?Z[v]||[]:A).slice().sort((m,j)=>new Date(m.startDate)-new Date(j.startDate)),N=(n||[]).length,L=n===null;return u.jsxs("div",{className:"ms",children:[u.jsx("style",{children:Pp}),u.jsx("div",{className:"ms-header",children:u.jsx("img",{src:zc,alt:"Abate Wellness",className:"ms-logo"})}),u.jsx("hr",{className:"ms-rule"}),u.jsxs("div",{className:"ms-title-row",children:[u.jsxs("h1",{className:"ms-title",children:["Your ",u.jsx("em",{children:"schedule"})]}),!L&&N>0&&u.jsxs("span",{className:"ms-title-count",children:[N," upcoming"]})]}),u.jsxs("div",{className:"ms-tabs",children:[u.jsxs("button",{className:`ms-tab${i==="sessions"?" active":""}`,onClick:()=>a("sessions"),children:["My sessions",!L&&N>0&&u.jsx("span",{className:"ms-tab-badge",children:N})]}),u.jsx("button",{className:`ms-tab${i==="auto"?" active":""}`,onClick:()=>a("auto"),children:"Auto-schedule"})]}),i==="sessions"&&u.jsx(u.Fragment,{children:L?u.jsx("div",{className:"ms-loading",children:"Loading your schedule…"}):N===0?u.jsxs("div",{className:"ms-empty",children:[u.jsx("div",{className:"ms-empty-icon",children:u.jsx(is,{size:24})}),u.jsx("div",{className:"ms-empty-h",children:"No upcoming sessions"}),u.jsx("div",{className:"ms-empty-sub",children:"Book your first session to get started."}),u.jsx("div",{className:"ms-book-wrap",style:{padding:"0",marginTop:"4px"},children:u.jsxs("button",{className:"ms-book-btn",onClick:M,children:["Book a session ",u.jsx(Ft,{size:16})]})})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"ms-week-nav",children:[u.jsx("button",{className:"ms-week-arrow",onClick:()=>{y(m=>_r(m,-7)),g(null)},children:u.jsx(Ki,{size:16})}),u.jsx("span",{className:"ms-week-month",children:zp(d)}),u.jsx("button",{className:"ms-week-arrow",onClick:()=>{y(m=>_r(m,7)),g(null)},children:u.jsx(Ft,{size:16})})]}),u.jsx("div",{className:"ms-days",children:D.map((m,j)=>{var z;return u.jsxs("div",{className:`ms-day${fs(m,s)?" today":""}${v===j?" sel":""}`,onClick:()=>g(v===j?null:j),children:[u.jsx("span",{className:"ms-day-abbr",children:jp[j]}),u.jsx("span",{className:"ms-day-num",children:m.getDate()}),((z=Z[j])==null?void 0:z.length)>0&&u.jsx("span",{className:"ms-day-dot"})]},j)})}),Ye.length===0?u.jsxs("div",{className:"ms-empty",style:{marginTop:32},children:[u.jsx("div",{className:"ms-empty-icon",children:u.jsx(is,{size:24})}),u.jsx("div",{className:"ms-empty-h",children:v!==null?`No sessions on ${no[v]}`:"No sessions this week"}),u.jsx("div",{className:"ms-empty-sub",children:"Use the arrows to browse other weeks."})]}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"ms-section",children:v!==null?no[v]:"This week"}),u.jsx("div",{className:"ms-list",children:Ye.map(m=>u.jsxs("div",{className:"ms-card",children:[u.jsxs("div",{className:"ms-card-body",children:[u.jsx("div",{className:"ms-card-date",children:Mp(m.startDate)}),u.jsx("div",{className:"ms-card-time",children:_p(m.startDate)}),m.service&&!Ep(m.service)&&u.jsx("div",{className:"ms-card-svc",children:m.service})]}),u.jsxs("button",{className:"ms-cancel-btn",onClick:()=>_(m),disabled:l===m._id,children:[u.jsx(Gi,{size:13}),l===m._id?"Cancelling…":"Cancel"]})]},m._id))})]}),u.jsx("div",{className:"ms-book-wrap",children:u.jsxs("button",{className:"ms-book-btn",onClick:M,children:["Book another session ",u.jsx(Ft,{size:16})]})})]})}),i==="auto"&&u.jsxs("div",{className:"ms-auto",children:[u.jsx("p",{className:"ms-auto-desc",children:"Choose which days and times you train each week. Once saved and enabled, those slots will be automatically reserved for you — no manual booking needed."}),u.jsxs("div",{className:`ms-auto-master${S?" on":""}`,children:[u.jsxs("div",{children:[u.jsx("div",{className:"ms-auto-master-label",children:"Enable auto-schedule"}),u.jsx("div",{className:"ms-auto-master-sub",children:S?"On — your recurring slots will be reserved each week":"Off — you book each session manually"})]}),u.jsx("button",{className:"ms-toggle","data-on":String(S),onClick:()=>C(m=>!m)})]}),u.jsx("div",{className:"ms-auto-days",children:no.map((m,j)=>{const z=E[j]!==void 0;return u.jsxs("div",{className:`ms-auto-row${z?" on":""}${S?"":" disabled"}`,children:[u.jsx("button",{className:"ms-toggle","data-on":String(z),onClick:()=>h(j)}),u.jsx("span",{className:"ms-auto-day-name",children:m}),z?u.jsx("input",{type:"time",className:"ms-auto-time-input",value:E[j]||"",onChange:R=>F(j,R.target.value)}):u.jsx("span",{className:"ms-auto-time-off",children:"— : —"})]},j)})}),u.jsxs("div",{className:"ms-auto-save",children:[u.jsx("button",{className:"ms-save-btn",onClick:B,disabled:p,children:p?"Saving…":"Save schedule"}),b&&u.jsx("span",{className:"ms-saved-label",children:"✓ Saved"})]})]})]})}const Be=window.self!==window.top;function Fp(){const e=new URLSearchParams(window.location.search).get("view");return e==="admin"?"admin":e==="client"?"client":e==="confirm"?"confirm":e==="schedule"?"schedule":Be?null:"client"}function Lp(){const[e,t]=T.useState(Fp),[n,r]=T.useState(null),[l,o]=T.useState(null),[i,a]=T.useState(null),[s,d]=T.useState({}),[y,v]=T.useState(null),[g,S]=T.useState(null),[C,E]=T.useState(!Be),[I,f]=T.useState(!1),c=T.useRef(null);T.useEffect(()=>{let w;const _=()=>{clearTimeout(w),w=setTimeout(()=>{var F;const h=(F=c.current)==null?void 0:F.scrollHeight;h>0&&window.parent.postMessage({type:"abate-resize",height:h+40},"*")},50)},M=new ResizeObserver(_);c.current&&M.observe(c.current),_(),Be&&window.parent.postMessage({type:"abate-ready"},"*");const B=h=>{var F;if((F=h.data)!=null&&F.type){if(h.data.type==="abate-mode"&&t(h.data.mode),h.data.type==="abate-data"){const D=h.data.slots??null;if(r(D),D){const A={};Object.values(D).flat().forEach(Z=>{Z.userBookingId&&(A[Z.id]=Z.userBookingId)}),Object.keys(A).length>0&&d(Z=>({...A,...Z}))}}h.data.type==="abate-booked"&&d(D=>({...D,[h.data.slotId]:h.data.bookingId})),h.data.type==="abate-error"&&v({slotId:h.data.slotId,message:h.data.message}),h.data.type==="abate-confirm-data"&&o(h.data.slot??null),h.data.type==="abate-schedule-data"&&a(h.data.sessions??[]),h.data.type==="abate-prefs"&&(S(h.data.prefs??[]),E(!0)),h.data.type==="abate-prefs-saved"&&f(!1),h.data.type==="abate-prefs-error"&&f(!1)}};return window.addEventListener("message",B),()=>{clearTimeout(w),M.disconnect(),window.removeEventListener("message",B)}},[]);const p=T.useCallback(w=>{if(Be)switch(w.type){case"weekChange":window.parent.postMessage({type:"abate-week",mondayISO:w.mondayISO},"*");break;case"book":window.parent.postMessage({type:"abate-book",slotId:w.slot.id,slotData:w.slot.slotData,slotInfo:{day:w.slot.day,time:w.slot.time,service:w.slot.service}},"*");break;case"waitlist":window.parent.postMessage({type:"abate-waitlist",slotId:w.slot.id,slotData:w.slot.slotData,slotInfo:{day:w.slot.day,time:w.slot.time,service:w.slot.service}},"*");break;case"cancel":window.parent.postMessage({type:"abate-cancel",slotId:w.slotId,bookingId:s[w.slotId]},"*");break;case"mySchedule":window.parent.postMessage({type:"abate-my-schedule"},"*");break;case"leaveWaitlist":window.parent.postMessage({type:"abate-leave-waitlist",slotId:w.slotId},"*");break;case"savePrefs":f(!0),window.parent.postMessage({type:"abate-save-prefs",items:w.items},"*");break}},[s]),x=(()=>{const w=new URLSearchParams(window.location.search);return w.get("serviceId")?{serviceId:w.get("serviceId"),startDate:w.get("startDate"),endDate:w.get("endDate"),service:w.get("service"),day:w.get("day"),time:w.get("time")}:null})();let b;return e==="confirm"?b=u.jsx(Cp,{slot:Be?l:x}):e==="schedule"?b=u.jsx(Tp,{sessions:Be?i:[]}):e==="admin"?b=u.jsx(wp,{livePrefs:Be?g:null,loading:Be&&!C,onAction:p,saving:I}):e==="client"?b=u.jsx(fp,{liveSlots:Be?n:null,loading:Be&&n===null,onAction:p,errorMsg:y,onErrorDismiss:()=>v(null)}):b=u.jsx("div",{style:{background:"#0B0B0C",minHeight:"600px"}}),u.jsx("div",{ref:c,children:b})}ro.createRoot(document.getElementById("root")).render(u.jsx(Hc.StrictMode,{children:u.jsx(Lp,{})}));
