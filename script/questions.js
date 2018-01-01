const _ = require('lodash');
const fs = require('fs');
const edit = require('edit-distance');

const data = require('../data').bachelor.s22
const normalize = require('./normalize');

// Edit cost functions.
const insert = () => 1;
const remove = () => 1;
const update = (a, b) => a !== b ? 1 : 0;


const result = {};

_(data)
  .filter(c => c.role == "Contestant")
  .flatMap(c => _.map(c.bio.questions, q => ({
    question: q.question,
    answer: q.answer,
    contestant: c.name,
  })))
  .forEach((question_data) => {
    const question = normalize(question_data.question)
    const distances = Object.keys(result).map((key) => {
      return { key, distance: edit.levenshtein(question, key, insert, remove, update).distance }
    }).sort((a, b) => a.distance - b.distance);

    const closest = distances[0]
    if ( closest && closest.distance < 10 && closest.distance > 0) {
      console.log(`Using '${closest.key}' for '${question}'`)
      console.log(closest);
    }
    const key = closest && closest.distance < 10 ? closest.key : question;
    if (key.length) {
      result[key] = result[key] || [];
      result[key].push(question_data);
    }
})

const final_result = Object.keys(result).map((question) => ({
    question: question,
    answers: result[question].filter(answer => answer.answer).map(answer => ({
      'answer': answer.answer,
      'contestant': answer.contestant,
    }))
  }))
 .filter(q => q.answers.length > 1)
 .sort((a, b) => b.answers.length - a.answers.length);

console.log(_.groupBy(final_result, q => q.answers.length));
// console.log(_(final_result).flatMap(q => q.answers).groupBy('contestant').value());
console.log(final_result);

fs.writeFile("questions.json",
  JSON.stringify(final_result, null, 2),
  () => console.log("done"))
