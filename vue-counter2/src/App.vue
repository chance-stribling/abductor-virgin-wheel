<script setup>
  import {ref} from "vue";
  const count = ref(0);
  const cost = ref(0);
</script>

<template>
  <main>
    <div>
      <h4>Current count is...</h4>
      <h1>{{ count }}</h1>
      <button @click="count--; cost=cost-0.25" >-</button>
      <button @click="count++; cost=cost+0.25" >+</button>
      <h4>Cost:</h4>
      <h1>${{ cost }}</h1>
  </div>
  </main>
</template>

<style scoped>
  main{
    background-color: aquamarine;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div{
    text-align: center;
  }
</style>