<template>
    <h1>List of users with tag: <span></span></h1>
    <ul>
        <li v-for=" user in tagsLangs" :key="user.id">
            {{ user.name }} - {{ user.knownProgramLanguage }}
        </li>
    </ul>

</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import getUsers from '@/composables/getUsers'
import userType from '@/types/typeUser'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
    setup() { 
        const { users, error, load } = getUsers()
        load()

        const tagsLangs = computed(() => { 
            const rout = useRoute()
            console.log(rout)
            return users.value.filter((key: any) => key.knownProgramLanguage.includes(rout.params.lang))
        })
        
        return { users, error, tagsLangs }
    }
})
</script>
