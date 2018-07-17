<template>
  <div class="block_title">
    <div class="icon" :class="'block_title_icon' + icon"></div>
    <div class="title">{{title}}</div>
    <div class="right_text" v-if="rightTxt">{{rightTxt}}</div>
  </div>
</template>

<script>
export default {
  name: 'BlockTitle',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    rightTxt: {
      type: String,
      default: ''
    },
    icon: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped lang="scss">
.block_title {
  width: 9.333rem;;
  margin: 0 auto;
  height: 0.6rem;
  line-height: 0.6rem;
  padding-bottom: .107rem;
  background: url(../../assets/images/block_title_border.png) no-repeat center bottom;
  background-size: 9.333rem;
  font-size: .373rem;
  color: #1c2b42;
  font-weight: bold;
  display: flex;
  .icon {
    width: .64rem;
    height: .56rem;
    margin-right: .213rem;
    &.blockTitleIcon1 {
      background: url('../../assets/images/block_title_icon_1.png') no-repeat;
      background-size: 0.64rem;
    }
    &.blockTitleIcon2 {
      background: url('../../assets/images/block_title_icon_2.png') no-repeat;
      background-size: 0.64rem;
    }
    &.blockTitleIcon3 {
      background: url('../../assets/images/block_title_icon_3.png') no-repeat;
      background-size: 0.64rem;
    }
  }
  .title {
    flex: 1;
    color: #1c2b42;
    font-weight: bold;
  }
  .right_text {
    text-align: right;
    margin-right: .133rem;
    color: #9ca3ad;
    font-size: .32rem;
  }
}
</style>
