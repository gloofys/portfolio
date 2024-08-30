<template>
  <!-- Video Section -->
  <div class="relative mt-16 lg:mt-2 sm:mt-28">
    <video autoplay loop muted playsinline class="w-full h-auto">
      <source src="/FFFFF0001-0200.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <!-- Main Text Section -->
  <div class="absolute inset-0 flex items-center justify-center text-container -mt-144 xl:-mt-72 sm:-mt-160  content-wrapper">
    <div class="text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl p-4">
      <TextEffect ref="mainTextRef" preset="blur" per="word" as="h1" class="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-normal xl:leading-snug font-extrabold">
        Hello! I'm Fred Brosman, a landscape construction supervisor transitioning into front-end development, driven by a passion for creating user-friendly websites.
      </TextEffect>
    </div>
  </div>

  <div class="content-wrapper character-wrapper">
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
        Even when I’m told by colleagues a few millimeters don’t matter, I can’t help but make sure everything is spot-on—even if it means going the extra millimeter.
      </p>
    </div>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
        Persistence
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
        I once started an intricate origami piece and spent 10 hours straight working on it because I couldn't stop until it was perfectly finished.
      </p>
    </div>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
        Problem-Solving
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
        In construction, I often had to improvise by tweaking designs or finding alternative materials when plans changed unexpectedly.
      </p>
    </div>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
        Continuous Growth
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
        After mastering the challenges in my previous career, I found myself seeking new horizons where I could continue to learn and evolve. This led me to front-end development.
      </p>
    </div>

    <div class="in-view mb-6 xl:mb-10">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
        Teamwork
      </h1>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
        Construction taught me the value of teamwork by coordinating closely with designers, laborers, and suppliers to ensure successful project outcomes.
      </p>
    </div>
  </div>


  <!-- Latest Projects Section -->
    <div class="flex items-center latest-projects-wrapper">
      <div class="text-center text-customFlamingo max-w-5xl">
        <h1 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
          Latest Projects
        </h1>
      </div>
    </div>

    <!-- Flex container for dialog components -->
    <div class="flex space-x-3 dialog-wrapper">
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
          dialogDescription4="Link to git project repository"
          linkUrl="https://github.com/vallekapstas/playpalback"
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
  // setup() {
  //   const detailRef = ref(null);
  //   const persistenceRef = ref(null);
  //   const problemRef = ref(null);
  //   const growthRef = ref(null);
  //   const teamworkRef = ref(null);
  //   const textContainerRef = ref(null);
  //   const currentStep = ref(1);
  //
  //   const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // const startAnimationSequence = async () => {
    //   console.log("Starting detail animation");
    //   if (detailRef.value?.animateWords) await detailRef.value.animateWords();
    //   await delay(2500); // Shorter delay for a more responsive feel
    //   currentStep.value = 2;
    //
    //   console.log("Starting persistence animation");
    //   if (persistenceRef.value?.animateWords) await persistenceRef.value.animateWords();
    //   await delay(2500); // Consistent delay for smoother transition
    //   currentStep.value = 3;
    //
    //   console.log("Starting problem animation");
    //   if (problemRef.value?.animateWords) await problemRef.value.animateWords();
    //   await delay(2500);
    //   currentStep.value = 4;
    //
    //   console.log("Starting growth animation");
    //   if (growthRef.value?.animateWords) await growthRef.value.animateWords();
    //   await delay(2500);
    //   currentStep.value = 5;
    //
    //   console.log("Starting teamwork animation");
    //   if (teamworkRef.value?.animateWords) await teamworkRef.value.animateWords();
    // };

//     const observeElement = () => {
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             startAnimationSequence();
//             observer.unobserve(entry.target);
//           }
//         });
//       }, {
//         threshold: 0.5,
//       });
//
//       if (textContainerRef.value) {
//         observer.observe(textContainerRef.value);
//       }
//     };
//
//     onMounted(() => {
//       observeElement();
//     });
//
//     return { detailRef, persistenceRef, problemRef, growthRef, teamworkRef, textContainerRef, currentStep };
//   },
// };
</script>



<!--<div ref="textContainerRef" class="character-wrapper">-->
<!--<div :class="[currentStep >= 1 ? 'visible' : 'hidden']" class="mb-6">-->
<!--  <TextEffect ref="detailRef" preset="blur" per="word" as="h1" class="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">-->
<!--    Attention to detail-->
<!--  </TextEffect>-->
<!--  <TextEffect ref="detailRef" preset="fade" per="word" as="p">-->
<!--    "Even when I’m told by colleagues a few millimeters don’t matter, I can’t help but make sure everything is spot-on—even if it means going the extra millimeter."-->
<!--  </TextEffect>-->
<!--</div>-->

<!--<div :class="[currentStep >= 2 ? 'visible' : 'hidden']" class="mb-6">-->
<!--  <TextEffect ref="persistenceRef" preset="blur" per="word" as="h1" class="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">-->
<!--    Persistence-->
<!--  </TextEffect>-->
<!--  <TextEffect ref="persistenceTextRef" preset="fade" per="word" as="p">-->
<!--    "I once started an intricate origami piece and spent 10 hours straight working on it because I couldn't stop until it was perfectly finished."-->
<!--  </TextEffect>-->
<!--</div>-->

<!--<div :class="[currentStep >= 3 ? 'visible' : 'hidden']" class=" mb-6">-->
<!--  <TextEffect ref="problemRef" preset="blur" per="word" as="h1" class="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">-->
<!--    Problem-Solving-->
<!--  </TextEffect>-->
<!--  <TextEffect ref="problemTextRef" preset="fade" per="word" as="p">-->
<!--    "In construction, I often had to improvise by tweaking designs or finding alternative materials when plans changed unexpectedly."-->
<!--  </TextEffect>-->
<!--</div>-->

<!--<div :class="[currentStep >= 4 ? 'visible' : 'hidden']" class=" mb-6">-->
<!--  <TextEffect ref="growthRef" preset="blur" per="word" as="h1" class="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">-->
<!--    Continuous Growth-->
<!--  </TextEffect>-->
<!--  <TextEffect ref="growthRef" preset="fade" per="word" as="p">-->
<!--    "After mastering the challenges in my previous career, I found myself seeking new horizons where I could-->
<!--    continue to learn and evolve. This led me to front-end development."-->
<!--  </TextEffect>-->
<!--</div>-->

<!--<div :class="[currentStep >= 5 ? 'visible' : 'hidden']" class=" mb-6">-->
<!--  <TextEffect ref="teamworkRef" preset="blur" per="word" as="h1" class="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">-->
<!--    Teamwork-->
<!--  </TextEffect>-->
<!--  <TextEffect ref="teamworkTextRef" preset="fade" per="word" as="p">-->
<!--    "Construction taught me the value of teamwork by coordinating closely with designers, laborers, and suppliers to-->
<!--    ensure successful project outcomes."-->
<!--  </TextEffect>-->
<!--</div>-->

<!--&lt;!&ndash; Character Section &ndash;&gt;-->
<!--<div ref="textContainerRef" class="character-wrapper">-->
<!--<div :class="[currentStep >= 1 ? 'visible' : 'hidden']" class="mb-6">-->
<!--  <TextEffect ref="detailRef" preset="blur" per="word" as="h1" class="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">-->
<!--    Attention to detail-->
<!--  </TextEffect>-->
<!--  <TextEffect ref="detailRef" preset="fade" per="word" as="p">-->
<!--    "Even when I’m told by colleagues a few millimeters don’t matter, I can’t help but make sure everything is spot-on—even if it means going the extra millimeter."-->
<!--  </TextEffect>-->
<!--</div>-->

<!--<div :class="[currentStep >= 2 ? 'visible' : 'hidden']" class="mb-6">-->
<!--  <TextEffect ref="persistenceRef" preset="blur" per="word" as="h1" class="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">-->
<!--    Persistence-->
<!--  </TextEffect>-->
<!--  <TextEffect ref="persistenceTextRef" preset="fade" per="word" as="p">-->
<!--    "I once started an intricate origami piece and spent 10 hours straight working on it because I couldn't stop until it was perfectly finished."-->
<!--  </TextEffect>-->
<!--</div>-->

<!--<div :class="[currentStep >= 3 ? 'visible' : 'hidden']" class=" mb-6">-->
<!--  <TextEffect ref="problemRef" preset="blur" per="word" as="h1" class="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">-->
<!--    Problem-Solving-->
<!--  </TextEffect>-->
<!--  <TextEffect ref="problemTextRef" preset="fade" per="word" as="p">-->
<!--    "In construction, I often had to improvise by tweaking designs or finding alternative materials when plans changed unexpectedly."-->
<!--  </TextEffect>-->
<!--</div>-->

<!--<div :class="[currentStep >= 4 ? 'visible' : 'hidden']" class=" mb-6">-->
<!--  <TextEffect ref="growthRef" preset="blur" per="word" as="h1" class="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">-->
<!--    Continuous Growth-->
<!--  </TextEffect>-->
<!--  <TextEffect ref="growthRef" preset="fade" per="word" as="p">-->
<!--    "After mastering the challenges in my previous career, I found myself seeking new horizons where I could-->
<!--    continue to learn and evolve. This led me to front-end development."-->
<!--  </TextEffect>-->
<!--</div>-->

<!--<div :class="[currentStep >= 5 ? 'visible' : 'hidden']" class=" mb-6">-->
<!--  <TextEffect ref="teamworkRef" preset="blur" per="word" as="h1" class="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">-->
<!--    Teamwork-->
<!--  </TextEffect>-->
<!--  <TextEffect ref="teamworkTextRef" preset="fade" per="word" as="p">-->
<!--    "Construction taught me the value of teamwork by coordinating closely with designers, laborers, and suppliers to-->
<!--    ensure successful project outcomes."-->
<!--  </TextEffect>-->
<!--</div>-->