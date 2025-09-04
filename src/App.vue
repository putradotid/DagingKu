<script setup>
import Navbar from "@/components/Navbar.vue"
import Home from "@/components/Home.vue"
import Menu from "@/components/Menu.vue"
import Blog from "@/components/Blog.vue"
import Location from "@/components/Location.vue"
import Contact from "@/components/Contact.vue"
</script>

<template>
  <Navbar class="Navbar" />
  <Home />
  <Menu />
  <Blog />
  <Location />
  <Contact />
  
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
  --yellow: #ffeb3b;

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

.Navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
