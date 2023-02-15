<template>
  <p v-if="error">{{error}} - greska</p> 
  <ul v-if="users">
      <short-user-data v-for="user in users" :key="user.id" :user="user" />
  </ul>
  
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import getUsers from '@/composables/getUsers';
import shortUserData from '@/components/shortInfoOfuser.vue'

export default defineComponent({
  name: 'App',
  components: {
    shortUserData,
  },
  setup() {
    const {users, error, load} = getUsers()
    load()
    return {error, users}

  }
});
</script>

<style scoped>
li {
  margin: 20px;
  padding: 20px;
  background-color: lightgrey;
  color: blue;
  list-style-type: none;
}
</style>
