<template>
    <div class="ball" :style="{background}">{{ numbers }}</div>
</template>
<script>
    export default {
        name: 'LottoBall',
        //여기에서 강제로 변경은 불가능 변경을 요청해야함
        props: {
            numbers : Number
        },
        computed: {
            styleObject( ){
                let background;
                if (this.numbers <=10 ){
                    background = 'red';
                } else if ( this.numbers <= 20 ) {
                    background = 'orange';
                } else if ( this.numbers <= 30 ) {
                    background = 'yellow';
                } else if ( this.numbers <= 40 ) {
                    background = 'blue';
                } else {
                    background = 'green';
                }
                return {
                    background
                }
            }
        }
    }
</script>
<style scoped>
    .ball {
        display: inline-block;
        border: 1px solid black;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
    }
</style>
