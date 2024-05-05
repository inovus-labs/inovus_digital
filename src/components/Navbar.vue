<template>
    <!-- Navbar -->
    <nav class="bg-black">
        <div class="px-10 py-4 content-center max-md:flex max-md:flex-col max-md:items-center max-md:px-4">
            <span class="record-icon font-Oswald max-md:text-sm font-semibold">
                LIVE
            </span>
            <span class="text-2xl text-yellow font-Oswald uppercase font-extrabold">&nbsp;INOVUS LABS //
            </span>
            <span class="text-2xl text-yellow font-Orbitron uppercase font-extrabold">{{ time }}
            </span>
            <span class="text-lg max-md:text-sm text-yellow font-Oswald capitalize font-semibold float-right">
                {{ new Date().toLocaleString(
                'en-us', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            ) }}
            </span>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            time: new Date().toLocaleTimeString(),
            currentDate: new Date()
        }
    },
    mounted() {
        setInterval(() => {
            this.time = new Date().toLocaleTimeString(),
                this.currentDate = new Date()
        }, 1000)
    }
}
</script>

<style scoped>
.record-icon {
    color: red;
    animation: blink 1s infinite;
}

/* keyframe for record icon */
@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}

.clock {
    color: black;
    font-size: 26px;
    font-weight: bolder;
    font-family: "Orbitron", sans-serif;
}

.date {
    color: red;
    font-size: 26px;
    font-weight: bolder;
    font-family: "Orbitron", sans-serif;
}
</style>