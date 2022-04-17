<script>
export default {
  props: {
    testo: String,
    artista: String,
  },
  methods: {
    readFile(artista,testo) {
      //var filename ='./assets/accordi2/'+ this.artista + "/" + this.testo + ".txt";
      var filename = "/accordi2/" + artista + "/" + testo + ".txt";
      //   var reader = new FileReader();
      //   return reader.readAsText(filename);
      fetch(filename)
        .then((response) => response.text())
        .then((text) => (this.accordi = text));
    },
  },
  data() {
    return {
      accordi: "",
    };
  },
};
</script>
<template>
  <h2>{{ testo }}</h2>
  <p>{{ accordi }}</p>
</template>