<template>
  <form @submit.prevent="onSubmit" class="student-form">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
    </div>

    <div class="form-group">
      <label for="age">Age:</label>
      <input type="number" id="age" v-model="age" required min="16" max="60" />
    </div>

    <div class="form-group">
      <label>Gender:</label>
      <div class="radio-group">
        <label>
          <input type="radio" v-model="gender" value="male" required />
          Male
        </label>
        <label>
          <input type="radio" v-model="gender" value="female" required />
          Female
        </label>
      </div>
    </div>

    <div class="form-group">
      <label>Select Class:</label>
      <select v-model="selectedClass" required>
        <option value="" disabled>Select a class</option>
        <option v-for="course in courses" :key="course" :value="course">
          {{ course }}
        </option>
      </select>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const age = ref()
const gender = ref('')
const selectedClass = ref('')

const courses = ref([
  'Web Development',
  'JavaScript Advanced',
  'Vuejs Basics',
  'React Fundamentals',
  'Nodejs Backend',
  'Python Programming',
  'Database Design',
  'Cloud Computing',
  'Mobile App Developmet',
  'DevOps Basics',
])

const emit = defineEmits(['submit'])

function onSubmit() {
  emit('submit', {
    name: name.value,
    email: email.value,
    age: age.value,
    gender: gender.value,
    selectedClass: selectedClass.value,
  })
  name.value = ''
  email.value = ''
  age.value = ''
  gender.value = ''
  selectedClass.value = ''
}
</script>

<style scoped lang="scss">
.student-form {
  background-color: #f2f2f2;
  padding: 20px;
  margin: auto 20px;
  border: 1px solid lightgrey;
  border-radius: 8px;
}

input,
select {
  width: 95%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

select {
  width: 100%;
}

label {
  margin-bottom: 10px;
  display: block;
  font-weight: bold;
}

.radio-group {
  display: flex;
  gap: 10px;
  align-items: center;
}

.radio-group input {
  width: auto;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  font-size: 17px;
}

button:hover {
  background-color: #45a049;
}
</style>
