/////////////////// LOOP STATEMENT /////////////////
// LOOP : perulangan 

/**
 * A. WHILE LOOP : digunakan ketika akhir loop tidak pasti
 * 
 * while(condition){
 *      // program yang ingin dijalankan
 * }
 * */

// Example :
let nilai = 10;

while (nilai > 0) {
    // console.log("Angka :", nilai);
    nilai--;
}

// tanpa loop
// console.log("Angka :", 10)
// console.log("Angka :", 9)
// console.log("Angka :", 8)
// console.log("Angka :", 7)

/**
 * B. DO...WHILE LOOP
 * 
 * do{
 *      // program yang ingin dijalankan
 * }while(condition);
 * 
 * */
let count = 1;
do {
    // console.log(`Bus No. ${count}`);
    count++;
} while (count <= 10);

/**
 * C. FOR LOOP : digunakan ketika kita tau batas looping
 * 
 * for(statement_1;statement_2;statement_3){
 *      // Program yang ingin dijalankan
 * }
 * 
 * statement_1 : variable yang mendefinisikan nilai awal dari batas looping
 * statement_2 : condition untuk memeriksa variable statement_1 dengan batas loopingnya, apakah bernilai true
 * statement_3 : berisi perintah increment atau decrement terhadap statement_1
 * 
 * keuntungan : kita dapat membatasi jumlah loop sejak awal
*/

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`Kereta No. ${i} Genap`)
    } else {
        console.log(`Kereta No. ${i} Ganjil`)
    }
}

for (let val = 1; val <= 30; val++) {
    if (val % 5 == 0 && val % 3 == 0) {
        console.log("BizzBuzz =>", val)
    } else if (val % 3 == 0) {
        console.log("Bizz =>", val)
    } else if (val % 5 == 0) {
        console.log("Buzz =>", val)
    }
}