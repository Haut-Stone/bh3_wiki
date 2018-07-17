<template>
  <div class="scroll_menu">
    <ul class="scroll_nav">
      <li v-for="item in items" :key="item.id">
        <router-link :to="item.path">{{item.text}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ScrollMenu',
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
/* 滚动导航菜单 */
.scroll_menu{
    width: 10rem;
    height: .667rem;
    padding: .24rem 0;
    background: #1c2b42;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    z-index: 999;
    .title{
      height: .667rem;
      line-height: .667rem;
      padding: 0 .333rem;
      font-size: .533rem;
      color: #8e95a1;
      border-right: 2px solid #0d1e38;
    }
    .scroll_nav{
      flex: 1;
      display: flex;
      font-size: .427rem;
      li{
        height: .667rem;
        line-height: .667rem;
        flex: 1;
        text-align: center;
        a{
          color: #fff;
          &.active{
            color: #ffb434;
          }
        }
      }
    }
}
</style>
