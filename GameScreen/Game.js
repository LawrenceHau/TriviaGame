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
        answer: true,
        id:1
    },
    {
        question: '2+5 = 6',
        answer: false,
        id:2
    },
    {
        question: '3+3=6',
        answer: true,
        id:3
    },
    {
        question: '3+3=9',
        answer: false,
        id:4
    },

]

// Selects questions, copies array to use in function
const quest = document.querySelector(".questions")
let copyArr = questionArr

//Generates random question
const generateRandomQuestion = () => {
    let randQuest = copyArr[Math.floor(Math.random() * copyArr.length)]
    // removes question used by filtering
    copyArr = copyArr.filter(item => item.id !== randQuest.id)
    // creates div with a class of question
    let divQuest = document.createElement("div")
    divQuest.className = "question"
    // inserts inner html with question and button using bracket notation
    divQuest.innerHTML = `
    <p>${randQuest.question}</p>
    <button onclick = "HandleYes${(randQuest)}" class = "yes">Yes</button>
    <button onclick = "HandleNo${(randQuest)}" class = "no">No</button>
    `
    
    quest.appendChild(divQuest)




    return randQuest
}

function HandleYes(quest) {
    if(quest.answers){
        score += 5
        console.log("Correct")
    }else{
        score -=5
        console.log("Wrong")
    }

    function HandleNo(quest) {
    if(quest.answers){
        score += 5
        console.log("Correct")
    }else{
        score -=5
        console.log("Wrong")
    }

}
}

generateRandomQuestion()


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
