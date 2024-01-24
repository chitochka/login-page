import { createApp } from 'vue'
// import './style.css'hu
import App from './App.vue'

//  Vuetify 
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Vuelidate from 'vuelidate'

console.log('VuelidateVuelidateVuelidateVuelidateVuelidateVuelidateVuelidate')
console.log(Vuelidate);



const vuetify = createVuetify({
    components,
    directives,
  })


 
const app = createApp(App)



app.use(Vuelidate)
app.use(vuetify)
app.mount('#app')  

// createApp(App).mount('#app')
