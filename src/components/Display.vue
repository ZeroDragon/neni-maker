<template lang="pug">
.display
  Header
  .messages
    Message(
      type="system",
      text="YESTERDAY"
    )
    Message(
      type="incoming",
      text="Hola, aun está a la venta la alfombra de pelitos de gato persa?",
      time="9:04PM"
    )
    Message(
      type="incoming",
      text="Hola?",
      time="9:04PM"
    )
    Message(
      type="outgoing",
      text="Hola, neni, claro que si, es hecho a mano y es de muy buena calidad",
      time="9:05PM"
    )
    Message(
      type="incoming",
      text="Hola, aun está a la venta la alfombra de pelitos de gato persa?",
      time="9:04PM"
    )
    Message(
      type="system",
      text="TODAY"
    )
    Message(
      type="incoming",
      text="Hola, aun está a la venta la alfombra de pelitos de gato persa?",
      time="9:04PM"
    )
    Message(
      type="outgoing",
      text="Hola, neni, claro que si, es hecho a mano y es de muy buena calidad",
      time="9:05PM"
    )
    Message(
      type="outgoing",
      text="Te interesa?",
      time="9:06PM"
    )
    Message(
      type="outgoing",
      text="Te interesa?",
      time="9:06PM"
    )
  Footer
</template>

<script>
import Message from '@/components/Message'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'Display',
  components: { Message, Header, Footer }
}
</script>

<style lang="stylus">
.display
  width: 50%
  height: 100%
  background-image: url('/images/wa001.png')
</style>
