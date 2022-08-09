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

---
- What's the preffered way to create an object?

    With Objects Literals / Initializer.

---
- What are the different ways to access an object property?

    With dots and with brackets:
    ```javascript
        const electricityAvaliable = house.electricity;     //true
        const rentPricePounds = house['rent'];              //500
    ```

---
- In JavaScript everything is a object. Knowing this, how would you check that an object is an array?

    With the array method ``.isArray(...)``
    ```javascript
    const colors = ['red', 'blue'];
    const result = Array.isArray(colors);
    console.log(result);
    ```

---
- How do you destructure an object?

    ```javascript
      const user = {
        id: 00,
        nick: 'RawDev',
        level: undefined
    };

    const { id , nick, level = 0} = user;
    ```

---
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

---
- What's the difference between an immutable and mutable object? How would you create an immutable object?
    - A mutable object is an object whose state can be modified after it's created.
    - A inmmutable is the obj whose state cannot be modified.
    ```javascript
        const inmutableCoutry = Object.freeze(country);
    ```

---
- What does `Object.seal()` and `Object.freeze()` do? What are the differences?

    ``Object.freeze()`` don't let modified/create/delete properties in the selected object.
    ``Object.seal``  prevent from deletion of existing properties but they can be changed.
See lessons6.1.1-OBJ.js
---
- What is the `ES6 Map`? What's the difference between this and a normal object?

    The ``Map`` is an object which contain key-value. This keys can be any type of JS Object (not as an Object that can only be Strings). To know the size it can be used the method ``size`` (A for-in in a JS Object).
    ```javascript
    const weather = new Map([
                        ['key', 'value'], 
                        ['key', 'value']
    ])
    ```
    See lessons6.1.2-MAP.js

---
- What is a shallow copy and a deep copy in JS? Write a function called `deepClone` that does a deepCopy in JS. And write some tests to check that it works.

    A shallow copy of an object is a copy whose propertries share same reference. If the copy it's modified also it's modified at the source object. This happend on JS objects with two or more levels (an array inside another array / bidimensional array).

    To prevent it, the solution is to create a deep copy, corverting the JS object to a JSON and then to an JS object:
    ```javascript
    const copy = JSON.parse(JSON.stringify(org));
    ```

---
- How would you check that a property exists inside an object?
    There are two ways:
    1. With ``in``:
    ```javascript
    name in country;                    //Return true or false
    ```
    2. ``hasOwnPropetry`` method:
    ```javascript
    country.hasOwnPropertry(name);      //Return true or false
    ```
---  
- What is a Proxy in JS? When whould we use it?

    It's an object which let you create a proxy (act on behalf) of another object. The proxy object create an object that can be used instead of the original object but with redefine operations as ``get``, ``set`` and ``properties``.
    They are used to log property accesses,validate, format or sanitize inputs (cybersegurity measure of cheking and filtering data inputs)
---
- How would you extract all the property names of an object? And the values? What about both?
    
    To extrar property names:
    ```javascript
    Object.keys(objName);           //Return an array with the names
    ```
    To extract property values:
    ```javascript
    Object.values(objName);         //Return an array with the values
    ```
    To extract property values:
    ```javascript
    Object.entries(objName);        //Return an array with both
    ```
---
- How do check that an object is an object in JS? How could you test that an object is and object AND not `null`? Why is this important to check?

    To check if an value is an object:
    ```javascript
    function isObject1(item) {
    return item instanceof Object;
    }
    ```
    Or also:
    ```javascript
    function isObject2(val) {
        return (typeof val === 'object');
    }
    ```

    To check that an object is not ``undefined``:
    ```javascript
    typeof value === "object"
    ```

    To checl that an object is not ``null``:
    ```javascript
    value !== null
    ```

    To help, all of this can be in an arrow funcion as:
    ```javascript
    (value) => typeof value === "object" && value !== null;
    ```
---
- How would you create a date in JS? What if I want to read it in US style, how would you transform the date into said format? And in milliseconds?
- How would you check that two objects are the same in JS? Write some tests to prove that the function that you write works