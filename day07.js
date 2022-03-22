// CLASS OBJECT at JAVASCRIPT
// Template yang diperuntukan untuk membuat data object
/**
 * class structure :
 * class className{
 *     constructor(arg1,arg2...){
 *          this.propertyName = arg1;
 *          this.propertyName = arg2;
 *      }
 * 
 *      method=()=>{
 *          // code
 *      }
 * }
 * 
 * */

class Manusia {
    constructor(_name, _birth, _gender) {
        this.name = _name;
        this.birth = _birth;
        this.gender = _gender;
    }

    getAge = () => {
        let birthYear = parseInt(this.birth.split("-")[2])
        let date = new Date();
        return date.getFullYear() - birthYear
    }

    introduce = () => {
        return `My name is ${this.name}, I born at ${this.birth}, my age ${this.getAge()} years old`
    }

}

let dataPenduduk = [];

dataPenduduk.push(new Manusia("Renold", "12-11-1980", 20, "L"));
dataPenduduk.push(new Manusia("Reva", "12-10-2000", 18, "P"));

console.log(dataPenduduk);
let list = dataPenduduk.map((value, index) => {
    return `${index + 1}. ` + value.introduce()
})

console.log(list.join("\n"));

// Inheritance ==> pewarisan data dari class utama agar dapat digunakan oleh class turunannya
// class turunan
class Pekerjaan extends Manusia {
    constructor(_name, _birth, _gender, _profesion, _salary) {
        super(_name, _birth, _gender); // menggunakan property dari class utama
        this.profesion = _profesion;
        this.salary = _salary;
        this.age = this.getAge();
    }
}

let dbJob = [];

dbJob.push(new Pekerjaan("Arnold", "13-10-1985", "Male", "Chef", 30000000))
console.log(dbJob);

let jobDesc = {
    job: "Prepare Tools",
    getStatus: () => {
        return `Done`
    }
}