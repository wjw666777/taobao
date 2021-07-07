<template>
  <div>
    <search-item @inputValue="inputValue"></search-item>
  </div>
</template>

<script>
import SearchItem from "./SearchItem";
export default {
  components: {
    SearchItem
  },
  methods: {
    inputValue(inpVal) {
      console.log(inpVal);
    }
  }
};
</script>
