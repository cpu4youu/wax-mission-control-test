import{s as t,j as e,F as l,h as d,R as a,_ as o,r as n}from"./index-5c0be45d.js";const x=t("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",h:"calc(100vh - 165px)"}),p=t("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),u=t("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),m=t("div",{d:"flex",align:"center",justify:"center",direction:"column",margin:"auto",w:"100%",maxW:"1190px","@md":{d:"flex",flexWrap:"wrap"}}),i=()=>e.jsxs(x,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"Zapp’s Zap Emporium"}),e.jsx("img",{src:"/assets/background/bg-emporium.webp",alt:""})]}),e.jsx(m,{children:e.jsx(l,{size:"lg",colorSchema:"light"})})]}),g=d((s,r)=>({selectedPage:"main",onChangePage:c=>{s({selectedPage:c})}})),f=a.lazy(()=>o(()=>import("./index-82d4aaab.js"),["assets/index-82d4aaab.js","assets/index-5c0be45d.js","assets/index-55fec1ff.css","assets/emporium-tasks-723d4e87.js","assets/index.esm-30d00d99.js","assets/iconBase-52fbc202.js"])),j=a.lazy(()=>o(()=>import("./index-611ba392.js"),["assets/index-611ba392.js","assets/index-5c0be45d.js","assets/index-55fec1ff.css","assets/emporium-tasks-723d4e87.js","assets/mineCooldown-f5c105fe.js","assets/index-5ccbfd10.js","assets/index-c3fe4357.js","assets/sleep-da79c358.js","assets/use-transaction-0f26a9e8.js","assets/user-miners-query-5637dad8.js","assets/axios-43b00e28.js","assets/index.esm-30d00d99.js","assets/iconBase-52fbc202.js","assets/index.esm-26226272.js","assets/index-5accf6e6.js","assets/index-7864d7c4.js","assets/index-78d42c97.js","assets/use-media-6ae69c8e.js"])),h=()=>g(r=>r.selectedPage)==="history"?e.jsx(n.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(f,{})}):e.jsx(n.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(j,{})}),b=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));export{i as L,b as i,g as u};