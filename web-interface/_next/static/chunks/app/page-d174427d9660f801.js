(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4109:function(e,t,n){Promise.resolve().then(n.bind(n,3561))},3561:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(9268),r=n(6642),i=n.n(r),s=n(257),o=n(6006);function l(){let[e,t]=(0,o.useState)(null),[n,r]=(0,o.useState)("view_by_id"),[l,c]=(0,o.useState)("0"),[d,u]=(0,o.useState)(""),[p,_]=(0,o.useState)(""),[h,m]=(0,o.useState)(""),[v,f]=(0,o.useState)("0"),[y,g]=(0,o.useState)(null),[x,w]=(0,o.useState)("");async function j(){let e=await window.leap.signAmino("secretdev-1",h,{chain_id:"secretdev-1",account_number:"0",sequence:"0",fee:{amount:(0,s.stringToCoins)("0uscrt"),gas:"1"},msgs:[{type:"query_permit",value:{permit_name:d,allowed_tokens:[p],permissions:["add"===n?"add":{[n]:{["view_by_id"===n?"record_id":"n"]:"view_by_id"===n?l:parseInt(v)}}]}}],memo:""},{preferNoSetFee:!0});e.signature.pub_key.value="",t('{"params": {"allowed_tokens": [],\n                  "permit_name": "'.concat(d,'",\n                  "chain_id": "secretdev-1",\n                  "permissions": [').concat("add"===n?'"add"':'{"'.concat(n,'": {"').concat("view_by_id"===n?"record_id":"n",'": ').concat("view_by_id"===n?'"'+l+'"':v,"}}"),']},\n                  "signature": ').concat(JSON.stringify(e.signature),"}"))}async function b(){g(await (await fetch("http://localhost:8080/?data="+x)).text())}return(0,o.useEffect)(()=>{(async()=>{var e,t;return m(null===(e=await (null===(t=window.leap)||void 0===t?void 0:t.getKey("secretdev-1")))||void 0===e?void 0:e.bech32Address)})()},[]),(0,a.jsxs)("main",{className:i().main,children:[(0,a.jsxs)("div",{className:i().permitManager,children:[(0,a.jsx)("h2",{children:"Manage Permits"}),(0,a.jsx)("p",{className:i().description,children:"Generate a permit to allow third parties to execute various actions on your contract or query it for data."}),(0,a.jsxs)("form",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,a.jsx)("input",{type:"text",name:"allowed-tokens",placeholder:"Record manager contract address",onChange:e=>_(e.target.value)}),(0,a.jsx)("input",{type:"text",name:"name",placeholder:"Permit name",onChange:e=>u(e.target.value)}),(0,a.jsxs)("select",{onChange:e=>r(e.target.value),children:[(0,a.jsx)("option",{value:"view_by_id",children:"View by ID"},"view_by_id"),(0,a.jsx)("option",{value:"view_last_n",children:"View Last n Records"},"view_last_n"),(0,a.jsx)("option",{value:"add",children:"Add Record"},"add")]}),"view_by_id"===n&&(0,a.jsx)("input",{type:"text",name:"id",placeholder:"Record ID",onChange:e=>c(e.target.value)}),"view_last_n"===n&&(0,a.jsx)("input",{type:"number",name:"n",placeholder:"Number of Records (n)",onChange:e=>f(e.target.value)})]}),(0,a.jsx)("button",{onClick:j,children:"Sign Permit"}),(0,a.jsx)("p",{className:i().result,style:{color:e?void 0:"#77a"},children:null!=e?e:"Awaiting signature..."})]}),(0,a.jsxs)("div",{className:i().verifierUtilities,children:[(0,a.jsx)("h2",{children:"Generate Input Hash"}),(0,a.jsx)("p",{className:i().description,children:"Generate the Poseidon hash of your record data, then use the generated hash on the EVM verifier to ensure the model was run on your data."}),(0,a.jsxs)("div",{children:[(0,a.jsx)("form",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:(0,a.jsx)("input",{type:"text",name:"record-data",placeholder:"Comma-separated record data",onChange:e=>w(e.target.value)})}),(0,a.jsx)("button",{onClick:b,children:"Generate Poseidon Hash"})]}),(0,a.jsx)("p",{className:i().result,style:{color:y?void 0:"#77a"},children:null!=y?y:"Awaiting record data..."})]})]})}},6642:function(e){e.exports={main:"page_main__WunS6",description:"page_description__ihOGI",result:"page_result__onPIZ",permitManager:"page_permitManager___WiB_",verifierUtilities:"page_verifierUtilities__cBBtN"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=n(6006),r=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,l={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!o.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:d,props:l,_owner:s.current}}t.jsx=l,t.jsxs=l},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[255,667,139,744],function(){return e(e.s=4109)}),_N_E=e.O()}]);