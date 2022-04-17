<script>
export default {
  props: {
    iniziali: {
      type: Object,
    },
    testo: {
      type: String,
    },
  },
  data() {
    return {
      accordi: "",
      artista: "",
      canzoni: [],
    };
  },
  methods: {
    readFile(artista, testo) {
      //var filename ='./assets/accordi2/'+ this.artista + "/" + this.testo + ".txt";
      var filename = "/accordi2/" + artista + "/" + testo + ".txt";
      //   var reader = new FileReader();
      //   return reader.readAsText(filename);
      fetch(filename)
        .then((response) => response.text())
        .then((text) => (this.accordi = text.slice(6, -7)));
    },
    showArtist(artista) {
      this.artista = artista.nome;
      this.canzoni = artista.canzoni;
    },
  },
};
</script>
<template>
  <div class="d-grid gap-3">
    <div class="p-4 bg-light border">
      <div div class="accordion" id="artisti">
        <div class="accordion-item">
          <div class="accordion-item-header" id="artistiItem">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#artistiCollapse"
              aria-expanded="true"
              aria-controls="artisticollapse'"
            >
              Artisti
            </button>
          </div>
          <div
            id="artistiCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="artistiItem"
            data-bs-parent="#artisti"
          >
            <div class="accordion-item-body">
              <div class="accordion" id="ordineAlfabetico">
                <div
                  class="accordion-item"
                  v-for="(artisti, lettera) in iniziali"
                  :key="lettera"
                >
                  <div class="accordion-item-header" :id="lettera">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#' + lettera + 'collapse'"
                      aria-expanded="true"
                      :aria-controls="lettera + 'collapse'"
                    >
                      {{ lettera.toUpperCase() }}
                    </button>
                  </div>
                  <div
                    :id="lettera + 'collapse'"
                    class="accordion-collapse collapse"
                    :aria-labelledby="lettera"
                    data-bs-parent="#ordineAlfabetico"
                  >
                    <div class="accordion-item-body">
                      <li v-for="artista in artisti" :key="artista.nome">
                        <a v-on:click="showArtist(artista)">
                          {{ artista.nome }}</a
                        >
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 bg-light border">
      <h2>{{ artista }}</h2>
    </div>
  </div>

  <div class="p-4 bg-light border">
    <h3> Canzoni</h3>
    <ul>
      <li v-for="(canzone, i) in canzoni" :key="i">
        <a v-on:click="readFile(artista, canzone)">{{ canzone }}</a>
      </li>
    </ul>
  </div>
  <div class="p-4 bg-light border">
    <h4>Accordi</h4>
    <pre>{{ accordi }}</pre>
  </div>
</template>