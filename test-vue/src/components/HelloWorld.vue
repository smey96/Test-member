<script setup>
import { reactive, ref, computed } from 'vue'

const state = reactive({ count: 0 })


function increment() {
  state.count++
}
defineProps({
  msg: {
    type: String,
    required: true
  },
  msg1: {
    type: String,
    required: true
  }
})
function click(){
  alert("hi");
}

const object = { foo: ref(1) }
const {foo} = object

//using ref() + reactive()
const count1 = ref(0)
const state1 = reactive({
  count1
})
console.log(state1.count1) // 0
state1.count1 = 1
console.log(count1.value) // 1

//new assign ref() will relace the old ref()
const otherCount = ref(2)
state1.count1 = otherCount
console.log(state1.count1) // 2
// original ref is now disconnected from state.count1
console.log(count1.value) // 1

//map
const books = reactive([ref('Vue 3 Guide')])
// need .value here
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)],['count1', ref(2)]]))
// need .value here
console.log(map.get('count1').value)

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
const publishedBookmsg = computed(() =>{
  return author.books.length > 0 ? 'Yes' : "No"
})
const publishedBookCount = computed(() =>{
  return author.books.length
})
const now = computed(() => Date.now())
function date(){
  return Date.now()
}
const isActive = ref(true)
const hasError = ref(false)
var number = 1;

</script>

<template>
  <div class="greetings">
    <h1 class="green" :class="{active: isActive, 'text-danger': hasError}">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.   
    </h3> 
    <h5>- Using text interpolation: {{ msg1 }}</h5>
    <h5>- Using 'v-html' directive: <span v-html="msg1"></span></h5>
    <h5>- Using import { ref } from "vue". foo = {{ foo + 1 }}</h5>
    <h5>- Using Js Func for alert -><a @click="click()"> click here </a></h5>
    <h5>- Using import { reactive } from "vue".  click to count++. ->
      <button @click="increment">
        {{ state.count }}
      </button>
    </h5>
    <h5>- More about import and export for example check console.</h5>
    <h5>- Using computed() -> Has published 
      <span>
        {{ publishedBookCount }}
      </span> 
      books: 
      <span>
        {{ publishedBookmsg }}
      </span>
    </h5>
    <h5>- Using computed() {{ now }} vs. using function() {{ date() }}</h5> 
    <h5>- Using Math:  {{ number + 1 }}</h5>
    
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
