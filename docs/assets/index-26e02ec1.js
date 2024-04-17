import{s as o,e as Z,a as z,q as K,Q as y,g as Y,S as x,T as J,u as X,G as ee,R as w,_,b as d,f as c,j as t,k as te,d as se,B as ne,l as B,m as re}from"./index-466eeaa7.js";import{u as ie,L as oe}from"./index-815d61ab.js";import{g as ae}from"./emporium-tasks-a2a7dbeb.js";import{a as ce}from"./index.esm-1cb5005a.js";const le=o("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%"}),pe=o("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0},"@md":{h:"105px",img:{h:"105px"}},"@sm":{h:"65px",img:{h:"65px"}}}),ue=o("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.8)",w:"100%","@sm":{fs:"24px"}}),de=o("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1095px","@md":{px:"30px"},"@sm":{px:"15px"}}),xe=o("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",mt:"48px"}),me=o("h3",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"100%",color:"$white500",fs:"32px","@sm":{fs:"24px"}}),fe=o("p",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"100%",maxW:"811px",mt:"18px",mr:"auto",fs:"16px",fw:"$thin",ff:"$body",color:"$white500","@sm":{mt:"10px",fs:"14px"}}),he=o("div",{d:"flex",align:"center",justify:"center",direction:"column",mt:"18px",w:"100%"}),ge=o("h3",{d:"flex",align:"center",justify:"space-between",gap:"10px",w:"100%",color:"$white500",fs:"18px",span:{fs:"32px"},button:{d:"flex",align:"center",justify:"center",gap:"6px",color:"$white500",fw:"$bold",fs:"25px"},"@sm":{fs:"16px",span:{fs:"28px"}}}),ye=o("div",{d:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"15px",flexWrap:"wrap",mt:"18px",w:"100%","@sm":{gap:"5px"}}),we=o("div",{d:"flex",align:"flex-start",justify:"space-between",direction:"column",position:"relative",w:"100%",h:"100%",pb:"5px",border:"3px solid rgba(255, 255, 255, 0.4)",img:{w:"100%",h:"100%",maxH:"135px",objectFit:"cover"},">button":{fs:"18px",padding:"0px",mt:"20px",mx:"auto",w:"95%",minW:"95%",maxW:"95%",minH:"35px",div:{minH:"35px"}},variants:{isSelected:{true:{">button":{color:"black"}}}},"@sm":{">button":{fs:"14px"}}}),_e=o("div",{d:"flex",align:"center",justify:"center",position:"absolute",top:"3px",left:"10px",color:"$white500",fs:"24px",fw:"$bold",ff:"$heading",svg:{w:"45px",h:"45px",ml:"-5px"},"@sm":{fs:"16px",left:"5px",top:"0px",svg:{w:"25px",h:"25px"}}}),be=o("h4",{d:"flex",align:"center",justify:"center",direction:"column",padding:"3px 5px",color:"$white500",fs:"18px",ff:"$heading","@sm":{fs:"14px"}}),Te=o("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",gap:"10px",w:"100%",my:"10px",pl:"5px",color:"$white500",fs:"13px",ff:"$body",">svg":{w:"20px",h:"20px"},"@sm":{fs:"12px"}}),je=o("p",{w:"100%",my:"auto",pl:"5px",color:"$white500",fs:"13px",ff:"$body",svg:{verticalAlign:"sub",w:"16px",h:"16px",my:"auto",mr:"3px"},"@sm":{fs:"12px"}}),ve=o("p",{w:"100%",pl:"5px",color:"$white500",fs:"14px",ff:"$body",span:{display:"inline-flex",align:"center",gap:"3px"},svg:{verticalAlign:"sub",w:"16px",h:"16px",mr:"3px"},"@sm":{fs:"12px"}}),Se=Z({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),Ce=o("div",{d:"flex",w:"100%",maxW:"260px",h:"325px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${Se} 1.2s ease-in-out infinite`,"@sm":{h:"215px",w:"100%"}}),$e=()=>z({queryKey:[y.Tasks],queryFn:()=>Me(),staleTime:1e3*60*60});async function Le(){return await K.removeQueries([y.Tasks])}async function Me(){try{const n=await ae("active");return n||[]}catch(n){return console.log(n),[]}}const Pe=async()=>{const n=await Y({options:{code:x.EMPORIUM,index_position:1,limit:"10000",scope:x.EMPORIUM,table:J.CONFIG}});return n?n[0]:null},Ee=()=>z({queryKey:[y.TasksConfig],queryFn:()=>ke(),staleTime:1e3*60*60});async function ke(){try{return await Pe()}catch(n){return console.log(n),null}}async function Ie(n,p,r,a){const{executeTransaction:m}=X(),f=await Ae(n,p,r,a);return!!await m(f,{broadcast:!0,sign:!0})}async function Ae(n,p,r,a){return a==="tlm"?{actions:[{account:x.ALIEN_WORLDS,name:"transfer",authorization:[{actor:n.name,permission:n.requestPermission}],data:{from:n.name,memo:`complete task,${p}`,quantity:`${r.toFixed(4)} TLM`,to:"emporium.mc"}}]}:{actions:[{account:x.EMPORIUM,name:"finishtask",authorization:[{actor:n.name,permission:n.requestPermission}],data:{wallet:n.name,task_id:p,currency_amount:r}}]}}function De(n){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"}}]})(n)}const R=w.lazy(()=>_(()=>import("./shards-2a6a7c53.js"),["assets/shards-2a6a7c53.js","assets/index-466eeaa7.js","assets/index-55fec1ff.css"])),U=w.lazy(()=>_(()=>import("./tlm-c3242798.js"),["assets/tlm-c3242798.js","assets/index-466eeaa7.js","assets/index-55fec1ff.css"])),qe=w.lazy(()=>_(()=>import("./star-63afc8f2.js"),["assets/star-63afc8f2.js","assets/index-466eeaa7.js","assets/index-55fec1ff.css"])),Fe=()=>{const{data:n,isLoading:p}=$e(),{data:r}=Ee(),a=d(e=>e.user),m=d(e=>e.updateMcPoints),f=d(e=>e.updateQuestPoints),b=d(e=>e.updateTLM),F=ie(e=>e.onChangePage),[u,T]=c.useState(void 0),[W,Q]=c.useState(""),[j,v]=c.useState(!1),[h,H]=c.useState([]);async function O(e){if(!(!a||!e.current_price)){v(!0);try{await Ie(a,e.task_id,e.current_price,e.task_type)&&(await B(1500),await S(),e.task_type==="mcp"&&await m(),e.task_type==="tlm"&&await b(),e.task_type==="qp"&&await f(),re.success("Task completed successfully"))}catch(s){console.error(s)}finally{v(!1)}}}async function S(){await B(1e3),await Le()}function V(e){if(e.task_id===u){O(e);return}T(e.task_id)}function G(){T(void 0)}const C=c.useCallback(()=>{const e=new Date(new Date().toUTCString().substring(0,25)),s=(r==null?void 0:r.progressupdate_seconds)??0,i=Math.floor(e.getTime()/1e3);return new Date((Math.floor(i/s)*s+s)*1e3)},[r==null?void 0:r.progressupdate_seconds]),$=c.useCallback(e=>{const s=e.minutes>0?`${e.minutes>9?e.minutes:`0${e.minutes}`}`:"00",i=e.seconds>9?e.seconds:`0${e.seconds}`,l=e.hours>9?e.hours:`0${e.hours}`;return e.hours>0?`${l}:${s}:${i}`:`${s}:${i}`},[]),L=c.useCallback(e=>{const s=new Date(new Date().toUTCString().substring(0,25)),i=(r==null?void 0:r.progressupdate_seconds)??1,l=(r==null?void 0:r.tick_percent_decrease)??1,P=Math.floor(s.getTime()/1e3),E=Math.floor(new Date(e==null?void 0:e.timestamp_created).getTime()/1e3),k=Math.floor(E/i)*i,I=Math.floor(P/i)*i,A=I-k,D=Math.floor(A/i),q=l*-1/100,g=e.currency_start*Math.pow(1+q,D);return console.log(e.title,{progressUpdateSeconds:i,tickPercentDecrease:l,dateSinceEpoch:P,timestampCreatedSinceEpoch:E,creation_seconds:k,current_seconds:I,current_duration:A,progress_ticks:D,negative_interest_percent:q,current_price:g}),e.task_type==="tlm"?Math.ceil(g/1e4):Math.floor(g)},[r]),M=c.useCallback(e=>{switch(e){case"qp":return t.jsx(te,{});case"mcp":return t.jsx(qe,{});case"tlm":return t.jsx(U,{});default:return t.jsx(U,{})}},[]),N=c.useCallback((e,s=0)=>{var i,l;return e==="mcp"?((a==null?void 0:a.mcPoints)??0)<s:e==="tlm"?(Number((i=a==null?void 0:a.userTlm)==null?void 0:i.balance)??0)<s:e==="qp"?(((l=a==null?void 0:a.userWeekly)==null?void 0:l.total_quest_points)??0)<s:!0},[a]);return c.useEffect(()=>{if(n){const e=n.map(s=>({...s,current_price:L(s)}));H(e)}},[n,L]),c.useEffect(()=>{const e=setInterval(()=>{const s=se(C());Q($(s)),s.minutes===0&&s.seconds===1&&S()},1e3);return()=>clearInterval(e)},[r,$,C]),t.jsx(c.Suspense,{fallback:t.jsx(oe,{}),children:t.jsxs(le,{children:[t.jsxs(pe,{children:[t.jsx(ue,{children:"Zapp’s Zap Emporium"}),t.jsx("img",{src:"/assets/background/bg-emporium.webp",alt:""})]}),t.jsxs(de,{children:[t.jsxs(xe,{children:[t.jsx(me,{children:"Zapps Tasks"}),t.jsx(fe,{children:"Zapp is currently trying to advance various customer orders. Assist him in completing these tasks, and he will reward you with shards. Since he consistently dedicates time to these tasks, each one becomes easier to complete over time. However, he only requires the assistance of one player per task."})]}),t.jsxs(he,{children:[t.jsxs(ge,{children:[t.jsxs("p",{children:["Next Task Progress: ",t.jsx("span",{children:W})]}),t.jsxs("button",{onClick:()=>F("history"),children:[t.jsx(De,{}),"History"]})]}),t.jsx(ye,{children:p?Array.from({length:8}).map((e,s)=>t.jsx(Ce,{},s)):h==null?void 0:h.map(e=>{var s;return t.jsxs(we,{isSelected:u===e.task_id,children:[t.jsxs(_e,{children:[(e.shards/10).toLocaleString("en-US")," ",t.jsx(R,{})]}),t.jsx("img",{src:`/assets/tasks/${e.image}.webp`,title:e.title,alt:e.title}),u!==e.task_id&&t.jsx(be,{children:e.title}),u===e.task_id?t.jsxs(Te,{children:[t.jsx(ce,{size:30,color:"#fff",onClick:G}),t.jsxs(je,{children:["Are you sure you want to spend"," ",t.jsxs(t.Fragment,{children:[(s=e==null?void 0:e.current_price)==null?void 0:s.toLocaleString("en-US"),M(e.task_type)]}),"to complete the task and gain"," ",(e.shards/10).toLocaleString("en-US"),t.jsx(R,{})," ?"]})]}):t.jsx(ve,{children:e.description.split("[currency]").flatMap(i=>{var l;return[i,t.jsxs("span",{children:[(l=e==null?void 0:e.current_price)==null?void 0:l.toLocaleString("en-US"),M(e.task_type)]},i)]}).slice(0,-1)}),t.jsx(ne,{disabled:j||N(e.task_type,e.current_price),isLoading:j,onClick:()=>V(e),color:u===e.task_id?"gradientYellow":"solidBlue",noBorder:!0,rounded:!1,children:u===e.task_id?"Confirm":e.button})]},e.task_id)})})]})]})]})})};export{Fe as default};
