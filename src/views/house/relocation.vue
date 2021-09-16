<template>
  <div class="page-migrant">
    <x-banner :title="(lang.includes('en')?'CE Group ':'')+$t('public.pub003')" img="house/invest-" :tip="$t('house.hou001')">
    </x-banner>
    <div class="study-content">
      <x-title width="1000px">
        <div class="invest-title" v-html="$t('relocation.rel001')"></div>
      </x-title>
      <div class="content">
        <img src="../../assets/house/relocation.png" alt="">
        <h4>{{$t('relocation.rel002')}}</h4>
        <h5>{{$t('relocation.rel003')}}</h5>
        <p>{{$t('relocation.rel004')}}</p>
        <h5>{{$t('relocation.rel005')}}</h5>
        <p>{{$t('relocation.rel006')}}</p>
        <p>{{$t('relocation.rel007')}}</p>
        <p>{{$t('relocation.rel008')}}</p>
        <h5>{{$t('relocation.rel009')}}</h5>
        <p>{{$t('relocation.rel010')}}</p>
        <h5>{{$t('relocation.rel011')}}</h5>
        <p>{{$t('relocation.rel012')}}</p>
      </div>
    </div>
    <house-abroad>
      <sub-title :title="lang.includes('en')?'为什么要选择海外房产':$t('public.pub012')">
        <span>WHY CHOOSE</span>OVERSEAS REAL ESTATE?
      </sub-title>
    </house-abroad>
  </div>
</template>

<script>
  import XBanner from '../components/banner'
  import XTitle from '../components/xtitle'
  import SubTitle from '../components/sub-title'
  import HouseAbroad from './component/house-abroad'
  export default {
    name: "relocation",
    components:{
      XBanner,XTitle,SubTitle,HouseAbroad
    },
    data(){
      return{
        lang : localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-migrant{
    width: 100%;
    .study-content{
      width: 1200px;margin: auto;padding: 60px 0;
      .invest-title{
        display: flex;justify-content: space-between;padding: 0 30px;
        /deep/ span{
          color:#e1b261;
        }
      }
      .content{
        width: 100%;padding: 30px 0;
        >img{
          width: 100%;margin-top: 20px;margin-bottom: 20px;
        }
        p{
          margin-top: 20px;color: rgba(#333,.6);font-size: 16px;line-height:30px;
        }
        h5{
          color: #e1b261;padding-top: 30px;font-size: 20px;
        }
        h4{
          font-size: 24px;padding-bottom:10px;margin-bottom: 2px;position: relative;color: #e1b261;
          &:before{
            position: absolute;content: '';left: 0;bottom: 0;
            width: 172px;height: 2px;
            background-image: linear-gradient(0deg, #e0b261 0%,#f6d49a 100%);
          }
        }
      }
    }
  }
</style>
