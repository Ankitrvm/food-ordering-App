(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__iEStN",summary:"CartItem_summary__38T-R",price:"CartItem_price__2rOEg",amount:"CartItem_amount__17NvG",actions:"CartItem_actions__31vEP"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3KCcg",total:"Cart_total__3v8WL",actions:"Cart_actions__2ObFR","button--alt":"Cart_button--alt__slpsh",button:"Cart_button__2CdxX"}},,,function(e,t,n){e.exports={button:"HeaderCart_button__2K3qU",icon:"HeaderCart_icon__2L3nT",badge:"HeaderCart_badge__3Xn2o",bump:"HeaderCart_bump__naXVw"}},,function(e,t,n){e.exports={meal:"MealsItem_meal__1fBhC",description:"MealsItem_description__h23yb",price:"MealsItem_price__5G1sp"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1Ih4t",modal:"Modal_modal__XRLTb","slide-down":"Modal_slide-down__SJ9xH"}},,function(e,t,n){e.exports={header:"Header_header__1Ae8p","main-image":"Header_main-image__1ar2r"}},,function(e,t,n){e.exports={meals:"AvailableMeals_meals__Twu_o","meals-appear":"AvailableMeals_meals-appear__30h0o"}},function(e,t,n){e.exports={form:"MealsItemForm_form__2xK2C"}},function(e,t,n){e.exports={input:"Input_input__3h1Vr"}},function(e,t,n){e.exports={card:"Card_card__1DmcR"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__3f2gc"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n(15),l=n.n(o),m=n(10),d=n.n(m),u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),j=n(16),b=n.n(j),p=n(2),x=n(17),O=n.n(x),h=n(0),_=s.a.forwardRef((function(e,t){return Object(h.jsxs)("div",{className:O.a.input,children:[Object(h.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(h.jsx)("input",Object(p.a)({ref:t},e.input))]})})),f=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!0),a=Object(i.a)(n,2),c=a[0],s=a[1];return Object(h.jsxs)("form",{className:b.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||c>5?s(!1):e.onAddToCart(c)},children:[Object(h.jsx)(_,{ref:t,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(h.jsx)("button",{children:"+ Add"}),!c&&Object(h.jsx)("p",{children:"Please eanter a valid am ount (1-5)"})]})},v=function(e){var t=Object(r.useContext)(u),n="\u20b9".concat(e.price.toFixed(2));return Object(h.jsxs)("li",{className:d.a.meal,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.name}),Object(h.jsx)("div",{className:d.a.description,children:e.description}),Object(h.jsx)("div",{className:d.a.price,children:n})]}),Object(h.jsx)("div",{children:Object(h.jsx)(f,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},C=n(18),g=n.n(C),N=function(e){return Object(h.jsx)("div",{className:g.a.card,children:e.children})},A=[{id:"m1",name:"Aloo Tikki Burger \ud83d\udfe2",description:"Finest potato and veggies",price:135},{id:"m2",name:"Pepsi",description:"A soft drink!",price:60},{id:"m3",name:"chicken-Spicy Burger \ud83d\udd34",description:"American, raw, meaty",price:169},{id:"m4",name:"Veg-Burger \ud83d\udfe2",description:"Healthy...and green...",price:108},{id:"m5",name:"Fries \ud83d\udfe2",description:"Made with potatos",price:69},{id:"m6",name:"Veg-Pizza \ud83d\udfe2",description:"Made with love",price:205}],y=function(){var e=A.map((function(e){return Object(h.jsx)(v,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(h.jsx)("section",{className:l.a.meals,children:Object(h.jsx)(N,{children:Object(h.jsx)("ul",{children:e})})})},I=n(19),M=n.n(I),w=function(){return Object(h.jsxs)("section",{className:M.a.summary,children:[Object(h.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(h.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(h.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},k=function(){return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(w,{}),Object(h.jsx)(y,{})]})},H=n.p+"static/media/meals.2971f633.jpg",F=n(13),T=n.n(F),R=function(){return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(h.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},E=n(8),S=n.n(E),D=function(e){var t=Object(r.useContext)(u),n=Object(r.useState)(!1),a=Object(i.a)(n,2),c=a[0],s=a[1],o=t.items,l=t.items.reduce((function(e,t){return e+t.amount}),0),m="".concat(S.a.button,"  ").concat(c?S.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(h.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(h.jsx)("span",{className:S.a.icon,children:Object(h.jsx)(R,{})}),Object(h.jsx)("span",{children:"My Cart"}),Object(h.jsx)("span",{className:S.a.badge,children:l})]})},B=function(e){return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsxs)("header",{className:T.a.header,children:[" ",Object(h.jsx)("h2",{children:"Meals To Go"}),Object(h.jsx)(D,{onClick:e.onShowCart})]}),Object(h.jsx)("div",{className:T.a["main-image"],children:Object(h.jsx)("img",{src:H,alt:"food"})})]})},P=n(11),V=n.n(P),z=function(e){return Object(h.jsx)("div",{className:V.a.backdrop,onClick:e.onClose})},X=function(e){return Object(h.jsx)("div",{className:V.a.modal,children:Object(h.jsx)("div",{className:V.a.content,children:e.children})})},G=document.getElementById("overlays"),J=function(e){return Object(h.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(h.jsx)(z,{onClose:e.onClose}),G),c.a.createPortal(Object(h.jsxs)(X,{children:[" ",e.children]}),G)]})},K=n(4),L=n.n(K),q=function(e){var t="\u20b9".concat(e.price.toFixed(2));return Object(h.jsxs)("li",{className:L.a["cart-item"],children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:e.name}),Object(h.jsxs)("div",{className:L.a.summary,children:[Object(h.jsx)("span",{className:L.a.price,children:t}),Object(h.jsxs)("span",{className:L.a.amount,children:["x ",e.amount]})]})]}),Object(h.jsxs)("div",{className:L.a.actions,children:[Object(h.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(h.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},U=n(5),W=n.n(U),Y=function(e){var t=Object(r.useContext)(u),n="\u20b9".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.addItem(Object(p.a)(Object(p.a)({},e),{},{amount:1}))},i=function(e){t.removeItem(e)},s=Object(h.jsx)("ul",{className:W.a["cart-items"],children:t.items.map((function(e,t){return Object(h.jsx)(q,{name:e.name,amount:e.amount,price:e.price,onRemove:i.bind(null,e.id),onAdd:c.bind(null,e)},e.id)}))});return Object(h.jsxs)(J,{onClose:e.onClose,children:[s,Object(h.jsxs)("div",{className:W.a.total,children:[Object(h.jsx)("span",{children:"Total Amount"}),Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("div",{className:W.a.actions,children:[Object(h.jsx)("button",{className:W.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(h.jsx)("button",{className:W.a.button,children:"Order"})]})]})},Q=n(14),Z={items:[],totalAmount:0},$=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(p.a)(Object(p.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(Q.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(p.a)(Object(p.a)({},l),{},{amount:l.amount-1});(s=Object(Q.a)(e.items))[o]=d}return{items:s,totalAmount:m}}return Z},ee=function(e){var t=Object(r.useReducer)($,Z),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(h.jsx)(u.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)(ee,{children:[n&&Object(h.jsx)(Y,{onClose:function(){return a(!1)}}),Object(h.jsx)(B,{onShowCart:function(){return a(!0)}}),Object(h.jsx)("main",{children:Object(h.jsx)(k,{})})]})};c.a.render(Object(h.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.ba06f2a6.chunk.js.map