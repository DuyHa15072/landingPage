<template>
  <nav class="hidden">
        <RouterLink to="/landing/vn">Home</RouterLink>
        <RouterLink to="/landing/en">About</RouterLink>
  </nav>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>

</style>