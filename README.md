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

#### 首页_自定义组件

> 1.创建组件
> 2.组件wxml代码 + 布局wxss
> 3.定义外部属性

```js
  /**
   * 组件的属性列表,由组件外部传进来
   */
  properties: {
    title:{
      type:String,
      value:"title默认值"
    },
    nav:{
      type:String,
      value:"nav默认值"
    }
  },
```

> 4.在使用该组件的json配置上注册组件

```json
{
  "usingComponents": {
    "NavHeader":"/components/NavHeader/NavHeader"
  }
}
```

> 5.使用组件

```html
<NavHeader title="排行榜" nav="热歌风向标"></NavHeader>
```

#### 首页_排行榜布局

> swiper 的 circular next-margin="50rpx" 属性

#### 首页_排行榜请求动态数据

#### tabBar的使用
app.json
```json
  "tabBar": {
    "color": "#94969C",
    "selectedColor": "#F74172",
    "backgroundColor": "#FFF",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "主页",
        "iconPath": "static/images/tabs/tab-home.png",
        "selectedIconPath": "static/images/tabs/tab-home-current.png"
      },
      {
        "pagePath": "pages/video/video",
        "text": "视频",
        "iconPath": "static/images/tabs/select.png",
        "selectedIconPath": "static/images/tabs/selected.png"
      },
      {
        "pagePath": "pages/personal/personal",
        "text": "个人中心",
        "iconPath": "static/images/tabs/tab-my.png",
        "selectedIconPath": "static/images/tabs/tab-my-current.png"
      }
    ]
  },
```

#### 个人页面布局

#### 个人页面的滑动效果
> transform:"translateY(0)"
> 计算滑动的距离，再用transform来实现滑动效果

#### 登录页_布局