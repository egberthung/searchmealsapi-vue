<template>
  <div class="flex flex-col p-8">

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