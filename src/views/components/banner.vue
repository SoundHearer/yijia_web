<template>
  <div class="banner" :style="{height:height+'px'}">
    <img :src="require(`../../assets/${img}banner.png`)" alt="">
    <div>
      <h3>{{title}}</h3>
      <p v-html="tip"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "banner",
    props:{
      img:{
        type:String,
        default:''
      },
      title:{
        type:String,
        default:''
      },
      tip:{
        type:String,
        default:''
      },
      height:{
        type:String|Number,
        default:'350'
      }
    }
  }
</script>

<style scoped lang="scss">
  .banner{
    width: 100%;position: relative;min-width: 1200px;
    >img{
      width: 100%;height:100%;
    }
    >div{
      width: 100%;height:100%;position: absolute;z-index:2;top: 0;letter-spacing: 2px;
      background-image: linear-gradient(124deg,rgba(#4a4646,0.6) 0%, rgba(#986814,0.6) 100%);
      text-align: center;color: #fff;padding-top: 130px;box-sizing: border-box;
      h3{
        font-weight: normal;width:500px;text-align: center;margin: auto;font-size: 28px;
        border-bottom: 2px solid #fff;padding-bottom:10px;margin-bottom: 20px;
      }
      p{
        line-height: 25px;font-size: 16px;
      }
    }
  }
</style>
