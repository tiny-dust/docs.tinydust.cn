

当网页加载完毕，Lydia Launcher也完成初始化，API可正常被调用的时候，Lydia Launcher会向这个web app广播一个`deviceready`事件。

## 例子

```javascript
document.addEventListener('deviceready', function () {
	console.log('device is ready');
});
```

## 支持的平台

* iOS (0.9.3)
* Android (0.8.0)
