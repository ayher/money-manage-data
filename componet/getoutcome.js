let express = require('express');
let router = express.Router();
let mysql = require('./mysqlhandle.js')

router.get('/', function (req, res, next) {
    let myDate = new Date();
    console.log('getoutcome    ', myDate.toLocaleString())
    mysql({
        sql: 'select outcome_type,outcome_money from outcome',
        callback: function (data) {
            let senddata = {
                status: 'SUCCESS',
                data: [],
                message: '成功'
            };
            for (let v of data) {
                let s = {}
                s[v.outcome_type] = v.outcome_money;
                senddata.data.push(s)
            }
            res.json(senddata)
        }
    })
})
module.exports = router;
