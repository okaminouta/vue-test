<template>
    <div class="app-container">
        <!--@click="$router.go(-1)"-->
        product: id {{id}}
    </div>
</template>

<script>
    import Card from '../../components/Card';

    export default {
        mounted() {
        },
        components: {
            Card,
        },
        data() {
            return {
                id: this.$route.params.id,
            }
        },
        computed: {},
        methods: {},
        watch: {
            $route(to, from) {
                this.id = to.params.id;
            }
        }
        };
</script>

<style lang="scss" type="scss" scoped>

</style>