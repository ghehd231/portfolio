(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{42:function(n,e,t){"use strict";e.a={black:"#000000",white:"#FFFFFF",gray:"#222222",text_gray:"#AAAAAA",main:"#A87BE0",sub:"#BB86FC",button:{bgWhite:"#FFFFFF",bgBlack:"#000000",bgGray:"#AAAAAA",bgDarkGray:"rgb(34,34,34)",bgRed:"rgba(221, 0, 129, 0.2)",black:"#000000",white:"#FFFFFF",gray:"#AAAAAA",red:"rgb(236, 93, 92)"}}},45:function(n,e,t){"use strict";var r=t(40),i=t(16),a=t(2),c=(t(0),t(14)),o=t(41),u=t(42);function d(){var n=Object(r.a)(["",";"]);return d=function(){return n},n}function b(){var n=Object(r.a)(["\n  ","\n"]);return b=function(){return n},n}function s(){var n=Object(r.a)(["\n      padding: 0.3rem 0.5rem;\n      border-color: ",";\n      color: ",";\n    "]);return s=function(){return n},n}function m(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  background: transparent;\n  border: 1px solid ",";\n  border-radius: 2px;\n  padding: 0.5rem 1rem;\n  transition: all 0.2s ease-in;\n  color: ",";\n  cursor: ",";\n  font-size: ",";\n  ",";\n  ",";\n\n  &:hover {\n    ","\n  }\n  ","\n\n  &+& {\n    /* margin-left: 1rem; */\n  }\n  \n  & > svg {\n    ",":0.3rem;\n  }\n\n  &:disabled {\n    border-color: ",";\n    color: ",";\n  }\n\n  @media only screen and (max-width: 480px) {\n    font-size: 0.8rem;\n    ",";\n  }\n"]);return m=function(){return n},n}var l=Object(o.a)(m(),u.a.white,u.a.white,(function(n){return n.disable?"disable":"pointer"}),(function(n){return n.mini?".8rem":"1rem"}),(function(n){return n.mini&&"height:2rem"}),(function(n){return n.marginleft&&"margin-left:.5rem"}),(function(n){return n.disable?"":"background: ".concat(u.a.white,";\n    color: ").concat(u.a.black,";")}),(function(n){return n.category&&Object(o.a)(s(),u.a.gray,u.a.text_gray)}),(function(n){return n.iconright?"margin-right":"margin-left"}),u.a.gray,u.a.text_gray,(function(n){return n.mini&&" padding: 0.2rem 0.5rem;"})),g=Object(o.b)(c.b)(b(),l),f=o.b.button(d(),l);e.a=function(n){return n.to?Object(a.jsx)(g,Object(i.a)(Object(i.a)({},n),{},{children:n.children})):Object(a.jsx)(f,Object(i.a)(Object(i.a)({},n),{},{disabled:n.disable}))}},47:function(n,e,t){"use strict";var r=t(40),i=t(2),a=(t(0),t(41));function c(){var n=Object(r.a)(["\n  width: 100%;\n  max-width: 70rem;\n  margin: 0 auto;\n  height: 100%;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  @media only screen and (max-width: 480px) {\n    ",";\n    }\n"]);return c=function(){return n},n}function o(){var n=Object(r.a)(["\n  width: 100%;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  bottom: 0;\n  height: 15rem;\n  align-items: center;\n  background: linear-gradient(\n    360deg,\n    rgba(0, 0, 0, 1) 8.98%,\n    rgba(0, 0, 0, 0) 100%\n  );\n  @media only screen and (max-width: 600px) {\n    height: 7.5rem;\n  }\n"]);return o=function(){return n},n}function u(){var n=Object(r.a)(["\n  width: 100%;\n  height: 32rem;\n  position: relative;\n  @media only screen and (max-width: 600px) {\n    height: 23rem;\n  }\n"]);return u=function(){return n},n}function d(){var n=Object(r.a)(["\n  width: 100%;\n  height: 32rem;\n  position: fixed;\n  background: ",";\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  top: 0;\n  @media only screen and (max-width: 600px) {\n    height: 23rem;\n  }\n"]);return d=function(){return n},n}var b=a.b.div(d(),(function(n){return'url("images/'.concat(n.bgName,".").concat(n.bgName.indexOf("gif")>0?"gif":"jpg",'")')})),s=a.b.section(u()),m=a.b.div(o()),l=a.b.div(c(),(function(n){return n.column&&"flex-direction:column;  align-items: flex-start;"}));e.a=function(n){var e=n.bgName,t=n.column,r=n.children;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{bgName:e}),Object(i.jsx)(s,{children:Object(i.jsx)(m,{children:Object(i.jsx)(l,{column:t,children:r})})})]})}},62:function(n,e,t){"use strict";t.r(e);var r=t(40),i=t(2),a=(t(0),t(41)),c=t(42),o=t(45),u=t(58),d=t(47);function b(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 1.7rem;\n  font-weight: 500;\n  margin: 0;\n\n  @media only screen and (max-width: 480px) {\n    font-size: 1.1rem;\n  }\n"]);return b=function(){return n},n}function s(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 2.5rem;\n  font-weight: 900;\n  margin: 0rem 0;\n  @media only screen and (max-width: 480px) {\n    font-size: 2rem;\n  }\n  & > span {\n    font-weight: 500;\n    font-size: 2.2rem;\n    @media only screen and (max-width: 480px) {\n      font-size: 1.5rem;\n    }\n  }\n"]);return s=function(){return n},n}var m=a.b.h1(s(),c.a.white),l=a.b.p(b(),c.a.text_gray);e.default=function(){return Object(i.jsxs)(d.a,{bgName:"main-gif",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{children:"Front-end developer"}),Object(i.jsxs)(m,{children:["\ubc31\ud638\ub3d9 ",Object(i.jsx)("span",{children:"\uc785\ub2c8\ub2e4."})]})]}),Object(i.jsxs)(o.a,{to:"/about",children:["About More ",Object(i.jsx)(u.a,{})]})]})}}}]);
//# sourceMappingURL=8.095e322c.chunk.js.map