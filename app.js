const express = require('express')
const app = express()
const port = 3001
let user= require('./componet/user.js')
let income = require('./componet/income.js')
let outcome = require('./componet/outcome.js')
let liabililies=require('./componet/liabililies.js')
let assets = require('./componet/assets.js')
let bodyParser = require('body-parser');

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(bodyParser())
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/user', user)
app.use('/income', income)
app.use('/outcome', outcome)
app.use('/assets', assets)
app.use('/liabililies', liabililies)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))