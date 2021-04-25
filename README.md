# netEaseCloudMusic
网易云音乐

#### 首页_轮播图区域  布局完成

#### 首页_五个图标导航区 布局完成

#### 首页_推荐歌曲区域 布局完成

#### 首页_内容区 布局完成

#### 首页_封装请求函数
```js
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
```

#### 首页_banner图动态列表渲染

```html
<swiper-item wx:for="{{bannerList}}" wx:key="bannerId">
    <image src="{{item.pic}}" />
</swiper-item>
```

* wx:key 不用 {{}}
* why wx:key 不用index？


#### 首页_推荐歌曲动态完成

> wx:for-index; wx:for-item

```html
<swiper-item wx:for="{{bannerList}}" wx:key="bannerId" wx:for-index="idx" wx:for-item="itemName">
    <image src="{{itemName.pic}}" />
</swiper-item>
```