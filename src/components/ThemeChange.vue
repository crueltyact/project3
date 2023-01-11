<template>
    <v-app>
        <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="toggleTheme"></v-btn>
    </v-app>
  </template>
  
  <script>
  import { useTheme } from 'vuetify'
  
  export default {
    setup () {
      const theme = useTheme()
  
      return {
        theme,
        toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
      }
    }
  }
  </script>

<!-- <script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick () {
theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script> -->

<style scoped>
    li{
        
        
    }
</style>