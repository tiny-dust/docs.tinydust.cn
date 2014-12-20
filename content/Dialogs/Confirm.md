

显示一个可定制的确认框。

## 签名

```
navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
```
* **message:** 对话框信息。 *(String)*
* **confirmCallback:** 当对话框按钮被按下时调用的回调函数，并传回一个值为按钮索引的参数，这个索引是从1开始的。 *(String)*
* **title:** 对话框标题。可选，默认为`Confirm`。 *(String)*
* **butonLabels:** 一个用来指定按钮标题的数组。可选，默认为`['OK', 'Cancel']`。*(Array)*

## confirmCallback

当用户按下某个按钮的时候，`confirmCallback`会被执行。传入回调的参数`buttonIndex`*(Number)*用来指示用户按下按钮的索引，这个索引是从1开始的。

## 例子

```
navigator.notification.confirm(
	'你正在浏览草榴！',
	function (index) {
		if (index === 1) {
			// this user decide to go on.
		} else if (index === 2) {
			// this user gives up.
		}
	},
	'注意',
	['我就要看', '我不看了']
);
```

## 支持的平台

* iOS (1.0)
* Android (0.8.0)
