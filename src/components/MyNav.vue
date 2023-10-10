<template>
  <div class="nav">
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="{ name: route.name }">{{
          route.meta.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

console.log(router);
</script>

<style scoped lang="scss">
ul {
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
  background-color: green;
  padding: 15px;

  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    &.router-link-active {
      text-decoration: underline;
    }
  }
}
</style>
