let origin = [['Acer', 'LG', 'Samsung']];
let copy = [];


const deepClone = (org, copy) => JSON.parse(JSON.stringify(org));


const result = deepClone(origin, copy);

console.log(result);
console.log(origin);

