<template>
  <div class="page-migrant">
    <x-banner :title="(lang.includes('en')?'CE Group ':'')+$t('public.pub003')" img="house/invest-" :tip="$t('house.hou001')">
    </x-banner>
    <div class="study-content">
      <x-title width="1000px">
        <div class="invest-title">
          {{lang.includes('en')?'学生留学':$t('public.pub010')}} <p><span style="color:#e1b261;">STUDENT</span><span>STUDYING ABROAO</span></p>
        </div>
      </x-title>
      <div class="content">
        <img src="../../assets/house/study/study1.png" alt="">
        <p>{{$t('study.stu001')}}</p>
        <p>{{$t('study.stu002')}}</p>
        <p>{{$t('study.stu003')}}</p>
        <img src="../../assets/house/study/study2.png" alt="">
        <h4>
          <label>{{$t('study.stu004')}}</label>
          {{$t('study.stu009')}}
        </h4>
        <p>
          {{$t('study.stu005')}}
        </p>
        <p>
          {{$t('study.stu006')}}
        </p>
        <p>
          {{$t('study.stu007')}}
        </p>
        <p>
          {{$t('study.stu008')}}
        </p>
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
  import HouseAbroad from './component/house-abroad'
  import SubTitle from '../components/sub-title'
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
  .page-migrant{
    width: 100%;
    .study-content{
      width: 1200px;margin: auto;padding: 60px 0;
      .invest-title{
        display: flex;justify-content: space-between;padding: 0 30px;
        p{
          span{
            display: block;height: 25px;line-height: 25px;
          }
        }
      }
      .content{
        width: 100%;padding: 30px 0;
        >img{
          width: 100%;margin-top: 20px;
        }
        p{
          margin-top: 20px;color: rgba(#333,.6);font-size: 16px;line-height:30px;
        }
        h4{
          margin-top: 20px;color: #e1b261;font-size:36px;
          label{
            display: block;font-size: 24px;padding-bottom:10px;margin-bottom: 2px;position: relative;
            &:before{
              position: absolute;content: '';left: 0;bottom: 0;
              width: 172px;height: 2px;
              background-image: linear-gradient(0deg, #e0b261 0%,#f6d49a 100%);
            }
          }
        }
      }
    }
  }
</style>
