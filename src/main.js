import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';
import firebase from 'firebase/app';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;


const firebaseConfig = {
  apiKey: "AIzaSyAHsD4ZpmM5XYKwTYFGvi_WWPgZJhA1zsA",
  authDomain: "vueauth-68a4e.firebaseapp.com",
  projectId: "vueauth-68a4e",
  storageBucket: "vueauth-68a4e.appspot.com",
  messagingSenderId: "643290810776",
  appId: "1:643290810776:web:222c569aa40bc5c904c3ed",
  measurementId: "G-RQ0Y363BVS"
};

firebase.initializeApp(firebaseConfig);


//console.log(firebase);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
