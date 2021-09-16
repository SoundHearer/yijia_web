<template>
  <div class="page-medical">
    <x-banner :title="(lang.includes('en')?'CE Group ':'')+$t('public.pub003')" img="house/invest-" :tip="$t('house.hou001')">
    </x-banner>
    <div class="medical-content">
      <x-title width="1000px">
        <div class="invest-title">
          {{lang.includes('en')?'旅游医疗':$t('public.pub011')}} <p><span style="color:#e1b261;">TRAVEL</span><span>MEDICAL</span></p>
        </div>
      </x-title>
      <div class="content">
        <div class="top-content">
          <img src="../../assets/house/medical/medical1.png" alt="">
          <div>
            <h4 class="h4">{{$t('medical.med001')}}</h4>
            <p>{{$t('medical.med002')}}</p>
            <img src="../../assets/house/medical/medical2.png" alt="">
          </div>
        </div>
        <h4 class="h4" style="margin-top: 40px">{{$t('medical.med003')}}</h4>
        <p style="margin-top:30px">{{$t('medical.med004')}}</p>
        <p>{{$t('medical.med005')}}</p>
        <p>{{$t('medical.med006')}}</p>
        <img style="margin-top:40px" src="../../assets/house/medical/medical3.png" alt="">
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
    name: "study",
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
  .page-medical{
    width: 100%;
    .medical-content{
      width: 1200px;margin: auto;padding: 60px 0;
      .invest-title{
        display: flex;justify-content: space-between;padding: 0 30px;
        p{
          span{
            display: block;height: 25px;line-height: 25px;
          }
        }
      }
      .h4{
        display: block;font-size: 24px;padding-bottom:10px;position: relative;color: #e1b261;
        &:before{
          position: absolute;content: '';left: 0;bottom: 0;width: 172px;height:2px;
          background-image: linear-gradient(0deg, #e0b261 0%,#f6d49a 100%);
        }
      }
      .content{
        width: 100%;padding: 30px 0;
        img{
          box-shadow: 0 0 22px 2px rgba(0, 0, 0, 0.27);
        }
        .top-content{
          width: 100%;display: flex;box-sizing: border-box;padding: 0 10px;
          >div{
            margin-left: 40px;margin-top:100px;
            h4{
              @extend .h4
            }
            >img{
              margin-top:30px;
            }
          }
        }
        >img{
          width: 100%;margin-top: 20px;
        }
        p{
          margin-top: 20px;color: rgba(#333,.6);font-size: 16px;line-height:30px;
        }
      }
    }
  }
</style>
