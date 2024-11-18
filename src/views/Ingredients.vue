<template>
  <div class="m-10">
    <h1 class="text-4xl font-semibold mb-4">Ingredients</h1>
    <router-link 
      :to="{
      name: 'byIngredient', 
      params:{ingredient: ingredient.idIngredient},
      }" 
      v-for="ingredient of ingredients" :key="ingredient.idIngredient" 
      class=" block bg-white my-7 p-5 rounded-lg shadow-lg">

      <h1 class="text-2xl font-medium mb-4">{{ ingredient.strIngredient }}</h1>
      <p>{{ ingredient.strDescription || 'No description Available'}}</p>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import axiosClient from '../axiosClient';

const ingredients = ref([])

  onMounted(()=>{
    axiosClient.get('list.php?i=list')
      .then(({data})=>{
        ingredients.value = data.meals;
      });
  });

</script>