<template>
  <Highlight>
    <Intro></Intro>
  </Highlight>
</template>

<script>
import Intro from './components/Intro.vue'
import Highlight from './components/Highlight.vue'

export default {
  name: 'App',
  components: {
    Highlight,
    Intro,
  }
}
</script>
