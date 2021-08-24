<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData"
                        :key="index"
                        :cell-index="index"
                        :row-index="rowIndex"/>
    </tr>
</template>
<script>
import TdComponent from './TdComponent';
export default {
    components: { TdComponent },
    data(){
        return {
        }
    },
    props: {
        rowIndex: Number,
    },
    computed: {
        rowData(){
            return this.$store.state.tableData[this.rowIndex]
        }
    },

}
</script>
<style scoped>

</style>