<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>
<script>
export default {
    props: {
        cellData :String,
        rowIndex :Number,
        cellIndex : Number
    },
    methods:{
        onClickTd(){
            //중복성 제거
            const rootData = this.$root.$data;
            //최상위 부모에 데이터에 접근하는방법
            // this.$root.$data
            //부모에 데이터에 접근하는방법
            // this.$parent.$data
            //화면에 반영되지 않는다. 배열에 숫자데이터를 넣어서 값을 강제로 넣을 순 없다.
            // this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
            //Vue set을 이용해야한다. 또는 this.$set()
            this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);
            
            let win = false;
            if (rootData.tableData[this.rowIndex][0] === rootData.turn && rootData.tableData[this.rowIndex][1] === rootData.turn && rootData.tableData[this.rowIndex][2] === rootData.turn ) {
                win = true;
            }
            if (rootData.tableData[0][this.cellIndex] === rootData.turn && rootData.tableData[1][this.cellIndex] === rootData.turn && rootData.tableData[2][this.cellIndex] === rootData.turn ) {
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
                //지거나 무승부
                rootData.turn = rootData.turn === 'O' ? 'O' : 'X';
            }

            rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
        }
    }
}
</script>
<style scoped>

</style>