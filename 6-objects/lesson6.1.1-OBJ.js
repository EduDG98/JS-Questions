//Create an object:
const citizen = {
    name: 'Marine',
    propertries: 0,
    nationality: false,
    childrens: 0,
    address: {
        city: 'Temperley',
        street: 'Great garden',
        zip: 'WRT 056R'
    }
}
//Modified a propertry:
citizen.name = 'Lorena';

//Destructurin an object & the object within the object:   
const { name = '', propertries, nationality, childrens, address: { city, street } } = citizen;
console.log(`${name}'s house is in ${city}, ${street}.`);

//Update an Object with spread operator:
const newCitizen = {
    ...citizen,
    propertries: 1,
    address: {
        ...citizen.address,
        street: 'Nice Square',
        zip: 'SFE 0011'
    },
    drivingLisence: true,
    job: {
        status: 'working',
        salary: 2000
    }
};
console.log(newCitizen);

//The variables name have to be changed because the other one are caught (Line 17).
const { name: firstName, address: { street: newStreet, zip } } = newCitizen;
console.log(`${firstName} has moved to ${newStreet} with zip: ${zip}.`);

//Extract property names
const allCitizenProp = Object.keys(newCitizen);
console.log(allCitizenProp);

//Extract porperty values
const citizenPropValues = Object.values(newCitizen);
console.log(citizenPropValues);

//Extract property names and values
const citizenPropsAndValues = Object.entries(newCitizen)
console.log(citizenPropsAndValues);


//To know if a object is a object
function isObject1(item) {
    return item instanceof Object;
}
function isObject2(val) {
    return (typeof val === 'object');
}

console.log(isObject2(newCitizen));
console.log(isObject1(newCitizen))