## 示例

以下是一则获取笑话 action 的`webaction.json`的示例：

```
{
  "server": {
    "url": "http://s1.tinydust.cn:50008/joke",
    "method": "POST"
  },
  "name": {
    "cn": "随机获取一段笑话",
    "en": "Fetch a random Chinese Joke"
  },
  "icon": "http://www.laifudao.com/images/icon_144.png",
  "required": [],
  "optional": [],
  "returns": [{
    "count": 1,
    "type": "Text"
  }]
}
```

## 详细解释

### server

server 字段包含了该 action 的入口服务器信息，也告诉了 Link 该以怎样的 HTTP Method 来提交用户的信息。

* url：action 的 URL，必需项。
* method：目前只支持 POST，必需项。

### name

name 字段包含了该 action 的名字。

* cn：action 的中文名，必需项。
* en：action 的英文名，必需项。

### icon

action 展示在 Link 客户端的图标地址，是一个合法的 URL。

### required

包含了完成该 action 的所必需的数据模型的信息。

* count：数据的数量，必需项。
* type：[数据类型](/Link/Web%20action%20%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E6%8C%87%E5%8D%97)，必需项。

### optional

包含了完成该 action 可选的数据模型的信息。如果 Link 得到的用户输入没有这些数据，action 依然会被 Link 的服务器调用。

### returns

包含了该 action 执行之后返回给 Link 的数据模型信息。Link 将按照这里的来处理 action 返回的数据。如果处理不成功，Link 服务器会给客户端返回一条错误。
