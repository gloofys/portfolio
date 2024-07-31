<template>
  <div class="box" ref="box"></div>
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
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>