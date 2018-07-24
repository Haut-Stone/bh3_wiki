<template>
  <div class="fitLineTitle">
    <h2>{{fitLineTitle}}</h2>
    <div class="fitLine">
      <span class="fitLineText">{{fitLineText}}</span>
      <ul class="fitLineBg" :class="fitLineBg">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FitLineTitle',
  props: {
    grade: {},
    fitLineTitle: {
      type: String,
      default: '无尽深渊'
    }
  },
  computed: {
    fitLineText () {
      if (this.grade === 4) {
        return '非常适合'
      } else if (this.grade === 3) {
        return '很适合'
      } else if (this.grade === 2) {
        return '适合'
      } else if (this.grade === 1) {
        return '较适合'
      } else {
        return '较适合'
      }
    },
    fitLineBg () {
      if (this.grade === 4) {
        return 'four'
      } else if (this.grade === 3) {
        return 'three'
      } else if (this.grade === 2) {
        return 'two'
      } else if (this.grade === 1) {
        return 'one'
      } else {
        return 'one'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.fitLineTitle{
    display: flex;
    margin-bottom: .187rem;
    h2{
        flex: 1;
        font-size: .427rem;
        font-weight: bold;
    }
    .fitLine{
        width: 4.8rem;
        height: .56rem;
        margin-right: .32rem;
        position: relative;
        text-align: center;
        .fitLineText{
        color: #ffc000;
        font-size: .32rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: .053rem;
        z-index: 10;
        display: inline-block;
        background: #fff;
        padding: 0 2px;
        }
        .fitLineBg{
        width: 4.8rem;
        height: .56rem;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            width: .853rem;
            height: .16rem;
            background: #d4d4d4;
        }
        &.one{
            li:first-child{
            background: #ffc000;
            }
        }
        &.two{
            li:nth-child(1){
            background: #ffc000;
            }
            li:nth-child(2){
            background: #ffc000;
            }
        }
        &.three{
            li:nth-child(1){
            background: #ffc000;
            }
            li:nth-child(2){
            background: #ffc000;
            }
            li:nth-child(3){
            background: #ffc000;
            }
        }
        &.four{
            li{
            background: #ffc000;
            }
        }
        }
    }
}

</style>
