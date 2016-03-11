### Link 向 Action 服务器发送数据

Link 会根据 webaction.json 中的配置将需要的参数发送给 Action, 如下面示例中根据需要发送给 Action 一段文字和一张图片, 更多数据类型请参考[数据类型](/Link/Web%20action%20%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E6%8C%87%E5%8D%97)

```
{
  "type": "Mix",
  "data": [
    {
      "type": "Text",
      "data": ["这是微博内容"]
    },
    {
      "type": "ImageData",
      "data": ["data:image/png;base64,....."]
    }
  ]
}
```


### Action 向 Link 返回数据
执行成功时, 设置 HTTP Status 为 200  
返回数据为 JSON 格式, 下面示例中返回的 WebPage 类型的数据, 更多返回数据格式具体参考[数据类型](/Link/Web%20action%20%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E6%8C%87%E5%8D%97)

```
{
  "type": "WebPage",
  "data": [{
    "url": "https://book.douban.com/subject/26693234"
  }]
}
```

执行出现错误时, 设置 HTTP Status 为 400  
返回数据为 JSON 格式, 下面示例中的 code 取值具体参考[错误码](/Link/Link%20错误码)

```
{
  "type": "Error",
  "data": [{
    "code": 103
    "message": "输入参数错误"
  }]
}
```

### 完整示例代码（Node.js）

#### Link 发送的数据（开发者只需关心代码中发送请求部分发送的具体内容即可）

```
let request = require('request-promise')

// 初始化发送数据
let sendData = {
  "type": "Mix",
  "data": [
    {
      "type": "Text",
      "data": ["这是微博内容"]
    },
    {
      "type": "ImageData",
      "data": ["data:image/png;base64,....."]
    }
  ]
};

// 设置 HTTP 请求参数
let options = {
  "uri": "http://example.com/actions/send_weibo",
  "method": "POST",
  "json": sendData
}

// 发送请求
let resultFromAction;
try {
  resultFromAction = await request(options);
} catch (error) {
  // 处理错误信息, 将错误信息返还给客户端
}

// 处理 resultFromAction 信息, 将 Action 运行结果返还给客户端
```

#### Action 需要返回给 Link 的数据

```
let _ = require('lodash');

let body = req.body;

let weiboContent = _.find(body.data, { 'type': 'Text' });
weiboContent = weiboContent ? weiboContent.data[0] : null;

let weiboImage = _.find(body.data, { 'type': 'ImageData' });
weiboImage = weiboImage ? weiboImage.data[0] : null;

if (!weiboContent || !weiboImage) {
  return res.status(400).json({
    'type': 'Error',
    'data': [{
      'code': 103,
      'message': '输入参数错误'
    }]
  });
} else {
  try {
    发送微博(Action 真正要执行的操作)
  } catch (error) {
    处理微博返回的错误信息
    return res.status(400).json({
      'type': 'Error',
      'data': [{
        'code': 根据微博返回的错误和 Link 错误码选择适当的数字,
        'message': 根据微博返回的错误返回给 Link 服务器适当的错误信息
      }]
    });
  }

  return res.status(200).json({
    'type': 'Success',
    'data': []
  })
}
```
