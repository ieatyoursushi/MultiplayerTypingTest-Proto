const textArea = document.getElementById("textArea");
export {textArea};
let amountOfWords = 50;
export {amountOfWords}
const wordFiles = document.querySelectorAll(".wordFile");
let urlPath = '/' + location.href.split("#")[1];
function fetchWordsDB(path) {
    return new Promise((resolve, reject) => {
        fetch('WordDatabases/' + path)
        .then(res => res.text()).then(data => {
            resolve(data);
        })
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
        }

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
 

 