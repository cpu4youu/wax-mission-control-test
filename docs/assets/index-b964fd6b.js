import{s as n,R as e,_ as s,j as t,B as r}from"./index-41376dbf.js";import{I as d}from"./info-builder-58566a95.js";const c=n("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",w:"100%"}),x=n("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),p=n("h2",{d:"flex",align:"center",justify:"center",gap:"10px",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),u=n("a",{d:"flex",align:"center",justify:"center",color:"$white500",svg:{mt:"10px",w:"40px",h:"40px"},"@sm":{svg:{mt:"5px",w:"30px",h:"30px"}}}),h=n("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1275px",mt:"20px",gap:"4px","@md":{mb:"10px"},"@sm":{mt:"0px",pt:"40px",px:"10px",justify:"flex-start",overflow:"auto",direction:"column"}}),m=n("div",{d:"flex",align:"center",justify:"flex-start",padding:"3px 3px 10px",overflowX:"auto",overflowY:"hidden",gap:"4px",w:"100%",button:{w:"100%",maxW:"150px",minW:"150px",h:"75px",fs:"20px"},variants:{activeButton:{mine:{"button:nth-child(1)":{border:"2px solid $white500"}},"mine-config":{"button:nth-child(2)":{border:"2px solid $white500"}},deposit:{"button:nth-child(3)":{border:"2px solid $white500"}},stake:{"button:nth-child(4)":{border:"2px solid $white500"}},unstake:{"button:nth-child(5)":{border:"2px solid $white500"}},tutorial:{"button:nth-child(6)":{border:"2px solid $white500"}}}}}),a=e.lazy(()=>s(()=>import("./index-41376dbf.js").then(o=>o.aV),["assets/index-41376dbf.js","assets/index-55fec1ff.css"])),f=e.lazy(()=>s(()=>import("./index-d1d58539.js"),["assets/index-d1d58539.js","assets/index-41376dbf.js","assets/index-55fec1ff.css","assets/index.esm-69b79dbe.js"])),g=e.lazy(()=>s(()=>import("./index-bf95c71f.js"),["assets/index-bf95c71f.js","assets/index-41376dbf.js","assets/index-55fec1ff.css","assets/index.esm-85121bc4.js","assets/inventory-query-4ba92ced.js"])),j=e.lazy(()=>s(()=>import("./index-caf7cbd0.js"),["assets/index-caf7cbd0.js","assets/index-41376dbf.js","assets/index-55fec1ff.css","assets/inventory-query-4ba92ced.js"])),_=e.lazy(()=>s(()=>import("./index-4e3d34bd.js"),["assets/index-4e3d34bd.js","assets/index-41376dbf.js","assets/index-55fec1ff.css","assets/index.esm-d8660bd7.js","assets/check-42c06e46.js","assets/index-120fa363.js","assets/index.esm-e009a74b.js","assets/index-f6d34b17.js","assets/index-30dc6d53.js","assets/index-3761b22b.js","assets/gradient-border-406e36f2.js"])),b=()=>{const[o,i]=e.useState("mine"),l=e.useMemo(()=>{switch(o){case"mine":return t.jsx(a,{});case"mine-config":return t.jsx(_,{});case"stake":return t.jsx(g,{});case"unstake":return t.jsx(j,{});case"deposit":return t.jsx(f,{});case"tutorial":return t.jsx(a,{});default:return t.jsx(a,{})}},[o]);return t.jsxs(c,{children:[t.jsxs(x,{children:[t.jsxs(p,{children:["Tool Loaning"," ",t.jsx(u,{href:"https://medium.com/@miningmatters/ae7416e78f75",target:"_blank",children:t.jsx(d,{})})]}),t.jsx("img",{src:"/assets/background/bg-tool-loaning.jpeg",alt:""})]}),t.jsxs(h,{children:[t.jsxs(m,{activeButton:o,children:[t.jsx(r,{onClick:()=>i("mine"),rounded:!1,color:"transparentWhite05",children:"Mine"}),t.jsx(r,{onClick:()=>i("mine-config"),rounded:!1,color:"transparentWhite05",children:"Mining Config"}),t.jsx(r,{onClick:()=>i("deposit"),rounded:!1,color:"transparentWhite05",noBorder:!0,children:"Deposit"}),t.jsx(r,{onClick:()=>i("stake"),rounded:!1,color:"transparentWhite05",children:"Stake"}),t.jsx(r,{onClick:()=>i("unstake"),rounded:!1,color:"transparentWhite05",children:"Unstake"})]}),l]})]})};export{b as default};
