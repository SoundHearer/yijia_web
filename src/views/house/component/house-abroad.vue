<template>
  <div class="house-abroad" :style="{backgroundColor:backgroundColor}">
    <slot></slot>
    <div class="abroad">
      <sub-menu :color="menuColor"></sub-menu>
      <p :style="{color:pColor}">{{$t('house.hou003')}}</p>
    </div>
  </div>
</template>

<script>
  import SubTitle from '../../components/sub-title'
  import subMenu from './menu'
  export default {
    name: "house-abroad",
    components:{SubTitle,subMenu},
    props:{
      backgroundColor:{
        type:String,
        default:'#66635E'
      },
      menuColor:{
        type:String,
        default:'#fff'
      },
      pColor:{
        type:String,
        default:'#fff'
      }
    }
  }
</script>

<style scoped lang="scss">
  .house-abroad{
    width: 100%;padding: 80px 0;min-width: 1200px;
    .abroad{
      width: 1020px;margin:40px auto 0;
      >p{
        margin-top: 40px;line-height: 30px;font-size: 20px;
      }
    }
  }
</style>
