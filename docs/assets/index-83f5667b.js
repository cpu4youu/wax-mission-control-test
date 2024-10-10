import{s as i,R as a,_ as l,u as v,b as w,j as e,I as _,B as E}from"./index-5c0be45d.js";import{d as u}from"./defaultAvatar-88d7773c.js";const C=i("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",maxWidth:"400px",w:"100%","@sm":{align:"center",padding:"20px 10px",bg:"rgba(255, 255, 255, 0.05)"}}),$=i("div",{d:"flex",align:"center",justify:"center",direction:"column",bg:"rgba(217, 217, 217, 0.16)",padding:"20px",w:"300px"}),M=i("h3",{color:"$white500",mb:"20px",textAlign:"center"}),A=i("p",{ff:"$heading",fw:"$thin",textAlign:"center",color:"$white500",fs:"12px",button:{mt:"20px",width:"125px",height:"25px"}}),L=i("div",{d:"flex",align:"center",justify:"center",br:"9999999px",border:"5px solid grey",overflow:"hidden",position:"relative",w:"100px",h:"100px",img:{position:"absolute",inset:"-2px",w:"100px",h:"100px"},variants:{rarity:{Abundant:{borderColor:"#737373"},Common:{borderColor:"#232323"},Rare:{borderColor:"#3d74e9"},Epic:{borderColor:"#8719f0"},Legendary:{borderColor:"#da992e"},Mythical:{borderColor:"#d20066"}}}}),P=i("h3",{d:"flex",align:"center",justify:"center",mt:"15px",color:"$white500"}),j=i("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"15px",mt:"15px",w:"100%",color:"$white500"}),r=i("div",{d:"flex",align:"center",justify:"space-between",w:"100%",color:"$white500"}),o=i("span",{d:"flex",align:"center",justify:"center",direction:"column",fw:"100",ff:"$heading",color:"$white500"}),s=i("span",{d:"flex",align:"center",justify:"center",gap:"5px",fw:"100",ff:"$heading",color:"$white500"}),R=a.lazy(()=>l(()=>import("./quest-7a23f41d.js"),["assets/quest-7a23f41d.js","assets/index-5c0be45d.js","assets/index-55fec1ff.css"])),S=a.lazy(()=>l(()=>import("./star-0c97b533.js"),["assets/star-0c97b533.js","assets/index-5c0be45d.js","assets/index-55fec1ff.css"])),T=a.lazy(()=>l(()=>import("./tlm-b802662f.js"),["assets/tlm-b802662f.js","assets/index-5c0be45d.js","assets/index-55fec1ff.css"])),I=()=>{var c,d,x,p,h;const n=a.useRef(null),f=v(),t=w(y=>y.user);function g(){n!=null&&n.current&&(n.current.src=u)}return e.jsx(C,{children:t!=null&&t.member||t!=null&&t.trial?e.jsxs(e.Fragment,{children:[e.jsx(L,{rarity:t==null?void 0:t.avatarrarity,children:t.avatarCollection==="alienavatars"?e.jsx("img",{src:`https://ipfs.alienworlds.io/ipfs/${t.avatar}`,style:{position:"relative",width:"440px",height:"400px",minWidth:"440px",minHeight:"400px",objectFit:"none",scale:"0.24",objectPosition:"41% 0%"}}):e.jsx("img",{ref:n,onError:g,src:(t==null?void 0:t.avatar)!=="-"?`${_}/ipfs/${t==null?void 0:t.avatar}`:u,alt:""})}),e.jsx(P,{children:(t==null?void 0:t.playertag)??(t==null?void 0:t.name)}),e.jsxs(j,{children:[e.jsxs(r,{children:[e.jsx(o,{children:"TLM:"}),e.jsxs(s,{children:[((d=Number((c=t==null?void 0:t.userTlm)==null?void 0:c.balance))==null?void 0:d.toLocaleString("en-us"))??0," ",e.jsx(T,{})]})]}),e.jsxs(r,{children:[e.jsx(o,{children:"MC Points:"}),e.jsxs(s,{children:[((x=t==null?void 0:t.mcPoints)==null?void 0:x.toLocaleString("en-us"))??0,e.jsx(S,{})]})]}),e.jsxs(r,{children:[e.jsx(o,{children:"Reward Points:"}),e.jsxs(s,{children:[((h=(p=t==null?void 0:t.userWeekly)==null?void 0:p.total_quest_points)==null?void 0:h.toLocaleString("en-us"))??0," ",e.jsx(R,{})]})]})]}),e.jsx(j,{children:e.jsxs(r,{children:[e.jsx(o,{children:"Wallet:"}),e.jsx(s,{children:t==null?void 0:t.name})]})})]}):e.jsxs($,{children:[e.jsx(M,{children:"BECOME A MEMBER OF MISSION CONTROL"}),e.jsxs(A,{children:["Earn MC Points each time you gain Shards in Alien Worlds ",e.jsx("br",{})," ",e.jsx("br",{}),"Use the Mine Maximizer to optimize your TLM mining ",e.jsx("br",{}),e.jsx("br",{})," Complete Weekly Quests and go on adventures to earn additional Trilium ",e.jsx("br",{}),e.jsx("br",{})," Vote for your favorite candidates to give them an edge in the weekly elections",e.jsx(E,{onClick:()=>f("/membership"),color:"gradientPink",children:"Apply now"})]})]})})};export{I as default};