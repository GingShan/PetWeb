<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navheader from './components/header.vue'
</script>

<template>
  <navheader />
  <section class="pageArea">
    <RouterView />
  </section>
  <p class="copyRight">
    copyright&copy;2024/06/18
  </p>
</template>

<style scoped>
  .copyRight{
    width: 100%;
    text-align: center;
    padding: 15px 0%;
    color: #333;
    background-color: #f5f5f5;
  }
</style>