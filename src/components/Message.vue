<template lang="pug">
.message(:class="type")
  Tail
  .inner
    .txtHolder
      span.text {{text}}
      span.time {{time}}
  Doublecheck
</template>
<script>
import Tail from '@/assets/tail.vue'
import Doublecheck from '@/assets/double-check.vue'
export default {
  name: 'Message',
  props: ['type', 'text', 'time'],
  components: {
    Tail,
    Doublecheck
  }
}
</script>
<style lang="stylus">
.message
  position: relative
  .txtHolder
    position: relative
    padding-right: 60px
    text-align: left
    .time
      font-size: 11px
      opacity: 0.6
      position: absolute
      bottom: -5px
      right: -5px
  svg
    display: none
    position: absolute
  .inner
    display: inline-block
    border-radius: 7.5px
    box-shadow: 0 1px .5px rgba(0,0,0,0.13)
    line-height: 21px
    padding: 5px 12px 6px
    color: #303030
    font-size: 14.2px
    max-width: calc(80% - 10px)
  &.incoming
    margin-left: 20px
    .txtHolder
      padding-right: 45px
    .svg-tail
      display: block
      top: 10px
      left: -8px
    .inner
      border-top-left-radius: 0
      background-color: #fff
  &.outgoing
    text-align: right
    margin-right: 15px
    svg
      display: block
    .svg-tail
      right: -8px
      transform: scaleX(-1)
      path
        fill: #DCF8C6
    .svg-check
      right: 4px
      bottom: 4px
      path
        fill: #4fc3f7
    .time
      right: 10px
    .inner
      border-top-right-radius: 0
      background-color: #DCF8C6
  &.system
    margin-top: 10px
    text-align: center
    .txtHolder
      padding-right: 0
    .inner
      font-size: 12.5px
      background-color: #e1f5fe
      color: #4a4a4a
      text-align: center
      text-transform: uppercase
    .time
      display: none
.message.system + .message.incoming
  padding-top: 10px
.message.system + .message.outgoing
  padding-top: 10px
.message.incoming + .message.outgoing
  padding-top: 10px
.message.outgoing + .message.incoming
  padding-top: 10px
.message.outgoing + .message.outgoing
  padding-top: 2px
  .inner
    border-radius: 7.5px
  .svg-tail
    display: none
.message.incoming + .message.incoming
  padding-top: 2px
  .inner
    border-radius: 7.5px
  .svg-tail
    display: none
</style>
