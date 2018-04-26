'use strict';

const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28 },
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 }
];

for (let i = 0; i < months.length; i++) {
  console.log(months[i].name, 'has', months[i].days, 'days');
}

let daysinAyear = 0;
for (let i = 0; i < months.length; i++) {
    daysinAyear += months[i].days;
}

if (daysinAyear == 365) {
    console.log('Yep, it adds up to ' + daysinAyear);
} else {
    console.log('Oh no! It doesn\'t add up to 365!');
}
