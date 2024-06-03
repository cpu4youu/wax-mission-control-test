import{s as t,r as f,S as c,T as m,a as g,Q as u,R as d,_ as h,j as e,ao as w}from"./index-79d4d288.js";import{m as o}from"./mcpFormatNumber-1b3dda04.js";const _=t("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",mt:"-40px","@sm":{mt:"0px",padding:"0 15px"}});t("div",{d:"flex",align:"center",justify:"center",w:"100%",maxW:"1250px",mx:"auto",my:"20px",svg:{cursor:"pointer",mr:"auto"}});const j=t("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1250px","@md":{d:"flex",flexWrap:"wrap"}});t("h2",{color:"$white500",fs:"24px",ff:"$heading",mr:"auto"});const b=t("div",{d:"grid",gap:"5px",mt:"20px",w:"100%",maxW:"1250px"}),v=t("div",{d:"grid",gap:"5px",maxH:"555px",overflowY:"auto",w:"100%",maxW:"1250px"}),T=t("div",{d:"grid",gridTemplateColumns:"0.5fr repeat(4, 1fr) 1fr",gap:"10px",w:"100%",h:"37px",maxW:"1250px",bg:"rgba(0, 0, 0, 0.27)",px:"20px",span:{d:"flex",align:"center",justify:"flex-start",gap:"5px",color:"#797979",fs:"16px",fw:"bold",ff:"$heading",svg:{w:"20px",h:"20px"}},"@sm":{gap:"5px",pl:"10px",pr:"10px",span:{fs:"10px"}}}),l=t("button",{d:"flex",align:"center",justify:"flex-start",gap:"5px",color:"#797979",fs:"16px",fw:"bold",ff:"$heading","&:hover":{color:"$yellow500"},variants:{selected:{true:{color:"$yellow500"}}},"@sm":{fs:"12px"}});t("div",{d:"grid",alignItems:"center",justifyContent:"center",gridTemplateColumns:"0.5fr repeat(4, 1fr) 3fr",gap:"10px",minH:"55px",w:"100%",maxW:"1250px",bg:"rgba(72, 150, 222, 0.27)",pl:"20px",pr:"10px",mb:"15px",span:{d:"flex",align:"center",justify:"flex-start",color:"white",fs:"16px",fw:"bold",ff:"$heading"},"@sm":{h:"unset",gridTemplateColumns:"0.5fr repeat(4, 1fr)",gridTemplateRows:"0.8fr 2fr",gap:"5px",pl:"10px",pr:"10px",span:{fs:"12px"}}});const C=t("div",{d:"grid",gridTemplateColumns:"0.5fr repeat(4, 1fr) 1fr",gap:"10px",w:"100%",maxW:"1250px",bg:"rgba(0, 0, 0, 0.27)",pl:"20px",span:{d:"flex",align:"center",justify:"flex-start",h:"55px",color:"#797979",fs:"16px",fw:"bold",ff:"$heading"},"@sm":{h:"unset",gap:"5px",pl:"10px",pr:"10px",span:{fs:"10px"}}});t("div",{d:"flex",flexWrap:"wrap",gap:"5px",py:"5px",">span":{d:"flex",gap:"5px"},"@sm":{gridColumnStart:1,gridColumnEnd:5,align:"center",justify:"center"}});t("div",{d:"flex",align:"center",justify:"center",direction:"column",img:{objectFit:"cover",br:"10px",w:"37px",h:"37px"},span:{d:"flex",align:"center",justify:"flex-start",mt:"-10px",textShadow:"-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",color:"black !important",fs:"16px",fw:"bold",ff:"$heading"}});const S=async()=>{let n=!1,s;const a=[];for(;!n;){const p=await f.get_table_rows({code:c.GAME_MC,index_position:1,key_type:"i64",limit:"10000",scope:c.GAME_MC,table:m.ranking,upper_bound:s});n=!p.more,a.push(...p.rows.slice(0,-1)),s=p.next_key}return a},E=()=>g({queryKey:[u.ranking],queryFn:()=>k(),staleTime:1e3*60*60});async function k(){try{return await S()}catch(n){return console.log(n),null}}const y=d.lazy(()=>h(()=>import("./star-cfc1700e.js"),["assets/star-cfc1700e.js","assets/index-79d4d288.js","assets/index-55fec1ff.css"])),W=()=>{var x;const[n,s]=d.useState("score"),{data:a,isLoading:p}=E();return e.jsx(_,{children:e.jsx(j,{children:e.jsxs(b,{children:[e.jsxs(T,{children:[e.jsx("span",{children:"Rank"}),e.jsx("span",{children:"Player"}),e.jsx(l,{selected:n==="score",onClick:()=>s("score"),children:"Building Score"}),e.jsx(l,{selected:n==="rMin",onClick:()=>s("rMin"),children:"Я / min"}),e.jsxs(l,{selected:n==="mcEarned",onClick:()=>s("mcEarned"),children:["Total ",e.jsx(y,{})]}),e.jsxs(l,{selected:n==="shards",onClick:()=>s("shards"),children:["Shards ",e.jsx(w,{color:"#EBB309"})," "]})]}),e.jsx(v,{children:(x=a==null?void 0:a.sort((r,i)=>n==="rMin"?i.gc_per_minute-r.gc_per_minute:n==="mcEarned"?i.mcp_earned-r.mcp_earned:n==="shards"?i.reward_score-r.reward_score:i.building_score-r.building_score||i.gc_per_minute-r.gc_per_minute))==null?void 0:x.map((r,i)=>e.jsxs(C,{children:[e.jsx("span",{children:i+1}),e.jsx("span",{children:r.gamertag}),e.jsx("span",{children:o(r.building_score,3)}),e.jsx("span",{children:o((r==null?void 0:r.gc_per_minute)||0,3)}),e.jsx("span",{children:o((r==null?void 0:r.mcp_earned)||0,3)}),e.jsx("span",{children:o((r==null?void 0:r.reward_score)||0,3)})]},r.wallet))})]})})})};export{W as default};