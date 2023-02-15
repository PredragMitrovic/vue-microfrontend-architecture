<template>
    <div>
        <h1> Add new User</h1>
        <!-- ovde se sabmituje forma okidanjem funkcije -->
        <form @submit.prevent="addNewUser">  
            <ul>
                <li>
                    <label for="name">name</label>
                    <!-- v-modalom vezujemo input polja i datu -->
                    <input type="text" id="name" v-model="name"> 
                    <p>{{ name }}</p>
                </li>
                <li>
                    <label for="username">username</label>
                    <input type="text" id="username" v-model="username">
                    <p>{{ username }}</p>
                </li>
                <li>
                    <label for="email">email</label>
                    <input type="text" id="email" v-model="email">
                    <p>{{ email }}</p>
                </li>
                <li>
                    <label for="tag">tags</label>
                    <!-- hendleKeydown funkcija se okida na eventhendler od tastature i to na enter dugme -->
                    <input type="text" id="tag" v-model="tag" @keydown.enter.prevent="hendleKeydown">
                    <p>{{ tag }}</p>
                    <p>{{ tags }}</p>
                </li>
            </ul>
            <button type="submit" @submit.prevent> add user</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router' // ---> pozivaom router objekat da mozemo da radimo sa njim
import { db } from '@/firebase/config'
import { setDoc, doc, addDoc, collection } from "firebase/firestore"

export default defineComponent({
    setup () {
        const name = ref('')
        const username = ref('')
        const email = ref('')
        const tags = ref<string[]>([])
        const tag = ref('')
        const router = useRouter() // ---> ovde definisemo objekat da mozemo ga koristimo (router.go(1) ide na stranicu napred router.go(-1) ide na stranicu nazad)
        const hendleKeydown = () => { 
            if (!tags.value.includes(tag.value)) {  // ovde proveravamo da li tags vec sadrzi odredjen tag
                tag.value = tag.value.replace(/\s/g,'') // ovde replacujemo prazne spejsove
                tags.value.push(tag.value) // ovde punimo tags array
            }
             tag.value = '' // i onad opet praznimo input poje da se moze dalje kucati
        } 
        const addNewUser = async () => { // cim je async funkcija moze da se koristi await 
            tag.value = tag.value.replace(/\s/g, '') // ovde replacujemo prazne spejsove
            tags.value.push(tag.value) // ovde punimo tags array
            const user = {
                name: name.value,
                username: username.value,
                email: email.value,
                knownProgramLanguage: tags.value
            }
            console.log(JSON.stringify(user))

            // await fetch('http://localhost:3000/users', { //kako se koristi post metod
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(user)
            // })
            const colRef = collection(db, 'users')
            const addUser = await addDoc(colRef, user)

            router.push({ name: 'Home' })
        }


        return { name, username, email, tag, tags, hendleKeydown, addNewUser }
    }
})
</script>

<style scoped>

</style>