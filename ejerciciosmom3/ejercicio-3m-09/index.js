let phrase = "vida hay solo una";
let numword = 2; 
let count = 0;
let start = 0;
let end = 0;
let space = ' ';


for (let i = 0; i < phrase.length; i++) {
   
    if (phrase[i] === space) {
        count++;
    }
    

    if (count === numword - 1) {
        start = i + 1; 
    }
    
    if (count === numword) {
        end = i; 
        break; 
}


if (count === numword) {
   
    if (end === 0) {
        alert(phrase.substring(start));
    } else {
        alert(phrase.substring(start, end));
    }
} else {
    alert(phrase);
}}
