<template>
    <div>
        <p> {{turn}} 의 턴입니다.</p>
        <!-- <table-component/> -->
        <table-component>
            <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
                <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{cellData}}</td>
            </tr>
        </table-component>
        <p v-if="winner">{{ winner}}님의 승리</p>
    </div>

</template>
<script>
    import { mapState} from 'vuex'
    import TableComponent from './TableComponent';
    // import store from '../store'
    import store, {CLICK_CELL,SET_WINNER , RESET_GAME, CHANGE_TURN, NO_WINNER} from '../store.js';
// import TableComponent from '../../7.틱택토/component/TableComponent.vue';

    export default {
        store,
        components: {
            TableComponent,
        },
        computed:{ 
            ...mapState(['winner', 'turn', 'tableData']),
            // winner (){
            //     return this.$store.state.winner;
            // },
            // turn(){
            //     return this.$store.state.turn;
            // } 
        },
        methods :{
            onClickTd(rowIndex, cellIndex){
            if (this.cellData) return ;

            this.$store.commit(CLICK_CELL, {row: rowIndex, cell: cellIndex});

            let win = false;
            if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn ) {
                win = true;
            }
            if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn ) {
                win = true;
            }
            if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn ) {
                win = true;
            }
            if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn ) {
                win = true;
            }
            if (win) {
                //이긴경우 3줄달성
                this.$store.commit(SET_WINNER, this.turn)
                this.$store.commit(RESET_GAME)
            } else {
                //무승부
                let all = true; // all이 true면 무승부라는 뜻
                this.tableData.forEach((row)=> {
                    row.forEach((cell)=> {
                        if(!cell) {
                            all = false;
                        }
                    })
                })
                if(all) {
                    //무승부
                    this.$store.commit(NO_WINNER)
                    this.$store.commit(RESET_GAME)
                } else {
                    this.$store.commit(CHANGE_TURN)
                }
                
            }
            }
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
