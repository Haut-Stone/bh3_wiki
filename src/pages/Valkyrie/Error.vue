<template>
  <div class="error">
  </div>
</template>

<script>
export default {
  name: 'error',
  data () {
    return {
      msg: '404'
    }
  }
}
</script>

<style scoped lang="scss">
.error{
  width: 100%;
  height: 100%;
  background: url('../../assets/images/errorBg.jpg') center no-repeat;
  background-size: auto 100%;
}
</style>
