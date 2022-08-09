let origin = [['Acer', 'LG', 'Samsung']];
let copy = [];


export const deepClone = (org) => JSON.parse(JSON.stringify(org));


const result = deepClone(origin, copy);

console.log(result);
console.log(origin);

