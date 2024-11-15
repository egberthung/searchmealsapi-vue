<template>
  <div class="p-8">
    <input type="text" 
    v-model="keyword"
    @change="searchMeals"
    class="rounded border-2 bg-blue-50 border-blue-200 w-full placeholder:text-gray-400"
    placeholder="Search for meals" />
  </div>
  <div class="grid grid-cols-4 max-[1000px]:grid-cols-2 max-[1100px]:grid-cols-3 gap-5 m-3 ">
    <Mealitem  v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div> 
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue';  
  import store from '../store';
  import { useRoute } from 'vue-router';
  import Mealitem from '../components/Mealitem.vue';

  const route = useRoute();
  const keyword =ref('');
  const meals =  computed(() =>store.state.searchedMeals);

  function searchMeals(){
   store.dispatch('searchMeals',keyword.value);
  }

  onMounted(()=>{
    keyword.value=route.params.name;
    if(keyword.value){
      searchMeals();
    }
  })
</script>