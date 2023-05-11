<script setup>
import TheWelcome from './components/TheWelcome.vue'
import Learnsyntax from './components/Learnsyntax.vue'
</script>

<template>
  <header>    
    <img style="width:125px; height:125px; margin:10px" src="./components/images/heartcat.jpg" />
    <font-awesome-icon icon="fa-solid fa-user-secret" />

    <div class="wrapper">
      <Learnsyntax msg="Meow!!" txt="piu piu~" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.icon {
    margin-left: 12px;
    font-size: 36px;
    color: #222;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
