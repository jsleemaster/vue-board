<template>
    <td @click="onClickId">{{cellData}}</td>
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
            //최상위 부모에 접근하는방법
            this.$route.$data
        }
    }
}
</script>
<style scoped>

</style>