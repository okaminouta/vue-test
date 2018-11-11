<template>
  <div class=" pb-3 app-container">
    <div class="row cart">
      <div class="col-12 font-weight-bold">
        <h2 v-if="stage === 1">Корзина</h2>
        <h2 v-if="stage === 2">Oформление заказа</h2>
        <p class="text-right" v-if="stage === 1">Cумма</p>
      </div>
    </div>
    <div v-if="stage === 1">
      <div class="row cart-item justify-content-end my-3" v-for="(product,i) in products">
        <div class="col-3 p-0">
          <img v-if="product.cover" class="card-img-top" :src="`http://localhost:8081/api/image/${product.cover}`"
               alt="Card image cap">

          <!--<img src="@/assets/images/logo.jpg" alt="" class="cart-item-image">-->

        </div>
        <div class="col ">
          <p class="cart-item-title">{{product.title}}</p>
          <p class="cart-item-price text-muted">Price: {{product.price}} Грн</p>
        </div>
        <div class="col-2 col-xl-2 text-right  align-items-center d-inline-flex">
        <span class="btn cart-item-quantity-less cursor-pointer"
              @click="changeQuantity(-1, product.quantity, i)">-</span>
          <input class=" d-inline-flex cart-item-quantity-value" v-model="product.quantity"
                 @keydown="validateInput($event)"/>
          <span class="btn cart-item-quantity-more cursor-pointer"
                @click="changeQuantity(1, product.quantity, i)">+</span>
        </div>

        <div class="col-2 col-xl-1 align-items-center  d-inline-flex text-right"><p
          class="text-right w-100 m-0 font-weight-bold font-20">{{ summ(product.price, product.quantity) }} <span
          class="text-muted">grn </span></p>
        </div>
      </div>
      <div class="row justify-content-end my-4">

        <div class="product-total-label mr-2 d-inline-flex cart-actions font-weight-bold">
          <span class="cart-action-summ text-muted mr-3">Итоговая цена: </span>
          <span class="  bold-text p-2 cart-action-total-value font-20"> {{ total }}  ₴</span>
        </div>
      </div>
      <div class="row justify-content-end">
        <button class="btn  btn-success font-weight-bold" @click="createOrder">Оформить заказ</button>
      </div>
    </div>

    <div class="row justify-content-center" v-if="stage === 2">
      <div class="col-6">
        <div class="form-group">
          <label for="inlineFormInputGroup">Номер телефона</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">+380</div>
            </div>
            <input type="text" class="form-control" id="inlineFormInputGroup"
                   @keydown="validateInput($event)">
          </div>
        </div>
        <div class="row justify-content-center">
          <div slot="footer" class="text-center pt-2">
            Already got an account?
            <a href="#" @click.prevent="login">Login</a><br>
            <a href="#" @click.prevent="register">Register</a>
          </div>
        </div>
        <div class="row justify-content-center mb-2">
          <small id="accCreation" class="form-text text-muted" v-if="withAccount">Акаунт будет создан при подтверждении
            заказа
          </small>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Коментарий к заказу*</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="commentary"></textarea>
        </div>

        <!--<div class="form-check">-->
        <!--<input type="checkbox" class="form-check-input" id="exampleCheck1">-->
        <!--<label class="form-check-label" for="exampleCheck1">Check me out</label>-->
        <!--</div>-->
        <button class="btn btn-success" @click="createOrder">Оформить заказ</button>
      </div>

    </div>

  </div>

</template>

<script>
  import {mapState} from "vuex";
  import Login from '@/views/Login/Index.vue';
  import Register from '@/views/Register/Index.vue';

  export default {
    mounted() {
    },
    props: {},
    components: {},
    data() {
      return {
        // products: [
        //   {
        //     title: 'Lorem ipsum dolor sit amet',
        //     price: 10,
        //     quantity: 5,
        //   }
        // ]
        stage: 1,
        commentary: '',
        phone: '',
        withAccount: false,
      }
    },
    computed: {
      ...mapState({
        products: state => state.products.cart,
        logged: state => state.auth.authenticated
      }),
      total() {
        let total = 0;
        this.products.forEach(el => {
          let summ = el.price * el.quantity;
          total += summ;
        });
        return total;
      }
    },
    methods: {
      summ(price, quantity) {
        return price * quantity;
      },
      changeQuantity(val, quantity, i) {
        if (quantity > 0 || val > 0) quantity += val;
        this.products[i].quantity = quantity;
      },
      validateInput(e) {
        let key = e.keyCode ? e.keyCode : e.which;

        if (!([8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
          (key === 65 && (e.ctrlKey || e.metaKey)) ||
          (key >= 35 && key <= 40) ||
          (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
          (key >= 96 && key <= 105)
        )) e.preventDefault();
      },
      createOrder() {
        console.log(this.products)
        //
        if (this.stage>1){
          let products = this.products.map((el) => {
            return {
              id: el._id,
              quantity: el.quantity
            }
          })
          console.log(products)
          this.$store.dispatch("products/createOrder", {
            commentary: this.commentary,
            phone: this.phone,
          products
          }).then(() => {
            console.log('finished')
          })
        } else this.stage++;

      },

      login() {
        this.$modal.show(Login, {}, {
          draggable: false,
          height: 'auto',
          name: 'login'
        })
      },
      register() {
        this.$modal.show(Register, {}, {
          draggable: false,
          height: 'auto',
          name: 'register'
        })
      }


    },
  };
</script>

<style lang="scss" type="scss" scoped>
  .cart-item {
    background: #f3f3f3;
    border-radius: 20px;
    &-image {
      height: 10vw;
    }
    &-title {
      font-size: 25px;
      font-weight: 600;
    }
    &-price {
      font-size: 20px;
    }
    &-quantity {
      color: inherit;
      &-less, &-more {
        font-size: 25px;
        font-weight: 700;
        padding: 0 5px;
      }
      &-less {
        margin-top: -6px;
      }
      &-value {
        vertical-align: bottom;
        border: 1px solid #d2d2d2;
        border-radius: 3px;
        font-size: 20px;
        padding: 1px 4px;
        width: 50px;
        text-align: center;
      }
    }
  }

  .btn-w-icon {
    padding: 0 7px;
  }

  .md-icon {
    font-size: 23px;
  }

  .cart-action {
    &-summ {
      line-height: 45px;
    }
    &-total-value {
      background-color: antiquewhite;
      border-radius: 5px;;
    }
  }
</style>
