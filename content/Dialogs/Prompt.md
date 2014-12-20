

显示一个比浏览器的`prompt`具有更高可定制性的对话框。

## 签名
```
navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
```
* **message:** 对话框信息。*(String)*
* **promptCallback:** 当按钮被按下后调用的回调函数，并传入一个值为按钮索引的参数，索引是从1开始的。*(Function)*
* **title:** 对话框标题。可选，默认为`Prompt` *(String)*
* **buttonLabels:** 用来指定按钮标题的数组。可选，默认为`['OK', 'Cancel']` *(Array)*
* **defaultText:** 输入框的默认内容。可选，默认为`''` *(String)*

## promptCallback

当用户按下某个按钮的时候，`promptCallback`会被执行，传入回调的参数`results`对象有以下属性：
* buttonIndex: 用户按下按钮的索引，这个索引是从1开始的。 *(Number)*
* input1: 用户输入的内容。*(String)*

## 例子
```
navigator.notification.prompt(
	'请输入你的名字',
	function (results) {
		console.log('user press ' + results.buttonIndex);
		console.log('user input ' + results.input1);
	},
	'注册',
	['确认', '退出'],
	'陈轲'
);
```
## 支持的平台

* iOS (1.0)
* Android (0.8.0)
