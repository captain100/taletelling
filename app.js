const Koa = require('koa');
const View = require('koa-views');
const path = require('path');

const server = new Koa();
// 添加模版引擎
server.use(View(path.resolve(__dirname, './views'), {
    extension: 'ejs',
}))

server.use(async ctx => {
    let title = 'hello koa2'
    await ctx.render('index', {title})
})




server.listen('9880', () => console.log('server is start'));
