(this.webpackJsonpaxios=this.webpackJsonpaxios||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(14),s=n.n(o),a=n(3),i=n(5),j=n.n(i),u=(n(37),n(0)),l=function(){return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)("h4",{children:"\ud83d\udd78"}),Object(u.jsx)("h6",{children:"Loading..."})]})},b=function(e){var t=e.result,n=e.getCountry,c=t.map((function(e,t){console.log(e);var c=e.name,r=e.flag,o=e.capital,s=e.region,a=e.area,i=e.population,j=e.borders;return Object(u.jsxs)("div",{className:"country",children:[Object(u.jsx)("h2",{children:c}),Object(u.jsx)("h3",{children:o}),Object(u.jsx)("img",{className:"flag",src:r,alt:"country flag"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Region: "})," ",s]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Area: "})," ",new Intl.NumberFormat("de-DE").format(a)," km\xb2"]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Population: "})," ",new Intl.NumberFormat("de-DE").format(i)]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Borders:"}),j.map((function(e,t){return Object(u.jsxs)("i",{onClick:function(){return n(e)},children:["\xa0\xa0 ",e]},t)}))]})]},t)}));return Object(u.jsx)(r.a.Fragment,{children:c})},d=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)([]),i=Object(a.a)(s,2),d=i[0],h=i[1],O=Object(c.useState)(!0),x=Object(a.a)(O,2),m=x[0],f=x[1];Object(c.useEffect)((function(){setTimeout((function(){f(!1)}),1e3)}),[]);return m?Object(u.jsx)(l,{}):Object(u.jsx)(r.a.Fragment,{children:Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)("h1",{children:"Know your Countries"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=encodeURIComponent(n),c="https://restcountries.eu/rest/v2/name/".concat(t);j()(c).then((function(e){var t=e.data;return h(t)})).catch(console.error("Nope \u2013 you took a wrong turn somewhere"))},children:[Object(u.jsx)("input",{type:"text",value:n,onChange:function(e){o(e.target.value)},placeholder:"country?"}),Object(u.jsx)("button",{type:"submit",children:"Search"})]}),Object(u.jsx)(b,{result:d,getCountry:function(e,t){encodeURIComponent(t);var n="https://restcountries.eu/rest/v2/name/".concat(e,"/");j()(n).then((function(e){var t=e.data;return h(t)})).catch((function(e){return console.log("Your had an ".concat(e))}))}})]})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e70842fd.chunk.js.map