此 API 可调用系统默认的相机 App 来拍摄一张照片，并将照片数据通过 dataURI 传递给 Web app。

## 支持的平台
* iOS (1.1)
* Android (1.3)

## 权限
hosted Web app 需要用户授权，packaged Web app 默认开启。

## 方法

```
navigator.camera.getPicture(onSuccess, onFail, [options]);
```

* onSuccess: 拍照成功后调用的回调函数，会传入一个编码了照片信息的参数。
* onFail: 拍照失败时调用的回调函数，会传入错误信息。
* options: 可选配置参数。
  * quality: 1-100之间的数字。

## 例子

```
navigator.camera.getPicture(function (data) {
  var image = document.getElementById('myImage');
  image.src = "data:image/jpeg;base64," + imageData;
}, function (err) {
  alert('Failed because: ' + message);
});
```
