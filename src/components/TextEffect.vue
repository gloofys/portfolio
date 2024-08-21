<template>
  <component
      :is="as"
      ref="containerRef"
      :class="className"
      aria-label="textContent"
  >
    <span v-for="(word, index) in words" :key="index" class="inline-block whitespace-pre">
      <template v-if="per === 'word'">
        <span :ref="el => wordRefs[index] = el" :class="'word-' + index" class="will-change">{{ word }}</span>
      </template>
      <template v-else>
        <span v-for="(char, charIndex) in word.split('')" :key="charIndex" :ref="el => charRefs[charIndex] = el" class="will-change">
          <span :class="'char-' + charIndex">{{ char }}</span>
        </span>
      </template>
    </span>
  </component>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { gsap } from 'gsap';

export default {
  props: {
    per: {
      type: String,
      default: 'word',
    },
    as: {
      type: String,
      default: 'p',
    },
    preset: String,
    className: String,
  },
  setup(props, { slots }) {
    const containerRef = ref(null);
    const wordRefs = ref([]);
    const charRefs = ref([]);
    const words = computed(() => slots.default()[0].children.split(/(\S+\s*)/).filter(Boolean));

    const animateWords = () => {
      const tl = gsap.timeline({ defaults: { stagger: 0.1, ease: "power2.out" } });
      const elements = props.per === 'word' ? wordRefs.value : charRefs.value;

      if (props.preset === 'blur') {
        tl.fromTo(elements, { opacity: 0, filter: 'blur(12px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.8 });
      } else if (props.preset === 'shake') {
        tl.fromTo(elements, { x: 0 }, { x: [-5, 5, -5, 5, 0], duration: 0.8 });
      } else if (props.preset === 'scale') {
        tl.fromTo(elements, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.8 });
      } else if (props.preset === 'fade') {
        tl.fromTo(elements, { opacity: 0 }, { opacity: 1, duration: 0.8 });
      } else if (props.preset === 'slide') {
        tl.fromTo(elements, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 });
      }
    };

    const observeElement = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateWords();
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.5,
      });

      if (containerRef.value) {
        observer.observe(containerRef.value);
      }
    };

    onMounted(() => {
      observeElement();
    });

    return { containerRef, wordRefs, charRefs, words };
  },
};
</script>

<style>
.will-change {
  will-change: opacity, transform;
}
</style>
