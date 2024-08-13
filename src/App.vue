<template>
  <div id="app">
    <Header />
    <main>
<Home/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from "@/views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
    Header
  }
}
</script>
