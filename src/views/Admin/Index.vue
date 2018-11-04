<template>
    <div>
        <div class="d-flex justify-content-center row">
            <!--<router-link class="btn btn-primary m-1" :to="{ name: 'admin.orders' }" >default</router-link>-->
            <!--<router-link class="btn btn-primary m-1" :to="{ name: 'admin.products' }" >products</router-link>-->
            <!--<router-link class="btn btn-primary m-1" :to="{ name: 'admin.createStoreItem' }" >create</router-link>-->


      <ul class="segmented-control">
        <li class="segmented-control__item">
          <input class="segmented-control__input" type="radio" value="1" name="option" id="option-1">
          <router-link :to="{ name: 'admin.orders' }" tag="label" class="segmented-control__label" for="option-1">Orders</router-link>
        </li>
        <li class="segmented-control__item">
          <input class="segmented-control__input" type="radio" value="2" name="option" id="option-2" >
          <router-link :to="{ name: 'admin.products' }" tag="label" class="segmented-control__label" for="option-2">Products</router-link>
        </li>
        <li class="segmented-control__item">
          <input class="segmented-control__input" type="radio" value="3" name="option" id="option-3" >
          <router-link :to="{ name: 'admin.createStoreItem' }" tag="label" class="segmented-control__label" for="option-2">Create</router-link>
        </li>
      </ul>
        </div>
      <router-view/>
    </div>
</template>

<script>

    export default {};
</script>

<style lang="scss" type="scss" scoped>
.segmented-control {
  display: table;
  width: 50%;
  margin-bottom: 1em;
  padding: 0;
}

.segmented-control__item {
  display: table-cell;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.segmented-control__input {
  position: absolute;
  visibility: hidden;
}

.segmented-control__label {
  display: block;
  margin: 0 -1px -1px 0; /* -1px margin removes double-thickness borders between items */
  padding: 1em .25em;

  border: 1px solid #ddd;

  font: 14px/1.5 sans-serif;
  text-align: center;

  cursor: pointer;
}

.segmented-control__label:hover {
  background: #fafafa;
}

.router-link-active {
  background: #eee;
  color: #333;
}
/*.segmented-control__input:checked + .segmented-control__label {*/
  /*background: #eee;*/
  /*color: #333;*/
/*}*/
</style>
