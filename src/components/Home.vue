<template>
  <div class="container">
    <section id="home" class="hero">
      <div class="overlay"></div>
      <div class="content">
        <h1 class="title">Selamat Datang di <span class="brand">DagingKu!</span></h1>
        <p class="subtitle">Temukan berbagai resep daging lezat untuk setiap kesempatan.</p>
        <button class="cta">Jelajahi Resep</button>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
}

.hero {
  position: relative;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1505826759037-406b40feb4cd?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") no-repeat center center/cover; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4); // overlay gelap biar teks jelas
}

.content {
  position: relative;
  color: white;
  z-index: 1;
  max-width: 700px;
  padding: 20px;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;

  .brand {
    color: var(--yellow);
  }
}

.subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta {
  background: var(--yellow);
  color: #000;
  font-weight: 600;
  padding: 12px 28px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fdd835;
    transform: scale(1.05);
  }
}
</style>
