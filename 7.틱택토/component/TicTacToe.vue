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
            },
            onClickTd(rowIndex, cellIndex){
            //eventBust로 변경
            const rootData = this.tableData;
            //최상위 부모에 데이터에 접근하는방법
            // this.$root.$data
            //부모에 데이터에 접근하는방법
            // this.$parent.$data
            //화면에 반영되지 않는다. 배열에 숫자데이터를 넣어서 값을 강제로 넣을 순 없다.
            // this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
            //Vue set을 이용해야한다. 또는 this.$set() =>화면에 반영하기 위한 방법.
            this.$set(rootData.tableData[rowIndex], cellIndex, rootData.turn);
            
            let win = false;
            if (rootData.tableData[rowIndex][0] === rootData.turn && rootData.tableData[rowIndex][1] === rootData.turn && rootData.tableData[rowIndex][2] === rootData.turn ) {
                win = true;
            }
            if (rootData.tableData[0][cellIndex] === rootData.turn && rootData.tableData[1][cellIndex] === rootData.turn && rootData.tableData[2][cellIndex] === rootData.turn ) {
                win = true;
            }
            if (rootData.tableData[0][0] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][2] === rootData.turn ) {
                win = true;
            }
            if (rootData.tableData[0][2] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][0] === rootData.turn ) {
                win = true;
            }
            if (win) {
                //이긴경우 3줄달성
                rootData.winner = rootData.turn;
                rootData.turn = 'O'
                rootData.tableData = [['','',''],['','',''],['','','']];
            } else {
                //무승부
                let all = true; // all이 true면 무승부라는 뜻
                rootData.tableData.forEach((row)=> {
                    row.forEach((cell)=> {
                        if(!cell) {
                            all = false;
                        }
                    })
                })
                if(all) {
                    //무승부
                    rootData.winner = '';
                    rootData.turn = 'O';
                    rootData.tableData = [['','',''], ['','',''], ['','','']];
                } else {
                    rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
                }
                
            }
            }
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
