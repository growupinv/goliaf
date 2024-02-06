import{c as T,x as h,r as w,k as y,o as n,e as i,w as e,f as c,g as p,i as r,D as d,y as v,F as E,ah as M,E as k,l as P,A as B,V as C,X as V,M as S,_ as G}from"./index-9bafff97.js";/* empty css                 *//* empty css            *//* empty css                     *//* empty css               *//* empty css                   */const D=["innerHTML"],L={class:"m-3"},N=T({__name:"priceTable",setup($){const _=h();_.showBaseSide=!1;const b=w([{plan:"Trial",description:`
<code>2 дня</code> - ограничение по работе сервиса 2 дня<br>
<code>10 заливок</code> - ограничение по общему дневному успешному запуску рекламных кампаний в сервисе<br>
<code>ФП</code> - автоматическое массовое создание фанпейджей<br>
<code>БМ</code> - автоматическое массовое создание бизнес менеджеров<br>
<code>Карты</code> - автоматическая массовая подвязка карт к аккаунтам<br>`,color:"danger",price:0,options:["2 дня","10 заливок","ФП","БМ","Карты"]},{plan:"База",description:`
<code>65 заливок</code> - ограничение по общему дневному успешному запуску рекламных кампаний в сервисе<br>
<code>ФП</code> - автоматическое массовое создание фанпейджей<br>
<code>БМ</code> - автоматическое массовое создание бизнес менеджеров<br>
<code>Карты</code> - автоматическая массовая подвязка карт к аккаунтам<br>`,color:"danger",price:29,options:["65 заливок","ФП","БМ","Карты"]},{plan:"Стандарт",description:`
<code>База</code> - включает в себя тариф База<br>
<code>85 заливок</code> - ограничение по общему дневному успешному запуску рекламных кампаний в сервисе<br>
<code>Линковка</code> - линковка аккаунтов (добавление аккаунтов в бм, в рекламный кабинет)<br>`,color:"warning",price:49,options:["+База","85 заливок","Линковка"]},{plan:"Maxi",description:`
<code>Стандарт</code> - включает в себя тариф Стандарт<br>
<code>110 заливок</code> - ограничение по общему дневному успешному запуску рекламных кампаний в сервисе<br>`,color:"info",price:69,options:["+Стандарт","110 заливок"]},{plan:"Premium",description:`
<code>Maxi</code> - включает в себя тариф Maxi<br>
<code>150 заливок</code> - ограничение по общему дневному успешному запуску рекламных кампаний в сервисе<br>
<code>Антик</code> - модуль антик, позволяет передавать аккаунты из сервиса в антибраузеры и обратно<br>`,color:"",price:99,options:["+Maxi","150 заливок","Антик"]},{plan:"Gold",description:`
  <code>Premium</code> - включает в себя тариф Premium<br>
<code>250 заливок</code> - ограничение по общему дневному успешному запуску рекламных кампаний в сервисе<br>
  <code>Уникализатор</code> - уникализатор креативов, в процессе создания рекламных кампаний<br>`,color:"success",price:149,options:["+Premium","250 заливок","Уникализатор"]},{plan:"Platinum",description:`
<code>Gold</code> - включает в себя тариф Gold<br>
<code>250 заливок</code> - ограничение по общему дневному успешному запуску рекламных кампаний в сервисе<br>
  <code>ЗРД</code> - модуль ЗРД, автоматическое массовое прохождение ЗРД<br>`,color:"success",price:350,options:["+Gold","350 заливок","ЗРД"]},{plan:"Команда",description:`
<code>Platinum</code> - включает в себя тариф Platinum<br>
<code>1000 заливок</code> - ограничение по общему дневному успешному запуску рекламных кампаний в сервисе<br>`,color:"success",price:749,options:["свой сервер","1000 заливок"]}]),u=s=>{k({type:"success",message:`Выбран тариф: ${s}`})};return(s,A)=>{const m=y("View"),f=P,x=B,t=C,l=V,g=S;return n(),i(g,{flexible:!0,data:b.value,border:""},{default:e(()=>[c(t,{type:"expand"},{header:e(()=>[c(f,null,{default:e(()=>[c(m)]),_:1})]),default:e(o=>[p("div",{class:"m-3",innerHTML:o.row.description},null,8,D),p("div",L,[c(x,{size:"small",onClick:a=>u(o.row.plan)},{default:e(()=>[r("Выбрать")]),_:2},1032,["onClick"])])]),_:1}),c(t,{prop:"plan",label:"План",width:"80"},{default:e(({row:o})=>[c(l,{type:o.color},{default:e(()=>[r(d(o.plan),1)]),_:2},1032,["type"])]),_:1}),c(t,{prop:"price",label:"Цена",width:"50"},{default:e(({row:o})=>[r(d(o.price)+" $ ",1)]),_:1}),c(t,{label:"Опции"},{default:e(({row:o})=>[(n(!0),v(E,null,M(o.options,a=>(n(),i(l,{key:a,effect:"plain"},{default:e(()=>[r(d(a),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["data"])}}});const q=G(N,[["__scopeId","data-v-b8f445c0"]]);export{q as default};
