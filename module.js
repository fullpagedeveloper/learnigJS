const cofeeStock = {
  arabica: '100',
  robusta: '150',
  liberica: '200',
};

const isCoffeeMachineReady = true;

// module.exports = { cofeeStock, isCoffeeMachineReady };
// console.log(module); //melihat nilai modelu yang ada di object cofeeStock
// module.exports = ini export dengan Node.js, nilai yang di export dan import harus sama jika tidak akan menampilkan undefine
// export default = untuk export hanya satu nilai di javaScript ES6 dan cara impotnya {import coffeeStock from "./module.js";}
// export default cofeeStock;

//export banyak dengan ES6
export { cofeeStock, isCoffeeMachineReady };
