// Gets the question 
let question = document.querySelector('#question')
let scoreStart = document.querySelector('#scoreStart')
let answer = null
// Gets yes and no buttons
const yes = document.querySelector('#yes')
const no = document.querySelector('#no')

// Gives yes and no true and false values.
yes.value = true
no.value = false
//  variables for current question & availiable questions
let currentQuestion = {}
let availiableQuestions = []
let totalQuestions = 0

// Array for filling in question text
questionText = [
    {
        question: 'fill',
        answer: true
    },
    {
        question: 'fill',
        answer: false
    },
    {
        question: 'fill',
        answer: true
    },
    {
        question: 'fill',
        answer: false
    },

]

//Testing yes and no values
function testYes(){
    console.log(yes.value)
}
yes.addEventListener('click', testYes)

function testNo(){
    console.log(no.value)
}
no.addEventListener('click', testNo)





//  starts the game if score start is 0, and iterates over the availaible questions starts the get new question function
startGame = () => {
    getNewQuestion()
}
// Function for getting new question
getNewQuestion = () => {
    question.innerText = questionText;

    }
