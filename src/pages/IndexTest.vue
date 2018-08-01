<template>
  <div class="indexTest">
    <header class="header">
      <img class="logo" src="../assets/images/index_logo.png" alt="">
    </header>
    <section class="main">
      <div class="hbox">
        <div class="pic character">
          <router-link to="valkyrie"><button class="enter_button"></button></router-link>
        </div>
        <div class="pic weapon">
          <router-link to="weapon/gun"><button class="enter_button"></button></router-link>
        </div>
      </div>
      <div class="hbox">
        <div class="pic stigmata">
          <router-link to="stigmata/fiveStar"><button class="enter_button"></button></router-link>
        </div>
        <div class="pic goods">
          <a href=""><button class="enter_button"></button></a>
        </div>
      </div>
      <div class="sakura_bg_box box1" ref="box1"></div>
      <div class="sakura_bg_box box2" ref="box2"></div>
      <div class="sakura_bg_box box3" ref="box3"></div>
      <div class="sakura_bg_box box4" ref="box4"></div>
      <div class="sakura_bg_box box5" ref="box5"></div>
    </section>
    <footer class="footer">
      <a class="link" href="">攻略文章</a>
      <a class="link" href="">最新活动</a>
      <a class="link" href="">关注我们</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexTest',
  data () {
    return {
      msg: '情报姬首页'
    }
  },
  methods: {
    initSakura: function () {
      // console.log(this.$refs)
      this.$snowFall.foo.snow(document.getElementsByClassName('box1'), {image: '/static/images/index_sakura1.png', minSize: 10, maxSize: 30, round: true})
      this.$snowFall.foo.snow(document.getElementsByClassName('box2'), {image: '/static/images/index_sakura2.png', minSize: 10, maxSize: 30, round: true})
      this.$snowFall.foo.snow(document.getElementsByClassName('box3'), {image: '/static/images/index_sakura3.png', minSize: 10, maxSize: 30, round: true})
      this.$snowFall.foo.snow(document.getElementsByClassName('box4'), {image: '/static/images/index_sakura4.png', minSize: 10, maxSize: 30, round: true})
      this.$snowFall.foo.snow(document.getElementsByClassName('box5'), {image: '/static/images/index_sakura5.png', minSize: 10, maxSize: 30, round: true})
    }
  },
  mounted () {
    this.initSakura()
  }
}
</script>

<style lang="scss" scoped>
.indexTest {
body {
  background-image: url(../assets/images/bg1.png);
  height: 17.90rem;
  background-size: 100%;
}

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e263b;
    height: 1.76rem;
    .logo {
      height: 0.7rem;
    }
  }
  .main {
    .hbox{
      padding: .4rem .4rem 0 .4rem;
      display: flex;
      .pic{
        position: relative;
        height: 6.4rem;
        text-align: center;
        flex: 1;
        background-size: cover;
        .enter_button{
          position: absolute;
          background-image: url(../assets/images/index_enter_dark.png);
          background-size: cover;
          background-color: transparent;
          border: none;
          top: 5.51rem;
          left: 1.33rem;
          height: .75rem;
          width: 1.95rem;
        }
        .enter_button:hover {
          background-image: url(../assets/images/index_enter_light.png);
        }
      }
      .character {
        background-image: url(../assets/images/index_character.png);
        margin-right: .1rem;
      }
      .weapon {
        background-image: url(../assets/images/index_weapon.png);
        margin-left: .1rem;
      }
      .stigmata {
        background-image: url(../assets/images/index_stigmata.png);
        margin-right: .1rem;
      }
      .goods {
        background-image: url(../assets/images/index_goods.png);
        margin-left: .1rem;
      }
    }
    .sakura_bg_box {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: transparent;
    }
    .box1 {
      z-index: -1;
    }
    .box2 {
      z-index: -2;
    }
    .box3 {
      z-index: -3;
    }
    .box4 {
      z-index: -4;
    }
    .box5 {
      z-index: -5;
      background-image: url(../assets/images/bg1.png);
      background-size: 100%;
    }
  }
  .footer {
    background-image: url(../assets/images/index_footer.png);
    background-size: cover;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 1.31rem;
    margin: 0;
    bottom: 0;
    .link {
      font-size: .48rem;
      flex: 1;
      text-align: center;
      color: white;
    }

    .link:hover {
      color: deepskyblue;
    }
  }
}
</style>
