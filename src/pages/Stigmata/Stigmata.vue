<template>
  <div class="stigmata">
    <h1 v-if="$route.params.star">{{ $route.params.star }}</h1>
    <h1 v-else>{{ $route.params.id }}</h1>
    <NavMenu :items="navMenuItems"></NavMenu>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
export default {
  name: 'Stigmata',
  data () {
    return {
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
  components: {
    NavMenu
  }
}
</script>

<style lang="scss" scoped>

</style>
