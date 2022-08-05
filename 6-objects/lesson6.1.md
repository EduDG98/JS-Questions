# Objects

- What are the different ways of creating an object in JS? (four types)
    1. ``Objects Literals / Initializer:`` separate the each  `` name: value ``  with comma`.
    ```javascript
    const house = {
        electricity: true,
        rooms: 4,
        rent: 500
    }
    ```
    2. ``New Operator / Contructor:`` To call a function which act as a Constructor and return an object.
    ```javascript
    function House(electricity, rooms, rent){
        this.electricity = electricity;
        this.rooms = rooms;
        this.rent = rent;
    }
    const myHouse = new House(true, 2, 300);
    ```
    3. ``Object.create Method:`` Use ``Object.create()`` method to specify the protype objects. The new object will have the same values in the keys.
    ```javascript
    const house = {
        electricity: true,
        rooms: 4,
        rent: 500
    }
    const myOldHouse = Object.create(house);
    ```
    4. ``Class``: To createa class (instead a function) which act as a Constructor and return an object.
    ```javascript
    class House {
        constructor(electricity, rooms, rent) {
            this.electricity = electricity;
            this.rooms = rooms;
            this.rent = rent;    
        }
    }
    ```

- What's the preffered way to create an object?
    With Objects Literals / Initializer.

- What are the different ways to access an object property?

    With dots and with brackets:
    ```javascript
        const electricityAvaliable = house.electricity;     //true
        const rentPricePounds = house['rent'];              //500
    ```

- In JavaScript everything is a object. Knowing this, how would you check that an object is an array?

    With the array method ``.isArray(...)``
    ```javascript
    const colors = ['red', 'blue'];
    const result = Array.isArray(colors);
    console.log(result);
    ```
- How do you destructure an object?

    ```javascript
      const user = {
        id: 00,
        nick: 'RawDev',
        level: undefined
    };

    const { id , nick, level = 0} = user;
    ```
- How would you clone an object?
    1. With ``spread operators``:
    ```javascript
    const country = {
        name: 'Spain',
        poblation: 5000000,
    } 
    const newSpain = {...country};
    ```
    2. With ``Object.assign``:
    ```javascript
    const Spain = Object.assign({}, country);
    ```
    The ``{}`` is usedto not mutate the original object

- What's the difference between an immutable and mutable object? How would you create an immutable object?
    - A mutable object is an object whose state can be modified after it's created.
    - A inmmutable is the obj whose state cannot be modified.



- What does `Object.seal()` and `Object.freeze()` do? What are the differences?
- What is the `ES6 Map`? What's the difference between this and a normal object?
- What is a shallow copy and a deep copy in JS? Write a function called `deepClone` that does a deepCopy in JS. And write some tests to check that it works.
- How would you check that a property exists inside an object?
- What is a Proxy in JS? When whould we use it?
- How would you extract all the property names of an object? And the values? What about both?
- How do check that an object is an object in JS? How could you test that an object is and object AND not `null`? Why is this important to check?
- How would you create a date in JS? What if I want to read it in US style, how would you transform the date into said format? And in milliseconds?
- How would you check that two objects are the same in JS? Write some tests to prove that the function that you write works