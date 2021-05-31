<template lang="pug">
.footer
  .texter
    .icon: Smiley
    input(placeholder="Type a message")
    .icon: Clip
    .icon: span.material-icons camera_alt
  .icon.alt: span.material-icons mic
</template>

<script>
import Smiley from '@/assets/smiley'
import Clip from '@/assets/clip'
export default {
  name: 'Footer',
  components: { Smiley, Clip }
}
</script>

<style lang="stylus">
.footer
  height: 60px
  padding: 5px 5px
  display: flex
  justify-content: space-between
  margin-bottom: 5px
  .texter
    display: flex
    align-items: center
    background-color: #fff
    flex-grow: 1
    border-radius: 30px
    margin-right: 5px
  .icon
    margin: 15px 10px 10px 10px
    span
      font-size: 30px
      color: #aaa
    path
      fill: #aaa
  input
    border: none
    font-size: 20px
    outline: none
    opacity: 0.5
    width: 90%
  .icon.alt
    margin: 0
    background-color: #075E54
    width: 50px
    height: 50px
    border-radius: 50%
    text-align: center
    line-height: 65px
    span
      color: #fff
</style>
