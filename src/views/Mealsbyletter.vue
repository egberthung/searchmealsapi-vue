<template>
  <div class="flex justify-center gap-2 m-5">
      <router-link class="pr-1 my-3 font-medium" :to="{name: 'byLetter', params:{ letter }}" v-for="letter of letters" :key="letter">
        {{ letter }}
      </router-link>
  </div>
  <div>
    <div v-if="meals.length > 0" class="grid grid-cols-4 max-[1000px]:grid-cols-2 max-[1100px]:grid-cols-3 gap-5 m-3 ">
      <Mealitem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div> 
    <div v-else class="m-5">
      <span>---- Empty list ----</span>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted, watch } from 'vue';
  import store from '../store';
  import { useRoute } from 'vue-router';
  import Mealitem from '../components/Mealitem.vue';

  const route = useRoute();
  const meals= computed(()=>store.state.lettermeals);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYNZ'.split("");

  onMounted(()=>{
    if(route.params.letter){
      fetchMeals(route.params.letter);
    }
  })
  
  watch(()=>route.params.letter,(newLetter)=>{
      fetchMeals(newLetter);
  })

  function fetchMeals(letter){
    store.commit('setLetterMeals',[]);
    store.dispatch('mealsbyletter', letter);
  }

</script>