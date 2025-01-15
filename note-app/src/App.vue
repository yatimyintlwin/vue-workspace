<template>
  <h1>My Notes</h1>

  <div v-if="isNoteDetailVisible">
    <NoteDetail @save="onSave" @cancel="onCancel" />
  </div>

  <div v-if="!isNoteDetailVisible">
    <a-button type="primary" style="margin-left: 20px" @click="showNoteDetail">+ Add</a-button>

    <a-divider style="height: 1px; background-color: #dbd9d9" />

    <div>
      <ul>
        <li v-for="note in notes" :key="note.header">
          <h3>{{ note.header }}</h3>
          <h4>{{ note.title }}</h4>
          <p>{{ note.note }}</p>
        </li>
      </ul>
    </div>
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

const notes = ref<Note[]>([])
const isNoteDetailVisible = ref(false)

function onSave(note: Note) {
  notes.value.push(note)
  isNoteDetailVisible.value = false
}

function onCancel() {
  isNoteDetailVisible.value = false
}

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
