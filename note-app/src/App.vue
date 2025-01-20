<template>
  <h1>My Notes</h1>

  <div v-if="isNoteDetailVisible">
    <NoteDetail :notes="notes" @save="onSave" @cancel="onCancel" @delete="onDelete" />
  </div>

  <div v-if="!isNoteDetailVisible">
    <a-button type="primary" style="margin-left: 20px" @click="showNoteDetail">+ Add</a-button>

    <a-divider style="height: 1px; background-color: #dbd9d9" />

    <NoteCard :notes="notes" @click="showNoteDetail" />
  </div>
</template>

<script setup lang="ts">
export type Note = {
  header: string
  title: string
  note: string
}

import { ref } from 'vue'
import NoteDetail from './components/NoteDetail.vue'
import NoteCard from './components/NoteCard.vue'

const notes = ref<Note[]>([])
const isNoteDetailVisible = ref(false)

function onSave(note: Note) {
  notes.value.push(note)
  isNoteDetailVisible.value = false
}

function onCancel() {
  isNoteDetailVisible.value = false
}

function onDelete() {}

function showNoteDetail() {
  isNoteDetailVisible.value = true
}
</script>

<style scoped lang="scss">
h1 {
  padding: 10px;
  background-color: rgb(219, 217, 217);
}
</style>
