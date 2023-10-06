"use strict";(self["webpackChunkonboardapp"]=self["webpackChunkonboardapp"]||[]).push([[745],{1172:function(t,e,a){a.d(e,{Z:function(){return S}});var n=a(3396),o=a(7139);const l={class:"navbar navbar-expand-lg navbar-light bg-light"},r=(0,n._)("a",{class:"navbar-brand",href:"/"},"On Boarding App",-1),s=(0,n._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d=(0,n._)("ul",{class:"navbar-nav mr-auto"},null,-1),c={class:"form-inline my-2 my-lg-0"},i={style:{color:"black",margin:"20px"}};function m(t,e,a,m,p,g){return(0,n.wg)(),(0,n.iD)("nav",l,[r,s,(0,n._)("div",u,[d,(0,n._)("form",c,[(0,n._)("p",i,(0,o.zw)(p.name),1),(0,n._)("button",{class:"btn btn-outline-dark my-2 my-sm-0",onClick:e[0]||(e[0]=t=>g.logout())},"LogOut")])])])}a(7658);var p={name:"Header",data(){return{name:""}},methods:{logout(){localStorage.clear(),this.$router.push({name:"Login"}),alert("Logout Successfully")}},async mounted(){let t=localStorage.getItem("user-info");t?this.name=JSON.parse(t).name:(this.$router.push({name:"SignUp"}),alert("please singup first"))}},g=a(89);const h=(0,g.Z)(p,[["render",m]]);var S=h},5745:function(t,e,a){a.r(e),a.d(e,{default:function(){return $}});var n=a(3396),o=a(9242),l=a(7139);const r={class:"container"},s=(0,n._)("div",{class:"row"},[(0,n._)("div",{class:"col-12 text-center"},[(0,n._)("h4",{class:"pt-3"},"OnBoard Student")])],-1),u={class:"row"},d=(0,n._)("div",{class:"col-3"},null,-1),c={class:"col-md-6 px-5 px-md-0"},i={class:"form-group"},m=(0,n._)("label",null,"Name",-1),p={class:"form-group"},g=(0,n._)("label",{for:"Category"},"Choose a Category:",-1),h=(0,n._)("option",{value:"International"},"International",-1),S=(0,n._)("option",{value:"Domestic"},"Domestic",-1),_=[h,S],b={key:0},v=(0,n._)("label",{for:"documents",class:"col-sm-2 col-form-label"},"Documents",-1),y={class:"form-check",style:{"margin-left":"27%"}},f=["value","id"],D=["for"],C={class:"form-group"},w=(0,n._)("label",null,"DOB",-1),k={class:"form-group"},q=(0,n._)("label",null,"Father Name",-1),x={class:"form-group"},N=(0,n._)("label",null,"Mother Name",-1),O={class:"form-group"},L=(0,n._)("label",null,"Last class Score",-1),U=(0,n._)("div",{class:"col-3"},null,-1);function B(t,e,a,h,S,B){const V=(0,n.up)("Header");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(V),(0,n._)("div",r,[s,(0,n._)("div",u,[d,(0,n._)("div",c,[(0,n._)("form",null,[(0,n._)("div",i,[m,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>S.Student.name=t),required:""},null,512),[[o.nr,S.Student.name]])]),(0,n._)("div",p,[g,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>S.Student.Category=t),name:"Category",id:"Category",class:"form-control",onChange:e[2]||(e[2]=(...t)=>B.getRequiredDocs&&B.getRequiredDocs(...t))},_,544),[[o.bM,S.Student.Category]])]),"Category"!==S.Student.Category&&null!=S.reqDocuments?((0,n.wg)(),(0,n.iD)("div",b,[v,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(S.reqDocuments,((t,a)=>((0,n.wg)(),(0,n.iD)("div",{key:a},[(0,n._)("div",y,[(0,n.wy)((0,n._)("input",{value:a,class:"form-check-input",type:"checkbox",id:"flexCheckChecked"+a,"onUpdate:modelValue":e[3]||(e[3]=t=>S.Student.Document=t)},null,8,f),[[o.e8,S.Student.Document]]),(0,n._)("label",{class:"form-check-label",for:"flexCheckChecked"+a},(0,l.zw)(a),9,D)])])))),128))])):(0,n.kq)("",!0),(0,n._)("div",C,[w,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=t=>S.Student.DOB=t),required:""},null,512),[[o.nr,S.Student.DOB]])]),(0,n._)("div",k,[q,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=t=>S.Student.FatherName=t),required:""},null,512),[[o.nr,S.Student.FatherName]])]),(0,n._)("div",x,[N,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=t=>S.Student.MotherName=t),required:""},null,512),[[o.nr,S.Student.MotherName]])]),(0,n._)("div",O,[L,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=t=>S.Student.LastScore=t),required:""},null,512),[[o.nr,S.Student.LastScore]])]),(0,n._)("button",{type:"button",onClick:e[8]||(e[8]=(...t)=>B.updateStudent&&B.updateStudent(...t)),class:"btn btn-primary"},"Submit")])]),U])])],64)}a(7658);var V=a(4161),Z=a(1172),H={name:"AddStudent",components:{Header:Z.Z},data(){return{Student:{},reqDocuments:[]}},methods:{async updateStudent(){const t=await V.Z.put("http://localhost:3000/Student/"+this.$route.params.id,{name:this.Student.name,Category:this.Student.Category,Document:this.Student.Document,DOB:this.Student.DOB,FatherName:this.Student.FatherName,MotherName:this.Student.MotherName,LastScore:this.Student.LastScore});200==t.status&&alert("Student Added"),this.$router.push({name:"Home"})},async getRequiredDocs(){let t="http://localhost:3000/";"International"===this.Student.Category?t+="international_docs":"Domestic"===this.Student.Category&&(t+="domestic_docs");let e=await V.Z.get(t);this.reqDocuments=e.data}},async mounted(){const t=await V.Z.get("http://localhost:3000/Student/"+this.$route.params.id);console.warn(t),this.Student=t.data,this.getRequiredDocs()}},M=a(89);const F=(0,M.Z)(H,[["render",B]]);var $=F}}]);
//# sourceMappingURL=745.cf202fa0.js.map