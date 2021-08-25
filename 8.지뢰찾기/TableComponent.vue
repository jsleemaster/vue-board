<template>
<table>
    <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td v-for="(cellData, cellIndex) in rowData" :key="cellIndex" :style="cellDataStyle(rowIndex, cellIndex)">{{ cellDataText(rowIndex,cellIndex) }}</td>
    </tr>
</table>
</template>
<script>
    import { mapState } from 'vuex';
    import { CODE } from './store';
    export default {
        computed:{
            ...mapState(['tableData']),
            //고차함수 
            //함수를 확장하는 행위 -> 기능을 추가한거임
            //몇번째 열인지 행인지 확인
            cellDataStyle(state){
                return (row,cell) =>{
                switch(this.$store.state.tableData[row][cell]) {
                    case CODE.NORMAL:
                    case CODE.MINE:
                        return {
                            background: '#444',
                        };
                    case CODE.CLICKED_MINE:
                    case CODE.OPENED:
                        return{
                            background: 'white '
                        }
                    case CODE.FLAG:
                    case CODE.FLAG_MINE:
                        return {
                            background: 'red'
                        };
                    case CODE.QUESTION:
                    case CODE.QUESTION_MINE:
                        return {
                            background:'yellow',
                        };
                    default:
                        return {};
                }
            }
            },
            cellDataText(){
                return (row, cell) => {
                switch(this.$store.state.tableData[row][cell]){
                    case CODE.MINE:
                        return 'X';
                    case CODE.NORMAL:
                        return '';
                    case CODE.FLAG_MINE:
                    case CODE.FLAG:
                        return '!';
                    case CODE.QUESTION_MINE:
                    case CODE.QUESTION:
                        return '?';
                    case CODE.CLICKED_MINE:
                        return '펑';
                    default :
                        return '';
                }
            }
            },
        }
    }
</script>

<style scoped>

</style>