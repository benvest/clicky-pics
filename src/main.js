import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
    slideGroups: {
      1: ['Lorem', 'Ipsum', 'Dolor'],
      2: ['Sit', 'Amet', 'Consectetur'],
      3: ['Adipiscing', 'Elit', 'Sed'],
      4: ['Lorem', 'Ipsum', 'Dolor'],
      5: ['Sit', 'Amet', 'Consectetur'],
      6: ['Adipiscing', 'Elit', 'Sed'],
      7: ['Lorem', 'Ipsum', 'Dolor'],
      8: ['Sit', 'Amet', 'Consectetur'],
      9: ['Adipiscing', 'Elit', 'Sed'],
      10: ['Lorem', 'Ipsum', 'Dolor'],
      11: ['Sit', 'Amet', 'Consectetur'],
      12: ['Adipiscing', 'Elit', 'Sed'],
    },
    slideIndex: {
      1: [1, 0, 0],
      2: [1, 0, 0],
      3: [1, 0, 0],
      4: [1, 0, 0],
      5: [1, 0, 0],
      6: [1, 0, 0],
      7: [1, 0, 0],
      8: [1, 0, 0],
      9: [1, 0, 0],
      10: [1, 0, 0],
      11: [1, 0, 0],
      12: [1, 0, 0],
    }
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
