<template>
  <div id="app">
    <Header />
    <main>
<Home/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from "@/views/Home.vue";
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    Home,
    Header,
    Footer
  }
}
</script>
