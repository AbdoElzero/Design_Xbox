let a = document.querySelector("[name ='text']").value
let b = document.querySelector("[name ='sur']").value
let c = document.querySelector("[name ='text']")

document.forms[0].onsubmit = function (e) {
    let one = false
    let two = false
    
    if (a !== "" && a.length <= 10) {
        one = true
    }

    if (b !== "" && b.length <= 8) {
        two = true
    }

    if (one === false || two === false) {
        e.preventDefault()
    }
}

window.onload = function () {
    c.focus()
}