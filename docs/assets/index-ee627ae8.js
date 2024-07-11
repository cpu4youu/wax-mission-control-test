import{s as o,e as D,S as L,u as O,aD as R,aC as _,b as W,R as w,p as A,j as t,B as T,aw as j,aE as y,h as U,k as b}from"./index-9e8ef54b.js";import{C as E}from"./index-8c32eccd.js";import{o as C}from"./toolov-query-067aaa99.js";import{o as k}from"./inventory-query-3f7e1b65.js";const P=o("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",mt:"35px",w:"100%"}),S=o("h2",{d:"flex",align:"center",justify:"center",fs:"20px",color:"$white500"}),z=o("p",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"100%",my:"15px",color:"$white500",fw:"400",ff:"$heading",fs:"20px",button:{w:"100%",maxW:"160px",h:"25px",minW:"unset",mt:"5px",">div":{border:"none"}},"@sm":{flexWrap:"wrap",span:{fs:"16px"}}}),N=o("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"25px",mt:"15px",w:"100%","@sm":{justify:"center"}}),Q=o("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"5px",mt:"auto",w:"100%",button:{w:"100%",maxW:"160px",h:"25px",minW:"unset",">div":{border:"none"}}}),Y=o("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"5px",m:"5px 0 10px",w:"100%"}),u=o("div",{d:"flex",align:"center",justify:"space-between",gap:"10px",px:"10px",w:"100%",svg:{w:"20px",h:"20px"}}),i=o("p",{d:"flex",align:"center",justify:"center",color:"$white500",textShadow:"0px 0px 5px rgba(0, 0, 0, 0.9)",fs:"14px",ff:"$heading",fw:"400"}),q=D({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),F=o("div",{width:"174px",height:"259px",background:"linear-gradient( -90deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.25) ,rgba(255, 255, 255, 0.15))",br:"10px",backgroundSize:"400% 400%",animation:`${q} 1.2s ease-in-out infinite`,"@sm":{width:"70px",height:"100px"}});async function I(n,r){const{executeTransaction:a}=O(),c=K(n,r);return!!await a(c)}function K(n,r){return{actions:[{account:L.TOOLS_MC,name:"unstake",authorization:[{actor:n.name,permission:n.requestPermission}],data:{wallet:n.name,asset_ids:r}}]}}async function V(n){const{executeTransaction:r}=O(),a=G(n);return!!await r(a)}function G(n){return{actions:[{account:L.TOOLS_MC,name:"claim",authorization:[{actor:n.name,permission:n.requestPermission}],data:{wallet:n.name}}]}}const te=()=>{var p,h,m,g;const{data:n,isLoading:r}=R();_();const a=W(e=>e.user),[c,d]=w.useState(!1),[x,f]=w.useState(!1);async function v(e){if(a){d(!0);try{await I(a,[Number(e.asset_id)])&&(await U(2e3),await C(),await k("tool.worlds"),b.success("Tool unstaked"))}catch(s){console.error("Error staking tool",s)}finally{d(!1)}}}async function M(){if(a){f(!0);try{await V(a)&&(await C(),await k("tool.worlds"),b.success("Tool unstaked"))}catch(e){console.error("Error staking tool",e)}finally{f(!1)}}}function $(e){const s=e.getFullYear(),B=e.getMonth()+1>9?e.getMonth()+1:`0${e.getMonth()+1}`;return`${e.getDate()>9?e.getDate():`0${e.getDate()}`}/${B}/${s}`}const l=(p=n==null?void 0:n.stakedTools)==null?void 0:p.reduce((e,s)=>e+A(s.total_earned),0);return t.jsxs(P,{children:[t.jsx(S,{children:"CLAIM YOUR TLM"}),t.jsxs(z,{children:["Claimable TLM, earned by loaning: ",l==null?void 0:l.toFixed(4)," TLM",t.jsx(T,{disabled:x&&l===0,isLoading:x,onClick:M,rounded:!1,color:"solidBlue",children:"Claim TLM"})]}),t.jsx(S,{children:"YOUR STAKED TOOLS"}),t.jsx(N,{children:r?new Array(6).fill(0).map((e,s)=>t.jsx(F,{},s)):(g=(m=(h=n==null?void 0:n.stakedTools)==null?void 0:h.filter(e=>e.owned>0))==null?void 0:m.sort((e,s)=>j[e.rarity]-j[s.rarity]||y[e.shine]-y[s.shine]))==null?void 0:g.map((e,s)=>t.jsx(E,{tool:e,children:t.jsxs(Q,{children:[t.jsx(T,{disabled:c,isLoading:c,onClick:()=>v(e),rounded:!1,color:"solidBlue",children:"Unstake"}),t.jsxs(Y,{children:[t.jsxs(u,{children:[t.jsx(i,{children:"Since"}),t.jsx(i,{children:$(new Date(e.stakedat))})]}),t.jsxs(u,{children:[t.jsx(i,{children:"Total"}),t.jsx(i,{children:e.total_earned})]}),t.jsxs(u,{children:[t.jsx(i,{children:"Uses"}),t.jsx(i,{children:e.total_mines})]})]})]})},s))})]})};export{te as default};