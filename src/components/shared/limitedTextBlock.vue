<template>
  <div>
    <div
      class="text mb-4"
      :style="{'max-height': textHeight}"
    >
      <p
        ref="textBlock"
        class="m-0"
      >{{ text }}</p>
    </div>
    <a
      v-if="textOverflows"
      href="#"
      @click.prevent="fullShow=!fullShow"
    >Show {{ fullShow ? 'less' : 'more' }}  ...</a>
  </div>
</template>

<script>
export default {
  name: "TextBlock",
  props: {
    text: { type: String, default: "" },
    size: { type: Number, default: 100 },
  },
  data() {
    return {
      fullShow: false,
      textBlockHeight: null,
    };
  },
  computed: {
    textHeight() {
      return this.fullShow ? "unset" : `${this.size}px`;
    },
    textOverflows() {
      return this.fullShow ? true : this.textBlockHeight > this.size;
    },
  },
  watch: {
    text() {
      this.matchHeight();
    },
  },
  mounted() {
    this.matchHeight();
  },
  methods: {
    matchHeight() {
      this.textBlockHeight = this.$refs.textBlock.clientHeight;
    },
  },
};
</script>

<style scoped type="scss" lang="scss">
  .text{
    overflow: hidden;
  }
</style>
