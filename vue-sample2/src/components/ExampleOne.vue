<script setup lang="ts">
import { ref } from 'vue'

const isRed = ref<boolean>(false)
const isBox = ref<boolean>(false)
</script>

<template>
  <h1>Example One</h1>
  <p class="paragraph" :class="{ 'text-color': isRed, box: isBox }">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum corrupti ipsa ex
    accusamus doloremque officiis est, dignissimos minus dolor odio, laudantium corporis quam odit
    accusantium voluptatum magnam nemo iure!
  </p>
  <button @click="isRed = !isRed">Toggle Red</button>
  <button @click="isBox = !isBox">Toggle Box</button>
</template>

<style scoped lang="scss">
.paragraph {
  width: 300px;
}

.text-color {
  color: red;
}

.box {
  border: 1px solid red;
}
</style>
