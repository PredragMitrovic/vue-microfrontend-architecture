<template>
  <!-- Beboo ja te volim -->
  <div>
    <main-menu></main-menu>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import mainMenu from "@/components/mainMenu.vue"

export default defineComponent({
  components: {
    mainMenu
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>