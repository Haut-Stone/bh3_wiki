<template>
  <div id="app">
    <transition name="move">
      <ArmorList
      :armorId="armorData.armorId"
      v-show="armorListShow"
      @getId="getId"
      @hideArmorList="_hideArmorList"
      @initBasic="_initBasic"
      ref="armorList"
      ></ArmorList>
    </transition>
    <NavMenu
    :armorName="armorData.armorName"
    @showArmorList="_showArmorList"
    ></NavMenu>
    <transition name="fade">
      <ScrollMenu
      :armorName="armorData.armorName"
      @showArmorList="_showArmorList"
      v-show="scrollTop > 150"
      ></ScrollMenu>
    </transition>
    <transition name="fade">
      <BackTop :scrollTop="scrollTop"></BackTop>
    </transition>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view :armorData="armorData"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import NavMenu from '@/components/Valkyrie/NavMenu/NavMenu'
import ScrollMenu from '@/components/Valkyrie/ScrollMenu/ScrollMenu'
import BackTop from '@/components/Valkyrie/BackTop/BackTop'
import ArmorList from '@/components/Valkyrie/ArmorList/ArmorList'
import { urlParse } from '@/common/js/util'
import router from '@/router'

export default {
  name: 'App',
  data () {
    return {
      scrollTop: 0,
      armorData: {
        armorId: (() => {
          let queryParam = urlParse()
          return queryParam.armorId
        })()
      },
      armorListShow: false
    }
  },
  created () {
    if (!this.armorData.armorId && localStorage.getItem('armorId')) {
      this.$set(this.armorData, 'armorId', localStorage.getItem('armorId'))
    }
  },
  mounted () {
    window.addEventListener('scroll', this._handleScroll)
  },
  methods: {
    // 初始化装甲信息
    _initBasic (data) {
      var id = ''
      if (this.armorData.armorId) {
        id = this.armorData.armorId
        console.info('1' + id)
      } else {
        id = data.armorId
        console.info('2' + id)
      }
      localStorage.setItem('armorId', id)
      this._initArmorData(id)
    },
    // 更新装甲信息
    _initArmorData (armorId) {
      this.$http
        .get(this.HOST + '/Wiki/Valkyrja/ArmorBasic/' + armorId)
        .then(response => {
          this.armorData = Object.assign(
            {},
            this.armorData,
            JSON.parse(response.data)
          )
          this.$set(this.armorData, 'armorId', armorId)
        })
        .catch(error => {
          console.log(error)
          router.push({ path: '/404' })
        })
    },
    // 获取滚动条高度
    _handleScroll () {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.scrollTop = scrollTop
    },
    // 显示和隐藏侧边导航栏
    _showArmorList () {
      this.armorListShow = true
    },
    _hideArmorList () {
      this.armorListShow = false
    },
    // 获取装甲id
    getId (data) {
      this.$set(this.armorData, 'armorId', data.armorId)
      localStorage.setItem('armorId', data.armorId)
      this._initArmorData(this.armorData.armorId)
      this._hideArmorList()
    }
  },
  components: {
    NavMenu,
    ScrollMenu,
    BackTop,
    ArmorList
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.move-enter-active,
.move-leave-active {
  transition: all 0.5s;
}
.move-enter,
.move-leave-to {
  transform: translate(-6rem, 0);
  opacity: 0;
}

body,
html {
  background: #fff;
  height: 100%;
}
#app {
  height: 100%;
}
</style>
