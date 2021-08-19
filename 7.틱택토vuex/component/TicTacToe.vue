<template>
    <div>
        <table-component :table-data="tableData"/>
        <p> {{turn}} 의 턴입니다.</p>
        <p v-if="winner">{{ winner}}님의 승리</p>
    </div>

</template>
<script>
    import TableComponent from './TableComponent';
    import EventBus from '../EventBus';
    export default {
        components: {
            TableComponent
        },
        data() {
            return {
            };
        },
        computed : {

        },
        methods :{
            onChangeData(){
                this.set(this.tableData[1],0 , 'X');
            },
        },
        created(){
            EventBus.$on('clickTd', this.onClickTd)
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
