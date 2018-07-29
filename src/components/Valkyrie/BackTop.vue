<template>
  <div>
    <div class="backTop" @click="backTop" v-show="scrollTop > 500"></div>
    <a href="http://wiki.gamepaper.cn" class="backIndex"></a>
  </div>
</template>

<script>
export default {
  props: ['scrollTop'],
  name: 'BackTop',
  methods: {
    backTop () {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }
}
</script>

<style scoped lang="scss">
.backTop, .backIndex {
  width: 1.28rem;
  height: 1.28rem;
  position: fixed;
  right: .4rem;
  bottom: .4rem;
  background: url("../../assets/images/backTop.png") no-repeat;
  background-size: 1.28rem;
  z-index: 10;
}
.backIndex {
  bottom: 1.8rem;
  background: url("../../assets/images/backHome.png") no-repeat;
  background-size: 1.28rem;
}
</style>
