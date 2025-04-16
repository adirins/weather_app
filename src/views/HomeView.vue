<script setup lang="ts">
import { onMounted } from 'vue'
import { useWeatherStore } from '@/stores/weather.ts'

const weatherStore = useWeatherStore()

onMounted(()=>{
  weatherStore.getCityList({city: "London"})
  weatherStore.getCurrentWeather({city: "London"})
})
</script>

<template>
  <main class="h-full mx-auto">
    <h1>Weather app</h1>

    <div class="flex gap-5 w-full">
      <div class="w-fit">
        Select location
      </div>

      <div class="w-fit">
        Select unit
      </div>

      <div class="w-fit">
        Submit selection
      </div>
    </div>
  </main>
</template>
