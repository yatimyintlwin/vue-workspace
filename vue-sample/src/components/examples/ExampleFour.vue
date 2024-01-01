<script setup lang="ts">
import { computed } from 'vue'

const now = computed(() => Date.now())
</script>

<template>
  <h1>Example Four</h1>
  <p>Current time is: {{ now }}</p>
</template>

<style scoped lang="scss"></style>
