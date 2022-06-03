import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
  mounted() {
    AOS.init({
      // Global settings:
      delay: 40, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
    })
  },
}).$mount('#app')

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  next()
})