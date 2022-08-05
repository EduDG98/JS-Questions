# Strings

- What's the difference between `slice` and `splice`?

    ``slice``: extract a section of a string o and array and return a new string or array without modifying the original.
    ```javascript
    slice(indexStart, indexEnd)
    ```
    ``splice``: change the content of an array by removing or replacing an existing element and/or adding a new elements in place
    ```javascript
    splice(start)
    splice(start, deleteCount)
    splice(start, deleteCount, item1)
    splice(start, deleteCount, item1, item2, itemN)
    ```

- How do you check that a string contains a substring?

    includes(): The method check if a string contains a sequence of characters.

    ```javascript
    const name = 'Mariajose';
    name.includes('jose');      //return true

