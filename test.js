const myArray = [];
for (let i = 0; i < 10; i++) {
  myArray.push(Math.floor(Math.random() * 100));
}

function myFunction() {
  let sum = 0;
  for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
  }
  return sum;
}

const myObject = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'e227d44f-8b4f-47fb-b381-07870d12cc0a', 'hiking'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

for (let key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}

const myString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl vel nisi bibendum luctus.';

const myRegex = /[aeiou]/g;
const vowels = myString.match(myRegex);

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

myPromise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});

class MyClass {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

const myInstance = new MyClass('World');
myInstance.sayHello();

const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

const mySet = new Set();
mySet.add('value1');
mySet.add('value2');

for (let value of mySet) {
  console.log(value);
}

const myWeakMap = new WeakMap();
const myWeakObject = {};

myWeakMap.set(myWeakObject, 'e227d44f-8b4f-47fb-b381-07870d12cc0a');

console.log(myWeakMap.get(myWeakObject));

const myWeakSet = new WeakSet();
const myWeakObject2 = {};

myWeakSet.add(myWeakObject2);

console.log(myWeakSet.has(myWeakObject2));

const mySymbol = Symbol('mySymbol');

const myObject2 = {
  [mySymbol]: 'value'
};

console.log(myObject2[mySymbol]);

const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
};

for (let value of myGenerator()) {
  console.log(value);
}

const myAsyncFunction = async function () {
  const result = await myPromise;
  console.log(result);
};

myAsyncFunction();
