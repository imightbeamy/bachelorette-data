var Xray = require('x-ray');

var BACHELORETTE_ROOT = 'http://abc.go.com/shows/the-bachelorette/cast'
var BACHELOR_ROOT = 'http://abc.go.com/shows/the-bachelor/cast'

var x = Xray({
  filters: {
    trim: value =>
      typeof value === 'string' ? value.trim() : value,
    removelabel: value =>
      typeof value === 'string' ? value.replace(/.*:/, '').trim() : value,
    cleanheight: value =>
      typeof value === 'string' ? value.replace(/\'\'/, '"').trim() : value,
    removequestion: value =>
      typeof value === 'string' ? value.replace(/.*\?/, '').trim() : value,
  }
});

x(BACHELOR_ROOT, '.tile-content-overlay', [{
  name: '.title | trim',
  biolink: '.details-link@href',
  headshot: 'img@src',
  role: '.host-type | trim',
  bio: x('.details-link@href', {
    headshot: '.m-person img@src',
    age:        'p:contains("Age:")        | removelabel',
    occupation: 'p:contains("Occupation:") | removelabel',
    height:     'p:contains("Height:")     | removelabel | cleanheight',
    tattoos:    'p:contains("Tattoos:")    | removelabel',
    questions: x('.m-person-bio p:contains("?")', [{
      question: 'strong',
      answer: '| removequestion',
    }])
  }),
}])
.write('data/bachelor/s22/cast.json')
