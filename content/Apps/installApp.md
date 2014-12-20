此 API 可以让 Web App 通过 JS 对象添加 Web App 至云集中。

## 支持的平台
* iOS (1.2.7)

## 权限
此权限默认关闭。

## 方法

```
navigator.apps.installApp(app, callback);
```

* app: 需要添加的 Web App。
	* name: App 的名字。
	* url: App 的网址。
	* iconURL: App 的图标地址。
	* author:  App 的作者。
* callback: 执行完成后的回调函数。
  * err: 如果添加失败，会在`err.message`中传入错误信息；如果添加成功，该值为`null`。
  * result: 如果添加失败，该值为`null`，如果添加成功，`result.app`为刚刚添加的 web app。

## 例子

```
navigator.apps.install({
	name: 'Clear',
	url: 'http://clear.evanyou.me',
	iconURL: 'http://clear.evanyou.me/apple-touch-icon-precomposed.png',
	author: 'Evan You'
}, function (err, result) {
  if (err) {
    return console.log(err);
  }

  var notification = new Notification(result.app.name + ' 已添加至云集', {
  	icon: result.app.iconURL
  });
});
```
