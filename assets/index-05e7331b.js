import{d as l,a as m,n as p,g as d,b as _,e,w as s,h as a,k as u,Z as f}from"./index-ff671c6d.js";/* empty css              */import{u as x}from"./useMyStoreStats-6b9c8885.js";import h from"./StatsWidget-42b7a012.js";import{N as g}from"./NavBar-fa151205.js";/* empty css                      *//* empty css               */import"./SummaryStats-531ab0da.js";/* empty css             */import"./useMyStoreFunctions-ca38a5f5.js";import"./CubeOverlay-af736554.js";const B={class:"pb-15",style:{width:"100%",display:"flex","flex-direction":"column","align-items":"center"}},k={class:"flex items-center space-x-2"},S={class:"flex items-center space-x-2"},Z=l({__name:"index",setup(v){m();const t=x(),i=p(),r=()=>{t.statsFilter=!t.statsFilter},n=()=>{t.loading=!1,t.mystoreStats={},t.statsFilter=!1,i.push("/mystores")};return(y,F)=>{const o=u,c=f;return d(),_("div",B,[e(g,{title:"Статистика магазина"},{left:s(()=>[a("div",k,[e(o,{onClick:n,icon:"Back"})])]),right:s(()=>[a("div",S,[e(c,{value:1,class:"item"},{default:s(()=>[e(o,{onClick:r,icon:"Filter"})]),_:1})])]),_:1}),e(h)])}}});export{Z as default};
