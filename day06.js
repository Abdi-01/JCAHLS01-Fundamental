// ARRAY OF OBJECT
/**
 * 1. Merupakan struktur data yang biasa digunakan untuk output database
 * 2. Juga digunakan untuk data JSON (Javascript Object Notation)
 * 3. Struktur penulisan :
 *      let arrObj = [
 *          {
 *              id:1,
 *              name:"Jacket",
 *              stock:[
 *                  {
 *                      type:"Red",
 *                      qty:20
 *                  }
 *              ],
 *          }
 *      ]
 * 
*/

// Array.map() ===> Ditujukan untuk mengolah data Array of Object =>> Output : Array
// Array.filter() ===> Ditujukan untuk memfilter data Array of Object =>> Output : Array
// Array.findIndex() ===> Ditujukan untuk mencari alamat index =>> Output : Number

let dataProduct = [
    {
        name: "Jacket",
        price: 85000,
        stock: [
            {
                type: "M",
                qty: 8
            },
            {
                type: "L",
                qty: 12
            },
            {
                type: "XL",
                qty: 5
            }
        ]
    },
    {
        name: "Shoes",
        price: 70000,
        stock: [
            {
                type: "40",
                qty: 10
            },
            {
                type: "41",
                qty: 5
            },
            {
                type: "42",
                qty: 3
            }
        ]
    },
    {
        name: "Hat",
        price: 35000,
        stock: [
            {
                type: "S",
                qty: 10
            },
            {
                type: "M",
                qty: 5
            },
            {
                type: "L",
                qty: 3
            }
        ]
    },
]
// console.table(dataProduct);

let searchData = dataProduct.filter((value) => {
    return value.name == "Hat"
})

let dataIdx = dataProduct.findIndex(value => {
    return value.name == "Hat"
})

// console.table(searchData);
// console.table(dataIdx);
dataProduct[dataIdx].name = "Topi";

// Concatination ==> Penggabungan data atau menduplikasi data
let mobil = ["Tesla", "Ferrari", "Lamborgini"];
let motor = ["Honda", "Yamaha", "Kawasaki"];
// let kendaraan = mobil.concat(motor, ["KTM", "Wuling"]); // Cara 1
// let kendaraan = [...mobil, ...motor, "Harley", "HasQ"];

let sepedaMotor = [...motor];
sepedaMotor[0] = "SUZUKI";

// console.log(motor)
// console.log(sepedaMotor)
let dbA = {
    name: "Reno",
    usia: 12,
    alamat: "BSD"
}
let dbB = {
    pekerjaan: "Coder",
    gaji: 7500000
}

let dataDB = { ...dbA, ...dbB, alamat:"Sudirman Tamrin", status: "Aktif" };
console.log(dataDB);
