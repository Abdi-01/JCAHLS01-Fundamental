let database = [
    {
        name: "Hoodie",
        stock: 12,
        price: 75000
    },
    {
        name: "Sepatu",
        stock: 10,
        price: 80000
    },
    {
        name: "Helm",
        stock: 12,
        price: 50000
    },
    {
        name: "Celana",
        stock: 10,
        price: 25000
    }
];

// 1️⃣ Menghitung total harga menggunakan forEach
// let total = 0;
// let temp= [];
// database.forEach(function (value, index) {
//     temp.push(value.price)
//     total += value.price
// })
// // database.forEach((value, index) => {

// // })

// console.log(`${temp.join(" + ")} = ${total}`)

// 2️⃣ Menghitung total harga menggunakan duplikasi fungsi forEach
const duplicateForEach = (cbfn, array) => {
    for (let i = 0; i < array.length; i++) {
        cbfn(array[i], i)
    }
};

let total = 0;
duplicateForEach((value, index) => {
    total += value.price
}, database)

console.log(total)

// 3️⃣ Membuat list barang menggunakan duplikasi fungsi map
const duplicateMap = (cbfn, array) => {
    let tempArr = [];
    for (let i = 0; i < array.length; i++) {
        tempArr.push(cbfn(array[i], i))
    }
    return tempArr;
};

// let newDb = duplicateMap((value, index) => {
//     return `${index + 1}. ${value.name}, stoknya ${value.stock}`
// }, database)
// console.log(database);
// console.log(newDb);

// 4️⃣ Membuat list filter barang menggunakan duplikasi fungsi filter
const duplicateFilter = (cbfn, array) => {
    let tempArr = [];
    for (let i = 0; i < array.length; i++) {
        let bool = cbfn(array[i], i);
        if (bool) {
            tempArr.push(array[i])
        }
    }
    return tempArr;
};

let newDb = duplicateFilter((value, index) => {
    return value.price > 50000
}, database)

// 5️⃣ Object function
let student = {
    nama: "Edo Renaldo",
    usia: 20,
    kelas: "IPA"
}

Object.keys(student); // ["nama", "usia", "kelas"]
console.log(Object.keys(student))

const duplicateGetKeys = (obj) => {
    let temp = [];
    for (let property in obj) {
        temp.push(property);
    }
    return temp;
};

console.log(duplicateGetKeys(student)); // ["nama", "usia", "kelas"]

const duplicateGetValue = (obj) => {

};
console.log(duplicateGetValue(student)); // ["Edo Renaldo",20, "IPA"]


const duplicateGetEntries = (obj) => {

};
console.log(duplicateGetEntries(student)); // [["nama","Edo Renaldo"],["usia",20], ["kelas","IPA"]]