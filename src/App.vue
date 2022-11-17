<template>
  <Highlight>
    <div>
      <full-page ref="fullpage" :options="fullPageOptions">
        <Intro class="section"></Intro>
        <Skills class="section"></Skills>
        <Contact class="section"></Contact>
        <div class="section bg-[#555]">
          <Credits></Credits>
          <Legal></Legal>
        </div>
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
import Legal from './components/Legal.vue';

export default {
  name: 'App',
  components: {
    Legal,
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
