// gets score, sets value of score to 0 
let scoreStart = document.querySelector('#score')
score = 0
answeredCorrect = 0

// Array for filling in question text
questionArr = [
    {
        question: 'The only way to end knock up CC early to use cleanse while in the mid-air, then flash to reset your position to the ground',
        answer: true,
        id:1
    },
    {
        question: 'If the opposing laner is leashing the enemy jungler you can pull their minions to simultaniously push the lane towards you while making them suffer an exp disadvantage. ',
        answer: true,
        id:2
    },
    {
        question: 'You can buffer certain abilities mid animation to prevent the enemy from reacting to your animation',
        answer: true,
        id:3
    },
    {
        question: 'You can use Hextech Rocketbelt to reset your auto attacks',
        answer: true,
        id:4
    },
    {
        question: 'Summonor Spell Cleanse removes Exhaust and Ignite casted on you',
        answer: true,
        id:5
    },
    {
        question: 'Turrets take 67% reduced damage while you have no allied minions around',
        answer: true,
        id:6
    },
    {
        question: 'When playing shen if you use your flash during your taunt animation you can extend the range of it',
        answer: true,
        id:7
    },
    {
        question: 'When playing Lissandra if you charge hexflash while in the middle of your E animation you can cast hexflash as soon as you jump',
        answer: true,
        id:8
    },
    {
        question: 'Warwick can follow a teleporting enemy using his Q no matter the distance',
        answer: true,
        id:9
    },
    {
        question: 'You can only place wards based on their set distance',
        answer: false,
        id:10
    },
    {
        question: 'You can not attack an enemy while you are in tower range without being hit',
        answer: false,
        id:11
    },
    {
        question: 'You can use the summoner spell Teleport during Nocturnes ult',
        answer: false,
        id:12
    },
    {
        question: 'Cleanse removes Malzahars ultimate',
        answer: false,
        id:13
    },
    {
        question: 'You can extend the range of Galios E with flash ',
        answer: false,
        id:14
    },
    {
        question: 'Cleanse removes Zeds ultimate',
        answer: false,
        id:15
    },
    {
        question: 'Cleanse removes Fizzs ultimate from the game',
        answer: false,
        id:16
    },
    {
        question: 'If you assist the enemy team, and they capture dragon you will not be rewarded a stack for your rune ',
        answer: false,
        id:17
    },
    {
        question: 'Bounties increase mid combat',
        answer: false,
        id:18
    },
    {
        question: 'Yasuo can not dash through walls',
        answer: false,
        id:19
    },
    {
        question: 'Twitch can not back while invisible',
        answer: false,
        id:20
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
    btnYes.innerText = "True"

    let btnNo = document.createElement("button")
    btnNo.innerText = "False"
    //Inserts button into divQuest
    divQuest.appendChild(btnYes)
    divQuest.appendChild(btnNo)
    
    //Appends question element created in line 53
    quest.appendChild(divQuest)

    // Event listener for yes or no function| states if the answer is correct then +5 if the answer is incorrect -1
    btnYes.addEventListener("click", () => {
        if (randQuest.answer) {
            score +=5
            answeredCorrect += 1
            console.log("correct")
            console.log(answeredCorrect)
        } else {
            score -=5
            answeredCorrect = answeredCorrect
            console.log("wrong")
            console.log(answeredCorrect)
        }
        scoreStart.innerText = score
        quest.innerHTML = ""
        generateRandomQuestion()
    })
//  Event listener for no function: if the answer is wrong -1 score, if the answer is right add 5
    btnNo.addEventListener("click", () => {
        if (randQuest.answer) {
            score -=5
            answeredCorrect = answeredCorrect
            console.log("wrong")
            console.log(answeredCorrect)
        } else {
            score +=5
            answeredCorrect += 1
            console.log("correct")
            console.log(answeredCorrect)
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
        let finalScore = document.createElement('p')
        finalScore.innerText = `Your score is ${score}/100`
        let finalCorrect = document.createElement('p')
        finalCorrect.innerText = `You have answered ${answeredCorrect}/20 correctly`
        
        
        
        document.querySelector('.scoreBoard').appendChild(finalScore)
        document.querySelector('.scoreBoard').appendChild(finalCorrect)
        let buttonRestart = document.createElement('button')
        buttonRestart.innerText = (`Restart`)
        buttonRestart.innerText = "Restart"
        let buttonGit = document.createElement('button')
        buttonGit.className = "gitHub"
        buttonGit.innerText = `Support My Github`
        document.querySelector('.scoreBoard').appendChild(buttonRestart)
        document.querySelector('.scoreBoard').appendChild(buttonGit)
        

        buttonRestart.addEventListener("click", () => {
            window.location = `index.html`
        }) 

        buttonGit.addEventListener("click", () => {
            location.href =  `https://github.com/LawrenceHau"`
        }) 
    }
}

//Calls function to generate random question on page start
generateRandomQuestion()
//need edit to push
