import { createApp } from 'vue'
import App from './App.vue'
import 'fullpage.js/dist/fullpage.css'
import 'fullpage.js/dist/fullpage.js'
import VueFullPage from 'vue-fullpage.js'
import './index.css'

createApp(App)
  .use(VueFullPage)
  .mount('#app')
