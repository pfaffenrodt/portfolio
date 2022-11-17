<template>
  <div class="overflow-hidden relative isolate" v-on:mousemove="updateCoordinates">
    <slot></slot>
    <div ref="highlight" class=" fixed mix-blend-difference bg-highlight pointer-events-none" :style="style">
    </div>
  </div>
</template>

<script lang="ts">

import gsap from 'gsap';
import { defineComponent } from 'vue';

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
      return [
        'width: '+this.size+'px',
        'height: '+this.size+'px',
        'border-radius: '+this.size+'px',
      ];
    }
  }
});
</script>
