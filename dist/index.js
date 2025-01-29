"use strict";
const input = document.querySelector("#input");
const equal = document.querySelector("#equal");
equal.addEventListener('click', meow);
function meow() {
    let result;
    let value = input.value;
    let array = value.split(" ");
    if (array[1] = "+") {
        result = Number(array[0]) + Number(array[2]);
    }
    else if (array[1] = "-") {
        result = Number(array[0]) - Number(array[2]);
    }
    else if (array[1] = "*") {
        result = Number(array[0]) * Number(array[2]);
    }
    else if (array[1] = "/") {
        result = Number(array[0]) / Number(array[2]);
    }
    console.log(result);
}
//# sourceMappingURL=index.js.map