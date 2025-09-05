<script setup>
import { onMounted } from "vue"
import { useMealStore } from "@/stores/mealStore"
import { RouterLink } from "vue-router"

const mealStore = useMealStore()

onMounted(() => {
  mealStore.fetchMealsByIngredient("beef") // contoh: semua resep beef
})
</script>

<template>
  <div class="container">
    <section id="menu">
      <h1>DagingKu - Resep Daging</h1>

      <div v-if="mealStore.loading" class="loading">Loading...</div>

      <div v-else class="kotak-menu">
        <RouterLink
          v-for="meal in mealStore.meals"
          :key="meal.idMeal"
          :to="`/meal/${meal.idMeal}`"
          class="card"
        >
          <img :src="meal.strMealThumb" :alt="meal.strMeal" />
          <div class="info">
            <h2>{{ meal.strMeal }}</h2>
          </div>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 3rem;

  h1 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 2rem;
    text-align: center;
  }

  .loading {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: #888;
  }
}

.kotak-menu {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.15);
  }

  img {
    height: 200px;
    object-fit: cover;
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .info {
    padding: 1rem;
    text-align: center;

    h2 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #34495e;
      margin: 0;
    }
  }
}
</style>