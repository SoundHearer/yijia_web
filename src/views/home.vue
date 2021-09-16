<template>
  <div class="page-home">
    <el-carousel :interval="10000" :height="height">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <router-link tag="div" :to="item.url" class="item">
          <img :style="{height:height}" :src="item.img" alt="">
          <div class="item-text">
            <h3><span v-if="lang.includes('en')">CE Group</span> {{ item.title }}</h3>
            <p v-html="item.des"></p>
          </div>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {getBanner} from '../network/api'

export default {
  name: 'home',
  data() {
    return {
      banners: [
        {
          img: '',
          // title: this.$t('public.pub003'),
          title: '',
          des: this.$t('home.ho001'),
          url: '/house/index'
        },
        {
          img: '',
          // title: this.$t('public.pub004'),
          title: '',
          des: this.$t('home.ho002'),
          url: '/business'
        },
        {
          img: '',
          // title: this.$t('public.pub005'),
          title: '',
          des: this.$t('home.ho003'),
          url: '/culture'
        }
      ],
      height: (window.screen.height - 143) + 'px',
      lang: localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
      bannerParam: {
        lang: localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
        type: '壹嘉首页'
      }
    }
  },
  created() {
    console.log(this.lang)
    this.getBannerByType()
  },
  methods: {
    getBannerByType() {
      getBanner(this.bannerParam).then((response) => {
        console.log(response)
        if(response.errno===0){
          const list = response.data
          for (var i = 0; i < list.length; i++) {
            this.banners[i].img = list[i].url,
              this.banners[i].title = list[i].name
            // this.banners[i].title = this.$t(list[i].name)
          }
        }else{

        }
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-home {
  width: 100vw;
  height: 100%;
  min-width: 1200px;
  overflow: hidden;

  .item {
    width: 100%;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      object-fit: cover;
    }

    .item-text {
      position: absolute;
      width: 100%;
      height: 450px;
      background-color: rgba(0, 0, 0, .6);
      z-index: 2;
      left: 0;
      top: calc(50% - 225px);
      bottom: calc(50% - 250px);
      text-align: center;
      color: #fff;
      padding: 80px 0;
      box-sizing: border-box;
      font-size: 36px;
      letter-spacing: 4px;

      h3 {
        font-weight: normal;
        width: 760px;
        text-align: center;
        margin: auto;
        font-size: 40px;
        border-bottom: 2px solid #fff;
        padding-bottom: 35px;
        margin-bottom: 35px;
        color: #E1B587;
        font-family: AdobeHeitiStd-Regular;
      }

      p {
        line-height: 60px;
        font-size: 30px;
      }
    }
  }
}
</style>
