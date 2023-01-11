<template>
    <v-app class="ul">
        <v-footer class="d-flex flex-column min-height-0vh footer">
        <div class="bg-blue d-flex w-100 align-center px-4">
        <strong>Get connected with us on social networks!</strong>
        
  
        <v-spacer></v-spacer>
  
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="plain"
          size="small"
        ></v-btn>
      </div>
  
      <div class="px-4 py-2 bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>https://github.com/crueltyact/project3</strong>
      </div>
    </v-footer>
  </v-app>
</template>


<script>
    export default {
  name: 'App',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>

<style>
    .v-application__wrap{
        min-height: 0vh;
    }
    .ul{
        position: fixed;
        margin: -1rem;
        height: auto;
    }

</style>
