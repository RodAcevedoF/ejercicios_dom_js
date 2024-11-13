//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let btn = document.querySelector(".showme")
console.log(btn) 
//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const title = document.querySelector("#pillado")
console.log(title)
//1.3 Usa querySelector para mostrar por consola todos los p
const allP = document.querySelectorAll("p")
console.log(allP)
//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemonClass = document.querySelectorAll(".pokemon")
console.log(pokemonClass)
//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const testMeArr = document.querySelectorAll('[data-function="testMe"]');
console.log(testMeArr);
testMeArr.forEach(span => {
    console.log(span.textContent)
})
    //1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".*/
const testMeItem = testMeArr[2]
console.log(testMeItem)
console.log(testMeItem.textContent)
