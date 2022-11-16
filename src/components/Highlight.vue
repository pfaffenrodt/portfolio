<template>
  <div class="overflow-hidden bg-blue-900 relative isolate" v-on:mousemove="updateCoordinates">
    <slot></slot>
    <div ref="highlight" class=" absolute mix-blend-difference" :style="style">
    </div>
  </div>
</template>

<script lang="ts">

import gsap from 'gsap';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  data() {
    const size = 300;
    return {
      size,
      halfSize: size / 2,
    }
  },
  methods: {
    updateCoordinates: function(event) {
      const halfSize = this.halfSize;
      const x = event.clientX;
      const y = event.clientY;

      gsap.to(this.$refs['highlight'], {
        top: (y - halfSize) + 'px',
        left: (x - halfSize) + 'px',
        duration: 4,
        ease: "elastic",
      });
    }
  },
  computed: {
    style() {
      const bgWebKit = "white" ;

      return [
        'width: '+this.size+'px',
        'height: '+this.size+'px',
        'border-radius: '+this.size+'px',
        'background: '+bgWebKit,
      ];
    }
  }
});
</script>
