import{ar as A,_,as as T,at as k,au as D,av as L,aw as N,ax as C,e as E,s as c,c as I,r as F,S as x,T as O,Q as z,u as $,ah as W,p as q,b as y,f as j,j as n,I as B,B as S,aj as M}from"./index-9ade6ec4.js";import{I as U}from"./info-builder-46f44e1e.js";import{S as Q}from"./index-963f56a1.js";import"./index.esm-e3e5bf03.js";import"./Combination-050e248b.js";import"./index-312a7256.js";import"./gradient-border-606590eb.js";var V=function(e){A(a,e);function a(r,t){return e.call(this,r,t)||this}var o=a.prototype;return o.bindMethods=function(){e.prototype.bindMethods.call(this),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)},o.setOptions=function(t,l){e.prototype.setOptions.call(this,_({},t,{behavior:T()}),l)},o.getOptimisticResult=function(t){return t.behavior=T(),e.prototype.getOptimisticResult.call(this,t)},o.fetchNextPage=function(t){var l;return this.fetch({cancelRefetch:(l=t==null?void 0:t.cancelRefetch)!=null?l:!0,throwOnError:t==null?void 0:t.throwOnError,meta:{fetchMore:{direction:"forward",pageParam:t==null?void 0:t.pageParam}}})},o.fetchPreviousPage=function(t){var l;return this.fetch({cancelRefetch:(l=t==null?void 0:t.cancelRefetch)!=null?l:!0,throwOnError:t==null?void 0:t.throwOnError,meta:{fetchMore:{direction:"backward",pageParam:t==null?void 0:t.pageParam}}})},o.createResult=function(t,l){var f,u,h,g,m,p,i=t.state,s=e.prototype.createResult.call(this,t,l);return _({},s,{fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:k(l,(f=i.data)==null?void 0:f.pages),hasPreviousPage:D(l,(u=i.data)==null?void 0:u.pages),isFetchingNextPage:i.isFetching&&((h=i.fetchMeta)==null||(g=h.fetchMore)==null?void 0:g.direction)==="forward",isFetchingPreviousPage:i.isFetching&&((m=i.fetchMeta)==null||(p=m.fetchMore)==null?void 0:p.direction)==="backward"})},a}(L);function G(e,a,o){var r=N(e,a,o);return C(r,V)}const K=E({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),H=c("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%","@sm":{padding:"0 15px"}}),Y=c("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),J=c("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),X=c("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1302px",">button":{mt:"40px",h:"50px",w:"240px",div:{fs:"15px",border:"none"}},"@md":{d:"flex",flexWrap:"wrap"}}),Z=c("div",{d:"flex",align:"center",justify:"center",gap:"10px",mt:"30px",padding:"20px",br:"8px",bg:"rgba(255, 255, 255, 0.09)",svg:{color:"$white500",w:"50px",h:"50px",mr:"auto"},"@sm":{d:"none"}}),ee=c("span",{w:"100%",color:"$white500",textAlign:"center",fs:"16px",ff:"$heading","@lg":{fs:"12px"},"@md":{fs:"10px"},"@sm":{}}),te=c("div",{d:"flex",align:"center",justify:"center",direction:"column"}),ne=c("h2",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"100%",mt:"30px",mb:"10px",color:"$white500",fs:"20px",ff:"$body",fw:"$thin"}),se=c("div",{d:"flex",align:"flex-start",justify:"flex-start",gap:"20px","@xsm":{flexWrap:"wrap"}}),ae=c("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"30%",gap:"20px",img:{w:"100%",objectFit:"contain",br:"10px"},"@xsm":{w:"100%"}}),re=c("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"2px",w:"100%"}),P=c("div",{d:"flex",align:"center",justify:"center",w:"100%",gap:"2px",span:{bg:"rgba(255, 255, 255, 0.02)",w:"100%",color:"$white500",fs:"16px",ff:"$body",fw:"$thin",textAlign:"center"}}),oe=c("div",{d:"flex",align:"center",justify:"space-between",direction:"column",gap:"20px",w:"70%",minH:"312px",padding:"40px 20px 15px 20px",bg:"rgba(255, 255, 255, 0.02)","@xsm":{w:"100%"}}),ie=c("p",{d:"flex",align:"center",justify:"center",direction:"column",color:"$white500",fs:"16px",ff:"$heading",textAlign:"center"}),ce=c("div",{d:"flex",align:"center",justify:"space-between",w:"100%",">button":{h:"50px",w:"240px",div:{fs:"15px",border:"none"}},"@md":{justify:"center",flexWrap:"wrap"}}),le=c("div",{d:"flex",align:"center",justify:"center",gap:"5px",">button":{h:"50px",w:"240px",div:{fs:"15px",border:"none"}},">div>button":{minWidth:"170px"},"@md":{flexWrap:"wrap"}});c("div",{mt:"10px",w:"100%",height:"200px",background:"linear-gradient( -90deg, rgba(3, 16, 32, 0.40), rgba(3, 16, 32, 0.75) ,rgba(3, 16, 32, 0.40))",br:"10px",backgroundSize:"400% 400%",animation:`${K} 1.2s ease-in-out infinite`});const b=[{label:"Eyeke",value:"eyeke"},{label:"Kavian",value:"kavian"},{label:"Magor",value:"magor"},{label:"Naron",value:"naron"},{label:"Neri",value:"nerix"},{label:"Veles",value:"veles"}];I((e,a)=>({sponsorFilters:b,setSponsorFilters:o=>{e({sponsorFilters:o})}}));const de=async e=>await F.get_table_rows({code:x.ADVENTURE_MC,index_position:1,limit:"10",scope:x.ADVENTURE_MC,table:O.predefs,lower_bound:e}),ue=()=>G({queryKey:[z.SponsorAdv],queryFn:fe,getNextPageParam:e=>e==null?void 0:e.next_key,staleTime:1e3*60*60});async function fe({pageParam:e=null}){try{const a=await de(e);return a?{data:a.rows,next_key:a.next_key}:{data:[],next_key:null}}catch(a){return console.log(a),null}}async function pe(e,a){const{executeTransaction:o}=$(),r=xe(e,a);return!!await o(r)}function xe(e,a){return{actions:[{account:x.ALIEN_WORLDS,name:"transfer",authorization:[{actor:a.name,permission:a.requestPermission}],data:{from:a.name,to:"adventure.mc",memo:`mcadventure,${e}`,quantity:"5000 TLM"}}]}}async function he(e){const{executeTransaction:a,serializeActions:o}=$(),r=await o([{account:x.ALIEN_WORLDS,name:"transfer",authorization:[{actor:e.user.name,permission:e.user.requestPermission}],data:{from:e.user.name,to:"adventure.mc",memo:`adventure,${e.preDef.predefid}`,quantity:"5000.0000 TLM"}}]),t=ge(e,r);return!!await a(t)}function ge(e,a){return{actions:[{account:x.MSIG_WORLDS,name:"propose",authorization:[{actor:e.user.name,permission:e.user.requestPermission}],data:{proposer:e.user.name,proposal_name:Math.random().toString(36).replace(/[^a-z1-5]+/g,"").substring(0,12),requested:[{actor:`${e.selectedPlanet}.dac`,permission:"active"}],dac_id:e.selectedPlanet,metadata:[{key:"title",value:"Sponsoring Mission Control adventure"},{key:"description",value:`Sponsoring adventure ${e.preDef.title} for Mission Control. Play Mission Control on https://waxmissioncontrol.io`}],trx:{expiration:W(q,7),ref_block_num:0,ref_block_prefix:0,max_net_usage_words:0,max_cpu_usage_ms:0,delay_sec:0,context_free_actions:[],actions:a,transaction_extensions:[]}}}]}}const Pe=()=>{var p;const{data:e,fetchNextPage:a,isFetchingNextPage:o}=ue(),r=y(i=>i.user),[t,l]=j.useState(void 0),[f,u]=j.useState(!1);function h(i,s){const d={...t,[i]:s};l(d)}async function g(i){var s;if(r)try{u(!0);const d={user:r,preDef:i,selectedPlanet:((s=t==null?void 0:t[i.predefid])==null?void 0:s.value)||b[0].value};if(console.log(d),await he(d)){const R=await M(r.name);y.setState(v=>({...v,user:v.user?{...v.user,userTlm:R}:null}))}}catch(d){console.log(d)}finally{u(!1)}}async function m(i){if(r)try{if(u(!0),await pe(i,r)){const d=await M(r.name);y.setState(w=>({...w,user:w.user?{...w.user,userTlm:d}:null}))}}catch(s){console.log(s)}finally{u(!1)}}return n.jsx(j.Suspense,{children:n.jsxs(H,{children:[n.jsxs(Y,{children:[n.jsx(J,{children:"Sponsor an adventure"}),n.jsx("img",{src:"/assets/background/bg-sponsor-adventures.jpeg",alt:""})]}),n.jsxs(X,{children:[n.jsxs(Z,{children:[n.jsx(U,{}),n.jsx(ee,{children:"Sponsoring an adventure costs 5,000 TLM and helps the prize pool over the coming weeks and you will be shown in the “latest sponsors” section. Sponsoring an adventure is non-refundable. Only custodians can create a proposal. If you are in need of a customized adventure please contact us in Discord."})]}),(p=e==null?void 0:e.pages)==null?void 0:p.flatMap(i=>i==null?void 0:i.data.map(s=>n.jsxs(te,{children:[n.jsx(ne,{children:s.title}),n.jsxs(se,{children:[n.jsxs(ae,{children:[n.jsx("img",{src:`${B}/ipfs/${s==null?void 0:s.image}`,alt:s.title}),n.jsxs(re,{children:[n.jsxs(P,{children:[n.jsx("span",{children:"Duration"}),n.jsxs("span",{children:[s.duration_hours/24," Days"]})]}),n.jsxs(P,{children:[n.jsx("span",{children:"MC Point Entry Cost"}),n.jsx("span",{children:s.point_cost.toLocaleString("en-US")})]}),n.jsxs(P,{children:[n.jsx("span",{children:"Total Reward Points"}),n.jsx("span",{children:s.reward_qp.toLocaleString("en-US")})]})]})]}),n.jsxs(oe,{children:[n.jsx(ie,{children:s.flavor}),n.jsxs(ce,{children:[n.jsx(S,{disabled:f,isLoading:f,onClick:()=>m(s.predefid),rounded:!1,color:"eleventh",children:"Sponsor for 5,000 TLM"}),n.jsxs(le,{children:[n.jsx(S,{onClick:()=>g(s),rounded:!1,color:"eleventh",children:"Create Proposal"}),n.jsx(Q,{borderColor1:"#D9D9D9",borderColor2:"#D9D9D9",className:"select",title:"",selected:(t==null?void 0:t[s==null?void 0:s.predefid])||b[0],options:b,onSelected:d=>h(s.predefid,d)})]})]})]})]})]},s.predefid))),n.jsx(S,{isLoading:o,disabled:o,rounded:!1,color:"eleventh",onClick:()=>a(),children:"Load More"})]})]})})};export{Pe as default};
