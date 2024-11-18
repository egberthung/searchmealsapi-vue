import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home.vue'
import Mealsbyname from "../views/mealsbyname.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Mealsbyingredients from "../views/Mealsbyingredients.vue";
import Mealsbyletter from "../views/mealsbyletter.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/ingredients.vue";

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children:[
      {
        path: '/',
        name: 'home',
        component: Home,
      },
    
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: Mealsbyname,
      },
    
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: Mealsbyletter,
      },
      {
        path: '/ingredients',
        name: 'Ingredients',
        component: Ingredients,
      },    
      {
        path: '/by-ingredients/:ingredient?',
        name: 'byIngredient',
        component: Mealsbyingredients,
      },    
      {
        path: '/meal/:id?',
        name: 'mealDetails',
        component: MealDetails,
      },
    ]
  },
  {
    path:'/guest',
    component: GuestLayout,
  },
  {
    path: '/home',
    redirect: { name: 'home' }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;