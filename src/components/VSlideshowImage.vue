<template>
  <img v-bind:src="imgSrc" v-on:click="next">
</template>

<script>
  export default {
    props: {
      group: {
        type: String,
        required: true
      }
    },
    computed: {
      imgSrc () {
        return `https://fakeimg.pl/400x300/?text=${this.$root.slideGroups[this.group][this.$root.slideIndex[this.group].indexOf(1)]}`
      },
      color () {
        if (this.group == 1) return 'ff0001'
        if (this.group == 2) return 'ff0000'
        if (this.group == 3) return 'ff0111'
      }
    },
    methods: {
      next (event) {
        event.preventDefault()
        console.log('next');
        const current = this.$root.slideIndex[this.group]
        // derp rockets are a go
        if (current[0] == 1) {
          this.$root.slideIndex[this.group] = [0, 1, 0]
        } else if (current[1] == 1) {
          this.$root.slideIndex[this.group] = [0, 0, 1]
        } else {
          this.$root.slideIndex[this.group] = [1, 0, 0]
        }
      }
    }
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>
