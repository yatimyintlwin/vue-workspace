<template>
  <LifeCycle v-if="show" />
  <button @click="show = !show">Toggle</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LifeCycle from './components/LifeCycle.vue'

const show = ref(true)
</script>

<style scoped lang="scss"></style>
