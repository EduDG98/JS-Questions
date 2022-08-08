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