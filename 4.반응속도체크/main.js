import Vue from 'vue';
import ResponseCheck from './component/ResponseCheck';

// Vue.config.productionTip = false;
//뷰로 통제할 것을 $mount함
//뷰 인스턴스임 이것도 
new Vue(ResponseCheck).$mount('#root');