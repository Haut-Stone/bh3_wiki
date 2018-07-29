<template>
  <div class="roleName">
    <div class="title-en">{{armorData.roleNameEn}}</div>
    <div class="title">{{armorData.roleName}}</div>
    <div class="armorName" v-if="armorName !== '' && armorData.armorName">
      <div class="type" :class="armorTypeClass">{{armorData.armorType}}</div>
      <div class="name">{{armorData.armorName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoleName',
  props: {
    armorData: {
      type: Object
    },
    armorName: {
      type: String
    }
  },
  computed: {
    armorTypeClass () {
      if (this.armorData.armorType === '生物') {
        return 'biological'
      } else if (this.armorData.armorType === '异能') {
        return 'ability'
      } else if (this.armorData.armorType === '机械') {
        return 'mechanical'
      } else {
        return 'biological'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.roleName{
  margin-top: 0.933rem;
  .title-en{
    font-size: .267rem;
    color: #585858;
    font-weight: bold;
    text-align: center;
  }
  .title{
    font-size: .64rem;
    font-weight: bold;
    text-align: center;
  }
  .armorName{
    width: 3.307rem;
    line-height: .533rem;
    text-align: center;
    font-size: 0;
    margin: .16rem auto 0;
    border: 1px solid #d9d9d9;
    border-radius: .533rem;
    .type, .name{
      vertical-align: middle;
      display: inline-block;
      font-size: .32rem;
    }
    .type{
      margin-right: .16rem;
      &.biological{
        color: #ffb22b;
        &::before{
          content: "";
          display: inline-block;
          vertical-align: middle;
          margin-right: 2px;
          width: .347rem;
          height: .347rem;
          background: url("../../assets/images/biological.png") no-repeat;
          background-size: .347rem;
        }
      }
      &.ability{
        color: #f74599;
        &::before{
          content: "";
          display: inline-block;
          vertical-align: middle;
          margin-right: 2px;
          width: .347rem;
          height: .347rem;
          background: url("../../assets/images/ability.png") no-repeat;
          background-size: .347rem;
        }
      }
      &.mechanical{
        color: #3fc8fe;
        &::before{
          content: "";
          display: inline-block;
          vertical-align: middle;
          margin-right: 2px;
          width: .347rem;
          height: .347rem;
          background: url("../../assets/images/mechanical.png") no-repeat;
          background-size: .347rem;
        }
      }
    }
  }
}
</style>
