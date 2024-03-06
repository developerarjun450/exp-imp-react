"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6188],{56188:(e,a,n)=>{n.r(a),n.d(a,{default:()=>f});n(72791);var l=n(33778),t=n(30734),o=n(45471),r=n(27316),i=n(71987),c=n(95294),s=n(22618),d=n(24846),p=n(18534),m=n(80184);const f=()=>(0,m.jsx)("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:(0,m.jsx)(l.K,{children:(0,m.jsx)(t.r,{className:"justify-content-center",children:(0,m.jsxs)(o.b,{md:6,children:[(0,m.jsxs)("span",{className:"clearfix",children:[(0,m.jsx)("h1",{className:"float-start display-3 me-4",children:"500"}),(0,m.jsx)("h4",{className:"pt-3",children:"Houston, we have a problem!"}),(0,m.jsx)("p",{className:"text-body-secondary float-start",children:"The page you are looking for is temporarily unavailable."})]}),(0,m.jsxs)(r.Y,{className:"input-prepend",children:[(0,m.jsx)(i.w,{children:(0,m.jsx)(d.Z,{icon:p.M})}),(0,m.jsx)(c.j,{type:"text",placeholder:"What are you looking for?"}),(0,m.jsx)(s.u,{color:"info",children:"Search"})]})]})})})})},18534:(e,a,n)=>{n.d(a,{M:()=>l});var l=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z' class='ci-primary'/>"]},54628:(e,a,n)=>{n.d(a,{X:()=>c});var l=n(83229),t=n(72791),o=n(52007),r=n.n(o),i=n(2328),c=function(e){var a=e.describedby,n=e.feedback,o=e.feedbackInvalid,r=e.feedbackValid,c=e.invalid,s=e.tooltipFeedback,d=e.valid;return t.createElement(t.Fragment,null,n&&(d||c)&&t.createElement(i.C,(0,l.pi)({},c&&{id:a},{invalid:c,tooltip:s,valid:d}),n),o&&t.createElement(i.C,{id:a,invalid:!0,tooltip:s},o),r&&t.createElement(i.C,{valid:!0,tooltip:s},r))};c.propTypes={describedby:r().string,feedback:r().oneOfType([r().node,r().string]),feedbackValid:r().oneOfType([r().node,r().string]),feedbackInvalid:r().oneOfType([r().node,r().string]),invalid:r().bool,tooltipFeedback:r().bool,valid:r().bool},c.displayName="CFormControlValidation"},21359:(e,a,n)=>{n.d(a,{e:()=>m});var l=n(83229),t=n(72791),o=n(52007),r=n.n(o),i=n(54628),c=n(59181),s=n(26775),d=n(64379),p=(0,t.forwardRef)((function(e,a){var n=e.children,o=e.className,r=e.component,i=void 0===r?"div":r,c=(0,l._T)(e,["children","className","component"]);return t.createElement(i,(0,l.pi)({className:(0,d.Z)("form-text",o)},c,{ref:a}),n)}));p.propTypes={children:r().node,className:r().string,component:r().elementType},p.displayName="CFormText";var m=function(e){var a=e.children,n=e.describedby,l=e.feedback,o=e.feedbackInvalid,r=e.feedbackValid,d=e.floatingClassName,m=e.floatingLabel,f=e.id,u=e.invalid,b=e.label,y=e.text,v=e.tooltipFeedback,g=e.valid,h=function(){return t.createElement(i.X,{describedby:n,feedback:l,feedbackInvalid:o,feedbackValid:r,floatingLabel:m,invalid:u,tooltipFeedback:v,valid:g})};return m?t.createElement(c.j,{className:d},a,t.createElement(s.L,{htmlFor:f},b||m),y&&t.createElement(p,{id:n},y),t.createElement(h,null)):t.createElement(t.Fragment,null,b&&t.createElement(s.L,{htmlFor:f},b),a,y&&t.createElement(p,{id:n},y),t.createElement(h,null))};m.propTypes=(0,l.pi)({children:r().node,floatingClassName:r().string,floatingLabel:r().oneOfType([r().node,r().string]),label:r().oneOfType([r().node,r().string]),text:r().oneOfType([r().node,r().string])},i.X.propTypes),m.displayName="CFormControlWrapper"},2328:(e,a,n)=>{n.d(a,{C:()=>c});var l=n(83229),t=n(72791),o=n(52007),r=n.n(o),i=n(64379),c=(0,t.forwardRef)((function(e,a){var n,o=e.children,r=e.className,c=e.component,s=void 0===c?"div":c,d=e.invalid,p=e.tooltip,m=e.valid,f=(0,l._T)(e,["children","className","component","invalid","tooltip","valid"]);return t.createElement(s,(0,l.pi)({className:(0,i.Z)((n={},n["invalid-".concat(p?"tooltip":"feedback")]=d,n["valid-".concat(p?"tooltip":"feedback")]=m,n),r)},f,{ref:a}),o)}));c.propTypes={children:r().node,className:r().string,component:r().elementType,invalid:r().bool,tooltip:r().bool,valid:r().bool},c.displayName="CFormFeedback"},59181:(e,a,n)=>{n.d(a,{j:()=>c});var l=n(83229),t=n(72791),o=n(52007),r=n.n(o),i=n(64379),c=(0,t.forwardRef)((function(e,a){var n=e.children,o=e.className,r=(0,l._T)(e,["children","className"]);return t.createElement("div",(0,l.pi)({className:(0,i.Z)("form-floating",o)},r,{ref:a}),n)}));c.propTypes={children:r().node,className:r().string},c.displayName="CFormFloating"},95294:(e,a,n)=>{n.d(a,{j:()=>s});var l=n(83229),t=n(72791),o=n(52007),r=n.n(o),i=n(64379),c=n(21359),s=(0,t.forwardRef)((function(e,a){var n,o=e.children,r=e.className,s=e.delay,d=void 0!==s&&s,p=e.feedback,m=e.feedbackInvalid,f=e.feedbackValid,u=e.floatingClassName,b=e.floatingLabel,y=e.id,v=e.invalid,g=e.label,h=e.onChange,N=e.plainText,x=e.size,T=e.text,k=e.tooltipFeedback,C=e.type,E=void 0===C?"text":C,O=e.valid,_=(0,l._T)(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),j=(0,t.useState)(),F=j[0],w=j[1];return(0,t.useEffect)((function(){var e=setTimeout((function(){return F&&h&&h(F)}),"number"===typeof d?d:500);return function(){return clearTimeout(e)}}),[F]),t.createElement(c.e,{describedby:_["aria-describedby"],feedback:p,feedbackInvalid:m,feedbackValid:f,floatingClassName:u,floatingLabel:b,id:y,invalid:v,label:g,text:T,tooltipFeedback:k,valid:O},t.createElement("input",(0,l.pi)({className:(0,i.Z)(N?"form-control-plaintext":"form-control",(n={},n["form-control-".concat(x)]=x,n["form-control-color"]="color"===E,n["is-invalid"]=v,n["is-valid"]=O,n),r),id:y,type:E,onChange:function(e){return d?w(e):h&&h(e)}},_,{ref:a}),o))}));s.propTypes=(0,l.pi)({className:r().string,id:r().string,delay:r().oneOfType([r().bool,r().number]),plainText:r().bool,size:r().oneOf(["sm","lg"]),type:r().oneOfType([r().oneOf(["color","file","text"]),r().string])},c.e.propTypes),s.displayName="CFormInput"},26775:(e,a,n)=>{n.d(a,{L:()=>c});var l=n(83229),t=n(72791),o=n(52007),r=n.n(o),i=n(64379),c=(0,t.forwardRef)((function(e,a){var n=e.children,o=e.className,r=e.customClassName,c=(0,l._T)(e,["children","className","customClassName"]);return t.createElement("label",(0,l.pi)({className:null!==r&&void 0!==r?r:(0,i.Z)("form-label",o)},c,{ref:a}),n)}));c.propTypes={children:r().node,className:r().string,customClassName:r().string},c.displayName="CFormLabel"},27316:(e,a,n)=>{n.d(a,{Y:()=>c});var l=n(83229),t=n(72791),o=n(52007),r=n.n(o),i=n(64379),c=(0,t.forwardRef)((function(e,a){var n,o=e.children,r=e.className,c=e.size,s=(0,l._T)(e,["children","className","size"]);return t.createElement("div",(0,l.pi)({className:(0,i.Z)("input-group",(n={},n["input-group-".concat(c)]=c,n),r)},s,{ref:a}),o)}));c.propTypes={children:r().node,className:r().string,size:r().oneOf(["sm","lg"])},c.displayName="CInputGroup"},71987:(e,a,n)=>{n.d(a,{w:()=>c});var l=n(83229),t=n(72791),o=n(52007),r=n.n(o),i=n(64379),c=(0,t.forwardRef)((function(e,a){var n=e.children,o=e.className,r=e.component,c=void 0===r?"span":r,s=(0,l._T)(e,["children","className","component"]);return t.createElement(c,(0,l.pi)({className:(0,i.Z)("input-group-text",o)},s,{ref:a}),n)}));c.propTypes={children:r().node,className:r().string,component:r().elementType},c.displayName="CInputGroupText"},45471:(e,a,n)=>{n.d(a,{b:()=>s});var l=n(83229),t=n(72791),o=n(52007),r=n.n(o),i=n(64379),c=["xxl","xl","lg","md","sm","xs"],s=(0,t.forwardRef)((function(e,a){var n=e.children,o=e.className,r=(0,l._T)(e,["children","className"]),s=[];return c.forEach((function(e){var a=r[e];delete r[e];var n="xs"===e?"":"-".concat(e);"number"!==typeof a&&"string"!==typeof a||s.push("col".concat(n,"-").concat(a)),"boolean"===typeof a&&s.push("col".concat(n)),a&&"object"===typeof a&&("number"!==typeof a.span&&"string"!==typeof a.span||s.push("col".concat(n,"-").concat(a.span)),"boolean"===typeof a.span&&s.push("col".concat(n)),"number"!==typeof a.order&&"string"!==typeof a.order||s.push("order".concat(n,"-").concat(a.order)),"number"===typeof a.offset&&s.push("offset".concat(n,"-").concat(a.offset)))})),t.createElement("div",(0,l.pi)({className:(0,i.Z)(s.length>0?s:"col",o)},r,{ref:a}),n)})),d=r().oneOfType([r().bool,r().number,r().string,r().oneOf(["auto"])]),p=r().oneOfType([d,r().shape({span:d,offset:r().oneOfType([r().number,r().string]),order:r().oneOfType([r().oneOf(["first","last"]),r().number,r().string])})]);s.propTypes={children:r().node,className:r().string,xs:p,sm:p,md:p,lg:p,xl:p,xxl:p},s.displayName="CCol"},33778:(e,a,n)=>{n.d(a,{K:()=>s});var l=n(83229),t=n(72791),o=n(52007),r=n.n(o),i=n(64379),c=["xxl","xl","lg","md","sm","fluid"],s=(0,t.forwardRef)((function(e,a){var n=e.children,o=e.className,r=(0,l._T)(e,["children","className"]),s=[];return c.forEach((function(e){var a=r[e];delete r[e],a&&s.push("container-".concat(e))})),t.createElement("div",(0,l.pi)({className:(0,i.Z)(s.length>0?s:"container",o)},r,{ref:a}),n)}));s.propTypes={children:r().node,className:r().string,sm:r().bool,md:r().bool,lg:r().bool,xl:r().bool,xxl:r().bool,fluid:r().bool},s.displayName="CContainer"},30734:(e,a,n)=>{n.d(a,{r:()=>s});var l=n(83229),t=n(72791),o=n(52007),r=n.n(o),i=n(64379),c=["xxl","xl","lg","md","sm","xs"],s=(0,t.forwardRef)((function(e,a){var n=e.children,o=e.className,r=(0,l._T)(e,["children","className"]),s=[];return c.forEach((function(e){var a=r[e];delete r[e];var n="xs"===e?"":"-".concat(e);"object"===typeof a&&(a.cols&&s.push("row-cols".concat(n,"-").concat(a.cols)),"number"===typeof a.gutter&&s.push("g".concat(n,"-").concat(a.gutter)),"number"===typeof a.gutterX&&s.push("gx".concat(n,"-").concat(a.gutterX)),"number"===typeof a.gutterY&&s.push("gy".concat(n,"-").concat(a.gutterY)))})),t.createElement("div",{className:(0,i.Z)("row",s,o),ref:a},n)})),d=r().shape({cols:r().oneOfType([r().oneOf(["auto"]),r().number,r().string]),gutter:r().oneOfType([r().string,r().number]),gutterX:r().oneOfType([r().string,r().number]),gutterY:r().oneOfType([r().string,r().number])});s.propTypes={children:r().node,className:r().string,xs:d,sm:d,md:d,lg:d,xl:d,xxl:d},s.displayName="CRow"}}]);
//# sourceMappingURL=6188.0f929b0e.chunk.js.map