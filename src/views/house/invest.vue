<template>
  <div class="page-invest">
    <x-banner :title="(lang.includes('en')?'CE Group ':'')+$t('public.pub003')"
              img="house/invest-"
              :tip="$t('house.hou001')">
    </x-banner>
    <div class="invest-content">
      <x-title width="76%">
        <div class="invest-title">
          {{lang.includes('en')?'海外投资':$t('public.pub008')}} <p><span style="color:#e1b261;">OVERSEAS</span><span>INVESTMENT</span></p>
        </div>
      </x-title>
      <div class="overseas">
        <img src="../../assets/house/invest/overseas1.png" alt="">
        <div class="overseas-text">
          <h4>{{$t('invest.inv001')}}</h4>
          <p>{{$t('invest.inv002')}}</p>
        </div>
        <img src="../../assets/house/invest/overseas2.png" alt="">
        <div class="overseas-text">
          <h4>{{$t('invest.inv003')}}</h4>
          <p>{{$t('invest.inv004')}}</p>
          <p>{{$t('invest.inv005')}}</p>
          <p>{{$t('invest.inv006')}}</p>
        </div>
      </div>
    </div>
    <div class="invest-consult">
      <sub-title :title="lang.includes('en')?'房产资讯':$t('public.pub020')">
        <span>PROPERTY</span>INFORMATION
      </sub-title>
      <ul>
        <template v-for="(item,index) in consultList">
          <li :key="index">
            <img :src="item.img" alt="">
            <h3>
              <label>{{item.title}}</label>
              <span>{{item.subTitle}}</span>
            </h3>
            <p>{{item.content}}</p>
          </li>
        </template>
      </ul>
    </div>
    <div class="choose">
      <house-abroad background-color="#fff" menuColor="#333" pColor="#333">
        <sub-title :title="lang.includes('en')?'为什么要选择海外房产':$t('public.pub012')" color="#333">
          <span>WHY CHOOSE</span>OVERSEAS REAL ESTATE?
        </sub-title>
      </house-abroad>
    </div>
  </div>
</template>

<script>
  import XBanner from '../components/banner'
  import XTitle from '../components/xtitle'
  import SubTitle from '../components/sub-title'
  import HouseAbroad from './component/house-abroad'
  export default {
    name: "invest",
    components:{
      XBanner,XTitle,SubTitle,HouseAbroad
    },
    data(){
      return{
        lang : localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
        consultList:[
          {
            img:require('../../assets/house/invest/consult1.png'),title:this.$t('invest.inv007'),subTitle:'THE SAIL',
            content:this.$t('invest.inv008')
          },
          {
            img:require('../../assets/house/invest/consult2.png'),title:this.$t('invest.inv009'),subTitle:'NOVO',
            content:this.$t('invest.inv010')+this.$t('invest.inv011')
          },
          {
            img:require('../../assets/house/invest/consult3.png'),title:'NYRA',subTitle:'NYRA',
            content:this.$t('invest.inv012')+this.$t('invest.inv013')
          },
        ]
      }
    }
  }
</script>
<style scoped lang="scss">
  .page-invest{
    width: 100%;
    .invest-content{
      width: 1200px;margin: auto;padding: 60px 0;
      .invest-title{
        display: flex;justify-content: space-between;padding: 0 30px;
        p{
          span{
            display: block;height: 25px;line-height: 25px;
          }
        }
      }
      .overseas{
        width: 100%;padding: 30px 0;
        >img{
          width: 100%;
        }
        h4{
          color: #e1b261;	font-size: 22px;margin-bottom: 10px;padding-bottom: 10px;position: relative;
          &:before{
            position: absolute;content: '';left: 0;bottom: 0;
            width: 172px;height: 2px;
            background-image: linear-gradient(0deg, #e0b261 0%,#f6d49a 100%);
          }
        }
        .overseas-text{
          padding-top:30px;font-size: 18px;
          h4{
            @extend h4;
          }
          >p{
            line-height: 30px;margin-bottom: 30px;
          }
        }
      }
    }
    .invest-consult{
      width: 100%;padding: 60px 0;background-image: linear-gradient(131deg,rgba(#55524d,0.9) 0%,rgba(#1e1916,0.9) 100%);
      ul{
        width: 1200px;padding-top:30px;display: flex;justify-content: space-between;margin: auto;
        li{
          margin-left: 40px;flex: 1;color: #fff;line-height: 30px;font-size:18px;
          img{width: 100%}
          &:first-child{
            margin-left: 0;
          }
          h3{
            padding-top:20px; color: #e1b261;font-size: 24px;padding-bottom: 6px;display: flex;align-items: center;
            label{
              display: inline-block;width: 140px;padding-bottom:20px;position: relative;margin-bottom: 10px;
              &:before{
                content: '';width: 140px;height: 2px;background-color:#e1b261;position: absolute;bottom:10px;left: 0;
              }
            }
          }
        }
      }

    }
  }
</style>
