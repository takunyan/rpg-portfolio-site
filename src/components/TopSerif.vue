<template>
  <div class="topSerifBox">{{ comment.intro }}</div>
</template>

<script>
export default {
  name: "TopSerif",
  data: function () {
    return {
      comment: {
        intro: "Good Morning",
      },
    };
  },
};
</script>

<style scoped>
.topSerifBox {
  margin: 0 auto;
  padding: 10px;
  width: 90%;
  height: 100px;
  border: 2px solid #fff;
  border-radius: 8px;
}
</style>
