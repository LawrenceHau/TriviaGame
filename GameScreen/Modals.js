//Creates Variable to use in modal function
let myStatButton = document.getElementById("statButton");
let myStatModal = document.getElementById("statModal");
let mySubmitButton = document.getElementById("submitButton");
let mySubmitModal = document.getElementById("submitModal");
let myHintButton = document.getElementById("hintButton");
let myHintModal = document.getElementById("hintModal");
let myNewQuestionButton = document.getElementById("newQuestionButton");
let myNewQuestionModal = document.getElementById("newQuestionModal");
//targets  onclick display functions
let span = document.querySelectorAll(".close")[0];
let span1 = document.querySelectorAll(".close")[1];
let span2 = document.querySelectorAll(".close")[2];
let span3 = document.querySelectorAll(".close")[3];

// Functions to display modals
myStatButton.onclick = function() {
    myStatModal.style.display = "block";
};

mySubmitButton.onclick = function() {
    mySubmitModal.style.display = "block";
};

myHintButton.onclick = function() {
    myHintModal.style.display = "block";
};

myNewQuestionButton.onclick = function() {
    myNewQuestionModal.style.display = "block";
};

//functions to exit modal on click
span.onclick = function() {
    myStatModal.style.display = "none";
};

span1.onclick = function() {
    mySubmitModal.style.display = "none";
};

span1.onclick = function() {
    myHintModal.style.display = "none";
};

span1.onclick = function() {
    myNewQuestionModal.style.display = "none";
};



//This function must be kept on the botton as it cascades through buttons
window.onclick = function (e) {
    if (e.target == submitModal){
        mySubmitModal.style.display = "none";
    } else if(e.target == statModal){
        myStatModal.style.display = "none"
    }
};

