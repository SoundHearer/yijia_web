<template>
  <div class="house-page">
    <x-banner :title="(lang.includes('en')?'CE Group ':'')+$t('public.pub003')"
              img="house/invest-"
              :tip="$t('house.hou001')">
    </x-banner>
    <div class="house-consult">
      <sub-title :title="lang.includes('en')?'房产资讯':$t('public.pub020')" color="#333">
        <span class="">PROPERTY</span>INFORMATION
      </sub-title>
      <div class="house-consult-content">
        <div class="consultative">
          <img src="../../assets/house/consultative1.png" alt="">
          <div class="des-text">
            <img style="width: 432px" src="../../assets/house/yffs.png" alt="">
            <p style="font-size: 20px;">{{$t('house.hou026')}}</p>
            <h5><label>{{$t('house.hou027')}}</label>LOCATION</h5>
            <p>{{$t('house.hou028')}}</p>
            <h5><label>{{$t('house.hou029')}}</label>LAND AREA</h5>
            <p>{{$t('house.hou030')}} ≈ 27.52</p>
            <h5><label>{{$t('house.hou031')}}</label>PROJECT TYPE</h5>
            <p>{{$t('house.hou032')}}</p>
            <h5><label>{{$t('house.hou033')}}</label>SUPPORTING FACILITIES</h5>
            <p>{{$t('house.hou034')}}</p>
          </div>
        </div>
        <p class="consult-text">
          {{$t('house.hou041')}}
        </p>
        <p class="consult-text-img"><img src="../../assets/house/sail0.png" alt=""></p>
        <div class="consult-img-list">
          <template v-for="(item,index) in consultImgList">
            <img :key="index" :src="item" alt="">
          </template>
        </div>
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
  import HouseAbroad from './component/house-abroad'
  import SubTitle from '../components/sub-title'
  export default {
    name: "house-sail",
    components:{HouseAbroad,SubTitle,XBanner},
    data(){
      return{
        lang : localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
        consultImgList:[
          require('../../assets/house/sail1.png'),require('../../assets/house/sail2.png'),require('../../assets/house/sail3.png'),
          require('../../assets/house/sail4.png'),require('../../assets/house/sail5.png'),require('../../assets/house/sail6.png'),
        ]
      }
    }
  }
</script>
<style lang="scss">
  .house-page .house-consult .sub-title {
    width: 1200px;
    .p{
      &:before{
        background-color: #333!important;
      }
    }
  }
  .house-page .house-abroad .sub-title {
    width: 1020px;
    .p{
      &:before{
        background-color: #fff;
      }
    }
  }
</style>
<style scoped lang="scss">
  .house-page{
    width: 100%;
    .house-consult {
      width: 100%;padding: 60px 0 0;background-color: #fff;box-sizing: border-box;
      .house-consult-content{
        width:1200px;margin: 60px auto;
        .consultative{
          display: flex;
          img{
            box-shadow: 0px 0px 22px 2px rgba(0, 0, 0, 0.27);
          }
          .des-text{
            color: #fff;font-size: 20px;font-weight: bold;margin-left: 20px;
            h5{
              font-size: 18px;color: #e1b261;display: flex;align-items: flex-end;margin-top: 40px;
              label{
                position: relative;font-size: 20px;display: inline-block;width: 116px;padding-bottom: 12px;
                &:before{
                  content:'';width: 117px;height: 3px;position: absolute;bottom:5px;left: 0;
                  background-image: linear-gradient(0deg,#e0b261 0%,#f6d49a 100%),linear-gradient(#333333,#333333);
                  background-blend-mode: normal,normal;
                }
              }
            }
            >p{
              line-height:28px;color: #333333;opacity: 0.8;font-weight: normal;
              span{margin-right:13px}
            }
          }
        }
        .consult-text{
          margin:30px auto ;font-size: 18px;line-height: 40px;
          color: #333333;opacity: 0.8;
        }
        .consult-text-img{
          margin:20px auto ;
          img{
            width: 1200px;
          }
        }
        .consult-img-list{
          margin:20px auto;display: flex;flex-flow: wrap;
          img{
            width: 382px;height: 215px;margin-left: 20px;margin-bottom:15px;
            box-shadow:0 0 22px 2px rgba(0, 0, 0, 0.27);
            &:nth-of-type(3n+1){
              margin-left:0;
            }
          }
        }
      }
    }
  }
</style>
