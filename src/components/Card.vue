<template>

    <div class="card w-100">
        <!--<img class="card-img-top" :src="item.image" alt="Card image cap">-->
        <img class="card-img-top" src="http://localhost:8081/api/image/5bb0dd0e195761240c07c799" alt="Card image cap">
        <div class="card-title px-3 py-1 font-weight-bold text-center"> {{item.title}}</div>
        <div class="card-title d-flex justify-content-between px-3 align-items-center xwr">Price: {{item.price}}
            <button class="btn btn-primary" @click="action(item)">Buy</button>
        </div>
        <div class="card-body pt-0">
            <p class="card-text">{{item.description}}</p>
        </div>
    </div>

</template>

<script>


  export default {
    name: 'card',
    props: {
      item: {type: Object},
      action: {type: Function},
    },
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style scoped type="scss" lang="scss">
    .card {
        font-family: 'GS';
        height: auto;
        font-size: 1.88vh;
        color: #181b18;
        opacity: .85;
        transition: all .2s cubic-bezier(.57, .39, .43, .95),
        height .3s cubic-bezier(0, .93, .91, 1),
        opacity .3s cubic-bezier(0, .93, .91, 1);
        z-index: 1;
        overflow: hidden;
        p {
            max-height: 100px;
            overflow: hidden;
            font-size: 1rem;
        }
        img {
            overflow: hidden;
            height: auto;
            min-height: 100px;
            max-width: 500px;
        }
        &:hover {
            transform: scale(1.01);
            /*height: 150%;*/
            opacity: 1;
            /*transition: height 2s ease-in;*/
            position: absolute;
            left: -1px;
            top: -1px;
            z-index: 10;
            overflow: hidden;

            -webkit-box-shadow: 0px 0px 40px 0px rgba(133, 133, 133, 1);
            -moz-box-shadow: 0px 0px 40px 0px rgba(133, 133, 133, 1);
            box-shadow: 0px 0px 40px 0px rgba(133, 133, 133, 1);
            transition: all .4s cubic-bezier(.57, .39, .43, .95),
            height .3s cubic-bezier(0, .93, .91, 1);
            p {
                max-height: 200px;
                transition: all .2s cubic-bezier(.57, .39, .43, .95);
                overflow: hidden;
            }
        }
        /*height: 300px;*/
        /*margin: 16px 0;*/
        /*.card-body {*/
        /*background: white;*/
        /*p {*/
        /*max-height: 110px;*/
        /*overflow: hidden;*/
        /*}*/
        /*}*/
        /*&:hover {*/
        /*box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);*/
        /*}*/
        /*}*/
        /*.card.onboarding {*/
        /*min-height: 0;*/
        /*.card-body {*/
        /*!*background: white url(~images/BlueLogo@3x.png) no-repeat -35px -10px;-->*!*/
        /*}*/
    }

    .loader {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(210, 215, 219, 0.2);
        z-index: 10;
    }
    .xwr {
        font-weight: 600;
    }
</style>