'use strict';

const fortune = require('fortune-teller').fortune;

setInterval(() => {
  console.log(fortune());
}, 5000);
