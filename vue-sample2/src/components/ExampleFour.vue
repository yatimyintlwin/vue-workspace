<script setup lang="ts">
import { ref } from 'vue'

const fruits = ref(['apple', 'orange', 'grape', 'banana'])
</script>

<template>
  <h1>Example Four</h1>
  <ul>
    <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
  </ul>
</template>

<style scoped lang="scss"></style>
