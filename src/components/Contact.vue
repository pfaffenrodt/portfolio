<template>
  <div class="bg-[#ccc]">
    <div class="overflow-hidden">
      <div class="mx-auto max-w-7xl p-10">
        <h2 class="text-2xl sm:text-5xl md:text-9xl font-semibold">Get in touch</h2>
        <hr class="my-10">
        <phone-link-button class="text-xl sm:text-4xl md:text-6xl md:mb-5 hover:text-blue-200 hover:bg-blue-900 -mx-5 px-5 py-5 rounded-2xl"></phone-link-button>
        <mail-link-button class="text-xl sm:text-4xl md:text-6xl hover:text-blue-200 hover:bg-blue-900 -mx-5 px-5 py-5 rounded-2xl"></mail-link-button>
      </div>

    </div>
  </div>
</template>

<script>
import PhoneLinkButton from "./PhoneLinkButton.vue";
import MailLinkButton from "./MailLinkButton.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    MailLinkButton,
    PhoneLinkButton,
  }
});
</script>
