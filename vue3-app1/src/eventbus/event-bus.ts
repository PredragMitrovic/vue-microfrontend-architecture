import { createApp } from 'vue';

const app = createApp({});

export const eventBus = {
  $emit: (event:any, ...args:any) => app.config.globalProperties.$emit(event, ...args),
  $on: (event:any, callback:any) => app.config.globalProperties.$on(event, callback),
  $off: (event:any, callback:any) => app.config.globalProperties.$off(event, callback),
};

app.provide('eventBus', eventBus);