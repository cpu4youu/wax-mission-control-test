import{s as a,g as $,S as M,T as A,a as I,Q as L,b as W,R as B,f as _,j as e}from"./index-a8008f58.js";import{m as g,c as F}from"./index-5190b1cb.js";import{b as H}from"./index.esm-62b459c5.js";import{b as h,u as O}from"./index-cf105745.js";import"./info-builder-85c70a6a.js";import"./index-6b5dd0a5.js";import"./index-65e4f043.js";import"./index-b49cda13.js";import"./index-852d3ee8.js";const P=a("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%","@sm":{padding:"0 15px"}}),Q=a("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),Y=a("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),z=a("div",{d:"flex",align:"center",justify:"center",w:"100%",maxW:"1250px",mx:"auto",my:"20px",svg:{cursor:"pointer",mr:"auto"}}),G=a("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1250px","@md":{d:"flex",flexWrap:"wrap"}}),N=a("h2",{color:"$white500",fs:"24px",ff:"$heading",mr:"auto"}),q=a("div",{d:"grid",gap:"5px",mt:"20px",w:"100%",maxW:"1250px"}),D=a("div",{d:"grid",gap:"5px",maxH:"555px",overflowY:"auto",w:"100%",maxW:"1250px"}),K=a("div",{d:"grid",gridTemplateColumns:"0.5fr repeat(3, 1fr) 3fr",gap:"10px",w:"100%",h:"37px",maxW:"1250px",bg:"rgba(0, 0, 0, 0.27)",px:"20px",span:{d:"flex",align:"center",justify:"flex-start",color:"#797979",fs:"16px",fw:"bold",ff:"$heading"},"@sm":{gridTemplateColumns:"0.5fr repeat(3, 1fr)",gap:"10px",span:{fs:"12px","&:last-child":{d:"none"}}}}),U=a("div",{d:"grid",alignItems:"center",justifyContent:"center",gridTemplateColumns:"0.5fr repeat(3, 1fr) 3fr",gap:"10px",minH:"55px",w:"100%",maxW:"1250px",bg:"rgba(72, 150, 222, 0.27)",pl:"20px",pr:"10px",mb:"15px",span:{d:"flex",align:"center",justify:"flex-start",color:"white",fs:"16px",fw:"bold",ff:"$heading"},"@sm":{h:"unset",gridTemplateColumns:"0.5fr repeat(3, 1fr)",gridTemplateRows:"0.8fr 2fr",gap:"10px",span:{fs:"12px"}}}),J=a("div",{d:"grid",gridTemplateColumns:"0.5fr repeat(3, 1fr) 3fr",gap:"10px",w:"100%",maxW:"1250px",bg:"rgba(0, 0, 0, 0.27)",pl:"20px",span:{d:"flex",align:"center",justify:"flex-start",color:"#797979",fs:"16px",fw:"bold",ff:"$heading"},"@sm":{h:"unset",gridTemplateColumns:"0.5fr repeat(3, 1fr)",gridTemplateRows:"0.8fr 2fr",gap:"10px",span:{fs:"12px"}}}),E=a("div",{d:"flex",flexWrap:"wrap",gap:"5px",py:"5px",">span":{d:"flex",gap:"5px"},"@sm":{gridColumnStart:1,gridColumnEnd:5,align:"center",justify:"center"}}),m=a("div",{d:"flex",align:"center",justify:"center",direction:"column",img:{objectFit:"cover",br:"10px",w:"37px",h:"37px"},span:{d:"flex",align:"center",justify:"flex-start",mt:"-10px",textShadow:"-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",color:"black !important",fs:"16px",fw:"bold",ff:"$heading"}}),V=async r=>await $({options:{code:M.GAME_MC,index_position:r,key_type:"i64",limit:"100",scope:M.GAME_MC,table:A.PLAYERS,reverse:!0}}),X=r=>I({queryKey:[L.LeaderBoard,r],queryFn:()=>Z(r),staleTime:1e3*60*60});async function Z(r){try{const s=await V(r);return s?ee(s):null}catch(s){return console.log(s),null}}async function ee(r){return r==null?void 0:r.map(s=>{var c,l,w;(c=s.buildings)==null||c.sort((o,i)=>h.findIndex(d=>d.label===o.buildingid)-h.findIndex(d=>d.label===i.buildingid));const j=(l=s.buildings)==null?void 0:l.filter(o=>o.building_type==="production"),b=(w=s.buildings)==null?void 0:w.filter(o=>o.building_type!=="production");return{...s,buildings:{production:j,special:b}}})}const de=()=>{var T,k,S,y;const r=W(n=>n.user),{data:s,isLoading:j}=O(),[b,c]=B.useState(3),{data:l,isLoading:w}=X(b);function o(){F.setState(n=>({...n,selectedProduction:null}))}const i=_.useMemo(()=>{var p,x,t;if(!s)return;(p=s==null?void 0:s.buildings)==null||p.sort((f,R)=>h.findIndex(C=>C.label===f.buildingid)-h.findIndex(C=>C.label===R.buildingid));const n=(x=s.buildings)==null?void 0:x.filter(f=>f.building_type==="production"),v=(t=s.buildings)==null?void 0:t.filter(f=>f.building_type!=="production");return{...s,buildings:{production:n,special:v}}},[]),d=_.useMemo(()=>!l||!s?-1:l.findIndex(n=>n.wallet===s.wallet)+1,[l,s]),u=_.useCallback(n=>{switch(n){case"rank":c(0);break;case"mcp":c(1);break;case"score":c(2);break;case"rMin":c(3);break;default:c(3)}},[]);return e.jsxs(P,{children:[e.jsxs(Q,{children:[e.jsx(Y,{children:"Outpost Builder"}),e.jsx("img",{src:"/assets/background/bg-mcp-builder.jpeg",alt:""})]}),e.jsx(z,{children:e.jsx(H,{onClick:o,color:"white",size:30})}),e.jsxs(G,{children:[e.jsx(N,{children:"SEASON LEADERBOARD"}),e.jsxs(q,{children:[e.jsxs(K,{children:[e.jsx("span",{onClick:()=>u("rank"),children:"Rank"}),e.jsx("span",{children:"Gamertag"}),e.jsx("span",{onClick:()=>u("score"),children:"Building Score"}),e.jsx("span",{onClick:()=>u("rMin"),children:"Я / min"}),e.jsx("span",{onClick:()=>u("mcp"),children:"MCP earned"}),e.jsx("span",{children:"Buildings"})]}),e.jsxs(U,{children:[e.jsx("span",{children:d===0?"> 100":d}),e.jsx("span",{children:i==null?void 0:i.wallet}),e.jsx("span",{children:g((i==null?void 0:i.score_building)||0)}),e.jsx("span",{children:g((i==null?void 0:i.gamecurrency_per_minute)||0,3)}),e.jsxs(E,{children:[(k=(T=i==null?void 0:i.buildings)==null?void 0:T.production)==null?void 0:k.map(n=>e.jsxs(m,{children:[e.jsx("img",{src:`/assets/mcp/${n==null?void 0:n.buildingid}.png`,alt:""}),e.jsx("span",{children:n.building_level===0?"-":n.building_level})]},n.buildingid)),e.jsx("span",{children:(y=(S=i==null?void 0:i.buildings)==null?void 0:S.special)==null?void 0:y.map(n=>e.jsxs(m,{children:[e.jsx("img",{src:`/assets/mcp/${n==null?void 0:n.buildingid}.png`,alt:""}),e.jsx("span",{children:n.building_level===0?"-":n.building_level})]},n.buildingid))})]})]}),e.jsx(D,{children:l==null?void 0:l.map((n,v)=>{var p,x;return e.jsxs(J,{children:[e.jsx("span",{children:v+1}),e.jsx("span",{children:(r==null?void 0:r.playertag)??(r==null?void 0:r.name)}),e.jsx("span",{children:g(n.score_building,3)}),e.jsx("span",{children:g((n==null?void 0:n.gamecurrency_per_minute)||0,3)}),e.jsxs(E,{children:[(p=n.buildings.production)==null?void 0:p.map(t=>e.jsxs(m,{children:[e.jsx("img",{src:`/assets/mcp/${t==null?void 0:t.buildingid}.png`,alt:""}),e.jsx("span",{children:t.building_level===0?"-":t.building_level})]},t.buildingid)),e.jsx("span",{children:(x=n.buildings.special)==null?void 0:x.map(t=>e.jsxs(m,{children:[e.jsx("img",{src:`/assets/mcp/${t==null?void 0:t.buildingid}.png`,alt:""}),e.jsx("span",{children:t.building_level===0?"-":t.building_level})]},t.buildingid))})]})]},n.wallet)})})]})]})]})};export{de as default};
