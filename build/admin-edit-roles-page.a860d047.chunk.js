(self.webpackChunkfish_sale=self.webpackChunkfish_sale||[]).push([[2544],{4644:(K,L,o)=>{"use strict";o.d(L,{V:()=>R});var e=o(92417),C=o(88767);const R=(v={},O={})=>{const{id:P,...A}=v,{get:y}=(0,e.kY)();if(!P&&(O?.enabled===void 0||O?.enabled))throw new Error('"id" is a required argument');const{data:S,error:W,isError:a,isLoading:Z,refetch:m}=(0,C.useQuery)(["roles",P,"permissions",A],async()=>{const{data:{data:M}}=await y(`/admin/roles/${P}/permissions`,{params:A});return M},O);return{permissions:S,error:W,isError:a,isLoading:Z,refetch:m}}},51754:(K,L,o)=>{"use strict";o.d(L,{F:()=>O});var e=o(67294),C=o(92417),R=o(86896),v=o(88767);const O=(P={},A={})=>{const{id:y="",...S}=P,{get:W}=(0,C.kY)(),{locale:a}=(0,R.Z)(),Z=(0,C.Xe)(a,{sensitivity:"base"}),{data:m,error:M,isError:F,isLoading:g,refetch:b}=(0,v.useQuery)(["roles",y,S],async()=>{const{data:w}=await W(`/admin/roles/${y??""}`,{params:S});return w},A);return{roles:e.useMemo(()=>{let w=[];return y&&m?w=[m.data]:Array.isArray(m?.data)&&(w=m.data),[...w].sort((oe,ee)=>Z.compare(oe.name,ee.name))},[m,y,Z]),error:M,isError:F,isLoading:g,refetch:b}}},25545:(K,L,o)=>{"use strict";o.r(L),o.d(L,{CreatePage:()=>Re,default:()=>Se});var e=o(67294),C=o(40720),R=o(90731),v=o(96987),O=o(12473),P=o(34726),A=o(16607),y=o(10574),S=o(31988),W=o(6498),a=o(38670),Z=o(457),m=o(92417),M=o(97695),F=o(5728),g=o(41054),b=o(41609),G=o.n(b),w=o(86896),oe=o(86706),ee=o(16550),E=o(71997),pe=o(4644),Q=o(36364),H=o(442),te=o(90065),Ce=o(87561);const xe=Ce.Ry().shape({name:Ce.Z_().required(m.I0.required),description:Ce.Z_().required(m.I0.required)}),ie=E.ZP.div`
  border: 1px solid ${({theme:z})=>z.colors.primary200};
  background: ${({theme:z})=>z.colors.primary100};
  padding: ${({theme:z})=>`${z.spaces[2]} ${z.spaces[4]}`};
  color: ${({theme:z})=>z.colors.primary600};
  border-radius: ${({theme:z})=>z.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Re=()=>{const z=(0,ee.$B)("/settings/roles/duplicate/:id"),Y=(0,m.lm)(),{lockApp:re,unlockApp:X}=(0,m.o1)(),{formatMessage:j}=(0,w.Z)(),[J,le]=(0,e.useState)(!1),{replace:ge}=(0,ee.k6)(),q=(0,e.useRef)(),{trackUsage:ue}=(0,m.rS)(),{post:ke,put:Be}=(0,m.kY)(),{params:Ee}=z??{},{isLoading:Ze,data:Le}=(0,te.d)(Ee?.id,{cacheTime:0}),{permissions:he,isLoading:Me}=(0,pe.V)({id:Ee?.id},{cacheTime:0,enabled:!!Ee?.id}),Fe=Pe=>{re(),le(!0),Ee?.id?ue("willDuplicateRole"):ue("willCreateNewRole"),Promise.resolve(ke("/admin/roles",Pe)).then(async({data:ne})=>{const{permissionsToSend:ce}=q.current.getPermissions();return Ee?.id?ue("didDuplicateRole"):ue("didCreateNewRole"),ne.data.id&&!G()(ce)&&await Be(`/admin/roles/${ne.data.id}/permissions`,{permissions:ce}),ne}).then(ne=>{le(!1),Y({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),ge(`/settings/roles/${ne.data.id}`)}).catch(ne=>{console.error(ne),le(!1),Y({type:"warning",message:{id:"notification.error"}})}).finally(()=>{X()})},Ue=`${j({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,F.Z)(new Date,"PPP")}`;return e.createElement(C.o,null,e.createElement(m.SL,{name:"Roles"}),e.createElement(g.J9,{initialValues:{name:"",description:Ue},onSubmit:Fe,validationSchema:xe,validateOnChange:!1},({handleSubmit:Pe,values:ne,errors:ce,handleReset:de,handleChange:me})=>e.createElement(m.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(R.T,{primaryAction:e.createElement(v.k,{gap:2},e.createElement(O.z,{variant:"secondary",onClick:()=>{de(),q.current.resetForm()},size:"L"},j({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(O.z,{onClick:Pe,loading:J,size:"L"},j({id:"global.save",defaultMessage:"Save"}))),title:j({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:j({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(m.rU,{startIcon:e.createElement(M.Z,null),to:"/settings/roles"},j({id:"global.back",defaultMessage:"Back"}))}),e.createElement(P.D,null,e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(A.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(v.k,{justifyContent:"space-between"},e.createElement(A.x,null,e.createElement(A.x,null,e.createElement(y.Z,{fontWeight:"bold"},j({id:"global.details",defaultMessage:"Details"}))),e.createElement(A.x,null,e.createElement(y.Z,{variant:"pi",textColor:"neutral600"},j({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(ie,null,j({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(S.r,{gap:4},e.createElement(W.P,{col:6},e.createElement(a.o,{name:"name",error:ce.name&&j({id:ce.name}),label:j({id:"global.name",defaultMessage:"Name"}),onChange:me,required:!0,value:ne.name})),e.createElement(W.P,{col:6},e.createElement(Z.g,{label:j({id:"global.description",defaultMessage:"Description"}),id:"description",error:ce.description&&j({id:ce.description}),onChange:me},ne.description))))),!Ze&&!Me?e.createElement(A.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(H.Z,{isFormDisabled:!1,ref:q,permissions:he,layout:Le})):e.createElement(A.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(m.dO,null))))))))};function Se(){const z=(0,oe.v9)(Q._);return e.createElement(m.O4,{permissions:z.settings.roles.create},e.createElement(Re,null))}},442:(K,L,o)=>{"use strict";o.d(L,{Z:()=>ts});var e=o(67294),C=o(98948),R=o(91788),v=o(94955),O=o(92417),P=o(18721),A=o.n(P),y=o(41609),S=o.n(y),W=o(45697),a=o.n(W),Z=o(86896),m=o(16607),M=o(89734),F=o.n(M),g=o(71997),b=o(96987),G=o(12803),w=o(73924),oe=o(14981),ee=o(27361),E=o.n(ee),pe=o(57557),Q=o.n(pe),H=o(20838),te=o(12473),Ce=o(40989);const be=g.ZP.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,xe=({onClick:t,className:n,hasConditions:r,variant:s})=>{const{formatMessage:i}=(0,Z.Z)();return e.createElement(be,{hasConditions:r,className:n},e.createElement(te.z,{variant:s,startIcon:e.createElement(Ce.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};xe.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},xe.propTypes={onClick:a().func.isRequired,className:a().string,hasConditions:a().bool,variant:a().string};const ie=(0,g.ZP)(xe)``;var Re=o(74622),Se=o(36854),z=o(71543),Y=o(10574),re=o(37022),X=o(82392),j=o(75071),J=o(18172),le=o(7739),ge=o.n(le),q=o(11700),ue=o.n(q),ke=o(13814);const Be=t=>Object.values(t).map(n=>Object.entries(n).filter(([,r])=>r).map(([r])=>r)).flat(),Ee=t=>t.reduce((n,[r,s])=>(n.push({label:ue()(r),children:s.map(i=>({label:i.displayName,value:i.id}))}),n),[]),Ze=(t,n)=>t.map(([,r])=>r).flat().reduce((r,s)=>({[s.id]:n.includes(s.id),...r}),{}),Le=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:r,label:s,name:i,onChange:l,value:c})=>{const{formatMessage:d}=(0,Z.Z)(),p=u=>{l(i,Ze(t,u))};return e.createElement(b.k,{as:"li",background:r?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(b.k,{paddingLeft:6,style:{width:180}},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(Y.Z,{variant:"sigma",title:s,textColor:"primary600",ellipsis:!0},d({id:`Settings.roles.form.permissions.${s.toLowerCase()}`,defaultMessage:s})),e.createElement(Y.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(m.x,{style:{maxWidth:430,width:"100%"}},e.createElement(ke.Q,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:p,value:Be(c),options:Ee(t),disabled:n})))};Le.propTypes={arrayOfOptionsGroupedByCategory:a().array.isRequired,isFormDisabled:a().bool.isRequired,isGrey:a().bool.isRequired,label:a().string.isRequired,name:a().string.isRequired,value:a().object.isRequired,onChange:a().func.isRequired};const he=Le,Me=(t,n)=>t.reduce((r,s)=>(r[s.id]=E()(n,s.id,!1),r),{}),Fe=(t,n)=>t.reduce((r,s)=>{const[i,l]=s,c=Me(l,n);return r[i]=c,r},{}),Pe=(t,n,r)=>t.reduce((s,i)=>{const l=E()(n,[...i.pathToConditionsObject,"conditions"],{}),c=Fe(r,l);return s[i.pathToConditionsObject.join("..")]=c,s},{}),ne=({actions:t,headerBreadCrumbs:n,isFormDisabled:r,onClosed:s,onToggle:i})=>{const{formatMessage:l}=(0,Z.Z)(),{availableConditions:c,modifiedData:d,onChangeConditions:p}=(0,H.$_)(),u=(0,e.useMemo)(()=>Object.entries(ge()(c,"category")),[c]),f=t.filter(({isDisplayed:h,hasSomeActionsSelected:k,hasAllActionsSelected:D})=>h&&(k||D)),x=(0,e.useMemo)(()=>Pe(f,d,u),[f,d,u]),[$,N]=(0,e.useState)(x),I=(h,k)=>{N((0,J.ZP)(D=>{D[h]||(D[h]={}),D[h].default||(D[h].default={}),D[h].default=k}))},T=()=>{const h=Object.entries($).reduce((k,D)=>{const[B,se]=D,U=Object.values(se).reduce((_,V)=>({..._,...V}),{});return k[B]=U,k},{});p(h),i()};return e.createElement(Re.P,{labelledBy:"condition-modal-breadcrumbs",onClose:s},e.createElement(Se.x,null,e.createElement(X.O,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map((h,k,D)=>e.createElement(j.$,{isCurrent:k===D.length-1,key:h},ue()(l({id:h,defaultMessage:h})))))),e.createElement(z.f,null,f.length===0&&e.createElement(Y.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,f.map(({actionId:h,label:k,pathToConditionsObject:D},B)=>{const se=D.join("..");return e.createElement(he,{key:h,arrayOfOptionsGroupedByCategory:u,label:k,isFormDisabled:r,isGrey:B%2===0,name:se,onChange:I,value:E()($,se,{})})}))),e.createElement(re.m,{startActions:e.createElement(te.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(te.z,{onClick:T},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};ne.propTypes={actions:a().arrayOf(a().shape({actionId:a().string.isRequired,checkboxName:a().string,hasSomeActionsSelected:a().bool.isRequired,hasAllActionsSelected:a().bool,isDisplayed:a().bool.isRequired,label:a().string})).isRequired,headerBreadCrumbs:a().arrayOf(a().string).isRequired,isFormDisabled:a().bool.isRequired,onClosed:a().func.isRequired,onToggle:a().func.isRequired};const ce=ne,de=`${120/16}rem`,me=`${200/16}rem`,Ae=`${53/16}rem`,Ne=g.ZP.div`
  width: ${de};
`,rt=(0,g.ZP)(b.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ge=({children:t,isCollapsable:n,isActive:r,isFormDisabled:s,label:i,onChange:l,onClick:c,checkboxName:d,someChecked:p,value:u})=>{const{formatMessage:f}=(0,Z.Z)();return e.createElement(b.k,{alignItems:"center",paddingLeft:6,style:{width:me,flexShrink:0}},e.createElement(m.x,{paddingRight:2},e.createElement(G.C,{name:d,"aria-label":f({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:s,onValueChange:x=>l({target:{name:d,value:x}}),indeterminate:p,value:u})),e.createElement(rt,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:c,"aria-expanded":r,onKeyDown:({key:x})=>(x==="Enter"||x===" ")&&c(),tabIndex:0,role:"button"}},e.createElement(Y.Z,{fontWeight:r?"bold":"",textColor:r?"primary600":"neutral800",ellipsis:!0},ue()(i)),t))};Ge.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ge.propTypes={checkboxName:a().string,children:a().node,label:a().string.isRequired,isCollapsable:a().bool,isFormDisabled:a().bool.isRequired,onChange:a().func,onClick:a().func.isRequired,someChecked:a().bool,value:a().bool,isActive:a().bool.isRequired};const at=(0,e.memo)(Ge);var Nt=o(42348),Wt=o.n(Nt),Vt=o(13218),Te=o.n(Vt);const it=t=>Te()(t)?Wt()(Object.values(t).map(n=>Te()(n)?it(n):n)):[],je=it,ze=t=>t?Object.keys(t).reduce((n,r)=>(r!=="conditions"&&(n[r]=t[r]),n),{}):null,Oe=t=>{const n=ze(t),r=je(n);if(!r.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const s=r.every(l=>l),i=r.some(l=>l)&&!s;return{hasAllActionsSelected:s,hasSomeActionsSelected:i}};var Kt=o(58471);const We=(0,g.ZP)(Kt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ve=t=>`
  ${Y.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${We} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ut=(t,n,r)=>t.map(({actionId:s,isDisplayed:i,applyToProperties:l,label:c})=>{if(!i)return{actionId:s,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...r.split(".."),s],p=S()(l)?[...d,"properties","enabled"]:d,u=p.join(".."),f=E()(n,[...d,"conditions"],null),x=je(f).some(T=>T);if(S()(l)){const T=E()(n,p,!1);return{actionId:s,checkboxName:u,hasAllActionsSelected:T,hasConditions:x,hasSomeActionsSelected:T,isDisplayed:i,isParentCheckbox:!1,label:c,pathToConditionsObject:d}}const $=E()(n,p,null),{hasAllActionsSelected:N,hasSomeActionsSelected:I}=Oe($);return{actionId:s,checkboxName:u,hasAllActionsSelected:N,hasConditions:x,hasSomeActionsSelected:I,isDisplayed:i,isParentCheckbox:!0,label:c,pathToConditionsObject:d}}),Ye=(t,n)=>`
  ${lt} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${dt} {
    display: flex;
  }
  ${ie} {
    display: block;
  }
  &:hover {
   ${Ve(t)}
  }

  &:focus-within {
    ${({theme:r,isActive:s})=>Ye(r,s)}
  }
  
`,lt=g.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Ae};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Ht=g.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${ie} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&Ye(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>Ye(t,n)}
  }
`,ct=(0,g.ZP)(b.k)`
  width: ${de};
  position: relative;
`,dt=(0,g.ZP)(m.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ut=g.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Gt=(0,g.ZP)(m.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,mt=({availableActions:t,isActive:n,isGrey:r,isFormDisabled:s,label:i,onClickToggle:l,pathToData:c})=>{const[d,p]=(0,e.useState)(!1),{formatMessage:u}=(0,Z.Z)(),{modifiedData:f,onChangeParentCheckbox:x,onChangeSimpleCheckbox:$}=(0,H.$_)(),N=()=>{p(U=>!U)},I=()=>{p(!1)},T=E()(f,c.split(".."),{}),h=(0,e.useMemo)(()=>Object.keys(T).reduce((U,_)=>(U[_]=Q()(T[_],"conditions"),U),{}),[T]),{hasAllActionsSelected:k,hasSomeActionsSelected:D}=Oe(h),B=(0,e.useMemo)(()=>Ut(t,f,c),[t,f,c]),se=B.some(({hasConditions:U})=>U);return e.createElement(Ht,{isActive:n},e.createElement(lt,{isGrey:r},e.createElement(at,{isCollapsable:!0,isFormDisabled:s,label:i,checkboxName:c,onChange:x,onClick:l,someChecked:D,value:k,isActive:n},e.createElement(dt,{paddingLeft:2},n?e.createElement(w.Z,null):e.createElement(oe.Z,null))),e.createElement(b.k,{style:{flex:1}},B.map(({actionId:U,hasConditions:_,hasAllActionsSelected:V,hasSomeActionsSelected:ye,isDisplayed:Ie,isParentCheckbox:ae,checkboxName:ve,label:Ke})=>Ie?ae?e.createElement(ct,{key:U,justifyContent:"center",alignItems:"center"},_&&e.createElement(ut,null),e.createElement(G.C,{disabled:s,name:ve,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${Ke} ${i}`}),onValueChange:$e=>{x({target:{name:ve,value:$e}})},indeterminate:ye,value:V})):e.createElement(ct,{key:U,justifyContent:"center",alignItems:"center"},_&&e.createElement(ut,null),e.createElement(G.C,{disabled:s,indeterminate:_,name:ve,onValueChange:$e=>{$({target:{name:ve,value:$e}})},value:V})):e.createElement(Ne,{key:U}))),d&&e.createElement(ce,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:B,isFormDisabled:s,onClosed:I,onToggle:N})),e.createElement(Gt,null,e.createElement(ie,{onClick:N,hasConditions:se})))};mt.propTypes={availableActions:a().array.isRequired,isActive:a().bool.isRequired,isGrey:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggle:a().func.isRequired,pathToData:a().string.isRequired};const zt=mt,Yt=g.ZP.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,pt=()=>e.createElement(Yt,null,"*"),Xt=(t,n)=>t.map(r=>{const s=Array.isArray(r.subjects)&&r.subjects.indexOf(n)!==-1;return{...r,isDisplayed:s}}),wt=(0,g.ZP)(m.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Qt=g.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Xe=t=>e.createElement(wt,null,e.createElement(Qt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Xe.defaultProps={fill:"primary200"},Xe.propTypes={fill:a().string};const Jt=(0,e.memo)(Xe),gt=(0,g.ZP)(b.k)`
  width: ${de};
  position: relative;
`,qt=(0,g.ZP)(b.k)`
  height: ${Ae};
`,_t=(0,g.ZP)(m.x)`
  padding-left: ${31/16}rem;
`,en=(0,g.ZP)(m.x)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,tn=(0,g.ZP)(b.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${We} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ve(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ve(n)};
`,nn=g.ZP.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,we=({childrenForm:t,isFormDisabled:n,recursiveLevel:r,pathToDataFromActionRow:s,propertyActions:i,parentName:l,propertyName:c})=>{const{formatMessage:d}=(0,Z.Z)(),{modifiedData:p,onChangeParentCheckbox:u,onChangeSimpleCheckbox:f}=(0,H.$_)(),[x,$]=(0,e.useState)(null),N=T=>{$(h=>h===T?null:T)},I=(0,e.useMemo)(()=>x?t.find(({value:T})=>T===x):null,[x,t]);return e.createElement(_t,null,e.createElement(nn,null),t.map(({label:T,value:h,required:k,children:D},B)=>{const se=B+1<t.length,U=Array.isArray(D),_=x===h;return e.createElement(en,{key:h,isVisible:se},e.createElement(qt,null,e.createElement(Jt,{color:"primary200"}),e.createElement(b.k,{style:{flex:1}},e.createElement(tn,{level:r,isActive:_,isCollapsable:U},e.createElement(rt,{alignItems:"center",isCollapsable:U,...U&&{onClick:()=>N(h),"aria-expanded":_,onKeyDown:({key:V})=>(V==="Enter"||V===" ")&&N(h),tabIndex:0,role:"button"},title:T},e.createElement(Y.Z,{ellipsis:!0},ue()(T)),k&&e.createElement(pt,null),e.createElement(We,{$isActive:_}))),e.createElement(b.k,{style:{flex:1}},i.map(({actionId:V,label:ye,isActionRelatedToCurrentProperty:Ie})=>{if(!Ie)return e.createElement(Ne,{key:V});const ae=[...s.split(".."),V,"properties",c,...l.split(".."),h],ve=E()(p,ae,!1);if(!D)return e.createElement(gt,{key:ye,justifyContent:"center",alignItems:"center"},e.createElement(G.C,{disabled:n,name:ae.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${T} ${ye}`}),onValueChange:De=>{f({target:{name:ae.join(".."),value:De}})},value:ve}));const{hasAllActionsSelected:Ke,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(gt,{key:ye,justifyContent:"center",alignItems:"center"},e.createElement(G.C,{key:ye,disabled:n,name:ae.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${T} ${ye}`}),onValueChange:De=>{u({target:{name:ae.join(".."),value:De}})},value:Ke,indeterminate:$e}))})))),I&&_&&e.createElement(m.x,{paddingBottom:2},e.createElement(we,{isFormDisabled:n,parentName:`${l}..${h}`,pathToDataFromActionRow:s,propertyActions:i,propertyName:c,recursiveLevel:r+1,childrenForm:I.children})))}))};we.propTypes={childrenForm:a().array.isRequired,isFormDisabled:a().bool.isRequired,parentName:a().string.isRequired,pathToDataFromActionRow:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,recursiveLevel:a().number.isRequired};const sn=(0,e.memo)(we),on=t=>t.reduce((r,s)=>(s.isActionRelatedToCurrentProperty&&r.push(s.actionId),r),[]),rn=(t,n,r,s,i)=>{const c=on(t).reduce((d,p)=>{const u=[...r.split(".."),p,"properties",s,i],f=E()(n,u,!1);return d[p]=f,d},{});return Oe(c)},ft=(0,g.ZP)(b.k)`
  width: ${de};
  position: relative;
`,an=(0,g.ZP)(b.k)`
  height: ${Ae};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${We} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ve(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ve(n)};
`,Qe=({childrenForm:t,label:n,isFormDisabled:r,name:s,required:i,pathToData:l,propertyActions:c,propertyName:d,isOdd:p})=>{const{formatMessage:u}=(0,Z.Z)(),[f,x]=(0,e.useState)(null),{modifiedData:$,onChangeCollectionTypeLeftActionRowCheckbox:N,onChangeParentCheckbox:I,onChangeSimpleCheckbox:T}=(0,H.$_)(),h=f===s,k=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),D=k.length>0,B=(0,e.useCallback)(()=>{D&&x(V=>V===s?null:s)},[D,s]),se=({target:{value:V}})=>{N(l,d,s,V)},{hasAllActionsSelected:U,hasSomeActionsSelected:_}=(0,e.useMemo)(()=>rn(c,$,l,d,s),[c,$,l,d,s]);return e.createElement(e.Fragment,null,e.createElement(an,{alignItems:"center",isCollapsable:D,isActive:h,background:p?"neutral100":"neutral0"},e.createElement(b.k,null,e.createElement(at,{onChange:se,onClick:B,isCollapsable:D,isFormDisabled:r,label:n,someChecked:_,value:U,isActive:h},i&&e.createElement(pt,null),e.createElement(We,{$isActive:h})),e.createElement(b.k,null,c.map(({label:V,isActionRelatedToCurrentProperty:ye,actionId:Ie})=>{if(!ye)return e.createElement(Ne,{key:V});const ae=[...l.split(".."),Ie,"properties",d,s];if(!D){const De=E()($,ae,!1);return e.createElement(ft,{key:Ie,justifyContent:"center",alignItems:"center"},e.createElement(G.C,{disabled:r,name:ae.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${V}`}),onValueChange:ns=>{T({target:{name:ae.join(".."),value:ns}})},value:De}))}const ve=E()($,ae,{}),{hasAllActionsSelected:Ke,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(ft,{key:V,justifyContent:"center",alignItems:"center"},e.createElement(G.C,{disabled:r,name:ae.join(".."),onValueChange:De=>{I({target:{name:ae.join(".."),value:De}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${V}`}),value:Ke,indeterminate:$e}))})))),h&&e.createElement(sn,{childrenForm:k,isFormDisabled:r,parentName:s,pathToDataFromActionRow:l,propertyName:d,propertyActions:c,recursiveLevel:0}))};Qe.defaultProps={childrenForm:[],required:!1},Qe.propTypes={childrenForm:a().array,label:a().string.isRequired,isFormDisabled:a().bool.isRequired,name:a().string.isRequired,pathToData:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,required:a().bool,isOdd:a().bool.isRequired};const ln=(0,e.memo)(Qe),yt=(0,g.ZP)(b.k)`
  width: ${de};
  flex-shrink: 0;
`,cn=(0,g.ZP)(b.k)`
  width: ${me};
  height: ${Ae};
  flex-shrink: 0;
`,ht=({headers:t,label:n})=>{const{formatMessage:r}=(0,Z.Z)(),s=r({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(b.k,null,e.createElement(cn,{alignItems:"center",paddingLeft:6},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral500"},s)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(yt,{justifyContent:"center",key:i.label},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral500"},r({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(yt,{key:i.label})))};ht.propTypes={headers:a().arrayOf(a().shape({label:a().string.isRequired,isActionRelatedToCurrentProperty:a().bool.isRequired})).isRequired,label:a().string.isRequired};const dn=ht,un=(t,n)=>t.map(r=>{const s=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(n)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:s}}),mn=g.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,Ct=({availableActions:t,childrenForm:n,isFormDisabled:r,label:s,pathToData:i,propertyName:l})=>{const c=(0,e.useMemo)(()=>un(t,l),[t,l]);return e.createElement(mn,null,e.createElement(dn,{label:s,headers:c}),e.createElement(m.x,null,n.map(({children:d,label:p,value:u,required:f},x)=>e.createElement(ln,{childrenForm:d,key:u,label:p,isFormDisabled:r,name:u,required:f,propertyActions:c,pathToData:i,propertyName:l,isOdd:x%2===0}))))};Ct.propTypes={childrenForm:a().array.isRequired,availableActions:a().array.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,pathToData:a().string.isRequired,propertyName:a().string.isRequired};const pn=Ct,gn=g.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,Et=({allActions:t,contentTypeName:n,label:r,index:s,isActive:i,isFormDisabled:l,onClickToggleCollapse:c,pathToData:d,properties:p})=>{const u=(0,e.useCallback)(()=>{c(n)},[n,c]),f=(0,e.useMemo)(()=>Xt(t,n),[t,n]);return e.createElement(gn,{isActive:i},e.createElement(zt,{availableActions:f,isActive:i,isGrey:s%2===0,isFormDisabled:l,label:r,onClickToggle:u,pathToData:d}),i&&p.map(({label:x,value:$,children:N})=>e.createElement(pn,{availableActions:f,childrenForm:N,isFormDisabled:l,label:x,pathToData:d,propertyName:$,key:$})))};Et.propTypes={allActions:a().array.isRequired,contentTypeName:a().string.isRequired,index:a().number.isRequired,isActive:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggleCollapse:a().func.isRequired,pathToData:a().string.isRequired,properties:a().array.isRequired};const fn=Et,Je=({actions:t,isFormDisabled:n,pathToData:r,subjects:s})=>{const[i,l]=(0,e.useState)(null),c=d=>{l(i===d?null:d)};return s.map(({uid:d,label:p,properties:u},f)=>e.createElement(fn,{allActions:t,key:d,contentTypeName:d,label:p,isActive:i===d,isFormDisabled:n,index:f,onClickToggleCollapse:c,pathToData:`${r}..${d}`,properties:u}))};Je.defaultProps={actions:[],subjects:[]},Je.propTypes={actions:a().array.isRequired,isFormDisabled:a().bool.isRequired,pathToData:a().string.isRequired,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))};const yn=(0,e.memo)(Je),hn=t=>t.filter(({subjects:n})=>n&&n.length),Cn=t=>t.map(({actionId:n})=>n),En=(t,n)=>t.reduce((r,s)=>(Object.keys(n).forEach(i=>{const l=E()(n,[i,s],{}),c={[i]:ze(l)};r[s]?r[s]={...r[s],...c}:r[s]=c}),r),{}),vn=(t,n)=>{const r=Cn(t),s=En(r,n);return Object.keys(s).reduce((l,c)=>(l[c]=Oe(s[c]),l),{})},bn=(0,g.ZP)(b.k)`
  width: ${de};
  flex-shrink: 0;
`,qe=({actions:t,isFormDisabled:n,kind:r})=>{const{formatMessage:s}=(0,Z.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,H.$_)(),c=(0,e.useMemo)(()=>hn(t),[t]),d=(0,e.useMemo)(()=>vn(c,i[r]),[i,c,r]);return e.createElement(m.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:me}},e.createElement(b.k,{gap:0},c.map(({label:p,actionId:u})=>e.createElement(bn,{direction:"column",alignItems:"center",justifyContent:"center",key:u,gap:3},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral500"},s({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})),e.createElement(G.C,{disabled:n,onValueChange:f=>{l(r,u,f)},name:u,"aria-label":s({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:s({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:E()(d,[u,"hasAllActionsSelected"],!1),indeterminate:E()(d,[u,"hasSomeActionsSelected"],!1)})))))};qe.defaultProps={actions:[]},qe.propTypes={actions:a().arrayOf(a().shape({label:a().string.isRequired,actionId:a().string.isRequired,subjects:a().array.isRequired})),isFormDisabled:a().bool.isRequired,kind:a().string.isRequired};const xn=(0,e.memo)(qe),Rn=(0,g.ZP)(m.x)`
  overflow-x: auto;
`,vt=({isFormDisabled:t,kind:n,layout:{actions:r,subjects:s}})=>{const i=F()([...s],"label");return e.createElement(Rn,{background:"neutral0"},e.createElement(xn,{actions:r,kind:n,isFormDisabled:t}),e.createElement(yn,{actions:r,isFormDisabled:t,pathToData:n,subjects:i}))};vt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().shape({actions:a().array,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))}).isRequired};const bt=(0,e.memo)(vt);var Pn=o(74481);const xt=({children:t,value:n})=>e.createElement(Pn.$l.Provider,{value:n},t);xt.propTypes={children:a().node.isRequired,value:a().exact({availableConditions:a().array.isRequired,modifiedData:a().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:a().func.isRequired,onChangeConditions:a().func.isRequired,onChangeSimpleCheckbox:a().func.isRequired,onChangeParentCheckbox:a().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:a().func.isRequired}).isRequired};const An=xt;var Tn=o(63122),Sn=o(1744),Mn=o(68889),Rt=o(22546),On=o(31988),$n=o(6498);const Dn=(t,n,r)=>t.map(s=>{const i=[...r,s.action,"properties","enabled"],l=E()(n,i,!1),c=E()(n,[...r,s.action,"conditions"],{}),d=je(c).some(p=>p);return{...s,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:d,label:s.displayName,actionId:s.action,pathToConditionsObject:[...r,s.action]}}),Ln=t=>{const n=Object.entries(t).reduce((s,i)=>{const[l,{conditions:c}]=i;return s[l]=c,s},{});return je(n).some(s=>s)},jn=g.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,In=g.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Pt=({categoryName:t,isFormDisabled:n,subCategoryName:r,actions:s,pathToData:i})=>{const[l,c]=(0,e.useState)(!1),{modifiedData:d,onChangeParentCheckbox:p,onChangeSimpleCheckbox:u}=(0,H.$_)(),{formatMessage:f}=(0,Z.Z)(),x=E()(d,i,{}),$=(0,e.useMemo)(()=>Object.keys(x).reduce((B,se)=>(B[se]=ze(x[se]),B),{}),[x]),{hasAllActionsSelected:N,hasSomeActionsSelected:I}=Oe($),T=()=>{c(B=>!B)},h=()=>{c(!1)},k=Dn(s,d,i),D=Ln(E()(d,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(m.x,null,e.createElement(b.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(m.x,{paddingRight:4},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral600"},r)),e.createElement(jn,null),e.createElement(m.x,{paddingLeft:4},e.createElement(Rt.X,{name:i.join(".."),disabled:n,onValueChange:B=>{p({target:{name:i.join(".."),value:B}})},indeterminate:I,value:N},f({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(b.k,{paddingTop:6,paddingBottom:6},e.createElement(On.r,{gap:2,style:{flex:1}},k.map(({checkboxName:B,value:se,action:U,displayName:_,hasConditions:V})=>e.createElement($n.P,{col:3,key:U},e.createElement(In,{disabled:n,hasConditions:V},e.createElement(Rt.X,{name:B,disabled:n,onValueChange:ye=>{u({target:{name:B,value:ye}})},value:se},_))))),e.createElement(ie,{hasConditions:D,onClick:T}))),l&&e.createElement(ce,{headerBreadCrumbs:[t,r],actions:k,isFormDisabled:n,onClosed:h,onToggle:T}))};Pt.propTypes={actions:a().array.isRequired,categoryName:a().string.isRequired,isFormDisabled:a().bool.isRequired,subCategoryName:a().string.isRequired,pathToData:a().array.isRequired};const kn=Pt,_e=({childrenForm:t,kind:n,name:r,isOpen:s,isFormDisabled:i,isWhite:l,onOpenCategory:c,pathToData:d})=>{const{formatMessage:p}=(0,Z.Z)(),u=()=>{c(r)},f=(0,e.useMemo)(()=>r.split("::").pop(),[r]);return e.createElement(Tn.U,{expanded:s,onToggle:u,id:`accordion-${r}`,variant:l?"primary":"secondary"},e.createElement(Sn.B,{title:ue()(f),description:`${p({id:"Settings.permissions.category"},{category:f})} ${n==="plugins"?"plugin":n}`}),e.createElement(Mn.v,null,e.createElement(m.x,{padding:6},t.map(({actions:x,subCategoryName:$,subCategoryId:N})=>e.createElement(kn,{key:$,actions:x,categoryName:f,isFormDisabled:i,subCategoryName:$,pathToData:[...d,N]})))))};_e.defaultProps={},_e.propTypes={childrenForm:a().array.isRequired,isOpen:a().bool.isRequired,isFormDisabled:a().bool.isRequired,isWhite:a().bool.isRequired,kind:a().string.isRequired,name:a().string.isRequired,onOpenCategory:a().func.isRequired,pathToData:a().array.isRequired};const Bn=_e,At=({isFormDisabled:t,kind:n,layout:r})=>{const[s,i]=(0,e.useState)(null),l=c=>{i(c===s?null:c)};return e.createElement(m.x,{padding:6,background:"neutral0"},r.map(({category:c,categoryId:d,childrenForm:p},u)=>e.createElement(Bn,{key:c,childrenForm:p,kind:n,isFormDisabled:t,isOpen:s===c,isWhite:u%2===1,name:c,onOpenCategory:l,pathToData:[n,d]})))};At.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().arrayOf(a().shape({category:a().string.isRequired,categoryId:a().string.isRequired,childrenForm:a().arrayOf(a().shape({actions:a().array.isRequired})).isRequired}).isRequired).isRequired};const Tt=At;var Zn=o(82492),Fn=o.n(Zn),Nn=o(36968),fe=o.n(Nn);const St=(t,n,r)=>t.find(s=>s.action===n&&s.subject===r),Mt=(t,n=[])=>t.reduce((r,s)=>(r[s.id]=n.indexOf(s.id)!==-1,r),{}),Ot=({children:t},n,r="")=>t.reduce((s,i)=>{if(i.children)return{...s,[i.value]:Ot(i,n,`${r}${i.value}.`)};const l=n.indexOf(`${r}${i.value}`)!==-1;return s[i.value]=l,s},{}),Wn=(t,n,r)=>t.reduce((s,i)=>{const l=n.properties.find(({value:c})=>c===i);if(l){const c=E()(r,["properties",l.value],[]),d=Ot(l,c);s.properties[i]=d}return s},{properties:{}}),Vn=(t,n)=>n.reduce((r,s)=>{const i=t.find(({uid:l})=>l===s)||null;return i&&(r[s]=i),r},{}),$t=({subjects:t},n,r,s=[])=>n.reduce((i,l)=>{const c=l.subjects,d=Vn(t,c);if(S()(d))return i;const p=Object.keys(d).reduce((u,f)=>{const{actionId:x,applyToProperties:$}=l,T=d[f].properties.map(({value:B})=>B).every(B=>($||[]).indexOf(B)===-1),h=St(s,x,f),k=Mt(r,E()(h,"conditions",[]));if(S()($)||T)return fe()(u,[f,x],{properties:{enabled:h!==void 0},conditions:k}),u;const D=Wn($,d[f],h);return fe()(u,[f,x],{...D,conditions:k}),u},{});return Fn()(i,p)},{}),Kn=(t,n,r)=>t.reduce((s,i)=>{const l=St(r,i.action,null);return s[i.action]={properties:{enabled:l!==void 0},conditions:Mt(n,l?.conditions??[])},s},{}),Un=(t,n,r)=>t.reduce((s,i)=>(s[i.subCategoryId]=Kn(i.actions,n,r),s),{}),Dt=(t,n,r=[])=>t.reduce((s,{categoryId:i,childrenForm:l})=>{const c=Un(l,n,r);return s[i]=c,s},{}),Lt=t=>t.split(" ").join("-"),jt=(t,n)=>Object.entries(ge()(t,n)).map(([r,s])=>({category:r,categoryId:Lt(r),childrenForm:Object.entries(ge()(s,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:Lt(i),actions:l}))})),Hn=(t,n)=>{const{conditions:r,sections:{collectionTypes:s,singleTypes:i,plugins:l,settings:c}}=t,d={collectionTypes:s,singleTypes:i,plugins:jt(l,"plugin"),settings:jt(c,"category")},p={collectionTypes:$t(s,s.actions||[],r,n),singleTypes:$t(i,i.actions||[],r,n),plugins:Dt(d.plugins,r,n),settings:Dt(d.settings,r,n)};return{initialData:p,modifiedData:p,layouts:d}};var Gn=o(50361),et=o.n(Gn);const It=t=>Object.keys(t).reduce((n,r)=>{const s=t[r];if(Te()(s)&&!A()(s,"conditions"))return{...n,[r]:It(s)};if(Te()(s)&&A()(s,"conditions")&&!je(Q()(s,"conditions")).some(l=>l)){const l=Object.keys(s.conditions).reduce((c,d)=>(c[d]=!1,c),{});return{...n,[r]:{...s,conditions:l}}}return n[r]=s,n},{}),tt=It,kt=(t,n,r=!1)=>Object.keys(t).reduce((s,i)=>{const l=t[i];return i==="conditions"&&!r?(s[i]=l,s):Te()(l)?{...s,[i]:kt(l,n,i==="fields")}:(s[i]=n,s)},{}),He=kt,zn={initialData:{},modifiedData:{},layouts:{}},Yn=(t,n)=>(0,J.ZP)(t,r=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:s,actionId:i,value:l}=n,c=["modifiedData",s];Object.keys(E()(t,c)).forEach(d=>{const p=E()(t,[...c,d,i],void 0);if(p){let u=He(p,l);if(!l&&u.conditions){const f=He(u.conditions,!1);u={...u,conditions:f}}fe()(r,[...c,d,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:s,propertyName:i,rowName:l,value:c}=n;let d=et()(t.modifiedData);const p=s.split(".."),u=E()(d,p,{});Object.keys(u).forEach(f=>{if(A()(u[f],`properties.${i}`)){const x=E()(u,[f,"properties",i,l]),$=[...p,f,"properties",i,l];if(!Te()(x))fe()(d,$,c);else{const N=He(x,c);fe()(d,$,N)}}}),c||(d=tt(d)),fe()(r,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(s=>{const[i,l]=s;fe()(r,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let s=et()(t.modifiedData);fe()(s,[...n.keys.split("..")],n.value),n.value||(s=tt(s)),fe()(r,"modifiedData",s);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:s,value:i}=n,l=[...s.split("..")];let c=et()(t.modifiedData);const d=E()(c,l,{}),p=He(d,i);fe()(c,l,p),i||(c=tt(c)),fe()(r,["modifiedData"],c);break}case"RESET_FORM":{r.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{r.initialData=t.modifiedData;break}default:return r}}),nt=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),Xn=t=>{const[n,{conditions:r}]=t;return{action:n,subject:null,conditions:nt(r),properties:{}}},wn=t=>Object.values(t).reduce((n,r)=>{const s=Object.entries(r).reduce((i,l)=>{const[,{properties:{enabled:c}}]=l;if(!c)return i;const d=Xn(l);return i.push(d),i},[]);return[...n,...s]},[]),Bt=t=>Object.values(t).reduce((n,r)=>{const s=wn(r);return[...n,...s]},[]),Zt=(t,n="")=>Object.entries(t).reduce((r,s)=>{const[i,l]=s;return Te()(l)?[...r,...Zt(l,`${n}${i}.`)]:(l&&!Te()(l)&&r.push(`${n}${i}`),r)},[]),Qn=(t,n,{conditions:r,properties:s})=>Object.entries(s).reduce((i,l)=>{const[c,d]=l;return i.properties[c]=Zt(d),i},{action:t,subject:n,conditions:nt(r),properties:{}}),Jn=(t,n,{conditions:r})=>({action:t,subject:n,properties:{},conditions:nt(r)}),qn=(t,n)=>Object.entries(n).reduce((s,i)=>{const[l,c]=i;if(!je(c).some(u=>u))return s;if(!c?.properties?.enabled){const u=Qn(l,t,c);return[...s,u]}if(!c.properties.enabled)return s;const p=Jn(l,t,c);return s.push(p),s},[]),Ft=t=>Object.entries(t).reduce((r,s)=>{const[i,l]=s,c=qn(i,l);return[...r,...c]},[]),_n=t=>{const n=Bt(t.plugins),r=Bt(t.settings),s=Ft(t.collectionTypes),i=Ft(t.singleTypes);return[...n,...r,...s,...i]},es=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],st=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:r},s)=>{const[{initialData:i,layouts:l,modifiedData:c},d]=(0,e.useReducer)(Yn,zn,()=>Hn(t,r)),{formatMessage:p}=(0,Z.Z)();(0,e.useImperativeHandle)(s,()=>({getPermissions(){const I=(0,O.e5)(i.collectionTypes,c.collectionTypes),T=(0,O.e5)(i.singleTypes,c.singleTypes),h={...I,...T};let k;return S()(h)?k=!1:k=Object.values(h).some(D=>Object.values(D).some(B=>A()(B,"conditions"))),{permissionsToSend:_n(c),didUpdateConditions:k}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(I,T,h,k)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:I,propertyName:T,rowName:h,value:k})},f=(I,T,h)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:I,actionId:T,value:h})},x=I=>{d({type:"ON_CHANGE_CONDITIONS",conditions:I})},$=(0,e.useCallback)(({target:{name:I,value:T}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:I,value:T})},[]),N=(0,e.useCallback)(({target:{name:I,value:T}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:I,value:T})},[]);return e.createElement(An,{value:{availableConditions:t.conditions,modifiedData:c,onChangeConditions:x,onChangeSimpleCheckbox:$,onChangeParentCheckbox:N,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:f}},e.createElement(C.v,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(R.m,null,es.map(I=>e.createElement(R.O,{key:I.id},p({id:I.labelId,defaultMessage:I.defaultMessage})))),e.createElement(v.n,{style:{position:"relative"}},e.createElement(v.x,null,e.createElement(bt,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(v.x,null,e.createElement(bt,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(v.x,null,e.createElement(Tt,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(v.x,null,e.createElement(Tt,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});st.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},st.propTypes={layout:a().object,isFormDisabled:a().bool.isRequired,permissions:a().array};const ts=(0,e.memo)(st)},63727:(K,L,o)=>{"use strict";o.r(L),o.d(L,{default:()=>Y});var e=o(67294),C=o(92417),R=o(86706),v=o(16550),O=o(36364),P=o(40720),A=o(90731),y=o(96987),S=o(12473),W=o(34726),a=o(16607),Z=o(97695),m=o(41054),M=o(86896),F=o(4644),g=o(51754),b=o(90065),G=o(442),w=o(10574),oe=o(31988),ee=o(6498),E=o(38670),pe=o(457),Q=o(45697),H=o.n(Q);const te=({disabled:re,role:X,values:j,errors:J,onChange:le,onBlur:ge})=>{const{formatMessage:q}=(0,M.Z)();return e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(y.k,{justifyContent:"space-between"},e.createElement(a.x,null,e.createElement(a.x,null,e.createElement(w.Z,{fontWeight:"bold"},X?X.name:q({id:"global.details",defaultMessage:"Details"}))),e.createElement(a.x,null,e.createElement(w.Z,{textColor:"neutral500",variant:"pi"},X?X.description:q({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(S.z,{disabled:!0,variant:"secondary"},q({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:X.usersCount}))),e.createElement(oe.r,{gap:4},e.createElement(ee.P,{col:6},e.createElement(E.o,{disabled:re,name:"name",error:J.name&&q({id:J.name}),label:q({id:"global.name",defaultMessage:"Name"}),onChange:le,onBlur:ge,required:!0,value:j.name||""})),e.createElement(ee.P,{col:6},e.createElement(pe.g,{disabled:re,label:q({id:"global.description",defaultMessage:"Description"}),id:"description",error:J.name&&q({id:J.name}),onChange:le,onBlur:ge},j.description||"")))))};te.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},te.propTypes={disabled:H().bool,errors:H().object.isRequired,onBlur:H().func.isRequired,onChange:H().func.isRequired,role:H().object,values:H().object};const Ce=te;var be=o(87561);const ie=be.Ry().shape({name:be.Z_().required(C.I0.required)}),Se=()=>{const re=(0,C.lm)(),{formatMessage:X}=(0,M.Z)(),{params:{id:j}}=(0,v.$B)("/settings/roles/:id"),{put:J}=(0,C.kY)(),[le,ge]=(0,e.useState)(!1),q=(0,e.useRef)(),{lockApp:ue,unlockApp:ke}=(0,C.o1)(),{trackUsage:Be}=(0,C.rS)(),{formatAPIError:Ee}=(0,C.So)(),{isLoading:Ze,data:Le}=(0,b.d)(j,{cacheTime:0}),{roles:[he={}],isLoading:Me,refetch:Fe}=(0,g.F)({id:j},{cacheTime:0}),{permissions:Ue,isLoading:Pe}=(0,F.V)({id:j},{cacheTime:0}),ne=async de=>{try{ue(),ge(!0);const{permissionsToSend:me,didUpdateConditions:Ae}=q.current.getPermissions();await J(`/admin/roles/${j}`,de),he.code!=="strapi-super-admin"&&(await J(`/admin/roles/${j}/permissions`,{permissions:me}),Ae&&Be("didUpdateConditions")),q.current.setFormAfterSubmit(),await Fe(),re({type:"success",message:{id:"notification.success.saved"}})}catch(me){re({type:"warning",message:Ee(me)})}finally{ge(!1),ke()}},ce=!Me&&he.code==="strapi-super-admin";return e.createElement(P.o,null,e.createElement(C.SL,{name:"Roles"}),e.createElement(m.J9,{enableReinitialize:!0,initialValues:{name:he.name,description:he.description},onSubmit:ne,validationSchema:ie,validateOnChange:!1},({handleSubmit:de,values:me,errors:Ae,handleChange:ot,handleBlur:Ne})=>e.createElement("form",{onSubmit:de},e.createElement(A.T,{primaryAction:e.createElement(y.k,{gap:2},e.createElement(S.z,{disabled:he.code==="strapi-super-admin",onClick:de,loading:le,size:"L"},X({id:"global.save",defaultMessage:"Save"}))),title:X({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:X({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(C.rU,{startIcon:e.createElement(Z.Z,null),to:"/settings/roles"},X({id:"global.back",defaultMessage:"Back"}))}),e.createElement(W.D,null,e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(Ce,{isLoading:Me||Pe,disabled:ce,errors:Ae,values:me,onChange:ot,onBlur:Ne,role:he}),!Ze&&!Me&&!Pe?e.createElement(a.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(G.Z,{isFormDisabled:ce,permissions:Ue,ref:q,layout:Le})):e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(C.dO,null)))))))},Y=()=>{const re=(0,R.v9)(O._),{isLoading:X,allowedActions:{canRead:j,canUpdate:J}}=(0,C.ss)({read:re.settings.roles.read,update:re.settings.roles.update});return X?e.createElement(C.dO,null):!j&&!J?e.createElement(v.l_,{to:"/"}):e.createElement(Se,null)}},90065:(K,L,o)=>{"use strict";o.d(L,{d:()=>R});var e=o(92417),C=o(88767);const R=(v,O={})=>{const{get:P}=(0,e.kY)(),{data:A,error:y,isError:S,isLoading:W}=(0,C.useQuery)(["permissions",v],async()=>{const{data:{data:a}}=await P("/admin/permissions",{params:{role:v}});return a},O);return{data:A,error:y,isError:S,isLoading:W}}},44174:K=>{function L(o,e,C,R){for(var v=-1,O=o==null?0:o.length;++v<O;){var P=o[v];e(R,P,C(P),o)}return R}K.exports=L},81119:(K,L,o)=>{var e=o(89881);function C(R,v,O,P){return e(R,function(A,y,S){v(P,A,O(A),S)}),P}K.exports=C},9872:(K,L,o)=>{var e=o(44174),C=o(81119),R=o(67206),v=o(1469);function O(P,A){return function(y,S){var W=v(y)?e:C,a=A?A():{};return W(y,P,R(S,2),a)}}K.exports=O},42348:(K,L,o)=>{var e=o(21078),C=1/0;function R(v){var O=v==null?0:v.length;return O?e(v,C):[]}K.exports=R},7739:(K,L,o)=>{var e=o(89465),C=o(9872),R=Object.prototype,v=R.hasOwnProperty,O=C(function(P,A,y){v.call(P,y)?P[y].push(A):e(P,y,[A])});K.exports=O},63122:(K,L,o)=>{"use strict";o.d(L,{U:()=>Z,y:()=>W});var e=o(85893),C=o(67294),R=o(71997),v=o(31254),O=o(92058),P=o(10574),A=o(96987),y=o(16607);const S=({theme:m,expanded:M,variant:F,disabled:g,error:b})=>b?`1px solid ${m.colors.danger600} !important`:g?`1px solid ${m.colors.neutral150}`:M?`1px solid ${m.colors.primary600}`:F==="primary"?`1px solid ${m.colors.neutral0}`:`1px solid ${m.colors.neutral100}`,W=(0,R.ZP)(P.Z)``,a=(0,R.ZP)(y.x)`
  border: ${S};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:m})=>m.colors.primary600};

    ${W} {
      color: ${({theme:m,expanded:M})=>M?void 0:m.colors.primary700};
    }

    ${P.Z} {
      color: ${({theme:m,expanded:M})=>M?void 0:m.colors.primary600};
    }

    & > ${A.k} {
      background: ${({theme:m})=>m.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:m})=>m.colors.primary200};
    }
  }
`,Z=({children:m,disabled:M=!1,error:F,expanded:g=!1,hasErrorMessage:b=!0,id:G,onToggle:w,toggle:oe,size:ee="M",variant:E="primary",shadow:pe})=>{const Q=(0,O.M)(G),H=C.useMemo(()=>({expanded:g,onToggle:w,toggle:oe,id:Q,size:ee,variant:E,disabled:M}),[M,g,Q,w,ee,oe,E]);return(0,e.jsxs)(v.S.Provider,{value:H,children:[(0,e.jsx)(a,{"data-strapi-expanded":g,disabled:M,"aria-disabled":M,expanded:g,hasRadius:!0,variant:E,error:F,shadow:pe,children:m}),F&&b&&(0,e.jsx)(y.x,{paddingTop:1,children:(0,e.jsx)(P.Z,{variant:"pi",textColor:"danger600",children:F})})]})}},68889:(K,L,o)=>{"use strict";o.d(L,{v:()=>v});var e=o(85893),C=o(31254),R=o(16607);const v=({children:O,...P})=>{const{expanded:A,id:y}=(0,C.A)();if(!A)return null;const S=`accordion-content-${y}`,W=`accordion-label-${y}`,a=`accordion-desc-${y}`;return(0,e.jsx)(R.x,{role:"region",id:S,"aria-labelledby":W,"aria-describedby":a,...P,children:O})}},31254:(K,L,o)=>{"use strict";o.d(L,{A:()=>R,S:()=>C});var e=o(67294);const C=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),R=()=>(0,e.useContext)(C)},1744:(K,L,o)=>{"use strict";o.d(L,{B:()=>m});var e=o(85893),C=o(58471),R=o(71997),v=o(63122),O=o(31254);const P=({expanded:M,disabled:F,variant:g})=>{let b="neutral100";return M?b="primary100":F?b="neutral150":g==="primary"&&(b="neutral0"),b};var A=o(58753),y=o(85200),S=o(96987),W=o(10574);const a=(0,R.ZP)(A.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:M,expanded:F})=>F?M.colors.primary600:M.colors.neutral500};
    }
  }
`,Z=(0,R.ZP)(S.k)`
  min-height: ${({theme:M,size:F})=>M.sizes.accordions[F]};
  border-radius: ${({theme:M,expanded:F})=>F?`${M.borderRadius} ${M.borderRadius} 0 0`:M.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:M})=>M.colors.primary600};
      }
    }
  }
`,m=({title:M,description:F,as:g="span",togglePosition:b="right",action:G,...w})=>{const{onToggle:oe,toggle:ee,expanded:E,id:pe,size:Q,variant:H,disabled:te}=(0,O.A)(),Ce=`accordion-content-${pe}`,be=`accordion-label-${pe}`,xe=`accordion-desc-${pe}`,ie=Q==="M"?6:4,Re=Q==="M"?ie:ie-2,Se=P({expanded:E,disabled:te,variant:H}),Y={as:g,fontWeight:Q==="S"?"bold":void 0,id:be,textColor:E?"primary600":"neutral700",ellipsis:!0,variant:Q==="M"?"delta":void 0},re=E?"primary600":"neutral600",X=E?"primary200":"neutral200",j=Q==="M"?`${32/16}rem`:`${24/16}rem`,J=()=>{te||(ee&&!oe?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),ee()):oe&&oe())},le=(0,e.jsx)(S.k,{justifyContent:"center",borderRadius:"50%",height:j,width:j,transform:E?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:X,cursor:te?"not-allowed":"pointer",onClick:J,shrink:0,children:(0,e.jsx)(y.J,{as:C.Z,width:Q==="M"?`${11/16}rem`:`${8/16}rem`,color:E?"primary600":"neutral600"})});return(0,e.jsx)(Z,{paddingBottom:Re,paddingLeft:ie,paddingRight:ie,paddingTop:Re,background:Se,expanded:E,size:Q,justifyContent:"space-between",cursor:te?"not-allowed":"",children:(0,e.jsxs)(S.k,{gap:3,flex:1,maxWidth:"100%",children:[b==="left"&&le,(0,e.jsx)(a,{onClick:J,"aria-disabled":te,"aria-expanded":E,"aria-controls":Ce,"aria-labelledby":be,"data-strapi-accordion-toggle":!0,expanded:E,type:"button",flex:1,minWidth:0,...w,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(v.y,{...Y,children:M}),F&&(0,e.jsx)(W.Z,{as:"p",id:xe,textColor:re,children:F})]})}),b==="right"&&(0,e.jsxs)(S.k,{gap:3,children:[le,G]}),b==="left"&&G]})})}},13814:(K,L,o)=>{"use strict";o.d(L,{Q:()=>v});var e=o(85893),C=o(71997),R=o(82832);const v=({options:P,...A})=>(0,e.jsx)(R.NU,{...A,children:P.map(y=>"children"in y?(0,e.jsx)(R.Ab,{label:y.label,values:y.children.map(S=>S.value.toString()),children:y.children.map(S=>(0,e.jsx)(O,{value:S.value,children:S.label},S.value))},y.label):(0,e.jsx)(R.ML,{value:y.value,children:y.label},y.value))}),O=(0,C.ZP)(R.ML)`
  padding-left: ${({theme:P})=>P.spaces[7]};
`}}]);
