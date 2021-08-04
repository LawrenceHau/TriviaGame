# Trivia Game

## **index.html**

    script src = startscreen.js
    stylesheet = startScreenStyle.css
    id viewWords styles the list, and the start button
    class createStartButton used in startscreen.js

contains `<li>` within `<p>` that give the instructions of the game

## **startscreen.js**

    const createButton selects class createStartButton in index.html
    function = generateButton

Creates start button function by creating a div with a button

- creates div w/ class startButton

- appends button to div

- appends div to createButton

- calls function generateButton

- when you click the button the window goes to [game.html](./game.html)

<img src="./readmefiles/start.gif" width="800">

---

## **game.html**

    div class top

allows styling of scoreboard
`line 17` grabs the scorebox to allow styling in css

creates a `header` with a `span` within with an id of score **span id** used in JS to input score function

`line 22` creates a class called game

`line 23` creates id timer will be used to add timer, still need **js function for this** also will be used to style css

`line 24` creates div for questions, used to input questions in JS

`line 30` end screen div used to style end screen

`line 32` thank youf or playing text

`line 34` scoreboard used to display scoreboard results, functions used in game js

**game.js**

`line 1-3 refers to score class`[used here](./game.html) in `line 22`

Created variable **`questionsArr`** to create an array of questions to be used in functions

creates the true or false button, and appends it to the div, then the yes and no button as well as the question. refer to line 22 and 24 [here](./game.html)

    Variable questionArr is an array containing a list of questions, answers and question ids
    Constant game selects the Class of game in [game./html](./game.html)
    Variable scoreStart selects the ID score used in [game.html](./game.html)
    Variable score will be used to store questions answered correctly in function
    Function generateRandomQuestionLength
    Variable btnYes = True
    Variable btnNo = False
    Variable answeredCorrect stores the amount of answers you answered correctly
    finalScore.innerText displays your final score out of 100
    finalCorrect displays how many questions you have answered correctly

- removes questions used through filtering

- creates div with class **question** and inserts a random question

<img src="./readmefiles/2.png" width="800">

- creates True and False buttons

<img src="./readmefiles/3.png" width="800">

- creates functions to adds and subtracts score based on questions answered correctly when buttons are pressed

<img src="./readmefiles/4.gif" width="800">

- if answered correctly the answered correct variable will go up by 1 and will be displayed at the result screen

- if you have answered all of the questions then the end of the screen will display your score results, and how many questions you answered correctly

<img src="./readmefiles/5.gif" width="800">

- creates a restart button that returns you to [index.html](./index.html)

<img src="./readmefiles/restart.gif" width="800">

- creates a button that links to my [github](https://github.com/LawrenceHau)

<img src="./readmefiles/github.gif" width="800">
