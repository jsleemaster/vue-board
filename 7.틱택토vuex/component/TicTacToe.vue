<template>
    <div>
        <p> {{turn}} 의 턴입니다.</p>
        <table-component/>
        <p v-if="winner">{{ winner}}님의 승리</p>
    </div>

</template>
<script>
    import { mapState} from 'vuex'
    import TableComponent from './TableComponent';
    import store from '../store'
    export default {
        store,
        components: {
            TableComponent,
        },
        computed : {
            ...mapState(['winner', 'turn']),
            // winner (){
            //     return this.$store.state.winner;
            // },
            // turn(){
            //     return this.$store.state.turn;
            // } 
        },
        methods :{
            // onChangeData(){
            //     this.set(this.tableData[1],0 , 'X');
            // },
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
