Locate where you are, or monitoring your movement.

## Get Location
Get current geographical location of the user (the phone)
in latitude, longitude and altitude.

<dl>
  <dt>(Input) Trigger</dt>
  <dd>Anything you like to trigger the output.</dd>

  <dt>(Output) Location</dt>
  <dd>JS Object of the form `{ latitude: 12.34, longitude: 56.78, altitude: 901.2 }`.
  There won't be any output if error occurs.</dd>

  <dt>(Output) Error</dt>
  <dd>A string error message. There won't be any output unless error occurs.</dd>
</dl>

## Watch Location Changes
Watch the geographical location of the user (the phone).
Output latitude, longitude and altitude **continuously** until
stopped by `Stop Watching Location` node.

<dl>
  <dt>(Input) Trigger</dt>
  <dd>Anything you like to trigger the output.</dd>

  <dt>(Output) Location</dt>
  <dd>Continously output a JS Object of the form
  `{ latitude: 12.34, longitude: 56.78, altitude: 901.2 }`.
  When the location changes, the node will output the new location again.
  There won't be any output if error occurs.</dd>

  <dt>(Output) Error</dt>
  <dd>A string error message. There won't be any output unless error occurs.</dd>

  <dt>(Output) Handle</dt>
  <dd>To be used by `Stop Watching Location` to stop monitoring location changes.
  There won't be any output if error occurs.</dd>
</dl>

## Stop Watching Location
Stop watching location by the given `Handle`.

This node is usually used along side a `Trigger` node from Utilities,
to allow another stream to control when to output the `Handle` to this node.

<dl>
  <dt>(Input) Handle</dt>
  <dd>Should be the value of `Handle` output from the `Watch Location Changes` node.</dd>
</dl>

