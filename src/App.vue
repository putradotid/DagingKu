<script setup>
import Navbar from "@/components/Navbar.vue"
</script>

<template>
  <Navbar />
  <router-view />
</template>


<style lang="scss">
:root {
  --white: #ffffff;
  --white-soft: #f8f8f8;
  --white-mute: #f2f2f2;

  --black: #181818;
  --black-soft: #222222;
  --black-mute: #282828;

  --indigo: #2c3e50;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--white-soft);
  color: var(--black);
  margin: 0;
  padding: 0;
}

</style>
