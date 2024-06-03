import{f as n,ap as g,s as H,R as K,j as m}from"./index-79d4d288.js";import{c as S,$ as U,a as j,d as N,f as V,n as Y,h as q,g as W,e as y,i as X}from"./index-b4df5860.js";import{$ as G,c as z,d as J,a as Q,b as Z}from"./index-52999f72.js";const ee=n.forwardRef((e,o)=>n.createElement(S.span,g({},e,{ref:o,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),te=ee,[R,Me]=U("Tooltip",[G]),O=G(),oe="TooltipProvider",ne=700,D="tooltip.open",[re,k]=R(oe),ce=e=>{const{__scopeTooltip:o,delayDuration:t=ne,skipDelayDuration:r=300,disableHoverableContent:c=!1,children:s}=e,[i,u]=n.useState(!0),a=n.useRef(!1),p=n.useRef(0);return n.useEffect(()=>{const l=p.current;return()=>window.clearTimeout(l)},[]),n.createElement(re,{scope:o,isOpenDelayed:i,delayDuration:t,onOpen:n.useCallback(()=>{window.clearTimeout(p.current),u(!1)},[]),onClose:n.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>u(!0),r)},[r]),isPointerInTransitRef:a,onPointerInTransitChange:n.useCallback(l=>{a.current=l},[]),disableHoverableContent:c},s)},L="Tooltip",[ae,P]=R(L),se=e=>{const{__scopeTooltip:o,children:t,open:r,defaultOpen:c=!1,onOpenChange:s,disableHoverableContent:i,delayDuration:u}=e,a=k(L,e.__scopeTooltip),p=O(o),[l,d]=n.useState(null),x=q(),f=n.useRef(0),$=i??a.disableHoverableContent,h=u??a.delayDuration,b=n.useRef(!1),[T=!1,v]=W({prop:r,defaultProp:c,onChange:I=>{I?(a.onOpen(),document.dispatchEvent(new CustomEvent(D))):a.onClose(),s==null||s(I)}}),C=n.useMemo(()=>T?b.current?"delayed-open":"instant-open":"closed",[T]),E=n.useCallback(()=>{window.clearTimeout(f.current),b.current=!1,v(!0)},[v]),w=n.useCallback(()=>{window.clearTimeout(f.current),v(!1)},[v]),A=n.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{b.current=!0,v(!0)},h)},[h,v]);return n.useEffect(()=>()=>window.clearTimeout(f.current),[]),n.createElement(Q,p,n.createElement(ae,{scope:o,contentId:x,open:T,stateAttribute:C,trigger:l,onTriggerChange:d,onTriggerEnter:n.useCallback(()=>{a.isOpenDelayed?A():E()},[a.isOpenDelayed,A,E]),onTriggerLeave:n.useCallback(()=>{$?w():window.clearTimeout(f.current)},[w,$]),onOpen:E,onClose:w,disableHoverableContent:$},t))},M="TooltipTrigger",ie=n.forwardRef((e,o)=>{const{__scopeTooltip:t,...r}=e,c=P(M,t),s=k(M,t),i=O(t),u=n.useRef(null),a=N(o,u,c.onTriggerChange),p=n.useRef(!1),l=n.useRef(!1),d=n.useCallback(()=>p.current=!1,[]);return n.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),n.createElement(Z,g({asChild:!0},i),n.createElement(S.button,g({"aria-describedby":c.open?c.contentId:void 0,"data-state":c.stateAttribute},r,{ref:a,onPointerMove:y(e.onPointerMove,x=>{x.pointerType!=="touch"&&!l.current&&!s.isPointerInTransitRef.current&&(c.onTriggerEnter(),l.current=!0)}),onPointerLeave:y(e.onPointerLeave,()=>{c.onTriggerLeave(),l.current=!1}),onPointerDown:y(e.onPointerDown,()=>{p.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:y(e.onFocus,()=>{p.current||c.onOpen()}),onBlur:y(e.onBlur,c.onClose),onClick:y(e.onClick,c.onClose)})))}),F="TooltipPortal",[le,ue]=R(F,{forceMount:void 0}),pe=e=>{const{__scopeTooltip:o,forceMount:t,children:r,container:c}=e,s=P(F,o);return n.createElement(le,{scope:o,forceMount:t},n.createElement(j,{present:t||s.open},n.createElement(X,{asChild:!0,container:c},r)))},_="TooltipContent",de=n.forwardRef((e,o)=>{const t=ue(_,e.__scopeTooltip),{forceMount:r=t.forceMount,side:c="top",...s}=e,i=P(_,e.__scopeTooltip);return n.createElement(j,{present:r||i.open},i.disableHoverableContent?n.createElement(B,g({side:c},s,{ref:o})):n.createElement(fe,g({side:c},s,{ref:o})))}),fe=n.forwardRef((e,o)=>{const t=P(_,e.__scopeTooltip),r=k(_,e.__scopeTooltip),c=n.useRef(null),s=N(o,c),[i,u]=n.useState(null),{trigger:a,onClose:p}=t,l=c.current,{onPointerInTransitChange:d}=r,x=n.useCallback(()=>{u(null),d(!1)},[d]),f=n.useCallback(($,h)=>{const b=$.currentTarget,T={x:$.clientX,y:$.clientY},v=ve(T,b.getBoundingClientRect()),C=Te(T,v),E=ge(h.getBoundingClientRect()),w=ye([...C,...E]);u(w),d(!0)},[d]);return n.useEffect(()=>()=>x(),[x]),n.useEffect(()=>{if(a&&l){const $=b=>f(b,l),h=b=>f(b,a);return a.addEventListener("pointerleave",$),l.addEventListener("pointerleave",h),()=>{a.removeEventListener("pointerleave",$),l.removeEventListener("pointerleave",h)}}},[a,l,f,x]),n.useEffect(()=>{if(i){const $=h=>{const b=h.target,T={x:h.clientX,y:h.clientY},v=(a==null?void 0:a.contains(b))||(l==null?void 0:l.contains(b)),C=!me(T,i);v?x():C&&(x(),p())};return document.addEventListener("pointermove",$),()=>document.removeEventListener("pointermove",$)}},[a,l,i,p,x]),n.createElement(B,g({},e,{ref:s}))}),[$e,xe]=R(L,{isInside:!1}),B=n.forwardRef((e,o)=>{const{__scopeTooltip:t,children:r,"aria-label":c,onEscapeKeyDown:s,onPointerDownOutside:i,...u}=e,a=P(_,t),p=O(t),{onClose:l}=a;return n.useEffect(()=>(document.addEventListener(D,l),()=>document.removeEventListener(D,l)),[l]),n.useEffect(()=>{if(a.trigger){const d=x=>{const f=x.target;f!=null&&f.contains(a.trigger)&&l()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[a.trigger,l]),n.createElement(V,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:d=>d.preventDefault(),onDismiss:l},n.createElement(z,g({"data-state":a.stateAttribute},p,u,{ref:o,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),n.createElement(Y,null,r),n.createElement($e,{scope:t,isInside:!0},n.createElement(te,{id:a.contentId,role:"tooltip"},c||r))))}),be="TooltipArrow",he=n.forwardRef((e,o)=>{const{__scopeTooltip:t,...r}=e,c=O(t);return xe(be,t).isInside?null:n.createElement(J,g({},c,r,{ref:o}))});function ve(e,o){const t=Math.abs(o.top-e.y),r=Math.abs(o.bottom-e.y),c=Math.abs(o.right-e.x),s=Math.abs(o.left-e.x);switch(Math.min(t,r,c,s)){case s:return"left";case c:return"right";case t:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function Te(e,o,t=5){const r=[];switch(o){case"top":r.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":r.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":r.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":r.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return r}function ge(e){const{top:o,right:t,bottom:r,left:c}=e;return[{x:c,y:o},{x:t,y:o},{x:t,y:r},{x:c,y:r}]}function me(e,o){const{x:t,y:r}=e;let c=!1;for(let s=0,i=o.length-1;s<o.length;i=s++){const u=o[s].x,a=o[s].y,p=o[i].x,l=o[i].y;a>r!=l>r&&t<(p-u)*(r-a)/(l-a)+u&&(c=!c)}return c}function ye(e){const o=e.slice();return o.sort((t,r)=>t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0),Ce(o)}function Ce(e){if(e.length<=1)return e.slice();const o=[];for(let r=0;r<e.length;r++){const c=e[r];for(;o.length>=2;){const s=o[o.length-1],i=o[o.length-2];if((s.x-i.x)*(c.y-i.y)>=(s.y-i.y)*(c.x-i.x))o.pop();else break}o.push(c)}o.pop();const t=[];for(let r=e.length-1;r>=0;r--){const c=e[r];for(;t.length>=2;){const s=t[t.length-1],i=t[t.length-2];if((s.x-i.x)*(c.y-i.y)>=(s.y-i.y)*(c.x-i.x))t.pop();else break}t.push(c)}return t.pop(),o.length===1&&t.length===1&&o[0].x===t[0].x&&o[0].y===t[0].y?o:o.concat(t)}const Ee=ce,we=se,_e=ie,Pe=pe,Re=de,Oe=he,De=H(Re,{padding:"10px",br:"10px",border:"2px solid rgb(237, 237, 237)",background:"rgb(19, 19, 19)",color:"$white500",textShadow:"0px 5px 8px #000000",zIndex:19}),ke=H(Oe,{fill:"$white500"}),He=({children:e,text:o,side:t,disabled:r,...c})=>{const[s,i]=K.useState(!1);function u(a){if(r)return i(!1);i(a)}return m.jsx(Ee,{...c,children:m.jsxs(we,{onOpenChange:u,open:s,children:[m.jsx(_e,{children:e}),m.jsx(Pe,{children:m.jsxs(De,{className:"TooltipContent",side:t,children:[m.jsx(ke,{width:15,height:7}),o]})})]})})};export{He as T};