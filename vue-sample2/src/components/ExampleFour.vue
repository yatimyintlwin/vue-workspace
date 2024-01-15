<script setup lang="ts">
import { ref } from 'vue'
import { Fruit } from '../models/fruit'

const fruits = ref<Fruit[]>([
  new Fruit(1, 'Apple', true),
  new Fruit(2, 'Orange', false),
  new Fruit(3, 'Grape', true),
  new Fruit(4, 'Pineapple', false),
  new Fruit(5, 'Banana', false)
])

const name = ref<string>('')
const isFavorite = ref<boolean>(false)

function onAdd() {
  if (name.value.trim() === '') return

  const newFruit = new Fruit(Date.now(), name.value, isFavorite.value)
  fruits.value.push(newFruit)
  reset()
}

function onDelete(id: number) {
  fruits.value = fruits.value.filter((fruit) => fruit.id !== id)
}

function reset() {
  name.value = ''
  isFavorite.value = false
}
</script>

<template>
  <h1>Example Four</h1>

  <!-- fruit add form -->
  <input type="text" placeholder="Enter fruit" v-model="name" />
  <br /><br />
  <label for="favorite">Favorite </label>
  <input type="checkbox" id="favorite" v-model="isFavorite" />
  <br /><br />
  <button @click="onAdd()">Add</button>
  <br /><br />

  <!-- Fruit list -->
  <ul style="list-style-type: none">
    <li v-for="(fruit, index) in fruits" :key="fruit.id" style="margin-bottom: 15px">
      <!-- Fruit View -->
      <div v-if="!fruit.isEditMode">
        <span style="cursor: pointer" @click="onDelete(fruit.id)">❌ </span>
        <span style="cursor: pointer" @dblclick="fruit.isEditMode = true">{{
          index + 1 + '. ' + fruit.name
        }}</span>
        <span v-if="fruit.isFavorite"> ⭐</span>
      </div>
      <!-- fruit Edit -->
      <div v-else>
        <input type="text" v-model="fruit.name" placeholder="Enter Fruit" />
        <button @click="fruit.isEditMode = false">👍</button>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>
