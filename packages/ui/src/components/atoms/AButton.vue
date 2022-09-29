<template>
  <button @click="onClick">Click!</button>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// El decorador @Component indica que la clase es un componente Vue
@Component
export default class AButton extends Vue {
  message: string = 'Hola!'

  onClick(): void {
    window.alert(this.message)
  }
}
</script>
