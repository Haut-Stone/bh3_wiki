<template>
  <div class="scrollMenu">
    <div class="title" @click="_showArmorList">{{armorName}}</div>
    <ul class="scrollNav">
      <li><router-link to="/valkyrie/overview">概览</router-link></li>
      <li><router-link to="/valkyrie/skill">技能</router-link></li>
      <li><router-link to="/valkyrie/equipPro">配装</router-link></li>
      <li><router-link to="/valkyrie/team">组队</router-link></li>
      <li><router-link to="/valkyrie/raiders">攻略</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ScrollMenu',
  props: {
    armorName: {}
  },
  methods: {
    _showArmorList () {
      this.$emit('showArmorList')
    }
  }
}
</script>

<style scoped lang="scss">
.scrollMenu{
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
    .scrollNav{
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
