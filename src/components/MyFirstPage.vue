<template>
    <div>
        <ul>
            <MySecondPage 
            v-for="question of questions" :key="question"
            v-bind:question="question"
            />
        </ul>
    </div>
</template>

<script>
import MySecondPage from './MySecondPage.vue';
export default {
    props:['questions'],
    components:{
        MySecondPage
    }
}
</script>

<style scoped>
    ul {
        list-style:none;
        margin: 0;
        padding: 0; 
    }
</style>