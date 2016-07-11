此 API 将向用户发送一条消息通知，您可以定制这条消息通知的内容与图标，这条消息通知会被派发至云集的本地存储中，并可随时被用户删除。

![Web Notification](%image_url%/notification_demo.gif)

## 支持的平台
* iOS (1.0.0)
* Android (1.1)

## 权限
不论是 hosted Web app 或 packaged Web app，访问此 API 的权限默认关闭，需要提示用户，经过授权后才能调用。

## 构造函数
```javascript
var notification = new Notification(title, options);
```
* title: 必须在通知中被展示的标题。*(String)*
* options: 一个包含若干属性的对象。*(Object)*:
	* icon: 需要被展示的图标的URL。*(String)*
	*  body：仅会被显示一次的通知辅助说明。*(String)*
	*  tag：开发者自定义的一个标签，可用于区分不同的通知。*(String)*

## 静态属性

* permission：表示当前通知的权限状态，可能的值为`default`、`granted`、`denied`。*(String)*

## 实例属性

* title: 通知中被展示的标题。*(String)*
* icon: 通知中展示的图标的URL。*(String)*
*  body：仅会被显示一次的通知辅助说明。*(String)*
*  tag：开发者自定义的一个标签，可用于区分不同的通知。*(String)*

## 静态方法

```javascript
Notification.requestPermission(callback);
```
此方法用于向用户弹出一个提示框来请求权限。就算不调用此方法，在初始化消息通知时也会向用户弹出一个提示框。正确的实践应该是先向用户请求权限，再在回调中初始化消息通知，以实现和桌面浏览器的`Notification`兼容。
* callback：包含一个用于表示权限申请结果的参数的回调函数。*(Function)*。

回调函数的参数可能的值为：
* "`granted`"：表示权限申请通过；
*  "`denied`"：表示权限申请被拒绝；

## 实例方法
```javascript
notification.close();
```
此方法用于关闭只被展示一次的提示，并不会将云集中本地的通知删除，要删除云集中本地存储的消息通知，只能通过用户。

## 例子

```javascript
var NotifyMe = function () {
	if (!("Notification" in window)) {
		console.log('please use LydiaBox or modern browser that supports Web Notification');
	} else if (Notification.permission === 'granted') {
		var notification = new Notification('Hi there!');
	} else if (Notification.permission !== 'denied') {
		Notification.requestPermission(function (status) {
			if (status === 'granted') {
				var notification = new Notification('Hi there!');
			} else if (status === 'denied') {
				// please do not bother user any more.
			}
		});
	}
};
```
