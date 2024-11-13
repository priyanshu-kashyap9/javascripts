// the some part of the array in second leacture in the array 


const marvel_hero = ["thoe","ironman","spiderman"]
const Dc_hero = ["superman","flash","batman"]
// marvel_hero.push(Dc_hero)
// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

// const allheros = marvel_hero.concat(Dc_hero)
// console.log(allheros);

// spread the operator in array 
const all_new_heros = [...marvel_hero, ...Dc_hero ]
console.log(all_new_heros);

// In the another array use in the uing flat operater in the array function 

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanother =another_array.flat(Infinity)
console.log(realanother);

// no comment 
console.log(Array.isArray("priyanshu kashyap"));
console.log(Array.from("hitesh"));
console.log(Array.from({name : "[priyanshu kashyap"})); /* intresting the fact */

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
 

// The array topic is complete may be ok good day . 



