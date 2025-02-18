<template>
  <h1>My Notes</h1>

  <div v-if="!isDetailView">
    <a-button type="primary" style="margin-left: 20px" @click="showNoteDetail">+ Add</a-button>

    <a-divider style="height: 1px; background-color: #dbd9d9" />

    <div class="card-container">
      <NoteCard v-for="note in notes" :key="note.id" :note="note" @click="editNote(note.id)" />
    </div>
  </div>

  <div v-if="isDetailView">
    <NoteDetail :selectedNote="selectedNote" @save="onSave" @cancel="onCancel" @delete="onDelete" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NoteDetail from './components/NoteDetail.vue'
import NoteCard from './components/NoteCard.vue'
import { Note } from './models/Note'

const notes = ref<Note[]>([])
const isDetailView = ref<boolean>(false)
const selectedNote = ref<Note>(new Note(-1, '', '', ''))

function onSave(updatedNote: Note) {
  if (updatedNote.id === -1) {
    updatedNote.id = Date.now()
    notes.value.push(updatedNote)
  } else {
    notes.value = notes.value.map((note) => {
      if (note.id === updatedNote.id) {
        note = updatedNote
      }
      return note
    })
  }

  isDetailView.value = false
}

function onCancel() {
  isDetailView.value = false
}

function onDelete(id: number) {
  notes.value = notes.value.filter((note) => note.id !== id)
  isDetailView.value = false
}

function showNoteDetail() {
  selectedNote.value = new Note(-1, '', '', '')
  isDetailView.value = true
}

function editNote(id: number) {
  selectedNote.value = notes.value.find((note) => note.id === id) ?? new Note(-1, '', '', '')
  if (selectedNote.value) {
    isDetailView.value = true
  }
}
</script>

<style scoped lang="scss">
h1 {
  padding: 10px;
  background-color: rgb(219, 217, 217);
}

.card-container {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
