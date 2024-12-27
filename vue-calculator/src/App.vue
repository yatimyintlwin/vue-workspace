<template>
  <h2>Input: {{ input1 }} {{ operation }} {{ input2 }}</h2>
  <h2>Result: {{ result }}</h2>

  <button class="btn" @click="inputNumber(1)">1</button>
  <button class="btn" @click="inputNumber(2)">2</button>
  <button class="btn" @click="inputNumber(3)">3</button>
  <button class="btn" @click="selectOperation('+')">+</button>
  <br />

  <button class="btn" @click="inputNumber(4)">4</button>
  <button class="btn" @click="inputNumber(5)">5</button>
  <button class="btn" @click="inputNumber(6)">6</button>
  <button class="btn" @click="selectOperation('-')">-</button>
  <br />

  <button class="btn" @click="inputNumber(7)">7</button>
  <button class="btn" @click="inputNumber(8)">8</button>
  <button class="btn" @click="inputNumber(9)">9</button>
  <button class="btn" @click="selectOperation('*')">*</button>
  <br />

  <button class="btn" @click="clear">C</button>
  <button class="btn" @click="inputNumber(0)">0</button>
  <button class="btn" @click="showResult">=</button>
  <button class="btn" @click="selectOperation('/')">/</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
const result = ref()
const operation = ref('')

function inputNumber(num: number) {
  if (!operation.value) {
    if (input1.value !== '0') {
      input1.value += num.toString()
    }
  } else {
    if (input2.value !== '0') {
      input2.value += num.toString()
    }
  }
}

function selectOperation(operator: string) {
  if (input1.value) {
    operation.value = operator
  }
}

function showResult() {
  const num1 = parseInt(input1.value)
  const num2 = parseInt(input2.value)

  switch (operation.value) {
    case '+':
      result.value = num1 + num2
      break

    case '-':
      result.value = num1 - num2
      break

    case '*':
      result.value = num1 * num2
      break

    case '/':
      if (num2 === 0) {
        result.value = 'Error'
      } else {
        result.value = num1 / num2
      }
      break
  }
}

function clear() {
  input1.value = ''
  input2.value = ''
  result.value = ''
  operation.value = ''
}
</script>

<style scoped lang="scss">
.btn {
  font-size: large;
  width: 50px;
  height: 50px;
  margin: 5px;
  text-align: center;
}
</style>
