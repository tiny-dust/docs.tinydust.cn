

此API用于向用户展示一个提示的弹窗，有别于浏览器自带的弹窗，它提供了更强的可定制性。

**提示：由于弹窗过于突兀，并且会打断用户，除非必要的情况，不推荐使用弹窗来提醒用户。**

## 签名
```
navigator.notification.alert(message, alertCallback, [title], [buttonName])
```
* **message:** 弹窗内容 *(String)*
* **alertCallback:** 弹窗消失后调用的回调函数 *(Function)*
* **title:** 弹窗的标题。可选，默认为`Alert` *(String)*
* **buttonName:** 按钮的名字。可选，默认为`OK` *(String)*

## 例子
```
navigator.notification.alert('你正在浏览草榴社区！', function () {
	console.log('this user know what's he doing.');
}, '警告', '知道了');
```

## 支持的平台

* iOS (1.0)
* Android (0.8.0)
