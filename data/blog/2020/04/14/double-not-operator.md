---
path: "/javascript-double-not-operator"
title: "JavaScript: Double Not Operator?"
date: "2020-04-14"
---

Here's a little JavaScript tidbit I learned about recently.

The `!` operator is a familiar face in the JavaScript landscape, showing up when we need to negate a value.

```javascript
let thing = true
thing = !thing
thing === false // true
```

Here we take a Boolean value (`true`) and invert it to the opposite value (`false`).

This also works with non-Boolean values as well, since all values in JavaScript are either [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) or [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

```javascript
let thing = "This string is truthy!"
thing = !thing
thing === false // true
```

Here we can see how the `!` operator _casts_ the value from a string value (truthy) to it's opposite Boolean value `false`. The same conversion happens when we use the `!` operator on any value in JavaScript. If the value is already truthy it is cast to `false`, and vice versa.

It follows then that `!!` just performs this inversion twice.

```javascript
let thing = "This string is truthy!"
thing = !!thing
thing === true // true
```

This is really just a shorter way to cast a value to it's Boolean counterpart. If a value is already falsy, using `!!` will result in the value being cast to `false`.

We could just as well do this for the same result:

```javascript
let thing = Boolean("This string is truthy!")
thing === true // true
```

What's the difference? As far as I can tell, there is none!

Although `!!` is more succinct, the argument could be made that it is more confusing syntactically than `Boolean(value)`.
