# Prompt 4 - Loops
# Overview
Loops allow a block of code to run multiple times.
```javascript
// sample.js
function main() {
  // Without loops
  console.log("hi")
  console.log("hi")
  console.log("hi")
  console.log("hi")
  console.log("hi")

  // With loops
  for (let i = 0; i < 5; i++) {
    console.log("hi") // runs 5 times
  }
}

main()
```

There are 3 types of loops: `while`-loop, `for`-loop and `do-while`-loop. When to use them is up to you.

## `while` loop
```javascript
while(_expression_) {
  // code here runs "while the _expression_ returns true"
}

// code here will finally run when the _expression_ returns false
```

```javascript
// while-sample.js
function main() {
  let i = 0
  while (i < 5) {
    console.log("hi")
    i++              // shortcut for i = i + 1
  }

  console.log("Alright, i said hi 5 times")
}

main()
```

## `for`-loop
```javascript
for (_create variable_; _expression_; _increment or decrement variable_) {
  // code while the _expression_ is true
}

// code when the _expression is false

// Another way to write this loop through while-loop is
_create variable_
while(_expression_) {
  // code while the _expression_ is true
}
// code when the _expression is false
```

```javascript
// for-sample.js
function main() {
  console.log("Count down:")
  for (let i = 5; i > 0; i--) {
    console.log(i)
  }
  console.log("BLAST OFF")

  // how would you re-write this as a while loop?
}

main()
```


## `do-while`-loop
The biggest difference with the `do-while`-loop is the fact that the block of code is guaranteed to run at least once.
```javascript
do {
 // code to run
} while (_expression_)

// another way to write this loop through while-loop is
while(true) {
  // code to run

  if (_expression_) {
    break              // special key-word to get out of a loop right away
  }
}
```

```javascript
// do-while-sample.js
function main() {
  let i = 10
  do {
    console.log(i)
  } while (i == 0)

  // how would you write this with a while-loop instead?
}

main()
```

# Drills
## Count to 10
In `1-to-10.js` Count from 1 to 10 three times using the three types of loops
```
$ node 1-to-10.js
1
2
3
4
5
6
7
8
9
10
1
2
...
```

## Count evenly to 100
In `1-to-100-even.js`, count to 100 while only outputting even numbers
```
$ node 1-to-100-even.js
2
4
6
...
100
```

## Count oddly to 101
In `1-to-101-odd.js`, count to 101 while only outputting odd numbers
```
$ node 1-to-101-odd.js
1
3
5
...
101
```

## ASCII Art
In `ascii.js`, create the following art using loops.
```
#
##
###
####
#####
####
###
##
#
```
