import { checkObjectAreIdentical } from './compareObject';

describe('checkObjectAreIdentical', () => {
    it('shoud return true because objects are identical - I', () => {
        const objectOne = { name: 'Tom', age: '44' };
        const objectTwo = { name: 'Tom', age: '44' };

        const sut = checkObjectAreIdentical(objectOne, objectTwo);

        expect(sut).toBeTruthy();
    })
    it('shoud return true because objects are identical - II', () => {
        const objectOne = { name: 'Tom', age: [20, 24] };
        const objectTwo = { name: 'Tom', age: [20, 24] };

        const sut = checkObjectAreIdentical(objectOne, objectTwo);

        expect(sut).toBeTruthy();
    })
    it('shoud return true because objects are identical - III', () => {
        const objectOne = { name: 'Tom', age: { first: 20, second: 24 } };
        const objectTwo = { name: 'Tom', age: { first: 20, second: 24 } };

        const sut = checkObjectAreIdentical(objectOne, objectTwo);

        expect(sut).toBeTruthy();
    })
    it('shoud return true because objects are identical - IV', () => {
        const objectOne = { name: 'Tom', age: { first: [10, 10], second: [10, 14] } };
        const objectTwo = { name: 'Tom', age: { first: [10, 10], second: [10, 14] } };

        const sut = checkObjectAreIdentical(objectOne, objectTwo);

        expect(sut).toBeTruthy();
    })
    it('shoud return false because objects are NOT identical - I ', () => {
        const objectOne = { name: 'Tom', age: 69 };
        const objectTwo = { name: 'Tom', age: 22 };

        const sut = checkObjectAreIdentical(objectOne, objectTwo);

        expect(sut).toBeFalsy();
    })
    it('shoud return false because objects are NOT identical - II ', () => {
        const objectOne = { name: 'Tom', age: [60, 9] };
        const objectTwo = { name: 'Tom', age: 22 };

        const sut = checkObjectAreIdentical(objectOne, objectTwo);

        expect(sut).toBeFalsy();
    })
    it('shoud return false because objects are NOT identical - III ', () => {
        const objectOne = { name: 'Tom', age: { first: 20, second: 24 } };
        const objectTwo = { name: 'Tom', age: 22 };

        const sut = checkObjectAreIdentical(objectOne, objectTwo);

        expect(sut).toBeFalsy();
    })
    it('shoud return false because objects are NOT identical - IV ', () => {
        const objectOne = { name: 'Tom', age: { first: [10, 10], second: [10, 14] } };
        const objectTwo = { name: 'Tom', age: 22 };

        const sut = checkObjectAreIdentical(objectOne, objectTwo);

        expect(sut).toBeFalsy();
    })
    it('shoud return false because objects are NOT identical - V ', () => {
        const objectOne = { name: 'Tom', age: 150 };
        const objectTwo = { name: 'Tom', fingers: 22 };

        const sut = checkObjectAreIdentical(objectOne, objectTwo);

        expect(sut).toBeFalsy();
    })
})