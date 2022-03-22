/////////////////// CONDITIONAL STATEMENT /////////////////
/**
 * Aturan :
 * 1. Dia membutuhkan nilai boolean
 * 
 * Jenis :
 * 1. IF STATEMENT : untuk 1 kondisi
 * 2. IF...ELSE STATEMENT : untuk 2 kondisi
 * 3. IF...ELSE IF...ELSE STATEMENT : untuk >= 3 kondisi
 * 4. SWITCH...CASE STATEMENT : untuk memastikan nilai dengan case yg ditentukan
*/

// 1. IF STATEMENT
let nama = "Leonardo";
let usia = 20;
let email = "leo@mail.com";
/**
 * Aturan Penulisan :
 * if(condition){
 *      // task
 * }
 * note :
 * - condition : kondisi yang diinginkan, bernilai BOOLEAN(COMPARISON / LOGICAL OPERATOR / TRUTHLY / FALSY)
 * - task : apa yang ingin dijalankan ketika condition terpenuhi
*/

// Example Case : memverifikasi usia pendaftaran SIM yang harus minimal 17 Tahun
if (usia >= 17) {
    console.log("Verifikasi usia berhasil ✅", nama); // cara 1
    console.log(`Verifikasi usia ${nama} berhasil ✅, periksa email ${email} anda ⚠️`); // cara 2
}

// 2. IF...ELSE STATEMENT
/**
 * Aturan Penulisan :
 * if(condition){
 *      // task
 * }else{
 *      // task
 * }
 * note :
 * - condition : kondisi yang diinginkan, bernilai BOOLEAN(COMPARISON / LOGICAL OPERATOR / TRUTHLY / FALSY)
 * - task : apa yang ingin dijalankan ketika condition terpenuhi
*/
if (usia >= 17) {
    // task
    console.log(`Verifikasi usia ${nama} berhasil ✅, periksa email ${email} anda ⚠️`);
} else {
    // task
    console.log(`Verifikasi usia ${nama} gagal ❌`);
}

// 3. IF...ELSE IF...ELSE STATEMENT
/**
 * Aturan Penulisan :
 * if(condition){
 *      // task
 * }else if(condition){
 *      // task
 * }else{
 *      // task
 * }
 * note :
 * - condition : kondisi yang diinginkan, bernilai BOOLEAN(COMPARISON / LOGICAL OPERATOR / TRUTHLY / FALSY)
 * - task : apa yang ingin dijalankan ketika condition terpenuhi
*/
let nilai = 80;

if (nilai >= 90) {
    console.log("Grade A", nilai)
} else if (nilai >= 80 && nilai <= 89) {
    console.log("Grade B", nilai)
} else if (nilai >= 70 && nilai < 80) {
    console.log("Grade C", nilai)
} else {
    console.log("Grade D", nilai)
}


// 4. SWITCH...CASE
let profesi = "Supir";
switch (profesi) {
    case "Coder":
        // task
        console.log("Saya suka bikin aplikasi");
        break;
    case "Dokter":
        console.log("Saya suka mengobati orang");
        break;
    case "Polisi":
        console.log("Saya suka nilang")
        break;
    default:
        console.log("Gag tau ngapain")
        break;
}

// Ternary operator : condition ? task : task
let validasi_usia = usia > 17 ? "usia cukup" : "usia tidak cukup";

console.log(validasi_usia);
