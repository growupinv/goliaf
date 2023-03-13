import{b as h,s as v,r as w,i as y,o as a,c as l,w as e,e as c,f as p,h as r,x as d,t as E,F as T,a8 as M,E as P,j as k,L as B,D as C,H as S,v as V,_ as G}from"./index-e4fbfdb3.js";/* empty css                 *//* empty css            *//* empty css                  *//* empty css                     *//* empty css               *//* empty css             *//* empty css                   */const L=["innerHTML"],D={class:"m-3"},H=h({__name:"index",setup(N){const _=v();_.showBaseSide=!1;const b=w([{plan:"Trial",description:`
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
<code>1000 заливок</code> - ограничение по общему дневному успешному запуску рекламных кампаний в сервисе<br>`,color:"success",price:749,options:["свой сервер","1000 заливок"]}]),m=s=>{P({type:"success",message:`Выбран тариф: ${s}`})};return(s,$)=>{const u=y("View"),f=k,x=B,t=C,i=S,g=V;return a(),l(g,{flexible:!0,data:b.value,border:""},{default:e(()=>[c(t,{type:"expand"},{header:e(()=>[c(f,null,{default:e(()=>[c(u)]),_:1})]),default:e(o=>[p("div",{class:"m-3",innerHTML:o.row.description},null,8,L),p("div",D,[c(x,{size:"small",onClick:n=>m(o.row.plan)},{default:e(()=>[r("Выбрать")]),_:2},1032,["onClick"])])]),_:1}),c(t,{prop:"plan",label:"План",width:"80"},{default:e(({row:o})=>[c(i,{type:o.color},{default:e(()=>[r(d(o.plan),1)]),_:2},1032,["type"])]),_:1}),c(t,{prop:"price",label:"Цена",width:"50"},{default:e(({row:o})=>[r(d(o.price)+" $ ",1)]),_:1}),c(t,{label:"Опции"},{default:e(({row:o})=>[(a(!0),E(T,null,M(o.options,n=>(a(),l(i,{key:n,effect:"plain"},{default:e(()=>[r(d(n),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["data"])}}});const O=G(H,[["__scopeId","data-v-632f4c74"]]);export{O as default};
