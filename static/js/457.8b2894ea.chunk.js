"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[457],{5973:function(n,e,t){t.d(e,{B:function(){return c},l:function(){return d}});var r,i,o=t(168),a=t(4313),s=t(5705),d=(0,a.ZP)(s.l0)(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 20px;\n  border: solid #ff6f00 2px;\n  border-radius: 10px;\n\n  label {\n    padding-left: 20px;\n    margin-bottom: 10px;\n    display: block;\n    font-size: 18px;\n    color: #666;\n\n    cursor: pointer;\n  }\n\n  input {\n    background: #ecf0f3;\n    padding: 10px;\n    padding-left: 20px;\n    height: 40px;\n    font-size: 20px;\n    border-radius: 50px;\n    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;\n    border: 1px solid #999;\n    outline: none;\n    margin-bottom: 15px;\n\n    &:focus {\n      border-color: #ff6f00;\n    }\n  }\n\n  button {\n    font-size: 16px;\n    max-width: 170px;\n    margin: 0 auto;\n    padding: 10px 20px;\n    border-radius: 20px;\n    border: solid transparent 1px;\n    background-color: #ff6f00;\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    display: inline-block;\n    cursor: pointer;\n    margin-top: 20px;\n    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n      border: solid #ff6f00 1px;\n      background-color: #fff;\n      color: #ff6f00;\n      box-shadow: 0px 10px 15px -6px rgba(88, 85, 85, 0.2);\n    }\n  }\n"]))),c=(0,a.ZP)(s.Bc)(i||(i=(0,o.Z)(["\n  margin-bottom: 20px;\n  font-size: 14px;\n  padding-left: 20px;\n  color: red;\n  /* color: {p => p.theme.color.accent} */\n"])))},9457:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,i,o,a,s=t(5705),d=t(5973),c=t(8007),l=t(9434),p=t(1721),x=t(264),u=t(1836),m=t(184),f=c.Ry().shape({name:c.Z_().required("Required field"),number:c.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").required("Required field")}),b=function(n,e){return{title:"".concat(e),description:"".concat(n," is already in contacts"),status:"warning",duration:6e3,isClosable:!0,position:"top-left"}},h=function(){var n=(0,u.p)(),e=(0,l.v9)(p.Af).items,t=(0,l.I0)();return(0,m.jsx)(s.J9,{initialValues:{name:"",number:""},validationSchema:f,onSubmit:function(r,i){e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}))?n(b(r.name,"name")):e.find((function(n){return n.number===r.number}))?n(b(r.number,"number")):(t((0,x.uK)(r)),i.resetForm())},children:(0,m.jsxs)(d.l,{children:[(0,m.jsx)("label",{children:"Name "}),(0,m.jsx)(s.gN,{name:"name"}),(0,m.jsx)(d.B,{name:"name",component:"span"}),(0,m.jsx)("label",{children:"Number"}),(0,m.jsx)(s.gN,{type:"tel",name:"number"}),(0,m.jsx)(d.B,{name:"number",component:"span"}),(0,m.jsx)("button",{type:"submit",children:"Add contact"})]})})},g=t(4224),j=t(9975),w=t(581),v=t(3182),y=t(1211),k=t(7970),C=t(1216),Z=t(6982),z=t(8348),N=function(n){var e=n.id,t=n.name,r=n.number,i=n.onClose,o=(0,l.I0)();return(0,m.jsx)(s.J9,{initialValues:{name:t,number:r},onSubmit:function(n,t){var r={id:e,name:n.name,number:n.number};o((0,x.mP)(r)),i()},children:(0,m.jsxs)(d.l,{children:[(0,m.jsx)("label",{children:"Name "}),(0,m.jsx)(s.gN,{name:"name"}),(0,m.jsx)("label",{children:"Number"}),(0,m.jsx)(s.gN,{type:"tel",name:"number"}),(0,m.jsx)("button",{type:"submit",children:"Edit contact"})]})})},F=function(n){var e=n.id,t=n.name,r=n.number,i=(0,z.q)(),o=i.isOpen,a=i.onOpen,s=i.onClose;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g.z,{onClick:a,children:"edit"}),(0,m.jsxs)(j.u_,{isOpen:o,onClose:s,children:[(0,m.jsx)(w.Z,{}),(0,m.jsxs)(v.h,{children:[(0,m.jsx)(y.x,{children:"Edit Your Contact"}),(0,m.jsx)(k.o,{}),(0,m.jsx)(C.f,{children:(0,m.jsx)(N,{id:e,name:t,number:r,onClose:s})}),(0,m.jsx)(Z.m,{})]})]})]})},P=t(168),A=t(4313),I=A.ZP.div(r||(r=(0,P.Z)(["\n  display: flex;\n  gap: 30px;\n  padding-right: 10px;\n  align-items: center;\n  @media screen and (max-width: 520px) {\n    flex-direction: column;\n    align-items: unset;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  button {\n    height: 40px;\n    font-family: Lato;\n    font-weight: 300;\n    font-size: 16px;\n    color: rgb(255, 111, 0);\n    background-color: #0066cc;\n    padding: 5px 20px;\n    border: solid #e9c46a 0px;\n\n    border-radius: 6px;\n    transition: 352ms;\n    transform: translateY(0);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n\n    text-transform: uppercase;\n    @media screen and (max-width: 520px) {\n      padding: 5px 20px;\n    }\n\n    &:hover {\n      transition: 352ms;\n\n      transform: translateY(-0px);\n      background-color: #fff;\n      color: #0066cc;\n      border: solid 0px #0066cc;\n    }\n  }\n"]))),_=function(n){var e=n.contact,t=e.id,r=e.name,i=e.number,o=(0,l.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("p",{children:[r,": ",(0,m.jsx)("span",{children:i})]}),(0,m.jsxs)(I,{children:[(0,m.jsx)(F,{id:t,name:r,number:i}),(0,m.jsx)("button",{type:"button",onClick:function(){return o((0,x.GK)(t))},children:"delete"})]})]})},q=t(2791),L=A.ZP.ul(i||(i=(0,P.Z)(["\n  padding-left: 10px;\n  counter-reset: li;\n\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  li {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    background: #dad2ca;\n    color: #444;\n    border-radius: 0.3em;\n    transition: 0.3s ease-out;\n    &:hover {\n      background: #e9e4e0;\n    }\n    &:not(:last-child) {\n      margin-bottom: 20px;\n    }\n    p {\n      text-transform: capitalize;\n\n      font-size: 24px;\n      position: relative;\n      display: block;\n      padding: 0.4em 0.4em 0.4em 2em;\n    }\n  }\n"]))),B=t(896),E=t(3204),R=function(){var n=(0,l.I0)(),e=(0,l.v9)(p.Af).isLoading,t=(0,l.v9)(p.DI);return(0,q.useEffect)((function(){n((0,x.yF)())}),[n]),(0,m.jsxs)(L,{children:[e&&(0,m.jsx)(B.M,{w:"100%",children:(0,m.jsx)(E.$,{thickness:"5px",speed:"0.55s",emptyColor:"gray.200",color:"blue.500",size:"xl"})}),0!==t.length?t.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsx)(_,{contact:n})},n.id)})):(0,m.jsx)("h3",{style:{paddingLeft:"40px"},children:"There are no apropriate contacts"})]})},O=A.ZP.div(o||(o=(0,P.Z)(["\n  display: flex;\n  gap: 20px;\n  padding-left: 40px;\n  align-items: center;\n  margin-bottom: 20px;\n  @media screen and (max-width: 440px) {\n    flex-direction: column;\n  }\n  input {\n    background: #ecf0f3;\n    padding: 10px;\n    padding-left: 20px;\n    height: 36px;\n    font-size: 16px;\n    border-radius: 40px;\n    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;\n    border: 1px solid #999;\n    outline: none;\n  }\n  label {\n    color: brown;\n    font-size: 24px;\n    font-weight: bold;\n  }\n"]))),S=t(1738),T=function(){var n=(0,l.I0)(),e=(0,l.v9)(p.AD);return(0,m.jsxs)(O,{children:[(0,m.jsx)("label",{htmlFor:"",children:"Find contacts by name"}),(0,m.jsx)("input",{type:"text",value:e,onChange:function(e){var t=e.currentTarget.value.trim();n((0,S.$)(t))}})]})},Y=A.ZP.h2(a||(a=(0,P.Z)(["\n  font-size: 38px;\n  letter-spacing: 0.1em;\n  text-align: center;\n  color: darkblue;\n  margin: 30px;\n"]))),D=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h,{}),(0,m.jsx)(Y,{children:"Contacts"}),(0,m.jsx)(T,{}),(0,m.jsx)(R,{})]})}}}]);
//# sourceMappingURL=457.8b2894ea.chunk.js.map