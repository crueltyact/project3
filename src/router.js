import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "./components/MainPage.vue"
import MySurveys from "./components/MySurveys.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path:'/', component: MainPage},
        {path:'/surveys', component: MySurveys},
        
    ]
})