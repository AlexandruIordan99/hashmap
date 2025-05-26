const {HashMap} = require("./hashmap.js");

const test = new HashMap();

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

console.log(test.get('apple'));       // 'red'
console.log(test.has('banana'));      // true
console.log(test.keys());             // list of all keys
console.log(test.values());           // list of all values
console.log(test.entries());          // list of all [key, value] pairs
console.log(test.length());           // number of items in the map