import{s as n,e as h,a as j,Q as y,R as m,_ as u,f as o,j as e,m as b,ao as w}from"./index-afa3647c.js";import{g as T}from"./emporium-tasks-9223f634.js";import{a as v}from"./index.esm-ccb4cdb9.js";import{u as _,L as S}from"./index-aacc8e1a.js";const $=n("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%"}),L=n("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0},"@md":{h:"105px",img:{h:"105px"}},"@sm":{h:"65px",img:{h:"65px"}}}),E=n("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.8)",w:"100%","@sm":{fs:"24px"}}),A=n("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1095px","@md":{px:"30px"},"@sm":{px:"15px"}}),P=n("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",gap:"10px",w:"100%",mt:"48px"}),x=n("h3",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"100%",color:"$white500",fs:"32px","@sm":{fs:"24px"}}),F=n("div",{d:"flex",align:"center",justify:"center",direction:"column",mt:"18px",w:"100%"}),C=n("div",{d:"grid",gridTemplateColumns:"1fr 1fr 2fr 1fr 1fr",gap:"10px",w:"100%",h:"33px",mb:"5px",padding:"5px 0px 5px 10px",bg:"rgba(0,0,0,0.27)",span:{color:"#797979",ff:"$heading",fs:"18px",fw:"$bold"},"@sm":{gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gap:"5px",span:{textAlign:"center",fs:"13px"}}}),D=n("div",{d:"grid",gap:"5px",w:"100%","@sm":{gap:"5px"}}),R=n("div",{d:"flex",w:"100%",mt:"20px",h3:{align:"center"},"@sm":{gap:"5px"}}),z=n("div",{d:"grid",gridTemplateColumns:"1fr 1fr 2fr 1fr 1fr",position:"relative",gap:"10px",w:"100%",h:"55px",pl:"10px",bg:"rgba(0,0,0,0.27)",img:{w:"100px",h:"55px",objectFit:"contain"},span:{d:"flex",align:"center",gap:"5px","&:nth-child(3)":{justify:"center",gap:"10px"},color:"#797979",ff:"$heading",fs:"16px",fw:"$bold"},p:{d:"flex",w:"100%",color:"#797979",ff:"$heading",fs:"16px",fw:"$bold"},svg:{verticalAlign:"sub"},"@sm":{gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gap:"5px",img:{w:"55px",h:"55px"},svg:{w:"15px",h:"15px"},span:{align:"center",justify:"center",fs:"12px",">p":{display:"none"}}}}),I=h({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),M=n("div",{d:"flex",w:"100%",maxW:"260px",h:"325px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${I} 1.2s ease-in-out infinite`,"@sm":{h:"215px",w:"100%"}}),V=()=>j({queryKey:[y.DesativeTasks],queryFn:()=>W(),staleTime:1e3*60*60});async function W(){try{const r=await T("completed","30",!0);return r?r.map(t=>{const i=H(new Date(t.timestamp_closed));return{...t,timeLeft:i,timeLeftFormatted:Q(i)}}):[]}catch(r){return console.log(r),[]}}const H=r=>{const t=+new Date(new Date().toUTCString().substring(0,25))-+r;let i={days:0,hours:0,minutes:0,seconds:0};return t>0&&(i={days:Math.floor(t/(1e3*60*60)/24),hours:Math.floor(t/(1e3*60*60)%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)}),{...i,difference:t}},Q=r=>{if(r){const a=r.days?`${r.days}d`:"",t=r.hours>0?`${r.hours>9?`${r.hours}h`:`0${r.hours}h`}`:"";return`${a}${t}${r.minutes}m`}return"less than 1 min"},f=m.lazy(()=>u(()=>import("./tlm-a033132b.js"),["assets/tlm-a033132b.js","assets/index-afa3647c.js","assets/index-55fec1ff.css"])),G=m.lazy(()=>u(()=>import("./star-7bd3e5fa.js"),["assets/star-7bd3e5fa.js","assets/index-afa3647c.js","assets/index-55fec1ff.css"])),U=()=>{var p;const{data:r,isLoading:a}=V(),t=_(s=>s.onChangePage),i=o.useCallback(()=>{t("main")},[]),g=o.useCallback(s=>{switch(s){case"qp":return e.jsx(b,{});case"mcp":return e.jsx(G,{});case"tlm":return e.jsx(f,{});default:return e.jsx(f,{})}},[]);return e.jsx(o.Suspense,{fallback:e.jsx(S,{}),children:e.jsxs($,{children:[e.jsxs(L,{children:[e.jsx(E,{children:"Zapp’s Zap Emporium"}),e.jsx("img",{src:"/assets/background/bg-emporium.webp",alt:""})]}),e.jsxs(A,{children:[e.jsxs(P,{children:[e.jsx(v,{size:30,color:"#fff",onClick:i,style:{cursor:"pointer"}}),e.jsx(x,{children:"ZAPP’S TASK HISTORY"})]}),e.jsxs(F,{children:[e.jsxs(C,{children:[e.jsx("span",{children:"Elapsed"}),e.jsx("span",{children:"Wallet"}),e.jsx("span",{children:"Task"}),e.jsx("span",{children:"Shards"}),e.jsx("span",{children:"Support"})]}),e.jsx(D,{children:a?Array.from({length:8}).map((s,c)=>e.jsx(M,{},c)):(r==null?void 0:r.length)===0?e.jsx(R,{children:e.jsx(x,{children:"No task history founded"})}):(p=r==null?void 0:r.sort((s,c)=>{var d,l;return(((d=s.timeLeft)==null?void 0:d.difference)??0)-(((l=c.timeLeft)==null?void 0:l.difference)??0)}))==null?void 0:p.map(s=>e.jsxs(z,{children:[e.jsx("span",{children:s==null?void 0:s.timeLeftFormatted}),e.jsx("span",{children:s==null?void 0:s.user}),e.jsxs("span",{children:[e.jsx("img",{src:`/assets/tasks/${s.image}.jpeg`,alt:s.title,title:s.title}),e.jsx("p",{children:s.title})]}),e.jsxs("span",{children:[s.shards/10," ",e.jsx(w,{color:"rgb(246, 168, 0)"})]}),e.jsxs("span",{children:[(s.task_type==="tlm"?Math.ceil(s.currency_end/1e4):s.currency_end).toLocaleString("en-US"),g(s.task_type)]})]},s.task_id))})]})]})]})})};export{U as default};
