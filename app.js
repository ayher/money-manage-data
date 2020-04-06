const express = require('express')
const app = express()
const port = 3001
let getuser= require('./componet/getuser.js')
let getincome = require('./componet/getincome.js')
let getoutcome = require('./componet/getoutcome.js')

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/getuser', getuser)
app.use('/getincome', getincome)
app.use('/getoutcome', getoutcome)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))