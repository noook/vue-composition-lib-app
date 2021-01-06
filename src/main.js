import Vue from 'vue'
import App from './App.vue'
import GolemDesignSystem from '@golem-ai/design-system';
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI);
Vue.use(GolemDesignSystem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
