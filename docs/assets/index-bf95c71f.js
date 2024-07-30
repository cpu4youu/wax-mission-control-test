import{s as a,e as y,u as j,aQ as b,b as v,R as p,aH as h,aR as m,j as e,aS as T,B as S,k,aT as L,aU as O,l as C}from"./index-41376dbf.js";import{P as R}from"./index.esm-85121bc4.js";import{u as _,o as E}from"./inventory-query-4ba92ced.js";const M=a("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",mt:"35px",w:"100%"}),N=a("h2",{d:"flex",align:"center",justify:"center",fs:"20px",color:"$white500"}),A=a("p",{d:"flex",align:"center",justify:"flex-start",gap:"30px",mb:"15px",w:"100%",mt:"25px",color:"$white500",bg:"rgba(255, 255, 255, 0.05)",padding:"20px",br:"10px",ff:"$heading",span:{d:"flex",align:"center",justify:"center",w:"100%",textAlign:"center",fw:"400",fs:"20px"},"@sm":{justify:"center",flexWrap:"wrap",gap:"0px",padding:"0px 10px 20px",svg:{w:"80px"},span:{fs:"16px"}}}),B=a("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"25px",mt:"15px",w:"100%","@sm":{justify:"center"}}),I=a("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"5px",mt:"auto",w:"100%",button:{w:"100%",maxW:"160px",h:"25px",minW:"unset",">div":{border:"none"}}}),P=a("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"5px",m:"5px 0 10px",w:"100%"}),W=a("div",{d:"flex",align:"center",justify:"space-between",gap:"10px",px:"10px",w:"100%",svg:{w:"20px",h:"20px"}}),U=a("p",{d:"flex",align:"center",justify:"center",color:"$white500",textShadow:"2px 1px 4px rgba(0, 0, 0)",textAlign:"center",fs:"14px",ff:"$heading",fw:"400"}),$=y({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),Q=a("div",{width:"174px",height:"259px",background:"linear-gradient( -90deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.25) ,rgba(255, 255, 255, 0.15))",br:"10px",backgroundSize:"400% 400%",animation:`${$} 1.2s ease-in-out infinite`,"@sm":{width:"70px",height:"100px"}});async function z(s,c){const{executeTransaction:n}=j(),l=G(s,c);return!!await n(l)}function G(s,c){return{actions:[{account:"atomicassets",name:"transfer",authorization:[{actor:s.name,permission:s.requestPermission}],data:{from:s.name,memo:"staking",to:"tools.mc",asset_ids:c}}]}}const V=()=>{const{data:s,isLoading:c}=_("tool.worlds",!0),{data:n}=b(),l=v(t=>t.user),[x,g]=p.useState([]),[f,u]=p.useState(!1);async function w(t){if(l){u(!0);try{await z(l,[Number(t.asset_id)])&&(await k(2e3),await L(),await O(),await E("tool.worlds"),C.success("Tool staked"))}catch(r){console.error("Error staking tool",r)}finally{u(!1)}}}return p.useEffect(()=>{var t;if(s){const r=(t=s.filter(i=>{var o;return(o=n==null?void 0:n.toolsOv)==null?void 0:o.some(d=>d.template_id===Number(i.template.template_id)&&d.allowed===1)}).map(i=>{var o;return{asset_id:i.asset_id,...i.data,...(o=n==null?void 0:n.toolsOv)==null?void 0:o.find(d=>d.template_id===Number(i.template.template_id))}}))==null?void 0:t.sort((i,o)=>h[i.rarity]-h[o.rarity]||m[i.shine]-m[o.shine]);g(r)}},[n,s]),e.jsxs(M,{children:[e.jsx(N,{children:"EARN PASSIVE TLM FROM STAKING YOUR TOOLS WHILE YOU DO NOT USE THEM"}),e.jsxs(A,{children:[e.jsx(R,{color:"#fff",size:100}),e.jsx("span",{children:"Going to bed? Excess tools? Not there for a weekend or even on vacation? Stake your tools to Mission Control where other players can mine with them. The mined TLM is split between you (the lender), the miner (the borrower) and Mission Control (facilitator and CPU provider)."})]}),e.jsx(B,{children:c?new Array(6).fill(0).map((t,r)=>e.jsx(Q,{},r)):x.map((t,r)=>e.jsx(T,{showNumberBracket:!0,tool:t,children:e.jsxs(I,{children:[e.jsx(S,{disabled:f,isLoading:f,onClick:()=>w(t),rounded:!1,color:"solidBlue",children:"Stake"}),e.jsx(P,{children:e.jsx(W,{children:e.jsxs(U,{children:["Gain ",t.owner_share/10,"% of all TLM mined with this tool."]})})})]})},r))})]})};export{V as default};
