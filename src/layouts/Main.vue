<template>
  <div class="container">
    <div class='header'>
      <ol class='header-list'>
        <li>
          <v-link href="/">Home</v-link>
          <v-link href="/about">About</v-link>
        </li>
      </ol>
    </div>

    <slot></slot>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink,
    }
  }
</script>

<style scoped>
  .container {
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
  .header-list {
    list-style-type:none
  }
  .header {
    width: 100%;
    height: 64px;
  }
</style>
