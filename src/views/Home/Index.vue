<template>
    <div class="app-container">
        <div>
            <div class="row mb-4">
                <div class="col font-20 p-0" v-if="!loading && tasks.length>0">
                    <span class="text-muted">Showing</span>
                    <span class="font-weight-bold">
            {{tasksTitle}}
          </span>
                    <a href="users/tasks">See all</a>
                </div>
                <div v-if="!loading && tasks.length===0" class="text-muted font-20 p-0 w-100">
                    You have no tasks assigned to you ...
                </div>
                <div class="col font-20 text-muted" v-if="loading">Loading...
                </div>
            </div>
        </div>
        <div class="mb-4">
            <transition-group appear name="list" tag="div" class=" justify-content-center row">
                <!--v-if="index < limit"-->
                <div class="col-xl-3 col-lg-6 mb-3" v-for="(card,index) in  cards" :key="index"
                     @click="showProduct(card.id)">
                    <card
                            :item="card"
                            :action="openModal"
                    ></card>
                </div>

                <!--</div>-->
            </transition-group>
            <span
                    v-if="!loading && tasks.length>4 "
                    class="font-weight-bold text-link cursor-pointer mb-4"
                    @click="limitList">
          Show {{tasks.length > limit ? 'more' : 'less'}} ...
        </span>
        </div>
        <div v-if="loading">
            <spinner :margin="'150'" :size="150"></spinner>
        </div>
        <div class="d-flex justify-content-center row">

        </div>
    </div>
</template>

<script>
  import Card from '@/components/Card';
  import {mapState} from "vuex";
  import Modal from '@/views/Home/Product.vue'

  export default {
    mounted() {
    	this.$store.dispatch('products/loadProducts')
    },
    components: {
      Card,
    },
    data() {
      return {
        limited: true,
        tasks: []
      }
    },
    computed: {
      loading() {
        return false;
      },

      limit() {
        return this.limited ? 4 : this.tasks.length;
      },
      ...mapState({
        cards: state => state.products.goods.items,
      }),
    },
    methods: {
      limitList() {
        this.limited = !this.limited;
      },
      openModal(item) {
        this.$modal.show(Modal, {
          item,
        }, {
          draggable: false,
          width: "70%",
          height: 'auto',
          // adaptive: true,
          // classes: ['overflow']
          classes: []
        })
      },
      showProduct(id) {
        console.log('1')
        // this.$router.push({name: 'home.view', params: {id: 'qwe'}});
      }
    },
  };
</script>

<style lang="scss" type="scss" scoped>
    a {
        font-weight: 600;
        font-size: 18px;
        color: #69ade6;
        margin: 0 20px;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }

    .text-link {
        color: #69ade6;
    }

    /*.card-container {*/
    /*&:nth-child(even) {*/
    /*padding: 0 0 0 15px;*/
    /*}*/
    /*&:nth-child(odd) {*/
    /*padding: 0 15px 0 0;*/
    /*}*/
    /*}*/
    @media (max-width: 1199px) {
        .card-container {
            padding: 0 !important;
        }
    }
  .card-container {
    /*transition: all .5s ease-in;*/
    /*&:last-child {*/
      /*&:hover {*/
        /*!*min-height: 550px;*!*/
      /*}*/
    /*}*/
    /*min-height: 400px;*/
    max-width: 500px;

  }
</style>
