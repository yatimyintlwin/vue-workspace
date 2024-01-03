<script setup lang="ts">
import { ref } from 'vue'

const result = ref('')
const inputUserName = ref('')
const inputPassword = ref('')

function onLogin() {
  if (inputUserName.value === 'admin' && inputPassword.value === 'admin') {
    result.value = 'correct'
  } else {
    result.value = 'incorrect'
  }
}
</script>

<template>
  <h1>Login</h1>
  <label for="username">Enter username: </label>
  <input type="text" id="username" v-model="inputUserName" />
  <br /><br />

  <label for="password">Enter password: </label>
  <input type="password" id="password" v-model="inputPassword" />
  <br /><br />

  <button @click="onLogin">Login</button>

  <div v-if="result !== ''">
    <h3 v-if="result === 'correct'" id="success">Login successful!</h3>
    <h3 v-else id="fail">username or password is worng!</h3>
  </div>
</template>

<style scoped lang="scss">
#success {
  color: green;
}

#fail {
  color: red;
}
</style>
