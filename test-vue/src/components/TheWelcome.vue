<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { ref } from 'vue'

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
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
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
      <h5>- v-for</h5>
      <li v-for="(item, index) in items">
        {{ index + "-" + item.message }}
      </li>
      <h5>- Nested 'v-for'</h5>
      <ol v-for="(item1, index) in items1">
        <li>{{ item1.message }}
          <ul v-for="childItem in item1.children">
            <li>{{ childItem.a }}</li>
          </ul>
        </li>
      </ol>
    </template>
  
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>
    
    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
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
