<template>
  <div class="weapon">
    <h1 v-if="$route.params.star">{{ $route.params.star }}</h1>
    <h1 v-else>{{ $route.params.id }}</h1>
    <NavMenu :items="navMenuItems" name="武器"></NavMenu>
    <ScrollMenu v-show="scrollTop > 150" :items="navMenuItems"></ScrollMenu>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import ScrollMenu from '@/components/ScrollMenu'
export default {
  name: 'Weapon',
  data () {
    return {
      scrollTop: 0,
      msg: '武器导航',
      navMenuItems: [
        {path: 'gun', text: '双枪', id: 1},
        {path: 'knife', text: '太刀', id: 2},
        {path: 'artillery', text: '重炮', id: 3},
        {path: 'cross', text: '十字架', id: 4},
        {path: 'sword', text: '大剑', id: 5},
        {path: 'knuckles', text: '拳套', id: 6}
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
.weapon {
  height: 16rem;
}
</style>
