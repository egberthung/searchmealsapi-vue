<template>
  <div class="bg-blue-300 rounded-xl pb-6 m-2">
      <router-link :to="{name: 'mealDetails', params:{id: meal.idMeal}}">
        <img :src="meal.strMealThumb" alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover">
      </router-link>
      <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
      <p class="p-3 mb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quia provident.
      </p>
      <YoutubeButton :href="meal.StrYoutube" class="ml-2">Youtube</YoutubeButton>
      <router-link :to="{name:'mealDetails', params: {id: meal.idMeal}}" class="px-3 py-2 rounded border-2 bg-blue-100 border-blue-300 hover:text-white hover:bg-blue-500">View
      </router-link>
    </div>
</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue';

  const {meal}   = defineProps({
    meal: {
      required: true,
      type: Object,
    }
  })
</script>