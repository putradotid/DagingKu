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

            <div v-if="mealStore.loading">Loading...</div>

            <div v-else class="kotak-menu grid grid-cols-2 md:grid-cols-4 gap-4">
                <RouterLink
                    v-for="meal in mealStore.meals"
                    :key="meal.idMeal"
                    :to="`/meal/${meal.idMeal}`"
                    class="content"
                >
                    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full rounded-t-lg" />
                    <div class="p-2 text-center font-medium">{{ meal.strMeal }}</div>
                </RouterLink>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 3rem;

    h1 {
        font-size: 2rem;
        font-weight: 800;
        color: var(--black-mute);
        margin-bottom: 1rem;
        text-align: center;
    }
}

.kotak-menu {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 2 auto;
    grid-template-rows: 2;

    content {
        margin: auto;
    }
    
    img {
        border-radius: 10px;
        height: 150px;
        object-fit: cover;
        transition: transform 0.3s ease;
        

        &:hover {
            transform: scale(1.05);
        }
    }
}
</style>