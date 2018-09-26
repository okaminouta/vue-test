<!--npm run serve -->
<template>
    <div id="app">
        <div class="header" :class="[scroll > 100 ? 'fixed-header':'']">
            <div class="header-logo">HotChocolate</div>
        </div>
        <div class="w-100 content-overlay">
            <router-view/>
        </div>
        <footer class="align-items-center">
            <div class="row m-0 justify-content-center py-3">
                <img src="./assets/images/vk-brands.svg" alt="vk">
                <img src="./assets/images/facebook-square-brands.svg" alt="fb">
                <img src="./assets/images/instagram-brands.svg" alt="insta">
                <img src="./assets/images/twitter-brands.svg" alt="tw">
                <img src="./assets/images/linkedin-in-brands.svg" alt="">
            </div>
            <div class="row justify-content-center">
                2018
                <img class="copy" src="./assets/images/copyright-regular.svg" alt=""></div>
        </footer>
    </div>
</template>
<script>
    /* ============
     * Entry Point
     * ============
     *
     * The entry point of the application.
     */

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

    #app {

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
        color: #d3d3d3;
        margin: 0;
        padding-top: 30vh;
    }

    .router-view {
        padding-top: 30vh;
        background: white;
    }

    .content-overlay {
        background: #fff;
        min-height: 100vh;
        padding: 1em;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        z-index: 10;
    }

    .header {
        width: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 30vh;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        overflow: hidden;
        text-align: center;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-perspective: 100px;
        perspective: 100px;
        font-size: 100px;
        font-family: 'test';
        position: fixed;
        right: 0;
        top: 0;
        transition: z-index .8s ease-in,
        all .2s ease-in;
        z-index: 10;
        &-logo {
            -webkit-animation: fade-slide-down 2s .5s cubic-bezier(0, 0.5, 0, 1) forwards;
            animation: fade-slide-down 2s .5s cubic-bezier(0, 0.5, 0, 1) forwards;
            opacity: 0;
            transition: opacity .5s;
        }
        &-logo:before {
            opacity: 1;
        }
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
        font-family: "test";
        src: url('assets/fonts/Gill_Sans_Nova_Semibold.otf');
        font-weight: 400;
        font-style: normal;
        font-size: 100px;
    }
</style>