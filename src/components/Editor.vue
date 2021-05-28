<template lang="pug">
.editor
  Inputvalue(label='Hora', field='time')
  Inputvalue(label='Nombre', field='name')
  Inputvalue(label='Status', field='status')
  Inputvalue(label='Avatar', field='avatar')
</template>

<script>
import Inputvalue from '@/components/Inputvalue.vue'

export default {
  name: 'Editor',
  components: {
    Inputvalue
  }
}
</script>

<style lang="stylus">
.editor
  padding: 20px
  width: 50%
  height: 100%
</style>
