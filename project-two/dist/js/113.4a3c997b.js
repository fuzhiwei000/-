"use strict";(self["webpackChunkproject_two"]=self["webpackChunkproject_two"]||[]).push([[113],{28113:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"infoList"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,size:"small"}},[t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.addStudent}},[e._v("新增")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别",align:"center"}}),t("el-table-column",{attrs:{prop:"age",label:"年龄",align:"center"}}),t("el-table-column",{attrs:{prop:"father",label:"父亲",align:"center"}}),t("el-table-column",{attrs:{prop:"mother",label:"母亲",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"家庭住址",align:"center"}}),t("el-table-column",{attrs:{prop:"time",label:"入校时间",align:"center"}}),t("el-table-column",{attrs:{prop:"phone",label:"联系方式",align:"center"}}),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-edit"},on:{click:function(t){return e.edit(a.row)}}}),t("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(t){return e.del(a.row)}}})]}}])})],1),t("el-dialog",{attrs:{title:"收货地址",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[t("el-table",{attrs:{data:e.gridData}},[t("el-table-column",{attrs:{property:"date",label:"日期",width:"150"}}),t("el-table-column",{attrs:{property:"name",label:"姓名",width:"200"}}),t("el-table-column",{attrs:{property:"address",label:"地址"}})],1)],1),t("el-dialog",{attrs:{title:e.state?"添加学生信息":"编辑学生信息",visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth,prop:"name"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"性别","label-width":e.formLabelWidth,prop:"sex"}},[t("el-radio",{attrs:{label:"1"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("男")]),t("el-radio",{attrs:{label:"2"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女")])],1),t("el-form-item",{attrs:{label:"年龄","label-width":e.formLabelWidth,prop:"age"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"父亲姓名","label-width":e.formLabelWidth,prop:"father"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.father,callback:function(t){e.$set(e.form,"father",t)},expression:"form.father"}})],1),t("el-form-item",{attrs:{label:"母亲姓名","label-width":e.formLabelWidth,prop:"mather"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.mother,callback:function(t){e.$set(e.form,"mother",t)},expression:"form.mother"}})],1),t("el-form-item",{attrs:{label:"家庭住址","label-width":e.formLabelWidth,prop:"address"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),t("el-form-item",{attrs:{label:"入校时间","label-width":e.formLabelWidth,prop:"time"}},[t("el-date-picker",{attrs:{format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),t("el-form-item",{attrs:{label:"联系方式","label-width":e.formLabelWidth,prop:"phone"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){return e.closeInfo("form")}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sure("form")}}},[e._v("确 定")])],1)],1)],1)},l=[],o=a(38898),s={data(){return{tableData:[],form:{name:"",sex:"1",age:"",father:"",mather:"",address:"",time:"",phone:""},dialogFormVisible:!1,rules:{name:[{required:!0,message:"请输入姓名"}],sex:[{required:!0}],age:[{required:!0,message:"请输入年龄"}],address:[{required:!0,message:"请输入地址"}],time:[{required:!0,message:"请输入入学时间"}],phone:[{required:!0,message:"请输入联系方式"}]},total:0,formLabelWidth:"80px",state:!0}},created(){this.getData()},methods:{edit(e){this.form={...e},this.dialogFormVisible=!0,this.state=!1,console.log(e)},del(e){this.$alert("你确定要删除吗","提示",{confirmButtonText:"确定",callback:()=>{(0,o.eM)(e.id).then((e=>{200===e.status&&(this.$message({message:e.data.message,type:"success"}),this.getData())}))}})},closeInfo(e){this.dialogFormVisible=!1,this.$refs[e].resetFields()},addStudent(){this.dialogFormVisible=!0,this.state=!0,this.form={name:"",sex:"1",age:"",father:"",mather:"",address:"",time:"",phone:""},this.$refs["form"].resetFields()},getData(){(0,o.C5)().then((e=>{200===e.data.status&&(this.tableData=e.data.data,this.total=e.data.total)}))},sure(e){this.$refs[e].validate((e=>{e&&(this.state?(0,o.kI)("post",this.form).then((e=>{200===e.data.status&&(this.dialogFormVisible=!1,this.$message({message:e.data.message,type:"success"}),this.getData(),this.$refs["form"].resetFields())})):(0,o.kI)("put",this.form).then((e=>{200===e.data.status&&(this.dialogFormVisible=!1,this.$message({message:e.data.message,type:"success"}),this.getData(),this.$refs["form"].resetFields())})))}))}}},i=s,n=a(1001),m=(0,n.Z)(i,r,l,!1,null,"34bdf910",null),f=m.exports},38898:function(e,t,a){a.d(t,{C5:function(){return f},Hm:function(){return c},eM:function(){return u},kI:function(){return m},kf:function(){return d},nJ:function(){return n},qH:function(){return i},x4:function(){return s}});var r=a(37182),l=a(95410),o=a.n(l);function s(e){return(0,r.Z)({method:"post",url:"/login",data:e})}function i(e){return(0,r.Z)({method:"get",url:"/students",params:e})}function n(e){return(0,r.Z)({method:"delete",url:`/students/${e}`})}function m(e,t){t=o().stringify(t);let a={method:e,url:"/info",data:t};return(0,r.Z)(a)}function f(){return(0,r.Z)({method:"get",url:"/info"})}function u(e){return(0,r.Z)({method:"delete",url:`/info/${e}`})}function d(){return(0,r.Z)({method:"get",url:"/dataview"})}function c(){return(0,r.Z)({method:"get",url:"travel"})}}}]);
//# sourceMappingURL=113.4a3c997b.js.map