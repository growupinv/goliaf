import{d as C,n as b,c as i,g as o,m as g,w as x,h as c,b as m,F as I,l as k,f as w,t as d,r as _,a1 as B,z as F,_ as N}from"./index-ff671c6d.js";/* empty css             */import{u as V}from"./useMyStoreStats-6b9c8885.js";const q={class:"stats-container"},A={class:"stat-value"},M={class:"stat-label"},T=C({__name:"SummaryStats",setup(E){const p=b(),u=V(),f=i(()=>parseInt(p.currentRoute.value.query.storeId));function v(r,a=1e3){const s=_(0),t=_(0);function e(n){t.value||(t.value=n);const h=n-t.value,l=Math.min(h/a,1);s.value=Math.floor(r*l),l<1&&requestAnimationFrame(e)}return B(()=>r,n=>{t.value=0,requestAnimationFrame(e)},{immediate:!0}),s}const S=i(()=>{const r=["openCardCount","addToCartCount","ordersCount"],a=["Переходы","Корзины","Продажи"];return r.map((s,t)=>{const e=y(s);return{label:a[t],value:e,animatedValue:v(e)}})});function y(r){const a=f.value;return isNaN(a)||!u.mystoreStats[a]?0:u.mystoreStats[a].cards_stats.reduce((s,t)=>{var e,n;return s+(((n=(e=t.statistics)==null?void 0:e.selectedPeriod)==null?void 0:n[r])||0)},0)}return(r,a)=>{const s=F;return o(),g(s,{class:"summary-stats"},{default:x(()=>[c("div",q,[(o(!0),m(I,null,k(w(S),(t,e)=>(o(),m("div",{key:e,class:"stat-item"},[c("span",A,d(t.animatedValue),1),c("span",M,d(t.label),1)]))),128))])]),_:1})}}});const L=N(T,[["__scopeId","data-v-54e1f12d"]]);export{L as default};
