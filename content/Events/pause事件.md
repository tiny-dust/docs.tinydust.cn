

以下情况会触发`pause`事件：
- 云集进入后台
- 用户切换到其他 Web App

**注意：云集被结束不会触发`pause`事件。**

## 例子

```javascript
document.addEventListener('pause', function () {
	game.pause();
});
```

## 支持的平台

* iOS (0.9.3)