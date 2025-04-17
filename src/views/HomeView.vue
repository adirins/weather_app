<script setup lang="ts">
import { onMounted } from 'vue'
import { useWeatherStore } from '@/stores/weather.ts'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseComboboxAutocomplete from '@/components/Base/BaseComboboxAutocomplete.vue'

const weatherStore = useWeatherStore()

onMounted(()=>{
  weatherStore.getCityList({city: "London"})
  weatherStore.getCurrentWeather({city: "London"})
})
</script>

<template>
  <div class="h-full w-full max-w-[1024px] mx-auto bg-gray-500 shadow-xl p-5 m-5">
    <h1>Weather app</h1>

    <div class="flex gap-10 w-full">
      <div class="w-fit">
        <BaseComboboxAutocomplete/>
      </div>

      <div class="w-fit">
        <BaseRadioGroup/>
      </div>

      <div class="w-fit">
        <BaseButton @click="weatherStore.getCurrentWeather({city: 'London'})"> Check weather </BaseButton>
      </div>
    </div>
  </div>
</template>
