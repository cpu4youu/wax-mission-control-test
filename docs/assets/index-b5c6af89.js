import{s as c,e as ve,S as ke,u as Ne,j as s,R as I,_,X as We,W as $e,a7 as Ae,aP as Be,b as W,Y as S,h as f,k as v,Z as Pe,$ as Ve,a0 as ze,a1 as E,a2 as $,a3 as ie,d as re,a5 as ne,aa as Ge,aO as A,v as ae,B as m,aQ as oe,aR as ce,N as le,l as M}from"./index-fe5e5be4.js";import{u as Qe}from"./index-e2cba1c2.js";import{a as De}from"./index.esm-358caabe.js";import{a as He,e as Oe}from"./execute-remove-favorites-land-contract-15cacd5a.js";import{e as Ue}from"./execute-equip-tools-contract-5affa670.js";import{o as qe}from"./inventory-query-a434baa6.js";import{T as xe}from"./index-acd59c94.js";import{u as Ze}from"./get-planet-config-50f32321.js";import"./info-builder-a6633a44.js";import"./index-ea16b124.js";import"./index-a6334517.js";const Ye=c("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",maxW:"1190px",padding:"0 10px",">svg":{mr:"auto",mt:"20px",cursor:"pointer"}}),de=c("h3",{d:"flex",justify:"space-between",w:"100%",mr:"auto",mt:"25px",gap:"10px",fs:"29px",fw:"$bold",ff:"$heading",color:"$white500",">button":{h:"25px",div:{fs:"16px",border:"none",br:"10px"}},"@sm":{align:"center",fs:"18px",flexWrap:"wrap",svg:{w:"25px",h:"25px"}}}),pe=c("h4",{w:"100%",textAlign:"center",fs:"22px",fw:"$normal",ff:"$heading",color:"$white500","@sm":{fs:"18px"}}),Xe=c("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"20px",mt:"30px",mb:"30px",w:"100%","@sm":{gap:"10px",justify:"center"}}),Je=c("div",{d:"flex",align:"center",justify:"center",w:"100%",variants:{isSelected:{true:{">div:last-child":{border:"3px solid #00BAFF","@sm":{border:"1px solid #00BAFF"}}}}},"@sm":{justify:"center"}}),Ke=c("div",{d:"flex",align:"center",justify:"flex-start",gap:"6px",w:"100%",maxW:"260px"}),es=c("div",{w:"82px",h:"82px",border:"3px solid $black500",overflow:"hidden",br:"5px",">img":{w:"82px",h:"82px",objectFit:"cover",objectPosition:"center 3px",scale:"1.9"},variants:{rarity:{Abundant:{borderColor:"#4c4c4c"},Common:{borderColor:"#000000"},Rare:{borderColor:"#3d74e9"},Epic:{borderColor:"#8719f0"},Legendary:{borderColor:"#da992e"},Mythical:{borderColor:"#d20066"}}},"@sm":{w:"52px",h:"52px",">img":{w:"52px",h:"52px"}}}),ss=c("div",{d:"flex",align:"center",justify:"space-between",br:"8px",padding:"20px",bg:"rgba(255, 255, 255, 0.06)",w:"100%",">button":{h:"25px",br:"10px",minW:"50px","&:first-child":{minW:"140px"},div:{fs:"16px",border:"none",br:"10px"}},"@sm":{padding:"5px",justify:"center",gap:"5px",">button":{w:"50px",maxW:"50px",minW:"50px"}}}),ts=c("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",margin:"auto",w:"100%","@md":{d:"flex",padding:"0 20px",flexWrap:"wrap"},"@sm":{align:"center",padding:"0px"}}),is=ve({"0%":{rotate:"0deg"},"100%":{rotate:"360deg"}}),rs=c("button",{variants:{isLoading:{true:{svg:{animation:`${is} 1.2s ease-in-out infinite`}}}}}),ns=c("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"56px",mt:"65px",w:"100%","@md":{d:"flex",justify:"center",padding:"0 20px"},"@sm":{mt:"45px",gap:"35px",padding:"0 10px"}}),ue=c("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",position:"relative",maxW:"250px","@sm":{w:"100%",maxW:"unset"}}),fe=c("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"100%","@sm":{gap:"10px",direction:"row",w:"100%"}}),me=c("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column"}),he=c("div",{d:"flex",align:"center",justify:"center",overflow:"hidden",h:"140px",w:"100%",borderRadius:"8px",border:"3px solid rgba(255, 255, 255, 0.06)",button:{w:"82px",h:"82px",position:"absolute",left:"-30px",top:"-30px",zIndex:1,"@sm":{left:"-15px",top:"-20px",w:"50px",h:"50px"}},">img:nth-child(2)":{objectFit:"cover",h:"140px",w:"100%"},"@sm":{w:"100%",maxW:"150px",h:"80px",">img:nth-child(2)":{objectFit:"cover",h:"80px",w:"100%"}}}),h=c("div",{d:"flex",span:{d:"flex",align:"center",justify:"center",gap:"7px",fs:"16px",ff:"$body",color:"$white500","&:nth-child(2)":{ml:"7px"},svg:{w:"20px",h:"20px"}},"@sm":{span:{fs:"14px"}}}),ge=c("img",{w:"82px",h:"82px",zIndex:1,"@sm":{left:"-15px",top:"-20px",w:"50px",h:"50px"}}),we=c("div",{d:"flex",align:"center",justify:"center",direction:"row",mb:"5px",w:"100%",">button":{h:"25px",minH:"40px",minW:"unset",w:"100%",div:{fs:"16px",border:"none",br:"10px"},"&:last-child":{position:"absolute",bottom:"155px",right:"5px",w:"40px",h:"40px",minH:"40px",minW:"40px",br:"10px",">div":{fs:"14px",border:"none",br:"10px"}}},"@sm":{w:"100%",">button":{w:"100%",maxW:"unset",minW:"unset","&:last-child":{position:"relative",bottom:"0px",right:"0px"}}}}),Le=ve({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),as=c("div",{d:"flex",w:"100%",h:"90px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${Le} 1.2s ease-in-out infinite`,"@sm":{h:"215px",w:"100%"}}),os=c("div",{d:"flex",w:"250px",h:"280px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${Le} 1.2s ease-in-out infinite`,"@sm":{w:"100%",h:"275px"}});async function cs(i,w){const{executeTransaction:d}=Ne(),F=ls(i,w);return!!await d(F)}function ls(i,w){return{actions:[{account:ke.MEMBERS_MC,name:"remfavtools",authorization:[{actor:i.name,permission:i.authorization.permission}],data:{wallet:i.name,asset_ids:w}}]}}function xs(){return s.jsx("svg",{width:"26",height:"36",viewBox:"0 0 26 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M12.9993 5.4V9C11.217 8.99681 9.47379 9.52292 7.99079 10.5116C6.50779 11.5003 5.35175 12.9071 4.66923 14.5537C3.98672 16.2002 3.80846 18.0123 4.15706 19.7602C4.50567 21.5082 5.36543 23.1133 6.62735 24.372L4.08935 26.91C2.32703 25.1479 1.12685 22.9027 0.640598 20.4584C0.154349 18.0141 0.403873 15.4805 1.35761 13.1781C2.31135 10.8756 3.92646 8.90769 5.99869 7.52319C8.07092 6.1387 10.5072 5.39982 12.9993 5.4ZM21.9093 9.09C23.6717 10.8521 24.8719 13.0973 25.3581 15.5416C25.8443 17.9859 25.5948 20.5195 24.6411 22.8219C23.6873 25.1244 22.0722 27.0923 20 28.4768C17.9278 29.8613 15.4915 30.6002 12.9993 30.6V27C14.7817 27.0032 16.5249 26.4771 18.0079 25.4884C19.4909 24.4996 20.6469 23.0929 21.3295 21.4463C22.012 19.7998 22.1902 17.9877 21.8416 16.2398C21.493 14.4918 20.6333 12.8867 19.3713 11.628L21.9093 9.09ZM12.9993 36L5.79935 28.8L12.9993 21.6V36ZM12.9993 14.4V0L20.1993 7.2L12.9993 14.4Z",fill:"white"})})}const B=I.lazy(()=>_(()=>import("./hearth-broken-ccaa6729.js"),["assets/hearth-broken-ccaa6729.js","assets/index-fe5e5be4.js","assets/index-55fec1ff.css"])),je=I.lazy(()=>_(()=>import("./star-6b563d08.js"),["assets/star-6b563d08.js","assets/index-fe5e5be4.js","assets/index-55fec1ff.css"])),be=I.lazy(()=>_(()=>import("./shards-cf4a229e.js"),["assets/shards-cf4a229e.js","assets/index-fe5e5be4.js","assets/index-55fec1ff.css"])),ye=I.lazy(()=>_(()=>import("./tlm-c0c680eb.js"),["assets/tlm-c0c680eb.js","assets/index-fe5e5be4.js","assets/index-55fec1ff.css"])),vs=()=>{var q,Z,Y,X;const{data:i,isFetching:w}=We(),{data:d,isFetching:F}=$e(),{data:R,isFetching:Ce}=Ae(),{data:k}=Ze(),{data:r,isLoading:P,isFetching:Te}=Be(),o=W(e=>e.user),g=S(e=>e.nonce),Se=S(e=>e.updateHashExpire),L=S(e=>e.isCalculating),V=S(e=>e.updateIsCalculating),[x,p]=f.useState(!1),[,N]=f.useState(!1),z=f.useCallback(e=>{var n;return(((n=i==null?void 0:i.userTools)==null?void 0:n.reduce((a,l)=>a+(l==null?void 0:l.nft_power),0))??0)*(e/10)},[i==null?void 0:i.userTools]);function Ee(){Qe.setState({selectedPage:"main"})}const G=(q=r==null?void 0:r.favoriteTools)==null?void 0:q.findIndex(e=>{var t;return e.every(n=>{var a;return(a=i==null?void 0:i.userTools)==null?void 0:a.some(l=>l.asset_id===n.assetId)})&&e.length===((t=i==null?void 0:i.userTools)==null?void 0:t.length)});async function Q(e){if(o){p(!0);try{const t=e.map(({assetId:a})=>a).join(",");if(await He(o,t)){await v(1e3);const a=await le(o==null?void 0:o.name);W.setState(l=>({...l,user:l.user?{...l.user,...a}:null})),await A(),M.success("Land removed from favorites")}}catch(t){console.error(t)}finally{p(!1)}}}async function Me(e){if(o){p(!0);try{const t=e.map(({assetId:a})=>a).join(",");if(await cs(o,t)){await v(1e3);const a=await le(o==null?void 0:o.name);W.setState(l=>({...l,user:l.user?{...l.user,...a}:null})),await A(),M.success("Toolset removed from favorites")}}catch(t){console.error(t)}finally{p(!1)}}}async function Ie(e){if(!(!(i!=null&&i.userTools)||!o)){p(!0);try{const t=e==null?void 0:e.map(({assetId:a})=>Number(a));await Ue(o,t)&&(await v(1500),await qe("tool.worlds"),await O(),M.success("Changed tools successfully"))}catch(t){console.error(t)}finally{p(!1)}}}async function D(e){if(o){p(!0);try{await Oe(o,e)&&(await v(1e3),await E(),M.success("Land changed successfully"))}catch(t){console.error(t)}finally{p(!1)}}}async function _e(){await ne(),await E()}const H=f.useCallback(async e=>{p(!0);try{if(V(!0),await v(500),!o)return null;if(!(g!=null&&g.rand_str)){await Pe();const a=new Date;Se(a.setMinutes(a.getMinutes()+1))}const t=(d==null?void 0:d.current_land)===e?void 0:e;await Ve(o,t)&&(await ze(o==null?void 0:o.name),await _e(),await E())}catch(t){console.log(t)}finally{V(!1),p(!1)}},[o,d,g==null?void 0:g.rand_str]),C=f.useCallback(e=>{var l,j,b,T,J,K,ee,se,te;const t=(e??0)/10;if(((l=i==null?void 0:i.userTools)==null?void 0:l.length)===1){const y=t*(((b=(j=i==null?void 0:i.userTools)==null?void 0:j[0])==null?void 0:b.delay)??0);return $(y,i,d)}const n=(T=i==null?void 0:i.userTools)==null?void 0:T.sort((y,Re)=>Re.delay-y.delay);if(((J=i==null?void 0:i.userTools)==null?void 0:J.length)===2){const y=t*((((K=n==null?void 0:n[0])==null?void 0:K.delay)??0)+(((ee=n==null?void 0:n[1])==null?void 0:ee.delay)??0)/2);return $(y,i,d)}const a=t*((((se=n==null?void 0:n[0])==null?void 0:se.delay)??0)+(((te=n==null?void 0:n[1])==null?void 0:te.delay)??0));return $(a,i,d)},[i,d]),u=f.useCallback(e=>ie(re(C(e))),[C]),O=f.useCallback(async()=>{await ne(),await Ge(),await E(),await A()},[]),Fe=Te||w||F||Ce;f.useEffect(()=>{const e=setInterval(()=>{r!=null&&r.favoriteLands.every(t=>ie(re(C(t[0].delay)))==="MINE")?(N(t=>!t),clearInterval(e)):N(t=>!t)},1e3);return N(t=>!t),()=>clearInterval(e)},[r==null?void 0:r.favoriteLands,d,C]);const U=(e,t)=>{var l,j,b;const a=(((b=(j=(l=k==null?void 0:k[(t==null?void 0:t.toLowerCase())||""])==null?void 0:l.find(({key:T})=>T==="min_commission"))==null?void 0:j.value)==null?void 0:b[1])||0)/100;return e<a?a:e};return s.jsxs(Ye,{children:[s.jsx(De,{size:30,color:"#fff",onClick:Ee}),s.jsxs(de,{children:["Tool Favorites (",((Z=r==null?void 0:r.favoriteTools)==null?void 0:Z.length)??0,"/3)"]}),s.jsx(Xe,{children:P?Array.from({length:3}).map((e,t)=>s.jsx(as,{},t)):(((Y=r==null?void 0:r.favoriteTools)==null?void 0:Y.length)??0)===0?s.jsx(pe,{children:s.jsx("span",{children:"You don't have any favorite tool"})}):(X=r==null?void 0:r.favoriteTools)==null?void 0:X.map((e,t)=>s.jsxs(Je,{isSelected:G===t,children:[s.jsx(Ke,{children:e==null?void 0:e.map(n=>s.jsx(es,{rarity:n.rarity,title:n.name,children:s.jsx("img",{src:`https://ipfs.alienworlds.io/ipfs/${n.img}`,alt:n.name})},ae()))}),s.jsxs(ss,{children:[s.jsx(m,{noBorder:!0,color:"solidBlue",disabled:G===t||x,isLoading:x,onClick:()=>Ie(e),children:"Equip"}),s.jsx(m,{disabled:x,isLoading:x,onClick:()=>Me(e),noBorder:!0,children:s.jsx(B,{})})]})]},ae()))}),s.jsxs(ts,{children:[s.jsxs(de,{children:[s.jsxs("span",{children:["Land Favorites (",r==null?void 0:r.favoriteLands.length,"/30)"]}),s.jsx(rs,{isLoading:Fe,onClick:O,children:s.jsx(xs,{})})]}),s.jsx(ns,{children:P?Array.from({length:8}).map((e,t)=>s.jsx(os,{},t)):(r==null?void 0:r.favoriteLands.length)===0?s.jsx(pe,{children:s.jsx("span",{children:"You don't have any favorite land"})}):s.jsxs(s.Fragment,{children:[r==null?void 0:r.favoriteLands.filter(([e])=>u(e.delay)==="MINE").sort((e,t)=>t[0].delay-e[0].delay).flatMap(([e])=>s.jsxs(ue,{children:[s.jsxs(fe,{children:[s.jsxs(he,{children:[s.jsx(xe,{disabled:!(e!=null&&e.x)||!(e!=null&&e.y),delayDuration:10,text:`x: ${e==null?void 0:e.x}, y: ${e==null?void 0:e.y}`,children:s.jsx(ge,{src:`/assets/planets/${e==null?void 0:e.planetName.toLowerCase()}.png`,alt:e==null?void 0:e.planetName,title:e==null?void 0:e.planetName})}),s.jsx("img",{src:`/assets/lands/${e.landName}.webp`,alt:e.landName,title:e.landName})]}),s.jsxs(me,{children:[s.jsxs(h,{children:[s.jsx("span",{children:"Estimated TLM:"}),s.jsxs("span",{children:[oe({land:e}).toFixed(4),s.jsx(ye,{})]})]}),s.jsxs(h,{children:[s.jsx("span",{children:"Estimated shards:"}),s.jsxs("span",{children:[ce({landCardId:e.cardid,landsType:R,userTools:i==null?void 0:i.userTools})," ",s.jsx(be,{})]})]}),s.jsxs(h,{children:[s.jsx("span",{children:"Estimated MCP:"}),s.jsxs("span",{children:[z(e.luck).toLocaleString("US-en")," ",s.jsx(je,{})]})]}),s.jsxs(h,{children:[s.jsx("span",{children:"Commission:"}),s.jsxs("span",{children:[U(e.commission/100,e==null?void 0:e.planetName.toLowerCase())," %"]})]})]})]}),s.jsxs(we,{children:[s.jsx(m,{isLoading:x,disabled:x,onClick:()=>D(e.assetId),color:"solidBlue",children:"Select"}),s.jsx(m,{color:"solidBlue",isLoading:x||L,disabled:x||L||u(e.delay)!=="MINE",onClick:()=>H(e.assetId),children:u(e.delay)==="MINE"?"Mine":u(e.delay)}),s.jsx(m,{isLoading:x,disabled:x,onClick:()=>Q([e]),noBorder:!0,children:s.jsx(B,{})})]})]},e.assetId)),r==null?void 0:r.favoriteLands.filter(([e])=>u(e.delay)!=="MINE").sort((e,t)=>e[0].delay-t[0].delay).flatMap(([e])=>s.jsxs(ue,{children:[s.jsxs(fe,{children:[s.jsxs(he,{children:[s.jsx(xe,{disabled:!(e!=null&&e.x)||!(e!=null&&e.y),delayDuration:10,text:`x: ${e==null?void 0:e.x}, y: ${e==null?void 0:e.y}`,children:s.jsx(ge,{src:`/assets/planets/${e==null?void 0:e.planetName.toLowerCase()}.png`,alt:e==null?void 0:e.planetName,title:e==null?void 0:e.planetName})}),s.jsx("img",{src:`/assets/lands/${e.landName}.webp`,alt:e.landName,title:e.landName})]}),s.jsxs(me,{children:[s.jsxs(h,{children:[s.jsx("span",{children:"Estimated TLM:"}),s.jsxs("span",{children:[oe({land:e}).toFixed(4),s.jsx(ye,{})]})]}),s.jsxs(h,{children:[s.jsx("span",{children:"Estimated shards:"}),s.jsxs("span",{children:[ce({landCardId:e.cardid,landsType:R,userTools:i==null?void 0:i.userTools})," ",s.jsx(be,{})]})]}),s.jsxs(h,{children:[s.jsx("span",{children:"Estimated MCP:"}),s.jsxs("span",{children:[z(e.luck).toLocaleString("US-en")," ",s.jsx(je,{})]})]}),s.jsxs(h,{children:[s.jsx("span",{children:"Commission:"}),s.jsxs("span",{children:[U(e.commission/100,e==null?void 0:e.planetName.toLowerCase())," %"]})]})]})]}),s.jsxs(we,{children:[s.jsx(m,{isLoading:x,disabled:x,onClick:()=>D(e.assetId),color:"solidBlue",children:"Select"}),s.jsx(m,{color:"solidBlue",isLoading:x||L,disabled:x||L||u(e.delay)!=="MINE",onClick:()=>H(e.assetId),children:u(e.delay)==="MINE"?"Mine":u(e.delay)}),s.jsx(m,{isLoading:x,disabled:x,onClick:()=>Q([e]),noBorder:!0,children:s.jsx(B,{})})]})]},e.assetId))]})})]})]})};export{vs as default};
