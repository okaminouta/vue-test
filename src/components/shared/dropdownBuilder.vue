<template>
  <div class="dropdown">
    <div
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      class="dropdown-button"
    ><slot /></div>
    <div
      class="dropdown-menu"
      aria-labelledby="dropdownMenuButton"
    >
      <slot name="dropdown-body">
        <a
          v-for="(item,i) in structure"
          :key="i"
          class="dropdown-item"
          :class="item.class"
          href="#"
          @click="item.action"
        >{{ item.title }}</a>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownBuilder",
  props: {
    structure: { type: Array, default: () => ([]) },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped type="scss" lang="scss">
  .dropdown {
    &-button {
      &:hover{
        transform: scale(1.05);
        -webkit-animation:pulse 5s infinite;
        -o-animation:pulse 5s infinite;
        animation: pulse 5s infinite;
      }
    }
  }

  @keyframes pulse {
    0%, 100% {
      color: #455c70;
    }
    50% {
      color: #69ade6;

    }
  }
</style>
