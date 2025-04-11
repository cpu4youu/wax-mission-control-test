import{s as f,u as fe,a as Ce,b as I,j as a,f as le,q as ge,Q as ue,e as Ve,R as w,_ as y,r as v,d as Le,c as $e,B as ke,L as he,g as Ie}from"./index-baa9c320.js";import{R as Oe}from"./index.esm-fe25f88f.js";import{F as ze}from"./index.esm-96c5d233.js";import{o as Y,u as Pe}from"./user-miners-query-20ebcc34.js";import{r as de,o as be,u as Be}from"./tools-query-a8c30530.js";import{o as we,u as Fe}from"./lands-query-bbc909a7.js";import{o as Ge,u as Ne}from"./lands-query-2cc91c75.js";import{g as ye,s as U,u as E}from"./showTlmValueFromMine-b723eef6.js";import{o as Qe,u as Ue}from"./get-user-settings-assets-query-3f1ce9e6.js";import{u as _e}from"./use-media-184b6495.js";import{o as qe,a as Ke,b as He,g as Ye,u as Ze,c as Xe}from"./use-transaction-dc9a5b45.js";import{f as We,o as Je,g as et,e as tt,u as nt}from"./execute-mine-tool-contract-72bee7b8.js";import{f as at}from"./format-currency-usd-c3f487ff.js";import{f as z}from"./formatNumber-be910684.js";import{d as A,c as Z,a as k}from"./mineCooldown-f9d8a9df.js";import{u as it}from"./use-ual-1f6e50f5.js";import{c as P,a as B}from"./calculateShardsByLand-d459ac04.js";import{s as $}from"./sleep-da79c358.js";import{e as ot,a as je}from"./execute-claim-contract-de6a33c2.js";import{o as rt}from"./toolov-query-b13f75c9.js";import{u as pe}from"./index-50a7609c.js";import{v as ct}from"./v4-4a60fe23.js";import"./iconBase-574fbd41.js";import"./axios-45629df5.js";import"./lands-c18efc59.js";import"./index-c19da194.js";import"./index-e99e37ef.js";const st=f("div",{d:"flex",align:"center",justify:"center",direction:"column",my:"auto","@sm":{ml:"auto",my:"auto"}}),lt=f("div",{d:"flex",align:"center",justify:"center",direction:"column",cursor:"pointer",mr:"auto",position:"relative"}),dt=f("img",{w:"100%",h:"60px",mb:"10px",objectFit:"contain","@sm":{w:"80px",h:"80px"}}),pt=f("div",{d:"flex",align:"center",justify:"center",zIndex:3,position:"absolute",bottom:"-10px",left:"0px",w:"30px",h:"30px",br:"10px","-webkit-text-stroke":"1px white",letterSpacing:"1px",color:"#00D1FF",fw:"900",fs:"20px",ff:"$heading",border:"2px solid white",background:"#D9D9D9",backdropFilter:"blur(15px)"}),xt=f("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"100%","@sm":{d:"none"}}),mt=f("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",mb:"10px",minW:"200px",w:"100%"}),ft=f("div",{d:"flex",align:"center",justify:"center",position:"relative",boxShadow:"2px 2px 10px #000000",w:"100%",h:"10px",br:"3px",bg:"#595959"}),gt=f("div",{d:"flex",align:"center",justify:"center",position:"absolute",left:"0px",maxW:"200px",h:"10px",br:"3px",bg:"linear-gradient(90deg, #07A3DD 0%, rgba(0, 186, 255, 0.5) 100%)","&::after":{content:"",position:"absolute",right:"-2px",h:"14px",w:"7px",br:"50%",bg:"$white500",filter:"blur(2px)"}}),ut=f("div",{d:"flex",align:"center",justify:"center",direction:"column",ff:"$heading",fw:"$thin",fs:"12px",color:"$white500","@md":{ml:"auto",fs:"10px"}}),ht=f("div",{d:"flex",align:"center",justify:"space-between",w:"100%","@md":{fs:"12px"}}),bt=f("button",{d:"flex",align:"center",justify:"center",ff:"$body",fs:"14px",fw:"$normal",color:"$red500",cursor:"pointer","&:hover":{textShadow:"1px 1px 2px red"},"@md":{fs:"12px"}}),wt=()=>{const n=fe(),{data:t}=Ce(),i=I(l=>l.user),{unAuthorize:e}=it(),{isSmall:r}=_e(),s=t==null?void 0:t.find(l=>l.level===(i==null?void 0:i.level)),p=((i==null?void 0:i.experience)??0)/((s==null?void 0:s.xp_to_level_up)??100)*100;return a.jsxs(st,{children:[a.jsx(lt,{onClick:()=>n(r?"/user-settings":"/menu"),children:a.jsx(dt,{src:"/assets/icons/logo.webp",alt:"avatar icon"})}),a.jsxs(xt,{children:[a.jsxs(mt,{children:[a.jsx(pt,{children:(i==null?void 0:i.level)??1}),a.jsx(ft,{children:a.jsx(gt,{style:{width:`${p}%`}})})]}),a.jsxs(ht,{children:[!r&&a.jsx(bt,{onClick:e,children:"Logout"}),a.jsxs(ut,{children:[(i==null?void 0:i.experience)??0,"/",(s==null?void 0:s.xp_to_level_up)??100," ",!r&&"XP"]})]})]})]})},xe=async({mTools:n,miners:t,setExpireDate:i,setIsLoading:e,toolsLoaning:r,toolsWallets:s,updateIsCalculating:p,user:l,ual:o,updateAuth:_})=>{if(!l)return null;e(!0),p(!0);try{if(!await ot(l))throw new Error("MINE error from contract");await U(l==null?void 0:l.name)}catch(g){console.log(g)}finally{await $(800),p(!1),await O({miners:t,mTools:n,setExpireDate:i,toolsLoaning:r,toolsWallets:s,user:l}),await _(o),e(!1)}},yt=async({setIsLoading:n,updateIsCalculating:t,user:i,miners:e,nonce:r,updateHashExpire:s,mTools:p,setExpireDate:l,toolsLoaning:o,toolsWallets:_})=>{var g;n(!0);try{await we(),t(!0),await $(500);const[[h,c]]=ge.getQueriesData(ue.LANDS),x=(g=c.highestValue)==null?void 0:g.asset_id;if(!i||!x)return null;if(!(r!=null&&r.rand_str)){await ye();const u=new Date;s(u.setMinutes(u.getMinutes()+1))}await je(i,x)&&(await U(i==null?void 0:i.name),await O({miners:e,mTools:p,setExpireDate:l,toolsLoaning:o,toolsWallets:_,user:i}))}catch(h){console.log(h)}finally{t(!1),n(!1)}},N=({delay:n,tools:t,miners:i,setExpireDate:e})=>{var l,o,_,g,h,c,x,d,u;const r=(n??0)/10;if(((l=t==null?void 0:t.userTools)==null?void 0:l.length)===1){const T=r*(((_=(o=t==null?void 0:t.userTools)==null?void 0:o[0])==null?void 0:_.delay)??0);return A(T,t,i,e)}const s=(g=t==null?void 0:t.userTools)==null?void 0:g.sort((T,b)=>b.delay-T.delay);if(((h=t==null?void 0:t.userTools)==null?void 0:h.length)===2){const T=r*((((c=s==null?void 0:s[0])==null?void 0:c.delay)??0)+(((x=s==null?void 0:s[1])==null?void 0:x.delay)??0)/2);return A(T,t,i,e)}const p=r*((((d=s==null?void 0:s[0])==null?void 0:d.delay)??0)+(((u=s==null?void 0:s[1])==null?void 0:u.delay)??0));return A(p,t,i,e)},Q=({landsType:n,favorites:t,user:i,tools:e,miners:r,setExpireDate:s})=>{var g,h;if(!n||!(t!=null&&t.favoriteLands))return null;let p=[];const l=t==null?void 0:t.favoriteLands.filter(([c])=>Z(k(N({delay:c.delay,miners:r,setExpireDate:s,tools:e})))==="MINE");if(l.length>0)p=l;else{const c=Math.min(...t.favoriteLands.map(([d])=>k(N({delay:d.delay,miners:r,setExpireDate:s,tools:e})).difference));p=t.favoriteLands.filter(([d])=>k(N({delay:d.delay,miners:r,setExpireDate:s,tools:e})).difference===c)}if((i==null?void 0:i.miningType)==="orange"){const c=Math.max(...p.map(([d])=>P({land:d})));return{...(g=p.filter(([d])=>P({land:d})===c).flatMap(([d])=>d).sort((d,u)=>B({landCardId:u.cardid,landsType:n,userTools:e==null?void 0:e.userTools})-B({landCardId:d.cardid,landsType:n,userTools:e==null?void 0:e.userTools})))==null?void 0:g[0]}}const o=Math.max(...p.map(([c])=>B({landCardId:c.cardid,landsType:n,userTools:e==null?void 0:e.userTools})));return{...(h=p.filter(([c])=>B({landCardId:c.cardid,landsType:n,userTools:e==null?void 0:e.userTools})===o).sort(([c],[x])=>P({land:x})-P({land:c})).flatMap(([c])=>c))==null?void 0:h[0]}},_t=async({setIsLoading:n,user:t,updateIsCalculating:i,miners:e,mTools:r,toolsLoaning:s,toolsWallets:p,setExpireDate:l,favorites:o,landsType:_,tools:g})=>{n(!0);try{i(!0),await $(500);const h=Q({favorites:o,landsType:_,tools:g,user:t,miners:e,setExpireDate:l});if(!t)return null;await je(t,h==null?void 0:h.assetId)&&(await U(t==null?void 0:t.name),await O({miners:e,mTools:r,toolsLoaning:s,toolsWallets:p,setExpireDate:l,user:t}))}catch(h){console.log(h)}finally{i(!1),n(!1)}},X=async()=>{await qe(),await Y(),await Ke(),await He(),await rt(),await Je()},W=({toolsLoaning:n,user:t,mTools:i,toolsWallets:e,miners:r,setExpireDate:s})=>{if(!n||!i)return null;const p=n==null?void 0:n.toolsOv.filter(c=>{var d;const x=c.owned>0&&(c.tool_name==="Certified Kol Digger"?!0:c.allowed===1)&&We((t==null?void 0:t.total_points)??0,c);return((e==null?void 0:e.tempid_allow_list.length)??0)===0?x:x&&((d=e==null?void 0:e.tempid_allow_list)==null?void 0:d.some(u=>u===c.template_id))}).map(c=>{if(c.tool_name==="Certified Kol Digger"){const d=i==null?void 0:i.reduce((u,T)=>{const b=Number(new Date(u.readyat));return Number(new Date(T.readyat))<b?T:u},i[0]);return{...d,last_use:+new Date(`${d.readyat}.000Z`)/1e3-d.cooldown_seconds}}const x=n.stakedTools.find(d=>d.template_id===c.template_id);return{...c,...x,last_use:+new Date(`${c.readyat}.000Z`)/1e3-c.cooldown_seconds}}),l=p==null?void 0:p.filter(c=>{const x=(c.tool_name==="Certified Kol Digger"?500:c.cooldown_seconds)*1.6;return Z(k(A(x,{userTools:[c],allData:[]},r)))==="MINE"});let o=null;l.length>0?o=l.sort((c,x)=>de[c.rarity]-de[x.rarity]||x.mining_power-c.mining_power)[0]:o=p==null?void 0:p.reduce((c,x)=>{const d=(c.tool_name==="Certified Kol Digger"?500:c.cooldown_seconds)*1.6,T=+A(d,{userTools:[c],allData:[]},r),b=(x.tool_name==="Certified Kol Digger"?500:x.cooldown_seconds)*1.6,M=+A(b,{userTools:[x],allData:[]},r);return M<T?{...x,cooldownSec:M}:{...c,cooldownSec:T}},p[0]);const _=(o.tool_name==="Certified Kol Digger"?500:o.cooldown_seconds)*1.5,h=A(_,{userTools:[o],allData:[]},r);return s(h),o},jt=async({setIsLoading:n,user:t,updateIsCalculating:i,mTools:e,tools:r,updateMineButtonLoading:s,miners:p,toolsLoaning:l,setExpireDate:o,toolsWallets:_})=>{var g,h;n(!0);try{const c=W({miners:p,toolsLoaning:l,mTools:e,setExpireDate:o,toolsWallets:_,user:t});if(!c||!t||!e)return;await we(),i(!0),await $(500);let x=0,d,u=[];if(c.tool_name==="Certified Kol Digger"){const b=e==null?void 0:e.reduce((S,M)=>{const q=Number(new Date(S.readyat));return Number(new Date(M.readyat))<q?M:S},e[0]);x=b.asset_ids.length*c.pow,u=b.asset_ids.map(S=>Number(S)),d="1099512958237"}else{const[b]=await Ye(`${c.template_id}`);x=b.pow,u=[b.next_asset_id];let S;try{[[,S]]=ge.getQueriesData([ue.LANDS,"red",c])}catch{S=await et(c)}d=(g=S.highestValue)==null?void 0:g.asset_id}await tt({user:t,difficulty:x,assets_ids:u,land_asset_id:d,old_bag_assets_ids:((h=r==null?void 0:r.userTools)==null?void 0:h.map(b=>Number(b.asset_id)))??[]})&&(await U(t==null?void 0:t.name),await X())}catch(c){console.log(c)}finally{s(!1),i(!1),n(!1)}},O=async({user:n,mTools:t,toolsLoaning:i,toolsWallets:e,miners:r,setExpireDate:s})=>{if(await Y(),await be(),(n==null?void 0:n.miningType)==="red"){await X(),await $(500),W({miners:r,toolsLoaning:i,mTools:t,setExpireDate:s,toolsWallets:e,user:n});return}},H=({toolCooldown:n,updateMineCooldown:t})=>{const i=Z(n);return t(i),i},Tt=async()=>{await be(),await Ge(),await Y(),await Qe()},vt=async({isSmall:n})=>{const t=new Audio("https://play.alienworlds.io/sounds/aw-mining-claim-sfx-02.mp3");n&&await $(1e3),t.play()},St=({isDisableToMine:n,nonce:t,toolCooldown:i,updateMineCooldown:e})=>n?a.jsx("span",{style:{fontSize:"15px"},children:"Membership"}):t!=null&&t.rand_str&&H({toolCooldown:i,updateMineCooldown:e})==="MINE"?"Submit":H({toolCooldown:i,updateMineCooldown:e}),Mt=({isDisableToMine:n,user:t,toolsWallets:i})=>{var e;return n?"Not a Member":(t==null?void 0:t.miningType)==="green"?"Favorites (shards)":(t==null?void 0:t.miningType)==="orange"?"Favorites (TLM)":(t==null?void 0:t.miningType)==="gold"?"Mining":(t==null?void 0:t.miningType)==="blue"?"Mine Maximizer":(t==null?void 0:t.miningType)==="red"?`Deposit: ${le(i==null?void 0:i.deposit).toFixed(4)} TLM`:`Deposit: ${(le((e=t==null?void 0:t.HqMember)==null?void 0:e.deposit)+((t==null?void 0:t.tlm_deposit)??0)/1e4).toFixed(4)} TLM`},Dt=({isDisableToMine:n,user:t,miners:i,bestLand:e})=>n?"Become a member to use mine":(t==null?void 0:t.miningType)==="red"?"Tool Loaning":(t==null?void 0:t.miningType)==="gold"||(t==null?void 0:t.miningType)==="blue"?`${i!=null&&i.name?i==null?void 0:i.name:""}`:`${e!=null&&e.name?e==null?void 0:e.name:""}`,Et=async({isDisableToMine:n,user:t,navigate:i,isCalculating:e,nonce:r,updateIsCalculating:s,updateHashExpire:p,mTools:l,miners:o,setExpireDate:_,setIsLoading:g,tools:h,toolsLoaning:c,toolsWallets:x,updateMineButtonLoading:d,favorites:u,landsType:T,ual:b,updateAuth:S})=>{if(console.log(`buttonOnClick: ${n}`),n)return i("/membership");if((t==null?void 0:t.miningType)==="red")return await X(),jt({miners:o,mTools:l,setExpireDate:_,setIsLoading:g,tools:h,toolsLoaning:c,toolsWallets:x,updateIsCalculating:s,updateMineButtonLoading:d,user:t}),null;if(!(r!=null&&r.rand_str)&&!e){s(!0),((t==null?void 0:t.miningType)==="green"||(t==null?void 0:t.miningType)==="orange")&&await Tt(),await ye();const M=new Date;return p(M.setMinutes(M.getMinutes()+1)),null}return(t==null?void 0:t.miningType)==="blue"?(yt({miners:o,mTools:l,nonce:r,setExpireDate:_,setIsLoading:g,toolsLoaning:c,toolsWallets:x,updateIsCalculating:s,user:t,updateHashExpire:p}),null):(t==null?void 0:t.miningType)==="gold"?(xe({miners:o,mTools:l,setExpireDate:_,setIsLoading:g,toolsLoaning:c,toolsWallets:x,ual:b,updateAuth:S,updateIsCalculating:s,user:t}),null):(t==null?void 0:t.miningType)==="green"||(t==null?void 0:t.miningType)==="orange"?(_t({miners:o,mTools:l,setExpireDate:_,setIsLoading:g,toolsLoaning:c,toolsWallets:x,updateIsCalculating:s,user:t,favorites:u,landsType:T,tools:h}),null):xe({miners:o,mTools:l,setExpireDate:_,setIsLoading:g,toolsLoaning:c,toolsWallets:x,ual:b,updateAuth:S,updateIsCalculating:s,user:t})},Rt=({isCalculating:n,isLoading:t,minersLoading:i,toolLoading:e,toolCooldown:r,toolCooldownEqual0:s,isLoadingLand:p,isMineButtonLoading:l,userMiningTypeRed:o})=>n||t||i||e||!r||s||p||l||o,At=({user:n,setBestLand:t,favorites:i,landsType:e,tools:r,setExpireDate:s,miners:p})=>(n==null?void 0:n.miningType)==="gold"?"gradientYellow":(n==null?void 0:n.miningType)==="orange"?(t(Q({favorites:i,landsType:e,tools:r,user:n,setExpireDate:s,miners:p})),"gradientOrange"):(n==null?void 0:n.miningType)==="green"?(t(Q({favorites:i,landsType:e,tools:r,user:n,setExpireDate:s,miners:p})),"gradientGreen"):(n==null?void 0:n.miningType)==="blue"?"gradientBlue":(n==null?void 0:n.miningType)==="red"?"gradientRed":"gradientYellow",Ct=f("div",{d:"flex",align:"center",justify:"space-between",w:"100%",position:"relative",zIndex:20,bg:"$blue700"}),Vt=f("div",{d:"flex",align:"center",justify:"space-between",zIndex:20,w:"100%",px:"30px",h:"140px","@media(max-width:1224px)":{minW:"100%"},"@md":{px:"15px"},"@sm":{}}),Lt=f("div",{d:"flex",align:"center",justify:"center",gap:"20px",">a":{d:"flex",align:"center",justify:"center",svg:{h:"28px",w:"28px"}},svg:{color:"$white500",h:"22px",w:"22px"},zIndex:30,button:{"&:disabled":{opacity:.5}},"@sm":{order:-1,justify:"space-between",w:"max-content",button:{d:"none","&:last-of-type":{d:"flex",zIndex:2,svg:{h:"35px",w:"35px"}}}},"@xxsm":{">a":{top:"10px",position:"absolute"}}}),$t=Ve({"100%":{transform:"rotate(360deg)"}}),kt=f("button",{color:"$white500",svg:{ml:"10px",color:"$white500",w:"25px",h:"25px"},variants:{isLoading:{true:{pointerEvents:"none",opacity:"0.5",svg:{animation:`${$t} 1s linear`,animationIterationCount:"infinite"}},false:{pointerEvents:"all",opacity:"1"}}}}),It=f("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"3px",w:"100%",">button":{h:"30px",minW:"150px",fs:"20px"},span:{textTransform:"uppercase",color:"$white500",fs:"10px",fw:"$bold",ff:"$heading"},"@sm":{w:"max-content",position:"absolute",left:"50%",transform:"translateX(-50%)"}}),Ot=f("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"10px",width:"310px","@md":{width:"max-content",margin:"0",gap:"7px"},"@sm":{d:"none"}});f("button",{d:"flex",align:"center",justify:"center",ml:"10px"});const zt=f("div",{d:"flex",align:"flex-end",justify:"center",gap:"20px",mt:"20px"}),F=f("div",{d:"flex",align:"center",justify:"space-between",direction:"column",color:"$white500",w:"max-content",fs:"14px",svg:{w:"25px",h:"25px"}}),G=f("div",{d:"flex",align:"center",justify:"center",direction:"column",padding:"5px",w:"35px",h:"35px",border:"1px solid $white500",borderRadius:"$full"}),Pt=f("div",{d:"flex",align:"center",justify:"center",">button>div":{d:"flex",align:"center",justify:"center"},"@sm":{gap:"10px",">button>div":{direction:"column"}}}),Bt=f("div",{d:"flex",align:"center",justify:"center",gap:"5px",ml:"10px",fs:"20px",ff:"$body",color:"$white500",path:{fill:"$white500"}}),Ft=f("p",{ff:"$heading",fs:"20px",fw:"$bold",textShadow:"1px 1px 2px black",color:"$yellow500"}),me=w.lazy(()=>y(()=>import("./tlm-f618571d.js"),["assets/tlm-f618571d.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),Gt=w.lazy(()=>y(()=>import("./star-a42c5751.js"),["assets/star-a42c5751.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),Nt=w.lazy(()=>y(()=>import("./atom-9db8ac79.js"),["assets/atom-9db8ac79.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),Qt=w.lazy(()=>y(()=>import("./quest-e509a604.js"),["assets/quest-e509a604.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),Ut=w.lazy(()=>y(()=>import("./open-menu-00a70d09.js"),["assets/open-menu-00a70d09.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),qt=()=>{var ce,se;const n=v.useContext(Le.UALContext),{isSmall:t}=_e(),i=fe(),e=I(m=>m.user),{data:r,isLoading:s,isFetching:p}=Pe(),{data:l,isLoading:o,isFetching:_}=Be(),{data:g}=Ne(),{data:h,isLoading:c}=Fe(),{data:x}=Ue(),{data:d}=Ze(),{data:u,isLoading:T}=Xe(),{data:b}=nt(),S=I(m=>m.updateAuth),M=E(m=>m.nonce),q=E(m=>m.updateIsCalculating),J=E(m=>m.isMineButtonLoading),Te=E(m=>m.updateMineButtonLoading),ee=E(m=>m.isCalculating),te=E(m=>m.updateNonce),ne=E(m=>m.hashExpire),ve=E(m=>m.updateHashExpire),ae=E(m=>m.updateMineCooldown),K=$e(m=>m.currentWeek),[ie,R]=v.useState(new Date),[Se,Me]=v.useState(!1),[D,De]=v.useState(void 0),[C,oe]=v.useState(null),V=!(e!=null&&e.isMember)||(e==null?void 0:e.flagged);v.useEffect(()=>{let m=(r==null?void 0:r.delay)??0;if((e==null?void 0:e.miningType)==="blue"&&(m=15),((e==null?void 0:e.miningType)==="green"||(e==null?void 0:e.miningType)==="orange")&&C&&(m=C==null?void 0:C.delay),(e==null?void 0:e.miningType)==="red"){W({miners:r,mTools:b,setExpireDate:R,toolsLoaning:u,toolsWallets:d,user:e});return}N({delay:m,miners:r,setExpireDate:R,tools:l})},[e==null?void 0:e.miningType,r,C,b,l,u,d,e]),v.useEffect(()=>{const m=setInterval(()=>{const j=k(ie);De(j),((e==null?void 0:e.miningType)==="orange"||(e==null?void 0:e.miningType)==="green")&&oe(Q({favorites:x,landsType:g,setExpireDate:R,tools:l,user:e,miners:r})),(j==null?void 0:j.hours)===0&&(j==null?void 0:j.minutes)===0&&(j==null?void 0:j.seconds)===1&&vt({isSmall:t}),(j==null?void 0:j.hours)===0&&(j==null?void 0:j.minutes)===0&&(j==null?void 0:j.seconds)===0&&clearInterval(m)},1e3);return()=>clearInterval(m)},[ie,e==null?void 0:e.miningType,t,x,g,r,l,e]),v.useEffect(()=>{const m=setInterval(()=>{ne-new Date().getTime()<0&&te(void 0)},3e3);return()=>clearInterval(m)},[ne,te]),v.useEffect(()=>{setInterval(async()=>{await O({miners:r,mTools:b,setExpireDate:R,toolsLoaning:u,toolsWallets:d,user:e})},6e4)},[r,b,R,u,d,e]);const Ee=v.useMemo(()=>At({favorites:x,landsType:g,miners:r,setBestLand:oe,setExpireDate:R,tools:l,user:e}),[e==null?void 0:e.miningType]),re=Rt({isCalculating:ee,isLoading:Se,isLoadingLand:c,isMineButtonLoading:J,minersLoading:s,toolCooldown:!!D,toolCooldownEqual0:((D==null?void 0:D.seconds)??0)<0&&((D==null?void 0:D.minutes)??0)<0&&((D==null?void 0:D.hours)??0)<0,toolLoading:o,userMiningTypeRed:(e==null?void 0:e.miningType)==="red"?T:!1}),Re=V?!1:re,Ae=V?!1:re||H({toolCooldown:D,updateMineCooldown:ae})!=="MINE";return a.jsx(Ct,{children:a.jsxs(Vt,{children:[a.jsx(wt,{}),a.jsxs(Lt,{children:[a.jsx(kt,{disabled:!(e!=null&&e.member),onClick:()=>O({miners:r,mTools:b,setExpireDate:R,toolsLoaning:u,toolsWallets:d,user:e}),isLoading:p||_,children:a.jsx(ze,{})}),a.jsxs(It,{children:[a.jsx("span",{children:Mt({isDisableToMine:V,toolsWallets:d,user:e})}),a.jsx(ke,{onClick:()=>Et({favorites:x,isCalculating:ee,isDisableToMine:V,landsType:g,miners:r,mTools:b,navigate:i,nonce:M,setExpireDate:R,setIsLoading:Me,tools:l,toolsLoaning:u,toolsWallets:d,ual:n,updateAuth:S,updateIsCalculating:q,updateMineButtonLoading:Te,updateHashExpire:ve,user:e}),disabled:Ae,color:Ee,isLoading:Re,children:St({isDisableToMine:V,nonce:M,toolCooldown:D,updateMineCooldown:ae})}),a.jsx("span",{children:Dt({bestLand:C,isDisableToMine:V,miners:r,user:e})})]}),a.jsx("button",{onClick:()=>i("/user-settings"),children:a.jsx(Oe,{})}),a.jsx("button",{onClick:()=>i("/menu"),children:a.jsx(Ut,{})})]}),a.jsxs(Ot,{children:[a.jsxs(zt,{children:[a.jsxs(F,{children:[a.jsx(G,{children:a.jsx(Qt,{})}),z(((ce=e==null?void 0:e.userWeekly)==null?void 0:ce.total_quest_points)??0,1)]}),a.jsxs(F,{children:[a.jsx(G,{children:a.jsx(Gt,{})}),z((e==null?void 0:e.mcPoints)??0,1)]}),a.jsxs(F,{children:[a.jsx(G,{children:a.jsx(Nt,{color:"#F6A800"})}),z(((e==null?void 0:e.redeemable_points)??0)/10,1)]}),a.jsxs(F,{children:[a.jsx(G,{children:a.jsx(me,{})}),z(Number((se=e==null?void 0:e.userTlm)==null?void 0:se.balance)??0,1)]})]}),a.jsx(Pt,{children:a.jsx("button",{onClick:()=>i("/week-reward"),children:a.jsxs("div",{children:[a.jsx(Ft,{children:"Prize Pool"}),a.jsxs(Bt,{children:[at((K==null?void 0:K.initial_prize_pool_formatted)??0),a.jsx(me,{})]})]})})})]})]})})},Kt=f("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",minH:"100vh",bgSize:"cover !important",backgroundPosition:"top",bgRepeat:"no-repeat",bg:"$blue700",variants:{pathBG:{menu:{bg:"$blue700"},"about-us":{bgImage:"url(/assets/background/bg-login.jpeg)"},questing:{bgImage:"url(/assets/background/bg-quest.jpeg)"},"week-reward":{bgImage:"url(/assets/background/bg-week-rewards.jpeg)"},"mine-max":{bgImage:"url(/assets/background/mine-bg.jpeg)"},crowdfunding:{bgImage:"url(/assets/background/bg-crowdfunding.jpeg)",backgroundPosition:"center"},adventures:{bgImage:"url(/assets/background/bg-adventures.jpeg)"},news:{bgImage:"url(/assets/background/bg-news.jpeg)"}}}}),Ht=f("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",position:"relative",pb:"35px",minH:"calc(100vh - 290px)",w:"100%",variants:{pathBG:{referendums:{bg:"$blue700"},builder:{bgImage:"url(/assets/background/bg-content-mcp-builder.jpeg)",backgroundPosition:"center",bgRepeat:"no-repeat",bgSize:"cover"},"daily-rewards":{pb:"0px",bgImage:"url(/assets/background/bg-content-daily-rewards.webp)",backgroundPosition:"top 110px center",backgroundRepeat:"no-repeat",backgroundSize:"cover","@md":{backgroundPosition:"top 100px center"},"@sm":{backgroundPosition:"top  center"}},"about-us":{mt:"10px"},questing:{mt:"10px"},"user-settings":{mt:"10px"},"tool-tactician":{mt:"10px"},"week-reward":{mt:"10px"},"mine-max":{mt:"10px"},voting:{mt:"10px"},crowdfunding:{mt:"10px"},adventures:{mt:"10px"},news:{mt:"10px"},applications:{mt:"10px"},information:{mt:"10px"}}}}),Yt=f("nav",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",pb:"10px",mb:"20px",bg:"$blue700"}),Zt=f("nav",{d:"flex",align:"center",justify:"flex-start",maxW:"95%",w:"100%",py:"10px","@sm":{overflow:"auto"}}),Xt=f(he,{d:"flex",align:"center",justify:"center",padding:"10px 20px",fs:"20px",ff:"$heading",color:"$white500",textTransform:"uppercase",variants:{active:{true:{textDecoration:"underline",textDecorationColor:"$blue100",textDecorationThickness:"2px",textUnderlineOffset:"7px"}}}}),Wt=f("nav",{d:"flex",align:"center",justify:"flex-start",gap:"20px",padding:"10px 20px",bg:"rgba(255, 255, 255, 0.05)",br:"10px",maxW:"95%",w:"100%","@md":{flexWrap:"wrap"},"@sm":{d:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",align:"center",justify:"center",gap:"5px",bg:"$blue700"},"@xxsm":{gridTemplateColumns:"repeat(3, 100px)"}}),Jt=f(he,{d:"flex",align:"center",justify:"center",w:"130px",variants:{isDisabled:{true:{filter:"grayscale(1)",opacity:"0.5",pointerEvents:"none",cursor:"not-allowed"}}},"@sm":{d:"flex",align:"center",justify:"center",bg:"rgba(255, 255, 255, 0.05)",w:"100%",h:"100%"}}),en=f("button",{d:"flex",align:"center",justify:"flex-end",direction:"column",fs:"20px",ff:"$heading",color:"$white500",svg:{w:"50px",h:"35px"},span:{mt:"10px",fs:"12px",textTransform:"uppercase",ff:"$heading"},"@sm":{padding:"10px",svg:{w:"25px",h:"25px"}},"@xsm":{span:{mt:"5px",fs:"10px"}}}),tn=w.lazy(()=>y(()=>import("./gift-7644b0a3.js"),["assets/gift-7644b0a3.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),nn=w.lazy(()=>y(()=>import("./pickaxe-5c1b3dcd.js"),["assets/pickaxe-5c1b3dcd.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),an=w.lazy(()=>y(()=>import("./laserGun-d3da9d21.js"),["assets/laserGun-d3da9d21.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),on=w.lazy(()=>y(()=>import("./discord-d1473865.js"),["assets/discord-d1473865.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),rn=w.lazy(()=>y(()=>import("./rocket-edb89df6.js"),["assets/rocket-edb89df6.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),cn=w.lazy(()=>y(()=>import("./exclamation2-0c3a7e75.js"),["assets/exclamation2-0c3a7e75.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),sn=w.lazy(()=>y(()=>import("./trophy-c45cb69c.js"),["assets/trophy-c45cb69c.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),ln=w.lazy(()=>y(()=>import("./voting-d9375e91.js"),["assets/voting-d9375e91.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),dn=w.lazy(()=>y(()=>import("./calculation-ca4f70b9.js"),["assets/calculation-ca4f70b9.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),pn=w.lazy(()=>y(()=>import("./bulldozer-74a37a43.js"),["assets/bulldozer-74a37a43.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),xn=w.lazy(()=>y(()=>import("./news-37239f78.js"),["assets/news-37239f78.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),mn=w.lazy(()=>y(()=>import("./tutorial-2e387f4f.js"),["assets/tutorial-2e387f4f.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),fn=w.lazy(()=>y(()=>import("./membership-12aece05.js"),["assets/membership-12aece05.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),gn=w.lazy(()=>y(()=>import("./trilium-vault-321bfb6e.js"),["assets/trilium-vault-321bfb6e.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),un=w.lazy(()=>y(()=>import("./applications-5660ee47.js"),["assets/applications-5660ee47.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),hn=w.lazy(()=>y(()=>import("./mcp-builder-f3883780.js"),["assets/mcp-builder-f3883780.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),bn=w.lazy(()=>y(()=>import("./sponsor-be844044.js"),["assets/sponsor-be844044.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),wn=w.lazy(()=>y(()=>import("./aw-mining-bae907be.js"),["assets/aw-mining-bae907be.js","assets/index-baa9c320.js","assets/index-55fec1ff.css"])),L="#BBBBBB",yn=()=>{var l;const n=I(o=>o.user),t=pe(o=>o.currentMenu),i=pe(o=>o.updateCurrentMenu),e=v.useMemo(()=>{var o;return{play:[{path:"builder",title:"Builder",isDisabled:!(n!=null&&n.member),icon:a.jsx(hn,{})},{path:"adventures",title:"Adventures",isDisabled:!(n!=null&&n.member),icon:a.jsx(rn,{color1:n!=null&&n.member?"#00A3FF":L,color2:n!=null&&n.member?"#E75300":L})},{path:"questing",title:"Weekly Quests",isDisabled:!(n!=null&&n.member),icon:a.jsx(cn,{color:n!=null&&n.member?"#ff4f6b ":L})},{path:"week-reward",title:"Rewards",isDisabled:!(n!=null&&n.member),icon:a.jsx(sn,{color1:n!=null&&n.member?"#AC12AF":L,color2:n!=null&&n.member?"#AC12AF":L})},{path:"daily-rewards",title:"DAILY CLAIM",isDisabled:!(n!=null&&n.isMember),icon:a.jsx(v.Suspense,{children:a.jsx(tn,{})})},{path:"mine-max",title:"Mine Maximizer",icon:a.jsx(pn,{color1:"#00ADD3",color2:"#00ADD3"})},{path:"aw-mining",title:"Mining",icon:a.jsx(wn,{})},{path:"tool-loaning",title:"TOOL LOANING",isDisabled:!(n!=null&&n.isMember),icon:a.jsx(nn,{version:1})},{path:"emporium",title:"Zapp's",icon:a.jsx(an,{})},((o=n==null?void 0:n.playerSupport)==null?void 0:o.wallet)&&{path:"applications",title:"Applications",icon:a.jsx(un,{})}],tools:[{path:"voting",title:"Voting",isDisabled:!(n!=null&&n.member),icon:a.jsx(ln,{color:n!=null&&n.member?"#46C553":L})},{path:"trilium-vault",title:"Vault",icon:a.jsx(gn,{color:"#26d7ff"})},{path:"tool-tactician",title:"Tool Tactician",icon:a.jsx(dn,{color:"#FFC700"})}],more:[{path:"membership",title:"Membership",icon:a.jsx(fn,{color:"#57CE4C"})},{path:"information",title:"Tutorials",icon:a.jsx(mn,{color:"#EB7509"})},{path:"news",title:"News",icon:a.jsx(xn,{color:"#D32C54"})},{path:"sponsor-adventures",title:"Sponsor",icon:a.jsx(bn,{})},{path:"https://discord.gg/EmpMt7NDsV",isExternal:!0,title:"Discord",icon:a.jsx(on,{color:"#9563FF"})}]}},[n==null?void 0:n.member,(l=n==null?void 0:n.playerSupport)==null?void 0:l.wallet]),r=v.useMemo(()=>{switch(t){case"play":return e.play;case"tools":return e.tools;case"more":return e.more;default:e.play}},[t,e]),s=v.useMemo(()=>location.hash.replace("#/",""),[]);function p(o){i(o)}return a.jsx(Yt,{children:s==="menu"&&a.jsxs(a.Fragment,{children:[a.jsx(Zt,{children:Object.keys(e).map(o=>a.jsx(Xt,{onClick:()=>p(o),active:s==="menu"&&t===o,to:"menu",children:o},o))}),r&&a.jsx(Wt,{children:r==null?void 0:r.map(o=>a.jsx(Jt,{isDisabled:o==null?void 0:o.isDisabled,to:o==null?void 0:o.path,target:o!=null&&o.isExternal?"_blank":"_self",rel:o!=null&&o.isExternal?"noreferrer":"",children:a.jsxs(en,{children:[o==null?void 0:o.icon,a.jsx("span",{children:o==null?void 0:o.title})]})},ct()))})]})})};function Hn({children:n}){const t=Ie(),i=I(r=>r.user),e=v.useMemo(()=>t.pathname.replace("/",""),[t.pathname]);return a.jsxs(Kt,{pathBG:e,children:[a.jsxs(v.Suspense,{children:[i&&a.jsx(qt,{}),e==="menu"&&a.jsx(yn,{})]}),a.jsx(Ht,{pathBG:e,children:n})]})}export{Hn as default};
