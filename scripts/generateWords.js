const textArea = document.getElementById("textArea");
export {textArea};

const words = [
    'the', 'of', 'and', 'a', 'to', 'in', 'that', 'it', 'with', 'for',
    'was', 'on', 'is', 'as', 'by', 'at', 'an', 'be', 'this', 'which',
    'or', 'from', 'but', 'not', 'are', 'his', 'they', 'her', 'she', 'been',
    'had', 'their', 'there', 'can', 'all', 'we', 'if', 'more', 'when', 'will',
    'would', 'who', 'so', 'no', 'them', 'out', 'up', 'into', 'your', 'has',
    'some', 'do', 'could', 'my', 'than', 'other', 'its', 'about', 'also', 'then',
    'only', 'time', 'these', 'may', 'like', 'any', 'such', 'now', 'over', 'our',
    'even', 'most', 'me', 'after', 'made', 'many', 'before', 'must', 'through', 'back',
    'years', 'where', 'much', 'your', 'way', 'well', 'down', 'should', 'because', 'each'
  ];
for(let i = 0; i < 100; i++) {
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