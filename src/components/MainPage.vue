<template>
    <div class="container">
        <v-parallax height="700" src="../assets/backimg.jpg">
        <h2 class="start">Welcome!</h2>
        <p class="text" >To create your unique survey right now -<br> push the button.</p>
        <v-btn x-large rounded color="blue" class="butt">Create Survey</v-btn>
        </v-parallax>
    </div>
    <ReviewForm/>
    <ProgressBar/>
    <!-- <h2 class="start">Welcome!</h2>
    <p class="text">To create your unique survey <br> push the button.</p>
    <v-btn x-large rounded color="blue" class="butt">Create Survey</v-btn> -->
    <!-- <tr><a><img src="../assets/survey.png"></a></tr> -->
    <!-- <a class="image"><v-img mt-n20 lazy-src="../assets/survey.png" max-width="35vh" src="../assets/survey.png"></v-img></a> -->
    <MySurveys/>
</template>

<script>
import MySurveys from './MySurveys.vue'
import ProgressBar from './ProgressBar.vue';
import ReviewForm from './ReviewForm.vue'
export default{
    components: {
    MySurveys,
    ProgressBar,
    ReviewForm
},
}
</script>


<style scoped>

.start{
  margin-top: 8rem;
  margin-bottom: 0rem;
  font-size: 80px;
  color: rgb(255, 255, 255);
  -webkit-text-stroke: 2px rgb(56, 163, 244);
}

.text{
  font-size: 50px;
  color: rgb(255, 255, 255);
  -webkit-text-stroke: 2px rgb(56, 163, 244);
}

.butt{
  margin-top: 1rem;
  size: 80;
}

.container{
    padding-top: 0rem;
    
    /* background-image: url(@/assets/backimg.jpg); */
    background-size: cover;
    /* text-shadow: 
        -0 -2px 0 #000000,
        0 -2px 0 #000000,
        -0 2px 0 #000000,
    ; */
    
}

.image{
    background-image: url(@/assets/blu.jpg);
    
}
</style>