"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[12],{5973:function(n,e,t){t.d(e,{B:function(){return l},l:function(){return s}});var r,i,o=t(168),a=t(4313),c=t(5705),s=(0,a.ZP)(c.l0)(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 500px;\n  margin: 0 auto;\n\n  label {\n    padding-left: 20px;\nmargin-bottom: 10px;\n    display: block;\n    font-size: 18px;\n    color: #666;\n   \n    cursor: pointer;\n  }\n\n  input {\n    background: #ecf0f3;\n    padding: 10px;\n    padding-left: 20px;\n    height: 40px;\n    font-size: 20px;\n    border-radius: 50px;\n    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;\n    border: 1px solid #999;\n    outline: none;\n    margin-bottom: 15px;\n\n    &:focus {\n      border-color: #ff6f00;\n    }\n  }\n\n  button {\n    // margin-top: 30px;\n    font-size: 16px;\n    max-width: 170px;\n    margin: 0 auto;\n    padding: 10px 20px;\n    border-radius: 20px;\n    background-color: #ff6f00;\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    display: inline-block;\n    cursor: pointer;\n    margin-top: 20px;\n    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n      background: darken(#ff6f00, 5%);\n      border: 1px solid rgba(255, 255, 255, 0.6);\n      box-shadow: 0px 10px 15px -6px rgba(88, 85, 85, 0.2);\n    }\n  }\n"]))),l=(0,a.ZP)(c.Bc)(i||(i=(0,o.Z)(["\nmargin-bottom: 20px;\n  font-size: 14px;\n  padding-left: 20px;\n  color:red;\n  /* color: {p => p.theme.color.accent} */\n"])))},7012:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,i,o,a=t(5705),c=t(5973),s=t(8007),l=t(9434),d=t(1721),p=t(264),x=t(184),u=s.Ry().shape({name:s.Z_().required("Required field"),number:s.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").required("Required field")}),m=function(){var n=(0,l.v9)(d.Af).items,e=(0,l.I0)();return(0,x.jsx)(a.J9,{initialValues:{name:"",number:""},validationSchema:u,onSubmit:function(t,r){n.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):n.find((function(n){return n.number===t.number}))?alert("".concat(t.number," is already exist in contacts")):(e((0,p.uK)(t)),r.resetForm())},children:(0,x.jsxs)(c.l,{children:[(0,x.jsx)("label",{children:"Name "}),(0,x.jsx)(a.gN,{name:"name"}),(0,x.jsx)(c.B,{name:"name",component:"span"}),(0,x.jsx)("label",{children:"Number"}),(0,x.jsx)(a.gN,{type:"tel",name:"number"}),(0,x.jsx)(c.B,{name:"number",component:"span"}),(0,x.jsx)("button",{type:"submit",children:"Add contact"})]})})},b=t(4224),f=t(9975),h=t(581),g=t(3182),j=t(1211),v=t(7970),k=t(1216),w=t(6982),y=t(8348),C=function(n){var e=n.id,t=n.name,r=n.number,i=(0,l.I0)();return(0,x.jsx)(a.J9,{initialValues:{name:t,number:r},onSubmit:function(n,t){i((0,p.mP)(e,n))},children:(0,x.jsxs)(c.l,{children:[(0,x.jsx)("label",{children:"Name "}),(0,x.jsx)(a.gN,{name:"name"}),(0,x.jsx)("label",{children:"Number"}),(0,x.jsx)(a.gN,{type:"tel",name:"number"}),(0,x.jsx)("button",{type:"submit",children:"Edit contact"}),(0,x.jsx)("button",{type:"button",onClick:function(){console.log(e)},children:"name"})]})})},z=function(n){var e=n.id,t=n.name,r=n.number,i=(0,y.q)(),o=i.isOpen,a=i.onOpen,c=i.onClose;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(b.z,{onClick:a,children:"edit"}),(0,x.jsxs)(f.u_,{isOpen:o,onClose:function(){c()},children:[(0,x.jsx)(h.Z,{}),(0,x.jsxs)(g.h,{children:[(0,x.jsx)(j.x,{children:"Modal Title"}),(0,x.jsx)(v.o,{}),(0,x.jsx)(k.f,{children:(0,x.jsx)(C,{id:e,name:t,number:r})}),(0,x.jsxs)(w.m,{children:[(0,x.jsx)(b.z,{colorScheme:"blue",mr:3,onClick:c,children:"Close"}),(0,x.jsx)(b.z,{variant:"ghost",children:"Edit Contact"})]})]})]})]})},Z=function(n){var e=n.contact,t=e.id,r=e.name,i=e.number,o=(0,l.I0)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("p",{children:[r,": ",(0,x.jsx)("span",{children:i})]}),(0,x.jsx)(z,{id:t,name:r,number:i}),(0,x.jsx)("button",{type:"button",onClick:function(){return o((0,p.GK)(t))},children:"delete"})]})},_=t(2791),A=t(168),N=t(4313),E=N.ZP.ul(r||(r=(0,A.Z)(["\n  padding-left: 10px;\n  counter-reset: li;\n  /* max-width: 550px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5); */\n  text-shadow: 0 1px 0 rgba(255,255,255,.5);\n  li {\n    /* background-color: #111111; */\n    display: flex;\n    justify-content: space-between;\n    /* padding-bottom: 20px; */\n    background: #DAD2CA;\n  color: #444;\n  border-radius: .3em;\n  transition: .3s ease-out;\n  &:hover{background: #E9E4E0;}\n\n  p {\n      text-transform: capitalize;\n      /* color: rgb(30 17 226); */\n      \n      font-size: 24px;\n      position: relative;\n  display: block;\n  padding: .4em .4em .4em 2em;\n  margin: .5em 0;\n  \n  /* text-decoration: none; */\n}\n  button {\n      --c: #fff;\nmin-width: 80px;\n/* height: 80%; */\n      background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%)\n          var(--_p, 100%) / 300% no-repeat,\n        #e97f02;\n        cursor: pointer;\n      color: #0000;\n      border: none;\n      transform: perspective(500px) rotateY(calc(20deg * var(--_i, -1)));\n      text-shadow: calc(var(--_i, -1) * 0.08em) -0.01em 0 var(--c),\n        calc(var(--_i, -1) * -0.08em) 0.01em 2px #0004;\n      outline-offset: 0.1em;\n      transition: 0.3s;\n      &:hover,\n      &:focus-visible {\n        --_p: 0%;\n        --_i: 1;\n      }\n    }\n    }\n  \n\n  li:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),F=t(5243),I=function(){var n=(0,l.I0)(),e=(0,l.v9)(d.Af),t=e.isLoading,r=e.error,i=(0,l.v9)(d.DI);return(0,_.useEffect)((function(){n((0,p.yF)())}),[n]),(0,x.jsxs)(E,{children:[t&&(0,x.jsx)(F.g4,{color:"darkblue"}),r&&(0,x.jsx)("b",{children:r}),0!==i.length?i.map((function(n){return(0,x.jsx)("li",{children:(0,x.jsx)(Z,{contact:n})},n.id)})):(0,x.jsx)("h3",{style:{paddingLeft:"40px"},children:"There are no apropriate contacts"})]})},P=N.ZP.div(i||(i=(0,A.Z)(["\n    display: flex;\n    gap: 20px;\n    padding-left: 40px;\n    align-items: center;\nmargin-bottom: 20px;\n    input{\n        background: #ecf0f3;\n  padding: 10px;\n  padding-left: 20px;\n  height: 36px;\n  font-size: 16px;\n  border-radius: 40px;\n  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;\n  border: 1px solid #999;\n  outline: none;\n    }\nlabel{\n    color: brown;\n    font-size: 24px;\n    font-weight: bold;\n}\n"]))),q=t(1738),B=function(){var n=(0,l.I0)(),e=(0,l.v9)(d.AD);return(0,x.jsxs)(P,{children:[(0,x.jsx)("label",{htmlFor:"",children:"Find contacts by name"}),(0,x.jsx)("input",{type:"text",value:e,onChange:function(e){var t=e.currentTarget.value.trim();n((0,q.$)(t))}})]})},D=N.ZP.h2(o||(o=(0,A.Z)(["\n  font-size: 38px;\n  letter-spacing: 0.1em;\n  text-align: center;\n  color: darkblue;\n"]))),L=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{}),(0,x.jsx)(D,{children:"Contacts"}),(0,x.jsx)(B,{}),(0,x.jsx)(I,{})]})}}}]);
//# sourceMappingURL=12.cc3fde50.chunk.js.map