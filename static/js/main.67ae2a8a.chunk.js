(this["webpackJsonpclean-with-regex"]=this["webpackJsonpclean-with-regex"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(34),r=n.n(i),l=(n(92),n(13)),o=(n(93),n(151)),j=n(148),s=n(142),u=n(152),d=n(149),b=n(144),x=n(147),h=n(145),O=n(150),f=n(74),p=n.n(f),m=n(2),g=function(e){var t=e.value,n=e.onChange,c=e.onClear,i=e.name,r=Object(a.useRef)(null),l="".concat(i,"-input"),o=i.replace(/^\w/,(function(e){return e.toUpperCase()}));return Object(m.jsxs)(d.a,{fullWidth:!0,children:[Object(m.jsx)(b.a,{htmlFor:l,children:o}),Object(m.jsx)(x.a,{id:l,label:o,inputRef:r,value:t,onChange:n,endAdornment:Object(m.jsx)(h.a,{position:"end",children:Object(m.jsx)(O.a,{onClick:function(){c(),r.current.focus()},edge:"end",children:Object(m.jsx)(p.a,{})})})})]})},v=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),d=r[0],b=r[1],x=Object(a.useState)(""),h=Object(l.a)(x,2),O=h[0],f=h[1];return Object(m.jsx)(o.a,{className:"App",component:"form",noValidate:!0,autoComplete:"off",children:Object(m.jsxs)(j.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:[Object(m.jsx)(j.a,{item:!0,xs:4,children:Object(m.jsx)(g,{name:"find",value:n,onChange:function(e){return c(e.target.value)},onClear:function(){return c("")}})}),Object(m.jsx)(j.a,{item:!0,xs:4,children:Object(m.jsx)(g,{name:"replace",value:d,onChange:function(e){return b(e.target.value)},onClear:function(){return b("")}})}),Object(m.jsx)(j.a,{item:!0,xs:8,children:Object(m.jsx)(s.a,{id:"data-textarea",label:"Data",multiline:!0,rows:10,fullWidth:!0,value:O,onChange:function(e){return f(e.target.value)}})}),Object(m.jsxs)(j.a,{container:!0,item:!0,spacing:2,justifyContent:"flex-end",xs:8,children:[Object(m.jsx)(j.a,{item:!0,children:Object(m.jsx)(u.a,{variant:"contained",onClick:function(){navigator.clipboard.writeText(O)},children:"Copy data"})}),Object(m.jsx)(j.a,{item:!0,children:Object(m.jsx)(u.a,{type:"submit",variant:"contained",onClick:function(e){e.preventDefault();var t=new RegExp(n,"g");f(O.replaceAll(t,d))},children:"Go"})})]})]})})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))},92:function(e,t,n){},93:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.67ae2a8a.chunk.js.map