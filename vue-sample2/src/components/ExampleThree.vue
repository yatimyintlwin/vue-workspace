<script setup lang="ts">
import { ref } from 'vue'

const isHello = ref(false)
</script>

<template>
  <h1>Example Three</h1>

  <div v-if="isHello">
    <h2>Hello in DIV</h2>
  </div>

  <template v-if="isHello">
    <h2>Hello in DIV</h2>
  </template>

  <h2 v-if="isHello">Hello this is v-if test</h2>
  <h2 v-show="isHello">Hello this is v-show test</h2>
</template>

<style scoped lang="scss"></style>
