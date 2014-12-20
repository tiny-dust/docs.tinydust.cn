

以下情况会触发`pause`事件：
- LydiaBox进入后台
- 用户切换到其他web app

**注意：LydiaBox被结束不会触发`pause`事件。**

## 例子

```javascript
document.addEventListener('pause', function () {
	game.pause();
});
```

## 支持的平台

* iOS (0.9.3)