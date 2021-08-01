// Gets the question 
let scoreStart = document.querySelector('#score')
score = 0

// let answer = null
// // Gets yes and no buttons
// const yes = document.querySelector('#yes')
// const no = document.querySelector('#no')

// Gives yes and no true and false values.
// yes.value = true
// no.value = false
//  variables for current question & availiable questions
// let currentQuestion = {}
// let availiableQuestions = []
// let totalQuestions = 0

// Array for filling in question text
questionArr = [
    {
        question: '1+1 = 2',
        answer: true
    },
    {
        question: '2+5 = 6',
        answer: false
    },
    {
        question: '3+3=6',
        answer: true
    },
    {
        question: '3+3=9',
        answer: false
    },

]

let copyArr = questionArr

//Generates random question
const generateRandomQuestion = () => {
    let randQuest = copyArr[Math.floor(Math.random() * copyArr.length)]
}







const quest = document.querySelector(".questions")

// Question Array for each question

// questionArr.forEach(quest => {
//     let divQues = document.createElement("div")
//     divQues.className = "question"

//     divQuest.innerHTML = `
//     <p>${quest.question}</p>
//     <button id ="yes">Yes</button>
//     <button id="no">No</button>
//     `
// })




//Testing yes and no values
// function testYes(){
//     console.log(yes.value)
// }
// yes.addEventListener('click', testYes)

// function testNo(){
//     console.log(no.value)
// }
// no.addEventListener('click', testNo)





//  starts the game if score start is 0, and iterates over the availaible questions starts the get new question function
// startGame = () => {
//     getNewQuestion()
// }
// // Function for getting new question
// getNewQuestion = () => {
//     question.innerText = questionText;

//     }
