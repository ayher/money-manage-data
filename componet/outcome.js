let express = require('express');
let router = express.Router();
let mysql = require('./mysqlhandle.js')

router.get('/get', function (req, res, next) {
    let myDate = new Date();
    console.log('getoutcome    ', myDate.toLocaleString())
    mysql({
        sql: 'select id,type,money from outcome',
        callback: function (data) {
            let senddata = {
                status: 'SUCCESS',
                data: data,
                message: '成功'
            };
            res.json(senddata)
        }
    })
})

router.post('/update', function (req, res, next) {
    let myDate = new Date();
    console.log('updateoutcome    ', myDate.toLocaleString())
    mysql({
        sql: `update outcome set money=${req.body.money} where id=${req.body.id}`,
        callback: function (data) {
            let senddata = {
                status: 'SUCCESS',
                data: [],
                message: '成功'
            };
            res.json(senddata)
        }
    })
})

router.post('/add', function (req, res, next) {
    let myDate = new Date();
    console.log('addoutcome    ', myDate.toLocaleString())
    mysql({
        sql: `insert into outcome (user_id,type,money) values (${req.body.user_id},"${req.body.type}",${req.body.money})`,
        callback: function (data) {
            let senddata = {
                status: 'SUCCESS',
                data: [{ id: data.insertId }],
                message: '成功'
            };
            res.json(senddata)
        }
    })
})

router.delete('/delete', function (req, res, next) {
    let myDate = new Date();
    console.log('deleteoutcome    ', myDate.toLocaleString())
    mysql({
        sql: `delete from outcome where id=${req.body.id} `,
        callback: function (data) {
            let senddata = {
                status: 'SUCCESS',
                data: [],
                message: '成功'
            };
            res.json(senddata)
        }
    })
})

module.exports = router;
