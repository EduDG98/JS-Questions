import { deepClone } from './lesson6.1.3-SHALLOW-COPY';

describe('DeepClone', () => {
    it('should make a copy fron an array', () => {
        //Arrange
        const originArray = [['pencil', 'notebook', 'rubber']];
        const expected = [['pencil', 'notebook', 'rubber']];

        //ACT
        const sut = deepClone(originArray);

        //ASSERT
        expect(sut).toEqual(expected);
    })

    it('should check each item of the origin and copied array', () => {
        //Arrange
        const originArray = [['pencil', 'notebook', 'rubber']];
        const expected = [['pencil', 'notebook', 'rubber']];

        //Act
        const sut = originArray[0].every((originItem, index) => {
            return originItem === expected[0][index];
        });

        //Assert
        expect(sut).toBeTruthy();
    })

    it('should modified the copied array but not the original', () => {
        const originArray = [['red', 'blue', 'green']];

        const sut = deepClone(originArray)[0].push('purple');

        expect(sut).not.toEqual(originArray);
    })
})