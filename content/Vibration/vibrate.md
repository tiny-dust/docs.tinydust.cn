此API用于使设备震动指定的时长

## 签名
```
navigator.notification.vibrate(time);
```

* **time:**以毫秒为单位的设备震动时长，以毫秒为单位。*（Number）*

##范例
```
// 震动2.5秒
navigator.notification.vibrate(2500);
```

##iOS Quirks
* **time：**忽略时长参数，震动时长为预先设定值。

```
navigator.notification.vibrate();
navigator.notification.vibrate(2500);   // 2500被忽略掉
```


## 支持的平台

* iOS (0.9.3)
* Android (0.8.0)
