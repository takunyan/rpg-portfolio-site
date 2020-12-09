<template>
  <div id="app">
    <div class="screen">
      <div v-if="this.$store.state.screenState === 'opening'">
      <img
          src="./assets/likeDQ/dq_logo.png"
          alt="title_logo"
          class="fadedown"
        />
      <p class="fadedown">ポートフォリオを探す旅に出かけますか？</p>
      <p class="fadedown" v-on:click='finishTitle'>はい</p>
      </div>
      <div v-else-if="this.$store.state.screenState === 'playing'">
      <TopSerif />
      <Map v-on:click-princess="getPortfolios"/>
      <BottomSerif />
      <button @click="getPortfolios"></button>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./components/Map.vue";
import TopSerif from "./components/TopSerif.vue";
import BottomSerif from "./components/BottomSerif.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Map,
    TopSerif,
    BottomSerif,
  },
  methods: {
    async getPortfolios() {
      const { data: portfolios } = await axios.get("/api/portfolios");
      console.log(portfolios);
    },
    finishTitle() {
      this.$store.commit("setScreenState","playing");
    },
  },
};
</script>

<style>
@import "./assets/sass/style.scss";
html {
  font-family: "PixelMplus10-Regular";
  color: white;
}
.screen {
  background-color: black;
  height: auto;
  width: 500px;
  margin: 0 auto;
  padding: 10px;
}

.fadedown {
    animation-name: fadedown;
    animation-duration: 5s;
    animation-iteration-count: 1;
}
@keyframes fadedown {
from {
    opacity: 0;
    transform: translateY(0);
}
to {
    opacity: 1;
    transform: translateY(20px);
}
}
</style>
