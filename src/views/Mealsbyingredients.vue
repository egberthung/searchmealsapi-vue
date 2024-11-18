<template>
  <div>
    <div class="grid grid-cols-4 max-[1000px]:grid-cols-2 max-[1100px]:grid-cols-3 gap-5 m-3 ">
      <Mealitem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div> 
    <div v-if="!meals.length" class="m-5 flex justify-center items-center h-80">
      <h2>---No meals available---</h2>
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { computed, onMounted } from 'vue';
  import store from '../store';
  import Mealitem from '../components/Mealitem.vue';

  const route = useRoute();
  const meals= computed(()=>store.state.ingridientMeals);
  onMounted(async () => {
  try {
    await store.dispatch('mealsbyingredients', route.params.id);
  } catch (error) {
    console.error('Failed to fetch meals:', error);
  }
  });

</script>