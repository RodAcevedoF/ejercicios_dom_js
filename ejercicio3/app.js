//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let newUl = document.createElement('ul')
for (let country of countries) {
    let newLi = document.createElement('li')
    newLi.textContent = country
    newUl.appendChild(newLi)
}
document.body.appendChild(newUl)
//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let beGone = document.querySelector('.fn-remove-me')
beGone.remove()
//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let carUl = document.createElement('ul')
for (let car of cars) {
    let carLi = document.createElement('li')
    carLi.textContent = car
    carUl.appendChild(carLi)
}
let inDiv = document.querySelector('[data-function="printHere"]')
inDiv.appendChild(carUl)
/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen*/
const countriesB = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]
for (let countryB of countriesB) {
    let cont = document.createElement("div")
    cont.insertAdjacentHTML("beforeend",`<h4>${countryB.title}</h4><img src=${countryB.imgUrl}>`)
    document.body.appendChild(cont)
}
/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/
//Entendí como el ultimo elemento dentro del div, probé con divs[i].remove() y eliminaba todo el div.
let btn = document.createElement("button")
btn.textContent = "Delete"
let divs = document.querySelectorAll("div")
btn.addEventListener("click", () => {
for (let i = 1; i < divs.length; i++) {
    divs[i].removeChild(divs[i].children[1]);
}
})
document.body.appendChild(btn)
/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.*/
for (let i = 1; i < divs.length; i++) {
    let selfBtn = document.createElement("button")
    selfBtn.textContent = "Supr img"
    divs[i].appendChild(selfBtn)
    selfBtn.addEventListener("click", () => {
        divs[i].removeChild(divs[i].children[1])
    })
}

