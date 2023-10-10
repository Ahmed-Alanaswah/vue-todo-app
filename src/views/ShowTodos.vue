<template>
  <div class="about">
    <h1>this is show todos page</h1>

    <table style="width: 100%" v-if="todoList.length">
      <thead>
        <tr>
          <th>text</th>
          <th>from</th>
          <th>to</th>
          <th>createdAt</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todoList"
          :key="todo.id"
          :style="`${
            todo.isCompleted
              ? 'background-color:#a1e1b0'
              : 'background:transparent'
          } `"
        >
          <td>{{ todo.text }}</td>
          <td>{{ todo.from }}</td>
          <td>{{ todo.to }}</td>
          <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
          <td>
            <div>
              <button class="completed" @click="markCompleted(todo)">
                {{ todo.isCompleted ? "incompleted" : "completed" }}
              </button>
              <button class="delete" @click="deleteTodo(index)">delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 v-else style="line-height: 12">no todos to show</h2>
  </div>
</template>

<script setup>
import todosMixins from "@/mixins/todo";

const { todoList, addToLocalST } = todosMixins();

const deleteTodo = (index) => {
  todoList.value.splice(index, 1);
  addToLocalST();
};

//mark as completed

const markCompleted = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  console.log(todo.isCompleted);
};
</script>

<style scoped lang="scss">
table {
  tr,
  td,
  th {
    border: 1px solid;
    padding: 5px;
  }
  td {
    button {
      background-color: rgb(16, 110, 85);
      color: white;
      font-size: 17px;
      padding: 5px 10px;
      border: 1px solid rgb(16, 110, 85);
      border-radius: 7px;

      &.delete {
        background-color: indianred;
        border: 1px solid indianred;
        margin-left: 10px;
      }
    }
  }
}
</style>
