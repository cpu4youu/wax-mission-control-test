import{R as L,j as s,h as a,G as xn}from"./index-cb144851.js";import{c as oe,u as N,S as fe,e as De,h as Me,P as O,a as g,f as pe,b as re,D as Rn,i as ye,j as _n,g as In}from"./index-7d2d3af4.js";import{h as En,u as bn,F as Sn,R as Pn}from"./index-df6594e6.js";import{c as Te,A as Dn,C as yn,a as Tn,R as An}from"./index-c4c393b4.js";function Ae(e){const t=e+"CollectionProvider",[n,o]=oe(t),[r,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),i=w=>{const{scope:l,children:C}=w,R=L.useRef(null),h=L.useRef(new Map).current;return s.jsx(r,{scope:l,itemMap:h,collectionRef:R,children:C})};i.displayName=t;const d=e+"CollectionSlot",m=L.forwardRef((w,l)=>{const{scope:C,children:R}=w,h=c(d,C),x=N(l,h.collectionRef);return s.jsx(fe,{ref:x,children:R})});m.displayName=d;const v=e+"CollectionItemSlot",f="data-radix-collection-item",u=L.forwardRef((w,l)=>{const{scope:C,children:R,...h}=w,x=L.useRef(null),S=N(l,x),D=c(v,C);return L.useEffect(()=>(D.itemMap.set(x,{ref:x,...h}),()=>void D.itemMap.delete(x))),s.jsx(fe,{[f]:"",ref:S,children:R})});u.displayName=v;function p(w){const l=c(e+"CollectionConsumer",w);return L.useCallback(()=>{const R=l.collectionRef.current;if(!R)return[];const h=Array.from(R.querySelectorAll(`[${f}]`));return Array.from(l.itemMap.values()).sort((D,j)=>h.indexOf(D.ref.current)-h.indexOf(j.ref.current))},[l.collectionRef,l.itemMap])}return[{Provider:i,Slot:m,ItemSlot:u},p,o]}var Nn=a.createContext(void 0);function Ne(e){const t=a.useContext(Nn);return e||t||"ltr"}var de="rovingFocusGroup.onEntryFocus",On={bubbles:!1,cancelable:!0},ae="RovingFocusGroup",[me,Oe,jn]=Ae(ae),[Fn,je]=oe(ae,[jn]),[kn,Ln]=Fn(ae),Fe=a.forwardRef((e,t)=>s.jsx(me.Provider,{scope:e.__scopeRovingFocusGroup,children:s.jsx(me.Slot,{scope:e.__scopeRovingFocusGroup,children:s.jsx(Gn,{...e,ref:t})})}));Fe.displayName=ae;var Gn=a.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:o,loop:r=!1,dir:c,currentTabStopId:i,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:m,onEntryFocus:v,preventScrollOnEntryFocus:f=!1,...u}=e,p=a.useRef(null),w=N(t,p),l=Ne(c),[C=null,R]=De({prop:i,defaultProp:d,onChange:m}),[h,x]=a.useState(!1),S=Me(v),D=Oe(n),j=a.useRef(!1),[J,F]=a.useState(0);return a.useEffect(()=>{const _=p.current;if(_)return _.addEventListener(de,S),()=>_.removeEventListener(de,S)},[S]),s.jsx(kn,{scope:n,orientation:o,dir:l,loop:r,currentTabStopId:C,onItemFocus:a.useCallback(_=>R(_),[R]),onItemShiftTab:a.useCallback(()=>x(!0),[]),onFocusableItemAdd:a.useCallback(()=>F(_=>_+1),[]),onFocusableItemRemove:a.useCallback(()=>F(_=>_-1),[]),children:s.jsx(O.div,{tabIndex:h||J===0?-1:0,"data-orientation":o,...u,ref:w,style:{outline:"none",...e.style},onMouseDown:g(e.onMouseDown,()=>{j.current=!0}),onFocus:g(e.onFocus,_=>{const U=!j.current;if(_.target===_.currentTarget&&U&&!h){const k=new CustomEvent(de,On);if(_.currentTarget.dispatchEvent(k),!k.defaultPrevented){const V=D().filter(y=>y.focusable),Y=V.find(y=>y.active),Q=V.find(y=>y.id===C),ue=[Y,Q,...V].filter(Boolean).map(y=>y.ref.current);Ge(ue,f)}}j.current=!1}),onBlur:g(e.onBlur,()=>x(!1))})})}),ke="RovingFocusGroupItem",Le=a.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:o=!0,active:r=!1,tabStopId:c,...i}=e,d=pe(),m=c||d,v=Ln(ke,n),f=v.currentTabStopId===m,u=Oe(n),{onFocusableItemAdd:p,onFocusableItemRemove:w}=v;return a.useEffect(()=>{if(o)return p(),()=>w()},[o,p,w]),s.jsx(me.ItemSlot,{scope:n,id:m,focusable:o,active:r,children:s.jsx(O.span,{tabIndex:f?0:-1,"data-orientation":v.orientation,...i,ref:t,onMouseDown:g(e.onMouseDown,l=>{o?v.onItemFocus(m):l.preventDefault()}),onFocus:g(e.onFocus,()=>v.onItemFocus(m)),onKeyDown:g(e.onKeyDown,l=>{if(l.key==="Tab"&&l.shiftKey){v.onItemShiftTab();return}if(l.target!==l.currentTarget)return;const C=$n(l,v.orientation,v.dir);if(C!==void 0){if(l.metaKey||l.ctrlKey||l.altKey||l.shiftKey)return;l.preventDefault();let h=u().filter(x=>x.focusable).map(x=>x.ref.current);if(C==="last")h.reverse();else if(C==="prev"||C==="next"){C==="prev"&&h.reverse();const x=h.indexOf(l.currentTarget);h=v.loop?Bn(h,x+1):h.slice(x+1)}setTimeout(()=>Ge(h))}})})})});Le.displayName=ke;var Kn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Un(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function $n(e,t,n){const o=Un(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Kn[o]}function Ge(e,t=!1){const n=document.activeElement;for(const o of e)if(o===n||(o.focus({preventScroll:t}),document.activeElement!==n))return}function Bn(e,t){return e.map((n,o)=>e[(t+o)%e.length])}var Vn=Fe,Yn=Le,ve=["Enter"," "],Wn=["ArrowDown","PageUp","Home"],Ke=["ArrowUp","PageDown","End"],Xn=[...Wn,...Ke],Hn={ltr:[...ve,"ArrowRight"],rtl:[...ve,"ArrowLeft"]},zn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Z="Menu",[H,Zn,qn]=Ae(Z),[G,Ue]=oe(Z,[qn,Te,je]),ce=Te(),$e=je(),[Jn,K]=G(Z),[Qn,q]=G(Z),Be=e=>{const{__scopeMenu:t,open:n=!1,children:o,dir:r,onOpenChange:c,modal:i=!0}=e,d=ce(t),[m,v]=a.useState(null),f=a.useRef(!1),u=Me(c),p=Ne(r);return a.useEffect(()=>{const w=()=>{f.current=!0,document.addEventListener("pointerdown",l,{capture:!0,once:!0}),document.addEventListener("pointermove",l,{capture:!0,once:!0})},l=()=>f.current=!1;return document.addEventListener("keydown",w,{capture:!0}),()=>{document.removeEventListener("keydown",w,{capture:!0}),document.removeEventListener("pointerdown",l,{capture:!0}),document.removeEventListener("pointermove",l,{capture:!0})}},[]),s.jsx(An,{...d,children:s.jsx(Jn,{scope:t,open:n,onOpenChange:u,content:m,onContentChange:v,children:s.jsx(Qn,{scope:t,onClose:a.useCallback(()=>u(!1),[u]),isUsingKeyboardRef:f,dir:p,modal:i,children:o})})})};Be.displayName=Z;var et="MenuAnchor",ge=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,r=ce(n);return s.jsx(Dn,{...r,...o,ref:t})});ge.displayName=et;var we="MenuPortal",[nt,Ve]=G(we,{forceMount:void 0}),Ye=e=>{const{__scopeMenu:t,forceMount:n,children:o,container:r}=e,c=K(we,t);return s.jsx(nt,{scope:t,forceMount:n,children:s.jsx(re,{present:n||c.open,children:s.jsx(In,{asChild:!0,container:r,children:o})})})};Ye.displayName=we;var b="MenuContent",[tt,he]=G(b),We=a.forwardRef((e,t)=>{const n=Ve(b,e.__scopeMenu),{forceMount:o=n.forceMount,...r}=e,c=K(b,e.__scopeMenu),i=q(b,e.__scopeMenu);return s.jsx(H.Provider,{scope:e.__scopeMenu,children:s.jsx(re,{present:o||c.open,children:s.jsx(H.Slot,{scope:e.__scopeMenu,children:i.modal?s.jsx(ot,{...r,ref:t}):s.jsx(rt,{...r,ref:t})})})})}),ot=a.forwardRef((e,t)=>{const n=K(b,e.__scopeMenu),o=a.useRef(null),r=N(t,o);return a.useEffect(()=>{const c=o.current;if(c)return En(c)},[]),s.jsx(Ce,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:g(e.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),rt=a.forwardRef((e,t)=>{const n=K(b,e.__scopeMenu);return s.jsx(Ce,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),Ce=a.forwardRef((e,t)=>{const{__scopeMenu:n,loop:o=!1,trapFocus:r,onOpenAutoFocus:c,onCloseAutoFocus:i,disableOutsidePointerEvents:d,onEntryFocus:m,onEscapeKeyDown:v,onPointerDownOutside:f,onFocusOutside:u,onInteractOutside:p,onDismiss:w,disableOutsideScroll:l,...C}=e,R=K(b,n),h=q(b,n),x=ce(n),S=$e(n),D=Zn(n),[j,J]=a.useState(null),F=a.useRef(null),_=N(t,F,R.onContentChange),U=a.useRef(0),k=a.useRef(""),V=a.useRef(0),Y=a.useRef(null),Q=a.useRef("right"),ee=a.useRef(0),ue=l?Pn:a.Fragment,y=l?{as:fe,allowPinchZoom:!0}:void 0,Cn=M=>{var B,be;const E=k.current+M,P=D().filter(T=>!T.disabled),A=document.activeElement,ie=(B=P.find(T=>T.ref.current===A))==null?void 0:B.textValue,le=P.map(T=>T.textValue),Ee=Mt(le,E,ie),W=(be=P.find(T=>T.textValue===Ee))==null?void 0:be.ref.current;(function T(Se){k.current=Se,window.clearTimeout(U.current),Se!==""&&(U.current=window.setTimeout(()=>T(""),1e3))})(E),W&&setTimeout(()=>W.focus())};a.useEffect(()=>()=>window.clearTimeout(U.current),[]),bn();const $=a.useCallback(M=>{var P,A;return Q.current===((P=Y.current)==null?void 0:P.side)&&wt(M,(A=Y.current)==null?void 0:A.area)},[]);return s.jsx(tt,{scope:n,searchRef:k,onItemEnter:a.useCallback(M=>{$(M)&&M.preventDefault()},[$]),onItemLeave:a.useCallback(M=>{var E;$(M)||((E=F.current)==null||E.focus(),J(null))},[$]),onTriggerLeave:a.useCallback(M=>{$(M)&&M.preventDefault()},[$]),pointerGraceTimerRef:V,onPointerGraceIntentChange:a.useCallback(M=>{Y.current=M},[]),children:s.jsx(ue,{...y,children:s.jsx(Sn,{asChild:!0,trapped:r,onMountAutoFocus:g(c,M=>{var E;M.preventDefault(),(E=F.current)==null||E.focus({preventScroll:!0})}),onUnmountAutoFocus:i,children:s.jsx(Rn,{asChild:!0,disableOutsidePointerEvents:d,onEscapeKeyDown:v,onPointerDownOutside:f,onFocusOutside:u,onInteractOutside:p,onDismiss:w,children:s.jsx(Vn,{asChild:!0,...S,dir:h.dir,orientation:"vertical",loop:o,currentTabStopId:j,onCurrentTabStopIdChange:J,onEntryFocus:g(m,M=>{h.isUsingKeyboardRef.current||M.preventDefault()}),preventScrollOnEntryFocus:!0,children:s.jsx(yn,{role:"menu","aria-orientation":"vertical","data-state":un(R.open),"data-radix-menu-content":"",dir:h.dir,...x,...C,ref:_,style:{outline:"none",...C.style},onKeyDown:g(C.onKeyDown,M=>{const P=M.target.closest("[data-radix-menu-content]")===M.currentTarget,A=M.ctrlKey||M.altKey||M.metaKey,ie=M.key.length===1;P&&(M.key==="Tab"&&M.preventDefault(),!A&&ie&&Cn(M.key));const le=F.current;if(M.target!==le||!Xn.includes(M.key))return;M.preventDefault();const W=D().filter(B=>!B.disabled).map(B=>B.ref.current);Ke.includes(M.key)&&W.reverse(),mt(W)}),onBlur:g(e.onBlur,M=>{M.currentTarget.contains(M.target)||(window.clearTimeout(U.current),k.current="")}),onPointerMove:g(e.onPointerMove,z(M=>{const E=M.target,P=ee.current!==M.clientX;if(M.currentTarget.contains(E)&&P){const A=M.clientX>ee.current?"right":"left";Q.current=A,ee.current=M.clientX}}))})})})})})})});We.displayName=b;var at="MenuGroup",xe=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return s.jsx(O.div,{role:"group",...o,ref:t})});xe.displayName=at;var ct="MenuLabel",Xe=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return s.jsx(O.div,{...o,ref:t})});Xe.displayName=ct;var ne="MenuItem",Pe="menu.itemSelect",se=a.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:o,...r}=e,c=a.useRef(null),i=q(ne,e.__scopeMenu),d=he(ne,e.__scopeMenu),m=N(t,c),v=a.useRef(!1),f=()=>{const u=c.current;if(!n&&u){const p=new CustomEvent(Pe,{bubbles:!0,cancelable:!0});u.addEventListener(Pe,w=>o==null?void 0:o(w),{once:!0}),_n(u,p),p.defaultPrevented?v.current=!1:i.onClose()}};return s.jsx(He,{...r,ref:m,disabled:n,onClick:g(e.onClick,f),onPointerDown:u=>{var p;(p=e.onPointerDown)==null||p.call(e,u),v.current=!0},onPointerUp:g(e.onPointerUp,u=>{var p;v.current||(p=u.currentTarget)==null||p.click()}),onKeyDown:g(e.onKeyDown,u=>{const p=d.searchRef.current!=="";n||p&&u.key===" "||ve.includes(u.key)&&(u.currentTarget.click(),u.preventDefault())})})});se.displayName=ne;var He=a.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:o=!1,textValue:r,...c}=e,i=he(ne,n),d=$e(n),m=a.useRef(null),v=N(t,m),[f,u]=a.useState(!1),[p,w]=a.useState("");return a.useEffect(()=>{const l=m.current;l&&w((l.textContent??"").trim())},[c.children]),s.jsx(H.ItemSlot,{scope:n,disabled:o,textValue:r??p,children:s.jsx(Yn,{asChild:!0,...d,focusable:!o,children:s.jsx(O.div,{role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...c,ref:v,onPointerMove:g(e.onPointerMove,z(l=>{o?i.onItemLeave(l):(i.onItemEnter(l),l.defaultPrevented||l.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:g(e.onPointerLeave,z(l=>i.onItemLeave(l))),onFocus:g(e.onFocus,()=>u(!0)),onBlur:g(e.onBlur,()=>u(!1))})})})}),st="MenuCheckboxItem",ze=a.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:o,...r}=e;return s.jsx(en,{scope:e.__scopeMenu,checked:n,children:s.jsx(se,{role:"menuitemcheckbox","aria-checked":te(n)?"mixed":n,...r,ref:t,"data-state":_e(n),onSelect:g(r.onSelect,()=>o==null?void 0:o(te(n)?!0:!n),{checkForDefaultPrevented:!1})})})});ze.displayName=st;var Ze="MenuRadioGroup",[ut,it]=G(Ze,{value:void 0,onValueChange:()=>{}}),qe=a.forwardRef((e,t)=>{const{value:n,onValueChange:o,...r}=e,c=Me(o);return s.jsx(ut,{scope:e.__scopeMenu,value:n,onValueChange:c,children:s.jsx(xe,{...r,ref:t})})});qe.displayName=Ze;var Je="MenuRadioItem",Qe=a.forwardRef((e,t)=>{const{value:n,...o}=e,r=it(Je,e.__scopeMenu),c=n===r.value;return s.jsx(en,{scope:e.__scopeMenu,checked:c,children:s.jsx(se,{role:"menuitemradio","aria-checked":c,...o,ref:t,"data-state":_e(c),onSelect:g(o.onSelect,()=>{var i;return(i=r.onValueChange)==null?void 0:i.call(r,n)},{checkForDefaultPrevented:!1})})})});Qe.displayName=Je;var Re="MenuItemIndicator",[en,lt]=G(Re,{checked:!1}),nn=a.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:o,...r}=e,c=lt(Re,n);return s.jsx(re,{present:o||te(c.checked)||c.checked===!0,children:s.jsx(O.span,{...r,ref:t,"data-state":_e(c.checked)})})});nn.displayName=Re;var dt="MenuSeparator",tn=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return s.jsx(O.div,{role:"separator","aria-orientation":"horizontal",...o,ref:t})});tn.displayName=dt;var ft="MenuArrow",on=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,r=ce(n);return s.jsx(Tn,{...r,...o,ref:t})});on.displayName=ft;var pt="MenuSub",[uo,rn]=G(pt),X="MenuSubTrigger",an=a.forwardRef((e,t)=>{const n=K(X,e.__scopeMenu),o=q(X,e.__scopeMenu),r=rn(X,e.__scopeMenu),c=he(X,e.__scopeMenu),i=a.useRef(null),{pointerGraceTimerRef:d,onPointerGraceIntentChange:m}=c,v={__scopeMenu:e.__scopeMenu},f=a.useCallback(()=>{i.current&&window.clearTimeout(i.current),i.current=null},[]);return a.useEffect(()=>f,[f]),a.useEffect(()=>{const u=d.current;return()=>{window.clearTimeout(u),m(null)}},[d,m]),s.jsx(ge,{asChild:!0,...v,children:s.jsx(He,{id:r.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":r.contentId,"data-state":un(n.open),...e,ref:ye(t,r.onTriggerChange),onClick:u=>{var p;(p=e.onClick)==null||p.call(e,u),!(e.disabled||u.defaultPrevented)&&(u.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:g(e.onPointerMove,z(u=>{c.onItemEnter(u),!u.defaultPrevented&&!e.disabled&&!n.open&&!i.current&&(c.onPointerGraceIntentChange(null),i.current=window.setTimeout(()=>{n.onOpenChange(!0),f()},100))})),onPointerLeave:g(e.onPointerLeave,z(u=>{var w,l;f();const p=(w=n.content)==null?void 0:w.getBoundingClientRect();if(p){const C=(l=n.content)==null?void 0:l.dataset.side,R=C==="right",h=R?-5:5,x=p[R?"left":"right"],S=p[R?"right":"left"];c.onPointerGraceIntentChange({area:[{x:u.clientX+h,y:u.clientY},{x,y:p.top},{x:S,y:p.top},{x:S,y:p.bottom},{x,y:p.bottom}],side:C}),window.clearTimeout(d.current),d.current=window.setTimeout(()=>c.onPointerGraceIntentChange(null),300)}else{if(c.onTriggerLeave(u),u.defaultPrevented)return;c.onPointerGraceIntentChange(null)}})),onKeyDown:g(e.onKeyDown,u=>{var w;const p=c.searchRef.current!=="";e.disabled||p&&u.key===" "||Hn[o.dir].includes(u.key)&&(n.onOpenChange(!0),(w=n.content)==null||w.focus(),u.preventDefault())})})})});an.displayName=X;var cn="MenuSubContent",sn=a.forwardRef((e,t)=>{const n=Ve(b,e.__scopeMenu),{forceMount:o=n.forceMount,...r}=e,c=K(b,e.__scopeMenu),i=q(b,e.__scopeMenu),d=rn(cn,e.__scopeMenu),m=a.useRef(null),v=N(t,m);return s.jsx(H.Provider,{scope:e.__scopeMenu,children:s.jsx(re,{present:o||c.open,children:s.jsx(H.Slot,{scope:e.__scopeMenu,children:s.jsx(Ce,{id:d.contentId,"aria-labelledby":d.triggerId,...r,ref:v,align:"start",side:i.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var u;i.isUsingKeyboardRef.current&&((u=m.current)==null||u.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:g(e.onFocusOutside,f=>{f.target!==d.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:g(e.onEscapeKeyDown,f=>{i.onClose(),f.preventDefault()}),onKeyDown:g(e.onKeyDown,f=>{var w;const u=f.currentTarget.contains(f.target),p=zn[i.dir].includes(f.key);u&&p&&(c.onOpenChange(!1),(w=d.trigger)==null||w.focus(),f.preventDefault())})})})})})});sn.displayName=cn;function un(e){return e?"open":"closed"}function te(e){return e==="indeterminate"}function _e(e){return te(e)?"indeterminate":e?"checked":"unchecked"}function mt(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function vt(e,t){return e.map((n,o)=>e[(t+o)%e.length])}function Mt(e,t,n){const r=t.length>1&&Array.from(t).every(v=>v===t[0])?t[0]:t,c=n?e.indexOf(n):-1;let i=vt(e,Math.max(c,0));r.length===1&&(i=i.filter(v=>v!==n));const m=i.find(v=>v.toLowerCase().startsWith(r.toLowerCase()));return m!==n?m:void 0}function gt(e,t){const{x:n,y:o}=e;let r=!1;for(let c=0,i=t.length-1;c<t.length;i=c++){const d=t[c].x,m=t[c].y,v=t[i].x,f=t[i].y;m>o!=f>o&&n<(v-d)*(o-m)/(f-m)+d&&(r=!r)}return r}function wt(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return gt(n,t)}function z(e){return t=>t.pointerType==="mouse"?e(t):void 0}var ht=Be,Ct=ge,xt=Ye,Rt=We,_t=xe,It=Xe,Et=se,bt=ze,St=qe,Pt=Qe,Dt=nn,yt=tn,Tt=on,At=an,Nt=sn,Ie="DropdownMenu",[Ot,io]=oe(Ie,[Ue]),I=Ue(),[jt,ln]=Ot(Ie),dn=e=>{const{__scopeDropdownMenu:t,children:n,dir:o,open:r,defaultOpen:c,onOpenChange:i,modal:d=!0}=e,m=I(t),v=a.useRef(null),[f=!1,u]=De({prop:r,defaultProp:c,onChange:i});return s.jsx(jt,{scope:t,triggerId:pe(),triggerRef:v,contentId:pe(),open:f,onOpenChange:u,onOpenToggle:a.useCallback(()=>u(p=>!p),[u]),modal:d,children:s.jsx(ht,{...m,open:f,onOpenChange:u,dir:o,modal:d,children:n})})};dn.displayName=Ie;var fn="DropdownMenuTrigger",pn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:o=!1,...r}=e,c=ln(fn,n),i=I(n);return s.jsx(Ct,{asChild:!0,...i,children:s.jsx(O.button,{type:"button",id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open,"aria-controls":c.open?c.contentId:void 0,"data-state":c.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...r,ref:ye(t,c.triggerRef),onPointerDown:g(e.onPointerDown,d=>{!o&&d.button===0&&d.ctrlKey===!1&&(c.onOpenToggle(),c.open||d.preventDefault())}),onKeyDown:g(e.onKeyDown,d=>{o||(["Enter"," "].includes(d.key)&&c.onOpenToggle(),d.key==="ArrowDown"&&c.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(d.key)&&d.preventDefault())})})})});pn.displayName=fn;var Ft="DropdownMenuPortal",mn=e=>{const{__scopeDropdownMenu:t,...n}=e,o=I(t);return s.jsx(xt,{...o,...n})};mn.displayName=Ft;var vn="DropdownMenuContent",Mn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=ln(vn,n),c=I(n),i=a.useRef(!1);return s.jsx(Rt,{id:r.contentId,"aria-labelledby":r.triggerId,...c,...o,ref:t,onCloseAutoFocus:g(e.onCloseAutoFocus,d=>{var m;i.current||(m=r.triggerRef.current)==null||m.focus(),i.current=!1,d.preventDefault()}),onInteractOutside:g(e.onInteractOutside,d=>{const m=d.detail.originalEvent,v=m.button===0&&m.ctrlKey===!0,f=m.button===2||v;(!r.modal||f)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Mn.displayName=vn;var kt="DropdownMenuGroup",Lt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=I(n);return s.jsx(_t,{...r,...o,ref:t})});Lt.displayName=kt;var Gt="DropdownMenuLabel",Kt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=I(n);return s.jsx(It,{...r,...o,ref:t})});Kt.displayName=Gt;var Ut="DropdownMenuItem",$t=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=I(n);return s.jsx(Et,{...r,...o,ref:t})});$t.displayName=Ut;var Bt="DropdownMenuCheckboxItem",Vt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=I(n);return s.jsx(bt,{...r,...o,ref:t})});Vt.displayName=Bt;var Yt="DropdownMenuRadioGroup",gn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=I(n);return s.jsx(St,{...r,...o,ref:t})});gn.displayName=Yt;var Wt="DropdownMenuRadioItem",wn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=I(n);return s.jsx(Pt,{...r,...o,ref:t})});wn.displayName=Wt;var Xt="DropdownMenuItemIndicator",hn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=I(n);return s.jsx(Dt,{...r,...o,ref:t})});hn.displayName=Xt;var Ht="DropdownMenuSeparator",zt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=I(n);return s.jsx(yt,{...r,...o,ref:t})});zt.displayName=Ht;var Zt="DropdownMenuArrow",qt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=I(n);return s.jsx(Tt,{...r,...o,ref:t})});qt.displayName=Zt;var Jt="DropdownMenuSubTrigger",Qt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=I(n);return s.jsx(At,{...r,...o,ref:t})});Qt.displayName=Jt;var eo="DropdownMenuSubContent",no=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=I(n);return s.jsx(Nt,{...r,...o,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});no.displayName=eo;var lo=dn,fo=pn,po=mn,mo=Mn,vo=gn,Mo=wn,go=hn;function to(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,c;for(c=0;c<o.length;c++)r=o[c],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}var oo=["color"],wo=a.forwardRef(function(e,t){var n=e.color,o=n===void 0?"currentColor":n,r=to(e,oo);return a.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{ref:t}),a.createElement("path",{d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:o,fillRule:"evenodd",clipRule:"evenodd"}))});function ho(e){return xn({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M20.118 3h-16.225a2.914 2.914 0 0 0 -2.503 4.371l8.116 13.549a2.917 2.917 0 0 0 4.987 .005l8.11 -13.539a2.914 2.914 0 0 0 -2.486 -4.386z",strokeWidth:"0",fill:"currentColor"}}]})(e)}export{mo as C,go as I,po as P,lo as R,fo as T,vo as a,Mo as b,ho as c,wo as d};
