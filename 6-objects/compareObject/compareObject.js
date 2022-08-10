export const checkObjectAreIdentical = (objectOne, objectTwo) => {
    const hasValues = [];
    for (const property in objectOne) {
        if (objectOne.hasOwnProperty(property)) {
            if (typeof objectOne[property] === 'object' && typeof objectTwo[property] === 'object') {
                // if values are an object
                return checkObjectAreIdentical(objectOne[property], objectTwo[property]);
            } else if (objectOne[property] == objectTwo[property]) {
                // if values are NOT an object
                hasValues.push(true);
            } else { //if keys are not identical
                hasValues.push(false);
            }
        }
    }
    return hasValues.every(element => !!element);
}
