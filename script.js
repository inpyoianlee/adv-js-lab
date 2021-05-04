class Animal {
    legs = 4;
    age = 5;
    name = 'animal';

    constructor(name, legs, age) {
        this.legs = legs;
        this.age = age;
        this.name = name;
    }

    GrowOlder() {
        this.age = this.age++;
    }

    GameOver() {
      console.log(`The ${this.name} has passed away :'(`)
    }

    print() {
        console.log(`This animal has ${this.legs} legs and is ${this.age} years old.`);
    }
}

class Mammal extends Animal {
    fur = 9000;

    constructor(name, age, legs, fur) {
        super(name,legs,age);
        this.fur = fur;
    }

    Run() {
        console.log(`The ${this.name} starts to run!`);
    }

    Scratch() {
      console.log(`The ${this.name} scratches!`);
    }

    Climb() {
      console.log(`The ${this.name} climbs!`);
    }


}

class Avian extends Animal {
    wing_span = 5;
    constructor(name, legs, age, wing_span) {
        super(name, legs, age);
        this.wing_span = wing_span;
    }

    Fly() {
      console.log(`The ${this.name} takes flight!`)
    }

    Nest() {
      console.log(`The ${this.name} begins building a nest!`)
    }

    Peck() {
      console.log(`The ${this.name} pecks something!`)
    }
    

}

class Amphibian extends Animal {
    isSlimy = true;
    constructor(name, legs, age, isSlimy) {
        super(name, legs, age);
        this.isSlimy = isSlimy;
    }
    
    Eat() {
        console.log(`The ${this.name} eats a fly in the air!`);
    }

    Paddle() {
      console.log(`The ${this.name} paddles nervously away.`);
    }

    LayEgg() {
      console.log(`The ${this.name} lays an egg!`);
    }


    
}

class Reptile extends Animal {
    isScaly = true;
    constructor(name, legs, age, isScaly) {
        super(name, legs,age);
        this.isScaly = isScaly;
    }
    
    LayEgg() {
        console.log(`The ${this.name} lays an egg!`);
    }

    Gnaw() {
      console.log(`The ${this.name} gnaws on something!`);
    }

    BurrowMud() {
      console.log(`The ${this.name} burrows into the surface of the wet, slimy mud!`);
    }
}



let Bear = new Mammal('Bear',5, 4, 1000);
Bear.print();
Bear.Run();
let Lion = new Mammal('Lion',8, 4, 800);
Lion.Scratch();
let Elephant = new Mammal('Elephant', 15, 4, 0);
Elephant.Climb();


let BaldEagle = new Avian('BaldEagle', 2, 5, 7.5);
BaldEagle.Fly();
let BarnOwl = new Avian('BarnOwl', 2, 8, 5);
BarnOwl.Nest();
let Parrot = new Avian('Parrot', 2, 3, 1);
Parrot.Peck();


let Frog = new Amphibian('Frog', 4, 2, true);
Frog.Eat();
let Salamander = new Amphibian('Salamander', 4, 1, true);
Salamander.Paddle();
let Newt = new Amphibian('Newt', 4, 4, true);
Newt.LayEgg();


let Turtle = new Reptile('Turtle', 4, 2, true);
Turtle.LayEgg();
let Cartorhynchus = new Reptile('Cartorhynchus', 4, 5, false);
Cartorhynchus.Gnaw();
let Ceratops = new Reptile('Ceratops', 4, 10, true);
Ceratops.BurrowMud();
Ceratops.GameOver();