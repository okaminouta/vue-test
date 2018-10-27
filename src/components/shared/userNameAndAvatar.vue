<template>
  <div
    class="d-inline-block"
    :class="size"
  >
    <img
      v-if="photo"
      class="image"
      :src="photo"
      alt="..."
    >
    <div
      v-else
      class="d-inline-block default-img"
    >
      <div class="nc-icon icon-vm icon-sm nc-user" />
    </div>
    <br v-if="lines === 2">
    <span class="pl-1 image-text"> {{ fName }} {{ lName }}</span>
  </div>
</template>

<script>
export default {
  name: "UserCreds",
  props: {
    photo: { type: String, required: false, default: null },
    fName: { type: String, required: false, default: "" },
    lName: { type: String, required: false, default: "" },
    size: { type: String, required: false, default: "normal" },
    lines: { type: Number, required: false, default: 1 },
  },
};
</script>

<style scoped type="scss" lang="scss">
  .image {
    border-radius: 50%;
    height: 35px;
    width: 35px;
  }

  .default-img {
    width: 35px;
    background: #f5f6f7;
    border-radius: 50%;
    height: 35px;
    text-align: center;
    vertical-align: middle;
    padding-top: 5px;
    .nc-icon {
      color: #d2d7db;
    }
  }

  .image-text {
    display: inline;
  }

  .small {
    .default-img, .image {
      width: 25px;
      height: 25px;
      padding-top: 0;
      .nc-icon {
        font-size: 12px;
      }
    }
  }

  .report {
    .default-img, .image {
      width: 24px;
      height: 24px;
      padding-top: 0;
      margin: 3px 0;
      .nc-icon {
        font-size: 15px;
      }
    }
    .image-text {
      font-size: 16px;
      color: black;
    }
  }
</style>
