const textArea = document.getElementById("textArea");
export {textArea};
let amountOfWords = 50;
export {amountOfWords}
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
console.log(urlPath);
console.log(urlPath === '/#top100eng')
if(urlPath === "/top100eng") {
    displayWords('English/top_100.txt');
} else if (urlPath === "/top1000eng") {
    displayWords('English/top_1000.txt');
} else if (urlPath === "/top_100esp") {
    displayWords("Spanish/top_100.txt");
}
document.getElementById("1000_eng").addEventListener('click', function() {
    location.href = '/#top1000eng';
    window.location.reload();
})
document.getElementById("100_eng").addEventListener('click', function() {
    location.href = '/#top100eng';
    window.location.reload();
})
document.getElementById("100_esp").addEventListener('click', function() {
    location.href= '/#top_100esp';
    window.location.reload();
})
 

 