
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
<script>
import { createApp } from 'vue'
createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
</script>
