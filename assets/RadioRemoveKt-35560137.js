import{d as D,u as M,r as b,c as m,g as o,b as i,h as l,t as d,f as u,e as p,w as y,F as _,l as f,ac as k,s as z,q as E,a2 as F,k as P,_ as S}from"./index-ff671c6d.js";const $={key:"metric",class:"button-container"},q={class:"button-grid"},I=["onClick","disabled"],L={key:"period",class:"button-container"},j={class:"button-grid"},A=["onClick","disabled"],G={class:"navigation-buttons"},H=["disabled"],J=D({__name:"RadioRemoveKt",props:{disabled:{type:Boolean,default:!1}},emits:["update:data"],setup(c,{emit:g}){const r=M(),s=b("metric"),n=b({type:"",label:""}),t=b({value:"",label:"",time:"",cnt:0}),h=[{type:"view",label:"Просмотр"},{type:"card",label:"Корзина"},{type:"order",label:"Заказ"},{type:"buy",label:"Продажа"}],C=[{value:"1 неделя",label:"1 неделя",time:"week",cnt:1},{value:"2 недели",label:"2 недели",time:"week",cnt:2},{value:"3 недели",label:"3 недели",time:"week",cnt:3},{value:"1 месяц",label:"1 месяц",time:"month",cnt:1}],R=m(()=>s.value==="metric"?"Выберите метрику:":"Выберите период:"),w=m(()=>n.value.type!==""&&t.value.value!=="");function x(a){n.value=a,setTimeout(()=>{s.value="period"},300),v()}function B(a){t.value=a,v()}function N(){s.value="metric",t.value={value:"",label:"",time:"",cnt:0},v()}function v(){const a={time:t.value.time,cnt:t.value.cnt,type:n.value.type};g("update:data",a)}async function T(){const a={time:t.value.time,cnt:t.value.cnt,type:n.value.type};await r.Remove_NKT(a)}return(a,O)=>{const K=P;return o(),i(_,null,[l("h3",null,d(u(R)),1),p(F,{name:"fade",mode:"out-in"},{default:y(()=>[s.value==="metric"?(o(),i("div",$,[l("div",q,[(o(),i(_,null,f(h,e=>l("button",{key:e.type,onClick:V=>x(e),class:k(["grid-button",{active:n.value.type===e.type}]),disabled:c.disabled},d(e.label),11,I)),64))])])):s.value==="period"?(o(),i("div",L,[l("div",j,[(o(),i(_,null,f(C,e=>l("button",{key:e.value,onClick:V=>B(e),class:k(["grid-button",{active:t.value.value===e.value}]),disabled:c.disabled},d(e.label),11,A)),64))]),l("div",G,[l("button",{onClick:N,class:"nav-button",disabled:c.disabled},"Назад",8,H),p(K,{loading:u(r).dbc_loading,size:"large",disabled:!u(w)||c.disabled,type:"primary",onClick:T,class:"start-button"},{default:y(()=>[z(d(u(r).dbc_loading?"Анализируем":"СТАРТ"),1)]),_:1},8,["loading","disabled"])])])):E("",!0)]),_:1})],64)}}});const U=S(J,[["__scopeId","data-v-d10c10d9"]]);export{U as default};
