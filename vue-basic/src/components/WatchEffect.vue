<template>
  <input type="text" v-model="name" placeholder="Enter your name" />
  <input type="email" v-model="email" placeholder="Enter your email" />
  <button :disabled="block">Submit</button>
  <p v-if="block" style="color: red">Your are blocked</p>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const name = ref('')
const email = ref('')
const block = ref(false)

watchEffect(() => {
  block.value = name.value === 'John' && email.value === 'john@gmail.com'
})
</script>

<style scoped lang="scss"></style>
