<template>
  <datatable
    url="/frontend/sms_campaigns"
    :fields="fields"
    :sort-order="sortOrder"
    module-name="SMS Campaign"
  >
    <template
      slot="action"
      slot-scope="{ data }"
      class="text-right"
    >
      <t-row-action :props="data.rowData" />
    </template>

    <template
      slot="firstCol"
      slot-scope="{ data }"
      class="text-right"
    >
      <t-router-link :props="data" />
    </template>
  </datatable>
</template>

<script>
import Datatable from "@/components/Datatable/Index";
import TRowAction from "./RowOptions";
import TRouterLink from "./RouterLink";

export default {
  name: "SmsCampaignsTable",
  components: {
    Datatable,
    TRowAction,
    TRouterLink,
  },
  data() {
    return {
      fields: [
        {
          name: "__slot:firstCol",
          title: "Name",
          sortField: "name",
        },
        {
          name: "code",
          title: "Code",
          sortField: "code",
        },
        {
          name: "response",
          title: "Response",
          sortField: "response",
          dataClass: "response text-overflow-elipsis",
          titleClass: "response",
        },
        {
          name: "subscribers_count",
          title: "Subscribers",
          sortField: "subscribers_count",
        },
        {
          name: "__slot:action",
          title: "",
          dataClass: "tableAction",
          titleClass: "tableAction",
        },
      ],
      sortOrder: {
        field: "name",
        direction: "asc",
      },
    };
  },
};
</script>

<style scoped type="scss" lang="scss">
  /deep/ .vuetable {
    td, th {
      border: none ;
      border-bottom: 1px solid #edeef1 ;
      max-width: 200px;
    }
    th {
      min-width: 200px;
    }
    .response{
      width: 40%;
    }
  }
</style>
