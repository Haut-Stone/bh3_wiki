<template>
  <div class="weapon">
    <h1 v-if="$route.params.star">{{ $route.params.star }}</h1>
    <h1 v-else>{{ $route.params.id }}</h1>
    <NavMenu></NavMenu>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
export default {
  name: 'Weapon',
  data () {
    return {
      msg: '武器导航'
    }
  },
  components: {
    NavMenu
  }
}
</script>

<style lang="scss" scoped>

</style>
