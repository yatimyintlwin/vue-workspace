<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Header">
      <a-input v-model:value="header" allow-clear />
    </a-form-item>

    <a-form-item label="Title">
      <a-input v-model:value="title" allow-clear />
    </a-form-item>

    <a-form-item label="Note">
      <a-textarea v-model:value="note" :rows="8" />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click.prevent="onSave">Save</a-button>
      <a-button danger style="margin-left: 10px" @click="onDelete">Delete</a-button>
      <a-button style="margin-left: 10px" @click="onCancel">Cancel</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { message } from 'ant-design-vue'
import type { Note } from '@/models/Note'

const props = defineProps<{
  selectedNote: Note
}>()

const emit = defineEmits(['save', 'cancel', 'delete'])

const labelCol = { span: 4 }
const wrapperCol = { span: 14 }

const header = ref<string>(props.selectedNote.header)
const title = ref<string>(props.selectedNote.title)
const note = ref<string>(props.selectedNote.note)

function onSave() {
  if (header.value.trim() === '' && title.value.trim() === '' && note.value.trim() === '') {
    message.warning('Please fill in the form')
    return
  }

  emit('save', {
    header: header.value.trim(),
    title: title.value.trim(),
    note: note.value.trim(),
  })

  header.value = ''
  title.value = ''
  note.value = ''
}

function onDelete() {
  emit('delete')
}

function onCancel() {
  emit('cancel')
}
</script>

<style scoped lang="scss"></style>
