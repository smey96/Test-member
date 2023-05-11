import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')

/* Set up using Vue 2 */

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faUserSecret)

/* add font awesome icon component */
App.component('font-awesome-icon', FontAwesomeIcon)

const MyComponent = App.component('font-awesome-icon')

App.config.productionTip = true

/* eslint-disable no-new */
