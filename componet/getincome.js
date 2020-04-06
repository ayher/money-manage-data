let express = require('express');
let router = express.Router();
let mysql = require('./mysqlhandle.js')

router.get('/', function (req, res, next) {
    let myDate = new Date();
    console.log('getincome    ', myDate.toLocaleString())
    mysql({
        sql: 'select income_type,income_money from income',
        callback: function (data) {
            let senddata={
                status:'SUCCESS',
                data:[],
                message:'成功'
            };
            for(let v of data){
                let s={}
                s[v.income_type]=v.income_money;
                senddata.data.push(s)
            }
            res.json(senddata)
        }
    })
})
module.exports = router;
