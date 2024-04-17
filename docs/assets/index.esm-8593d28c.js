import{R as I,f as t,an as b,G as ke}from"./index-466eeaa7.js";import{a as H,d as y,p as te,j as me,q as se,$ as K,m as g,i as ne,b as ve,k as Le,l as Ne,c as ue,n as Ke,e as Ge,f as Ue,r as Ve,s as Be}from"./index-ac5bf735.js";import{h as Ye,$ as je,a as We,b as Xe}from"./Combination-2039a8c9.js";function ge(e){const n=e+"CollectionProvider",[o,c]=H(n),[a,r]=o(n,{collectionRef:{current:null},itemMap:new Map}),d=C=>{const{scope:s,children:v}=C,h=I.useRef(null),E=I.useRef(new Map).current;return I.createElement(a,{scope:s,itemMap:E,collectionRef:h},v)},$=e+"CollectionSlot",f=I.forwardRef((C,s)=>{const{scope:v,children:h}=C,E=r($,v),x=y(s,E.collectionRef);return I.createElement(te,{ref:x},h)}),i=e+"CollectionItemSlot",m="data-radix-collection-item",l=I.forwardRef((C,s)=>{const{scope:v,children:h,...E}=C,x=I.useRef(null),L=y(s,x),w=r(i,v);return I.useEffect(()=>(w.itemMap.set(x,{ref:x,...E}),()=>void w.itemMap.delete(x))),I.createElement(te,{[m]:"",ref:L},h)});function p(C){const s=r(e+"CollectionConsumer",C);return I.useCallback(()=>{const h=s.collectionRef.current;if(!h)return[];const E=Array.from(h.querySelectorAll(`[${m}]`));return Array.from(s.itemMap.values()).sort((w,G)=>E.indexOf(w.ref.current)-E.indexOf(G.ref.current))},[s.collectionRef,s.itemMap])}return[{Provider:d,Slot:f,ItemSlot:l},p,c]}const He=t.createContext(void 0);function Ee(e){const n=t.useContext(He);return e||n||"ltr"}const ee="rovingFocusGroup.onEntryFocus",ze={bubbles:!1,cancelable:!0},de="RovingFocusGroup",[oe,Ce,qe]=ge(de),[Ze,xe]=H(de,[qe]),[Je,Qe]=Ze(de),et=t.forwardRef((e,n)=>t.createElement(oe.Provider,{scope:e.__scopeRovingFocusGroup},t.createElement(oe.Slot,{scope:e.__scopeRovingFocusGroup},t.createElement(tt,b({},e,{ref:n}))))),tt=t.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:o,orientation:c,loop:a=!1,dir:r,currentTabStopId:d,defaultCurrentTabStopId:$,onCurrentTabStopIdChange:f,onEntryFocus:i,...m}=e,l=t.useRef(null),p=y(n,l),C=Ee(r),[s=null,v]=me({prop:d,defaultProp:$,onChange:f}),[h,E]=t.useState(!1),x=se(i),L=Ce(o),w=t.useRef(!1),[G,U]=t.useState(0);return t.useEffect(()=>{const _=l.current;if(_)return _.addEventListener(ee,x),()=>_.removeEventListener(ee,x)},[x]),t.createElement(Je,{scope:o,orientation:c,dir:C,loop:a,currentTabStopId:s,onItemFocus:t.useCallback(_=>v(_),[v]),onItemShiftTab:t.useCallback(()=>E(!0),[]),onFocusableItemAdd:t.useCallback(()=>U(_=>_+1),[]),onFocusableItemRemove:t.useCallback(()=>U(_=>_-1),[])},t.createElement(K.div,b({tabIndex:h||G===0?-1:0,"data-orientation":c},m,{ref:p,style:{outline:"none",...e.style},onMouseDown:g(e.onMouseDown,()=>{w.current=!0}),onFocus:g(e.onFocus,_=>{const q=!w.current;if(_.target===_.currentTarget&&q&&!h){const O=new CustomEvent(ee,ze);if(_.currentTarget.dispatchEvent(O),!O.defaultPrevented){const D=L().filter(S=>S.focusable),Z=D.find(S=>S.active),V=D.find(S=>S.id===s),B=[Z,V,...D].filter(Boolean).map(S=>S.ref.current);_e(B)}}w.current=!1}),onBlur:g(e.onBlur,()=>E(!1))})))}),nt="RovingFocusGroupItem",ot=t.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:o,focusable:c=!0,active:a=!1,tabStopId:r,...d}=e,$=ne(),f=r||$,i=Qe(nt,o),m=i.currentTabStopId===f,l=Ce(o),{onFocusableItemAdd:p,onFocusableItemRemove:C}=i;return t.useEffect(()=>{if(c)return p(),()=>C()},[c,p,C]),t.createElement(oe.ItemSlot,{scope:o,id:f,focusable:c,active:a},t.createElement(K.span,b({tabIndex:m?0:-1,"data-orientation":i.orientation},d,{ref:n,onMouseDown:g(e.onMouseDown,s=>{c?i.onItemFocus(f):s.preventDefault()}),onFocus:g(e.onFocus,()=>i.onItemFocus(f)),onKeyDown:g(e.onKeyDown,s=>{if(s.key==="Tab"&&s.shiftKey){i.onItemShiftTab();return}if(s.target!==s.currentTarget)return;const v=at(s,i.orientation,i.dir);if(v!==void 0){s.preventDefault();let E=l().filter(x=>x.focusable).map(x=>x.ref.current);if(v==="last")E.reverse();else if(v==="prev"||v==="next"){v==="prev"&&E.reverse();const x=E.indexOf(s.currentTarget);E=i.loop?st(E,x+1):E.slice(x+1)}setTimeout(()=>_e(E))}})})))}),ct={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function rt(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function at(e,n,o){const c=rt(e.key,o);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(c))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(c)))return ct[c]}function _e(e){const n=document.activeElement;for(const o of e)if(o===n||(o.focus(),document.activeElement!==n))return}function st(e,n){return e.map((o,c)=>e[(n+c)%e.length])}const ut=et,dt=ot,it=["Enter"," "],ft=["ArrowDown","PageUp","Home"],Me=["ArrowUp","PageDown","End"],lt=[...ft,...Me],z="Menu",[ce,$t,pt]=ge(z),[A,he]=H(z,[pt,ve,xe]),ie=ve(),we=xe(),[bt,W]=A(z),[mt,fe]=A(z),vt=e=>{const{__scopeMenu:n,open:o=!1,children:c,dir:a,onOpenChange:r,modal:d=!0}=e,$=ie(n),[f,i]=t.useState(null),m=t.useRef(!1),l=se(r),p=Ee(a);return t.useEffect(()=>{const C=()=>{m.current=!0,document.addEventListener("pointerdown",s,{capture:!0,once:!0}),document.addEventListener("pointermove",s,{capture:!0,once:!0})},s=()=>m.current=!1;return document.addEventListener("keydown",C,{capture:!0}),()=>{document.removeEventListener("keydown",C,{capture:!0}),document.removeEventListener("pointerdown",s,{capture:!0}),document.removeEventListener("pointermove",s,{capture:!0})}},[]),t.createElement(Le,$,t.createElement(bt,{scope:n,open:o,onOpenChange:l,content:f,onContentChange:i},t.createElement(mt,{scope:n,onClose:t.useCallback(()=>l(!1),[l]),isUsingKeyboardRef:m,dir:p,modal:d},c)))},gt=t.forwardRef((e,n)=>{const{__scopeMenu:o,...c}=e,a=ie(o);return t.createElement(Ne,b({},a,c,{ref:n}))}),Re="MenuPortal",[Et,Ct]=A(Re,{forceMount:void 0}),xt=e=>{const{__scopeMenu:n,forceMount:o,children:c,container:a}=e,r=W(Re,n);return t.createElement(Et,{scope:n,forceMount:o},t.createElement(ue,{present:o||r.open},t.createElement(Ke,{asChild:!0,container:a},c)))},T="MenuContent",[_t,Ie]=A(T),Mt=t.forwardRef((e,n)=>{const o=Ct(T,e.__scopeMenu),{forceMount:c=o.forceMount,...a}=e,r=W(T,e.__scopeMenu),d=fe(T,e.__scopeMenu);return t.createElement(ce.Provider,{scope:e.__scopeMenu},t.createElement(ue,{present:c||r.open},t.createElement(ce.Slot,{scope:e.__scopeMenu},d.modal?t.createElement(ht,b({},a,{ref:n})):t.createElement(wt,b({},a,{ref:n})))))}),ht=t.forwardRef((e,n)=>{const o=W(T,e.__scopeMenu),c=t.useRef(null),a=y(n,c);return t.useEffect(()=>{const r=c.current;if(r)return Ye(r)},[]),t.createElement(Se,b({},e,{ref:a,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:g(e.onFocusOutside,r=>r.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)}))}),wt=t.forwardRef((e,n)=>{const o=W(T,e.__scopeMenu);return t.createElement(Se,b({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)}))}),Se=t.forwardRef((e,n)=>{const{__scopeMenu:o,loop:c=!1,trapFocus:a,onOpenAutoFocus:r,onCloseAutoFocus:d,disableOutsidePointerEvents:$,onEntryFocus:f,onEscapeKeyDown:i,onPointerDownOutside:m,onFocusOutside:l,onInteractOutside:p,onDismiss:C,disableOutsideScroll:s,...v}=e,h=W(T,o),E=fe(T,o),x=ie(o),L=we(o),w=$t(o),[G,U]=t.useState(null),_=t.useRef(null),q=y(n,_,h.onContentChange),O=t.useRef(0),D=t.useRef(""),Z=t.useRef(0),V=t.useRef(null),J=t.useRef("right"),B=t.useRef(0),S=s?Xe:t.Fragment,ye=s?{as:te,allowPinchZoom:!0}:void 0,Ae=u=>{var M,R;const F=D.current+u,Y=w().filter(P=>!P.disabled),Q=document.activeElement,le=(M=Y.find(P=>P.ref.current===Q))===null||M===void 0?void 0:M.textValue,X=Y.map(P=>P.textValue),j=Vt(X,F,le),$e=(R=Y.find(P=>P.textValue===j))===null||R===void 0?void 0:R.ref.current;(function P(pe){D.current=pe,window.clearTimeout(O.current),pe!==""&&(O.current=window.setTimeout(()=>P(""),1e3))})(F),$e&&setTimeout(()=>$e.focus())};t.useEffect(()=>()=>window.clearTimeout(O.current),[]),je();const N=t.useCallback(u=>{var M,R;return J.current===((M=V.current)===null||M===void 0?void 0:M.side)&&Yt(u,(R=V.current)===null||R===void 0?void 0:R.area)},[]);return t.createElement(_t,{scope:o,searchRef:D,onItemEnter:t.useCallback(u=>{N(u)&&u.preventDefault()},[N]),onItemLeave:t.useCallback(u=>{var M;N(u)||((M=_.current)===null||M===void 0||M.focus(),U(null))},[N]),onTriggerLeave:t.useCallback(u=>{N(u)&&u.preventDefault()},[N]),pointerGraceTimerRef:Z,onPointerGraceIntentChange:t.useCallback(u=>{V.current=u},[])},t.createElement(S,ye,t.createElement(We,{asChild:!0,trapped:a,onMountAutoFocus:g(r,u=>{var M;u.preventDefault(),(M=_.current)===null||M===void 0||M.focus()}),onUnmountAutoFocus:d},t.createElement(Ge,{asChild:!0,disableOutsidePointerEvents:$,onEscapeKeyDown:i,onPointerDownOutside:m,onFocusOutside:l,onInteractOutside:p,onDismiss:C},t.createElement(ut,b({asChild:!0},L,{dir:E.dir,orientation:"vertical",loop:c,currentTabStopId:G,onCurrentTabStopIdChange:U,onEntryFocus:g(f,u=>{E.isUsingKeyboardRef.current||u.preventDefault()})}),t.createElement(Ue,b({role:"menu","aria-orientation":"vertical","data-state":Kt(h.open),"data-radix-menu-content":"",dir:E.dir},x,v,{ref:q,style:{outline:"none",...v.style},onKeyDown:g(v.onKeyDown,u=>{const R=u.target.closest("[data-radix-menu-content]")===u.currentTarget,F=u.ctrlKey||u.altKey||u.metaKey,Y=u.key.length===1;R&&(u.key==="Tab"&&u.preventDefault(),!F&&Y&&Ae(u.key));const Q=_.current;if(u.target!==Q||!lt.includes(u.key))return;u.preventDefault();const X=w().filter(j=>!j.disabled).map(j=>j.ref.current);Me.includes(u.key)&&X.reverse(),Gt(X)}),onBlur:g(e.onBlur,u=>{u.currentTarget.contains(u.target)||(window.clearTimeout(O.current),D.current="")}),onPointerMove:g(e.onPointerMove,ae(u=>{const M=u.target,R=B.current!==u.clientX;if(u.currentTarget.contains(M)&&R){const F=u.clientX>B.current?"right":"left";J.current=F,B.current=u.clientX}}))})))))))}),Rt=t.forwardRef((e,n)=>{const{__scopeMenu:o,...c}=e;return t.createElement(K.div,b({role:"group"},c,{ref:n}))}),re="MenuItem",be="menu.itemSelect",It=t.forwardRef((e,n)=>{const{disabled:o=!1,onSelect:c,...a}=e,r=t.useRef(null),d=fe(re,e.__scopeMenu),$=Ie(re,e.__scopeMenu),f=y(n,r),i=t.useRef(!1),m=()=>{const l=r.current;if(!o&&l){const p=new CustomEvent(be,{bubbles:!0,cancelable:!0});l.addEventListener(be,C=>c==null?void 0:c(C),{once:!0}),Ve(l,p),p.defaultPrevented?i.current=!1:d.onClose()}};return t.createElement(St,b({},a,{ref:f,disabled:o,onClick:g(e.onClick,m),onPointerDown:l=>{var p;(p=e.onPointerDown)===null||p===void 0||p.call(e,l),i.current=!0},onPointerUp:g(e.onPointerUp,l=>{var p;i.current||(p=l.currentTarget)===null||p===void 0||p.click()}),onKeyDown:g(e.onKeyDown,l=>{const p=$.searchRef.current!=="";o||p&&l.key===" "||it.includes(l.key)&&(l.currentTarget.click(),l.preventDefault())})}))}),St=t.forwardRef((e,n)=>{const{__scopeMenu:o,disabled:c=!1,textValue:a,...r}=e,d=Ie(re,o),$=we(o),f=t.useRef(null),i=y(n,f),[m,l]=t.useState(!1),[p,C]=t.useState("");return t.useEffect(()=>{const s=f.current;if(s){var v;C(((v=s.textContent)!==null&&v!==void 0?v:"").trim())}},[r.children]),t.createElement(ce.ItemSlot,{scope:o,disabled:c,textValue:a??p},t.createElement(dt,b({asChild:!0},$,{focusable:!c}),t.createElement(K.div,b({role:"menuitem","data-highlighted":m?"":void 0,"aria-disabled":c||void 0,"data-disabled":c?"":void 0},r,{ref:i,onPointerMove:g(e.onPointerMove,ae(s=>{c?d.onItemLeave(s):(d.onItemEnter(s),s.defaultPrevented||s.currentTarget.focus())})),onPointerLeave:g(e.onPointerLeave,ae(s=>d.onItemLeave(s))),onFocus:g(e.onFocus,()=>l(!0)),onBlur:g(e.onBlur,()=>l(!1))}))))}),Pt="MenuRadioGroup",[Dt,Tt]=A(Pt,{value:void 0,onValueChange:()=>{}}),Ot=t.forwardRef((e,n)=>{const{value:o,onValueChange:c,...a}=e,r=se(c);return t.createElement(Dt,{scope:e.__scopeMenu,value:o,onValueChange:r},t.createElement(Rt,b({},a,{ref:n})))}),Ft="MenuRadioItem",yt=t.forwardRef((e,n)=>{const{value:o,...c}=e,a=Tt(Ft,e.__scopeMenu),r=o===a.value;return t.createElement(At,{scope:e.__scopeMenu,checked:r},t.createElement(It,b({role:"menuitemradio","aria-checked":r},c,{ref:n,"data-state":Te(r),onSelect:g(c.onSelect,()=>{var d;return(d=a.onValueChange)===null||d===void 0?void 0:d.call(a,o)},{checkForDefaultPrevented:!1})})))}),Pe="MenuItemIndicator",[At,kt]=A(Pe,{checked:!1}),Lt=t.forwardRef((e,n)=>{const{__scopeMenu:o,forceMount:c,...a}=e,r=kt(Pe,o);return t.createElement(ue,{present:c||De(r.checked)||r.checked===!0},t.createElement(K.span,b({},a,{ref:n,"data-state":Te(r.checked)})))}),Nt="MenuSub";A(Nt);function Kt(e){return e?"open":"closed"}function De(e){return e==="indeterminate"}function Te(e){return De(e)?"indeterminate":e?"checked":"unchecked"}function Gt(e){const n=document.activeElement;for(const o of e)if(o===n||(o.focus(),document.activeElement!==n))return}function Ut(e,n){return e.map((o,c)=>e[(n+c)%e.length])}function Vt(e,n,o){const a=n.length>1&&Array.from(n).every(i=>i===n[0])?n[0]:n,r=o?e.indexOf(o):-1;let d=Ut(e,Math.max(r,0));a.length===1&&(d=d.filter(i=>i!==o));const f=d.find(i=>i.toLowerCase().startsWith(a.toLowerCase()));return f!==o?f:void 0}function Bt(e,n){const{x:o,y:c}=e;let a=!1;for(let r=0,d=n.length-1;r<n.length;d=r++){const $=n[r].x,f=n[r].y,i=n[d].x,m=n[d].y;f>c!=m>c&&o<(i-$)*(c-f)/(m-f)+$&&(a=!a)}return a}function Yt(e,n){if(!n)return!1;const o={x:e.clientX,y:e.clientY};return Bt(o,n)}function ae(e){return n=>n.pointerType==="mouse"?e(n):void 0}const jt=vt,Wt=gt,Xt=xt,Ht=Mt,zt=Ot,qt=yt,Zt=Lt,Oe="DropdownMenu",[Jt,bn]=H(Oe,[he]),k=he(),[Qt,Fe]=Jt(Oe),en=e=>{const{__scopeDropdownMenu:n,children:o,dir:c,open:a,defaultOpen:r,onOpenChange:d,modal:$=!0}=e,f=k(n),i=t.useRef(null),[m=!1,l]=me({prop:a,defaultProp:r,onChange:d});return t.createElement(Qt,{scope:n,triggerId:ne(),triggerRef:i,contentId:ne(),open:m,onOpenChange:l,onOpenToggle:t.useCallback(()=>l(p=>!p),[l]),modal:$},t.createElement(jt,b({},f,{open:m,onOpenChange:l,dir:c,modal:$}),o))},tn="DropdownMenuTrigger",nn=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:o,disabled:c=!1,...a}=e,r=Fe(tn,o),d=k(o);return t.createElement(Wt,b({asChild:!0},d),t.createElement(K.button,b({type:"button",id:r.triggerId,"aria-haspopup":"menu","aria-expanded":r.open,"aria-controls":r.open?r.contentId:void 0,"data-state":r.open?"open":"closed","data-disabled":c?"":void 0,disabled:c},a,{ref:Be(n,r.triggerRef),onPointerDown:g(e.onPointerDown,$=>{!c&&$.button===0&&$.ctrlKey===!1&&(r.onOpenToggle(),r.open||$.preventDefault())}),onKeyDown:g(e.onKeyDown,$=>{c||(["Enter"," "].includes($.key)&&r.onOpenToggle(),$.key==="ArrowDown"&&r.onOpenChange(!0),["Enter"," ","ArrowDown"].includes($.key)&&$.preventDefault())})})))}),on=e=>{const{__scopeDropdownMenu:n,...o}=e,c=k(n);return t.createElement(Xt,b({},c,o))},cn="DropdownMenuContent",rn=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:o,...c}=e,a=Fe(cn,o),r=k(o),d=t.useRef(!1);return t.createElement(Ht,b({id:a.contentId,"aria-labelledby":a.triggerId},r,c,{ref:n,onCloseAutoFocus:g(e.onCloseAutoFocus,$=>{var f;d.current||(f=a.triggerRef.current)===null||f===void 0||f.focus(),d.current=!1,$.preventDefault()}),onInteractOutside:g(e.onInteractOutside,$=>{const f=$.detail.originalEvent,i=f.button===0&&f.ctrlKey===!0,m=f.button===2||i;(!a.modal||m)&&(d.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),an=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:o,...c}=e,a=k(o);return t.createElement(zt,b({},a,c,{ref:n}))}),sn=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:o,...c}=e,a=k(o);return t.createElement(qt,b({},a,c,{ref:n}))}),un=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:o,...c}=e,a=k(o);return t.createElement(Zt,b({},a,c,{ref:n}))}),mn=en,vn=nn,gn=on,En=rn,Cn=an,xn=sn,_n=un;function dn(e,n){if(e==null)return{};var o={},c=Object.keys(e),a,r;for(r=0;r<c.length;r++)a=c[r],!(n.indexOf(a)>=0)&&(o[a]=e[a]);return o}var fn=["color"],Mn=t.forwardRef(function(e,n){var o=e.color,c=o===void 0?"currentColor":o,a=dn(e,fn);return t.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a,{ref:n}),t.createElement("path",{d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:c,fillRule:"evenodd",clipRule:"evenodd"}))});function hn(e){return ke({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M20.118 3h-16.225a2.914 2.914 0 0 0 -2.503 4.371l8.116 13.549a2.917 2.917 0 0 0 4.987 .005l8.11 -13.539a2.914 2.914 0 0 0 -2.486 -4.386z",strokeWidth:"0",fill:"currentColor"}}]})(e)}export{mn as $,Mn as C,hn as T,vn as a,gn as b,En as c,Cn as d,xn as e,_n as f};