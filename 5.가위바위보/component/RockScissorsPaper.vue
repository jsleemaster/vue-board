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
        <div>현재 : {{ score }} 점ㅇㅇ</div>
    </div>
</template>

<script>
    const rspCode = {
        바위 : '0',
        가위 : '-142px',
        보 : '-284px',
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
                onClickButton(choice) {
                    
                },
            },
                
    }
</script>
<style scoped>
</style>