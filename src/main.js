import Vue from 'vue'
import App from './App.vue'
import DesignSystem from 'design-system';
import { install } from 'vue-demi';

// The library will actually vue-demi so that's
// how I need to install the composition API
install(Vue);
Vue.use(DesignSystem);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
