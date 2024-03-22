import{f as u,ap as pe}from"./index-dcee1366.js";import{q as G,d as ge,$ as be}from"./index-f393ed05.js";let _=0;function ft(){u.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:z()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:z()),_++,()=>{_===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),_--}},[])}function z(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const D="focusScope.autoFocusOnMount",U="focusScope.autoFocusOnUnmount",Z={bubbles:!1,cancelable:!0},dt=u.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:c,onUnmountAutoFocus:i,...l}=e,[o,S]=u.useState(null),b=G(c),g=G(i),f=u.useRef(null),v=ge(t,a=>S(a)),h=u.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;u.useEffect(()=>{if(r){let a=function(m){if(h.paused||!o)return;const p=m.target;o.contains(p)?f.current=p:$(f.current,{select:!0})},s=function(m){if(h.paused||!o)return;const p=m.relatedTarget;p!==null&&(o.contains(p)||$(f.current,{select:!0}))},d=function(m){if(document.activeElement===document.body)for(const y of m)y.removedNodes.length>0&&$(o)};document.addEventListener("focusin",a),document.addEventListener("focusout",s);const E=new MutationObserver(d);return o&&E.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",a),document.removeEventListener("focusout",s),E.disconnect()}}},[r,o,h.paused]),u.useEffect(()=>{if(o){Q.add(h);const a=document.activeElement;if(!o.contains(a)){const d=new CustomEvent(D,Z);o.addEventListener(D,b),o.dispatchEvent(d),d.defaultPrevented||(ye($e(ce(o)),{select:!0}),document.activeElement===a&&$(o))}return()=>{o.removeEventListener(D,b),setTimeout(()=>{const d=new CustomEvent(U,Z);o.addEventListener(U,g),o.dispatchEvent(d),d.defaultPrevented||$(a??document.body,{select:!0}),o.removeEventListener(U,g),Q.remove(h)},0)}}},[o,b,g,h]);const w=u.useCallback(a=>{if(!n&&!r||h.paused)return;const s=a.key==="Tab"&&!a.altKey&&!a.ctrlKey&&!a.metaKey,d=document.activeElement;if(s&&d){const E=a.currentTarget,[m,p]=Ee(E);m&&p?!a.shiftKey&&d===p?(a.preventDefault(),n&&$(m,{select:!0})):a.shiftKey&&d===m&&(a.preventDefault(),n&&$(p,{select:!0})):d===E&&a.preventDefault()}},[n,r,h.paused]);return u.createElement(be.div,pe({tabIndex:-1},l,{ref:v,onKeyDown:w}))});function ye(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if($(r,{select:t}),document.activeElement!==n)return}function Ee(e){const t=ce(e),n=q(t,e),r=q(t.reverse(),e);return[n,r]}function ce(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const c=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||c?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function q(e,t){for(const n of e)if(!Se(n,{upTo:t}))return n}function Se(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function we(e){return e instanceof HTMLInputElement&&"select"in e}function $(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&we(e)&&t&&e.select()}}const Q=Ce();function Ce(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=J(e,t),e.unshift(t)},remove(t){var n;e=J(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function J(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function $e(e){return e.filter(t=>t.tagName!=="A")}var ke=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},k=new WeakMap,N=new WeakMap,F={},H=0,ue=function(e){return e&&(e.host||ue(e.parentNode))},Ae=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=ue(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Te=function(e,t,n,r){var c=Ae(t,Array.isArray(e)?e:[e]);F[n]||(F[n]=new WeakMap);var i=F[n],l=[],o=new Set,S=new Set(c),b=function(f){!f||o.has(f)||(o.add(f),b(f.parentNode))};c.forEach(b);var g=function(f){!f||S.has(f)||Array.prototype.forEach.call(f.children,function(v){if(o.has(v))g(v);else try{var h=v.getAttribute(r),w=h!==null&&h!=="false",a=(k.get(v)||0)+1,s=(i.get(v)||0)+1;k.set(v,a),i.set(v,s),l.push(v),a===1&&w&&N.set(v,!0),s===1&&v.setAttribute(n,"true"),w||v.setAttribute(r,"true")}catch(d){console.error("aria-hidden: cannot operate on ",v,d)}})};return g(t),o.clear(),H++,function(){l.forEach(function(f){var v=k.get(f)-1,h=i.get(f)-1;k.set(f,v),i.set(f,h),v||(N.has(f)||f.removeAttribute(r),N.delete(f)),h||f.removeAttribute(n)}),H--,H||(k=new WeakMap,k=new WeakMap,N=new WeakMap,F={})}},vt=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),c=t||ke(e);return c?(r.push.apply(r,Array.from(c.querySelectorAll("[aria-live]"))),Te(r,c,n,"aria-hidden")):function(){return null}},C=function(){return C=Object.assign||function(t){for(var n,r=1,c=arguments.length;r<c;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},C.apply(this,arguments)};function ie(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]]);return n}function Re(e,t,n){if(n||arguments.length===2)for(var r=0,c=t.length,i;r<c;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var M="right-scroll-bar-position",O="width-before-scroll-bar",xe="with-scroll-bars-hidden",Le="--removed-body-scroll-bar-size";function j(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ne(e,t){var n=u.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var c=n.value;c!==r&&(n.value=r,n.callback(r,c))}}}})[0];return n.callback=t,n.facade}var Fe=typeof window<"u"?u.useLayoutEffect:u.useEffect,ee=new WeakMap;function Pe(e,t){var n=Ne(t||null,function(r){return e.forEach(function(c){return j(c,r)})});return Fe(function(){var r=ee.get(n);if(r){var c=new Set(r),i=new Set(e),l=n.current;c.forEach(function(o){i.has(o)||j(o,null)}),i.forEach(function(o){c.has(o)||j(o,l)})}ee.set(n,e)},[e]),n}function Ie(e){return e}function Me(e,t){t===void 0&&(t=Ie);var n=[],r=!1,c={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var l=t(i,r);return n.push(l),function(){n=n.filter(function(o){return o!==l})}},assignSyncMedium:function(i){for(r=!0;n.length;){var l=n;n=[],l.forEach(i)}n={push:function(o){return i(o)},filter:function(){return n}}},assignMedium:function(i){r=!0;var l=[];if(n.length){var o=n;n=[],o.forEach(i),l=n}var S=function(){var g=l;l=[],g.forEach(i)},b=function(){return Promise.resolve().then(S)};b(),n={push:function(g){l.push(g),b()},filter:function(g){return l=l.filter(g),n}}}};return c}function Oe(e){e===void 0&&(e={});var t=Me(null);return t.options=C({async:!0,ssr:!1},e),t}var le=function(e){var t=e.sideCar,n=ie(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return u.createElement(r,C({},n))};le.isSideCarExport=!0;function We(e,t){return e.useMedium(t),le}var se=Oe(),K=function(){},W=u.forwardRef(function(e,t){var n=u.useRef(null),r=u.useState({onScrollCapture:K,onWheelCapture:K,onTouchMoveCapture:K}),c=r[0],i=r[1],l=e.forwardProps,o=e.children,S=e.className,b=e.removeScrollBar,g=e.enabled,f=e.shards,v=e.sideCar,h=e.noIsolation,w=e.inert,a=e.allowPinchZoom,s=e.as,d=s===void 0?"div":s,E=ie(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),m=v,p=Pe([n,t]),y=C(C({},E),c);return u.createElement(u.Fragment,null,g&&u.createElement(m,{sideCar:se,removeScrollBar:b,shards:f,noIsolation:h,inert:w,setCallbacks:i,allowPinchZoom:!!a,lockRef:n}),l?u.cloneElement(u.Children.only(o),C(C({},y),{ref:p})):u.createElement(d,C({},y,{className:S,ref:p}),o))});W.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};W.classNames={fullWidth:O,zeroRight:M};var te,Be=function(){if(te)return te;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function _e(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Be();return t&&e.setAttribute("nonce",t),e}function De(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Ue(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var He=function(){var e=0,t=null;return{add:function(n){e==0&&(t=_e())&&(De(t,n),Ue(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},je=function(){var e=He();return function(t,n){u.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},fe=function(){var e=je(),t=function(n){var r=n.styles,c=n.dynamic;return e(r,c),null};return t},Ke={left:0,top:0,right:0,gap:0},V=function(e){return parseInt(e||"",10)||0},Ve=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],c=t[e==="padding"?"paddingRight":"marginRight"];return[V(n),V(r),V(c)]},Xe=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Ke;var t=Ve(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Ye=fe(),R="data-scroll-locked",Ge=function(e,t,n,r){var c=e.left,i=e.top,l=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(xe,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body[`).concat(R,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(c,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(M,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(O,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(M," .").concat(M,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(O," .").concat(O,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(R,`] {
    `).concat(Le,": ").concat(o,`px;
  }
`)},ne=function(){var e=parseInt(document.body.getAttribute(R)||"0",10);return isFinite(e)?e:0},ze=function(){u.useEffect(function(){return document.body.setAttribute(R,(ne()+1).toString()),function(){var e=ne()-1;e<=0?document.body.removeAttribute(R):document.body.setAttribute(R,e.toString())}},[])},Ze=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,c=r===void 0?"margin":r;ze();var i=u.useMemo(function(){return Xe(c)},[c]);return u.createElement(Ye,{styles:Ge(i,!t,c,n?"":"!important")})},X=!1;if(typeof window<"u")try{var P=Object.defineProperty({},"passive",{get:function(){return X=!0,!0}});window.addEventListener("test",P,P),window.removeEventListener("test",P,P)}catch{X=!1}var A=X?{passive:!1}:!1,qe=function(e){return e.tagName==="TEXTAREA"},de=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!qe(e)&&n[t]==="visible")},Qe=function(e){return de(e,"overflowY")},Je=function(e){return de(e,"overflowX")},re=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=ve(e,n);if(r){var c=he(e,n),i=c[1],l=c[2];if(i>l)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},et=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},tt=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},ve=function(e,t){return e==="v"?Qe(t):Je(t)},he=function(e,t){return e==="v"?et(t):tt(t)},nt=function(e,t){return e==="h"&&t==="rtl"?-1:1},rt=function(e,t,n,r,c){var i=nt(e,window.getComputedStyle(t).direction),l=i*r,o=n.target,S=t.contains(o),b=!1,g=l>0,f=0,v=0;do{var h=he(e,o),w=h[0],a=h[1],s=h[2],d=a-s-i*w;(w||d)&&ve(e,o)&&(f+=d,v+=w),o=o.parentNode}while(!S&&o!==document.body||S&&(t.contains(o)||t===o));return(g&&(c&&f===0||!c&&l>f)||!g&&(c&&v===0||!c&&-l>v))&&(b=!0),b},I=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ae=function(e){return[e.deltaX,e.deltaY]},oe=function(e){return e&&"current"in e?e.current:e},at=function(e,t){return e[0]===t[0]&&e[1]===t[1]},ot=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},ct=0,T=[];function ut(e){var t=u.useRef([]),n=u.useRef([0,0]),r=u.useRef(),c=u.useState(ct++)[0],i=u.useState(function(){return fe()})[0],l=u.useRef(e);u.useEffect(function(){l.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var a=Re([e.lockRef.current],(e.shards||[]).map(oe),!0).filter(Boolean);return a.forEach(function(s){return s.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),a.forEach(function(s){return s.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var o=u.useCallback(function(a,s){if("touches"in a&&a.touches.length===2)return!l.current.allowPinchZoom;var d=I(a),E=n.current,m="deltaX"in a?a.deltaX:E[0]-d[0],p="deltaY"in a?a.deltaY:E[1]-d[1],y,B=a.target,x=Math.abs(m)>Math.abs(p)?"h":"v";if("touches"in a&&x==="h"&&B.type==="range")return!1;var L=re(x,B);if(!L)return!0;if(L?y=x:(y=x==="v"?"h":"v",L=re(x,B)),!L)return!1;if(!r.current&&"changedTouches"in a&&(m||p)&&(r.current=y),!y)return!0;var Y=r.current||y;return rt(Y,s,a,Y==="h"?m:p,!0)},[]),S=u.useCallback(function(a){var s=a;if(!(!T.length||T[T.length-1]!==i)){var d="deltaY"in s?ae(s):I(s),E=t.current.filter(function(y){return y.name===s.type&&y.target===s.target&&at(y.delta,d)})[0];if(E&&E.should){s.cancelable&&s.preventDefault();return}if(!E){var m=(l.current.shards||[]).map(oe).filter(Boolean).filter(function(y){return y.contains(s.target)}),p=m.length>0?o(s,m[0]):!l.current.noIsolation;p&&s.cancelable&&s.preventDefault()}}},[]),b=u.useCallback(function(a,s,d,E){var m={name:a,delta:s,target:d,should:E};t.current.push(m),setTimeout(function(){t.current=t.current.filter(function(p){return p!==m})},1)},[]),g=u.useCallback(function(a){n.current=I(a),r.current=void 0},[]),f=u.useCallback(function(a){b(a.type,ae(a),a.target,o(a,e.lockRef.current))},[]),v=u.useCallback(function(a){b(a.type,I(a),a.target,o(a,e.lockRef.current))},[]);u.useEffect(function(){return T.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",S,A),document.addEventListener("touchmove",S,A),document.addEventListener("touchstart",g,A),function(){T=T.filter(function(a){return a!==i}),document.removeEventListener("wheel",S,A),document.removeEventListener("touchmove",S,A),document.removeEventListener("touchstart",g,A)}},[]);var h=e.removeScrollBar,w=e.inert;return u.createElement(u.Fragment,null,w?u.createElement(i,{styles:ot(c)}):null,h?u.createElement(Ze,{gapMode:"margin"}):null)}const it=We(se,ut);var me=u.forwardRef(function(e,t){return u.createElement(W,C({},e,{ref:t,sideCar:it}))});me.classNames=W.classNames;const ht=me;export{ft as $,dt as a,ht as b,vt as h};
