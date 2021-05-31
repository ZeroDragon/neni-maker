<template lang="pug">
.display(:style="{ 'background-image': `url(${publicPath}images/wa001.png)` }")
  System
  Header
  .messages
    Message(
      v-for="msg in messages"
      :key="msg.key"
      :type="msg.type"
      :text="msg.text"
      :time="msg.time"
    )
  Footer
</template>

<script>
import Message from '@/components/Message'
import System from '@/components/System'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'Display',
  computed: {
    messages () {
      return this.$store.state.messages
    },
    publicPath () {
      return this.$store.state.publicPath
    }
  },
  components: { Message, Header, Footer, System }
}
console.log(global.publicPath)
</script>

<style lang="stylus">
.display
  width: 450px
  min-width: 450px
  height: 100%
  display: flex
  flex-direction: column
  .messages
    flex-grow: 1
    overflow: auto
    margin-top: 2px
    &::-webkit-scrollbar
      display: none
</style>
