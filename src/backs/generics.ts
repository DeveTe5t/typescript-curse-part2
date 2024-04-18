// import { Hero } from "../classes/Hero";
// // import { Hero as SuperHero, Hero2 } from "../classes/Hero";
// // import * as HeroClasses from "../classes/Hero";
// // import { powers } from "../data/powers";
// // import powers from "../data/powers";

// import { Hero } from "../interfaces/hero";
// import { Villian } from "../interfaces/villian";
import { Hero, Villian } from "../interfaces";
import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";

// // const Hero = 123;

// // const ironman = new SuperHero('Ironman', 1, 55);
// const ironman = new Hero('Ironman', 1, 55);

// console.log(ironman);

// console.log(ironman.power);

console.log('-- Generic arguments');
printObject('Hey there!');
printObject(345);
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5]);
printObject(new Date());
printObject(true);

console.log('-- Generic traditional function');
console.log(genericFunction(3.141519).toFixed(2));
console.log(genericFunction('Heya').toUpperCase());
console.log(genericFunction(new Date()).getDay());

console.log('-- Generic arrow function');
console.log(genericFunctionArrow(3.141519).toFixed(2));
console.log(genericFunctionArrow('Heya').toUpperCase());
console.log(genericFunctionArrow(new Date()).getDate());

console.log('-- Generic example of use');
const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool).realName);
console.log(genericFunctionArrow<Villian>(deadpool).dangerLevel);

console.log('-- Generic interfaces exportations agrupation');

