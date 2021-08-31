<template>
<div>

<div v-if=" cureentGame === 'number-baseball'">
    <number-baseball></number-baseball>
</div>
<div v-if=" cureentGame === 'response-check'">
    <response-check></response-check>
</div>
<div v-if=" cureentGame === 'lotto-game'"></div>
<div v-else>일치하는 게임이 없습니다.</div>
</div>
</template>
<script>
    import NumberBaseball from '../3.숫자야구/component/NumberBaseball'
    import ResponseCheck from '../4.반응속도체크/component/ResponseCheck';
    export default {
        components:{
            NumberBaseball,
            ResponseCheck,
        },
        mounted(){
            console.log(this.$router);
            console.log(this.$route);
        },
        computed: {
            cureentGame(){
                return this.$route.params.name;
            }
        }
    }
</script>
<style>
</style>
