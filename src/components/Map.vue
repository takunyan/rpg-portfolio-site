<template>
  <div class="stage">
    <div v-for="i in 8" :key="i" :id="`vertical${i}`">
      <!-- a logic set map pictures. need to fix  -->
      <div
        v-for="j in 8"
        :key="`${i}${j}`"
        :id="`side${i}${j}`"
        v-bind:class="[
          i === 1 || i === 2 || j === 8
            ? j === 7 || j === 8
              ? treeMapClass
              : kusaMapClass
            : j === 1 || j === 2
            ? mountainMapClass
            : sunaMapClass,
        ]"
      >
        <img
          :tabindex="0"
          v-if="i === yushaPosition.x && j === yushaPosition.y"
          src="../assets/likeDQ/dq_yusha32px.png"
          alt="yusha"
          ref="yusha"
          class="yusha"
          @keyup.up="up"
          @keyup.down="down"
          @keyup.left="left"
          @keyup.right="right"
        />
        <img
          v-if="i === princessPosition.x && j === princessPosition.y"
          src="../assets/likeDQ/dq_princess32px.png"
          alt="princess"
          class="princess"
          @click="callPrincess"
        />
        <img
          v-if="i === merchantPosition.x && j === merchantPosition.y"
          src="../assets/likeDQ/dq_merchant32px.png"
          alt="merchant"
          class="merchant"
          @click="callMerchant"
        />
        <img
          v-if="i === tresureboxPosition.x && j === tresureboxPosition.y"
          src="../assets/likeDQ/dq_tresurebox32px.png"
          alt="tresurebox"
          class="tresurebox"
          @click="openTresureBox"
        />
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Map",
  data: function () {
    return {
      yushaPosition: {
        x: 8,
        y: 8,
      },
      princessPosition: {
        x: 4,
        y: 4,
      },
      merchantPosition: {
        x: 1,
        y: 6,
      },
      tresureboxPosition: {
        x: 1,
        y: 1,
      },
      sunaMapClass: "sunaMap",
      kusaMapClass: "kusaMap",
      treeMapClass: "treeMap",
      mountainMapClass: "mountainMap",
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
      const willMovePosition = this.yushaPosition.y - 1;
      if (this.canMove(this.yushaPosition.x, willMovePosition)) {
        this.yushaPosition.y -= 1;
        this.$store.commit("setExperiencePoint", 1);
      }
    },
    down() {
      const willMovePosition = this.yushaPosition.y + 1;
      if (this.canMove(this.yushaPosition.x, willMovePosition)) {
        this.yushaPosition.y += 1;
        this.$store.commit("setExperiencePoint", 1);
      }
    },
    left() {
      const willMovePosition = this.yushaPosition.x - 1;
      if (this.canMove(willMovePosition, this.yushaPosition.y)) {
        this.yushaPosition.x -= 1;
        this.$store.commit("setExperiencePoint", 1);
      }
    },
    right() {
      const willMovePosition = this.yushaPosition.x + 1;
      if (this.canMove(willMovePosition, this.yushaPosition.y)) {
        this.yushaPosition.x += 1;
        this.$store.commit("setExperiencePoint", 1);
      }
    },
    canMove(willMovePositionX, willMovePositionY) {
      console.log(_.isEqual(willBeHere, this.princessPosition));
      const willBeHere = { x: willMovePositionX, y: willMovePositionY };
      if (
        !_.isEqual(willBeHere, this.princessPosition) &&
        !_.isEqual(willBeHere, this.merchantPosition) &&
        !_.isEqual(willBeHere, this.tresureboxPosition) &&
        willMovePositionX < 9 &&
        willMovePositionX > -1 &&
        willMovePositionY < 9 &&
        willMovePositionY > -1
      ) {
        return true;
      }
      return false;
    },
    callPrincess() {},
    callMerchant() {},
    openTresureBox() {},
  },
};
</script>

<style scoped>
.yusha {
  outline: black;
}
.stage {
  display: flex;
  align-items: center;
  justify-content: center;
  /* Map Size */
  height: 300px;
  width: 100%;
}
.sunaMap {
  height: 32px;
  width: 32px;
  background-image: url("../assets/likeDQ/dq_suna32px.png");
}
.kusaMap {
  height: 32px;
  width: 32px;
  background-image: url("../assets/likeDQ/dq_kusa32px.png");
}
.treeMap {
  height: 32px;
  width: 32px;
  background-image: url("../assets/likeDQ/dq_tree32px.png");
}
.mountainMap {
  height: 32px;
  width: 32px;
  background-image: url("../assets/likeDQ/dq_mountain32px.png");
}
</style>
