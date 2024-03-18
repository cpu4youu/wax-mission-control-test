import{e as se,s as d,j as e,W as je,V as we,U as ye,f as a,ah as y,w as R}from"./index-5878d35b.js";import{$ as Te,a as Se,b as ve,c as $e,d as Me,e as Ce,f as Fe,T as _e,C as Ae}from"./index.esm-5bf88b11.js";import{G as ee}from"./gradient-border-6f5a9aa4.js";import{u as Pe}from"./mine-query-ba52e7f3.js";import{S as ne}from"./shards-59ef5564.js";import"./index-7a867450.js";import"./Combination-23116283.js";const ke=se({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),De=se({"0%":{opacity:0,transform:"translateY(2px)"},"100%":{opacity:1,transform:"translateY(0)"}}),We=d(Te,{}),Ge=d(Se,{h:"50px","&[disabled]":{borderColor:"rgba(255,255,255,0.5)",opacity:"0.5"},variants:{isLoading:{true:{border:"none",background:"linear-gradient( -90deg, rgba(255,255,255,0.5),rgba(255,255,255,0.1),rgba(255,255,255,0.5))",animation:`${ke} 1.2s ease-in-out infinite`,backgroundSize:"400% 400%"}}}}),Ie=d(ve,{zIndex:99}),Le=d($e,{minWidth:220,bg:"rgba(121, 121, 121, 0.3)",border:"1px solid #fff",borderRadius:20,color:"$white500",padding:5,boxShadow:"0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",animationDuration:"400ms",animationTimingFunction:"cubic-bezier(0.16, 1, 0.3, 1)",willChange:"transform, opacity",svg:{transition:"all .3s cubic-bezier(0.16, 1, 0.3, 1)","&:first-of-type":{position:"absolute",inset:"-1px 0 0 -1px",w:"calc(100% + 3px)",h:"calc(100% + 3px)",zIndex:-1}},'&[data-state="open"]':{bg:"linear-gradient(90deg, rgba(255, 255, 255,0.85) 0%, rgba(217, 217, 217,0.85) 105.75%)",br:"15px",zIndex:999,'&[data-side="bottom"]':{animationName:De}},"@sm":{minW:"initial"}}),Re=d(Me,{maxH:"250px",overflowY:"auto","&::-webkit-scrollbar-thumb":{bg:"rgba(33, 33, 33, 0.7)",opacity:.1,borderRadius:"10px",border:"2px solid $black300"}}),ze=d(Ce,{all:"unset",lineHeight:1,ff:"$body",fw:"$normal",fs:"16px",color:"$black500",textShadow:"1px 1px 3px rgba(0, 0, 0, 0.25)",cursor:"pointer",borderRadius:3,display:"flex",alignItems:"center",height:25,padding:"0 5px",paddingLeft:25,position:"relative",userSelect:"none",variants:{rarity:{Abundant:{color:"#4c4c4c"},Common:{color:"#000000"},Rare:{color:"#3d74e9"},Epic:{color:"#8719f0"},Legendary:{color:"#da992e"},Mythical:{color:"#d20066"}}},"@sm":{fs:"12px"}}),Ve=d(Fe,{position:"absolute",left:0,width:25,display:"inline-flex",alignItems:"center",justifyContent:"center"}),Ee=d("button",{display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:1,position:"relative",br:"20px",bg:"linear-gradient(90deg, rgba(255, 255, 255, 0.54) 0%, rgba(217, 217, 217, 0.3834) 105.75%)",color:"$black500",fw:"$bold",fs:"16px",ff:"$heading",h:"50px",minWidth:220,padding:"0 20px",svg:{transition:"all .3s cubic-bezier(0.16, 1, 0.3, 1)","&:first-of-type":{position:"absolute",inset:"0",w:"100%",h:"100%"}},'&[data-state="open"]':{zIndex:999,"svg:last-of-type":{transform:"rotate(180deg)"}},"@sm":{maxWidth:220,minWidth:"auto",width:"50%",fs:"12px","svg:last-of-type":{ml:"10px"}}});function S({title:s,options:x,disabled:g,selected:b,onSelected:f,colorize:T,notClearable:G,isLoading:o}){var r;function $(h){const t=x==null?void 0:x.find(M=>M.value===h&&M.value!=="none");f(t)}return e.jsxs(We,{children:[e.jsx(Ge,{disabled:o||g,asChild:!0,isLoading:o,children:e.jsx(Ee,{"aria-label":"Customise options",children:o?"":e.jsxs(e.Fragment,{children:[e.jsx(ee,{color1:"#FFB31F",color2:"#FFB31F"}),(b==null?void 0:b.label)||s,e.jsx(_e,{size:15})]})})}),e.jsx(Ie,{children:e.jsxs(Le,{align:"start",sideOffset:5,children:[e.jsx(ee,{color1:"#FFB31F",color2:"#FFB31F"}),e.jsx(Re,{value:b!=null&&b.value?b.value:"none",onValueChange:$,children:(r=x==null?void 0:x.filter(h=>!G||h.value!=="none"))==null?void 0:r.map(h=>e.jsxs(ze,{rarity:T?h==null?void 0:h.rarity:"Common",value:h.value,children:[e.jsx(Ve,{children:e.jsx(Ae,{})}),h.label]},h.value))})]})})]})}const He=d("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",w:"100%"}),Ne=d("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),Be=d("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),Oe=d("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1000px",mt:"20px",gap:"4px","@md":{mb:"10px"},"@sm":{mt:"0px",pt:"40px",px:"10px",justify:"flex-start",overflow:"auto",direction:"column"}}),Ue=d("div",{d:"grid",gridTemplateRows:"1fr 1fr",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridGap:"15px",w:"100%","@md":{padding:"0",gridTemplateAreas:`
    'tool1 tool1 shine1 shine1'
    'tool2 tool2 shine2 shine2'
    'tool3 tool3 shine3 shine3'
    'land land land land'
    'button button button button'`,mt:"40px",">div":{w:"100%",maxW:"100%",h:"50px","&:nth-child(1)":{gridArea:"tool1"},"&:nth-child(2)":{gridArea:"tool2"},"&:nth-child(3)":{gridArea:"tool3"},"&:nth-child(5)":{gridArea:"shine1"},"&:nth-child(6)":{gridArea:"shine2"},"&:nth-child(7)":{gridArea:"shine3"},"&:nth-child(4)":{mt:"10px",gridArea:"land",position:"relative"}},">button":{gridArea:"button"}},"@sm":{mt:"0px",maxW:"400px"}}),v=d("div",{d:"grid",gridTemplateRows:"1fr ",gridTemplateColumns:"1fr ",w:"100%",maxW:"100%",h:"40px",">p":{textAlign:"center",color:"$white500",fs:"18px",ff:"$heading",fw:"$bold"},"@md":{">p":{fs:"12px"},">button":{w:"100%",maxW:"100%",h:"40px"}}}),Qe=d("button",{w:"100%",maxW:"360px",h:"50px",br:"10px",border:"3px solid #D9D9D9",background:"#008FC3",color:"$white500",fs:"20px",fw:"$bold",ff:"$body","&[disabled]":{opacity:"0.5"},"@sm":{maxW:"100%"}});d("p",{textAlign:"center",w:"100%",fs:"12px",ff:"$heading"});const z=d("div",{d:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"20px",mt:"40px",w:"100%","@sm":{gridTemplateColumns:"1fr"}}),W=d("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",gap:"5px",w:"100%","@md":{maxW:"100%","&.basic-values":{maxW:"100%",">span":{"&:first-of-type":{mb:"10px"},"& >span:last-of-type":{w:"auto",textAlign:"right"}}}}}),_=d("h3",{w:"100%",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 1)",textTransform:"uppercase",mb:"10px",fs:"20px",fw:"$bold",ff:"$heading","@sm":{fs:"16px"}}),u=d("span",{d:"flex",align:"center",justify:"space-between",gap:"5px",w:"100%",">span":{d:"flex",align:"center",justify:"flex-start",gap:"5px",px:"10px",h:"40px",w:"100%",textShadow:"0px 4px 4px rgba(0, 0, 0, 1)",bg:"rgba(255, 255, 255, 0.03)",color:"$white500",fs:"18px",ff:"$body","&:last-child":{justify:"flex-end",textAlign:"right"}},"&.rarities":{"span:first-child::first-letter":{fs:"18px",fw:"bold",textAlign:"left"}},"&.rarity-mining":{"span:last-child":{fs:"16px",fw:"bold",textAlign:"left"}},"@sm":{">span":{minH:"20px",fs:"12px"},"&.rarities":{"span:first-child::first-letter":{fs:"14px"}},"&.rarity-mining":{">span:last-child":{fs:"12px",">span":{fs:"12px"}}}}}),D=d("div",{d:"flex",align:"center",justify:"space-between",gap:"5px",bg:"rgba(255, 255, 255, 0.03)",h:"40px",w:"100%",px:"10px",span:{d:"flex",align:"center",justify:"flex-end",gap:"5px",w:"100%",textShadow:"0px 4px 4px rgba(0, 0, 0, 1)",color:"$white500",fs:"18px",ff:"$body"},div:{d:"flex",align:"center",justify:"center",minW:"30px",h:"30px"},"@sm":{span:{minH:"20px",fs:"12px"}}}),Ye=d("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",gap:"4px",w:"100%"}),Ke=d("div",{d:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridGap:"4px",h:"40px",w:"100%",span:{d:"flex",align:"center",justify:"center",w:"100%",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 1)",textAlign:"center",bg:"rgba(255, 255, 255, 0.16)",fs:"22px",fw:"$bold",ff:"$body"},"@md":{span:{fs:"16px"}},"@sm":{gridTemplateColumns:"2.3fr 0.8fr 0.7fr 1.1fr",gridGap:"5px",span:{fs:"12px"}}}),qe=d("div",{d:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridGap:"4px",h:"40px",w:"100%",span:{d:"flex",align:"center",justify:"center",h:"40px",textShadow:"0px 4px 4px rgba(0, 0, 0, 1)",bg:"rgba(255, 255, 255, 0.03)",textAlign:"center",color:"$white500",fs:"20px",ff:"$body"},"@md":{span:{fs:"14px"}},"@sm":{gridTemplateColumns:"2.3fr 0.8fr 0.7fr 1.1fr",gridGap:"5px"}}),rn=()=>{const{data:s,isLoading:x}=je(),{data:g}=Pe(),{data:b}=we(),{data:f}=ye(),[T,G]=a.useState("general"),[o,$]=a.useState(void 0),[r,h]=a.useState(void 0),[t,M]=a.useState(void 0),[m,I]=a.useState(void 0),V=a.useMemo(()=>y((s==null?void 0:s.allData.filter(n=>n.toolname===(o==null?void 0:o.toolname)))??[],"shine","shine"),[s==null?void 0:s.allData,o]),E=a.useMemo(()=>y((s==null?void 0:s.allData.filter(n=>n.toolname===(r==null?void 0:r.toolname)))??[],"shine","shine"),[s==null?void 0:s.allData,r]),H=a.useMemo(()=>y((s==null?void 0:s.allData.filter(n=>n.toolname===(t==null?void 0:t.toolname)))??[],"shine","shine"),[s==null?void 0:s.allData,t]),oe=a.useMemo(()=>o?y([o],"shine","shine")[0]:void 0,[o]),re=a.useMemo(()=>o?y([o],"toolname","toolname")[0]:void 0,[o]),te=a.useMemo(()=>r?y([r],"shine","shine")[0]:void 0,[r]),ie=a.useMemo(()=>r?y([r],"toolname","toolname")[0]:void 0,[r]),le=a.useMemo(()=>t?y([t],"shine","shine")[0]:void 0,[t]),ae=a.useMemo(()=>t?y([t],"toolname","toolname")[0]:void 0,[t]),N=a.useCallback(()=>{var l;const n=(l=s==null?void 0:s.allData)==null?void 0:l.find(i=>i.toolname==="Standard Shovel"&&i.shine==="Stone");n&&$({...n,value:String((n==null?void 0:n.template_id)??""),label:(n==null?void 0:n.toolname)??""}),I(f==null?void 0:f.find(i=>i.landname==="Geothermal Springs"))},[s,f]),B=a.useCallback(()=>{var l,i,p,w,j,C,Q,Y;const n=[];for(let F=0;F<(((l=s==null?void 0:s.userTools)==null?void 0:l.length)??0);F++){const be=(i=s==null?void 0:s.allData)==null?void 0:i.find(K=>{var q,J,X,Z;return K.toolname===((J=(q=s==null?void 0:s.userTools)==null?void 0:q[F])==null?void 0:J.name)&&K.shine===((Z=(X=s==null?void 0:s.userTools)==null?void 0:X[F])==null?void 0:Z.shine)});n.push(be)}n[0]&&$({...n[0],value:String(((p=n[0])==null?void 0:p.template_id)??""),label:((w=n[0])==null?void 0:w.toolname)??""}),n[1]&&h({...n[1],value:String(((j=n[1])==null?void 0:j.template_id)??""),label:((C=n[1])==null?void 0:C.toolname)??""}),n[2]&&M({...n[2],value:String(((Q=n[2])==null?void 0:Q.template_id)??""),label:((Y=n[2])==null?void 0:Y.toolname)??""}),I(f==null?void 0:f.find(F=>F.landtype_id===(b==null?void 0:b.cardid)))},[s,f]);a.useEffect(()=>{!(s!=null&&s.userTools)||(s==null?void 0:s.userTools.length)===0?N():B()},[N,B,s]);const O=a.useMemo(()=>[(o==null?void 0:o.cooldown_seconds)??0,(r==null?void 0:r.cooldown_seconds)??0,(t==null?void 0:t.cooldown_seconds)??0].sort((n,l)=>l-n),[o==null?void 0:o.cooldown_seconds,r==null?void 0:r.cooldown_seconds,t==null?void 0:t.cooldown_seconds]),c=a.useCallback(n=>{const l=n??m,[i,p,w]=O,j=(l==null?void 0:l.cooldown_mod)??0;return!p&&!w?i*(j/10):w?(i+p)*(j/10):(i+p/2)*(j/10)},[O,m]),L=a.useMemo(()=>[o,r,t].reduce((l,i)=>{const p=i==null?void 0:i.rarity;return l[p]?{...l,[p]:l[p]+(Number(i==null?void 0:i.mining_power)??0)}:{...l,[p]:(i==null?void 0:i.mining_power)??0}},{}),[o,r,t]),A=a.useCallback(n=>{const l=n??m;return Object.keys(L).map(i=>{const p=L[i]*((l==null?void 0:l.mining_power_mod)??0)/1e4;return{rarity:i,percentage:(p>=.8?.8:p)*100}}).filter(i=>i.percentage>0)},[L,m]),P=a.useCallback(n=>A(n).reduce((i,p)=>{var j;const w=p.percentage/100*(((j=g==null?void 0:g.pool_buckets.find(C=>(C==null?void 0:C.key)===p.rarity))==null?void 0:j.formattedValue)??0);return i+w},0),[A,g==null?void 0:g.pool_buckets]),k=a.useCallback(n=>{const l=n??m;return(((o==null?void 0:o.nft_power)??0)+((r==null?void 0:r.nft_power)??0)+((t==null?void 0:t.nft_power)??0))*((l==null?void 0:l.nft_power_mod)??0)/100},[m,o==null?void 0:o.nft_power,r==null?void 0:r.nft_power,t==null?void 0:t.nft_power]),U=a.useMemo(()=>c()/60,[c]),de=a.useMemo(()=>P()/(c()>=0?c():1)*3600,[P,c]),ce=a.useMemo(()=>k()/(c()>=0?c():1)*3600,[k,c]),pe=a.useMemo(()=>3600/(c()>=0?c():1),[c]),xe=a.useMemo(()=>{const n=(o==null?void 0:o.nft_power)??0,l=(r==null?void 0:r.nft_power)??0,i=(t==null?void 0:t.nft_power)??0;return(n+l+i)*((m==null?void 0:m.nft_power_mod)??0)/100},[o==null?void 0:o.nft_power,r==null?void 0:r.nft_power,t==null?void 0:t.nft_power,m==null?void 0:m.nft_power_mod]),fe=a.useMemo(()=>((o==null?void 0:o.pow)??0)+((r==null?void 0:r.pow)??0)+((t==null?void 0:t.pow)??0),[o==null?void 0:o.pow,r==null?void 0:r.pow,t==null?void 0:t.pow]),he=a.useMemo(()=>A().reduce((n,l)=>n+l.percentage,0),[A]),me=a.useCallback(n=>P(n)/(c(n)>=0?c(n):1)*3600,[P,c]),ue=a.useCallback(n=>k(n)/(c(n)>=0?c(n):1)*3600,[k,c]),ge=a.useCallback(n=>{const l=c(n),i={hours:Math.floor(l/3600),minutes:Math.floor(l%3600/60),seconds:Math.floor(l%3600%60)},p=i.hours>0?`${i.hours}h `:"",w=i.minutes>0?`${i.minutes}m `:"",j=i.seconds>0?`${i.seconds}s `:"";return`${p}${w}${j}`},[c]);return e.jsxs(He,{children:[e.jsxs(Ne,{children:[e.jsx(Be,{children:"Tool Tactician"}),e.jsx("img",{src:"/assets/background/bg-tool-tactician.jpeg",alt:""})]}),e.jsxs(Oe,{children:[e.jsx(_,{children:"PICK A TOOL SETUP AND LAND TYPE"}),e.jsxs(Ue,{children:[e.jsx(v,{children:e.jsx(S,{colorize:!0,notClearable:!0,isLoading:x,selected:re,onSelected:$,title:"Tool 1",options:s==null?void 0:s.tools})}),e.jsx(v,{children:e.jsx(S,{colorize:!0,isLoading:x,selected:ie,onSelected:h,title:"Tool 2",options:s==null?void 0:s.tools})}),e.jsx(v,{children:e.jsx(S,{colorize:!0,isLoading:x,selected:ae,onSelected:M,title:"Tool 3",options:s==null?void 0:s.tools})}),e.jsx(v,{children:e.jsx(S,{disabled:T==="land",isLoading:x,selected:T==="land"?void 0:m,onSelected:I,title:"Land Type",options:f})}),e.jsx(v,{children:e.jsx(S,{notClearable:!0,isLoading:x,selected:oe||V[0],onSelected:$,title:"Shine 1",disabled:!o,options:V})}),e.jsx(v,{children:e.jsx(S,{isLoading:x,selected:te||E[0],onSelected:h,title:"Shine 1",disabled:!r,options:E})}),e.jsx(v,{children:e.jsx(S,{isLoading:x,selected:le||H[0],onSelected:M,title:"Shine 1",disabled:!t,options:H})}),e.jsx(Qe,{onClick:()=>G(T==="land"?"general":"land"),children:T==="land"?"Tool Explorer":"Land Overview"})]}),T==="general"?e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:[e.jsxs(W,{children:[e.jsx(_,{children:"Values per Mine"}),e.jsxs(u,{children:[e.jsx("span",{children:"TLM"}),e.jsxs(D,{children:[e.jsx("span",{children:P().toFixed(4)}),e.jsx("div",{children:e.jsx(R,{color:"#fff"})})]})]}),e.jsxs(u,{children:[e.jsx("span",{children:"Shards"}),e.jsxs(D,{children:[e.jsx("span",{children:k().toFixed(1)}),e.jsx("div",{children:e.jsx(ne,{color:"#fff"})})]})]}),e.jsxs(u,{children:[e.jsx("span",{children:"Cooldown"}),e.jsxs("span",{children:[U.toFixed(0)," minutes"]})]})]}),e.jsxs(W,{children:[e.jsx(_,{children:"Values per Hour"}),e.jsxs(u,{children:[e.jsx("span",{style:{color:"#F6A800"},children:"TLM"}),e.jsxs(D,{children:[e.jsx("span",{style:{color:"#F6A800"},children:de.toFixed(4)}),e.jsx("div",{children:e.jsx(R,{})})]})]}),e.jsxs(u,{children:[e.jsx("span",{style:{color:"#F6A800"},children:"Shards"}),e.jsxs(D,{children:[e.jsx("span",{style:{color:"#F6A800"},children:ce.toFixed(2)}),e.jsx("div",{children:e.jsx(ne,{})})]})]}),e.jsxs(u,{children:[e.jsx("span",{children:"Mines"}),e.jsx("span",{children:pe.toFixed(2)})]})]})]}),e.jsxs(z,{children:[e.jsxs(W,{children:[e.jsx(_,{children:"TLM POOLS AVERAGE (LAST WEEK)"}),g==null?void 0:g.pool_buckets.map(n=>{var l;return e.jsxs(u,{className:"rarities",children:[e.jsx("span",{children:n.key}),e.jsxs(D,{children:[e.jsx("span",{children:(l=n.formattedValue)==null?void 0:l.toFixed(4)}),e.jsx("div",{children:e.jsx(R,{color:"#fff"})})]})]},n.key)})]}),e.jsxs(W,{children:[e.jsx(_,{children:"Basic Values"}),e.jsxs(u,{className:"rarity-mining",children:[e.jsx("span",{children:"Rarity Mining Power"}),e.jsx("span",{children:A().map(n=>e.jsxs("p",{children:["  ",n.rarity[0]," ",n.percentage.toFixed(0),"%"]},n.rarity))})]}),e.jsxs(u,{children:[e.jsx("span",{children:"Total Mining Power"}),e.jsxs("span",{children:[he.toFixed(0),"% "]})]}),e.jsxs(u,{children:[e.jsx("span",{children:"Shard Power"}),e.jsx("span",{children:xe.toFixed(1)})]}),e.jsxs(u,{children:[e.jsx("span",{children:"Proof of Work"}),e.jsx("span",{children:fe.toFixed(0)})]}),e.jsxs(u,{children:[e.jsx("span",{children:"Cooldown"}),e.jsxs("span",{children:[(U*60).toFixed(0)," seconds"]})]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsx(_,{children:"LAND OVERVIEW"})}),e.jsxs(Ke,{children:[e.jsx("span",{children:"Land Type"}),e.jsx("span",{children:"Shards / h"}),e.jsx("span",{children:"TLM / h"}),e.jsx("span",{children:"Cooldown"})]}),e.jsx(Ye,{children:f==null?void 0:f.map(n=>e.jsxs(qe,{children:[e.jsx("span",{children:n.landname}),e.jsx("span",{children:ue(n).toFixed(2)}),e.jsx("span",{children:me(n).toFixed(4)}),e.jsx("span",{children:ge(n)})]},n.landtype_id))})]})]})]})};export{rn as default};
