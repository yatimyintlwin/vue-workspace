<script setup lang="ts">
import { ref } from 'vue'

const name = ref('Mg Mg')
const age = ref(20)
const id = ref('welcome')

name.value = 'Aung Aung'
age.value = 30
</script>

<template>
  <h1 :id="`header-${id}`">Hello {{ name }}</h1>
  <p>Your age is {{ age + 5 }}</p>
</template>

<style scoped lang="scss"></style>
