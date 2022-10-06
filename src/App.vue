<template>
  <nav class="hidden">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/ENG">About</RouterLink>
  </nav>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>

</style>