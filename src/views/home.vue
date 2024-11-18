<template>
  <div class="m-5 flex flex-col justify-center items-center h-80">
    <h1 class=" m-10 text-5xl font-bold text-gray-600">Welcome to this website</h1>
    <p class="text-2xl font-bold text-gray-600">Go start on Searching meals in the navbar !!!</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axiosClient from '../axiosClient';

const ingredients = ref([]);

onMounted(async ()=> {
  const response=await axiosClient.get('list.php?i=list');
  console.log(response.data);
  ingredients.value = response.data;
})
</script>