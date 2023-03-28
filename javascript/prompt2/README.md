# Prompt 2 - Variables

# Overview
You can declare a variable in javascript using `var`, `const`, and `let`. To avoid confusion, lets only use `let`. Once you are well-versed in coding with javascript, you will learn when to use `const` and `var` properly.
```
// For this drill

// BAD
const foo = 1
var bar = 2

// GOOD
let foo = 1
let bar = 2
```

## what are variables
Variables are aliases used to store values. It has many uses such as reducing human-errors and holding state.
```
// example for reducing human errors
function main() {
  // error-prone
  console.log("==========")
  console.log("=========") // oh no, its missing a '='

  // not error-prone
  let bar = "=========="
  console.log(bar)
  console.log(bar) // we are 100% sure that it will print the appropriate amount of '='
}

main()
```

```
// example for holding state
function main() {
  let answer = 0;

  answer = answer + 300; // 300
  answer = answer / 10;  // 30
  answer = answer - 20;  // 10

  console.log(answer)    // outputs 10
}

main()
```

## what is a variable's scope?
The scope of a variable defines when a variable is available to use / when it exists.
```
let GLOBAL_VAR = 0 // exists everywhere. all caps is a typical convention

function main() {
  // BAD
  console.log(foo) // can't use something that doesn't exist buddy
  let foo = 1

  // GOOD
  let bar = 2
  console.log(bar)

  // More complex...
  if (true) {
    let buzz = 3        // buzz only exists within the SCOPE of the if-block
    console.log(buzz)   // GOOD
    console.log(foo)    // GOOD - foo is inherited from the parent scope
    
    console.log(GLOBAL_VAR) // GOOD - inherited from parent scope (in this case, it was created before everything else on line 1)
  }
  console.log(buzz)     // BAD - buzz is out of scope / does not exist outside the if-block 
}

main()
```

## what is a variable type?
A variable type describes the _type_ of value a variable holds
```
let a = 1      // the variable type is a "Number"
let b = "foo"  // the variable type is a "String"
let c = []     // the variable type is an "Array"
let d = {}     // the variable type is an "Object"
```

The types listed above are considered "primitive" types or types that are built-in to the language. We can talk about non-primitive, or custom, types in future drills.
In the future, I'll further explain the `Array` and `Object` primitive types.

# Drills
## ASCII Art with Variables
In ascii.js, recreate prompt1's envelope ascii art using at most 6 variables
```
+---------------------------------------------------------+
|                                                    #### |
|                                                    #### |
|                                                    #### |
|                                                         |
|                                                         |
|                              Bill Gates                 |
|                              1 Microsoft Way            |
|                              Redmond, WA 98104          |
|                                                         |
+---------------------------------------------------------+
```

## Variable Scope
Fix `variable-scope.js` by only changing `CHANGE_ME` so that it runs properly. The output should be the following.
```
$ node variable-scope.js
+-------------+
+-------------+
  ----  
  ----  
+-------------+
    ++    
  ----  
+-------------+
+-------------+
```
