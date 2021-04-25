//setTimeout merupakan cara paling mudah untuk membuat kode kita
//dijalankan secara asynchronous

// console.log('Selamat datang!');

// setTimeout(() => {
//   console.log('Terima kasih sudah mampir, silahkan datang kembali!');
// }, 3000);

// console.log('Ada yang bisa dibantu?');

//=========
// const orderCoffee = () => {
//   let coffee = null;
//   console.log('Sedang membuat kopi, silahkan tunggu.....');
//   setTimeout(() => {
//     console.log('Kopi sudah jadi');
//   }, 3000);
//   return coffee;
// };

// const coffee = orderCoffee();
// console.log(coffee);

//=========
const orderCoffee = (callback) => {
  let coffee = null;
  console.log('Sedang membuat kopi, silahkan tunggu.......');
  setTimeout(() => {
    coffee = 'Kopi sudah jadi';
    callback(coffee);
  }, 3000);
};

//print
orderCoffee((coffee) => {
  console.log(coffee);
});

//minta username dan password server di jagoan hosting yang dipake untuk taro isales
