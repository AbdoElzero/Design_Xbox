let number = Math.floor(Math.random() * 100) + 1;
console.log(number)

// عدد المرات

let playr = 10;


function check() {
    let userinput = parseInt(document.getElementById("input").value);
    let text = document.getElementById("text");

    if (isNaN(userinput)) {
        text.textContent = "Please Enter A Valid Number"
        return;
    }

    playr -= 1;

    if (userinput === number) {
        text.textContent = "Awesome I Found The Right Number.";
        dis()
    } else if (playr === 0) {
        text.textContent = "Unfortunately I Have Carried Out The Attempts The Correct Number Is " + number + ".";
        dis()
    } else if (userinput < number) {
        text.textContent = "The Number You Entered Is Less Than Your Integer " + playr + " Remaining Attempts."
    }else {
        text.textContent = "The Number You Entered Is Greater Than Your Integer " + playr + " Remaining Attempts."
    }
}

function dis() {
    let guess = document.getElementById("input");
    let button = document.getElementById("start");

    guess.disabled = true;
    button.disabled = true;
}

document.getElementById("start").addEventListener("click", check);


function onDis() {
    let guess = document.getElementById("input");
    let button = document.getElementById("start");

    number = Math.floor(Math.random() * 100) + 1;
    console.log(number)
    playr = 10;
    guess.disabled = false;
    button.disabled = false;
    text.textContent = "";
    guess.value = ""
}
document.getElementById("reset").addEventListener("click", onDis)