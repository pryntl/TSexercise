const input = document.querySelector("#input")  as HTMLInputElement
const equal = document.querySelector("#equal")  as HTMLInputElement

equal.addEventListener('click' , meow)
function meow (){
    let result
let value = input.value
let array:any = value.split(" ")
 if (array[1] = "+"){
    result = Number(array[0]) + Number(array[2])
 }
 else if (array[1] = "-"){
    result = Number(array[0]) - Number(array[2])
 }
 else if (array[1] = "*"){
    result = Number(array[0]) * Number(array[2])
 }
 else if (array[1] = "/"){
    result = Number(array[0]) / Number(array[2])
 }
 console.log(result);
}