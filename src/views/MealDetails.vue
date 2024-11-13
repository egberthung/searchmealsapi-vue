<template>
  <div class="m-8 min-w-[800px]">
    <h1 class="text-4xl font-semibold mb-6 flex gap-5 items-center">
      <router-link class="mb-1" :to="{name:'byName',params:{id: id}} ">
        <span class="text-2xl hover:text-gray-500"><FontAwesomeIcon :icon="['fas', 'arrow-left']"/></span> 
      </router-link>
      {{ meal.strMeal }}
    </h1>
    <div class="flex justify-center items-center w-full">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover rounded h-[600px] w-full" >
    </div>
    <div class="text-lg py-2 my-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ meal.strArea }}
      </div>
      <div v-if="meal.strTags">
        <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
      </div> 
      <div v-else>
        <strong class="font-bold">Tags:</strong>  -
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <span><strong>Ingredients:</strong></span>
        <ul>
          <template v-for="(el,ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind+1}`]">
              {{ind+1}} {{ meal[`strIngredient${ind+1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <br>
        <ul>
          <template v-for="(el,ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind+1}`]">
               {{ meal[`strMeasure${ind+1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="my-4">
      <span> <strong>Instructions:</strong><br></span>
      {{ meal.strInstructions }}
    </div>
    <div class="mt-4 flex flex-row">
    <YoutubeButton :href="meal.strYoutube">Tutorial Video</YoutubeButton> 
    <a :href="meal.strSource" 
    target="_blank" 
    class="px-3 py-2 rounded border-2 bg-blue-100 border-blue-300 hover:text-white hover:bg-blue-500 mr-3">
    View Original Source
    </a>
  </div>
  </div>
  
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import axiosClient from '../axiosClient';
  import YoutubeButton from '../components/YoutubeButton.vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  const route= useRoute();
  const meal= ref({});
  const id=route.params.id;
  
  onMounted(()=>{
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data})=>{
      meal.value=data.meals[0]
    })
    .catch(error=>{
      console.error('Error fetching meals:',error);
    });   
  })

</script>