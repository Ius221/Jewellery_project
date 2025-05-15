import { createApp } from 'vue'
import App from './App.vue'
import routing from './routing.js';

const app = createApp(App);

app.use(routing);
app.mount('#app');
