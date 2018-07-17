<template>
  <div class="goods_detail">
    <!-- 材料详情页面 不包括菜单栏 -->
    <h1>{{msg}}</h1>
    <div class="button-wrapper">
      <button class="index">首页</button>
      <button class="condition">动态</button>
      <button class="list">图鉴</button>
      <button class="egg">蛋池</button>
    </div>
    <div class="material-wrapper">
      <div class="pic-wrapper"></div>
      <div class="content-wrapper">
        <div class="name">雪霜玉</div>
        <div class="usage">此处是材料简介/作用</div>
        <div class="difficulty">获取难度</div>
        <div class="value">材料价值</div>
      </div>
    </div>
    <div class="get-wrapper">
      <div class="way">获取方式</div>
      <text>获取方式：雪狼小队</text>
      <text>矩阵空间：困难难度</text>
      <text>商店兑换：</text>
    </div>
    <div class="exchange-wrapper">
      <div class="exchange">兑换商品</div>
      <text>军机联备：</text>
    </div>
    <div class="relate-wrapper">
      <div class="relate">相关材料</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsDetail',
  data () {
    return {
      msg: '材料详情页'
    }
  }
}
</script>

<style lang="scss" scoped>
.button-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 15rem;
}
</style>
