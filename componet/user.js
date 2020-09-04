let express = require('express');
let router = express.Router();
let mysql = require('./mysqlhandle.js')
const jwt = require('jsonwebtoken');

// router.get('/getuser', function (req, res, next){
//     let myDate = new Date();
//     console.log('getuser    ', myDate.toLocaleString())
//     mysql({
//         sql:'select * from user',
//         callback:function(data){
//             let senddata = {
//                 status: 'SUCCESS',
//                 data: data,
//                 message: '成功'
//             };
//             res.json(senddata)
//         }
//     })
// })

router.post('/setuser', function (req, res, next) {
    let myDate = new Date();
    console.log('setuser    ', myDate.toLocaleString())
    const {phone, username, password } = req.body;
    mysql({
        sql: `select * from user where phone='${phone}'`,
        callback: function (data) {
            let senddata;
            if(data.length!==0){
                senddata = {
                    status: 'FALUTURE',
                    data: {  },
                    message: '该手机号已经注册'
                };
                res.json(senddata)
            }else{
                let token = jwt.sign({ username, phone }, 'ayher');
                mysql({
                    sql: `insert into user (phone,username,password,token) values ('${phone}','${username}','${password}','${token}')`,
                    callback: function (data) {
                        let senddata = {
                            status: 'SUCCESS',
                            data: { token },
                            message: '成功'
                        };
                        res.json(senddata)
                    }
                })
            }
            
        }
    })

    
})

router.post('/loginuser', function (req, res, next) {
    let myDate = new Date();
    console.log('loginuser    ', myDate.toLocaleString())
    const { phone, password } = req.body;
    mysql({
        sql: `select * from user where phone = '${phone}' and password='${password}'`,
        callback: function (data) {
            let senddata
            if (data.length === 0) {
                senddata = {
                    status: 'FALUTURE',
                    data: data,
                    message: '账号或者密码不正确'
                };  
            }
            
            else {
                senddata = {
                    status: 'SUCCESS',
                    data: { token: data[0].token},
                    message: '成功'
                };
            }
            res.json(senddata)
        }
    })
})

module.exports = router;
