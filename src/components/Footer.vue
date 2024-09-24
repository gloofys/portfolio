<template>
  <footer class="relative h-[200px]" :style="{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }">
    <div class="relative h-[calc(100vh+200px)] -top-[100vh]">
      <div class="h-[200px] sticky top-[calc(100vh-200px)] bg-customBlue text-customSnuff flex items-center justify-between content-wrapper">
        <!-- Left Section -->
        <div class="flex items-center justify-start flex-grow basis-1/4">
          <img src="/self_no_bg.png" alt="Your Image" class="w-20 sm:w-24 md:w-32 lg:w-40 h-auto rounded-full" />
        </div>

        <!-- Middle Section -->
        <div class="flex flex-col items-center justify-center flex-grow basis-2/4 text-center px-2">
          <p class="text-xs sm:text-sm md:text-lg xl:text-2xl mb-2 md:mb-4">Feel free to contact me any time</p>
          <div class="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4">
            <a href="mailto:fred.brosman06@gmail.com" class="text-xs sm:text-sm md:text-lg font-medium hover:underline mb-2 sm:mb-0">
              fred.brosman06@gmail.com
            </a>
            <a href="tel:+37256863593" class="text-xs sm:text-sm md:text-lg font-medium hover:underline">
              +37256863593
            </a>
          </div>
        </div>

        <!-- Right Section -->
        <div class="flex items-center justify-end flex-grow basis-1/4 space-x-4">
          <a href="https://www.linkedin.com/in/fred-brosman" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 text-customBlue hover:text-blue-800 transition duration-300" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.16 20.452H3.648V9.036H7.16v11.416zM5.404 7.6c-1.104 0-1.993-.89-1.993-1.986 0-1.095.89-1.985 1.993-1.985s1.992.89 1.992 1.985c0 1.096-.888 1.986-1.992 1.986zM20.452 20.452h-3.516v-5.69c0-1.356-.027-3.098-1.889-3.098-1.892 0-2.181 1.477-2.181 3.003v5.785h-3.516V9.036h3.38v1.556h.049c.47-.888 1.613-1.822 3.318-1.822 3.548 0 4.201 2.334 4.201 5.368v6.314z"/>
            </svg>
          </a>
          <a href="https://github.com/gloofys" target="_blank">
            <img src="/github-mark-white.png" alt="GitHub" class="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 hover:opacity-75 transition-opacity duration-300">
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
  background-color: #1a202c;
}

.text-customSnuff {
  color: #f7fafc;
}
</style>
