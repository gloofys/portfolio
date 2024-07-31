<template>
  <header>
    <h1>Your Name</h1>
    <p>Front-End Developer</p>
  </header>
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>

    </ul>
  </nav>
  <section id="about">
    <h2>About Me</h2>
    <p>Brief bio about yourself...</p>
  </section>
  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Vue.js</li>
      <li>React</li>
    </ul>
  </section>
  <section id="projects">
    <h2>Projects</h2>
    <div class="project">
      <h3>Project Title</h3>
      <p>Project description...</p>
    </div>
    <!-- Repeat for other projects -->
  </section>
  <footer>
    <p>&copy; 2024 Your Name. All rights reserved.</p>
  </footer>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    gsap.to(this.$refs.box, {duration: 2, x: 100, opacity: 0.5});
  }
};
</script>

<style>

</style>