let btOne = document.querySelector("#one")
let btTwo = document.querySelector("#two")
let btThree = document.querySelector("#three")
let btFour = document.querySelector("#four");
let a = document.querySelector("#a") 
let b = document.querySelector("#b") 
let c = document.querySelector("#c") 
let d = document.querySelector("#d") 
let e = document.querySelector("#e") 
let f = document.querySelector("#f") 
let g = document.querySelector("#g") 
let h = document.querySelector("#h") 
let i = document.querySelector("#i") 
let j = document.querySelector("#j") 
let k = document.querySelector("#k") 
let l = document.querySelector("#l");
let prent = document.querySelector(".box-one")

btOne.onclick = function (e) {
    e.preventDefault()
    btOne.style.backgroundColor = "#ee626b"
    btOne.style.color = "white"
    btTwo.style.color = "black"
    btThree.style.color = "black"
    btFour.style.color = "black"
    btTwo.style.backgroundColor = "#eee";
    btThree.style.backgroundColor = "#eee";
    btFour.style.backgroundColor = "#eee";
    c.style.display = "block"
    g.style.display = "block"
    a.style.display = "block"
    f.style.display = "block"
    i.style.display = "block"
    l.style.display = "block"
}
btTwo.onclick = function (e) {
    e.preventDefault()
    btTwo.style.color = "white"
    btOne.style.color = "black"
    btThree.style.color = "black"
    btFour.style.color = "black"
    btTwo.style.backgroundColor = "#ee626b"
    btOne.style.backgroundColor = "#eee";
    btThree.style.backgroundColor = "#eee";
    btFour.style.backgroundColor = "#eee";
    c.style.display = "none"
    g.style.display = "none"
    a.style.display = "block"
    f.style.display = "block"
    i.style.display = "block"
    l.style.display = "block"
}
btThree.onclick = function (e) {
    e.preventDefault()
    btThree.style.color = "white"
    btOne.style.color = "black"
    btTwo.style.color = "black"
    btFour.style.color = "black"
    btThree.style.backgroundColor = "#ee626b"
    btOne.style.backgroundColor = "#eee";
    btTwo.style.backgroundColor = "#eee";
    btFour.style.backgroundColor = "#eee";
    a.style.display = "none"
    c.style.display = "none"
    g.style.display = "none"
    f.style.display = "none"
    i.style.display = "block"
    l.style.display = "block"
    
}
btFour.onclick = function (e) {
    e.preventDefault()
    btFour.style.color = "white"
    btOne.style.color = "black"
    btTwo.style.color = "black"
    btThree.style.color = "black"
    btFour.style.backgroundColor = "#ee626b"
    btOne.style.backgroundColor = "#eee";
    btTwo.style.backgroundColor = "#eee";
    btThree.style.backgroundColor = "#eee";
    i.style.display = "none"
    l.style.display = "none"
    c.style.display = "none"
    g.style.display = "none"
    a.style.display = "none"
    f.style.display = "none"
};
