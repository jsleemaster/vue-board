<template>
    <div>
        <table-component :table-data="tableData"/>
        <p> {{turn}} 의 턴입니다.</p>
        <p v-if="winner">{{ winner}}님의 승리</p>
    </div>

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
                    ['','',''],
                    ['','','']
                ],
                turn : 'O',
                winner : '',
            };
        },
        computed : {

        },
        methods :{
            onChangeData(){
                this.set(this.tableData[1],0 , 'X');
            }
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
