<template lang="pug">
.display
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
    //- Message(
      //- type="system",
      //- text="YESTERDAY"
      //- time="9:04PM"
    //- )
    //- Message(
      //- type="incoming",
      //- text="Hola, aun está a la venta la alfombra de pelitos de gato persa?",
      //- time="9:04PM"
    //- )
    //- Message(
      //- type="incoming",
      //- text="Hola?",
      //- time="9:04PM"
    //- )
    //- Message(
      //- type="outgoing",
      //- text="Hola, neni, claro que si, es hecho a mano y es de muy buena calidad",
      //- time="9:05PM"
    //- )
    //- Message(
      //- type="incoming",
      //- text="Hola, aun está a la venta la alfombra de pelitos de gato persa?",
      //- time="9:04PM"
    //- )
    //- Message(
      //- type="system",
      //- text="TODAY"
    //- )
    //- Message(
      //- type="incoming",
      //- text="Hola, aun está a la venta la alfombra de pelitos de gato persa?",
      //- time="9:04PM"
    //- )
    //- Message(
      //- type="outgoing",
      //- text="Hola, neni, claro que si, es hecho a mano y es de muy buena calidad",
      //- time="9:05PM"
    //- )
    //- Message(
      //- type="outgoing",
      //- text="Te interesa?",
      //- time="9:06PM"
    //- )
    //- Message(
      //- type="outgoing",
      //- text="Te interesa?",
      //- time="9:06PM"
    //- )
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
    }
  },
  components: { Message, Header, Footer, System }
}
</script>

<style lang="stylus">
.display
  width: 450px
  min-width: 450px
  height: 100%
  background-image: url('/images/wa001.png')
  display: flex
  flex-direction: column
  .messages
    flex-grow: 1
    overflow: auto
    margin-top: 2px
    &::-webkit-scrollbar
      display: none
</style>
