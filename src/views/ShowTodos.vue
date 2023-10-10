<template>
  <div class="about">
    <h1>this is show todos page</h1>

    <table style="width: 100%">
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
        <tr v-for="todo in todoList" :key="todo.id">
          <td>{{ todo.text }}</td>
          <td>{{ todo.from }}</td>
          <td>{{ todo.to }}</td>
          <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
          <td>
            <div>
              <button class="completed">completed</button>
              <button class="delete">delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const todoList = ref([]);

const updateTodos = () => {
  if (localStorage.getItem("todos")) {
    todoList.value = JSON.parse(localStorage.getItem("todos"));
  }
};

onMounted(() => {
  updateTodos();
});
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
