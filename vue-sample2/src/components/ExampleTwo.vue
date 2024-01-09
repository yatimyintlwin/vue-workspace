<script setup lang="ts">
import { ref } from 'vue'

const color = ref('red')
</script>

<template>
  <h1>Example Two</h1>
  <input type="text" placeholder="Enter the color" v-model="color" />
  <p :style="{ color: color }">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolor nisi nihil placeat hic
    explicabo cum nesciunt consequuntur. Id sapiente expedita voluptas repellendus eveniet
    perspiciatis nobis, quis eos dolor dignissimos!
  </p>
</template>

<style scoped lang="scss"></style>
