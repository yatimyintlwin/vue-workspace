<template>
  <ul>
    <li v-for="student in students" :key="student.email">
      <p>{{ student.name }}</p>
      <span>Email: </span>
      {{ student.email }}
      <br />
      <span>Age: </span>
      {{ student.age }}
      <br />
      <span>Gender: </span>
      {{ student.gender }}
      <br />
      <span>Class: </span>
      {{ student.selectedClass }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Student } from './StudentRegister.vue'

defineProps<{
  students: Student[]
}>()
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
}

li {
  margin: 10px auto;
  padding: 12px;
  box-shadow: 2px 3px 4px 2px #ebe8e8;
}

p {
  margin: 0 auto 10px;
  font-size: 20px;
}

p,
span {
  font-weight: bold;
}
</style>
