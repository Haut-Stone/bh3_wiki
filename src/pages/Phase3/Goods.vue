<template>
  <div class="goods">
    <!-- 本页放置 页面顶端的菜单栏和情报姬标志 -->
    <h1 v-if="$route.params.star">{{ $route.params.star }}</h1>
    <h1 v-else>{{ $route.params.id }}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      msg: '材料导航'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
