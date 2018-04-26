'use strict'
//Exercise 2 - Arrays
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);

let jimsFavoriteAnimal = ('meerkat');
favoriteAnimals.splice(1, 0, jimsFavoriteAnimal);
console.log('The word order would be as follows: "blowfish" , "meerkat", "capricorb", "giraffe"');
console.log(favoriteAnimals);

console.log('the array has lenght of: ' + favoriteAnimals.length);
var removed = favoriteAnimals.splice(favoriteAnimals.length-1);
console.log(favoriteAnimals);

console.log('the index of meerkat is ' + favoriteAnimals.indexOf(('meerkat')) );
var removed = favoriteAnimals.splice(1,1);
console.log(favoriteAnimals);