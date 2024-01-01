<script setup lang="ts">
import { ref } from 'vue'

const randomNumber = ref(getRandomNumber())
const inputNumber = ref()
const result = ref('')

function onSubmit(): void {
  if (inputNumber.value === randomNumber.value) {
    result.value = 'same'
  } else if (inputNumber.value > randomNumber.value) {
    result.value = 'higher'
  } else {
    result.value = 'lower'
  }
}

function reset(): void {
  randomNumber.value = getRandomNumber()
  inputNumber.value = ''
  result.value = ''
}

function getRandomNumber(): number {
  return Math.floor(Math.random() * 100) + 1
}
</script>

<template>
  <h1>Number Guessing Game</h1>
  <label for="guess-box">Enter Number: </label>
  <input type="number" id="guess-box" v-model="inputNumber" /> <br /><br />

  <button @click="onSubmit">Submit</button>
  &nbsp; &nbsp;
  <button v-if="result === 'same'" @click="reset">Reset</button>

  <div v-if="result !== ''">
    <h3 v-if="result === 'same'">Your result is same</h3>
    <h3 v-else-if="result === 'higher'">Your result is higher than the result</h3>
    <h3 v-else>Your result is lower than the result</h3>
  </div>
</template>

<style scoped lang="scss"></style>
