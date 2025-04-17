<script setup>
import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'

const items = [
  {
    name: 'Metric',
    value: 'metric'
  },
  {
    name: 'Imperial',
    value: 'imperial'
  },
  {
    name: 'Standard',
    value: 'Standard'
  },
]

const selected = ref(items[0])
</script>

<template>
  <div class="w-full px-4 py-16">
    <div class="mx-auto w-full max-w-md">
      <RadioGroup v-model="selected">
        <div class="space-y-2">
          <RadioGroupOption
            as="template"
            v-for="item in items"
            :key="item.name"
            :value="item"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                active
                  ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                  : '',
                checked ? 'bg-sky-900/75 text-white ' : 'bg-white ',
              ]"
              class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
            >
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center">
                  <div class="text-sm">
                    <RadioGroupLabel
                      as="p"
                      :class="checked ? 'text-white' : 'text-gray-900'"
                      class="font-medium"
                    >
                      {{ item.name }}
                    </RadioGroupLabel>
                  </div>
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>


