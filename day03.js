// Day 03 : Array Data Type
/**
 * 1. Definisi : Sebuah tipe data penampung. Dikarenakan dapat menampung banyak data dan berbagai tipe data yang lain.
 *              Setiap data pada array itu memiliki alamat index. Index pada array itu memiliki tipe data angka/number.
 * 2. Tujuan : mempermudah pengelolaan data.
 * 3. Array bertipe object
 * 4. Array itu ditandai dengan [ data1, data2... ]
 * 
*/

// Syntax Array
let namaApel = "Apel"; // ❌
let namaJeruk = "Jeruk"; // ❌

let namaBuah = ["Apel", "Jeruk", "Durian", "Melon"]; // Cara 1 ✔️
let stock = Array(10, 15, 25, 12); // Cara 2 ✔️
let harga = []; // Cara 3 ✔️
harga[0] = 5000;
harga[1] = 2500;
harga[2] = 10000;
harga[3] = 7000;
// Akses data pada array =>> namaVariable[index]
console.log("Nama Buah :", namaBuah[1]);
console.log("Stock Buah :", stock[1]);
console.log("Harga Buah :", harga[1]);
console.log(`Buah ${namaBuah[0]} stoknya ada ${stock[0]} dan harganya Rp. ${harga[0]};`)
// console.log(toko.split(' '));
// let polin = "Malam";
// let arrPolin = polin.split(''); // merubah string menjadi array
// console.log(arrPolin);
// // console.log(arrPolin.reverse()); // membalik urutan data array
// polin= arrPolin.reverse().join('');
// console.log(polin);

// Merubah value dari salah satu data pada array
// Reassign
namaBuah[0] = "Semangka";
console.table(namaBuah);

let listBuah = '';

for (let i = 0; i < namaBuah.length; i++) {
    listBuah += `${i + 1} Buah ${namaBuah[i]} stoknya ada ${stock[i]} dan harganya Rp. ${harga[i]};\n`
}

console.log(listBuah);

//////////////////////////////////// ARRAY FUNCTION //////////////////////////////////////
// ⏺️ namaVariableArray.length : untuk mengetahui jumlah data yang ada didalam array
// OUTPUT dari length adalah NUMBER INT
console.log("Banyak data array :", namaBuah.length);
console.log("Value terakhir :", namaBuah[namaBuah.length - 1]);

// ⏺️ namaVariableArray.push(data) : digunakan untuk menambah data baru di akhir array
namaBuah.push("Alpukat");
stock.push(20);
harga.push(6500);
console.table(namaBuah);
console.table(stock);
console.table(harga);

// ⏺️ namaVariableArray.pop() : digunakan untuk menghapus data terakhir dari array
namaBuah.pop();
stock.pop();
harga.pop();

// ⏺️ namaVariableArray.unshift(data) : digunakan untuk menambah data baru di awal array
namaBuah.unshift("Nangka");
stock.unshift(10);
harga.unshift(2500);

// ⏺️ namaVariableArray.shift() : digunakan untuk menghapus data pertama dari array
namaBuah.shift();
stock.shift();
harga.shift();

// ⏺️ namaVariable.reverse() : membalikkan urutan data array
let motor = ["Yamaha", "Honda", "Triumph", "Ducati"];
console.log("❌SEBELUM REVERSE : ", motor);
motor.reverse()
console.log("✅SESUDAH REVERSE : ", motor);

// ⏺️ namaVariableArray.join("separator") : menggabungkan semua data array menjadi data string
console.log(motor.join()); // Ducati,Triumph,Honda,Yamaha
console.log(motor.join(" ")); // Ducati Triumph Honda Yamaha
console.log(motor.join(" / ")); // Ducati / Triumph / Honda / Yamaha

// ⏺️ namaVariable.splice(indexAwal, jumlahDataYangDihapus, dataBaru) : menghapus data array pada index tertentu
// Fungsi 1️⃣ : menghapus data array pada index tertentu
let mobil = ["Daihatsu", "Toyota", "Lexus", "BMW"];
console.log("❌SEBELUM DIHAPUS : ", mobil);
mobil.splice(2, 1);
console.log("✅SESUDAH DIHAPUS : ", mobil);

// Fungsi 2️⃣ : menyisipkan data baru
console.log("❌SEBELUM DISISIPKAN : ", mobil);
mobil.splice(2, 0, "Lexus", "Mazda", "Wuling");
console.log("✅SESUDAH DISISIPKAN : ", mobil);

// Fungsi 3️⃣ : Mengganti data
console.log("❌SEBELUM DIGANTI : ", mobil);
mobil.splice(1, 1, "FERRARI")
console.log("✅SESUDAH DIGANTI : ", mobil);

// ⏺️ namaVariableArray.slice(startIndex, endIndex);
console.log(mobil.slice(1, 4));

// ⏺️ namaVariableArray.includes("data") : memeriksa ada atau tidak data pada array
console.log(mobil.includes("Lexus")); // true
console.log(mobil.includes("Isuzu")); // false

// ⏺️ namaVariableArray.indexOf("data") : mencari alamat index dari suatu data
console.log(mobil.indexOf("BMW")); // 5
console.log(mobil.indexOf("ISUZU")); // -1

let nama = ["Budi", "Edo", "Budi"];
console.log(nama.indexOf("Budi"));
