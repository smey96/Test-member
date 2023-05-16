import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import {A, a,test} from '@/utils/test.js'
// if we try import anything dont have , will report err
// import {donthave} from '@/utils/test.js'
// console.warn(donthave)


// if we dont use {}, mean import all ,how use? gerneral we dont import all, use {} get we want is better
import * as test111 from '@/utils/test.js'
// import test from '@/utils/test.js' // if test module dont have export default run this will report dont have default;
// here if i still use test ,will overwrite up test.so we can not use test,should alias other name,
// but i dont know, so we can use othername test111
console.warn(test111.a) // here will print const a =>1

// now try import index.js ,this module have default export
import index from '@/utils/index'
// see what is index,u can see index module have all,because index.js already inclue test.js
console.warn('this is index module',index)


// if i want use the things from test.js pass index.js
// import {A as AA} from '@/utils/index.js'

// const myClassAA = new AA()
// // here will print 'bb'
// myClassAA.test();


// here is the same import this file @/utils/index.js
import {a as ab} from '@/utils/index'
//  import {a as ab} from '@/utils'
// because up have a ,so we use as ,to alias other name 
// import {a as ab} from '@/utils/index.js'
//  import {a as ab} from '@/utils/'

console.warn('this is a from test.js',a)
console.warn('this is a from index.js',ab)


const myA = new A()
myA.test()

test();

createApp(App).mount('#app')


