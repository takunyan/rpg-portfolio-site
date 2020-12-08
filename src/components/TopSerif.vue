<template>
  <div class="topSerifBox">
    {{
      `Name: Takuro 
      Job: Engineer 
      Level: ${this.$store.state.level} 
      Experience Point: ${this.$store.state.experiencePoint}`
    }}
  </div>
</template>

<script>
export default {
  name: "TopSerif",
  data: function () {
    return {
      comment: {
        intro: `Name: Takuro
        Job: ENgineer
        Level: ${this.$store.state.level}
        Experience point: ${this.$store.state.experiencePoint}`,
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
