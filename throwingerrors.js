let json = '{ "name": "Yoda", "age": 20 }';

// let json = '{ bad json }'; //jika json tidak sesuai format
// let json = '{ "age": 20 }';

// try {
//   let user = JSON.parse(json);
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

//=========================
/**
Secara sintaksis, kode di atas tidak menimbulkan eror, sehingga blok catch akan diabaikan. Namun, tidak adanya properti name pada json sebenarnya sama saja dengan eror karena akan berdampak pada jalannya program kita.
Untuk mengatasinya, kita bisa menggunakan throw. Operator ini akan “melemparkan” eror pada program, sehingga eksekusi kode akan masuk pada blok catch. Berikut ini adalah contoh mengimplementasikan throw untuk menimbulkan eror kita sendiri:
 */
// try {
//   let user = JSON.parse(json);

//   //Ketika properti user.name tidak memiliki nilai, maka program akan menghasilkan SyntaxError. Di dalamnya kita bisa menentukan pesan yang dapat membantu menjelaskan apa eror yang terjadi.
//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }

//   errorCode; //error

//   console.log(user.name); // undefined
//   console.log(user.age); // 20
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(`JSON Error: ${error.message}`);
// }

//======================
//menampilkan pesan eror sesuai eror yang muncul
//Jawabannya adalah dengan if statement.

try {
  let user = JSON.parse(json);

  //Ketika properti user.name tidak memiliki nilai, maka program akan menghasilkan SyntaxError. Di dalamnya kita bisa menentukan pesan yang dapat membantu menjelaskan apa eror yang terjadi.
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  errorCode; //error

  console.log(user.name); // undefined
  console.log(user.age); // 20
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
