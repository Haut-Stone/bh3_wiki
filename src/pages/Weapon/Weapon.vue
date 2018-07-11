<template>
  <div class="weapon">
    <h1 v-if="$route.params.star">{{ $route.params.star }}</h1>
    <h1 v-else>{{ $route.params.id }}</h1>
    <NavMenu :items="navMenuItems"></NavMenu>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
export default {
  name: 'Weapon',
  data () {
    return {
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
  components: {
    NavMenu
  }
}
</script>

<style lang="scss" scoped>

</style>
