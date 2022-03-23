class Product {
    constructor(_sku, _img, _name, _category, _stock, _price) {
        this.sku = _sku;
        this.img = _img;
        this.name = _name;
        this.category = _category;
        this.stock = _stock;
        this.price = _price;
    }
}

let dbProduct = [
    new Product("SKU-1-126374", "https://cdn1-production-images-kly.akamaized.net/_rs9uvS4NgkmKEzerOrUdbe_QoM=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1170319/original/065589700_1457942078-a99626_kids-911_9-oreo.jpg", "Oreo", "Food", 25, 7500),
    new Product("SKU-2-198374", "https://id-live-05.slatic.net/p/cc79d0a7f3820ad5916a224e02915312.jpg_720x720q80.jpg_.webp", "Pocari", "Drink", 50, 10000)
]

let selectedIdx = null;

//////////////////////////////////// Management Product //////////////////////////////////////////
function handleSubmit() {
    // 1. Mengambil data
    let form = document.getElementById("form-product")
    let sku = `SKU-${dbProduct.length + 1}-${Math.round(Math.random() * 1000000)}`;
    let img = form.elements[0].value;
    let name = form.elements[1].value;
    let category = form.elements[2].value;
    let stock = form.elements[3].value;
    let price = form.elements[4].value;

    console.log(sku, img, name, price, stock, category)
    // 2. Proteksi
    if (img == "" || name == "" || category == "null" || stock == "" || price == "") {
        alert("Isi semua data dengan benar")
    } else {
        // 3. Data disimpan kedalam dbProduct
        dbProduct.push(new Product(sku, img, name, category, parseInt(stock), parseInt(price)))
        // 4. Reset ulang input element
        form.elements[0].value = "";
        form.elements[1].value = "";
        form.elements[2].value = null;
        form.elements[3].value = "";
        form.elements[4].value = "";
    }

    printProduct();
}

function handleSave() {
    // 1. ambil value dari form
    let name = document.getElementById("new-name").value;
    let stock = parseInt(document.getElementById("new-stock").value);
    let price = parseInt(document.getElementById("new-price").value);

    // 2. menyimpan data ke dbProduct berdasarkan selectedIdx
    dbProduct[selectedIdx].name = name;
    dbProduct[selectedIdx].stock = stock;
    dbProduct[selectedIdx].price = price;

    // 3. selectedIdx di reset
    selectedIdx = null;

    // 4. mencetak ulang table datanya
    printProduct()

}

function printProduct(data = dbProduct) {
    let htmlElement = data.map((val, idx) => {
        if (selectedIdx == idx) {
            return `<tr>
            <td>${val.sku}</td>
            <td><img src="${val.img}" width="75px"></td>
            <td><input type="text" id="new-name" value="${val.name}"/></td>
            <td>${val.category}</td>
            <td><input type="number" id="new-stock" value="${val.stock}"/></td>
            <td><input type="number" id="new-price" value="${val.price}"/></td>
            <td><button  type="button" onclick="handleSave()">Save</button>
                <button type="button" >Cancel</button>
            </td>
        </tr>`
        } else {
            return `<tr>
            <td>${val.sku}</td>
            <td><img src="${val.img}" width="75px"></td>
            <td>${val.name}</td>
            <td>${val.category}</td>
            <td>${val.stock.toLocaleString()}</td>
            <td>IDR. ${val.price.toLocaleString()}</td>
            <td><button  type="button" onclick="handleEdit(${idx})">Edit</button>
                <button type="button" onclick="handleDelete(${idx})">Delete</button>
            </td>
        </tr>`
        }
    })
    document.getElementById("table-list").innerHTML = htmlElement.join("")
    // console.log(htmlElement)
}

function handleEdit(idx) {
    selectedIdx = idx;
    printProduct();
}

function handleDelete(idx) {
    if (confirm("Yakin mau menghapus produk ini ?")) {
        dbProduct.splice(idx, 1);
        printProduct();
    }
}

printProduct();

//////////////////////////// Filter Product ///////////////////////////////

function handleFilter() {
    // 1. get value dari form filter
    let form = document.getElementById("form-filter")
    let filterName = form.elements[0].value;
    let filterMin = parseInt(form.elements[1].value);
    let filterMax = parseInt(form.elements[2].value);
    let filterCategory = form.elements[3].value;
    console.log("Cek input : ", filterName, filterMin, filterMax, filterCategory);
    // 2. proses filter data
    let dataFilter = dbProduct.filter((value, index) => {
        if (filterName.length > 0) {
            return value.name.toLowerCase().includes(filterName.toLowerCase())
        }
    })

    console.log(dataFilter)

    // 3. mencetak data
    printProduct(dataFilter);

    // 4. reset form filter
    form.elements[0].value="";
    form.elements[1].value="";
    form.elements[2].value="";
    form.elements[3].value="null";
}

function handleReset(){
    printProduct()
}
