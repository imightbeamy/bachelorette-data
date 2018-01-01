const _ = require('lodash');
const fs = require('fs');
const data = require('../data').bachelor.s22

var result = _(data)
  .filter(c => c.role == "Contestant")
  .map(c => ({
    name: c.name,
    link: c.biolink,
    height: c.bio.height,
    occupation: c.bio.occupation,
    headshot: c.bio.headshot,
    questions: c.bio.questions.length,
  }))
  .keyBy(c => c.name)
  .value();

fs.writeFile("bios.json",
  JSON.stringify(result, null, 2),
  () => console.log("done"))
