import Vue from 'vue';
import NumberBaseball from './component/NumberBaseball';

// Vue.config.productionTip = false;
//뷰로 통제할 것을 $mount함
//뷰 인스턴스임 이것도 
new Vue(NumberBaseball).$mount('#root');