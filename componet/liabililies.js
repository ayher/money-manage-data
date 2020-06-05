let express = require('express');
let router = express.Router();
let mysql = require('./mysqlhandle.js')

router.get('/get', function (req, res, next) {
    let myDate = new Date();
    console.log('getliabililies    ', myDate.toLocaleString())
    mysql({
        sql: 'select id,type,money,price,remark from liabililies',
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
    console.log('updateliabililies    ', myDate.toLocaleString())
    mysql({
        sql: `update liabililies set money=${req.body.money},price=${req.body.price},remark="${req.body.remark}" where id=${req.body.id}`,
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
    console.log('addliabililies    ', myDate.toLocaleString())
    mysql({
        sql: `insert into liabililies (user_id,type,money,price,remark) values (${req.body.user_id},"${req.body.type}",${req.body.money},"${req.body.price}","${req.body.remark}")`,
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
    console.log('deleteliabililies    ', myDate.toLocaleString())
    mysql({
        sql: `delete from liabililies where id=${req.body.id} `,
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


