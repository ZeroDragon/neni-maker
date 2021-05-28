<template lang="pug">
.system
  .left
    .time {{time}}
  .right
    .icon: span.material-icons bluetooth
    .icon: span.material-icons access_alarm
    .icon: span.material-icons wifi
    .icon: span.material-icons signal_cellular_alt
    .icon: span.material-icons battery_alert
    .battery 15%

</template>
<script>
export default {
  name: 'System',
  computed: {
    time () {
      return this.$store.state.time
    }
  }
}
</script>
<style lang="stylus" scoped>
.system
  display: flex
  justify-content: space-between
  align-items: center
  height: 30px
  padding: 0 5px
  font-size: 15px
  background-color: #054D44
  .left, .right
    display: flex
    opacity: 0.7
  .icon
    width: 30px
    text-align: center
    span
      font-size: 20px
      line-height: 30px
  .battery
    font-size: 15px
    line-height: 30px
</style>
