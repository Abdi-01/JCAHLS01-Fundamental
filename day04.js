// Day 04 : FUNCTION
/**
 * 1. Function : sekumpulan program, yang digunakan untuk menyelesaikan tugas tertentu, dan umumnya bisa digunakan berkali-kali
 * 2. Untuk menggunakan function, maka kita akan membuat function
 * 3. Function bersifat reusable
 * 4. Built-in Function : function bawaan javascript
 * 5. User-defined function : function yang kita buat sendiri
 *      a. Menggunakan keyword function
 *      b. Nama function
 *      c. Parameter/argument : agar function dapat menerima data dari luar function
 *          i. Disimpan didalam ()
 *          ii. Boleh ada, boleh tidak
 *          iii. Jika argument lebih dari 1, maka harus dipisah dengan ","
 * */

/** Declarative Function
 * 
 * keywordFunction namaFunction(argument){
 *      // function code
 * 
 * }
 * 
 * */
let angka1 = 200;
let angka2 = 25;

// deklarasi function / pembuatan function
function penjumlahan() {
    let hasil = angka1 + angka2;
    // console.log(hasil);
}
// memanggil function
penjumlahan;

// menggunakan/menjalankan function
penjumlahan();

function pengurangan(argument1, argument2) {
    let hasil = argument1 - argument2;
    // console.log(hasil);
}

pengurangan(100, 35);

/** Function expression
 * 
 * keywordVariable namaVariable = keywordFunction(argument){
 *      // function code
 * 
 * }
 * 
 * */

const perkalian = function (argument1, argument2) {
    let hasil = argument1 * argument2;
    // console.log(hasil);
}

perkalian(3, 3);

/** Arrow Function
 * keywordVariable namaVariable=(argument)=>{
 *      // function code
 * }
 * 
 * */

const pembagian = (argument1, argument2) => {
    let hasil = argument1 / argument2;
    // console.log(hasil);
}

pembagian(12, 5);

// Default value argument

// const kelipatan = (numb1, numb2 = 2) => {
//     let hasil = numb1 % numb2;
//     if (hasil == 0) {
//         console.log(`${numb1} adalah kelipatan ${numb2}`);
//     } else {
//         console.log(`${numb1} bukan kelipatan ${numb2}`);
//     }
// }

// kelipatan(15, 3);

// return : keyword yang diperuntukan untuk mengeluarkan nilai dari function
const kelipatan = (numb1, numb2 = 2) => {
    let hasil = numb1 % numb2;
    if (hasil == 0) {
        return `${numb1} adalah kelipatan ${numb2}`;
    } else {
        return `${numb1} bukan kelipatan ${numb2}`;
    }
}

// console.log(kelipatan(15, 3));

// 

// ganjilGenap(6)// genap
// ganjilGenap(5)// ganjil
// ganjilGenap(7)
// ganjilGenap(8)
// console.log(ganjilGenap(6)) // genap

let barang = ["Jaket", "Sepatu", "Kaos"];

let list = "";
// for (let i = 0; i < barang.length; i++) {
//     list += `${i + 1} ${barang[i]};\n`;
// }

// console.log(list);

// ⏺️ namaVariableArray.forEach() : melooping sebuah data array dan tidak bisa menghasilkan array baru atau tidak menghasilkan return.
// const cetak = (value, index) => {
//     list += `${index + 1} ${value};\n`;
// }

// barang.forEach(cetak); // cara 1

barang.forEach((value, index) => {
    list += `${index + 1} ${value};\n`;
}); // cara 2

// console.log(printData);
// ⏺️ namaVariableArray.map() : melooping sebuah data array dan bisa menghasilkan array baru atau menghasilkan return.

let listBarang = barang.map((value, index) => {
    return `${index + 1} ${value}`
})

console.log("FOREACH ==>", list)
console.log("MAP ===>>>", listBarang.join("\n"))
let numb = [2, 3, 4, 1, 6, 5];
// console.log(numb);

// let kali = (value, index) => {
//     return value * 2
// }

// let numbArr = numb.map(kali); //cara 1

// numb = numb.map((val, idx) => {
//     return `${idx + 1}. Ini angka ${val}`
// });

// console.log(numb);

// const jumlah = (angka1, angka2) => {
//     return angka1 + angka2
// };

// const jumlahDikali = (cb, pengali) => {
//     return cb * pengali
// };

// console.log(jumlahDikali(jumlah(2, 4), 5));

// ⏺️ namaVariableArray.filter() : mengolah data array sehingga menghasilkan array baru berdasarkan condition yang diberikan
let filterGenap = numb.filter((value, index) => {
    return value % 2 == 0
});

console.log(filterGenap)