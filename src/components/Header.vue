<template>
  <header class="bg-transparent text-white p-0 sticky top-0 z-50">
    <div class="flex items-center justify-between content-wrapper">
      <router-link to="/" class="flex-shrink-0" style="width: 12rem;">
        <img src="/LOGO.png" alt="logo" class="w-28 h-auto sm:w-28 md:w-32 lg:w-36 xl:w-44 custom-logo-color" />
      </router-link>
      <div class="flex items-center gap-4 ml-auto">
        <a href="https://www.linkedin.com/in/fred-brosman" target="_blank" rel="noopener noreferrer" class="inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="text-customBlue hover:text-blue-800 transition duration-300" viewBox="0 0 24 24">
            <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.16 20.452H3.648V9.036H7.16v11.416zM5.404 7.6c-1.104 0-1.993-.89-1.993-1.986 0-1.095.89-1.985 1.993-1.985s1.992.89 1.992 1.985c0 1.096-.888 1.986-1.992 1.986zM20.452 20.452h-3.516v-5.69c0-1.356-.027-3.098-1.889-3.098-1.892 0-2.181 1.477-2.181 3.003v5.785h-3.516V9.036h3.38v1.556h.049c.47-.888 1.613-1.822 3.318-1.822 3.548 0 4.201 2.334 4.201 5.368v6.314z"/>
          </svg>
        </a>
        <a href="https://drive.google.com/file/d/13_nzqKP1soc1VWG6XjZrV51PDIjP2vGx/view?usp=sharing" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="text-customBlue hover:text-blue-800 transition duration-300 rounded-sm" viewBox="0 0 24 24">
            <rect width="24" height="24" fill="currentColor"/>
            <text x="12" y="18" font-family="Arial" font-size="10" fill="custom" text-anchor="middle" class="text-customSnuff font-bold text-base text-center">CV</text>
          </svg>
        </a>
      </div>
<!--      <div class="flex items-center">-->
<!--        <button class="text-white focus:outline-none">-->
<!--          &lt;!&ndash; Burger menu icon &ndash;&gt;-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="text-customBlue" viewBox="0 0 24 24">-->
<!--            <path d="M4 5h16M4 12h16M4 19h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--          </svg>-->
<!--        </button>-->
<!--      </div>-->
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
}

</script>