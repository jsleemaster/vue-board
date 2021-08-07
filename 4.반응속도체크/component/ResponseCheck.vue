<template>
    <div>
        <!-- 클래스에 데이터를 넣고 싶으면 바인드를 넣어준다. -->
        <!-- v-bind 의 축약형 => : -->
        <div id='screen' :class="state" >{{meesage}}</div>
        <div>
            <div> 평균시간 : {{}}</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                result:[],
                state:'waiting',
                meesage:'클릭해서 시작하세요.',
            }
        },
        methods: {
            onReset() {

            }
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