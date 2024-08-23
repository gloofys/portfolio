<template>
  <footer class="relative h-[200px]" :style="{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }">
    <div class="relative h-[calc(100vh+200px)] -top-[100vh]">
      <div class="h-[200px] sticky top-[calc(100vh-200px)] bg-customBlue text-customSnuff flex items-center justify-between p-8">
        <div class="flex items-center space-x-4">
          <img src="/self_no_bg.png" alt="Your Image" class="w-48 h-auto rounded-full shadow-lg" />
          <div>
            <h2 class="text-2xl font-bold">Fred Brosman</h2>
            <p class="text-sm">Web Developer & Designer</p>
          </div>
        </div>
        <div class="flex flex-grow items-center justify-center space-x-8">
          <div class="flex flex-col items-center">
            <a href="mailto:fred.brosman06@gmail.com" class="text-lg font-medium hover:underline">
              fred.brosman06@gmail.com
            </a>
            <p class="text-sm text-gray-400">Feel free to reach out anytime</p>
          </div>
          <div class="flex flex-col items-center">
            <a href="tel:+37256863593" class="text-lg font-medium hover:underline">
              +37256863593
            </a>
            <p class="text-sm text-gray-400">Mon - Fri, 9am - 6pm</p>
          </div>
        </div>
        <div class="flex items-center space-x-4 mr-8">
          <a href="https://linkedin.com/in/yourprofile" target="_blank">
            <img src="/LOGO.png" alt="LinkedIn" class="w-6 h-6 hover:opacity-75 transition-opacity duration-300">
          </a>
          <a href="https://github.com/gloofys" target="_blank">
            <img src="/favicon.ico" alt="GitHub" class="w-6 h-6 hover:opacity-75 transition-opacity duration-300">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.bg-customBlue {
  background-color: #1a202c; /* Example color, adjust to your theme */
}

.text-customSnuff {
  color: #f7fafc; /* Example color, adjust to your theme */
}


</style>
