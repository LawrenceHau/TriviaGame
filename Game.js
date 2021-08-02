// gets score, sets value of score to 0 
let scoreStart = document.querySelector('#score')
score = 0

// Array for filling in question text
questionArr = [
    {
        question: '1 + 1 = 2',
        answer: true,
        id:1
    },
    {
        question: '2 + 5 = 6',
        answer: false,
        id:2
    },
    {
        question: '3 + 3 = 6',
        answer: true,
        id:3
    },
    {
        question: '3 + 3 = 9',
        answer: false,
        id:4
    },

]

// Selects game|  end screen score wasn't working on a seperate HTML, so I created another body|  questions|
const game = document.querySelector(".game")
const endScreen = document.querySelector(".endScreen")
endScreen.style.display = 'none'
const quest = document.querySelector(".questions")
// Creates a variable to use question array
let copyArr = questionArr
//Generates random question
const generateRandomQuestion = () => {
    if(copyArr.length !== 0){
        let randQuest = copyArr[Math.floor(Math.random() * copyArr.length)]
    // removes question used by filtering
    copyArr = copyArr.filter(item => item.id !== randQuest.id)
    // creates div with a class of question
    let divQuest = document.createElement("div")
    divQuest.className = "question"
    // inserts inner html with question and button using bracket notation| You can use on click inside of your HTML to handle an event used in a function
    divQuest.innerHTML = `
    <p>${randQuest.question}</p>
    
    `
    // Creates element for button yes and button no
    let btnYes = document.createElement("button")
    btnYes.innerText = "Yes"

    let btnNo = document.createElement("button")
    btnNo.innerText = "No"
    //Inserts button into divQuest
    divQuest.appendChild(btnYes)
    divQuest.appendChild(btnNo)
    
    //Appends question element created in line 53
    quest.appendChild(divQuest)

    // Event listener for yes or no function| states if the answer is correct then +5 if the answer is incorrect -1
    btnYes.addEventListener("click", () => {
        if (randQuest.answer) {
            score +=5
            console.log("correct")
        } else {
            score -=1
            console.log("wrong")
        }
        scoreStart.innerText = score
        quest.innerHTML = ""
        generateRandomQuestion()
    })
//  Event listener for no function: if the answer is wrong -1 score, if the answer is right add 5
    btnNo.addEventListener("click", () => {
        if (randQuest.answer) {
            score -=1
            console.log("wrong")
        } else {
            score +=5
            console.log("correct")
        }
        scoreStart.innerText = score
        quest.innerHTML = ""
        generateRandomQuestion()

        
    })

    return randQuest
    }
    else{
        endScreen.style.display = `block`
        game.style.display = `none`
        let p = document.createElement('p')
        p.innerText = `your score is ${score}/20`
        
        document.querySelector('.scoreBoard').appendChild(p)
        
    }
}

//Calls function to generate random question on page start
generateRandomQuestion()
