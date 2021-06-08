// Exercise 1
function reduceFraction(num, den) {

    // check additional input
    if (den == 0){
        return "0 cannot be used as a divisor"
    }
   
    // return highest common factor
    function hcf(x, y) {
        let smaller;
        if(x > y){
            smaller = y;
        }else {
            smaller = x //make sure the bigger number is dividened
        }
        for(i = 0; i < smaller + 1; i++){
            if ((x % i === 0)&&(y % i === 0)){
                Num = i;
            }
        }
        return Num;
    }

    numHcf = hcf(num, den);
    return [num / numHcf, den / numHcf];
}


// Exercise 2
function isMagicDate(day, month, year) {
    lastTwoDigits = year.toString();
    lastTwoDigits = lastTwoDigits.substr(lastTwoDigits.length-2,2); //get last two digits
    lastTwoDigits = parseInt(lastTwoDigits);
    data = day*month;
    
    return data==lastTwoDigits;
}


// Exercise 3
function sublist(l) {
    let sub_list= []; // store result
    
    for(i = 0; i < l.length; i++) {
        for (j = 0; j < l.length; j++) {
            //console.log(l.slice(j,l.length-i));
            if(sub_list.indexOf(l.slice(j,l.length-i)) === -1 && l.slice(j,l.length-i).length !== 0){
                sub_list.push(l.slice(j,l.length-i));
            }
        }
    }
    sub_list.push([]);
    return sub_list;
}


// Exercise 4
function pigLatin(word) {
    const vocalic = "aeiou";
    let targetStr = "";
    let subStr = "";
   
    // check if the last character is letter
    let punctuation = "";
    let p = /[a-zA-Z]/;
    let b = p.test("A");
    
    if(p.test(word[word.length-1]) == false){
        punctuation = word[word.length-1];
        word = word.substr(0,word.length-1);
    }
    // check if the first character is vowel
    if(vocalic.indexOf(word[0].toLowerCase()) !== -1){
        targetStr = word + "way";
    }else {
        let num = 0;
        for(i = 0; i <word.length; i++){
            if(vocalic.indexOf(word[i]) === -1){
                subStr += word[i].toLowerCase();
                num += 1;
            }else {
                targetStr += word.substr(num);
                break;
            }
        }

        targetStr += subStr + "ay";
    }
    // check if the first letter is uppercase
    if(word[0] == word[0].toLowerCase()){
        return targetStr + punctuation;
    }else {
        targetStr = targetStr[0].toLocaleUpperCase() + targetStr.substr(1)
        return targetStr + punctuation;
    }

}

// Exercise 5
function morseCode(message) {
    
    const morseList = {
        "0":"-----", "1":".----", "2":"..---", "3":"...--", "4":"....-", "5":".....", "6":"-....", "7":"--...", "8":"---..", "9":"----.", "?":"..--..",
        "a":".-", "b":"-...", "c":"-.-.", "d":"-..", "e":".", "f":"..-.", "g":"--.", "h":"....", "i":"..", "j":".---", "k":"-.-", "l":".-..", "m":"--",
        "n":"-.", "o":"---", "p":".--.", "q":"--.-", "r":".-.", "s":"...", "t":"-", "u":"..-", "v":"...-", "w":".--", "x":"-..-", "y":"-.--", "z":"--.."};
    
    const isalpha = /[a-zA-Z]/;
    const isanum = /[0-9]/;
    let morseCodeStr = ""; 
    
    for(i = 0; i < message.length; i++){
        if(isalpha.test(message[i].toLowerCase()) || isanum.test(message[i].toLowerCase())){
            morseCodeStr += morseList[message[i].toLowerCase()] + " "
        }
    }
    return morseCodeStr.substring(0,morseCodeStr.length-1)
}


// Exercise 6
function int2Text(num) {
    
    //check additional inputs
    if(num < 0 || num > 999){
        return None
    }
    
    let numList = [(num - num%100)/100, (num%100-num%10)/10, num % 10]//get three digits
    
    const numberConstant = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven",
        8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen",
        14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"}

    const numberConstant_below = {0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven",
        8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen",
        14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen",
        19: "nineteen"}

    const inHundredConstant = {1: "", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy",
        8: "eighty",
        9: "ninety", 0: ""}
    const HundredConstant = {
        0: "", 1: "one hundred", 2: "two hundred", 3: "three hundred", 4: "fort hundred", 5: "five hundred",
        6: "six hundred", 7: "seven hundred",
        8: "eight hundred", 9: "nine hundred"
    }
    
    if((numList[0] == 0 && numList[1] == 0) || (numList[1] * 10 + numList[0] < 20 && numList[0] == 0)){
        return numberConstant[numList[1] * 10 + numList[2]];
    }
    else {
        if(numList[1] * 10 < 20 && numList[1] * 10 + numList[2] != 0) {
            return HundredConstant[numList[0]] + " " + numberConstant_below[numList[1] * 10 + numList[2]]
        }else if(numList[1] * 10 + numList[2] == 0){
            return HundredConstant[numList[0]]
        } else {
            return HundredConstant[numList[0]] + " " + inHundredConstant[numList[1]] + " " + numberConstant_below[numList[2]]
        }
    }
    
}


// Exercise 7
function missingComment(filename) {
    const fs = require('fs');
    let withComment = [];
    let missingCommentList = [];
    const data = fs.readFileSync(filename).toString();
    let test = data.split(/\r?\n/);

    for(i = 0; i <test.length; i++){
        if (test[i].indexOf("function")!== -1){
            withComment.push(test[i-1]+test[i]);
        }
    }
    for(i = 0; i < withComment.length; i++){
        if(withComment[i].indexOf("//") == -1){
            missingCommentList.push(withComment[i].split(" ")[1].split("(")[0])
        }
    }
    return missingCommentList;
}



// Exercise 8
function consistentLineLength(filename, length) {
    const fs = require('fs');
    const text = fs.readFileSync(filename).toString();
    const data = text.split(/\r?\n/);
    let seq = [];
    
    for(i = 0;i <data.length; i++){
        for(k = 0; k < data[i].split(" ").length; k++){
            seq.push(data[i].split(" ")[k])
        }
    }
    
    let target=[];//store result
    let limitStr = "";
    for(i = 0; i < seq.length-1; i++){
        if((limitStr + seq[i]).length > length){
            target.push(limitStr.substring(0,limitStr.length-1));
            limitStr = "";
        }
        limitStr += seq[i]+ " "
    }
    target.push(limitStr.substring(0,limitStr.length-1))
    return target;
}


// Exercise 9
function knight(start, end, moves) {
   
    //get direction
    function get(distanceX, distanceY) {
        if(distanceX !== 0 && distanceY !== 0){
            return [distanceX/(distanceX**2)**0.5,distanceY/(distanceY**2)**0.5]
        }else {
            return [0,0]
        }
    }
    let result = false;
    if(start === end){
        return true
    }
    if(moves!==0){
        let distanceX = (end[0].charCodeAt()-"a".charCodeAt())-(start.charCodeAt()-"a".charCodeAt());
        let distanceY = (end[1]-start[1]);
        let test = get(distanceX,distanceY);
        
        if(test[0] === 0||test[1] === 0){
            return result
        }
        let newStar1 = String.fromCharCode(start[0].charCodeAt()+2*test[0])+(parseInt(start[1])+1*test[1]);
        let newStar2 = String.fromCharCode(start[0].charCodeAt()+1*test[0])+(parseInt(start[1])+2*test[1]);
        
        result = knight(newStar1,end,moves-1);
        if(result){
            return result
        }else {
            result = knight(newStar2,end,moves-1)
        }
    }else {
        if(start === end){
            return true
        }else {
            return false
        }
    }
    return result
}

// Exercise 10
function warOfSpecies(environment) {
    
    return None
}


module.exports = {
    reduceFraction: reduceFraction,
    isMagicDate: isMagicDate,
    sublist: sublist,
    pigLatin: pigLatin,
    morseCode: morseCode,
    int2Text: int2Text,
    missingComment: missingComment,
    consistentLineLength: consistentLineLength,
    knight: knight,
    warOfSpecies: warOfSpecies
}
