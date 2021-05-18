class factoryFactory {
  constructor(type) 
  function (make, model) {
  this.make = make;
  this.model = model;
  }
}



const bikeFactory = factoryFactory("bicycle");
const bike1 = new bikeFactory("bike1", "shitbox1");
const bike2 = new bikeFactory("bike1", "supershitbox2");
const bike3 = new bikeFactory("bike1", "flying1");

const carFactory = factoryFactory("car");
const car1 = new carFactory("car1", "turd");
const car2 = new carFactory("car2", "crapbox");
const car3 = new carFactory("car3", "itsbroke");


const boatFactory = factoryFactory("boat");
const boat1 = new boatFactory("boat1", "titanic");
const boat2 = new boatFactory("boat2", "holes");
const boat3 = new carFactory("boat3", "sunkpro");



const blimpFactory = factoryFactory("blimp");
const blimp1 = new blimpFactory("blimp1", "Hindenburg");
const blimp2 = new blimpFactory("blimp2", "fireball1");
const blimp3 = new blimpFactory("blimp3", "goodyear");


const trainFactory = factoryFactory("train");
const train1 = new blimpFactory("train1", "polar1");
const train2 = new blimpFactory("train2", "thomastank");
const train3 = new blimpFactory("train3", "delayed");

const Allvehicles = [
  bik1, bike2, bike3, car1, car2, car3, boat1, boat2, boat3, blimp1, blimp2, blimp3, train1, train2, train3,
];



for (let i in Allvehicles) {
  console.log(Allvehicles[i]);
}

console.log(typeof trainFactory);

console.log(typeof blimp3);