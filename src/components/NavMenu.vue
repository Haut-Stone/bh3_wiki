<template>
  <div class="nav_menu">
    <!-- S 顶部标题 A -->
    <header>
      <h2>武器</h2>
    </header>
    <!-- E 顶部标题 A -->

    <!-- S 导航菜单 A -->
    <nav class="top_nav">
      <ul>
        <li><router-link to="/gun">双枪</router-link></li>
        <li><router-link to="/knife">太刀</router-link></li>
        <li><router-link to="/artillery">重炮</router-link></li>
        <li><router-link to="/cross">十字架</router-link></li>
        <li><router-link to="/sword">大剑</router-link></li>
        <li><router-link to="/knuckles">拳套</router-link></li>
      </ul>
    </nav>
    <!-- E 导航菜单 A -->
  </div>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style lang="scss" scoped>
/* 顶部标题 */
header{
    width: 10rem;
    height: 1.173rem;
    background: #1c2b42;
    position: relative;
    h2{
      font-size: .533rem;
      color: #fff;
      height: 1.173rem;
      line-height: 1.173rem;
      text-align: center;
    }
}

/* 导航菜单 */
.top_nav{
    width: 10rem;
    height: 1.093rem;
    font-size: .32rem;
    ul{
      width: 10rem;
      height: 1.093rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li{
        width: 1.3rem;
        height: .56rem;
        line-height: .56rem;
        text-align: center;
        a{
          display: block;
          border: 1px solid #152947;
          border-radius: .56rem;
          color: #1c2b42;
          &.active{
            background: #1c2b42;
            border-radius: .56rem;
            color: #ffb434;
          }
        }
      }
    }
}
</style>
