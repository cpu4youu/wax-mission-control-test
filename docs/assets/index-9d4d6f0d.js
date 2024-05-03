import{s as i,g as F,S as $,T as I,a as P,Q as B,R as L,_ as H,b as O,f as j,j as e}from"./index-efe891fb.js";import{c as Q}from"./index-88d9822f.js";import{b as D}from"./index.esm-a64bc32b.js";import{b as _,u as G}from"./index-abf2a0d4.js";import{m as p}from"./mcpFormatNumber-1b3dda04.js";import{A as T}from"./atom-1a491c74.js";import"./index-884c14e0.js";import"./index-7b828179.js";import"./index-1a5f6bbf.js";import"./index-c3f2225f.js";import"./index-57fd1bdd.js";const Y=i("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%","@sm":{padding:"0 15px"}}),N=i("div",{d:"flex",align:"center",justify:"center",w:"100%",maxW:"1250px",mx:"auto",my:"20px",svg:{cursor:"pointer",mr:"auto"}}),q=i("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1250px","@md":{d:"flex",flexWrap:"wrap"}}),z=i("h2",{color:"$white500",fs:"24px",ff:"$heading",mr:"auto"}),K=i("div",{d:"grid",gap:"5px",mt:"20px",w:"100%",maxW:"1250px"}),V=i("div",{d:"grid",gap:"5px",maxH:"555px",overflowY:"auto",w:"100%",maxW:"1250px"}),U=i("div",{d:"grid",gridTemplateColumns:"0.5fr repeat(4, 1fr) 3fr",gap:"10px",w:"100%",h:"37px",maxW:"1250px",bg:"rgba(0, 0, 0, 0.27)",px:"20px",span:{d:"flex",align:"center",justify:"flex-start",color:"#797979",fs:"16px",fw:"bold",ff:"$heading"},"@sm":{gridTemplateColumns:"0.5fr repeat(4, 1fr)",gap:"5x",pl:"10px",pr:"10px",span:{fs:"12px","&:last-child":{d:"none"}}}}),S=i("button",{d:"flex",align:"center",justify:"flex-start",color:"#797979",fs:"16px",fw:"bold",ff:"$heading","&:hover":{color:"$yellow500"},variants:{selected:{true:{color:"$yellow500"}}},"@sm":{fs:"12px","&:last-child":{d:"none"}}}),J=i("div",{d:"grid",alignItems:"center",justifyContent:"center",gridTemplateColumns:"0.5fr repeat(4, 1fr) 3fr",gap:"10px",minH:"55px",w:"100%",maxW:"1250px",bg:"rgba(72, 150, 222, 0.27)",pl:"20px",pr:"10px",mb:"15px",span:{d:"flex",align:"center",justify:"flex-start",color:"white",fs:"16px",fw:"bold",ff:"$heading"},"@sm":{h:"unset",gridTemplateColumns:"0.5fr repeat(4, 1fr)",gridTemplateRows:"0.8fr 2fr",gap:"5px",pl:"10px",pr:"10px",span:{fs:"12px"}}}),X=i("div",{d:"grid",gridTemplateColumns:"0.5fr repeat(4, 1fr) 3fr",gap:"10px",w:"100%",maxW:"1250px",bg:"rgba(0, 0, 0, 0.27)",pl:"20px",span:{d:"flex",align:"center",justify:"space-between",gap:"15px",color:"#797979",fs:"16px",fw:"bold",ff:"$heading",svg:{mr:"5px"}},"@sm":{h:"unset",gridTemplateColumns:"0.5fr repeat(4, 1fr)",gridTemplateRows:"0.8fr 2fr",gap:"5px",pl:"10px",pr:"10px",span:{fs:"12px"}}}),y=i("div",{d:"flex",flexWrap:"wrap",gap:"5px",py:"5px",">span":{d:"flex",gap:"5px"},"@sm":{gridColumnStart:1,gridColumnEnd:5,align:"center",justify:"center"}}),b=i("div",{d:"flex",align:"center",justify:"center",direction:"column",img:{objectFit:"cover",br:"10px",w:"37px",h:"37px"},span:{d:"flex",align:"center",justify:"flex-start",mt:"-10px",textShadow:"-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",color:"black !important",fs:"16px",fw:"bold",ff:"$heading"}}),Z=async s=>await F({options:{code:$.GAME_MC,index_position:s,key_type:"i64",limit:"100",scope:$.GAME_MC,table:I.PLAYERS,reverse:!0}}),ee=s=>P({queryKey:[B.LeaderBoard,s],queryFn:()=>re(s),staleTime:1e3*60*60});async function re(s){try{const o=await Z(s);return o?ne(o):null}catch(o){return console.log(o),null}}async function ne(s){return s==null?void 0:s.map(o=>{var c,w,g;(c=o.buildings)==null||c.sort((n,h)=>_.findIndex(x=>x.label===n.buildingid)-_.findIndex(x=>x.label===h.buildingid));const l=(w=o.buildings)==null?void 0:w.filter(n=>n.building_type==="production"),d=(g=o.buildings)==null?void 0:g.filter(n=>n.building_type!=="production");return{...o,buildings:{production:l,special:d}}})}const se=L.lazy(()=>H(()=>import("./index-c5142233.js"),["assets/index-c5142233.js","assets/index-efe891fb.js","assets/index-55fec1ff.css","assets/info-builder-842bc998.js"])),ue=()=>{var A,E,k,M,R;O(r=>r.user);const{data:s,isLoading:o}=G(),[l,d]=L.useState(3),{data:c,isLoading:w}=ee(l);function g(){Q.setState(r=>({...r,selectedProduction:null}))}const n=j.useMemo(()=>{var f,m,t;if(!s)return;(f=s==null?void 0:s.buildings)==null||f.sort((u,W)=>_.findIndex(v=>v.label===u.buildingid)-_.findIndex(v=>v.label===W.buildingid));const r=(m=s.buildings)==null?void 0:m.filter(u=>u.building_type==="production"),a=(t=s.buildings)==null?void 0:t.filter(u=>u.building_type!=="production");return{...s,buildings:{production:r,special:a}}},[]),h=j.useMemo(()=>!c||!s?-1:c.findIndex(r=>r.wallet===s.wallet)+1,[c,s]),x=j.useCallback(r=>{if(r<3)return e.jsx(T,{color:"#FFAD0E"});if(r<10)return e.jsx(T,{color:"#9CBFCA"});if(r<75)return e.jsx(T,{color:"#B64C00"})},[]),C=j.useCallback(r=>{switch(r){case"mcp":d(2);break;case"score":d(3);break;case"rMin":d(4);break;default:d(3)}},[]);return e.jsxs(Y,{children:[e.jsx(se,{}),e.jsx(N,{children:e.jsx(D,{onClick:g,color:"white",size:30})}),e.jsxs(q,{children:[e.jsx(z,{children:"SEASON LEADERBOARD"}),e.jsxs(K,{children:[e.jsxs(U,{children:[e.jsx("span",{children:"Rank"}),e.jsx("span",{children:"Gamertag"}),e.jsx(S,{selected:l===3,onClick:()=>C("score"),children:"Score🏆"}),e.jsx(S,{selected:l===4,onClick:()=>C("rMin"),children:"Я / min"}),e.jsx(S,{selected:l===2,onClick:()=>C("mcp"),children:"MCP earned"}),e.jsx("span",{children:"Buildings"})]}),e.jsxs(J,{children:[e.jsx("span",{children:h===0?"> 100":h}),e.jsx("span",{children:n==null?void 0:n.gamertag}),e.jsx("span",{children:p((n==null?void 0:n.score_building)||0,3)}),e.jsx("span",{children:p((n==null?void 0:n.gamecurrency_per_minute)||0,3)}),e.jsx("span",{children:p((n==null?void 0:n.score_mcp)||0,3)}),e.jsxs(y,{children:[(E=(A=n==null?void 0:n.buildings)==null?void 0:A.production)==null?void 0:E.map(r=>e.jsxs(b,{children:[e.jsx("img",{src:`/assets/mcp/${r==null?void 0:r.buildingid}.png`,alt:""}),e.jsx("span",{children:r.building_level===0?"-":r.building_level})]},r.buildingid)),e.jsx("span",{children:(M=(k=n==null?void 0:n.buildings)==null?void 0:k.special)==null?void 0:M.map(r=>e.jsxs(b,{children:[e.jsx("img",{src:`/assets/mcp/${r==null?void 0:r.buildingid}.png`,alt:""}),e.jsx("span",{children:r.building_level===0?"-":r.building_level})]},r.buildingid))})]})]}),e.jsx(V,{children:(R=c==null?void 0:c.sort((r,a)=>l!==3?0:a.score_building-r.score_building||a.gamecurrency_per_minute-r.gamecurrency_per_minute))==null?void 0:R.map((r,a)=>{var f,m;return e.jsxs(X,{children:[e.jsxs("span",{children:[a+1," ",x(a)]}),e.jsx("span",{children:r.gamertag}),e.jsx("span",{children:p(r.score_building,3)}),e.jsx("span",{children:p((r==null?void 0:r.gamecurrency_per_minute)||0,3)}),e.jsx("span",{children:p((r==null?void 0:r.score_mcp)||0,3)}),e.jsxs(y,{children:[(f=r.buildings.production)==null?void 0:f.map(t=>e.jsxs(b,{children:[e.jsx("img",{src:`/assets/mcp/${t==null?void 0:t.buildingid}.png`,alt:""}),e.jsx("span",{children:t.building_level===0?"-":t.building_level})]},t.buildingid)),e.jsx("span",{children:(m=r.buildings.special)==null?void 0:m.map(t=>e.jsxs(b,{children:[e.jsx("img",{src:`/assets/mcp/${t==null?void 0:t.buildingid}.png`,alt:""}),e.jsx("span",{children:t.building_level===0?"-":t.building_level})]},t.buildingid))})]})]},r.wallet)})})]})]})]})};export{ue as default};
