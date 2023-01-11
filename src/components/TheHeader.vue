<template>   
    <header class="clr">
    <nav class="navig">
        <a href="/" class="nav-logo"><v-img lazy-src="../assets/anketa.png" min-height="60" min-width="60" src="../assets/anketa.png"></v-img>PEN_SURVEY</a>
        
        <ul>
            <li class="nav-item"><a href="/#/surveys" class="nav-link">SURVEYS</a></li>
            <li class="nav-item" ><a href="#" class="nav-link">ABOUT</a></li>
            <li class="nav-item" ><a href="#" class="nav-link">LOGIN</a></li>
        </ul>
    </nav>
    </header>
</template>

<style scoped>
    ul{
        display: flex;
        justify-content: center;
        padding-bottom: 3px;
        padding-top: 3px;
        list-style:none;
    }
    .nav-item:not(:first-of-type) {
        margin-left: 3rem    
    }

    .nav-item{
        margin-top: 8px;   
        
    }

    .nav-link{
        text-decoration: none;
        font-size: 25px;
        color: rgb(255, 255, 255);
    }

    .clr{
        background-color: rgb(56, 163, 244);
        padding: 1rem;
        /* box-shadow: 0px -2px 30px black; */
    }

    .nav-logo{
        margin-left: 1rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        text-decoration: none;
        font-size: 25px;
        color: rgb(255, 255, 255);
    }
    .navig{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
    }
</style>