<template lang="pug">
.inputValue
  label
    span {{label}}
    input(:value="val", @input="updateValue($event.target.value)")
</template>

<script>
export default {
  name: 'InputValue',
  computed: {
    val () {
      return this.$store.state[this.field]
    }
  },
  methods: {
    updateValue (value) {
      this.$store.commit('update', { item: this.field, value: value })
    }
  },
  props: ['label', 'field']
}
</script>
<style lang="stylus">
.inputValue
  display: block
  span
    display: block
</style>
