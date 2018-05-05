// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDpEZjrih53wPDnpEB2cMgzufxqb51WZhU',
      authDomain: 'itc-ad.firebaseapp.com',
      databaseURL: 'https://itc-ad.firebaseio.com',
      projectId: 'itc-ad',
      storageBucket: 'itc-ad.appspot.com',
      messagingSenderId: '1042462012608'
    })
  }
})
