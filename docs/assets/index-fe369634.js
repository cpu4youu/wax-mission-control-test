import{s as r,f as w,j as n,S as m,u as j,aF as y,b as $,R as l,t as i,B as u,h as T,aJ as v,k as L}from"./index-a74e6323.js";import{a as F}from"./index.esm-7b167616.js";const C=r("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",mt:"35px",w:"100%"}),D=r("h2",{d:"flex",align:"center",justify:"center",fs:"20px",mb:"15px",color:"$white500"}),x=r("p",{d:"flex",align:"center",justify:"flex-start",gap:"5px",mb:"5px",w:"100%",color:"$white500",ff:"$heading",fs:"20px","@sm":{flexWrap:"wrap"}}),f=r("span",{ff:"$heading",fw:"$bold",fs:"20px",variants:{color:{red:{color:"#E52251"},green:{color:"#00FF00"}}},"@sm":{fs:"16px"}}),R=r("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"25px",mt:"15px",w:"100%","@sm":{justify:"center"}}),h=r("div",{d:"flex",align:"flex-end",justify:"center",gap:"10px",w:"100%",">div":{w:"100%",label:{w:"100%",justifyContent:"left",mb:"5px"}},button:{align:"flex-end",w:"160px",minW:"unset",maxW:"90%",padding:"0",">div":{minH:"40px",border:"none"}}}),M=r("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"250px","&:has(input:disabled)":{label:{color:"$white800"}},"@md":{fs:"15px",maxW:"150px"}}),A=r("div",{d:"flex",align:"center",justify:"center",w:"100%",h:"100%",bg:"linear-gradient(0deg, rgba(255,255,255, 0.2), rgba(255,255,255, 0.2)), rgb(0, 0, 0, 0.3)",padding:"7px 15px",br:"10px",border:"1px solid",borderColor:"$white500","&:hover":{borderColor:"#FFA800",svg:{color:"#FFA800"}},"&:not(:has(input:placeholder-shown))":{borderColor:"#FFA800",svg:{color:"$blue100"}},"&:has(input[type=search])":{padding:"0px 10px"},"&:has(input:disabled)":{cursor:"not-allowed",borderColor:"$white800",svg:{color:"$white800"}},svg:{ml:"2px",color:"$white500"}}),S=r("label",{d:"flex",align:"center",justify:"center",w:"100%",fs:"22px",ff:"$heading",fw:"$bold",textShadow:" 0px 4px 4px rgba(0, 0, 0, 0.5)",outline:"none",color:"$white500",border:"none"}),k=r("input",{d:"flex",align:"center",justify:"center",h:"100%",w:"100%",bg:"transparent",border:"none",fs:"16px",ff:"$body",fw:"$normal",outline:"none",color:"$white500","&[type=number]::-webkit-inner-spin-button":{appearance:"none",background:"transparent url(/assets/icons/arrows.png) no-repeat center center ",position:"absolute",top:"0px",right:"0px",bottom:"0px",width:"10%",opacity:1},"&::placeholder":{color:"$white800"},"@sm":{"&[type=number]::-webkit-inner-spin-button":{width:"15px",h:"0px"}}}),b=w.forwardRef((e,o)=>{const{label:s,wrapperClassName:a,...t}=e;return n.jsxs(M,{className:a,children:[n.jsx(S,{htmlFor:"input",children:s}),n.jsxs(A,{children:[n.jsx(k,{...t,ref:o,id:(t==null?void 0:t.id)??"input",placeholder:(t==null?void 0:t.placeholder)??" "}),(t==null?void 0:t.type)==="search"&&n.jsx(F,{size:30})]})]})});async function B(e,o){const{executeTransaction:s}=j(),a=N(e,o);return!!await s(a)}function N(e,o){return{actions:[{account:m.ALIEN_WORLDS,name:"transfer",authorization:[{actor:e.name,permission:e.requestPermission}],data:{from:e.name,memo:"deposit",to:"tools.mc",quantity:`${o.toFixed(4)} TLM`}}]}}const q=()=>{const{data:e}=y(),o=$(c=>c.user),s=l.useRef(null),a=l.useRef(null),[t,d]=l.useState(!1);async function g(){var c;if(o){d(!0);try{await B(o,Number((c=s.current)==null?void 0:c.value))&&(await T(2e3),v(),L.success("Deposit successful"))}catch(p){console.error("Error staking tool",p)}finally{d(!1)}}}return n.jsxs(C,{children:[n.jsx(D,{children:"Deposited TLM"}),n.jsxs(x,{children:["Deposited TLM:"," ",n.jsxs(f,{color:i(e==null?void 0:e.deposit)>=0?"green":"red",children:[i(e==null?void 0:e.deposit)>=0?i(e==null?void 0:e.deposit).toFixed(4):`- ${i(e==null?void 0:e.trialtlm).toFixed(4)}`," ","TLM"," "]})]}),n.jsxs(x,{children:["Available TLM:"," ",n.jsxs(f,{color:i(e==null?void 0:e.deposit)>=0?"green":"red",children:[i(e==null?void 0:e.deposit).toFixed(4)," TLM"," "]})]}),n.jsxs(R,{children:[n.jsxs(h,{children:[n.jsx(b,{ref:s,label:"Deposit TLM"}),n.jsx(u,{isLoading:t,disabled:t,onClick:g,rounded:!1,color:"solidBlue",children:"Deposit"})]}),n.jsxs(h,{children:[n.jsx(b,{ref:a,label:"Withdraw TLM"}),n.jsx(u,{isLoading:t,disabled:t,onClick:()=>console.log("tool"),rounded:!1,color:"solidBlue",children:"Withdraw"})]})]})]})};export{q as default};
