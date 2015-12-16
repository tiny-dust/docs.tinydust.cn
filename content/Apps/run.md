此 API 可以让 Web app 命令云集直接启动另一个 Web app，相当于传统浏览器中的 `window.open`

## 支持的平台
* iOS (1.7)
* Android (1.5)

## 权限
此权限默认关闭

## 方法

```
navigator.apps.run(app);
```  

* app: 需要运行的 Web app。
	* name: App 的名字。
	* url: App 的网址。
	* iconURL: App 的图标地址。

## 例子

```
navigator.apps.run({
  name: 'Clear',
  url: 'http://clear.evanyou.me',
  iconURL: 'http://clear.evanyou.me/apple-touch-icon-precomposed.png'
});
```
