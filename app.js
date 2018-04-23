const Koa = require('koa');
const View = require('koa-views');
const path = require('path');
// post boby 解析
const bodyParser = require('koa-bodyparser');
const server = new Koa();
const router = require('./routers');
// body 解析
server.use(bodyParser());
// 路由控制
server.use(router.routes());

// 添加模版引擎
server.use(
    View(path.resolve(__dirname, './views'), {
        extension: 'ejs'
    })
);


server.use(async ctx => {
    let title = 'hello koa2';
    await ctx.render('index', { title });
});

server.listen('9880', () => console.log('server is start 9880'));
