// console.log('Menyalakan mesin kopi');
// console.log('Menggiling biji kopi');
// console.log('Memanaskan air');
// console.log('Mencampurkan air dan kopi');
// console.log('Menuangkan kopi kedalam gelas');
// console.log('Menuangkan susu kedalam gelas');
// console.log('Kopi anda sudah siap');

//import modelu/memanggil object didalam module
//kalo import dua object menggunakan destructuring object {}
// const { cofeeStock, isCoffeeMachineReady } = require('./module');

// const makeCoffee = (type, miligrams) => {
//   if (cofeeStock[type] >= miligrams) {
//     console.log('Kopi berhasil dibuat!');
//   } else {
//     console.log('Biji kopi habis!');
//   }
// };

// makeCoffee('arabica', 10);

//==========
import { cofeeStock, isCoffeeMachineReady } from './module.js';

// const displayStock = (stock) => {
//   for (const type in stock) {
//     console.log(type);
//   }
// };

console.log(cofeeStock);
console.log(isCoffeeMachineReady);
// console.log(isCoffeeMachineReady);
