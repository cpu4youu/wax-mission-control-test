import{E as l,F as o}from"./index-da155547.js";import{g as u}from"./index-ea76b77d.js";import{s as g}from"./index-f8b3fa9e.js";var c=864e5;function D(r,t){l(2,arguments);var e=g(r),s=g(t),a=e.getTime()-u(e),n=s.getTime()-u(s);return Math.round((a-n)/c)}function f(r,t){var e=r.getFullYear()-t.getFullYear()||r.getMonth()-t.getMonth()||r.getDate()-t.getDate()||r.getHours()-t.getHours()||r.getMinutes()-t.getMinutes()||r.getSeconds()-t.getSeconds()||r.getMilliseconds()-t.getMilliseconds();return e<0?-1:e>0?1:e}function y(r,t){l(2,arguments);var e=o(r),s=o(t),a=f(e,s),n=Math.abs(D(e,s));e.setDate(e.getDate()-a*n);var m=+(f(e,s)===-a),i=a*(n-m);return i===0?0:i}export{y as d};