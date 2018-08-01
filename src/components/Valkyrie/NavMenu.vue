<template>
  <div class="navMenu">
    <!-- 顶部标题 -->
    <header>
      <div class="menu" @click="_showArmorList"></div>
      <h2>{{armorName}}</h2>
    </header>
    <!-- 导航菜单 -->
    <nav class="topNav">
      <ul>
        <li><router-link to="/valkyrie/overview">概览</router-link></li>
        <li><router-link to="/valkyrie/skill">技能</router-link></li>
        <li><router-link to="/valkyrie/equipPro">配装</router-link></li>
        <li><router-link to="/valkyrie/team">组队</router-link></li>
        <li><router-link to="/valkyrie/raiders">攻略</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
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
/* 顶部标题 */
header {
  width: 10rem;
  height: 1.173rem;
  background: #1c2b42;
  position: relative;
  h2 {
    font-size: .533rem;
    color: #fff;
    height: 1.173rem;
    line-height: 1.173rem;
    text-align: center;
  }
  .menu {
    width: .64rem;
    height: .64rem;
    position: absolute;
    top: .267rem;
    left: .64rem;
    background: url("../../assets/images/menu_icon.png") no-repeat;
    background-size: .64rem;
  }
}

/* 导航菜单 */
.topNav {
  width: 10rem;
  height: 1.093rem;
  font-size: .373rem;
  ul {
    width: 10rem;
    height: 1.093rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 1.6rem;
      height: .64rem;
      line-height: .64rem;
      text-align: center;
      a {
        display: block;
        background: url('../../assets/images/topNav_default.png') no-repeat;
        background-size: 1.6rem .64rem;
        color: #1c2b42;
        &.active {
          background: #1c2b42;
          border-radius: .64rem;
          color: #ffb434;
        }
      }
    }
  }
}
</style>
