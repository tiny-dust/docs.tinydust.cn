此 API 用于使设备震动指定的时长。

## 单次振动

```
window.navigator.vibrate(200);
window.navigator.vibrate([200]);
```
这些调用都将让设备振动 200 ms。

## 规则振动

```
window.navigator.vibrate([200, 100, 200]);
```

这样的调用将让设备振动 200 ms，然后停止 100 ms，然后再振动 200 ms。

##iOS Quirks
由于系统的限制，振动时将忽略时长参数，震动时长为预先设定值。

```
navigator.notification.vibrate([200, 100, 200]);
```

在 iOS 下，这样的调用将振动一个系统预设值，然后停止 100 ms，接着再振动一个系统预设值。

## 支持的平台

* iOS (1.7.0)
* Android (0.8.0)
