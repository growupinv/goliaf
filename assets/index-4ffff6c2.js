import{d as u,v as t,aC as p,r as m,g as f,b,e as o,w as c,f as g,aM as v,ay as C,D as h,C as k,A as w,B as x,h as y,_ as B}from"./index-ff671c6d.js";/* empty css            */const E=s=>(w("data-v-1702bbca"),s=s(),x(),s),I={class:"login-container"},L=E(()=>y("h2",{class:"login-title"},"Авторизация в сервисе через Телеграм",-1)),S=u({__name:"index",setup(s){window.addEventListener("error",e=>{e.message==="Bot domain invalid"&&t.error("Ошибка: не удалось авторизоваться. Пожалуйста, проверьте настройки бота.")});const{cookies:n}=p(),i=m(!1);function l(){console.log("script is loaded"),i.value=!0}function r(e){if(e!==null){const a=C();a.user=e,n.set("usertg",e),t({message:"Вы авторизованы",type:"success"})}}return(e,a)=>{const d=h,_=k;return f(),b("div",I,[o(_,{justify:"center"},{default:c(()=>[o(d,{span:24,class:"login-card"},{default:c(()=>[L,o(g(v),{userpic:!0,radius:"2",size:"medium",mode:"callback","telegram-login":"wildberies_partners_bot",onLoaded:l,onCallback:r})]),_:1})]),_:1})])}}});const N=B(S,[["__scopeId","data-v-1702bbca"]]);export{N as default};
