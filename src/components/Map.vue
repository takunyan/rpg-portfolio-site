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
import axios from "axios";
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
    setTimeout(
      function () {
        this.princessPosition.x += 1;
        this.merchantPosition.x += 1;
      }.bind(this),
      5000
    );
  },
  updated: function () {
    this.$refs.yusha[0].focus();
    setTimeout(
      function () {
        const randomNum = Math.floor(Math.random() * 11);
        if (randomNum % 2 === 0) {
          if (
            this.canMoveRandom(
              this.princessPosition.x - 1,
              this.princessPosition.y
            )
          ) {
            this.princessPosition.x -= 1;
          }
          if (
            this.canMoveRandom(
              this.merchantPosition.x + 1,
              this.merchantPosition.y
            )
          ) {
            this.merchantPosition.x += 1;
          }
        } else {
          if (
            this.canMoveRandom(
              this.princessPosition.x + 1,
              this.princessPosition.y
            )
          ) {
            this.princessPosition.x += 1;
          }
          if (
            this.canMoveRandom(
              this.merchantPosition.x - 1,
              this.merchantPosition.y
            )
          ) {
            this.merchantPosition.x -= 1;
          }
        }
      }.bind(this),
      5000
    );
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
    //FIXME
    canMoveRandom(willMovePositionX, willMovePositionY) {
      const willBeHere = { x: willMovePositionX, y: willMovePositionY };
      return (
        !_.isEqual(willBeHere, this.yushaPosition) &&
        willMovePositionX < 9 &&
        willMovePositionX > -1 &&
        willMovePositionY < 9 &&
        willMovePositionY > -1
      );
    },
    async callPrincess() {
      const { data: portfolios } = await axios.get("/api/portfolios");
      let serifHtml = '';
      if (portfolios && portfolios.length > 0) {
        portfolios.forEach((portfolio, index) => {
          serifHtml += `<p>${"I want to intoroduce " + portfolio.name} </p>`;
          serifHtml += `<p><a href='${portfolio.url}' target='_blank'>${"plz click:" + portfolio.url}</a></p>`;
        });
      }
      this.$store.commit("setBottomSerif", serifHtml);
    },
    callMerchant() {this.$store.commit("setBottomSerif", `<p>${"Get out of here!"} </p>`);},
    openTresureBox() {this.$store.commit("setBottomSerif", `<p>${"Thank you!"} </p>`);},
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
