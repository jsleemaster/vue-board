<template>
    <div>
        <h1>{{result}}</h1>
        <!-- <form v-on:submit="onSubmitForm"> -->
        <form @submit.prevent="onSubmitForm">
            <input type="number" ref="answer" maxlength="4" v-model="value" />
            <button>입력</button>
        </form>
        <div>시도 :{{tries.length}}</div>
        <ul>
                <!-- for문 사용시 주의 앞은 for,if,try, 와같은 문은 쓰면 안된다. -->
            <li v-for="t in tries" :key="t.id">
                <div>{{t.try}}</div>
                <div>{{t.result}}</div>
                </li>
        </ul>
    </div>
</template>

<script>
    //무작위 번호 4개 뽑는 함수
    const getNumbers = () =>{
        const candidates = [1,2,3,4,5,6,7,8,9];
        const array = [];
        for (let i =0; i< 4; i++) {
            const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)),1)[0];
            array.push(chosen);
            }
        return array;
    };
    export default {

        data() {
            return {
                tries: [], //시도 수
                value: '', // 
                result: '',
                answer: getNumbers(), //ex ) [1,5,6,3]
            }
        },
        methods: {
            onSubmitForm(e) {
                if ( this.value === this.answer.join('')) {
                    this.tries.push({
                        try: this.value,
                        result: '홈런',
                    });
                    this.result = '홈런';
                    alert('게임을 다시 실행합니다.');
                    this.value = '';
                    this.tries = [];
                    this.answer = getNumbers();

                    this.$ref.answer.focus();
                } else { //틀렸을 때
                    if(this.tries.length >= 9) {
                        this.result = `10번 넘게 틑려서 실패 답은 ${this.answer.join(',')} 이였습니다.`;
                        alert('게임을 다시 시작합니다.');
                        this.value = '';
                        this.answer = getNumbers();
                        this.tries= [];
                        this.$ref.answer.focus();
                    }    
                    let strike = 0;
                    let ball = 0;
                    const answerArray = this.value.split('').map(v => parseInt(v)); // 문자로 입력된 배열들을 숫자로 변경
                    for (let i=0; i<4 ; i++ ){
                        if ( answerArray[i] === this.answer[i] ) { //숫자 자릿수 모두 정답
                            strike ++;
                        } else if (this.answer.includes(answerArray[i])) { //숫자만 정답
                            ball++;
                        }
                    }
                    this.tries.push({
                        try: this.value,
                        result : `${strike} 스트라이크, ${ball} 볼입니다.`,
                        id : new Date().getTime(),
                    })
                }
                this.test + 1,
                this.value = "";
                this.$ref.answer.focus();
            }
        }
    }
</script>
<style scoped>

</style>