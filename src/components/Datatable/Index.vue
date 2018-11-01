<template>
    <div
      class="row table-header align-items-center py-4"
    >
    <div
      class="position-relative table-pagination-box"
    >
      <div
        v-if="tableLoading"
        class="loader d-flex justify-content-center align-items-center"
      >
        <!--<spinner-->
          <!--:size="150"-->
          <!--margin="0"-->
          <!--:speed="1.2"-->
          <!--line-fg-color="#69ade6"-->
        <!--/>-->
      </div>
      <div class="table-container">
        <vuetable
          ref="vuetable"
          :api-url="url"
          pagination-path=""
          :fields="fields"
          :sort-order="[sortOrder]"
          :per-page="perPage"
          :css="tableCss"
          :append-params="tableFilters"
          @vuetable:loading="onLoading"
          @vuetable:load-success="onLoadSuccess"
          @vuetable:row-clicked="$emit('row-clicked')"
          @vuetable:pagination-data="onPaginationData"
        >
          <template
            slot="firstCol"
            slot-scope="props"
          >
            <slot
              name="firstCol"
              :data="props"
            />
          </template>

          <template
            slot="action"
            slot-scope="props"
            class="text-right"
          >
            <slot
              name="action"
              :data="props"
            />
          </template>
        </vuetable>
      </div>
      <vuetable-pagination
        ref="pagination"
        class="mt-4 mr-4 pull-right"
        @vuetable-pagination:change-page="onChangePage"
      />
    </div>
  </div>
</template>

<script>
import _debounce from "lodash/debounce";
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePagination from "./Pagination";
import CallbacksMixin from "./CallbacksMixin.vue";

export default {
  name: "Datatable",
  components: {
    Vuetable,
    VuetablePagination,
  },
  mixins: [CallbacksMixin],
  props: {
    fields: { type: Array, required: true },
    sortOrder: { type: Object, required: true },
    url: { type: String, required: true },
    moduleName: { type: String, required: true },
    perPage: { type: Number, required: false, default: 10 },
  },
  data() {
    return {
      tableFilters: {},
      searchString: "",
      totalCount: null,
      tableReqParams: {},
      tableLoading: false,
      tableCss: {
        tableClass: "selectable table",
        loadingClass: "loading",
        detailRowClass: "vuetable-detail-row",
        ascendingIcon:  'blue chevron up icon',
        descendingIcon: 'blue chevron down icon',
        handleIcon: "grey sidebar icon",
        ascendingClass: "sorted-asc",
        descendingClass: "sorted-desc",
      },
    };
  },
  computed: {
  },
  watch: {
    tableFilters() {
      if (!this.tableLoading) this.$nextTick(() => this.$refs.vuetable.refresh());
    },
  },
  mounted() {
    // EventBus.$on("refreshTable", () => {
    //   this.$nextTick(() => this.$refs.vuetable.refresh());
    // });
  },
  methods: {
    onLoading() {
      this.tableLoading = true;
    },
    onLoadSuccess(responce) {
      this.tableLoading = false;
      this.$emit("data-loaded", responce);
      if (responce.data) this.totalCount = responce.data.total;
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },

    search: _debounce(function () {
      this.tableFilters.fullTextSearch = this.searchString.trim();
      this.$nextTick(() => this.$refs.vuetable.refresh());
    }, 500),
  },
};
</script>

<style scoped type="scss" lang="scss">

  .table-header {
    font-size: 20px;
  }
  .filter-icon{
    position: relative;
    top: 2px;
    font-size: 17px;
  }

  .color-grey {
    color: #9E9696;
  }

  .loader {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(210, 215, 219, 0.2);
    z-index: 10;
    left: 0px;
    top: 0px;
  }
  .table-container{
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      width: 5px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #c1c1c1 !important;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 100px;
      background-color: #969696;
    }
  }

  /deep/ .vuetable {
    margin: 0;
    background: white;

    th.headcol {
      padding: 20px;
    }

    td, th {
      padding: 15px 25px;
      /*border: 1px solid #e9ecee;*/
      white-space: nowrap;
      position: relative;
    }
    th {
      background: #fafafb;
      /*min-width: 200px;*/
    }
    th.tableAction{
      min-width: 50px;
    }

    .active-field {
      background: #eff1ff;
    }
    .sorted-asc, .sorted-desc {
      color: #2185d0;
    }
    .tableAction{
      overflow: visible;
    }
  }

  .table-pagination-box {
    overflow: hidden;
    background: inherit;
    width: 100%;
  }
</style>
