const randomNumber = Math.round(Math.random() * 10);
let attempts = 1;


function handleClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber").value

    attempts++
    console.log(randomNumber)

    if(Number(inputNumber) == randomNumber) {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        console.log(`Você acertou em ${attempts} tentativas`)
    }

}