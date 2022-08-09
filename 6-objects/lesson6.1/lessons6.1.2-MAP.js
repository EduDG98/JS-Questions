
const countryMap = new Map([
    ['uk', 'rainy'],
    ['spain', 'sunny'],
])

const countryObj = {
    uk: 'rainy',
    spain: 'sunny'
}

//SET
countryMap.set('china', 'cloudy')
countryObj.germany = 'rainy';

//GET
countryMap.get('uk');
countryObj.uk;

//DELETE
countryMap.delete('uk');
delete countryObj.spain;

//KEYS
const mapKeys = countryMap.keys();
console.log(`KEYS del MAP: ${mapKeys}`)
const objKeys = Object.keys(countryObj);
console.log(`KEYS del OBJECT: ${objKeys}`)

//HAS
//VALUES
//ENTRIES
//LENGTH



console.log(countryMap);
console.log(countryObj);