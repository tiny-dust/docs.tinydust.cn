### Text
Text 是文本数据类型, data 属性值为一个数组, 数组元素的类型是 JSON String。

```
{
  "type": "Text",
  "data": ["This is a text"]
}
```

### Geopoint
Geopoint 是位置坐标, data 属性值为一个数组, 数组元素的类型是 JSON Object, Obejct 拥有两个属性 latitude: 纬度, longitude: 经度, 经纬度值的类型是 JSON Number。

```
{
  "type": "Geopoint",
  "data": [{ "latitude": 30.123, "longitude": 120.123 }]
}
```

### ImageData
ImageData 是图片, data 为一个数组, 数组元素的类型是 JSON String, String 内容为图片 base64 编码后的字符串。

```
{
  "type": "ImageData",
  "data": ["data:image/png;base64,....."]
}
```

### ImageURL
ImageURL 为图片地址, data 为一个数组, 数组元素的类型是 JSON String, String 内容为图片的 URL

```
{
  "type": "ImageURL",
  "data": ["http://xx.png"]
}
```

### URL
URL 为网址, data 为一个数组, 数组元素的类型是 JSON String, String 内容为格式正确的网址

```
{
  "type": "URL",
  "data": ["http://www.example.com"]
}
```

### WebPage
WebPage 为网页, 与 URL 的不同是: 如果云任务返回该类型的数据, Link 会将该网页渲染显示出来, data 为一个数组, 数组元素的类型是 JSON Object, Object 拥有属性 url: 需要渲染页面的网址

```
{
  "type": "WebPage",
  "data": [{
    url: 'http://movie.douban.com/subject_search?search_text=黑客'
  }]
}
```

### Mix
Mix 是混合数据类型, 在云任务接受或者响应的数据类型超过一种时, 可将上述的单一数据类型按照以下格式任意组合

```
{
  "type": "Mix",
  "data": [
    {
      "type": "Text",
      "data": [
        "This is a text."
      ]
    },
    {
      "type": "ImageData",
      "data": [
        "data:image/png;base64,....."
      ]
    },
    {
      "type": "Geopoint",
      "data": [
        {
          "latitude": 30.123,
          "longitude": 120.123
        }
      ]
    },
    {
      "type": "WebPage",
      "data": [
        {
          "url": "http://example.com"
        }
      ]
    }
  ]
}
```
