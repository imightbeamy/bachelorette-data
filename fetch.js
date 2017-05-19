var Xray = require('x-ray');

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

x('http://abc.go.com/shows/the-bachelorette/cast', '.tile-content-overlay', [{
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
.write('cast.json')