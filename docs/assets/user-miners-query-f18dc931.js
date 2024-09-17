import{k as R,S as m,T as I,m as c,G as d,l as T,Q as l,b as p,q as _}from"./index-d1a4cafa.js";import{A as f}from"./axios-43b00e28.js";const w=async e=>{const t=await R({options:{code:m.M__FEDERATION,index_position:1,limit:"10",scope:m.M__FEDERATION,table:I.MINERS,lower_bound:e,upper_bound:e}});return(t==null?void 0:t[0])??null};var a=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}},S=function(e,t,s,n){return t=t||"&",s=s||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(r){var u=encodeURIComponent(a(r))+s;return Array.isArray(e[r])?e[r].map(function(A){return u+encodeURIComponent(a(A))}).join(t):u+encodeURIComponent(a(e[r]))}).filter(Boolean).join(t):n?encodeURIComponent(a(n))+s+encodeURIComponent(a(e)):""},o;o=S;const g={position:c.POSITION.TOP_RIGHT,className:"custom-toast-container"},y=f.create({baseURL:`${d}/atomicmarket/v2/`});y.interceptors.response.use(e=>e.data,e=>{var s,n;const t=((n=(s=e.response)==null?void 0:s.data)==null?void 0:n.message)||e.message;return c.error(t,g),Promise.reject(e)});const i=f.create({baseURL:`${d}/atomicassets/v1/`});i.interceptors.response.use(e=>e.data,e=>{var s,n;const t=((n=(s=e.response)==null?void 0:s.data)==null?void 0:n.message)||e.message;return c.error(t,g),Promise.reject(e)});class U{async getSales(t){return(await y.get(`sales?${o({...t})}`)).data}async getAssets(t){return(await i.get(`assets?${o({...t})}`)).data}async getTemplates(t){return(await i.get(`templates?${o({...t})}`)).data}async getAssetByAssetId(t){return(await i.get(`assets/${t}`)).data}}const E=new U,v=()=>T({queryKey:[l.USER_MINER],queryFn:()=>M(),staleTime:1e3*60*20,enabled:!!p.getState().user});async function b(){return await _.invalidateQueries([l.USER_MINER])}async function M(){try{const e=p.getState().user;if(!e){c.error("User not found");return}const t=await w(e==null?void 0:e.name);if(!t){console.warn("Miner not found");return}return await N(t)}catch(e){console.log(e);return}}async function N(e){const{getAssetByAssetId:t}=E,{data:s}=await t(e.current_land),n=s.name.split(" on ");return{...s,...e,planetName:n[1]||"",landName:n[0]||""}}export{E as a,w as g,b as o,g as t,v as u};