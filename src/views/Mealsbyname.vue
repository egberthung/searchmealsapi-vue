<template>
  <div class="p-8">
    <input type="text" 
    v-model="keyword"
    @change="searchMeals"
    class="rounded border-2 bg-blue-50 border-blue-200 w-full placeholder:text-gray-400"
    placeholder="Search for meals" />
  </div>
  <div class="grid grid-cols-4 max-[1300px]:grid-cols-2 gap-5 m-4">
    <div v-for="meal of meals" :key="meal.idmeal" class="bg-blue-300 rounded-x1 p-4">
      <router-link to="/">
        <img :scr="meal.strMealThumb" alt="strMeal" class="rounded-t-x1 h-48 w-full object-cover">
      </router-link>
      <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
      <p class="p-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quia provident.
      </p>
      <div class="p-3">
        <a href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 bg-blue-100 border-blue-300 hover:text-white hover:bg-blue-500 mr-3">Youtube</a>
        <router-link to="/" class="px-3 py-2 rounded border-2 bg-blue-100 border-blue-300 hover:text-white hover:bg-blue-500">View
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue';  
  import store from '../store';
  import { useRoute } from 'vue-router';

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