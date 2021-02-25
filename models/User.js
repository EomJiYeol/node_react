모델 : 스키마를 감싸주는것
스키마 : 작성자, 포스트이름, 설명 등을 설정하는것


const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50,
    },
    email:{
        type : String,
        trim : true,
        // ex) test 123@naver.com 이라고했을때 test 123 빈칸을 없애주려면 trim:true 
        unique:1
    },
    password:{
        type:String,
        maxlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        // 관리자면 1 이런식으로
        type:Number,
        default : 0
    },
    image:String,
    token:{
        // 유효성 관리 위해 token
        type:String
    },
    tokenExp{
        // 토큰 유효기간
        type:Number
    }
})
const User = mongoose.model('User',userSchema)
// model('모델이름',스키마)
module.exports = { User }
