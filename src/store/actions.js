import { data } from 'autoprefixer';
import axiosClient from '../axiosClient';

export function searchMeals({ commit },keyword){
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=>{
      commit('setSearchedMeals', data.meals);
    })
    .catch(error=>{
      console.error('Error fetching meals:',error);
    });
}

export function mealsbyletter({ commit },letter){
  axiosClient.get(`search.php?f=${letter}`)
    .then(({data})=>{
      commit('setLetterMeals', data.meals);
    })
    .catch(error=>{
      console.error(`Error fetching meals:`,error);
    })
}

export function mealsbyingredients({commit},ingredient){
  axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({data})=>{
      commit('setingridientmeals',data.meals)
    })
    .catch(error=>{
      console.error(`Error fetching meals:`,error);
    })
}