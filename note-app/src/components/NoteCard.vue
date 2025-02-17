<template>
  <div class="card-container">
    <a-card hoverable style="width: 250px; margin-bottom: 20px">
      <h3>{{ note.header }}</h3>
      <a-divider />
      <h4>{{ note.title }}</h4>
      <p>{{ note.note }}</p>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import type { Note } from '@/models/Note'

defineProps<{
  note: Note
}>()
</script>

<style scoped lang="scss">
.card-container {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
