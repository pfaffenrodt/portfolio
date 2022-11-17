<template>
  <a v-if="enabled" :href="mailLink" class="cursor-pointer flex items-center">
    <envelope-icon class="mr-5 w-5 h-5 sm:w-10 sm:h-10 md:w-16 md:h-16"></envelope-icon>
    {{ mail }}
  </a>
</template>

<script>
import { EnvelopeIcon } from '@heroicons/vue/24/solid'
import MailLink from "./MailLink";
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    EnvelopeIcon,
  },
  data() {
    return {
      enabled: false,
    }
  },
  computed: {
    mailLink() {
      const mailLink = new MailLink();
      return mailLink.link();
    },
    mail() {
      const mailLink = new MailLink();
      return mailLink.mail();
    }
  },
  mounted() {
    setTimeout(() => this.enabled = true, 400);
  },
});
</script>
