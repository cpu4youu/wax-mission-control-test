import{s as t,j as e,F as l,h as d,R as a,_ as o,r as n}from"./index-d1a4cafa.js";const x=t("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",h:"calc(100vh - 165px)"}),p=t("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),u=t("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),m=t("div",{d:"flex",align:"center",justify:"center",direction:"column",margin:"auto",w:"100%",maxW:"1190px","@md":{d:"flex",flexWrap:"wrap"}}),i=()=>e.jsxs(x,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"Zapp’s Zap Emporium"}),e.jsx("img",{src:"/assets/background/bg-emporium.webp",alt:""})]}),e.jsx(m,{children:e.jsx(l,{size:"lg",colorSchema:"light"})})]}),g=d((s,r)=>({selectedPage:"main",onChangePage:c=>{s({selectedPage:c})}})),f=a.lazy(()=>o(()=>import("./index-e99f0481.js"),["assets/index-e99f0481.js","assets/index-d1a4cafa.js","assets/index-55fec1ff.css","assets/emporium-tasks-7f91f504.js","assets/index.esm-ca8b6f7a.js","assets/iconBase-412594f8.js"])),j=a.lazy(()=>o(()=>import("./index-5b8418bc.js"),["assets/index-5b8418bc.js","assets/index-d1a4cafa.js","assets/index-55fec1ff.css","assets/emporium-tasks-7f91f504.js","assets/mineCooldown-891f481f.js","assets/index-dfd74e99.js","assets/index-94fbd373.js","assets/sleep-da79c358.js","assets/use-transaction-8fd94f6e.js","assets/user-miners-query-f18dc931.js","assets/axios-43b00e28.js","assets/index.esm-ca8b6f7a.js","assets/iconBase-412594f8.js","assets/index.esm-123191cb.js","assets/index-59715374.js","assets/index-c59eb4eb.js","assets/index-58255530.js","assets/use-media-81c6791f.js"])),h=()=>g(r=>r.selectedPage)==="history"?e.jsx(n.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(f,{})}):e.jsx(n.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(j,{})}),b=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));export{i as L,b as i,g as u};