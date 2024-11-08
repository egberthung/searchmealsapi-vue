<template>
  <div class="bg-blue-100 h-full">
    <navbar />
    <main>
      <RouterView /> 
    </main>
  </div>
</template>

<script setup>
import Navbar  from './Navbar.vue';
import { RouterView } from 'vue-router';
</script>