<template>
    <div class="min-h-screen bg-yellow">

        <div class="py-10">
            <form class="max-w-sm mx-auto p-10 bg-black rounded-xl max-md:mx-4" @submit.prevent="submitForm">

                <div class="flex justify-center">
                    <img class="w-20 h-20 p-1 rounded-full ring-2 ring-yellow" src="/images/avatar.png"
                        alt="Bordered avatar">
                </div>

                <div>
                    <p class="mb-2 text-base font-semibold text-white font-Oswald">Name</p>
                    <input type="text" id="name"
                        class="w-full p-2 text-black font-Oswald rounded-xl bg-yellow text-sm font-semibold focus:outline-none focus:ring focus:ring-white"
                        autocomplete="off" required v-model="userData.name">
                </div>

                <div class="mt-5">
                    <p class="mb-2 text-base font-semibold text-white font-Oswald">Email</p>
                    <input type="text" id="email"
                        class="w-full p-2 text-black font-Oswald rounded-xl bg-yellow text-sm font-semibold focus:outline-none focus:ring focus:ring-white"
                        autocomplete="off" required v-model="userData.email">
                </div>

                <div class="mt-5">
                    <p for="role" class="mb-2 text-base font-semibold text-white font-Oswald">Purpose of your visit</p>
                    <select id="purpose"
                        class="text-black font-Oswald text-sm font-semibold rounded-xl w-full p-2 bg-yellow focus:outline-none focus:ring focus:ring-white"
                        required v-model="userData.purpose">
                        <option>Self learn</option>
                        <option>Buid a project</option>
                        <option>Explore</option>
                    </select>
                </div>

                <div class="mt-5">
                    <p class="text-base font-semibold text-white font-Oswald">Program/Domain</p>
                    <p class="mb-2 text-sm font-extralight text-white font-Oswald">Framework that you will be learning/
                        working on today</p>
                    <input type="text" id="program"
                        class="w-full p-2 text-black font-Oswald rounded-xl bg-yellow text-sm font-semibold focus:outline-none focus:ring focus:ring-white"
                        autocomplete="off" required v-model="userData.program">
                </div>

                <div class="mt-5">
                    <p for="role" class="mb-2 text-base font-semibold text-white font-Oswald">Role</p>
                    <select id="role"
                        class="text-black font-Oswald text-sm font-semibold rounded-xl w-full p-2 bg-yellow focus:outline-none focus:ring focus:ring-white"
                        required v-model="userData.role">
                        <option>Mentee</option>
                        <option>Mentor</option>
                    </select>
                </div>

                <div class="mt-5 flex justify-evenly max-lg:flex-wrap">
                    <button class="cancel-btn font-Oswald font-semibold text-base max-lg:mb-5">Cancel</button>
                    <button type="submit"
                        class="submit-btn font-Oswald font-semibold text-base max-lg:mb-5">Submit</button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'UserForm',
    data() {
        return {
            userData: {
                name: '',
                email: '',
                purpose: '',
                program: '',
                role: ''

            },

            searchResult: ''
        }
    },
    methods: {

        async submitForm() {
            await axios.post(`http://localhost:3000/api/v1/users`, this.userData).then((response) => {
                this.searchResult = response.data
                console.log('Result', this.searchResult)
            }).catch((err) => {
                console.log(err)
            })
            // console.log('Form values', this.userData)
        }
    }
}
</script>

<style scoped>
.submit-btn {
    padding: 6px 40px;
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

.submit-btn:hover {
    outline: none;
    border: 1px solid #fff253;
    color: black;
    background-color: #fff253;
    cursor: pointer;
}

.cancel-btn {
    padding: 6px 40px;
    outline: none;
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

.cancel-btn:hover {
    outline: none;
    border: 1px solid #fff253;
    color: black;
    background-color: #fff253;
    cursor: pointer;
}
</style>