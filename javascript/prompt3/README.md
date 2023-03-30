# Prompt 3 - Conditionals (if-statements)

# Overview
Conditionals provide a way for your program to behave differently.
```
// Example
function main() {
  let score = 51

  if (score > 50) {
    console.log("You pass!")
  } else {
    console.log("You fail!")
  }
}

main()
```

The general format is as follows:
```
if (_expression_) {
  // your code
}
```

The _expression_ should be something that returns a `Boolean` type. This variable type has the value of either `true` or `false`.
## if
```
// Beginner
if (true) {
  console.log("if is true")
}

// Intermediate
let foo = true
if (foo) {
  console.log("if is true")
}

// Advanced
let grade = 70

if (grade > 70) {
  console.log("you pass")
}
```
## if-else
```
// Beginner
if (true) {
  console.log("if is true")
} else {
  console.log("never getting here")
}

// Intermediate
let foo = true

if (foo) {
  console.log("foo is true")
} else {
  console.log("foo is false")
}

// Advanced
let grade = 70
if (grade < 50) {
  console.log("grade is less than 50")
} else {
  console.log("grade is greater than or equal to 50")
}
```
## if-else if-else
```
// First condition wins
let grade = 75

if (grade > 90) {
  console.log("A")
} else if (grade > 80) {
  console.log("B")
} else if (grade > 70) {
  console.log("C")        // This would be the output because its the first `true` expression
} else if (grade > 60) {
  console.log("D")
} else {
  console.log("F")
}
```

## Complex Expressions
We can make _expression_ more complicated by using the "or" and "and" operator; respectively, `||` and `&&`.
```
let bodyTemperature = 97.5

// Read: bodyTemperature is greater than or equal to 97 OR bodyTemperature is less than or equal to 99
if (bodyTemperature >= 97 || bodyTemperature <= 99) {
  console.log("Your body temparature is normal")
} else {
  console.log("Your body temperature is abnormal")
}
```

You can have as many _expressions_ as you want compounded by `||` or `&&`. With the "or" operator, `||`, the inner block runs if at least **one** of the _expression_ is `true`.
```
if (true || true || true) {
  console.log("I will print")
}
if (false || true || false) {
  console.log("I will print")
}
if (false || true || true) {
  console.log("I will print")
}

if (false || false || false) {
  console.log("I will not print")
}
```

With the "and" operator, `&&`, **all** _expressions_ must be `true` to run the inner block.
```
if (true && true && true) {
  console.log("I will print")
}

if (false || false || false) {
  console.log("I will not print")
}
if (false || false || true) {
  console.log("I will not print")
}
if (false || true || true) {
  console.log("I will not print")
}
```

# Drills
But first, some extra knowledge...
You can get the command line input using the following code. You don't have to understand what its doing yet.
```
// sample.js
function main() {
  let grade = process.argv.slice(2)[0]

  console.log(grade)
}

main()
```

The program above would have the following output:
```
$ node sample.js foo
foo

$ node sample.js
undefined

$ node sample.js bar foo bing bong
bar
```

## Odd or Even
In `odd-even.js`, create a program that takes in a `Number` then outputs "odd" or "even." You may want to google the modulus operator, `%`.
```
$ node odd-even.js 3
odd
$ node odd-even.js 2
even
```

## Reverse Grading
In `reverse-grading.js`, create a program that takes in a letter grade then outputs the minimum percentage to reach it.
```
$ node reverse-grading.js C
70%

$ node reverse-grading.js AW
Invalid input: 'AW'
```
