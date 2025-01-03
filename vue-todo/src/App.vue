<template>
  <div class="todo-container">
    <h1 class="title">Todo App</h1>
    <input
      type="text"
      class="todo-input"
      placeholder="Enter new todo list"
      v-model="newTodo"
      @keyup.enter="onEnter"
    />

    <div class="todo-columns">
      <div class="column">
        <h2>Todo List</h2>
        <ul>
          <li v-for="todo in todoList" :key="todo.id">
            <input type="checkbox" @click="onCheck(todo)" />
            {{ todo.newTodo }}
            <button @click="deleteFromTodoListById(todo.id)">Delete</button>
          </li>
        </ul>
      </div>

      <div class="column">
        <h2>Done List</h2>
        <ul>
          <li v-for="done in doneList" :key="done.id">
            <input type="checkbox" checked @click="unCheck(done)" />
            {{ done.newTodo }}
            <button @click="deleteFromDoneListById(done.id)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Todo } from './models/Todo'

const todoList = ref<Todo[]>([])
const doneList = ref<Todo[]>([])
const newTodo = ref('')

function onEnter() {
  if (newTodo.value.trim()) {
    const addTodo = new Todo(Date.now(), newTodo.value.trim())
    todoList.value.push(addTodo)

    reset()
  }
}

function reset() {
  newTodo.value = ''
}

function onCheck(checkedTodo: Todo) {
  doneList.value.push(checkedTodo)
  deleteFromTodoListById(checkedTodo.id)
}

function unCheck(unCheckedTodo: Todo) {
  todoList.value.push(unCheckedTodo)
  deleteFromDoneListById(unCheckedTodo.id)
}

function deleteFromTodoListById(id: number) {
  todoList.value = todoList.value.filter((todo) => todo.id !== id)
}

function deleteFromDoneListById(id: number) {
  doneList.value = doneList.value.filter((done) => done.id !== id)
}
</script>

<style scoped lang="scss">
.todo-container {
  width: 50%;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 768px) {
    width: 90%;
  }
}

.title {
  text-align: center;
  margin-bottom: 30px;
}

.todo-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.todo-columns {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}

.column {
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
}

.column h2 {
  text-align: center;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 5px;
}

li input[type='checkbox'] {
  margin-right: 10px;
}

button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
}
</style>
