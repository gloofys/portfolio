<template>
  <!-- Video Section -->

  <div class="relative mt-56 lg:mt-6 xl:mt-32 md:mt-12 sm:mt-28">
    <video autoplay loop muted playsinline class="w-full h-auto" poster="/alt_image.png">
      <source src="/FFFFF0001-0200.mp4" type="video/mp4">
      <!-- Fallback image if video tag is not supported -->
      <img src="/alt_image.png" alt="Your browser does not support the video tag.">
    </video>

    <!-- Main Text Section -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div
          class="text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl p-4 absolute -top-[95%] sm:-top-1 lg:top-1 xl:-top-[10%]">
        <TextEffect ref="mainTextRef" preset="blur" per="word" as="h1"
                    class="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-normal xl:leading-snug font-extrabold">
          Hello! I'm Fred Brosman, a landscape construction supervisor transitioning into front-end development, driven
          by
          a passion for creating user-friendly websites.
        </TextEffect>
      </div>
    </div>
  </div>

  <div class="character-wrapper mt-32 lg:mt-24 md:mt-16">
    <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 lg:mb-8 bg-gradient-to-r from-customGradientFrom to-customGradientTo bg-clip-text text-transparent pb-2 md:pb-5">
      What I Bring to the Table
    </h2>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug mb-2">
        1.Attention to Detail
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-thin">
        Even when my former colleagues insisted that a few millimeters didn’t matter, I couldn’t help but make sure
        everything was spot-on—even if it meant going the extra millimeter.
      </p>
    </div>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug mb-2">
        2.Persistence
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-thin">
        I once started an intricate origami piece and spent 10 hours straight working on it because I couldn't stop
        until it was perfectly finished.
      </p>
    </div>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug mb-2">
        3.Problem-Solving
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-thin">
        In my role as a construction supervisor, I often had to improvise by tweaking designs or finding alternative
        materials when plans changed unexpectedly.
      </p>
    </div>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug mb-2">
        4.Continuous Growth
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-thin">
        After mastering the challenges in my previous career, I found myself seeking new horizons where I could continue
        to learn and evolve. This led me to front-end development.
      </p>
    </div>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug mb-2">
        5.Teamwork
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-thin">
        My experience as a construction supervisor taught me the value of teamwork by coordinating closely with
        designers, laborers, and suppliers to ensure successful project outcomes.
      </p>
    </div>
  </div>


  <!-- Latest Projects Section -->
  <div class="flex items-center project-wrapper">
    <div class="text-center max-w-5xl">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-snug bg-gradient-to-r from-customGradientFrom to-customGradientTo bg-clip-text text-transparent">
        Latest Projects
      </h1>
    </div>
  </div>


  <!-- Flex container for dialog components -->

  <div class="flex flex-wrap gap-6 justify-center items-stretch dialog-wrapper">
    <DialogComponent
        class="flex-equal opacity-puzzle-game"
        imageSrc="/project_images/puzzle3.png"
        imageAlt="Image of Badacsony website"
        dialogTitle="Opacity Puzzle Game"
        dialogSubtitle="In Progress"
        dialogDescription1="A dynamic puzzle game where each piece's opacity changes based on its proximity to the correct position, offering visual cues to guide players."
        dialogDescription2="Developing a puzzle game to improve my skills in React, Javascript."
        dialogDescription3="This project is a fun and interactive way to enhance my skills in React, JavaScript, and modern web development. The game challenges players to assemble an image by dragging and dropping puzzle pieces into their correct positions. It is currently optimized for desktop use only. The AI image generation feature is powered by Hugging Face, which may experience a 'cold start' if the model hasn’t been used recently. This means it could take up to 5 minutes to load the model before the first image can be generated. Subsequent image generations will be much faster."
        dialogDescription4="Github Repository"
        linkUrl="https://github.com/gloofys/puzzle"
        dialogDescription5="Webpage(DESKTOP only, not built for mobile)"
        linkUrl2="https://opacitypuzzle.vercel.app"
    />


    <DialogComponent
        class="flex-equal"
        imageSrc="/project_images/badacsony_webpage_screenshot.png"
        imageAlt="Image of Badacsony website"
        dialogTitle="Balaton Wines & Views Webpage"
        dialogSubtitle="Summer 2024"
        dialogDescription1="Comprehensive rental website for my family's property in the beautiful Badacsony region of Hungary."
        dialogDescription2="The primary goal of this project is to create a user-friendly platform to help my family manage rental bookings while providing a detailed and engaging experience for potential guests. The website promotes our property and the beautiful Badacsony region, making it easier for renters to find and book their stay."
        dialogDescription3="Vite, Vue.js,CSS, HTML, Vercel"
        dialogDescription4="Check out the page"
        linkUrl="https://badacsony.vercel.app"
    />
    <DialogComponent
        class="flex-equal"
        imageSrc="/project_images/Playpal logo transparent.png"
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
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-snug bg-gradient-to-r from-customGradientFrom to-customGradientTo bg-clip-text text-transparent">
        Latest Courses
      </h1>
    </div>
  </div>

  <!-- Flex container for dialog components -->
  <div class="flex flex-wrap gap-6 justify-center items-stretch dialog-wrapper">
    <DialogComponent
        class="flex-equal"
        imageSrc="/project_images/UT_logo.png"
        imageAlt="Data Science for businesses course image"
        dialogTitle="Data Science in Business Decision-Making"
        dialogSubtitle="Autumn 2024"
        dialogDescription1="This course focused on the practical applications of data science in business environments, introducing standard processes like CRISP-DM, data collection, cleaning, and visualization. It also covers key topics such as machine learning, business analytics, and the role of data science in decision-making."
        dialogDescription2=""
        dialogDescription3="University of Tartu"
        dialogDescription4="Certificate"
        linkUrl="https://drive.google.com/file/d/1YGfdoiRxxFLWRi0wOU-ajrRsOCCs6D4-/view?usp=sharing"
    />
    <DialogComponent
        class="flex-equal"
        imageSrc="/project_images/valiit_logo.png"
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
        imageSrc="/project_images/Majandusarvestus_logo.png"
        imageAlt="Accounting course image"
        dialogTitle="Basic Accounting Standards and Practices"
        dialogSubtitle="Winter 2023"
        dialogDescription1="In early 2023, I completed a comprehensive 48-hour Basic Accounting Course that provided me with a strong grasp of fundamental accounting practices. The course covered essential topics such as balance sheets, bookkeeping, financial statements, payroll accounting, taxation, and inventory management. I also gained hands-on experience with documenting and registering financial transactions, as well as understanding amortization, cost accounting, and VAT."
        dialogDescription2=""
        dialogDescription3="Majandusarvestuse Keskus(Center for Economic Accounting)"
        dialogDescription4="Certificate"
        linkUrl="https://drive.google.com/file/d/1isRMZIlRed4iB1CooNtRrO1mIEmNAUuO/view?usp=sharing"
    />


  </div>

  <div class="character-wrapper">
    <h2 class="in-view text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-4 mt-8 pb-2 font-semibold bg-gradient-to-r from-customGradientFrom to-customGradientTo bg-clip-text text-transparent">
      My Ideal Position & Work Environment
    </h2>

    <!-- Role Preferences -->
    <div class="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 in-view">
      <p>As I continue to grow in my development career, I’m open to internships or junior roles where I can expand my
        skills. </p>
      <p class="my-6 font-semibold ">My preferences are:</p>
      <ol class="list-decimal list-inside">
        <li class="my-4"><strong>Front-End Development</strong>: With the most experience in front-end development, I’m
          passionate about building user-friendly interfaces. I’m eager to deepen my expertise in this area.
        </li>
        <li class="my-4"><strong>Full-Stack Development</strong>: I have some experience in back-end development, and
          I’m excited to further develop my skills in full-stack roles that involve working on both the front-end and
          back-end of applications.
        </li>
        <li class="my-4"><strong>Testing & QA</strong>: While my experience in testing is more limited, I’m open to
          opportunities where I can contribute to quality assurance and improve my skills in this important area of
          software development.
        </li>
      </ol>
    </div>

    <!-- Work Environment -->
    <div class="text-base sm:text-lg md:text-xl lg:text-2xl my-4 in-view">
      <p>
        I’m happy to work in an office or hybrid setup, as I enjoy collaborating with teams in person and remotely.
      </p>
    </div>

    <div class="text-base sm:text-lg md:text-xl lg:text-2xl my-4 in-view">
      <p>
        I’m particularly keen on joining a company that encourages continuous learning and professional development. I’m
        eager to further educate myself through courses, mentorship, and hands-on projects, as I believe ongoing
        education is key to growth in this field.
      </p>
    </div>
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
  flex-grow: 1; /* Allow the buttons to grow equally */
  flex-basis: 0; /* Start with zero width, but grow to fill space */
  min-width: 200px; /* Optional: Ensures a minimum size on small screens */
  max-width: 600px;
}


</style>
