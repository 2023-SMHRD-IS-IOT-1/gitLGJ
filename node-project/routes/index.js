// 3-1. 라우터 모듈 가져오기
const express = require('express');
const router = express.Router();

// 3-3. 메인페이지 경로 설정
router.get('/', (req, res)=>{
     console.log('main');
     // 5-2. 리액트 프로젝트 경로 설정
     res.sendFile(path.join(__dirname, 'alcohol-front', 
     'build', 'index.html'))
})

// 7-3. axios로 받아온 데이터 확인
router.post('/getData', (req, res)=>{
     console.log('get data', req.body);
     res.json({auth : 'user'});
})

// 3-2. 라우터 모듈 내보내기
module.exports = router;