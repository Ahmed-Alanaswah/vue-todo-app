<template>
  <div class="home">
    <h1>add new todos</h1>
    <form action="" @submit.prevent="addTodo">
      <input
        type="text"
        v-model="todoObj.text"
        placeholder="enter your todo..."
        required
      />
      <br />
      <input
        type="date"
        v-model="todoObj.from"
        placeholder="from"
        style="margin-top: 20px"
        required
      />
      <input
        type="date"
        placeholder="to"
        v-model="todoObj.to"
        style="margin-left: 20px; margin-bottom: 20px"
        required
      />
      <br />
      <input type="submit" value="add" required />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import todosMixins from "@/mixins/todo";

const { todoList, addToLocalST } = todosMixins();
//data
const todoObj = ref({
  id: "",
  text: "",
  from: "",
  to: "",
  createdAt: "",
  isCompleted: false,
});

//methods

// add todo
const addTodo = () => {
  todoObj.value.id = todoList.value.length + 1;
  todoObj.value.createdAt = new Date();
  todoList.value.push(todoObj.value);
  addToLocalST();
  alert("todo was added succesfully");
  todoObj.value = {
    text: "",
    from: "",
    to: "",
    createdAt: "",
    isCompleted: false,
  };

  console.log(todoList.value);
};
</script>

<style scoped lang="scss">
form {
  input[type="text"] {
    width: 50%;
    padding: 10px;
    font-size: 20px;
  }
  input[type="submit"] {
    padding: 10px 20px;
    font-size: 20px;
    background-color: rgb(8, 100, 71);
    border: 1px solid rgb(8, 100, 71);
    color: white;
    border-radius: 5px;
    margin-left: 20px;
  }
}
</style>
