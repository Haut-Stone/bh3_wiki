<template>
  <div class="goods_list">
    <!-- 材料列表页面，不包括菜单栏 -->
    <h1>{{msg}}</h1>
    <NavMenu :items="navMenuItems" name="材料"></NavMenu>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
export default {
  name: 'GoodsList',
  data () {
    return {
      msg: '材料列表页',
      navMenuItems: [
        {path: 'goodsIndex', text: '首页', id: 1},
        {path: 'trend', text: '动态', id: 2},
        {path: 'manual', text: '图鉴', id: 3},
        {path: 'supply', text: '蛋池', id: 4}
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
