<template>
  <main-layout>
    <div class="grid-container">
      <div class="grid-item">
        <v-slideshow-image group=1></v-slideshow-image>
      </div>
      <div class="grid-item">
        <v-slideshow-image group=2></v-slideshow-image>
      </div>
      <div class="grid-item">
        <v-slideshow-image group=3></v-slideshow-image>
      </div>
      <div class="grid-item">
        <v-slideshow-image group=4></v-slideshow-image>
      </div>
      <div class="grid-item">
        <v-slideshow-image group=5></v-slideshow-image>
      </div>
      <div class="grid-item">
        <v-slideshow-image group=6></v-slideshow-image>
      </div>
      <div class="grid-item">
        <v-slideshow-image group=7></v-slideshow-image>
      </div>
      <div class="grid-item">
        <v-slideshow-image group=8></v-slideshow-image>
      </div>
      <div class="grid-item">
        <v-slideshow-image group=9></v-slideshow-image>
      </div>
      <div class="grid-item">
        <v-slideshow-image group=10></v-slideshow-image>
      </div>
      <div class="grid-item">
        <v-slideshow-image group=11></v-slideshow-image>
      </div>
      <div class="grid-item">
        <v-slideshow-image group=12></v-slideshow-image>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import VSlideshowImage from '../components/VSlideshowImage.vue'

  export default {
    data: function () {
      return {
        groups: ['1','2','3']
      }
    },
    components: {
      MainLayout,
      VSlideshowImage,
    }
  }
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
.grid-item {
  padding: auto 20px;
  font-size: 30px;
  text-align: center;
}
</style>
