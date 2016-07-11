Basic functional operations. Map, Reduce, Filter, things like that.

## Map
Transform the data that pass through the node.

<dl>
  <dt>(Input) `a`</dt>
  <dd>Can be used by Formula.</dd>

  <dt>(Output) Result</dt>
  <dd>The result of formula.</dd>

  <dt>(Attribute) Formula</dt>
  <dd>A JavaScript expression that calculates some value. The formula
  can use variable `a` to refer to the value of the input. The formula can
  also use the special variable `nothing` so that nothing
  will be outputted.<dd>

</dl>

## Filter
Conditionally output the data that pass through the node.

<dl>
  <dt>(Input) `a`</dt>
  <dd>Can be used by formula.</dd>

  <dt>(Output) Filtered Data</dt>
  <dd>Either the value of `a` or nothing, determined by the formula.</dd>

  <dt>(Attribute) Formula</dt>
  <dd>A JavaScript expression that calculates to booleans (`true` or `false`).
  The formula can use variable `a` to refer to the value of the input.
  If the formula results in `true`, the output will be the value of `a`;
  If the formula results in `false`, there will be no output produced;
  Otherwise the behavior is undefined.</dd>
</dl>

