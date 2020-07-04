const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Tom', 'John', 'Peter', 'Andrew', 'Jacob', 'George'];
const femaleNames = ['Agatha', 'Barbra', 'Carla', 'Bridget', 'Emma', 'Evelyn'];
const lastNames = ['Smith', 'Jones', 'Williams', 'Johnson', 'Davies', 'Taylor'];

function randomChoice(array) {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

const people = [];

for(let i = 1; i < 21; i++) {
  const peopleObject = {};
  peopleObject.gender = randomChoice(genders);

  if (peopleObject.gender === 'F') {
    peopleObject.name = randomChoice(femaleNames);
  } else {
    peopleObject.name = randomChoice(maleNames);
  }

  peopleObject.lastName = randomChoice(lastNames);
  
  peopleObject.age = Math.floor(Math.random() * (Math.floor(99) - Math.ceil(1)) + 1);

  people.push(peopleObject);
}

console.log(people);

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});