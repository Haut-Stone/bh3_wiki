<template>
  <div class="star" :style="'width:' + this.starWidth"></div>
</template>

<script>
export default {
  name: 'Star',
  props: {
    star: {
      type: Number,
      default: 1
    }
  },
  computed: {
    starWidth () {
      if (this.star > 5) {
        return '1.533rem'
      } else {
        return this.star / 5 * 1.533 + 'rem'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.star{
  width: 1.533rem;
  height: .267rem;
  background: url('../assets/images/star.png') no-repeat;
  background-size: 1.533rem .267rem;
}
</style>
