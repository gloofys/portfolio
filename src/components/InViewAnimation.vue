<template>

</template>

<script>

import gsap from "gsap";

function inViewAnimation(element, gsapOptions = {}) {
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              ...gsapOptions,
            });
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      {
        threshold: 0.2, // Adjust this value as needed
      }
  );

  observer.observe(element);
}

export default inViewAnimation;

</script>



<style scoped>

</style>