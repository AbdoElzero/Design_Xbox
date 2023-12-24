let one = document.querySelector(".one")
let divOne = document.querySelector(".done")
let liOne = document.querySelector(".aone")
let div = document.querySelector(".dtwo")
let liTwo = document.querySelector("[type= 'submit']")
let divThree = document.querySelector(".dthree")

liOne.onclick = function () {
    div.style.display = "block"
    divOne.remove();
}
liTwo.onclick = function () {
    div.remove()
    divThree.style.display = "block"
}

let ap = document.querySelector("[name = 'hi']")
let cd = document.querySelector("[name='num']")

document.forms[0].onsubmit = function (w) {
    let lo = false
    let two = false
    
    if (ap.value !== "" && ap.value.length <= 10) {
        lo = true
    }
    
    if (cd.value !== "" && cd.value.length <= 8) {
        two = true
    }
    
    if (lo === false || two === false) {
        w.preventDefault()
    }
}

