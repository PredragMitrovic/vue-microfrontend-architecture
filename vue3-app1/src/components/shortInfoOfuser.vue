<!-- Komponenta koja rendera sve Usere na home stranici -->
<template>
    <li>
        <!-- ovde prosledjujemo ruter id propsu kako bi mogao da definise single user ID -->
        <router-link :to="{ name: 'Detail', params: { id: user.id } }">
            {{ user.name }} <br>
        </router-link>
        {{ user.id }} <br>
        {{ user.email }} <br>
        <ul v-if="user.knownProgramLanguage">
            <li v-for=" tag in user.knownProgramLanguage" :key="tag">
                <router-link :to="{ name: 'Tags', params: { lang: tag } }"> #{{ tag }} </router-link>
            </li>
        </ul>
        <button @click="delateUser(user.id)">Delate user</button>
    </li>

</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import userType from '@/types/typeUser'
import { useRouter } from 'vue-router'
import { db } from '@/firebase/config'
import getUsers from '@/composables/getUsers';
import { setDoc, doc, addDoc, collection, deleteDoc } from "firebase/firestore"
export default defineComponent({
    props: {
        user: {
            required: true,
            type: Object as PropType<userType>
        }
    },
    setup() {
        const router = useRouter()
        const { users, error, load } = getUsers()

        const delateUser = async (id: any) => {
            await deleteDoc(doc(db, 'users', id))
            router.push({name: 'Home'})
        }
        return { delateUser }
    }
})
</script>
<style scoped>

</style>