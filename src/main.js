import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig  ={
  apiKey: process.env.VUE_APP_apiKey || 'YOUR_KEY',
  authDomain: process.env.VUE_APP_authDomain || 'YOUR_DOMAIN.firebaseapp.com',
  databaseURL: process.env.VUE_APP_databaseURL || 'YOUR_DOMAIN.firebaseio.com',
  projectId: process.env.VUE_APP_projectId || 'YOUR_ID',
  storageBucket:
    process.env.VUE_APP_storageBucket || 'YOUR_BUCKET_ID.appspot.com',
  messagingSenderId: process.env.VUE_APP_messagingSenderId || 'YOUR_SENDER_ID',
  appId: process.env.VUE_APP_appId || 'YOUR_APP_ID'
}

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

Vue.prototype.$db = firebase.firestore()

new Vue({
  render: h => h(App)
}).$mount('#app')
