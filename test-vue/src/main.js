import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faClock);

createApp(App).mount('#app')
App.component('font-awesome-icon', FontAwesomeIcon)
