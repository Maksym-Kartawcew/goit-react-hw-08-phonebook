"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[816],{816:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(791),r=n(434),s=n(351),c=n(97),i="ContactList_contactsBox__H9Ugp",o="ContactList_listItem__SptUx",l=n(184),u=function(){var e=(0,r.I0)(),t=(0,r.v9)(s.Af),n=(0,r.v9)(s.AD);(0,a.useEffect)((function(){e((0,c.yF)())}),[e]);var u=n.length>0?t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):t;return(0,l.jsx)("ul",{className:i,children:u.map((function(t){return(0,l.jsxs)("li",{children:[(0,l.jsxs)("p",{className:o,children:[t.name,":"]})," ",(0,l.jsx)("p",{className:o,children:t.number}),(0,l.jsx)("button",{onClick:function(){return n=t.id,void e((0,c.GK)(n));var n},children:"Delete"})]},t.id)}))})},d=n(439),m="ContactForm_sectionBox__9Rxb1",h="ContactForm_inputBox__cnRUL",p=function(){var e=(0,a.useState)(""),t=(0,d.Z)(e,2),n=t[0],i=t[1],o=(0,a.useState)(""),u=(0,d.Z)(o,2),p=u[0],f=u[1],x=(0,r.I0)(),v=(0,r.v9)(s.Af),_=function(e){var t=e.target,n=t.name,a=t.value;"name"===n?i(a):"number"===n&&f(a)};return(0,l.jsx)("div",{className:m,children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:n,number:p},a=v.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}));a?alert("".concat(a.name," is already in contacts.")):(x((0,c.uK)(t)),i(""),f(""))},className:h,children:[(0,l.jsx)("input",{type:"text",name:"name",placeholder:"Enter your name...",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:_}),(0,l.jsx)("input",{type:"tel",name:"number",placeholder:"Enter your number...",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:p,onChange:_}),(0,l.jsx)("button",{type:"submit",children:"Add Contact"})]})})},f=n(34),x="Filter_filterBox__A-UPt",v="Filter_filterTitle__5SDqd",_=function(){var e=(0,r.I0)(),t=(0,r.v9)(s.AD);return(0,l.jsxs)("div",{className:x,children:[(0,l.jsx)("p",{className:v,children:"Find contact by name"}),(0,l.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){e((0,f.b)(t.target.value))},placeholder:"Search contact"})]})},b=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(p,{}),(0,l.jsx)(_,{}),(0,l.jsx)(u,{})]})}}}]);
//# sourceMappingURL=816.d4c9ca06.chunk.js.map