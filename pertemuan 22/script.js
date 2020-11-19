// // Array

// let nilai=[5,6,7,8,9];
// for (let i=1;i<nilai.length;i++)
// {
//     console.log("nilai= ",nilai[i]);
// }

// // Menggabungkan Lebih Dari Satu Array dengan concat()

// let buah = ["pisang", "apel", "jeruk"];
// let sayur = ["tomat", "bayam", "wortel"];
// let biji = ["kedelai", "kacang tanah", "kacang polong"];

// let makanan = buah.concat(sayur, biji);

// console.log(makanan); // Output: ["pisang", "apel", "jeruk", "tomat", "bayam", "wortel", "kedelai", "kacang tanah", "kacang polong"]

// // Mengambil Element Array dengan slice()

// let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
// let cemilanGurih = cemilan.slice(0, 3);
// let cemilanManis = cemilan.slice(3);

// console.log(cemilanGurih); // Output: ["kripik singkong", "kripik kentang", "krupuk ikan"]
// console.log(cemilanManis); // Output: ["permen", "coklat", "kue"]

// // Mengurutkan Array dengan sort()

// // Contoh array dengan tipe data string
// let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];

// buah.sort();

// console.log(buah); // Output: ["Apel", "Jambu", "Jeruk", "Mangga"]

// // Contoh array dengan tipe data number
// let bilangan = [30, 1, 2, 3.5, 10, 100];

// bilangan.sort();

// console.log(bilangan); // Output: [1, 10, 100, 2, 3.5, 30]

// let bilangan = [30, 1, 2, 3.5, 10, 100];


// let urutDariTerkecil = function(a, b) {
//   return a - b;
// };

// let urutDariTerbesar = function(a, b) {
//   return b - a;
// };

// console.log(bilangan.sort(urutDariTerkecil)); // Output: [1, 2, 3.5, 10, 30, 100]
// console.log(bilangan.sort(urutDariTerbesar)); // Output: [100, 30, 10, 3.5, 2, 1]

// // Memutar urutan Array dengan reverse()

// let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];

// buah.reverse();

// console.log(buah); // Output: ["Jambu", "Mangga", "Apel", "Jeruk"]

// let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];

// buah.sort().reverse();

// console.log(buah); // Output: ["Mangga", "Jeruk", "Jambu", "Apel"]