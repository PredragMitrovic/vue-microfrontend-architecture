<template>
    <div>
        <h1>Podaci od usera</h1>            
        <!-- The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or
        function called is undefined or null, it returns undefined instead of throwing an error. -->
        {{user?.id}} <br>
        {{user?.email}} <br>
        <ul>
            <li v-for="lang in user?.knownProgramLanguage" :key="lang">
                {{ lang }}
            </li>
        </ul>
        <router-link :to="{name: 'Home'}">Back</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import getUser from '../composables/getUser';
import { useRoute } from 'vue-router' // ovde importujemo funkciju iz routera koja nam vraca objekat sa detaljnim informacijama o trenutnoj url ruti na kojoj smo
export default defineComponent({
    props: ['id'], // ovaj ID je ustvari od rutera parametar koji smo poslali
    setup(props) {
        const route = useRoute()
        const { user, error, load } = getUser(props.id) //ovde prosledjujemo parametar od routera kroz props ali moze i kroz useRoute:
       // const { user, error, load } = getUser(route.params.id as string)

        load()

        return {user, error}
    }
})
</script>
