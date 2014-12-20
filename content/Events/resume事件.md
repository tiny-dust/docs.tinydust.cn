

当您的web app接收`pause`事件后处于暂停的状态，如果这时用户又重新切回了您的web app，您的web app会接收到一个由Lydia Launcher广播的`resume`事件。

**注意：LydiaBox被结束后，再次开启LydiaBox不会触发`reusme`事件**

## 例子

```
document.addEventListener('resume', function () {
	// welcome back~
});
```

## 支持的平台

* iOS (0.9.3)