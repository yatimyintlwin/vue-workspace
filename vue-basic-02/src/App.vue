<template>
  <ChildComponent
    :username="name"
    :age="age"
    email="john@gmail.com"
    @submit="save"
    @cancel="onCancel"
    @edit="onEdit"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from './components/ChildComponent.vue'

const name = ref('John Doe')
const age = ref(25)

function save(date: Date) {
  console.log('Date: ', date)
}

function onCancel() {
  console.log('John is canceled')
}

function onEdit(message: string) {
  console.log(message)
}
</script>

<style scoped lang="scss"></style>
