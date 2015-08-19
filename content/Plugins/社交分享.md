此 API 给予您的 Web app 社交分享的能力。您可以将一个指定的链接和内容分享至国内流行的社交平台。

## 方法

* window.plugins.socialsharing.shareCurrentPage
* window.plugins.socialsharing.shareViaWeChat
* window.plugins.socialsharing.shareViaWeChatTimeLine
* window.plugins.socialsharing.shareViaWeibo

## shareCurrentPage

此方法将打开云集自带的分享框，分享用户当前正在浏览的页面。

### 签名

```
window.plugins.socialsharing.shareCurrentPage();
```

### 支持的平台

* iOS (0.9.3)
* Android (0.8.0)

## shareViaWeChat

此方法将允许 Web app 通过微信客户端，分享一条指定的信息给用户的微信好友。

### 签名

```
window.plugins.socialsharing.shareViaWeChat(title, message, url, successCallback, errorCallback);
```

* title: 分享的标题。*(String)*
* message: 分享的内容。 *(String)*
* url: 分享的链接，以http开头。 *(String)*
* successCallback: 分享成功后被调用的回调函数。 *(String)*
* errorCallback: 分享失败时被调用的回调函数。*(String)*

### 例子

```
window.plugins.socialsharing.shareViaWeChat(
	'我用0步围住了神经猫',
	'击败了全国100%的人',
	location.href,
	function () { console.log('success') },
	function (err) { console.log(err.message) }
);
```

### 支持的平台

* iOS (0.9.3)
* Android (0.8.0)

## shareViaWeChatTimeLine

此方法将允许 Web app 通过用户的微信客户端，分享一条定制的消息至用户微信朋友圈。

### 签名

```
window.plugins.socialsharing.shareViaWeChatTimeLine(title, message, url, successCallback, errorCallback);
```

* title: 分享的标题。*(String)*
* message: 分享的内容。 *(String)*
* url: 分享的链接，以http开头。 *(String)*
* successCallback: 分享成功后被调用的回调函数。 *(String)*
* errorCallback: 分享失败时被调用的回调函数。*(String)*

### 例子

```
window.plugins.socialsharing.shareViaWeChatTimeLine(
	'我用0步围住了神经猫',
	'击败了全国100%的人',
	location.href,
	function () { console.log('success') },
	function (err) { console.log(err.message) }
);
```

### 支持的平台

* iOS (0.9.3)
* Android (0.8.0)

## shareViaWeibo

此方法将允许 Web app 通过新浪微博 Web 端，分享一条定制的消息至用户的微博。

### 签名

```
window.plugins.socialsharing.shareViaWeibo(title, message, url, successCallback, errorCallback);
```

* title: 分享的标题。*(String)*
* message: 分享的内容。 *(String)*
* url: 分享的链接，以http开头。 *(String)*
* successCallback: 分享成功后被调用的回调函数。 *(String)*
* errorCallback: 分享失败时被调用的回调函数。*(String)*

### 例子

```
window.plugins.socialsharing.shareViaWeibo(
	'我用0步围住了神经猫',
	'击败了全国100%的人',
	location.href,
	function () { console.log('success') },
	function (err) { console.log(err.message) }
);
```

### 支持的平台

* iOS (0.9.3)
* Android (0.8.0)
