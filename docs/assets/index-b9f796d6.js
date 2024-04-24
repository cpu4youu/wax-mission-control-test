import{f as $,as as me,an as mt}from"./index-4381802b.js";import{$ as vt,n as wt,a as he,c as zt,k as ge}from"./index-46e7dfc1.js";const we=["top","right","bottom","left"],X=Math.min,T=Math.max,ft=Math.round,lt=Math.floor,j=t=>({x:t,y:t}),xe={left:"right",right:"left",bottom:"top",top:"bottom"},ye={start:"end",end:"start"};function xt(t,e,n){return T(t,X(e,n))}function N(t,e){return typeof t=="function"?t(e):t}function B(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function bt(t){return t==="x"?"y":"x"}function $t(t){return t==="y"?"height":"width"}function Q(t){return["top","bottom"].includes(B(t))?"y":"x"}function At(t){return bt(Q(t))}function ve(t,e,n){n===void 0&&(n=!1);const o=J(t),i=At(t),r=$t(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=dt(s)),[s,dt(s)]}function be(t){const e=dt(t);return[yt(t),e,yt(e)]}function yt(t){return t.replace(/start|end/g,e=>ye[e])}function $e(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Ae(t,e,n,o){const i=J(t);let r=$e(B(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(yt)))),r}function dt(t){return t.replace(/left|right|bottom|top/g,e=>xe[e])}function Re(t){return{top:0,right:0,bottom:0,left:0,...t}}function Nt(t){return typeof t!="number"?Re(t):{top:t,right:t,bottom:t,left:t}}function ut(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Dt(t,e,n){let{reference:o,floating:i}=t;const r=Q(e),s=At(e),l=$t(s),c=B(e),a=r==="y",u=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,m=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:u,y:o.y-i.height};break;case"bottom":f={x:u,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(J(e)){case"start":f[s]-=m*(n&&a?-1:1);break;case"end":f[s]+=m*(n&&a?-1:1);break}return f}const Oe=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=Dt(a,o,c),m=o,f={},p=0;for(let h=0;h<l.length;h++){const{name:w,fn:g}=l[h],{x:y,y:x,data:v,reset:b}=await g({x:u,y:d,initialPlacement:o,placement:m,strategy:i,middlewareData:f,rects:a,platform:s,elements:{reference:t,floating:e}});u=y??u,d=x??d,f={...f,[w]:{...f[w],...v}},b&&p<=50&&(p++,typeof b=="object"&&(b.placement&&(m=b.placement),b.rects&&(a=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:u,y:d}=Dt(a,m,c)),h=-1)}return{x:u,y:d,placement:m,strategy:i,middlewareData:f}};async function et(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:m=!1,padding:f=0}=N(e,t),p=Nt(f),w=l[m?d==="floating"?"reference":"floating":d],g=ut(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:a,rootBoundary:u,strategy:c})),y=d==="floating"?{...s.floating,x:o,y:i}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),v=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},b=ut(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:x,strategy:c}):y);return{top:(g.top-b.top+p.top)/v.y,bottom:(b.bottom-g.bottom+p.bottom)/v.y,left:(g.left-b.left+p.left)/v.x,right:(b.right-g.right+p.right)/v.x}}const Pe=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:a,padding:u=0}=N(t,e)||{};if(a==null)return{};const d=Nt(u),m={x:n,y:o},f=At(i),p=$t(f),h=await s.getDimensions(a),w=f==="y",g=w?"top":"left",y=w?"bottom":"right",x=w?"clientHeight":"clientWidth",v=r.reference[p]+r.reference[f]-m[f]-r.floating[p],b=m[f]-r.reference[f],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let O=A?A[x]:0;(!O||!await(s.isElement==null?void 0:s.isElement(A)))&&(O=l.floating[x]||r.floating[p]);const E=v/2-b/2,_=O/2-h[p]/2-1,k=X(d[g],_),H=X(d[y],_),C=k,W=O-h[p]-H,P=O/2-h[p]/2+E,S=xt(C,P,W),D=!c.arrow&&J(i)!=null&&P!==S&&r.reference[p]/2-(P<C?k:H)-h[p]/2<0,R=D?P<C?P-C:P-W:0;return{[f]:m[f]+R,data:{[f]:S,centerOffset:P-S-R,...D&&{alignmentOffset:R}},reset:D}}}),Ce=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:h=!0,...w}=N(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const g=B(i),y=B(l)===l,x=await(c.isRTL==null?void 0:c.isRTL(a.floating)),v=m||(y||!h?[dt(l)]:be(l));!m&&p!=="none"&&v.push(...Ae(l,h,p,x));const b=[l,...v],A=await et(e,w),O=[];let E=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&O.push(A[g]),d){const C=ve(i,s,x);O.push(A[C[0]],A[C[1]])}if(E=[...E,{placement:i,overflows:O}],!O.every(C=>C<=0)){var _,k;const C=(((_=r.flip)==null?void 0:_.index)||0)+1,W=b[C];if(W)return{data:{index:C,overflows:E},reset:{placement:W}};let P=(k=E.filter(S=>S.overflows[0]<=0).sort((S,D)=>S.overflows[1]-D.overflows[1])[0])==null?void 0:k.placement;if(!P)switch(f){case"bestFit":{var H;const S=(H=E.map(D=>[D.placement,D.overflows.filter(R=>R>0).reduce((R,Y)=>R+Y,0)]).sort((D,R)=>D[1]-R[1])[0])==null?void 0:H[0];S&&(P=S);break}case"initialPlacement":P=l;break}if(i!==P)return{reset:{placement:P}}}return{}}}};function _t(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Tt(t){return we.some(e=>t[e]>=0)}const Se=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=N(t,e);switch(o){case"referenceHidden":{const r=await et(e,{...i,elementContext:"reference"}),s=_t(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Tt(s)}}}case"escaped":{const r=await et(e,{...i,altBoundary:!0}),s=_t(r,n.floating);return{data:{escapedOffsets:s,escaped:Tt(s)}}}default:return{}}}}};async function Ee(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=B(n),l=J(n),c=Q(n)==="y",a=["left","top"].includes(s)?-1:1,u=r&&c?-1:1,d=N(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof p=="number"&&(f=l==="end"?p*-1:p),c?{x:f*u,y:m*a}:{x:m*a,y:f*u}}const De=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await Ee(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},_e=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:g,y}=w;return{x:g,y}}},...c}=N(t,e),a={x:n,y:o},u=await et(e,c),d=Q(B(i)),m=bt(d);let f=a[m],p=a[d];if(r){const w=m==="y"?"top":"left",g=m==="y"?"bottom":"right",y=f+u[w],x=f-u[g];f=xt(y,f,x)}if(s){const w=d==="y"?"top":"left",g=d==="y"?"bottom":"right",y=p+u[w],x=p-u[g];p=xt(y,p,x)}const h=l.fn({...e,[m]:f,[d]:p});return{...h,data:{x:h.x-n,y:h.y-o}}}}},Te=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:a=!0}=N(t,e),u={x:n,y:o},d=Q(i),m=bt(d);let f=u[m],p=u[d];const h=N(l,e),w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(c){const x=m==="y"?"height":"width",v=r.reference[m]-r.floating[x]+w.mainAxis,b=r.reference[m]+r.reference[x]-w.mainAxis;f<v?f=v:f>b&&(f=b)}if(a){var g,y;const x=m==="y"?"width":"height",v=["top","left"].includes(B(i)),b=r.reference[d]-r.floating[x]+(v&&((g=s.offset)==null?void 0:g[d])||0)+(v?0:w.crossAxis),A=r.reference[d]+r.reference[x]+(v?0:((y=s.offset)==null?void 0:y[d])||0)-(v?w.crossAxis:0);p<b?p=b:p>A&&(p=A)}return{[m]:f,[d]:p}}}},Le=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:r}=e,{apply:s=()=>{},...l}=N(t,e),c=await et(e,l),a=B(n),u=J(n),d=Q(n)==="y",{width:m,height:f}=o.floating;let p,h;a==="top"||a==="bottom"?(p=a,h=u===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(h=a,p=u==="end"?"top":"bottom");const w=f-c[p],g=m-c[h],y=!e.middlewareData.shift;let x=w,v=g;if(d){const A=m-c.left-c.right;v=u||y?X(g,A):A}else{const A=f-c.top-c.bottom;x=u||y?X(w,A):A}if(y&&!u){const A=T(c.left,0),O=T(c.right,0),E=T(c.top,0),_=T(c.bottom,0);d?v=m-2*(A!==0||O!==0?A+O:T(c.left,c.right)):x=f-2*(E!==0||_!==0?E+_:T(c.top,c.bottom))}await s({...e,availableWidth:v,availableHeight:x});const b=await i.getDimensions(r.floating);return m!==b.width||f!==b.height?{reset:{rects:!0}}:{}}}};function q(t){return Bt(t)?(t.nodeName||"").toLowerCase():"#document"}function L(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(Bt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Bt(t){return t instanceof Node||t instanceof L(t).Node}function V(t){return t instanceof Element||t instanceof L(t).Element}function F(t){return t instanceof HTMLElement||t instanceof L(t).HTMLElement}function Lt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof L(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=M(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Me(t){return["table","td","th"].includes(q(t))}function Rt(t){const e=Ot(),n=M(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ke(t){let e=G(t);for(;F(e)&&!ht(e);){if(Rt(e))return e;e=G(e)}return null}function Ot(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ht(t){return["html","body","#document"].includes(q(t))}function M(t){return L(t).getComputedStyle(t)}function gt(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function G(t){if(q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Lt(t)&&t.host||I(t);return Lt(e)?e.host:e}function Vt(t){const e=G(t);return ht(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&ot(e)?e:Vt(e)}function nt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Vt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=L(i);return r?e.concat(s,s.visualViewport||[],ot(i)?i:[],s.frameElement&&n?nt(s.frameElement):[]):e.concat(i,nt(i,[],n))}function It(t){const e=M(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=ft(n)!==r||ft(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function Pt(t){return V(t)?t:t.contextElement}function K(t){const e=Pt(t);if(!F(e))return j(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=It(e);let s=(r?ft(n.width):n.width)/o,l=(r?ft(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const He=j(0);function Yt(t){const e=L(t);return!Ot()||!e.visualViewport?He:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function We(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==L(t)?!1:e}function U(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Pt(t);let s=j(1);e&&(o?V(o)&&(s=K(o)):s=K(t));const l=We(r,n,o)?Yt(r):j(0);let c=(i.left+l.x)/s.x,a=(i.top+l.y)/s.y,u=i.width/s.x,d=i.height/s.y;if(r){const m=L(r),f=o&&V(o)?L(o):o;let p=m,h=p.frameElement;for(;h&&o&&f!==p;){const w=K(h),g=h.getBoundingClientRect(),y=M(h),x=g.left+(h.clientLeft+parseFloat(y.paddingLeft))*w.x,v=g.top+(h.clientTop+parseFloat(y.paddingTop))*w.y;c*=w.x,a*=w.y,u*=w.x,d*=w.y,c+=x,a+=v,p=L(h),h=p.frameElement}}return ut({width:u,height:d,x:c,y:a})}const Fe=[":popover-open",":modal"];function Xt(t){return Fe.some(e=>{try{return t.matches(e)}catch{return!1}})}function ze(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=I(o),l=e?Xt(e.floating):!1;if(o===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},a=j(1);const u=j(0),d=F(o);if((d||!d&&!r)&&((q(o)!=="body"||ot(s))&&(c=gt(o)),F(o))){const m=U(o);a=K(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+u.x,y:n.y*a.y-c.scrollTop*a.y+u.y}}function Ne(t){return Array.from(t.getClientRects())}function jt(t){return U(I(t)).left+gt(t).scrollLeft}function Be(t){const e=I(t),n=gt(t),o=t.ownerDocument.body,i=T(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=T(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+jt(t);const l=-n.scrollTop;return M(o).direction==="rtl"&&(s+=T(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function Ve(t,e){const n=L(t),o=I(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const a=Ot();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function Ie(t,e){const n=U(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=F(t)?K(t):j(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,a=o*r.y;return{width:s,height:l,x:c,y:a}}function Mt(t,e,n){let o;if(e==="viewport")o=Ve(t,n);else if(e==="document")o=Be(I(t));else if(V(e))o=Ie(e,n);else{const i=Yt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return ut(o)}function qt(t,e){const n=G(t);return n===e||!V(n)||ht(n)?!1:M(n).position==="fixed"||qt(n,e)}function Ye(t,e){const n=e.get(t);if(n)return n;let o=nt(t,[],!1).filter(l=>V(l)&&q(l)!=="body"),i=null;const r=M(t).position==="fixed";let s=r?G(t):t;for(;V(s)&&!ht(s);){const l=M(s),c=Rt(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(s)&&!c&&qt(t,s))?o=o.filter(u=>u!==s):i=l,s=G(s)}return e.set(t,o),o}function Xe(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?Ye(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((a,u)=>{const d=Mt(e,u,i);return a.top=T(d.top,a.top),a.right=X(d.right,a.right),a.bottom=X(d.bottom,a.bottom),a.left=T(d.left,a.left),a},Mt(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function je(t){const{width:e,height:n}=It(t);return{width:e,height:n}}function qe(t,e,n){const o=F(e),i=I(e),r=n==="fixed",s=U(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=j(0);if(o||!o&&!r)if((q(e)!=="body"||ot(i))&&(l=gt(e)),o){const d=U(e,!0,r,e);c.x=d.x+e.clientLeft,c.y=d.y+e.clientTop}else i&&(c.x=jt(i));const a=s.left+l.scrollLeft-c.x,u=s.top+l.scrollTop-c.y;return{x:a,y:u,width:s.width,height:s.height}}function kt(t,e){return!F(t)||M(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ut(t,e){const n=L(t);if(!F(t)||Xt(t))return n;let o=kt(t,e);for(;o&&Me(o)&&M(o).position==="static";)o=kt(o,e);return o&&(q(o)==="html"||q(o)==="body"&&M(o).position==="static"&&!Rt(o))?n:o||ke(t)||n}const Ue=async function(t){const e=this.getOffsetParent||Ut,n=this.getDimensions;return{reference:qe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}};function Ze(t){return M(t).direction==="rtl"}const Ke={convertOffsetParentRelativeRectToViewportRelativeRect:ze,getDocumentElement:I,getClippingRect:Xe,getOffsetParent:Ut,getElementRects:Ue,getClientRects:Ne,getDimensions:je,getScale:K,isElement:V,isRTL:Ze};function Ge(t,e){let n=null,o;const i=I(t);function r(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:a,top:u,width:d,height:m}=t.getBoundingClientRect();if(l||e(),!d||!m)return;const f=lt(u),p=lt(i.clientWidth-(a+d)),h=lt(i.clientHeight-(u+m)),w=lt(a),y={rootMargin:-f+"px "+-p+"px "+-h+"px "+-w+"px",threshold:T(0,X(1,c))||1};let x=!0;function v(b){const A=b[0].intersectionRatio;if(A!==c){if(!x)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},100)}x=!1}try{n=new IntersectionObserver(v,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(v,y)}n.observe(t)}return s(!0),r}function Je(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=Pt(t),u=i||r?[...a?nt(a):[],...nt(e)]:[];u.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),r&&g.addEventListener("resize",n)});const d=a&&l?Ge(a,n):null;let m=-1,f=null;s&&(f=new ResizeObserver(g=>{let[y]=g;y&&y.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let p,h=c?U(t):null;c&&w();function w(){const g=U(t);h&&(g.x!==h.x||g.y!==h.y||g.width!==h.width||g.height!==h.height)&&n(),h=g,p=requestAnimationFrame(w)}return n(),()=>{var g;u.forEach(y=>{i&&y.removeEventListener("scroll",n),r&&y.removeEventListener("resize",n)}),d==null||d(),(g=f)==null||g.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const Qe=_e,tn=Ce,en=Le,nn=Se,Ht=Pe,on=Te,rn=(t,e,n)=>{const o=new Map,i={platform:Ke,...n},r={...i.platform,_c:o};return Oe(t,e,{...i,platform:r})},sn=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:i}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Ht({element:o.current,padding:i}).fn(n):{}:o?Ht({element:o,padding:i}).fn(n):{}}}};var at=typeof document<"u"?$.useLayoutEffect:$.useEffect;function pt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!pt(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!pt(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function Zt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Wt(t,e){const n=Zt(t);return Math.round(e*n)/n}function Ft(t){const e=$.useRef(t);return at(()=>{e.current=t}),e}function cn(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:l=!0,whileElementsMounted:c,open:a}=t,[u,d]=$.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,f]=$.useState(o);pt(m,o)||f(o);const[p,h]=$.useState(null),[w,g]=$.useState(null),y=$.useCallback(R=>{R!==A.current&&(A.current=R,h(R))},[]),x=$.useCallback(R=>{R!==O.current&&(O.current=R,g(R))},[]),v=r||p,b=s||w,A=$.useRef(null),O=$.useRef(null),E=$.useRef(u),_=c!=null,k=Ft(c),H=Ft(i),C=$.useCallback(()=>{if(!A.current||!O.current)return;const R={placement:e,strategy:n,middleware:m};H.current&&(R.platform=H.current),rn(A.current,O.current,R).then(Y=>{const z={...Y,isPositioned:!0};W.current&&!pt(E.current,z)&&(E.current=z,me.flushSync(()=>{d(z)}))})},[m,e,n,H]);at(()=>{a===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,d(R=>({...R,isPositioned:!1})))},[a]);const W=$.useRef(!1);at(()=>(W.current=!0,()=>{W.current=!1}),[]),at(()=>{if(v&&(A.current=v),b&&(O.current=b),v&&b){if(k.current)return k.current(v,b,C);C()}},[v,b,C,k,_]);const P=$.useMemo(()=>({reference:A,floating:O,setReference:y,setFloating:x}),[y,x]),S=$.useMemo(()=>({reference:v,floating:b}),[v,b]),D=$.useMemo(()=>{const R={position:n,left:0,top:0};if(!S.floating)return R;const Y=Wt(S.floating,u.x),z=Wt(S.floating,u.y);return l?{...R,transform:"translate("+Y+"px, "+z+"px)",...Zt(S.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:Y,top:z}},[n,l,S.floating,u.x,u.y]);return $.useMemo(()=>({...u,update:C,refs:P,elements:S,floatingStyles:D}),[u,C,P,S,D])}const ln=$.forwardRef((t,e)=>{const{children:n,width:o=10,height:i=5,...r}=t;return $.createElement(vt.svg,mt({},r,{ref:e,width:o,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),t.asChild?n:$.createElement("polygon",{points:"0,0 30,0 15,10"}))}),an=ln;function fn(t){const[e,n]=$.useState(void 0);return wt(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const r=i[0];let s,l;if("borderBoxSize"in r){const c=r.borderBoxSize,a=Array.isArray(c)?c[0]:c;s=a.inlineSize,l=a.blockSize}else s=t.offsetWidth,l=t.offsetHeight;n({width:s,height:l})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else n(void 0)},[t]),e}const Kt="Popper",[Gt,On]=he(Kt),[dn,Jt]=Gt(Kt),un=t=>{const{__scopePopper:e,children:n}=t,[o,i]=$.useState(null);return $.createElement(dn,{scope:e,anchor:o,onAnchorChange:i},n)},pn="PopperAnchor",mn=$.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...i}=t,r=Jt(pn,n),s=$.useRef(null),l=zt(e,s);return $.useEffect(()=>{r.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:$.createElement(vt.div,mt({},i,{ref:l}))}),Qt="PopperContent",[hn,gn]=Gt(Qt),wn=$.forwardRef((t,e)=>{var n,o,i,r,s,l,c,a;const{__scopePopper:u,side:d="bottom",sideOffset:m=0,align:f="center",alignOffset:p=0,arrowPadding:h=0,avoidCollisions:w=!0,collisionBoundary:g=[],collisionPadding:y=0,sticky:x="partial",hideWhenDetached:v=!1,updatePositionStrategy:b="optimized",onPlaced:A,...O}=t,E=Jt(Qt,u),[_,k]=$.useState(null),H=zt(e,tt=>k(tt)),[C,W]=$.useState(null),P=fn(C),S=(n=P==null?void 0:P.width)!==null&&n!==void 0?n:0,D=(o=P==null?void 0:P.height)!==null&&o!==void 0?o:0,R=d+(f!=="center"?"-"+f:""),Y=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},z=Array.isArray(g)?g:[g],ee=z.length>0,it={padding:Y,boundary:z.filter(bn),altBoundary:ee},{refs:ne,floatingStyles:Ct,placement:oe,isPositioned:rt,middlewareData:Z}=cn({strategy:"fixed",placement:R,whileElementsMounted:(...tt)=>Je(...tt,{animationFrame:b==="always"}),elements:{reference:E.anchor},middleware:[De({mainAxis:m+D,alignmentAxis:p}),w&&Qe({mainAxis:!0,crossAxis:!1,limiter:x==="partial"?on():void 0,...it}),w&&tn({...it}),en({...it,apply:({elements:tt,rects:Et,availableWidth:fe,availableHeight:de})=>{const{width:ue,height:pe}=Et.reference,ct=tt.floating.style;ct.setProperty("--radix-popper-available-width",`${fe}px`),ct.setProperty("--radix-popper-available-height",`${de}px`),ct.setProperty("--radix-popper-anchor-width",`${ue}px`),ct.setProperty("--radix-popper-anchor-height",`${pe}px`)}}),C&&sn({element:C,padding:h}),$n({arrowWidth:S,arrowHeight:D}),v&&nn({strategy:"referenceHidden",...it})]}),[St,ie]=te(oe),st=ge(A);wt(()=>{rt&&(st==null||st())},[rt,st]);const re=(i=Z.arrow)===null||i===void 0?void 0:i.x,se=(r=Z.arrow)===null||r===void 0?void 0:r.y,ce=((s=Z.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[le,ae]=$.useState();return wt(()=>{_&&ae(window.getComputedStyle(_).zIndex)},[_]),$.createElement("div",{ref:ne.setFloating,"data-radix-popper-content-wrapper":"",style:{...Ct,transform:rt?Ct.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:le,"--radix-popper-transform-origin":[(l=Z.transformOrigin)===null||l===void 0?void 0:l.x,(c=Z.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:t.dir},$.createElement(hn,{scope:u,placedSide:St,onArrowChange:W,arrowX:re,arrowY:se,shouldHideArrow:ce},$.createElement(vt.div,mt({"data-side":St,"data-align":ie},O,{ref:H,style:{...O.style,animation:rt?void 0:"none",opacity:(a=Z.hide)!==null&&a!==void 0&&a.referenceHidden?0:void 0}}))))}),xn="PopperArrow",yn={top:"bottom",right:"left",bottom:"top",left:"right"},vn=$.forwardRef(function(e,n){const{__scopePopper:o,...i}=e,r=gn(xn,o),s=yn[r.placedSide];return $.createElement("span",{ref:r.onArrowChange,style:{position:"absolute",left:r.arrowX,top:r.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[r.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[r.placedSide],visibility:r.shouldHideArrow?"hidden":void 0}},$.createElement(an,mt({},i,{ref:n,style:{...i.style,display:"block"}})))});function bn(t){return t!==null}const $n=t=>({name:"transformOrigin",options:t,fn(e){var n,o,i,r,s;const{placement:l,rects:c,middlewareData:a}=e,d=((n=a.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,m=d?0:t.arrowWidth,f=d?0:t.arrowHeight,[p,h]=te(l),w={start:"0%",center:"50%",end:"100%"}[h],g=((o=(i=a.arrow)===null||i===void 0?void 0:i.x)!==null&&o!==void 0?o:0)+m/2,y=((r=(s=a.arrow)===null||s===void 0?void 0:s.y)!==null&&r!==void 0?r:0)+f/2;let x="",v="";return p==="bottom"?(x=d?w:`${g}px`,v=`${-f}px`):p==="top"?(x=d?w:`${g}px`,v=`${c.floating.height+f}px`):p==="right"?(x=`${-f}px`,v=d?w:`${y}px`):p==="left"&&(x=`${c.floating.width+f}px`,v=d?w:`${y}px`),{data:{x,y:v}}}});function te(t){const[e,n="center"]=t.split("-");return[e,n]}const Pn=un,Cn=mn,Sn=wn,En=vn;export{On as $,Sn as a,En as b,Pn as c,Cn as d,fn as e};
