
<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
# JS Learner Forms &mdash; Second Form #
#### The Explanation ####

You will be working with solutions to the problems presented in the [First Form](./FIRST-FORM.md) and refactoring these provided solutions into different shapes.

You can also look at [JS Learner Forms documentation](../FORMS.md) for other forms.

You will be working in the [jsforms-source/2_second-form.js](../jsforms-source/2_second-form.js) file.


## Table Of Contents ##

- [Section 1: Greeter](#user-content-greeter)
- [Section 2: Sum](#user-content-sum)
- [Section 3: Square All](#user-content-square-all)
- [Section 4: Build Vector](#user-content-build-vector)
- [Section 5: Get Vectors Shorter Than](#user-content-get-vectors-shorter-than)
- [Section 6: The Other JS Learner Forms](#user-content-the-other-js-learner-forms)

## Greeter ##

Let us change the `greet` function.

### Refactoring steps ###

Lets look at the steps in refactoring the `greet` function.

#### It is refactored to remove the unnecessary else ####

Modify the `greet` function to remove the else statement.

<details><summary>Hints</summary>

Because of the `return greeting + '!';` in the first part of the `if` statement you can safely delete `else` statement and the curly brackets (`{`, `}`).

<details><summary>Code</summary>

**Example**

```javascript
    function greet(greeting) {
        if (greeting === undefined) {
            return ?;
        }

        return greeting + '!';
    }
```

</details>

</details>

#### It is refactored to remove if and replace with a ternary expression ####

Because both paths of the function return a value, you can change the shape of the code from an `if` `return` to a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

<details><summary>Hints</summary>

A ternary operator has the following form

```javascript
(conditional_expression) ? (truthy_result) : (falsy_result) // parenthesis are optional
```

<details><summary>Code</summary>

**Example**

```javascript
    function greet(greeting) {
        return greeting === undefined ? _something_ : _other_thing_;
    }
```

</details>

</details>

#### It is refactored to use `typeof` comparison to `string` ####

You will now modify the `greet` function to remove the `greeting === undefined` comparison and instead use the [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator to prove whether or not what was passed in was a string.

<details><summary>Hints</summary>

The `typeof` operator returns a string with the name of the type. Maybe you can use it in the conditional part of the ternary operator.

<details><summary>Code</summary>

**Example**

```javascript
    function greet(greeting) {
        return typeof(_what_) === 'string' ? _something_ : _other_thing_;
    }
```

</details>

</details>
    

## Sum ##

You are going to refactor and change the shape of the `sum` method.

### Refactoring steps ###

These are the steps you will use to change the shape of the `sum` method, thereby changing how it does its work, while not changing the work it does.

#### It has an add function ####

Now create a function called `add` that takes two number and adds them. You are _not_ exporting this function, it is part of your refactoring of the `sum` function.

<details><summary>Hints</summary>

Return the values after using the `+` operator.

<details><summary>Code</summary>

```javascript
    function add(?, ?) {
        return ? + ?;
    }
```

</details>

</details>

#### It is refactored to replace += with a call to the add function ####

Modify the `sum` method to use the new `add` method above instead of the `+=` operator.

<details><summary>Hints</summary>

The `+=` operator is equivalent to setting a value to itself plus the other value.

`a += b` <==> `a = a + b`

<details><summary>Code</summary>

```javascript
    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result = add(?, ?);
        }

        return result;
    }
```

</details>

</details>

#### It is refactored to replace for loop with `nums.forEach` ####

Now modify the `sum` method to remove the `for` loop, and use the [`Array.prototype.forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method provided on nums.

<details><summary>Hints</summary>

`values.forEach(fn)` will call the `fn` function on each item in the collection `values`. You can use an anonymous function in place of `fn` as well as a named function. The way the call would look if you used an anonymous function to log each value would be `values.forEach(function(value){ console.log(value); })`.

<details><summary>Code</summary>

```javascript
    function sum(nums) {
        let result = 0;

        ?.forEach(function(?) {
            result = add(result, ?);
        });

        return result;
    }
```

</details>

</details>

#### It is refactored to replace the function expression with an arrow function ####

Now modify the `sum` function to replace the function expression with an [arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

<details><summary>Hints</summary>

An arrow function expression to log a value to the console looks like `value => console.log(value)`.

<details><summary>Code</summary>

```javascript
    function sum(nums) {
        let result = 0;

        ?.forEach(? => result = add(result, ?));

        return result;
    }
```

</details>

</details>
    

## Square All ##

You will now refactor and change the shape of the `squareAll` method.

### Refactoring steps ###

These are the steps you will take in changing the shape of the `squareAll` method, to ensure you do not change its behavior.

#### It is refactored to replace for loop with `nums.map` ####

The [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function allows you to perform a function on each member of an array and capture the result. Use this method instead of the given for loop.

<details><summary>Hints</summary>

The `Array.prototype.map` allows you to transform all values in an array such that if you wanted to get the square root of all values in an array it would look like `values.map(value => Math.sqrt(value))`. Both of these return a new array where each value in the array is a square root of a value in the original.

<details><summary>Code</summary>

**Example 1**

```javascript
    function squareAll(nums) {
        let result = ?.map(? => square(?));
        return result;
    }
```

**Example 2**

```javascript
    function squareAll(nums) {
        var result = ?.map(function (?) { return square(?); });
        return result;
    }
```

</details>

</details>

#### It is refactored to remove function wrapping `square` ####

Now modify the `squareAll` function to simplify the function expression or the arrow function expression.

<details><summary>Hints</summary>

If you were to log all items in an array to the console, you don't need a function expression. Instead you could just pass the log method like so `values.forEach(console.log)`.

<details><summary>Code</summary>

**Example**

```javascript
    function squareAll(nums) {
        let result = ?.map(square);
        return result;
    }
```

</details>

</details>

#### It is refactored to return result of map operation without assigning output to result ####

Now modify the `squareAll` function to remove the unnecessary `result` variable.

<details><summary>Hints</summary>

Instead of an assignment, maybe just return the result of map.

<details><summary>Code</summary>

```javascript
    function squareAll(nums) {
        return ?.map(square);
    }
```

</details>

</details>
    

## Build Vector ##

Now you will refactor the `buildVector` function changing its shape.

### Refactoring steps ###

These are the steps you will use to change the shape of the `buildVector` function without changing its behavior.

#### It has a refactoring in magnitude function to replace vector value with `vector.valueOf()` ####

Now modify the `magnitude` function by not passing the vector directly but passing the result of the `valueOf` method on vector. Currently the `valueOf` function just returns the original array. However this will make space for later changes that will happen to the `buildVector` function.

<details><summary>Hints</summary>

Just add a `.valueOf()` call after the vector in the call to `sumOfSquares`.

<details><summary>Code</summary>

**Example**

```javascript
    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(?.valueOf());
        return squareRoot(squaredMagnitude);
    }
```

</details>

</details>

#### It contains a constructor for an object called Vector ####

Now you will create a constructor for an object called `Vector`. You are not yet exporting that constructor. This constructor can just be an empty function.

<details><summary>Hints</summary>

You will not be using JavaScripts class objects. Instead work from the original way to build a constructor as a specially named function.

<details><summary>Code</summary>

**Example**

```javascript
    Function Vector() {
    }
```

</details>

</details>

#### It accepts a parameter `points` into Vector constructor ####

Modify the `Vector` function to take a parameter called points. There is no need to do anything with this parameter yet.

<details><summary>Hints</summary>

The `Vector` constructor is just a function. All functions can have a name representing a parameter between the parenthesis.

<details><summary>Code</summary>

**Example**

```javascript
    Function Vector(?) {
    }
```

</details>

</details>

#### It assigns `points` variable to `this.points` in `Vector` constructor ####

Modify the `Vector` constructor to save the `points` parameter.

<details><summary>Hints</summary>

Remember in JavaScript, you do not have to predefine member variables before you set them.

<details><summary>Code</summary>

**Example**

```javascript
    Function Vector(?) {
        this.? = ?;
    }
```

</details>

</details>

#### It overrides the `valueOf` function on the Vector prototype ####

Now you will need to override the internal `valueOf` function on `Vector`. Remember that `valueOf` comes from object and by default just returns the object. You will now change the behavior of this function to return a copy of its internal points.

<details><summary>Hints</summary>

The way to override an internal function in JavaScript without the use of the `class` keyword is to change its prototype. So if you had an `Animal` object prototype for a `Human` constructor you could override the `say` method on `Human` like so: `Human.prototype.say = function () {}`.

<details><summary>Code</summary>

**Example**

```javascript
    Vector.prototype.? = function () {
        return this.points.slice();
    };
```

</details>

</details>

#### It overrides the `toString` function on the `Vector` prototype ####

Now you will need to override the internal `toString` function on `Vector`. Remember what you learned above.

<details><summary>Hints</summary>

The way to override an internal function in JavaScript without the use of the `class` keyword is to change its prototype. So if you had an `Animal` object prototype for a `Human` constructor you could override the `say` method on `Human` like so: `Human.prototype.say = function () {}`.

<details><summary>Code</summary>

**Example**

```javascript
    Vector.prototype.? = function () {
    };
```

</details>

</details>

#### It should return a vector where `toString` returns a vector string ####

You will modify the overridden `toString` method on `Vector` such that:

> given `new Vector([1, 2, 3]);`
>
> the `toString` method should return
>
> <1,2,3>

<details><summary>Hints</summary>

You will need to use the internal `points` value.

You can use the [`Array.prototype.forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method on array to do this but the [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method will be easier.

<details><summary>Code</summary>

**Example 1 (`forEach`)**

```javascript
    Vector.prototype.toString = function () {
        let result = "";

        this.?.forEach(point => {
            if (0 < result.length) {
                result += ',';
            }

            result += point;
        });

        return result;
    };
```

**Example 2 (`reduce`)**

```javascript
    Vector.prototype.toString = function() {
        return this.?.reduce((previous, current) => previous + ',' + current);
    }
```

</details>

</details>

#### It returns a new Vector object instead of an array ####

You will now modify the `buildVector` function to return a new `Vector` instead of an array of values.

<details><summary>Hints</summary>

Remember to use the `new` keyword in your return value.

<details><summary>Code</summary>

**Example**

```javascript
    function buildVector(points) {
        return new ?(points);
    }
```

</details>

</details>
    

## Get Vectors Shorter Than ##

You will now modify the `getVectorsShorterThan` function changing its shape without changing its behavior.

### Refactoring steps ###

This is how you will modify the `getVectorsShorterThan` function such that it ensures you do not change its external behavior.

1. Create new function `isMagnitudeShorterThanLength` which checks if the magnitude of a vector is shorter than the vector length provided
2. Replace for loop with `vectors.filter(isMagnitudeShorterThanLength)` and assign output to results
3. Return results directly

_**KEEP THE TESTS PASSING!**_

#### It has a function called `isMagnitudeShorterThanLength` ####

Create a function called `isMagnitudeShorterThanLength`. This can be an empty function right now. You are also _not_ exporting that function.

<details><summary>Hints</summary>

Create a function that calculates the magnitude and then just return the value of the comparison.

<details><summary>Code</summary>

**Example**

```javascript
    function isMagnitudeShorterThanLength() {
    }
```

</details>

</details>

#### It has `vector` and `length` as parameters of `isMagnitudeShorterThanLength` ####

You will modify the `isMagnitudeShorterThanLength` function to take the two parameters `vector` and `length`. You will also modify the function to return a [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) `true` if the vector's magnitude is less then the provided length and false if it is equal to or greater.

<details><summary>Hints</summary>

You will need to calculate the magnitude (there is a function to help with this) and then return the comparison to the length.

<details><summary>Code</summary>

**Example**

```javascript
    function isMagnitudeShorterThanLength(?, ?) {
        let currentMagnitude = magnitude(?);
        return currentMagnitude < ?;
    }
```

</details>

</details>

#### It is refactored to use `vectors.filter()` instead of for loop ####

You will modify the `getVectorsShorterThan` function to use the internal [`Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) instead of recreating the functionality in a for loop.

<details><summary>Hints</summary>

The filter method takes  a function as a parameter that returns a Boolean. If that boolean returns true, then that item is added to the return value. If the function returns false then the value is not added to the return set.

<details><summary>Code</summary>

**Example**

```javascript
    function getVectorsShorterThan(length, vectors) {
        let result = ?.filter(isMagnitudeShorterThanLength);

        return result;
    }
```

</details>

</details>

#### It does not assign filter to results, it just returns directly ####

Now modify the `getVectorsShorterThan` not to use the unnecessary variable `result`.

<details><summary>Hint</summary>

Can you just return the result of the `filter` method?

<details><summary>Code</summary>

**Example**

```javascript
    function getVectorsShorterThan(length, vectors) {
        return ?.filter(isMagnitudeShorterThanLength);
    }
```

</details>

</details>
    

## The Other JS Learner Forms ##

[JS Learner Forms documentation](../FORMS.md)
    

<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
    