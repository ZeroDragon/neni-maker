<template lang="pug">
.editor
  Inputvalue(label='Hora', field='time')
  Inputvalue(label='Nombre', field='name')
  Inputvalue(label='Status', field='status')
  Inputvalue(label='Avatar', field='avatar')
  br
  | Mensajes
  textarea(:value="rawText", @input="updateChat($event.target.value)")
  div
    |si te gusta esto, considera hacer una&nbsp;
    a(href="https://creadores.fans/zerodragon" target="_blank") donación
    | &nbsp;:3
</template>

<script>
import Inputvalue from '@/components/Inputvalue.vue'
const rawText = `system
ayer
=====
incoming
Hola, aun está a la venta?
9:19AM
=====
outgoing
Si, aun está a la venta
9:20AM
=====
system
hoy
=====
incoming
Ah, ya no me interesa, gracias por perder mi tiempo
12:25PM
`
export default {
  name: 'Editor',
  data: () => ({
    rawText
  }),
  methods: {
    updateChat (value) {
      this.$store.commit('updateMessages', value)
    }
  },
  components: {
    Inputvalue
  },
  mounted () {
    this.$store.commit('updateMessages', rawText)
  }
}
</script>

<style lang="stylus">
.editor
  padding: 20px
  width: 50%
  height: 100%
  textarea
    width: 100%
    margin: auto
    height: 50%
    color: #fff
    background-color: rgba(0,0,0,0.4)
    border: none
    outline: none
    padding: 10px
  a
    color: aqua
</style>
