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
            rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
        }
    }
}
</script>
<style scoped>

</style>