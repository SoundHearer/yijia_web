<template>
  <div class="culture-page">
    <x-banner :title="(lang.includes('en')?'CE Group ':'')+$t('public.pub005')" img="culture/" :tip="$t('culture.cul001')"></x-banner>
    <div class="culture-about">
      <h3>ABOUT US</h3>
      <div>
        <h4>{{lang.includes('en')?'关于壹嘉文化':$t('culture.cul002')}}</h4>
        <p v-html="$t('culture.cul003')"></p>
      </div>
    </div>
    <div class="culture-server">
      <div class="server">
        <sub-title :title="$t('culture.cul004')" color="#e6a635">
          <span style="margin-right:5px">SERVICE</span>AREA
        </sub-title>
        <p class="sub-title-tip">{{$t('culture.cul005')}}</p>
        <ul>
          <template v-for="(item,index) in serverList">
            <li :key="index">
              <img :src="item.img" alt="" />
              <div>
                <h5>{{item.title}}</h5>
                <p>{{item.des}}</p>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="culture-idea">
      <div class="content">
        <div>
          <h5>
            <span>OUR</span>
            <label>{{$t('culture.cul022')}}</label>
          </h5>
          <p>PHILOSOPHY</p>
        </div>
        <ul>
          <template v-for="(item,index) in idealList">
            <li :key="index" >
              <h4>
                <img :src="item.icon" alt="">
                <label>{{item.title}}</label>
              </h4>
              <p>{{item.content}}</p>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="culture-case">
      <sub-title :title="lang.includes('en')?'精品案例':$t('public.pub026')">
        <span>BOUTIQUE  </span>CASE
      </sub-title>
      <div class="img-list">
        <div class="imgs">
          <template v-for="(item,index) in caseList">
            <div class="item" :key="index" >
              <img :src="item.img" alt="">
              <div>
                <h3>{{item.title}}</h3>
                <p>{{item.des}}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="culture-start">
      <x-title width="1200px">
        {{$t('public.pub027')}}<span class="span">CO-STAR</span>
      </x-title>
      <ul>
        <template v-for="(item,index) in startList">
          <li :key="index">
            <img :src="item.img" alt="">
            <div>
              <h5>{{item.name}} <span v-if="item.nation">({{item.nation}})</span></h5>
              <p>{{item.type}}</p>
            </div>
          </li>
        </template>
      </ul>
      <div class="culture-button">{{$t('culture.cul073')}}</div>
    </div>
  </div>
</template>

<script>
  import XTitle from './components/xtitle'
  import XBanner from './components/banner'
  import SubTitle from './components/sub-title'
  export default {
    name: "culture",
    components:{
      SubTitle,XBanner,XTitle
    },
    data(){
      return{
        lang : localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
        serverList:[
          {img:require('../assets/culture/server1.png'),title:this.$t('culture.cul006'),des:'NEW MEDIA OPERATIONS'},
          {img:require('../assets/culture/server2.png'),title:this.$t('culture.cul007'),des:'SELF-MEDIA OPERATION'},
          {img:require('../assets/culture/server3.png'),title:this.$t('culture.cul008'),des:'ONLINE MARKETING AT HOME AND ABROAD'},
          {img:require('../assets/culture/server4.png'),title:this.$t('culture.cul009'),des:'BRAND IP SHAPING'},
          {img:require('../assets/culture/server5.png'),title:this.$t('culture.cul010'),des:'EVENT PLANNING'},
          {img:require('../assets/culture/server6.png'),title:this.$t('culture.cul011'),des:'ACTIVITY DESIGN'},
          {img:require('../assets/culture/server7.png'),title:this.$t('culture.cul012'),des:'ACTIVITY LANDING'},
          {img:require('../assets/culture/server8.png'),title:this.$t('culture.cul013'),des:'ACTIVITY EXECUTION '},
          {img:require('../assets/culture/server9.png'),title:this.$t('culture.cul014'),des:'ENTERTAINMENT'},
          {img:require('../assets/culture/server10.png'),title:this.$t('culture.cul015'),des:'ARTIST COORDINATION'},
          {img:require('../assets/culture/server11.png'),title:this.$t('culture.cul016'),des:'LIVE STREAMING'},
          {img:require('../assets/culture/server12.png'),title:this.$t('culture.cul017'),des:'CONCERT & MUSIC FESTIVAL'},
          {img:require('../assets/culture/server13.png'),title:this.$t('culture.cul018'),des:'ADVERTISEMENT PLAN'},
          {img:require('../assets/culture/server14.png'),title:this.$t('culture.cul019'),des:'ADVERTISING SHOOTING & POST PRODUCTION'},
          {img:require('../assets/culture/server15.png'),title:this.$t('culture.cul020'),des:'PRINT ADS'},
          {img:require('../assets/culture/server16.png'),title:this.$t('culture.cul021'),des:'PACKAGE DESIGN'},
        ],
        idealList:[
          {
            icon:require('../assets/culture/ideaS.png'),title:this.$t('culture.cul023'),
            content:this.$t('culture.cul024')
          },
          {
            icon:require('../assets/culture/ideaR.png'),title:this.$t('culture.cul025'),
            content:this.$t('culture.cul026')
          },
          {
            icon:require('../assets/culture/ideaE.png'),title:this.$t('culture.cul027'),
            content:this.$t('culture.cul028')
          }
        ],
        caseList:[
          {
            img:require('../assets/culture/caseA1.png'),title:this.$t('culture.cul029'),des:this.$t('culture.cul030')
          },{
            img:require('../assets/culture/caseA2.png'),title:this.$t('culture.cul031'),des:this.$t('culture.cul032')
          },{
            img:require('../assets/culture/caseA3.png'),title:this.$t('culture.cul033'),des:this.$t('culture.cul034')
          },{
            img:require('../assets/culture/caseA5.png'),title:this.$t('culture.cul035'),des:this.$t('culture.cul036')
          },{
            img:require('../assets/culture/caseA4.png'),title:this.$t('culture.cul037'),des:this.$t('culture.cul038')
          },{
            img:require('../assets/culture/caseA6.png'),title:this.$t('culture.cul039'),des:this.$t('culture.cul040')
          },{
            img:require('../assets/culture/caseA7.png'),title:this.$t('culture.cul041'),des:this.$t('culture.cul042')
          },{
            img:require('../assets/culture/caseA8.png'),title:this.$t('culture.cul043'),des:this.$t('culture.cul044')
          },{
            img:require('../assets/culture/caseA10.png'),title:this.$t('culture.cul045'),des:this.$t('culture.cul046')
          },{
            img:require('../assets/culture/caseA9.png'),title:this.$t('culture.cul047'),des:this.$t('culture.cul048')
          }
        ],
        startList:[
          {img:require('../assets/culture/start1.png'),name:this.$t('culture.cul049'),
            nation:this.$t('public.pub033'),type:this.$t('culture.cul050')},
          {img:require('../assets/culture/start2.png'),name:this.$t('culture.cul051'),
            nation:this.$t('public.pub033'),type:this.$t('culture.cul052')},
          {img:require('../assets/culture/start3.png'),name:this.$t('culture.cul053'),
            nation:this.$t('public.pub033'),type:this.$t('culture.cul054')},
          {img:require('../assets/culture/start4.png'),name:this.$t('culture.cul055'),
            nation:this.$t('public.pub033'),type:this.$t('culture.cul056')},
          {img:require('../assets/culture/start5.png'),name:this.$t('culture.cul057'),
            nation:this.$t('public.pub033'),type:this.$t('culture.cul058')},
          {img:require('../assets/culture/start6.png'),name:this.$t('culture.cul059'),
            nation:this.$t('public.pub033'),type:this.$t('culture.cul060')},
          {img:require('../assets/culture/start7.png'),name:this.$t('culture.cul061'),
            nation:this.$t('public.pub034'),type:this.$t('culture.cul062')},
          {img:require('../assets/culture/start8.png'),name:this.$t('culture.cul063'),
            nation:'',type:this.$t('culture.cul064')},
          {img:require('../assets/culture/start9.png'),name:this.$t('culture.cul065'),
            nation:'',type:this.$t('culture.cul066')},
          {img:require('../assets/culture/start10.png'),name:this.$t('culture.cul067'),
            nation:'',type:this.$t('culture.cul068')},
          {img:require('../assets/culture/start11.png'),name:this.$t('culture.cul069'),
            nation:'',type:this.$t('culture.cul070')},
          {img:require('../assets/culture/start12.png'),name:this.$t('culture.cul071'),
            nation:'',type:this.$t('culture.cul072')}
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .culture-page{
    width: 100%;
    .culture-about{
      width: 100%;min-width: 1200px;background:url("../assets/culture/about-bg.png") no-repeat;
      background-size: cover;padding: 120px 0 180px;position: relative;text-align: center;
      h3{
        color: #e1b261;font-size: 78px;width: 100%;text-align: center;position: absolute;
        opacity: 0.53;left: 0;top: 100px;z-index: 0;font-weight: normal;
      }
      >div{
        width: 100%;margin-top:50px;position: relative;z-index: 2;
        h4{
          font-size: 36px;color: #333333;font-weight: normal;
        }
        p{
          font-size: 20px;margin-top:40px;line-height:40px;
        }
      }
    }
    .culture-server{
      width: 100%;min-width: 1200px;background-image: linear-gradient(131deg,rgba(#55524d,0.9) 0%,rgba(#1e1916,0.9) 100%);
      .server{
        width: 1200px;margin: auto;padding: 60px 0;
        ul{
          width: 100%;display: flex;margin:40px auto;flex-flow: wrap;
          li{
            width:calc(25% - 15px);margin-left: 20px;margin-top:20px;
            &:nth-of-type(4n+1){margin-left: 0;}
            >div{
              color: #fff;padding-left:20px;position: relative;margin-top: 10px;
              &:before{
                width: 5px;height: 40px;content: '';position: absolute;left: 0;top:5px;
                background-image: linear-gradient(0deg, #e0b261 0%, #f6d49a 100%), linear-gradient(#2400ff, #2400ff);
                background-blend-mode: normal, normal;
              }
              h5{
                font-size: 20px;margin-bottom: 6px;
              }
              p{
                font-size: 14px;
              }
            }
          }
        }
      }
      .sub-title-tip{
        font-size: 18px;color: #fff;padding-left:80px;padding-top:5px;position: relative;
        &:before{
          width:75px;height:1px;background: rgba(#fff,0.6);content: '';position: absolute;
          left: 0;bottom: 10px;
        }
      }
    }
    .culture-idea{
      width: 100%;min-width: 1200px;background:url("../assets/culture/about-bg.png") no-repeat;
      background-size: cover;padding-bottom:100px;
      .content{
        width: 1200px;margin: auto;position: relative;padding-top: 120px;
        div{
          position: absolute;z-index: 3;left:20px;top: 0;display: flex;letter-spacing: 2px;
          h5{
            width: 200px;height:200px;background-image: linear-gradient(0deg, #dfb15f 0%, #ffdda2 100%);color: #fff;
            padding-top: 40px;box-sizing: border-box;
            label{
              display: block;font-size:28px;text-align: center;margin-top:50px;
            }
            span{
              display: block;font-size:36px;text-align: right;
            }
          }
          p{
            padding-top: 40px;font-size:36px;padding-left: 5px;
          }
        }
        ul{
          width: 100%; box-shadow: 0 0 22px 2px rgba(0, 0, 0, 0.27);background-color: #fff;
          padding-top: 120px;box-sizing: border-box;
          li{
            display: flex;padding-left: 50px;align-items: center;padding-bottom: 40px;padding-right: 20px;
            h4{
              font-size:24px;color: #232449;position: relative;width:200px;
              img{
                width: 48px;
              }
              label{
                position: absolute;left:48px;bottom:10px;
              }
            }
            p{
              font-family: SourceHanSansCN-Regular;font-size: 18px;color: #333333;padding-top: 20px;flex: 1;
            }
          }
        }
      }
    }
    .culture-case{
      width: 100%;min-width: 1200px;padding: 120px 0;
      background-image: linear-gradient(131deg,rgba(#55524d,0.9) 0%,rgba(#1e1916,0.9) 100%);
      .img-list{
        width: 1200px;margin: auto;padding-top: 30px;
        .imgs{
          width: 100%;display: flex;flex-wrap: wrap;
          justify-content: space-between;
          .item{
            width: 210px;height: 190px;position: relative;margin-top:30px;
            img{
              width: 100%;height: 100%;
            }
            >div{
              width: 210px;height: 190px;background-color: rgba(0,0,0,0.9);display: none;
              position: absolute;left: 0;top: 0;z-index: 10;color: #fff;text-align: center;
              padding-top:60px;box-sizing: border-box;font-size: 14px;
              h3{
                font-size: 18px;padding-bottom:15px;position: relative;margin-bottom: 10px;
                &:before{
                  content: '';width:110px;height: 2px;background-color: #fff;left:50px;bottom: 0;position: absolute;
                }
              }
            }
            &:hover div{
              display: block;
            }
          }
        }
      }
    }
    .culture-start{
      width: 100%;min-width: 1200px;position: relative;padding:60px 0;
      .span{
        color: #e0b364;margin-left:20px;
      }
      ul{
        width:1200px;display: flex;margin:40px auto;flex-flow: wrap;padding-bottom:80px;
        li{
          width: 245px;height: 300px;margin-left:73px;margin-top:20px;position: relative;
          &:nth-of-type(4n+1){margin-left: 0;}background-color: #fff;
          box-shadow: 0 0 22px 2px rgba(0, 0, 0, 0.27);margin-bottom:40px;
          img{
            width: 225px;height: 225px;margin:5px 10px;
          }
          >div{
            position: absolute;z-index: 10;width: 100%;left:10px;bottom:8px;text-align: left;
            h5{
              font-size:16px;padding-bottom: 6px;font-weight: normal;
              span{
                color: #939393;font-size: 12px;
              }
            }
            p{
              font-size: 12px;color: #828282;position: relative;padding-top: 4px;
              &:before{
                content:'';width: 43px;height:1px;background-color: #949494;
                left: 0;top: 0;z-index: 11;position: absolute;
              }
            }
          }
        }
      }
    }
    .culture-button{
      height:50px;margin: auto;line-height: 50px;text-align: center;position: absolute;
      background-image: linear-gradient(0deg,#e0b261 0%,#f6d49a 100%), linear-gradient(#e6a635, #e6a635);
      background-blend-mode: normal,normal;font-size: 18px;font-weight: bold;padding: 0 30px;
      border-radius: 32px;color: #fff;bottom:60px;left: calc(50% - 135px);cursor: pointer;
    }
  }
</style>
