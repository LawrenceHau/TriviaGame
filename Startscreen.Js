const quest = document.querySelector(".createStartButton")

const generateRandomQuestion = () => {

    let divQuest = document.createElement("div")
    divQuest.className = "startButton"
    // inserts inner html with question and button using bracket notation| You can use on click inside of your HTML to handle an event used in a function
    divQuest.innerHTML = `
    
    
    `

    let btnStart = document.createElement("button")
    btnStart.innerText = "Start"


    //Inserts button into divQuest
    divQuest.appendChild(btnStart)
    
    //Appends question element created in line 53
    quest.appendChild(divQuest)

    btnStart.addEventListener("click", () => {
        window.location = `Game.html`
    }) 
}



generateRandomQuestion()

