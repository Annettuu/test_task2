import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store/index.js';

createApp(App)
    .use(store)
    .use(vuetify)
    .mount('#app')

