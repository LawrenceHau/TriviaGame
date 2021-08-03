# Trivia Game

## **Index and related files**

**index.html**

`line 15` contains `header id = viewWords ` to style everything within in CSS

`line 25` contains `div class = "createStartButton"` used to create a start button in _startscreen.js_

`line 27` contains `script src = startscreen.js`

##

**startscreen.js**

`line 1` creates const called createButton

`line 3-26` Create button function

`line 5 and 6` create a div with a class of startButton

`line 9 and 10` creates a button with an inner text of start

`line 13` appends button into div

`line 15` appends div into query selector

`line 17-18` when you click the button the window goes to game.html

`line 24` calls function in line 3

![URL SECTION](./readmefiles/start.gif)

---

## Game and related files

**game.html**

`line 13 to 15` autoplays a muted looped video in the background styled in css

`line 17` grabs the scorebox to allow styling in css

`line 18` creates a header for the scorebox, **span id** used in JS to input score function

`line 22` creates a class called game

`line 23` creates id timer will be used to add timer, still need **js function for this** also will be used to style css

`line 24` creates div for questions, used to input questions in JS

`line 30` end screen div used to style end screen

`line 32` thank youf or playing text

`line 34` scoreboard used to display scoreboard results, functions used in game js

**game.js**

`line 1-3 refers to score class`[used here](./game.html) in `line 22`

`line 7-109` creates an array of questions used in function `line 119-131`

![URL SECTION](./readmefiles/2.png)

`line 133-143` creates the true or false button, and appends it to the div, then the yes and no button as well as the question. refer to `line 22 and 24` [here](./game.html)

![URL SECTION](./readmefiles/3.png)

`line 144-175` gives the button click an event of if question is right +5 if wrong -5, it also holds variable for how many answers are correct.
![URL SECTION](./readmefiles/4.gif)

`line 182~` displays the end screen, and turns off the game screen. it appends your final score, as well as answers you have gotten correct. also creates two buttons which restarts the game [here](./index.html), and the other one sends you to my github [here](https://github.com/LawrenceHau)
![URL SECTION](./readmefiles/5.gif)
