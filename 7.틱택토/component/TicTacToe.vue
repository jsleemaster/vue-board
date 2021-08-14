<template>
        <table-component :table-data="tableData" :turn="turn"/>
</template>
<script>
    import TableComponent from './TableComponent';

    export default {
        components: {
            TableComponent
        },
        data() {
            return {
                tableData: [
                    ['','',''],
                    ['','','']
                    ['','','']
                ],
                turn : 'O',
            };
        },
        computed : {

        },
        methods :{
        },
        created(){

        },
        mounted(){
        },
        beforeDestroy(){
        },
        
    }
</script>
<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>
