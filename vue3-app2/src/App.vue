<template>
  <div>
    <h1>App 2 </h1>
      <p>websocket1 randum mesage: {{ receivedMessage }}: </p>
      <br>
      <p><input type="text" v-model="sendHelp"></p>
      <br>
      <p>sendHelp: {{ sendHelp }}</p>
      <p>responseHelp: {{ responseHelp }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';

export default defineComponent({
  props: ['id'],
  setup() {
    // Kreiranje instance WebSocket-a
    const socket1 = new WebSocket('ws://localhost:8085');
    const socket2 = new WebSocket('ws://localhost:8086');


    // Ref objekti za prikaz poruka koje se primaju i šalju preko WebSocket-a
    const receivedMessage = ref('');
    const sentMessage = ref('');
    
    // Funkcija za slanje poruke preko WebSocket-a
    const sendMessage = () => {
      socket1.send(sentMessage.value);
      sentMessage.value = '';
    }

    // Dodavanje listener-a za događaj primanja poruke preko WebSocket-a
    socket1.addEventListener('message', event => {
      receivedMessage.value = event.data;
    });

    // Unutar onMounted() funkcije možete pozvati funkcije koje će se izvršiti
    // kada se komponenta mount-uje na DOM
    onMounted(() => {
      console.log('Povezan sam na WebSocket server!');
    });
    
    // WS2 DRUGI WEBSOCKET
    // Promenljiva koja sadrži odgovor od servera
    const responseHelp = ref('')
    // Promenljiva koja se salje serveru
    const sendHelp = ref('')
    // Slanje poruke ka serveru 
    const sendHelpMessage = () => {
      if (socket2.readyState === WebSocket.OPEN) {
        socket2.send(sendHelp.value as string)
      }
    }
    // Dodavanje listener-a za događaj primanja poruke preko WebSocket-a
    socket2.addEventListener('message', event => {
      responseHelp.value = event.data;
    });

    // DPrimanje poruka posle sto mi poslajemo poruku
    socket2.onmessage = (event) => {
      responseHelp.value = event.data;
    };

    watch(
      sendHelp,
      (newValue) => {
       socket2.send(newValue)
      },
      { immediate: false }
    );

    // Vraćanje podataka koji će biti prikazani u Vue komponenti
    return { receivedMessage, sentMessage, sendMessage, sendHelpMessage, responseHelp, sendHelp };
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
