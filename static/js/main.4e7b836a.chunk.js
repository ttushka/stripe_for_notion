(this["webpackJsonpstripe-sample"]=this["webpackJsonpstripe-sample"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(5),o=n.n(c),a=(n(16),n(17),n(2)),i=n(6),l=n(4),p=n.n(l),u=n(7),j=n(8),d=n(9),b=n(11),h=n(10),m=n(0),f={style:{base:{color:"#903238",fontSize:"22px",fontFamily:"sans-serif",fontSmoothing:"antialiased","::placeholder":{color:"#CFD7DF"}},invalid:{color:"#e5424d",":focus":{color:"#303238"}}}};var O=function(){return Object(m.jsxs)("label",{children:["Card details",Object(m.jsx)(a.CardElement,{options:f})]})},x=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleSubmit=function(){var t=Object(u.a)(p.a.mark((function t(n){var r,s,c,o,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.props,s=r.stripe,c=r.elements,s&&c){t.next=4;break}return t.abrupt("return");case 4:return o=c.getElement(a.CardElement),t.next=7,s.createToken(o);case 7:(i=t.sent).error?console.log(i.error.message):console.log(i.token);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{class:"product-info",children:[Object(m.jsx)("h3",{className:"product-title",children:"Apple MacBook Pro"}),Object(m.jsx)("h4",{className:"product-price",children:"$999"})]}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)(O,{}),Object(m.jsx)("button",{className:"btn-pay",children:"Buy Now"})]})]})}}]),n}(r.Component);function v(){return Object(m.jsx)(a.ElementsConsumer,{children:function(e){var t=e.stripe,n=e.elements;return Object(m.jsx)(x,{stripe:t,elements:n})}})}var g=Object(i.a)("pk_live_51IdwGbA1iO7CYfBEYo1A7pi064zrLIqmF1cNCIAPoaD0UEqDil80HqLZQ4VDAU7joQ3G89ZtFA88Qbuqq86DvXlA00At3pgF7W"),y=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"product",children:[Object(m.jsx)("img",{src:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress",alt:"laptop",style:{width:"100%",height:"auto"}}),Object(m.jsx)("div",{children:Object(m.jsx)(a.Elements,{stripe:g,children:Object(m.jsx)(v,{})})})]})})};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4e7b836a.chunk.js.map