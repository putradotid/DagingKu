// stores/mealStore.js
import { defineStore } from "pinia"
import axios from "axios"

export const useMealStore = defineStore("mealStore", {
  state: () => ({
    meals: [],
    loading: false,
    selectedMeal: null
  }),
  actions: {
    async fetchMealsByIngredient(ingredient = "beef") {
      if (this.meals.length > 0) return // supaya tidak fetch ulang
      this.loading = true
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      )
      this.meals = res.data.meals || []
      this.loading = false
    },
    async fetchMealById(id) {
      this.loading = true
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      this.selectedMeal = res.data.meals ? res.data.meals[0] : null
      this.loading = false
    }
  }
})
