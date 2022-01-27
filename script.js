// -- TASK #1 -- //

class Worker {
    constructor(firstName, secondName, rate, days) {
        this.name = firstName;
        this.surname = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

const firstWorker = new Worker('Iryna', 'Seredyuk', 500, 24);
const secondWorker = new Worker('Vasyl', 'Kapelyukh', 700, 24);
console.log(firstWorker.getSalary());
console.log(secondWorker.getSalary());

// -- TASK #2 -- //

class MyString {
    reverse(str) {
        return str.split("").reverse().join("");
    }
    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str) {
        return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    }
}

const str = new MyString();
console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));

// -- TASK #3 -- //

class CoffeeMake {
    on() {
        console.log('Coffee make mode is ON!');
    }
    off() {
        console.log('Ooops, coffee make mode is OFF!');
    }
}

        // --- Drip Coffee Maker ---  //

class DripMaker extends CoffeeMake{
    coffeeType = 'Ground coffee';
    start() {
        console.log('Please, wait. Coffee is brewing!');
    }
    finish() {
        console.log('Coffee making is complete!');
    }
}

let drip = new DripMaker();
console.log(drip);

        // --- Carob Coffee Maker ---  //

class CarobMaker extends CoffeeMake{
    coffeeType = 'Ground coffee, or chaldi';
    auto_power_off() {
        console.log('The coffee maker will switch off automatically after 30 minutes!');
    }
}

let carob = new CarobMaker();
console.log(carob);

        // --- Coffee Machine ---  //

class CoffeeMachine extends CoffeeMake{
    coffeeType = 'Coffee beans';
    cappuccino_mode() {
        console.log('Start cappuccino cooking automatically');
    }
}

let machine = new CoffeeMachine();
console.log(machine);