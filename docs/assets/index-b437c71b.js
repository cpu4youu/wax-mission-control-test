import{s as t,j as e,C as l,c as d,R as a,_ as o,f as r}from"./index-903a7dfd.js";const x=t("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",h:"calc(100vh - 165px)"}),p=t("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),u=t("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),m=t("div",{d:"flex",align:"center",justify:"center",direction:"column",margin:"auto",w:"100%",maxW:"1190px","@md":{d:"flex",flexWrap:"wrap"}}),i=()=>e.jsxs(x,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"Zapp’s Zap Emporium"}),e.jsx("img",{src:"/assets/background/bg-emporium.webp",alt:""})]}),e.jsx(m,{children:e.jsx(l,{size:"lg",colorSchema:"light"})})]}),g=d((s,n)=>({selectedPage:"main",onChangePage:c=>{s({selectedPage:c})}})),f=a.lazy(()=>o(()=>import("./index-c6e4fc38.js"),["assets/index-c6e4fc38.js","assets/index-903a7dfd.js","assets/index-55fec1ff.css","assets/emporium-tasks-d45fedf7.js","assets/index.esm-299ef757.js"])),j=a.lazy(()=>o(()=>import("./index-8caf1ee7.js"),["assets/index-8caf1ee7.js","assets/index-903a7dfd.js","assets/index-55fec1ff.css","assets/emporium-tasks-d45fedf7.js","assets/index.esm-299ef757.js","assets/index.esm-4211747d.js","assets/index-db29898f.js","assets/index-6b88bb53.js","assets/index-523b29a5.js"])),h=()=>g(n=>n.selectedPage)==="history"?e.jsx(r.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(f,{})}):e.jsx(r.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(j,{})}),b=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));export{i as L,b as i,g as u};
