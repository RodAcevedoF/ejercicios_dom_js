//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement("div")
document.body.appendChild(newDiv)
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let divP = document.createElement("div")
let newP = document.createElement("p")
divP.appendChild(newP)
document.body.appendChild(divP)
//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let divPs = document.createElement("div")
for (let i = 0; i < 6; i++) {
    let innerP = document.createElement("p")
    divPs.appendChild(innerP)
}
document.body.appendChild(divPs)
//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let imP = document.createElement("p")
imP.textContent = "Soy dinámico"
document.body.appendChild(imP)
//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2 = document.querySelector(".fn-insert-here")
h2.textContent = "Wubba Lubba dub dub"

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"]
let appUl = document.createElement("ul")
for (let i = 0; i < apps.length; i++ ) {
    let appLi = document.createElement("li")
    appLi.textContent = apps[i]
    appUl.appendChild(appLi)
}
document.body.appendChild(appUl)
//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let toBeRemoved = document.querySelectorAll(".fn-remove-me")
toBeRemoved.forEach(elem => {
    elem.remove();
})
//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
let inDivs = document.querySelectorAll(".fn-insert-here")
let midP = document.createElement("p")
let inDiv = inDivs[1]
midP.textContent = "Voy en medio!"
inDiv.after(midP)
//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
for (let div of inDivs) {
div.insertAdjacentHTML("afterbegin", "<p>Voy en medio!</p>")
} 