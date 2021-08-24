<template>
<table>
    <!-- <tr-component v-for="(rowData,index) in tableData" :row-index="index" :key="index"/> -->
    <!-- slot을 이용해 컴포넌트는 다른데에 있더라도 사용가능 ==> 관리르 부모가한다. -->
    <slot></slot>
</table>
</template>
<script>
// import TrComponent from './TrComponent.vue'
export default {
    // components: { TrComponent },
    // name : 'TableComponent',
    // computed: {
    //     tableData(){
    //         return this.$store.state.tableData;
    //     },
    // }
}
</script>

<style scoped>

</style>