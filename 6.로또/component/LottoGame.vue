<template>
    <div>
        <div>당첨숫자</div>
        <div id="result">
            <lotto-ball v-for="ball in winBalls" :numbers="winNumbers"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonus"></lotto-ball>
        <button v-if="redo">한번 더</button>
    </div>    
</template>
<script>
    import LottoBall from './LottoBall.vue';

    function getWinNumbers(){
        const candidate = Array(45).fill().map((v,i) => i+1);
        const shuffle = [];
        while (candidate.length > 0 ) {
            shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]);

        }
        const bonusNumber = shuffle[shuffle.length -1];
        const winNumbers = shuffle.splice(0, 6 ).sort((p,c) => p -c );
        return [...winNumbers, bonusNumber];
    }

    export default {
        components: {
            LottoBall,
        },
        data() {
            return {
                winNumbers: getWinNumbers(),
                winBalls:[],
                bonus:null,
                redo: false,
            };
        },
        computed : {

        },
        methods :{

        },
        created(){

        },
        mounted(){

        },
        beforeDestroy(){

        },
        watch: {

        }
    }
</script>
<style scoped>

</style>
