# Bachelorette Contestant Data

Data in [cast.json](/cast.json)!

Or use it via npm!
```
npm install bachelorette-data
```

# Example

```js
const _ = require('lodash');
const data = require('bachelorette-data'); // or require('./cast.json')

var first20ByAge = _(data)
  .filter(c => c.role == "Contestant")
  .map(c => ({ name: c.name, age: parseInt(c.bio.age) }))
  .sortBy(c => c.age)
  .take(20)
  .value();

console.log(first20ByAge);
```

```
[ { name: 'Anthony', age: 26 },
  { name: 'Dean', age: 26 },
  { name: 'Kyle', age: 26 },
  { name: 'Michael', age: 26 },
  { name: 'Mohit', age: 26 },
  { name: 'Adam', age: 27 },
  { name: 'Fred', age: 27 },
  { name: 'Alex', age: 28 },
  { name: 'Josiah', age: 28 },
  { name: 'Will', age: 28 },
  { name: 'Blake K.', age: 29 },
  { name: 'Brady', age: 29 },
  { name: 'Eric', age: 29 },
  { name: 'Grant', age: 29 },
  { name: 'Bryce', age: 30 },
  { name: 'DeMario', age: 30 },
  { name: 'Iggy', age: 30 },
  { name: 'Lee', age: 30 },
  { name: 'Lucas', age: 30 },
  { name: 'Rob', age: 30 } ]
```
