<!--npm run serve -->
<template>
  <div id="app">
    <div class="header" :class='{"fixed-header": fixedHeader}'>
      HotChocolate
    </div>
    <div class="w-100 content-overlay"><router-view/></div>

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

  data () {
      return {
          fixedHeader: false
      };
  },
    methods: {
        handleScroll () {
            console.log(window.scrollY)
            this.fixedHeader = window.scrollY > 100;
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>


<style  type="scss" lang="scss">
  .app-container {
    width: 70%;
    margin: 0 auto;

  }

  #app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
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
    /*position: relative;*/
    text-align: center;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 100px;
    perspective: 100px;
    font-size: 100px;
    font-family: 'test';

    overflow: hidden;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    z-index: 0;

    -webkit-perspective: 100px;

    perspective: 100px;
    /*transition: all 500ms cubic-bezier(0.55, 0, 0.1, 1);*/
    transition:
                z-index .8s ease-in,
                all 500ms ease-in;
  }
  .fixed-header {
    align-items: baseline ;
    /*text-align: left ;*/
    /*justify-content: left ;*/
    font-size: 45px;
    padding-left: 20px;
    position: fixed;
    height: 100px;
    z-index: 10;
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

  /*<!--.header:after {-->*/
    /*<!-- -webkit-animation: rotate-up .5s .5s cubic-bezier(0, 0.5, 0, 1) forwards;-->*/
    /*<!--animation: rotate-up .5s .5s cubic-bezier(0, 0.5, 0, 1) forwards;-->*/
    /*<!--background: #F9FCFF;-->*/
    /*<!--content: "";-->*/
    /*<!--height: 40rem;-->*/
    /*<!--left: -5%;-->*/
    /*<!--position: absolute;-->*/
    /*<!--right: -5%;-->*/
    /*<!--top: 90%;-->*/
    /*<!-- -webkit-transform-origin: 0 0;-->*/
    /*<!--transform-origin: 0 0;-->*/
    /*<!--z-index: 0;-->*/
  /*<!--}-->*/

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