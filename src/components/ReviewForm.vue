<template>  
    <div class="container pt-5 pb-5">
    <v-app>
        <v-container>
        <v-row
            justify="space-between"
        >
            <v-col
                cols="12"
                md="10"
            >
                <p class="pos">Leave your message for us,<br> 
                    if you have some adjustments</p>
            </v-col> 
            <v-col
                cols="12"
                md="4"
            >
                <v-card
                    class="mx-auto mt-10"
                    max-width="344"
                    color="#38a3f4"
                    >
                <v-container>
                    <v-text-field
                    v-model="review.author"
                    color="#ffffff"
                    label="Name"
                    variant="underlined"
                    ></v-text-field>
        
                    <v-text-field
                        v-model="review.text"
                        color="#ffffff"
                        label="Your review"
                        variant="underlined"
                    ></v-text-field>
            
                    <v-checkbox
                        v-model="review.terms"
                        color="#22ff00"
                        label="I agree to site terms and conditions"
                    ></v-checkbox>
                </v-container>
        
                <v-divider></v-divider>
        
                <v-card-actions>
                    <v-spacer></v-spacer>
            
                    <v-btn color="#ffffff">
                        Send Review
            
                    <v-icon icon="mdi-chevron-right" end></v-icon>
                    </v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
             
        </v-row>
        </v-container>
    </v-app>
        <!-- <input 
        type="text"
        v-model="review.author"
        placeholder="Your name"
        >
        <textarea
            v-model="review.text"
            rows="3"
            placeholder="What do you think about PEN_SURVEY?"
        ></textarea> -->
    </div>
</template>

<script setup>
import {reactive} from 'vue'

const review= reactive({
  author: '',
  text: '',
  terms: 'false',
})
</script>

<style>
.pos{
    font-size: 50px;
    color: rgb(255, 255, 255);
    -webkit-text-stroke: 2px rgb(56, 163, 244);
    position: absolute;
    margin-left: 30rem;
    margin-top: 7rem;
}
</style>