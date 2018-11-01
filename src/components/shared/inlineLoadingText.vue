<template>
  <div>
    <transition
      mode="out-in"
      name="fade"
      appear
    >
      <span
        v-if="loading"
        key="loading"
      >{{ loadingText }}
        <div class="wave-animation">
          <span class="dot" />
          <span class="dot" />
          <span class="dot" />
        </div>
      </span>
      <span
        v-if="!loading "
        key="title"
      >
        <slot />
      </span>
      <span
        v-if="false"
        key="empty"
      >Nothing here ...</span>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    loading: { type: Boolean, default: true },
    loadingText: { type: String, default: "Loading" },
  },
};
</script>

<style scoped type="scss" lang="scss">
  .wave-animation {
    text-align:center;
    display: inline-block;
    padding: 0 3px;
    .dot {
      display:inline-block;
      width:4px;
      height:4px;
      border-radius:50%;
      margin-right:1px;
      background: white;
      animation: wave 1.3s linear infinite;

      &:nth-child(2) {
        animation-delay: -1.1s;
      }

      &:nth-child(3) {
        animation-delay: -0.9s;
      }
    }
  }

  @keyframes wave {
    0%, 60%, 100% {
      transform: initial;
    }

    30% {
      transform: translateY(-4px);
    }
  }
</style>
