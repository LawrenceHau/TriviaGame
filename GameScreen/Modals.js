//Creates stat modal and function
let myStatModal = document.getElementById("statModal");
let myStatButton = document.getElementById("statButton");
let span = document.getElementsByClassName("close")[0];
console.log(span)

myStatButton.onclick = function() {
    myStatModal.style.display = "block";
}

span.onclick = function() {
    myStatModal.style.display = "none";
}

window.onclick = function (e) {
    if (e.target == statModal){
        myStatModal.style.display = "none";
    }
}

//Create submit modal and buttons