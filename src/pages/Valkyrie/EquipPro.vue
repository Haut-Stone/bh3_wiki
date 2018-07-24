<template>
  <div class="equipPro">
    <div class="dataWrap" v-if="equipPro && equipPro.length > 0">
      <RoleName :armorData="armorData" :armorName="armorData.armorName"></RoleName>
      <!-- 配装列表 开始 -->
      <div class="equipmentList">
        <div class="listItem" v-for="(item,index) in equipPro" :key="index">
          <div class="listTitle">
            <img src="../../assets/images/ItemType_Stigmata1.png" alt="">
            <span>{{item.proName}}</span>
            <img src="../../assets/images/ItemType_Stigmata1.png" alt="">
          </div>
          <div class="listContent">
            <img :src="HOST + item.arm.imageUrl" alt="">
            <img :src="HOST + imageItem.imageUrl" v-for="(imageItem, imageIndex) in item.relicsMark.list" :key="imageIndex">
            <button @click="moveTo(index)">查看</button>
          </div>
        </div>
      </div>
      <!-- 配装列表 结束 -->

      <!-- 配装详情 开始 -->
      <div class="equipmentDetail">
        <div class="detailItem" :ref="'item'+index" v-for="(item,index) in equipPro" :key="index">
          <BlockTitle :title="item.proName" :icon="2" :rightTxt="item.proScene"></BlockTitle>
          <div class="itemContent">
            <div class="equipWrap arms">
              <div class="equipTitle">
                <span class="type">武器</span>
                <span class="name">{{item.arm.name}}</span>
                <span class="weight">负重</span>
                <span class="weightNum">{{item.arm.weight}}</span>
                <span class="level" v-if="item.arm.level">等级</span>
                <span class="levelNum">{{item.arm.level}}</span>
              </div>
              <div class="equipAttr">
                <div class="equipImage">
                  <img :src="HOST + item.arm.imageUrl" alt="">
                  <Star :star="item.arm.star"></Star>
                </div>
                <div class="attr">
                  <p>生命<span>{{item.arm.attr.life}}</span></p>
                  <p>攻击<span>{{item.arm.attr.atk}}</span></p>
                  <p>防御<span>{{item.arm.attr.defense}}</span></p>
                  <p>会心<span>{{item.arm.attr.hit}}</span></p>
                </div>
              </div>
              <div class="equipSkill">
                <div class="equipSkillItem" v-for="(armSkill,armSkillIndex) in item.arm.skill" :key="armSkillIndex">
                  <span>{{armSkill.skillIntro}}</span>
                </div>
              </div>
              <div class="text-box dark">
                <div class="getWayTitle">
                  <span class="title">推荐理由</span>
                </div>
                <p>{{item.arm.recommend}}</p>
              </div>
            </div>
            <div class="equipWrap clothes">
              <div class="equipTitle">
                <span class="type">圣痕</span>
                <span class="name">{{item.relicsMark.name?item.relicsMark.name:'散搭'}}</span>
                <span class="weight">负重</span>
                <span class="weightNum">{{item.relicsMark.weight}}</span>
                <span class="level" v-if="item.relicsMark.level">等级</span>
                <span class="levelNum">{{item.relicsMark.level}}</span>
              </div>
              <div class="clothesItem" v-for="(clothesItem,clothesIndex) in item.relicsMark.list" :key="clothesIndex">
                <p class="equipName">{{clothesItem.name}}</p>
                <div class="equipAttr">
                  <div class="equipImage">
                    <img :src="HOST + clothesItem.imageUrl" alt="">
                    <Star :star="5"></Star>
                  </div>
                  <div class="attr">
                    <p>生命<span>{{clothesItem.attr.life}}</span></p>
                    <p>攻击<span>{{clothesItem.attr.atk}}</span></p>
                    <p>防御<span>{{clothesItem.attr.defense}}</span></p>
                    <p>会心<span>{{clothesItem.attr.hit}}</span></p>
                  </div>
                </div>
                <div class="equipSkill">
                  <div class="equipSkillItem" v-for="(skillItem,skillIndex) in clothesItem.skill" :key="skillIndex">
                    <span>{{skillItem.skillIntro}}</span>
                  </div>
                </div>
              </div>
              <div class="text-box dark">
                <div class="getWayTitle">
                  <span class="title">推荐理由</span>
                </div>
                <p>{{item.relicsMark.recommend}}</p>
              </div>
              <div class="text-box light" v-if="item.relicsMark.suitEffect">
                <p class="effect" v-if="item.relicsMark.suitEffect.two.name"><span>{{item.relicsMark.suitEffect.two.name}} </span><span>2件：</span>{{item.relicsMark.suitEffect.two.intro}}</p>
                <p class="effect" v-if="item.relicsMark.suitEffect.three.name"><span>{{item.relicsMark.suitEffect.three.name}}  </span><span>3件：</span>{{item.relicsMark.suitEffect.three.intro}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 配装详情 结束 -->
    </div>
    <NoData v-else></NoData>
  </div>
</template>

<script>
import RoleName from '@/components/Valkyrie/RoleName'
import BlockTitle from '@/components/BlockTitle'
import Star from '@/components/Star'
import NoData from '@/components/NoData'
import router from '@/router/index'

export default {
  name: 'EquipPro',
  props: {
    armorData: {
      type: Object
    }
  },
  data () {
    return {
      equipProData: {}
    }
  },
  computed: {
    equipPro: function () {
      return this.equipProData.equipPro
    }
  },
  watch: {
    armorData: {
      handler (newValue, oldValue) {
        this._initEquipPro()
      },
      deep: true
    }
  },
  created () {
    this._initEquipPro()
  },
  methods: {
    // 初始化配装信息
    _initEquipPro () {
      if (this.armorData.armorId) {
        // console.log('角色id:'+this.armorData.armorId);
      } else {
        router.push({ path: '/' })
        return
      }
      this.$http.get(this.HOST + '/Wiki/Valkyrja/Equipment/' + this.armorData.armorId, {
        before (request) {
          if (this.previousRequest) {
            this.previousRequest.abort()
          }
          this.previousRequest = request
        }
      })
        .then(response => {
          this.equipProData = Object.assign({}, this.equipProData, JSON.parse(response.data))
          console.log(this.equipProData)
        })
        .catch(error => {
          console.log(error)
          router.push({ path: '/404' })
        })
    },
    moveTo (index) {
      document.documentElement.scrollTop =
        this.$refs['item' + index][0].offsetTop - 50
      document.body.scrollTop = this.$refs['item' + index][0].offsetTop - 50
    }
  },
  components: {
    RoleName,
    BlockTitle,
    Star,
    NoData
  }
}
</script>

<style scoped lang="scss">
@import "../../common/scss/common";

.equipPro {
  .equipmentList {
    .listItem {
      border: 1px solid #d8d9da;
      border-radius: 6px;
      margin: 0.32rem 0.32rem 0;
      width: auto;
      padding: 0.293rem 0.346rem;
      .listTitle {
        height: 0.373rem;
        line-height: 0.373rem;
        margin-top: 0.267rem;
        font-size: 0.36rem;
        display: flex;
        img {
          width: 2.54rem;
          height: 0.28rem;
          &:last-child {
            transform: rotateZ(180deg);
          }
        }
        span {
          flex: 1;
          text-align: center;
          color: #1c2b42;
          font-size: 0.373rem;
        }
      }
      .listContent {
        height: 1.13rem;
        margin-top: 0.48rem;
        display: flex;
        img {
          width: 1.28rem;
          height: 1.13rem;
          margin-right: 0.373rem;
          border-radius: 0.066rem;
        }
        button {
          margin-top: 0.293rem;
          display: inline-block;
          height: 0.625rem;
          width: 1.625rem;
          font-size: 0.25rem;
          background-color: #1b2b42;
          border: 1px solid white;
          border-radius: 4px;
          text-align: center;
          color: #f8b02c;
          margin-left: auto;
        }
      }
    }
  }
  .equipmentDetail {
    .detailItem {
      margin-top: 0.88rem;
      .itemContent {
        border: 1px solid #d8d9da;
        border-radius: 6px;
        padding: 0.24rem;
        margin: 0.32rem 0.32rem;
        .equipWrap {
          .equipTitle {
            font-size: 0.32rem;
            height: 0.653rem;
            display: flex;
            align-items: center;
            .type {
              font-size: 0.32rem;
              font-weight: bold;
              display: inline-block;
              width: 1.733rem;
              height: 0.653rem;
              line-height: 0.653rem;
              text-align: center;
              background-color: #476b9b;
              color: #fff;
              border-radius: 0.067rem;
              margin-right: 0.48rem;
            }
            .name {
              color: #476b9b;
              font-size: 0.44rem;
              font-weight: 900;
              display: inline-block;
              flex: 1;
            }
            .weight,
            .level {
              color: #c9c9c9;
              font-weight: bold;
            }
            .weightNum,
            .levelNum {
              color: #ffb434;
              font-weight: bold;
            }
            .weightNum {
              margin-right: 0.266rem;
            }
          }
          .equipName{
            color: #476b9b;
            font-size: 0.4rem;
            font-weight: 900;
            margin-top: 0.2rem;
            margin-bottom: 0.1rem;
            padding-left: .1rem;
          }
          .equipAttr {
            display: flex;
            .equipImage {
              width: 2rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              font-weight: bold;
              img {
                width: 1.28rem;
                height: 1.12rem;
                margin-bottom: 0.053rem;
              }
            }
            .attr {
              font-size: 0.4rem;
              margin-left: 1.28rem;
              flex: 1;
              display: flex;
              flex-wrap: wrap;
              p {
                width: 50%;
                color: #4d4d4d;
                span {
                  font-weight: bold;
                  margin-left: 0.107rem;
                }
              }
            }
          }
          .equipSkill {
            font-size: 0.293rem;
            margin-top: 0.4rem;
            .equipSkillItem {
              margin-bottom: 0.347rem;
              line-height: 0.427rem;
              span {
                color: #476b9b;
                font-size: 0.293rem;
                font-weight: bold;
              }
            }
          }
          .text-box {
            margin-top: 0.26rem;
            line-height: 0.48rem;
            padding: 0.26rem 0.24rem;
            border-radius: 6px;
            font-size: 0.32rem;
            &.dark {
              background-color: $dark;
              color: #fff;
              padding: 0.32rem 0.427rem;
            }
            &.light {
              background-color: $light;
            }
            .getWayTitle {
              .title {
                color: #ffb434;
              }
              .way {
                color: #ffb434;
              }
            }
            .effect {
              margin-bottom: 0.427rem;
              &:last-child {
                margin-bottom: 0;
              }
              span {
                color: $color-blu;
              }
            }
          }
        }
        .clothes {
          margin-top: 0.8rem;
        }
      }
    }
  }
}
</style>
