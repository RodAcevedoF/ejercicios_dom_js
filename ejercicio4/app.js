/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/
const btn = document.createElement("button")
btn.textContent = "Click me"
btn.id = "btnToClick"
btn.addEventListener("click", (ev) => {
    console.log(ev)
});
let click_inpt = document.querySelector(".click")
click_inpt.after(btn)

let inpts = document.querySelectorAll("input") //test para ver si coge el valor de la clase como placeholder
for (let i = 0; i < inpts.length; i++) {
    inpts[i].placeholder = inpts[i].classList
}
/*1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/
let focus = document.querySelector(".focus")
focus.addEventListener("focus", () => {
    console.log(focus.value)
})
/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/
let val = document.querySelector(".value")
val.addEventListener("input", () => {
    console.log(val.value)
})

//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ]

let newUl = document.createElement("ul")
albums.forEach(album => {
    let newli = document.createElement("li")
    newli.textContent = album
    newUl.appendChild(newli)
    console.log(album) //Me entró la duda de sacarlo por consola por el imprimir, pero seguro entendí mal
})
document.body.appendChild(newUl)