import{u as m}from"./xGkggZte.js";import{M as c,I as p,d as i,aa as l,r as u,N as e,l as d}from"./BrowIRZp.js";import f from"./DaD5otEJ.js";import y from"./DbYwyVV6.js";import"./Bk8_5GNx.js";import"./BFAO8AuX.js";import"./DAQ-8pXS.js";import"./B3U5x8YF.js";import"./BhEAaAFE.js";import"./MMionFI2.js";import"./pbFHhUlk.js";import"./Dhe3bdP4.js";import"./GlkmoAKf.js";import"./zkH1M5s0.js";import"./DD2BMjI0.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=d(h,[["__scopeId","data-v-04bb036e"]]);export{V as default};
