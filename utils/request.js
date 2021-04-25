// 发送ajax请求
import config from './config'

// 封装功能函数
export default (url,data={},method="GET")=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url:config.host+'/'+url,
            data,
            method,
            success: (result) => {
                console.log(config.host+'/'+url)
                console.log('result1',result.data)
                
                resolve(result.data)
            },
            fail: (err) => { reject(err)},
            // complete: () => {}
        });
          
    })
 }
    