import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyBP4m9TOMOlsNYa1SRhf8ufDaEuRRu7j7Q",
  authDomain: "my-address-pj-91fae.firebaseapp.com",
  databaseURL: "https://my-address-pj-91fae.firebaseio.com",
  projectId: "my-address-pj-91fae",
  storageBucket: "my-address-pj-91fae.appspot.com",
  messagingSenderId: "63260257335",
  appId: "1:63260257335:web:83c0ad4aed683bbf5623b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
