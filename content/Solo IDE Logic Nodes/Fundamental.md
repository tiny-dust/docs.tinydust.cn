Fundamental nodes are the most basic building blocks of the Logic.
All other nodes are built upon these fundamental nodes.

It is intended to be used by **advanced users**.
They are **low level**, and you should not use them most of the time.

## Lift
Lift the formula to a node. It does stateless calculation.

The formula does some transformation on the node inputs,
and the result of the formula is sent to the output of the node.

<dl>
  <dt>Synchronicity</dt>
  <dd>sync.</dd>

  <dt>Inputs</dt>
  <dd>There can be 1 to 26 inputs, named as `a`, `b`, `c`, ..., `z`.</dd>

  <dt>Outputs</dt>
  <dd>1 output for the result.</dd>

  <dt>Formula</dt>
  <dd>A JavaScript expression that calculates some value. The formula
  can use variable `a` to `z` to refer to the values of the inputs.
  The formula can use the special variable `nothing` so that nothing
  will be outputted, which is useful for implementing Filters.</dd>
</dl>

## Fold
Fold all past data into one result. This is a calculation with a state.

The formula does some transformation on the node input and the previous
output of the node, and the result of the formula is sent to the output
of the node. For the first invocation of the formula,
the `Initial Value` is used as “previous output of the node”.

The ability of using the previous output is important, as it means
you can have a state.

<dl>
  <dt>Synchronicity</dt>
  <dd>sync.</dd>

  <dt>1 Input</dt>
  <dd>`a`: use it as you like in the formula.</dd>

  <dt>1 Output</dt>
  <dd>Result of the formula.</dd>

  <dt>Formula</dt>
  <dd>A JavaScript expression that calculates some value. The formula
  can use variable `a` to refer to the value of the input. It can also
  use the implicit variable `old` for previous output. The formula can
  also use the special variable `nothing` so that nothing
  will be outputted, but why would you do that?.</dd>
</dl>

## Async
Continuous passing style (CPS) calculation. The road to the outside world.

The formula can invoke asynchronous operation (AJAX, setTimeout, ...),
and call a callback to pass the result to output.

The callback may be invoked multiple times. But it **cannot be invoked
immediately** (otherwise it's a synchronous operation).

Because of the nature of asynchronous operation, when new values arrives the node,
the formula will be invoked, and a new callback function is given to it,
making the previous callback function a no-op.

For example, if you do AJAX in the formula and your network is slow,
when second request arrives the node before the first AJAX returning its result,
you will only receive the result of the second AJAX.

<dl>
  <dt>Synchronicity</dt>
  <dd>async.</dd>

  <dt>1 Input</dt>
  <dd>`a`: use it as you like in the formula.</dd>

  <dt>1 Output</dt>
  <dd>Result passed into the callback.</dd>

  <dt>Formula</dt>
  <dd>A JavaScript expression that invokes some asynchronous operation.
  The formula can use variable `a` to refer to the value of the input.
  It should use the implicit function `next` as the callback to
  pass the result. The `next` function does not rely on `this` so you can
  mess around the context.</dd>
</dl>

# Summary of Differences

**Lift** nodes have multiple inputs.
It outputs the result of the formula,
or nothing if the formula returns `nothing`.

**Fold** nodes have 1 input but can access its previous output
(the result of previous invocation).
It outputs the result of the formula,
or nothing if the formula returns `nothing`.

**Async** nodes have 1 input but can access a callback function
which can be invoked to pass in the result.
It outputs what is passed into the callback function,
or nothing if you don't call the callback.

