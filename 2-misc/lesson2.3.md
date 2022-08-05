# Misc III

- What's the difference between an `undeclared` and `undefined` variable?
    undeclared: the variavle doesn't exist in the program.
    undefined: the variable has been declared but it doesn't have a value.


- What are global variables? What's the problem with them? How would you declare a global variable (add an example)?
    Global varaibles are variables declared outside the function and they can be accessed by all the program.
    As they can be accessed by all the program it doesn't have privacy.
    ```javascript
    let state = true;
    var name = "Jhon";
    ```

- What does it mean when you put an exclamation before a value?.

    ``!`` or ``bang`` it's a logical operator and represent ``not``. It menas it return the opposite.
    
    ```javascript 
    const isHappy = true;

    const amIHapppy = !isHappy;
    ```

- What is the value `NaN`?

    Nan it's ``not-a-number``. It means it's not a legal number. JS uses it as the result of a failed operation with numbers.

- What is the `typeof` operator?

    It's an operator which returns a string with the type of the operand
    ```javascript
    typeof(operand);
    typeof operand;
    ```

- What is the difference between `cookies`, `local storage` and `session storage`? [IMPORTANT]

    ``Cookies``: are storaged in the browser and server and they send the information to the server.

    ``Local Storage``: are storaged only in the brwoser but data doesn't expire when the page session ends.

    ``Session storage``: are storaged only in the brwoser and data is cleared whn the page session ends.

- What are different ways to put a string value in JS? When would you use each?
    After declaring the variable, we initialize the string with single, double or literal quotes:
    ```javascript
    const name = 'Annie';
    const surname = "Smith";
    const nick = `Ann or ${name}`
    ```


- There's various types of operators in JS. Name them and write down the different options for each group

    - Arithmetic operators: `+`, `-`, `*`, ``/``, ``%``, ``++``, `--`. For mathematical operations.
    - String concatenation: ``+``.
    - Comparison operators: ``==``, ``===``, ``!=``, `>`, ``<``, ``>=``, ``<==``.
    - Logical operators: ``&&``, ``||``, ``!``. To combine 2 or more conditions.
    - Assignment operators: `=`. ``+=``. ``-=``, ``*=``, ``/=``, ``%=``.
    - Ternary operator: 
        ```javascript
        <condition> ? <value1> : <value2>;
        ```

- What are bitwise operators?

        It's an operator which treats its operands as a set 32-bit binary digits.

- What's the difference between `==` and `===`?

    ``==`` Compare two variable regardless the type of the variable.

    ``===`` Compare two vairables cheking the values and the type of them.

- How would you generate a random Integer number?

    ```javascript
    Math.random()
    ```