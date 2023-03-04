import {textArea} from "../scripts/generateWords.js";
const userInp = document.getElementById("userInput");
const timer = document.getElementById("timer");
let gameRunning = false;
let seconds = 0;
function startGame() {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            if(userInp.value.length > 0) {
                resolve(true);
            }
        }, 0)
    })
}
startGame().then(status => {
    gameRunning = status;
    console.log(`Game started: ${gameRunning}`);
    if(gameRunning) {
        startCounter().then(seconds => {
            console.log(seconds);
            displayWPM(seconds);
        });
        textArea.children[0].style.background = "#dddddd";
        checkTyping();
    }

}).catch(err => {
    console.log(err);
})
//wrap in ded. class or different file
let totalKeyStrokes = 1;
function displayWPM(seconds) {
    //          5 chars = word ------ 60 seconds = minute
    let wpm = (totalCharacters() / 5)/(seconds/60);
    console.log(totalCharacters() + " " + totalKeyStrokes);
    document.getElementById("wpmDisplay").innerHTML = wpm.toFixed(2) + " WPM " + (totalCharacters() / totalKeyStrokes).toFixed(2)* 100 + "%";
}
function totalCharacters() {
    let sum = 0;
    for(let i = 0; i < textArea.children.length; i++) {
        sum += textArea.children[i].innerHTML.length;
    }
    return sum;
} 

function startCounter() {
    return new Promise((resolve, reject) => {
        let interval = setInterval(() => {
            if(gameRunning) {
            seconds += .01;
            timer.innerHTML = `${seconds.toFixed(2)}`;
            } else {
                resolve(seconds.toFixed(2));
                clearInterval(interval);
            }
        }, 10)
    })
}

let i = 0;
function checkTyping() {
    document.addEventListener('keydown', function(event) {
        if(gameRunning && event.code !== 'Space' && event.code !== "Backspace") {
            totalKeyStrokes++;
        }
        //same if statement but with a clause gaurd, hope i remember demorgans laws
        if (!(event.code === "Space" && userInp.value.trim() !== 0 && i < textArea.children.length && gameRunning)) {
            return;
        }
 
        compareUserInputToCurrentIndexSpanTagsInnerHTML();
        userInp.value = "";
    })
}
function compareUserInputToCurrentIndexSpanTagsInnerHTML() {
    let currentWord = textArea.children[i].innerHTML;
    if (userInp.value.trim() === textArea.children[i].innerHTML) {
        i++;
        console.log(i);
        if (i > 0 && i < textArea.children.length) {
            textArea.children[i].style.background = "#dddddd";
            textArea.children[i - 1].style.background = "";
            autoScroll(i);
        } else {
            gameRunning = false;
            textArea.children[textArea.children.length - 1].style.background = "";
            console.log("game ended");
            return;
        }
    } else {
        textArea.children[i].style.background = "red";
    }
}
function autoScroll(i) {
    const parentHeight = textArea.offsetHeight - 52;
    let currentElement = textArea.children[i];
    if(currentElement.offsetTop > parentHeight) {
        textArea.scrollTop = currentElement.offsetTop - parentHeight;
    }
}