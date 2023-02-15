<template>
    <div>
        <h1>Main Menu</h1>
        <div stay="displey: flex"> 
            <router-link :to="{ name: 'Home' }">Home</router-link>
            <router-link :to="{ name: 'AddUser' }">Add new user</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style scoped> 
a {
    margin: 20px;
    color: red;
    font-weight: bold;
}
</style>