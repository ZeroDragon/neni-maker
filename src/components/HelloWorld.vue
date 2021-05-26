<template lang="pug">
.hello
  h1 {{msg}}
  p
    |For a guide an recipes on how to configure / customize this project,
    br
    |checkout the&nbsp;
    a(href="https://cli.vuejs.org" target="_blank" rel="noopener") vue-cli documentation
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
