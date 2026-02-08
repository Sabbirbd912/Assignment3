function finalScore(omr) {
    if(omr.right + omr.wrong + omr.skip !== 100) {
        return  "Invalid";
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



let test = finalScore({ right: 30, wrong: 30, skip: 40 });
console.log(test);

