<template>
  <div class="raiders">
    <div class="listWrap" v-if="raiders && raiders.length > 0">
      <!-- 攻略列表 开始 -->
      <div class="raidersItem" v-for="(item,index) in raiders" :key="index" @click="openDetail(item.id)">
        <div class="left">
          <div class="title">
            <h2>{{item.title}}</h2>
          </div>
          <div class="mes">
            <span class="time">{{item.time}}发布</span>
          </div>
        </div>
        <div class="right">
          <img :src="HOST + item.imgUrl" alt="">
        </div>
      </div>
      <!-- 攻略列表 结束 -->
    </div>
    <NoData v-else></NoData>
  </div>
</template>

<script>
import router from '@/router/index'
import NoData from '@/components/NoData'

export default {
  name: 'Raiders',
  data () {
    return {
      raidersData: {}
    }
  },
  props: {
    armorData: {
      type: Object
    }
  },
  computed: {
    raiders: function () {
      return this.raidersData.raiders
    }
  },
  watch: {
    armorData: {
      handler (newValue, oldValue) {
        this._initRaiders()
      },
      deep: true
    }
  },
  created () {
    this._initRaiders()
  },
  methods: {
    _initRaiders () {
      if (this.armorData.armorId) {
        console.log('角色id:' + this.armorData.armorId)
      } else {
        router.push({ path: '/' })
        return
      }
      this.$http
        .get(this.HOST + '/Wiki/Valkyrja/Raiders/' + this.armorData.armorId, {
          before (request) {
            if (this.previousRequest) {
              this.previousRequest.abort()
            }
            this.previousRequest = request
          }
        })
        .then(response => {
          console.log(JSON.parse(response.data))
          this.raidersData = Object.assign(
            {},
            this.raidersData,
            JSON.parse(response.data)
          )
        })
        .catch(error => {
          console.log(error)
          router.push({ path: '/404' })
        })
    },
    openDetail (id) {
      console.log(id)
    }
  },
  components: {
    NoData
  }
}
</script>

<style scoped lang="scss">
.raiders {
  width: 9.36rem;
  .listWrap {
    margin: 0.533rem auto 0;
    .raidersItem {
      width: 9.36rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 0.307rem;
      margin-top: 0.32rem;
      display: flex;
      .right {
        width: 2.24rem;
        height: 1.707rem;
        img {
          width: 2.24rem;
          height: 1.707rem;
        }
      }
      .left {
        flex: 1;
        .title {
          width: 6.133rem;
          height: 1.1rem;
          padding-bottom: 0.34rem;
          line-height: 0.507rem;
          overflow: hidden;
          h2 {
            font-size: 0.347rem;
            font-weight: bold;
          }
        }
        .mes {
          font-size: 0.267rem;
          color: #999;
          .time {
            margin-right: 0.48rem;
          }
        }
      }
    }
  }
}
</style>
