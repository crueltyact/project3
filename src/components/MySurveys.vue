<template>
    <h1 style="margin-top: 10px" class="text">Couple of ready-made templates</h1>
    <v-app>
        <div class="container1"> 
            <v-card class="mx-auto mt-10 align" max-width="400" variant="outlined">
                
                <v-card-item>
                    <div>
                        <p class="text-h6 mb-5  font-weight-bold" style="font-size:35px !important">
                            Burnout
                        </p>
                        <p class="text-caption mb-1" style="font-size:20px !important">
                            How many hours a week you working?
                        </p>
                        <p class="text-caption" style="font-size:15px !important">Do you sure in your mental stability?
                        </p>
                        <p class="text-caption">Can you actually rest?</p>
                    </div>
                </v-card-item>         
                
                <v-card-actions>
                    <v-btn rounded variant="outlined bg-blue">
                        Take template
                    </v-btn>
                </v-card-actions>
                
            </v-card>
        </div>

        <div class="container2">
        <v-card class="mx-auto mt-10" max-width="400" variant="outlined">
            <v-card-item>
                <div>
                    <p class="text-h6 mb-5  font-weight-bold" style="font-size:35px !important">
                        Work relationship issues?
                    </p>
                    <p class="text-caption mb-1" style="font-size:20px !important">
                        How do you feel about colleagues?
                    </p>
                    <p class="text-caption" style="font-size:15px !important">Was there scandal scenarious?</p>
                    <p class="text-caption">Do they value you?</p>
                </div>
            </v-card-item>

            <v-card-actions>
                <v-btn rounded variant="outlined bg-blue">
                    Take template
                </v-btn>
            </v-card-actions>
        </v-card>
        </div>
        <div class="container3">
        <v-card class="mx-auto mt-10 mb-10" max-width="400" variant="outlined">
            <v-card-item>
                <div>
                    <p class="text-h6 mb-5  font-weight-bold" style="font-size:35px !important">
                        Bedtime
                    </p>
                    <p class="text-caption mb-1" style="font-size:20px !important">
                        Is there any distractions to sleep?
                    </p>
                    <p class="text-caption" style="font-size:15px !important">Do you feel headache anytime?</p>
                    <p class="text-caption">How many hours do you sleep?</p>
                </div>
            </v-card-item>

            <v-card-actions>
                <v-btn rounded variant="outlined bg-blue">
                    Take template
                </v-btn>
            </v-card-actions>
        </v-card>
        </div>
    </v-app>
</template>

<script>

</script>

<style scoped>
.container1 {
    /* background-image: url(@/assets/back1.jpg); */
    display: flex;
    align-items: center;
    flex-wrap: wrap;  
    background-image: url(@/assets/back1.jpg);
    justify-content: center;
    background-size: 200px;
    background-position: 5rem;
}

.container2{
    
    background-image: url(@/assets/back2.png);
    background-size: 300px;
    background-position: 70rem;
    
}

.container3{
    background-image: url(@/assets/back3.jpg);
    background-size: 250px;
    background-position: 10rem;
}

.text{
  font-size: 50px;
  color: rgb(255, 255, 255);
  -webkit-text-stroke: 1.5px rgb(56, 163, 244);
}

.align{
    /* align-items: left; */
    align-items: center;
}
</style>