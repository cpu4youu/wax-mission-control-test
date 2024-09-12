import{s as d,S as b,R as L,_ as E,b as $,c as G,r as z,j as n,f as I,B as p,n as D,o as U,A as k}from"./index-89d4724b.js";import{u as Z,a as J,b as K,f as B,e as X,o as Y,c as tt,d as nt}from"./format-date-to-iso-dde5a473.js";import{d as R,e as et,b as at}from"./use-transaction-203875d1.js";import{s as st}from"./sleep-da79c358.js";import{a as it}from"./mineCooldown-23412600.js";import{i as C}from"./index-50bd9b8f.js";import{i as ot}from"./index-8642e6ae.js";import"./user-miners-query-307a5653.js";import"./axios-43b00e28.js";import"./index-0afda3d2.js";const rt=d("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",w:"100%","@sm":{px:"0px"}}),ct=d("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),lt=d("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),dt=d("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"20px",w:"100%",maxWidth:"1330px",mt:"40px",px:"15px",bg:"rgba(3, 16, 32,  .55)",br:"22px",padding:"20px 35px","@sm":{padding:"20px"}}),h=d("div",{d:"grid",gridTemplateColumns:"2fr 1fr 2fr",gap:"15px",w:"100%",padding:"10px 40px ",br:"10px",bg:"rgba(255,255,255,0.03)",">div:nth-child(2)":{maxW:"180px"},"@sm":{d:"flex",align:"center",justify:"center",direction:"column",padding:"10px 10px ",maxH:"100%",button:{h:"30px",minW:"100%",maxW:"100%"}}}),w=d("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",color:"$white500",mr:"auto","@sm":{w:"100%",justify:"space-between",direction:"row"}}),j=d("div",{d:"flex",align:"flex-start",justify:"flex-start",ff:"$heading",fs:"14px",w:"100%","@md":{fs:"12px"},"@sm":{fs:"11px",fw:"$bold"}}),g=d("div",{d:"flex",align:"flex-start",justify:"flex-start",ff:"$heading",fs:"24px",w:"100%",svg:{m:"auto 5px",w:"20px",h:"20px"},"@md":{fs:"18px"},"@sm":{justify:"space-between",w:"max-content",fw:"$bold",fs:"12px",svg:{w:"15px",h:"15px"}}}),y=d("div",{d:"flex",align:"center",justify:"center",gap:"10px",padding:"5px 20px 5px 10px",w:"100%",svg:{color:"$white500",w:"25px",h:"25px",mr:"auto"},"@sm":{d:"none"}}),T=d("span",{w:"100%",color:"$white500",textAlign:"center",fs:"14px",ff:"$heading",svg:{verticalAlign:"sub",w:"23px",h:"23px"},"@lg":{fs:"12px"},"@md":{fs:"10px"},"@sm":{}});async function mt(t){const{executeTransaction:o}=R(),i=ut(t);return!!await o(i)}function ut(t){return{actions:[{account:b.M__FEDERATION,name:"claimcomms",authorization:[{actor:t.name,permission:t.authorization.permission}],data:{receiver:t.name}}]}}async function ft(t){const{executeTransaction:o}=R(),i=xt(t);return!!await o(i)}function xt(t){return{actions:[{account:b.AWLNDRATINGS,name:"claimpay",authorization:[{actor:t.name,permission:t.authorization.permission}],data:{receiver:t.name}}]}}async function pt(t,o,i){const{executeTransaction:s}=R(),c=ht(o,i,t);return!!await s(c)}function ht(t,o,i){return{actions:o.map(c=>({account:b.MISSION_CONTROL,name:"claimweek",authorization:[{actor:i.name,permission:i.authorization.permission}],data:{wallet:i.name,week_id:c,boost_percentage:t}}))}}async function wt(t,o){const{executeTransaction:i}=R(),s=jt(t,o);return!!await i(s)}function jt(t,o){return{actions:[{account:b.HQ_MU,name:"withdrawtlm",authorization:[{actor:t.name,permission:t.authorization.permission}],data:{wallet:t.name}},{account:b.MEMBERS_MC,name:"withdrawdepo",authorization:[{actor:t.name,permission:t.authorization.permission}],data:{wallet:t.name,amount:o}}]}}const gt={addTLM:!1,withdrawTLM:!1,claimTLM:!1,claimMines:!1,claimComms:!1,claimPay:!1,weekReward:!1},_=L.lazy(()=>E(()=>import("./info-builder-ef74074f.js"),["assets/info-builder-ef74074f.js","assets/index-89d4724b.js","assets/index-55fec1ff.css"])),M=L.lazy(()=>E(()=>import("./tlm-fb2f329b.js"),["assets/tlm-fb2f329b.js","assets/index-89d4724b.js","assets/index-55fec1ff.css"])),yt=L.lazy(()=>E(()=>import("./star-bc84bcf0.js"),["assets/star-bc84bcf0.js","assets/index-89d4724b.js","assets/index-55fec1ff.css"])),Dt=()=>{var S,W;const t=$(e=>e.user),o=$(e=>e.updateMember),i=G(e=>e.weeklies);Z();const{data:s}=et(),{data:c}=J(),{data:m}=K(),[r,l]=L.useState(gt),[P,O]=L.useState(""),v=i==null?void 0:i.reduce((e,a)=>{const x=((a==null?void 0:a.initial_prize_pool_formatted)??0)*((a==null?void 0:a.total_quest_points)??1)/((a==null?void 0:a.total_quest_points_week)??1);return a.week_id&&a.total_quest_points_user_week>0&&C(new Date,new Date(a==null?void 0:a.expiresDate))&&ot(new Date,new Date((a==null?void 0:a.end_date)??""))?{total:e.total+x,weeks:[...e.weeks,a.week_id]}:{total:e.total,weeks:[...e.weeks]}},{total:0,weeks:[]});async function F(){if(t){l({...r,claimMines:!0});try{if(!await X(t))throw new Error("Claim Mines error from contract");await f()}catch(e){console.log(e)}finally{l({...r,claimMines:!1})}}}async function N(){if(t){l({...r,claimComms:!0});try{if(!await mt(t))throw new Error("Claim Comms error from contract");await f()}catch(e){console.log(e)}finally{l({...r,claimComms:!1})}}}async function V(){if(t){l({...r,claimPay:!0});try{if(!await ft(t))throw new Error("Claim Pay error from contract");await f()}catch(e){console.log(e)}finally{l({...r,claimPay:!1})}}}async function q(){if(t){l({...r,weekReward:!1});try{if(!await pt(t,0,v.weeks))throw new Error("Week Reward error from contract");await f(),await U()}catch(e){console.log(e)}finally{l({...r,weekReward:!1})}}}async function f(){if(!(t!=null&&t.name))return null;await st(500);const e=await k(t==null?void 0:t.name);$.setState(a=>({...a,user:a.user?{...a.user,userTlm:e}:null})),await o(),await Y(),await at(),await tt(),await nt()}async function H(e){if(t){l({...r,withdrawTLM:!0});try{if(!await wt(t,e))throw new Error("Withdrawn TLM error from contract");await f()}catch(a){console.log(a)}finally{l({...r,withdrawTLM:!1})}}}const Q=e=>{const a=e.days?`${e.days}d`:"",x=e.hours?`${e.hours}h`:"",A=e.minutes?`${e.minutes}m`:"";return`${a}${x}${A}${e.seconds}s`},u=z.useMemo(()=>new Date((s==null?void 0:s.timestamp)||new Date),[s==null?void 0:s.timestamp]);return z.useEffect(()=>{const e=setInterval(()=>{const a=new Date(`${B(u)}`),x=it(a),A=Q(x);O(A)},1e3);return()=>clearInterval(e)},[u]),n.jsxs(rt,{children:[n.jsxs(ct,{children:[n.jsx(lt,{children:"The Vault"}),n.jsx("img",{src:"/assets/background/bg-the-vault.webp",alt:""})]}),n.jsxs(dt,{children:[n.jsxs(h,{children:[n.jsxs(w,{children:[n.jsx(j,{children:"Deposited TLM"}),n.jsxs(g,{children:[(I((S=t==null?void 0:t.HqMember)==null?void 0:S.deposit)+((t==null?void 0:t.tlm_deposit)??0)/1e4).toFixed(4),n.jsx(M,{})]})]}),n.jsx(p,{rounded:!1,color:"solidBlue",isLoading:r.withdrawTLM,disabled:I((W=t==null?void 0:t.HqMember)==null?void 0:W.deposit)+((t==null?void 0:t.tlm_deposit)??0)/1e4===0,onClick:()=>H((t==null?void 0:t.tlm_deposit)??0),children:"Withdraw"}),n.jsxs(y,{children:[n.jsx(_,{}),n.jsx(T,{children:"Deposits are currently unused"})]})]}),n.jsxs(h,{children:[n.jsxs(w,{children:[n.jsx(j,{children:"Alien Worlds Mining Rewards"}),n.jsxs(g,{children:[(s==null?void 0:s.amount.replace(" TLM",""))??"0.0000"," ",n.jsx(M,{})]})]}),n.jsx(p,{isLoading:r.claimMines,disabled:((s==null?void 0:s.amount)??0)===0||C(D,u),onClick:F,rounded:!1,color:"solidBlue",children:C(D,u)?P:"Claim"}),n.jsxs(y,{children:[n.jsx(_,{}),n.jsxs(T,{children:["Earned by mining in Alien Worlds",C(D,u)&&n.jsxs(n.Fragment,{children:[n.jsx("br",{}),`Available on ${new Date(`${B(u)}.000Z`).toLocaleString()}`]})]})]})]}),n.jsxs(h,{children:[n.jsxs(w,{children:[n.jsx(j,{children:"Alien Worlds Land Commission"}),n.jsxs(g,{children:[(c==null?void 0:c.comms.replace(" TLM",""))??"0.0000"," ",n.jsx(M,{})]})]}),n.jsx(p,{isLoading:r.claimComms,disabled:((c==null?void 0:c.comms)??0)===0,onClick:N,rounded:!1,color:"solidBlue",children:"Claim"}),n.jsxs(y,{children:[n.jsx(_,{}),n.jsx(T,{children:"Earned by mining in Alien Worlds"})]})]}),n.jsxs(h,{children:[n.jsxs(w,{children:[n.jsx(j,{children:"Alien Worlds DTAL"}),n.jsxs(g,{children:[(m==null?void 0:m.payoutAmount.replace(" TLM",""))??"0.0000"," ",n.jsx(M,{})]})]}),n.jsx(p,{isLoading:r.claimPay,disabled:((m==null?void 0:m.payoutAmount)??0)===0,onClick:V,rounded:!1,color:"solidBlue",children:"Claim"}),n.jsxs(y,{children:[n.jsx(_,{}),n.jsx(T,{children:"Earned daily by owning lands in Alien Worlds"})]})]}),n.jsxs(h,{children:[n.jsxs(w,{children:[n.jsx(j,{children:"Mission Control Weekly Rewards"}),n.jsxs(g,{children:[v.total.toFixed(4)," ",n.jsx(M,{})]})]}),n.jsx(p,{isLoading:r.weekReward,disabled:v.total===0,onClick:q,rounded:!1,color:"solidBlue",children:"Claim"}),n.jsxs(y,{children:[n.jsx(_,{}),n.jsxs(T,{children:["Earned by playing Mission Control, costs ",n.jsx(yt,{})," to claim"]})]})]})]})]})};export{Dt as default};