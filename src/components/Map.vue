<template>
  <div class="stage">
    <div v-for="i in 4" :key="i" :id="`vertical${i}`">
      <div
        v-for="j in 4"
        :key="`${i}${j}`"
        :id="`side${i}${j}`"
        class="mapElement"
      >
        <img
          :tabindex="0"
          v-if="i === yushaPosition.x && j === yushaPosition.y"
          src="../assets/yusha32px.png"
          alt="yusha"
          ref="yusha"
          class="yusha"
          @keyup.up="up"
          @keyup.down="down"
          @keyup.left="left"
          @keyup.right="right"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  data: function () {
    return {
      yushaPosition: {
        x: 4,
        y: 4,
      },
      config: {
        //CELL_SIZE: 32,
      },
    };
  },
  mounted: function () {
    this.$refs.yusha[0].focus();
  },
  updated: function () {
    this.$refs.yusha[0].focus();
  },
  methods: {
    up() {
      this.yushaPosition.y -= 1;
    },
    down() {
      this.yushaPosition.y += 1;
    },
    left() {
      this.yushaPosition.x -= 1;
    },
    right() {
      this.yushaPosition.x += 1;
    },
  },
};
</script>

<style scoped>
.yusha {
  outline: none;
}
.stage {
  display: flex;
  align-items: center;
  justify-content: center;
  /* Map Size */
  height: 300px;
  width: 100%;
}
.mapElement {
  height: 32px;
  width: 32px;
  background-image: url("../assets/suna32px.png");
}
</style>
