Switch to another page and back.

## Push Page
Switch to another page. You can use `Pop Page` node to go back.

<dl>
  <dt>(Attribute) Page Name</dt>
  <dd>A string telling the system which page to switch to.</dd>

  <dt>(Input) Data</dt>
  <dd>Anything you like.</dd>

  <dt>(Output) Data</dt>
  <dd>Output the input Data **after** the page is pushed. You can then use the data
  to initialize the newly pushed page.</dd>
</dl>

## Pop Page
Switch to previous page. There must be some page already pushed by using
`Push Page` node. Pop when there are no page pushed is undefined behavior.

<dl>
  <dt>(Input) Data</dt>
  <dd>Anything you like.</dd>

  <dt>(Output) Data</dt>
  <dd>Output the input Data **after** the page is popped.</dd>
</dl>

