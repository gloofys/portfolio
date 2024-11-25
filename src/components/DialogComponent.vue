<template>
  <div>
    <!-- Dialog Trigger (Add @keydown to handle Enter/Space key) -->
    <div
        class="bg-customSnuff cursor-pointer relative transform sm:hover:scale-105 sm:hover:shadow-lg transition-transform duration-300"
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

      <div class="flex flex-col items-start justify-center space-y-0 text-container">
        <h3 class="dialog-title">{{ dialogTitle }}</h3>
        <p class="dialog-subtitle">{{ dialogSubtitle }}</p>
      </div>

    </div>
  </div>

  <!-- Dialog Content (Only displayed when isOpen is true) -->
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <div
        class="fixed  inset-0 h-full w-full bg-white/40 backdrop-blur-sm"
        @click="toggleDialog"
    ></div>
    <div
        class="relative h-auto w-[500px] lg:w-[900px] border border-gray-100 bg-white p-6 dialog-content"
        style="border-radius: 12px;"
        ref="dialogRef"
    >
      <div class="flex justify-center py-10">
        <img
            :src="imageSrc"
            :alt="imageAlt"
            class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg h-auto"
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
    id: String, // Unique identifier for each dialog
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
      focusableElements: null,
    };
  },
  methods: {
    toggleDialog() {
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        document.body.style.overflow = 'hidden';  // Disable page scroll
        this.openDialog();

        history.pushState({ dialogOpen: this.id }, ''); // Use dialog's unique ID in state

        window.addEventListener('popstate', this.handlePopState); // Handle back button

        this.$nextTick(() => {
          this.focusableElements = this.getFocusableElements();
          this.focusableElements[0].focus();  // Focus on first element in the dialog
          document.addEventListener('keydown', this.handleTabKey);  // Tab key navigation
          document.addEventListener('keydown', this.handleEscClose);  // Esc to close dialog
        });
      } else {
        document.body.style.overflow = '';  // Re-enable page scroll
        this.closeDialog();
        window.removeEventListener('popstate', this.handlePopState);
        this.$refs.triggerRef.focus();  // Return focus to trigger element
      }
    },

    handleEscClose(event) {
      if (event.key === 'Escape' && this.isOpen) {
        this.toggleDialog();  // Close the current dialog with Esc
      }
    },

    handlePopState(event) {
      if (event.state && event.state.dialogOpen === this.id) {
        this.toggleDialog();  // Close the dialog when back is pressed
      }
    },

    openDialog() {
      this.$nextTick(() => {
        if (this.$refs.dialogRef) {
          gsap.fromTo(this.$refs.dialogRef, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        }
      });
    },

    closeDialog() {
      if (this.$refs.dialogRef) {
        gsap.to(this.$refs.dialogRef, { opacity: 0, duration: 0.5 });
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
};


</script>

<style scoped>
.dialog-content {
  /* General settings for both portrait and landscape */
  max-height: 90vh; /* Ensure dialog doesn't exceed 90% of the viewport height */
  overflow: auto;   /* Allow scrolling when content exceeds max-height */
}


@media screen and (orientation: landscape) {
  .dialog-content {
    width: 80vw;     /* Only in landscape mode */
    max-width: 100vh; /* Max width in landscape */
  }
}

@media screen and (orientation: portrait) {
  .dialog-content {
    width: 90vw;     /* Adjust width for portrait mode */
    max-height: 90vh; /* Restrict height to allow scrolling */
  }
}
</style>
