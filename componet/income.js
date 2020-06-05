let express = require('express');
let router = express.Router();
let mysql = require('./mysqlhandle.js')

router.get('/get', function (req, res, next) {
    let myDate = new Date();
    console.log('getincome    ', myDate.toLocaleString())
    mysql({
        sql: 'select id,type,money from income',
        callback: function (data) {
            let senddata={
                status:'SUCCESS',
                data: data,
                message:'成功'
            };
            res.json(senddata)
        }
    })
})

router.post('/update', function (req, res, next) {
    let myDate = new Date();
    console.log('updateincome    ', myDate.toLocaleString())
    mysql({
        sql: `update income set money=${req.body.money} where id=${req.body.id}`,
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
    console.log('addincome    ', myDate.toLocaleString())
    mysql({
        sql: `insert into income (user_id,type,money) values (${req.body.user_id},"${req.body.type}",${req.body.money})`,
        callback: function (data) {
            let senddata = {
                status: 'SUCCESS',
                data: [{ id: data.insertId}],
                message: '成功'
            };
            res.json(senddata)
        }
    })
})

router.delete('/delete', function (req, res, next) {
    let myDate = new Date();
    console.log(req.body,'req.bodyreq.body')
    console.log('deleteincome    ', myDate.toLocaleString())
    mysql({
        sql: `delete from income where id=${req.body.id} `,
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


