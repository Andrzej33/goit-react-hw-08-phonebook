"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[751],{5973:function(n,e,r){r.d(e,{B:function(){return l},l:function(){return s}});var o,a,i=r(168),t=r(4313),p=r(5705),s=(0,t.ZP)(p.l0)(o||(o=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 20px;\n  border: solid #ff6f00 2px;\n  border-radius: 10px;\n\n  label {\n    padding-left: 20px;\n    margin-bottom: 10px;\n    display: block;\n    font-size: 18px;\n    color: #666;\n\n    cursor: pointer;\n  }\n\n  input {\n    background: #ecf0f3;\n    padding: 10px;\n    padding-left: 20px;\n    height: 40px;\n    font-size: 20px;\n    border-radius: 50px;\n    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;\n    border: 1px solid #999;\n    outline: none;\n    margin-bottom: 15px;\n\n    &:focus {\n      border-color: #ff6f00;\n    }\n  }\n\n  button {\n    font-size: 16px;\n    max-width: 170px;\n    margin: 0 auto;\n    padding: 10px 20px;\n    border-radius: 20px;\n    border: solid transparent 1px;\n    background-color: #ff6f00;\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    display: inline-block;\n    cursor: pointer;\n    margin-top: 20px;\n    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n      border: solid #ff6f00 1px;\n      background-color: #fff;\n      color: #ff6f00;\n      box-shadow: 0px 10px 15px -6px rgba(88, 85, 85, 0.2);\n    }\n  }\n"]))),l=(0,t.ZP)(p.Bc)(a||(a=(0,i.Z)(["\n  margin-bottom: 20px;\n  font-size: 14px;\n  padding-left: 20px;\n  color: red;\n  /* color: {p => p.theme.color.accent} */\n"])))},2751:function(n,e,r){r.r(e),r.d(e,{default:function(){return c}});var o=r(5705),a=r(5973),i=r(9434),t=r(264),p=r(8007),s=r(184),l=p.Ry().shape({name:p.Z_().required("Required field"),email:p.Z_().min(5,"must be at least 5 characters long").email("must be a valid email").required("Required field"),password:p.Z_().min(8,"must be at least 8 characters long").required("Required field").typeError("That doesn't look like a password").required("Required field")}),d=function(){var n=(0,i.I0)();return(0,s.jsx)(o.J9,{initialValues:{name:"",email:"",password:""},validationSchema:l,onSubmit:function(e,r){n((0,t.z2)(e)),r.resetForm()},children:(0,s.jsxs)(a.l,{children:[(0,s.jsx)("label",{children:"User name "}),(0,s.jsx)(o.gN,{name:"name"}),(0,s.jsx)(a.B,{name:"name",component:"span"}),(0,s.jsx)("label",{children:"Email"}),(0,s.jsx)(o.gN,{type:"email",name:"email"}),(0,s.jsx)(a.B,{name:"email",component:"span"}),(0,s.jsx)("label",{children:"Password"}),(0,s.jsx)(o.gN,{type:"password",name:"password"}),(0,s.jsx)(a.B,{name:"password",component:"span"}),(0,s.jsx)("button",{type:"submit",children:"Confirm"})]})})},c=function(){return(0,s.jsx)(d,{})}}}]);
//# sourceMappingURL=751.0ceb8416.chunk.js.map