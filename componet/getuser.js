let express = require('express');
let router = express.Router();
let mysql = require('./mysqlhandle.js')

router.get('/', function (req, res, next){
    let myDate = new Date();
    console.log('getuser    ', myDate.toLocaleString())
    mysql({
        sql:'select * from user',
        callback:function(data){
            let senddata = {
                status: 'SUCCESS',
                data: data,
                message: '成功'
            };
            res.json(senddata)
        }
    })
})
module.exports = router;
