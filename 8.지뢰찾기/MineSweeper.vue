<template>
    <div>
        <mine-form/>
        <div>{{timer}}</div>
        <table-component/>
        <div>{{result}}</div>
    </div>
</template>
<script>
    import { mapState} from 'vuex'

    import MineForm from './MineForm'
    import store, {} from './store';
    import tableComponent from './TableComponent'

    export default {
        store,
        components: {
            tableComponent,
            MineForm
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
