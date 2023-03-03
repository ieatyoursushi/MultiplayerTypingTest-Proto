import {textArea} from "../scripts/generateWords.js";
const userInp = document.getElementById("userInput");
let gameRunning = false;
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
        textArea.children[0].style.background = "#dddddd"
        checkTyping();
    }

}).catch(err => {
    console.log(err);
})

let i = 0;
function checkTyping() {
    document.addEventListener('keydown', function(event) {
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
    console.log("space bar clicked");
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
    const parentHeight = textArea.offsetHeight;
    let currentElement = textArea.children[i];
    if(currentElement.offsetTop > parentHeight) {
        textArea.scrollTop = currentElement.offsetTop - parentHeight;
    }
}