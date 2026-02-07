// https://docs.google.com/document/d/1-2-Lhf5La5w4PSMMCF3UW0MULlAQa2AT6HyUTyU4CEc/edit?usp=drive_link 

// https://phi-lab.vercel.app/

/*function signature/sample */


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


let result = newPrice(1500, -20);
console.log(result);










// let newPrice = currentPrice - (currentPrice * discount / 100);
// return newPrice;