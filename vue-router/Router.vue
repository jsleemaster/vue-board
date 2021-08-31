<template>
    <div>
        <div>
            <router-link to="/game">게임메쳐</router-link>
            <!-- 주소를 통한 데이터 전달방법 -> 해당 컴포넌트에서 $route 로 보낸데이터 확인가능-->
            <router-link to="/game/number-baseball?pages=3&offset=10&limit=1&sort=createdAt">숫자야구</router-link>
            <router-link to="/game/response-check">반응속도</router-link>
            <router-link to="/game/rock-scissors-paper">가위바위보</router-link>
            <router-link to="/game/lotto-generator">로또생성기</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import router from './routes'
export default {
    router,
}
</script>

<style>

</style>
