<template>
  <div class="armorList" @click="_hideList($el)">
    <div class="armorListWrap" @click.stop>
      <!-- logo -->
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <!-- 女武神列表 -->
      <div class="listWrap">
        <div class="listItem" v-for="(item,index) in armorList" :key="index">
          <div class="roleName" @click="_toggleArmorItem(index)">
            <h2>{{item.roleName}}</h2>
            <img src="../../assets/images/dropdown.png" :class="item.defaultActive ?'':'active'" alt="">
          </div>
          <transition name="slideDown">
            <ul class="armorItem" v-show="item.defaultActive">
              <li
              :class="armorId == armorItem.armorId ? 'active' : ''"
              v-for="(armorItem,armorIndex) in item.armorList"
              :key="armorIndex" @click="getId(armorItem.armorId)"
              >
              <span>{{armorItem.armorName}}</span>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { hasClass, addClass, removeClass } from '@/common/js/util'

export default {
  name: 'armorList',
  data () {
    return {
      armorList: [],
      armorItem0: false
    }
  },
  props: {
    armorId: ''
  },
  created () {
    this._initArmorList()
  },
  methods: {
    // 初始化列表
    _initArmorList () {
      this.$http.get(this.HOST + '/Wiki/Valkyrja/ArmorList')
        .then(response => {
          this.armorList = JSON.parse(response.data).data
        })
        .then(() => {
          this.armorList.forEach((item, index) => {
            item.defaultActive = false
            this.$set(this.armorList, index, item)
          })
          this.$emit('initBasic', { armorId: this.armorList[0].armorList[0].armorId })
        })
    },
    // 隐藏导航
    _hideList ($el) {
      setTimeout(function () {
        $el.querySelector('.armorListWrap').scrollTop = 0
      }, 500)
      this.$emit('hideArmorList')
    },
    // 导航折叠
    _toggleArmorItem (index) {
      let item = this.armorList[index]
      this.armorList.forEach((item, ind) => {
        if (index !== ind) {
          item.defaultActive = false
        }
      })
      item.defaultActive = !item.defaultActive
      this.$set(this.armorList, index, item)
    },
    // 获取装甲id
    getId (armorId) {
      console.log(this.armorList)
      this.$emit('getId', { armorId: armorId })
    }
  }
}
</script>

<style scoped lang="scss">
.slideDown-enter-active,
.slideDown-leave-active {
  transition: all .5s ease-in-out;
  max-height: 5.6rem;
}
.slideDown-enter,
.slideDown-leave-to {
  max-height: 0;
}

.armorList {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 16rem;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  .armorListWrap {
    width: 6rem;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background: #1c2b42 url("../../assets/images/sideBarBg.png") center no-repeat;
    background-position-y: 2.5rem;
    background-size: 4.267rem;
    &::-webkit-scrollbar {
      display: none;
    }
    color: #fff;
    font-size: 0.32rem;
    position: relative;
    .logo {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      width: 6rem;
      height: 0.96rem;
      padding-top: 0.32rem;
      text-align: center;
      background: #1c2b42 url("../../assets/images/logoLine.png") center bottom no-repeat;
      background-size: 6rem;
      img {
        width: 1.467rem;
        height: 0.587rem;
      }
    }
    .listWrap {
      margin-top: 1.12rem;
      .listItem {
        padding: 0.16rem 0;
        box-sizing: border-box;
        .roleName {
          padding: 0 0.32rem;
          display: flex;
          align-items: center;
          height: 1.12rem;
          line-height: 1.12rem;
          h2 {
            flex: 1;
            color: #a8abb1;
            font-size: 0.373rem;
          }
          img {
            width: 0.427rem;
            height: 0.507rem;
            transition: all .5s ease-in-out;
            &.active{
              transform: rotate(90deg)
            }
          }
        }
        .armorItem {
          overflow-y: hidden;
          li {
            text-align: center;
            height: 1.12rem;
            line-height: 1.12rem;
            &:first-child span {
              border-top: none;
            }
            &.active {
              background: #162235;
              color: #ffb434;
            }
            span {
              display: block;
              margin: 0 0.32rem;
              border-top: 1px solid #182130;
              border-bottom: 1px solid #243247;
            }
          }
          &:after {
            content: "";
            display: block;
            margin: 0 0.32rem;
            border-top: 1px solid #182130;
          }
        }
      }
    }
  }
}
</style>
