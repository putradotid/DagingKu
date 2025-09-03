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
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">🍖 DagingKu - Resep Daging</h1>

    <div v-if="mealStore.loading">Loading...</div>

    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <RouterLink
        v-for="meal in mealStore.meals"
        :key="meal.idMeal"
        :to="`/meal/${meal.idMeal}`"
        class="block border rounded-lg shadow hover:shadow-lg transition"
      >
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full rounded-t-lg" />
        <div class="p-2 text-center font-medium">{{ meal.strMeal }}</div>
      </RouterLink>
    </div>
  </div>
</template>
