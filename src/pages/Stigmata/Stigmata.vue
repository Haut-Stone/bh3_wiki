<template>
  <div class="stigmata">
    <h1 v-if="$route.params.star">{{ $route.params.star }}</h1>
    <h1 v-else>{{ $route.params.id }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Stigmata',
  data () {
    return {
      msg: '圣痕导航'
    }
  }
}
</script>

<style scoped="scss">

</style>
