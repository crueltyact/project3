<template>
    <li>
        <span>
            <input type="form">
            <strong>{{ question.id }}</strong>
            {{ question.title }}
        </span>
    </li>
</template>

<script>
export default{
    props:{
        question:{
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
    li{
        border: 3px solid rgb(0, 255, 30);
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: .5rem;
        
    }
    input{
        margin-right: 1rem;
    }
</style>