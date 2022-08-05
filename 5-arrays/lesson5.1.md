# Arrays

- What are arrays in JS? How would you create one, access/modify its elements and add elements?

    ``Arrays`` are object in JS which grow and shrink dynamically and can store a list of values.

    Create arrays:
    ```javascript
    const colors = ['blue', 'red', 'green'];
    ```
    Access/modify an array content:
    ```javascript
    const carColor = colors[1];
    ```
    Add am element to an array:
    ```javascript
    colors.push('orange')       //['blue', 'red', 'green', 'orange']
    ```


- What possible types can have an array? Can you mix them?

    Arrays can have any types. Yes we can mix them.

- Explain the following array methods: [ join(), pop(), push(), shift(), unshift(), concat(), map(), filter(), reduce(), every(), some(), indexOf(), lastIndexOf(), find(), findIndex(), includes() ]

    ``join``: to join all the elments inside an arrays.

    ``pop``: to remove the last element of an array.

    ``push``: to add an element by the end of the array.

    ``shift``: to remove the first element of an array.

    ``unshift``: to add element by the beginning of the array.

    ``concat``: to join two arrays in one.

    ``map``: to copy an array aplying the changes of the callback function.

    ``filter``: create a new array with the elements that fullfilled the condition of the callback function.

    ``reduce``: to reduce the array depeding on the callback function.

    ``every``: return true if all the array's element fullfill the condition of the callback function.

    ``some``: return true if any element (not neccesary all) fullfill the condition of the callback function.

    ``indexOf``: return the first index at which a given element/substring can be found in the array/ string (if it isn't any it return -1) It's posible to especify the index where we want to start 

    ``lastIndexOf``: return the last index where the element can be found in an Array or in a String.

    ``find``: return the fisrt element of the array which satisfies the callback function.

    ``findIndex``: return the fisrt index of element in the array which satisfies the callback function.

    ``includes``: return true if the element exist in the array.


- What's the spread syntax? And the rest syntax? What are their differences?

    ``spread syntax``: Is just three dots ``...``, it can be used on array and represents all the elements of the array (Do not confuse with the array as calling it by the name).
    ```javascript
    const array1 = [3,4,5];
    const result = [1,2,array1,6,7];        //[1,2, [3,4,5] ,6,7]
    const result2 = [1,2, ...array1,6,7];   //[1,2,3,4,5,6,7]
    ```
    ``rest syntax``: Is also three dots ``...``  but it represents the rest elements of an array.
    ```javascript
    const digitsArray = [4,5,6];
    const numberFoo = (num1, num2, num3, ...numArray) => {...};
    numberFoo(1,2,3,...digitsArray);       // The same to write: numberFoo(1,2,3,4,5,6)
    ```

- What it means to destructure an array? How would you do it?

    It is a way to extract multiple values from and array and put them in differents variables.
    ```javascript
        const cars = ['Polo', 'Golf', 'Fiesta', 'Corsa'];
        const [car1, car2, car3, car4] = cars;
        //car1 = 'Polo'
        //car2 = 'Golf'
        //car3 = 'Fiesta'
        //car4 = 'corsa'
    ```
    Also you can do it like:
    ```javascript
    const [car1, car2, car3, car4] = ['Polo', 'Golf', 'Fiesta', 'Corsa'];
    ```

- When you destructure an array and/or an object, how would you assign default values to those?
    
    ```javascript
    const user = {
        id: 00,
        nick: 'RawDev',
        level: undefined
    };

    const { id , nick, level = 0} = user;
    ```  

- What's the difference between `forEach` and `map`?

    The main difference is map can chain  other methods while forEach cannot.

- What is a regular expression in JS? How would you test a string contains the letter `A` with regex?

    Are pattern used to match character combinations in strings
    ```javascript
    const sentence = 'Kokomo the best song';
    const songName = 'Kokomo';

    console.log(songName.test(sentence));   //Return true if it's
    ```

