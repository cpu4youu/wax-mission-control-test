import{c as X,e as q,s,j as e,r as M,S as h,T as A,a as R,Q as C,q as $,i as ee,n as te,d as ne,p as b,B as L,u as B,R as re,_ as ie,b as k,f as N,h as Q,k as g}from"./index-afa3647c.js";import{A as O}from"./index.esm-e5b47879.js";import{S as se}from"./index-84116da4.js";import{H as G,a as oe,b as ae}from"./index.esm-ada6ecaa.js";import{N as S}from"./index-97ea0573.js";import{d as de}from"./index-2f96f883.js";import{G as le}from"./gradient-border-72feb832.js";import"./index.esm-20d48b9c.js";import"./index-aedd2231.js";import"./index-40467727.js";import"./index-2fdfe666.js";import"./index.esm-dbcdbb09.js";import"./index-ea76b77d.js";import"./index-9b549c9a.js";const p=X((t,r)=>({selectedCrowdfunding:void 0,updateSelectedCrowdfunding:o=>ce(t,o),crowdfundingType:"list",updateCrowdfundingType:o=>ue(t,o),filterList:{value:"new",label:"Newest"}}));function ce(t,r){t(o=>({...o,selectedCrowdfunding:r}))}function ue(t,r){t(o=>({...o,crowdfundingType:r}))}const pe=q({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),xe=s("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1190px",padding:"0 15px",".select":{m:"10px auto 10px 0"},"@sm":{".select":{w:"100%",button:{minW:"100%"}}}}),fe=s("h2",{d:"flex",align:"center",justify:"center",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.9)",fs:"40px",w:"100%",mt:"60px","@sm":{mt:"0px",fs:"26px"}}),ge=s("div",{d:"flex",align:"center",justify:"center",gap:"20px",w:"100%",mt:"20px",padding:"20px",border:"1px solid rgba(0, 0, 0, 0.4)",br:"13px",bg:"$blue100",svg:{color:"$white500",w:"25px",h:"25px",mr:"auto"},"@sm":{d:"none"}}),me=s("span",{w:"100%",color:"$white500",textAlign:"center",fs:"14px",fw:"$bold",ff:"$heading","@lg":{fs:"12px"},"@md":{fs:"10px"},"@sm":{}}),we=s("div",{d:"flex",align:"center",justify:"center",gap:"10px",">button":{h:"50px",minW:"240px"},"@sm":{direction:"column",my:"10px",">button":{order:-1}}}),he=s("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",gap:"20px",pr:"20px",overflowY:"auto",w:"100%","@sm":{pr:"5px"}}),Ce=s("div",{d:"flex",align:"flex-start",justify:"space-between",gap:"30px",w:"100%",br:"10px",background:"rgba(3, 16, 32, 0.65)",padding:"20px","@sm":{align:"flex-start",justify:"flex-start"},"@xsm":{direction:"column"}}),be=s("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column"}),je=s("h3",{fs:"24px",color:"$white500",mb:"10px"}),ye=s("p",{color:"$white500",ff:"$heading",fs:"20px",overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":6,whiteSpace:"pre-wrap","@sm":{fs:"16px",mb:"auto"}}),ve=s("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"15px",minW:"230px",">button":{h:"50px",minW:"170px"},"@sm":{minW:"unset"},"@xsm":{w:"100%",">button":{w:"100%",minW:"100%"}}}),H=s("div",{d:"flex",align:"center",gap:"20px",w:"100%",color:"$white500",ff:"$heading",fs:"20px","@sm":{fs:"16px",gap:"10px",svg:{w:"35px",h:"35px"}}}),_e=s("div",{mt:"30px",w:"100%",height:"450px",background:"linear-gradient( -90deg, rgba(3, 16, 32, 0.40), rgba(3, 16, 32, 0.75) ,rgba(3, 16, 32, 0.40))",br:"10px",backgroundSize:"400% 400%",animation:`${pe} 1.2s ease-in-out infinite`}),Z=()=>e.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22ZM4.39446 22C4.39446 31.7233 12.2767 39.6055 22 39.6055C31.7233 39.6055 39.6055 31.7233 39.6055 22C39.6055 12.2767 31.7233 4.39446 22 4.39446C12.2767 4.39446 4.39446 12.2767 4.39446 22Z",fill:"#212121"}),e.jsx("path",{d:"M39.4753 12.6853C40.5462 12.1145 40.9604 10.7761 40.2857 9.76751C38.006 6.35963 34.8098 3.64352 31.0458 1.94572C26.6116 -0.0543811 21.6395 -0.52848 16.9073 0.597567C12.175 1.72361 7.94937 4.38631 4.89126 8.1692C1.83315 11.9521 0.115013 16.6419 0.00556893 21.505C-0.103875 26.3682 1.40154 31.1305 4.28638 35.0471C7.17122 38.9638 11.2728 41.8139 15.9496 43.1517C20.6264 44.4895 25.6148 44.2395 30.1344 42.4409C33.971 40.9142 37.2862 38.3446 39.7169 35.0427C40.4363 34.0655 40.0827 32.7098 39.0386 32.0914C37.9945 31.473 36.657 31.8286 35.9134 32.7876C33.9952 35.2616 31.4428 37.1906 28.5096 38.3579C24.8927 39.7972 20.9008 39.9972 17.1582 38.9267C13.4155 37.8561 10.1332 35.5753 7.82464 32.441C5.51605 29.3067 4.31133 25.4956 4.39891 21.6039C4.4865 17.7121 5.86144 13.9591 8.3087 10.9319C10.756 7.90461 14.1375 5.77378 17.9245 4.87266C21.7115 3.97154 25.6904 4.35094 29.2389 5.95152C32.1166 7.24957 34.5797 9.29143 36.3846 11.8492C37.0843 12.8407 38.4044 13.2561 39.4753 12.6853Z",fill:"#00BAFF"}),e.jsx("g",{style:{mixBlendMode:"multiply"},children:e.jsx("path",{d:"M4.39941 21.9936C4.39941 12.2733 12.2792 4.39355 21.9994 4.39355C31.7196 4.39355 39.5994 12.2733 39.5994 21.9936C39.5994 31.7138 31.7196 39.5936 21.9994 39.5936C12.2792 39.5936 4.39941 31.7138 4.39941 21.9936Z",fill:"#306B81"})}),e.jsx("path",{d:"M10.9729 26.6221V19.5781H7.44487V17.9821H16.0849V19.5781H12.5689V26.6221H10.9729ZM16.9943 26.6221V17.9701H18.5783V25.0261H25.6343V26.6221H16.9943ZM26.3339 26.6221V17.9821H28.0739L31.2059 21.7141L34.3259 17.9821H36.0779V26.6221H34.4819V20.2861L31.2059 24.1861L27.9179 20.2981V26.6221H26.3339Z",fill:"white"})]}),Y=()=>e.jsxs("svg",{width:"51",height:"48",viewBox:"0 0 51 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{id:"Frame",children:e.jsx("path",{id:"Vector",d:"M17.9319 16.7894L17.9271 16.7931L17.9226 16.7972L17.9319 16.7894ZM39.0112 16.4163C38.8639 16.2822 38.7004 16.1649 38.5241 16.0667C38.2746 15.928 37.9977 15.8392 37.7104 15.8056C37.4231 15.772 37.1316 15.7945 36.8538 15.8715C36.576 15.9486 36.318 16.0787 36.0956 16.2537C35.8731 16.4287 35.6911 16.6449 35.5607 16.889C34.8312 18.2464 33.8252 19.4544 32.6002 20.4437C32.7875 19.4469 32.882 18.4365 32.8825 17.4241C32.8864 14.3443 32.0262 11.3186 30.3893 8.65486C28.7524 5.99117 26.3974 3.78471 23.564 2.26013C23.2519 2.09303 22.8999 2.00355 22.5412 2.0001C22.1824 1.99665 21.8286 2.07935 21.5129 2.24042C21.1973 2.40149 20.9301 2.63566 20.7365 2.92095C20.5429 3.20625 20.4292 3.53332 20.4062 3.87147C20.2877 5.76782 19.7627 7.62171 18.8632 9.32081C17.9637 11.0199 16.7083 12.5288 15.1731 13.7562L14.685 14.1312C13.0797 15.1514 11.6587 16.409 10.4766 17.8558C8.63919 20.042 7.36633 22.6025 6.75902 25.3342C6.1517 28.0658 6.22663 30.8936 6.97785 33.5931C7.72908 36.2927 9.13594 38.7899 11.0869 40.8865C13.0378 42.9832 15.4792 44.6218 18.2173 45.6722C18.5388 45.7963 18.8877 45.8438 19.2332 45.8104C19.5787 45.777 19.9102 45.6638 20.1984 45.4809C20.4867 45.2979 20.7228 45.0508 20.886 44.7612C21.0492 44.4717 21.1345 44.1487 21.1343 43.8207C21.1328 43.6085 21.0972 43.3978 21.0288 43.1957C20.555 41.5137 20.4186 39.7629 20.6266 38.0336C22.6304 41.603 25.8469 44.4323 29.7589 46.0668C30.2364 46.2685 30.7763 46.2957 31.2738 46.1429C34.3646 45.2007 37.149 43.5278 39.3624 41.283C41.5758 39.0383 43.1448 36.2963 43.9201 33.3175C44.6954 30.3388 44.6514 27.2223 43.7922 24.2642C42.933 21.3061 41.2872 18.6045 39.0112 16.4163ZM30.7422 42.0785C28.8963 41.1949 27.268 39.9544 25.963 38.4374C24.6581 36.9205 23.7058 35.1611 23.1681 33.2738C23.0039 32.6383 22.8769 31.9947 22.7876 31.346C22.7271 30.9329 22.5315 30.548 22.228 30.2451C21.9245 29.9422 21.5283 29.7364 21.0949 29.6566C20.9614 29.6317 20.8257 29.6193 20.6896 29.6195C20.3174 29.6194 19.9517 29.7119 19.6295 29.8878C19.3073 30.0638 19.0398 30.3168 18.8542 30.6215C17.0971 33.4837 16.2135 36.7496 16.3012 40.057C14.7559 38.9222 13.4643 37.5091 12.5015 35.8994C11.5386 34.2897 10.9237 32.5156 10.6922 30.6798C10.4607 28.844 10.6172 26.9831 11.1529 25.2049C11.6885 23.4267 12.5924 21.7665 13.8124 20.3207C14.7387 19.1844 15.8561 18.1993 17.1201 17.4047C17.1749 17.3713 17.2274 17.3348 17.2773 17.2953C17.2773 17.2953 17.9057 16.8043 17.9271 16.7931C20.9441 14.383 23.0899 11.1441 24.0656 7.52774C26.3729 9.5422 27.9114 12.2198 28.4422 15.1448C28.9731 18.0697 28.4665 21.0784 27.0011 23.7035C26.8075 24.0538 26.7281 24.4504 26.7729 24.8433C26.8177 25.2362 26.9847 25.6077 27.2528 25.9111C27.5209 26.2145 27.8781 26.436 28.2794 26.5479C28.6807 26.6597 29.108 26.6568 29.5076 26.5395C32.7513 25.5792 35.6058 23.7034 37.6866 21.1645C38.9371 22.9091 39.7548 24.8977 40.0784 26.9822C40.4021 29.0667 40.2236 31.1934 39.5561 33.2036C38.8886 35.2139 37.7494 37.056 36.2233 38.5926C34.6972 40.1292 32.8237 41.3208 30.7422 42.0785Z",fill:"url(#paint0_linear_114_1028)"})}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"paint0_linear_114_1028",x1:"25.4119",y1:"2",x2:"25.4119",y2:"46.2406",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#EBB309"}),e.jsx("stop",{offset:"1",stopColor:"#FF3434"})]})})]}),K=()=>e.jsxs("svg",{width:"43",height:"43",viewBox:"0 0 43 43",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{id:"Frame",children:[e.jsx("path",{id:"Vector",d:"M21.5002 39.4163C31.3953 39.4163 39.4168 31.3948 39.4168 21.4997C39.4168 11.6046 31.3953 3.58301 21.5002 3.58301C11.6051 3.58301 3.5835 11.6046 3.5835 21.4997C3.5835 31.3948 11.6051 39.4163 21.5002 39.4163Z",stroke:"url(#paint0_linear_114_1082)",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{id:"Vector_2",d:"M21.5 10.75V21.5L28.6667 25.0833",stroke:"url(#paint1_linear_114_1082)",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"paint0_linear_114_1082",x1:"21.5002",y1:"3.58301",x2:"21.5002",y2:"39.4163",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#00E677"}),e.jsx("stop",{offset:"1",stopColor:"#00793F"})]}),e.jsxs("linearGradient",{id:"paint1_linear_114_1082",x1:"25.0833",y1:"10.75",x2:"25.0833",y2:"25.0833",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#00E677"}),e.jsx("stop",{offset:"1",stopColor:"#00793F"})]})]})]}),$e=async()=>{let t=!1,r=[];for(;!t;){const o=await M.get_table_rows({code:h.HQ_MU,index_position:1,limit:"10000",scope:h.HQ_MU,table:A.CROWDFUNDING,show_payer:!1,reverse:!0,json:!0});t=!o.more,r=[...o.rows]}return r},Te=()=>R({queryKey:[C.CROWDFUNDING],queryFn:()=>De(),staleTime:1e3*60*60});async function J(){return $.removeQueries(C.CROWDFUNDING),await $.invalidateQueries(C.CROWDFUNDING)}async function De(){try{const t=await $e();return t?Se(t):null}catch(t){return console.log(t),null}}function Se(t){return t.map(r=>{const o=new Date(r.funding_date);return{...r,contribute:!1,create:!1,formatted_start_date:ee(te,new Date(r.funding_date))?{days:-1,hours:-1,minutes:-1,seconds:-1}:ne(o)}}).sort((r,o)=>{const d=new Date(r.creation_date).getTime(),l=new Date(o.creation_date).getTime();return d>l?-1:d<l?1:0})}const P=[{value:"new",label:"Newest"},{value:"high",label:"Highest Score"},{value:"low",label:"Lowest Score"}],Le=()=>{const{data:t,isLoading:r}=Te(),o=p(n=>n.updateSelectedCrowdfunding),d=p(n=>n.updateCrowdfundingType),l=p(n=>n.filterList);function i(n){t==null||t.sort((c,f)=>{const u=c.upvotes-c.downvotes,m=f.upvotes-f.downvotes,a=new Date(c.creation_date).getTime(),w=new Date(f.creation_date).getTime();if((n==null?void 0:n.value)==="new"){if(a>w)return-1;if(a<w)return 1}if((n==null?void 0:n.value)==="high"){if(u>m)return-1;if(u<m)return 1}if((n==null?void 0:n.value)==="low"){if(u<m)return-1;if(u>m)return 1}return 0}),p.setState(c=>({...c,filterList:n??P[0]}))}const x=t==null?void 0:t.filter(n=>n.formatted_start_date.seconds>0||b(n.received_funding)>=b(n.requested_funding));return e.jsxs(xe,{children:[e.jsx(fe,{children:"Crowdfunding"}),e.jsxs(ge,{children:[e.jsx(O,{}),e.jsxs(me,{children:[" ","Members can vote on each campaign. TLM of unsuccessful campaigns will get refunded at the end of the funding period."]})]}),e.jsxs(we,{children:[e.jsx(se,{title:"",options:P,selected:l,onSelected:i,className:"select"}),e.jsx(L,{onClick:()=>d("create"),color:"gradientPink",children:"Create Campaign"})]}),e.jsx(he,{children:r?e.jsx(_e,{}):x==null?void 0:x.map(n=>{const c=n.upvotes-n.downvotes;return e.jsxs(Ce,{children:[e.jsxs(be,{children:[e.jsx(je,{children:n.title}),e.jsx(ye,{children:n.description})]}),e.jsxs(ve,{children:[e.jsxs(H,{children:[e.jsx(Z,{}),(b(n.received_funding)/b(n.requested_funding)*100).toFixed(2),"%"]}),e.jsxs(H,{children:[e.jsx(Y,{}),c>0?`+${c}`:c," (",n.upvotes+n.downvotes,")"]}),e.jsxs(H,{children:[e.jsx(K,{}),n.formatted_start_date.minutes===-1?"Ended":`${n.formatted_start_date.days}d ${n.formatted_start_date.hours}h 
                    ${n.formatted_start_date.minutes}m`]}),e.jsx(L,{onClick:()=>{o(n),d("detail")},color:"gradientPink",children:"Details"})]})]},n.crowdfunding_id)})})]})},ke=q({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),We=s("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1190px",padding:"0 15px",position:"relative",">svg":{position:"absolute",top:"70px",left:"15px"},"@sm":{">svg":{top:"0px"}}}),Fe=s("h2",{d:"flex",align:"center",justify:"center",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.9)",fs:"40px",w:"100%",mt:"60px","@sm":{mt:"0px",fs:"20px"}}),Ne=s("span",{d:"flex",align:"center",justify:"center",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.9)",fs:"20px",ff:"$heading",w:"100%",mt:"5px","@sm":{mt:"0px",fs:"16px"}}),qe=s("div",{d:"flex",align:"center",justify:"center",gap:"20px",w:"100%",mt:"20px",padding:"20px",border:"1px solid rgba(0, 0, 0, 0.4)",br:"13px",bg:"$blue100",svg:{color:"$white500",w:"25px",h:"25px",mr:"auto"},"@sm":{d:"none"}}),Me=s("span",{w:"100%",color:"$white500",textAlign:"center",fs:"14px",fw:"$bold",ff:"$heading","@lg":{fs:"12px"},"@md":{fs:"10px"},"@sm":{}}),Ae=s("div",{d:"grid",gridTemplateColumns:"1fr",pr:"20px",gap:"20px",overflowY:"auto",maxHeight:"calc(100vh - 650px)",w:"100%","@sm":{maxHeight:"calc(100vh - 440px)"},"@xsm":{gap:"5px",pr:"10px",maxHeight:"calc(100vh - 490px)"}}),Re=s("div",{d:"grid",gridTemplateColumns:"repeat(3, 1fr) 2fr",pr:"20px",m:"30px 0 20px",overflowY:"auto",maxHeight:"calc(100vh - 650px)",w:"100%",span:{d:"flex",align:"center",justify:"center",color:"$white500",ff:"$heading",fw:"$bold",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.9)"},"@sm":{gridTemplateColumns:"repeat(3, 1fr) 1fr",maxHeight:"calc(100vh - 440px)"},"@xsm":{m:"20px 0 15px",pr:"10px",gridTemplateColumns:"repeat(3, 1fr)",maxHeight:"calc(100vh - 490px)"}}),Oe=s("h2",{d:"flex",align:"center",justify:"center",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.9)",fs:"24px",w:"100%","@sm":{mt:"10px",fs:"22px"}}),Ue=s("div",{d:"grid",gridTemplateColumns:"repeat(3, 1fr) 2fr",w:"100%",br:"10px",background:"rgba(3, 16, 32, 0.65)",padding:"20px",span:{d:"flex",align:"center",justify:"center",color:"$white500",ff:"$heading",fw:"$bold",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.9)"},"@sm":{gridTemplateColumns:"repeat(3, 1fr) 1fr"},"@xsm":{padding:"20px 10px",span:{fs:"10px"},gridTemplateColumns:"repeat(3, 1fr)",direction:"column"}}),Ie=s("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"5px",mb:"10px",w:"100%",">button":{width:"240px",height:"50px"},"@md":{">div":{maxW:"unset"}},"@sm":{mt:"10px",minW:"unset"},"@xsm":{w:"100%"}}),He=s("div",{d:"flex",align:"center",justify:"center",gap:"10px",color:"$white500",ff:"$heading",fw:"$bold",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.9)",w:"100%","@sm":{minW:"unset"},"@xsm":{w:"100%",gap:"5px",span:{fs:"10px"}}}),Ve=s("div",{mt:"30px",w:"100%",height:"450px",background:"linear-gradient( -90deg, rgba(3, 16, 32, 0.40), rgba(3, 16, 32, 0.75) ,rgba(3, 16, 32, 0.40))",br:"10px",backgroundSize:"400% 400%",animation:`${ke} 1.2s ease-in-out infinite`}),Be=async t=>{let r=!1,o=[];for(;!r;){const d=await M.get_table_rows({code:h.HQ_MU,index_position:2,key_type:"i64",limit:"10000",scope:h.HQ_MU,table:A.CROWDFUNDS,show_payer:!1,json:!0,upper_bound:t,lower_bound:t});r=!d.more,o=[...d.rows]}return o},Qe=t=>R({queryKey:[C.CROWDFUNDING_CONTRIBUTE,t],queryFn:()=>Ee(t),staleTime:1e3*60*60});async function Ge(){return $.removeQueries(C.CROWDFUNDING_CONTRIBUTE),await $.invalidateQueries(C.CROWDFUNDING_CONTRIBUTE)}async function Ee(t){try{const r=await Be(t);return r?r.sort((d,l)=>new Date(l.payout_date).getTime()-new Date(d.payout_date).getTime()):null}catch(r){return console.log(r),null}}async function Pe(t,r){const{executeTransaction:o}=B(),d=ze(t,r);return!!await o(d)}function ze(t,r){return{actions:[{account:h.ALIEN_WORLDS,name:"transfer",authorization:[{actor:t.name,permission:t.requestPermission}],data:r}]}}const Ze=re.lazy(()=>ie(()=>import("./tlm-a033132b.js"),["assets/tlm-a033132b.js","assets/index-afa3647c.js","assets/index-55fec1ff.css"])),Ye=()=>{const t=k(a=>a.user),r=p(a=>a.selectedCrowdfunding),o=p(a=>a.crowdfundingType),d=p(a=>a.updateCrowdfundingType),{data:l,isLoading:i}=Qe(`${r==null?void 0:r.crowdfunding_id}`),[x,n]=N.useState(0),[c,f]=N.useState(!1);if(!r)return null;function u(a){b(a.target.value)?n(b(a.target.value)):n(0)}async function m(){try{if(f(!0),x<=0||!t)return;const a={from:t.name,memo:`crowdfunding,${r==null?void 0:r.crowdfunding_id}`,quantity:`${x.toFixed(4)} TLM`,to:"hq.mu"};await Pe(t,a)&&(await Q(500),await Ge(),g.success("Campaign contributed successfully"))}catch(a){console.log(a)}finally{f(!1)}}return e.jsxs(We,{children:[e.jsx(Fe,{children:r.title}),e.jsxs(Ne,{children:["by ",r.to]}),o!=="list"&&e.jsx(G,{color:"white",size:40,onClick:()=>d("detail")}),e.jsxs(qe,{children:[e.jsx(O,{}),e.jsxs(Me,{children:[" ","TLM of unsuccessful campaigns will get refunded at the end of the funding period."]})]}),e.jsxs(Ie,{children:[e.jsx(S,{value:`${x} TLM`,onChange:u}),e.jsx(L,{disabled:c,isLoading:c,onClick:m,color:"gradientPink",children:"Contribute"})]}),e.jsx(Oe,{children:"Recent Contributions"}),e.jsxs(Re,{children:[e.jsx("span",{children:"Wallet"}),e.jsx("span",{children:"Amount"})]}),e.jsx(Ae,{children:i?e.jsx(Ve,{}):l==null?void 0:l.map(a=>e.jsxs(Ue,{children:[e.jsx("span",{children:a.sender}),e.jsxs(He,{children:[b(a.funds).toFixed(4)," ",e.jsx(Ze,{})]})]},a.crowdfunds_id))})]})},Ke=q({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),Je=s("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1190px",padding:"0 15px",position:"relative",".select":{m:"10px auto 10px 0"},">svg":{position:"absolute",top:"70px",left:"15px"},"@sm":{">svg":{top:"0px"},".select":{w:"100%",button:{minW:"100%"}}}}),Xe=s("h2",{d:"flex",align:"center",justify:"center",textAlign:"center",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.9)",fs:"40px",w:"100%",mt:"60px","@sm":{mt:"0px",fs:"22px"}}),et=s("span",{d:"flex",align:"center",justify:"center",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.9)",fs:"20px",ff:"$heading",w:"100%",mt:"5px","@sm":{mt:"0px",fs:"18px"}}),tt=s("div",{d:"flex",align:"center",justify:"center",gap:"20px",w:"100%",mt:"20px",padding:"20px",border:"1px solid rgba(0, 0, 0, 0.4)",br:"13px",bg:"$blue100",svg:{color:"$white500",w:"25px",h:"25px",mr:"auto"},"@sm":{d:"none"}}),nt=s("span",{w:"100%",color:"$white500",textAlign:"center",fs:"14px",fw:"$bold",ff:"$heading","@lg":{fs:"12px"},"@md":{fs:"10px"},"@sm":{}}),rt=s("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",gap:"20px",pr:"20px",overflowY:"auto",w:"100%","@sm":{pr:"5px"}}),j=s("div",{d:"flex",align:"center",justify:"space-between",gap:"30px",w:"100%",br:"10px",background:"rgba(3, 16, 32, 0.65)",padding:"20px","@sm":{align:"flex-start",justify:"flex-start"},"@xsm":{direction:"column"}}),y=s("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column"}),v=s("h3",{fs:"24px",color:"$white500",mb:"10px"}),_=s("p",{color:"$white500",ff:"$heading",fs:"20px","@sm":{fs:"16px",mb:"auto"}}),it=s("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"15px",w:"100%",m:"20px 0","@sm":{minW:"unset"},"@xsm":{w:"100%"}}),V=s("div",{d:"flex",align:"center",gap:"20px",w:"100%",color:"$white500",ff:"$heading",fs:"20px","@sm":{fs:"16px",gap:"10px",svg:{w:"35px",h:"35px"}}}),st=s("div",{d:"flex",align:"center",justify:"center",gap:"10px",w:"max-content",">button":{h:"50px",minW:"170px"},"@sm":{gap:"10px",svg:{w:"35px",h:"35px"},">button":{w:"100%"}}}),ot=s("div",{d:"flex",align:"center",justify:"center",gap:"10px",svg:{cursor:"pointer",w:"35px",h:"35px"},"@sm":{fs:"16px",gap:"10px"}}),at=s("div",{d:"flex",align:"center",justify:"space-between",gap:"20px",w:"100%","@sm":{fs:"16px",gap:"10px",svg:{w:"35px",h:"35px"}},"@xsm":{direction:"column",svg:{w:"35px",h:"35px"}}}),z=s("div",{w:"35px",h:"35px",background:"linear-gradient( -90deg, rgba(166, 166, 166, 0.40), rgba(166, 166, 166, 0.75) ,rgba(166, 166, 166, 0.40))",br:"10px",backgroundSize:"400% 400%",animation:`${Ke} 1.2s ease-in-out infinite`});async function dt(t,r){const{executeTransaction:o}=B(),d=lt(t,r);return!!await o(d)}function lt(t,r){return{actions:[{account:h.HQ_MU,name:"votecrowdf",authorization:[{actor:t.name,permission:t.requestPermission}],data:{...r,wallet:t.name}}]}}const ct=async t=>{let r=!1,o=[];for(;!r;){const d=await M.get_table_rows({code:h.HQ_MU,index_position:1,limit:"10000",scope:t,table:A.CROWDVOTES,show_payer:!1,json:!0});r=!d.more,o=[...d.rows]}return o},ut=()=>R({queryKey:[C.CROWDFUNDING_VOTES],queryFn:()=>xt(),staleTime:1e3*60*60,enabled:!!k.getState().user});async function pt(){return $.removeQueries(C.CROWDFUNDING_VOTES),await $.invalidateQueries(C.CROWDFUNDING_VOTES)}async function xt(){try{const t=k.getState().user;if(!t)return null;const r=await ct(t.name);return r||null}catch(t){return console.log(t),null}}const ft=()=>{const{data:t,isLoading:r}=ut(),[o,d]=N.useState(!1),l=k(a=>a.user),i=p(a=>a.selectedCrowdfunding),x=p(a=>a.updateSelectedCrowdfunding),n=p(a=>a.updateCrowdfundingType),c=p(a=>a.crowdfundingType);if(!i)return null;const f=i.upvotes-i.downvotes,u=t==null?void 0:t.find(a=>a.crowdfunding_proposal_id===i.crowdfunding_id);async function m(a){try{if(d(!0),!l||!i)return;let w={crowdfunding_proposal_id:i.crowdfunding_id,vote_type:a,remove_vote:!1};if(u&&u.vote_type===Number(a)&&(w={crowdfunding_proposal_id:i.crowdfunding_id,vote_type:a,remove_vote:!0}),await dt(l,w)){await Q(700),await pt(),await J();const[[I,T]]=$.getQueriesData(C.CROWDFUNDING),W=T==null?void 0:T.find(F=>F.crowdfunding_id===i.crowdfunding_id);x(W),g.success("Vote successful")}}catch(w){console.log(w)}finally{d(!1)}}return e.jsxs(Je,{children:[e.jsx(Xe,{children:i==null?void 0:i.title}),e.jsxs(et,{children:["by ",i==null?void 0:i.to]}),c!=="list"&&e.jsx(G,{color:"white",size:40,onClick:()=>x(void 0)}),e.jsxs(tt,{children:[e.jsx(O,{}),e.jsxs(nt,{children:[" ","TLM of unsuccessful campaigns will get refunded at the end of the funding period."]})]}),e.jsxs(it,{children:[e.jsxs(V,{children:[e.jsx(Z,{}),(b(i.received_funding)/b(i.requested_funding)).toFixed(2),"%"]}),e.jsxs(V,{children:[e.jsx(Y,{}),f>0?`+${f}`:f," (",i.upvotes+i.downvotes,")"]}),e.jsxs(at,{children:[e.jsxs(V,{children:[e.jsx(K,{}),i.formatted_start_date.minutes===-1?"Ended":`${i.formatted_start_date.days}d ${i.formatted_start_date.hours}h 
                    ${i.formatted_start_date.minutes}m`]}),e.jsxs(st,{children:[r||o?e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(z,{})]}):e.jsxs(ot,{children:[e.jsx(oe,{onClick:()=>m(!0),color:u&&u.vote_type?"#00BAFF":"#A6A6A6"}),e.jsx(ae,{onClick:()=>m(!1),color:u?u.vote_type?"#A6A6A6":"#00BAFF":"#A6A6A6"})]}),e.jsx(L,{onClick:()=>{n("contribute"),x(i)},color:"gradientPink",children:"Contribute"})]})]})]}),e.jsxs(rt,{children:[e.jsx(j,{children:e.jsxs(y,{children:[e.jsx(v,{children:"Overview"}),e.jsx(_,{children:i==null?void 0:i.overview})]})}),e.jsx(j,{children:e.jsxs(y,{children:[e.jsx(v,{children:"The objective"}),e.jsx(_,{children:i==null?void 0:i.objective})]})}),e.jsx(j,{children:e.jsxs(y,{children:[e.jsx(v,{children:"Description"}),e.jsx(_,{children:i==null?void 0:i.description})]})}),e.jsx(j,{children:e.jsxs(y,{children:[e.jsx(v,{children:"Business Model"}),e.jsx(_,{children:i==null?void 0:i.business_model})]})}),e.jsx(j,{children:e.jsxs(y,{children:[e.jsx(v,{children:"Duration"}),e.jsx(_,{children:i==null?void 0:i.duration})]})}),e.jsx(j,{children:e.jsxs(y,{children:[e.jsx(v,{children:"Teaminfo"}),e.jsx(_,{children:i==null?void 0:i.teaminfo})]})}),e.jsx(j,{children:e.jsxs(y,{children:[e.jsx(v,{children:"TLM Request"}),e.jsx(_,{children:i==null?void 0:i.requested_funding})]})}),e.jsx(j,{children:e.jsxs(y,{children:[e.jsx(v,{children:"Fundraising Duration (Days)"}),e.jsx(_,{children:de(new Date(i==null?void 0:i.funding_date),new Date(i==null?void 0:i.creation_date))})]})})]})]})},gt=q({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),mt=s("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",w:"100%",maxW:"1190px",padding:"0 15px",">svg":{cursor:"pointer",position:"absolute",top:"70px",left:"25px"},"@sm":{">button":{maxW:"100%",w:"100%",h:"50px"},">svg":{position:"absolute",top:"0px",left:"25px"}}}),wt=s("h2",{d:"flex",align:"center",justify:"center",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.9)",fs:"40px",w:"100%",mt:"60px","@sm":{mt:"0px",fs:"26px"},"@xsm":{fs:"20px"}}),ht=s("div",{d:"flex",align:"center",justify:"center",gap:"20px",w:"100%",mt:"20px",padding:"20px",border:"1px solid rgba(0, 0, 0, 0.4)",br:"13px",bg:"$blue100",svg:{color:"$white500",w:"25px",h:"25px",mr:"auto"},"@sm":{}}),Ct=s("span",{w:"100%",color:"$white500",textAlign:"center",fs:"14px",fw:"$bold",ff:"$heading","@lg":{fs:"12px"},"@md":{fs:"10px"},"@sm":{}}),bt=s("form",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",gap:"20px",pr:"20px",overflowY:"auto",w:"100%",">button":{m:"20px auto 0",w:"260px",h:"50px"},">div":{w:"100%",label:{fs:"16px"},".text-area":{svg:{w:"100.7%"}}},"@md":{">div":{maxW:"100%",">div":{maxW:"100%"}}},"@xsm":{">div":{label:{fs:"12px"}}}});s("div",{mt:"30px",w:"100%",height:"450px",background:"linear-gradient( -90deg, rgba(3, 16, 32, 0.40), rgba(3, 16, 32, 0.75) ,rgba(3, 16, 32, 0.40))",br:"10px",backgroundSize:"400% 400%",animation:`${gt} 1.2s ease-in-out infinite`});const jt=s("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",position:"relative",w:"100%",gap:"5px","&:has(>textarea:disabled)":{label:{color:"$white800"}},"@md":{fs:"15px",maxW:"150px"}}),yt=s("label",{w:"100%",fs:"12px",ff:"$heading",textShadow:" 0px 4px 4px rgba(0, 0, 0, 0.5)",outline:"none",color:"$white500",border:"none"}),vt=s("div",{position:"relative",d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"100%",h:"100%",svg:{"&:first-of-type":{position:"absolute",inset:"0",zIndex:1,w:"101.4%",h:"100%",rect:{strokeWidth:"4px !important"}}},"@md":{fs:"15px",maxW:"150px"}}),_t=s("textarea",{zIndex:1,d:"flex",align:"center",justify:"center",bg:"linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(217, 217, 217, 0.5) 105.75%)",w:"100%",maxW:"520px",minW:"100%",minH:"110px",maxH:"210px",fs:"20px",ff:"$heading",fw:"$normal",outline:"none",color:"$black500",padding:"2px 9px",margin:"3px",border:"none",br:"10px","&::-webkit-scrollbar":{width:"10px",height:"10px",padding:"0px",background:"transparent",border:"solid 1px transparent",borderRadius:"10px","@mdW":{width:"4px",height:"4px"}},"&::-webkit-scrollbar-track":{border:"solid 1px transparent"},"&::-webkit-scrollbar-thumb":{bg:"linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(217, 217, 217, 0.7) 105.75%)",borderRadius:"10px"},"&:hover":{borderColor:"$blue100"},"&:not(:placeholder-shown)":{borderColor:"$blue100"},"&:disabled":{cursor:"not-allowed",borderColor:"$white800"}}),D=({label:t,ref:r,className:o,...d})=>e.jsxs(jt,{children:[e.jsx(yt,{htmlFor:"TextArea",children:t}),e.jsxs(vt,{className:o,children:[e.jsx(le,{}),e.jsx(_t,{id:"TextArea",...d,ref:r,placeholder:(d==null?void 0:d.placeholder)??" "})]})]});async function $t(t,r){const{executeTransaction:o}=B(),d=Tt(t,r);return!!await o(d)}function Tt(t,r){return{actions:[{account:h.ALIEN_WORLDS,name:"transfer",authorization:[{actor:t.name,permission:t.requestPermission}],data:{from:t.name,memo:"crowdfdeposit",quantity:"10.0000 TLM",to:"hq.mu"}},{account:h.HQ_MU,name:"addcrowdf",authorization:[{actor:t.name,permission:t.requestPermission}],data:r}]}}const Dt=({config:t})=>{const r=k(n=>n.user),o=p(n=>n.crowdfundingType),d=p(n=>n.updateCrowdfundingType),[l,i]=N.useState(!1);async function x(n){var f,u,m,a,w,U,I,T,W,F;if(n.preventDefault(),!r)return null;if(!((f=n.target.title)!=null&&f.value))return g.warning("Title is required");if(!((u=n.target.description)!=null&&u.value))return g.warning("Description is required");if(!((m=n.target.requested_funding)!=null&&m.value))return g.warning("Requested Funding is required");if(!((a=n.target.wallet)!=null&&a.value))return g.warning("Wallet is required");if(!((w=n.target.business_model)!=null&&w.value))return g.warning("Business Model is required");if(!((U=n.target.duration)!=null&&U.value))return g.warning("Duration is required");if(!((I=n.target.teaminfo)!=null&&I.value))return g.warning("Teaminfo is required");if(!((T=n.target.days_fundraising)!=null&&T.value))return g.warning("Days Fundraising is required");if(!((W=n.target.overview)!=null&&W.value))return g.warning("Overview is required");if(!((F=n.target.objective)!=null&&F.value))return g.warning("Objective is required");const c={title:n.target.title.value,description:n.target.description.value,requested_funding:`${n.target.requested_funding.value}.0000 TLM`,wallet:n.target.wallet.value,business_model:n.target.business_model.value,duration:n.target.duration.value,teaminfo:n.target.teaminfo.value,overview:n.target.overview.value,objective:n.target.objective.value,days_fundraising:Number(n.target.days_fundraising.value),to:r.name,daorules:!1};try{i(!0),await $t(r,c)&&(await Q(1e3),await J(),g.success("Campaign created successfully"),d("list"))}catch(E){console.log(E)}finally{i(!1)}}return e.jsxs(mt,{children:[e.jsx(wt,{children:"Create Campaign"}),o!=="list"&&e.jsx(G,{color:"white",size:40,onClick:()=>d("list")}),e.jsxs(ht,{children:[e.jsx(O,{}),e.jsxs(Ct,{children:[" ","Creating a campaign costs 10 TLM. If a campaign is successful, Mission Control takes a 1% fee on the raised funds."]})]}),e.jsxs(bt,{onSubmit:x,children:[e.jsxs(L,{isLoading:l,disabled:l,type:"submit",color:"gradientPink",children:["Create Campaign (",b((t==null?void 0:t[0].proposal_cost)??"")," TLM)"]}),e.jsx(S,{id:"title",label:"Campaign Name",required:!0}),e.jsx(D,{className:"text-area",id:"overview",label:"The Overview, a TLDR about your campaign",required:!0}),e.jsx(D,{className:"text-area",id:"description",label:"Description, details about your campaign",required:!0}),e.jsx(D,{className:"text-area",id:"objective",label:"The Objective, the problem you are trying to solve",required:!0}),e.jsx(D,{className:"text-area",id:"business_model",label:"Business Model, how you achieve sustainability",required:!0}),e.jsx(D,{id:"duration",className:"text-area",label:"Duration, how long it will take to complete your idea",type:"number",required:!0}),e.jsx(D,{className:"text-area",id:"teaminfo",label:"Teaminfo",required:!0}),e.jsx(S,{id:"days_fundraising",label:"Fundraising Duration (Days)",type:"number",required:!0}),e.jsx(S,{id:"requested_funding",label:"TLM Request",type:"number",required:!0}),e.jsx(S,{id:"wallet",label:"Receiving Wallet",required:!0})]})]})},St=async()=>{let t=!1,r=[];for(;!t;){const o=await M.get_table_rows({code:h.HQ_MU,index_position:1,limit:"10000",scope:h.HQ_MU,table:A.CROWDFUNDINGCOFIG,show_payer:!1,json:!0});t=!o.more,r=[...o.rows]}return r},Lt=()=>R({queryKey:[C.CROWDFUNDING_CONFIG],queryFn:()=>kt(),staleTime:1e3*60*60});async function kt(){try{const t=await St();return t||null}catch(t){return console.log(t),null}}const Gt=()=>{const{data:t}=Lt(),r=p(d=>d.crowdfundingType),o=p(d=>d.selectedCrowdfunding);return r==="create"?e.jsx(Dt,{config:t}):o&&r==="detail"?e.jsx(ft,{}):o&&r==="contribute"?e.jsx(Ye,{}):e.jsx(Le,{})};export{Gt as default};