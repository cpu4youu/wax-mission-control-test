import{e as $,s as r,h as C,i as D,S as p,T as L,l as P,Q as E,z as I,n as k,R as M,_ as z,b as g,r as x,j as e,I as R,B as h,A as j,m as W}from"./index-5c0be45d.js";import{S as N}from"./index-f3c89fda.js";import{d as S}from"./use-transaction-0f26a9e8.js";import"./index.esm-b24f1205.js";import"./index-7864d7c4.js";import"./index-db60147f.js";import"./index-78d42c97.js";import"./iconBase-52fbc202.js";import"./user-miners-query-5637dad8.js";import"./axios-43b00e28.js";const B=$({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),F=r("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%","@sm":{padding:"0 15px"}}),U=r("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),q=r("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),O=r("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1302px",">button":{mt:"40px",h:"50px",w:"240px",div:{fs:"15px",border:"none"}},"@md":{d:"flex",flexWrap:"wrap"}}),Q=r("div",{d:"flex",align:"center",justify:"center",gap:"10px",mt:"30px",w:"100%",padding:"20px",br:"8px",bg:"rgba(255, 255, 255, 0.09)",svg:{color:"$white500",w:"50px",h:"50px",mr:"auto"},"@sm":{d:"none"}}),V=r("span",{w:"100%",color:"$white500",fs:"16px",ff:"$heading",a:{color:"$yellow500",textDecoration:"underline"},"@lg":{fs:"12px"},"@md":{fs:"10px"},"@sm":{}}),Y=r("div",{d:"flex",align:"center",justify:"center",direction:"column"}),G=r("h2",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"100%",mt:"30px",mb:"10px",color:"$white500",fs:"20px",ff:"$body",fw:"$thin"}),K=r("div",{d:"flex",align:"flex-start",justify:"flex-start",gap:"20px","@xsm":{flexWrap:"wrap"}}),H=r("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"30%",gap:"20px",img:{w:"100%",objectFit:"contain",br:"10px"},"@xsm":{w:"100%"}}),J=r("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"2px",w:"100%"}),w=r("div",{d:"flex",align:"center",justify:"center",w:"100%",gap:"2px",span:{bg:"rgba(255, 255, 255, 0.02)",w:"100%",color:"$white500",fs:"16px",ff:"$body",fw:"$thin",textAlign:"center"}}),X=r("div",{d:"flex",align:"center",justify:"space-between",direction:"column",gap:"20px",w:"70%",minH:"312px",padding:"40px 20px 15px 20px",bg:"rgba(255, 255, 255, 0.02)","@xsm":{w:"100%"}}),Z=r("p",{d:"flex",align:"center",justify:"center",direction:"column",color:"$white500",fs:"16px",ff:"$heading",textAlign:"center"}),ee=r("div",{d:"flex",align:"center",justify:"space-between",w:"100%",">button":{h:"50px",w:"240px",div:{fs:"15px",border:"none"}},"@md":{justify:"center",flexWrap:"wrap"}}),ne=r("div",{d:"flex",align:"center",justify:"center",gap:"5px",">button":{h:"50px",w:"240px",div:{fs:"15px",border:"none"}},">div>button":{minWidth:"170px"},"@md":{flexWrap:"wrap"}});r("div",{mt:"10px",w:"100%",height:"200px",background:"linear-gradient( -90deg, rgba(3, 16, 32, 0.40), rgba(3, 16, 32, 0.75) ,rgba(3, 16, 32, 0.40))",br:"10px",backgroundSize:"400% 400%",animation:`${B} 1.2s ease-in-out infinite`});const f=[{label:"Eyeke",value:"eyeke"},{label:"Kavian",value:"kavian"},{label:"Magor",value:"magor"},{label:"Naron",value:"naron"},{label:"Neri",value:"nerix"},{label:"Veles",value:"veles"}];C((n,o)=>({sponsorFilters:f,setSponsorFilters:s=>{n({sponsorFilters:s})}}));const te=async()=>await D.get_table_rows({code:p.ADVENTURE_MC,index_position:1,limit:"10000",scope:p.ADVENTURE_MC,table:L.predefs}),se=()=>P({queryKey:[E.SponsorAdv],queryFn:oe,staleTime:1e3*60*60});async function oe(){try{const n=await te();return n!=null&&n.rows?n.rows.sort((s,i)=>((s==null?void 0:s.point_cost)||0)<((i==null?void 0:i.point_cost)||0)||(s.predefid||0)<(i.predefid||0)?1:-1):[]}catch(n){return console.log(n),[]}}async function re(n,o){const{executeTransaction:s}=S(),i=ie(n,o);return!!await s(i)}function ie(n,o){return{actions:[{account:p.ALIEN_WORLDS,name:"transfer",authorization:[{actor:o.name,permission:o.authorization.permission}],data:{from:o.name,to:"adventure.mc",memo:`adventure,${n}`,quantity:"5000.0000 TLM"}}]}}async function ae(n){const{executeTransaction:o,serializeActions:s}=S(),i=await s([{account:p.ALIEN_WORLDS,name:"transfer",authorization:[{actor:`${n.selectedPlanet}.dac`,permission:"active"}],data:{from:`${n.selectedPlanet}.dac`,to:"adventure.mc",memo:`adventure,${n.preDef.predefid}`,quantity:"5000.0000 TLM"}}]),l=ce(n,i);return!!await o(l)}function ce(n,o){return{actions:[{account:p.MSIG_WORLDS,name:"propose",authorization:[{actor:n.user.name,permission:n.user.requestPermission}],data:{proposer:n.user.name,proposal_name:Math.random().toString(36).replace(/[^a-z1-5]+/g,"").substring(0,12),requested:[{actor:`${n.selectedPlanet}.dac`,permission:"active"}],dac_id:n.selectedPlanet,metadata:[{key:"title",value:"Sponsoring Mission Control adventure"},{key:"description",value:`Sponsoring adventure ${n.preDef.title} for Mission Control. Play Mission Control on https://waxmissioncontrol.io`}],trx:{expiration:I(k,7),ref_block_num:0,ref_block_prefix:0,max_net_usage_words:0,max_cpu_usage_ms:0,delay_sec:0,context_free_actions:[],actions:o,transaction_extensions:[]}}}]}}const le=M.lazy(()=>z(()=>import("./info-builder-75c68f5f.js"),["assets/info-builder-75c68f5f.js","assets/index-5c0be45d.js","assets/index-55fec1ff.css"])),je=()=>{const{data:n}=se(),o=g(t=>t.user),[s,i]=x.useState(void 0),[l,d]=x.useState(!1),[b,y]=x.useState(1);function _(t,a){const c={...s,[t]:a};i(c)}async function T(t){var a;if(o)try{d(!0);const c={user:o,preDef:t,selectedPlanet:((a=s==null?void 0:s[t.predefid])==null?void 0:a.value)||f[0].value};if(await ae(c)){const A=await j(o.name);g.setState(m=>({...m,user:m.user?{...m.user,userTlm:A}:null}))}}catch(c){console.log(c)}finally{d(!1)}}async function v(t){if(o)try{if(d(!0),await re(t,o)){const c=await j(o.name);g.setState(u=>({...u,user:u.user?{...u.user,userTlm:c}:null})),W.success("Adventure sponsored. Thank you!")}}catch(a){console.log(a)}finally{d(!1)}}return e.jsx(x.Suspense,{children:e.jsxs(F,{children:[e.jsxs(U,{children:[e.jsx(q,{children:"Sponsor an adventure"}),e.jsx("img",{src:"/assets/background/bg-sponsor-adventures.jpeg",alt:""})]}),e.jsxs(O,{children:[e.jsxs(Q,{children:[e.jsx(le,{}),e.jsxs(V,{children:["- Sponsoring an adventure increases the prize pool over the coming weeks ",e.jsx("br",{})," - You will be shown in the “latest sponsors” section ",e.jsx("br",{})," - Sponsoring an adventure is non-refundable ",e.jsx("br",{})," - You can contribute to the prize pool directly by sending TLM to pool.mc",e.jsx("br",{}),"- If you want a customized adventure, please contact the team in Discord"]})]}),n==null?void 0:n.map((t,a)=>a+1>b*10?null:e.jsxs(Y,{children:[e.jsx(G,{children:t.title}),e.jsxs(K,{children:[e.jsxs(H,{children:[e.jsx("img",{src:`${R}/ipfs/${t==null?void 0:t.image}`,alt:t.title}),e.jsxs(J,{children:[e.jsxs(w,{children:[e.jsx("span",{children:"Duration"}),e.jsxs("span",{children:[t.duration_hours/24," Days"]})]}),e.jsxs(w,{children:[e.jsx("span",{children:"MC Point Entry Cost"}),e.jsx("span",{children:t.point_cost.toLocaleString("en-US")})]}),e.jsxs(w,{children:[e.jsx("span",{children:"Total Reward Points"}),e.jsx("span",{children:t.reward_qp.toLocaleString("en-US")})]})]})]}),e.jsxs(X,{children:[e.jsx(Z,{children:t.flavor}),e.jsxs(ee,{children:[e.jsx(h,{disabled:l,isLoading:l,onClick:()=>v(t.predefid),rounded:!1,color:"solidBlue",children:"Sponsor for 5,000 TLM"}),e.jsxs(ne,{children:[e.jsx(h,{disabled:l,isLoading:l,onClick:()=>T(t),rounded:!1,color:"solidBlue",children:"Create Proposal"}),e.jsx(N,{borderColor1:"#D9D9D9",borderColor2:"#D9D9D9",className:"select",title:"",selected:(s==null?void 0:s[t==null?void 0:t.predefid])||f[0],options:f,onSelected:c=>_(t.predefid,c)})]})]})]})]})]},t.predefid)),b<=((n==null?void 0:n.length)??0)/10&&e.jsx(h,{rounded:!1,color:"solidBlue",onClick:()=>y(t=>t+1),children:"Load More"})]})]})})};export{je as default};