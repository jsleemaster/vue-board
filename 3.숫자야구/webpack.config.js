//webpacking을 할때 이 모듈을 사용함
//webpack을 쓰는 이유 스크립트가 너무많아 질때 합치기 위해
module.exports = {
    //하나로 합쳐질 파일 이름
    entry: {
        app: './main.js',
    },
    module: {
        //합칠때 어떻게 처리할건지를 여기에 작성
        rules: [{

        }]
    },
    plugins: [

    ],
    //entry 에서 지정한 이름을 출력에서 사용할 이름으로 변경 
    output: {
        //최종 결과물로 보낼 것 [name]은 app으로 변경가능 서로 
        filename: '[name].js',
        //경로
        path: './dist',
    },
};