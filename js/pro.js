let sp = document.querySelector(".remove")
let y = document.querySelector(".two")
let pr = document.querySelector(".tab")
let pe = document.querySelector(".twoo")
let on = document.querySelector(".onee")
let goo = document.querySelector(".good")
 


sp.onclick = function () {
    y.append(on)
    pr.remove()
    pe.remove()
    goo.style.color = "black"
    sp.style.color = "#0071f8"

}
goo.onclick = function () {
    on.remove()
    y.append(pr)
    y.append(pe)
    sp.style.color = "black"
    goo.style.color = "#0071f8"
}