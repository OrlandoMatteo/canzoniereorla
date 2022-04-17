<template>
  <img id="logo" alt="Vue logo" src="./assets/guitar.png">
  <div class=" d-grid gap-3 m-3">
  <v-select label="id" v-on:option:selected="mostraArtisti" :options="canzonieri" placeholder="Seleziona Canzoniere" ></v-select> 
  <SitoAccordi :iniziali="iniziali" testo="" artista=""  />
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'
import SitoAccordi from './components/SitoAccordi.vue'
import {aetdb} from './assets/accordietesto.js'
import {aesdb} from './assets/accordiespartiti.js'
// import AccordieTesto from './components/AccordieTesto.vue'

export default {
  name: 'App',
  components: {
    SitoAccordi,
    vSelect,
    // AccordieTesto
  },
   data() {
    return {
      testo:"Test",
      iniziali:{},
      canzonieri:[{'id':1,'value':aetdb.canzoniere},{'id':2,'value':aesdb.canzoniere}]
    };

},
  methods: {
    mostraArtisti(option) {
      console.log(option.value)
      this.iniziali=option.value
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  width: 20vw;

}

</style>
