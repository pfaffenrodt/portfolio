<template>
  <Highlight>
    <div>
      <full-page ref="fullpage" :options="fullPageOptions">
        <Intro class="section"></Intro>
        <Skills class="section"></Skills>
        <Contact class="section"></Contact>
        <Credits class="section"></Credits>
      </full-page>
    </div>
  </Highlight>
</template>

<script>
import Intro from './components/Intro.vue'
import Highlight from './components/Highlight.vue'
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import Credits from './components/Credits.vue';

export default {
  name: 'App',
  components: {
    Contact,
    Credits,
    Highlight,
    Intro,
    Skills,
  },
  data() {
    return {
      fullPageOptions: {
        licenseKey: 'gplv3-license',
        // controlArrows: true,
        scrollBar: false,
        credits: { enabled: false },
        navigation: true,
      }
    }
  }
}
</script>
