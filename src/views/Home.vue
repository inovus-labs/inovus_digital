<template>
    <div class="h-screen bg-black flex items-center justify-center max-md:text-center">
        <div class="">
            <h1 class="text-yellow text-8xl font-extrabold font-Oswald">Inovus Digital</h1>
            <h3 class="text-lg font-normal text-gray-300 font-Roboto pt-5">Just showcase what you're currently doing at <b>INOVUS LABS IEDC</b>
            </h3>
            <!-- <a href="/users" class="text-yellow">Get Started</a> -->
            <RouterLink :to="{ name: 'users' }">
                <button class="redirect-btn mt-4 font-bold text-base font-Orbitron">Get Started</button>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'Home',
}
</script>

<style scoped>

.redirect-btn {
    padding: 10px 20px;
    outline: none;
    border: none;
    border: 1px solid #fff253;
    border-radius: 12px;
    color: #fff253;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 2px;
    transition-duration: 0.4s ease;
    background: none;
    text-decoration: none;
    list-style-type: none;
}

.redirect-btn:hover {
    border: none;
    border: 1px solid #fff253;
    color: black;
    background-color: #fff253;
    cursor: pointer;
}

</style>