<template>
  <div class="apply-form">
    <p><el-input style="width:500px" v-model="formInput.contactNumber" :placeholder="$t('public.pub013')"></el-input></p>
    <p><el-input style="width:500px;margin-top:30px;" v-model="formInput.company" :placeholder="$t('public.pub014')"></el-input></p>
    <p><el-input style="width:500px;margin-top:30px;" v-model="formInput.content" :placeholder="$t('public.pub015')"></el-input></p>
    <div class="button" @click="submitForm">{{$t('public.pub016')}}</div>
  </div>
</template>

<script>
  import {applyForm} from '../../network/api'
  export default {
    name: "applyFrom",
    data(){
      return{
        formInput:{
          contactNumber:'',
          company:'',
          content:''
        }
      }
    },
    methods:{
      async submitForm(){
        if(!this.formInput.contactNumber){
          this.$message({
            message: '请填写您的联系方式！',
            type: 'warning'
          });
          return
        }
        if(!this.formInput.company){
          this.$message({
            message: '请填写您的公司名称！',
            type: 'warning'
          });
          return
        }
        await applyForm({
          ...this.formInput,
          msgType:this.$route.path==='/about'?'3':'2'
        }).then((result) => {
          if(result.errno===0){
            this.$message.success(result.errmsg);
          }else{
            this.$message.error(result.errmsg);
          }
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .apply-form{
    padding:50px 30px;background-color: #fff;border-radius:2px;
    .button{
      width: 150px;height:40px;color: #fff;text-align: center;line-height: 40px;
      background-image: linear-gradient(264deg, #e6a635 0%, #ffdda1 100%);
      margin-top:20px;margin-left:250px;cursor: pointer;
    }
  }
</style>
