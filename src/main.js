import Vue from 'vue'
import App from './App.vue'
import DesignSystem from 'design-system';

Vue.use(DesignSystem);
// Not installing Vue composition, I already know it's installed in the package
// I know it's bad practice, but it's just for the reproduction case
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
