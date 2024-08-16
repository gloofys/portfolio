<template>
  <div>
    <!-- Dialog Trigger -->
    <div
        class="bg-customSnuff cursor-pointer relative"
        @click="toggleDialog"
        ref="triggerRef"
    >
      <div class="flex items-center space-x-3 border-2 rounded border-customBlue p-4">
        <img
            :src="imageSrc"
            :alt="imageAlt"
            class="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 object-cover object-top"
        />
        <div class="flex flex-col items-start justify-center space-y-0">
          <h3 class="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium text-black">{{ dialogTitle }}</h3>
          <p class="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-600">{{ dialogSubtitle }}</p>
        </div>
      </div>
    </div>

    <!-- Dialog Content -->
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
      <div
          class="fixed inset-0 h-full w-full bg-white/40 backdrop-blur-sm"
          @click="toggleDialog"
      ></div>
      <div
          class="relative h-auto w-[500px] border border-gray-100 bg-white p-6"
          style="border-radius: 12px;"
          ref="dialogRef"
      >
        <div class="flex justify-center py-10">
          <img
              :src="imageSrc"
              :alt="imageAlt"
              class="h-auto w-[300px]"
          />
        </div>
        <div>
          <h3 class="text-black">{{ dialogTitle }}</h3>
          <p class="font-light text-gray-400">{{ dialogSubtitle }}</p>
          <div class="mt-4 text-sm text-gray-700 space-y-2">
            <p>{{ dialogDescription1 }}</p>
            <p>{{ dialogDescription2 }}</p>
            <p>{{ dialogDescription3 }}</p>
            <p>
              <a :href="linkUrl" target="_blank" class="text-blue-500 hover:text-blue-700">{{ dialogDescription4 }}</a>
            </p>
          </div>
        </div>
        <button @click="toggleDialog" class="absolute right-6 top-6 text-zinc-500">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'DialogComponent',
  props: {
    imageSrc: String,
    imageAlt: String,
    dialogTitle: String,
    dialogSubtitle: String,
    dialogDescription1: String,
    dialogDescription2: String,
    dialogDescription3: String,
    dialogDescription4: String,
    linkUrl: String,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDialog() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    },
    openDialog() {
      this.$nextTick(() => {
        gsap.fromTo(this.$refs.dialogRef, {opacity: 0}, {opacity: 1, duration: 0.5});
      });
    },
    closeDialog() {
      gsap.to(this.$refs.dialogRef, {opacity: 0, duration: 0.5});
    },
  },
}
</script>

<style scoped>
/* Add your custom styles here */
</style>