<template>
  <ul class="pagination">
    <li
      :class="{'disabled': isOnFirstPage || totalPage <= 1}"
      class="page-item"
    >
      <a
        class="page-link"
        href="#"
        aria-label="Previous"
        @click.prevent="loadPage('prev')"
      >
        <span>&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>

    <template v-if="notEnoughPages">
      <li
        v-for="n in totalPage"
        :key="n"
        :class="{'active': isCurrentPage(n)}"
        class="page-item"
      >
        <a
          class="page-link font-weight-normal"
          @click.prevent="loadPage(n)"
        >{{ n }}</a>
      </li>
    </template>
    <template v-else>
      <li
        v-for="n in windowSize"
        :key="n"
        :class="{'active': isCurrentPage(windowStart+n-1)}"
        class="page-item"
      >
        <a
          class="page-link font-weight-normal"
          @click.prevent="loadPage(windowStart+n-1)"
        >{{ windowStart+n-1 }}</a>
      </li>
    </template>

    <li
      class="page-item"
      :class="{'disabled': isOnLastPage || totalPage <= 1}"
    >
      <a
        class="page-link"
        href=""
        @click.prevent="loadPage('next')"
      >
        <span>&raquo;</span>
      </a>
    </li>
  </ul>
</template>

<script>
import VuetablePaginationMixin from "vuetable-2/src/components/VuetablePaginationMixin";

export default {
  mixins: [VuetablePaginationMixin],
};
</script>
