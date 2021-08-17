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
            if( this.cellData ) return;
            //중복성 제거
        
        }
    }
}
</script>
<style scoped>

</style>