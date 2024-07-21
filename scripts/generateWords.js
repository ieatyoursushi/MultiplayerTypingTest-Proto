const textArea = document.getElementById("textArea");
export {textArea};
<<<<<<< HEAD
let amountOfWords = 25;
=======
let amountOfWords = 20;
>>>>>>> 12932ffe4ac2323d53ffeec8a289f7e563d52f16
export {amountOfWords}
const wordFiles = document.querySelectorAll(".wordFile");
let urlPath = '/' + location.href.split("#")[1];

console.log(urlPath)
if(urlPath === "/undefined") {
    urlPath = "/top_100_eng";
    window.location = "/#top_100_eng";
} 


function fetchWordsDB(path) {
    return new Promise((resolve, reject) => {
        fetch('WordDatabases/' + path)
        .then(res => res.text()).then(data => {
            resolve(data);
        }).catch(err => reject(err));
    })
}
function displayWords(path) {
    fetchWordsDB(path).then(wordsFile => {
        let words = wordsFile.split("\n").map(line => line.replace('\r', ''));
        console.log(words);
        for (let i = 0; i < amountOfWords; i++) {
            let word = document.createElement("span");
            word.id = (i + 1);
            //word.classList.add("");
            word.className = "";
            word.innerText = words[randomRange(0, words.length - 1)];
            textArea.appendChild(word);
            textArea.appendChild(document.createTextNode(' '));
            //console.log(word.children[0]);
            if(word.children[0] !== "undefined") {
                //word.removeChild(word.children[0]);
            }
        }
<<<<<<< HEAD
 
=======
>>>>>>> 12932ffe4ac2323d53ffeec8a289f7e563d52f16
        function randomRange(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    })
}

wordFiles.forEach(wordFile => {
    let buttonPath = wordFile.getAttribute("data-path");
    let accessorPath = buttonPath.split("#")[0] + buttonPath.split("#")[1];
    if(urlPath === accessorPath) {
        displayWords(accessorPath + ".txt");
        
    }
    wordFile.addEventListener('click', function() {
        location.href = wordFile.getAttribute("data-path");
        window.location.reload();
    })
});
 

 