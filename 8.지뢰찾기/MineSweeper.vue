<template>
    <div>
        <mine-form/>
        <div>{{timer}}</div>
        <table-component></table-component>
        <div>{{result}}</div>
    </div>
</template>
<script>
    import { mapState} from 'vuex'
    // import store from '../store'
    import store, {} from '../store.js';
// import TableComponent from '../../7.틱택토/component/TableComponent.vue';

    export default {
        store,
        components: {
        },
        computed:{ 
            ...mapState(['timer','result'])
        },
        methods :{
        },
    }
</script>
<style>
</style>
