<template>
  <ul>
    <template v-for="(item,index) in menuList">
      <router-link tag="li" :to="item.path" :key="index">
        <img :src="item.img" alt="">
        <p :style="{color:color}">{{item.name}}</p>
      </router-link>
    </template>
  </ul>
</template>

<script>
  export default {
    name: "house-menu",
    props:{
      color: {
        type:String,
        default:'#fff'
      }
    },
    data(){
      return{
        menuList:[
          {img:require('../../../assets/house/choose1.png'),name:this.$t('public.pub008'),path:'/house/invest'},
          {img:require('../../../assets/house/choose2.png'),name:this.$t('public.pub009'),path:'/house/migrant'},
          {img:require('../../../assets/house/choose3.png'),name:this.$t('public.pub010'),path:'/house/study'},
          {img:require('../../../assets/house/choose4.png'),name:this.$t('public.pub011'),path:'/house/medical'}
        ],
      }
    }
  }
</script>

<style scoped lang="scss">
  ul{
    width: 100%;display: flex;justify-content: space-between;
    li{
      text-align: center;
      img{
        width: 100px;height: 100px;
      }
      >p{
        font-size: 24px;padding-top: 20px;
      }
    }
  }
</style>
