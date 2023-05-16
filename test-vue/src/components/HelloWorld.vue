<script setup>
import { reactive } from 'vue'

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
const raw = {}
const proxy = reactive(raw)

// proxy is NOT equal to the original.
console.log(proxy === raw) // false

// calling reactive() on the same object returns the same proxy
console.log(reactive(raw) === proxy) // true

// calling reactive() on a proxy returns itself
console.log(reactive(proxy) === proxy) // true
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. 
      <a @click="click()">click here </a>
      <button @click="increment">
        {{ state.count }}
      </button>
    </h3> 
    <h3>Testing v-html: </h3>
    <h5>- Using text interpolation:<br> {{ msg1 }}</h5>
    <h5>- Using v-html directive: <span v-html="msg1"></span></h5>
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
