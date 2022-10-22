<template>
  <button class="px-4 py-2 bg-green-200 text-green-900" @click="onClick">
    Esto es un botón
  </button>
</template>

<script lang="ts" setup>

function onClick (): void {
  window.alert('Holaaa')
}

</script>
