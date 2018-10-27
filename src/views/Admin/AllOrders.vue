<template>
    <div>
        <div>all orders</div>
        <div class="col-12">
          <Datatable />
        </div>
    </div>
</template>

<script>
  import Datatable from "./IndexTable/Table"
    export default {
      components: {
        Datatable
      },
    };
</script>

<style lang="scss" type="scss" scoped>

</style>
