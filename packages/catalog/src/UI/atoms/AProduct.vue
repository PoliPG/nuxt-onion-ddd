<template>
  <div>
    <h3 class="text-green-200 text-xl">
      {{ name }}
    </h3>
    <span>{{ price }}</span>
  </div>
</template>

<script setup>
// Props
defineProps({
  name: String,
  price: Number
})
</script>
