<template>
  <dr-dropdown
    class="w-25 pull-right"
    :structure="structure"
  >
    <div class="nc-icon icon-md nc-ellipsis-v cursor-pointer" />
  </dr-dropdown>
</template>

<script>
import DrDropdown from "@/components/shared/dropdownBuilder";
// import CampaignEditModal from "pages/SmsCampaigns/CampaignEditModal";
// import CampaignDeleteModal from "pages/SmsCampaigns/CampaignDeleteModal";

export default {
  name: "RowAction",
  components: {
    DrDropdown,
  },
  props: {
    props: { type: Object, default: null },
  },
  // data() {
  //   return {
  //     structure: [
  //       { title: "Edit", action: this.edit },
  //       { title: "Delete", action: this.deletion },
  //     ],
  //   };
  // },
  // methods: {
  //   deletion() {
  //     this.$modal.show(
  //       CampaignDeleteModal,
  //       { id: this.props.id },
  //       { name: "CampaignDeleteModal" },
  //     );
  //   },
  //   edit() {
  //     this.$modal.show(
  //       CampaignEditModal,
  //       {
  //         resp: this.props.response,
  //         name: this.props.name,
  //         code: this.props.code,
  //         id: this.props.id,
  //       },
  //       { name: "CampaignEditModal" },
  //     );
  //   },
  // },
};
</script>

<style scoped type="scss" lang="scss">
  /deep/.dropdown {
    .dropdown-item {
      border-bottom: 1px solid #ecedf0;
      &:last-child{
        border: none;
        color: red;
      }
    }
  }
</style>
