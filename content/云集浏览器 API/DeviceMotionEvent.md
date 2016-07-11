此 API 兼容 W3C 的 `devicemotion` DOM 事件规范，可以让 Web app 获取设备的加速度、包括地球重力的加速度、旋转角度等硬件信息。

## 支持的平台
* iOS (1.8)
* Android (1.5)

## 权限
在 iOS 平台上，此权限默认关闭，
在 Android 平台上，此权限默认开启。

## 方法

```
document.addEventListener('devicemotion', listener, useCapture);
```


## 例子
```
document.addEventListener('devicemotion', function (event) {
  // 设备加速度
  console.log(event.acceleration.x);
  console.log(event.acceleration.y);
  console.log(event.acceleration.z);

  // 包含了重力的设备加速度
  console.log(event.accelerationIncludingGravity.x);
  console.log(event.accelerationIncludingGravity.y);
  console.log(event.accelerationIncludingGravity.z);

  // 设备陀螺仪感应的偏角
  console.log(event.rotationRate.alpha);
  console.log(event.rotationRate.beta);
  console.log(event.rotationRate.gamma);
}, false);
```
