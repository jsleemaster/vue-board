<template>
    <div>
        <!-- 클래스에 데이터를 넣고 싶으면 바인드를 넣어준다. -->
        <!-- v-bind 의 축약형 => : -->
        <div id='screen' :class="state" @click="onClickScreen">{{message}}</div>
        <div>
            <!-- 평균구하는 코드-->
            <!-- 배열을 다 더하는 함수 -->
            <div> 평균시간 : {{result.reduce((a,c) => a+c,0)/result.length|| 0}} ms</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
    let startTime = 0;
    let endTime = 0;
    let timeout = null;
    export default {

        data() {
            return {
                //화면에 관련있는애들만 넣는다.
                result:[],
                state:'waiting',
                message:'클릭해서 시작하세요.',
            }
        },
        methods: {
            onReset() {
                this.result=[];
            },
            onClickScreen() {
                if ( this.state === 'waiting') {
                    this.state = 'ready';
                    this.message = '초록색이 되면 클릭하세요';
                    timeout = setTimeout(() => {
                        this.state = 'now'
                        this.message = '지금 클릭!';
                        startTime = new Date();
                    }, Math.floor(Math.random() * 1000)+ 2000); //2~3초
                } else if ( this.state === 'ready') {
                    clearTimeout(timeout);
                    this.state = 'waiting'
                    this.message = '너무 성급하시군요! 초록색이 된후 클릭하세요!';
                } else if ( this.state === 'now') {
                    endTime = new Date();
                    this.state = 'waiting'
                    this.message = '클릭해서 시작하세요.';
                    this.result.push(endTime - startTime);
                    };
                },
        }
    }
</script>
<style scoped>
/* scoped를 사용하는 이유 ? 현재의 컴포넌트에서만 사용하기위해 사용 */
/* 스타일 로더를 사용해야 사용할 수 있음. */
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: red;        
    }
    #screen.ready {
        background-color: blue;
        color:white;
    }
    #screen.now {
        background-color: greenyellow;
    }  
</style>