<template>
  <img :src="`http://localhost:8081/api/image/${props.cover}`" alt="">
</template>

<script>

export default {
  props: {
    props: { type: Object, default: () => ({}) },
  },
};
</script>

<style lang="scss" type="scss" scoped>
  img {
    width: 150px;
  }
</style>
