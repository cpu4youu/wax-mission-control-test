import{a as i,Q as c,b as s,as as l}from"./index-8534e1f4.js";const A=t=>i({queryKey:[c.INVENTORY,t],queryFn:()=>m(t),staleTime:1e3*60*60,enabled:!!s.getState().user});async function m(t){const{user:e}=s.getState();try{const{getAssets:r}=l,n={owner:e==null?void 0:e.name,limit:1e3,schema_name:t},a=await r(n);return y(a)}catch(r){return console.log(r),null}}function y(t){const e=t.reduce((n,a)=>(n.find(d=>d.template.template_id===a.template.template_id)||n.push(a),n),[]);return f(e)}function f(t){return t.sort((e,r)=>o[e.data.rarity]>o[r.data.rarity]?-1:1)}const o={Mythical:0,Legendary:1,Epic:2,Rare:3,Common:4,Abundant:5};export{A as u};
