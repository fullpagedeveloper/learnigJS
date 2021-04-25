try {
  console.log('Awal block try');
  //   errorCode;
  console.log('Akhir block try');
} catch (error) {
  console.log('Terjadi error!');
  //   console.log('anjay1', error.name);
  //   console.log('njay2', error.message);
  //   console.log('njay3', error.stack);
} finally {
  console.log('Akan tetap dieksekusi');
}
