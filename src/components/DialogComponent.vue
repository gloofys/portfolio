<template>
  <div>
    <!-- Dialog Trigger (Add @keydown to handle Enter/Space key) -->
    <div
        class="bg-customSnuff cursor-pointer relative transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
        @click="toggleDialog"
        @keydown="handleKeydown"
    ref="triggerRef"
    tabindex="0"
    >
    <div class="flex items-center space-x-4 border-2 rounded border-customBlue p-4 sm:space-x-1">
      <img
          :src="imageSrc"
          :alt="imageAlt"
          class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain object-center"
      />

      <div class="flex flex-col items-start justify-center space-y-0">
        <h3 class="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px] font-medium text-black">{{ dialogTitle }}</h3>
        <p class="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-600">{{ dialogSubtitle }}</p>
      </div>
    </div>
  </div>

  <!-- Dialog Content (Only displayed when isOpen is true) -->
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <div
        class="fixed inset-0 h-full w-full bg-white/40 backdrop-blur-sm"
        @click="toggleDialog"
    ></div>
    <div
        class="relative h-auto w-[500px] lg:w-[900px] border border-gray-100 bg-white p-6"
        style="border-radius: 12px;"
        ref="dialogRef"
    >
      <div class="flex justify-center py-10">
        <img
            :src="imageSrc"
            :alt="imageAlt"
            class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
        />
      </div>
      <div>
        <h3 class="text-black text-lg lg:text-2xl">{{ dialogTitle }}</h3>
        <p class="font-light text-gray-400">{{ dialogSubtitle }}</p>
        <div class="mt-4 text-sm lg:text-xl text-gray-700 space-y-2">
          <p>{{ dialogDescription1 }}</p>
          <p>{{ dialogDescription2 }}</p>
          <p>{{ dialogDescription3 }}</p>
          <p>
            <a :href="linkUrl" target="_blank" class="text-blue-500 hover:text-blue-700">{{ dialogDescription4 }}</a>
          </p>
        </div>
      </div>
      <button @click="toggleDialog" class="absolute right-6 top-6 text-zinc-500" ref="closeBtn">Close</button>
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
      focusableElements: null,  // Elements to trap focus
    };
  },
  methods: {
    toggleDialog() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.openDialog();
        document.addEventListener('keydown', this.handleEscClose);  // Add ESC key listener
        this.$nextTick(() => {
          this.focusableElements = this.getFocusableElements();
          this.focusableElements[0].focus();  // Set focus to the first focusable element in the dialog
          document.addEventListener('keydown', this.handleTabKey);  // Add Tab key listener
        });
      } else {
        this.closeDialog();
        document.removeEventListener('keydown', this.handleEscClose);  // Remove ESC key listener
        document.removeEventListener('keydown', this.handleTabKey);  // Remove Tab key listener
        this.$refs.triggerRef.focus();  // Return focus to the trigger
      }
    },
    openDialog() {
      this.$nextTick(() => {
        gsap.fromTo(this.$refs.dialogRef, { opacity: 0 }, { opacity: 1, duration: 0.5 });
      });
    },
    closeDialog() {
      gsap.to(this.$refs.dialogRef, { opacity: 0, duration: 0.5 });
    },
    handleEscClose(event) {
      if (event.key === 'Escape') {
        this.closeDialog();
        this.isOpen = false;  // Ensure isOpen is false
      }
    },
    handleTabKey(event) {
      if (event.key === 'Tab') {
        const firstElement = this.focusableElements[0];
        const lastElement = this.focusableElements[this.focusableElements.length - 1];

        if (event.shiftKey) {  // If Shift+Tab is pressed
          if (document.activeElement === firstElement) {
            lastElement.focus();  // Loop back to the last element
            event.preventDefault();
          }
        } else {  // If Tab is pressed
          if (document.activeElement === lastElement) {
            firstElement.focus();  // Loop back to the first element
            event.preventDefault();
          }
        }
      }
    },
    handleKeydown(event) {
      // Handle Enter or Space key to open the dialog
      if (event.key === 'Enter' || event.key === ' ') {
        this.toggleDialog();
      }
    },
    getFocusableElements() {
      const focusableSelectors = [
        'a[href]',
        'button',
        'input',
        'textarea',
        'select',
        '[tabindex]:not([tabindex="-1"])',
      ];
      return this.$refs.dialogRef.querySelectorAll(focusableSelectors.join(', '));
    },
  },
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
