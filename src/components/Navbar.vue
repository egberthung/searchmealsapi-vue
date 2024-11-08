<template>
  <div>
    <header class="bg-blue-300 shadow-md h-16 flex justify-between items-center">
      <router-link :to="{name: 'home'}" class="inline-flex px-7 items-center h-full mx-4 font-medium">
        Home
      </router-link>
      <div class="mx-4">
        <router-link :to="{name: 'byName'}" class="px-5 h-full hover:text-gray-100 font-medium">
          Search meals
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="px-5 h-full hover:text-gray-100 font-medium">
          Meals by Letter
        </router-link>
        <router-link :to="{name: 'byIngredient'}" class="px-5 h-full hover:text-gray-100 font-medium">
          Meals By Ingredients
        </router-link>
      </div>
    </header>
  </div>
</template>