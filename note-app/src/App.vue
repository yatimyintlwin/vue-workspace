<template>
  <h1>My Notes</h1>

  <div v-if="isNoteDetailVisible">
    <NoteDetail :notes="notes" @save="onSave" @cancel="onCancel" @delete="onDelete" />
  </div>

  <div v-if="!isNoteDetailVisible">
    <a-button type="primary" style="margin-left: 20px" @click="showNoteDetail">+ Add</a-button>

    <a-divider style="height: 1px; background-color: #dbd9d9" />

    <NoteCard :notes="notes" @cardClick="editNoteDetail" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NoteDetail from './components/NoteDetail.vue'
import NoteCard from './components/NoteCard.vue'
import type { Note } from './models/Note'

const notes = ref<Note[]>([])
const isNoteDetailVisible = ref(false)

function onSave(note: Note) {
  notes.value.push(note)
  isNoteDetailVisible.value = false
}

function onCancel() {
  isNoteDetailVisible.value = false
}

function onDelete(id: number) {
  notes.value = notes.value.filter((note) => note.id !== id)
  isNoteDetailVisible.value = false
}

function showNoteDetail() {
  isNoteDetailVisible.value = true
}

function editNoteDetail(id: number) {
  const selectedNote = notes.value.find((note) => note.id === id)
  if (selectedNote) {
    isNoteDetailVisible.value = true
  }
}
</script>

<style scoped lang="scss">
h1 {
  padding: 10px;
  background-color: rgb(219, 217, 217);
}
</style>
