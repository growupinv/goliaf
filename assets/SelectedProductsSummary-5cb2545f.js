import{d as N,c as d,r as f,g,b as A,e as t,w as l,s as c,t as a,f as u,h as E,m as P,af as O,ag as G,aU as J,V as K,L,Q as M,R as Q,S as W,T as j,K as z,M as H,O as X,_ as Y}from"./index-ff671c6d.js";/* empty css               *//* empty css                  *//* empty css              *//* empty css            *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css                          */import{useTreeStore as Z}from"./treeStore-474ae5e3.js";import"./usePartnerStore-c5291516.js";const $={class:"selected-products-summary"},ee=N({__name:"SelectedProductsSummary",setup(te){const s=Z(),R=d(()=>Array.from(s.selectedItems).filter(e=>e.startsWith("category-")).length),I=d(()=>s.totalSelectedProducts),v=d(()=>({min:s.priceRange[0],max:s.priceRange[1]})),x=d(()=>s.skladFilter==="all"?"Все склады":s.skladFilter.toUpperCase()),U=d(()=>{switch(s.stockFilter){case!0:return"Только в наличии";case!1:return"Только не в наличии";default:return"Все товары"}});d(()=>{const o=s.getSelectedProductsFlat,e=o.reduce((i,_)=>i+(_.price||0),0);return o.length>0?e/o.length:0});const b=d(()=>s.getSelectedProductsFlat.reduce((o,e)=>(e.price||0)>(o.price||0)?e:o,{label:"Нет данных",price:0})),y=d(()=>s.getSelectedProductsFlat.reduce((o,e)=>(e.price||0)<(o.price||0)?e:o,{label:"Нет данных",price:1/0})),m=o=>new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(o),r=f({productRange:[10,15],priceFormulaType:"quick",quickFormula:"price * 1.1",customFormula:""}),F=f(!1),w=f({});return(o,e)=>{const i=O,_=G,S=J,D=K,V=L,k=M,T=Q,p=W,h=j,q=z,B=H,C=X;return g(),A("div",$,[t(_,{column:1,border:""},{default:l(()=>[t(i,{label:"Склады / наличие"},{default:l(()=>[c(a(u(x))+" / "+a(u(U)),1)]),_:1}),t(i,{label:"Категорий / товаров"},{default:l(()=>[c(a(u(R))+" / "+a(u(I)),1)]),_:1}),t(i,{label:"Ценовой диапазон"},{default:l(()=>[c(a(m(u(v).min))+" - "+a(m(u(v).max)),1)]),_:1}),t(i,{label:"Самый дорогой товар"},{default:l(()=>[c(a(u(b).label)+" ("+a(m(u(b).price))+") ",1)]),_:1}),t(i,{label:"Самый дешевый товар"},{default:l(()=>[c(a(u(y).label)+" ("+a(m(u(y).price))+") ",1)]),_:1})]),_:1}),t(S,null,{default:l(()=>[c("Остатки на FBS")]),_:1}),t(B,{model:r.value,"label-position":"top"},{default:l(()=>[t(V,null,{default:l(()=>[t(D,{modelValue:r.value.productRange,"onUpdate:modelValue":e[0]||(e[0]=n=>r.value.productRange=n),range:"",min:1,max:100,marks:{1:"1",25:"25",50:"50",75:"75",100:"100"},class:"mb-6"},null,8,["modelValue"]),E("span",null,"Остатки генерируем от: "+a(r.value.productRange[0])+" до "+a(r.value.productRange[1]),1)]),_:1}),t(S,null,{default:l(()=>[c("Формула цены")]),_:1}),t(V,null,{default:l(()=>[t(T,{modelValue:r.value.priceFormulaType,"onUpdate:modelValue":e[1]||(e[1]=n=>r.value.priceFormulaType=n)},{default:l(()=>[t(k,{label:"quick"},{default:l(()=>[c("Быстрый выбор")]),_:1}),t(k,{label:"custom"},{default:l(()=>[c("Своя формула")]),_:1})]),_:1},8,["modelValue"]),r.value.priceFormulaType==="quick"?(g(),P(h,{key:0,modelValue:r.value.quickFormula,"onUpdate:modelValue":e[2]||(e[2]=n=>r.value.quickFormula=n),placeholder:"Выберите формулу",style:{width:"100%","margin-top":"10px"}},{default:l(()=>[t(p,{label:"Цена + 10%",value:"price * 1.1"}),t(p,{label:"Цена + 20%",value:"price * 1.2"}),t(p,{label:"Цена + 100 руб.",value:"price + 100"}),t(p,{label:"Цена - 5%",value:"price * 0.95"})]),_:1},8,["modelValue"])):(g(),P(q,{key:1,modelValue:r.value.customFormula,"onUpdate:modelValue":e[3]||(e[3]=n=>r.value.customFormula=n),placeholder:"Введите свою формулу (например, price * 1.15 + 50)",style:{"margin-top":"10px"}},null,8,["modelValue"]))]),_:1})]),_:1},8,["model"]),t(C,{modelValue:F.value,"onUpdate:modelValue":e[4]||(e[4]=n=>F.value=n),title:"Данные для отправки на API",width:"50%"},{default:l(()=>[E("pre",null,a(JSON.stringify(w.value,null,2)),1)]),_:1},8,["modelValue"])])}}});const fe=Y(ee,[["__scopeId","data-v-ef5463bc"]]);export{fe as default};
