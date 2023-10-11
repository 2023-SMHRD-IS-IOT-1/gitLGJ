// 2-1. 기본 설치 모듈 가져오기
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 5-1. 리액트 프로젝트 경로 설정
const path = require('path');
app.use(express.static(path.join(__dirname, 
     'alcohol-front', 'build')));
app.use(express.json());

// 8. CORS 모듈 가져오기
const cors = require('cors');
app.use(cors());

// 3-4. 메인페이지 경로 설정
const indexRouter = require('./routes');
app.use('/', indexRouter);

// 2-2. 포트 설정
app.set('PORT', process.env.PORT || 5000);
app.listen(app.get('PORT'), ()=>{
     console.log('Server is running on 5000..');
})