// const { VueLoaderPlugin } = require('vue-loader');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//node의 path를 이용하겠다.
const path = require('path');
//WebPacking을 할때 이 모듈을 사용함
//webpack을 쓰는 이유 스크립트가 너무많아 질때 합치기 위해
module.exports = {
    mode: 'development',// 개발용
    devtool: 'eval', //개발용
    resolve: {
        extensions: ['.js', '.vue'], //확장자 처리
    },
    //하나로 합쳐질 파일 이름
    entry: {
        app: path.join(__dirname, './main.js'),
    },
    //자바스크립트가 아닌애들을 자바스크립트로 바꿔주는 역할 (부가적인 역할)
    module: {
        //합칠때 어떻게 처리할건지를 여기에 작성
        rules: [{
            //.vue를 js식으로 읽기위해 값을 넣어줘야함
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.css$/,
            //style을 추가했기에 룰을 하나 추가해야한다.
            use: [
                'vue-style-loader',
                'css-loader',
            ]
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    //entry 에서 지정한 이름을 출력에서 사용할 이름으로 변경 
    output: {
        //최종 결과물로 보낼 것 [name]은 app으로 변경가능 서로 
        //어떤 파일이든 자바스크립트 파일 하나로 합친다.
        filename: '[name].js',
        //경로
        path: path.join(__dirname, './dist'),
    },
};