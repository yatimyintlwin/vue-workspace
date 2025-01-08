<template>
  <h1>Student Registration</h1>

  <section class="register-section">
    <div class="studentForm-container">
      <StudentForm @submit="onSubmit" />
    </div>

    <div class="RegisteredList-container">
      <RegisteredList :students="students" />
    </div>
  </section>
</template>

<script setup lang="ts">
export type Student = {
  name: string
  email: string
  age: number
  gender: string
  selectedClass: string
}

import { ref } from 'vue'
import RegisteredList from './RegisteredList.vue'
import StudentForm from './StudentFrom.vue'

const students = ref<Student[]>([])

function onSubmit(student: Student) {
  students.value.push(student)
}
</script>

<style scoped lang="scss">
.register-section {
  margin-top: 40px;
  display: flex;
}

.studentForm-container {
  flex: 30%;
}

.RegisteredList-container {
  flex: 70%;
}
</style>
