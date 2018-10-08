import Vue from 'vue';
// import iView from 'iview';
import 'iview/dist/styles/iview.css';
import { Button, Modal } from 'iview';
import panelSelector from './lib/index.js';
import App from './App.vue';
// Vue.use(iView);
Vue.use(panelSelector);
Vue.component('Button', Button);
Vue.component('Modal', Modal);
new Vue({
  el: '#app',
  render: h => h(App)
})
