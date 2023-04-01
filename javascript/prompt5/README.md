# Prompt 5 - Arrays

# Overview
An `Array` is a primitive variable type that holds many values.
```javascript
let foo = []          // initialize array
console.log(foo)      // output: []

foo.push(1)           // Add value to the array
foo.push("fool")      // In javascript, we can add different variable type values in the same array
foo.push(321)
foo.push([])          // Yes, we can even add another array. But for your sanity, do this sparingly.

console.log(foo)      // output: [1, "fool", 321, []]

// We access the values in the array through `[_index_]` operator. 
// Example with foo
// Current value is: [1, "fool", 321, []]
//            index:  0      1,    2,  3

console.log(foo[0]) // output: 1
console.log(foo[1]) // output: "fool"
console.log(foo[2]) // output: 321
console.log(foo[3]) // output: []

// You can also rewrite the console.logs above
for (let i = 0; i < foo.length; i++) {
  console.log(foo[i])
}

// You can override values in an array too
console.log(foo[1]) // output: "fool"
foo[1] = 100
console.log(foo[1]) // output: 100
```

# Drills
## Average Grade
In `average.js`, create a program that gives you your average test grade
```
$ node average.js 100 94 81 20
73.75

$ node average.js 81 80 95 99 75 60
81.6666667
```
