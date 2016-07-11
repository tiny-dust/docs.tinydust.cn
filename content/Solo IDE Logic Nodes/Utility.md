Utility nodes that are hard to categorize.

## Combine
Combine two streams into one. You can also call it “Time-Division Multiplexer”
where `a` has higher priority.

<dl>
  <dt>(Input) `a`</dt>
  <dd>Anything you like.</dd>

  <dt>(Input) `b`</dt>
  <dd>Anything you like.</dd>

  <dt>(Output) Result</dt>
  <dd>The value of either `a` or `b`. When they arrive at the same time,
  the value of `a` is outputted.</dd>
</dl>

## Throttle
Reduce the output firing rate by dropping too frequent inputs.
Output the last input in a particular time span.

That is, When anything arrives at the input, a timer will start.  No output
will be produced before the timer fires up. In the meanwhile, when anything
arrives at the input, the timer will be reset without firing up. Only when the
timer fires up, will there be the last input outputted.

<dl>
  <dt>(Attribute) Threshold (Milliseconds)</dt>
  <dd>The time span to prevent too frequent data.</dd>

  <dt>(Input) `a`</dt>
  <dd>Anything you like.</dd>

  <dt>(Output) Result</dt>
  <dd>The last `a` before the timer fires up.</dd>
</dl>

## Trigger
Output `Value` only when some thing arrives at `Trigger`.
You can also call it “Side-chain Edge Trigger”.

<dl>
  <dt>(Input) Value</dt>
  <dd>Anything you like.</dd>

  <dt>(Input) Trigger</dt>
  <dd>Anything you like to make the `Value` goes to the output.</dd>

  <dt>(Output) Value</dt>
  <dd>Output the last input `Value` when there are something coming to `Trigger`.
  Nothing will be outputted if nothing is coming to `Trigger`.</dd>
</dl>

## Countdown
A count down timer with 1 second precision.

Remaining time (in seconds) will be outputted constantly every second
until it reaches `0` and the `0` is outputted.

For example, you send `60` to the input of the node, it will then output
`60`, `59`, `58`, ..., `2`, `1`, `0` one at one second.

<dl>
  <dt>(Input) Time (Seconds)</dt>
  <dd>The remaining time to count down.
  It's undefined behavior to input anything less than `0`.</dd>

  <dt>(Output) Time Remaining</dt>
  <dd>The time remaining is outputted once per second.
  Nothing more will be outputted after `0` is outputted.</dd>
</dl>

