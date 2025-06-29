// console.log("Hey Hello world!");

var slugify = require('slugify');

let a = slugify('some string');
console.log(a);

const b = slugify('some other str"£$"£%^ing', '_')
console.log(b);