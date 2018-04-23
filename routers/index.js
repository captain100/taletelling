// 路由控制
const router = require('koa-router')();

const { text2audio } = require('../services/core.js');

router.post('/api/inputText', async ctx => {
    const { data } = ctx.request.body;

    console.log('------------')
    const vidoeFile = await text2audio(data)
    const data = ctx.response.body;
    console.log(data)
    console.log('------------')

})

module.exports = router;
