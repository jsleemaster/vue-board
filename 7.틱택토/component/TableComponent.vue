<template>
<table>
    <tr-component v-for="(rowData,index) in tableData" :row-data="rowData" :row-index="index" :key="index"/>
</table>
</template>
<script>
import TrComponent from './TrComponent.vue'
export default {
    components: { TrComponent },
    name : 'TableComponent',
    props: {
        tableData : Array
    }
    
}
</script>

<style scoped>

</style>