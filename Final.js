//Problem no:1

function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid";
    }
    else if (currentPrice < 0 || discount < 0) {
        return "Invalid";
    } else {
        let clue = (currentPrice * discount) / 100
        let price = currentPrice - clue;
        let final = price.toFixed(3);
        return final;
    }

}



// Problem no:2

function validOtp(otp) {
    if (typeof otp !== "string") {
        return "Invalid";
    } else if (otp.length >= 8 && otp.startsWith("ph-")) {
        return true;
    } else { return false; }
}


// Problem no:3

function finalScore(omr) {
    if (omr.right + omr.wrong + omr.skip !== 100) {
        return "Invalid";
    }
    let total = 0;

    for (let item in omr) {
        let num = omr[item];
        if (item === "right") {
            total += num;
        }
        if (item === "wrong") {
            total -= num / 2;
        }

        if (item === "skip") {
            total += num * 0;
        }
    }

    let score = Math.round(total);
    return score;
}


// Problem no:4

function gonoVote(array) {

    if (!Array.isArray(array)) {
        return "Invalid"
    }

    let haCount = array.filter(vote => vote === "ha").length;

    let naCount = array.filter(vote => vote === "na").length;

    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal"
    } else {
        return false;
    }

}


// Problem no:5

function analyzeText(str) {
    if (typeof str !== 'string' || str === "") {
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