const { inherits } = require("@babel/types");
const { arrayBuffer } = require("stream/consumers");

let x;
if (y >= 0) {
    x = y;
} else {
    x = -y;
}

var x = y >= 0 ? y : -y;

myFunction(y >= 0 ? y : -y);

foo(bar(7, 1));

// Control flow statements and blocks
if (obj !== null) obj.foo();

while (x > 0) x--;

if (obj !== null) {
    obj.foo();
}

while (x > 0) {
    x--;
}

// Semicolons
var x = 3 * 7;
var f = function () { };

// Comments
x++; // single-line comment

/**
 * This is 
 * a multi-line
 * comment.
 */

// Variables and assignment
var foo; // declare variable `foo`

// Assignment
var foo = 6;

foo = 4; // change variable `foo`

// Compound assignemnt operators
x += 1;
x = x + 1;

// Identifies and variable names
// Reserved words
// arguments break case catch class const continue
// debugger default delete do else enum eval export
// extends false finally for function if implements
// import in instanceof interface let new null package
// private protected public return static super switch
// this throw true typeof var void while with
// yield

// Values
var str = 'abc';
str.length; // 3

'abc'.length;

var obj = {};
obj.foo = 123;
console.log(obj.foo);

'hello'.toUpperCase() // 'HELLO'


// Primitive values versus objects
var obj1 = {}; // an empty object
var obj2 = {}; // another empty object
obj1 === obj2 // false
obj1 === obj1 // true

// Objects
// Plain object
const objA = {
    firstName: 'Jane',
    lastName: 'Doe',
};
// Arrays
const aRR = [ 'apple', 'banana', 'cherry' ];
// Regular expressions
/^a+b+$/
// Constructors
// Set up instance data
function Point(x, y) {
    this.x = x;
    this.y = y;
}
// Methods
Point.prototype.dist = function () {
    return Math.sqrt(this.x*this.x + this.y*this.y);
};

// Undefined and null
// undefined and null

// Wrapper types


// Categorizing values via typeof and instanceof
// typeof and instanceof

// Strings
'Did she say "Hello"?'
"Did she say \"Hello\"?"
// Concatenation
let str = '';
str += 'Multiple';
str += 'pieces';
str += 'are concatenated.';
console.log(str);
// String methods
'abc'.slice(1) // copy a substring
'abc'.slice(1, 2)
'\t xyz '.trim() // trim whitespace

// Statements
// Conditional
if (myvar === 0) {
    // then
}

if (myvar === 0) {
    // then
}

if (myvar === 0) {
    // then
} else {
    // else
}

if (myvar === 0) {
    // then
} else if (myvar === 1) {
    // else-if
} else if (myvar === 2) {
    // else-if
} else {
    // else
}

switch (fruit) {
    case 'banana':
        // ...
        break;
    case 'apple':
        // ...
         break;
    default: // all other cases
        // ...
}


// Loops
for (var i = 0; i < arrayBuffer.length; i++) {
    console.log(arr[i]);
}

var i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

do {
    // ...
} while (condition);

function add(param1, param2) {
    return param1 + param2;
}

function foo() {
    bar(); // OK, bar is hoisted
    function bar() {
        // ...
    }
}

// Too many or too few arguments
function f(x, y) {
    console.log(x, y);
    console.log(toArray(arguments));
}


// Optional parameters
function pair (x, y) {
    x = x || 0; // (*)
    y = y || 0;
    return [ x, y ];
}


// Enforcing an arity
function pair (x, y) {
    if (arguments.length !== 2) {
        // throw new Error('Need exactly 2 arguments');
    }
}

// Converting arguments to an array
function toArray(arrayLikeObject) {
    return [].slice.call(arrayLikeObject);
}

// Has a parameter been passed?
function hasParameter(param) {
    if (param) {
        return 'yes';
    } else {
        return 'no';
    }
}

// Default values for parameters
function add(x, y) {
    if (!x) x = 0;
    if (!y) y = 0;
    return x + y;
}

// An arbitrary number of parameters
function format(pattern) {
    for(var i = 1; i < arguments.length; i++) {
        pattern = pattern.replace('%s', arguments[i]);
    }
    return pattern;
}

// Enforcing a certain  number of parameters
function add(x, y) {
    if (arguments.length > 2) {
        throw new Error('Need at most 2 parameters');
    }
    return x + y;
}

// Implicit conversion of values
// 1. Implicity conversion to boolean: "truthy" and "falsy" values


// Exception handling
function throwException() {
    throw new Error('Problem!');
}

try {
    throwException();
} catch (e) {
    console.log(e); // Error: Problem!
    console.log(e.stack); // non-standard, but often supported
}

// Strict mode
function functionInStrictMode() {
    'use strict';
}
// Benefits of strict mode
// Explicit errors
function f() {
    'abc'.length = 5;
}

function f_strict() {
    'use strict';
    'abc'.length = 5;
}

// this is non-method functions
function f_strict() {
    'use strict';
    return this;
}
console.log(f_strict() === undefined); // true

// No auto-created global variables
function f() { foo = 5 }
function f_strict { 'use strict'; foo2 = 4; }


// Variable scoping and closures
// variables are function-scoped
function foo() {
    let x = -3;
    if (x < 0) { // (*)
        var tmp = -x;
        ...
    }
    console.log(tmp); // 3
}

// variables are hoisted
function foo() {
    console.log(tmp); // undefined
    if (false) {
        let tmp = 3; // (*)
    }
}

// closures
function createIncrementor(start) {
    return function () { // (*)
        return start++;
    }
}

// IIFE: Simulating block scoping
(function () { // open block
    var tmp = ...; // not a global variable
}()); // close block

// Inadvertent sharing via closures
var result = [];
for (var i = 0; i < 5; i++ {
    result.push(function () { return i }); // (*)
}
console.log(result[1]()); // 5 (not 1)
console.log(result[3]()); // 5 (not 3)

for (var i = 0; i < 5; i++) {
    (function (i2) {
        result.push(function () { return i2 });
    }(i));
}

// Variale declarations: three rules you can break
// 1. Don't put a var statement inside a block
// Unconventional wisdom
function foo(x, y) {
    if (x > y) {
        var tmp = x;
        x = y;
        y = tmp;
    }
    ...
}

// Conventional wisdom
function foo(x, y) {
    var tmp;
    if (x > y) {
        tmp = x;
        x = y;
        y = tmp;
    }
    ...
}

function f(a, b) {
    if (a < 0) {
        var tmp;
        console.log(tmp); // undefined
        tmp = 3;
        ...
    }
    if (b < 0) {
        var tmp; // declared again
        console.log(tmp); // 3
        ...
    }
}
f(-1, -1);

// 2. Don't put a var statement inside a loop
// Unconventional wisdom
for (var i = 0; i < 10000; i++) {
    var foo = 1;
}

// Conventional wisdom
var foo;
for (var i = 0; i < 10000; i++) {
    foo = 1;
}

// 3. Use a single var statement per function
// Conventional wisdom
var foo = 1,
    bar = 2,
    baz = 3;

(function () {
    'use strict';
    var foo = 1
        bar = 2,
        baz = 3;
}());

var foo = 1;
var bar = 2;
var baz = 3;

// The scope of variables
function func(x) {
    console.log(tmp); // undefined
    if (x < 0) {
        var tmp = 100 - x; // (*)
    }
}

// using an IFFE
function func(x) {
    console.log(tmp); // ReferenceError: tmp is not defined
    if (x < 0) {
        (function () { // open IIFE 
            var tmp = 100 - x;
            ...
        }()); // close IIFE
    }
}

// Closures
function incrementFactory(start, step) {
    return function () { // (*)
        start += step;
        return start;
    }
}

// inadvertent sharing
var result = [];
for (var i = 0; i < 5; i++) {
    (function (i2) { // snapshot of i
        result.push(function () { return i2 }.bind(null, i));
    });
}
console.log(result[3]()); // 5 (not 3)


// A practical example
for(var col=0; col < board4.DIM_X; col++) {
    document.getElementById('columClick'+col)
        .addEventListener('click', function (col) {
            currentState.columnClick(col);
            event.preventDefault();
        }.bind(null, col));
}

Array.prototype.forEach.call(
    document.getElementByClassName('columnClick'),
    function (elem, col) { // (*)
        elem.addEventListener('click', function () {
            currentState.columnClick(col);
            event.preventDefault();
        });
    });


// Objects and inheritance
// Single objects
var jane = {
    name: 'Jane',

    describe: function () {
        'use strict';
        return 'Person named '+this.name;
    }
};

jane.name // 'Jane'
jane.name = 'John'; // set
jane.newProperty = 'abc'; // created automaticadlly
jane.describe() // call method
jane.name = 'Jane';
jane.describe()

'newProperty' in jane // true
'foo'  in jane // false

jane.newProperty !== undefined; // true
jane.foo !== undefined; // false

delete jane.newProperty; // true
'newProperty' in jane // false


// Arbitrary property keys
var obj = { 'not an identifier': 123 };
obj['not an identifier']
obj['not an identifier'] = 456;

var x = 'name';
jane[x];
jane['na'+'me']


// Extracting methods
var func = jane.describe;
func();

var func2 = jane.describe.bind(jane);
func2() // 'Person named Jane'


// Functions inside a method
var jane = {
    name: 'Jane',
    friends: [ 'Tarzan', 'Cheeta' ],
    logHiToFriends: function () {
        'use strict';
        this.friends.forEach(function (friend) {
            // `this` is undefined here
            console.log(that.name+' says hi to '+friend);
        })
    }
}

// Constructors: factories for objects
// JavaScript inheritance by example
// 1. Objects
var point = {
    x: 5,
    y: 2,
    dist: function () {
        return Math.sqrt((this.x*this.x) + (this.y*this.y));
    },
    toString: function () {
        return "("+this.x+", "+this.y+")";
    }
};


// Constructors
function Point(x, y) {
    this.x = x;
    this.y = y;
    this.dist = function() {
        return Math.sqrt((this.x*this.x)+(this.y*this.y))''
    };
    this.toString = function() {
        return "("+this.x+", "+this.y+)";
    }
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype = {
    dist: function () {
        return Math.sqrt((this.x*this.x) + (this.y*this.y));
    },
    toString: function () {
        return "("+this.x+", "+this.y+")";
    }
}

f.prototype.constructor === f

function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.dist = function () {
    return Math.sqrt((this.x*this.x) + (this.y*this.y));
};
Point.prototype.toString = function () {
    return "("+this.x+", "+this.y+")";
};



// Extending
function extend(target, source) {
    // Don't do this:
    for(var propName in source) {
        target[propName] = source[propName];
    }
    return target;
}

function extend(target, source) {
    for (var propName in sourcce) {
        // Is propName an own property of source?
        if (source.hasOwnProperty(propName)) {
            target[propName] = source[propName];
        }
    }
    return target;
}

function extend(target, source) {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for (var propName in source) {
        // Invoke hasOwnProperty() with this = source
        if (hasOwnProperty.call(source, propName)) {
            target[propName] = source[propName];
        }
    }
    return target;
}


function extend(target, source) {
    Object.getOwnPropertyNames(source)
    .forEach(function(propName) {
        Object.defineProperty(target, propName,
            Object.getOwnPropertyDescriptor(source, propName));
    });
    return target;
}

// Setting the prototype of an object
var proto = { bla: true };

var obj = Object.create(proto);
obj.foo = 123;
obj.bar = "abc";

if (Object.create === undefined) {
    Object.create = function (proto) {
        function Tmp() {
            Tp.prototype = proto;
            // New empty object whose prototype is proto
            return new Tmp();
        };
    }
}

var obj = Object.create(proto, {
    foo: { value: 123 },
    bar: { value: "abc" }
});

var obj = protoChain(proto, {
    foo: 123,
    bar: "abc"
});

protoChain(obj_0, obj_1, ..., obj_n-1, obj_n)

function protoChain() {
    if (arguments.length === 0) return null;
    var prev = arguments[0];
    for(var i = 1; i < arguments.length; i++) {
        // Create duplicate of arguments[i] with prototype prev
        prev = Object.create(prev);
        extend(prev, arguments[i]);
    }
    return prev;
}

// Subtyping
function ColorPoint(x, y, color) {
    Point.call(this, x, y);
    this.color = color;
}

// function ColorPoint: see above
extend(ColorPoint.prototype, Point.prototype);
ColorPoint.prototype.toString = function () {
    return this.color+" "+Point.prototype.toString.call(this);
};

// function ColorPoint: see above
ColorPoint.prototype = Object.create(Point.prototype);
ColorPoint.prototype.constructor = ColorPoint;
ColorPoint.prototype.toString = function () {
    return this.color+" "+Point.prototype.toString.call(this);
};

// function ColorPoint: see above
ColorPoint.prototype.toString = function () {
    return this.color+" "+Point.prototype.toString.call(this);
};
inherits(ColorPoint, Point);

function inherits(SubC, SuperC) {
    var subProto = Object.create(SuperC.prototype);
    // At the very least, we keep the "constructor" property
    // At most, we keep additions taht have already been made
    extend(subProto, SubC.prototype);
    SubC.prototype = subProto;
};


// Referring to super-properties
ColorPoint._super.toString.call(this);

subC._super = SuperC.prototype;

ColorPoint._super.constructor.call(this, x, y);

// final version
function ColorPoint(x, y, color) {
    ColorPoint._super.constructor.call(this, x, y);
    this.color = color;
}
ColorPoint.prototype.toString = function () {
    return this.color+" "+ColorPoint._super.toString.call(this);
};
inherits(ColorPoint, Point);



// Arrays
// Array literals
var arr = [ 'a', 'b', 'c', ];
arr[0]
arr.length = 2;
1 in arr // does arr have an element at index 1? (true)

// Array methods
arr.slice(1, 2) // copy elements
arr.push('x') // append an element
arr.pop() // remove last element
arr.shift() // remove first element
arr.unshift('x') // preprend an element
arr.indexOf('b') // find the index of an element
arr.join('-') // all elements in a single string

// Iterating over arrays
// forEach
['a', 'b', 'c'].forEach(
    function (elem, index) { // (*)
        console.log(index + '. ' + elem);
    });

// map
[1, 2, 3].map(function (x) { return x * x })


// Regular Expressions
/^abc$/
/[A-Za-z0-9]+/

// Method test()
/^a+b+$/.test('aaab')
/^a+b+$/.test('aaa')

// Method exec()
/a(b)a/.exec('_abbba_aba_')

// Method replace()
'<a> <bbb>'.replace(/<(.*?)>/g, '[$1')

// Math
Math.abs(-2)
Math.pow(3, 2) 
Math.max(2, -1, 5)
Math.round(1.9)
Math.cos(Math.PI)

