<template>
  <div class="bottomSerifBox">{{ comment.intro }}</div>
</template>

<script>
export default {
  name: "BottomSerif",
  data: function () {
    return {
      comment: {
        intro: "You can walk around, talk people and search treasure boxes",
      },
    };
  },
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
