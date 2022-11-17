<template>
  <div class="mx-auto max-w-7xl p-10 bg-blue-900 text-blue-200">
    <ul>
      <li>
        <button v-on:click="showDataPrivacy = true">Datenschutz</button>
      </li>
      <li>
        <button v-on:click="showImprint = true">Impressum</button>
      </li>
    </ul>
    <modal :show="showImprint" v-on:close="showImprint = false">
      <x-mark-icon class="absolute top-5 right-5 w-10 h-10 cursor-pointer" v-on:click="showImprint = false"/>
      <imprint/>
    </modal>
    <modal :show="showDataPrivacy" v-on:close="showDataPrivacy = false">
      <x-mark-icon class="absolute top-5 right-5 w-10 h-10 cursor-pointer" v-on:click="showDataPrivacy = false"/>
      <data-privacy/>
    </modal>
  </div>
</template>

<script>
import {XMarkIcon} from '@heroicons/vue/24/solid';
import Modal from "./Modal.vue";
import {defineComponent} from 'vue';
import Imprint from "./Imprint.vue";
import DataPrivacy from "./DataPrivacy.vue";

export default defineComponent({
  components: {
    DataPrivacy,
    Imprint,
    Modal,
    XMarkIcon,
  },
  data() {
    return {
      showImprint: false,
      showDataPrivacy: false,
    }
  }
});
</script>
