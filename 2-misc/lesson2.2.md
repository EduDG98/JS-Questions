# Misc II

> Tip: to put pieces of code in a *.md file, you put three backsticks, code and three backsticks in the following way: 
\```javascript 
// code in new line
// and another three backsticks in a new line
\```
https://www.markdownguide.org/basic-syntax/#code


- What are the different ways to create an object in JavaScript?

        LITERAL NOTATION:
        ```javascript
        const car {
            model: "Mutivan",
            km: 0,
            camera: false,
            drive: function() {
                km = km++;
            }
        }
        ```
        CONSTRUCTOR NOTATION:
        ```javascript
        const car = new Object();

        car.model = "Transporte";
        car.km: 1000;
        car.drive = function() {
            km = km++;
        }
        ```


- What is Prorotype in JS?

        It's the mechanism by JS objsects to inherit features from other objs.

- What does JSON mean? What is it used for?

        JSON is JavaScript Objects Notation.
        It's a format for storing and transporting data.

- What are primitives values? What are those in JS?

        Primitive values are the ones which are not obj and don't have methods. They are immutable (cannot be altered).
        They are: Number, String, Boolean, Undefined, Symbol and BigInt. There is also null.

- Name and explain the different operators in JS

    - Arithmetic operators: for mathematical operations.
    - String concatenation: to join strings
    - Comparison operators: to compare two JS objects and filter them.
    - Logical operators: To combine 2 or more conditions.
    - Assignment operators: To ass
    - Ternary operator: To write one line code conditionals
        ```javascript
        <condition> ? <value1> : <value2>;
        ```
- What are closures in JS?

         Are functions that can access values outside of their own curly braces. Only one level below.

- What is hoisting in JS?

    It's a variable can be used before it has been declared. 
    
    ``!!! ->`` But cannot be initizalize before the function is called.

    ```javescript
    var a = 1;
    console.log(a);     //Show 1

    var b;
    console.log(b);     //Show 'undefined'
    b = 2;

    c = 3;
    console.log(c);     //Show 3
    var c;
    ```


- What type of variable declaration will you normally use? In what cases will you use `let`?

    We will always use ``const`` variable except when we realize that the value of the variable needs to change, in that case we will change the variable to let. 

- What is a callback function? Why do we need them?

    It's any function that is passed as an argument to another function.
    It's a function which will be executed after another function has finished execution.

- What is a promise? Could you name the three states of a promise?

    A JS Promise is an object that represent the completion/failure of an asynchronous task and its results.
    - Pending: the promise is working so the result is undefined.
    - Resolve: the promise is fulfilled so the result is a value.
    - Reject: the promise is rejected so the result is an error object.

- Why do we need promises?
    JS is originally synchronous so we need promises to make asychronous calls or request to the server.

- What is the difference between `null` and `undefined`?
    undefined: the variable.s has beend declared but it doesn't have a value
    null: the value represente that there isn't any  object value.