<template>
  <div class="skill">
    <div class="dataWrap" v-if="skill && skill.length > 0">
      <RoleName :armorData="armorData" :armorName="armorData.armorName"></RoleName>
      <!-- 技能导航 开始 -->
      <div class="skillNav">
        <div class="skillNavItem" @click="moveTo(index)" v-for="(item,index) in skill" :key="index" :class="'skillNavItem' + (index+1)">
          <div class="title">
            <p>{{item.skillType}}</p>
            <h2>{{item.skillName}}</h2>
          </div>
          <div class="image">
            <img :src="HOST + item.skillImageUrl" alt="">
          </div>
        </div>
        <div class="tipsWrap">
          <div class="tips">
            Tips:可点击技能跳转技能说明
          </div>
        </div>
      </div>
      <!-- 技能导航 结束 -->

      <!-- 技能列表 开始 -->
      <div class="skillItemWrap">
        <div class="skillItem" :ref="'item'+index" v-for="(item,index) in skill" :key="index">
          <BlockTitle :title="item.skillName" :icon="1" :rightTxt="item.skillType"></BlockTitle>
          <div class="skillListWrap">
            <div class="skillList">
              <div class="skillListItem" v-for="(subSkill,subIndex) in item.subSkills" :key="subIndex">
                <div class="skillImage">
                  <img :src="HOST + subSkill.skillImageUrl" alt="">
                </div>
                <div class="itemContent">
                  <div class="title">
                    <span class="name">{{subSkill.skillName}}</span>
                    <span class="level" v-if="subSkill.unlockGrade">解锁等级</span>
                    <span class="levelNum" v-if="subSkill.unlockGrade">LV.{{subSkill.unlockGrade}}</span>
                  </div>
                  <p>{{subSkill.skillIntro}}</p>
                </div>
              </div>
            </div>
            <div class="text-box dark">
              <!-- <div class="title">
                <div class="item" v-for="(subSkill,subIndex) in item.subSkills" :key="subIndex">
                  {{subSkill.skillName}}：<span>优先升满</span>
                  </div>
              </div> -->
              <p>
                <pre>{{item.appraisal | newLine}}</pre>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 技能列表 结束 -->
    </div>
    <NoData v-else></NoData>
  </div>
</template>

<script>
import RoleName from '@/components/Valkyrie/RoleName/RoleName'
import BlockTitle from '@/components/BlockTitle'
import NoData from '@/components/NoData'
import router from '@/router/index'

export default {
  name: 'Skill',
  data () {
    return {
      skillData: {}
    }
  },
  props: {
    armorData: {
      type: Object
    }
  },
  computed: {
    skill: function () {
      return this.skillData.skill
    }
  },
  watch: {
    armorData: {
      handler (newValue, oldValue) {
        this._initSkill()
      },
      deep: true
    }
  },
  created () {
    this._initSkill()
  },
  methods: {
    moveTo (index) {
      document.documentElement.scrollTop =
      this.$refs['item' + index][0].offsetTop - 50
      document.body.scrollTop = this.$refs['item' + index][0].offsetTop - 50
    },
    // 初始化技能信息
    _initSkill () {
      if (this.armorData.armorId) {
        // console.log('角色id:'+this.armorData.armorId);
      } else {
        router.push({ path: '/' })
        return
      }
      this.$http.get(this.HOST + '/Wiki/Valkyrja/Skill/' + this.armorData.armorId,
        {
          before (request) {
            if (this.previousRequest) {
              this.previousRequest.abort()
            }
            this.previousRequest = request
          }
        })
        .then(response => {
          this.skillData = Object.assign({}, this.skillData, JSON.parse(response.data))
          var a = null
          var b = null
          var c = null
          var d = null
          var e = null
          var f = null
          for (var i = this.skillData.skill.length - 1; i >= 0; i--) {
            if (this.skillData.skill[i].skillType === '队长技能') {
              a = this.skillData.skill[i]
            } else if (this.skillData.skill[i].skillType === '分支/特殊 攻击') {
              b = this.skillData.skill[i]
            } else if (this.skillData.skill[i].skillType === '被动') {
              c = this.skillData.skill[i]
            } else if (this.skillData.skill[i].skillType === '必杀技') {
              d = this.skillData.skill[i]
            } else if (this.skillData.skill[i].skillType === '闪避') {
              e = this.skillData.skill[i]
            } else if (this.skillData.skill[i].skillType === '普通攻击') {
              f = this.skillData.skill[i]
            }
          }
          var arr = [a, b, c, d, e, f]
          this.skillData.skill = arr
        })
        .catch(error => {
          console.log(error)
          router.push({ path: '/404' })
        })
    }
  },
  filters: {
    newLine: function (value) {
      return value.replace(/\^/g, '\n')
    }
  },
  components: {
    RoleName,
    BlockTitle,
    NoData
  }
}
</script>

<style scoped lang="scss">
@import "../../../common/scss/common";

.skill {
  .skillNav {
    margin-top: 1.067rem;
    background: url("../../../assets/images/skillNavBg.png") no-repeat center;
    background-position-y: 0.4rem;
    background-size: 4.5rem;
    overflow: hidden;
    position: relative;
    font-size: 0.293rem;
    color: #1c2b42;
    .skillNavItem {
      display: flex;
      position: absolute;
      height: 1.253rem;
      .image {
        width: 1.253rem;
        height: 1.253rem;
        background: url("../../../assets/images/circle.png") no-repeat;
        background-size: 1.253rem;
        img {
          width: 1.253rem;
          height: 1.253rem;
        }
      }
      .title {
        display: flex;
        flex-direction: column;
        h2 {
          font-size: 0.373rem;
          font-weight: bold;
          color: #000;
        }
      }
    }
    .skillNavItem1,
    .skillNavItem3,
    .skillNavItem5 {
      .title {
        text-align: right;
        margin-right: 0.107rem;
      }
    }
    .skillNavItem2,
    .skillNavItem4,
    .skillNavItem6 {
      flex-direction: row-reverse;
      .title {
        margin-left: 0.107rem;
      }
    }
    .skillNavItem1,
    .skillNavItem2 {
      align-items: flex-start;
    }
    .skillNavItem3,
    .skillNavItem4 {
      align-items: center;
    }
    .skillNavItem5,
    .skillNavItem6 {
      align-items: flex-end;
    }
    .skillNavItem1 {
      top: 0;
      right: 5.2rem;
    }
    .skillNavItem2 {
      top: 0;
      left: 5.2rem;
    }
    .skillNavItem3 {
      top: 1.3rem;
      right: 6.2rem;
    }
    .skillNavItem4 {
      top: 1.3rem;
      left: 6.2rem;
    }
    .skillNavItem5 {
      top: 2.64rem;
      right: 5.2rem;
    }
    .skillNavItem6 {
      top: 2.64rem;
      left: 5.2rem;
    }
    .tipsWrap {
      margin-top: 4.5rem;
      text-align: center;
      .tips {
        margin: 0 auto;
        font-size: 0.24rem;
        color: #476b9b;
        padding: 0.107rem 0.293rem;
        display: inline-block;
        text-align: center;
        border: 1px solid #d9d9d9;
        border-radius: 0.427rem;
      }
    }
  }
  .skillItemWrap {
    margin: 1.04rem 0.32rem 0;
    .skillItem {
      margin-bottom: 1.04rem;
      .skillListWrap {
        margin: 0 0.267rem;
        width: auto;
        .skillList {
          margin-top: 0.72rem;
          margin-bottom: 0.32rem;
          .skillListItem {
            display: flex;
            margin-bottom: 0.533rem;
            .skillImage {
              width: 1.467rem;
              margin-right: 0.32rem;
              text-align: center;
              background: url("../../../assets/images/circle.png") center top no-repeat;
              background-size: 1.253rem;
              img {
                width: 1.253rem;
                height: 1.253rem;
              }
            }
            .itemContent {
              flex: 1;
              font-size: 0.32rem;
              .title {
                font-size: 0.347rem;
                margin-bottom: 0.267rem;
                font-weight: bold;
                display: flex;
                height: 0.48rem;
                line-height: 0.48rem;
                .name {
                  flex: 1;
                }
                .level {
                  color: #c9c9c9;
                  margin-right: .133rem;
                }
                .levelNum {
                  color: #ffb434;
                }
              }
              p {
                line-height: 0.48rem;
                color: #4d4d4d;
              }
            }
          }
        }
        .text-box {
          padding: 0.26rem 0.24rem;
          border-radius: 6px;
          line-height: 0.48rem;
          &.light {
            background-color: $light;
          }
          &.dark {
            background-color: $dark;
            color: #fff;
            padding: 0.32rem 0.427rem;
          }
          p {
            font-size: 0.267rem;
            margin-bottom: 0.133rem;
            pre{
              white-space: pre-wrap;
            }
            span {
              color: $color-blu;
            }
          }
          h3 {
            font-size: 0.267rem;
            color: $color-yel;
            margin-bottom: 0.16rem;
          }
          .title {
            font-size: 0.32rem;
            margin-bottom: 0.16rem;
            .item {
              color: #c7c7c7;
              span {
                color: #ffb434;
              }
            }
          }
        }
      }
    }
  }
}
</style>
