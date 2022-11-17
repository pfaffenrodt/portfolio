<template>
  <Highlight>
    <Intro></Intro>
    <Skills></Skills>
  </Highlight>
</template>

<script>
import Intro from './components/Intro.vue'
import Highlight from './components/Highlight.vue'
import Skills from './components/Skills.vue';

export default {
  name: 'App',
  components: {
    Highlight,
    Intro,
    Skills,
  }
}
</script>
