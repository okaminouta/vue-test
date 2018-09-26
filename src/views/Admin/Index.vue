<template>
    <div>
        <div>
            admin-main
        </div>
        <div class="d-flex justify-content-center row">
            <router-link class="btn btn-primary m-1" :to="{ name: 'admin' }" >default</router-link>
            <router-link class="btn btn-primary m-1" :to="{ name: 'admin.createStoreItem' }" >create</router-link></div>
        <router-view/>
    </div>
</template>

<script>

    export default {};
</script>

<style lang="scss" type="scss" scoped>

</style>