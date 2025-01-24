import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueYtframe from "vue3-ytframe"

createApp(App)
  .use(vuetify)
  .use(router)
  .use(VueYtframe)
  .mount('#app')
