<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import Todolist from './icons/IconTodolist.vue'
import TodoItem from '../utils/TodoItem.vue'
import { ref, reactive, watch } from 'vue'

// ToDoList
const newTodoText = ref('')
const todos = ref([
  {
    id: 1,
    title: 'Do the dishes'
  },
  {
    id: 2,
    title: 'Take out the trash'
  },
  {
    id: 3,
    title: 'Mow the lawn'
  }
])

let nextTodoId = 4

function addNewTodo() {
  todos.value.push({
    id: nextTodoId++,
    title: newTodoText.value
  })
  newTodoText.value = ''
}
// ToDoList
// AskQuestion
const question = ref('')
const answer = ref('Question must contain a question mark.')
watch(question, async(newQuestion, oldQuestion) =>{
  if(newQuestion.indexOf('?') > -1){
    answer.value = 'Thinking...'
    try{
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch(error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})
// AskQuestion

defineProps({
  msg: {
    type: String,
    required: true
  }
})
const objectOfAttrs = {
  id: 'container',
  class: 'green',
  style: 'font-family: courier;'
}

const id1 = 'container';
const class1 = 'purple';
const style1 = 'font-family: "Times New Roman", Times, serif;'
const a = 'myTest' // a is Component's dynamicId
const true2 = ref(true)
const true1 = ref(true)
const detail = ref(false)
const detail1 = ref(false)
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
//v-model
const selected = ref('')
const selectRadio = ref('c')
const options = ref([
  {text: 'c', value: 'cc'},
  {text: 'b', value: 'bb'},
  {text: 'a', value: 'aa'}
])
const checkedNames = ref([])
const picked = ref('')
</script>
<script>
export default {
  data() {
    return {
      parentMessage: 'Parent',
      items1: [{ message: 'Foo' ,
                children:[ {a:'aaaa'},
                           {a:'bbbb'}]
              }, 
              { message: 'Bar',
                children:[{a:'aaa'},
                          {a:'bbb'}]
              },
              {
                message: 'Boo'
              }
             ]
    }
  }
}
</script>
<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Testing Attribute Bindings v-bind</template>
    <template #text>
      <div v-bind:id="a">Attribute Bidings element's Id</div>
      - Binding Multiple Attributes
      <div v-bind="objectOfAttrs">from define objectOfAttrs</div>
      <div v-for="item in objectOfAttrs" :key="item.id">from define key.id</div>
      <div :id="id1" :class="class1" :style="style1">from single define one by one</div>
      - Shorthand Binding Multiple Attributes
      <div :="objectOfAttrs"> ":" from const objectOfAttrs = {}</div>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>v-if, v-else-if, v-else, v-show and v-for</template>
    <button @click="detail = !detail">v-if Details</button>
    <button @click="detail1 = !detail1">v-for Details</button>
    <template #text v-if="detail">
      <button @click="true1 = !true1">True 1</button>
      <button @click="true2 = !true2">True 2</button>
      <h5> 
      {{'- this is true1.value = '+true1}}
      <br> 
      {{'- this is true2.value = '+true2}} 
    </h5>
    <h5>
      if(true1 && true2) echo Hello!;<br>
      elseif(true1 && !true2) echo Vue!;<br>
      elseif(!true1 && true2) echo Test!;<br>
      else(!true1 && !true2) echo none!;
    </h5>
    <h5 v-show="true1">- This is using 'v-show' with true1.value</h5>
    <h5 v-if="true1 && true2">- Hello!</h5>
    <h5 v-else-if="true1 && !true2">- Vue!</h5>
    <h5 v-else-if="!true1 && true2">- Test!</h5>
    <h5 v-else="!true1 && !true2">- none!</h5>
    <p>
      'v-if' vs. 'v-show' : <br>
      'v-if' is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value. 
      <br>
      'v-show' will always be rendered and remain in the DOM; and is only toggle the 'display' CSS property and doesn't support {{ '<template>' }}, nor works with 'v-else'.
    </p>
    
    </template>
    <template #text v-else="detail1">
      <h5>- Nested 'v-for' with object and array,</h5> 
      <ul>
        <li v-for="(value, key, index) in myObject">
          {{ index }}. {{ key }}: {{ value }}
        </li>
      </ul>
      <ol v-for="(item1, index) in items1">
        <li>{{ index }}.{{ item1.message }}
          <ul v-for="childItem in item1.children">
            <li>{{ childItem.a }}</li>
          </ul>
        </li>
      </ol>
      <h5>- 'v-for' with a Range : <span v-for="n in 10">{{ n + " " }}</span></h5>
      <h5>- 'v-for' can use with {{ '<template>' }} too</h5>
      <h5>- 'v-for' can use with 'v-if' but 'v-if' has a higher priority if use inside the same {{ '<tag>' }}.</h5>
    </template>
  
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <Todolist />
    </template>
    <template #heading>
      To Do List and Ask Question
    </template>
    <template #text>
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">- Add a todo</label><br>
        <input
          v-model="newTodoText"
          id="new-todo"
          placeholder="E.g. Feed the cat"
        />
        <button>Add</button>
      </form>
      <ul>
        <todo-item
          v-for="(todo, index) in todos"
          :key="todo.id"
          :title="todo.title"
          @remove="todos.splice(index, 1)"
        ></todo-item>
      </ul>
      <!-- <input v-model.number="age" /> -->
      <p>
        - Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>v-model</template>

    <template #text>

    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">Please Select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <div>Selected: {{ selectRadio }}</div>
    <select v-model="selectRadio">
      <option v-for="option in options" :value="option.text">
        {{ option.value }}
      </option>
    </select>

    <div>Checked Names: {{ checkedNames }}</div>
    <input type="checkbox" id="bao" value="bao" v-model="checkedNames">
    <label for="bao">a</label><br>

    <input type="checkbox" id="baobao" value="baobao" v-model="checkedNames">
    <label for="baobao">b</label><br>
    
    <input type="checkbox" id="baobei" value="baobei" v-model="checkedNames">
    <label for="baobei">c</label><br>

    <div>Radio: {{ picked }}</div>

    <input type="radio" id="one" value="One" v-model="picked" true-value="yes" false-value="no"/>
    <label for="one">One</label><br>

    <input type="radio" id="two" value="Two" v-model="picked" true-value="no" false-value="no"/>
    <label for="two">Two</label>

  </template>

    </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
 
</template>
