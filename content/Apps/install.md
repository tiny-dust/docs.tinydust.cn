此 API 可以让 Web App 通过 Manifest 添加 Web App 至云集中。

## 支持的平台
* iOS (1.2)
* Android (1.2)

## 权限
此权限默认关闭。

## 方法

```
navigator.apps.install(manifestURL, callback);
```

* manifestURL: 需要添加的 Web App 的 Manifest 的网址。
* callback: 执行完成后的回调函数。
  * err: 如果添加失败，会在`err.message`中传入错误信息；如果添加成功，该值为`null`。
  * result: 如果添加失败，该值为`null`，如果添加成功，`result.app`为刚刚添加的 web app。

## 例子

```
navigator.apps.install('http://cdn.lydiabox.com/apps/lydiagapdemo/manifest.webapp', function (err, result) {
  if (err) {
    return console.log(err);
  }

  navigator.notification.alert(result.app.name + ' 已添加至云集', function () {
    // update your record or do your stuff.
  }, '添加成功', '好');
});
```
