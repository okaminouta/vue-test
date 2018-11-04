<template>
    <div>
        <h1>All orders</h1>
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
