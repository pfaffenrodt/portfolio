<template>
  <a v-if="enabled" :href="phoneLink" class="cursor-pointer flex items-center">
    <phone-icon v-if="showIcon" class="mr-5 w-5 h-5 sm:w-10 sm:h-10 md:w-16 md:h-16"></phone-icon>
    {{ phone }}
  </a>
</template>

<script>
import { PhoneIcon } from '@heroicons/vue/24/solid'
import PhoneLink from "./PhoneLink";
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    showIcon: {
      type: Boolean,
      default: true,
    }
  },
  components: {
    PhoneIcon,
  },
  data() {
    return {
      enabled: false,
    }
  },
  computed: {
    phoneLink() {
      const phoneLink = new PhoneLink();
      return phoneLink.link();
    },
    phone() {
      const phoneLink = new PhoneLink();
      return phoneLink.phone();
    }
  },
  mounted() {
    setTimeout(() => this.enabled = true, 400);
  },
});
</script>
