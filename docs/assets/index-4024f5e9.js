import{s as r,e as H,j as e,a as G,Q as q,al as Q,R as g,am as z,V as X,f as h,b as J,au as P,B,m as F,a1 as e1,n as t1}from"./index-61b4a039.js";import{B as s1}from"./bolt-66d0944c.js";import{u as o1}from"./index-82231b94.js";import{a as n1}from"./index.esm-3e9dd8c2.js";import{e as r1}from"./execute-equip-land-contract-d8de6a4d.js";const i1=["Rocky Desert","Grassland","Dormant Volcano","Icy Mountains","Rocky Crater","Sandy Desert","Mountains","Icy Desert","Rocky Coastline","Plains","Methane Swampland","Small Island","Dunes","Tree Forest","Geothermal Springs","Active Volcano","Mushroom Forest","Inland River","Grass Coastline","Sandy Coastline"],a1=r("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",maxW:"1190px",padding:"0 10px",">svg":{mr:"auto",mt:"20px",cursor:"pointer"}}),b=r("h3",{d:"flex",mr:"auto",mt:"25px",gap:"10px",w:"100%",fs:"29px",fw:"$bold",ff:"$heading",color:"$white500","@sm":{fs:"18px",flexWrap:"wrap",span:{w:"100%"}}}),c1=r("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"20px",mt:"30px",mb:"30px",w:"100%","@sm":{justify:"center"}}),x1=r("button",{d:"flex",align:"center",justify:"flex-start",direction:"column",variants:{isSelected:{true:{filter:"drop-shadow(0 0 0.75rem rgb(0, 186, 255))"}}}}),p1=r("p",{fs:"18px",fw:"$bold",ff:"$heading",color:"$white500",textTransform:"uppercase",mb:"10px"}),d1=r("img",{w:"75px",h:"75px"}),D=r("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",margin:"auto",w:"100%","@md":{d:"flex",padding:"0 20px",flexWrap:"wrap"},"@sm":{align:"center",padding:"0px"}}),m1=r("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"5px",mt:"15px",w:"100%",maxW:"900px","@md":{d:"flex",padding:"0 20px",flexWrap:"wrap"},"@sm":{justify:"center",padding:"0px"}}),u1=r("button",{w:"82px",h:"82px",img:{objectFit:"cover",w:"82px",h:"82px"},"&:disabled":{cursor:"not-allowed",opacity:.5,filter:"grayscale(100%)"},variants:{isSelected:{true:{img:{border:"3px solid #00BAFF"}}}}}),S=r("div",{d:"flex",align:"center",justify:"center",gap:"5px",fs:"20px",ff:"$heading",fw:"$bold",color:"$white500",svg:{w:"30px",h:"30px"},"@sm":{}}),l1=r("button",{d:"flex",align:"center",justify:"center",ml:"auto",svg:{w:"30px",h:"30px"},"@sm":{}}),f1=r("div",{d:"flex",align:"center",justify:"flex-start",gap:"15px",my:"25px",svg:{w:"30px",h:"30px"},"@sm":{flexWrap:"wrap"}}),E=r("div",{d:"flex",align:"center",justify:"center",gap:"5px",fs:"18px",ff:"$heading",fw:"$medium",color:"$white500",input:{padding:"5px",border:"2px solid $white500",br:"5px",h:"40px",w:"55px",maxW:"150px",fs:"18px",ff:"$heading",fw:"$medium","&.owner":{w:"150px"}},"@sm":{}}),h1=r("button",{d:"flex",align:"center",justify:"center",ml:"auto",svg:{w:"30px",h:"30px"},"@sm":{}}),g1=r("p",{maxW:"900px",mr:"auto",fs:"18px",ff:"$body",fw:"$medium",color:"$white500","@sm":{fs:"18px"}}),w1=r("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"25px",mt:"15px",w:"100%","@md":{d:"flex",justify:"center",padding:"0 20px"},"@sm":{padding:"0 10px"}}),C1=r("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",position:"relative",">button":{h:"25px",minW:"100%",div:{fs:"16px",border:"none",br:"10px"}},span:{fs:"16px",ff:"$body",color:"$white500"},"@sm":{w:"100%",img:{objectFit:"cover",h:"140px",w:"100%"}}}),j1=r("div",{d:"flex",align:"flex-start",justify:"flex-start",position:"absolute",fs:"16px",ff:"$heading",fw:"$bold",textShadow:"0px 2px 2px #000",color:"$white500",left:"5px",top:"5px","@sm":{w:"100%"}}),L=H({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),y1=r("div",{d:"flex",w:"50%",h:"50px",mt:"10px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${L} 1.2s ease-in-out infinite`,"@sm":{h:"60px",w:"100%"}}),b1=r("div",{d:"flex",w:"85%",h:"50px",mt:"10px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${L} 1.2s ease-in-out infinite`,"@sm":{h:"120px",w:"100%"}}),S1=r("div",{d:"flex",w:"240px",h:"220px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${L} 1.2s ease-in-out infinite`,"@sm":{w:"100%",h:"240px"}}),L1=()=>e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M16.7339 15.1277L14.9875 13.3813C14.8334 13.2272 14.6793 13.1758 14.4739 13.1758C14.2684 13.1758 14.1143 13.2272 13.9602 13.3813L2.7624 24.6305C2.4542 24.9387 2.4542 25.401 2.7624 25.6578L4.50884 27.4042C4.81704 27.7125 5.27933 27.7125 5.53616 27.4042L16.7339 16.2064C16.8881 16.0523 16.9394 15.8982 16.9394 15.6927C16.9394 15.4873 16.8367 15.2818 16.7339 15.1277Z",fill:"white"}),e.jsx("path",{d:"M23.8726 11.326L23.2563 10.6583L23.6158 8.24403C23.6672 8.03859 23.5644 7.78172 23.4104 7.62765L22.4858 6.70303C22.3317 6.54897 22.0748 6.44622 21.8694 6.49759L19.5065 6.85715L18.8388 6.29209C18.5306 6.03528 18.1196 6.03528 17.8628 6.34347L15.7054 8.50084C15.5 8.70634 15.4486 9.0659 15.5514 9.32272L16.065 10.35L16.0136 11.6856C16.0136 11.891 16.065 12.0965 16.2191 12.2506L17.9656 13.997C18.1196 14.1512 18.3251 14.2025 18.5306 14.2025L19.8661 14.1512L20.8934 14.6648C21.1503 14.8189 21.5098 14.7675 21.7153 14.5107L23.8726 12.3533C24.1295 12.0452 24.1295 11.6342 23.8726 11.326Z",fill:"white"}),e.jsx("path",{d:"M27.4697 20.315V16.8221C27.4697 16.7194 27.4183 16.5653 27.367 16.4626L25.9801 13.997C25.8773 13.7915 25.6719 13.6888 25.4665 13.6374C25.261 13.586 25.0042 13.6888 24.85 13.8429L22.8982 15.7948C22.59 16.0516 22.59 16.4626 22.8468 16.7708L26.1856 20.8287L26.2369 20.88C26.4424 21.0855 26.7506 21.1369 27.0074 21.0341C27.2643 20.88 27.4697 20.6232 27.4697 20.315Z",fill:"white"}),e.jsx("path",{d:"M16.5281 4.75192C16.4768 4.54645 16.3741 4.34098 16.1686 4.23825L13.703 2.85137C13.549 2.74863 13.4462 2.69727 13.2921 2.69727H9.7992C9.49102 2.69727 9.2342 2.90273 9.13145 3.15956C9.0287 3.41639 9.08008 3.72459 9.28558 3.93005L9.33695 3.98142L13.3948 7.32023C13.703 7.57704 14.114 7.52567 14.3708 7.26885L16.3227 5.31695C16.4768 5.16285 16.5281 4.95738 16.5281 4.75192Z",fill:"white"})]}),v1=()=>e.jsx("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.5018 2.79278C14.5018 3.63542 14.0853 4.38079 13.4468 4.8341C14.4384 5.02867 15.3598 5.41942 16.1687 5.96423C16.1474 5.8331 16.1364 5.6986 16.1364 5.56148C16.1364 4.17979 17.2565 3.05971 18.6382 3.05971C20.0199 3.05971 21.1399 4.17979 21.1399 5.56148C21.1399 6.94317 20.0199 8.06323 18.6382 8.06323C18.4967 8.06323 18.358 8.05148 18.2229 8.02892C18.7568 8.83029 19.1399 9.74073 19.3319 10.7196C19.7852 10.081 20.5306 9.66429 21.3734 9.66429C22.7551 9.66429 23.8751 10.7844 23.8751 12.166C23.8751 13.5477 22.7551 14.6678 21.3734 14.6678C20.5306 14.6678 19.7852 14.2511 19.3319 13.6125C19.1369 14.6069 18.7446 15.5305 18.1975 16.341C18.3406 16.3156 18.4878 16.3024 18.6382 16.3024C20.0199 16.3024 21.1399 17.4224 21.1399 18.8041C21.1399 20.1858 20.0199 21.3059 18.6382 21.3059C17.2565 21.3059 16.1364 20.1858 16.1364 18.8041C16.1364 18.6538 16.1497 18.5065 16.1751 18.3635C15.3646 18.9105 14.4411 19.3029 13.4468 19.4979C14.0853 19.9512 14.502 20.6966 14.502 21.5393C14.502 22.921 13.3819 24.041 12.0002 24.041C10.6185 24.041 9.49844 22.921 9.49844 21.5393C9.49844 20.6967 9.915 19.9514 10.5534 19.498C9.57469 19.306 8.66444 18.923 7.86313 18.3893C7.88563 18.5242 7.89738 18.6628 7.89738 18.8041C7.89738 20.1858 6.77731 21.3059 5.39563 21.3059C4.01394 21.3059 2.89385 20.1858 2.89385 18.8041C2.89385 17.4224 4.01394 16.3024 5.39563 16.3024C5.53256 16.3024 5.66694 16.3134 5.79794 16.3345C5.25319 15.5257 4.8625 14.6044 4.66794 13.6129C4.21463 14.2513 3.46931 14.6679 2.62676 14.6679C1.24508 14.6679 0.125 13.5477 0.125 12.166C0.125 10.7844 1.24508 9.66429 2.62676 9.66429C3.46931 9.66429 4.21463 10.0809 4.66794 10.7192C4.8595 9.74292 5.24119 8.83473 5.77294 8.03485C5.64981 8.05348 5.52375 8.06317 5.3955 8.06317C4.01381 8.06317 2.89371 6.9431 2.89371 5.56142C2.89371 4.17973 4.01381 3.05965 5.3955 3.05965C6.77713 3.05965 7.89725 4.17973 7.89725 5.56142C7.89725 5.68973 7.88757 5.81579 7.86894 5.93892C8.66882 5.40723 9.577 5.02554 10.5533 4.83404C9.91488 4.38073 9.49832 3.63542 9.49832 2.79278C9.49832 1.41109 10.6184 0.291016 12.0001 0.291016C13.3818 0.291016 14.5018 1.41109 14.5018 2.79278Z",fill:"white"})}),_1=n=>G({queryKey:[n,q.AvailableLands],queryFn:()=>$1(n),staleTime:1e3*60*60});async function $1(n){if(!n)return[];try{const{getTemplates:s}=Q;return(await s({collection_name:"alien.worlds",schema_name:"land.worlds",match:n,page:1,limit:100,order:"desc"})).map(c=>{const d=c.immutable_data.name.split(" on ");return{...c.immutable_data,planetName:d[1]||"",landName:d[0]||""}})}catch(s){return console.log(s),[]}}const k1=(n,s)=>G({queryKey:[n,q.AvailableLands,s],queryFn:()=>R1(n,s),staleTime:1e3*60*60});async function R1(n,s){var l,c,d,f;if(!n)return[];try{const{getAssets:m}=Q;let x={collection_name:"alien.worlds",schema_name:"land.worlds",match:n,page:1,limit:1e3};return s!=null&&s.owner&&(x={collection_name:"alien.worlds",schema_name:"land.worlds",owner:s.owner,match:n,page:1,limit:1e3}),(l=s==null?void 0:s.coordinates)!=null&&l.x&&(x={collection_name:"alien.worlds",schema_name:"land.worlds",owner:s==null?void 0:s.owner,"immutable_data:number.x":s.coordinates.x,match:n.split(" on ")[1],page:1,limit:1e3}),(c=s==null?void 0:s.coordinates)!=null&&c.y&&(x={collection_name:"alien.worlds",schema_name:"land.worlds",owner:s==null?void 0:s.owner,"immutable_data:number.y":s.coordinates.y,match:n.split(" on ")[1],page:1,limit:1e3}),(d=s==null?void 0:s.coordinates)!=null&&d.x&&((f=s==null?void 0:s.coordinates)!=null&&f.y)&&(x={collection_name:"alien.worlds",schema_name:"land.worlds",owner:s==null?void 0:s.owner,"immutable_data:number.x":s.coordinates.x,"immutable_data:number.y":s.coordinates.y,match:n.split(" on ")[1],page:1,limit:1e3}),(await m(x)).map(a=>{const u=a.data.name.split(" on ");return{...a.data,assetId:a.asset_id,owner:a.owner,planetName:u[1]||"",landName:u[0]||""}})}catch(m){return console.log(m),[]}}const T1=g.lazy(()=>z(()=>import("./filter-c5e1ba2e.js"),["assets/filter-c5e1ba2e.js","assets/index-61b4a039.js","assets/index-55fec1ff.css"])),A1=g.lazy(()=>z(()=>import("./search-89892224.js"),["assets/search-89892224.js","assets/index-61b4a039.js","assets/index-55fec1ff.css"])),W1={owner:"",coordinates:{x:void 0,y:void 0}},E1=()=>{var k,R,T,A,W,I;const{data:n}=X(),[s,l]=h.useState(n==null?void 0:n.planetName),[c,d]=h.useState(n==null?void 0:n.landName),[f,m]=h.useState(!1),[x,v]=h.useState(!1),[a,u]=h.useState(W1),{data:C}=_1(s),{data:o,isLoading:_}=k1(`${c} on ${s}`,a),$=J(t=>t.user),j=g.useRef(null),y=g.useRef(null),w=g.useRef(null);function O(){o1.setState({selectedPage:"main"})}function U(t){l(t),u(i=>{var p;return{...i,owner:((p=w.current)==null?void 0:p.value)??""}})}function Z(t){d(t),u(i=>{var p;return{...i,owner:((p=w.current)==null?void 0:p.value)??"",coordinates:{x:void 0,y:void 0}}})}function K(){u(t=>{var i,p,N,V,M;return{...t,owner:((i=w.current)==null?void 0:i.value)??"",coordinates:{x:(p=j.current)!=null&&p.value?Number((N=j.current)==null?void 0:N.value):void 0,y:(V=y.current)!=null&&V.value?Number((M=y.current)==null?void 0:M.value):void 0}}})}async function Y(t){if($){m(!0);try{await r1($,t)&&(await F(1e3),await e1(),t1.success("Land added to current setup"))}catch(i){console.error(i)}finally{m(!1)}}}return e.jsxs(a1,{children:[e.jsx(n1,{size:30,color:"#fff",onClick:O}),e.jsx(b,{children:"Planet"}),e.jsx(c1,{children:P.map(t=>e.jsxs(x1,{onClick:()=>U(t),isSelected:(s==null?void 0:s.toLowerCase())===t,children:[e.jsx(p1,{children:t}),e.jsx(d1,{src:`/assets/planets/${t}.png`,alt:t,title:t})]},t))}),e.jsxs(D,{children:[e.jsx(b,{children:"Land Type"}),e.jsx(m1,{children:i1.map(t=>e.jsx(u1,{onClick:()=>Z(t),disabled:!(C!=null&&C.some(i=>i.landName===t)),isSelected:c===t,children:e.jsx("img",{src:`/assets/lands/${t}.webp`,alt:t,title:t})},t))})]}),e.jsxs(D,{children:[_?e.jsxs(e.Fragment,{children:[e.jsx(y1,{}),e.jsx(b1,{})]}):e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[o!=null&&o[0]?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:(k=o==null?void 0:o[0])==null?void 0:k.landName}),e.jsxs(S,{children:[e.jsx(v1,{}),(((R=o==null?void 0:o[0])==null?void 0:R.luck)/10).toLocaleString("US-en")]}),e.jsxs(S,{children:[e.jsx(L1,{}),(((T=o==null?void 0:o[0])==null?void 0:T.ease)/10).toLocaleString("US-en")]}),e.jsxs(S,{children:[e.jsx(s1,{fill:!0,color:"white"}),(((A=o==null?void 0:o[0])==null?void 0:A.delay)/10).toLocaleString("US-en")]})]}):e.jsx("span",{children:"No Lands finded"}),e.jsx(l1,{onClick:()=>v(!x),children:e.jsx(T1,{})})]}),x&&e.jsxs(f1,{children:[e.jsxs(E,{children:["Coordinates",e.jsx("input",{ref:j,type:"text",defaultValue:a.coordinates.x}),":",e.jsx("input",{ref:y,type:"text",defaultValue:a.coordinates.y})]}),e.jsxs(E,{children:["Owner",e.jsx("input",{ref:w,className:"owner",type:"text",defaultValue:a.owner})]}),e.jsx(h1,{onClick:K,children:e.jsx(A1,{})})]}),(o==null?void 0:o[0])&&e.jsxs(g1,{children:["The ",(W=o==null?void 0:o[0])==null?void 0:W.landName," are a great place to mine on if you are looking for a good balance between shards, TLM and not too frequent mining."]})]}),e.jsx(w1,{children:_?Array.from({length:8}).map((t,i)=>e.jsx(S1,{},i)):(I=o==null?void 0:o.sort((t,i)=>t.commission-i.commission))==null?void 0:I.map(t=>e.jsxs(C1,{children:[e.jsxs(j1,{children:[t==null?void 0:t.x,":",t==null?void 0:t.y]}),e.jsx("img",{src:`/assets/lands/${t.landName}.webp`,alt:t.landName,title:t.landName}),e.jsxs("span",{children:["Commission: ",(t==null?void 0:t.commission)/100," %"]}),e.jsxs("span",{children:["Owner: ",t==null?void 0:t.owner]}),e.jsx(B,{isLoading:f,disabled:f,onClick:()=>Y(t.assetId),color:"eleventh",children:"Select"})]},t.assetId))})]})]})};export{E1 as default};
