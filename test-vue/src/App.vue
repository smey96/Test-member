<script setup>
import TheWelcome from './components/TheWelcome.vue'
<<<<<<< HEAD

=======
import Learnsyntax from './components/Learnsyntax.vue'
>>>>>>> vue2
</script>


<template>
<<<<<<< HEAD
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" msg1="<span style='color:red'>This should be Red.</span>"/>
      </div>
  
=======
  <header>    
    <img style="width:125px; height:125px; margin:10px" src="./components/images/heartcat.jpg" />
    <div class="wrapper">
      <Learnsyntax msg="Meow!!" txt="piu piu~" />
    </div>
>>>>>>> vue2
  </header>

  <main>
    <TheWelcome msg ="<span>Message: {{ msg }}</span>"/>
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
