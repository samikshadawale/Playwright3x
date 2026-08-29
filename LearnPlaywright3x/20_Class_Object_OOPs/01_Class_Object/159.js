class Car{
    //constructor(){
//default constructor    
//}

//Param
constructor(assinged_name){
    this.name = assinged_name;
}
}

let hyundai_i10 = new Car("i10");
console.log(hyundai_i10.name);

let hyundai_creata = new Car("i10");
console.log(hyundai_creata.name);

const q = new Car("i11"); //constructor runs -> i10
const b = new Car("Nexon");

//Class BAd { constructor(a){}constructor(b){}}

class Bike{}
new Bike(); // Bike{} - works fine, just has nothing in it