import{s as r,e as de,a as X,Q as Z,V as F,R as l,_,W as xe,aJ as me,h as v,b as C,j as t,aK as ue,aG as pe,B as R,k as A,a1 as le,l as I,O as K,aI as Y}from"./index-0d10b067.js";import{B as fe}from"./bolt-c7752ac8.js";import{u as we}from"./index-87d16175.js";import{a as he}from"./index.esm-98638a39.js";import{e as ge,a as je}from"./execute-remove-favorites-land-contract-a2363284.js";import{e as ye}from"./execute-add-favorites-land-contract copy-0517534c.js";import"./info-builder-e54a6d8f.js";const be=["Rocky Desert","Grassland","Dormant Volcano","Icy Mountains","Rocky Crater","Sandy Desert","Mountains","Icy Desert","Rocky Coastline","Plains","Methane Swampland","Small Island","Dunes","Tree Forest","Geothermal Springs","Active Volcano","Mushroom Forest","Inland River","Grass Coastline","Sandy Coastline"],ve=r("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",maxW:"1190px",padding:"0 10px",">svg":{mr:"auto",mt:"20px",cursor:"pointer"}}),T=r("h3",{d:"flex",mr:"auto",mt:"25px",gap:"10px",w:"100%",fs:"29px",fw:"$bold",ff:"$heading",color:"$white500","@sm":{fs:"18px",flexWrap:"wrap",span:{w:"100%"}}}),_e=r("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"20px",mt:"30px",mb:"30px",w:"100%","@sm":{justify:"center"}}),Se=r("button",{d:"flex",align:"center",justify:"flex-start",direction:"column",variants:{isSelected:{true:{filter:"drop-shadow(0 0 0.75rem rgb(0, 186, 255))"}}}}),Le=r("p",{fs:"18px",fw:"$bold",ff:"$heading",color:"$white500",textTransform:"uppercase",mb:"10px"}),$e=r("img",{w:"75px",h:"75px"}),H=r("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",margin:"auto",w:"100%","@md":{d:"flex",padding:"0 20px",flexWrap:"wrap"},"@sm":{align:"center",padding:"0px"}}),ke=r("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"5px",mt:"15px",w:"100%",maxW:"900px","@md":{d:"flex",padding:"0 20px",flexWrap:"wrap"},"@sm":{justify:"center",padding:"0px"}}),Ce=r("button",{w:"82px",h:"82px",img:{objectFit:"cover",w:"82px",h:"82px"},"&:disabled":{cursor:"not-allowed",opacity:.5,filter:"grayscale(100%)"},variants:{isSelected:{true:{img:{border:"3px solid #00BAFF"}}}}}),V=r("div",{d:"flex",align:"center",justify:"center",gap:"5px",fs:"20px",ff:"$heading",fw:"$bold",color:"$white500",svg:{w:"30px",h:"30px"},"@sm":{}}),Re=r("button",{d:"flex",align:"center",justify:"center",ml:"auto",svg:{w:"30px",h:"30px"},"@sm":{}}),Ae=r("div",{d:"flex",align:"center",justify:"flex-start",gap:"15px",my:"25px",svg:{w:"30px",h:"30px"},"@sm":{flexWrap:"wrap"}}),J=r("div",{d:"flex",align:"center",justify:"center",gap:"5px",fs:"18px",ff:"$heading",fw:"$medium",color:"$white500",input:{padding:"5px",border:"2px solid $white500",br:"5px",h:"40px",w:"55px",maxW:"150px",fs:"18px",ff:"$heading",fw:"$medium","&.owner":{w:"150px"}},"@sm":{}}),Ie=r("button",{d:"flex",align:"center",justify:"center",ml:"auto",svg:{w:"30px",h:"30px"},"@sm":{}});r("p",{maxW:"900px",mr:"auto",fs:"18px",ff:"$body",fw:"$medium",color:"$white500","@sm":{fs:"18px"}});const Te=r("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"25px",mt:"15px",w:"100%","@md":{d:"flex",justify:"center",padding:"0 20px"},"@sm":{padding:"0 10px"}}),Ve=r("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",position:"relative",span:{fs:"16px",ff:"$body",color:"$white500"},"@sm":{w:"100%",img:{objectFit:"cover",h:"140px",w:"100%"}}}),We=r("div",{d:"flex",align:"flex-start",justify:"flex-start",position:"absolute",fs:"16px",ff:"$heading",fw:"$bold",textShadow:"0px 2px 2px #000",color:"$white500",left:"5px",top:"5px","@sm":{w:"100%"}}),Ee=r("div",{d:"flex",align:"flex-start",justify:"flex-start",gap:"5px",w:"100%",">button":{h:"45px",w:"100%",maxW:"unset",minW:"unset",padding:"0",br:"10px","&:last-child":{w:"60px"},div:{br:"10px",fs:"16px",border:"none"}},"@sm":{w:"100%",">button":{"&:last-child":{w:"100%"}}}}),W=de({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),Ge=r("div",{d:"flex",w:"50%",h:"50px",mt:"10px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${W} 1.2s ease-in-out infinite`,"@sm":{h:"60px",w:"100%"}}),Ne=r("div",{d:"flex",w:"85%",h:"50px",mt:"10px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${W} 1.2s ease-in-out infinite`,"@sm":{h:"120px",w:"100%"}}),De=r("div",{d:"flex",w:"240px",h:"220px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${W} 1.2s ease-in-out infinite`,"@sm":{w:"100%",h:"240px"}}),Oe=o=>X({queryKey:[o,Z.AvailableLands],queryFn:()=>ze(o),staleTime:1e3*60*60});async function ze(o){if(!o)return[];try{const{getTemplates:s}=F;return(await s({collection_name:"alien.worlds",schema_name:"land.worlds",match:o,page:1,limit:100,order:"desc"})).map(f=>{const d=f.immutable_data.name.split(" on ");return{...f.immutable_data,planetName:d[1]||"",landName:d[0]||""}})}catch(s){return console.log(s),[]}}const Qe=(o,s)=>X({queryKey:[o,Z.AvailableLands,s],queryFn:()=>Me(o,s),staleTime:1e3*60*60});async function Me(o,s){var S,f,d,L;if(!o)return[];try{const{getAssets:u}=F;let p={collection_name:"alien.worlds",schema_name:"land.worlds",match:o,page:1,limit:1e3};return s!=null&&s.owner&&(p={collection_name:"alien.worlds",schema_name:"land.worlds",owner:s.owner,match:o,page:1,limit:1e3}),(S=s==null?void 0:s.coordinates)!=null&&S.x&&(p={collection_name:"alien.worlds",schema_name:"land.worlds",owner:s==null?void 0:s.owner,"immutable_data:number.x":s.coordinates.x,match:o.split(" on ")[1],page:1,limit:1e3}),(f=s==null?void 0:s.coordinates)!=null&&f.y&&(p={collection_name:"alien.worlds",schema_name:"land.worlds",owner:s==null?void 0:s.owner,"immutable_data:number.y":s.coordinates.y,match:o.split(" on ")[1],page:1,limit:1e3}),(d=s==null?void 0:s.coordinates)!=null&&d.x&&((L=s==null?void 0:s.coordinates)!=null&&L.y)&&(p={collection_name:"alien.worlds",schema_name:"land.worlds",owner:s==null?void 0:s.owner,"immutable_data:number.x":s.coordinates.x,"immutable_data:number.y":s.coordinates.y,match:o.split(" on ")[1],page:1,limit:1e3}),s!=null&&s.template_whitelist&&(p={collection_name:"alien.worlds",schema_name:"land.worlds",template_whitelist:s==null?void 0:s.template_whitelist.join(","),owner:s.owner,match:o,page:1,limit:1e3}),(await u(p)).map(x=>{const g=x.data.name.split(" on ");return{...x.data,assetId:x.asset_id,owner:x.owner,planetName:g[1]||"",landName:g[0]||""}})}catch(u){return console.log(u),[]}}const Pe=l.lazy(()=>_(()=>import("./filter-b8d4080d.js"),["assets/filter-b8d4080d.js","assets/index-0d10b067.js","assets/index-55fec1ff.css"])),Ue=l.lazy(()=>_(()=>import("./search-fdb15928.js"),["assets/search-fdb15928.js","assets/index-0d10b067.js","assets/index-55fec1ff.css"])),qe=l.lazy(()=>_(()=>import("./hearth-07af8dc0.js"),["assets/hearth-07af8dc0.js","assets/index-0d10b067.js","assets/index-55fec1ff.css"])),Be=l.lazy(()=>_(()=>import("./hearth-broken-f169c04f.js"),["assets/hearth-broken-f169c04f.js","assets/index-0d10b067.js","assets/index-55fec1ff.css"])),Ke=l.lazy(()=>_(()=>import("./pickaxe-368ec9b3.js"),["assets/pickaxe-368ec9b3.js","assets/index-0d10b067.js","assets/index-55fec1ff.css"])),tt=()=>{var G,N,D,O,z;const{data:o}=xe(),{data:s,isLoading:S}=me(),f={template_whitelist:(o==null?void 0:o.landName)==="Mountains"?["19546","19530","19510","19496","19478","19463"]:[],owner:"",coordinates:{x:void 0,y:void 0}},[d,L]=v.useState(o==null?void 0:o.planetName),[u,p]=v.useState(o==null?void 0:o.landName),[w,x]=v.useState(!1),[g,ee]=v.useState(!1),[$,j]=v.useState(f),c=C(e=>e.user),y=l.useRef(null),b=l.useRef(null),h=l.useRef(null);function te(){we.setState({selectedPage:"main"})}function se(e){L(e),j(n=>{var i;return{...n,owner:((i=h.current)==null?void 0:i.value)??""}})}function oe(e){var n,i;p(e),j(e==="Mountains"?{template_whitelist:["19546","19530","19510","19496","19478","19463"],owner:((n=h.current)==null?void 0:n.value)??"",coordinates:{x:void 0,y:void 0}}:{template_whitelist:[],owner:((i=h.current)==null?void 0:i.value)??"",coordinates:{x:void 0,y:void 0}})}function ne(){var e,n,i,m,Q,M,P,U,q,B;if(u==="Mountains"){j({template_whitelist:["19546","19530","19510","19496","19478","19463"],owner:((e=h.current)==null?void 0:e.value)??"",coordinates:{x:(n=y.current)!=null&&n.value?Number((i=y.current)==null?void 0:i.value):void 0,y:(m=b.current)!=null&&m.value?Number((Q=b.current)==null?void 0:Q.value):void 0}});return}console.log({selectedLand:u}),j({owner:((M=h.current)==null?void 0:M.value)??"",coordinates:{x:(P=y.current)!=null&&P.value?Number((U=y.current)==null?void 0:U.value):void 0,y:(q=b.current)!=null&&q.value?Number((B=b.current)==null?void 0:B.value):void 0}})}async function re(e){if(c){x(!0);try{await ge(c,e)&&(await A(1e3),await le(),I.success("Land added to current setup"))}catch(n){console.error(n)}finally{x(!1)}}}async function ae(e){if(c){x(!0);try{if(await ye(c,e)){await A(1e3);const i=await K(c==null?void 0:c.name);C.setState(m=>({...m,user:m.user?{...m.user,...i}:null})),await Y(),I.success("Current Land added to favorites")}}catch(n){console.error(n)}finally{x(!1)}}}async function ie(e){if(c){x(!0);try{if(await je(c,e)){await A(1e3);const i=await K(c==null?void 0:c.name);C.setState(m=>({...m,user:m.user?{...m.user,...i}:null})),await Y(),I.success("Land removed from favorites")}}catch(n){console.error(n)}finally{x(!1)}}}const ce=e=>s==null?void 0:s.favoriteLands.some(n=>n.map(({assetId:i})=>i).join(",")===e),{data:k}=Oe(d),{data:a,isLoading:E}=Qe(`${u} on ${d}`,$);return t.jsxs(ve,{children:[t.jsx(he,{size:30,color:"#fff",onClick:te}),t.jsx(T,{children:"Planet"}),t.jsx(_e,{children:ue.map(e=>t.jsxs(Se,{onClick:()=>se(e),isSelected:(d==null?void 0:d.toLowerCase())===e,children:[t.jsx(Le,{children:e}),t.jsx($e,{src:`/assets/planets/${e}.png`,alt:e,title:e})]},e))}),t.jsxs(H,{children:[t.jsx(T,{children:"Land Type"}),t.jsx(ke,{children:be.map(e=>t.jsx(Ce,{onClick:()=>oe(e),disabled:!(k!=null&&k.some(n=>n.landName===e)),isSelected:u===e,children:t.jsx("img",{src:`/assets/lands/${e}.webp`,alt:e,title:e})},e))})]}),t.jsxs(H,{children:[E?t.jsxs(t.Fragment,{children:[t.jsx(Ge,{}),t.jsx(Ne,{})]}):t.jsxs(t.Fragment,{children:[t.jsxs(T,{children:[a!=null&&a[0]?t.jsxs(t.Fragment,{children:[t.jsx("span",{children:(G=a==null?void 0:a[0])==null?void 0:G.landName}),t.jsxs(V,{children:[t.jsx(pe,{}),(((N=a==null?void 0:a[0])==null?void 0:N.luck)/10).toLocaleString("US-en")]}),t.jsxs(V,{children:[t.jsx(Ke,{}),(((D=a==null?void 0:a[0])==null?void 0:D.ease)/10).toLocaleString("US-en")]}),t.jsxs(V,{children:[t.jsx(fe,{fill:!0,color:"white"}),(((O=a==null?void 0:a[0])==null?void 0:O.delay)/10).toLocaleString("US-en")]})]}):t.jsx("span",{children:"No lands found"}),t.jsx(Re,{onClick:()=>ee(!g),children:t.jsx(Pe,{})})]}),g&&t.jsxs(Ae,{children:[t.jsxs(J,{children:["Coordinates",t.jsx("input",{ref:y,type:"text",defaultValue:$.coordinates.x}),":",t.jsx("input",{ref:b,type:"text",defaultValue:$.coordinates.y})]}),t.jsxs(J,{children:["Owner",t.jsx("input",{ref:h,className:"owner",type:"text",defaultValue:$.owner})]}),t.jsx(Ie,{onClick:ne,children:t.jsx(Ue,{})})]})]}),t.jsx(Te,{children:E?Array.from({length:8}).map((e,n)=>t.jsx(De,{},n)):(z=a==null?void 0:a.sort((e,n)=>e.commission-n.commission))==null?void 0:z.map(e=>t.jsxs(Ve,{children:[t.jsxs(We,{children:[e==null?void 0:e.x,":",e==null?void 0:e.y]}),t.jsx("img",{src:`/assets/lands/${e.landName}.webp`,alt:e.landName,title:e.landName}),t.jsxs("span",{children:["Commission: ",(e==null?void 0:e.commission)/100," %"]}),t.jsxs("span",{children:["Owner: ",e==null?void 0:e.owner]}),t.jsxs(Ee,{children:[t.jsx(R,{isLoading:w,disabled:w,onClick:()=>re(e.assetId),color:"solidBlue",children:"Select"}),ce(e.assetId)?t.jsx(R,{isLoading:w,disabled:w,onClick:()=>ie(e.assetId),children:t.jsx(Be,{})}):t.jsx(R,{isLoading:w,disabled:w,onClick:()=>ae(e.assetId),color:"gradientYellow",children:t.jsx(qe,{})})]})]},e.assetId))})]})]})};export{tt as default};