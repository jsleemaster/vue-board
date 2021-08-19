<template>
<table>
    <tr-component v-for="(rowData,index) in tableData" :row-index="index" :key="index"/>
</table>
</template>
<script>
import TrComponent from './TrComponent.vue'
export default {
    components: { TrComponent },
    name : 'TableComponent',
    computed: {
        tableData(){
            return this.$store.state.tableData;
        }
    }
}
</script>

<style scoped>

</style>