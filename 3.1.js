// 2.1

// const name = 'Parrot'
// const colors = ['Red', 'Green', 'Blue', 'Yellow']

// const bird = {
//   name,
//   colors,
// }

// console.log(bird)

// 2.2

// const name = 'Parrot'
// const colors = ['Red', 'Green', 'Blue', 'Yellow']
// const talons = true

// const bird = {
//   name,
//   colors,
//   talons,
// }

// console.log(bird)

// 2.3

// const capital = 'Hanoi'
// const continent = 'Asia'

// const vietnam = {
//   capital,
//   continent,
// }

// console.log(vietnam)

// 2.4

// const wheelsCount = 4
// const doorsCount = 4
// const color = 'black'

// const car = {
//   wheelsCount,
//   doorsCount,
//   color,
// }

// console.log(car)

// 3.1

// function getAverage() {
// 	const obj = { x: 3.6, y: 7.8, z: 4.3 };
// 	const { x, y, z } = obj;

// 	return Math.floor((x + y + z) / 3.0);
// }
// console.log(getAverage());

// 3.2

// function getAddress() {
// 	let coderschool = {
// 		city: 'HCMC',
// 		country: 'Vietnam',
// 		address: {
// 			number: 12,
// 			street: 'Ton Dan',
// 			district: '4',
// 		},
// 	};

// 	const {
// 		city,
// 		country,
// 		address: { street },
// 	} = coderschool;

// 	return city === 'HCMC' && country === 'Vietnam' && street === 'Ton Dan';
// }
// console.log(getAddress());

// 3.3

// function objectifyElements(arr) {

//   return { fourth: arr[4] }
// }

// console.log(objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 4);

// 3.4

//  function getFoodItems() {
//    const food = [
//      ["carrots", "beans", "peas", "lettuce"],
//      ["apples", "mangos", "oranges"],
//      ["cookies", "cake", "pizza", "chocolate"],
//    ];

//    const [[carrots], [, mangos], [cookies]] = food

//    return { carrots, cookies, mangos };
//  }

//  console.log(getFoodItems().mangos === 'mangos')

// 3.5

// function getHistoricPrices(index) {
//   const [,,bingo] = index
//   return bingo
// }

// console.log(getHistoricPrices([true, false, true])===true)

// 3.6

// function getHistoricPrices(index) {
//   const [[bingo]] = index // CHANGE ME
//   return bingo
// }

// console.log(getHistoricPrices([[true, false], [false, true]])===true)

// 3.7

// function getHistoricPrices(index) {
//   const [[[bingo]]] = index
//    return bingo
// }

// console.log(getHistoricPrices([[[true, false],[true, false]]])===true)

// 3.8

// function getHistoricPrices(index) {
//   const {bingo} = index
//   console.log(bingo)
//   return bingo
// }

// console.log(getHistoricPrices([[[{}, {}]]])===true)

// 4.1

// function restParams(first, ...rest) {
//   return first === 1 && rest[0] === 2

// }

// console.log(restParams(1, 2)===true)

// 4.2

// function restParams2(first, ...rest) {
//   return first === 1 && rest[0] === 2 && rest[1] === 3
// }

// console.log(restParams2(1, 2, 3)===true)

// 4.3

// function restParams3(first, ...rest) {
//   return first === 1 && rest[0] === 2 && rest[1] === 3 && rest[2] === undefined;
// }

// console.log(restParams3(1, 2, 3, undefined)===true)

// 4.4

// function restParams4(...rest) {
//   return rest[2] === "third" && rest[0] === "first" && rest[1] === "second"; // CHANGE ME
// }

// console.log(restParams4("first", "second", "third")===true)

4.5;

function ontoAnObject() {
  const array = [1, 2, 3, 4, 5, 6];
  const object = {};
  object.one = array[0];
  object.two = array[1];
  object.three = array[2];
  object.rest = array.slice(3, 7);

  return object;
  console.log(object);
}
