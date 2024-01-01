<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(false)

function showSecret() {
  isShow.value = !isShow.value
}
</script>

<template>
  <h1>Example Two</h1>
  <button @click="showSecret">Toggle Secret</button>
  <h2 v-if="isShow">This is secret!</h2>
</template>

<style scoped lang="scss"></style>
