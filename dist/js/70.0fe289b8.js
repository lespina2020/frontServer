"use strict";(self["webpackChunkpvr"]=self["webpackChunkpvr"]||[]).push([[70],{4982:function(t,e,l){var a=l(9269),r=l(6597),n=l(3856),i=l(64);const o=["horizontal","vertical","cell","none"];e.Z=(0,n.L)({name:"QMarkupTable",props:{...r.S,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:t=>o.includes(t)}},setup(t,{slots:e}){const l=(0,a.FN)(),n=(0,r.Z)(t,l.proxy.$q),o=(0,a.Fl)((()=>`q-markup-table q-table__container q-table__card q-table--${t.separator}-separator`+(!0===n.value?" q-table--dark q-table__card--dark q-dark":"")+(!0===t.dense?" q-table--dense":"")+(!0===t.flat?" q-table--flat":"")+(!0===t.bordered?" q-table--bordered":"")+(!0===t.square?" q-table--square":"")+(!1===t.wrapCells?" q-table--no-wrap":"")));return()=>(0,a.h)("div",{class:o.value},[(0,a.h)("table",{class:"q-table"},(0,i.KR)(e.default))])}})},4806:function(t,e,l){var a=l(9269),r=l(6237),n=l(5102),i=l(9600),o=l(5632),d=l(9216),s=l(3852),u=l(959),c=l(6775),p=l(7933),m=l(3856),_=l(7336),f=l(3027),v=l(1307),h=l(64),b=l(9548),g=l(2550);e.Z=(0,m.L)({name:"QTooltip",inheritAttrs:!1,props:{...i.u,...d.vr,...u.D,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:g.$},self:{type:String,default:"top middle",validator:g.$},offset:{type:Array,default:()=>[14,14],validator:g.io},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...d.gH],setup(t,{slots:e,emit:l,attrs:m}){let w,x;const S=(0,a.FN)(),{proxy:{$q:y}}=S,E=(0,r.iH)(null),H=(0,r.iH)(!1),q=(0,a.Fl)((()=>(0,g.li)(t.anchor,y.lang.rtl))),W=(0,a.Fl)((()=>(0,g.li)(t.self,y.lang.rtl))),z=(0,a.Fl)((()=>!0!==t.persistent)),{registerTick:A,removeTick:C}=(0,c.Z)(),{registerTimeout:O}=(0,p.Z)(),{transitionProps:R,transitionStyle:T}=(0,u.Z)(t),{localScrollTarget:Z,changeScrollEvent:k,unconfigureScrollTarget:U}=(0,o.Z)(t,K),{anchorEl:D,canShow:V,anchorEvents:M}=(0,i.Z)({showing:H,configureAnchorEl:J}),{show:I,hide:N}=(0,d.ZP)({showing:H,canShow:V,handleShow:j,handleHide:F,hideOnRouteChange:z,processOnMount:!0});Object.assign(M,{delayShow:$,delayHide:Y});const{showPortal:L,hidePortal:P,renderPortal:G}=(0,s.Z)(S,E,tt,"tooltip");if(!0===y.platform.is.mobile){const e={anchorEl:D,innerRef:E,onClickOutside(t){return N(t),t.target.classList.contains("q-dialog__backdrop")&&(0,f.NS)(t),!0}},l=(0,a.Fl)((()=>null===t.modelValue&&!0!==t.persistent&&!0===H.value));(0,a.YP)(l,(t=>{const l=!0===t?b.m:b.D;l(e)})),(0,a.Jd)((()=>{(0,b.D)(e)}))}function j(e){L(),A((()=>{x=new MutationObserver((()=>B())),x.observe(E.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),B(),K()})),void 0===w&&(w=(0,a.YP)((()=>y.screen.width+"|"+y.screen.height+"|"+t.self+"|"+t.anchor+"|"+y.lang.rtl),B)),O((()=>{L(!0),l("show",e)}),t.transitionDuration)}function F(e){C(),P(),Q(),O((()=>{P(!0),l("hide",e)}),t.transitionDuration)}function Q(){void 0!==x&&(x.disconnect(),x=void 0),void 0!==w&&(w(),w=void 0),U(),(0,f.ul)(M,"tooltipTemp")}function B(){(0,g.wq)({targetEl:E.value,offset:t.offset,anchorEl:D.value,anchorOrigin:q.value,selfOrigin:W.value,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function $(e){if(!0===y.platform.is.mobile){(0,v.M)(),document.body.classList.add("non-selectable");const t=D.value,e=["touchmove","touchcancel","touchend","click"].map((e=>[t,e,"delayHide","passiveCapture"]));(0,f.M0)(M,"tooltipTemp",e)}O((()=>{I(e)}),t.delay)}function Y(e){!0===y.platform.is.mobile&&((0,f.ul)(M,"tooltipTemp"),(0,v.M)(),setTimeout((()=>{document.body.classList.remove("non-selectable")}),10)),O((()=>{N(e)}),t.hideDelay)}function J(){if(!0===t.noParentEvent||null===D.value)return;const e=!0===y.platform.is.mobile?[[D.value,"touchstart","delayShow","passive"]]:[[D.value,"mouseenter","delayShow","passive"],[D.value,"mouseleave","delayHide","passive"]];(0,f.M0)(M,"anchor",e)}function K(){if(null!==D.value||void 0!==t.scrollTarget){Z.value=(0,_.b0)(D.value,t.scrollTarget);const e=!0===t.noParentEvent?B:N;k(Z.value,e)}}function X(){return!0===H.value?(0,a.h)("div",{...m,ref:E,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",m.class],style:[m.style,T.value],role:"tooltip"},(0,h.KR)(e.default)):null}function tt(){return(0,a.h)(n.uT,R.value,X)}return(0,a.Jd)(Q),Object.assign(S.proxy,{updatePosition:B}),G}})},9103:function(t,e,l){l.d(e,{Z:function(){return c}});var a=l(9269);function r(t,e,l,r,n,i){const o=(0,a.up)("q-img");return(0,a.wg)(),(0,a.j4)(o,{src:`${l.url}${l.img}`,"spinner-color":"white",style:{height:"140px","max-width":"150px"}},null,8,["src"])}var n={props:["url","img"]},i=l(7617),o=l(4711),d=l(1410),s=l.n(d);const u=(0,i.Z)(n,[["render",r]]);var c=u;s()(n,"components",{QImg:o.Z})},7278:function(t,e,l){l.r(e),l.d(e,{default:function(){return Ut}});var a=l(9269),r=l(3201);const n=t=>((0,a.dD)("data-v-78a22e6b"),t=t(),(0,a.Cn)(),t),i={class:"q-pa-md"},o=n((()=>(0,a._)("div",{class:"text-h6 text-center"},"Planilla de Prevencion Vehicular",-1))),d={class:"text-h8 text-center"},s={class:"q-pa-md row items-start justify-center q-gutter-md"},u=n((()=>(0,a._)("b",null,"Unidad:",-1))),c=n((()=>(0,a._)("b",null,"Placa:",-1))),p=n((()=>(0,a._)("b",null,"Tipo de Unidad:",-1))),m=n((()=>(0,a._)("b",null,"Modelo:",-1))),_=n((()=>(0,a._)("b",null,"Chofer:",-1))),f=n((()=>(0,a._)("b",null,"Cedula:",-1))),v=n((()=>(0,a._)("b",null,"Telefono Chofer:",-1))),h=n((()=>(0,a._)("b",null,"Cod-Ruta:",-1))),b=n((()=>(0,a._)("b",null,"Superv. Ruta:",-1))),g=n((()=>(0,a._)("tfoot",null,[(0,a._)("tr",null,[(0,a._)("th",{colspan:"4",nowrap:""})])],-1))),w=n((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"text-left"},[(0,a._)("b",null,"CONDICIONES EN QUE")]),(0,a._)("th",{class:"text-center"},[(0,a._)("b",null,"SALE")]),(0,a._)("th",{class:"text-center"},[(0,a._)("b",null,"ENTRA")])])],-1))),x=n((()=>(0,a._)("td",{class:"text-left"},"FECHA",-1))),S={class:"text-center"},y={class:"text-center"},E=n((()=>(0,a._)("td",{class:"text-left"},"HORA",-1))),H={class:"text-center"},q={class:"text-center"},W=n((()=>(0,a._)("td",{class:"text-left"},"KILOMETRAJE",-1))),z={class:"text-center"},A={class:"text-center"},C=n((()=>(0,a._)("td",{class:"text-left"},"GASOLINA/GASOIL",-1))),O={class:"text-center"},R={class:"text-center"},T=n((()=>(0,a._)("td",{class:"text-left"},"ACEITE MOTOR",-1))),Z={class:"text-center"},k={class:"text-center"},U=n((()=>(0,a._)("td",{class:"text-left"},"ACEITE HIDDRAULICO",-1))),D={class:"text-center"},V={class:"text-center"},M=n((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th",{style:{padding:"0px"},colspan:"4"},[(0,a._)("b",null,"SALE")]),(0,a._)("th",{colspan:"4",style:{padding:"0px"}},[(0,a._)("b",null,"ENTRA")])]),(0,a._)("tr",null,[(0,a._)("th",{HEIGHT:"2",style:{padding:"0px"}},"Seleccione"),(0,a._)("th",null,"B"),(0,a._)("th",null,"M"),(0,a._)("th",null,"R"),(0,a._)("th",null,"N/A"),(0,a._)("th",null,"B"),(0,a._)("th",null,"M"),(0,a._)("th",null,"R"),(0,a._)("th",null,"N/A")])],-1))),I={class:"text-subtitle2"},N=n((()=>(0,a._)("b",null,"Observacion ",-1))),L={class:"text-center"},P=n((()=>(0,a._)("th",{class:"text-left"},[(0,a._)("b",null,"SEGURIDAD:")],-1))),G={class:"text-left"},j={class:"text-center"},F={class:"text-left"},Q={class:"text-left"},B={class:"text-center"},$={class:"text-left"},Y={class:"text-left"},J={class:"text-center"},K={class:"text-left"},X={class:"text-left"};function tt(t,e,l,n,tt,et){const lt=(0,a.up)("q-markup-table"),at=(0,a.up)("q-separator"),rt=(0,a.up)("q-input"),nt=(0,a.up)("q-card"),it=(0,a.up)("q-card-section"),ot=(0,a.up)("Salida"),dt=(0,a.up)("Observacion"),st=(0,a.up)("Img"),ut=(0,a.up)("q-card-actions");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",i,[o,(0,a._)("div",d,[(0,a._)("b",null,"PLANILLA N° DE OPERACIONES:0"+(0,r.zw)(n.model.correlativo),1)])]),(0,a._)("div",s,[(0,a.Wm)(nt,{flat:"",bordered:"",class:"my-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(it,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(lt,null,{default:(0,a.w5)((()=>[(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",null,[u,(0,a.Uk)((0,r.zw)(n.model.unidad),1)]),(0,a._)("td",null,[c,(0,a.Uk)((0,r.zw)(n.model.placa),1)]),(0,a._)("td",null,[p,(0,a.Uk)((0,r.zw)(n.model.tipoUnidad),1)])]),(0,a._)("tr",null,[(0,a._)("td",null,[m,(0,a.Uk)((0,r.zw)(n.model.marca),1)]),(0,a._)("td",null,[_,(0,a.Uk)((0,r.zw)(n.chofer.nombreApellido),1)]),(0,a._)("td",null,[f,(0,a.Uk)((0,r.zw)(n.chofer.cedula),1)])]),(0,a._)("tr",null,[(0,a._)("td",null,[v,(0,a.Uk)((0,r.zw)(n.chofer.telefono),1)]),(0,a._)("td",null,[h,(0,a.Uk)((0,r.zw)(n.ruta.codRuta),1)]),(0,a._)("td",null,[b,(0,a.Uk)((0,r.zw)(n.ruta.idSupervisor),1)])])]),g])),_:1}),(0,a.Wm)(at,{inset:""}),(0,a.Wm)(nt,null,{default:(0,a.w5)((()=>[(0,a.Wm)(lt,{separator:"cell",flat:"",bordered:""},{default:(0,a.w5)((()=>[w,(0,a._)("tbody",null,[(0,a._)("tr",null,[x,(0,a._)("td",S,[(0,a.Wm)(rt,{type:"date",modelValue:n.isSalida.fechaSalida,"onUpdate:modelValue":e[0]||(e[0]=t=>n.isSalida.fechaSalida=t),style:{width:"120px"},readonly:""},null,8,["modelValue"])]),(0,a._)("td",y,[(0,a.Wm)(rt,{type:"date",modelValue:n.isEntrada.fechaEntrada,"onUpdate:modelValue":e[1]||(e[1]=t=>n.isEntrada.fechaEntrada=t),style:{width:"120px"},readonly:""},null,8,["modelValue"])])]),(0,a._)("tr",null,[E,(0,a._)("td",H,(0,r.zw)(n.isSalida.horaSalida),1),(0,a._)("td",q,(0,r.zw)(n.isEntrada.horaEntrada),1)]),(0,a._)("tr",null,[W,(0,a._)("td",z,(0,r.zw)(n.isSalida.kmSalida),1),(0,a._)("td",A,(0,r.zw)(n.isEntrada.kmEntrada),1)]),(0,a._)("tr",null,[C,(0,a._)("td",O,(0,r.zw)(n.isSalida.GsSalida),1),(0,a._)("td",R,(0,r.zw)(n.isEntrada.GsEntrada),1)]),(0,a._)("tr",null,[T,(0,a._)("td",Z,(0,r.zw)(n.isSalida.aceiteMotorSalida),1),(0,a._)("td",k,(0,r.zw)(n.isEntrada.aceiteMotorEntrada),1)]),(0,a._)("tr",null,[U,(0,a._)("td",D,(0,r.zw)(n.isSalida.aceiteHidraSalida),1),(0,a._)("td",V,(0,r.zw)(n.isEntrada.aceiteHidraEntrada),1)])])])),_:1})])),_:1}),(0,a.Wm)(at,{inset:""})])),_:1}),(0,a.Wm)(it,null,{default:(0,a.w5)((()=>[(0,a.Wm)(lt,{separator:"cell",style:{padding:"2px"},flat:"",bordered:""},{default:(0,a.w5)((()=>[M,(0,a.Wm)(ot,{tittle:"Caucho"}),(0,a.Wm)(ot,{tittle:"Carroceria_General"}),(0,a.Wm)(ot,{tittle:"Faros_delantero"}),(0,a.Wm)(ot,{tittle:"parachoque"}),(0,a.Wm)(ot,{tittle:"Tapade_Combustible"}),(0,a.Wm)(ot,{tittle:"Espejos"}),(0,a.Wm)(ot,{tittle:"Luces_Transeras"}),(0,a.Wm)(ot,{tittle:"Extintor"}),(0,a.Wm)(ot,{tittle:"Triangulo"})])),_:1})])),_:1}),(0,a.Wm)(nt,null,{default:(0,a.w5)((()=>[(0,a._)("div",I,[N,(0,a.Wm)(nt,{class:"my-card",flat:"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(dt)])),_:1})])])),_:1}),(0,a.Wm)(lt,null,{default:(0,a.w5)((()=>[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",L,[(0,a._)("b",null,"CHOFER:"+(0,r.zw)(n.chofer.nombreApellido),1)]),P,(0,a._)("th",G,[(0,a._)("b",null,"Coord Verificador"+(0,r.zw)(n.verificador.nombreApellido),1)])])]),(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",j,[(0,a.Wm)(st,{url:n.urlServidor,img:n.firmaChofer},null,8,["url","img"])]),(0,a._)("td",F,[(0,a.Wm)(st,{url:n.urlServidor,img:n.operador.firma},null,8,["url","img"])]),(0,a._)("td",Q,[(0,a.Wm)(st,{url:n.urlServidor,img:n.firmaOperador},null,8,["url","img"])])])])])),_:1}),(0,a.Wm)(lt,null,{default:(0,a.w5)((()=>[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",B,[(0,a._)("b",null,"CHOFER:"+(0,r.zw)(n.chofer.nombreApellido),1)]),(0,a._)("th",$,[(0,a._)("b",null,"SEGURIDAD:"+(0,r.zw)(n.operadorSalida.lastname)+" :"+(0,r.zw)(n.operadorSalida.firstname),1)]),(0,a._)("th",Y,[(0,a._)("b",null,"Coord Verificador"+(0,r.zw)(n.verificadorSalida.nombreApellido),1)])])]),(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",J,[(0,a.Wm)(st,{url:n.urlServidor,img:n.firmaChofer},null,8,["url","img"])]),(0,a._)("td",K,[(0,a.Wm)(st,{url:n.urlServidor,img:n.operadorSalida.firma},null,8,["url","img"])]),(0,a._)("td",X,[(0,a.Wm)(st,{url:n.urlServidor,img:n.firmaVerificadorSalida},null,8,["url","img"])])])])])),_:1}),(0,a.Wm)(at,{inset:""}),(0,a.Wm)(ut,{vertical:"",align:"center"})])),_:1})])],64)}l(4719);var et=l(6957),lt=l(6237);const at={style:{padding:"0px"}},rt={style:{padding:"0px","text-align":"center"}},nt={style:{padding:"0px","text-align":"center"}},it={style:{padding:"0px","text-align":"center"}},ot={style:{padding:"0px","text-align":"center"}};function dt(t,e,l,n,i,o){const d=(0,a.up)("Entrada");return(0,a.wg)(),(0,a.iD)("tbody",null,[(0,a._)("tr",null,[(0,a._)("th",at,(0,r.zw)(l.tittle),1),(0,a._)("td",rt,[(0,a._)("strong",null,(0,r.zw)(n.model.B),1)]),(0,a._)("td",nt,[(0,a._)("strong",null,(0,r.zw)(n.model.M),1)]),(0,a._)("td",it,[(0,a._)("strong",null,(0,r.zw)(n.model.R),1)]),(0,a._)("td",ot,[(0,a._)("strong",null,(0,r.zw)(n.model.NA),1)]),(0,a.Wm)(d,{tittle:l.tittle},null,8,["tittle"])])])}var st=l(2201),ut=l(8686);const ct={style:{padding:"0px","text-align":"center"}},pt={style:{padding:"0px","text-align":"center"}},mt={style:{padding:"0px","text-align":"center"}},_t={style:{padding:"0px","text-align":"center"}};function ft(t,e,l,n,i,o){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("td",ct,[(0,a._)("strong",null,(0,r.zw)(n.model.B),1)]),(0,a._)("td",pt,[(0,a._)("strong",null,(0,r.zw)(n.model.M),1)]),(0,a._)("td",mt,[(0,a._)("strong",null,(0,r.zw)(n.model.R),1)]),(0,a._)("td",_t,(0,r.zw)(n.model.NA),1)],64)}var vt={components:{},props:["tittle"],setup(t){const e=(0,lt.iH)({}),l=(0,lt.iH)([t.tittle]),a=(0,lt.iH)(t.tittle),r=(0,st.yj)(),n=r.name,i=(0,et.oR)();return i.getters.isAction.data&&(e.value=i.getters.isGetter("isVariableCondicionEntrada")[a.value]),{model:e,required:ut.C1,tittleSalida:l,visibleEntrada:n}}},ht=l(7617);const bt=(0,ht.Z)(vt,[["render",ft]]);var gt=bt,wt={components:{Entrada:gt},props:["tittle"],setup(t){const e=(0,lt.iH)({}),l=(0,lt.iH)([t.tittle]),a=(0,lt.iH)(t.tittle),r=(0,st.yj)(),n=r.name,i=(0,et.oR)();return i.getters.isAction.data&&(e.value=i.getters.isGetter("isVariableCondicionSalida")[a.value]),{model:e,required:ut.C1,tittleSalida:l,visibleEntrada:n}}};const xt=(0,ht.Z)(wt,[["render",dt]]);var St=xt,yt=l(6668),Et=l(9103),Ht=l(2965),qt={components:{Salida:St,Observacion:yt.Z,Img:Et.Z},setup(){const t=(0,et.oR)(),e=(0,lt.iH)("Guardar"),l=(0,lt.iH)(!1),a=(0,lt.iH)([]),r=(0,lt.iH)([]),n=(0,lt.iH)([]),i=(0,lt.iH)([]),o=(0,lt.iH)([]),d=(0,lt.iH)([]),s=(0,st.tv)(),u=(0,lt.iH)([]),c=(0,lt.iH)([]),p=(0,lt.iH)([]),m=(0,lt.iH)([]),_=(0,lt.iH)([]),f=Ht.Z.defaults.baseURL,v=(0,lt.iH)(""),h=(0,lt.iH)(""),b={};if(t.getters.isAction.data){Object.assign(b,t.getters.isAction);let e={...t.getters.isAction.data},{pvr:l}=e;Object.entries(l).forEach((([e,l])=>{t.dispatch("varMutuacion",{val:e,valor:l})})),r.value=e,r.value.marca=l.marca,i.value=l.isUnidad,o.value=l.isChofer,d.value=l.isRuta,u.value=l.isUsuario,c.value=l.isUsuarioSalida,m.value=l.isVerificadorEntrada,_.value=l.isVerificadorSalida,a.value=l.isVariableSalida,n.value=l.isVariableEntrada,v.value=o.value.firma,h.value=m.value.firma,p.value=_.value.firma}else s.push("/entrada");return{label:e,buttonDisabled:l,isSalida:a,isEntrada:n,model:r,modelo:i,chofer:o,verificador:m,ruta:d,firmaChofer:v,firmaOperador:h,operador:u,urlServidor:f,verificadorSalida:_,operadorSalida:c,firmaVerificadorSalida:p}}},Wt=l(8055),zt=l(9501),At=l(4982),Ct=l(4492),Ot=l(6931),Rt=l(4333),Tt=l(1410),Zt=l.n(Tt);const kt=(0,ht.Z)(qt,[["render",tt],["__scopeId","data-v-78a22e6b"]]);var Ut=kt;Zt()(qt,"components",{QCard:Wt.Z,QCardSection:zt.Z,QMarkupTable:At.Z,QSeparator:Ct.Z,QInput:Ot.Z,QCardActions:Rt.Z})},6668:function(t,e,l){l.d(e,{Z:function(){return _}});var a=l(9269);const r={class:"q-pa-md q-gutter-sm"};function n(t,e,l,n,i,o){const d=(0,a.up)("q-editor");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(d,{modelValue:n.model,"onUpdate:modelValue":[e[0]||(e[0]=t=>n.model=t),e[1]||(e[1]=t=>n.save("isObservacion"))],definitions:{bold:{label:"Bold",icon:null,tip:"My bold tooltip"}}},null,8,["modelValue"])])}var i=l(6237),o=l(6957),d={setup(){const t=(0,o.oR)(),e=(0,i.iH)(!1),l=(0,i.iH)("");t.getters.isAction.data&&(l.value=t.getters.isGetter("isObservacion"),e.value=!0);const a=e=>{console.log(e),console.log(l.value);let a={val:e,valor:l.value};t.dispatch("varMutuacion",a)};return{model:l,save:a,disabled:e}}},s=l(7617),u=l(6291),c=l(1410),p=l.n(c);const m=(0,s.Z)(d,[["render",n]]);var _=m;p()(d,"components",{QEditor:u.Z})}}]);
//# sourceMappingURL=70.0fe289b8.js.map