<template>
  <div class="sub-title" :style="{color: color,fontSize:fontSize+'px'}">
    <!--<span>BOUTIQUE  </span>CASE-->
    <slot></slot>
    <p class="p">
      {{title}}
      <span :style="{backgroundColor:color}"></span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "sub-title",
    props:{
      title:{
        type:String,
        default:''
      },
      fontSize:{
        type:String,
        default:'28'
      },
      color:{
        type: String,
        default: '#fff'
      }
    }
  }
</script>

<style scoped lang="scss">
  .sub-title{
    width:1200px;margin: auto;
    span{color: #e1b261;margin-right:10px}
    .p{
      width: 100%;padding-left:80px;position: relative;box-sizing: border-box;margin-top:10px;
      span{
        position: absolute;display: inline-block;width:75px;height: 2px;
        top:18px;left:0;
      }
    }
  }
</style>
