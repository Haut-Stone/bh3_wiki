<template>
  <div class="stigmata">
    <h1 v-if="$route.params.star">{{ $route.params.star }}</h1>
    <h1 v-else>{{ $route.params.id }}</h1>
    <NavMenu></NavMenu>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
export default {
  name: 'Stigmata',
  data () {
    return {
      msg: '圣痕导航'
    }
  },
  components: {
    NavMenu
  }
}
</script>

<style lang="scss" scoped>

</style>
