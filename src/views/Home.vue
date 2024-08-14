<template>
  <div>

      <video autoplay loop muted playsinline class="w-full h-auto">
        <source src="/FFFFF0001-0200.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center text-customFlush">
        <h1 class="text-4xl font-bold m-12">My Name is Fred Brosman, Born in 26th of July 1993, living in Tallinn, Estonia</h1>
      </div>
    </div>

    <DialogComponent
        imageSrc="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
        imageAlt="What I Talk About When I Talk About Running - book cover"
        dialogTitle="What I Talk About When I Talk About Running"
        dialogSubtitle="Haruki Murakami"
        dialogDescription1="In 1982, having sold his jazz bar to devote himself to writing, Murakami began running to keep fit. A year later, he’d completed a solo course from Athens to Marathon..."
        dialogDescription2="Equal parts training log, travelogue, and reminiscence, this revealing memoir covers his four-month preparation for the 2005 New York City Marathon..."
        dialogDescription3="By turns funny and sobering, playful and philosophical, What I Talk About When I Talk About Running is rich and revelatory..."
    />
  </div>

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