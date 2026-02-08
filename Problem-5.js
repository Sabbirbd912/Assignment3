function analyzeText(str) {
    if(typeof str !== 'string'|| str ==="") {
        return "Invalid";
    }

    let stringCount = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            stringCount++;
        }
    }

    let words = str.split(' ');
    let bigWord = '';
    for (let word of words) {
        if (word.length > bigWord.length) {
            bigWord = word;
        }
    }

    return {
        longwords: bigWord,
        token: stringCount
    };
}

let text = "Hello Universe";
let analysis = analyzeText(text);
console.log(analysis);