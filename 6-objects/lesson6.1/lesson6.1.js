//EXAMPES:

// Objects declaratios-----------------------------------------
//1
const farm = {
    tractor: true,
    employees: 2,
    animals: {
        cows: 2,
        horse: 0
    }
};
// console.log(farm);


//2
function newFarm(tractor, employees, animals) {
    this.tractor = tractor;
    this.employees = employees;
    this.animals = animals;
};
// console.log(new newFarm(false, 10, 3));


//4
class Farm {
    constructor(tractor, employees, animals) {
        this.tractor = tractor;
        this.employees = employees;
        this.animals = animals;
    }
}
// const farmAnimal = 'cows';
// console.log(new Farm(true, 3, farmAnimal));



//To check--------------------------------------------------
const dimensions = [10, 20, 4];
const list = ['beans', 'peas', ['kiwis', 'orange']];
// console.log(Array.isArray(dimensions));
// console.log(Array.isArray(...list));


//To desctructure an object
const book = {
    title: 'Who kill the killer?',
    pages: undefined,
    hardTape: false
}
const { title, pages = 100, hardTape } = book;
// console.log(title);
// console.log(pages);
const { title: titleName, pages: numPages = 100, hardTape: frontPage } = book;
// console.log(titleName);


// Mutable and Inmutables objects
const screen = {
    width: 720,
    height: 460
}

const inmutableScreen = Object.freeze(screen);
const inmutableScreen2 = Object.seal(screen);
inmutableScreen.width = 100;
inmutableScreen2.width = 500;
delete screen.height;
screen.resolution = 2000;
//console.log(screen);


// Has a propertry?
const pheline = {
    tail: true,
    color: 'black',
    legs: 4
}

console.log('Is a tail in pheline', 'pheline' in pheline);