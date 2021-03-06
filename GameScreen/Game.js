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

// Selects questions, copies array to use in function
const quest = document.querySelector(".questions")
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

    // Event listener to give yes/no button
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
    }else{
        window.location.href = ""
    }
}




//Calls function to generate random question on page start
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
