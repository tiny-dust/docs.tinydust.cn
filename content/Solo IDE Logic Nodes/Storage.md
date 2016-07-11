Store and retrieve arbitrary data in the phone (locally).

## Storage Set Item
Save `Value` under the name of `Key`. If there is anything already stored
under the name of `Key`, the old value will be overwritten to `Value`.

<dl>
  <dt>(Attribute) Key</dt>
  <dd>Name of the `Value` to save.</dd>

  <dt>(Input) Value</dt>
  <dd>Anything you want to save.</dd>

  <dt>(Output) Done</dt>
  <dd>Output **something** **after** the value is saved.
  “something” can be anything, so don't read the value of it.
  There won't be any output if error occurs.</dd>

  <dt>(Output) Error</dt>
  <dd>A string error message. There won't be any output unless error occurs.</dd>
</dl>

## Storage Get Item
Get `Value` under the name of `Key`.

<dl>
  <dt>(Attribute) Key</dt>
  <dd>Name of the `Value` to retrieve.</dd>

  <dt>(Input) Trigger</dt>
  <dd>Anything you like to trigger the retrieval.</dd>

  <dt>(Output) Value</dt>
  <dd>The value under the name of `Key`.
  There won't be any output if error occurs.</dd>

  <dt>(Output) Error</dt>
  <dd>A string error message. There won't be any output unless error occurs.</dd>
</dl>

## Storage Remove Item
Remove `Value` under the name of `Key`.

<dl>
  <dt>(Attribute) Key</dt>
  <dd>Name of the `Value` to remove.</dd>

  <dt>(Input) Trigger</dt>
  <dd>Anything you like to trigger the removal.</dd>

  <dt>(Output) Done</dt>
  <dd>Output **something** **after** the value is removed.
  “something” can be anything, so don't read the value of it.
  There won't be any output if error occurs.</dd>

  <dt>(Output) Error</dt>
  <dd>A string error message. There won't be any output unless error occurs.</dd>
</dl>

