<template>
  <button class="p-4 bg-green-200" @click="onClick">
    Esto es un botón
  </button>
</template>

<script lang="ts" setup>

function onClick (): void {
  window.alert(this.message)
}

</script>
