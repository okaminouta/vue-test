<!--npm run serve -->
<template>
    <div id="app" :class="[scroll > 90 ? 'fixed-header-app-padding':'']">
        <div class="header" :class="[scroll > 90 ? 'fixed-header':'']">
          <transition
            mode="out-in"
            name="fade"
            appear>
            <div class="header-logo full-logo" key="full" v-if="scroll < 90"><p class="m-0">HotChocolate</p></div>
            <div class="header-logo small-logo" key="small" v-else><p class="m-0">HotChocolate</p></div>
          </transition>
            <div class="nav">
                <div><router-link tag="span" class="cursor-pointer" :to="{ name: 'admin.orders'}">admin</router-link></div>
                <div><router-link tag="span" class="cursor-pointer" :to="{ name: 'home.index'}">home</router-link></div>
                <div><router-link tag="span" class="cursor-pointer" :to="{ name: 'home.cart'}">cart</router-link></div>
                <div @click="login"><span>login</span></div>
                <div @click="register"><span>register</span></div>
            </div>
        </div>
        <div class="w-100 content-overlay ">
            <router-view/>
        </div>
        <footer class="align-items-center footer">
            <div class="row m-0 justify-content-center py-3">
                <img src="./assets/images/vk-brands.svg" alt="vk">
                <img src="./assets/images/facebook-square-brands.svg" alt="fb">
                <img src="./assets/images/instagram-brands.svg" alt="insta">
                <img src="./assets/images/twitter-brands.svg" alt="tw">
                <img src="./assets/images/linkedin-in-brands.svg" alt="">
            </div>
            <div class="row justify-content-center m-0">
                2018
                <img class="copy" src="./assets/images/copyright-regular.svg" alt=""></div>
        </footer>
        <modals-container/>
    </div>
</template>
<script>
  import Login from '@/views/Login/Index.vue';
  import Register from '@/views/Register/Index.vue';

    export default {
        /**
         * The name of the application.
         */
        name: 'VueBoilerplate',

        /**
         * Fires when the app has been mounted.
         */
        // mounted() {
        //   // If the user is authenticated,
        //   // fetch the data from the API
        //   if (this.$store.state.auth.authenticated) {
        //     this.$store.dispatch('account/find');
        //   }
        // },

        data() {
            return {
                scroll: false
            };
        },
        methods: {
            handleScroll() {
                console.log(window.scrollY)
                this.scroll = window.scrollY;
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
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    };
</script>


<style type="scss" lang="scss">
    .app-container {
        width: 70%;
        margin: 0 auto;

    }
    /*.opacity-1{*/
      /*opacity: 1 !important;*/
    /*}*/
    /*.opacity-0{*/
      /*opacity: 0 !important;*/
    /*}*/

    #app {

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.87);
        margin: 0;
        padding-top: 30vh;
        transition: all .2s ease-in;
        font-family: 'GS';
        font-size: 1rem;
    }

    .router-view {
        padding-top: 30vh;
        background: white;
    }

    .content-overlay {
        background: #fff;
        min-height: 90vh;
        padding: 1em;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        z-index: 10;
    }
    /*.content-overlay-fixed {*/
        /*background: #fff;*/
        /*min-height: 70vh;*/
        /*padding: 1em;*/
        /*-webkit-transform: translateZ(0);*/
        /*transform: translateZ(0);*/
        /*z-index: 10;*/
    /*}*/

    .header {
        color: white;
        width: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 30vh;
        /*-webkit-box-pack: center;*/
        /*-ms-flex-pack: center;*/
        /*justify-content: center;*/
        overflow: hidden;
        text-align: center;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-perspective: 100px;
        perspective: 100px;
        font-size: 100px;
        font-family: 'GS';
        font-weight: bold;
        position: fixed;
        right: 0;
        top: 0;
        transition:  all .2s ease-in;
        z-index: 10;
        /*&-logo {*/
            /*!*-webkit-animation: fade-slide-down 2s .5s cubic-bezier(0, 0.5, 0, 1) forwards;*!*/
            /*!*animation: fade-slide-down 2s .5s cubic-bezier(0, 0.5, 0, 1) forwards;*!*/
            /*!*opacity: 0;*!*/
            /*!*transition: all .5s ease-out;*!*/
          /*!*p {*!*/
            /*!*transition: opacity .3s ease-in-out;*!*/
            /*!*&:nth-child(2) {*!*/
              /*!*transition-delay: 2s;*!*/
            /*!*}*!*/
          /*!*}*!*/
        /*}*/
        /*&-logo:before {*/
            /*opacity: 1;*/
        /*}*/
    }

    footer {
        width: 100%;
        height: 10vh;
        background: cornflowerblue;
        color: black;
        img {
            height: 25px;
            padding: 0 10px;
            fill: white;
        }
        .copy {
            height: 12px;
            position: relative;
            top: 7px;
            padding: 0 2px;
        }
    }

    .fixed-header {
        align-items: baseline;
        font-size: 45px;
        padding-left: 20px;
        position: fixed;
        height: 80px;
        /*justify-content: left;*/
    }

    .small-logo {
      font-size: 45px;
      /*position: absolute;*/
      left: 5vw;
      top: 10px;
      position: fixed;
    }
    .full-logo {
      font-size: 100px;
      margin-left: calc(50% - 300px);
      margin-right: auto;
    }

    .header:before {
        -webkit-animation: fade-slide-down 2s .5s cubic-bezier(0, 0.5, 0, 1) forwards;
        animation: fade-slide-down 2s .5s cubic-bezier(0, 0.5, 0, 1) forwards;
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)),
        url(assets/images/logo.jpg) no-repeat center;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)),
        url(assets/images/logo.jpg) no-repeat center;
        background-size: cover;
        bottom: 0;
        content: "";
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
    }
.fixed-header-app-padding {
    padding-top: 18vh !important;
}

.nav {
    font-size: 20px;
    position: absolute;
    top: 30px;
    right: 10px;
    div {
        padding: 0 10px;
        border-left: 1px solid #7cffe1;
    }
}

    .fade-enter {
      opacity: 0;
    }
    .fade-enter-active {
      transition: opacity 0.9s;
    }
    .fade-leave {
      opacity: 1;
    }
    .fade-leave-active {
      transition: opacity .1s;
      transform: translateX(-90rem);
      opacity: 0;
    }

.cursor-pointer {
    cursor: pointer;
}
.font-20{
  font-size: 20px;
}
    /* Animations */

    @-webkit-keyframes fade-slide-down {
        0% {
            opacity: 0;
            -webkit-transform: translateY(-4rem);
            transform: translateY(-4rem);
        }
        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    }

    @font-face {
        font-family: "GS";
        src: url('assets/fonts/Gill_Sans_Nova_Semibold.otf');
        font-weight: bold;
        font-style: normal;
        /*font-size: 100px;*/
    }
    @font-face {
        font-family: "GS";
        src: url('assets/fonts/GillSansNovaLight.otf');
        /*font-weight: 800;*/
        font-style: normal;
        /*font-size: 100px;*/
    }
    @font-face {
        font-family: "GS";
        src: url('assets/fonts/GillSansNovaHeavyItalic.otf');
        font-weight: 900;
        font-style: normal;
        /*font-size: 100px;*/
    }

</style>
