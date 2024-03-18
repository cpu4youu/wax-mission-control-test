import{s as i,e as D,S as I,u as B,W as Y,V as O,b as v,P as m,f as j,m as h,Z,_ as J,$ as K,a1 as y,j as t,v as W,B as g,l as X,L as k,n as w,a0 as E}from"./index-821cd591.js";import{u as ee}from"./index-5502ac2b.js";import{a as te}from"./index.esm-5a1b3f2b.js";import{S as ne}from"./shards-fdd6d05a.js";import{u as se,o as R,e as ae}from"./execute-equip-tools-contract-98ce42eb.js";import{o as re}from"./inventory-query-bf5f291d.js";import{e as ie}from"./execute-equip-land-contract-4e224103.js";const oe=i("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",maxW:"1190px",padding:"0 10px",">svg":{mr:"auto",mt:"20px",cursor:"pointer"}}),F=i("h3",{d:"flex",justify:"space-between",w:"100%",mr:"auto",mt:"25px",gap:"10px",fs:"29px",fw:"$bold",ff:"$heading",color:"$white500",">button":{h:"25px",div:{fs:"16px",border:"none",br:"10px"}},"@sm":{fs:"18px",flexWrap:"wrap",span:{w:"100%"}}}),$=i("h4",{w:"100%",textAlign:"center",fs:"22px",fw:"$normal",ff:"$heading",color:"$white500","@sm":{fs:"18px"}}),ce=i("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"20px",mt:"30px",mb:"30px",w:"100%","@sm":{justify:"center"}}),le=i("div",{d:"flex",align:"center",justify:"center",w:"100%",variants:{isSelected:{true:{">div:last-child":{border:"3px solid #00BAFF"}}}},"@sm":{flexWrap:"wrap",justify:"center"}}),de=i("div",{d:"flex",align:"center",justify:"flex-start",gap:"6px",w:"100%",maxW:"260px"}),pe=i("div",{w:"82px",h:"82px",border:"3px solid $black500",overflow:"hidden",br:"5px",">img":{w:"82px",h:"82px",objectFit:"cover",objectPosition:"center 3px",scale:"1.9"},variants:{rarity:{Abundant:{borderColor:"#4c4c4c"},Common:{borderColor:"#000000"},Rare:{borderColor:"#3d74e9"},Epic:{borderColor:"#8719f0"},Legendary:{borderColor:"#da992e"},Mythical:{borderColor:"#d20066"}}}}),ue=i("div",{d:"flex",align:"center",justify:"space-between",br:"8px",padding:"20px",bg:"rgba(255, 255, 255, 0.06)",w:"100%",">button":{h:"25px",br:"10px","&:first-child":{minW:"140px"},div:{fs:"16px",border:"none",br:"10px"}},"@sm":{mt:"10px",padding:"10px",flexWrap:"wrap",justify:"center",gap:"5px",">button":{w:"100%",maxW:"100%",minW:"100%"}}}),xe=i("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",margin:"auto",w:"100%","@md":{d:"flex",padding:"0 20px",flexWrap:"wrap"},"@sm":{align:"center",padding:"0px"}}),fe=i("div",{d:"flex",align:"center",justify:"space-between",flexWrap:"wrap",gap:"50px",mt:"35px",w:"100%","@md":{d:"flex",justify:"center",padding:"0 20px"},"@sm":{padding:"0 10px"}}),me=i("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",position:"relative",maxW:"250px",">button":{h:"40px",minH:"40px",minW:"100%",br:"10px",">div":{fs:"14px",border:"none",br:"10px"}},">div:nth-child(3)":{mt:"3px"},"@sm":{w:"100%",maxW:"unset"}}),he=i("div",{d:"flex",align:"center",justify:"center",overflow:"hidden",h:"140px",w:"100%",borderRadius:"8px",border:"3px solid rgba(255, 255, 255, 0.06)",">img":{objectFit:"cover",h:"140px",w:"100%"},"@sm":{w:"100%",">img:nth-child(2)":{objectFit:"cover",h:"140px",w:"100%"}}}),A=i("div",{d:"flex",span:{d:"flex",align:"center",justify:"center",gap:"7px",fs:"16px",ff:"$body",color:"$white500","&:nth-child(2)":{ml:"7px"},svg:{w:"20px",h:"20px"}}}),ge=i("img",{w:"82px",h:"82px",position:"absolute",left:"-30px",top:"-30px",zIndex:1,"@sm":{left:"-15px",top:"-20px"}}),we=i("div",{d:"flex",align:"center",justify:"center",direction:"row",mb:"5px",w:"100%",">button":{h:"25px",minH:"40px",minW:"unset",w:"100%",div:{fs:"16px",border:"none",br:"10px"}},"@sm":{w:"100%",">button":{w:"100%",maxW:"unset",minW:"unset"}}}),P=D({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),be=i("div",{d:"flex",w:"100%",h:"90px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${P} 1.2s ease-in-out infinite`,"@sm":{h:"215px",w:"100%"}}),ve=i("div",{d:"flex",w:"250px",h:"280px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${P} 1.2s ease-in-out infinite`,"@sm":{w:"100%",h:"275px"}});async function je(n,d){const{executeTransaction:r}=B(),x=ye(n,d);return!!await r(x)}function ye(n,d){return{actions:[{account:I.MEMBERS_MC,name:"remfavtools",authorization:[{actor:n.name,permission:n.requestPermission}],data:{wallet:n.name,asset_ids:d}}]}}async function Le(n,d){const{executeTransaction:r}=B(),x=Ce(n,d);return!!await r(x)}function Ce(n,d){return{actions:[{account:I.MEMBERS_MC,name:"remfavland",authorization:[{actor:n.name,permission:n.requestPermission}],data:{wallet:n.name,asset_id:d}}]}}const Fe=()=>{var S,M;const{data:n,isLoading:d}=se(),{data:r}=Y(),{data:x}=O(),a=v(e=>e.user),f=m(e=>e.nonce),_=m(e=>e.updateHashExpire),L=m(e=>e.isCalculating),C=m(e=>e.updateIsCalculating),b=m(e=>e.mineCooldown),[p,u]=j.useState(!1),N=j.useCallback(e=>{var c;return(((c=r==null?void 0:r.userTools)==null?void 0:c.reduce((o,l)=>o+(l==null?void 0:l.nft_power),0))??0)*(e/10)},[r==null?void 0:r.userTools]);function q(){ee.setState({selectedPage:"main"})}const T=(S=n==null?void 0:n.favoriteTools)==null?void 0:S.findIndex(e=>e.every(s=>{var c;return(c=r==null?void 0:r.userTools)==null?void 0:c.some(o=>o.asset_id===s.assetId)}));async function z(e){if(a){u(!0);try{const s=e.map(({assetId:o})=>o).join(",");if(await Le(a,s)){await h(1e3);const o=await k(a==null?void 0:a.name);v.setState(l=>({...l,user:l.user?{...l.user,...o}:null})),await R(),w.success("Land removed from favorites")}}catch(s){console.error(s)}finally{u(!1)}}}async function U(e){if(a){u(!0);try{const s=e.map(({assetId:o})=>o).join(",");if(await je(a,s)){await h(1e3);const o=await k(a==null?void 0:a.name);v.setState(l=>({...l,user:l.user?{...l.user,...o}:null})),await R(),w.success("Current Land removed from favorites")}}catch(s){console.error(s)}finally{u(!1)}}}async function H(e){if(!(!(r!=null&&r.userTools)||!a)){u(!0);try{const s=e==null?void 0:e.map(({assetId:o})=>Number(o));await ae(a,s)&&(await h(1e3),await E(),await re("tool.worlds"),w.success("Tools added to current setup"))}catch(s){console.error(s)}finally{u(!1)}}}async function V(e){if(a){u(!0);try{await ie(a,e)&&(await h(1e3),await y(),w.success("Land added to current setup"))}catch(s){console.error(s)}finally{u(!1)}}}async function G(){await E(),await y()}const Q=j.useCallback(async e=>{u(!0);try{if(C(!0),await h(500),!a)return null;if(!(f!=null&&f.rand_str)){await Z();const o=new Date;_(o.setMinutes(o.getMinutes()+1))}const s=(x==null?void 0:x.current_land)===e?void 0:e;await J(a,s)&&(await K(a==null?void 0:a.name),await G(),await y())}catch(s){console.log(s)}finally{C(!1),u(!1)}},[a,x,f==null?void 0:f.rand_str]);return t.jsxs(oe,{children:[t.jsx(te,{size:30,color:"#fff",onClick:q}),t.jsxs(F,{children:["Tool Favorites (",n==null?void 0:n.favoriteTools.length,"/3)"]}),t.jsx(ce,{children:d?Array.from({length:3}).map((e,s)=>t.jsx(be,{},s)):(n==null?void 0:n.favoriteTools.length)===0?t.jsx($,{children:t.jsx("span",{children:"You don't have any favorite tool"})}):(M=n==null?void 0:n.favoriteTools)==null?void 0:M.map((e,s)=>t.jsxs(le,{isSelected:T===s,children:[t.jsx(de,{children:e.map(c=>t.jsx(pe,{rarity:c.rarity,title:c.name,children:t.jsx("img",{src:`https://ipfs.alienworlds.io/ipfs/${c.img}`,alt:c.name})},W()))}),t.jsxs(ue,{children:[t.jsx(g,{noBorder:!0,color:"eleventh",disabled:T===s||p,isLoading:p,onClick:()=>H(e),children:"Equip"}),t.jsx(g,{disabled:p,isLoading:p,onClick:()=>U(e),noBorder:!0,children:"Remove from favorites"})]})]},W()))}),t.jsxs(xe,{children:[t.jsx(F,{children:t.jsxs("span",{children:["Land Favorites (",n==null?void 0:n.favoriteLands.length,"/20)"]})}),t.jsx(fe,{children:d?Array.from({length:8}).map((e,s)=>t.jsx(ve,{},s)):(n==null?void 0:n.favoriteLands.length)===0?t.jsx($,{children:t.jsx("span",{children:"You don't have any favorite land"})}):n==null?void 0:n.favoriteLands.flatMap(e=>t.jsxs(me,{children:[t.jsx(ge,{src:`/assets/planets/${e[0].planetName.toLowerCase()}.png`,alt:e[0].planetName,title:e[0].planetName}),t.jsx(he,{children:t.jsx("img",{src:`/assets/lands/${e[0].landName}.webp`,alt:e[0].landName,title:e[0].landName})}),t.jsxs(A,{children:[t.jsx("span",{children:"Estimated shards:"}),t.jsxs("span",{children:[e[0].luck," ",t.jsx(ne,{})]})]}),t.jsxs(A,{children:[t.jsx("span",{children:"Estimated MCP:"}),t.jsxs("span",{children:[N(e[0].luck).toLocaleString("US-en")," ",t.jsx(X,{})]})]}),t.jsxs(we,{children:[t.jsx(g,{isLoading:p,disabled:p,onClick:()=>V(e[0].assetId),color:"eleventh",children:"Select"}),t.jsx(g,{color:"eleventh",isLoading:p||L,disabled:p||L||b!=="MINE",onClick:()=>Q(e[0].assetId),children:b==="MINE"?"Mine":b})]}),t.jsx(g,{isLoading:p,disabled:p,onClick:()=>z(e),noBorder:!0,children:"Remove from favorites"})]},e[0].assetId))})]})]})};export{Fe as default};
