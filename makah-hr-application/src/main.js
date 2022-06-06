import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import VueSignature from "vue-signature-pad";
import {createStore} from 'vuex';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

// Swiper library
import '@ionic/vue/css/ionic-swiper.css';

/* Theme variables */
import './theme/variables.css';
import './theme/main.css';

const store = createStore({
  state(){
    return {
      loggedin:true,
      name:'John',
      password:'',
      annualLeaves:24,
      medicalLeaves:12,
      familyLeaves:7,
      birthdayLeaves:2,
      task3: false,
      task4: false,
      task5: false,
      information:[]
      }
  },
  mutations: {
    logged (state, Input){
      state.loggedin = Input
    },
    insertData(state, Input){
      state.information = Input
    },
    userName (state, Input){
      state.name = Input
    },
    userPassword (state, Input){
      state.password = Input
    },
    changeTaskComplete (state, Input){
      switch(Input){
        case 0:
          state.task3 = true
          break;
        case 1:
          state.task4 = true
          break;
        case 2:
          state.task5 = true
          break;
      }
    },
    decAnnual (state, n) {
      state.annualLeaves -= n
    },
    decMedical (state, n) {
      state.medicalLeaves -= n
    },
    decFamily (state, n) {
      state.familyLeaves -= n
    },
    decBirthday (state, n) {
      state.birthdayLeaves -= n
    },
    addBirthday (state, n) {
      state.birthdayLeaves = n
    }
  },
  actions: {
    changeUser ({ commit }, name) {
      setTimeout(() => {
        commit('userName', name)
      }, 1000)
    },
  }
});

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(VueSignature)
  .use(store);

  app.config.productionTip = false;
  
router.isReady().then(() => {
  app.mount('#app');
});