np<template>
  <div class="stigmata">
    <h1 v-if="$route.params.star">{{ $route.params.star }}</h1>
    <h1 v-else>{{ $route.params.id }}</h1>
    <NavMenu :items="navMenuItems" name="圣痕"></NavMenu>
    <ScrollMenu v-show="scrollTop > 150" :items="navMenuItems"></ScrollMenu>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import ScrollMenu from '@/components/ScrollMenu'
export default {
  name: 'Stigmata',
  data () {
    return {
      scrollTop: 0,
      msg: '圣痕导航',
      navMenuItems: [
        {path: 'fiveStar', text: '五星', id: 1},
        {path: 'fourStar', text: '四星', id: 2},
        {path: 'threeStar', text: '三星', id: 3},
        {path: 'twoStar', text: '二星', id: 4},
        {path: 'otherStar', text: '活动', id: 5}
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
.stigmata {
  height: 16rem;
}
</style>
