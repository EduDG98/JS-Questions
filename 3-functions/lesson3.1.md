±# Functions

- What are the different ways of creating a function? Explain each and add an example

    A function as an statement:
    ```javascript
    function sum(num1, num2) {
        return num1 + num2;
    }
    ```
    A function as an expresion:
    ```javascript
    const sum = function (num1, num2) {
        return num1 + num2;
    };
    ```
    An arrow function:
    ```javascript
    const sum = (num1, num2) => num1 + num2;
     ```
     Using a function constructor:
     ```javascript
    const sum = Function('num1','num2','return num1+num2');
     ```


- What is an IIFE (Immediately Invoked Function Expression)?

    A function which execute as soon as it's created
    ```javascript
    (function (num1, num2){
        return num1 + num2;
    })()

    ((num1, num2) => num1 + num2)()
    ```

- What is the different between an arrow function and a function declaration? When will you use each?

    A function delcaration introduces an identifier can be used as a constructor.
    Arrow function:
    - Don't have .this() or super() methods
    - Cannot be used as a constructor

    When wouldn't use arrow functions to:
    - make objects methods
    - call function

- What's the difference between arguments and parameters in a function?

    Parameters are the varaibles which are defined when a function is declared;
    Arguments are the values of the variables within a function when the function is invoke.


- Are Java and JavaScript related? What do they have in common?

    JavaScript code is written completely in text and need only be interpreted, it's is used primarily on HTML documents and browsers.. Java, must be compiled it it's used to make applications on devices or browsers.

    They have in common that JS's siyntax is based on Java's syntax.


