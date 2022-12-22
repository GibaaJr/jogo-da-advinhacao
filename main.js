let randomNumber = Math.round(Math.random() * 10);
let attempts = 1;
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

//eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterKey)


// funções
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        if (attempts == 1) {

            document.querySelector(".screen2 h2").innerText = `Você acertou em ${attempts} tentativa!`
        } else {
            
            document.querySelector(".screen2 h2").innerText = `Você acertou em ${attempts} tentativas!`
        }
    }

    inputNumber.value = "";

    attempts++
}

function handleResetClick() {
    toggleScreen()
    attempts = 1
    randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterKey(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
}