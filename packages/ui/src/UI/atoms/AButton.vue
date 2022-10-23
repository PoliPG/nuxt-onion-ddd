<template>
  <button class="px-4 py-2 bg-green-500 rounded-md" @click="onClick">
    {{ message }}
  </button>
</template>

<script lang="ts" setup>
defineProps({
  message: String
})

function onClick(): void {
  window.alert('Holaaa')
}
</script>
