<template>
  <footer class="relative h-[200px]" :style="{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }">
    <div class="relative h-[calc(100vh+200px)] -top-[100vh]">
      <div class="h-[200px] sticky top-[calc(100vh-200px)] bg-customBlue text-customSnuff flex items-center justify-between content-wrapper">
        <!-- Left Section -->
        <div class="flex items-center flex-grow basis-1/3">
          <img src="/self_no_bg.png" alt="Your Image" class="w-32 md:w-48 h-auto rounded-full" />
        </div>

        <!-- Middle Section -->
        <div class="flex flex-col items-center justify-center flex-grow basis-1/3 text-center">
          <!-- This text will be smaller on mobile and larger on medium screens and up -->
          <p class="text-sm mb-4 md:text-lg xl:text-2xl">Feel free to contact me any time</p>

          <div class="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-8">
            <div class="flex flex-col items-center mb-2 md:mb-0">
              <!-- Adjust text size responsively -->
              <a href="mailto:fred.brosman06@gmail.com" class="text-sm md:text-lg xl:text-xl font-medium hover:underline">
                fred.brosman06@gmail.com
              </a>
            </div>
            <div class="flex flex-col items-center">
              <!-- Adjust text size responsively -->
              <a href="tel:+37256863593" class="text-sm md:text-lg font-medium hover:underline">
                +37256863593
              </a>
            </div>
          </div>
        </div>

        <!-- Right Section -->
        <div class="flex items-center justify-end flex-grow basis-1/3 space-x-4">
          <a href="https://linkedin.com/in/fred-brosman" target="_blank">
            <img src="/LI-In-Bug.png" alt="LinkedIn" class="w-6 h-6 hover:opacity-75 transition-opacity duration-300">
          </a>
          <a href="https://github.com/gloofys" target="_blank">
            <img src="/github-mark-white.png" alt="GitHub" class="w-6 h-6 hover:opacity-75 transition-opacity duration-300">
          </a>
<!--          <a href="https://drive.google.com/file/d/13_nzqKP1soc1VWG6XjZrV51PDIjP2vGx/view?usp=sharing" target="_blank">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="w-6 h-6 hover:opacity-75 transition-opacity duration-300 text-customBlue" viewBox="0 0 24 24">-->
<!--              <rect width="24" height="24" fill="currentColor"/>-->
<!--              <text x="12" y="18" font-family="Arial" font-size="10" fill="custom" text-anchor="middle" class="text-customSnuff font-bold text-base text-center">CV</text>-->
<!--            </svg>-->
<!--          </a>-->
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
