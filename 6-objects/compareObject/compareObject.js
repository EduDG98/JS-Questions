const pet1 = { type: 'turtle', name: 'Pet' };
const pet2 = { type: 'turtle', name: 'Pet' };
const pet3 = { type: 'bird', name: 'Rob' };

const checkObjectAreEqual = (objecToCompare1, objecToCompare2) => {
    const ArrayObject1 = Object.entries(objecToCompare1).flat();
    const ArrayObject2 = Object.entries(objecToCompare2).flat();
    return ArrayObject1;

}

const result = checkObjectAreEqual(pet1, pet2);
console.log(result);