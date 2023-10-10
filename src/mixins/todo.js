import { ref, onMounted } from "vue";

const todosfunctions = () => {
  //data
  const todoList = ref([]);

  //methods
  const addToLocalST = () => {
    localStorage.setItem("todos", JSON.stringify(todoList.value));
  };

  const updateTodos = () => {
    if (localStorage.getItem("todos")) {
      todoList.value = JSON.parse(localStorage.getItem("todos"));
    }
  };

  onMounted(() => {
    updateTodos();
  });

  return { todoList, addToLocalST };
};

export default todosfunctions;
