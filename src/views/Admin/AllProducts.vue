<template>
    <div>
      <h1>All products</h1>
        <div class="col-12">
          <datatable
            url="http://localhost:8081/api/admin/products"
            :fields="fields"
            :sort-order="sortOrder"
            module-name="SMS Campaign"
          >
            <!--<template-->
              <!--slot="action"-->
              <!--slot-scope="{ data }"-->
              <!--class="text-right"-->
            <!--&gt;-->
              <!--<t-row-action :props="data.rowData" />-->
            <!--</template>-->

            <template
              slot="firstCol"
              slot-scope="{ data }"
              class="text-right"
            >
              <t-product-image :props="data.rowData" />
            </template>
          </datatable>
        </div>
    </div>
</template>

<script>
  import Datatable from "@/components/Datatable/Index";
  import TProductImage from "./IndexTable/SlotImage";
    export default {
      components: {
        Datatable,
        TProductImage
      },
      data() {
        return {
          fields: [
            {
              name: "__slot:firstCol",
              title: "Image"
            },
            {
              name: "title",
            },
            {
              name: "description",
              dataClass: "description",
              callback: 'desc'
            },
            {
              name: "price",
              sortField: "price",
            },
            // {
            //   name: "response",
            //   title: "Response",
            //   sortField: "response",
            //   dataClass: "response text-overflow-elipsis",
            //   titleClass: "response",
            // },
            // {
            //   name: "subscribers_count",
            //   title: "Subscribers",
            //   sortField: "subscribers_count",
            // },
            // {
            //   name: "__slot:action",
            //   title: "",
            //   dataClass: "tableAction",
            //   titleClass: "tableAction",
            // },
          ],
          sortOrder: {
            field: "name",
            direction: "asc",
          },
        };
      },
      methods: {
      }
    };
</script>

<style lang="scss" type="scss" scoped>
  /deep/ .vuetable {
    td, th {
      border: none ;
      border-bottom: 1px solid #edeef1 ;
      max-width: 200px;
    }
    th {
      min-width: 200px;
    }
    .description{
      width: 40%;
      overflow: hidden;
      white-space: normal;
      p {
        max-height: 95px;
        width: 100%;
      }
    }
  }
</style>
