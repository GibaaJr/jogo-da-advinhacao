const randomNumber = Math.round(Math.random() * 10);
let attempts = 1;
console.log(randomNumber)


function handleClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")
        if (attempts == 1) {

            document.querySelector(".screen2 h2").innerText = `Você acertou em ${attempts} tentativa!`
        } else {
            
            document.querySelector(".screen2 h2").innerText = `Você acertou em ${attempts} tentativas!`
        }
    }

    attempts++
}

//eventos

btnTry = document.querySelector("#btnTry")
btnReset = document.querySelector("#btnReset")