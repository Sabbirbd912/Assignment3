function gonoVote(array) {

    if(!Array.isArray(array)){
        return "Invalid"
    }

    let haCount = array.filter(vote => vote === "ha").length;

    let naCount = array.filter(vote => vote === "na").length;

    if (haCount > naCount){
        return true;
    }else if(haCount === naCount){
        return "equal"
    }else{
       return false;
    }
   
}

let votes = ["ha",  "na", "ha", "na"];
let result = gonoVote(votes);
console.log(result);
