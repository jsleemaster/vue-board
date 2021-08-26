<template>
    <div>
        <mine-form/>
        <div>{{timer}}</div>
        <table-component/>
        <div>{{result}}</div>
    </div>
</template>
<script>
    import { mapState} from 'vuex'

    import MineForm from './MineForm'
    import store, { INCREMENT_TIMER } from './store';
    import tableComponent from './TableComponent'
    let interval
    export default {
        store,
        components: {
            tableComponent,
            MineForm
        },
        computed:{ 
            ...mapState(['timer','result','halted'])
        },
        methods :{
        },
        watch: {
            halted(value, oldValue){
                if ( value === false){ // 게임 시작
                    interval = setInterval(()=> {
                        this.$store.commit(INCREMENT_TIMER)
                    },1000)
                } else {// 게임중단
                    clearInterval(interval);
                }
            }
        }
    }
</script>
<style>
</style>
