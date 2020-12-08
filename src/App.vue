<template>
  <div id="app">
    <div class="screen">
      <TopSerif />
      <Map />
      <BottomSerif />
      <button @click="getPortfolios"></button>
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
</style>
