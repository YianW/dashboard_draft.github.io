"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[927],{927:function(e,n,i){i.r(n);i(2791);var t=i(1889),a=i(4554),r=i(254),l=i(6151),o=i(928),s=i(3735),d=i(1923),c=i(4569),m=i.n(c),h=(i(4050),i(184));n.default=()=>(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(s.Z,{title:"Insert API Key",children:(0,h.jsx)(t.ZP,{container:!0,spacing:d.dv,children:(0,h.jsx)(t.ZP,{item:!0,xs:12,children:(0,h.jsx)(o.Z,{sx:{paddingTop:2},children:(0,h.jsx)(t.ZP,{container:!0,spacing:d.dv,children:(0,h.jsx)(a.Z,{sx:{marginTop:1,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,h.jsxs)(a.Z,{component:"form",onSubmit:e=>{e.preventDefault();const n=new FormData(e.currentTarget),i={merchant_id:n.get("merchantid"),user_vsys_addr:"ATse3RcjEzwc5JHDPcduPYe4qA2mWhSNZaV",mojo_amount:n.get("mojo"),pt_amount:n.get("point")};console.log(i),m().post("http://localhost:8080/api/manualtransfer",i,{Headers:{"Access-Control-Allow-Origin":"*"}}).then((e=>{console.log("Transaction Succeeded. The transaction id is ",e)})).catch((e=>{alert(e)}))},noValidate:!0,sx:{mt:1},children:[(0,h.jsx)(r.Z,{id:"point",label:"API Key",name:"addr",defaultValue:"API Key",sx:{marginLeft:5,marginRight:5,marginBottom:5,marginTop:2,width:200}}),(0,h.jsx)(t.ZP,{children:(0,h.jsx)(l.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,ml:5,width:150},children:"Confirm"})})]})})})})})})})})},4050:function(e,n,i){i.d(n,{Z:function(){return p}});var t=i(2791),a=i(703),r=i(9836),l=i(3382),o=i(3994),s=i(9281),d=i(6890),c=i(3033),m=i(5855),h=i(184);const g=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:e=>e.toLocaleString("en-US")},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:e=>e.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:e=>e.toFixed(2)}];function u(e,n,i,t){return{name:e,code:n,population:i,size:t,density:i/t}}const x=[u("India","IN",1324171354,3287263),u("China","CN",1403500365,9596961),u("Italy","IT",60483973,301340),u("United States","US",327167434,9833520),u("Canada","CA",37602103,9984670),u("Australia","AU",25475400,7692024),u("Germany","DE",83019200,357578),u("Ireland","IE",4857e3,70273),u("Mexico","MX",126577691,1972550),u("Japan","JP",126317e3,377973),u("France","FR",67022e3,640679),u("United Kingdom","GB",67545757,242495),u("Russia","RU",146793744,17098246),u("Nigeria","NG",200962417,923768),u("Brazil","BR",210147125,8515767)];function p(){const[e,n]=t.useState(0),[i,u]=t.useState(10);return(0,h.jsxs)(a.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,h.jsx)(s.Z,{sx:{maxHeight:440},children:(0,h.jsxs)(r.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,h.jsx)(d.Z,{children:(0,h.jsx)(m.Z,{children:g.map((e=>(0,h.jsx)(o.Z,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)))})}),(0,h.jsx)(l.Z,{children:x.slice(e*i,e*i+i).map((e=>(0,h.jsx)(m.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:g.map((n=>{const i=e[n.id];return(0,h.jsx)(o.Z,{align:n.align,children:n.format&&"number"===typeof i?n.format(i):i},n.id)}))},e.code)))})]})}),(0,h.jsx)(c.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:x.length,rowsPerPage:i,page:e,onPageChange:(e,i)=>{n(i)},onRowsPerPageChange:e=>{u(+e.target.value),n(0)}})]})}}}]);
//# sourceMappingURL=927.e2c5572a.chunk.js.map