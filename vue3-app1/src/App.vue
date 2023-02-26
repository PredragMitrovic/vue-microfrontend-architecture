<template>
  <div>
    <main-menu></main-menu>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue';
import mainMenu from "@/components/mainMenu.vue";
import { eventBus } from '@/eventbus/event-bus'; 
// Emit event with payload

export default defineComponent({
  components: {
    mainMenu
  },
  setup() {
    const myValue = ref('Hello from app 1');
    provide('eventBus', eventBus);
    const emitMyValue = () => {
      eventBus.$emit('my-event', myValue.value);
    };

    return { emitMyValue }
  }
})
</script>

<style scoped>

</style>