const _ = require('lodash');
const data = require('./cast.json');

var first20ByAge = _(data)
  .filter(c => c.role == "Contestant")
  .map(c => ({ name: c.name, age: parseInt(c.bio.age) }))
  .sortBy(c => c.age)
  .take(20)
  .value();

console.log(first20ByAge);