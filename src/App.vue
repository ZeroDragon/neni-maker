<template lang="pug">
#nav
  router-link(to="/") Home
  |&nbsp;
  router-link(to="/about") About
router-view
</template>

<style lang="stylus">
#app
  text-align center
</style>
