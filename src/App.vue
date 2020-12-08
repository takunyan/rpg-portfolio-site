<template>
  <div id="app">
    <div class="screen">
      <TopSerif />
      <Map />
      <BottomSerif />
    </div>
  </div>
</template>

<script>
import Map from "./components/Map.vue";
import TopSerif from "./components/TopSerif.vue";
import BottomSerif from "./components/BottomSerif.vue";

export default {
  name: "App",
  components: {
    Map,
    TopSerif,
    BottomSerif,
  },
};
</script>

<style>
@import "./assets/sass/style.scss";
html {
  font-family: "PixelMplus10-Regular";
  color: white;
}
#app {
  margin: 60px;
}
.screen {
  background-color: black;
  height: 600px;
  width: 500px;
  margin: 0 auto;
}
</style>
