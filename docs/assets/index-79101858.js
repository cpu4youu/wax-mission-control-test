import{s as t,j as e,F as l,h as d,R as a,_ as o,r as n}from"./index-5e61430f.js";const x=t("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",h:"calc(100vh - 165px)"}),p=t("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),u=t("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),m=t("div",{d:"flex",align:"center",justify:"center",direction:"column",margin:"auto",w:"100%",maxW:"1190px","@md":{d:"flex",flexWrap:"wrap"}}),i=()=>e.jsxs(x,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"Zapp’s Zap Emporium"}),e.jsx("img",{src:"/assets/background/bg-emporium.webp",alt:""})]}),e.jsx(m,{children:e.jsx(l,{size:"lg",colorSchema:"light"})})]}),g=d((s,r)=>({selectedPage:"main",onChangePage:c=>{s({selectedPage:c})}})),f=a.lazy(()=>o(()=>import("./index-d9ea59eb.js"),["assets/index-d9ea59eb.js","assets/index-5e61430f.js","assets/index-55fec1ff.css","assets/emporium-tasks-fed17f75.js","assets/index.esm-61428a32.js","assets/iconBase-8ad55673.js"])),j=a.lazy(()=>o(()=>import("./index-326b29ab.js"),["assets/index-326b29ab.js","assets/index-5e61430f.js","assets/index-55fec1ff.css","assets/emporium-tasks-fed17f75.js","assets/mineCooldown-8c5a00bb.js","assets/index-a19d97ec.js","assets/index-23a3946f.js","assets/sleep-da79c358.js","assets/use-transaction-6f250fa7.js","assets/user-miners-query-11a630c2.js","assets/axios-43b00e28.js","assets/index.esm-61428a32.js","assets/iconBase-8ad55673.js","assets/index.esm-bd21aba1.js","assets/index-6eddaa4e.js","assets/index-61b60739.js","assets/index-f65c329b.js","assets/use-media-9c1ae1d5.js"])),h=()=>g(r=>r.selectedPage)==="history"?e.jsx(n.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(f,{})}):e.jsx(n.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(j,{})}),b=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));export{i as L,b as i,g as u};