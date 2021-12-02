

const person = {
    name:'sajeeb',
    age:27,
    marride:false,
    siblings:['rumu','simu'],
    greet : function() {console.log(`MY NAME IS ${this.name}`);}, //function
    sayhello(age) {console.log(`my age ${age}`);} 
};

console.log(person);
console.log(person.siblings);
console.log(person.greet());
person.city = 'Noakhali';

// delete property
delete person.marride;


const myObj = {
    name: "John",
    age: 30,
    cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
    }
  }

  console.log(myObj.cars.car3);

  const myObj1 = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

  console.log(myObj1.cars[0].name +" " + myObj1.cars[1].name);



  function  createFactoriFunction(firstName,lastName){
      return {
          firstName : firstName,
          lastName : lastName,
          fullName :  function()  {
              console.log(`My name is ${this.firstName} ${this.lastName} and i like my name`) ; 
            },
      };
  }

    const sajeeb =  createFactoriFunction('nasir','ahmed');
    sajeeb.fullName()



function Constraton(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function (){
        console.log(`My name is ${this.firstName} ${this.lastName} and i like my name`) ;
    };
}

const nasir = new Constraton('sajeeb','ahmed');

console.log(nasir.firstName); 



function Acount(name,lastBlance){

    this.name = name;
    this.blance = lastBlance;
    // this.deposite = function (amount){
    //     this.blance += amount; 
    //     console.log(`My name is ${this.name} and my blance now ${this.blance}`);
    // }
}
Acount.prototype.bank = 'Bangladesh bank';
Acount.prototype.deposite = function (amount){
    this.blance += amount; 
    console.log(`My name is ${this.name} and my blance now ${this.blance}`);
}
const josh =  new Acount('josh',200);

console.log(josh.blance);
console.log(josh);
josh.deposite(500);




class NewAcount {
    constructor(name,netBlance){
        this.name=name;
        this.blance = netBlance;
    }
    bankName = 'Sonali bank';
    deposit(amount){
        this.blance += amount ;
        console.log(`My name is ${this.name} and my blance now ${this.blance}`);
        console.log(this);


    }
}

const bob = new NewAcount('bob',700);

console.log(bob.blance);
bob.deposit(300);
console.log(bob.bankName);
console.log(bob);


const sun = {
    name : 'sun',
    age : 26,
    self : function (){ 
        console.log(`My name is ${this.name} and my age now ${this.age}`);
    }
}

const moon = {
    name : 'moon',
    age : 29,
}

function self(){
    console.log(`My name is ${this.name} and my age now ${this.age}`);
}

console.log(sun.age);
sun.self();

self.call(moon);
sun.self.call(moon);
