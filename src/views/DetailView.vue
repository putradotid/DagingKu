<script setup>
import { onMounted } from "vue"
import { useMealStore } from "@/stores/mealStore"
import { useRoute } from "vue-router"

const mealStore = useMealStore()
const route = useRoute()

onMounted(() => {
  mealStore.fetchMealById(route.params.id)
})
</script>

<template>
  <div class="p-6">
    <RouterLink to="/" class="text-blue-500 underline">← Kembali</RouterLink>

    <div v-if="mealStore.loading">Loading...</div>

    <div v-else-if="mealStore.selectedMeal" class="mt-4">
      <h2 class="text-2xl font-bold mb-2">{{ mealStore.selectedMeal.strMeal }}</h2>
      <img
        :src="mealStore.selectedMeal.strMealThumb"
        :alt="mealStore.selectedMeal.strMeal"
        class="w-96 rounded-lg shadow mb-4"
      />
      <p><strong>Kategori:</strong> {{ mealStore.selectedMeal.strCategory }}</p>
      <p><strong>Area:</strong> {{ mealStore.selectedMeal.strArea }}</p>
      <p class="mt-4 whitespace-pre-line">
        {{ mealStore.selectedMeal.strInstructions }}
      </p>
    </div>
  </div>
</template>
