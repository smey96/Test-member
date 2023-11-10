import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import {A, a, test} from '@/utils/test.js'
const myA = new A()
myA.test()
test();
// if we try import anything undefine, it will report error
// import {donthave} from '@/utils/test.js'
// console.warn(donthave)

import * as test111 from '@/utils/test.js'
console.warn("this is test111.a",test111.a) // here will print const a => 1
// if we dont use {} it mean to import all, how to use? in general we dont import all, use {} to get we want is a better way
// import test from '@/utils/test.js' 
// if test module dont have 'export default' when you run this, it will report error (dont have default);
// here if i still use test, will overwrite up test. so we can not use test, should alias other name,
// but i dont know, so we can use othername test111

import index from '@/utils/index'
console.warn('this is index module',index)
// now try import index.js, this module have default export
// see what is index, u can see index module have all, because index.js already inclue test.js

// import {A as AA} from '@/utils/index.js'
// const myClassAA = new AA()
// myClassAA.test(); // here will print 'bb'
// if i want use the things from test.js pass index.js


// here is the same import this file @/utils/index.js
// because above code already have a, so we use 'as', to alias other name 
import {a as ab} from '@/utils/index'
// import {a as ab} from '@/utils'
// import {a as ab} from '@/utils/index.js'
// import {a as ab} from '@/utils/'

console.warn('this is a from test.js', a)
console.warn('this is a from index.js', ab)

createApp(App).mount('#app')

<<<<<<< HEAD

=======
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard)

App.component('font-awesome-icon', FontAwesomeIcon)
>>>>>>> vue2
