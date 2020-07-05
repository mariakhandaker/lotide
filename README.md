# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mariakhandaker/lotide`

**Require it:**

`const _ = require('@mariakhandaker/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: asserts that two values are equal
* `assertArraysEqual(...)`: asserts that two arrays are equal
* `assertObjectsEqual(...)`: asserts that two objects are equal
* `countLetters(...)`: counts how many instances of each letter occur in a string
* `countOnly(...)`: counts only instances of what you request it to
* `eqArrays(...)`: checks if two arrays are equal
* `eqObjects(...)`: checks if two objects are equal
* `findKey(...)`: find key in an object by looping through keys
* `findKeyByValue(...)`: find key in object by looping through values and returning key if value is found
* `head(...)`: find first element of array
* `letterPositions(...)`: finds indexes of each letter
* `map(...)`: applies a function onto an array
* `middle(...)`: find middle element(s) of an array
* `tail(...)`: find last element of an array
* `takeUntil(...)`: takes elements from array until callback
* `without(...)`: takes elements from array except for the ones specified
