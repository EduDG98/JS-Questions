# 2. This

- Define what it "scope" in JS, the different types with examples 

Scope in JS is the context of code which determinate the variables accessibility.

    -Global scope: global variables can be accessed from any where in the browser context.
    ```javascript
    var a;
    ```
    -Functional scope: variables are declared inside the fuction, they can only be accessed within the function.
    ```javascript
    function () {
        let b;
    }
    ```
    -Block scope: variables declared inside a block of code cannot be accessed form outside the block.
    ```javascript
    if (1 < 2) {
        const c = 10;
    }
    ```

- Explain "this" with examples

.this it's a key word which refers to an object.

In a method, it refers to the method obj.
```javascript
const horse = {
    legs: 4,
    run() {
        console.log("Horse legs: " + this.legs);
    }
}
```
Alone, it refers to the global obj.
```javascript
let a = this;
```
In a function, it refers to a global obj.
```javascript
function run(){
    console.log(this)
}
```
In an event, it refers to the element reciving the event. In event Handlers for example:
```html
<button onclick="this.style.display='none'"></button>
```
