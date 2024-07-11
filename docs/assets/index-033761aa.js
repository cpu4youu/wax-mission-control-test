import{s as a,S as T,u as _,aD as O,aC as B,b as L,R as f,j as t,B as C,aw as v,aE as k,av as A,h as E,aG as R,k as M}from"./index-9e8ef54b.js";import{C as N}from"./index-8c32eccd.js";import{P as G}from"./pickaxe-e3a90770.js";import{a as H}from"./index.esm-5f0f7602.js";import{C as I}from"./check-6064df69.js";const V=a("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",mt:"35px",w:"100%",button:{w:"100%",h:"45px",fs:"16px",maxW:"230px",minW:"130px",minH:"unset",">div":{border:"none"}}}),W=a("h2",{d:"flex",align:"center",justify:"center",mb:"15px",fs:"20px",color:"$white500"}),D=a("div",{d:"flex",align:"center",gap:"15px",w:"100%"}),P=a("div",{d:"grid",gridTemplateColumns:"repeat(2, minmax(160px, 1fr))",gap:"15px",mt:"15px",w:"100%","@sm":{gridTemplateColumns:"repeat(1, minmax(160px, 1fr))",justify:"center"}}),Q=a("div",{d:"flex",align:"center",justify:"center",gap:"25px",px:"5px","@sm":{mt:"5px",align:"flex-start",w:"100%",gap:"15px"},"@xsm":{gap:"5px",direction:"column",button:{mb:"3px",w:"100%",maxW:"100%",minW:"unset",minH:"unset"}}}),$=a("div",{d:"flex",align:"center",justify:"flex-start",position:"relative",input:{opacity:0,zIndex:1,w:"25px",h:"25px","& ~ div svg":{d:"none"}},"input:checked ~ div":{bg:"#333333",svg:{d:"flex"}},"@sm":{ml:"auto",img:{w:"55px"}}}),q=a("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"absolute",top:"0px",left:"0px",w:"25px",h:"25px",bg:"#fff",border:"3px solid #5A5A5A",borderRadius:"6px",svg:{w:"15px",h:"15px",path:{fill:"white"}}}),z=a("div",{d:"flex",align:"center",justify:"flex-end",gap:"5px","@sm":{gap:"15px"}}),m=a("div",{d:"flex",align:"center",justify:"center",gap:"5px",textShadow:"2px 1px 4px rgba(0, 0, 0)",svg:{filter:"drop-shadow(3px 5px 2px rgb(0 0 0 / 0.6))",w:"20px",h:"20px"}}),h=a("p",{d:"flex",align:"center",justify:"center",w:"max-content",color:"$white500",textShadow:"2px 1px 4px rgba(0, 0, 0)",fs:"12px",ff:"$heading",fw:"400"});async function F(s,n){const{executeTransaction:l}=_(),d=U(s,n);return!!await l(d)}function U(s,n){return{actions:[{account:T.TOOLS_MC,name:"settemplist",authorization:[{actor:s.name,permission:s.requestPermission}],data:{wallet:s.name,temp_ids:n}}]}}const ee=()=>{var j,w;const{data:s}=O(),{data:n}=B(),l=L(e=>e.user),d=f.useCallback(()=>{var e,i;return(((e=n==null?void 0:n.tempid_allow_list)==null?void 0:e.length)||0)>0?(n==null?void 0:n.tempid_allow_list)??[]:((i=s==null?void 0:s.toolsOv)==null?void 0:i.filter(r=>{var o;return!((o=n==null?void 0:n.tempid_allow_list)!=null&&o.some(u=>u===r.template_id))}).map(r=>r.template_id))??[]},[n,s]),[c,x]=f.useState(d()),[p,g]=f.useState(!1);async function b(){if(l){g(!0);try{await F(l,c)&&(await E(2e3),R(),M.success("Config saved"))}catch(e){console.error("Error staking tool",e)}finally{g(!1)}}}function y(e,i){var o;const r=(o=e.target)==null?void 0:o.checked;x(r?[...c,i.template_id]:c.filter(u=>u!==i.template_id))}function S(){var e,i;if(((e=s==null?void 0:s.toolsOv)==null?void 0:e.length)===c.length)x([]);else{const r=((i=s==null?void 0:s.toolsOv)==null?void 0:i.map(o=>o.template_id))??[];x(r)}}return t.jsxs(V,{children:[t.jsx(W,{children:"ENABLE OR DISABLE TOOLS FOR USE WITH THE MINE BUTTON"}),t.jsxs(D,{children:[t.jsx(C,{isLoading:p,disabled:p,onClick:b,rounded:!1,color:"solidBlue",children:"Save Config"}),t.jsx(C,{isLoading:p,disabled:p,onClick:S,rounded:!1,color:"solidBlue",children:"Check All"})]}),t.jsx(P,{children:(w=(j=s==null?void 0:s.toolsOv)==null?void 0:j.sort((e,i)=>v[e.rarity]-v[i.rarity]||k[e.shine]-k[i.shine]))==null?void 0:w.map((e,i)=>t.jsx(N,{showNumberBracket:!0,direction:"row",tool:e,children:t.jsxs(Q,{children:[t.jsxs(z,{children:[t.jsxs(m,{children:[t.jsx(G,{}),t.jsx(h,{children:e.mining_power})]}),t.jsxs(m,{children:[t.jsx(A,{}),t.jsx(h,{children:e.pow})]}),t.jsxs(m,{children:[t.jsx(H,{color:"white"}),t.jsxs(h,{children:[e.cooldown_seconds," sec"]})]})]}),t.jsxs($,{children:[t.jsx("input",{type:"checkbox",checked:c.some(r=>r===e.template_id),onChange:r=>y(r,e),required:!0}),t.jsx(q,{children:t.jsx(I,{})})]})]})},i))})]})};export{ee as default};