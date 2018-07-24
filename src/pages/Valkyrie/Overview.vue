<template>
  <div class="overview">
    <div class="dataWrap" v-if="overview">
      <!-- 角色基本信息开始 -->
      <RoleName :armorData="armorData" :armorName="armorData.armorName"></RoleName>
      <div class="basic">
        <div class="roleImage_large">
          <img :src="HOST + overview.armorImageUrl" v-if="overview.armorImageUrl">
        </div>
        <div class="roleMes">
          <div class="title">初始：<span class="icon" :class="'icon-'+overview.initialLevel"></span></div>
          <div class="title">定位：<span class="text">{{overview.armorPosition}}</span></div>
          <div class="title getway">获得方式：
            <p class="text" v-for="(item,index) in overview.getWay" :key="index">{{item}}</p>
          </div>
        </div>
      </div>
      <div class="basicProper" ref="basicProper"></div>
      <!-- 角色基本信息 结束 -->

      <!-- 优缺点 开始 -->
      <div class="advantage" v-if="overview.advantage || overview.disadvantage">
        <BlockTitle title="优缺点" :icon="1"></BlockTitle>
        <div class="advantageItem">
          <div class="title">优势</div>
          <div class="description">{{overview.advantage}}</div>
        </div>
        <div class="advantageItem">
          <div class="title">劣势</div>
          <div class="description">{{overview.disadvantage}}</div>
        </div>
      </div>
      <!-- 优缺点 结束 -->

      <!-- 适用场景 开始 -->
      <div class="applicableScene" v-if="overview.applicableScene && overview.applicableScene.length > 0">
        <BlockTitle title="适用场景" :icon="1"></BlockTitle>
        <div class="applicableSceneItem" v-for="(item,index) in overview.applicableScene" :key="index">
          <FitLineTitle :fitLineTitle="item.sceneName" :grade="item.fitnessLevel"></FitLineTitle>
          <div class="description">{{item.sceneText}}</div>
        </div>
      </div>
      <!-- 适用场景 结束 -->

      <!-- 角色皮肤 开始 -->
      <div class="roleSkin">
        <BlockTitle title="角色皮肤" :icon="1"></BlockTitle>
        <div class="roleSkinWrap">
          <div class="roleSkinScroll" v-if="this.overview.roleSkin" :style="'width:' + this.overview.roleSkin.length * 3.68 + 'rem'">
            <div class="roleSkinItem" v-for="(item,index) in overview.roleSkin" :key="index">
              <img :src="HOST + item.skinImageUrl" alt="">
              <div class="name">{{item.skinName}}</div>
              <Star :star="item.skinStar"></Star>
              <div class="sourse">{{item.skinGetWay}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 角色皮肤 结束 -->

      <!-- 宿舍形象 开始 -->
      <div class="dormitoryImage" v-if="overview.dormitoryImage && overview.dormitoryImageQ">
        <BlockTitle title="宿舍形象" :icon="1"></BlockTitle>
        <div class="dormitoryImageWrap">
          <div class="imageLarge">
            <img :src="HOST + overview.dormitoryImage" alt="" v-if="overview.dormitoryImage">
          </div>
          <div class="icon">
            <img src="../../assets/images/dormitoryImageIcon.png" alt="">
          </div>
          <div class="imageQ">
            <img :src="HOST + overview.dormitoryImageQ" alt="" v-if="overview.dormitoryImageQ">
            <h2>Q版头像</h2>
          </div>
        </div>
      </div>
      <!-- 宿舍形象 结束 -->

      <!-- 角色起源 开始 -->
      <div class="roleOrigin">
        <BlockTitle title="角色起源" :icon="1"></BlockTitle>
        <div class="roleOriginWrap">
          <RoleName
          :armorData="armorData"
          ></RoleName>
          <h4 class="roleDescription" v-if="overview.armorStartVersion && overview.armorStartVersionName">
            <span class="version">{{overview.armorStartVersion}}</span>{{overview.armorStartVersionName}}版本登场！
          </h4>
          <div class="roleOriginItem" v-if="overview.appearStory">
            <h2>角色出场故事</h2>
            <p>{{overview.appearStory}}</p>
          </div>
          <div class="roleOriginItem" v-if="overview.originStory">
            <h2>角色起源故事</h2>
            <p>{{overview.originStory}}</p>
          </div>
          <div class="roleOriginListItem">
            <h2>其他装甲</h2>
            <div class="armorList">
              <div class="armorListWrap" v-if="this.overview.anotherArmor" :style="{overflowX: this.overview.anotherArmor.length > 3 ? 'auto' : 'hidden'}">
                <div class="armorListScroll" :style="{width: this.overview.anotherArmor.length * 2.64 + 'rem'}">
                  <div class="listItem" v-for="(item,index) in overview.anotherArmor" :key="index">
                    <img :src="HOST + item.armorImageUrl" alt="">
                    <span>{{item.armorName}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="roleOriginListItem">
            <h2>相关人物</h2>
            <div class="roleList">
              <div class="listItem" v-for="(item,index) in overview.relatedRole" :key="index">
                <img :src="HOST + item.armorImageUrl" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 角色起源 结束 -->
    </div>
    <NoData v-else></NoData>
  </div>
</template>

<script>
import RoleName from '@/components/Valkyrie/RoleName'
import BlockTitle from '@/components/BlockTitle'
import Star from '@/components/Star'
import FitLineTitle from '@/components/Valkyrie/FitLineTitle'
import NoData from '@/components/NoData'
import router from '@/router'
export default {
  name: 'Overview',
  data () {
    return {
      overviewData: {},
      option: {
        title: {
          text: ''
        },
        tooltip: {},
        radar: {
          startAngle: 60,
          name: {
            textStyle: {
              color: '#000'
            }
          },
          indicator: [
            {name: '爆发', max: 10},
            {name: '输出', max: 10},
            {name: '控制', max: 10},
            {name: '上手', max: 10},
            {name: '辅助', max: 10},
            {name: '生存', max: 10}
          ]
        },
        series: [{
          name: '女武神属性',
          type: 'radar',
          areaStyle: {color: '#ffb22b'},
          lineStyle: {color: '#ffb22b'},
          itemStyle: {color: '#ffb22b'},
          data: [
            {
              value: [8, 6, 2, 4, 10, 6],
              name: '女武神属性'
            }
          ]
        }]
      }
    }
  },
  props: {
    armorData: {
      type: Object
    }
  },
  computed: {
    overview: function () {
      return this.overviewData
    }
  },
  watch: {
    armorData: {
      handler (newValue, oldValue) {
        this._initOverview()
      },
      deep: true
    }
  },
  created () {
    this._initOverview()
  },
  methods: {
    // 初始化概览信息
    _initOverview () {
      if (this.armorData.armorId) {
        // console.log('角色id:' + this.armorData.armorId);
      } else {
        router.push({ path: '/' })
        return
      }
      this.$http.get(this.HOST + '/Wiki/Valkyrja/Overview/' + this.armorData.armorId,
        {
          before (request) {
            if (this.previousRequest) {
              this.previousRequest.abort()
            }
            this.previousRequest = request
          }
        })
        .then(response => {
          this.overviewData = Object.assign({}, this.overviewData, JSON.parse(response.data))
          this._initEcharts(this.overview.roleAttr)
        })
        .catch(error => {
          console.log(error)
          router.push({ path: '/404' })
        })
    },
    // 初始化图表
    _initEcharts (roleAttr) {
      var myChart = this.$echarts.init(this.$refs.basicProper)
      var attr = []
      attr.push(roleAttr.atk)
      attr.push(roleAttr.dps)
      attr.push(roleAttr.cont)
      attr.push(roleAttr.diff)
      attr.push(roleAttr.aid)
      attr.push(roleAttr.sur)
      this.option.series[0].data[0].value = attr
      myChart.setOption(this.option)
    }
  },
  components: {
    RoleName,
    BlockTitle,
    Star,
    FitLineTitle,
    NoData,
    router
  }
}
</script>

<style scoped lang="scss">
.overview {
  .basic {
    display: flex;
    margin-top: 0.16rem;
    .roleImage_large {
      width: 5.813rem;
      img {
        width: 5.813rem;
      }
    }
    .roleMes {
      flex: 1;
      .title {
        line-height: 0.533rem;
        font-size: 0.32rem;
        color: #4d4d4d;
        font-weight: bold;
        &.getway {
          overflow-x: hidden;
          overflow-y: auto;
          height: 1.599rem;
        }
        &:nth-child(1) {
          margin-top: 0.667rem;
        }
        &:nth-child(3) {
          margin-top: 0.667rem;
        }
        .text {
          color: #000;
        }
        .icon {
          display: inline-block;
          vertical-align: middle;
          width: 1rem;
          height: 0.64rem;
          margin-top: -0.2rem;
          background: url("../../assets/images/icon-s.png") no-repeat;
          background-size: auto 0.64rem;
          &.icon-B {
            background: url("../../assets/images/icon-b.png") no-repeat;
            background-size: auto 0.64rem;
          }
          &.icon-A {
            background: url("../../assets/images/icon-a.png") no-repeat;
            background-size: auto 0.64rem;
          }
          &.icon-S {
            background: url("../../assets/images/icon-s.png") no-repeat;
            background-size: auto 0.64rem;
          }
          &.icon-SS {
            background: url("../../assets/images/icon-ss.png") no-repeat;
            background-size: auto 0.64rem;
          }
          &.icon-SSS {
            background: url("../../assets/images/icon-sss.png") no-repeat;
            background-size: auto 0.64rem;
          }
        }
      }
    }
  }
  .basicProper {
    width: 7.467rem;
    height: 6.667rem;
    margin: 1.067rem auto;
  }
  .advantage {
    .advantageItem {
      margin: 0.96rem auto;
      display: flex;
      width: 7.867rem;
      .title {
        width: 1.867rem;
        font-size: 0.64rem;
        font-weight: bold;
      }
      .description {
        flex: 1;
        line-height: 0.48rem;
        color: #4d4d4d;
        font-size: 0.32rem;
      }
    }
  }
  .applicableScene {
    .applicableSceneItem {
      margin: 0.96rem auto;
      width: 7.867rem;
      .description {
        line-height: 0.48rem;
        color: #4d4d4d;
        margin-bottom: 0.373rem;
        font-size: 0.32rem;
      }
    }
  }
  .roleSkin {
    .roleSkinWrap {
      width: 9.333rem;
      height: 4.853rem;
      margin: 0.96rem auto;
      overflow-y: hidden;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 5px;
      &::-webkit-scrollbar {
        display: none;
      }
      .roleSkinScroll {
        width: 20rem;
        height: 4.853rem;
        overflow: hidden;
        padding-bottom: 5px;
        display: flex;
        .roleSkinItem {
          flex: 1;
          width: 3.36rem;
          height: 4.853rem;
          border: 1px solid #cccccc;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 0.32rem;
          img {
            width: 2.4rem;
            height: 2.4rem;
            border-radius: 5px;
            margin-top: 0.32rem;
          }
          .name {
            font-size: 0.347rem;
            color: #1c2b42;
            font-weight: bold;
            margin-top: 0.4rem;
            margin-bottom: 0.08rem;
          }
          .sourse {
            font-size: 0.32rem;
            margin-top: 0.107rem;
          }
        }
      }
    }
  }
  .dormitoryImage {
    .dormitoryImageWrap {
      margin: 0.96rem auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .imageLarge img {
        width: 2.8rem;
        height: 6.133rem;
        margin-right: 0.267rem;
      }
      .icon img {
        width: 0.52rem;
        height: 0.52rem;
      }
      .imageQ {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 0.853rem;
        img {
          width: 1.067rem;
          height: 1.387rem;
        }
        h2 {
          font-size: 0.32rem;
          color: #666666;
          font-weight: bold;
        }
      }
    }
  }
  .roleOrigin {
    .roleOriginWrap {
      width: 7.84rem;
      margin: 0 auto;
      .roleDescription {
        font-size: 0.32rem;
        text-align: center;
        margin-bottom: 0.853rem;
        .version {
          color: #ffb434;
        }
      }
      .roleOriginItem {
        margin-top: 0.587rem;
        h2 {
          font-size: 0.427rem;
          font-weight: bold;
          margin-bottom: 0.347rem;
        }
        p {
          font-size: 0.32rem;
          line-height: 0.48rem;
          color: #666;
        }
      }
      .roleOriginListItem {
        margin-top: 0.587rem;
        h2 {
          font-size: 0.427rem;
          font-weight: bold;
          margin-bottom: 0.587rem;
        }
        .armorList {
          .armorListWrap {
            overflow-y: hidden;
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 5px;
            &::-webkit-scrollbar {
              display: none;
            }
            .armorListScroll {
              display: flex;
              width: 20rem;
              height: 3.253rem;
              overflow: hidden;
              padding-bottom: 5px;
              .listItem {
                width: 2.48rem;
                height: 3.253rem;
                box-sizing: border-box;
                border: 1px solid #cccccc;
                border-radius: 5px;
                margin-right: 0.16rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img {
                  width: 1.6rem;
                }
                span {
                  font-size: 0.32rem;
                  color: #1c2b42;
                  margin-top: 0.187rem;
                }
              }
            }
          }
        }
        .roleList {
          width: 6.4rem;
          margin: 0 auto;
          font-size: 0;
          .listItem {
            display: inline-block;
            width: 0.96rem;
            margin-right: 0.64rem;
            margin-bottom: 0.2rem;
            img {
              width: 0.96rem;
            }
          }
        }
      }
    }
  }
}
</style>
