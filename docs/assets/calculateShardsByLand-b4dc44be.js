import{q as o,Q as s}from"./index-89d4724b.js";const _=(t,i)=>{var m,r,f;const e=o.getQueryData(s.plntConfigState),c=(((f=(r=(m=e==null?void 0:e[i.toLowerCase()])==null?void 0:m.find(({key:u})=>u==="min_commission"))==null?void 0:r.value)==null?void 0:f[1])||0)/1e4;return t<c?c:t};function w({land:t}){var i,e;return((i=t==null?void 0:t.estimated_tlm)==null?void 0:i.estimated_tlm)-((e=t==null?void 0:t.estimated_tlm)==null?void 0:e.estimated_tlm)*_(t.commission/1e4,t.planetName)}function C({landsType:t,landCardId:i,userTools:e}){const n=t==null?void 0:t.find(m=>m.landtype_id===i);return((e==null?void 0:e.reduce((m,r)=>m+(r==null?void 0:r.nft_power),0))??0)*((n==null?void 0:n.nft_power_mod)??0)/100}export{C as a,w as c};