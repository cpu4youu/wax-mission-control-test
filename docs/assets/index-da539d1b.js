import{s as r,e as y,b as j,R as p,j as e,B as b,m as v}from"./index-5e61430f.js";import{C as T}from"./index-e3e7f584.js";import{a as S}from"./index.esm-5dae34c5.js";import{u as k,o as L}from"./inventory-query-17d55651.js";import{o as O}from"./toolov-query-6909bce7.js";import{d as C,c as _,o as E}from"./use-transaction-6f250fa7.js";import{r as m,s as h}from"./tools-query-38e0ca0b.js";import{s as M}from"./sleep-da79c358.js";import"./iconBase-8ad55673.js";import"./user-miners-query-11a630c2.js";import"./axios-43b00e28.js";const R=r("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",mt:"35px",w:"100%"}),N=r("h2",{d:"flex",align:"center",justify:"center",fs:"20px",color:"$white500"}),A=r("p",{d:"flex",align:"center",justify:"flex-start",gap:"30px",mb:"15px",w:"100%",mt:"25px",color:"$white500",bg:"rgba(255, 255, 255, 0.05)",padding:"20px",br:"10px",ff:"$heading",span:{d:"flex",align:"center",justify:"center",w:"100%",textAlign:"center",fw:"400",fs:"20px"},"@sm":{justify:"center",flexWrap:"wrap",gap:"0px",padding:"0px 10px 20px",svg:{w:"80px"},span:{fs:"16px"}}}),B=r("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"25px",mt:"15px",w:"100%","@sm":{justify:"center"}}),I=r("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"5px",mt:"auto",w:"100%",button:{w:"100%",maxW:"160px",h:"25px",minW:"unset",">div":{border:"none"}}}),W=r("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"5px",m:"5px 0 10px",w:"100%"}),$=r("div",{d:"flex",align:"center",justify:"space-between",gap:"10px",px:"10px",w:"100%",svg:{w:"20px",h:"20px"}}),P=r("p",{d:"flex",align:"center",justify:"center",color:"$white500",textShadow:"2px 1px 4px rgba(0, 0, 0)",textAlign:"center",fs:"14px",ff:"$heading",fw:"400"}),U=y({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),z=r("div",{width:"174px",height:"259px",background:"linear-gradient( -90deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.25) ,rgba(255, 255, 255, 0.15))",br:"10px",backgroundSize:"400% 400%",animation:`${U} 1.2s ease-in-out infinite`,"@sm":{width:"70px",height:"100px"}});async function G(s,c){const{executeTransaction:n}=C(),l=Q(s,c);return!!await n(l)}function Q(s,c){return{actions:[{account:"atomicassets",name:"transfer",authorization:[{actor:s.name,permission:s.authorization.permission}],data:{from:s.name,memo:"staking",to:"tools.mc",asset_ids:c}}]}}const te=()=>{const{data:s,isLoading:c}=k("tool.worlds",!0),{data:n}=_(),l=j(t=>t.user),[f,g]=p.useState([]),[x,u]=p.useState(!1);async function w(t){if(l){u(!0);try{await G(l,[Number(t.asset_id)])&&(await M(2e3),await O(),await E(),await L("tool.worlds"),v.success("Tool staked"))}catch(o){console.error("Error staking tool",o)}finally{u(!1)}}}return p.useEffect(()=>{var t;if(s){const o=(t=s.filter(i=>{var a;return(a=n==null?void 0:n.toolsOv)==null?void 0:a.some(d=>d.template_id===Number(i.template.template_id)&&d.allowed===1)}).map(i=>{var a;return{asset_id:i.asset_id,...i.data,...(a=n==null?void 0:n.toolsOv)==null?void 0:a.find(d=>d.template_id===Number(i.template.template_id))}}))==null?void 0:t.sort((i,a)=>m[i.rarity]-m[a.rarity]||h[i.shine]-h[a.shine]);g(o)}},[n,s]),e.jsxs(R,{children:[e.jsx(N,{children:"EARN PASSIVE TLM FROM STAKING YOUR TOOLS WHILE YOU DO NOT USE THEM"}),e.jsxs(A,{children:[e.jsx(S,{color:"#fff",size:100}),e.jsx("span",{children:"Going to bed? Excess tools? Not there for a weekend or even on vacation? Stake your tools to Mission Control where other players can mine with them. The mined TLM is split between you (the lender), the miner (the borrower) and Mission Control (facilitator and CPU provider)."})]}),e.jsx(B,{children:c?new Array(6).fill(0).map((t,o)=>e.jsx(z,{},o)):f.map((t,o)=>e.jsx(T,{showNumberBracket:!0,tool:t,children:e.jsxs(I,{children:[e.jsx(b,{disabled:x,isLoading:x,onClick:()=>w(t),rounded:!1,color:"solidBlue",children:"Stake"}),e.jsx(W,{children:e.jsx($,{children:e.jsxs(P,{children:["Gain ",t.owner_share/10,"% of all TLM mined with this tool."]})})})]})},o))})]})};export{te as default};