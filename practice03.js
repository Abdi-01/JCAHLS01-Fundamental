// var symC = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         symC += '# '
//     }
//     if (i < 5) {
//         symC += "\n"
//     }
// }

// //  i = 1
// // symC = # # # # # \n
// //  i = 2
// // symC = # # # # # \n # # # # # \n
// console.log(symC);

// // double quotes
// var sentence = "i'll be there in a second"

// // single quotes
// // let sentence = 'i'll be there in a second'
// var sentence = 'i\'ll be there in \n a second'
// console.log(sentence)
// var sentence = `i'll be there in 

// a second`
// console.log('Backtick', sentence)

// let firstName = 'Abdi'
// let lastName = 'Alghi'
// console.log(`My fullname is, ${firstName} ${lastName}`)


let db = [
    {
        idproduct: 1,
        name: "Hoodie",
        stock: 12,
        price: 75000
    },
    {
        idproduct: 2,
        name: "Sepatu",
        stock: 10,
        price: 80000
    }
];

let beli = [
    {
        iduser: 1,
        user: "budi",
        keranjang: [
            {
                idproduct: 2,
                qty: 2,
                subtotal: 160000
            },
            {
                idproduct: 1,
                qty: 2,
                subtotal: 150000
            },
        ]
    },
    {
        iduser: 2,
        user: "Edo",
        keranjang: [
            {
                idproduct: 1,
                qty: 1,
                subtotal: 75000
            },
        ]
    },
    {
        iduser: 3,
        user: "Edi",
        keranjang: [
            {
                idproduct: 2,
                qty: 5,
                subtotal: 400000
            },
        ]
    }
]

const getReport = (database, cart) => {
    // Menduplikasi data dari database kedalam variable report
    let report = [...database];
    
    // melooping data berdasarkan data keranjang yang diinginkan
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < cart[i].keranjang.length; j++) {
            for (let k = 0; k < database.length; k++) {
                if (cart[i].keranjang[j].idproduct == database[k].idproduct) {
                    report[k].stock -= cart[i].keranjang[j].qty
                    if (report[k].salesQty) {
                        report[k].salesQty += cart[i].keranjang[j].qty
                        report[k].omset += cart[i].keranjang[j].subtotal
                    } else {
                        report[k].salesQty = cart[i].keranjang[j].qty
                        report[k].omset = cart[i].keranjang[j].subtotal
                    }
                    report[k].totalStock = report[k].salesQty + report[k].stock
                }
            }
        }
    }

    return report
}

console.log(getReport(db, beli))