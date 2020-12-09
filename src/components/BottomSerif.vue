<template>
  <div class="bottomSerifBox" v-html="this.$store.state.bottomSerif"></div>
</template>

<script>
export default {
  name: "BottomSerif",
};
</script>

<style scoped>
.bottomSerifBox {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  height: 100px;
  border: 2px solid #fff;
  border-radius: 8px;
}
</style>
