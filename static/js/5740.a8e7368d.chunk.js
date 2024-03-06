"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5740],{85740:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(72791),a=n(57689),s=n(30734),o=n(45471),c=n(55087),i=n(77618),l=n(6265),d=n(22834),p=n(55265),m=n(89290),u=n(22618),h=n(31409),f=n(55294);const y="http://localhost:4000/api",g={countryList:async e=>{try{return(await f.Z.get("".concat(y,"/admin/continents/Asia/countries"),{headers:{Authorization:e}})).data}catch(t){throw t.response?t.response.data:t.message+"--"+t.name}},instituteListByCountry:async(e,t,n)=>{try{return(await f.Z.get("".concat(y,"/admin/continents/").concat(t,"/").concat(n,"/institute-list"),{headers:{Authorization:e}})).data}catch(r){throw r.response?r.response.data:r.message+"--"+r.name}}},x={fetchCountryList:async e=>{try{return await g.countryList(e)}catch(t){throw t}},fetchInstituteDetailsByCountry:async(e,t,n)=>{try{return await g.instituteListByCountry(e,t,n)}catch(r){throw r}}};var N=n(80184);const b=()=>{const[e,t]=(0,r.useState)([]),n=(0,a.s0)(),f=h.Z.getAccessToken();(0,r.useEffect)((()=>{(async()=>{const e=h.Z.getAccessToken();let r=[];try{r=await x.fetchCountryList(e),console.log("response==>",r),localStorage.setItem("tokenStatus",r.data.tokenStatus),t(r.data)}catch(a){a.response?(console.log("Error Response:",a.response.data),console.log("Status Code:",a.response.status),n("/admin/login",{replace:!0})):a.request?console.log("No response received:",a.request):(n("/admin/login",{replace:!0}),console.log("Error:",a.message))}})()}),[]);return(0,N.jsx)(s.r,{children:(0,N.jsx)(o.b,{xs:12,children:(0,N.jsxs)(c.x,{className:"mb-4",children:[(0,N.jsxs)(i.b,{children:[(0,N.jsx)("strong",{children:"Countries"})," ",(0,N.jsx)("small",{children:"List"})]}),(0,N.jsxs)(l.s,{children:[(0,N.jsx)("p",{className:"text-body-secondary small",children:"Listed all countries under Asia."}),(0,N.jsx)(s.r,{children:e.map(((e,t)=>(0,N.jsx)(o.b,{xs:4,children:(0,N.jsxs)(c.x,{style:{width:"18rem",marginTop:"10px"},children:[(0,N.jsx)(d.p,{orientation:"top",src:e.imagePath,style:{height:"150px"}}),(0,N.jsxs)(l.s,{children:[(0,N.jsx)(p.t,{children:e.name}),(0,N.jsx)(m.u,{children:"Asia is the largest continent in the world by both land area and population."}),(0,N.jsx)(u.u,{color:"primary",onClick:()=>(async e=>{let t=[];try{t=await x.fetchInstituteDetailsByCountry(f,"Asia",e),n("/admin/courses/continents/educational-institutes",{state:{institueData:t.data,continent:"Asia",countryId:e}})}catch(r){console.log("error on institute list fetch =-> ",r)}})(e._id),children:"Explore"})]})]})},t)))})]})]})})})}},55087:(e,t,n)=>{n.d(t,{x:()=>l});var r=n(83229),a=n(72791),s=n(52007),o=n.n(s),c=n(64379),i=n(44942),l=(0,a.forwardRef)((function(e,t){var n,s=e.children,o=e.className,i=e.color,l=e.textColor,d=(0,r._T)(e,["children","className","color","textColor"]);return a.createElement("div",(0,r.pi)({className:(0,c.Z)("card",(n={},n["bg-".concat(i)]=i,n["text-".concat(l)]=l,n),o)},d,{ref:t}),s)}));l.propTypes={children:o().node,className:o().string,color:i.$1,textColor:o().string},l.displayName="CCard"},6265:(e,t,n)=>{n.d(t,{s:()=>i});var r=n(83229),a=n(72791),s=n(52007),o=n.n(s),c=n(64379),i=(0,a.forwardRef)((function(e,t){var n=e.children,s=e.className,o=(0,r._T)(e,["children","className"]);return a.createElement("div",(0,r.pi)({className:(0,c.Z)("card-body",s)},o,{ref:t}),n)}));i.propTypes={children:o().node,className:o().string},i.displayName="CCardBody"},77618:(e,t,n)=>{n.d(t,{b:()=>i});var r=n(83229),a=n(72791),s=n(52007),o=n.n(s),c=n(64379),i=(0,a.forwardRef)((function(e,t){var n=e.children,s=e.component,o=void 0===s?"div":s,i=e.className,l=(0,r._T)(e,["children","component","className"]);return a.createElement(o,(0,r.pi)({className:(0,c.Z)("card-header",i)},l,{ref:t}),n)}));i.propTypes={children:o().node,className:o().string,component:o().elementType},i.displayName="CCardHeader"},22834:(e,t,n)=>{n.d(t,{p:()=>i});var r=n(83229),a=n(72791),s=n(52007),o=n.n(s),c=n(64379),i=(0,a.forwardRef)((function(e,t){var n=e.children,s=e.className,o=e.component,i=void 0===o?"img":o,l=e.orientation,d=(0,r._T)(e,["children","className","component","orientation"]);return a.createElement(i,(0,r.pi)({className:(0,c.Z)(l?"card-img-".concat(l):"card-img",s)},d,{ref:t}),n)}));i.propTypes={children:o().node,className:o().string,component:o().elementType,orientation:o().oneOf(["top","bottom"])},i.displayName="CCardImage"},89290:(e,t,n)=>{n.d(t,{u:()=>i});var r=n(83229),a=n(72791),s=n(52007),o=n.n(s),c=n(64379),i=(0,a.forwardRef)((function(e,t){var n=e.children,s=e.component,o=void 0===s?"p":s,i=e.className,l=(0,r._T)(e,["children","component","className"]);return a.createElement(o,(0,r.pi)({className:(0,c.Z)("card-text",i)},l,{ref:t}),n)}));i.propTypes={children:o().node,className:o().string,component:o().elementType},i.displayName="CCardText"},55265:(e,t,n)=>{n.d(t,{t:()=>i});var r=n(83229),a=n(72791),s=n(52007),o=n.n(s),c=n(64379),i=(0,a.forwardRef)((function(e,t){var n=e.children,s=e.component,o=void 0===s?"h5":s,i=e.className,l=(0,r._T)(e,["children","component","className"]);return a.createElement(o,(0,r.pi)({className:(0,c.Z)("card-title",i)},l,{ref:t}),n)}));i.propTypes={children:o().node,className:o().string,component:o().elementType},i.displayName="CCardTitle"},45471:(e,t,n)=>{n.d(t,{b:()=>l});var r=n(83229),a=n(72791),s=n(52007),o=n.n(s),c=n(64379),i=["xxl","xl","lg","md","sm","xs"],l=(0,a.forwardRef)((function(e,t){var n=e.children,s=e.className,o=(0,r._T)(e,["children","className"]),l=[];return i.forEach((function(e){var t=o[e];delete o[e];var n="xs"===e?"":"-".concat(e);"number"!==typeof t&&"string"!==typeof t||l.push("col".concat(n,"-").concat(t)),"boolean"===typeof t&&l.push("col".concat(n)),t&&"object"===typeof t&&("number"!==typeof t.span&&"string"!==typeof t.span||l.push("col".concat(n,"-").concat(t.span)),"boolean"===typeof t.span&&l.push("col".concat(n)),"number"!==typeof t.order&&"string"!==typeof t.order||l.push("order".concat(n,"-").concat(t.order)),"number"===typeof t.offset&&l.push("offset".concat(n,"-").concat(t.offset)))})),a.createElement("div",(0,r.pi)({className:(0,c.Z)(l.length>0?l:"col",s)},o,{ref:t}),n)})),d=o().oneOfType([o().bool,o().number,o().string,o().oneOf(["auto"])]),p=o().oneOfType([d,o().shape({span:d,offset:o().oneOfType([o().number,o().string]),order:o().oneOfType([o().oneOf(["first","last"]),o().number,o().string])})]);l.propTypes={children:o().node,className:o().string,xs:p,sm:p,md:p,lg:p,xl:p,xxl:p},l.displayName="CCol"},30734:(e,t,n)=>{n.d(t,{r:()=>l});var r=n(83229),a=n(72791),s=n(52007),o=n.n(s),c=n(64379),i=["xxl","xl","lg","md","sm","xs"],l=(0,a.forwardRef)((function(e,t){var n=e.children,s=e.className,o=(0,r._T)(e,["children","className"]),l=[];return i.forEach((function(e){var t=o[e];delete o[e];var n="xs"===e?"":"-".concat(e);"object"===typeof t&&(t.cols&&l.push("row-cols".concat(n,"-").concat(t.cols)),"number"===typeof t.gutter&&l.push("g".concat(n,"-").concat(t.gutter)),"number"===typeof t.gutterX&&l.push("gx".concat(n,"-").concat(t.gutterX)),"number"===typeof t.gutterY&&l.push("gy".concat(n,"-").concat(t.gutterY)))})),a.createElement("div",{className:(0,c.Z)("row",l,s),ref:t},n)})),d=o().shape({cols:o().oneOfType([o().oneOf(["auto"]),o().number,o().string]),gutter:o().oneOfType([o().string,o().number]),gutterX:o().oneOfType([o().string,o().number]),gutterY:o().oneOfType([o().string,o().number])});l.propTypes={children:o().node,className:o().string,xs:d,sm:d,md:d,lg:d,xl:d,xxl:d},l.displayName="CRow"}}]);
//# sourceMappingURL=5740.a8e7368d.chunk.js.map