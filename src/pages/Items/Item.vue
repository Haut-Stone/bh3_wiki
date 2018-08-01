<template>
  <div class="item">
    <h1 v-if="$route.params.star">{{ $route.params.star }}</h1>
    <h1 v-else>{{ $route.params.id }}</h1>
    <div class="choose-botton">
      <NavMenu :items="navMenuItems" name="分类"></NavMenu>
      <NavMenu :items="navMenuStars" name="星级"></NavMenu>
    </div>
    <ScrollMenu v-show="scrollTop > 150" :items="navMenuItems"></ScrollMenu>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import ScrollMenu from '@/components/ScrollMenu'
export default {
  name: 'item',
  data () {
    return {
      scrollTop: 0,
      msg: '材料导航',
      navMenuItems: [
        {path: 'all', text: '全部', id: 1},
        {path: 'lunhui', text: '樱色轮回', id: 2},
        {path: 'memory', text: '记忆战场', id: 3},
        {path: 'sun', text: '曜日关卡', id: 4},
        {path: 'underground', text: '地下军械库', id: 5},
        {path: 'benghuai', text: '崩坏降临', id: 6},
        {path: 'wujin', text: '无尽深渊', id: 7},
        {path: 'lianji', text: '联机', id: 8}
      ],
      navMenuStars: [
        {path: 'four', text: '四星', id: 4},
        {path: 'three', text: '三星', id: 3},
        {path: 'two', text: '二星', id: 2},
        {path: 'one', text: '一星', id: 1}
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this._handleScroll)
  },
  methods: {
    // 获取滚动条高度
    _handleScroll () {
      const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
      this.scrollTop = scrollTop
    }
  },
  components: {
    NavMenu,
    ScrollMenu
  }
}
</script>

<style lang="scss" scoped>
  .item {
    height: 20rem;
  }
</style>
