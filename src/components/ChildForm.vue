<script>
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'

import {db} from '../assets/db.js'
export default {
  components: {
    'v-select': vSelect
  },
  data() {
    return {
      selected:{"nome":"","formati":[{"tipo":"","dosaggi":[]}]},
      formato:{"tipo":""},
      dosaggi:[],
      farmaci: db.farmaci,
    };
  },
  methods:{
    mostraFormati(value){
      console.log(value.formati)
      this.formati=value.formati

    },
    mostraDosaggi(value){
      console.log(value.dosaggi)
      this.dosaggi=value.dosaggi
    },
  }

};
</script>
<style>
.mb-3 {
  max-width: 100%;
}
</style>
<template>
<div class="container-fluid">
  <div align="center" justify="center" class="mb-3">
    <v-select  v-model="selected" label="nome" v-on:option:selected="mostraFormati" :options="farmaci" ></v-select>   

  </div>
  <div align="center" justify="center" class="mb-3">
    <h2>{{selected.nome}}</h2>
    <v-select  v-model="formato" label="tipo" :options="formati"  v-on:option:selected="mostraDosaggi"></v-select>
  </div> 
  <div align="center"  class="mb-3 ">
     <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">Dosaggi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(dosaggio,i) in dosaggi" :key="i">
                <td>{{dosaggio}}</td>
              </tr>
            </tbody>
          </table>

  </div>
</div>
</template>