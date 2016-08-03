'use strict';

const moment = require('moment');

let time = moment.duration(0);
setInterval(() => {
  time.add(1, 'second');
  console.log(`Working for ${time.days()} days,`
    + ` ${time.hours()} hours,`
    + ` ${time.minutes()} minutes`
    + ` and ${time.seconds()} seconds.`);
}, 1000);
