import { createApp } from 'vue'
import App from './App.vue'
//import vSelect from 'vue-select'
//import Multiselect from 'vue-multiselect'
import './registerServiceWorker'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


var app=createApp(App)
//app.component('multiSelect',Multiselect)
app.mount('#app')
