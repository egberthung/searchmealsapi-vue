<template>
  <a :href="href" 
    target="_blank" 
    class="px-3 py-2 rounded border-2 bg-blue-100 border-blue-300 hover:text-white hover:bg-blue-500 mr-3">
  <slot></slot>
  </a>
</template>

<script setup>
  const props= defineProps({
    href: String
  })
</script>