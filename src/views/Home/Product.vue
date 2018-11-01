<template>
  <div class="container-fluid product">
    <div class="row">
      <div class="col-4 col-xl-3 product-image-container py-3 ">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 product-img-container">

            <img class="product-img-top" :src="`http://localhost:8081/api/image/${item.cover}`" alt="Card image cap">
            <!--<img class="product-image" src="http://localhost:8081/api/image/5bb0dd0e195761240c07c799"-->
                 <!--alt="Card image cap">-->
          </div>
        </div>

      </div>
      <div class="col-8 col-xl-9  product-text-pseudo-container">
        <div class="col-12 product-text-container pb-3 h-100" >
        <div class="col-12 p-0" >
          <p class="product-title">{{item.title}}<span class="pull-right product-title-close" @click="$emit('close')">
                    ❌
                </span></p>
        </div>
        <p class="product-description">{{item.description}}</p>
        <!--<div class="col-4 p-0">-->
        <div class="w-100">
          <div class="product-price mb-2">Цена за 100 гр.: <span class=" product-price-value bold-text px-2">{{item.price}} ₴</span>
          </div>
          <div class=" row product-quantity">
            <div class="col-6">
              <div style="vertical-align: sub">Количество:</div>
              <div class="my-2"><span class="btn product-quantity-less cursor-pointer"
                                      @click="changeQuantity(-1)">-</span>
                <input class=" d-inline-flex product-quantity-value" v-model="quantity"/>
                <span class="btn product-quantity-more cursor-pointer" @click="changeQuantity(1)">+</span></div>

            </div>

            <div class="product-total col-6 mt-4 align-items-end">
              <div class="row align-items-end h-100 justify-content-end">
                <div class="d-flex px-4 my-2">
                  <span class="product-total-label mr-3">Сумма: </span><span
                  class="  bold-text p-2 product-total-value"> {{total}}  ₴</span>
                  <button class="btn btn-success mx-3" @click="addToCart" style="width:156px;">
                    <LoadingText :loading="loading" loadingText="Adding">Добавить в корзину</LoadingText> </button>
                </div>

              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from '../../components/Card';
  import LoadingText from '@/components/shared/inlineLoadingText.vue';

  export default {
    props: {
      item: {type: Object}
    },
    components: {
      Card,
      LoadingText
    },
    data() {
      return {
        quantity: 1,
        loading: false
      }
    },
    computed: {
      total() {
        return this.item.price * this.quantity;
      }
    },
    mounted() {
      // v--modal
      // let el = document.getElementsByClassName('v--modal')[0];
      // console.log(el)
      // el.style.overflow='visible';
      // el.classList.add("overflow");
    },
    methods: {
      changeQuantity(val) {
        if (this.quantity > 0 || val > 0) this.quantity += val;
      },
      addToCart() {
        this.loading=true;
        this.$store.commit("products/addToCart", {...this.item, quantity: this.quantity })
        setTimeout( ()=> {this.loading = false }, 3000)
      },
    },
  };
</script>

<style lang="scss" type="scss" scoped>
  .overflow{
    overflow: visible;
  }
  .product {
    color: black;
    /*max-height: 50vh;*/
    /*padding: 10px;*/
    &-title {
      font-size: 40px;
      font-weight: bold;
      &-close {
        font-size: 25px;
        padding: 10px;
        color: #969696;
        cursor: pointer;
        &:hover {
          color: black;
        }
      }
    }

    &-text-pseudo-container{
      background: #bfbfbf;
      padding: 0 0 0 200px;
      border-radius: 20px 0 0 20px;
    }
    &-text-container{
      background: white;
      padding-left: 20px
    }

    &-image-container {
      /*width: inherit;*/
      /*height: inherit;*/
      /*max-height: 40vh;*/
      /*background:  #d4d4d4;*/
      z-index: 99;
    }
    &-img-top{
      height: 16vw;
      width: 24vw;
      min-height: 250px;
      min-width: 375px;
      /*<!--margin-left: -390px;-->*/
      border: 3px solid white;
      -webkit-box-shadow: 25px 16px 55px 9px rgb(134, 129, 129);
      -moz-box-shadow: 25px 16px 55px 9px rgb(134, 129, 129);
      box-shadow: 25px 16px 55px 9px rgb(134, 129, 129);
    }
    &-price {
      &-value {

      }
    }
    &-quantity {
      color: inherit;
      &-less, &-more {
        font-size: 40px;
        font-weight: 700;
        padding: 0 5px;
      }
      &-value {
        vertical-align: bottom;
        border: 1px solid #d2d2d2;
        border-radius: 3px;
        font-size: 40px;
        padding: 1px 4px;
        width: 55px;
        text-align: center;
      }
    }
    &-total {
      &-label {
        position: relative;
        top: 13px
      }
      &-value {
        background: bisque;
        border-radius: 3px;
        padding: 5px 10px;
        white-space: nowrap;
      }

    }
  }

  .bold-text {
    font-size: 20px;
    font-weight: 700;
  }
</style>
