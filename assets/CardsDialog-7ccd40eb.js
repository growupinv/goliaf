import{c as W,a as $,r as n,a6 as I,a7 as q,k as j,o as C,e as G,w as t,f as a,i as b,g as x,y as A,D as E,N as H,t as K,E as k,l as L,m as P,S as Q,ab as X,ac as Z,A as ee,ad as oe,_ as te}from"./index-9bafff97.js";/* empty css               *//* empty css                  *//* empty css               *//* empty css              */import{u as ae}from"./useCardStore-62922ab9.js";/* empty css                   *//* empty css                   */const le={key:0},se=W({__name:"CardsDialog",props:{showdialog:{type:Boolean,required:!0}},emits:["success","beforeUp"],setup(D,{emit:h}){const S=D,w=ae(),M=$(),f=n([]),r=n(""),c=n(0),l=n(0),B=`
Формат карты:
<code><номер карты>;<месяц/год>;<CVV/CVC код>;<имя владельца></code>
<br>
где:

<ul>
<li><code>&lt;номер карты&gt;</code> - 16-ти значный номер банковской карты</li>
<li><code>&lt;месяц/год&gt;</code> - дата окончания действия карты в формате <code>MM/YY</code></li>
<li><code>&lt;CVV/CVC код&gt;</code> - трехзначный защитный код на обратной стороне карты</li>
<li><code>&lt;имя владельца&gt;</code> - имя и фамилия владельца карты, написанные латинскими буквами как на карте</li>
</ul>
Примеры (зеленым выделены корректные строки, красным - некорректные):
<ul>
<li><code>1234123412341234;06/24;123;IVAN IVANOV</code> - <span style="color:green">корректно</span></li>
<li><code>1111222233334444;09/23;456;John Doe</code> - <span style="color:green">корректно</span></li>
<li><code>0000000000000000;12/25;789;Jane Smith</code> - <span style="color:green">корректно</span></li>
<li><code>1111222233334444;03/22;123;John Doe</code> - <span style="color:red">некорректно</span></li>
<li><code>1234123412341234;06/24;123</code> - <span style="color:red">некорректно</span></li>
<li><code>1234123412341234;06/2024;123;IVAN IVANOV</code> - <span style="color:green">корректно</span></li>
<li><code>1234123412341234;06/18;123;IVAN IVANOV</code> - <span style="color:red">некорректно</span></li>
<li><code>1234123412341234;06/24;123;IVAN IVANOV;extra info</code> - <span style="color:red">некорректно</span></li>
</ul>`;I(r,Y);const d=n(!1),U=n(),i=n(!1),{showdialog:F}=q(S);I(F,(e,o)=>{e!==o&&(i.value=e)});const O=e=>{K.confirm("Are you sure to close this dialog?").then(()=>{i.value=!1,e()}).catch(()=>{})};function Y(){if(r.value===""){c.value=0,l.value=0;return}const e=r.value.trim().split(/\n+/),o=/^(\d{10,20});(\d{2}\/\d{2});(\d{3,4});([\w\s]+)$/,u=[];c.value=0,l.value=0,e.forEach(v=>{const p=v.trim();if(o.test(p)){c.value++;const[g,V,y,m]=p.split(";"),[_,s]=V.split("/"),N=new Date().getFullYear().toString().substr(-2),J=(new Date().getMonth()+1).toString().padStart(2,"0");if(s<N||s===N&&_<J){l.value++;return}f.value.length=0;const z={id:0,user_id:M.user_id,card_number:g,card_name:m.trim(),card_year:s,card_month:_,card_cvv:y,created_at:null,updated_at:null};u.push(z)}else l.value++}),f.value=u}const R=()=>{d.value=!1},T=()=>{if(c.value===0){k({type:"info",message:"Нет данных для отправки"});return}i.value=!1,h("beforeUp",!0),d.value=!0,w.SetMyCards(f.value).then(e=>{if(d.value=!1,e.data.status=="ok"){let o=e.data.payload;h("success",o.length)}d.value=!1}).catch(e=>{k({type:"error",message:"Произошла ошибка"}),console.error("Error:",e)})};return(e,o)=>{const u=j("Warning"),v=L,p=P,g=Q,V=X,y=Z,m=ee,_=oe;return C(),G(_,{"before-close":O,fullscreen:!0,modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=s=>i.value=s),title:"Добавление Карт"},{footer:t(()=>[a(m,{loading:d.value,type:"primary",onClick:T},{default:t(()=>[b("Подтвердить")]),_:1},8,["loading"]),a(m,{onClick:R},{default:t(()=>[b("Reset")]),_:1})]),default:t(()=>[a(p,{"raw-content":"",effect:"dark",content:B,placement:"bottom"},{default:t(()=>[a(v,{style:{"margin-left":"4px"},size:12},{default:t(()=>[a(u)]),_:1})]),_:1}),x("div",null,[a(y,{ref_key:"formRef",ref:U,"label-position":"top"},{default:t(()=>[a(V,{"inline-message":""},{default:t(()=>[a(g,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=s=>r.value=s),rows:10,type:"textarea",placeholder:"Пример: 4263234554566543;02/26;123;IVAN IVANOV"},null,8,["modelValue"])]),_:1})]),_:1},512),x("div",null,[l.value===0?(C(),A("span",le," Валидные карты: "+E(c.value),1)):(C(),A("span",{key:1,style:H(`color: ${l.value>0?"#ff0000":"#ffffff"}`)},"Невалидные карты: "+E(l.value),5))])])]),_:1},8,["modelValue"])}}});const _e=te(se,[["__scopeId","data-v-0a4a31e4"]]);export{_e as default};
