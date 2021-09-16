<template>
  <div class="title" :style="{width:width}">
    <div>
      <div class="label">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "x-title",
    props:{
      width:{
        type:String,
        default:'60%'
      }
    }
  }
</script>

<style scoped lang="scss">
  .title{
    margin: auto;height: 56px;position: relative;
    &:before{
      content: '';height: 2px;width: 100%;background-color:#d2d2d2;
      position: absolute;left: 0;top:27px;
    }
    >div{
      width:40%;height: 100%;border: 1px solid #d2d2d2;margin: auto;position: relative;z-index: 2;background-color: #FFF;
      .label{
        display: inline-block;height: 58px;width:calc(100% - 40px);text-align: center;font-size:20px;
        position: absolute;left:20px;top:-1px;background-color: #fff;z-index: 3;
      }
    }
  }
</style>
