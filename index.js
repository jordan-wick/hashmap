import Hashmap from "./hashmap.js";

const test = new Hashmap;

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

// console.log(test.has('ice cream')); // true
// console.log(test.has('hat')); // true
// console.log(test.has('zebra')); // false

// console.log(test.get('jacket')); // blue
// console.log(test.get('hat')); // black
// console.log(test.get('zebra')); // null

// console.log(test.remove('ice cream')); // true
// console.log(test.remove('lion')); // true
// console.log(test.remove('zebra')); // false

console.log(test.length()); // 12