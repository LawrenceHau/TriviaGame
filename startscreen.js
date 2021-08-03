const createButton = document.querySelector(".createStartButton")

const generateButton = () => {

    let divCreateButton = document.createElement("div")
    divCreateButton.className = "startButton"
    // inserts inner html with question and button using bracket notation| You can use on click inside of your HTML to handle an event used in a function

    let btnStart = document.createElement("button")
    btnStart.innerText = "Start"

    //Inserts button into divQuest
    divCreateButton.appendChild(btnStart)
    
    createButton.appendChild(divCreateButton)

    btnStart.addEventListener("click", () => {
        window.location = `game.html`
    }) 
}



generateButton()

