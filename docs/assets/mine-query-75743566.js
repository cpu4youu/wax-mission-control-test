import{g as m,S as c,T as y,a as f,Q as M,m as T,p}from"./index-a78c3883.js";const l={Abundant:1,Common:2,Rare:3,Epic:4,Legendary:5,Mythical:6},k=async()=>await m({options:{code:c.HQ_MU,index_position:1,limit:"1000",scope:c.HQ_MU,table:y.MINEPTRACK}}),D=()=>f({queryKey:[M.MINE],queryFn:()=>_(),staleTime:1e3*60*20});async function _(){try{const e=await k();if(!e){T.error("Mines not found");return}return Q(e)}catch(e){console.log(e);return}}function Q(e){var n,s;const r={...e==null?void 0:e[0],pool_buckets:(s=(n=e==null?void 0:e[0])==null?void 0:n.pool_buckets)==null?void 0:s.map(t=>({...t,formattedValue:p(t.value)})).filter(t=>t.key!=="Mythic")},a=r.pool_buckets.sort((t,o)=>{let i=t==null?void 0:t.key,u=o==null?void 0:o.key;return i=l[t==null?void 0:t.key],u=l[o==null?void 0:o.key],i<u?-1:1});return{...r,pool_buckets:a}}export{D as u};
