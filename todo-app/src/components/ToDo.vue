<script setup lang="ts">
import { ref } from 'vue'
import { Todo } from '../models/todo'

const todoList = ref<Todo[]>([])
const name = ref<string>('')

const doneList = ref<Todo[]>([])

function onEnter() {
  if (name.value.trim() === '') return

  const newTodo = new Todo(Date.now(), name.value)
  todoList.value.push(newTodo)

  reset()
}

function reset() {
  name.value = ''
}

function onCheck(checkedTodo: Todo) {
  doneList.value.push(checkedTodo)

  todoList.value = todoList.value.filter((todo) => todo.id !== checkedTodo.id)
}

function unCheck(unCheckedTodo: Todo) {
  todoList.value.push(unCheckedTodo)

  doneList.value = doneList.value.filter((done) => done.id !== unCheckedTodo.id)
}
</script>

<template>
  <div class="container">
    <!-- todo add form -->
    <input type="text" placeholder="Enter List" v-model="name" @keyup.enter="onEnter" />

    <!-- todo view -->
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <input type="checkbox" @click="onCheck(todo)" />
        {{ todo.name }}
      </li>
    </ul>

    <h1>Done List</h1>
    <ul>
      <li v-for="done in doneList" :key="done.id" id="doneTodo">
        <input type="checkbox" checked @click="unCheck(done)" />
        {{ done.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
ul {
  list-style-type: none;
}

#doneTodo {
  text-decoration: line-through;
}
</style>
