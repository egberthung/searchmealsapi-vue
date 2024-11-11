<template>
  <div class="p-8">
    <input type="text" 
    v-model="keyword"
    @change="searchMeals"
    class="rounded border-2 bg-blue-50 border-blue-200 w-full placeholder:text-gray-400"
    placeholder="Search for meals" />
  </div>
  <div class="grid grid-cols-4 max-[1000px]:grid-cols-2 max-[1100px]:grid-cols-3 gap-5 m-3 ">
    <div v-for="meal in meals" :key="meal.idMeal" class="bg-blue-300 rounded-xl pb-6 m-2">
      <router-link :to="{name: 'mealDetails', params:{id: meal.idMeal}}">
        <img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-xl h-48 w-full object-cover">
      </router-link>
      <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
      <p class="p-3 mb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quia provident.
      </p>
      <YoutubeButton :href="meal.StrYoutube" class="ml-2">Youtube</YoutubeButton>
      <router-link :to="{name:'mealDetails', params: {id: meal.idMeal}}" class="px-3 py-2 rounded border-2 bg-blue-100 border-blue-300 hover:text-white hover:bg-blue-500">View
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue';  
  import store from '../store';
  import { useRoute } from 'vue-router';
  import YoutubeButton from "../components/YoutubeButton.vue"

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