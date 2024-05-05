<template>
    <div class="min-h-screen bg-yellow">

        <!-- Navbar -->
        <Navbar />
        
        <!-- Cards -->
        <Cards />

    </div>
</template>

<script>
// Components
import Cards from '../components/Cards.vue'
import Navbar from '../components/Navbar.vue'

export default {
    name: 'Live',
    data() {
        return {
        }
    },
    components: {
        Navbar,
        Cards
    },
}
</script>