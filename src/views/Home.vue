<template>
  <!-- Video Section -->

  <div class="relative mt-16 lg:mt-2 sm:mt-28">
    <video autoplay loop muted playsinline class="w-full h-auto">
      <source src="/FFFFF0001-0200.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <!-- Main Text Section -->
  <div
      class="absolute inset-0 flex items-center justify-center text-container -mt-144 xl:-mt-72 sm:-mt-160  content-wrapper">
    <div class="text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl p-4">
      <TextEffect ref="mainTextRef" preset="blur" per="word" as="h1"
                  class="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-normal xl:leading-snug font-extrabold">
        Hello! I'm Fred Brosman, a landscape construction supervisor transitioning into front-end development, driven by
        a passion for creating user-friendly websites.
      </TextEffect>
    </div>
  </div>

  <div class="character-wrapper">
    <h2 class="text-xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 font-bold text-center">
      Why You Should Hire Me
    </h2>
    <p class="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-center">
      Here are the qualities and strengths that I bring to the table.
    </p>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
        Attention to Detail
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
        Even when I’m told by colleagues a few millimeters don’t matter, I can’t help but make sure everything is
        spot-on—even if it means going the extra millimeter.
      </p>
    </div>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
        Persistence
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
        I once started an intricate origami piece and spent 10 hours straight working on it because I couldn't stop
        until it was perfectly finished.
      </p>
    </div>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
        Problem-Solving
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
        In construction, I often had to improvise by tweaking designs or finding alternative materials when plans
        changed unexpectedly.
      </p>
    </div>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
        Continuous Growth
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
        After mastering the challenges in my previous career, I found myself seeking new horizons where I could continue
        to learn and evolve. This led me to front-end development.
      </p>
    </div>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
        Teamwork
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
        Construction taught me the value of teamwork by coordinating closely with designers, laborers, and suppliers to
        ensure successful project outcomes.
      </p>
    </div>
  </div>


  <!-- Latest Projects Section -->
  <div class="flex items-center project-wrapper">
    <div class="text-center max-w-5xl">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug bg-gradient-to-r from-customGradientFrom to-customGradientTo bg-clip-text text-transparent">
        Latest Projects
      </h1>
    </div>
  </div>


  <!-- Flex container for dialog components -->
  <div class="flex flex-wrap gap-6 justify-center items-stretch dialog-wrapper">
    <DialogComponent
        class="flex-equal"
        imageSrc="/public/project_images/badacsony_webpage_screenshot.png"
        imageAlt="Image of Badacsony website"
        dialogTitle="Balaton Wines & Views Webpage"
        dialogSubtitle="Summer 2024"
        dialogDescription1="Comprehensive rental website for my family's property in the beautiful Badacsony region of Hungary"
        dialogDescription2="The primary goal of this project is to create a user-friendly platform to help my family manage rental bookings while providing a detailed and engaging experience for potential guests. The website promotes our property and the beautiful Badacsony region, making it easier for renters to find and book their stay."
        dialogDescription3="Vite, Vue.js, pure CSS, HTML, Vercel"
        dialogDescription4="Check out the page"
        linkUrl="https://badacsony.vercel.app"
    />
    <DialogComponent
        class="flex-equal"
        imageSrc="/public/project_images/Playpal logo transparent.png"
        imageAlt="Image of Playpal logo"
        dialogTitle="Playpal-board game community"
        dialogSubtitle="Spring 2024"
        dialogDescription1="Group project made in Vali-IT(adult re-education program for junior software developer role) with Valle and Katrin."
        dialogDescription2="Our idea was to create a website for board game enthusiasts, where they could create and join different events. I was responsible for 75% of the projects back-end and about 25% front-end."
        dialogDescription3="Vue, Java, PostgreSQL, Swagger, Balsamiq, Bootstrap, Vertabelo"
        dialogDescription4="Link to git project repository"
        linkUrl="https://github.com/vallekapstas/playpalback"
    />
  </div>

  <div class="flex items-center project-wrapper">

    <div class="text-center max-w-5xl">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug bg-gradient-to-r from-customGradientFrom to-customGradientTo bg-clip-text text-transparent">
        Latest Courses
      </h1>
    </div>
  </div>

  <!-- Flex container for dialog components -->
  <div class="flex flex-wrap gap-6 justify-center items-stretch dialog-wrapper">
    <DialogComponent
        class="flex-equal"
        imageSrc="/public/project_images/UT_logo.png"
        imageAlt="Data Science for businesses course image"
        dialogTitle="Data Science in Business Decision-Making"
        dialogSubtitle="Autumn 2024"
        dialogDescription1="This course focused on the practical applications of data science in business environments, introducing standard processes like CRISP-DM, data collection, cleaning, and visualization. It also covers key topics such as machine learning, business analytics, and the role of data science in decision-making."
        dialogDescription2=""
        dialogDescription3="University of Tartu"
        dialogDescription4=""
        linkUrl=""
    />
    <DialogComponent
        class="flex-equal"
        imageSrc="/public/project_images/valiit_logo.png"
        imageAlt="Vali-IT logo image"
        dialogTitle="Vali IT! Junior Software Developer Program"
        dialogSubtitle="Spring 2024"
        dialogDescription1="During the Vali IT! program, I completed 240 hours of intensive training focused on full-stack software development. I worked with technologies like Java, RESTful APIs, Spring Boot, HTML5, CSS, and Vue.js. Throughout the course, I gained hands-on experience designing software architecture, developing database models, and building both front-end and back-end systems. I also became proficient in manual testing, using Git for version control, and documenting solutions with OpenAPI."
        dialogDescription2="One of the most valuable aspects of the course was working on real-world projects, both independently and as part of a team."
        dialogDescription3="BCS Koolitus(BCS training)"
        dialogDescription4="Certificate"
        linkUrl="https://drive.google.com/file/d/1xS9VL7EKNYhXEUtR-CWraQuRKKla0kSW/view?usp=sharing"
    />
    <DialogComponent
        class="flex-equal"
        imageSrc="/public/project_images/Majandusarvestus_logo.png"
        imageAlt="Accounting course image"
        dialogTitle="Basic Accounting Course"
        dialogSubtitle="Winter 2023"
        dialogDescription1="In early 2023, I completed a comprehensive 48-hour Basic Accounting Course that provided me with a strong grasp of fundamental accounting practices. The course covered essential topics such as balance sheets, bookkeeping, financial statements, payroll accounting, taxation, and inventory management. I also gained hands-on experience with documenting and registering financial transactions, as well as understanding amortization, cost accounting, and VAT."
        dialogDescription2=""
        dialogDescription3="Majandusarvestuse Keskus(Center for Economic Accounting)"
        dialogDescription4="Certificate"
        linkUrl="https://drive.google.com/file/d/1isRMZIlRed4iB1CooNtRrO1mIEmNAUuO/view?usp=sharing"
    />


  </div>


  <!--  Tools and Technologies-->
  <!--  Why?: Listing the tools and technologies you’re proficient with helps potential employers quickly assess your technical skills.-->
  <!--  What to Include: A grid or list of tools and technologies, such as HTML, CSS, JavaScript, Vue.js, Git, etc.-->

</template>

<script>
import DialogComponent from '@/components/DialogComponent.vue';
import TextEffect from "@/components/TextEffect.vue";
import inViewAnimation from "@/components/InViewAnimation.vue";

export default {
  name: 'Home',
  components: {
    TextEffect,
    DialogComponent,
  },

  mounted() {
    const elements = document.querySelectorAll(".in-view");

    elements.forEach((element) => {
      inViewAnimation(element, {
        duration: 0.8,
        opacity: 1,
        y: 0,
      });
    });
  }
};

</script>

<style scoped>
/* Flex property to ensure equal width for all buttons */
.flex-equal {
  flex-grow: 1;  /* Allow the buttons to grow equally */
  flex-basis: 0; /* Start with zero width, but grow to fill space */
  min-width: 200px; /* Optional: Ensures a minimum size on small screens */
}

</style>
