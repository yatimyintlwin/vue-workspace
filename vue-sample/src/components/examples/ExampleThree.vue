<script setup lang="ts">
import { reactive, ref } from 'vue'

const person = reactive({ name: 'Mg Mg', age: 20 })
console.log(person.name)

const student = ref({ name: 'Mg Mg', age: 20 })
console.log(student.value.name)
</script>

<template>
  <h1>Example Three</h1>
  <p>Person Name: {{ person.name }}</p>
  <p>Student Name: {{ student.name }}</p>
</template>

<style scoped lang="scss"></style>
