<template>
  <div class="relative">
    <video autoplay loop muted playsinline class="w-full h-auto">
      <source src="/FFFFF0001-0200.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 flex items-center justify-center text-container -mt-72">
      <div class="text-center text-customFlamingo max-w-5xl p-4">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
          Hello! I'm Fred Brosman, a landscape construction supervisor transitioning into front-end development, driven by a passion for creating user-friendly websites as I build my skills in web design and coding.
        </h1>
      </div>
    </div>

    <div class="flex items-center text-container latest-projects-wrapper">
      <div class="text-center text-customFlamingo max-w-5xl">
        <h1 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
          Latest Projects
        </h1>
      </div>
    </div>

    <!-- Flex container for dialog components -->
    <div class="flex space-x-1 dialog-wrapper">
      <DialogComponent
          imageSrc="/public/project_images/Screenshot 2024-08-15 192616.png"
          imageAlt="What I Talk About When I Talk About Running - book cover"
          dialogTitle="Balaton Wines & Views Webpage"
          dialogSubtitle="Summer 2024"
          dialogDescription1="Comprehensive rental website for my family's property in the beautiful Badacsony region of Hungary"
          dialogDescription2="The primary goal of this project is to create a user-friendly platform to help my family manage rental bookings while providing a detailed and engaging experience for potential guests. The website promotes our property and the beautiful Badacsony region, making it easier for renters to find and book their stay."
          dialogDescription3="Vite, Vue.js, pure CSS, HTML, Vercel"
          dialogDescription4="Check out the page"
          linkUrl="https://badacsony.vercel.app"

      />
      <DialogComponent
          imageSrc="/public/project_images/Playpal logo transparent.png"
          imageAlt="What I Talk About When I Talk About Running - book cover"
          dialogTitle="Playpal-board game community"
          dialogSubtitle="Spring 2024"
          dialogDescription1="Group project made in Vali-IT(adult re-education program for junior software developer role) with Valle and Katrin."
          dialogDescription2="Our idea was to create a website for board game enthusiasts, where they could create and join different events. I was responsible for 75% of the projects back-end and about 25% front-end."
          dialogDescription3="Vue, Java, PostgreSQL, Swagger, Balsamiq, Bootstrap, Vertabelo"
          dialogDescription4="Lint to git project repository"
          linkUrl="https://github.com/vallekapstas/playpalback"
      />
    </div>
  </div>

<!--  4. Tools and Technologies-->
<!--  Why?: Listing the tools and technologies you’re proficient with helps potential employers quickly assess your technical skills.-->
<!--  What to Include: A grid or list of tools and technologies, such as HTML, CSS, JavaScript, Vue.js, Git, etc.-->
<!--  5.Attention to detail-->
<!--  Example: "Even when I’m told by colleagues a few millimeters don’t matter, I can’t help but make sure everything is spot-on—even if it means going the extra millimeter."-->
<!--  6.Persistence-->
<!--  Example: "I once started an intricate origami piece and spent 10 hours straight working on it because I couldn't stop until it was perfectly finished.-->
<!--  7.Continuous Growth-->
<!--  Example: "After mastering the challenges in my previous career, I found myself seeking new horizons where I could continue to learn and evolve. This led me to front-end development-->
<!--  8.Problem-Solving-->
<!--  Example: "In construction, I often had to improvise by tweaking designs or finding alternative materials when plans changed unexpectedly."-->
<!--  9.Teamwork-->
<!--  Example: "Construction taught me the value of teamwork by coordinating closely with designers, laborers, and suppliers to ensure successful project outcomes."-->
</template>

<script>
import DialogComponent from '@/components/DialogComponent.vue';
export default {
  name: 'Home',
  components: {
    DialogComponent,
  },
};
</script>
