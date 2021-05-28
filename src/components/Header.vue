<template lang="pug">
.header
  .arrow.icon
    span.material-icons arrow_back
  .otherUser
    .avatar
      img(:src="avatar")
    .userInfo
      .name {{name}}
      .status {{status}}
  .camera.icon
    span.material-icons videocam
  .phone.icon
    span.material-icons phone
  .menu.icon
    span.material-icons more_vert
</template>

<script>
export default {
  name: 'Header',
  computed: {
    avatar () {
      return this.$store.state.avatar
    },
    name () {
      return this.$store.state.name
    },
    status () {
      return this.$store.state.status
    }
  }
}
</script>

<style lang="stylus">
.header
  background-color: #075E54
  color: #fff
  height: 60px
  min-height: 60px
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)
  display: flex
  justify-content: space-between
  align-items: center
  .icon
    width: 60px
    text-align: center
    span
      font-size: 30px
  .otherUser
    display: flex
    flex-grow: 1
    .avatar
      width: 45px
      height: 45px
      border-radius: 50%
      img
        width: 45px
        height: 45px
        object-fit: cover
        border-radius: 50%
    .userInfo
      margin-left: 10px
      flex-grow: 1
      .name
        font-size: 22px
        line-height: 27px
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
      .status
        font-size: 14px
        opacity: 0.7
</style>
