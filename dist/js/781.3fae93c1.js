"use strict";(self["webpackChunkpvr"]=self["webpackChunkpvr"]||[]).push([[781],{781:function(e,o,t){t.r(o),t.d(o,{default:function(){return Z}});var l=t(9269);function i(e,o,t,i,r,n){const a=(0,l.up)("Table");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(a,{variables:i.Salida,endPoint:i.endPoint,method:i.method,col:i.columnPvr},null,8,["variables","endPoint","method","col"])])}var r=t(3201);const n={class:"q-pa-md"};function a(e,o,t,i,a,s){const d=(0,l.up)("q-icon"),u=(0,l.up)("q-input"),c=(0,l.up)("q-btn"),p=(0,l.up)("q-th"),m=(0,l.up)("q-tr"),w=(0,l.up)("q-td"),f=(0,l.up)("q-tooltip"),k=(0,l.up)("q-table");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(k,{title:"",rows:i.rows,columns:i.columns,filter:i.filter,"row-key":"name"},{"top-right":(0,l.w5)((()=>[(0,l.Wm)(u,{rounded:"",filled:"",clearable:"",borderless:"",debounce:"300",modelValue:i.filter,"onUpdate:modelValue":o[0]||(o[0]=e=>i.filter=e),placeholder:"Buscar","bg-color":"field"},{append:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"search",color:"blue"})])),_:1},8,["modelValue"])])),"top-left":(0,l.w5)((()=>[(0,l.Wm)(c,{color:"red",icon:"add",size:"sm",onClick:o[1]||(o[1]=e=>i.action(null))},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(i.Agregar),1)])),_:1})])),header:(0,l.w5)((e=>[(0,l.Wm)(m,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{"auto-width":""}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.cols,(o=>((0,l.wg)(),(0,l.j4)(p,{key:o.name,props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(o.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,l.w5)((e=>[(0,l.Wm)(m,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{"auto-width":""}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.cols,(o=>((0,l.wg)(),(0,l.j4)(w,{key:o.name,props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(o.value),1)])),_:2},1032,["props"])))),128)),!1===e.row.status?((0,l.wg)(),(0,l.j4)(w,{key:0,"auto-width":""},{default:(0,l.w5)((()=>[!0===e.row.status?((0,l.wg)(),(0,l.j4)(c,{key:0,color:"green",icon:"search",size:"sm",onClick:o=>i.action(e.row.id,"GET",null,"Consulta",!0)},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Consultar")])),_:1})])),_:2},1032,["onClick"])):(0,l.kq)("",!0),!0===e.row.status?((0,l.wg)(),(0,l.j4)(c,{key:1,color:"red",disable:i.isAdmin,icon:"delete",onClick:o=>i.action(e.row.id,"DELETE",` Registro Eliminado :${e.row.id}`,"Eliminar",!1),size:"sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Eliminar")])),_:1})])),_:2},1032,["disable","onClick"])):(0,l.kq)("",!0),!0===e.row.status?((0,l.wg)(),(0,l.j4)(c,{key:2,color:"blue",icon:"edit",size:"sm",onClick:o=>i.action(e.row.id,"PUT",null,"Modificar",!1)},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Modificar")])),_:1})])),_:2},1032,["onClick"])):(0,l.kq)("",!0)])),_:2},1024)):(0,l.kq)("",!0)])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter"])])}t(4719);var s=t(6237),d=t(2201),u=t(6957),c={name:"Qtable",props:["variables","endPoint","method","col"],setup(e){const o=(0,s.iH)(e.col()),t=(0,s.iH)([]),i=e.variables,r=(e.endPoint,e.method),n=(0,d.tv)(),a=(0,u.oR)(),c=(0,s.iH)(!0),p=(0,s.iH)("");let m="Agregar",w=null,f={url:i.urlEndPointAll,options:{method:r.POST}};a.dispatch("loadList",f),"administrador"===a.getters.isGetter("isToken").tipoUsuario&&(c.value=!1),(0,l.m0)((()=>{a.getters.isGetter("isList")&&p.value&&(t.value=a.getters.isGetter("isList"))}));const k=(e,o,t,l,r)=>{if(null===e)a.dispatch("resetState"),n.push(i.routeAdd);else{let n=`${i.endPointBase}${e}`;w=i.routeAdd;let s={url:n,options:{method:"GET"},msg:t,label:l,method:o,disabled:r,routeAdd:w,routePrincipal:i.routePrincipal};a.dispatch("action",s)}};return{columns:o,rows:t,action:k,filter:p,variable:i,Agregar:m,isAdmin:c}}},p=t(7617),m=t(4025),w=t(6931),f=t(4633),k=t(9804),h=t(8231),b=t(2195),g=t(7282),v=t(4806),P=t(1410),_=t.n(P);const q=(0,p.Z)(c,[["render",a]]);var T=q;_()(c,"components",{QTable:m.Z,QInput:w.Z,QIcon:f.Z,QBtn:k.Z,QTr:h.Z,QTh:b.Z,QTd:g.Z,QTooltip:v.Z});var W=t(1825),C=t(5090),A={components:{Table:T},setup(){return{Salida:W.f,endPoint:W.SJ,method:W.UD,columnPvr:C.DA}}};const U=(0,p.Z)(A,[["render",i]]);var Z=U}}]);
//# sourceMappingURL=781.3fae93c1.js.map