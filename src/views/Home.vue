<template lang="pug">
.home
  Display
  Editor
</template>

<script>
import Display from '@/components/Display'
import Editor from '@/components/Editor'
export default {
  name: 'Home',
  components: {
    Display,
    Editor
  }
}
</script>

<style lang="stylus">
.home
  display: flex
  width: 100%
  height: 100vh
</style>
