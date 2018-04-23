const fs = require('fs');
const path = require('path');
const AipOcrClient = require("baidu-aip-sdk").speech;

// 设置APPID/AK/SK
const APP_ID = "11103289";
const API_KEY = "Rr4sM18bsrG3PTaDhxBb7U7T";
const SECRET_KEY = "E6X7kdPHDCaFjhwszv6DHNszd71lu0bp";

// 新建一个对象，建议只保存一个对象调用服务接口
const client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);
const pwd = path.resolve(__dirname, '/assets')
/**
 * 语音合成
 * 
 * @param {any} text 
 * @param {any} options 
 */
function text2audio(text = '哈哈，这就是语音测试', options = {spd: 0, per: 4}) {
    client.text2audio(text, options).then(function(result) {
        if (result.data) {
            fs.writeFileSync('tts.mpVoice.mp3', result.data);
        } else {
            // 服务发生错误
            console.log(result)
        }
    }, function(e) {
        // 发生网络错误
        console.log(e)
    });

}

module.exports = {
    text2audio
}
    







