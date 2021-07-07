<template>
  <div>
    <div>777777</div>
    <rater-item :score="score2" @choice="choice"></rater-item>
  </div>
</template>

<script>
import RaterItem from "./RaterItem";
export default {
  name: "Rater",
  data() {
    return {
      score2: 2
    }
  },
  components: {
    RaterItem
  },
  methods: {
      choice (index) {
      this.score2 = index
      window.console.log('当前分数为:', this.score2)
    }
  },
};
</script>

<style scoped></style>
