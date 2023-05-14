const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const dbConnect = require('./dbConnect')
const userRoute = require('./routes/usersRoute')
const transactionsRoute = require('./routes/transactionsRoute')

// app.get('/', (req, res) => { res.send('Hello World'); });

//express.json()是Express 中内置的中间件功能。此方法用于解析带有 JSON 有效负载的传入请求,并基于 bodyparser。
app.use(express.json())

//配置路由
app.use('/api/users/', userRoute)
app.use('/api/transactions/' , transactionsRoute)

app.listen(PORT, () => console.log(`服务器正在${PORT}端口号运行...`));