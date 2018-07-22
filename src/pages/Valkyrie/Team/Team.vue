<template>
  <div class="team">
    <div class="dataWrap" v-if="team && team.length > 0">
      <RoleName :armorData="armorData" :armorName="armorData.armorName"></RoleName>
      <!-- 组队列表 开始 -->
      <div class="dif-team">
        <div class="teamInfoWrap" v-for="(teamItem,index) in team" :key="index">
          <div class="team-info">
            <h2 class="team-name">{{teamItem.name}}</h2>
            <img class="team-break" src="../../../assets/images/team-break.png">
            <p class="team-features">{{teamItem.feature}}</p>
            <button @click="moveTo(index)" class="team-button font-style-1">查看</button>
          </div>
          <div class="team-img-box">
            <div class="imgWrap">
              <img class="team-avatar" :src="HOST + member.avatar" v-for="(member,imageIndex) in teamItem.member" :key="imageIndex">
            </div>
            <p class="team-name-all">
              <span v-for="(member,imageIndex) in teamItem.member" :key="imageIndex">{{member.name}}</span>
            </p>
          </div>
        </div>
      </div>
      <!-- 组队列表 结束 -->

      <!-- 组队详情 开始 -->
      <div class="teamListItem" v-for="(teamItem,index) in team" :key="index">
        <div class="teamItem" :ref="'item'+index">
          <BlockTitle :title="teamItem.name" :icon="1" rightTxt="队伍构成"></BlockTitle>
          <div class="character-board">
            <div class="character-box" v-for="(member,memberIndex) in teamItem.member" :key="memberIndex">
              <span class="character-features" :class="'color'+(memberIndex+1)">{{member.position}}</span>
              <h2 class="character-skills">{{member.feature}}</h2>
              <img class="character-img" :src="HOST + member.avatar" alt="">
              <p class="character-name">{{member.name}}</p>
              <img class="character-attr" v-if="member.type === '生物'" src="../../../assets/images/biological.png" alt="">
              <img class="character-attr" v-else-if="member.type === '异能'" src="../../../assets/images/ability.png" alt="">
              <img class="character-attr" v-else-if="member.type === '机械'" src="../../../assets/images/mechanical.png" alt="">
            </div>
          </div>
          <div class="text-box light">
            <div v-for="(member,memberIndex) in teamItem.member" :key="memberIndex">
              <h4>{{member.name}}{{member.bestlevel}}:</h4>
              <p>{{member.collection}}</p>
            </div>
          </div>
          <div class="text-box dark" v-if="teamItem.kernel">
            <h3>搭配核心</h3>
            <p>{{teamItem.kernel}}</p>
          </div>
          <div class="text-box light">
            <p><span>输出流程: </span>{{teamItem.loop}}</p>
          </div>
        </div>
        <div class="teamItem applicableScene" v-if="teamItem.applicableScene && teamItem.applicableScene.length > 0">
          <BlockTitle :title="teamItem.name" :icon="1" rightTxt="适用场景"></BlockTitle>
          <div class="applicableSceneItem" v-for="(sceneItem,sceneIndex) in teamItem.applicableScene" :key="sceneIndex">
            <FitLineTitle :grade="sceneItem.fitnessLevel" :fitLineTitle="sceneItem.sceneName"></FitLineTitle>
            <div class="description">{{sceneItem.sceneText}}</div>
          </div>
        </div>
      </div>
      <!-- 组队详情 结束 -->
    </div>
    <NoData v-else></NoData>
  </div>
</template>

<script>
import RoleName from '@/components/Valkyrie/RoleName/RoleName'
import BlockTitle from '@/components/BlockTitle'
import FitLineTitle from '@/components/Valkyrie/FitLineTitle/FitLineTitle'
import NoData from '@/components/NoData'
import router from '@/router/index'

export default {
  name: 'Team',
  data () {
    return {
      teamData: {}
    }
  },
  props: {
    armorData: {
      type: Object
    }
  },
  computed: {
    team: function () {
      return this.teamData.teamPro
    }
  },
  watch: {
    armorData: {
      handler (newValue, oldValue) {
        this._initTeam()
      },
      deep: true
    }
  },
  created () {
    this._initTeam()
  },
  methods: {
    moveTo (index) {
      document.documentElement.scrollTop = this.$refs['item' + index][0].offsetTop - 50
      document.body.scrollTop = this.$refs['item' + index][0].offsetTop - 50
    },
    // 初始化组队信息
    _initTeam () {
      if (this.armorData.armorId) {
        // console.log('角色id:'+this.armorData.armorId);
      } else {
        router.push({ path: '/' })
        return
      }
      this.$http.get(this.HOST + '/Wiki/Valkyrja/Team/' + this.armorData.armorId, {
        before (request) {
          if (this.previousRequest) {
            this.previousRequest.abort()
          }
          this.previousRequest = request
        }
      })
        .then(response => {
          this.teamData = Object.assign({}, this.teamData, JSON.parse(response.data))
        })
        .catch(error => {
          console.log(error)
          router.push({ path: '/404' })
        })
    }
  },
  components: {
    RoleName,
    BlockTitle,
    FitLineTitle,
    NoData
  }
}
</script>

<style scoped lang="scss">
@import '../../../common/scss/common';

.team{
  margin-bottom: .32rem;
  .dif-team{
    .teamInfoWrap{
      border: 1px solid #D8D9DA;
      border-radius: 6px;
      margin-left: 0.32rem;
      margin-right: 0.32rem;
      margin-top: 0.32rem;
      width: auto;
      padding: 0.293rem 0.346rem;
      display: flex;
      .team-info{
        width: 3.6rem;
        .team-name{
          font-size: 0.4rem;
          margin-top: 0.133rem;
        }
        .team-break{
          margin-top: 0.08rem;
          width: 3.57rem;
          display: block;
        }
        .team-features{
          margin-top: 0.026rem;
          font-size: .32rem;
        }
        .team-button{
          margin-top: 0.293rem;
          display: block;
          height: 0.625rem;
          width: 1.625rem;
          font-size: 0.25rem;
          background-color: #1B2B42;
          border: 1px solid white;
          border-radius: 4px;
          text-align: center;
          color: #F8B02C;
        }
      }
      .team-img-box{
        flex: 1;
        text-align: center;
        width: 4.8rem;
        .imgWrap img{
          width: 1.6rem;
          margin-right: -0.12rem;
        }
        .team-name-all{
          color: #AFB1B2;
          text-align: center;
          margin: .213rem auto 0;
          font-size: .267rem;
          span:after{
            content: '+'
          }
          span:last-child:after{
            content: ''
          }
        }
      }
    }
  }
  .teamItem{
    margin: 0 0.32rem;
    margin-top: 0.8rem;
    .character-board{
      margin-top: 0.48rem;
      margin-bottom: .32rem;
      border: 1px solid #D8D9DA;
      border-radius: 6px;
      padding: .32rem;
      display: flex;
      .character-box{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .character-features{
          color: white;
          text-align: center;
          display: inline-block;
          padding: .053rem .133rem;
          font-size: 0.213rem;
          border-radius: 4px;
          border: 1px solid white;
          margin: 0 auto;
          &.color1{
            background-color: $color-blu;
          }
          &.color2{
            background-color: $color-yel;
          }
          &.color3{
            background-color: $color-pin;
          }
          &:before{
            content: "";
            width: .16rem;
            height: .24rem;
            display: inline-block;
            vertical-align: middle;
            background: url('../../../assets/images/featuresIcon.png') no-repeat;
            background-size: .16rem .24rem;
            margin-right: .16rem;
          }
        }
        .character-skills{
          font-size: 0.32rem;
          margin-top: 0.106667rem;
        }
        .character-img{
          width: 1.6rem;
          margin-top: .267rem;
        }
        .character-name{
          color: #4d4d4d;
          font-size: .293rem;
        }
        .character-attr{
          margin-top: .16rem;
          width: .667rem;
        }
      }
    }
    .text-box{
      padding: 0.26rem 0.24rem;
      margin-top: 0.26rem;
      border-radius: 6px;
      line-height: .48rem;
      &.light{
        background-color: $light;
      }
      &.dark{
        background-color: $dark;
        color: #fff;
        padding: .32rem .427rem;
      }
      h4{
        font-size: 0.267rem;
        color: $color-blu;
        margin-bottom: .08rem;
      }
      p{
        font-size: 0.267rem;
        margin-bottom: 0.133rem;
        span{
          color: $color-blu;
        }
      }
      h3{
        font-size: 0.267rem;
        color: $color-yel;
        margin-bottom: .16rem;
      }
    }
  }
  .applicableScene{
    .applicableSceneItem{
      margin: .96rem auto;
      width: 7.867rem;
      .description{
        line-height: .48rem;
        color: #4d4d4d;
        font-size: .32rem;
      }
    }
  }
}
</style>
