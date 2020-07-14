import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min.js'
import date from './filters/date.filters'
import messagePlugin from './utils/message.plugin'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.filter('date', date)
Vue.use(Vuelidate)
Vue.use(messagePlugin)

const firebaseConfig = {
  apiKey: 'AIzaSyCxLEU-7E8qbCIphzOnfmly3nA9k4F2n98',
  authDomain: 'iskdimar-vue-crm.firebaseapp.com',
  databaseURL: 'https://iskdimar-vue-crm.firebaseio.com',
  projectId: 'iskdimar-vue-crm',
  storageBucket: 'iskdimar-vue-crm.appspot.com',
  messagingSenderId: '872252863960',
  appId: '1:872252863960:web:f3045e342f9cb8efd5aead',
  measurementId: 'G-VW9J5N0JM2'
}

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
