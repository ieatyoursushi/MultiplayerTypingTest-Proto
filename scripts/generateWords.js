const textArea = document.getElementById("textArea");
export {textArea};
 
function fetchWordsDB() {
    return new Promise((resolve, reject) => {
        fetch('WordDatabases/top_100_eng.txt')
        .then(res => res.text()).then(data => {
            resolve(data);
        })
    })
}
fetchWordsDB().then(wordsFile => {
    let words = wordsFile.split("\n").map(line => line.replace('\r', ''));
    console.log(words);
    for(let i = 0; i < 15; i++) {
        let word = document.createElement("span");
        word.id = (i + 1);
        //word.classList.add("");
        word.className="";
        word.innerText = words[randomRange(0, words.length-1)];
        textArea.appendChild(word);
        textArea.appendChild(document.createTextNode(' '));
    }
    function randomRange(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
})

 