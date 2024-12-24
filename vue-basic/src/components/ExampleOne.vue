<template>
  <section>
    <h1 :class="redColor">{{ greet }}</h1>
    <br />
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="customIncrese(2)">Double Increse</button>
    <button @click="customIncrese(3)">Triple Increse</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const greet = ref('Hi Jhon!')
const redColor = ref('red-color')
const count = ref(0)

function increment() {
  count.value++
}

function customIncrese(num: number) {
  count.value += num
}
</script>

<style scoped lang="scss">
.red-color {
  color: red;
}
</style>
