<template>
  <div class="footer">
    <section class="bottom">
      <p class="bottom-text">Copyright © 2020  THE BLOG  OF TREEKE, All Rights Reserved. 蜀ICP备20005890号</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      
    };
  },
  props: {},
  methods: {},
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  z-index: 99;
  width: 100%;
  min-width: 1000px;
  position: relative;
  height: 30px;
  margin-top: 60px;
}
.bottom {
  .bottom-text {
    font-size: 14px;
  }
}
</style>
