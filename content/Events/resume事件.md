

当您的 Web App 接收`pause`事件后处于暂停的状态，如果这时用户又重新切回了您的 Web App，您的 Web App 会接收到一个由云集运行环境广播的`resume`事件。

**注意：云集被结束后，重新启动云集不会触发`reusme`事件**

## 例子

```
document.addEventListener('resume', function () {
	// welcome back~
});
```

## 支持的平台

* iOS (0.9.3)