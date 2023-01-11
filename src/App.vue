<template>
  <v-app>
    <v-main>
    <TheHeaders/>
    <!-- <ThemeChange/> -->
    <RouterView></RouterView>
    <!-- <MainPage/> -->
    <MyFirstPage />
    </v-main>
  </v-app>
</template>

<script>
import MyFirstPage from './components/MyFirstPage.vue'
import TheHeaders from './components/TheHeader.vue'
// import ThemeChange from './components/ThemeChange.vue'
// import MainPage from './components/MainPage.vue'
export default {
  name: 'App',
  // data: () => ({
  //   questions: [
  //       {id:1, title: 'Вы высыпаетесь?', completed:false},
  //       {id:2, title: 'Сколько часов вы спите', completed:false},
  //       {id:3, title: 'Как вы спите', completed:false},
  //     ]
  // }),
  data(){
    return{
      questions: [
        {id:1, title: 'Вы высыпаетесь?', completed:false},
        {id:2, title: 'Сколько часов вы спите', completed:false},
        {id:3, title: 'Как вы спите', completed:false},
      ]
    }
  },
  components: {
    MyFirstPage,
    TheHeaders,
    // ThemeChange,
},
}
</script>

<style>
#app {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>


