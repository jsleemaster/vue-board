<template>
    <div>
        <!-- 클래스와 스타일은 객체형식으로 가능하다. -->
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <!-- 인자로 보내고 받기도 가능하다. -->
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 : {{ score }} 점</div>
    </div>
</template>

<script>
    const rspCode = {
        바위 : '0',
        가위 : '-142px',
        보 : '-284px',
        }
    let interval;
    const scores = {
        가위 : 1,
        바위 : 0,
        보 : -1
    }
    const computerChoice = (imgCode) => {
        return Object.entries(rspCode).find(function(v) {
            return v[1] === imgCode;
        })[0];
    }
    export default {
        data() {
            return {
                imgCode: rspCode.바위,
                result:'',
                score:0,
                }
            },
            computed: {
                computedStyleObject() {
                    return {
                        background : `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCode} 0`,
                    };
                }
            },
            methods: {
                changeHand() {
                    interval = setInterval(() => {
                    if (this.imgCode === rspCode.바위 ) {
                        this.imgCode = rspCode.가위;
                    } else if ( this.imgCode === rspCode.가위){
                        this.imgCode = rspCode.보;
                    } else if ( this.imgCode === rspCode.보) {
                        this.imgCode = rspCode.바위;
                    }
                }, 100);
                },
                onClickButton(choice) {
                    clearInterval(interval);  
                    const myScore = scores[choice];
                    const cpuScore = scores[computerChoice(this.imgCode)];
                    const diff = myScore - cpuScore;
                    if (diff === 0 ) {
                        this.result = '비겼습니다.';
                    } else if ([-1,2].includes(diff) ) {
                        this.result = "이겼습니다";
                        this.score +=1;
                    } else {
                        this.result = '졌습니다';
                        this.score -= 1;
                    }
                    setTimeout(()=>{
                        this.changeHand();
                    },1000)
                },
            },
            //화면에 나타나기전 실행됨
            created() {
                
            },
            //화면에 나타난 후 실행됨
            mounted() {
                this.changeHand();
            },
            //화면이 변경될 때 실행됨
            updated() {

            },
            beforeDestroy() {
                clearInterval(interval);
            },
            //화면에 있다가 없어질때 실행됨
            destroyed(){

            },
            
                
    }
</script>
<style scoped>
    #computer {
        width: 140px;
        height: 200px;
    }
</style>