此 API 可以让 Web app 创建当前页面的快捷方式到设备的用户桌面上。

## 签名

```
navigator.apps.pin();
```

此 API 没有参数，直接调用即可。

* 调用时，云集将优先检查 `name` 为 `"apple-mobile-web-app-title"` 的 `meta` 标签中 `content` 的数据作为快捷方式的标题，
如果没有这样的 `meta` 标签，云集将取 `title` 标签中的数据作为快捷方式的标题。
* 调用时，云集将优先检查 `rel` 为 `"apple-touch-icon"` 的 `link` 标签中 `href` 的数据作为快捷方式的图标，
如果没有这样的 `link` 标签，云集将使用一个默认的图标作为快捷方式的图标。
* 调用时，云集将使用页面的 `location.href` 作为快捷方式的链接。

## 支持的平台

* Android (1.8.7)