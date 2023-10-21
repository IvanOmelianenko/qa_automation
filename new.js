function typeChecker(arg1, arg2) {
    // ваш код
        if(typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2
        } else if (typeof arg1 === 'number' && typeof arg2 == 'number') {
        return arg1 * arg2
        } else {
         return "There are no type matches for operation"
        }
        }
    
    // Приклад роботи функції:
    console.log(typeChecker(2, 3)); // виведе 6
    console.log(typeChecker("My", "text")); // виведе Mytext
    console.log(typeChecker(true, 5)); // виведе There are no type matches for operation