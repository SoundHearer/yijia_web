<template>
  <div class="business-page">
    <x-banner :title="(lang.includes('en')?'CE Group ':'')+$t('public.pub004')" img="business/"
              :tip="$t('business.bus001')">
    </x-banner>
    <div class="business-introduce">
      <div class="introduce">
        <div class="introduce-title">
          <sub-title :title="$t('business.bus002')" color="#fff">
            <span>COMPANY PROFILE</span>
          </sub-title>
        </div>
        <img src="../assets/business/introduce1.png" alt="">
        <div class="introduce-text">
          <h5 v-html="$t('business.bus003')"></h5>
          <p>{{$t('business.bus004')}}</p>
        </div>
      </div>
    </div>
    <div class="business-deploy">
      <sub-title :title="$t('business.bus005')">
        <span>ASSET</span>ALLOCATION
      </sub-title>
      <div class="deploy-img">
        <template v-for="(item,index) in deployList">
          <div :key="index">
            <h4>
              <label>{{item.title}}</label>
              <span>{{item.enTitle}}</span>
            </h4>
            <p>
              <template v-for="(img,ind) in item.imgs">
                <img :key="index+''+ind" :src="img" alt="">
              </template>
            </p>
          </div>
        </template>
      </div>
    </div>
    <div class="business-fund">
      <x-title width="1200px">
        <div class="consult">
          {{lang.includes('en')?'基金补助':$t('public.pub021')}} <p><span style="color:#e1b261;">FUND</span><span>SUBSIDIES</span> </p>
        </div>
      </x-title>
      <div class="subsidies">
        <span></span>
        <div>
          <label>M</label>
          <h4>
            <p>{{$t('business.bus010')}}</p>
            <span>MAINLAND GOVERNMENT SUBSIDIES</span>
          </h4>
        </div>
        <span></span>
      </div>
      <div class="fund-line">
        <ul>
          <template v-for="(item,index) in linkList">
            <li :key="index">
              <h6>{{item.title}} - <span>{{item.subTitle}}</span><label>0{{index+1}}</label></h6>
              <p>{{item.des}}</p>
            </li>
          </template>
        </ul>
      </div>
      <div class="allowance">
        <ul>
          <li>
            <h4><label>{{$t('business.bus020')}}</label> <span>CORPORATE SUBSIDIES</span></h4>
            <div class="content" style="padding-top: 20px">
              <img class="allowance1-img" src="../assets/business/allowance1.png" alt="">
              <div class="allowance1-text">
                <h5 style="margin-top: 0">{{$t('business.bus021')}}<span>BUSINESS STARTUP SUBSIDY</span></h5>
                <p>{{$t('business.bus022')}}</p>
                <p>{{$t('business.bus023')}}</p>
                <h5>{{$t('business.bus024')}}<span>CORPORATE SOCIAL SECURITY SUBSIDIES</span></h5>
                <p>{{$t('business.bus025')}}</p>
                <h5>{{$t('business.bus026')}}<span>CORPORATE SITE SUBSIDIES</span></h5>
                <p>{{$t('business.bus027')}}</p>
                <p>{{$t('business.bus028')}}</p>
                <p>{{$t('business.bus029')}}</p>
                <h5>{{$t('business.bus030')}}<span>CORPORATE RECRUITMENT SUBSIDIES</span></h5>
                <p>{{$t('business.bus031')}}</p>
                <p>{{$t('business.bus032')}}</p>
                <p>{{$t('business.bus033')}}</p>
              </div>
            </div>
          </li>
          <li>
            <h4><label>{{$t('business.bus034')}}</label> <span>PERSONAL ALLOWANCE</span></h4>
            <div class="content" style="padding-top: 20px">
              <img class="allowance1-img" src="../assets/business/allowance2.png" alt="">
              <div class="allowance1-text">
                <h5 style="margin-top: 0">{{$t('business.bus035')}}<span>PERSONAL EMPLOYMENT SUBSIDY</span></h5>
                <p>{{$t('business.bus037')}}</p>
                <p>{{$t('business.bus038')}}</p>
                <p>{{$t('business.bus039')}}</p>
                <p>{{$t('business.bus040')}}</p>
                <h5>{{$t('business.bus041')}}<span>PERSONAL RENT SUBSIDY</span></h5>
                <p>{{$t('business.bus042')}}</p>
                <p>{{$t('business.bus043')}}</p>
                <p>{{$t('business.bus044')}}</p>
                <p>{{$t('business.bus045')}}</p>
                <h5>{{$t('business.bus046')}}<span>PERSONAL TRANSPORTATION ALLOWANCE</span></h5>
                <p>{{$t('business.bus047')}}</p>
              </div>
            </div>
          </li>
          <li>
            <h4><label>{{$t('business.bus048')}}</label> <span>SPECIAL PROJECT SUBSIDIES</span></h4>
            <div class="content" style="display: block">
              <h4>{{$t('business.bus049')}}</h4>
              <div class="ul">
                <template v-for="(item,index) in specialAllowanceList">
                  <div class="li" :key="index">
                    <img :src="item.img" alt="">
                    <h6>{{item.title}}</h6>
                    <p>{{item.des}}</p>
                  </div>
                </template>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="subsidies">
        <span></span>
        <div>
          <label>H</label>
          <h4>
            <p>{{$t('business.bus054')}}</p>
            <span>HONG KONG GOVERNMENT SUBSIDY</span>
          </h4>
        </div>
        <span></span>
      </div>
      <div class="allowance">
        <ul class="allowance-hong">
          <li>
            <h4><span>{{$t('business.bus055')}}</span><p>TVP FUND</p></h4>
            <div>
              <img src="../assets/business/allowance41.png" alt="">
              <p>{{$t('business.bus056')}}</p>
              <p>{{$t('business.bus057')}}<br>{{$t('business.bus036')}}</p>
              <p>{{$t('business.bus058')}}</p>
            </div>
          </li>
          <li>
            <h4><span>{{$t('business.bus059')}}</span><p>SME FUND</p></h4>
            <div>
              <img src="../assets/business/allowance42.png" alt="">
              <p>{{$t('business.bus060')}}</p>
              <p>{{$t('business.bus061')}}</p>
              <p>{{$t('business.bus062')}}</p>
            </div>
          </li>
          <li>
            <h4><span>{{$t('business.bus063')}}</span><p>EMF FUND</p></h4>
            <div>
              <img src="../assets/business/allowance43.png" alt="">
              <p>{{$t('business.bus064')}}</p>
              <p> {{$t('business.bus065')}}</p>
              <p>{{$t('business.bus066')}}</p>
            </div>
          </li>
          <li>
            <h4><span>{{$t('business.bus067')}}</span><p>BUD FUND</p></h4>
            <div>
              <img src="../assets/business/allowance44.png" alt="">
              <p>{{$t('business.bus068')}}</p>
              <p>{{$t('business.bus069')}}
                <span>{{$t('business.bus070')}}</span>
                <span>{{$t('business.bus071')}}</span>
                <span>{{$t('business.bus072')}}</span>
              </p>
              <p>{{$t('business.bus073')}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="fund-blank"></div>
      <div class="fund-form">
        <h3>{{lang.includes('en')?'向我们咨询':$t('business.bus074')}}</h3>
        <div>
          <p style="margin-right: 20px"><el-input v-model="fundForm.name" :placeholder="$t('business.bus075')"></el-input></p>
          <p><el-input v-model="fundForm.contactNumber" :placeholder="$t('business.bus076')"></el-input></p>
        </div>
        <div>
          <p style="margin-right: 20px"><el-input v-model="fundForm.email" :placeholder="$t('business.bus077')"></el-input></p>
          <p><el-input v-model="fundForm.company" :placeholder="$t('business.bus078')"></el-input></p>
        </div>
        <div>
          <p>
            <el-input v-model="fundForm.content" type="textarea" :rows="3" :placeholder="$t('business.bus079')"></el-input>
          </p>
        </div>
        <div @click="submitForm" class="button">{{lang.includes('en')?'Submit Information':$t('public.pub016')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import XTitle from './components/xtitle'
  import XBanner from './components/banner'
  import SubTitle from './components/sub-title'
  import {applyForm} from "../network/api";
  export default {
    name: "business",
    components:{
      SubTitle,XBanner,XTitle
    },
    data(){
      return{
        fundForm:{},
        lang : localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN",
        deployList:[
          {title:this.$t('business.bus006'),enTitle:'APPLICATION FOR HONG KONG AND MAINLAND SUBSIDIES',
            imgs:[require('../assets/business/deploy11.png'),require('../assets/business/deploy12.png'),require('../assets/business/deploy13.png')]
          },
          {title:this.$t('business.bus007'),enTitle:'INDUSTRIAL PROJECT INVESTMENT',
            imgs:[require('../assets/business/deploy21.png'),require('../assets/business/deploy22.png'),require('../assets/business/deploy23.png')]
          },
          {title:this.$t('business.bus008'),enTitle:'COMPANY AND SECRETARIAL SERVICES',
            imgs:[require('../assets/business/deploy31.png'),require('../assets/business/deploy32.png'),require('../assets/business/deploy33.png')]
          }
        ],
        linkList:[
          {title:this.$t('business.bus011'),subTitle:this.$t('business.bus012'),des:this.$t('business.bus013')},
          {title:this.$t('business.bus014'),subTitle:this.$t('business.bus015'),des:this.$t('business.bus016')},
          {title:this.$t('business.bus017'),subTitle:this.$t('business.bus018'),des:this.$t('business.bus019')},
        ],
        specialAllowanceList:[
          {title:this.$t('business.bus050'),des:'MODERN LOGISTICS INDUSTRY',img:require('../assets/business/allowance31.png')},
          {title:this.$t('business.bus051'),des:'INFORMATION SERVICE INDUSTRY',img:require('../assets/business/allowance32.png')},
          {title:this.$t('business.bus052'),des:'TECHNOLOGY SERVICE INDUSTRY',img:require('../assets/business/allowance33.png')},
          {title:this.$t('business.bus053'),des:'CULTURAL AND CREATIVE INDUSTRIES',img:require('../assets/business/allowance34.png')}
        ]
      }
    },
    methods:{
      async submitForm(){
        if(!this.fundForm.name){
          this.$message({
            message: '请填写您的联系方式！',
            type: 'warning'
          });
          return
        }
        if(!this.fundForm.contactNumber){
          this.$message({
            message: '请填写您的联系方式！',
            type: 'warning'
          });
          return
        }
        if(!this.fundForm.email){
          this.$message({
            message: '请填写您的邮箱！',
            type: 'warning'
          });
          return
        }
        if(!this.fundForm.company){
          this.$message({
            message: '请填写您的公司名称！',
            type: 'warning'
          });
          return
        }
        await applyForm({
          ...this.fundForm,
          msgType:'1'
        }).then((result) => {
          if(result.errno===0){
            this.$message.success(result.errmsg);
          }else{
            this.$message.error(result.errmsg);
          }
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .business-page{
    width: 100%;min-width: 1200px;
    .business-introduce{
      width: 100%;background: url("../assets/whrite-bg.png") no-repeat center;
      background-size: cover;padding: 60px 0;
      .introduce{
        width: 1200px;margin: auto;position: relative;padding-top:45px;display: flex;
        .introduce-title{
          width: 100%;position: absolute; top: 0;left: 0;z-index: 10;
        }
        .introduce-text{
          margin-left: 100px;	color: #333333;
          h5{
            font-size:26px;padding:60px 0 30px;font-weight: normal;
          }
          p{
            font-size:20px;line-height:40px;
          }
        }
      }
    }
    .business-deploy{
      width: 100%; background-image: linear-gradient(41deg,rgba(#66635e,0.9) 0%,rgba(#34302d,0.9) 100%);padding: 60px 0;box-sizing: border-box;
      .deploy-img{
        width: 1200px;margin:10px auto 0;
        h4{
          color: #e0b261;font-size:24px;margin-bottom: 10px;position: relative;padding-top:30px;
          label{
            display: inline-block;width: 420px;border-bottom: 20px ;font-size:36px;
            border-bottom: 2px solid #e0b261;padding-bottom: 5px;
          }
          span{
            position: absolute;left: 425px;bottom: -7px;
          }
        }
        p{
          width: 100%;display: flex;justify-content: space-between;
          img{
            width:360px;
          }
        }
      }
    }
    .business-fund{
      width: 100%;position: relative;padding: 60px 0;box-sizing: border-box;
      .consult{
        display: flex;justify-content: space-between;padding: 0 100px;
        p{
          span{
            display: block;height: 25px;line-height: 25px;
          }
        }
      }
      .subsidies{
        width: 900px;display: flex;margin:120px auto;align-items: center;
        >span{
          display: inline-block;width: 136px;height: 46px;
          background-image: linear-gradient(0deg,#e0b261 0%,#f6d49a 100%),linear-gradient(#e6a635, #e6a635);
          background-blend-mode: normal,normal;
        }
        >div{
          margin: 0 100px;position: relative;text-align: center;
          label{
            position: absolute;z-index: 0;font-size:225px;color: #e6a736;
            opacity: 0.13;top:-125px;left:83px;
          }
          h4{
            font-size: 20px;
            p{
              font-size: 30px;
            }
          }
        }
      }
      .fund-line{
        width: 1200px;height: 246px;background: url("../assets/business/line.png") no-repeat center;
        background-size: 1200px 246px;margin: auto;
        >ul{
          display: flex;padding-left:240px;padding-right: 200px;
          li{
            flex: 1;font-size: 12px;padding-top:6px;
            h6{
              font-size: 16px;margin-bottom:6px;padding-bottom: 6px;position: relative;
              &:before{
                position: absolute;bottom: 0;left: 0;content: '';width: 30px;height: 1px;
                background-color: #e6a635;
              }
              span{
                color: #e6a635;
              }
              label{
                position: absolute;z-index: 0;left: 0;opacity: 0.2;
                bottom: 6px;color: #e6a635;font-size: 59px;
              }
            }
            &:nth-of-type(2n){
              padding-top: 160px;padding-left: 20px;
            }
          }
        }
      }
      .allowance{
        width: 1200px;margin:100px auto 60px;
        >ul{
          li{
            width: 1200px;background-color: #ffffff;padding:40px 20px 40px 40px;margin-top:80px;
            box-shadow: 0 0 22px 2px rgba(0, 0, 0, 0.27);position: relative;box-sizing: border-box;
            >h4{
              position: absolute;font-size: 32px;top:-34px;left:25px;display: flex;align-items: center;
              label{
                display: inline-block;width: 270px;height: 60px;color: #fff;text-align: center;
                background-image:linear-gradient(0deg,#e0b261 0%,#f6d49a 100%),linear-gradient(#e6a635,#e6a635);
                background-blend-mode: normal,normal;border-radius: 32px;line-height: 60px;
              }
              span{
                display: inline-block;height: 60px;line-height: 36px;margin-left: 10px;
              }
            }
            .content{
              display: flex;
              .allowance1-img{margin-right: 40px;}
              .allowance1-text{
                color: #333;font-size: 14px;
                h5{
                  font-size: 20px;margin-top:28px;
                  span{
                    color: #e6a635;margin-left: 5px;
                  }
                }
                p{
                  line-height:20px;font-size: 12px;
                }
              }
              >h4{
                text-align: center;font-size: 20px;padding-bottom: 30px;
              }
              .ul{
                display: flex;overflow-x: hidden;padding: 0 30px;
                .li{
                  width: 221px;text-align: center;margin-left: 59px;
                  &:first-child{
                    margin-left: 0;
                  }
                  >h6{
                    font-size: 16px;margin:15px 0;
                  }
                  >p{
                    color: #e6a635;line-height: 24px;
                  }
                }
              }
            }
          }
        }
        .allowance-hong{
          display: flex;flex-flow: wrap;
          li{
            width: 550px;margin-right: 100px;padding: 38px;
            &:nth-of-type(2n){
              margin-right: 0;
            }
            &:nth-of-type(n+3){
              margin-top: 120px;
            }
            h4{
              display: block;top: -80px;left: 10px;font-size: 32px;
              span{
                height: 36px;margin-left: 0;color: #e6a635;
              }
            }
            >div{
              p{
                font-size: 14px;margin-top:20px;
              }
            }
          }
        }
      }
      .fund-blank{
        width: 100%;height:100px;background-blend-mode: normal,normal;margin:200px 0 160px;
        background-image: linear-gradient(0deg,#e0b261 0%,#f6d49a 100%), linear-gradient(#e6a635,#e6a635);
      }
      .fund-form{
        width:858px;position: absolute;bottom:80px;left: calc(50% - 400px);z-index: 10;
        padding:30px 100px 40px;box-sizing: border-box;background-color: #fff;
        box-shadow: 0 0 6px #999;border-radius:5px;
        h3{
          text-align: center;font-size: 32px;padding-bottom:10px;
        }
        div{
          width: 100%;display: flex;justify-content:space-around;
          p{
            margin-top: 10px;flex: 1;
          }
        }
        .button{
          width:260px;height:50px;line-height: 50px;text-align: center;color: #fff;cursor: pointer;
          background-image: linear-gradient(0deg,#e0b261 0%,#f6d49a 100%),linear-gradient(#2198de,#2198de);
          background-blend-mode:normal,normal;font-size: 22px;margin:20px auto 0;cursor: pointer;
        }
      }
    }
  }
</style>
