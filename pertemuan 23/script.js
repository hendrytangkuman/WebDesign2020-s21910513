// // Mendeklarasikan Objek

// let buah = { nama: 'mangga', warnaKulit: 'hijau', hargaPerBuah: 5000 };

// let orang = {
//   nama: 'sarah',
//   umur: 24,
//   pekerjaan: 'programmer'
// };

// // Menggunakan Kata Kunci new

// let orang = new Object();

// orang.nama = 'sarah';
// orang.umur = 24;
// orang.pekerjaan = 'programmer';

// // Mengakses Properti Objek

// // Dot Notation

// let orang = {
//     nama: 'sarah',
//     umur: 24,
//     pekerjaan: 'programmer'
//   };
  
//   console.log(orang.nama); // Output: "sarah"
//   console.log(orang.umur); // Output: 24
//   console.log(orang.pekerjaan); // Output: "programmer"

//   // Bracket Notation

//   let orang = {
//     nama: 'sarah',
//     umur: 24,
//     pekerjaan: 'programmer'
//   };
  
//   console.log(orang["nama"]); // Output: "sarah"
//   console.log(orang['umur']); // Output: 24
//   console.log(orang["pekerjaan"]); // Output: "programmer"

//   // Menambah Properti Baru pada Objek

//   // Dot Notation

//   let orang = {
//     nama: 'sarah',
//     umur: 24,
//     pekerjaan: 'programmer'
//   };
  
//   orang.kebangsaan = 'warga negara indonesia';
  
//   console.log(orang);

//   // Bracket Notation

//   let orang = {
//     nama: 'sarah',
//     umur: 24,
//     pekerjaan: 'programmer'
//   };
  
//   orang['kebangsaan'] = 'warga negara indonesia';
  
//   console.log(orang);

//   // Menghapus Properti Objek

//   let orang = {
//     nama: 'sarah',
//     umur: 24,
//     pekerjaan: 'programmer'
//   };
  
//   delete orang.umur;
//   delete orang['pekerjaan'];
  
//   console.log(orang);

//   // Object Method

// let kalkulator = {
//   namaOperasi: 'penjumlahan',
//   jumlah: function(angka1, angka2) {
//     return angka1 + angka2;
//   }
// };

// let kalkulator = {
//     namaOperasi: 'penjumlahan',
//     jumlah: function(angka1, angka2) {
//       return angka1 + angka2;
//     }
//   };
  
//   console.log(kalkulator.jumlah(2, 3));
