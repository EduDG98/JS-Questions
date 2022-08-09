import { checkIsObject, checkIsObjectAndNotArray } from './objectVsNull';

describe('checkIsObject', () => {
    it('shoud return true because it is an JS Object', () => {
        const object = { zip1: 155, zip2: 233 };

        const sut = checkIsObject(object);

        expect(sut).toBeTruthy();
    })

    it('shoud return false because it is null', () => {
        const object = null;

        const sut = checkIsObject(object);

        expect(sut).toBeFalsy();
    })

    it('shoud return true because it is an JS object', () => {
        const object = [1, 2, 3, 4];

        const sut = checkIsObject(object);

        expect(sut).toBeTruthy();
    })

    it('shoud return true because it is an array', () => {
        const object = [1, 2, 3, 4];

        const sut = Array.isArray(object);

        expect(sut).toBeTruthy();
    })

    it('shoud return false because it is a JS Object', () => {
        const object = { item1: 1, item2: 2 };

        const sut = Array.isArray(object);

        expect(sut).toBeFalsy();
    });
});

describe('checkIsObjectAndNotArray', () => {
    it('should return true because it is aJS Objecten but not an Array', () => {
        const obj = {};

        const sut = checkIsObjectAndNotArray(obj);

        expect(sut).toBeTruthy();
    });
});