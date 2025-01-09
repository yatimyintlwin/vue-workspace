<template>
  <SlotTest>
    <h1>Header 1</h1>
    <p>Hello from Parent</p>

    <template #footer>
      <p>Footer Text</p>
    </template>

    <template #sub-footer>
      <p>Sub Footer Text</p>
    </template>
  </SlotTest>
</template>

<script setup lang="ts">
import SlotTest from './components/SlotTest.vue'
</script>

<style scoped lang="scss"></style>
