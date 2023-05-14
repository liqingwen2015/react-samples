const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})
//Model对象代表的是数据库中的（collection），通过Model才能对数据库进行操作
//第一个参数是modelName，代表的是你要和数据库中映射的集合名（默认是复数形式），第二个参数schema代表的是你刚刚创建的schema对象名。
const usermodel = mongoose.model('Users' , userSchema)

module.exports = usermodel
